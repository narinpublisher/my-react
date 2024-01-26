const MyCoat = () => {	
	const [ color, setColor ] = React.useState("black");	
				
	const change = ( i , j )  => {					
			setColor( j );	
	
		const ele = document.querySelectorAll('button');

		//4개의 버튼 배경색을 삭제
		for ( let x=0; x<4; x++ ) ele[x].style.background = "none";
		
		//클릭한 버튼에만 배경색 부여
		ele[ i ].style.background = j ;
	}
	
	return (
	     <section>
				<h1>나의 코트 색상은 <strong style= {{ color: color }}>{ color }</strong> 입니다.</h1>
				<button type='button' 
					onClick= { () => { change( 0 , 'black' ); }}>black</button>&nbsp;		
				<button type='button' 
					onClick= { () => { change( 1 , 'brown' );}}>brown</button>&nbsp;
				<button type='button' 
					onClick= { () => { change( 2 , 'blue' ); }}>blue</button>&nbsp;
				<button type='button' 
					onClick= { () => { change( 3 , 'green' ); }}>green</button>
	     </section>
	);
}

const myApp = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
myApp.render ( <MyCoat /> );