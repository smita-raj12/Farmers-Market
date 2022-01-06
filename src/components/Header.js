import React from "react";

function Header(){
    let header ={
        textAlign: "center",
        color: 'Red',
        paddingTop: 20
    }   
    return (
        <div style={header}>
        <h1>Avery's Organics</h1>
        </div>
    );
}

export default Header;