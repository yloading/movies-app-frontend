import React from "react";

interface AccordionSkeletonProps {
  count?: number;
}
const AccordionSkeleton: React.FC<AccordionSkeletonProps> = ({ count = 1 }) => {
  return Array.from({ length: count }).map(() => (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between p-4 rounded-md bg-gray-200 animate-pulse">
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-6 bg-gray-300 rounded"></div>
      </div>
    </div>
  ));
};

export default AccordionSkeleton;
