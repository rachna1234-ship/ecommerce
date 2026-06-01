function Navbar( {search,setSearch}) {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">My Store</h1>

      <button className="bg-white text-blue-600 px-4 py-1 rounded">
        Cart
      </button>
      <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  className="px-3 py-1 rounded text-black"
/>
    </div>
  );
}

export default Navbar;