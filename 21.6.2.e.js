function reducer( state , action ) {
  console.log( state );
  console.log( action );

  switch ( action.type ) {
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREMENT":
      return { count: state.count + 1 };
    default:    
      throw new Error( "Invalid action type" );
  }
}

function Counter() {
  const [ number, dispatch ] = React.useReducer( reducer, { count: 0 } );

  return (
    <section>
      <h3>John has attended<br /><b>{ number.count }</b> days.</h3>
      <button onClick= { () => dispatch( { type: "DECREMENT" } ) }> - </button>&nbsp;
      <button onClick= { () => dispatch( { type: "INCREMENT" } ) }> + </button>
    </section>
  );
}

const myBread = ReactDOM.createRoot ( document.getElementById('root') );
myBread.render ( <Counter /> );