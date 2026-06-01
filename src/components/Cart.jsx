function Cart({ cart ,removeFromCart }) {
  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Cart Items
      </h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <p>{item.title}</p>
              <p>₹{item.price} * {item.quantity} = ₹{item.price * item.quantity}</p>
              <button
  onClick={() => removeFromCart(index)}
  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
>
  Remove
</button>
            </div>
          ))}

          <h3 className="text-xl font-bold mt-4">
            Total: ₹{total}
          </h3>
        </>
      )}
      
      
    </div>
  );
}

export default Cart;