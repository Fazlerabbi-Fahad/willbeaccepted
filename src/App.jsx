import { RouterProvider } from "react-router-dom";
import MainRoutes from "./Routes/Routes";
import audio from "./assets/audio/audio.mp3";
function App() {
  return (
    <div>
      <audio controls autoPlay loop className="absolute">
        <source src={audio} type="audio/mp3" />
      </audio>
      <RouterProvider router={MainRoutes}></RouterProvider>
    </div>
  );
}

export default App;
