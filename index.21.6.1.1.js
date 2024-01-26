function reducer( state , action ) {
  if ( action.type === '나이 추가' ) {
    return {
      walk: state.walk + 1000
    };
  }
  throw Error( '작업 수행할 수 없습니다.' );
}

function Counter() {
  const [ state, dispatch ] = React.useReducer( reducer, { walk: 1000 } );

  return (
    <>      
      <p>어제 만보걷기 도전에서 { state.walk }보를 실천했습니다.</p>
      <button onClick= { () => { dispatch( { type: '나이 추가' } ) }}> 걸음 횟수 추가 </button>
    </>
  );
}

const myWalk = ReactDOM.createRoot ( document.getElementById('root') );
myWalk.render ( <Counter /> );