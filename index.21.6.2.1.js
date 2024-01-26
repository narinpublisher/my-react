function reducer( state , action ) {
  console.log( state );
  console.log( action );

  switch ( action.type ) {
    case "감소":
      return { count: state.count - 1 };
    case "증가":
      return { count: state.count + 1 };
    default:    
      throw new Error( "action.type을 점검해 주세요!" , action.type );
  }
}

function Counter() {
  const [ number, dispatch ] = React.useReducer( reducer, { count: 0 } );

  return (
    <section>      
      <h3>홍길동님은 이번 학습 과정에서<br /><b>{ number.count }</b>일을 출석했습니다.</h3>      
      <button onClick= { () => dispatch( { type: "감소" } ) }> - </button>&nbsp;
      <button onClick= { () => dispatch( { type: "증가" } ) }> + </button>
    </section>
  );
}

const myBread = ReactDOM.createRoot ( document.getElementById('root') );
myBread.render ( <Counter /> );