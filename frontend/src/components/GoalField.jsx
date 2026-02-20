import React from 'react';

const GoalField = ({ value, onChange }) => {
  return (
    <div className="field-section" data-testid="goal-field">
      <label className="field-label">
        What do you need to finish to unlock it?
      </label>
      <p className="field-hint">
        Describe your goal in your own words
      </p>
      
      <textarea
        className="field-input field-textarea"
        placeholder="e.g. Complete all CMPS 101 assignments"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        data-testid="goal-input"
      />
    </div>
  );
};

export default GoalField;
