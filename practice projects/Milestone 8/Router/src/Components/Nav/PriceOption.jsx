import Price from "./Price";
const PriceOption = () => {
  const priceTable = [
    {
      id: "P1",
      name: "Basic Package",
      features: ["24/7 Access", "Cardio Machines", "Free Weights"],
      price: 30.0,
    },
    {
      id: "P2",
      name: "Standard Package",
      features: ["All Basic Features", "Yoga Classes", "Sauna"],
      price: 50.0,
    },
    {
      id: "P3",
      name: "Premium Package",
      features: [
        "All Standard Features",
        "Personal Training",
        "Swimming Pool",
        "Nutrition Guidance",
      ],
      price: 80.0,
    },
    {
      id: "P4",
      name: "Elite Package",
      features: [
        "All Premium Features",
        "Exclusive VIP Lounge",
        "Private Coaching",
      ],
      price: 120.0,
    },
    {
      id: "P10",
      name: "Senior Package",
      features: ["Low-Impact Workouts", "Physical Therapy", "Relaxation Zone"],
      price: 40.0,
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-10  mt-15 m-5">
      {priceTable.map((data) => (
        <Price key={data.id} option={data} />
      ))}
    </div>
  );
};

export default PriceOption;
