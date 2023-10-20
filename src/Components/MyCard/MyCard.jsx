import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const MyCard = () => {
    const cards = useLoaderData();
    console.log(cards);

    return (
        <div>
            <h1 className="text-3xl font-semibold text-center py-5">Your Add All Card</h1>

            <div className="grid md:grid-cols-2 gap-2 p-3">
                {
                    cards?.map(card => <Card key={card._id} Card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default MyCard;