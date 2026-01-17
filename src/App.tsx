import Navbar from "./components/Navbar";
import ProductsCards from "./components/ProductsCards";
import useFilteredProducts from "./hooks/UseFilterProduct";
function App() {
  const {
    products,
    filters,
    handleChange,
  } = useFilteredProducts();

  return (
    <div className="bg-[#0b0f1a] w-full min-h-screen p-4">
      <Navbar />

      {/* Search & Filters */}
      <div
        className="
          mt-6 p-4
          flex flex-wrap items-center justify-between gap-4
          bg-[#111827]
          border border-white/10
          rounded-xl
          shadow-lg shadow-[#22d3ee22]
        "
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={filters.search || ""}
          onChange={(e) => handleChange(e, "search")}
          className="
            w-full md:w-1/3
            px-4 py-2
            bg-[#0b0f1a]
            text-[#e5e7eb]
            placeholder-[#6b7280]
            border border-white/10
            rounded-lg
            outline-none
            focus:border-[#646cff]
            focus:shadow-[0_0_15px_#646cff55]
            transition
          "
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Price Sort */}
          <select
            name="sort"
            id="sort"
            value={filters.price || ""}
            onChange={(e) => handleChange(e, "price")}
            className="
              px-4 py-2
              bg-[#0b0f1a]
              text-[#e5e7eb]
              border border-white/10
              rounded-lg
              cursor-pointer
              focus:border-[#22d3ee]
              focus:shadow-[0_0_12px_#22d3ee55]
              transition
            "
          >
            <option value="">Sort</option>
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
          </select>

          {/* Category Filter */}
          <select
            name="category"
            id="category"
            value={filters.category || "all"}
            onChange={(e) => handleChange(e, "category")}
            className="
              px-4 py-2
              bg-[#0b0f1a]
              text-[#e5e7eb]
              border border-white/10
              rounded-lg
              cursor-pointer
              focus:border-[#646cff]
              focus:shadow-[0_0_12px_#646cff55]
              transition
            "
          >
            <option value="all">All Categories</option>
            {[...new Set(products?.map((p) => p.category))].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Cards */}
      <div className="mt-6">
        <ProductsCards products={products} />
      </div>
    </div>
  );
}

export default App;
