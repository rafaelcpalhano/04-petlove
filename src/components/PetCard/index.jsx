import "./pet-card.css"

import { Cat, Dog } from "lucide-react"

export default function PetCard({ 
    emoji, 
    name, 
    species, 
    age, 
    size }) 
    {
const icon = emoji == "dog" ? <Dog size={28}/> : <Cat size={28}/>

  return (
<article className="pet-card">
    <span>{icon}</span>
    <div className="pet-info">
        <h3>{name}</h3>
        <p>{species} · {age} · {size}</p>
        </div>
        <button>Quero Adotar</button>
    
</article>  
)
}
