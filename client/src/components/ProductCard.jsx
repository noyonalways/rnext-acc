import { Star } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product, onViewDetails }) {
  const { id, title, description, price, rating, thumbnail } = product;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden cursor-pointer">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onClick={() => onViewDetails(id)}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-200">
            <button
              onClick={() => onViewDetails(id)}
              className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-sm"
            >
              View Details
            </button>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
            <span className="text-sm font-semibold text-gray-900">
              {rating}
            </span>
          </div>
          <span className="text-xs text-gray-500">({rating})</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <span className="text-2xl font-bold text-gray-900">${price}</span>
          </div>
          <button
            onClick={() => onViewDetails(id)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-sm"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
