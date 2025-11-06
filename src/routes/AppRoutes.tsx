import { Routes, Route, Navigate } from "react-router-dom";
import CandidateLayout from "../layout/CandidateLayout";
import CandidateDashboard from "../layout/CandidateDashboard";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/profile/Profile";
import MyApplications from "../pages/job/MyApplications";
import JobsSaved from "../pages/job/JobsSaved";
import Compliance from "../pages/compliance/Compliance";
import Attendance from "../pages/attendance/Attendance";
import TimeSheet from "../pages/attendance/TimeSheet";
import Notifications from "../pages/Notifications";
import Resume from "../pages/profile/Resume";
import CvBuilder from "../pages/profile/CvBuilder";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CandidateLayout />}>
        <Route index element={<CandidateDashboard />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="MyApplication" element={<MyApplications />} />
        <Route path="JobsSaved" element={<JobsSaved />} />
        <Route path="Compliance" element={<Compliance />} />
        <Route path="Attendance" element={<Attendance />} />
        <Route path="TimeSheet" element={<TimeSheet />} />
        <Route path="Notifications" element={<Notifications />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="CvBuilder" element={<CvBuilder />} />
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
