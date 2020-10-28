import React from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/img/logo_hedonai.png";
import User from "../assets/img/user.jpg";

function Layout(propos) {
    return (
        <React.Fragment className="wrapper">
            <div className="nav fvStar fv-aling-center">
                <div className="logo">
                    <img src={Logo} alt="logo-hedonai" />
                </div>
                <div className="user fhCenter fh-align-center" >
                    <img src={User} alt="user-profile" />
                    <span>Rafael Fernandez</span>
                </div>
                <div className="links fvStar fv-aling-center">
                    <Link to="/new-venta">
                        Registrar venta
                    </Link>
                    <Link to="/ventas">
                        Ventas
                    </Link>
                </div>
            </div>
            <div className="contenido content-wrapper container">{propos.children}</div>
        </React.Fragment>
    );
}
export default Layout;
