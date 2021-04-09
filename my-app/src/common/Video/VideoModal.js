import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import './styles.css';



export class VideoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      videoId: this.props.videoId,
      imageId: this.props.imageId,
      msgId : this.props.msg
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    var imageId=this.state.imageId;
    console.log("Imageid:",imageId);
    var msgId = this.state.msgId;
    console.log("msgId:",msgId);
    return (
       
        <div class="container_b">
        <img src={imageId} alt="src" width="400" height="250"   />
        {/* <button
          onClick= {this.openModal}
          style={{
            // border: "none",
            // backgroundColor: 'rgba(52, 52, 52, 0.1)',
            // //backgroundColor: "#ff8d8d",
            // boxShadow: "0 0 4px 2px rgba(0,0,0,.2)",
            // cursor: "pointer",
            // height: 40,
            // outline: "none",
            // borderRadius: "100%",
            // width: 80
            cursor: "pointer",
            border: "1px solid #3498db",
            backgroundColor: "transparent",
            height: "50px",
            width: "200px",
            color: "#3498db",
            fontsize: "1.5em",
            boxshadow: "0 6px 6px rgba(0, 0, 0, 0.6)"
            
          }}
        ></button> */}
         
        <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={this.state.videoId}
            playIcon={<button>Play</button>}
            onClose={() => this.setState({ isOpen: false })}
          />
          <button class="btn1" onClick={this.openModal} >play</button>
          {/* <button class='play' onClick={this.openModal} ></button> */}
         
        </div>
     
    );
  }
}

export default VideoModal;