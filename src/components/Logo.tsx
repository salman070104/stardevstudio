import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "dark" | "light";
  variant?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
}) => {
  const heightMap: Record<string, string> = {
    sm: "h-8",
    md: "h-10 sm:h-11",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24",
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/LOGO STARDEVSTUDIO.png"
        alt="StarDev Studio"
        className={`${heightMap[size] || "h-10"} w-auto object-contain transition-transform duration-200`}
      />
    </div>
  );
};
