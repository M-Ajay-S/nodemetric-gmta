import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <img src={"/gmta-logo.jpg"} alt="GMTA Logo" className="logo" />
          <h1 className="title">Global MobilePhone Technicians Association(GMTA)</h1>
        </div>
      </header>

      {/* Main Section */}
      <main className="main">
        <p>Welcome To The GMTA portal</p>
        <h2>Coming Soon</h2>
      </main>
    </div>
  );
}

export default App;
