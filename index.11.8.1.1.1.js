class Wind extends React.Component {
	constructor() {
		super();
		this.state = { sunset: '노을' }
	}
	render(){
		return (
			<p>
				바람이 머물다간 들판에<br />
				모락모락 피어나는 저녁연기<br />
				색동옷 갈아입은 가을 언덕에<br />
				빨갛게
				<b className= 'red'>{ this.state.sunset }</b>
				이 타고 있어요.
			</p>
		);
	}
}

const child = ReactDOM.createRoot( document.getElementById('root') );
child.render( <Wind /> );