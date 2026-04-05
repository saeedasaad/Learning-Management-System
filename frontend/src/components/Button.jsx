import React from "react";

export default function Button({ children, variant = "filled", className = "", ...props }) {
  const baseStyles = `
    font-semibold
    px-5 
    py-2 
    rounded-full 
    transition-all 
    duration-300 
    ease-in-out 
    transform 
    inline-flex 
    items-center 
    gap-2
  `;

  const filledStyles = `
    bg-[#f49f35] 
    text-white 
    border-2 
    border-[#f49f35] 
    hover:bg-transparent 
    hover:text-[#f49f35]
  `;

  const outlineStyles = `
    border-2 
    border-[#f49f35] 
    text-[#f49f35] 
    bg-transparent 
    hover:bg-[#f49f35] 
    hover:text-white
  `;

  const primaryBlueStyles = `
    bg-[#02448d] 
    text-white 
    border-2 
    border-[#02448d] 
    hover:bg-transparent 
    hover:text-[#02448d]
  `;

  const getVariantStyles = () => {
    switch (variant) {
      case "outline":
        return outlineStyles;
      case "primaryBlue":
        return primaryBlueStyles;
      default:
        return filledStyles;
    }
  };

  return (
    <button
      className={`${baseStyles} ${getVariantStyles()} ${className}`}
      {...props}
    >
      {children || "Click Me"}
    </button>
  );
}