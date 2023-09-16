import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Nav = styled(AppBar)`
background-color: purple
`;
const Tabs = styled(NavLink)`
color: inherit;
text-decoration: none;
font-size: 20px;
margin-right: 20px;
`


const NavBar = () => {
  return (
    <>
        <Nav  position= "static ">
            <Toolbar>
                <Tabs to='/'>Code For Interview</Tabs>
                <Tabs to='all'>AllUsers</Tabs>
                <Tabs to='/add'>AddUsers</Tabs>
            </Toolbar>
        </Nav>
    </>
  );
}

export default NavBar;
