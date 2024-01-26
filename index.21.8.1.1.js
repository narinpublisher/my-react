const App = () => {
  const [ count , setCount ] = React.useState(0);
  const sum = React.useMemo( () => calcu( count ) , [ count ] ); 
	
  const plus = () => {
    setCount( ( y ) => y + 1 );
  };

  return (
     <section style= {{ maxWidth: '300px' , border: '2px dashed skyblue' , textAlign: 'center' , padding: '10px' , margin: 'auto' }}>
			  <h4>카운트를 증가하세요.</h4>        
				&nbsp; 카운트: { count } &nbsp;
				<button onClick= { plus }>  + </button>     <br />
				<p> 합계: { sum } </p> 				
     </section>
  );
};

const calcu = ( x ) => { 
  for ( let i = 0; i < 100; i++ ) {
    x += 1;
  }
  return x;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);