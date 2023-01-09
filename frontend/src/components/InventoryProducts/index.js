import { NavLink } from "react-router-dom";
import "./InventoryProducts.css";

const InventoryProducts = ({ product }) => {
  return (
    <tr className="inventory-product-row">
      <td style={{ width: "24%" }}>
        <NavLink
          to={`/products/${product?.id}`}
          className="inventory-product-name"
        >
          <img
            src={product.previewImage}
            alt="Product"
            className="inventory-product-img"
          />
        </NavLink>
      </td>
      <td style={{ width: "24%" }}>
        <NavLink
          to={`/products/${product?.id}`}
          className="inventory-product-name"
        >
          <span className="inventory-product-name">{product.name}</span>
        </NavLink>
      </td>
      <td style={{ width: "24%" }} className="inventory-product-date">
        <span>{product.createdAt.substring(0, 10)}</span>
      </td>
      <td style={{ width: "24%" }} className="inventory-product-price">
        <span>${product.price.toFixed(2)}</span>
      </td>
      <td style={{ width: "24%" }}>
        <NavLink to={`/products/${product?.id}/edit`}>
          <button className="inventory-edit-btn">Edit</button>
        </NavLink>
      </td>
    </tr>
  );
};

export default InventoryProducts;
