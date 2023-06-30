import React, { useEffect, useRef } from 'react';

const WeightBalanceAnimation = () => {
  const leftWeightRef = useRef(null);
  const rightWeightRef = useRef(null);

  useEffect(() => {
    const animateWeights = () => {
      const leftWeight = leftWeightRef.current;
      const rightWeight = rightWeightRef.current;

      let leftX = 0;
      let rightX = 0;

      const animationId = requestAnimationFrame(function animate() {
        // Update the position of the weights
        leftWeight.style.transform = `translateX(${leftX}px)`;
        rightWeight.style.transform = `translateX(${rightX}px)`;

        // Adjust the speed and direction of movement
        leftX -= 2;
        rightX += 2;

        // Stop the animation when the weights reach a balanced position
        if (leftX > -200 || rightX < 200) {
          requestAnimationFrame(animate);
        }
      });

      return () => cancelAnimationFrame(animationId);
    };

    animateWeights();
  }, []);

  return (
    <div className="weight-balance-animation">
      <div className="weight" ref={leftWeightRef}>
        {/* Left weight visual */}
      </div>
      <div className="weight" ref={rightWeightRef}>
        {/* Right weight visual */}
      </div>
    </div>
  );
};

export default WeightBalanceAnimation;
