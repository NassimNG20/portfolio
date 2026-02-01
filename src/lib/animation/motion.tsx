//
//
// import { motion } from "framer-motion";
//
//
//
//
//
// export const animate = (props: any) => {
//   return <motion.div>123</motion.div>;
// };
import { useEffect, useState } from "react";
import { animate, useInView } from "framer-motion";
import { useRef } from "react";

interface CounterProps {
  end: number;
  duration: number;
  delay: number;
}

export const Counter = (props: CounterProps) => {
  const { end, duration, delay } = props;
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration,
        ease: "easeOut",
        delay,
        onUpdate: (value) => setCount(Math.round(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, end, duration, delay]);

  return <span ref={ref}>{count}</span>;
};
