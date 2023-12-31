import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./productCard.css";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ProductCard({ productId, image, title, price, storeName, rating }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const renderStars = () => {
    const starCount = Math.round(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const starColor = i < starCount ? "#FF9529" : "gray";
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} size="sm" color={starColor} />
      );
    }

    return stars;
  };

  return (
    <Link className="text-decoration-none" to={`/product/${productId}`}>
      <div className="ProductCard">
        <div className="card mt-3 mb-3 h-100">
          <img
            // src={image[0].photo_path}
            src={require("../../asset/img/productImage.png")}
            className="card-img-top"
            alt="Product"
          />
          <div className="card-body">
            {/* <h5 className="product-title card-title">{title}</h5> */}
            <h5 className="product-title card-title">Jas Hitam</h5>
            {/* <h5 className="price card-title" style={{ color: "#DB3022" }}>
              {formatPrice(price)}
            </h5> */}
            <h5 className="price card-title" style={{ color: "#DB3022" }}>
              {formatPrice(150000)}
            </h5>
            {/* <small className="text text-muted">{storeName}</small> */}
            <small className="text text-muted">Taylor Swift</small>

            <div className="row my-2">
              <div className="ic-rating col-auto pe-0">{renderStars()}</div>

              <div className="rating col-auto ps-0">
                <small className="text">({rating})</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
