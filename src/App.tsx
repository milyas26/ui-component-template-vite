import "./App.css";
import { Button } from "./stories/Button";

function App() {
  return (
    <>
      <Button
        label="Test"
        backgroundColor="black"
        onClick={() => console.log("yest")}
        primary
        size="medium"
      />
    </>
  );
}

export default App;
