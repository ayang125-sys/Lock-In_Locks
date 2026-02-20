import { useState, useEffect } from 'react';
import '@/App.css';
import Dashboard from '@/components/Dashboard';
import UnlockCelebration from '@/components/UnlockCelebration';
import GoalSetupScreen from '@/components/GoalSetupScreen';

function App() {
  // Mock data starting in LOCKED state (all done: false)
  const [assignments, setAssignments] = useState([
    { id: 1, assignment: 'Lab 3', course: 'CMPS 101', done: false },
    { id: 2, assignment: 'Problem Set 5', course: 'MATH 23A', done: false }
  ]);

  const [isLocked, setIsLocked] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);
  const [hasGoalSetup, setHasGoalSetup] = useState(false);

  // Check if user has completed goal setup
  useEffect(() => {
    const goalData = localStorage.getItem('goal_description');
    setHasGoalSetup(!!goalData);
  }, []);

  // Toggle assignment completion
  const toggleAssignment = (id) => {
    setAssignments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // Re-evaluate lock state whenever assignments change
  useEffect(() => {
    const allDone = assignments.length === 0 || assignments.every((a) => a.done);
    const wasLocked = isLocked;
    
    setIsLocked(!allDone);

    // Trigger celebration when transitioning from locked to unlocked
    if (wasLocked && allDone && assignments.length > 0) {
      setShowCelebration(true);
      // Auto-dismiss after 3 seconds
      setTimeout(() => {
        setShowCelebration(false);
      }, 3000);
    }
  }, [assignments, isLocked]);

  // Handle goal setup completion
  const handleGoalSetup = () => {
    setHasGoalSetup(true);
  };

  // Show goal setup screen if no goal data exists
  if (!hasGoalSetup) {
    return (
      <div className="App">
        <GoalSetupScreen onComplete={handleGoalSetup} />
      </div>
    );
  }

  return (
    <div className="App">
      {showCelebration ? (
        <UnlockCelebration />
      ) : (
        <Dashboard
          assignments={assignments}
          isLocked={isLocked}
          toggleAssignment={toggleAssignment}
        />
      )}
    </div>
  );
}

export default App;
