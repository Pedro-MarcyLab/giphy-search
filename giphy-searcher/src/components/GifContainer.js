import {useEffect} from 'react';

function GifContainer(props) {
    useEffect (() => {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=83K4haCK47PgJzc99D9L7fHJNMla4mJL&limit=3&rating=g')
        .then(res => res.json())
        .then((load) => {
            props.setLoad(load)
          console.log(props.setLoad)
        }
        )
        
      }, [])
      
    return (
        <ul style = {{listStyle:'none'}}>
            <li>
                <img src={props.load && props.load.data[0].images.original.url} alt = '' />
            </li>
            <li>
                <img src={props.load && props.load.data[1].images.original.url} alt = '' />
            </li>
            <li>
                <img src={props.load && props.load.data[2].images.original.url} alt = '' />
            </li>
        </ul>
    )
}

export default GifContainer
