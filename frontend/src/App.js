import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CreateNote from "./screens/CreateNote/CreateNote";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import MyNotes from "./screens/MyNotes/MyNotes";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import SingleNote from "./screens/SingleNote/SingleNote";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/createnote" element={<CreateNote />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
