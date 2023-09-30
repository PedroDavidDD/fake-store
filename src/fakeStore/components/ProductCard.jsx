import { Link } from "react-router-dom";
import { StyledBtnInfo } from "../../style/components/StyledProductos";

export const ProductCard = ({ 
    id,
    title,
    category,
    image,
    description,
    price,
    rating
 }) => {
  const heroImageUrl = image;

  return (
    <>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 animate__animated animate__fadeIn d-flex flex-wrap text-dark">
            <div className="card animate__animated animate__backInRight w-auto">
                <div className="row no-gutters">
                    <div className="col-12"> 
                        <img 
                            src={heroImageUrl} 
                            alt={category} 
                            className='card-img animate__animated animate__backInRight' 
                            style={{height:"20rem",'objectFit': 'contain'}} 
                        />    
                    </div>
                    <div className="col-12 animate__animated animate__backInLeft">
                        <div className="card-body">
                            <h5 className="card-title">
                                <span className="text-danger fw-bold">title:</span> {title}
                            </h5>
                            <p className="card-text fw-bold fst-italic">
                                <span className="text-danger fw-bold fst-normal"> 
                                    price:
                                </span> S/.{price}
                            </p>      
                            <p className="card-text fw-bold">
                                <span className="text-danger fw-bold"> 
                                    category:
                                </span> {category} 
                            </p>               
                            <p className="row card-text">
                                <small className="col-6 text-muted">
                                    <span className="text-danger fw-bold">
                                        rate:
                                    </span> {rating.rate}
                                </small>

                                <small className="col-6 text-muted">
                                    <span className="text-danger fw-bold">
                                        count:
                                    </span> {rating.count}
                                </small>
                                <small className="col-12 p-3">
                                    <StyledBtnInfo 
                                        to={`/clothesHead/${id}`}
                                        className="animate__animated animate__backInLeft"
                                    >  
                                        Mas información
                                    </StyledBtnInfo>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
