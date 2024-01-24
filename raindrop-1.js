function Children ( pro ) {
	return (
			<li>
				<b className='aqua'>
					{ pro.num } { pro.text }
				</b> &#9748;
			</li>
	);
}

function BabyGoat () {
	const items= [
				{ id:1, txt: ') 빗방울이 뚝뚝뚝 떨어지는 날에는' } ,
				{ id:2, txt: ') 잔뜩 찡그린 얼굴로' } ,
				{ id:3, txt: ') 엄마찾아 음매 아빠찾아 음매' } ,
				{ id:4, txt: ') 울상을 짓다가' }
	];
	return (
			<>
					<h2>동요_ 아기염소</h2>
					<ul style={{ listStyle: 'none' }}>
						{ items.map (  i  => 
							<Children key= { i.id }
							num= { i.id }
							text= { i.txt }
							/> 
						)}
					</ul>
			</>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <BabyGoat /> );