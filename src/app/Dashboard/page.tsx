import Hero from "../_Component/Hero/Hero";
import NavBar from "../_Component/Hero/NavBar";

export default function DashboardPage() {
    return (
        <>  
            <main className="m-auto">
                <NavBar />
                <Hero />
            </main>
        </>
    );
}