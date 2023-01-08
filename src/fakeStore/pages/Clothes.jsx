import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch/useFetch';
import { ProductCard } from '../components/ProductCard';
import getClothesByAll from '../helpers/getClothes';

export const Clothes = () => {

    /*-------------- [3] Seleccionar Categorias y [5] Seleccionar el tipo de decisión de la busqueda --------------*/
    const [typeDecision, setTypeDecision] = useState("all");

    const [selectCategoryValue, setSelectCategoryValue] = useState(""); 
    /*-------------- [0] Conseguir Dato y Filtrar --------------*/
    const { data, isLoading } = useFetch(`https://fakestoreapi.com/products?limit=20`);
    // const data = useFetch(`https://randomuser.me/api/?results=30`);
   const { information, objDecision }  = getClothesByAll({  
      decision: typeDecision,
      value: selectCategoryValue, 
      information: data 
    });
    /*-------------- [1] Evitar repetir Categorias --------------*/
    let tempCategory = []; 
    !!data && data.forEach( (item, index) => {
      tempCategory.push(item.category);
    });
    let setData = new Set(tempCategory);
    /*-------------- [2] Componente hijo para mostrar las categorias y [4] Seleccionar Categorias --------------*/
    const handleValue =(e)=>{
      setSelectCategoryValue(e.target.name);
      setTypeDecision("category");
    }
    const ListCategories = ({ category }) => {
      return ( 
        <>
          <li><a className="dropdown-item" name={category} href="#" onClick={handleValue} >{ category }</a></li>
        </>
       );
    }

  return (
    <>
      <div className='row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 g-3 pt-5'>
        <div className="btn-group dropend">
          <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </button>
          <ul className="dropdown-menu">
            <li><h6 className="dropdown-header">Categories</h6></li>
            <li><hr className="dropdown-divider" /></li>
            {
              Array.from(setData).map( (category, index) => (
                <ListCategories key={index} category={category}/>
              ))
            }
          </ul>
          <input 
            type="text" 
            name="" 
            placeholder="Select Category" 
            className='ms-5 text-center bg-warning text-dark text-capitalize'
            value={selectCategoryValue} 
            onChange={handleValue} 
            disabled={true}
          />
        </div>
      </div>
      
      <div className='row g-3 py-5'>
        {
          !!information && information.map( product => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>
    </>
  )
}
