import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useState } from "react";

const MyCard = () => {

    const cards = useLoaderData();
    const [allCards, setAllCards] = useState(cards);
    console.log(cards);

    return (
        <div>
            <h1 className="text-3xl font-semibold text-center py-5">Your Add All Card</h1>

            <div className="grid md:grid-cols-2 gap-2 p-3">
                {
                    allCards?.map(card => <Card key={card._id} allCards={allCards} setAllCards={setAllCards} cards={cards} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default MyCard;