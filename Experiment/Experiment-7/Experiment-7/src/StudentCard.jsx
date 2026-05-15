function StudentCard({name, age, grade}) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

export default StudentCard;
