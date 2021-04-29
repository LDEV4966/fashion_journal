import "./App.css";

import AppRouter from "./Componets/Router";
function App() {
  return (
    <>
      <div id="screen-size">
        <p>Screen size is not suitable</p>
        <p> (width > 1300px) and (height > 800px)</p>
      </div>
      <AppRouter />
    </>
  );
}

export default App;
