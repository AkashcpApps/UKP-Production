import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

import logo from '../images/karnataka-govt-logo.png';

const Nav = styled.div`
  background: #043e69;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
  
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
  
const SidebarNav = styled.nav`
  background: #043e69;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
  
const SidebarWrap = styled.div`
  width: 100%;
  overflow: scroll;
`;

const ProjLogo = styled.div`
    
`

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
                  </NavIcon>
                  <img src={logo} style={{
                      marginLeft: '200px', width: '75px', height: '75px',
                      float: 'right', backgroundColor: '#fafbfc'
                  }} />
                  <div style={{ width: '100%', paddingTop:'8px' }}>
          <h1
            style={{ textAlign: "left", 
                     marginLeft: "0px", 
                          color: "#fafbfc"
                      }}
                  >
                Government of Karnataka <br />
                <h4>Bagalkot District Upper Krishna Project</h4>
                      </h1>
           </div>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
  
export default Sidebar;