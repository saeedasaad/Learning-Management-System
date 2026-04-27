import React from "react";

export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  textarea = false,
  rows = 4,
}) {
  return (
    <div>
      {label && <label className="text-sm text-gray-600">{label}</label>}
      <div
        className={`flex ${textarea ? "items-start" : "items-center"} border mt-1 px-3 py-2 rounded`}
      >
        {icon && <i className={`${icon} text-gray-400 mr-2 ${textarea ? "mt-1" : ""}`}></i>}
        {textarea ? (
          <textarea
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full outline-none text-sm resize-none"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full outline-none text-sm"
          />
        )}
      </div>
    </div>
  );
}
