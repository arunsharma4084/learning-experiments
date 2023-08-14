import React from "react";
import BackgroundGlow from "../components/BackgroundGlow";
import Form from "../components/Form";

const Dashboard: React.FC = () => {
  return (
    <div className="grid place-content-center bg-rose-100 p-10">
      <Form />
      <BackgroundGlow />
    </div>
  );
};

export default Dashboard;
