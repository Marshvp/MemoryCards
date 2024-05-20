



export function MemoryCards({ cards, onClick }) {
    
   
    console.log(cards);
       return (

        <div className='card-container'>
            {cards.map((cards, i) => (
                <div className='card' key={i} onClick={() => onClick(cards) }>
                    <h2>{cards.name}</h2>
                    <img src={cards.sprites.front_default} alt={cards.name} />
                </div>
            ))}
        </div>
        
    )
}