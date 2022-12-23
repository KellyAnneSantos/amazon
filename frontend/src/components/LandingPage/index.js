import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productReducer";

function LandingPage() {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => state.products));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {products?.map((product) => (
        <img src={product?.previewImage} key={product?.id} />
      ))}
    </div>
  );
}

export default LandingPage;
