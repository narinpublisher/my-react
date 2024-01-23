class Autumn extends React.Component {
	render() {
		return (
			<p>
				가을바람 머물다간 들판에<br />
				모락모락 피어나는 저녁연기
			</p>
		);
	}
}

const yellow = ReactDOM.createRoot( document.getElementById('root') );
yellow.render( <Autumn /> );
