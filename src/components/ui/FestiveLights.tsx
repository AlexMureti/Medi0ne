import React from 'react';

const bulbs = ['#F59E0B', '#F97316', '#EF4444', '#60A5FA', '#34D399', '#E879F9'];

export const FestiveLights: React.FC = () => {
  return (
    <div className="festive-lights pointer-events-none absolute inset-x-0 top-0 flex justify-center py-1">
      <div className="flex items-center space-x-2">
        {bulbs.map((color, i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bulb animate-twinkle"
            style={{ backgroundColor: color, animationDelay: `${i * 120}ms` }}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
};

export default FestiveLights;
