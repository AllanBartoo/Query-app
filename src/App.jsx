import { useState, useEffect } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [favorite, setfavorite] = useState([]);

  // Fetching data and mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setAllResults(data || []);
        setResults([]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter through the results
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        const filteredResults = allResults.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, allResults]);

  // Function to favorite products
  const handleClick = (product) => {
    const isfavorited = favorite.some((item) => item.id === product.id);

    if (isfavorited) {
      setfavorite(favorite.filter((item) => item.id !== product.id));
    } else {
      setfavorite([...favorite, product]);
    }
  };

  return (
    // Body
    <main className="sm:mx-10 md:mx-15 py-4 px-2">
      {/* Navigation */}
      <nav className="flex items-center flex-col gap-4 sm:flex-row">
        <p className="text-3xl font-bold text-black dark:text-white">
          <span className="text-Accent">S</span>hoppe
        </p>
        <SearchBar query={query} setQuery={setQuery} />
      </nav>

      {/* Products section*/}
      {results.length === 0 && query.trim() === "" ? (
        <p className="text-gray-500 text-center my-8">
          Start typing to search for products.
        </p>
      ) : results.length === 0 && query.trim() !== "" ? (
        <p className="text-red-500 text-center my-8">
          No products found matching “{query}”.
        </p>
      ) : (
        <section>
          <h2 className="text-2xl font-bold my-6 dark:text-white">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
            {results.map((product) => (
              <Card
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                onClick={() => handleClick(product)}
                favorited={favorite.some((item) => item.id === product.id)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Favorites section*/}
      {favorite.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold my-6">Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorite.map((product) => (
              <Card
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                onClick={() => handleClick(product)}
                favorited={favorite.some((item) => item.id === product.id)}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default App;
