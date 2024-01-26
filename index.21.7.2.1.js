function List( { getNum } ) {

  const [ nums, setTxt ] = React.useState( [] );
 
  React.useEffect(() => {    
    setTxt( getNum() );
  }, [ getNum ] );

  return (
    <div>
	{
		nums.map( ( i ) => ( <div key= { i }> { i } </div> ) )
	}
    </div>
  );
}

function App() {
  const [ numList, setList ] = React.useState(123);
  const [ yes, setYes ] = React.useState( false );

  const pinkBox = {
    padding: yes ?  "20px" : "20px",
    border:  yes ?  "3px dashed tomato" : "none",
    background: yes ? "pink" : "none"
  };

  const getNum = React.useCallback( () => {
    return [ numList + 10, numList + 100 ];
  } , [ numList ] ) ;

  const change = ( e ) => {
    if ( Number( e.target.value ) ) {
      setList( Number( e.target.value ) );
    };
  };

  return (
    <>
      <div style= { pinkBox }>
        <input  type= "number"  value= { numList } onChange= { change } /> &nbsp;
        <button onClick={ () => setYes( ( yes ) => !yes ) } >
          { yes ? "디자인 없애기" : "디자인 적용하기" }
        </button>
        <List getNum= { getNum } />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( <App /> );