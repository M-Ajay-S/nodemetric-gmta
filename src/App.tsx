import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <img src={"/gmta-logo.jpg"} alt="GMTA Logo" className="logo" />
          <h1 className="title">Global MobilePhone Technician Association(GMTA)</h1>
        </div>
      </header>

      {/* Main Section */}
      <main className="main">
        <p>Welcome to the Global Mobile Phone Technician Association portal.</p>
      </main>
    </div>
  );
}

export default App;
