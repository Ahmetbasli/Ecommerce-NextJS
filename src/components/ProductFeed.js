import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
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
