import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InfoContext from '../../ContextInfo'
import style from "./HomePage.module.css"


function HomePage() {
  const { count, counterName, setCount, setCounterName } = useContext(InfoContext)

  useEffect(() => {
    setCount(10)
    setCounterName("")
    window.localStorage.setItem("CountsLeft", 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Counter</h1>
      <div className={style.inputContainer}>
        <div>
          <span><b>length of your count: </b></span>
          <input value={count} onChange={(e) => setCount(e.target.value)} type="number" min={1}></input>
        </div>
        <div>
          <span><b>What are you counting?:</b> </span>
          <input value={counterName} onChange={(e) => setCounterName(e.target.value)} type="text" placeholder='counter name (optional)'></input>
        </div>
      </div>
      <Link className={style.doneButton} to={"./counter"}>
        <button>Start Counting</button>
      </Link>
    </div>
  )
}

export default HomePage