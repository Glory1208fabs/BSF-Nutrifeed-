const BenefitCard = ({ title, text }) => (
  <div className="bg-white p-6 rounded-xl shadow text-center">
    <h3 className="text-xl font-semibold mb-2">
      {title}
    </h3>
    <p className="text-gray-600">
      {text}
    </p>
  </div>
);

const Benefits = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose BSF-Nutrifeed
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        <BenefitCard
          title="Affordable"
          text="Low-cost feed solutions for poultry farmers."
        />

        <BenefitCard
          title="Sustainable"
          text="Eco-friendly feed production for healthy farming."
        />

        <BenefitCard
          title="Nutritious"
          text="High quality feed for stronger poultry growth."
        />

      </div>
    </section>
  );
};

export default Benefits;