import Progressbar from "./progressbar";
import progressbar from "./progressbar";

function Rezultatas(props){
    // const progressCss={
    //     width: props.rezultatas+"%",
    //     backgroundColor:'red'
    // };
    // let cssClass="progress-bar";
    // if (props.rezultatas<80){
    //     cssClass+="  bg-success";
    // }
    // if (props.rezultatas>=80 && props.rezultatas<100){
    //     cssClass+="  bg-warning";
    // }
    // if (props.rezultatas>=100 ){
    //     cssClass+="  bg-danger";
    // }

    return (
        <div className="card">
            <div className="card-header">
                Rezultatai
            </div>
            <div className="card-body">
               Užpildyta { props.rezultatas } % rezervuaro!
                <div>
                 <Progressbar rezultatas={props.rezultatas}></Progressbar>

                </div>

            </div>
        </div>
    );
}

export default Rezultatas;