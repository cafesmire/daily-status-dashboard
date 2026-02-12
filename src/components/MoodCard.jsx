import { useState } from 'react';


export function MoodCard() {
  const [currentMood, setCurrentMood] = useState(null);
  const moods = ['😭', '😔', '😐', '🙂', '😁'];
	return (
		<div className="mood">
			<h3>How Are You Feeling Today?</h3>
			<div className='md:flex'>
				{moods.map((mood, idx) => {
					return (
						<p
							onClick={() => setCurrentMood(idx)}
							style={{
								fontSize: '4rem',
								cursor: 'pointer',
								border: currentMood === idx ? '1px solid white' : '',
								marginInline:'auto',
								borderRadius: '50%',
								padding:'1rem'
							}}
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
