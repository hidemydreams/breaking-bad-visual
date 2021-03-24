import React, { useState, useEffect } from 'react'
import Loader from '../Loader/Loader';
import "./CharList.scss"
import { motion } from "framer-motion"
import SearchPanel from '../SearchPanel/SearchPanel';

const initialValue = {
  characters: null,
  selectedId: null,
  searchChar: ''
}

const CharList = (props) => {

  const [state, setState] = useState(initialValue)

  useEffect(() => {
    let url = 'https://www.breakingbadapi.com/api/characters'
    fetch(url).then(res => {
      return res.json()
    }).then(characters => {
      setState({
        ...state,
        characters: characters
      })
    })
  }, [])

  const handleMovieClick = (e) => {
    props.history.push(`/characters/${e.target.id}`)
  }

  const handleInput = (e) => {
    setState({
      ...state,
      searchChar: e.target.value
    })
  }

  let filteredChars = state.characters?.filter((char) => {
    return char.name.toLowerCase().includes(state.searchChar.toLowerCase())
  })

  return (
    <div className="char-list__outer">
      <SearchPanel handleInput={handleInput} />
      <div className="char-list">
        {filteredChars ? filteredChars.map((char, index) => {
          return <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}
            onClick={(e) => handleMovieClick(e)}
            key={char.name}
            className="char-list__item">
            <div
              id={char.char_id}
              style={{ backgroundImage: `url(${char.img})` }} className="char-list__image">
              <p className="char-list__name"><span>{char.name}</span></p>
            </div>
          </motion.div>
        }) : <Loader />}
      </div>
    </div >
  )
}

export default CharList;
