function HelloComponent() {
  return (
    <div>
      <h1>React Component</h1>
      <button
        onClick={() => {
          alert("Hello Component Clicked!");
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default HelloComponent;
