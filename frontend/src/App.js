import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Events from "./Pages/Events";
import EventDetail from "./Pages/EventDetail";
import MyRegistration from "./Pages/registeredEvents";
import AdminPanel from "./Pages/AdminPanel";
import AddEventForm from "./Components/Admin/AddEventForm";
import EditEventForm from "./Components/Admin/EditEventForm";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import Spinner from "./Components/Spinner";
import { LoadingProvider, useLoading } from "./Context/LoadingContext";
import { AuthProvider } from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";

const SpinnerWrapper = () => {
  const { loading } = useLoading();
  return loading ? <Spinner /> : null;
};

function AppContent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/my-registration" element={<MyRegistration />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="//addEvent" element={<AddEventForm />} />
        <Route path="/editEvent/:id" element={<EditEventForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
      <SpinnerWrapper />
    </>
  );
}

function App() {
  return (
    <LoadingProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
        <ToastContainer position="top-right" />
    </LoadingProvider>
  );
}

export default App;
