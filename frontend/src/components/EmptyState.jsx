import React from 'react';

const EmptyState = () => {
  return (
    <div className="empty-state" data-testid="empty-state">
      <p className="empty-text">Nothing locked.</p>
      <p className="empty-hint">Tap + to add your first goal.</p>
    </div>
  );
};

export default EmptyState;
