import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Button from "../shared/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {Link} from "react-router-dom"

export default function Header() {
  const user = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("user")
    window.location.replace("http://localhost:3000/")
  }
  return (
    <div className="header">
      <div className="navbarHeader">
        <img className="logo" src={logo} alt="" />
        <div className="rightNavbarHeader">
          <div className="itemNavbarHeader">HOME</div>
          <div className="itemNavbarHeader">ABOUT US</div>
          <div className="itemNavbarHeader">OUR AGENTS</div>
          <div className="itemNavbarHeader">PROPERTIES</div>
          <div className="itemNavbarHeader">BLOG</div>
          <Link className="link" to="/create">
            <div className="itemNavbarHeader">POST NEWS</div>
          </Link>
          {user.user ? <div className="itemNavbarHeader avatarBox">
            <img src={user.user.avatar} alt="" className="avatarCardItem" />
            <div className="nameOwner">{user.user.username}</div>
            <div onClick={handleLogout} className="addNavbar itemNavbarHeader">LOGOUT</div>
          </div> : <div className="itemNavbarHeader addNavbar">LOGIN</div>}
        </div>
      </div>
      <div className="mainHeader">
        <div className="titleHeader">Find Your Dream Home</div>
        <div className="subTitleHeader">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat
        </div>
      </div>
      <div className="optionHeader">
        <Tabs>
          <TabList>
            <Tab>Rent</Tab>
            <Tab>Sale</Tab>
          </TabList>

          <TabPanel>
            <div className="listChooseHeader">
              <div className="boxInput">
                <div className="chooseHeader">Locations</div>
                <input className="inputChooseHeader" type="text" placeholder="Enter Your city" />
              </div>
              <div>
                <div className="chooseHeader">Property Type</div>
                <input className="inputChooseHeader" type="text" placeholder="Enter property type" />
              </div>
              <div>
                <div className="chooseHeader">Rent Range</div>
                <input className="inputChooseHeader" type="text" placeholder="Enter rent range" />
              </div>
              <Button>Search</Button>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="listChooseHeader">
              <div className="boxInput">
                <div className="chooseHeader">Locations</div>
                <input className="inputChooseHeader" type="text" placeholder="Enter Your city" />
              </div>
              <div>
                <div className="chooseHeader">Property Type</div>
                <input className="inputChooseHeader" type="text" placeholder="Enter property type" />
              </div>
              <div>
                <div className="chooseHeader">Sale Range</div>
                <input className="inputChooseHeader" type="text" placeholder="Enter rent range" />
              </div>
              <Button>Check</Button>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
