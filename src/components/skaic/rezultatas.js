import Progressbar from "./progressbar";
import progressbar from "./progressbar";

function Rezultatas(props){

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