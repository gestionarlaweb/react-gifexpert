import { useState } from "react";
                    // heredo onNewCategory (props) de GifEspertApp
export const AddCategory = ({ onNewCategory }) => {

    // Manejar el estado
    const [first, setfirst] = useState('')

    const onInputChange = (event)=> {
        //console.log(event.target.value)
        setfirst(event.target.value) // nuevo valor
    }
    const onSubmit = (event) => {
        event.preventDefault(); // Evitar que se refresque la pantalla a cada pulsación de tecla
        if(first.trim().length <= 1) return; // Mínimo quiero dos letras
       //setCategories( categories => [first, ...categories]);
        setfirst(''); // Borrar caja de texto
        onNewCategory(first.trim()); // sin espacios delante o atras
        
    }

  return (
    <form onSubmit={onSubmit}>
         <input type="text"
            placeholder="Buscar gifs"
            value={first}
            onChange={onInputChange}
        />
    </form>
   
  )
}
