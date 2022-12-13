import React from "react";
import logo from "../../img/small.png";
const Nav = (tabAt) => {
    // console.log(tabAt);
    return(
        <>
        
            <nav className="mt-3 mb-3 navbar navbar-light bg-light">

                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="navbar-brand" href="/"><img src={logo} alt="thing" className="img-fluid w-50"/></a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link disabled"} href="/">Exercises</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link " + (tabAt.tabAt === 'poem1' ? 'active' : '') } href="/poem1">I</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link " + (tabAt.tabAt === 'poem2' ? 'active' : '') } href="/poem2">II</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link " + (tabAt.tabAt === 'poem3' ? 'active' : '') } href="/poem3">III</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link " + (tabAt.tabAt === 'poem4' ? 'active' : '') } href="/poem4">IV</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link " + (tabAt.tabAt === 'poem5' ? 'active' : '') } href="/poem5">V</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link " + (tabAt.tabAt === 'poem6' ? 'active' : '') } href="/poem6">VI</a>
                </li>

                </ul>
            </nav>


        </>

    )
    
}

export default Nav;
