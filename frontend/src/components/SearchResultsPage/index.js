import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchSearchProducts } from "../../store/productReducer";
import { fetchSearchResults } from "../../store/searchReducer";
import SearchResultsProducts from "../SearchResultsProducts";

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
  // setName(substring);
  //     .replace(/=/g, `:"`)
  //     .replace(/&/g, `",`)
  //     .replace("?", "{") + "}";

  // const string = result.slice(1);
  // console.log(string);
  // let arr = string.replace("?", "").split("&");
  // console.log(arr);

  let query = { name: substring };

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
    <>
      <p>
        1 - {products.length} of {products.length} results for "{substring}"
      </p>
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
      <form onSubmit={handleDepartment}>
        <select
          name="type"
          onChange={(e) => setDepartment(e.target.value)}
          value={department}
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
        <button type="Submit">Filter by Department</button>
      </form>
      <form onSubmit={handlePrice}>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        -
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button type="submit">Filter Price</button>
      </form>
      <div>
        {products?.map((product) => {
          return <SearchResultsProducts key={product?.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default withRouter(SearchResultsPage);
