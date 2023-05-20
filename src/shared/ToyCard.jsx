import { Card } from "flowbite-react";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, name, price,rating, img } = toy;
  return (
    <>
      <div className="max-w-sm w-full mx-auto">
        <Card
          imgSrc={img}
          className="card"
        >
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <div className="mt-2.5 mb-5 flex items-center">
            <Rating
              emptySymbol={<AiOutlineStar/>}
              fullSymbol={<AiFillStar fill="red"/>}
              placeholderSymbol={<AiFillStar fill="red"/>}
              placeholderRating={rating} readonly />
            
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              {rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <Link
              to={`/toys/${_id}`}
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Details
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ToyCard;
