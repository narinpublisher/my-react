class BarleyTree extends React.Component {
	constructor( props ){
		super( props );
		this.state= {txt: '길가에 떨어진 나뭇잎 '};		
	}
	componentDidMount(){
		setTimeout( () => {
			this.setState({ txt: "가지에 희망의 말 "});
		} , 3000 );
	} 
	getSnapshotBeforeUpdate( prevProps, prevState ) {
		document.getElementById( 'para1' ).innerHTML =
		prevState.txt + ' 글자는 3초 후에 ';
		return true;
	}
	componentDidUpdate(){
		document.getElementById( 'para2' ).innerHTML=
		this.state.txt+ ' 글자로 변경 되었습니다.';		
	}	
	render(){
		return (
			<p>
				성문앞 우물곁에 서있는 보리수<br />
				나는 그 그늘아래 단꿈을 보았네<br />
				<b className='aqua'>{ this.state.txt }</b><br />
				새기어 놓고서<br />
				기쁘나 슬플때나 찾아온 나무밑<br />
				찾아온 나무밑<br /><br />
				<span id='para1' className='yellowgreen'></span>
				<span id='para2' className='yellowgreen'></span>
			</p>
		);
	}
}

const democracy = ReactDOM.createRoot( document.getElementById('root') );
democracy.render( <BarleyTree /> );