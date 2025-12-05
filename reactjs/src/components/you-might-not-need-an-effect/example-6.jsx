import { getRandomBoolean, getRandomInteger } from "@/utils/getRandomId";
import { useState } from "react";

export default function Example6() {
  const [_card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);

  // ✅ Calculate what you can during rendering
  const isGameOver = round > 5;

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error("Game already ended.");
    }
    // ✅ Calculate all the next state in the event handler
    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCount < 3) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          console.log("Good game!");
        }
      }
    }
  }

  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
  // useEffect(() => {
  //   if (card !== null && card.gold) {
  //     setGoldCardCount((c) => c + 1);
  //   }
  // }, [card]);

  // useEffect(() => {
  //   if (goldCardCount > 3) {
  //     setRound((r) => r + 1);
  //     setGoldCardCount(0);
  //   }
  // }, [goldCardCount]);

  // useEffect(() => {
  //   if (round > 5) {
  //     setIsGameOver(true);
  //   }
  // }, [round]);

  // useEffect(() => {
  //   alert("Good game!");
  // }, [isGameOver]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
        Gold Game
      </h1>
      <div className="mb-6 flex justify-center">
        <button
          className={`cursor-pointer rounded-lg px-6 py-3 font-semibold text-white transition-colors duration-200 active:scale-95 ${
            isGameOver
              ? "cursor-not-allowed bg-gray-400"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={() =>
            handlePlaceCard({
              id: getRandomInteger(1, 100),
              gold: getRandomBoolean(),
            })
          }
          disabled={isGameOver}
        >
          Place Random Card
        </button>
      </div>
      <div className="flex justify-center gap-8 text-xl">
        <span className="gold rounded-md bg-yellow-100 px-4 py-2">
          Gold Card:{" "}
          <span className="font-bold text-yellow-600">{goldCardCount}</span>
        </span>
        <span className="round rounded-md bg-blue-100 px-4 py-2">
          Round: <span className="font-bold text-blue-600">{round}</span>
        </span>
      </div>
    </div>
  );
}
