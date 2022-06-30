import CursorLine from "./CursorLine";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>UdK Rundgang 2022</title>
        <meta name="description" content="Coming Soon UdK Rundgang 2022" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main>
        <img
          className="mobileimage"
          alt="mobile rundgang"
          src="mobile.svg"
          width="100%"
          height="100%"
        />
        <img
          className="desktopimage"
          alt="desktop rundgang"
          src="desktop.svg"
          width="100%"
          height="100%"
        />
        <CursorLine />
      </main>
    </div>
  );
}

export default App;
