import {useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
   // estado local
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=> {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    } 

//Para que solo cargue una vez la consulta a la api
useEffect( ()=> {
    getImages();
}, []);

 return {
    images,
    isLoading
 }
}
