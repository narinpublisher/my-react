const Lists = ({ children }) => {
  return <ul>{ children }</ul>
}

const Fruits = () => (
	<Lists>
		<li>딸기</li>
		<li>파인애플</li>
		<li>오렌지</li>
	</Lists>
);


const root = ReactDOM.createRoot(document.getElementById( 'root' ));
root.render( <Fruits /> );


