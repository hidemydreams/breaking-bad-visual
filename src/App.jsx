import React from "react";
import "./App.css"
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import CharList from "./components/CharList/CharList";
import SelectedChar from "./components/SelectedChar/SelectedChar";
import Home from "./components/Home/Home";
import QuizPage from "./components/QuizPage/QuizPage";
import { QuestionsContext } from "./services/QuestionsContext"
import EpisodesPage from "./components/EpisodesPage/EpisodesPage";

const questions = [
  {
    question: "Which song best describes the style of Saul Goodman’s office?",
    answers: [
      { answer: "Paradase City", isCorrect: false },
      { answer: "Home On The Range", isCorrect: false },
      { answer: "America The Beatiful", isCorrect: true },
      { answer: "Panama", isCorrect: false },
    ]
  },
  {
    question: "Spot the phrase that DID NOT come out of Jesse’s mouth:",
    answers: [
      { answer: "Yeah bitch, magnets!", isCorrect: false },
      { answer: "Yo, Gatorade me, bitch.", isCorrect: false },
      { answer: "Alright, bitch — let’s cook.", isCorrect: true },
      { answer: "So roll me further, bitch.", isCorrect: false },
    ]
  },
  {
    question: "Walt’s pre-Heisenberg vehicle, the one he runs over the gangsters in, is a…",
    answers: [
      { answer: "Chevy Citation", isCorrect: false },
      { answer: "Ford Explorer", isCorrect: false },
      { answer: "Pontiac Aztec", isCorrect: true },
      { answer: "Nissan Cube", isCorrect: false },
    ]
  },
  {
    question: "From what city did Mike Ehrmantraut hail?",
    answers: [
      { answer: "Philadelphia", isCorrect: true },
      { answer: "Detroit", isCorrect: false },
      { answer: "Chicago", isCorrect: false },
    ]
  },
  {
    question: "What was the hidden lab made by Gustavo Fring built over?",
    answers: [
      { answer: "A laundry", isCorrect: true },
      { answer: "It wasn't specified", isCorrect: false },
      { answer: "An oil refinery", isCorrect: false },
    ]
  },
  {
    question: "Who attempted to shoot and kill Hank Schrader in the carpark?",
    answers: [
      { answer: "The Cousins", isCorrect: true },
      { answer: "Jesse Pinkman", isCorrect: false },
      { answer: "An unnamed fring associate", isCorrect: false },
      { answer: "Walt’s second cell phone is buzzing in his pocket.", isCorrect: false },
    ]
  },
  {
    question: "What drug do we NOT see Jesse use?",
    answers: [
      { answer: "Ecstasy", isCorrect: true },
      { answer: "Meth", isCorrect: false },
      { answer: "Weed", isCorrect: false },
      { answer: "Heroin", isCorrect: false },
    ]
  },
  {
    question: "Madrigal Electromotive’s fast-food division was working on a special condiment at the time of Gus Fring’s death. It was…",
    answers: [
      { answer: "Franch Dressing", isCorrect: true },
      { answer: "Honey-Bar-B-Cute", isCorrect: false },
      { answer: "Honey syrup", isCorrect: false },
      { answer: "Natures Nectar", isCorrect: false },
    ]
  },
  {
    question: "What happened to the money in the crawlspace?",
    answers: [
      { answer: "Jesse burn it", isCorrect: false },
      { answer: "Skyler burn it", isCorrect: false },
      { answer: "Skyler gave it to Ted Benneke", isCorrect: true },
    ]
  },
  {
    question: "Who was the original owner of the car wash?",
    answers: [
      { answer: "Bogdan", isCorrect: true },
      { answer: "It wasn't specified", isCorrect: false },
      { answer: "Gustavo Fring", isCorrect: false },
    ]
  },
  {
    question: "True or false - the actor who played Hector Salamanca was also in Ace Ventura: Pet Detective.",
    answers: [
      { answer: "True", isCorrect: true },
      { answer: "False", isCorrect: false },
    ]
  },
  {
    question: "What was Gale Boetticher working on as a side project in the lab with Walt?",
    answers: [
      { answer: "Making coffee", isCorrect: true },
      { answer: "A cheaper way to make meth", isCorrect: false },
      { answer: "Making Coca-Cola", isCorrect: false },
    ]
  },
  {
    question: "What was the flight number which crashed over Walter White's house?",
    answers: [
      { answer: "Wayfarer 515", isCorrect: true },
      { answer: "Oceniac 815", isCorrect: false },
      { answer: "United 828", isCorrect: false },
    ]
  },
]

function App() {
  return <div className="App">
    <NavBar />
    <div className="main">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/characters" render={(props) => <CharList {...props} />} />
        <Route path="/characters/:id" render={(props) => <SelectedChar {...props} />} />
        <Route path="/episodes" render={(props) => <EpisodesPage {...props} />} />
        <QuestionsContext.Provider value={questions}>
          <Route path="/quiz" render={(props) => <QuizPage {...props} />} />
        </QuestionsContext.Provider>
      </Switch>
    </div>
  </div>;
}

export default App;
