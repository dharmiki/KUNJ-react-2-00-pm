import { useEffect, useState } from "react";

const UserDashboard  = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div>
      <h2>User Home Page</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div>
          {products.map((product, index) => (
            <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
              {product.image && (
                <img src={product.image} alt={product.name} width="100" />
              )}
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard ;
// actually me drop lidhu hatu nd atiatre bca purse karu chu maro prospective aavo hato ke rather then taking the degree want to expert in the skills so 