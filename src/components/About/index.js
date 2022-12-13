import React from "react";
import Nav from "../Nav";

const About = () => {
    return(
        <>
            <div className={'row no-gutters m-0'}>

            <div className="col-3"></div>
            <div className="col-6 mt-3">
            <Nav tabAt="about"></Nav>

                <h3>A few words about the project</h3>
                <p></p>
                
            
            </div>
            <div className="col-3"></div>
            </div>
        </>

    )
    
}

export default About;
