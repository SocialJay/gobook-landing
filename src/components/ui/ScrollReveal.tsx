import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface RevealProps {
  children: string;
  className?: string;
}

export const ScrollRevealText: React.FC<RevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.8"]
  });

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={`relative inline-flex flex-wrap leading-relaxed ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;

        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        const y = useTransform(scrollYProgress, [start, end], [3, 0]);

        return (
          <motion.span
            key={i}
            style={{ opacity, y }}
            className="mr-[0.3em] inline-block will-change-[opacity,transform]"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};
