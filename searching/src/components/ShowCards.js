function ShowCards({card}) {
    return (
        <article >
            <h2>{card.name}</h2>
            <img src={card.image} alt={card.name}></img>
        </article>
    )
};

export default ShowCards;