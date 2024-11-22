"use client";

const MyClientComponent = () => {
  return (
    <div>
      <h3>Client Component</h3>
      <p>Temporary client data</p>
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
