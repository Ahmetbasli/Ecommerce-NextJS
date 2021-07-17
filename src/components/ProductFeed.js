import Product from "./Product";
import styles from "../styles/components/ProductFeed.module.css";
const ProductFeed = ({ products }) => {
  return (
    <div className={styles.productFeed}>
      {products.slice(0, 4).map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
      <img className={styles.middleImg} src="/images/4.jpg" alt="" />

      <div className={styles.secondFeed}>
        {products.slice(4, 5).map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>

      {products.slice(5, products.length).map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
