// Child component
const Fruits = () => {
  return <p>Fruits hanging low in the quiet fields</p>;
};

// Parent component
const Yellow = () => {
  return (
    <section>
      <p>A scarecrow spreads its arms and smiles</p>
      <p>Dreaming of round pumpkins on a thatched roof</p>
      <Fruits />
      <p>Slowly ripening into golden yellow</p>
    </section>
  );
};

// Render the component
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<Yellow />);
