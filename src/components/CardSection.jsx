import { FaTruck, FaBoxOpen, FaCreditCard } from "react-icons/fa";

const CardSection = () => {
  const cards = [
    {
      icon: <FaTruck className="text-black w-6 h-6" />,
      title: "Delivery",
      description: "Get your products delivered.",
      // highlight: "Sed quis pulvinar ante.",
    },
    {
      icon: <FaBoxOpen className="text-black w-6 h-6" />,
      title: "Products",
      description: "Explore makeup products",
      // highlight: "Sed quis pulvinar ante.",
    },
    {
      icon: <FaCreditCard className="text-black w-6 h-6" />,
      title: "Payments",
      description: "Card as well as COD available",
      // highlight: "Sed quis pulvinar ante.",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Circle with icon inside */}
              <div className="flex justify-center items-center w-12 h-12">
                <div className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center">
                  {card.icon}
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
                <p className="text-sm font-medium text-gray-800 mt-1">
                  {card.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
