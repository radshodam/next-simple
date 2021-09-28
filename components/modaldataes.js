import { useSelector } from "react-redux";

const ModalDataes = () => {
  // const valArray = useSelector((state) => state.DataMod);
  const numberProducts = useSelector((state) => state.Counter);
  return (
    <div>
      {numberProducts}
    </div>
  );
};

export default ModalDataes;
