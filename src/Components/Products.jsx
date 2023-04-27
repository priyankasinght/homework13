import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Products(props) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });

        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCategories(data);
            });
    }, []);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSearch = () => {
        if (selectedCategory) {
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setProducts(data);
                });
        }
    };

    return (
        <div className="products-container">
            <h2 className="products-title">Products</h2>
            <div className="search-container">
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            {products.length > 0 ? (
                <div className="container">
                    {products.map((product) => {
                        return (
                            <div className="cardStyle" key={product.id}>
                                <img alt="loading" src={product.image} className="prod-img" />
                                <h3>{product.title}</h3>
                                <p>$ {product.price} </p>
                                <Link to={`/productdetails/${product.id}`}>
                                    <button>Product Details</button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <h2>
                    No Product to Display
                </h2>
            )}
        </div>
    );
}

export default Products;
