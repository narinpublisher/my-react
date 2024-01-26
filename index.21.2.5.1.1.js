function Sunset() {
		const [ wind, setWind ] = React.useState('바람이 머물다 간 들판에');
		const [ smoke, setSmoke ] = React.useState('모락모락 피어나는 저녁연기');
		const [ hill, setHill ] = React.useState('색동옷 갈아입은 가을 언덕에');
		const [ dye, setDye ] = React.useState('붉게 물들어 타는 저녁놀');
		
		return (
			<section style={{ backgroundColor: 'orange' , padding: '30pt' , borderRadius: '30pt' }}>
				<h1>동요_ 노을 3절</h1>
				<ul>
					<li>{ wind }</li>
					<li>{ smoke }</li>
					<li>{ hill }</li>
					<li>{ dye }</li>
				</ul>
			</section>
		);
}

const myApp = ReactDOM.createRoot( document.getElementById ( 'root' ) );
myApp.render ( <Sunset /> );