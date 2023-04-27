import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails(props) {
  const { id } = useParams();
  const [state, setState] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    price: 0,
    category: "",
  });
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, [id]);

  return (
    <div className="product-details">
      <h2>{state.category}</h2>
      <img alt={state.title} src={state.image} className="product-image" />
      <h3>{state.title}</h3>
      <p>{state.description}</p>
      <p>$ {state.price}</p>
      <div className="button-container">
        <Link to="/">
          <button className="button">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
