import { useFetch } from '../../hooks/useFetch/useFetch';
import { ProductCard } from '../components/ProductCard';
import getClothesByAll from '../helpers/getClothes';

export const Clothes = () => {

   // const data = useFetch(`https://randomuser.me/api/?results=30`);
   const { data, isLoading } = useFetch(`https://fakestoreapi.com/products?limit=20`);

   const { information, objDecision }  = getClothesByAll({  
      decision: 'all',
      information: data 
    });

  return (
    <>
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
