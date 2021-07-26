import Header from "../components/Header";
import styles from "../styles/components/checkout.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";

const Checkout = () => {
  const items = useSelector(selectItems);
  console.log(items);
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* left */}
        <div className={styles.left}>
          <Image
            objectFit="contain"
            src="/images/Prime-day-banner.png"
            width={1020}
            height={250}
          />
          <div className={styles.basket}>
            <h1 className={styles.basketHeader}>Your Shopping Basket</h1>
            {items.length !== 0
              ? items.map((item, i) => (
                  <CheckoutProduct
                    key={i}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    hasPrime={item.hasPrime}
                    rating={item.rating}
                  />
                ))
              : "Basket is empty."}
          </div>
        </div>
        {/* right */}
        <div></div>
      </main>
    </div>
  );
};

export default Checkout;
