function SpecialBorder({ children, color }) {
  return (
    <div className={`SpeBorder Border_${color}`}>
      {children}
    </div>
  );
}

function Content_1({ title, message }) {
  return (
    <SpecialBorder color="blue">
      <h1>{title}</h1>
      <p className="Para_1">{message}</p>
    </SpecialBorder>
  );
}

function Welcome() {
  return (
    <Content_1
      title="Welcome!"
      message="All visitors will receive a complimentary welcome drink."
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome />);