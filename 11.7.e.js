const { useState } = React;

const Autumn = () => {
  // Declare state: manage 'sunset' using useState
  const [sunset, setSunset] = useState('Soft evening smoke gently rising');

  return (
    <section>
      <p>Across the field where the autumn breeze once lingered,</p>
      <p>{sunset}</p>
      <p>On the hillside dressed in autumn’s colorful robes,</p>
      <p>The evening glow burns red as it fades away.</p>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Autumn />);
