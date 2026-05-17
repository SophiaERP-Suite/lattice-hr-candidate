import { Routes, Route } from "react-router-dom";
import CandidateLayout from "../layout/CandidateLayout";
import Profile from "../pages/profile/Profile";
import MyApplications from "../pages/job/MyApplications";
import JobsSaved from "../pages/job/JobsSaved";
import Attendance from "../pages/attendance/Attendance";
import TimeSheet from "../pages/attendance/TimeSheet";
import Notifications from "../pages/Notifications";
import Resume from "../pages/profile/Resume";
import CvBuilder from "../pages/profile/CvBuilder";
import Security from "../pages/Security";
import InterviewList from "../pages/Interview/InterviewList";
import TakeInterview from "../pages/Interview/TakeInterview";
import Payslip from "../pages/Payment/Payslip";
import Induction from "../pages/Induction/InductionSections";
import InductionModules from "../pages/Induction/InductionModules";
import Jobs from "../pages/job/Jobs";
import ClockIn from "../pages/attendance/ClockIn";
import Settings from "../pages/Settings";
import HelpSupport from "../pages/HelpSupport";
import IdentityVerification from "../pages/compliance/IdentityVerification";
import ComplianceMgt from "../pages/compliance/ComplianceMgt";
import Bank from "../pages/profile/Bank";
import Dashboard from "../pages/Dashboard";
import AuthBridge from "../utils/Auth/AuthBridge";
import ProfileUpdate from "../pages/profile/ProfileUpdate";
import JobDetails from "../pages/job/JobDetails";
import JobOffer from "../pages/job/JobOffer";
import InductionStages from "../pages/Induction/InductionStages";
import CandidateInductionModules from "../pages/Induction/InductionSections";
import CandidateModuleItems from "../pages/Induction/InductionItems";
import MyJobs from "../pages/attendance/MyJobs";
import LeaveRequests from "../pages/attendance/LeaveRequests";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CandidateLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="auth-bridge" element={<AuthBridge />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="ProfileUpdate" element={<ProfileUpdate />} />
        <Route path="MyApplications" element={<MyApplications />} />
        <Route path="JobsSaved" element={<JobsSaved />} />
        <Route path="Compliance" element={<ComplianceMgt />} />
        <Route path="Identification" element={<IdentityVerification />} />
        <Route path="Attendance/:employerId" element={<Attendance />} />
        <Route path="TimeSheet/:employerId" element={<TimeSheet />} />
        <Route path="Notifications" element={<Notifications />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="CvBuilder" element={<CvBuilder />} />
        <Route path="Bank" element={<Bank />} />
        <Route path="Jobs" element={<Jobs />} />
        <Route path="MyJobs" element={<MyJobs />} />
        <Route path="jobDetails/:id" element={<JobDetails />} />
        <Route path="jobOffer/:id" element={<JobOffer />} />
        <Route path="Payslip/:employerId" element={<Payslip />} />
        <Route path="SelfInterview" element={<InterviewList />} />
        <Route path="TakeInterview/:id/:jobId" element={<TakeInterview />} />
        <Route path="InductionDetails" element={<Induction />} />
        <Route path="Inductions" element={<InductionModules />} />
        <Route path="LeaveRequests/:employerId" element={<LeaveRequests />} />

        <Route path="InductionStage/:categoryId/:assignmentId" element={<InductionStages />} />
        <Route path="inductionStage/:categoryId/modules/:sectionId/:assignmentId" element={<CandidateInductionModules />} />
        <Route
          path="/inductionStage/:categoryId/modules/:sectionId/items-preview/:assignmentId"
          element={<CandidateModuleItems />}
        />

        <Route path="Security" element={<Security />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="ClockIn/:employerId" element={<ClockIn />} />
        <Route path="HelpSupport" element={<HelpSupport />} />
      </Route>
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
}

export default AppRoutes;
