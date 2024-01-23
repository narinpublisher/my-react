class Sunset extends React.Component {
	constructor( props ){
		super( props );
		this.state = { fruit: ' 가을의 달빛 ' }
	}
	static getDerivedStateFromProps( props, state ) {
			return { fruit: props.basket }
	}
	render(){
		return (
				<p>
					허수아비 팔 벌려 웃음짓고<br />
					초가지붕 둥근 박 꿈 꿀때<br />
					고개숙인 
					<b className='orange'>{ this.state.fruit }</b>
					노랗게 익어만 가는
				</p>
		);
	}
}

const yellow = ReactDOM.createRoot( document.getElementById('root') );
yellow.render( <Sunset basket= ' 논밭의 열매 ' /> );