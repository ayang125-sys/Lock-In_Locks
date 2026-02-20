import React from 'react';

const DeadlineField = ({ value, onChange }) => {
  // Format deadline for human-readable display
  const formatDeadline = (datetime) => {
    if (!datetime) return '';
    
    const date = new Date(datetime);
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    
    return `Locked until ${date.toLocaleDateString('en-US', options)}`;
  };

  // Validate that selected date is in the future
  const handleChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const now = new Date();
    
    // Only update if date is in the future
    if (selectedDate > now) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="field-section" data-testid="deadline-field">
      <label className="field-label">
        When does it need to be done?
      </label>
      <p className="field-hint">
        Set a deadline to hold yourself accountable
      </p>
      
      <input
        type="datetime-local"
        className="field-input deadline-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={new Date().toISOString().slice(0, 16)}
        data-testid="deadline-input"
      />

      {value && (
        <p className="deadline-display" data-testid="deadline-display">
          {formatDeadline(value)}
        </p>
      )}
    </div>
  );
};

export default DeadlineField;
