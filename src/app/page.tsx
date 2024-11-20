import HomeHero from "@/ui/components/home/homeHero/HomeHero";
import Logo from "@/ui/components/logo/Logo";
import LogoTagline from "@/ui/components/logo/LogoTagline";
import Header from "@/ui/components/header/Header";
import Divider from "@/ui/components/divider/Divider";
import HomeCollections from "@/ui/components/home/homeCollections/HomeCollections";
import HomeMission from "@/ui/components/home/HomeMission";
import HomeProducts from "@/ui/components/home/homeProducts/HomeProducts";
import Footer from "@/ui/components/footer/Footer";
import api from "@/data/network/api";
import { CollectionItemType } from "@/type/types";

const fetchNewProduct = async () => {
    const data = await api.getAllProducts(1);
    return data[0];
};

const fetchCollections = async () => {
    const local = [
        {
            category: "men's clothing",
            image: "/images/men-clothe.jpg",
        },
        {
            category: "jewelery",
            image: "/images/jewelry.jpg",
        },
        {
            category: "electronics",
            image: "/images/electronic.jpg",
        },
        {
            category: "women's clothing",
            image: "/images/women-clothe.jpg",
        },
    ];

    const fetchedCollections: CollectionItemType[] = [];
    const categories = await api.getAllCategory();
    for (const category of categories) {
        const products = await api.getProductsByCategory(category);
        const firstProduct = products[0];
        fetchedCollections.push(firstProduct);
    }

    const updatedCollections = fetchedCollections.map((itemFethced) => {
        const matchingItemLocal = local.find((itemLocal) => itemLocal.category === itemFethced.category);

        return {
            ...itemFethced,
            thumbImage: matchingItemLocal ? matchingItemLocal.image : null,
        };
    });
    return updatedCollections;
};

const fetchProducts = async () => {
    const products = await api.getAllProducts(8);
    return products;
};

export default async function Home() {
    const newProduct = await fetchNewProduct();
    const collections = await fetchCollections();
    const products = await fetchProducts();

    return (
        <>
            <Header />
            <Logo />
            <LogoTagline />
            <main className="w-full">
                <section data-section-theme="dark" className="hero-section w-screen">
                    <HomeHero newProduct={newProduct} />
                </section>
                <Divider />
                <section className="collections-section w-screen min-h-screen mobile:min-h-fit h-fit bg-off-white" data-section-theme="light">
                    <HomeCollections collections={collections} />
                </section>
                <section className="section-products w-screen bg-off-white h-fit" data-section-theme="light">
                    <HomeProducts products={products} />
                </section>
                <section data-section-theme="dark" className="mission-section w-screen h-[1520px] mobile:h-[600px] mt-10 mobile:mt-8 overflow-hidden">
                    <HomeMission />
                </section>
                <Divider />
                <Footer />
            </main>
        </>
    );
}
