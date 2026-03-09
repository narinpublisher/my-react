const MyApp = () => {
  return (
    <>
      <h1 style={{ color: 'red', textShadow: '-2px -2px 7px orange' }}>
        Inline Style
      </h1>
      <p>The style design is immediately applied to the selected element.</p>
    </>
  );
}

const addStyle = ReactDOM.createRoot(document.getElementById('root'));
addStyle.render(<MyApp />);