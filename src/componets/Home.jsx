import Cart from "./Home/Cart";
// import PropTypes from "prop-types";
const Home = ({ products }) => {
  // console.log(products);

  return (
    <div className="container">
      <div
        className="row 
       my-4 "
      >
        {products.map((product) => (
          <Cart
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
