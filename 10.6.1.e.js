const Lists = ({ children }) => {
  return <ul>{children}</ul>;
};

const Fruits = () => (
  <Lists>
    <li>Strawberry</li>
    <li>Pineapple</li>
    <li>Orange</li>
  </Lists>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Fruits />);