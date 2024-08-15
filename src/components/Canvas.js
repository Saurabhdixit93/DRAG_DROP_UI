import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import Card from "./Card";
import Xarrow from "react-xarrows";

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const cardRefs = useRef({});

  const addCard = () => {
    const id = Date.now();
    setCards([
      ...cards,
      { id, text: "This is a dummy text for the card.", x: 100, y: 100 },
    ]);
    cardRefs.current[id] = React.createRef();
  };

  return (
    <div className="relative w-full h-screen overflow-scroll bg-gray-100">
      <div className="flex items-center justify-center gap-4 container p-4">
        <button
          onClick={addCard}
          className=" px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Card
        </button>

        <h2 className="text-2xl font-bold">Drag and Drop Cards</h2>
      </div>
      {cards.map((card) => (
        <Draggable key={card.id} defaultPosition={{ x: card.x, y: card.y }}>
          <div ref={cardRefs.current[card.id]} className="absolute">
            <ResizableBox
              width={200}
              height={150}
              minConstraints={[100, 100]}
              maxConstraints={[400, 300]}
            >
              <Card text={card.text} />
            </ResizableBox>
          </div>
        </Draggable>
      ))}
      {cards.length > 1 &&
        cards.map((card, index) => {
          if (index === 0) return null;
          return (
            <Xarrow
              key={index}
              start={cardRefs.current[cards[index - 1].id]}
              end={cardRefs.current[card.id]}
            />
          );
        })}
    </div>
  );
};

export default Canvas;
