

function Progressbar(props) {
    const progressCss={
        width: props.rezultatas+"%",
        backgroundColor:'red'
    };
    let cssClass="progress-bar";
    if (props.rezultatas<80){
        cssClass+="  bg-success";
    }
    if (props.rezultatas>=80 && props.rezultatas<100){
        cssClass+="  bg-warning";
    }
    if (props.rezultatas>=100 ){
        cssClass+="  bg-danger";
    }
    return(
        <div className="progress">
            <div className={cssClass} role="progressbar" style={ progressCss } ></div>
        </div>

    )


}

export default Progressbar;