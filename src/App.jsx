import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
