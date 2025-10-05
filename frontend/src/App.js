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
import { useEffect } from "react";
import axios from "axios";
import ScrollToTop from "./Components/ScrollToTop";

const SpinnerWrapper = () => {
  const { loading } = useLoading();
  return loading ? <Spinner /> : null;
};

function AppContent() {
  const { setLoading } = useLoading();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://event-management-system-z1ji.vercel.app/api/event");
        localStorage.setItem("events", JSON.stringify(res.data));
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [setLoading]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://event-management-system-z1ji.vercel.app/api/speaker/get"
        );
        localStorage.setItem("speakers", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching speakers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, [setLoading]);
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
        <ScrollToTop/>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer position="top-right" />
    </LoadingProvider>
  );
}

export default App;
