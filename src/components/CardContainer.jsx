import { useState } from "react";

const Card = ({ title, content, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-lg shadow-lg w-72 bg-white p-4 m-2 hover:shadow-2xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 line-clamp-3">{content}</p>
    </div>
  );
};

const Modal = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-[80vw] max-w-4xl">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-700 mt-4">{content}</p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const CardsContainer = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsData = [
    { title: "Card 1", content: "Detailed info for card 1..." },
    { title: "Card 2", content: "Detailed info for card 2..." },
    { title: "Card 3", content: "Detailed info for card 3..." },
    { title: "Card 4", content: "Detailed info for card 4..." },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(cardsData[index]); // Set the clicked card data to show in the modal
  };

  const handleCloseModal = () => {
    setSelectedCard(null); // Close the modal by setting the selected card to null
  };

  return (
    <div
      className={`flex flex-wrap justify-center ${
        selectedCard ? "blur-sm" : ""
      }`}
    >
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          onClick={() => handleCardClick(index)} // Open the modal with this card's content
        />
      ))}

      {/* Modal - show it only when a card is clicked */}
      {selectedCard && (
        <Modal
          title={selectedCard.title}
          content={selectedCard.content}
          onClose={handleCloseModal} // Close the modal when the button is clicked
        />
      )}
    </div>
  );
};

export default CardsContainer;
