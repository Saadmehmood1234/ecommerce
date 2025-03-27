"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Plus,
  Minus,
  ShieldCheck,
  TicketPercent,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
export default function CartSection() {
  const [cart, setCart] = useState([
    { id: 1, name: "Premium Plan", price: 29.99, quantity: 1 },
    { id: 2, name: "4K Streaming", price: 19.99, quantity: 2 },
    { id: 3, name: "Multi-User Access", price: 9.99, quantity: 1 },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="m-6 sm:m-8 md:m-10 lg:m-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#0C1B44] to-[#1A0C3D] rounded-3xl border-2 border-[#A92EDF]/30 shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <ShoppingCart className="text-[#C27AFF]" size={24} />
        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#C27AFF] to-[#A05BD3] bg-clip-text text-transparent">
          Your Shopping Cart
        </h3>
      </div>

      <AnimatePresence>
        {cart.length > 0 ? (
          <>
            <ul className="space-y-4 mb-6 sm:mb-8">
              {cart.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="group bg-[#0C1B44]/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-[#A92EDF]/20 hover:border-[#C27AFF]/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex-1">
                      <h4 className="font-medium text-base sm:text-lg">
                        {item.name}
                      </h4>
                      <p className="text-[#C27AFF] text-sm">
                        ${item.price.toFixed(2)}/mo
                      </p>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 mt-3 sm:mt-0">
                      <div className="flex items-center gap-2 bg-[#0C1B44] rounded-full p-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1.5 rounded-full hover:bg-[#A92EDF]/20 transition-colors"
                        >
                          <Minus className="text-[#C27AFF] w-4 h-4" />
                        </button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1.5 rounded-full hover:bg-[#A92EDF]/20 transition-colors"
                        >
                          <Plus className="text-[#C27AFF] w-4 h-4" />
                        </button>
                      </div>

                      <div className="w-20 sm:w-24 text-right">
                        <span className="text-[#C27AFF] font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-full hover:bg-red-500/20 transition-colors"
                      >
                        <Trash2
                          className="text-red-400 hover:text-red-300"
                          size={18}
                        />
                      </button>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>

  

            <div className="space-y-4 mb-6 sm:mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Subtotal:</span>
                <span className="text-base sm:text-lg">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Estimated Tax:</span>
                <span className="text-base sm:text-lg">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-[#A92EDF]/30">
                <span className="text-lg sm:text-xl font-bold text-[#C27AFF]">
                  Total:
                </span>
                <span className="text-lg sm:text-xl font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsLoading(true)}
              disabled={isLoading}
              className="w-full bg-[#A92EDF] hover:bg-[#8e5ea3] py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-[#C27AFF] rounded-full animate-spin" />
              ) : (
                <>
                  <span>Secure Checkout</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 sm:py-12"
          >
            <div className="mb-4 sm:mb-6 text-[#C27AFF]">
              <ShoppingCart className="mx-auto" size={40} />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2">
              Your cart is empty
            </h4>
            <p className="text-gray-400 mb-4 sm:mb-6">
              Explore our services and find something special!
            </p>
            <Link href={"/"}>
              <button className="bg-gradient-to-r from-[#C27AFF] to-[#7B61FF] px-6 sm:px-8 py-2 sm:py-3 rounded-xl hover:opacity-90 transition-opacity">
                Browse Services
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
