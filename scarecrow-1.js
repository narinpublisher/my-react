    const { useState, useEffect } = React;

    function Sunset({ basket }) {
      const [fruit, setFruit] = useState(' Autumn Moonlight ');
      useEffect(() => {
        setFruit(basket);
      }, [basket]);
      return (
        <p>
          The scarecrow spreads its arms and smiles<br />
          As the round gourd dreams on the thatched roof<br />
          Bowing quietly,
          <b className='orange'>{fruit}</b>
          ripens into golden yellow
        </p>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Sunset basket=" Harvest from the Fields " />);