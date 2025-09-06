// components/AddBlock/AddBlock.tsx
import React from "react";
// import { DraggableContainer } from "../DraggableContainer/DraggableContainer";
// import { BlockType } from "../../types";

const AddBlock: React.FC<{
  onAddClick: () => void;
}> = ({ onAddClick }) => {
  console.log("add block added");
  return (
    <div
      style={{
        height: "50vh",
        backgroundColor: "#F0F0F1",
        opacity: 1,
        // backgroundColor: "red",
        border: "2px solid blue",
      }}
      className="d-flex justify-content-center align-items-center w-100 py-4"
    >
      <style>
        {`
          .add-block-btn:hover svg path{
            fill: red;
            stroke: white
          }
          
          `}
      </style>
      <button
        onClick={onAddClick}
        className="add-block-btn btn btn-outline-primary rounded-circle d-flex justify-content-center align-items-center p-0"
        style={{
          opacity: 1,
          width: "80px",
          height: "80px",
          transition: "all 0.2s ease",
          fontSize: "2rem",
          border: "2px solid blue",
        }}
        aria-label="Add new block"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4V20M4 12H20"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddBlock;
