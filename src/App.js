import CursorLine from "./CursorLine";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>UdK Rundgang 2022</title>
        <meta name="description" content="Coming Soon UdK Rundgang 2022" />
        <link rel="icon" href="favicon.ico" />
      </header>
      <main>
        <a
          className="mobileimage"
          href="https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/"
        >
          <img
            className="mobileimage"
            alt="mobile rundgang"
            src="mobile.svg"
            width="100%"
            height="100%"
          />
        </a>
        <a
          className="desktopimage"
          href="https://www.udk-berlin.de/universitaet/stabsstelle-ueberfakultaere-veranstaltungen/rundgang-tage-der-offenen-tuer-der-udk-berlin/"
        >
          <img
            className="desktopimage"
            alt="desktop rundgang"
            src="desktop.svg"
            width="100%"
            height="100%"
          />
        </a>
        <CursorLine />
      </main>
    </div>
  );
}

export default App;
