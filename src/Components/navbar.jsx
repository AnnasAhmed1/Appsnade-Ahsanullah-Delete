import React, { useState } from "react";
import ButtonComp from "../Helper/button_comp";
import "../Styles/component.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown } from "antd";
import GradientButton from "../Helper/GradientButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Navbar = ({ gradientButton = false }) => {
  const navigate = useNavigate();

  const subContainerServices = [
    {
      key: 1,
      label: (
        <div className="sub-nav-container " href="app-development">
          <div
            style={{
              display: "flex",
            }}
            className="container"
          >
            <div>
              <h3>Our Services</h3>
              <div >
                <Popup
                  trigger={
                    <h4 style={{ marginBottom: 10, }}>Apps Development</h4>
                  }
                  on="hover"
                  position="right top"                  
                >
                  <div style={{ marginLeft: 50, paddingBottom: 30 }}>
                    <h6 style={{ marginBottom: 10 }}>
                      <a href={`/IOS development`.replace(/\s+/g, "-")}>
                        IOS development
                      </a>
                    </h6>
                    <h6 style={{ marginBottom: 10 }}>
                      <a href={`/Android development`.replace(/\s+/g, "-")}>
                        Android development
                      </a>
                    </h6>
                    <h6 style={{ marginBottom: 10 }}>
                      <a href={`/Game development`.replace(/\s+/g, "-")}>
                        Game development{" "}
                      </a>
                    </h6>
                    <h6 style={{ marginBottom: 10 }}>
                      <a
                        href={`/Custom software development`.replace(
                          /\s+/g,
                          "-"
                        )}
                      >
                        Custom software development{" "}
                      </a>
                    </h6>
                    <h6 style={{ marginBottom: 10 }}>
                      <a
                        href={`/Bluetooth App development`.replace(/\s+/g, "-")}
                      >
                        Bluetooth App development{" "}
                      </a>
                    </h6>
                    <h6 style={{ marginBottom: 10 }}>
                      <a
                        href={`/Cloud based services for mobile apps`.replace(
                          /\s+/g,
                          "-"
                        )}
                      >
                        Cloud based services for mobile apps{" "}
                      </a>
                    </h6>
                  </div>
                </Popup>

                <a
                  className="link-list-item"
                  href={`/Web development`.replace(/\s+/g, "-")}
                >
                  Web development
                </a>
                <a
                  className="link-list-item"
                  href={`/Digital Marketing`.replace(/\s+/g, "-")}
                >
                  Digital Marketing
                </a>

                <a
                  className="link-list-item"
                  href={`/IT consultancy`.replace(/\s+/g, "-")}
                >
                  IT Consultancy
                </a>
                <Popup
                  trigger={<h4 style={{ marginBottom: 10 }}>Designs</h4>}
                  on="hover"
                  position="right top"
                >
                  <div style={{ marginLeft: 50, paddingBottom: 0 }}>
                    <h5 style={{ marginBottom: 10, borderColor: "#fff" }}>
                      <a
                        style={{ color: "#a9a9a9" }}
                        href={`/Logo design`.replace(/\s+/g, "-")}
                      >
                        Logo design{" "}
                      </a>
                    </h5>
                    <h5 style={{ marginBottom: 10 }}>
                      <a
                        style={{ color: "#a9a9a9" }}
                        href={`/Graphic design`.replace(/\s+/g, "-")}
                      >
                        Graphic design{" "}
                      </a>
                    </h5>
                    <h5 style={{ marginBottom: 10 }}>
                      <a
                        style={{ color: "#a9a9a9" }}
                        href={`/NFT Creation`.replace(/\s+/g, "-")}
                      >
                        NFT Creation{" "}
                      </a>
                    </h5>
                  </div>
                </Popup>
              </div>
            </div>
            {/* <div>
              <h3>Apps development</h3>
              <div>
                <a
                  className="link-list-item"
                  href={`/android-app-development`}
                >
                  Android App Development
                </a>
                <a
                  className="link-list-item"
                  href={`/iphone-app-development`}
                >
                  IOS App Development
                </a>
                <a
                  className="link-list-item"
                  href={`/game-development`}
                >
                  Game Development
                </a>
                <a
                  className="link-list-item"
                  href={`/Custom software development`}
                >
                  Custom software development 
                </a>
                <a
                  className="link-list-item"
                  href={`/Bluetooth App development`}
                >
                  Bluetooth App development 
                </a>
                <a
                  className="link-list-item"
                  href={`/Cloud based`}
                >
                  Cloud based services for mobile apps
                </a>
                <a
                  className="link-list-item"
                  href={`/react-native-app-development`}
                >
                  React Native App Development
                </a>
              </div>
            </div>


            <div>
              <h3>Designs</h3>
              <div>
                <a
                  className="link-list-item"
                  href={`/Logo design`}
                >
                  Logo design
                </a>
                <a
                  className="link-list-item"
                  href={`/Graphic design`}
                >
                 Graphic design 
                </a>
                <a
                  className="link-list-item"
                  href={`/NFT Creation`}
                >
                 NFT Creation
                </a>
              </div>
            </div> */}

            {/* <div>
              <h3>Trending</h3>
              <div>
                <a className="link-list-item" href="">
                  AI Development
                </a>
                <a className="link-list-item" href="">
                  AR/VR Company
                </a>
                <a className="link-list-item" href="">
                  Automation Consultancy
                </a>
                <a className="link-list-item" href="">
                  Bluetooth App Development
                </a>
                <a className="link-list-item" href="">
                  Automation Consultancy
                </a>
                <a className="link-list-item" href="">
                  NFT Development
                </a>
                <a className="link-list-item" href="">
                  Machine Learning
                </a>
              </div>
            </div> */}
          </div>
        </div>
      ),
    },
  ];
  const subContainerSolutions = [
    {
      key: 1,
      label: (
        <div className="sub-nav-container " href="app-development">
          <div
            style={{
              display: "flex",
            }}
            className="container"
          >
            <div>
              <h3>Our Solution</h3>
              <img src={require(".././Assets/nav_image.png")} alt="" />
            </div>
            <div>
              <h3>Primary</h3>
              <div>
                <a className="link-list-item" href={`/cms-solution`}>
                  CMS Solution
                </a>
                <a className="link-list-item" href={`/hrm-solution`}>
                  HRM Solution
                </a>
                <a className="link-list-item" href={`/crm-solution`}>
                  CRM Solution
                </a>
                <a className="link-list-item" href={`/erp-solution`}>
                  ERP Solution
                </a>
                <a className="link-list-item" href={`/lms-solution`}>
                  LMS Solution
                </a>
                <a className="link-list-item" href={`/pos-solution`}>
                  POS Solution
                </a>
              </div>
            </div>
            <div>
              <h3>Industries</h3>
              <div>
                <a className="link-list-item" href={`/automotive`}>
                  Automotive
                </a>
                <a className="link-list-item" href={`/healthcare`}>
                  Healthcare
                </a>
                <a className="link-list-item" href={`/on-demand`}>
                  On-Demand
                </a>
                <a className="link-list-item" href={`/education`}>
                  Education
                </a>
                <a className="link-list-item" href={`/music`}>
                  Music
                </a>
                <a className="link-list-item" href={`/fintech`}>
                  Fintech
                </a>
              </div>
            </div>
            <div>
              <h3
                style={{
                  opacity: 0,
                }}
              >
                I
              </h3>
              <div>
                <a className="link-list-item" href={`/logistics`}>
                  Logistics
                </a>
                <a className="link-list-item" href={`/retail`}>
                  Retail
                </a>
                <a className="link-list-item" href={`/ecommerce`}>
                  Ecommerce
                </a>
                <a className="link-list-item" href={`/real-estate`}>
                  Real Estate
                </a>
                <a className="link-list-item" href={`/staff-augmentation`}>
                  Staff Augmentation
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  // const subContainerTech = [
  //   {
  //     key: 1,
  //     label: (
  //       <div className="sub-nav-container " href="app-development">
  //         <div
  //           style={{
  //             display: "flex",
  //           }}
  //           className="container"
  //         >
  //           <div>
  //             <h3>Our Technologies</h3>
  //             <img src={require(".././Assets/nav_image.png")} alt="" />
  //           </div>
  //           <div></div>
  //           <div>
  //             <h3>Languages</h3>
  //             <div>
  //               <a className="link-list-item" href={`/technology/.Net`}>
  //                 .Net
  //               </a>
  //               <a className="link-list-item" href={`/technology/HTML5`}>
  //                 HTML5
  //               </a>
  //               <a className="link-list-item" href={`/on-demand`}>
  //                 Java
  //               </a>
  //               <a className="link-list-item" href={`/education`}>
  //                 Node.Js
  //               </a>
  //               <a className="link-list-item" href={`/music`}>
  //                 PHP
  //               </a>
  //               <a className="link-list-item" href={`/fintech`}>
  //                 Python
  //               </a>
  //             </div>
  //           </div>
  //           <div>
  //             <h3>Platforms</h3>
  //             <div>
  //               <a className="link-list-item" href={`/cms-solution`}>
  //                 Azure
  //               </a>
  //               <a className="link-list-item" href={`/hrm-solution`}>
  //                 GCP
  //               </a>
  //               <a className="link-list-item" href={`/crm-solution`}>
  //                 Oracle
  //               </a>
  //               <a className="link-list-item" href={`/erp-solution`}>
  //                 SAP
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];
  const subContainerInsights = [
    {
      key: 1,
      label: (
        <div
          style={{
            marginRight: "150px",
          }}
          className="sub-nav-container "
          href="app-development"
        >
          <div
            style={{
              display: "flex",
            }}
            className="container"
          >
            <div>
              <div>
                <a className="link-list-item" href={`/about`}>
                  About Appswaves
                </a>
                {/* <a className="link-list-item" href={`/payment`}>
                  Payment
                </a> */}
                <a className="link-list-item" href={`/life`}>
                  Life At Appswaves
                </a>
                <a className="link-list-item" href={`/blogs`}>
                  Blogs
                </a>
                <a className="link-list-item" href={`/press`}>
                  Press
                </a>
                <a className="link-list-item" href={`/career`}>
                  Career
                </a>
                <a className="link-list-item" href={`/podcast`}>
                  Podcast
                </a>
                <a className="link-list-item" href={`/events`}>
                  Events
                </a>
                <a className="link-list-item" href={`/referral-program`}>
                  Referral Program
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const navs = [
    {
      title: "Home",
      subRoutes: false,
    },
    {
      title: "Services",
      subRoutes: subContainerServices,
    },
    {
      title: "Solutions",
      subRoutes: subContainerSolutions,
    },
    // {
    //   title: "Technologies",
    //   subRoutes: subContainerTech,
    // },
    {
      title: "About",
      subRoutes: false,
    },
    {
      title: "Portfolio",
      subRoutes: false,
    },
    // {
    //   title: "Payment",
    //   subRoutes: false,
    // },
    // {
    //   title: "Insights",
    //   subRoutes: subContainerInsights,
    // },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar-head" style={{}}>
      <nav className="navbar" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <Link to={"/"}>
            <img
              style={{
                // display: "block",
                // flex: 1,
                width: "100px",
                height: "50px",
              }}
              src={require("../Assets/logo.png")}
              alt="logo"
              className="logo"
            />
          </Link>
          <ul className="nav-mobile">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              className="mobile-nav"
            >
              {navs?.map((v, i) => {
                return (
                  <MenuItem>
                    <li key={i}>
                      <Link to={v.title == "Home" ? "" : `/${v.title}`}>
                        {v.title}
                      </Link>
                    </li>
                  </MenuItem>
                );
              })}
            </Menu>
          </ul>
          <ul className="nav-desktop">
            {navs?.map((v, i) => {
              return (
                <li key={i}>
                  {v.subRoutes ? (
                    <Dropdown
                      style={{
                        width: "1000px",
                      }}
                      className="nav-dropdown"
                      menu={{
                        items: v.subRoutes,
                      }}
                      placement="bottom"
                      arrow
                    >
                      <Link
                        to={
                          v.title == "Home"
                            ? ""
                            : v.title !== "Insights"
                            ? `/${v.title.replace(/\s+/g, "-")}`
                            : null
                        }
                        style={{ color: "#000" }}
                      >
                        {v.title}
                      </Link>
                    </Dropdown>
                  ) : (
                    <Link
                      to={`/${
                        v.title === "Home" ? "" : v.title.replace(/\s+/g, "-")
                      }`}
                      style={{ color: "#000" }}
                    >
                      {v.title}
                    </Link>
                  )}
                </li>
              );
            })}
            <div style={{ marginLeft: 10, marginRight: 20 }}>
              <h1 style={{ color: "#000", fontSize: 12 }}>+1 (406) 607 2778</h1>
            </div>
            {!gradientButton ? (
              <ButtonComp
                text="Get a quote"
                transparent={false}
                onClick={() => {
                  navigate("/contact");
                }}
              />
            ) : (
              <GradientButton
                text="Contact Us"
                transparent={false}
                onClick={() => {
                  navigate("/contact");
                }}
              />
            )}
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
