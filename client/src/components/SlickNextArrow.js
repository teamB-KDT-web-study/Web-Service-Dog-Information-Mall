function SlickNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        right: "5vw",
        zIndex: "2"

      }}
      onClick={onClick}
    />
  );
}

export default SlickNextArrow;
