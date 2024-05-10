import React from "react";
import HomePage from "../ui/HomePage";
import ProfilePage from "../ui/ProfilePage";
import ResultsPage from "../ui/ResultsPage";
import TrainingPage from "../ui/TrainingPage";
import TestsPage from "../ui/TestsPage";

export default function TabHandler(props) {
  switch (props.tab) {
    case 0:
      return <HomePage />;
    case 1:
      return <TrainingPage />;
    case 2:
      return <TestsPage />;
    case 3:
      return <ResultsPage />;
    case 4:
      return <ProfilePage />;
  }
}
