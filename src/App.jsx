
import './App.css'

 import Header from "./components/Header/index"
import PetCard from './components/PetCard'

function App() {

 

  return (
    <>
    <Header />

    <PetCard
    emoji={"cat"}
    name={"Nina"} 
    species={"Gata"} 
    age={"5 meses"} 
    size={"Porte Pequeno"} />
    </>
  )
}

export default App
