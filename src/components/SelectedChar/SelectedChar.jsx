import React, { useState, useEffect } from 'react'
import "./SelectedChar.scss"
import { motion } from "framer-motion"
import Loader from '../Loader/Loader'

const SelectedChar = (props) => {

  const [selectedCharacter, setSelectedCharacter] = useState(null)


  useEffect(() => {
    getOneCharacter()
  }, [])

  const getOneCharacter = () => {
    const { id } = props.match.params
    let url = `https://www.breakingbadapi.com/api/characters/${id}`
    fetch(url).then(res => {
      return res.json()
    }).then(character => {
      setSelectedCharacter(character[0])
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="selected-char">
      {selectedCharacter ? (<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="selected-char__card item-card">
        <div className="item-card__image">
          <img src={selectedCharacter.img} alt="Something" />
        </div>
        <div className="item-card__info">
          <h4>Name: <span>{selectedCharacter.name}</span></h4>
          <h4>Portrayed: <span>{selectedCharacter.portrayed}</span></h4>
          <h4>Nickname: <span>{selectedCharacter.nickname}</span></h4>
          <h4>Status: <span>{selectedCharacter.status}</span></h4>
          <h4 className="item-card__list-title">Occupation: </h4>
          <ul className="item-card__list">
            {selectedCharacter.occupation.map((item) => <li>- {item}</li>)}
          </ul>
          <h4>Birth Day: <span>{selectedCharacter.birthday}</span></h4>
          <h4 className="item-card__list-title">Seasons Appearance</h4>
          <ul className="item-card__list">
            {selectedCharacter.appearance.map((season) => <li>Season: {season}</li>)}
          </ul>
        </div>
      </motion.div>) : <Loader />}
    </motion.div>)
}

export default SelectedChar;


