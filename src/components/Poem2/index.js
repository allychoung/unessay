import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/small.png";
const Poem2 = () => {
    return(
        <>
        
            <div className={'row no-gutters m-0'}>

            <div className="col-3">
            <a className="navbar-brand" href="/"><img src={logo} alt="thing" className="img-fluid w-50"/></a>

            </div>
            <div className="col-6 mt-3">
                {/* <Nav tabAt="poem2"></Nav> */}

                <h3 className="text-center">II. Banners</h3>
                    <section>
                        <div>
                            <h2>What if we were to enforce the speed and pace at which everyone read? Is this a solution to the issue of a lack of close reading in the world of digital texts and endless streams of information? </h2>
                        </div>
                        {/* <div>
                            <h2>here is 2nd text</h2>
                        </div> */}
                    </section>
                    <div className="d-flex justify-content-between">
                        <Link to={"/poem1"} className="text-right"><span className="text-left">Previous exercise</span> </Link>
                        <Link to={"/poem3"} className="text-right"><span className="text-right">Next exercise</span> </Link>
                    </div>

            </div>
            <div className="col-3"></div>
            </div>
        </>
    );
}

export default Poem2;