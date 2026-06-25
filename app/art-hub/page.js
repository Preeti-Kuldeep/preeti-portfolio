import Link from "next/link";

export default function ArtHubGallery() {
  return (
    <div className="max-w-7xl mx-auto px-10 py-20">

      {/* Back Button */}
      <Link
        href="/"
        className="text-blue-600 font-medium hover:underline"
      >
        ← Back to Portfolio
      </Link>

      {/* Heading */}
      <h1 className="text-5xl font-bold mt-8">
        ART HUB
      </h1>

      <p className="text-lg text-gray-300 mt-4">
        Complete project showcase and application walkthrough.
      </p>

      {/* Gallery */}
      <div className="grid md:grid-cols-2 gap-10 mt-12">

        {/* Homepage */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-2xl font-bold mb-2 text-black">Homepage</h2>
          <p className="text-gray-600 mb-4">
            Browse featured artworks and discover paintings from different artists.
          </p>

          <img
            src="/images/arthub-homepage.jpeg"
            alt="Homepage"
            className="w-full h-72 object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Login */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-2xl font-bold mb-2 text-black">User Login</h2>
          <p className="text-gray-600 mb-4">
            Secure login for buyers and sellers.
          </p>

          <img
            src="/images/arthub-login.png"
            alt="Login"
            className="w-full h-72 object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-2xl font-bold mb-2 text-black">Product Details</h2>
          <p className="text-gray-600 mb-4">
            View artwork details, pricing and product information.
          </p>

          <img
            src="/images/arthub-product.jpeg"
            alt="Product Details"
            className="w-full h-72 object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Seller Dashboard */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-2xl font-bold mb-2 text-black">Seller Dashboard</h2>
          <p className="text-gray-600 mb-4">
            Manage artworks, profile and product listings.
          </p>

          <img
            src="/images/arthub-sellerprofile.jpeg"
            alt="Seller Dashboard"
            className="w-full h-72 object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Shopping Cart */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-2xl font-bold mb-2 text-black">Shopping Cart</h2>
          <p className="text-gray-600 mb-4">
            Review selected products before placing an order.
          </p>

          <img
            src="/images/arthub-cart.png"
            alt="Shopping Cart"
            className="w-full h-72 object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Order History */}
        <div className="bg-white rounded-xl shadow-lg p-5">
          <h2 className="text-2xl font-bold mb-2 text-black">Order History</h2>
          <p className="text-gray-600 mb-4">
            View previously purchased artworks and order details.
          </p>

          <img
            src="/images/arthub-History.png"
            alt="Order History"
            className="w-full h-72 object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Checkout */}
        <div className="bg-white rounded-xl shadow-lg p-5 md:col-span-2">
          <h2 className="text-2xl font-bold mb-2 text-black">Checkout & Shipping</h2>
          <p className="text-gray-600 mb-4">
            Complete the purchase process with shipping details and order confirmation.
          </p>

          <img
            src="/images/arthub-Buynow.jpeg"
            alt="Checkout"
            className="w-full h-110 object-cover rounded-lg hover:scale-103 transition duration-300"
          />
        </div>

      </div>

    </div>
  );
}