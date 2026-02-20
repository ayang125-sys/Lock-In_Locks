import React from 'react';
import LockStatusBanner from './LockStatusBanner';
import GoalCard from './GoalCard';
import ProgressBar from './ProgressBar';
import EmptyState from './EmptyState';
import AddButton from './AddButton';

const HomeScreen = ({ assignments, isUnlocked, onToggleDone, onAddGoal }) => {
  return (
    <div className="home-screen" data-testid="home-screen">
      {/* Lock status banner at top */}
      <LockStatusBanner isUnlocked={isUnlocked} />

      {/* Progress bar - only show when goals exist */}
      {assignments.length > 0 && (
        <ProgressBar assignments={assignments} />
      )}

      {/* Goal cards or empty state */}
      <div className="goals-container" data-testid="goals-container">
        {assignments.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="goals-list">
            {assignments.map((goal) => (
              <GoalCard
                key={goal.id}
                goal={goal}
                onToggle={onToggleDone}
              />
            ))}
          </div>
        )}
      </div>

      {/* Floating + button */}
      <AddButton onClick={onAddGoal} />
    </div>
  );
};

export default HomeScreen;
