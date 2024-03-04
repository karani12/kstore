import { Card } from "../../components/card/card"
import { useQuery } from "@tanstack/react-query"
const ListProducts = () => {
    const { data, isPending, error  } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            
            return response.json()
        }
    })
    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    return (
        <div className="grid md:grid-cols-4 ">
            {data.map((product: any) => (
                <Card key={product.id} {...product} />
            ))}
        </div>
    )
      

}

export default ListProducts