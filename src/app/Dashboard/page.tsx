import Category from "../_Component/Hero/Category";
import FeatureRecipe from "../_Component/Hero/FeatureRecipe";
import Hero from "../_Component/Hero/Hero";
import NavBar from "../_Component/Hero/NavBar";

export default function DashboardPage() {
    return (
        <>  
            <main className="m-auto">
                <NavBar />
                <Hero />
                <Category />
                <FeatureRecipe />
            </main>
        </>
    );
}