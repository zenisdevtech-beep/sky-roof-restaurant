import React, { useMemo } from 'react';

export default function RooftopStars({ count = 28 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 85}%`,
      left: `${Math.random() * 96}%`,
      size: Math.random() * 2.5 + 1.2,
      duration: Math.random() * 3 + 2.5,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.6 + 0.25,
      color: i % 4 === 0 ? '#FBBF24' : i % 5 === 0 ? '#F43F5E' : '#FFFBEB'
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full animate-star-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 3}px ${star.color}`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity
          }}
        />
      ))}
    </div>
  );
}

