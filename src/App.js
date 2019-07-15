import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [value, setValue] = useState(0);
  const [isTapped, setIsTapped] = useState(false);

  const springConfig = { type: "spring", stiffness: 120, damping: 14 };

  return (
    <div className="App">
      <motion.div
        className="Container"
        drag
        dragElastic={1}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragStart={() => setValue(100)}
        onDragEnd={() => setValue(0)}
        onTapStart={() => setIsTapped(true)}
        onTap={() => setIsTapped(false)}
      >
        <motion.div
          className="Box Front"
          animate={
            isTapped
              ? { backgroundColor: `#02a1d9` }
              : { backgroundColor: `#f2f2f2` }
          }
          transition={springConfig}
        />
        <motion.div
          className="Box Middle"
          animate={
            isTapped
              ? { rotate: 10, y: -120, backgroundColor: `#fff53a` }
              : { rotate: 0, y: 0, backgroundColor: `#d2d2d2` }
          }
          transition={springConfig}
        />
        <motion.div
          className="Box Back"
          animate={
            isTapped
              ? { rotate: 20, y: -240, backgroundColor: `#df4b3c` }
              : { rotate: 0, y: 0, backgroundColor: `#b2b2b2` }
          }
          transition={springConfig}
        />
      </motion.div>
      <div className="App-bg" style={{ filter: `grayscale(${value}%)` }} />
    </div>
  );
}

export default App;
