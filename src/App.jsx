import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'
import SwipperLogic from "./components/SwipperLogic"


function App() {

 const [profils, setProfils] = useState([]);
  return (
    <>
    <Header />
    <Footer />

    
    <SwipperLogic profils={profils} />
    </>
  
  )}


export default App
