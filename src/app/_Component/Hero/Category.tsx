export default function Category() {
  const categories = [
    { name: "Breakfast", icon: "🍳" },
    { name: "Lunch", icon: "🥗" },
    { name: "Dinner", icon: "🍽️" },
    { name: "Dessert", icon: "🍰" },
    { name: "Snacks", icon: "🍿" },
    { name: "Beverages", icon: "🥤" },
    { name: "Vegetarian", icon: "🥦" },
    { name: "Vegan", icon: "🌱" },
    { name: "Gluten-Free", icon: "🌾" },
    { name: "Low-Carb", icon: "🥩" },
  ];

  return (
    <div className="p-3 bg-white">
      <main>
        <h1 className="text-[#2d1b69] font-bold text-center sm:text-3xl text-xl py-5">Browse by Category</h1>
        <section className="flex overflow-auto max-w-6xl gap-4 mx-auto p-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-32 min-w-[8rem] max-w-[8rem] border border-gray-200 text-black flex flex-col items-center justify-center bg-white py-5 px-4 rounded-lg shadow-md cursor-pointer hover:bg-[#ffd1a0] transition"
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="text-xs text-[#2d1b69] mt-2">{category.name}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
