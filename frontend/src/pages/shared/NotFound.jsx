import React from "react";
import Button from "../../components/common/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen md:w-[50%] w-[90%] mx-auto">
      <h1 className="md:text-6xl text-4xl font-bold text-yellow-500 mb-4">
        404
      </h1>
      <h2 className="md:text-2xl text-xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 md:text-md text-sm">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button variant="filled" onClick={() => (window.location.href = "/")}>
        Go Home
      </Button>
    </div>
  );
}
