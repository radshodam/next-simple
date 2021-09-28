import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";
//redux dispach
import { useDispatch } from "react-redux";
import { increament } from "../../actions/actions";

//redux
const myLoader = ({ src }) => {
  return `${src}`;
};
//

const Products = ({ data }) => {
  // const handleClick = (id) => {
  //   console.log(id);
  // };
  const [theme] = useContext(ThemeContext);
  //dispatch redux
  const dispatch = useDispatch();
  //
  console.log(data);
  return (
    <>
      {data.map((n) => {
        return (
          <>
            <div
              className={`justify-between p-1 px-1 mx-auto transition-all ease-in bg-white border-2 rounded-md shadow-md w-12/12 hover:shadow-2xl ${
                theme && "darkBox"
              }`}
            >
              <ul>
                <div className="flex justify-center ">
                  <Image
                    loader={myLoader}
                    src={n.image}
                    alt={n.title.substring(0, 18)}
                    width={312}
                    height={312}
                  />
                </div>

                <li
                  key={n.id}
                  className="px-4 pt-3 font-semibold text-right text-gray-800"
                >
                  {n.title.substring(0, 15)}
                </li>
                <p className="px-4 font-bold text-left text-gray-800">
                  price:
                  {n.price} $
                </p>

                <div className="my-4 border-t-2 ">
                  <div className="flex justify-between px-4 my-4 ">
                    {/* id root */}
                    <Link href={`/products/${n.id}`}>
                      <a>
                        <button className="w-32 font-bold text-center text-red-400 transition-all border-2 border-red-400 rounded-md hover:shadow-custom">
                          show details
                        </button>
                      </a>
                    </Link>

                    <button
                      onClick={() => dispatch(increament())}
                      className="flex justify-center text-xl text-center text-white transition-all bg-red-300 border-2 border-red-400 rounded-md w-7"
                    >
                      <AiOutlineShopping />
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Products;
