
import { useState ,useEffect} from "react";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {

  
    const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

const [search,setSearch]=useState("");
const filteredProducts=products.filter((product)=> product.title.toLowerCase().includes(search.toLowerCase()))
  
  useEffect(() => {
fetch("http://localhost:5000/products")
.then((res) => res.json())
.then((data) => setProducts(data));
}, []); 

  function addToCart(product) {
    const existingItem = cart.find(
  (item) => item.id === product.id
);

if (existingItem) {
  const updatedCart = cart.map((item ) =>
    item.id === product.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  setCart(updatedCart);

} else {
  setCart([
    ...cart,
    { ...product, quantity: 1 },
  ]);
}
  }
  function removeFromCart(indexToRemove) {
  const updatedCart = cart.filter(
    (_, index) => index !== indexToRemove
  );

  setCart(updatedCart);
  
  
}

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar  search={search} setSearch={setSearch}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

      <div className="p-6">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>

    </div>
  );
}

export default App;
