import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container mx-auto px-8 py-16 text-center'>
        <h1 className='text-4xl font-bold'>
            Welcome To StoreNa
        </h1>
      
        <p className='mt-4 text-gray-500'>
            Belanja Product Kamu Dengan Mudah Dan Menyenangkan Di StoreNa
        </p>

        <Button asChild className="mt-6 bg-black">
            <Link to='/products'>Lihat Product</Link>
        </Button>
    </div>
  )
}

export default Home
