function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <p>This is a simple React application. This is your first React component! This is a simple paragraph.</p>
      {/*Using another component*/}
      <Message/>
    </div>
  );
}

//Second component
function Message() {
  return (
    <div>
  
      <h2>Hello Students</h2>
      <p> This is your first React component! This component is used to display a message.</p>
    </div>
  );
}
export default App;
//export default app means that we are exporting the App component so that it can be used in other files. We can import this component in other files and use it to display the content of the App component.
//This allows other files to import the App component and use it to display the content of the App component. This is a common practice in React to create reusable components that can be used in different parts of the application.







