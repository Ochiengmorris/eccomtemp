import React from "react";
import { Star } from "lucide-react";

const StarView = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={
            star <= rating ? "text-orange-500 fill-orange-500" : "text-gray-300"
          }
          size={20}
        />
      ))}
    </div>
  );
};

export default StarView;
