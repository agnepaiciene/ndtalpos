import {useState} from "react";
import Ivedimas from "./skaic/ivedimas";
import Rezultatas from "./skaic/rezultatas";



function Skaiciuokle() {
  
    const [skData, setSkData]=useState({
        l:0,
        g:0,
        h:0
    });

const [rezultatas, setRezultatas] = useState(0);


const updateData=(data)=>{
    console.log("Duomenys skaiciuokle");
     setSkData(data);
     setRezultatas((data.h * data.g) *100 / data.l);
     

};
console.log(setSkData);
console.log(setRezultatas)


        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <Ivedimas onUpdateData={updateData}/>
                    </div>

                    <div className="col-md-6 mt-3">
                        <Rezultatas  rezultatas={rezultatas}/>
                    </div>
                </div>
            </div>


        );
}
export default Skaiciuokle;