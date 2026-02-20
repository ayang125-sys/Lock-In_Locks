import { useState } from 'react';
import DistractionField from './DistractionField';
import GoalField from './GoalField';
import DeadlineField from './DeadlineField';
import SubmitButton from './SubmitButton';
import ConfirmationSummary from './ConfirmationSummary';

const GoalSetupScreen = ({ onComplete }) => {
  const [distractionName, setDistractionName] = useState('');
  const [distractionCategory, setDistractionCategory] = useState('');
  const [goalDescription, setGoalDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if all fields are filled
  const isFormValid = distractionName.trim() && distractionCategory && goalDescription.trim() && deadline;

  const handleSubmit = () => {
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);

    // Save to localStorage
    localStorage.setItem('distraction_name', distractionName);
    localStorage.setItem('distraction_category', distractionCategory);
    localStorage.setItem('goal_description', goalDescription);
    localStorage.setItem('goal_deadline', deadline);

    // Show confirmation summary
    setShowConfirmation(true);

    // Route to dashboard after 2 seconds
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="goal-setup-screen" data-testid="goal-setup-screen">
      <div className="goal-setup-container">
        {/* Header */}
        <div className="setup-header">
          <h1 className="setup-title">Lock-in Locks</h1>
          <p className="setup-subtitle">Make a commitment to yourself</p>
        </div>

        {/* Form Fields */}
        <div className="setup-fields">
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

          <DeadlineField
            value={deadline}
            onChange={setDeadline}
          />
        </div>

        {/* Submit Button */}
        <SubmitButton
          isValid={isFormValid}
          isSubmitting={isSubmitting}
          onClick={handleSubmit}
        />

        {/* Confirmation Summary Overlay */}
        {showConfirmation && (
          <ConfirmationSummary
            distractionName={distractionName}
            distractionCategory={distractionCategory}
            goalDescription={goalDescription}
            deadline={deadline}
          />
        )}
      </div>
    </div>
  );
};

export default GoalSetupScreen;
