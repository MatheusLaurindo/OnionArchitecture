import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listagem from "./pages/Listagem";
import Criar from "./pages/Criar";

function App() {
  return (
    <div className="container mx-auto p-5 h-screen text-white bg-zinc-800">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listagem />} />
          <Route path="/criar" element={<Criar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
