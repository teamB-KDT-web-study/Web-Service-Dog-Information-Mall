function SlickPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        left: "5vw",
        zIndex: "2"
      }}
      onClick={onClick}
    />
  );
}

export default SlickPrevArrow;
