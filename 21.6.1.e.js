function reducer( state , action ) {
  if ( action.type === 'ADD_STEP' ) {
    return {
      walk: state.walk + 1000
    };
  }
  throw Error( 'Unknown action type' );
}

function Counter() {
  const [ state, dispatch ] = React.useReducer( reducer, { walk: 1000 } );

  return (
    <>      
      <p>Yesterday, you completed {state.walk} steps in your 10,000 steps challenge.</p>
      <button onClick= { () => { dispatch( { type: 'ADD_STEP' } ) }}> Add Steps </button>
    </>
  );
}

const myWalk = ReactDOM.createRoot ( document.getElementById('root') );
myWalk.render ( <Counter /> );