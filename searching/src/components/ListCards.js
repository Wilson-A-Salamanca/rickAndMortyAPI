import ShowCards from "./ShowCards";

function ListCards({cards}) {
    console.log(cards)

    const rederedCards = cards.map((card) => {
        return ( <ShowCards key = {card.id} card = {card} />)
    });

    return (
        <section>
            {rederedCards}
        </section>
    )
};

export default ListCards;