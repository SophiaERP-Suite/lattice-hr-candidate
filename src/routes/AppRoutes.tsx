import { Routes, Route, Navigate } from "react-router-dom";
import CandidateLayout from "../layout/CandidateLayout";
import CandidateDashboard from "../layout/CandidateDashboard";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CandidateLayout />}>
      
        <Route index element={<CandidateDashboard />} />
        <Route path="Dashboard" element={<Dashboard />} />
        {/* <Route path="Employee" element={<Applicants />} />
        <Route path="EmployeeNew" element={<ApplicantNew />} />
        <Route path="EmployeeProfile" element={<ApplicantProfile />} />
        <Route path="ProfileUpdate" element={<ProfileUpdate />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Tracker" element={<DBSTrackerModule />} />
        <Route path="IncidentMgt" element={<Incidents />} />
        <Route path="Payment" element={<PaymentDashboard />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="Communication" element={<CommunicationsPage />} />
        <Route path="ControlPanel" element={<ControlPanel />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Security" element={<Security />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
