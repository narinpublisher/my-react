const UserContext = React.createContext();

function Part1() {
  const [ goat, change ] = React.useState("아기염소");


  return (
    <UserContext.Provider value= { goat }>
      <h1>{ ` (동요) ${ goat } ` }</h1>  
      <Part2 />
    </UserContext.Provider>
  );
}

function Part2() {
  const goat = React.useContext(UserContext);
  return (
    <>      
	<p>			
		파란하늘 파란하늘 꿈이<br />
		드리운 푸른 언덕에<br />						
		{ ` ${ goat }  여럿이 풀을 뜯고 놀아요 ` } <br />
		해처럼 밝은얼굴로
	</p>
	<Part3 />
    </>
  );
}

function Part3() {
  return (
    <>
	<p>
		빗방울이 뚝뚝뚝뚝 떨어지는 날에는<br />
		잔뜩 찡그린 얼굴로<br />
		엄마 찾아 음메~~ 아빠 찾아 음메~~<br />
		울상을 짓다가
	</p>
	<Part4 />
   </>
  );
}

function Part4() {
  const goat = React.useContext(UserContext);
  return ( 
   <> 
	<p>
		해가 반짝 곱게 피어나면<br />
		너무나 기다렸나봐<br />
		폴짝폴짝 콩콩콩 흔들흔들 콩콩콩<br />	
		{ ` 신나는 ${ goat }들 ` }
	</p>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById( 'root' ) );
root.render( <Part1 /> );