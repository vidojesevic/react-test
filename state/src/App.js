const message = [
  "Learn React *",
  "Apply for job 💼",
  "Earn money 💰"
];

function App() {
  const step = 1;

  return (
    <div className="steps text-center mt-16">
      <div className="numbers flex gap-64 items-center justify-center">
        <div className={`w-7 text-xl rounded-full bg-gray-300 ${step >= 1 && "active"}`}>1</div>
        <div className={`w-7 text-xl rounded-full bg-gray-300 ${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`w-7 text-xl rounded-full bg-gray-300 ${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message mt-8">Step {step}: {message[step - 1]}</p>

      <div className="flex flex-row justify-center gap-64 mt-8">
        <button className="btn btn-blue-500 p-2 rounded-xl" style={{ backgroundColor: "#7950f2" }}>Previous</button>
        <button className="btn btn-blue-500 p-2 rounded-xl" style={{ backgroundColor: "#7950f2" }}>Next</button>
      </div>
    </div >
  );
}

export default App;
