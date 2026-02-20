import { useState, useEffect } from 'react';
import '@/App.css';
import HomeScreen from '@/components/HomeScreen';
import AddGoalScreen from '@/components/AddGoalScreen';
import UnlockCelebration from '@/components/UnlockCelebration';

function App() {
  // Navigation state - app always loads on home
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' or 'add'
  
  // Goals array - each goal is an assignment to complete
  const [assignments, setAssignments] = useState([]);
  
  // Unlock celebration state
  const [showCelebration, setShowCelebration] = useState(false);

  // Compute lock state directly from assignments - NEVER store as separate state
  const isUnlocked = assignments.length === 0 || assignments.every(a => a.done);

  // Add new goal
  const addGoal = (distractionName, distractionCategory, goalDescription) => {
    const newGoal = {
      id: Date.now(),
      distraction_name: distractionName,
      distraction_category: distractionCategory,
      goal_description: goalDescription,
      done: false
    };
    
    setAssignments(prev => [...prev, newGoal]);
    // Automatically return to home screen after adding
    setCurrentScreen('home');
  };

  // Toggle goal completion
  const toggleDone = (id) => {
    setAssignments(prev =>
      prev.map(goal =>
        goal.id === id ? { ...goal, done: !goal.done } : goal
      )
    );
  };

  // Watch for unlock condition
  useEffect(() => {
    // Only trigger if we have goals and all are done
    if (assignments.length > 0 && assignments.every(a => a.done)) {
      // Check if we just unlocked (not already celebrating)
      if (!showCelebration) {
        setShowCelebration(true);
        
        // Auto-dismiss after 3 seconds
        const timer = setTimeout(() => {
          setShowCelebration(false);
        }, 3000);
        
        // Cleanup timer
        return () => clearTimeout(timer);
      }
    }
  }, [assignments, showCelebration]);

  // Navigate to add goal screen
  const handleAddGoal = () => {
    setCurrentScreen('add');
  };

  // Navigate back to home
  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  return (
    <div className="App">
      {/* Show celebration overlay when all goals done */}
      {showCelebration ? (
        <UnlockCelebration />
      ) : currentScreen === 'home' ? (
        <HomeScreen
          assignments={assignments}
          isUnlocked={isUnlocked}
          onToggleDone={toggleDone}
          onAddGoal={handleAddGoal}
        />
      ) : (
        <AddGoalScreen
          onAddGoal={addGoal}
          onBack={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;
