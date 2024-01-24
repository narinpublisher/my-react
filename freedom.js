class Freedom extends React.Component {
	constructor(){
		super();
		this.state= {compare: '애매하다. '};		
	}
	componentDidMount(){
		setTimeout( () => {
			this.setState({ compare: "다르다! "});
		} , 3000 );
	} 
	getSnapshotBeforeUpdate( p1, p2 ) {
		document.getElementById( 'para1' ).innerHTML =
		p2.compare + ' 글자는 3초 후에 ';
		return true;
	}
	componentDidUpdate(){
		document.getElementById( 'para2' ).innerHTML=
		this.state.compare+ ' 글자로 변경 되었습니다.';		
	}	
	render(){
		return (
			<p>
				자유민주주의와<br />
				인민민주주의는<br />
				<b className='red'>{ this.state.compare }</b><br />
				<span id='para1' className='yellowgreen'></span>
				<span id='para2' className='yellowgreen'></span>
			</p>
		);
	}
}

const democracy = ReactDOM.createRoot( document.getElementById('root') );
democracy.render( <Freedom /> );