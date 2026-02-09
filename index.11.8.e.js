const Gate = () => {
  const korea = {
    attention: 'Before the city gate ',
    communism: 'beside the well ',
    eradicate: 'stands the linden tree'
  };

  return (
    <section>
      <h1 className="aqua">Wilhelm Müller – The Linden Tree</h1>
      <p>
        {korea.attention}
        {korea.communism}
        {korea.eradicate}<br />
        I dreamed sweet dreams beneath its shade<br />
        Words of hope engraved upon its bark<br />
        In joy and sorrow, I returned to that tree
      </p>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gate />);