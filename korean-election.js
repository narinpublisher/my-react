class Election extends React.Component {
	constructor(props){
		super(props);
		this.state= { votes: '넉넉한 사전투표 기간?'}
	}
	componentDidMount() {
		setTimeout( () => {
			this.setState({ votes: ' 사전투표 즉시 폐기!'});
		} , 2000 );
	}
	render() {
		return (
			<p>
				소중한 투표 권리행사만큼 중요한 것은<br />
				<b className= 'red'>{this.state.votes}</b>
			</p>
		);
	}
}

const vote = ReactDOM.createRoot( document.getElementById('root') );
vote.render( <Election /> );
