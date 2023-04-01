import HeroBanner from "@/components/HeroBanner";
import Products from "@/components/Products";
import Marcas from "@/components/Marcas";
import Folhetos from "@/components/Folhetos";

export default function Home() {
    return (
        <main>
            <HeroBanner />
            <Products />
            <Marcas />
            <Folhetos />
        </main>
    );
}
