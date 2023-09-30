import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch/useFetch';
import getClothesByAll from '../helpers/getClothes';
import { ProductCard } from '../components/ProductCard';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Stack from '@mui/joy/Stack';
import Autocomplete from '@mui/joy/Autocomplete';
import { Form } from 'react-router-dom';

export const SearchPage = () => {

  const  [inputValue, setInputValue]  = useState("");
  // const data = useFetch(`https://randomuser.me/api/?results=30`);
  const { data, isLoading } = useFetch(`https://fakestoreapi.com/products?limit=20`);

  const [allProducts, setAllProducts] = useState([]); // Todos los productos
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos filtrados

   const { information } = getClothesByAll({  
     decision: 'all',
     value: inputValue.toString().trim().toLowerCase(), 
     information: data 
   });

   function onChangeSearch({ target }) {
    if(target.value == 0) return
    setInputValue(target.value);
  }
  
  function onSubmit(event) {
    event.preventDefault();
    const trimmedInputValue = inputValue.toString().trim().toLowerCase(); // Asegurarse de que sea una cadena
    
    if (trimmedInputValue.length < 1) return;
    filterAndAddProducts(trimmedInputValue);
    setInputValue("");  
  }  

  const filterAndAddProducts = (newData) => {
    if (!data || data.length === 0) return;

    // Filtramos los productos que coincidan con el valor ingresado
    const filtered  = data.filter((product) =>
      product.title.toLowerCase().includes(newData)
    );

    // Actualizamos el estado de los productos filtrados
    setFilteredProducts(filtered);
    console.log("as");
    
  };

  useEffect(() => {
      // También puedes mantener una copia de todos los productos si lo necesitas
      if(data != null){
        console.log(data);
      setAllProducts(data);
      }
  }, [isLoading])
  
 return (
   <>
      <form onSubmit={onSubmit}>
        <Stack spacing={2} sx={{ width: 300 }}>
          <FormControl id="free-solo-2-demo" >
            <FormLabel>Search input</FormLabel>
            <Autocomplete
              placeholder="Search anything"
              type="search"
              freeSolo
              disableClearable
              value={inputValue.toString().trim().toLowerCase()}
              options={ allProducts.map(product => product.title) }
              onChange={event => { return onChangeSearch(event)}}
            />
          </FormControl>
        </Stack>
      </form>

      <div className="row rows-cols-1 row-cols-md-3 g-3 py-5">
        {!!filteredProducts &&
          filteredProducts.map((product) => 
            <ProductCard key={product.id} {...product} />
          )}
      </div>
      
      {/* Si deseas mostrar todos los productos sin filtrar
      <div className='row rows-cols-1 row-cols-md-3 g-3 py-5'>
        {!!allProducts &&
          allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
      */}
   </>
 )
}
