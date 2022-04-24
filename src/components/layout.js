import React from "react"
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, footerBoxes }) {
    return (
        <div>
            <Header/>
            {children}
            <Footer FooterBoxes={footerBoxes}/>
        </div>
    )
}
