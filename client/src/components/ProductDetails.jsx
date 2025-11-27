import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ShoppingCart, Star, X } from "lucide-react";

const fetchProductDetails = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:5000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

export default function ProductDetails({ productId, isOpen, onClose }) {
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: fetchProductDetails,
  });

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed top-0 left-0 inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 top-0 left-0 z-60 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
          {/* Close Button */}
          <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 bg-white">
            <h2 className="text-2xl font-bold text-gray-900">
              Product Details
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600 font-medium">
                    Loading product details...
                  </p>
                </div>
              </div>
            ) : isError ? (
              <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-red-600 font-semibold mb-2">
                  Error loading product
                </p>
                <p className="text-gray-600">
                  {error?.message || "Something went wrong"}
                </p>
              </div>
            ) : product ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden h-96">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-between">
                  {/* Title and Rating */}
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      {product.title}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center gap-1 bg-gray-50 px-3 py-2 rounded-lg">
                        <Star className="w-5 h-5 fill-gray-900 text-gray-900" />
                        <span className="text-lg font-bold text-gray-900">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-gray-600 font-medium">
                        Highly Rated
                      </span>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                        Description
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="mb-6">
                      <p className="text-gray-600 text-sm mb-2">Price</p>
                      <p className="text-4xl font-bold text-gray-900">
                        ${product.price}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-semibold">
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                      <button
                        onClick={onClose}
                        className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
