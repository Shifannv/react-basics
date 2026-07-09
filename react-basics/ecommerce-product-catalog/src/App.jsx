import { useEffect, useState } from "react";
import axios from "axios";
import CategoryFilter from "./components/CategoryFilter";
import SortProducts from "./components/SortProducts";

import "./App.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import Loading from "./components/Loading";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [category, setCategory] = useState("all");
const [sort, setSort] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")

      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })

      .catch(() => {
        setError("Failed to Load Products");
        setLoading(false);
      });
  }, []);

  let filteredProducts = products.filter((product) => {

  const matchSearch =
    product.title
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchCategory =
    category === "all" ||
    product.category === category;

  return matchSearch && matchCategory;

});

if (sort === "low") {

  filteredProducts.sort(
    (a, b) => a.price - b.price
  );

}

if (sort === "high") {

  filteredProducts.sort(
    (a, b) => b.price - a.price
  );

}

  if (loading) return <Loading />;

  if (error) return <h1>{error}</h1>;

  return (
    
     <Routes>

    <Route
      path="/"
      element={
        <>
          <Navbar />

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <CategoryFilter
            category={category}
            setCategory={setCategory}
          />

          <SortProducts
            sort={sort}
            setSort={setSort}
          />

           <div className="products">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (

          <h2 className="no-product">
            ❌ No Products Found
          </h2>

        )}

      </div>
        </>
      }
    />

    <Route
      path="/product/:id"
      element={<ProductDetails />}
    />
    
    <Route 
      path="/cart"
      element={<Cart />}
    />

  </Routes>
  )};

export default App;