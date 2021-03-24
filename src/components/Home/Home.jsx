import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Home.scss";
import Hero from "../../assets/hero.png"
import { motion } from "framer-motion"

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <motion.div className="home__content">
          <h1>Breaking Bad</h1>
          <p>Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. </p>
          <p>
            This app was built based on Breaking Bad API, to have some fun exploring characters or passing some quizes. Do not hesitate and explore!
          </p>
          <Link to="/characters">
            <button className="home__btn">Explore Characters</button>
          </Link>
        </motion.div>
        <motion.div animate={{ x: 30 }} className="home__image">
          <img src={Hero} alt="Breaking Bad" />
        </motion.div>
      </div >
    )
  }
}
