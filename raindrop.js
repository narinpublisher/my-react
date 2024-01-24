function Children ( pro ) {
	return (
			<li>
				<b className='aqua'>{ pro.rain }</b> &#9748;
			</li>
	);
}

function BabyGoat () {
	const items= [
			'빗방울이 뚝뚝뚝 떨어지는 날에는' ,
			'잔뜩 찡그린 얼굴로' ,
			'엄마찾아 음매 아빠찾아 음매' ,
			'울상을 짓다가'
	];
	return (
			<>
				<h2>동요_ 아기염소</h2>
				<ul>
					{ items.map ( ( song ) => <Children rain= { song } /> ) }
				</ul>
			</>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <BabyGoat /> );
