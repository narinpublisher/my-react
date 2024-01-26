function Apple() {
  const [ count, setCount ] = React.useState(0);

  React.useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    document.querySelector('meter').value = count;
		if ( count> 10 ) { setCount(10); alert( '10개를 초과할 수 없습니다' ); }
  });

  return (
    <section style={{ maxWidth:'300px', margin:'auto', border:'3px solid #ddd', padding: '10px 30px' }}>
	<p>주문하실 사과의 개수는 {count} 개 입니다.</p>
	<meter value="0" min="0" max="10" style={{ width: '100%' }}></meter><br /><br />
	<button onClick= { () => setCount(count + 1) }> 추가하기 </button>			
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Apple /> );
