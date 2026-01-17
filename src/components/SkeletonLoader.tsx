import { useEffect, useRef } from "react";
import gsap from "gsap";

const ThreeCircleLoader = () => {
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.to(circlesRef.current, {
      scale: 1.4,
      opacity: 0.4,
      duration: 0.6,
      ease: "power1.inOut",
      stagger: {
        each: 0.15,
        repeat: -1,
        yoyo: true,
      },
    });
  }, []);

  return (
    <div className="flex justify-center items-center gap-3 h-screen bg-[#0b0f1a]">
      {[0, 1, 2].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) circlesRef.current[i] = el;
          }}
          className="
            w-4 h-4
            rounded-full
            bg-[#646cff]
            shadow-[0_0_15px_#646cff]
          "
        />
      ))}
    </div>
  );
};

export default ThreeCircleLoader;
