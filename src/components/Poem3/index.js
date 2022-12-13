import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/small.png";

const Poem3 = () => {
    return(
        <>
            <div className={'row no-gutters m-0'}>

            <div className="col-3">
            <a className="navbar-brand" href="/"><img src={logo} alt="thing" className="img-fluid w-50"/></a>

            </div>
            <div className="col-6 mt-3">

            <div>
                <h3 className="text-center">III. Footnotes**</h3>
                <div>

                    <p> 
                    <span className="footnote" id="note-astoria">ASTORIA, Ore.</span> — The listing agent for the Victorian home featured in the <span className="footnote" id="note-goonies">The Goonies</span> film in <span className="footnote" id="note-astoria">Astoria, Oregon</span>, said this week the likely new owner is a fan of the classic <a href="https://www.google.com/search?q=coming-of-age+movie+about+friendships&rlz=1C1VDKB_enUS996US997&oq=coming-of-age+movie+about+friendships&aqs=chrome..69i57j0i22i30l2j0i390l3.139j0j7&sourceid=chrome&ie=UTF-8">coming-of-age movie about friendships</a> and <span className="footnote" id="note-treasure">treasure hunting</span>, and he promises to preserve and protect the landmark. The <span className="footnote" id="note-1896">1896</span> home with sweeping views of the Columbia River flowing into the Pacific Ocean was listed in <a href="https://www.google.com/search?q=November&rlz=1C1VDKB_enUS996US997&oq=November&aqs=chrome..69i57j0i433i512j0i512l3j0i433i512j0i131i433i512j0i131i433j0i512l2.2323j0j9&sourceid=chrome&ie=UTF-8">November</a> with an asking price of nearly $<span className="footnote" id="note-million">1.7 million</span>. <span className="footnote" id="note-jordan">Jordan</span> Miller of John L. Scott Real Estate said the sale is expected to close in mid January, The Oregonian/OregonLive reported. The new owner, a <span className="footnote" id="note-described">self-described</span> serial entrepreneur, will make his name known at that time, Miller said.

                    </p>
                    <h6>* Hover over highlighted words to see additional information.</h6>
                    <h6>** This was taken from an <a href="https://www.npr.org/2022/12/05/1140671828/a-fan-is-reportedly-buying-the-goonies-house-in-oregon-which-was-listed-for-1-7m">NPR article</a>.</h6>


                </div>
                <div className="d-flex justify-content-between">
                        <Link to={"/poem2"} className="text-right"><span className="text-left">Previous exercise</span> </Link>
                        <Link to={"/poem4"} className="text-right"><span className="text-right">Next exercise</span> </Link>
                    </div>
            </div>
            
            </div>
            <div className="col-3"></div>
            </div>
        </>

    )
    
}

export default Poem3;
