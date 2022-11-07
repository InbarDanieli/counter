import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import InfoContext from '../../ContextInfo'
import style from "./CounterPage.module.css"


function CounterPage() {
  const [counterUp, setCounterUp] = useState(getCounterUp())
  const { count, counterName } = useContext(InfoContext)


  function getCounterUp() {
    if (window.localStorage.getItem("CountsLeft")) {
      return parseInt(window.localStorage.getItem("CountsLeft"))
    }
    return 0
  }


  function checkAddcounter() {
    if (counterUp < count) {
      setCounterUp(counterUp + 1)
      window.localStorage.setItem("CountsLeft", counterUp + 1)
    }
  }

  function checkSubcounter() {
    if (count - counterUp >= 0 && count - counterUp < count) {
      setCounterUp(counterUp - 1)
      window.localStorage.setItem("CountsLeft", counterUp - 1)
    }
  }

  function resetcounter() {
    setCounterUp(0)
    window.localStorage.setItem("CountsLeft", 0)
  }

  return (
    <div className={style.container}>
      <div className={style.TitlesCounter}>
        <h1 className={style.titlecounter}>{counterUp}</h1>
        <h4 className={style.SubtitlecounterLeft}>{`${count - counterUp} ${counterName ? counterName : "Counts"} Left`}</h4>
      </div>
      <div className={style.changeCountButtons}>
        <div className={style.countButton}>
          <button onClick={checkAddcounter}><span>+</span></button>
        </div>
        <div className={style.countButton}>
          <button onClick={checkSubcounter}><span>-</span></button>
        </div>
      </div>
      <button className={style.resetButton} onClick={resetcounter}>reset</button>
      <Link className={style.previospageButton} to={"/"}>
        <button onClick={resetcounter}>back</button>
      </Link>
    </div>
  )
}

export default CounterPage