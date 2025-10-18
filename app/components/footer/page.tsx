import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="bg-white rounded-lg shadow-sm" id="footer">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 font-serif">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <div className="relative h-8 w-32">
                                <Image src="/image/logo.jpg" alt="Logo" fill className="object-contain" />
                            </div>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                            <li>
                                <a href="https://www.instagram.com/shintadewi_batik/" className="hover:underline me-4 md:me-6">Instagram</a>
                            </li>
                            <li>
                                <a href="https://wa.me/62817737961" className="hover:underline me-4 md:me-6">Whatsapp</a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@shintadewibatik" className="hover:underline me-4 md:me-6">TikTok</a>
                            </li>
                            <li>
                                <a href="https://shopee.co.id/shintadewi_boutique" className="hover:underline">Shopee</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="#" className="hover:underline">ShintaDewi™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}