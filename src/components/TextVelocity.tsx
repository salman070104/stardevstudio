"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

interface VelocityScrollRowProps {
  text: string;
  defaultVelocity?: number;
  className?: string;
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function VelocityScrollRow({
  text,
  defaultVelocity = 3,
  className = "",
}: VelocityScrollRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(defaultVelocity >= 0 ? 1 : -1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * Math.abs(defaultVelocity) * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap select-none py-1 sm:py-2">
      <motion.div className={`flex flex-nowrap shrink-0 ${className}`} style={{ x }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="shrink-0 flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black uppercase tracking-tight font-display text-white pr-4 sm:pr-6"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

interface TextVelocityProps {
  texts: string[];
  velocity?: number;
  className?: string;
}

export const TextVelocity: React.FC<TextVelocityProps> = ({
  texts,
  velocity = 2.5,
  className = "",
}) => {
  return (
    <div className={`relative w-full overflow-hidden flex flex-col justify-center py-4 sm:py-7 select-none bg-[#050505] ${className}`}>
      {/* Side gradient mask for smooth fade into edges */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {texts.map((text, index) => (
        <VelocityScrollRow
          key={index}
          text={text}
          defaultVelocity={index % 2 === 0 ? -velocity : velocity}
        />
      ))}
    </div>
  );
};
