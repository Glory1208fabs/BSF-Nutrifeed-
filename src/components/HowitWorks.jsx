const Step = ({ number, text }) => (
  <div className="text-center">
    <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-3">
      {number}
    </div>

    <p>{text}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-10">
        How It Works
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">

        <Step number="1" text="Input farm data" />
        <Step number="2" text="Track feed production" />
        <Step number="3" text="Monitor farm growth" />

      </div>
    </section>
  );
};

export default HowItWorks;