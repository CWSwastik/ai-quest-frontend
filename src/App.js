import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";
import QuestionDetailPage from "./pages/QuestionsDetailPage";
import AskQuestionPage from "./pages/AskQuestionPage";
import AppDashboard from "./pages/AppDashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/app-dashboard" element={<AppDashboard />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/new" element={<AskQuestionPage />} />
          <Route path="/questions/:id" element={<QuestionDetailPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
