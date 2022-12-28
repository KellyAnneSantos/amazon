import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { fetchProduct } from "../../store/productReducer";

const DescriptionsTab = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state?.products[productId]);
  const descriptions = product.Descriptions;

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  return (
    <>
      <NavLink to={`/products/${product?.id}/edit`}>
        <h1>Vital Info</h1>
      </NavLink>
      <NavLink to={`/products/${product?.id}/images`}>
        <h1>Images</h1>
      </NavLink>
      <h1>Description</h1>
      <img src={product?.description} />
      <NavLink to={`/products/${product?.id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <NavLink to={`/products/${product?.id}/edit`}>
        <button>Delete</button>
      </NavLink>
      <div>
        {descriptions?.map((description) => {
          return (
            <DescriptionForms key={description?.id} description={description} />
          );
        })}
      </div>
    </>
  );
};

export default DescriptionsTab;
