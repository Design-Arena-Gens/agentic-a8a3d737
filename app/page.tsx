'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Scene {
  id: number;
  narration: string;
  description: string;
  images: string[];
  duration: number;
}

const scenes: Scene[] = [
  {
    id: 1,
    narration: "हम सब एक समाज का हिस्सा हैं… और समाज तब ही मजबूत बनता है, जब हम एक-दूसरे का साथ देते हैं।",
    description: "लोग ज़रूरतमंदों की मदद करते हुए",
    images: ["🤝", "💝", "🫱🏽‍🫲🏾"],
    duration: 6000
  },
  {
    id: 2,
    narration: "थोड़ा समय, थोड़ी मेहनत, और थोड़ा प्यार… यही तीन बातें किसी की ज़िंदगी बदल सकती हैं।",
    description: "बच्चा किताबें बाँटते हुए, बुज़ुर्ग की मदद करते हुए",
    images: ["📚", "👴🏽", "❤️"],
    duration: 6000
  },
  {
    id: 3,
    narration: "समाजसेवा सिर्फ काम नहीं – यह एक सोच है। एक सोच जो कहती है – \"अगर मैं नहीं, तो कौन?\"",
    description: "युवा लोग सफाई अभियान में, पेड़ लगाते हुए",
    images: ["🌱", "🧹", "🌳"],
    duration: 7000
  },
  {
    id: 4,
    narration: "आओ, मिलकर उम्मीद जगाएँ। किसी के चेहरे पर मुस्कान लाएँ। क्योंकि यही असली खुशी है – जब कोई और मुस्कुराए हमारे कारण।",
    description: "सभी लोग एक साथ हँसते हुए",
    images: ["😊", "🤗", "✨"],
    duration: 8000
  }
];

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    if (currentScene >= scenes.length) {
      setShowEnd(true);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentScene(prev => prev + 1);
    }, scenes[currentScene].duration);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying]);

  const startVideo = () => {
    setIsPlaying(true);
    setCurrentScene(0);
    setShowEnd(false);
  };

  const restartVideo = () => {
    setCurrentScene(0);
    setShowEnd(false);
    setIsPlaying(true);
  };

  if (!isPlaying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl max-w-2xl mx-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            समाजसेवा
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-700">
            बदलाव हमसे शुरू होता है
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startVideo}
            className="px-12 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            वीडियो देखें ▶
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (showEnd) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-50 to-purple-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-3xl mx-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-8xl mb-6"
          >
            ✨
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            समाजसेवा
          </h2>
          <p className="text-3xl md:text-4xl mb-8 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent font-bold">
            बदलाव हमसे शुरू होता है
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={restartVideo}
            className="px-10 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            फिर से देखें 🔄
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const scene = scenes[currentScene];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 md:p-16 max-w-5xl mx-4 relative z-10"
        >
          {/* Scene number indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/60 text-sm mb-4"
          >
            Scene {scene.id} / {scenes.length}
          </motion.div>

          {/* Icon display */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex justify-center gap-8 mb-12"
          >
            {scene.images.map((icon, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 0 }}
                animate={{ y: [-10, 0, -10] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.2,
                }}
                className="text-7xl md:text-9xl"
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Scene description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-yellow-300 text-lg md:text-xl mb-8 font-medium"
          >
            {scene.description}
          </motion.p>

          {/* Narration text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20"
          >
            <p className="text-2xl md:text-4xl leading-relaxed text-white font-medium">
              {scene.narration}
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="mt-8 h-2 bg-white/20 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: scene.duration / 1000, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setCurrentScene(scenes.length)}
        className="absolute bottom-8 right-8 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-all"
      >
        Skip ⏭
      </motion.button>
    </div>
  );
}
