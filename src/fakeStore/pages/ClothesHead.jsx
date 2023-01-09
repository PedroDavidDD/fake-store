import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch/useFetch';
import { ProductCardInfo } from '../components/ProductCardInfo';

export const ClothesHead = () => {

  const { id } = useParams();

  const { data, isLoading } = useFetch(`https://fakestoreapi.com/products?limit=20`);

  const clothes = useMemo(() => !!data && data.find( dt => dt.id == id) || [], [data]);

  return (
    <>
      <h1>ClothesHead</h1>
      <div className="container">
        {
        !isLoading 
          ? (<ProductCardInfo clothes={clothes}/>)
          : <div className='text-info'>Loading...</div>
        }
      </div>
    </>
  )
}
