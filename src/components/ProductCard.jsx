function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-3">
        {product.title?.slice(0,20)}...
      </h2>

      <p className="text-gray-600">
        ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-3 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;