import Link from "next/link";
import Image from "next/image";
import React from "react";
//redux dispach
import { useDispatch } from 'react-redux'
import { increament } from '../../actions/actions'

//redux
import { AiOutlineShopping } from "react-icons/ai";
import { BiLike } from "react-icons/bi";

const myLoader = ({ src }) => {
  return `${src}`;
};
function Title({ data }) {
  const dispatch=useDispatch()
  return (
    <>
      <div className="relative flex flex-row-reverse justify-center h-full pt-4 mx-auto border-2 shadow-xl md:w-9/12 sm:w-full rounded-2xl pb-7">
        <div>
          <Image
            src={data.image}
            alt={data.title.toString(0, 25)}
            width={500}
            height={500}
            loader={myLoader}
          />
        </div>
        <div className="flex flex-col my-auto justify-evenly h-60 px-7 ">
          <h1 className="px-4 py-0 pt-3 pb-2 font-bold text-right text-gray-800 border-b-2">
            {data.title}
          </h1>
          <div className="flex px-4 ">
            likes:
            <span className="py-1 text-xl text-gray-600">
              <BiLike />
            </span>
          </div>
          <h4 className="px-4">price: {data.price} $</h4>
          <button onClick={()=>dispatch(increament())}  className="flex justify-center mx-4 text-xl text-center text-white transition-all bg-red-500 border-2 border-red-400 rounded-md w-36">
            add to cart
            <span className="py-1 pl-2 text-2xl">
              <AiOutlineShopping />
            </span>
          </button>
        </div>
        <Link href="/">
          <a className="absolute w-40 font-bold text-center text-white transition-all bg-red-300 border-2 border-red-400 rounded-md bottom-4 left-4 hover:shadow-custom">
            back Home Page
          </a>
        </Link>
      </div>
    </>
  );
}

export default Title;

//? getStaticPaths
export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const paths = products.map((m) => {
    return {
      params: { id: m.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
//get staticProps
export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products = await res.json();
  return {
    props: {
      data: products,
    },
  };
};
