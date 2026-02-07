import { useState } from 'react';


export function MoodCard() {
  const [currentMood, setCurrentMood] = useState(null);
  const moods = ['😭', '😔', '😐', '🙂', '😁'];
	return (
		<div className="mood">
			<h3>How Are You Feeling Today?</h3>
			<div>
				{moods.map((mood, idx) => {
					return (
						<span
							onClick={() => setCurrentMood(idx)}
							style={{
								fontSize: '4rem',
								cursor: 'pointer',
								marginInline: '.25em',
								border: currentMood === idx ? '1px solid white' : '',
                borderRadius:'50%'
							}}
							key={idx}
						>
							{mood}
						</span>
					);
				})}
			</div>
		</div>
	);
}
