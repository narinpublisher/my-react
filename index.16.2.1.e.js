const Sunset = () => {

  const [name, setName] = React.useState('');

  return (
    <section>
      <strong>
	On the field where the wind once lingered,<br />
	Evening smoke softly rises.
      </strong>

      <form>
        <br />
        <label>
          What is the title of this song? &nbsp;
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </form>
    </section>
  );
};

const textBox = ReactDOM.createRoot(document.getElementById('root'));
textBox.render(<Sunset />);