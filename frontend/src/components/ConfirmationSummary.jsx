import React from 'react';

const ConfirmationSummary = ({ distractionName, distractionCategory, goalDescription, deadline }) => {
  // Format deadline for display
  const formatDeadline = (datetime) => {
    const date = new Date(datetime);
    const options = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleDateString('en-US', options);
  };

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
    <div className="confirmation-overlay" data-testid="confirmation-overlay">
      <div className="confirmation-card">
        <div className="confirmation-item">
          <span className="confirmation-icon">{getCategoryEmoji(distractionCategory)}</span>
          <div>
            <p className="confirmation-label">Locking:</p>
            <p className="confirmation-value">{distractionName}</p>
          </div>
        </div>

        <div className="confirmation-item">
          <span className="confirmation-icon">🎯</span>
          <div>
            <p className="confirmation-label">Until:</p>
            <p className="confirmation-value">{goalDescription}</p>
          </div>
        </div>

        <div className="confirmation-item">
          <span className="confirmation-icon">⏰</span>
          <div>
            <p className="confirmation-label">Deadline:</p>
            <p className="confirmation-value">{formatDeadline(deadline)}</p>
          </div>
        </div>

        <div className="confirmation-footer">
          <p className="confirmation-active">Your lock is now active.</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationSummary;
