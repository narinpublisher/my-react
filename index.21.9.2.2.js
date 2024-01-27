const useAlbum = ( title ) => {
  const [ tlt , setTlt ] = React.useState( null );

  React.useEffect( () => {
    fetch( title )
      .then( ( response ) => response.json() )
      .then( ( y ) => setTlt( y ) );
  }, [ title ] );

  return [ tlt ];
};

const AlbumTitle = () => {
  const [ albumTlt ] = useAlbum("https://jsonplaceholder.typicode.com/albums");

  return (
    <section>
      { albumTlt &&
        albumTlt.map( ( list ) => {
          return <p key= { list.id }> { list.title } </p>;
      } ) }
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') );
root.render( <AlbumTitle /> );