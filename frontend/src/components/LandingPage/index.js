import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productReducer";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";
import CaptionItems from "../CaptionItems";
import Footer from "../Footer";

function LandingPage() {
  const dispatch = useDispatch();
  const products = Object.values(useSelector((state) => state.products));

  const [img, setImg] = useState(true);
  const [txt, setTxt] = useState(true);
  const [dep, setDep] = useState(true);

  let imgArr = [
    "https://bvtileandstone.com/wp-content/uploads/2018/03/banner-essential-italian-wood-look-floor-wall-tile-elios-1900x550.jpg",
    "https://footballnsw.com.au/wp-content/uploads/2022/10/1900x550-web-header-strategic-plan.jpg",
  ];
  let textArr = ["Adorn your Home.", "Gear up for Sports."];
  let depArr = ["Home", "Sports"];

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleClick = (img, txt) => {
    setImg(!img);
    setTxt(!txt);
    setDep(!dep);
  };

  return (
    <div id="landing-page">
      <div id="carousel">
        <span id="left-arrow" onClick={() => handleClick(img, txt, dep)}>
          <i className="fa-solid fa-chevron-left fa-2xl"></i>
        </span>
        <NavLink to={`/search?department=${depArr[dep >> 0]}`}>
          <div id="banner-txt">{textArr[txt >> 0]}</div>
        </NavLink>
        <img src={imgArr[img >>> 0]} id="ad-banner"></img>
        <span id="right-arrow" onClick={() => handleClick(img, txt, dep)}>
          <i className="fa-solid fa-chevron-right fa-2xl"></i>
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
      <Footer />
    </div>
  );
}

export default LandingPage;
