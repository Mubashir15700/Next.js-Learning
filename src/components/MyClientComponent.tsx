"use client";

const MyClientComponent = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default MyClientComponent;
