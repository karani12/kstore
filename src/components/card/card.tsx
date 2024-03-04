import { ICard } from "./ICard"
import { parseUrls } from "../../utils/parseUrls"
import { Link } from "react-router-dom"
export const Card = (product: ICard) => {

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure>
                    <img src={product.image}
                        className="w-full h-72 object-contain"
                        alt={product.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title line-clamp-1">{product.title}
                    </h2>
                    <p className=" line-clamp-2">{product.description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/${product.id}`} >
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}