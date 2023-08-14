import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

function App(): JSX.Element {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
