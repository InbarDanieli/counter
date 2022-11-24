import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InfoContext from '../../ContextInfo'
import style from "./HomePage.module.css"


function HomePage() {
  const { count, counterName, setCount, setCounterName } = useContext(InfoContext)
  const navigate = useNavigate()

  useEffect(() => {
    setCount(10)
    setCounterName("")
    window.localStorage.setItem("CountsLeft", 0)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function SubmitHandler(e) {
   // prevent page refresh
    e.preventDefault()
    navigate("./counter")
  }

  return (
    <div>
      <h1>Counter</h1>
      <form onSubmit={SubmitHandler} >
        <div className={style.inputContainer}>
          <div>
            <label><b>length of your count: </b></label>
            <input name='count' id='count' value={count} onChange={(e) => setCount(e.target.value)} type="number" min={1}></input>
          </div>
          <div>
            <label><b>What are you counting?:</b>            </label>

            <input value={counterName} onChange={(e) => setCounterName(e.target.value)} type="text" placeholder='counter name (optional)'></input>
          </div>
        </div>
        <button className={style.doneButton}>Start Counting</button>
      </form>
    </div >
  )
}

export default HomePage