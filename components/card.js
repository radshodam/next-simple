import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AiOutlineShopping } from "react-icons/ai";
import Products from "../pages/products/index";
const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};
function Card({ data }) {
  return (
    <div className={styles.container}>
      <div className="pl-12">
        <div className="grid md:grid-cols-3 md:gap-8 sm:grid-cols-2 sm:gap-8 items-center gap-8  ">
          <Products data={data} />
        </div>
      </div>
    </div>
  );
}

export default Card;
// getStaticProps(ssg);
// getStaticPaths(ssg);
//
// getServerSideProps(ssr)
