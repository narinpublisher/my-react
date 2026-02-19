function Children ( props ) {
	return (
		<li>
			<b className='aqua'>{ props.rain }</b> &#9748;
		</li>
	);
}

function BabyGoat () {
	const items= [
		'When raindrops softly fall',
		'With a gloomy little face',
		'Calling for mom, calling for dad',
		'Almost ready to cry'
	];
	return (
		<>
			<h2>Children’s Song – Baby Goat</h2>
			<ul>
				{  items.map ( ( item,index ) => (
				    <Children key={index} rain= { item } /> 
				 ) ) }
			</ul>
		</>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <BabyGoat /> );