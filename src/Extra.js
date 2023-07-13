function Extra() {
  return (
    <div className="extra-body-div">
      <div className="extra-line"></div>

      <div className="extra-stuff-div">
        <p className="palette-text">color palette / </p>
        <br />

        <div className="outer">
          <div className="inner"></div>
        </div>
        <div className="outer">
          <div className="inner" id="pink"></div>
        </div>
        <div className="outer">
          <div className="inner" id="yellow"></div>
        </div>
        <div className="outer">
          <div className="inner" id="grey"></div>
        </div>
        <div className="outer" id="outer-white">
          <div className="inner" id="white"></div>
        </div>
      </div>

      <div className="fonts-div">
        <p className="fonts-div-text">
          fonts used /<br /> <span id="q-font">Questial:</span>{" "}
          <span id="fonts-span">AaBbCc</span> <br /> Roboto Slab:{" "}
          <span id="fonts-span-2">AaBbCc</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Extra;
