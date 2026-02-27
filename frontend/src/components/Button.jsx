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

  return (
    <button
      className={`${baseStyles} ${variant === "filled" ? filledStyles : outlineStyles} ${className}`}
      {...props}
    >
      {children || "Click Me"}
    </button>
  );
}