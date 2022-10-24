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
const [counterName, setCounterName] = useState("")

function getTotalCount() {
  if (window.localStorage.getItem("totalCount")) {
    return parseInt(window.localStorage.getItem("totalCount"))
  }
  return 10
}

useEffect(() => {
  window.localStorage.setItem("totalCount", count)
}, [count])

const providerInformation = {
  count: count, 
  setCount: (e)=> setCount(e),
  counterName: counterName, 
  setCounterName: (e)=> setCounterName(e),
}


  return (
    <div className="App">
      <InfoProvider value={providerInformation}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/counter" element={<CounterPage/>}/>
          </Routes>
        </Router>
      </InfoProvider>
    </div>
  );
}

export default App;
