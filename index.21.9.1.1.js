const useCustom = ( url ) => {
  const [ pic , setPic ] = React.useState( null );

  React.useEffect( () => {
    fetch( url )
      .then( ( res ) => res.json() )
      .then( ( x ) => setPic( x ) );
  }, [ url ] );

  return [ pic ];
};

const PicUrl = () => {
  const [ pic ] = useCustom( "https://jsonplaceholder.typicode.com/photos" );

  return (
    <section>
      { pic &&
        pic.map( ( item ) => {
          return <p key= { item.id }> { item.url } </p>;
      } ) }
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <PicUrl /> );