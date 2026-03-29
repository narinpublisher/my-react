const App = () => {
  const [ count, setCount ] = React.useState(0);
  const cal = React.useMemo( () => calcu( count ) , [ count ] );

  const plus = () => {
    setCount( ( x ) => x + 1 );
  };

  const minus = () => {
    setCount( ( y ) => y - 1 );
  };

  return (
     <section style= {{ maxWidth: '300px' , border: '2px dashed skyblue' , textAlign: 'center' , padding: '10px' , margin: 'auto' }}>
			  <h4> How many calories did you consume yesterday? </h4>
				<p> {cal} calories </p> 
				<button onClick= { minus }> - </button>
				 &nbsp; Change: { count } &nbsp;
				<button onClick= { plus }>  + </button>
     </section>
  );
};

const calcu = ( num ) => { 
  for ( let i = 0; i < 1500; i++ ) {
    num += 1;
  }
  return num;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);