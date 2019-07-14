import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [value, setValue] = useState(0);
  const [isTapped, setIsTapped] = useState(false);

  return (
    <div className="App">
      <motion.div
        className="Container"
        drag
        dragElastic={1}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragStart={() => setValue(40)}
        onDragEnd={() => setValue(0)}
        onTapStart={() => setIsTapped(true)}
        onTap={() => setIsTapped(false)}
      >
        <motion.div className="Box Front" />
        <motion.div
          className="Box Middle"
          animate={isTapped ? { rotate: 10, y: -120 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        />
        <motion.div
          className="Box Back"
          animate={isTapped ? { rotate: 20, y: -240 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        />
      </motion.div>
      <div className="App-bg" style={{ filter: `blur(${value}px)` }} />
    </div>
  );
}

export default App;
