class Autumn extends React.Component {
	constructor( props ){
		super( props );
		this.state= { txt: '가을이라 가을바람'};
	}
	static getDerivedStateFromProps( props, state ) {
		return { txt: props.sunset }
	}
	changeTxt = () => {
		this.setState({ txt: '색동옷 갈아입은 '});
	}
	render() {
		return (
			<p>
				가을바람 머물다간 들판에<br />
				모락모락 피어나는 저녁연기< br />
				<b className= 'red'>{this.state.txt}</b>
				가을 언덕에<br />
				붉게 물들어 타는 저녁놀<br />
				<button type='button' onClick= { this.changeTxt }>
					텍스트 변경하기
				</button>
			</p>
		);
	}
}

const leaves = ReactDOM.createRoot( document.getElementById('root') );
leaves.render( <Autumn sunset= '낙엽이 흩날리는 ' /> );
