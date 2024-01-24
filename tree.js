class BarleyTree extends React.Component {
	constructor () {
		super ();
		this.state= { show: true };		
	}
	delText = () => {
		this.setState({ show: false });
	}
	render (){
		let tree;
		if ( this.state.show ) {
			tree= <Child />;
		}
		return (
			<main>
				가지에 희망의 말 새기어 넣고서<br />	
				{ tree }<br />			
				<button type='button' onClick= { this.delText }>
				 마운트 해제하기
				</button>
			</main>
		)
	}
}

class Child extends React.Component {
	componentWillUnmount () {
		alert( 'BarleyTree 컴포넌트는 마운제 해제됩니다.' );
	}
	render () {
		return (
			<p>
				기쁘나 슬플 때나 찾아온 나무 밑
			</p>
		)
	}
}

const democracy = ReactDOM.createRoot( document.getElementById('root') );
democracy.render( <BarleyTree /> );