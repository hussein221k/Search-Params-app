import ProductSkeleton from "./SkeletonLoader";
import type { Product } from "../schema/product";

const ProductsCards = ({ products }: { products: Product[] | undefined }) => {
  if (!products) {
    return <ProductSkeleton />;
  }
  return (
    <div className="flex flex-wrap justify-center gap-7 p-6 bg-[#0b0f1a]">
      {products.map((product) => (
        <div
          key={product.id}
          className="
            w-80
            bg-[#111827]
            border border-white/10
            rounded-xl
            shadow-lg shadow-[#22d3ee33]
            hover:shadow-[#646cff66]
            hover:-translate-y-1
            transition-all duration-300
            overflow-hidden
          "
        >
          <div className="flex flex-col items-center gap-3 p-5 text-center">
            <p className="text-lg font-semibold text-[#6e9fff]">
              {product.name}
            </p>

            <p className="text-[#476fe7] font-bold text-lg">${product.price}</p>

            <p className="text-sm text-[#7c83ff] uppercase tracking-wide">
              {product.category}
            </p>

            <p className="text-sm text-[#9ca3af] leading-relaxed">
              {product.description}
            </p>

            <span
              className="
                w-70 h-50
                rounded-lg
                border border-white/10
                bg-[#0d1b3e]
              "
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCards;
