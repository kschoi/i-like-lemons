import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import lemon from "./assets/images/lemon.png";

function App() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full"
      style={{ perspective: 2000 }}
    >
      {/* card container*/}
      <motion.div
        className="relative flex justify-center items-center w-72 h-96 bg-black rounded-3xl shadow-2xl"
        style={{
          cursor: "grab",
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
        }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <h1 className="pb-10 text-white text-4xl font-thin">I like Lemons.</h1>
        <motion.div className="absolute top-24 left-20 flex justify-center items-center w-full h-full">
          <motion.img
            src={lemon}
            className="w-full z-50 select-none"
            style={{
              x,
              y,
              rotateX,
              rotateY,
              z: 100000,
            }}
            drag
            dragElastic={0.12}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
