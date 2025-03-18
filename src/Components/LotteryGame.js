import React, { useState } from "react";

const LotteryGame = () => {
  const [ticket, setTicket] = useState(null);
  const [message, setMessage] = useState("");

  const generateTicket = () => {
    const num = Math.floor(100 + Math.random() * 1000); // Ensures a 3-digit number
    const digits = num.toString().split("").map(Number);
    const sum = digits.reduce((acc, val) => acc + val, 0);

    setTicket(num);
    setMessage(
      sum === 15
        ? "🎉 Congratulations! You won the lottery! 🎉"
        : "😞 Try Again! Better luck next time."
    );
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl font-bold mb-4">Lottery Game</h2>
      <button
        onClick={generateTicket}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Generate Ticket
      </button>
      {ticket !== null && (
        <div>
          <p className="text-lg font-semibold">Your Ticket: {ticket}</p>
          <p className="mt-2 text-lg font-medium">{message}</p>
        </div>
      )}
    </div>
  );
};

export default LotteryGame;
