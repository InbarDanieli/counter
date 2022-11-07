import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; import './App.css';
import { InfoProvider } from "./ContextInfo";
import HomePage from "./components/home page/HomePage"
import CounterPage from "./components/counter page/CounterPage"
import { useEffect, useState } from "react";


function App() {
  const [count, setCount] = useState(getTotalCount())
  const [counterName, setCounterName] = useState(getCountsName())

  function getTotalCount() {
    if (window.localStorage.getItem("totalCount")) {
      return parseInt(window.localStorage.getItem("totalCount"))
    }
    return 10
  }

  function getCountsName() {
    if (window.localStorage.getItem("countsName")) {
      return window.localStorage.getItem("countsName")
    }
    return ""
  }

  useEffect(() => {
    window.localStorage.setItem("totalCount", count)
  }, [count])

  useEffect(() => {
    window.localStorage.setItem("countsName", counterName)
  }, [counterName])


  const providerInformation = {
    count: count,
    setCount: (e) => setCount(e),
    counterName: counterName,
    setCounterName: (e) => setCounterName(e),
  }


  return (
    <div className="App">
      <InfoProvider value={providerInformation}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/counter" element={<CounterPage />} />
          </Routes>
        </Router>
      </InfoProvider>
    </div>
  );
}

export default App;
