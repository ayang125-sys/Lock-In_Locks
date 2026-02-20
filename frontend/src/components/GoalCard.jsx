import React from 'react';

const GoalCard = ({ goal, onToggle }) => {
  const { id, distraction_name, distraction_category, goal_description, done } = goal;

  // Get category emoji
  const getCategoryEmoji = (category) => {
    const emojiMap = {
      phone: '📱',
      gaming: '🎮',
      tv: '📺',
      snacks: '🍕',
      music: '🎵',
      other: '🔒'
    };
    return emojiMap[category] || '🔒';
  };

  return (
    <div
      className={`goal-card ${done ? 'done' : ''}`}
      data-testid={`goal-card-${id}`}
    >
      <div className="goal-card-content">
        <div className="goal-card-header">
          <span className="goal-emoji">{getCategoryEmoji(distraction_category)}</span>
          <p className={`goal-distraction ${done ? 'strikethrough' : ''}`}>
            {distraction_name}
          </p>
        </div>
        <p className="goal-description">{goal_description}</p>
      </div>

      <button
        className={`goal-checkbox ${done ? 'checked' : ''}`}
        onClick={() => onToggle(id)}
        data-testid={`goal-checkbox-${id}`}
        aria-label={`Mark ${distraction_name} as ${done ? 'incomplete' : 'complete'}`}
      >
        {done && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8L6.5 11.5L13 5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default GoalCard;
