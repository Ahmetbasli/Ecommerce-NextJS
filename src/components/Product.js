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
    <div className="relative flex flex-col m-5 bg-white z-30 p-7">
      <p className="absolute top-2 right-2  text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        objectFit="contain"
        src={image}
        alt="img"
        width={200}
        height={200}
      />
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
        <div className="flex items-center space-x-3">
          <img
            src="/images/Prime-tag.png"
            width={60}
            height={60}
            alt="prime-tag"
          />
          <p className={styles.deliveryTime}>Free Next-day Delivery</p>
        </div>
      )}
      <button className={styles.button}>Add to Basket</button>
    </div>
  );
};

export default Product;
