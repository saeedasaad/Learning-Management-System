import React from "react";

export default function Button({
  children,
  variant = "filled",
  className = "",
  ...props
}) {

  const baseStyles =
    "font-semibold px-5 py-2 transition-all duration-300 ease-in-out transform inline-flex items-center justify-center gap-2";

  // Variants
  const filledStyles =
    "bg-[#f49f35] text-white border-2 border-[#f49f35] hover:bg-transparent hover:text-[#f49f35] rounded-full sm:w-auto";

  const outlineStyles =
    "border-2 border-[#f49f35] text-[#f49f35] bg-transparent hover:bg-[#f49f35] hover:text-white rounded-full sm:w-auto";

  const primaryBlueStyles =
    "bg-[#02448d] text-white border-2 border-[#02448d] hover:bg-transparent hover:text-[#02448d] rounded-full sm:w-auto";

  const formFullStyles =
    "bg-[#f49f35] text-white border-2 border-[#f49f35] hover:bg-[#e08c20] w-full rounded-none";

  const getVariantStyles = () => {
    switch (variant) {
      case "outline":
        return outlineStyles;
      case "primaryBlue":
        return primaryBlueStyles;
      case "formFull": 
        return formFullStyles;
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
