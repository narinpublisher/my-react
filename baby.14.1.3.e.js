function BlueSky () {
	return (
		<p>Blue sky spreading gently over the dreamy hills.</p>
	);
}
function BabyGoat () {
	return (
		<p>
			Little goats graze together in the meadow,<br />
			their faces shining bright like the sun.
		</p>
	)
}
function BlBa ( para ) {
	const bl = para.bb ;
	return (
		<section id='tomato'>
		   { bl ?   <BlueSky /> : <BabyGoat /> }
		</section>
	);
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render (  <BlBa bb= { false }  />  );