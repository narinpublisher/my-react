function List( { getNum } ) {
  const [ nums, setNum ] = React.useState( [] );
 
  React.useEffect( () => {    
    setNum( getNum() );
  }, [ getNum ] );

  return (
    <div style= { { background: '#ddd' , maxWidth: '170px' } } >
	{  nums.map( ( i ) => ( <div key= { i }> { i } </div> ) )  }
    </div>
  );
};

function App() {
  const [ numList, setList ] = React.useState(123);

  const getNum = React.useCallback( () => {
    return [ numList + 10, numList + 100 ];
  } , [ numList ] );

  const change = ( e ) => {
    if ( Number(e.target.value )) {
      setList( Number( e.target.value ) );
    } else { alert('숫자만 입력해 주세요.'); }
  };

  return (
    <>
      <div>
        <input type= "text" value= { numList } onChange= { change } /><br />
        <List getNum= { getNum } />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
