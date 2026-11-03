import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/logika/cart";

const ProductsDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return (
            <div className="flex h-screen items-center justify-center">
                <h1 className="text-2xl font-bold text-slate-500">
                    Produk Tidak Ditemukan
                </h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-4xl px-8 py-10">
            <Card className="overflow-hidden rounded-3xl border shadow-sm p-0 gap-0">
                
                <div className="w-full h-[300px] md:h-[400px] overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover" 
                    />
                </div>
                
                <CardHeader className="p-6 md:p-8">
                    <p className="mb-3 inline-block w-fit border border-slate-300 rounded-md px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                        {product.category}
                    </p>
                    <CardTitle className="text-3xl font-black text-slate-900">
                        {product.name}
                    </CardTitle>
                    
                    <div className="flex flex-col mt-4">
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Price</span>
                        <span className="text-3xl font-bold text-slate-900 flex items-baseline gap-1">
                            <span className="text-lg font-medium">Rp</span>
                            {product.price}
                        </span>
                    </div>
                </CardHeader>

                <CardContent className="p-6 md:p-8 pt-0">
                    <CardDescription className="text-slate-500 text-base leading-relaxed mb-8">
                        {product.description}
                    </CardDescription>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild variant="outline" className="rounded-xl h-12 px-6">
                            <Link to="/products">Kembali ke Daftar Produk</Link>
                        </Button>
                        
                        <Button 
                            onClick={() => addToCart(product)}
                            className="rounded-xl h-12 px-6 bg-slate-900 text-white hover:bg-slate-800"
                        >
                            Add to cart
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductsDetail;