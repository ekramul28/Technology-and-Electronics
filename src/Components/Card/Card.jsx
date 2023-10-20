import Swal from "sweetalert2";
import PropTypes from 'prop-types';
const Card = ({ card, setAllCards, allCards }) => {

    const { _id, name, image, description, price, rating, type } = card;
    const handelDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, DELETE'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://technology-and-electronics-server-frfa1meiy.vercel.app/card/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire('DELETE SUCCESSFUL');
                            const remaing = allCards?.filter(man => man._id !== id);
                            console.log(remaing);
                            setAllCards(remaing);
                        }
                    });
            }
        })




    }
    return (
        <div>
            <div className="py-5 ">
                <div className="card  bg-base-100 border hover:shadow-xl">
                    <figure className="">
                        <img src={image} alt="Shoes" className="rounded-xl h-52 p-3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name:{name}</h2>
                        <p>Price:{price}</p>
                        <p>Type:{type}</p>
                        <p>
                            <div className="rating">
                                <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name={rating} className="mask mask-star-2 bg-green-500" />
                            </div>
                        </p>
                        <p>{description}</p>
                        <div className=" flex gap-2">
                            <button onClick={() => handelDelete(_id)} className="btn bg-yellow-500 border-none text-white">Delete </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object,
    allCards: PropTypes.array,
    setAllCards: PropTypes.object
}

export default Card;