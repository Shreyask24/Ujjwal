// import React, { useRef, useState } from 'react'

// import UEESLogo from "../assets/UEES-Logo.png"
// import { Link, useNavigate } from 'react-router-dom'

// import { Instagram, Youtube, ChevronDown, Facebook, Twitter, X, Menu, Linkedin } from 'lucide-react';


// const Navbar = () => {
//     const navigate = useNavigate();

//     const navItems = useRef();

//     const [toggle, setToggle] = useState(true)

//     const handleMenu = () => {
//         setToggle(!toggle)
//         navItems.current.classList.toggle("navbar-items")

//     }



//     return (
//         <div >
//             <nav className='navbar'>

//                 <div className='logo-txt'>
//                     <img onClick={() => navigate("/")} src={UEESLogo} alt="company-logo" id='company-logo' />
//                     <h1 onClick={() => navigate("/")} className='logo-txt'>Ujjwal Engineers & Environmental Services</h1>
//                 </div>
//                 <div>

//                     {
//                         toggle ?
//                             <Menu size={40} className='menu-bar' onClick={handleMenu} /> :

//                             <X size={40} className='menu-bar' onClick={handleMenu} />
//                     }
//                 </div>


//                 <div className='navbar-items' ref={navItems}>
//                     <ul>


//                         <li ><Link to="/">Home</Link></li>
//                         <li ><Link to="/about">About</Link></li>


//                         <li className="services-dropdown">
//                             <Link>Services</Link>
//                             <button className="dropbtn">
//                                 <ChevronDown size={16} strokeWidth={5} />
//                             </button>
//                             <ul className="submenu">
//                                 <li className="ec-dropdown">
//                                     <a href="#" style={{ fontSize: "18px" }}>Environmental Consultancy</a>
//                                     <ul className="ec-menu">
//                                         <li><Link to="/services" state={{ section: "life-cycle-assessment" }} style={{ fontSize: "17px" }}>Life Cycle Assessment</Link></li>
//                                         <li><Link to="/services" state={{ section: "product-carbon-footprint" }} style={{ fontSize: "17px" }}>Product Carbon Footprint</Link></li>
//                                         <li><Link to="/services" state={{ section: "greenhouse-gas-emission" }} style={{ fontSize: "17px" }}>Greenhouse Gas Emission</Link></li>
//                                         <li><Link to="/services" state={{ section: "environmental-clearance" }} style={{ fontSize: "17px" }}>Environmental Clearance (EC/EIA)</Link></li>
//                                         <li><Link to="/services" state={{ section: "consent-to-establish" }} style={{ fontSize: "17px" }}>Consent to Establish / Consent to Operate</Link></li>
//                                         <li><Link to="/services" state={{ section: "environmental-audit" }} style={{ fontSize: "17px" }}>Environmental Audit</Link></li>
//                                         <li><Link to="/services" state={{ section: "statutory-compliances" }} style={{ fontSize: "17px" }}>Statutory Compliances</Link></li>
//                                         <li><Link to="/services" state={{ section: "environmental-monitoring-and-analysis" }} style={{ fontSize: "17px" }}>Environmental Monitoring and Analysis</Link></li>
//                                         <li><Link to="/services" state={{ section: "epr" }} style={{ fontSize: "17px" }}>Extended Producer Responsibility (EPR)</Link></li>
//                                     </ul>
//                                 </li>
//                                 <li className="ss-dropdown">
//                                     <a href="#" style={{ fontSize: "18px" }}>Safety Services Consultancy</a>
//                                     <ul className="ss-menu">
//                                         <li><Link to="/safety-services" state={{ section: "risk-assessment" }} style={{ fontSize: "17px" }}>Risk Assessment</Link></li>
//                                         <li><Link to="/safety-services" state={{ section: "workshop-facilitation" }} style={{ fontSize: "17px" }}>Workshop Facilitation</Link></li>
//                                         <li><Link to="/safety-services" state={{ section: "functional-safety-services" }} style={{ fontSize: "17px" }}>Functional Safety Services</Link></li>
//                                         <li><Link to="/safety-services" state={{ section: "other-safety-workshop-services" }} style={{ fontSize: "17px" }}>Other Safety Workshop Services</Link></li>
//                                         <li><Link to="/safety-services" state={{ section: "other-safety-desktop-studies" }} style={{ fontSize: "17px" }}>Other Safety Desktop Studies</Link></li>
//                                         <li><Link to="/safety-services" state={{ section: "safety-audit" }} style={{ fontSize: "17px" }}>Safety Audit</Link></li>
//                                         <li><Link to="/safety-services" state={{ section: "energy-audit" }} style={{ fontSize: "17px" }}>Energy Audit</Link></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </li>



//                         <div className="dropdown">
//                             <a className='nav-anchor' href=""> Projects</a>
//                             <button className="dropbtn"><ChevronDown size={16} strokeWidth={5} /></button>
//                             <div className="dropdown-content">
//                                 <Link to="/projects" state={{ section: "etp" }}>Effluent Treatment Plant (ETP)</Link>
//                                 <Link to="/projects" state={{ section: "mee" }}>Multiple Effect Evaporator (MEE)</Link>
//                                 <Link to="/projects" state={{ section: "mvre" }}>Mechanical Vapor Recompression (MVRE)</Link>
//                                 <Link to="/projects" state={{ section: "atfd" }}>Agitated Thin Film Dryer (ATFD)</Link>
//                                 <Link to="/projects" state={{ section: "stp" }}>Sewage Treatment Plant (STP)</Link>
//                                 <Link to="/projects" state={{ section: "ro" }}>Reverse Osmosis Plant (RO)</Link>
//                             </div>
//                         </div>
//                         <li><Link to="/career">Career</Link></li>
//                         <li><Link to="/gallery">Gallery</Link></li>
//                         <li><Link to="/contact">Contact Us</Link></li>
//                     </ul>

//                 </div>
//                 <div className='enquiry-container'>
//                     <div className='social-icons'>

//                         <Link to="https://www.instagram.com/ujjwal_engineers?igsh=MXJiZGtwZ2U5cm1kMQ==" target='_blank'>  <Instagram size="26px" strokeWidth={2} />
//                         </Link>
//                         <Link to="https://www.facebook.com/profile.php?id=61557895696282&mibextid=ZbWKwL" target='_blank'>
//                             <Facebook strokeWidth={1.5} size="28px" />
//                         </Link>
//                         <Link to="https://youtube.com/@UjjwalEngineers?si=gJkfA1zAApnptO12" target='_blank'>
//                             <Youtube strokeWidth={1.5} size="35px" />
//                         </Link>
//                         <Link to="https://www.linkedin.com/company/ujjwal-engineers-and-environmental-services/?viewAsMember=true" target='_blank'>
//                             <Linkedin strokeWidth={1.5} size="30px" />
//                         </Link>
//                         <Link to="https://x.com/Ujjwalengineers?t=alqC_Eq-jefHB5VW74EeLA&s=08" target='_blank'>
//                             <Twitter strokeWidth={1.5} size="30px" />
//                         </Link>
//                     </div>

//                 </div>
//                 <Link to="/contact"><button className='bn3637 bn38'>Make Enquiry</button></Link>




//             </nav >

//         </ div >
//     )
// }

// export default Navbar








import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from 'react-router-dom';
import UEESLogo from "../assets/UEES-Logo.png"


import { Instagram, Youtube, ChevronDown, Facebook, Twitter, X, Menu, Linkedin, MenuIcon, InboxIcon } from 'lucide-react';
import { Collapse, Modal, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { useRef } from 'react';


function Navbar() {

    const navigate = useNavigate();

    const navItems = useRef();

    const [toggle, setToggle] = useState(true)

    const handleMenu = () => {
        setToggle(!toggle)
        navItems.current.classList.toggle("navbar-items")

    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openDropdown, setOpenDropdown] = React.useState(true);
    const [openEnvironmentDropdown, setOpenEnvironmentDropdown] = React.useState(true);
    const [openSafetyDropdown, setOpenSafetyDropdown] = React.useState(true);
    const [openProjectDropdown, setOpenProjectDropdown] = React.useState(true);

    const handleClick = () => {
        setOpenDropdown(!openDropdown);
    };

    const handleEnvironmentClick = () => {
        setOpenEnvironmentDropdown(!openEnvironmentDropdown);
    };

    const handleSafetyClick = () => {
        setOpenSafetyDropdown(!openSafetyDropdown);
    };

    const handleProjectClick = () => {
        setOpenProjectDropdown(!openProjectDropdown);
    };


    return (
        <>
            <Box sx={{ backgroundColor: "#006346" }}>
                <nav className='navbar'>

                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex" }}>
                            <img onClick={() => navigate("/")} src={UEESLogo} alt="company-logo" id='company-logo' />
                            <h1 onClick={() => navigate("/")} className='logo-txt'>Ujjwal Engineers & Environmental Services</h1>

                        </div>

                        <Button sx={{ display: "flex", justifyContent: "end", visibility: { xs: "visible", xl: "hidden" } }} onClick={handleOpen}>
                            <MenuIcon style={{ color: "white" }} size="30px" />
                        </Button>
                    </div>
                    <div>

                        {
                            toggle ?
                                <Menu size={40} className='menu-bar' onClick={handleMenu} /> :

                                <X size={40} className='menu-bar' onClick={handleMenu} />
                        }
                    </div>


                    <div className='navbar-items' ref={navItems}>
                        <ul>


                            <li ><Link to="/">Home</Link></li>
                            <li ><Link to="/about">About</Link></li>


                            <li className="services-dropdown">
                                <Link>Services</Link>
                                <button className="dropbtn">
                                    <ChevronDown size={16} strokeWidth={5} />
                                </button>
                                <ul className="submenu">
                                    <li className="ec-dropdown">
                                        <a href="#" style={{ fontSize: "18px" }}>Environmental Consultancy</a>
                                        <ul className="ec-menu">
                                            <li><Link to="/services" state={{ section: "life-cycle-assessment" }} style={{ fontSize: "17px" }}>Life Cycle Assessment</Link></li>
                                            <li><Link to="/services" state={{ section: "product-carbon-footprint" }} style={{ fontSize: "17px" }}>Product Carbon Footprint</Link></li>
                                            <li><Link to="/services" state={{ section: "greenhouse-gas-emission" }} style={{ fontSize: "17px" }}>Greenhouse Gas Emission</Link></li>
                                            <li><Link to="/services" state={{ section: "environmental-clearance" }} style={{ fontSize: "17px" }}>Environmental Clearance (EC/EIA)</Link></li>
                                            <li><Link to="/services" state={{ section: "consent-to-establish" }} style={{ fontSize: "17px" }}>Consent to Establish / Consent to Operate</Link></li>
                                            <li><Link to="/services" state={{ section: "environmental-audit" }} style={{ fontSize: "17px" }}>Environmental Audit</Link></li>
                                            <li><Link to="/services" state={{ section: "statutory-compliances" }} style={{ fontSize: "17px" }}>Statutory Compliances</Link></li>
                                            <li><Link to="/services" state={{ section: "environmental-monitoring-and-analysis" }} style={{ fontSize: "17px" }}>Environmental Monitoring and Analysis</Link></li>
                                            <li><Link to="/services" state={{ section: "epr" }} style={{ fontSize: "17px" }}>Extended Producer Responsibility (EPR)</Link></li>
                                        </ul>
                                    </li>
                                    <li className="ss-dropdown">
                                        <a href="#" style={{ fontSize: "18px" }}>Safety Services Consultancy</a>
                                        <ul className="ss-menu">
                                            <li><Link to="/safety-services" state={{ section: "risk-assessment" }} style={{ fontSize: "17px" }}>Risk Assessment</Link></li>
                                            <li><Link to="/safety-services" state={{ section: "workshop-facilitation" }} style={{ fontSize: "17px" }}>Workshop Facilitation</Link></li>
                                            <li><Link to="/safety-services" state={{ section: "functional-safety-services" }} style={{ fontSize: "17px" }}>Functional Safety Services</Link></li>
                                            <li><Link to="/safety-services" state={{ section: "other-safety-workshop-services" }} style={{ fontSize: "17px" }}>Other Safety Workshop Services</Link></li>
                                            <li><Link to="/safety-services" state={{ section: "other-safety-desktop-studies" }} style={{ fontSize: "17px" }}>Other Safety Desktop Studies</Link></li>
                                            <li><Link to="/safety-services" state={{ section: "safety-audit" }} style={{ fontSize: "17px" }}>Safety Audit</Link></li>
                                            <li><Link to="/safety-services" state={{ section: "energy-audit" }} style={{ fontSize: "17px" }}>Energy Audit</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>



                            <div className="dropdown">
                                <a className='nav-anchor' href=""> Projects</a>
                                <button className="dropbtn"><ChevronDown size={16} strokeWidth={5} /></button>
                                <div className="dropdown-content">
                                    <Link to="/projects" state={{ section: "etp" }}>Effluent Treatment Plant (ETP)</Link>
                                    <Link to="/projects" state={{ section: "mee" }}>Multiple Effect Evaporator (MEE)</Link>
                                    <Link to="/projects" state={{ section: "mvre" }}>Mechanical Vapor Recompression (MVRE)</Link>
                                    <Link to="/projects" state={{ section: "atfd" }}>Agitated Thin Film Dryer (ATFD)</Link>
                                    <Link to="/projects" state={{ section: "stp" }}>Sewage Treatment Plant (STP)</Link>
                                    <Link to="/projects" state={{ section: "ro" }}>Reverse Osmosis Plant (RO)</Link>
                                </div>
                            </div>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>

                    </div>
                    <div className='enquiry-container'>
                        <div className='social-icons'>

                            <Link to="https://www.instagram.com/ujjwal_engineers?igsh=MXJiZGtwZ2U5cm1kMQ==" target='_blank'>  <Instagram size="26px" strokeWidth={2} />
                            </Link>
                            <Link to="https://www.facebook.com/profile.php?id=61557895696282&mibextid=ZbWKwL" target='_blank'>
                                <Facebook strokeWidth={1.5} size="28px" />
                            </Link>
                            <Link to="https://youtube.com/@UjjwalEngineers?si=gJkfA1zAApnptO12" target='_blank'>
                                <Youtube strokeWidth={1.5} size="35px" />
                            </Link>
                            <Link to="https://www.linkedin.com/company/ujjwal-engineers-and-environmental-services/?viewAsMember=true" target='_blank'>
                                <Linkedin strokeWidth={1.5} size="30px" />
                            </Link>
                            <Link to="https://x.com/Ujjwalengineers?t=alqC_Eq-jefHB5VW74EeLA&s=08" target='_blank'>
                                <Twitter strokeWidth={1.5} size="30px" />
                            </Link>
                        </div>

                    </div>
                    <Link to="/contact"><button className='bn3637 bn38'>Make Enquiry</button></Link>




                </nav >










                <Modal open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{ backgroundColor: "#006346", width: 300, height: "100%", marginLeft: "20vw" }}
                        role="presentation"
                    >


                        <List sx={{ display: "flex", justifyContent: "flex-end", flexDirection: "column" }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText >
                                        <Link to="/" style={{ color: "white" }}>Home</Link>
                                    </ListItemText>

                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText>
                                        <Link to="/about" style={{ color: "white" }}>About</Link>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{ display: "flex", flexDirection: "column" }} disablePadding>
                                <ListItemButton sx={{ marginRight: "30vh" }} onClick={handleClick}>
                                    <ListItemText sx={{ color: "white" }} primary="Services" />
                                    {openDropdown ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                                </ListItemButton>
                                <Collapse in={openDropdown} sx={{ pl: "1vh" }} timeout="auto" unmountOnExit>
                                    <List>
                                        <ListItemButton onClick={handleEnvironmentClick}>
                                            <ListItemText sx={{ color: "white" }} primary="Environmental Consultancy" />
                                            {openEnvironmentDropdown ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                                        </ListItemButton>

                                        <Collapse sx={{ pl: "1vh" }} in={openEnvironmentDropdown}>
                                            <List sx={{ pl: "1vh" }} component="div" disablePadding>
                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/services" state={{ section: "life-cycle-assessment" }} style={{ fontSize: "15px", color: "white" }}>Life Cycle Assessment</Link>
                                                    </ListItemText>
                                                </ListItemButton>

                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/services" state={{ section: "product-carbon-footprint" }} style={{ fontSize: "15px", color: "white" }}>Product Carbon Footprint</Link>
                                                    </ListItemText>
                                                </ListItemButton>

                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/services" state={{ section: "greenhouse-gas-emission" }} style={{ fontSize: "15px", color: "white" }}>Greenhouse Gas Emission</Link>
                                                    </ListItemText>
                                                </ListItemButton>

                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/services" state={{ section: "environmental-clearance" }} style={{ fontSize: "15px", color: "white" }}>Environmental Clearance (EC/EIA)</Link>
                                                    </ListItemText>
                                                </ListItemButton>

                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/services" state={{ section: "consent-to-establish" }} style={{ fontSize: "15px", color: "white" }}>Consent to Establish / Consent to Operate</Link>
                                                    </ListItemText>
                                                </ListItemButton>
                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/services" state={{ section: "environmental-audit" }} style={{ fontSize: "15px", color: "white" }}>Environmental Audit</Link>
                                                    </ListItemText>
                                                </ListItemButton>
                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/services" state={{ section: "statutory-compliances" }} style={{ fontSize: "15px", color: "white" }}>Statutory Compliances</Link>
                                                    </ListItemText>
                                                </ListItemButton>
                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/services" state={{ section: "environmental-monitoring-and-analysis" }} style={{ fontSize: "15px", color: "white" }}>Environmental Monitoring and Analysis</Link>
                                                    </ListItemText>
                                                </ListItemButton>
                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/services" state={{ section: "epr" }} style={{ fontSize: "15px", color: "white" }}>Extended Producer Responsibility (EPR)</Link>
                                                    </ListItemText>
                                                </ListItemButton>


                                            </List>
                                        </Collapse>

                                        <ListItemButton onClick={handleSafetyClick}>
                                            <ListItemText sx={{ color: "white" }} primary="Safety Services" />
                                            {openSafetyDropdown ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                                        </ListItemButton>

                                        <Collapse sx={{ pl: "1vh" }} in={openSafetyDropdown}>
                                            <List sx={{ pl: "1vh" }} component="div" disablePadding>
                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/safety-services" state={{ section: "risk-assessment" }} style={{ fontSize: "15px", color: "white" }}>Risk Assessment</Link>
                                                    </ListItemText>
                                                </ListItemButton>

                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/safety-services" state={{ section: "workshop-facilitation" }} style={{ fontSize: "15px", color: "white" }}>Workshop Facilitation</Link>
                                                    </ListItemText>
                                                </ListItemButton>

                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/safety-services" state={{ section: "functional-safety-services" }} style={{ fontSize: "15px", color: "white" }}>Functional Safety Services</Link>
                                                    </ListItemText>
                                                </ListItemButton>


                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/safety-services" state={{ section: "other-safety-workshop-services" }} style={{ fontSize: "15px", color: "white" }}>Other Safety Workshop Services</Link>
                                                    </ListItemText>
                                                </ListItemButton>

                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/safety-services" state={{ section: "other-safety-desktop-studies" }} style={{ fontSize: "15px", color: "white" }}>Other Safety Desktop Services</Link>
                                                    </ListItemText>
                                                </ListItemButton>

                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/safety-services" state={{ section: "safety-audit" }} style={{ fontSize: "15px", color: "white" }}>Safety Audit</Link>
                                                    </ListItemText>
                                                </ListItemButton>

                                                <ListItemButton>
                                                    <ListItemText>
                                                        <Link to="/safety-services" state={{ section: "energy-audit" }} style={{ fontSize: "15px", color: "white" }}>Energy Audit</Link>
                                                    </ListItemText>
                                                </ListItemButton>

                                            </List>
                                        </Collapse>
                                    </List>


                                </Collapse>


                                <ListItemButton sx={{ marginRight: "30vh" }} onClick={handleProjectClick}>
                                    <ListItemText sx={{ color: "white" }}> Projects</ListItemText>
                                    {openProjectDropdown ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                                </ListItemButton>

                                <Collapse sx={{ pl: "1vh" }} in={openProjectDropdown}>
                                    <List sx={{ pl: "1vh" }} component="div" disablePadding>
                                        <ListItemButton>
                                            <ListItemText>
                                                <Link to="/projects" state={{ section: "etp" }} style={{ fontSize: "15px", color: "white" }}>Effluent Treatment Plant (ETP)</Link>
                                            </ListItemText>
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemText>
                                                <Link to="/projects" state={{ section: "mee" }} style={{ fontSize: "15px", color: "white" }}>Multiple Effect Evaporator (MEE)</Link>
                                            </ListItemText>
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemText>
                                                <Link to="/projects" state={{ section: "mvre" }} style={{ fontSize: "15px", color: "white" }}>Mechanical Vapor Recompression (MVRE)</Link>
                                            </ListItemText>
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemText>
                                                <Link to="/projects" state={{ section: "atfd" }} style={{ fontSize: "15px", color: "white" }}>Agitated Thin Film Dryer (ATFD)</Link>
                                            </ListItemText>
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemText>
                                                <Link to="/projects" state={{ section: "stp" }} style={{ fontSize: "15px", color: "white" }}>Sewage Treatment Plant (STP)</Link>
                                            </ListItemText>
                                        </ListItemButton>

                                        <ListItemButton>
                                            <ListItemText>
                                                <Link to="/projects" state={{ section: "ro" }} style={{ fontSize: "15px", color: "white" }}>Reverse Osmosis Plant (RO)</Link>
                                            </ListItemText>
                                        </ListItemButton>


                                    </List>
                                </Collapse>

                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText>
                                        <Link to="/career" style={{ color: "white" }}>Career</Link>
                                    </ListItemText>

                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText>
                                        <Link to="/gallery" style={{ color: "white" }}>Gallery</Link>
                                    </ListItemText>

                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText>
                                        <Link to="/contact" style={{ color: "white" }}>Contact Us</Link>
                                    </ListItemText>

                                </ListItemButton>
                            </ListItem>

                        </List>
                        <Divider sx={{ marginTop: "23vh", backgroundColor: "white" }} />
                        <List sx={{ display: "flex", marginLeft: "2vh" }}>
                            <ListItem disablePadding>
                                <ListItemButton disableRipple disableGutters disableTouchRipple>
                                    <ListItemText>
                                        <Link to="https://www.instagram.com/ujjwal_engineers?igsh=MXJiZGtwZ2U5cm1kMQ==" target='_blank' style={{ color: "white" }}>  <Instagram size="25px" strokeWidth={2} />
                                        </Link>
                                    </ListItemText>

                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton disableRipple disableGutters disableTouchRipple>
                                    <ListItemText>
                                        <Link to="https://www.facebook.com/profile.php?id=61557895696282&mibextid=ZbWKwL" target='_blank' style={{ color: "white" }}>
                                            <Facebook strokeWidth={1.5} size="25px" />
                                        </Link>
                                    </ListItemText>

                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton disableRipple disableGutters disableTouchRipple>
                                    <ListItemText>
                                        <Link to="https://youtube.com/@UjjwalEngineers?si=gJkfA1zAApnptO12" target='_blank' style={{ color: "white" }}>
                                            <Youtube strokeWidth={1.5} size="25px" />
                                        </Link>
                                    </ListItemText>

                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton disableRipple disableGutters disableTouchRipple>
                                    <ListItemText>
                                        <Link to="https://www.linkedin.com/company/ujjwal-engineers-and-environmental-services/?viewAsMember=true" target='_blank' style={{ color: "white" }}>
                                            <Linkedin strokeWidth={1.5} size="25px" />
                                        </Link>
                                    </ListItemText>

                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton disableRipple disableGutters disableTouchRipple>
                                    <ListItemText>
                                        <Link to="https://x.com/Ujjwalengineers?t=alqC_Eq-jefHB5VW74EeLA&s=08" target='_blank' style={{ color: "white" }}>
                                            <Twitter strokeWidth={1.5} size="25px" />
                                        </Link>
                                    </ListItemText>

                                </ListItemButton>
                            </ListItem>


                        </List>
                        <ListItem disablePadding>
                            <ListItemButton disableRipple disableGutters disableTouchRipple>
                                <ListItemText>
                                    <Link to="/contact">
                                        <Button sx={{ padding: "0.1rem 0.2rem", width: "18vh", fontSize: "13px", backgroundColor: "white", fontFamily: "sans-serif", marginLeft: "2vh", color: "#006346" }}>Make Enquiry</Button>
                                    </Link>

                                </ListItemText>

                            </ListItemButton>
                        </ListItem>

                    </Box>
                </Modal>
            </Box >
        </>
    )

}


export default Navbar;