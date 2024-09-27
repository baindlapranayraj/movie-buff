import './App.css'
import Bio from './components/Bio'
import Home from './components/Home'
import Quote from './components/Quote'

function App() {


  return (
    <>
    <div className="home min-h-screen bg-black ">
      <Home/>
      <Bio/>
      <Quote/>
    </div>
    </>
  )
}

export default App
