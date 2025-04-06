import React from "react";
import clsx from "clsx";

export const Spotlight = ({
  className,
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute z-10 w-[600px] h-[600px] rounded-full",
        "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
        "from-white/20 via-transparent to-transparent",
        "blur-3xl opacity-50",
        className
      )}
      style={{
        background: `radial-gradient(circle, ${fill} 0%, transparent 70%)`,
      }}
    />
  );
};
