import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch/useFetch';
import getClothesByAll from '../helpers/getClothes';
import { ProductCard } from '../components/ProductCard';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Stack from '@mui/joy/Stack';
import Autocomplete from '@mui/joy/Autocomplete';

export const SearchPage = () => {

  const  [inputValue, setInputValue]  = useState("");
  // const data = useFetch(`https://randomuser.me/api/?results=30`);
  const { data, isLoading } = useFetch(`https://fakestoreapi.com/products?limit=20`);

  const [allProducts, setAllProducts] = useState([]); // Todos los productos

  const [typeDecision, setTypeDecision] = useState("all");

   const { information } = getClothesByAll({  
    decision: typeDecision,
    value: inputValue.toString().trim().toLowerCase(), 
    information: data 
   }); 

  useEffect(() => {
      // Agregar ayuda al buscar productos
      if(data != null){
        console.log(data);
      setAllProducts(data);
      }
  }, [isLoading])
  
  const onChangeSearch =(e)=>{
    if(e.target.value == 0) return
    setInputValue(e.target.value);
    setTypeDecision("filter");
  }

 return (
   <>
      <Stack spacing={2} sx={{ width: 300, marginTop: "1em", backgroundColor: "#5d5"}}>
        <FormControl id="free-solo-2-demo">
          <FormLabel sx={{ fontSize: "20px", alignSelf: "center" }}>Search input</FormLabel>
          <Autocomplete
            placeholder="Search anything"
            type="search"
            freeSolo
            disableClearable
            value={inputValue.toString().trim().toLowerCase()}
            options={ allProducts.map(product => product.title) }
            onChange={onChangeSearch}
          />
        </FormControl>
      </Stack>

      <div className='row rows-cols-1 row-cols-md-3 g-3 py-5'>
      {
        !!information && information.map( product => (
          <ProductCard key={product.id} {...product} />
        ))
      }
    </div>
      
   </>
 )
}
