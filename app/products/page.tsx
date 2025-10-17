import Link from "next/link";
import products from "../../public/data/products.json";

function Products() {
    return (
        <section id="products">
            <div className="bg-white font-serif">
                <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                        {products.map((p) => (
                        <div key={p.id} className="group relative">
                            
                            <img src={`/image/${p.image[0]}`} alt="/image/logo.jpg" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                    <Link href={`/products/${p.id}`}>
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        {p.name}
                                    </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{p.color.length} color(s) available</p>
                                </div>
                            <p className="text-sm font-medium text-gray-900">{p.price}</p>
                            </div>
                        </div>
                        ))}
                    
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;