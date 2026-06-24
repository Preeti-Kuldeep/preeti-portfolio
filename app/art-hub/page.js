export default function ArtHubGallery() {
  return (
    <div className="max-w-7xl mx-auto px-10 py-20">

      <h1 className="text-5xl font-bold mb-4">
        ART HUB
      </h1>

      <p className="text-lg text-gray-400 mb-12">
        Complete project showcase and application walkthrough.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Homepage */}
        <div className="bg-white rounded-xl p-5 shadow-lg">
          <h3 className="text-2xl text-black font-bold mb-2">
            Homepage
          </h3>

          <p className="text-gray-600 mb-4">
            Landing page showcasing featured artworks and product discovery.
          </p>

          <img
            src="/images/arthub-homepage.jpeg"
            alt="Homepage"
            className="h-72 w-full object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Login */}
        <div className="bg-white rounded-xl p-5 shadow-lg">
          <h3 className="text-2xl text-black font-bold mb-2">
            User Login
          </h3>

          <p className="text-gray-600 mb-4">
            Secure authentication system for buyers and sellers.
          </p>

          <img
            src="/images/arthub-login.png"
            alt="Login Page"
            className="h-72 w-full object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-xl p-5 shadow-lg">
          <h3 className="text-2xl text-black font-bold mb-2">
            Product Details
          </h3>

          <p className="text-gray-600 mb-4">
            Detailed artwork information with pricing and purchase options.
          </p>

          <img
            src="/images/arthub-product.jpeg"
            alt="Product Page"
            className="h-72 w-full object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Seller Profile */}
        <div className="bg-white rounded-xl p-5 shadow-lg">
          <h3 className="text-2xl text-black font-bold mb-2">
            Seller Dashboard
          </h3>

          <p className="text-gray-600 mb-4">
            Manage artwork listings, profiles, and inventory.
          </p>

          <img
            src="/images/arthub-sellerprofile.jpeg"
            alt="Seller Profile"
            className="h-72 w-full object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Cart */}
        <div className="bg-white rounded-xl p-5 shadow-lg">
          <h3 className="text-2xl text-black font-bold mb-2">
            Shopping Cart
          </h3>

          <p className="text-gray-600 mb-4">
            Review selected products before placing an order.
          </p>

          <img
            src="/images/arthub-cart.png"
            alt="Cart Page"
            className="h-72 w-full object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Order History */}
        <div className="bg-white rounded-xl p-5 shadow-lg">
          <h3 className="text-2xl text-black font-bold mb-2">
            Order History
          </h3>

          <p className="text-gray-600 mb-4">
            Track previous purchases and delivery details.
          </p>

          <img
            src="/images/arthub-History.png"
            alt="Order History"
            className="h-72 w-full object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Checkout */}
        <div className="bg-white rounded-xl p-5 shadow-lg md:col-span-2">
          <h3 className="text-2xl text-black font-bold mb-2">
            Checkout & Shipping
          </h3>

          <p className="text-gray-600 mb-4">
            Complete purchase process with shipping and order confirmation.
          </p>

          <img
            src="/images/arthub-Buynow.jpeg"
            alt="Buy Now"
            className="h-96 w-full object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

      </div>

    </div>
  );
}