import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productReducer";
import { NavLink } from "react-router-dom";

function LandingPage() {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => state.products));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          {product?.department}
          <NavLink to={`/products/${product?.id}`} key={product?.id}>
            <img src={product?.previewImage} />
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default LandingPage;
