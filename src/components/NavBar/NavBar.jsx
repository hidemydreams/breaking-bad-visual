import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/star-wars.png";
import "./NavBar.scss";
import { motion } from "framer-motion";

export default function NavBar() {

  const [isActive, setIsActive] = useState(false)
  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="header">
      <div className="header__logo">
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
      </div>
      <div onClick={() => setIsActive(!isActive)} className="header__burger-btn">
        <i className="fas fa-bars"></i>
      </div>
      <nav className={`nav-bar ${isActive ? `nav-bar-active` : null}`}>
        <div onClick={() => setIsActive(!isActive)} className="nav-bar__exit-btn">
          <i className="far fa-times-circle"></i>
        </div>
        <ul className="nav-bar__list">
          <NavLink onClick={() => setIsActive(!isActive)} to="/" exact={true}><li className="nav-bar__link">Home</li></NavLink>
          <NavLink onClick={() => setIsActive(!isActive)} to="/characters"><li className="nav-bar__link">Characters</li></NavLink>
          <NavLink onClick={() => setIsActive(!isActive)} to="/quiz"><li className="nav-bar__link">Quiz</li></NavLink>
          <NavLink onClick={() => setIsActive(!isActive)} to="/episodes"><li className="nav-bar__link">Episodes</li></NavLink>
        </ul>
      </nav>
    </motion.div>
  )
}
