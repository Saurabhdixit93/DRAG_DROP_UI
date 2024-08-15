import React, { useState } from "react";

const Card = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const truncatedText = text.length > 20 ? `${text.substring(0, 20)}...` : text;

  return (
    <div className="border p-4 bg-white shadow-md resize overflow-hidden h-full">
      <p>{truncatedText}</p>
      {text.length > 20 && (
        <button
          onClick={() => setIsOpen(true)}
          className="mt-2 text-blue-500 underline"
        >
          Show More
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="fixed inset-0 z-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold">Detailed Text</h2>
            <h4>{text}</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
