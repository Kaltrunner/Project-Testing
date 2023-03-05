import Clock from "./Clock";

function Extra() {
    return (
        <div className="extra-body-div" >
            <div className="txt-div" >
            {/* <p class="marquee" ><span>AGREENSQUAREPROJECT.</span></p> */}
            <p class="marquee" ><span><Clock /></span></p>
            <p class="marquee marquee2" ><span><Clock /></span></p>
            <p class="marquee marquee3" ><span><Clock /></span></p>
            <p class="marquee marquee4" ><span><Clock /></span></p>
                
            </div>

            <div className="extra-stuff-div" >
            <p className="palette-text" >color palette / </p><br/>
                
                <div className="outer">
                    <div className="inner"></div>
                </div>
                <div className="outer">
                    <div className="inner" id="pink" ></div>
                </div>
                <div className="outer">
                    <div className="inner" id="yellow" ></div>
                </div>
                <div className="outer">
                    <div className="inner" id="grey" ></div>
                </div>
                <div className="outer" id="outer-white" >
                    <div className="inner" id="white" ></div>
                </div>
            </div>

        </div>
    )
}

export default Extra