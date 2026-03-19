function Timer() {
  const [ count , setCount ] = React.useState(0);

  React.useEffect(  () => {
    const timer = setTimeout(() => {
      	setCount(  ( prevCount  ) => prevCount + 1 );
    }, 1000 );

    return () => clearTimeout(  timer  );
  } ,  [  count  ] ); 

  return (
    <h3 style=  {{ textAlign : "center" }}>
      Time elapsed since this page was rendered:
      <b style=  {{ color : "red" , fontSize : "1.5rem" }}> {  count  } </b> seconds
    </h3>
  );
}

const root = ReactDOM.createRoot( document.getElementById( "root" ) ) ;
root.render(  <Timer />  );