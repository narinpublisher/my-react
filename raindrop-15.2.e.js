function Children ( props ) {
	return (
		<li>
			<b className='aqua'>
				{ props.num } { props.text }
			</b> &#9748;
		</li>
	);
}
function BabyGoat () {
	const items= [
		{ id:1, txt: ') When raindrops gently fall' } ,
		{ id:2, txt: ') With a gloomy little face' } ,
		{ id:3, txt: ') Calling for mom, calling for dad' } ,
		{ id:4, txt: ') Almost ready to cry' }
	];
	return (
		<>
			<h2>Children’s Song – Baby Goat</h2>
			<ul style= {{ listStyle: 'none' }}>
				{ items.map (  (item)  => 
					<Children 	key=  { item.id }
						  	num= { item.id }
						  	text=  { item.txt }
					/> 
				)}
			</ul>
		</>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <BabyGoat /> );