"use client";
import React, { useState, useRef } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getCountFromServer } from "firebase/firestore";
import { NumberTicker } from "@/component/magicui/number-ticker";
// import { ShineBorder } from "@/component/magicui/shine-border"; // If you have a shine-border component
import { cn } from "@/lib/utils";
import { Confetti } from "./magicui/confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BackgroundBeamsWithCollision } from "./aceternity/background-beams-with-collision";

const USER_TYPES = ["Brand/Business/Startup/MSME/SME", "Creator/Influencer"];

export default function WaitlistFormSection() {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [joinedCount, setJoinedCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [confettiKey, setConfettiKey] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const confettiButtonRef = useRef<HTMLButtonElement>(null);

  // Fetch live count on mount
  useState(() => {
    (async () => {
      const snap = await getCountFromServer(collection(db, "waitlist"));
      setJoinedCount(snap.data().count || 0);
    })();
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    if (!userType || !email) {
      setError("All fields are required.");
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "waitlist"), {
        type: userType,
        email,
        whatsapp: whatsapp ? "yes" : "no",
        createdAt: new Date(),
      });
      setSuccess(true);
      setConfettiKey((k) => k + 1);
      setUserType("");
      setEmail("");
      setWhatsapp(false);
      setShowConfetti(true);
      toast.success("Registration successful! Welcome to the waitlist.");
      // Update live count
      const snap = await getCountFromServer(collection(db, "waitlist"));
      setJoinedCount(snap.data().count || 0);
      if (formRef.current) formRef.current.reset();
      // Trigger the confetti cannon automatically
      setTimeout(() => setShowConfetti(false), 3500);
      setTimeout(() => {
        if (confettiButtonRef.current) {
          confettiButtonRef.current.click();
        }
      }, 100); // slight delay to ensure button is mounted
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      <section className="w-full max-w-xl mx-auto py-16 flex flex-col items-center gap-8">
        <ToastContainer position="top-center" autoClose={3000} />
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 whitespace-nowrap text-white">
            This Is Your Invite to the{" "}
            <span className="px-2 py-1 rounded bg-[#9146FF] text-white">
              Inner Circle
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            We're launching soon. Be among the first to discover the new way
            brands and creators connect.
          </p>
          <div className="flex flex-col items-center gap-1 mb-2">
            <span className="text-base text-gray-400">Already joined:</span>
            <span className="text-4xl font-extrabold text-[#9146FF]">
              <NumberTicker value={joinedCount} />
            </span>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={cn(
            "relative rounded-2xl p-6 w-full flex flex-col gap-4 border border-white/20 bg-white/80 backdrop-blur-3xl"
          )}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="relative z-10 flex flex-col gap-4">
            <div>
              <label className="block text-base font-medium mb-1">
                Type of User
              </label>
              <select
                className="w-full rounded-md border-2 border-gray-500 dark:border-gray-600 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder:text-neutral"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select your user type
                </option>
                {USER_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-base font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-md border-2 border-gray-500 dark:border-gray-600 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 placeholder:text-neutral-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="whatsapp"
                checked={whatsapp}
                onChange={(e) => setWhatsapp(e.target.checked)}
                className="accent-purple-600 w-4 h-4"
              />
              <label htmlFor="whatsapp" className="text-base">
                Want to join the early beta access circle whatsapp community
              </label>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {/* Render the Confetti cannon button, but hide it visually */}
            {showConfetti && (
              <Confetti
                key={confettiKey}
                className="hidden"
                buttonText="Trigger Side Cannons"
                ref={confettiButtonRef}
              />
            )}
            <button
              type="submit"
              className={cn(
                "mt-2 px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 transition-all duration-300",
                loading && "opacity-70 cursor-not-allowed animate-pulse"
              )}
              disabled={loading}
            >
              {loading ? "Joining you to the waitlist..." : "Join Waitlist"}
            </button>
          </div>
        </form>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
