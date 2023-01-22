import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchSearchProducts } from "../../store/productReducer";
import { fetchSearchResults } from "../../store/searchReducer";
import SearchResultsProducts from "../SearchResultsProducts";
import "./SearchResultsPage.css";

const SearchResultsPage = ({ location }) => {
  const dispatch = useDispatch();

  const products = Object.values(useSelector((state) => state.products));
  // const products = Object.values(useSelector((state) => state.results));

  // const [prime, setPrime] = useState(false);
  let [string, setString] = useState("");
  const [department, setDepartment] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  string = location.search;
  let substring = string.substring(string.indexOf("=") + 1, string.length);
  let depSubstring = string.substring(
    string.indexOf("=") - 10,
    string.indexOf("=")
  );
  // setName(substring);
  //     .replace(/=/g, `:"`)
  //     .replace(/&/g, `",`)
  //     .replace("?", "{") + "}";

  // const string = result.slice(1);
  // console.log(string);
  // let arr = string.replace("?", "").split("&");
  // console.log(arr);
  let query;

  if (depSubstring === "department") {
    query = { department: substring };
  } else {
    query = { name: substring };
  }

  let max;

  // if (quantity?.length > 500000) {
  //   max = "over 500000";
  // } else {
  //   max = quantity?.length;
  // }

  let set = new Set();
  let arr = [];

  products?.forEach((product) => {
    set.add(product?.department);
  });

  for (let element of set.values()) {
    arr.push(element);
  }

  // const handleChange = () => {

  //   substring += `&prime=${prime}`;
  //   query = { name: substring };

  //   dispatch(fetchSearchProducts(query));
  //   dispatch(fetchSearchResults(query));
  // };

  // const handlePrime = (e) => {
  //   e.preventDefault();

  //   query = { ...query, prime };
  //   dispatch(fetchSearchProducts(query));
  //   dispatch(fetchSearchResults(query));
  // };
  const handleDepartment = (e) => {
    e.preventDefault();

    query = { ...query, department };
    dispatch(fetchSearchProducts(query));
    dispatch(fetchSearchResults(query));
    setMinPrice("");
    setMaxPrice("");
  };

  const handlePrice = (e) => {
    e.preventDefault();

    query = { ...query, minPrice, maxPrice };
    dispatch(fetchSearchProducts(query));
    dispatch(fetchSearchResults(query));
    setDepartment("");
  };

  useEffect(() => {
    setString(location.search);
    dispatch(fetchSearchProducts(query));
  }, [location.search]);

  return (
    <div>
      <div id="search-top">
        <span id="search-title">
          1 - {products.length} of {products.length} results for
        </span>
        <span id="search-substring"> "{substring}"</span>
      </div>
      <div id="edit-product-hr-section">
        {/* <hr className="edit-short-hr" /> */}
        <hr className="edit-long-hr" />
      </div>
      {/* <form onClick={handleChange}>
        <label>
          Prime
          <input
            type="checkbox"
            checked={prime}
            onClick={() => setPrime(!prime)}
          />
        </label>
      </form> */}
      {/* <form onSubmit={handlePrime}>
        <select
          name="type"
          onChange={(e) => setPrime(e.target.value)}
          value={prime}
        >
          <option value="" disabled>
            Select a delivery
          </option>
          <option value={true}>Prime</option>
          <option value={false}>All</option>
        </select>
        <button type="Submit">Filter by Delivery</button>
      </form> */}
      <div id="search-results-container">
        <div id="search-form">
          {depSubstring !== "department" && (
            <form onSubmit={handleDepartment}>
              <select
                name="type"
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
                id="search-dep-form"
              >
                <option value="" disabled>
                  Select a department
                </option>
                {arr?.map((ele) => {
                  return (
                    <option key={ele} value={ele}>
                      {ele}
                    </option>
                  );
                })}
              </select>
              <button type="Submit" id="search-filter-btn">
                Filter by Department
              </button>
            </form>
          )}
          <form onSubmit={handlePrice}>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="search-price-input"
            />
            -
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="search-price-input"
            />
            <button type="submit" id="search-filter-btn">
              Filter Price
            </button>
          </form>
        </div>
        <div>
          <h1 id="search-right-title">RESULTS</h1>
          {products?.map((product) => {
            return (
              <SearchResultsProducts key={product?.id} product={product} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchResultsPage);
