import React from 'react';

function Home() {
  const heroImage = "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1920&q=75";
  const chefImage = "https://images.unsplash.com/photo-1556911220-377944f3efd0?auto=format&fit=crop&w=500&q=75";
  const recipeOfTheDayImage = "https://images.unsplash.com/photo-1555939594-58d7cb644e52?auto=format&fit=crop&w=500&q=75";

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero mb-12 relative">
        <img src={heroImage} alt="Delicious food" className="w-full h-96 object-cover rounded-default shadow-md" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-header mb-4">Welcome to Foodie</h1>
          <p className="text-lg">Discover delicious recipes and share your culinary creations.</p>
          <button className="btn btn-primary mt-4">Explore Recipes</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={chefImage} alt="Chef" className="w-full h-auto rounded-default shadow-md" />
        <div>
          <h2 className="text-3xl font-header mb-4">About Us</h2>
          <p className="text-base">
            Foodie is a community for food lovers. We share recipes, cooking tips, and culinary experiences.
            Join us and explore the world of delicious food!
          </p>
        </div>
      </section>

      {/* Recipe of the Day Section */}
      <section className="recipe-of-the-day mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-header mb-4">Recipe of the Day</h2>
          <p className="text-base">
            Try our today's special: Spicy Chicken Stir-Fry. A quick and easy recipe that will delight your taste buds.
          </p>
          <button className="btn btn-secondary mt-4">View Recipe</button>
        </div>
        <img src={recipeOfTheDayImage} alt="Spicy Chicken Stir-Fry" className="w-full h-auto rounded-default shadow-md" />
      </section>

      {/* Call to Action Section */}
      <section className="cta text-center py-12 bg-light rounded-default shadow-md">
        <h2 className="text-3xl font-header mb-4">Ready to Get Started?</h2>
        <p className="text-lg">Join our community and start sharing your favorite recipes today!</p>
        <button className="btn btn-primary mt-4">Sign Up Now</button>
      </section>
    </div>
  );
}

export default Home;
