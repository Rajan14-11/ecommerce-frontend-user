import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug, getProductPage } from "../../../actions";
import { Link, useParams } from "react-router-dom";
import Card from "../../../components/UI/Card";
import { MaterialButton } from "../../../components/MaterialUI";
import Rating from "../../../components/UI/Rating";
import Price from "../../../components/UI/Price";

import "./style.css";

const ProductStore = () => {
  const product = useSelector((state) => state.product);

  //   const priceRange = product.priceRange;
  const dispatch = useDispatch();
  const slug = useParams();

  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
    under30k: 30000,
  });

  useEffect(() => {
    dispatch(getProductBySlug(slug.slug));
  }, []);

  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <Card
            headerLeft={`${slug.slug} mobile under ${priceRange[key]}`}
            headerRight={
              <MaterialButton
                title={"VIEW ALL"}
                style={{
                  width: "96px",
                }}
                bgColor="#2874f0"
                fontSize="12px"
              />
            }
            style={{
              width: "calc(100% - 40px)",
              margin: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product, index) => (
                <Link
                  key={product._id}
                  to={`/${product.slug}/${product._id}/p`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "#000",
                  }}
                  className="productContainer"
                >
                  <div className="productImgContainer">
                    <img
                      style={{ margin: "10px 0" }}
                      src={product.productPictures[0].img}
                      alt=""
                    />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "10px 0" }}>{product.name}</div>
                    <div>
                      <Rating value="4.3" />
                      &nbsp;&nbsp;
                      <span
                        style={{
                          color: "#777",
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                      >
                        (3353)
                      </span>
                    </div>
                    <Price value={product.price} />
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ProductStore;
