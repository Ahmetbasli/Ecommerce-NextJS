import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";
import styles from "../styles/components/product.module.css";

const Max_Rating = 5;
const Min_Rating = 1;

const Product = ({ title, price, category, description, image }) => {
  const randomRate = Math.floor(Math.random() * (Max_Rating - Min_Rating) + 1);
  const [rating] = useState(randomRate);

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex items-center flex-col m-5 bg-white z-30 p-7">
      <p className="absolute top-2 right-2  text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} alt="img" width={200} height={200} />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-4 text-yellow-400" />
          ))}
      </div>
      <p className={styles.description}>{description}</p>
      <Currency quantity={price} currency="USD" />

      {!hasPrime && (
        <img
          src="/images/Prime-tag.png"
          width={40}
          height={40}
          alt="prime-tag"
        />
      )}
    </div>
  );
};

export default Product;
