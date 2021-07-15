import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import styles from "../styles/components/index.module.css";
export default function Home({ data: products }) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className={styles.main}>
        {/* banner */}

        <Banner />
        {/* product feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
