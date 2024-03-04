import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const ViewProduct = () => {
    const { id } = useParams();
    const { data, isPending, error } = useQuery({
        queryKey: ['productid', id],
        queryFn: async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            return response.json();
        }
    });

    return (
        <main>
            <button
                onClick={() => window.history.back()}
                className="text-2xl pl-4 flex items-center mt-4">
                <ArrowLeftIcon className="h-6 w-6 inline " />
                <p className="pl-4">
                    Go back
                </p>
            </button>

            <div className="grid md:grid-cols-2 place-items-center h-screen ">
                <img
                    src={data?.image}
                    className="w-96 m-auto h"
                    alt={data?.title}
                />
                <div className="info px-4 md:w-3/5">
                <p className="badge-primary badge-outline rounded-none w-fit mt-4">
                        {data?.category}
                    </p>
                    <h1 className="text-3xl font-bold text-left">
                        {data?.title}
                    </h1>

                    <p className=" mt-4">
                        {data?.description}
                    </p>

                    <p
                        className="text-2xl font-bold text-left mt-4"

                    >
                        $ {data?.price}

                    </p>

                 

                    <button className="btn btn-primary mt-4">Add to Cart</button>

                </div>

            </div>
        </main>

    );
}

export default ViewProduct;