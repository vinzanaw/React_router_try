import { Link } from "react-router-dom";
import { useCart } from "@/logika/cart"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react"; 

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-8 py-20 text-center">
                <h1 className="text-3xl font-black mb-4">Keranjang Masih Kosong</h1>
                <p className="text-slate-500 mb-8">Yuk belanja dulu biar gak kosong.</p>
                <Button asChild className="rounded-xl bg-slate-900 text-white">
                    <Link to="/products">Kembali ke Products</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-4xl px-8 py-10">
            <h1 className="text-3xl font-black mb-8">Keranjang Belanja</h1>

            <div className="flex flex-col gap-6">
                {cart.map((item) => (
                    <Card key={item.id} className="flex flex-col sm:flex-row items-center p-4 gap-4 shadow-sm">
                        <div className="w-full sm:w-32 h-32 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover" 
                            />
                        </div>

                        <div className="flex-grow text-center sm:text-left">
                            <h2 className="text-xl font-bold text-slate-900">{item.name}</h2>
                            <p className="text-sm text-slate-500">{item.category}</p>
                            <p className="text-lg font-bold text-slate-900 mt-2">
                                Rp {item.price}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-center px-4 py-1 bg-slate-100 rounded-lg font-bold">
                                {item.quantity}x
                            </div>
                            <Button 
                                variant="destructive" 
                                size="icon" 
                                className="rounded-xl"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            <Card className="mt-8 p-6 flex flex-col sm:flex-row items-center justify-between shadow-sm bg-slate-50 border-slate-200">
                <div className="flex flex-col mb-4 sm:mb-0">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Pembayaran</span>
                    <span className="text-3xl font-black text-slate-900">
                        Rp {totalPrice}
                    </span>
                </div>
            </Card>
        </div>
    );
};

export default Cart;