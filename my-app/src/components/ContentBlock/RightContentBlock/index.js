import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";

import * as S from "./styles";
//import { FormContext } from "antd/lib/form/context";

const RightBlock = ({ title, subtitle, content, button, icon, t, id }) => {
  // const scrollTo = (id) => {
  //   const element = document.getElementById(id);
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  return (
    <S.RightBlockContainer>
      
      <Row type="flex" justify="space-between" align="left" id={id}>
        <Col lg={11} md={5} sm={11} xs={12}>
          <Slide left>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              {/* <p style={{fontFamily:"cursive"},{fontSize:"8"}, {color:"blue"}}>{t(subtitle)}</p> */}
              <p>{t(subtitle)}</p>
              <S.Content>{t(content)}</S.Content>
              <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        width="true"
                       // onClick={() => scrollTo("about")}
                       onClick={() => window.open("/contactus")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            />
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
