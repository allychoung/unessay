import React from "react";
import logo from "../../img/unessay.png";
import { Link } from "react-router-dom";

const HomeScreen = () => {
    return(
        <>
            <div className={'row no-gutters m-0'}>

            <div className="col-4"></div>
            <div className="col-4">
                <div className="mt-2 text-center">
                    <img src={logo} alt="home icon" className="img-fluid w-50"/>
                    <p className="mb-0">by Ally Choung</p>

                    <p className="mb-0">Technologies of Text (ENGL 3340), Fall 2022</p>
                    <p className="mb-0">Dr. Boeckeler</p>
                </div>
                <hr/>

                <div className="text-center">
                <p className="mb-0"><Link to={"/poem1"}>I. Plain Text</Link></p>
                <p className="mb-0"><Link to={"/poem2"}>II. Banners</Link></p>
                <p className="mb-0"><Link to={"/poem3"}>III. Footnotes</Link></p>
                <p className="mb-0"><Link to={"/poem4"}>IV. Multiplicity</Link></p>
                <p className="mb-0"><Link to={"/poem5"}>V. Advertising</Link></p>
                {/* <p className="mb-0"><Link to={"/poem6"}>VI. Drag and Drop</Link></p> */}

                </div>
                <hr/>
                <div className="text-center">
                {/* <p className="mb-0"><Link to={"/workscited"}>Works Cited</Link></p>
                <p className="mb-0"><Link to={"/premise"}>About the Project</Link></p> */}
                </div>

            
            </div>
            <div className="col-4"></div>
            </div>
        </>

    )
    
}

export default HomeScreen;
