"use client";
import React, { useState, useRef } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getCountFromServer } from "firebase/firestore";
import { NumberTicker } from "@/component/magicui/number-ticker";
// import { ShineBorder } from "@/component/magicui/shine-border"; // If you have a shine-border component
import { cn } from "@/lib/utils";
import { Confetti } from "./magicui/confetti";

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
    <section className="w-full max-w-xl mx-auto py-16 flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          This Is Your Invite to the Inner Circle
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
          We're launching soon. Be among the first to discover the new way
          brands and creators connect.
        </p>
        <div className="flex flex-col items-center gap-1 mb-6">
          <span className="text-base text-gray-500">Already joined:</span>
          <span className="text-4xl font-extrabold text-purple-600">
            <NumberTicker value={joinedCount} />
          </span>
        </div>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={cn(
          "relative rounded-2xl p-6 w-full flex flex-col gap-4 border border-purple-300"
        )}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="relative z-10 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Type of User
            </label>
            <select
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select type
              </option>
              {USER_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
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
              className="accent-purple-600"
            />
            <label htmlFor="whatsapp" className="text-sm">
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
              "mt-2 w-full py-2 rounded-lg font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 transition-all duration-300",
              loading && "opacity-70 cursor-not-allowed animate-pulse"
            )}
            disabled={loading}
          >
            {loading ? "Joining you to the waitlist..." : "Join Waitlist"}
          </button>
        </div>
      </form>
    </section>
  );
}
