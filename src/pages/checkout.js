import Header from "../components/Header";
import styles from "../styles/pages/checkout.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/client";

const Checkout = () => {
  const items = useSelector(selectItems);
  const [session] = useSession();
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
        <div className={styles.right}>
          {items.length !== 0 && (
            <div>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items)
                <span>
                  {/* <Currency quantitt={price} currency="USD" /> */}
                </span>
              </h2>
              <button
                className={!session ? styles.btnDisabled : styles.checkoutBtn}
              >
                {!session ? "Sing in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
