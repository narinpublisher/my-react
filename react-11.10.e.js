const { useState } = React;

const Wind = () => {
  const [sunset] = useState('sunset');

  return (
    <p>
      Across the field where the wind once lingered<br />
      Soft evening smoke gently rising<br />
      On the autumn hill dressed in colorful robes<br />
      Bright red, the <b className="red">{sunset}</b> is burning.
    </p>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Wind />);