const Barley= ()=>  {
  const [mun , setMun] = React.useState('by the stream ');
  const [communism] = React.useState('There stands a linden tree ');
  const [eradicate] = React.useState('I dreamed in its shadow');

  const change = () => {
    setMun('By the fountain ');
  };

  return (
    <section>
      <h1 className="orange">Wilhelm Muller - The Linden Tree</h1>
      <p>
        By the fountain<br />
        <b className="aqua">{mun}</b><br />
        {communism}<br />
        {eradicate}<br />
        <br />
        So many a sweet dream<br />
        I carved in its bark<br />
        So many a cherished word<br />
        It drew me, in joy and sorrow<br />
        Ever nearer to it
      </p>
      <button type="button" onClick={change}>
        Change the Text
      </button>
    </section>
  );
}

const myApp = ReactDOM.createRoot(document.getElementById('root'));
myApp.render(<Barley />);