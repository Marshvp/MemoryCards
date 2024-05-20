import { useState, useEffect } from "react";
import getPokemon from '../PokeApi'
import { MemoryCards } from "./MemoryCards";
export function MemoryGame() {
    const [cards, setCards] = useState([])
    const [selectedCards, setSelectedCards] = useState([])
    const [score, setScore] = useState(0)

    
    useEffect(() => {
        async function fetchCards() {
            const newCards = [];
            while(newCards.length < 10) {
                const randomID = Math.floor(Math.random() * 151) + 1
                const data = await getPokemon(randomID)
                newCards.push(data)
            } 
            setCards(newCards)
        } 
        fetchCards()
    }, [])


    function handleCardClick(card) {
        console.log("handleCardClick",card)
        const newSelectedCards = [...selectedCards, card]
        if(gameOver(newSelectedCards)) {
            console.log("Game Over");
            alert("Game Over")
            setSelectedCards([])
        } else {
            setSelectedCards(newSelectedCards)
            setScore(score + 1)
            
        }
    }
    console.log("Score Before", score);
    function gameOver(newSelectedCards) {
        const cardNames = newSelectedCards.map(card => card.name);
        const uniqueNames = new Set(cardNames);
        return uniqueNames.size !== cardNames.length
    }

    if (cards.length === 0) return <div>Loading...</div>
    

    return (
        <div>
        <MemoryCards cards={cards} onClick={handleCardClick}/>
        </div>
    )

}