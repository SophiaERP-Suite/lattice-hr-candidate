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
import Security from "../pages/Security";
import InterviewList from "../pages/Interview/InterviewList";
import TakeInterview from "../pages/Interview/TakeInterview";
import Payslip from "../pages/Payment/Payslip";
import Induction from "../pages/Induction/Induction";
import MyJobs from "../pages/Payment/MyJobs";
import InductionModules from "../pages/Induction/InductionModules";
import Jobs from "../pages/job/Jobs";
import JobDetails from "../pages/job/JobDetails";
import ClockIn from "../pages/attendance/ClockIn";
import Settings from "../pages/Settings";
import HelpSupport from "../pages/HelpSupport";

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
        <Route path="MyJobs" element={<MyJobs />} />
        <Route path="Jobs" element={<Jobs />} />
        <Route path="JobDetails" element={<JobDetails />} />
        <Route path="Payslip" element={<Payslip />} />
        <Route path="SelfInterview" element={<InterviewList />} />
        <Route path="TakeInterview" element={<TakeInterview />} />
        <Route path="Induction" element={<Induction />} />
        <Route path="InductionModules" element={<InductionModules />} />
        <Route path="Security" element={<Security />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="ClockIn" element={<ClockIn />} />
        <Route path="HelpSupport" element={<HelpSupport />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
