import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import InfoContext from '../../ContextInfo'
import style from "./CounterPage.module.css"


function CounterPage() {
  const { count, counterName } = useContext(InfoContext)
  const [counterApp, setCounterApp] = useState(0)
  const [counterDown, setCounterDown] = useState(count)
  // eslint-disable-next-line no-unused-vars
  const [checkCounter, setCheckCounter] = useState(false)

  function checkAddcounter() {
    if (counterApp < count) {
      setCounterApp(counterApp + 1)
      setCounterDown(counterDown - 1)
    }
    else {
      setCheckCounter(true)
    }
  }

  function checkSubcounter() {
    if (counterDown >= 0 && counterDown < count) {
      setCounterApp(counterApp - 1)
      setCounterDown(counterDown + 1)
    }
    else {
      setCheckCounter(true)
    }
  }

  function resetcounter() {
    setCounterDown(count)
    setCounterApp(0)
  }

  return (
    <div className={style.container}>
      <div className={style.TitlesCounter}>
        <h1 className={style.titlecounter}>{counterApp}</h1>
        <h4 className={style.SubtitlecounterLeft}>{`${counterDown} ${counterName ? counterName : "Counts"} Left`}</h4>
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
        <button>back</button>
      </Link>
    </div>
  )
}

export default CounterPage