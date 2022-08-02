import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifItem} from './GifItem'

export const GifGrid = ({category}) => {

//Custom Hook personalizado y más reducido
const {images, isLoading} = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>
        {
            isLoading 
            ? (<h2>Cargando...</h2>) 
            : null
        }
        
        <div className="card-grid">
            {
                images.map( (image)=> (
                    <GifItem 
                    key={ image.id } 
                    // title= {image.title}
                    // url={image.url} 
                    { ...image }
                    />
                ))
            }
            {/* Forma 1
        <ol>
            {
                images.map( image => (
                    <li key={image.id}>{image.title}</li>
                ))
            }
        </ol>

        // Forma 2
        <ol>
            {
                images.map( ({id, title})=> (
                    <li key={id}>{title}</li>
                ))
            }
        </ol>

         */}
        </div>
       
        
        
    </>
  )
}

