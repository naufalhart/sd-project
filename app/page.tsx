import Navbar from "./components/navbar/page";
import Carousel from "./components/carousel/page";
import Products from "./products/page";
import Testimoni from "./components/testimoni/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel images={[
        "/image/malika_image.jpeg",
        "/image/Amanda_Blink_Sage.jpg",
        "/image/FPK202306206.JPG",
        "/image/FPK2023062065.JPG",
        "/image/Kirana_Maroon.JPG"]} />
      <h2 className="bg-white text-2xl font-bold tracking-tight text-black font-serif
                     mx-auto max-w-2xl px-4 mt-12 sm:px-6 lg:max-w-7xl lg:px-8">Our Products</h2>
      <Products />
      <Testimoni />
      <Footer />
    </>
  );
}
