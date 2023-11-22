import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const CameleonComingSoon = React.lazy(() => import("pages/CameleonComingSoon"));
const CameleonDashboard = React.lazy(() => import("pages/CameleonDashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cameleondashboard" element={<CameleonDashboard />} />
          <Route path="/cameleoncomingsoon" element={<CameleonComingSoon />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
