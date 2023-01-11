import {useState} from "react";


function Ivedimas(props){
    const [skData, setSkData]=useState({
        l:0,
        g:0,
        h:0
    });

    const skaiciuotiHandler = (event) => {
        event.preventDefault();
        props.onUpdateData(skData);
        setSkData({
            l:0,
            g:0,
            h:0
        })
       }
        const changeLHandler =(event)=> {
            setSkData({
                ...skData,
                l:event.target.value
            });
        }
        console.log(skData.l);

        const changeGHandler=(event)=> {
            setSkData({
                ...skData,
                g:event.target.value
            });
        }
        console.log(skData.g);

        const changeHHandler=(event)=> {
            setSkData({
                ...skData,
                h:event.target.value
            });
        }
        console.log(skData.h);


        return(
            <div className="card mt-3">
                <div className="card-header">
                    Rezervuaro prisipildymo skaičiuoklė
                </div>

                <div className="card-body">
                    <form onSubmit={skaiciuotiHandler}>

                        <div className="mb-2">
                            <label className="form-label">
                                Įveskite rezervuaro talpą
                                <br></br>
                                Talpa litrais (l)
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={changeLHandler}
                            value={skData.l}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">
                                Įrašykite rezervuaro prisipildymo greitį(l/h)
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={changeGHandler}
                            value={skData.g}
                            />
                        </div>

                        <div className="mb-2">
                            <label className="form-label">
                                Įrašykite rezervuaro prisipildymo laiką (h)
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={changeHHandler}
                                value={skData.h}/>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success">
                            Skaiciuoti
                        </button>
                    </form>
                </div>
            </div>);
};

export default Ivedimas;