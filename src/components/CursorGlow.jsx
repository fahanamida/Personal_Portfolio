import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  
  // Spring configuration for smooth lag-glow effect
  const springConfig = { damping: 50, stiffness: 200, mass: 1 };
  const glowX = useSpring(cursorX, springConfig);
  const glowY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 175); // Center the 350px glow container
      cursorY.set(e.clientY - 175);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-30 hidden md:block"
      style={{
        left: glowX,
        top: glowY,
        width: 350,
        height: 350,
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 45%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(20px)',
      }}
    />
  );
}
