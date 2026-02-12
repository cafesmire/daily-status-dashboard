import { useState } from "react";

export function MoodCard() {
  const [currentMood, setCurrentMood] = useState(null);
  const moods = ["😭", "😔", "😐", "🙂", "😁"];
  return (
    <div className="mood">
      <h3>How Are You Feeling Today?</h3>
      <div className="md:flex justify-between">
        {moods.map((mood, idx) => {
          return (
            <p
							className="cursor-pointer text-[4rem] rounded-full px-4"
              onClick={() => setCurrentMood(idx)}
              style={{ border: currentMood === idx ? "1px solid #ddd" : ""}}
              key={idx}
            >
              {mood}
            </p>
          );
        })}
      </div>
    </div>
  );
}
