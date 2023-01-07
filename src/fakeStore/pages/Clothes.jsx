import { useFetch } from '../../hooks/useFetch/useFetch';
import { ProductCard } from '../components/ProductCard';
import getClothesByAll from '../helpers/getClothes';

export const Clothes = () => {

   // const data = useFetch(`https://randomuser.me/api/?results=30`);
   const { data, isLoading } = useFetch(`https://fakestoreapi.com/products?limit=20`);

   const getData = getClothesByAll({  
      decision: 'all',
      value: "men's clothing", 
      range:{ my: 0, mn: 0 }, 
      data: data 
    });

  return (
    <>
      <div className='row rows-cols-1 row-cols-md-3 g-3 py-5'>
        {
          !!getData.data && getData.data.map( product => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>
    </>
  )
}
