import { Clock10, UsersRound, ChefHat, Star} from "lucide-react";

export default function FeatureRecipe() {
  const recipes = [
    {
      name: "Mediterranean Pasta Salad",
      time: "30 min",
      saves: "3",
      difficulty: "Easy",
      category: ["Healthy", "Protein", "Vegetarian"],
      stars: 4.6,
    },
    {
      name: "Spicy Thai Noodle Bowl",
      time: "25 min",
      saves: "7",
      difficulty: "Medium",
      category: ["Spicy", "Asian", "Vegan"],
      stars: 4.8,
    },
    {
      name: "Classic Beef Stroganoff",
      time: "45 min",
      saves: "12",
      difficulty: "Hard",
      category: ["Dinner", "Protein", "Comfort Food"],
      stars: 4.4,
    },
    {
      name: "Avocado Toast Deluxe",
      time: "10 min",
      saves: "15",
      difficulty: "Easy",
      category: ["Breakfast", "Vegetarian", "Healthy"],
      stars: 4.9,
    },
    {
      name: "Berry Yogurt Parfait",
      time: "15 min",
      saves: "9",
      difficulty: "Easy",
      category: ["Dessert", "Healthy", "Gluten-Free"],
      stars: 4.7,
    },
  ];

  return (
    <div className="p-7 bg-[#f0f0e1]">
      <div className="flex items-center justify-between max-w-6xl m-auto">
        <h1 className="text-3xl text-[#2d1b69]">Feature Recipes</h1>
        <button className="px-3 py-1 bg-[#ffa94d] text-gray-400 rounded-lg hover:bg-[#fcd1a2]">
          View all
        </button>
      </div>
      <section className="grid sm:grid-cols-3 grid-cols-2 max-w-6xl m-auto gap-2">
        <div className="w-full border border-gray-300 rounded-lg text-[#2d1b69] relative bg-white py-4 px-2">
            <div className="flex justify-center items-center gap-1 w-fit absolute right-2 top-2 border border-gray-300 py-1 px-3 rounded-full">
                <Star size={18} color="#ffa94d" fill="#ffa94d"/>
                <span className="text-sm">4</span>
            </div>
          <div className="bg-red p-4">Hello</div>
          <h4>Meditteran Grilled Chicken</h4>
          <div className="flex gap-2">
            <Clock10 />
            <span>40 min</span>
            <UsersRound />
            <span>2</span>
            <ChefHat />
            <span>Hard</span>
          </div>
        </div>
      </section>
    </div>
  );
}
