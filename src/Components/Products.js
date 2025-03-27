import Title from "./Title.js";
import { productData } from "../data.js";

const Products = () => {

  function formatCentsToDollars(value) {
    return (value / 100).toFixed(2);
  }
  return (
    <section className="section" id="products">
      <Title title="featured" subTitle="products" />

      <div className="section-center featured-center">
        {productData.map((product) => {
          const { id, image, date, title, info, location, stock, cost } = product;

          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{stock} Stock Quantity</p>
                  <p>${formatCentsToDollars(cost)}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
