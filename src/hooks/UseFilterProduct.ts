import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Product, Filters } from "../schema/product";
import productGet from "../api/productGet";
import { useDebounce } from "./useDebounce";
import { useSearchParams } from "react-router-dom";

export default function useFilteredProducts() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: productGet,
  });

  const [filters, setFilters] = useState<Filters>({
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "all",
    price: (searchParams.get("price") as "asc" | "desc") || undefined,
  });

  const debouncedSearch = useDebounce(filters.search, 400);

  const handleFilterChange = useCallback(
    (key: keyof Filters, value: string | undefined) => {
      setFilters((prev) => ({ ...prev, [key]: value }));

      const params = new URLSearchParams(searchParams);

      if (value && !(key === "category" && value === "all")) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      setSearchParams(params);
    },
    [searchParams, setSearchParams],
  );

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
      key: keyof Filters,
    ) => {
      handleFilterChange(key, e.target.value);
    },
    [handleFilterChange],
  );

  const filteredProducts = products
    ?.filter((product) => {
      const matchesSearch = debouncedSearch
        ? product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        : true;
      const matchesCategory =
        filters.category && filters.category !== "all"
          ? product.category === filters.category
          : true;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (filters.price === "asc") return a.price - b.price;
      if (filters.price === "desc") return b.price - a.price;
      return 0;
    });

  return {
    products: filteredProducts,
    filters,
    handleChange,
  };
}
