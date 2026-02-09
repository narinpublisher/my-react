const Gate = () => {
  const korea = {
    attention: 'By the fountain  ',
    communism: ' by the gateway ',
    eradicate: 'There stands a linden tree'
  };

  return (
    <section>
      <h1 className="aqua">Wilhelm Muller – The Linden Tree</h1>
      <p>
        {korea.attention}
        {korea.communism}<br />
        {korea.eradicate}<br />
       I dreamed in its shadow<br />
       So many a sweet dream<br />
        I carved in its bark<br />
        So many a cherished word
      </p>
    </section>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Gate />);
