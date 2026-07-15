import { useEffect, useRef } from "react";

const FogBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = window.VANTA?.FOG({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      // Cream palette

      highlightColor: 0xd6d3d1, 
      midtoneColor: 0xf5f5f4,
      lowlightColor: 0xffffff,
      baseColor: 0xfffbeb,

      blurFactor: 1,
      zoom: 0.6,
      speed: 3,
    });

    return () => {
      effect?.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
};

export default FogBackground;
