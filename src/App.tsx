import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./app/pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/dashboard">
          <Route path="/MySchedule" />
          <Route path="/AiChat" />
          <Route path="/AddMaterials" />
          <Route path="/SetReminder" />
          <Route path="/StartQuiz" />
          <Route path="/Settings" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
