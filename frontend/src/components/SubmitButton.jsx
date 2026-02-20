import React from 'react';
import { Lock, Check } from 'lucide-react';

const SubmitButton = ({ isValid, isSubmitting, onClick }) => {
  return (
    <button
      className={`submit-button ${
        !isValid ? 'disabled' : isSubmitting ? 'submitting' : 'active'
      }`}
      disabled={!isValid || isSubmitting}
      onClick={onClick}
      data-testid="submit-button"
    >
      {isSubmitting ? (
        <>
          <Check size={20} strokeWidth={3} />
          <span>Locked In ✓</span>
        </>
      ) : (
        <>
          <Lock size={20} />
          <span>Lock It In</span>
        </>
      )}
    </button>
  );
};

export default SubmitButton;
