import React from 'react';
import { Plus } from 'lucide-react';

const AddButton = ({ onClick }) => {
  return (
    <button
      className="add-button"
      onClick={onClick}
      data-testid="add-button"
      aria-label="Add new goal"
    >
      <Plus size={32} strokeWidth={2.5} />
    </button>
  );
};

export default AddButton;
