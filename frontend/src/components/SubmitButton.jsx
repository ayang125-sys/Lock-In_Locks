import React from 'react';
import { Plus } from 'lucide-react';

const SubmitButton = ({ isValid, onClick }) => {
  return (
    <button
      className={`add-goal-submit ${!isValid ? 'disabled' : 'active'}`}
      disabled={!isValid}
      onClick={onClick}
      data-testid="add-goal-submit"
    >
      <Plus size={20} />
      <span>Add Goal</span>
    </button>
  );
};

export default SubmitButton;
