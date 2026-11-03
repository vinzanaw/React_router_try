import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useCart } from "@/logika/cart"

const Product = () => {
  const { addToCart } = useCart()

  return (
    <div className="container mx-auto px-8 py-10">
        <h1 className="mb-8 text-3xl font-black">Our Products</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <Card key={product.id} className="flex flex-col overflow-hidden rounded-3xl border shadow-sm p-0 gap-0">
                    
                    <div className="w-full h-56 overflow-hidden">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                    </div>
                    
                    <CardHeader className="p-6 pb-0 flex-grow">
                        <p className="mb-3 inline-block w-fit border border-slate-300 rounded-md px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                            {product.category}
                        </p>
                        <CardTitle className="text-2xl font-bold text-slate-900 line-clamp-1">
                            {product.name}
                        </CardTitle>
                        <CardDescription className="text-slate-500 mt-2 text-sm leading-relaxed line-clamp-3">
                          {product.description}
                        </CardDescription>
                    </CardHeader>

                    <div className="mt-auto flex items-end justify-between gap-4 p-6 pt-6">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Price</span>
                            <span className="text-xl font-bold text-slate-900 flex items-baseline gap-1">
                                <span className="text-sm font-medium">Rp</span>
                                {product.price}
                            </span>
                        </div>

                        <div className="flex gap-2 w-full max-w-[200px]">
                            <Button asChild variant="outline" className="rounded-xl flex-1 px-2">
                                <Link to={`/products/${product.id}`}>
                                    Detail
                                </Link>
                            </Button> 

                            <Button 
                                onClick={() => addToCart(product)}
                                className="rounded-xl bg-slate-900 text-white hover:bg-slate-800 flex-1 px-2"
                            >
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default Product