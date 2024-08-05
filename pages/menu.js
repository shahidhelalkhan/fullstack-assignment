// pages/menu.js

import { useState } from "react";
import Head from "next/head";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 12.99,
    description: "Classic cheese and tomato pizza",
    modifiers: [
      { id: "m1", name: "Size", options: ["Small", "Medium", "Large"] },
      { id: "m2", name: "Crust", options: ["Thin", "Thick", "Stuffed"] },
    ],
    taxPercentage: 5,
  },
  {
    id: 2,
    name: "Chicken Burger",
    price: 8.99,
    description: "Juicy chicken patty with fresh veggies",
    modifiers: [],
    taxPercentage: 5,
  },
];

export default function Menu() {
  const hasModifier = true;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Head>
        <title>Restaurant Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white bg-opacity-90 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">Restaurant Menu</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Menu Items */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Menu Items
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {"Item name"}
                </h3>
                <p className="text-gray-600">{"Item Desctipion"}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">${10}</span>
                  <button
                    onClick={() => {
                      if (hasModifier) {
                        setIsModalOpen(true);
                      } else {
                        alert("Todo:Implement This method");
                      }
                    }}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Your Cart
              </h2>

              <div className="mb-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800">{"Cart Item"}</span>
                  <div>
                    <span className="mr-2 text-gray-800">${20}</span>
                    <button
                      onClick={() => {}}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <>{/* TODO:Show Added Modifiers */}</>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Total:</span>
                  <span className="font-bold text-gray-800">${200}</span>
                </div>
                <button
                  onClick={() => {}}
                  className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {"Item name"}
                </h3>
                <div className="mt-2">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Modifier
                    </label>
                    <select
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      value={""}
                      onChange={(e) => {}}
                    >
                      <option value="">Select Modifier Name</option>

                      <option value={1}>{"Option 1"}</option>
                      <option value={2}>{"Option 2"}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    alert("TODO:Implement This");
                  }}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
