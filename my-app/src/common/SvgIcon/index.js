const SvgIcon = ({ src, width, height }) => (
  <a href="/">
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height}  />
  </a>
);

export default SvgIcon;
