import "rsuite/dist/rsuite.min.css";

import "./App.css";
import Overview from "./texts/overview";
import V1 from "./texts/v1";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        "New Amsterdam" manifesto
      </h1>

      <Overview />
      <div style={{ paddingTop: "30px" }}></div>

      <V1 />
    </div>
  );
}

export default App;
