import React from "react";
import logo from "../../img/small.png";
import { Link } from "react-router-dom";
const Poem1 = () => {
    return(
        <>
            <div className={'row no-gutters m-0'}>

            <div className="col-3">
            <a className="navbar-brand" href="/"><img src={logo} alt="thing" className="img-fluid w-50"/></a>
            
            </div>
            <div className="col-6 mt-3">
            <div className="h-100">
                <h3 className="text-center">I. Plain Text</h3>
                <hr/>
                <p>This is static, plain text.</p>
                <Link to={"/poem2"} className="text-right"><p className="text-right">Next exercise</p> </Link>
            </div>      
            
            </div>
            <div className="col-3"></div>
            </div>
        </>

    )
    
}

export default Poem1;
