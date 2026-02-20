import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import DistractionField from './DistractionField';
import GoalField from './GoalField';
import SubmitButton from './SubmitButton';

const AddGoalScreen = ({ onAddGoal, onBack }) => {
  const [distractionName, setDistractionName] = useState('');
  const [distractionCategory, setDistractionCategory] = useState('');
  const [goalDescription, setGoalDescription] = useState('');

  // Check if both fields are filled
  const isFormValid = distractionName.trim() && distractionCategory && goalDescription.trim();

  const handleSubmit = () => {
    if (!isFormValid) return;
    
    // Add goal and automatically return to home
    onAddGoal(distractionName, distractionCategory, goalDescription);
    
    // Clear fields for next time
    setDistractionName('');
    setDistractionCategory('');
    setGoalDescription('');
  };

  return (
    <div className="add-goal-screen" data-testid="add-goal-screen">
      {/* Header with back button */}
      <div className="add-goal-header">
        <button
          className="back-arrow"
          onClick={onBack}
          data-testid="back-arrow"
          aria-label="Go back without saving"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="add-goal-title">Add a Goal</h1>
      </div>

      {/* Form */}
      <div className="add-goal-form">
        <DistractionField
          name={distractionName}
          category={distractionCategory}
          onNameChange={setDistractionName}
          onCategoryChange={setDistractionCategory}
        />

        <GoalField
          value={goalDescription}
          onChange={setGoalDescription}
        />

        <SubmitButton
          isValid={isFormValid}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddGoalScreen;
