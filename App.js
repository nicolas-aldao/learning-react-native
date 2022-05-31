import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./src/components/Main";
import About from "./src/components/About";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}
