import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productReducer";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";
import CaptionItems from "../CaptionItems";

function LandingPage() {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => state.products));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div id="landing-page">
      <div id="carousel">
        {/* <img
          src="https://cottoncandy.com/wp-content/uploads/2022/11/CC-Main-Banner-Ib.jpg"
          id="ad-banner"
        ></img> */}
        <span id="left-arrow">
          <i class="fa-solid fa-chevron-left fa-2xl"></i>
        </span>

        <img
          src="https://superiortile.com/wp-content/uploads/2019/06/banner-magnolia-italian-deco-wall-tile-settecento-anaheim-ca-1900x550.jpg"
          id="ad-banner"
        ></img>
        <span id="right-arrow">
          <i class="fa-solid fa-chevron-right fa-2xl"></i>
        </span>
      </div>
      <div id="landing-inner-div">
        {products?.map((product) => (
          <div key={product.id} className="product-cards">
            <h2 className="landing-card-titles">{product?.name}</h2>
            <NavLink to={`/products/${product?.id}`} key={product?.id}>
              <img src={product?.previewImage} className="landing-images" />
            </NavLink>
            <CaptionItems department={product?.department} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
