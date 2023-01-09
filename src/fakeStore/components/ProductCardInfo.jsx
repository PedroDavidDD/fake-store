import { Tarjetas } from "../../style/components/StyledProductos"

export const ProductCardInfo = ({ clothes }) => {
  return (
    <>
        <div className="row" >
            <Tarjetas className="col-12">
                <div className="tarjeta">
                    <div className="tarjeta__item tarjeta__item--content">
                        <input className="tarjeta__id" defaultValue={ clothes.id } hidden />
                        <div className="tarjeta__title">{ clothes.title }</div>
                        <div className="tarjeta__category">{ clothes.category }</div>
                        <div className="tarjeta__description">{ clothes.description }</div>
                    </div>
                    <div className="tarjeta__item">
                        <img className="tarjeta__image" src={ clothes.image } />
                    </div>
                </div> 
            </Tarjetas>
        </div>
    </>
  )
}
