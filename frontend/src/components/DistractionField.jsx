import React from 'react';

const CATEGORIES = [
  { value: 'phone', label: '📱 Phone / Apps' },
  { value: 'gaming', label: '🎮 Gaming' },
  { value: 'tv', label: '📺 TV / Streaming' },
  { value: 'snacks', label: '🍕 Snacks / Fridge' },
  { value: 'music', label: '🎵 Music / Entertainment' },
  { value: 'other', label: '🔒 Other' }
];

const DistractionField = ({ name, category, onNameChange, onCategoryChange }) => {
  return (
    <div className="field-section" data-testid="distraction-field">
      <label className="field-label">
        What are you locking yourself out of?
      </label>
      <p className="field-hint">
        Choose something that distracts you from your goals
      </p>
      
      <input
        type="text"
        className="field-input"
        placeholder="e.g. My PlayStation"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        data-testid="distraction-input"
      />

      <div className="category-dropdown-wrapper">
        <select
          className="category-dropdown"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          data-testid="category-dropdown"
        >
          <option value="" disabled>Select category</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DistractionField;
