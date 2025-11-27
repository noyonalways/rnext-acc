import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";

const fetchProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:5000/${queryKey[0]}?_page=${queryKey[1].page}&_per_page=${queryKey[1].productPerPage}`
  );
  return response.data;
};

export default function ProductList() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", { page, productPerPage }],
    queryFn: fetchProducts,
  });

  const handleViewDetails = (productId) => {
    setSelectedProductId(productId);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setTimeout(() => setSelectedProductId(null), 300);
  };

  // Pagination calculations (keep out of JSX — follow best practices)
  const totalItems = products?.items ?? 0;
  const totalPages = products?.pages ?? 1;
  const firstPage = products?.first ?? 1;
  const lastPage = products?.last ?? totalPages;
  const prevPage = products?.prev ?? null;
  const nextPage = products?.next ?? null;
  const hasFirst = products?.first != null;
  const hasLast = products?.last != null;

  const startItem = Math.min((page - 1) * productPerPage + 1, totalItems);
  const endItem = Math.min(page * productPerPage, totalItems);

  // Page number windowing
  const maxButtons = 7;
  let startPage = 1;
  let endPage = totalPages;
  if (totalPages > maxButtons) {
    const half = Math.floor(maxButtons / 2);
    startPage = Math.max(1, page - half);
    endPage = Math.min(totalPages, startPage + maxButtons - 1);
    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
  }

  const pageNumbers = [];
  for (let p = startPage; p <= endPage; p++) pageNumbers.push(p);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading products...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center bg-gray-50 p-8 rounded-lg border border-gray-200">
          <p className="text-red-600 font-semibold mb-2">
            Error loading products
          </p>
          <p className="text-gray-600">
            {error?.message || "Something went wrong"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Products</h1>
          <p className="text-gray-600">
            Browse our collection of quality products
          </p>
        </div>

        {/* Product Grid */}
        {products?.data?.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <label className="text-sm text-gray-600">Show</label>
                <select
                  value={productPerPage}
                  onChange={(e) => {
                    setProductPerPage(Number(e.target.value));
                    setPage(1);
                  }}
                  className="border border-gray-200 rounded-md px-2 py-1 text-sm"
                >
                  <option value={6}>6</option>
                  <option value={8}>8</option>
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                </select>
                <span className="text-sm text-gray-500">per page</span>
              </div>

              <div className="text-sm text-gray-600">
                {`Showing ${startItem}-${endItem} of ${totalItems}`}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products?.data?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            <div className="flex items-center justify-center space-x-2 mt-6">
              <button
                onClick={() => setPage(firstPage)}
                disabled={!hasFirst || page === firstPage}
                className="px-3 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                First
              </button>

              <button
                onClick={() => setPage(prevPage ?? page)}
                disabled={!prevPage}
                className="px-3 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>

              {/* Page numbers - show window when many pages */}
              <div className="flex items-center space-x-1">
                {startPage > 1 && (
                  <>
                    <button
                      onClick={() => setPage(1)}
                      className="px-3 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 font-medium"
                    >
                      1
                    </button>
                    <span className="px-2">...</span>
                  </>
                )}

                {pageNumbers.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-3 py-2 rounded-md font-medium transition-colors ${
                      p === page
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {p}
                  </button>
                ))}

                {endPage < totalPages && (
                  <>
                    <span className="px-2">...</span>
                    <button
                      onClick={() => setPage(totalPages)}
                      className="px-3 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 font-medium"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </div>

              <button
                onClick={() => setPage(nextPage ?? page)}
                disabled={!nextPage}
                className="px-3 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>

              <button
                onClick={() => setPage(lastPage)}
                disabled={!hasLast || page === lastPage}
                className="px-3 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Last
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg font-medium">
              No products available
            </p>
          </div>
        )}
      </div>

      {/* Product Details Modal */}
      {selectedProductId && (
        <ProductDetails
          productId={selectedProductId}
          isOpen={isDetailsOpen}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
}
