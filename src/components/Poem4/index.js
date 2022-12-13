import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/small.png";
const Poem4 = () => {
    return(
        <>
            <div className={'row no-gutters m-0'}>

            <div className="col-3">
            <a className="navbar-brand" href="/"><img src={logo} alt="thing" className="img-fluid w-50"/></a>

            </div>
            <div className="col-6 mt-3">
            <div className="text-center">

                <h3>IV. Multiplicity</h3>
                <div>
                    <span className="poem-row" id="r1-1"></span><span className="poem-row" id="r1-2"></span><br/>
                    <span className="poem-row" id="r2-1"></span><span className="poem-row" id="r2-2"></span><span className="poem-row" id="r2-3"></span><br/>
                    <span className="poem-row" id="r3-1"></span><span className="poem-row" id="r3-2"></span><br/>
                    <span className="poem-row" id="r4-1"></span><span className="poem-row" id="r4-2"></span><span className="poem-row" id="r4-3"></span><br/>

                    <span className="poem-row" id="r2"></span>

                    <span className="poem-row" id="r3"></span>
                    <span className="poem-row" id="r4"></span>

                </div>
                <Link to={"/poem5"} className="text-right"><p className="text-right">Next exercise</p> </Link>

            </div>
            
            </div>
            <div className="col-3"></div>
            </div>
        </>

    )
    
}

export default Poem4;
