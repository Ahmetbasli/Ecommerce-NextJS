import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import styles from "../styles/components/CheckoutProduct.module.css";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
  rating,
}) => {
  const dispatch = useDispatch();
  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    hasPrime,
    rating,
  };

  const attachToBasket = () => {
    // sending the product as an action to the REDUX store's basket slice
    dispatch(addToBasket(product));
  };

  const detachFromBasket = () => {
    // sending the this product id as an action to the REDUX store's basket slice
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className={styles.container}>
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* middle */}
      <div className={styles.middle}>
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-4 text-yellow-400" />
            ))}
        </div>
        <p className={styles.description}>{description}</p>
        <Currency quantity={price} currencry="USD" />
        {hasPrime && (
          <div className={styles.prime}>
            <img
              loading="lazy"
              src="/images/Prime-tag.png"
              width={60}
              height={60}
              alt="prime-tag"
            />
            <p className={styles.deliveryTime}>Free Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right add and remove button */}
      <div className={styles.buttons}>
        <button onClick={() => attachToBasket()} className={styles.button}>
          Add to Basket
        </button>
        <button onClick={() => detachFromBasket()} className={styles.button}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
