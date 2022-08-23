import React from 'react';
import { Navbar } from "@blueprintjs/core";

export default function Header() {
    return (
        <>
        
        <Navbar className="header">
        <br></br>
        <Navbar.Group top-margin={10 }>
            <Navbar.Heading ><h2>home</h2></Navbar.Heading>
            <Navbar.Divider />
        </Navbar.Group>
    </Navbar>
    </>
    );
  }