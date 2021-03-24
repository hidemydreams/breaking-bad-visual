import React, { useState, useContext } from 'react';
import { QuestionsContext } from '../../services/QuestionsContext';
import "./QuizPage.scss";
import { motion } from "framer-motion"

export default function QuizPage() {
  const questions = useContext(QuestionsContext)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isCorrect, setIsCorrect] = useState(0);
  const [isStarted, setIsStarted] = useState(false)
  const [isCorrectVisible, setIsCorrectVisible] = useState(false)


  const handleAnswerClick = (answer) => {
    if (answer) {
      setIsCorrect(prev => prev + 1)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setIsCorrectVisible(true)
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setIsCorrectVisible(false)
      }, 2000)
    } else {
      setShowScore(true)
    }
  }

  const handleBackBtnClick = () => {
    setIsStarted(!isStarted)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="quiz-page">
      {isStarted ? (<div className="card">
        {showScore ? <ScoreTable handleBackBtnClick={handleBackBtnClick} isCorrect={isCorrect} /> : <Quiz currentQuestion={currentQuestion} handleAnswerClick={handleAnswerClick} isCorrectVisible={isCorrectVisible} />}
      </div>) : (<div className="quiz__intro-outer">
        <div className="quiz__intro">
          <h2 className="quiz__title">Quiz on being a real fan!</h2>
          <p>Looking for pub quiz questions on your favourite TV shows? Try out this Breaking Bad questions and answers to know if you are a real fan!</p>
          <p>This questions are covering all the 5 seasons, so you should watch all of them to be able to answer this questions! Good Luck!</p>
        </div>
        <div className="quiz__buttons">
          <button className="quiz__start-btn" onClick={() => setIsStarted(true)}>Basic Quiz</button>
          <button disabled className="quiz__start-btn" onClick={() => setIsStarted(true)}>Quotes Quiz</button>
          <button disabled className="quiz__start-btn" onClick={() => setIsStarted(true)}>Characters Quiz</button>
        </div>
      </div>)}
    </motion.div>
  )
}

const ScoreTable = ({ isCorrect, handleBackBtnClick }) => {
  const questions = useContext(QuestionsContext)

  return (
    <div className="score-table">
      <h3>You Scored {isCorrect} out of {questions.length}</h3>
      <button className="back-btn" onClick={handleBackBtnClick}>Try One More Time</button>
    </div>
  )
}
const Quiz = ({ currentQuestion, handleAnswerClick, isCorrectVisible }) => {

  const questions = useContext(QuestionsContext)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="quiz">
      <div className="card__question-section">
        <p className="card__question-count">
          Question {currentQuestion + 1}/<span>{questions.length}</span>
        </p>
        <h3 className="card__question-text">
          {questions[currentQuestion].question}
        </h3>
      </div>
      <div className="card__answer-section">
        <div className="card__answers">
          {questions[currentQuestion].answers.map((answer, i) => {
            return <button key={i} className={`card__btn-answer ${isCorrectVisible ? (answer.isCorrect ? "right-answer" : `wrong-answer`) : null}`} onClick={() => handleAnswerClick(answer.isCorrect)}>{answer.answer}</button>
          })}
        </div>
      </div>
    </motion.div >
  )
}


