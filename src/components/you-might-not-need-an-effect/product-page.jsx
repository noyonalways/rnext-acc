import { useState } from "react";

export default function ProductPage({ product, addToCart }) {
  const [notificationMessage, setNotificationMessage] = useState(null);

  // 🔴 Avoid: Event-specific logic inside an Effect
  // useEffect(() => {
  //     if (product.isInCart) {
  //         showNotification(`Added ${product.title} to the shopping cart!`);
  //     }
  // }, [product]);

  function buyProduct() {
    addToCart(product);
    showNotification(`Added ${product.title} to the shopping cart!`);
  }

  function handleBuyClick() {
    buyProduct();
  }

  function handleCheckoutClick() {
    buyProduct();
    navigateTo("/checkout");
  }

  function showNotification(msg) {
    setNotificationMessage(msg);
  }

  function navigateTo(url) {
    console.log(`Assume that we have navigated to ${url}`);
  }

  return (
    <div className="m-10">
      <div className="w-full max-w-sm rounded-md bg-amber-400 p-6">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <h1 className="text-3xl font-bold">{product.price.toFixed(2)} Tk</h1>

        <div className="mt-2 space-x-2">
          <button
            className="cursor-pointer rounded-md bg-gray-300 px-4 py-2 transition-colors duration-200 hover:bg-gray-400"
            onClick={handleBuyClick}
          >
            Buy now
          </button>
          <button
            className="cursor-pointer rounded-md bg-gray-300 px-4 py-2 transition-colors duration-200 hover:bg-gray-400"
            onClick={handleCheckoutClick}
          >
            Checkout
          </button>
        </div>
      </div>
      {notificationMessage && (
        <div
          className="mt-4 w-full max-w-sm rounded-md bg-green-400 p-4"
          onClick={() => setNotificationMessage(null)}
        >
          <span>{notificationMessage}</span>
        </div>
      )}
    </div>
  );
}
