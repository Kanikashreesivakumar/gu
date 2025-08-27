// filepath: d:\gu\app\App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}