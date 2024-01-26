function Timer() {
  const [ count , setCount ] = React.useState( 0 );
  React.useEffect(() => {
    const Increase = setTimeout(() => {
      setCount( ( count ) => count + 1);
    }, 1000); //1000은 1초
    return () => clearTimeout( Increase ); //메모리에 가비지가 수집되는 것을 방지.
  });

  return <h3 style= {{ textAlign: 'center' }}>이 웹문서가 브라우저에 렌더링 된 후 
	 <b style= {{ color: 'red', fontSize: '1.5rem' }}> {count} </b>초가 흘렀습니다.</h3>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);