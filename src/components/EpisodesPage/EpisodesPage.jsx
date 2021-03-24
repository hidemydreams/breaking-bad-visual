import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import SearchPanel from '../SearchPanel/SearchPanel';
import "./EpisodesPage.scss"
import { motion } from "framer-motion";

const EpisodesPage = () => {

  const [episodes, setEpisodes] = useState(null);
  const [episode, setEpisode] = useState(null);
  const [char, setChar] = useState('');

  useEffect(() => {
    const url = "https://www.breakingbadapi.com/api/episodes";
    fetch(url).then(res => {
      return res.json()
    }).then(incomingData => {
      setEpisodes(incomingData)
    })
  }, [])

  const handleInput = (e) => {
    setChar(e.target.value)
  }

  const handleEpisodeClick = (e) => {
    let episodeOnClick = episodes.find((elem) => elem.episode_id == e.target.id)
    setEpisode(episodeOnClick)
  }


  let filteredEpisodes = episodes?.filter((episode) => {
    return episode.title.toLowerCase().includes(char.toLowerCase())
  })


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="episodes-page">
      <h2 className="episodes__title">
        Episodes Overview
      </h2>
      <div className="episodes__row">
        <div className="list">
          <SearchPanel handleInput={handleInput} />
          <ul className="episodes__list">
            {filteredEpisodes ? (filteredEpisodes.map((episode) => {
              return <li onClick={(e) => handleEpisodeClick(e)} id={episode.episode_id} key={episode.episode_id}>{episode.title}</li>
            })) : <Loader />}
          </ul>
        </div>
        <div className="episodes__info">
          {episode ? (<><p>Season: <span>{episode.season}</span></p>
            <p>Episode Number: <span>{episode.episode}</span></p>
            <p>Air Date: <span>{episode.air_date}</span></p>
            <p>Featured Characters: </p>
            <ul className="episode__characters-list">
              {episode.characters.map((character) => {
                return <li key={character}>- {character}</li>
              })}
            </ul></>) : <h3 className="episodes__no-ep">Choose any episode to get some information on it</h3>}
        </div>
      </div>
    </motion.div>
  )
}

export default EpisodesPage
