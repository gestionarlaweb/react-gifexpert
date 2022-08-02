import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One']);
  
  // Añadir registro
  const onAddCategory = (newCategory) => {
    // Condición para evitar duplicados 
    if(categories.includes(newCategory)) return // Si la categoria ya existe no hagas nada
    setCategories([ newCategory, ...categories]) // Pero si no existe insertala
    //setCategories([...categories, 'Tree']) // ...categories (Hago una copia y le añado el 'Tree')
  }

  

  return (
    <>
    {/* título */}
    <div>GifExpertApp</div>

    {/* Input */}
    <AddCategory 
      onNewCategory={onAddCategory}
    />

    {/* Listado de Gif */}
    {/*<button onClick={onAddCategory}>Agregar</button>
    */}
    <ol>
      {
        categories.map( (category) => (
          <GifGrid 
          key={category} 
          category={category}/>
        ))
      }
    </ol>
    </>
    
  )
}
