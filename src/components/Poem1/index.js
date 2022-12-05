import React from "react";

const Poem1 = () => {
    return(
        <>
            <div className={'row no-gutters m-0'}>

            <div className="col-3"></div>
            <div className="col-6">
                <div className="mt-2">
                    <h1>Unessay</h1>
                    <h5>Ally Choung, Fall 2022</h5>
                </div>
                <hr/>
            <div>
                <h3>I. Plain Text</h3>
                <p>This is static, plain text.</p>
            </div>
            <hr/>
            <div>
                <h3>II. Banners</h3>
                    <section>
                        <div>
                            <h2>What if we were to enforce the speed and pace at which everyone read? Is this a solution to the issue of a lack of close reading in the world of digital texts and endless streams of information? </h2>
                        </div>
                        {/* <div>
                            <h2>here is 2nd text</h2>
                        </div> */}
                    </section>
            </div>
            <hr/>
            <div>
                <h3>III. Footnotes</h3>
                <div>
                    <h6>* Hover over highlighted words to see additional information.</h6>
                    <h6>** This was taken from an <a href="https://www.npr.org/2022/12/05/1140671828/a-fan-is-reportedly-buying-the-goonies-house-in-oregon-which-was-listed-for-1-7m">NPR article</a>.</h6>

                    <p> 
                    <span className="footnote" id="note-astoria">ASTORIA, Ore.</span> — The listing agent for the Victorian home featured in the <span className="footnote" id="note-goonies">The Goonies</span> film in <span className="footnote" id="note-astoria">Astoria, Oregon</span>, said this week the likely new owner is a fan of the classic coming-of-age movie about friendships and <span className="footnote" id="note-treasure">treasure hunting</span>, and he promises to preserve and protect the landmark. The <span className="footnote" id="note-1896">1896</span> home with sweeping views of the Columbia River flowing into the Pacific Ocean was listed in November with an asking price of nearly $<span className="footnote" id="note-million">1.7 million</span>. <span className="footnote" id="note-jordan">Jordan</span> Miller of John L. Scott Real Estate said the sale is expected to close in mid January, The Oregonian/OregonLive reported. The new owner, a <span className="footnote" id="note-described">self-described</span> serial entrepreneur, will make his name known at that time, Miller said.

                    </p>

                </div>
            </div>
            <hr/>
            <div>
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
            </div>
            <hr/>
            <div>
                <h3>V. Advertising</h3>
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
            </div>
            <hr/>  

            <div>
                <h3>VI. Drag and Drop</h3>
                <div>
                    <p>Didn't implement this yet.</p>
                </div>
            </div>
            <hr/>         
            
            </div>
            <div className="col-3"></div>
            </div>
        </>

    )
    
}

export default Poem1;
