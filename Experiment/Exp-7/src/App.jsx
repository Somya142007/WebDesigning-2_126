import React from 'react';
import StudentCard from './StudentCard';
function App() {
  return (
    <div className="App">
      <h1>Student Card</h1>
      <StudentCard name="John Doe" age={20} grade="A" />
      <StudentCard name="Jane Smith" age={22} grade="B+" />
      <StudentCard name="Alice Johnson" age={19} grade="A-" />
    </div>
  );
}

export default App; 