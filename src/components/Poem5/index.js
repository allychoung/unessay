import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/small.png";

const Poem5 = () => {
    return(
        <>
            <div className={'row no-gutters m-0'}>

            <div className="col-3">
            <a className="navbar-brand" href="/"><img src={logo} alt="thing" className="img-fluid w-50"/></a>

            </div>
            <div className="col-6 mt-3">
            <div>

                <h3 className="text-center">V. Advertising</h3>
                <div id="p5">
                    <div className="ad ad1">
                        <p className="ad-text animate__animated animate__flash animate__infinite	">CLICK HERE</p>
                    </div>
                    <div className="ad animate__animated animate__bounce animate__infinite	">

                        <p className="ad-text animate__animated animate__pulse animate__infinite	">LOOK AT ME!</p>
                    </div>
                    <div className="actual-content">
                        <p>I am trying to get some information relevant to my query but these ads keep popping up all over the screen and suddenly I see a link to another article that piques my interest and I lose track of what I originally was looking for.</p>
                    </div>

                </div>
                <Link to={"/"} className="text-right"><p className="text-right">Back to home</p> </Link>

            </div>
            
            </div>
            <div className="col-3"></div>
            </div>
        </>

    )
    
}

export default Poem5;
