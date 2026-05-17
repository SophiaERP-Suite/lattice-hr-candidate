import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Briefcase,
  CheckCircle,
  Clock,
  Download,
  Eye,
  FileText,
  Shield,
  Upload,
  User,
  XCircle,
  Calendar,
  Target,
  FileCheck,
  CreditCard,
  FileSignature,
  type LucideIcon,
} from "lucide-react";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";

// Import your existing assets
// import avatar1 from "../assets/images/avatar/avatar-thumb-010.webp";
// import john from "../assets/images/avatar/man3.jpg";
import { NavLink } from "react-router-dom";
import { getUserInfo } from "../api/UserApi";
import type { UserDto } from "../types/profile";

// Type Definitions
type PriorityType = "high" | "medium" | "low";
type ComplianceStatusType = "verified" | "pending" | "warning" | "not-started";
type NotificationType =
  | "system"
  | "training"
  | "payslip"
  | "compliance"
  | "meeting";
// type AttendanceStatus = "present" | "absent" | "late" | "leave";

interface PendingAction {
  id: number;
  title: string;
  priority: PriorityType;
  icon: LucideIcon;
  description: string;
  dueDate: string;
}

interface ComplianceItem {
  status: ComplianceStatusType;
  label: string;
  icon: LucideIcon;
}

interface Notification {
  id: number;
  title: string;
  time: string;
  unread: boolean;
  type: NotificationType;
}

interface DashboardData {
  welcome: {
    greeting: string;
    profileCompletion: number;
    complianceStatus: string;
    attendanceToday: string;
    inductionProgress: number;
    currentJob: string;
  };
  pendingActions: PendingAction[];
  jobStats: {
    totalApplied: number;
    underReview: number;
    interviewsScheduled: number;
    savedJobs: number;
    rejectedJobs: number;
  };
  attendanceSnapshot: {
    daysPresent: number;
    daysAbsent: number;
    lateArrivals: number;
    lastClockIn: string;
    monthlyOverview: {
      present: number;
      absent: number;
      late: number;
      leave: number;
    };
  };
  latestPayslip: {
    monthYear: string;
    netPay: number;
    downloadUrl: string;
  };
  complianceStatus: Record<string, ComplianceItem>;
  induction: {
    progress: number;
    currentModule: string;
    totalModules: number;
    nextAction: string;
  };
  recentNotifications: Notification[];
  myApplications: number;
  savedJobs: number;
  rejectedJobs: number;
  earningsHistory: number[];
  applicationHistory: number[];
}

interface StatusCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  status?: string;
  color: string;
}

interface ActionItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  dueDate: string;
  priority: PriorityType;
}

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color: string;
  subtitle?: string;
}

interface ComplianceStatusProps {
  icon: LucideIcon;
  label: string;
  status: ComplianceStatusType;
}

// Chart configurations
const chartOptions: ApexCharts.ApexOptions = {
  chart: {
    id: "basic-bar",
    toolbar: { show: false },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#06B6D4"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: "Monthly Applications",
    align: "center",
    style: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
};

const earningsOptions: ApexCharts.ApexOptions = {
  chart: {
    id: "earnings-history",
    toolbar: { show: false },
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    title: { text: "Month" },
  },
  yaxis: {
    title: { text: "Earnings (NGN)" },
  },
  dataLabels: { enabled: false },
  fill: {
    type: "solid",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  colors: ["#10B981"],
  title: {
    text: "Earnings History",
    align: "center",
    style: { fontSize: "16px", fontWeight: "bold" },
  },
  tooltip: {
    y: {
      formatter: (val: number) => `$${val.toLocaleString()}`,
    },
  },
};

const attendanceOptions: ApexCharts.ApexOptions = {
  chart: {
    type: "pie",
    toolbar: { show: false },
  },
  labels: ["Present", "Absent", "On Leave"],
  colors: ["#10B981", "#EF4444", "#F59E0B"],
  legend: {
    position: "bottom",
    labels: { colors: "#374151" },
  },
  title: {
    text: "Attendance Overview",
    align: "center",
    style: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
  dataLabels: {
    enabled: true,
    formatter: (val: number) => `${val.toFixed(1)}%`,
  },
  tooltip: {
    y: {
      formatter: (val: number) => `${val} Days`,
    },
  },
};

// Chart data
const attendanceSeries: number[] = [20, 5, 3];
const earningsSeries: ApexAxisChartSeries = [
  {
    name: "Earnings",
    data: [3200, 4500, 3900, 5200, 6100, 7200],
  },
];

const chartSeries: ApexAxisChartSeries = [
  {
    name: "Applications",
    data: [30, 40, 45, 50, 49, 60],
  },
];

// Mock data for all dashboard sections
const dashboardData: DashboardData = {
  welcome: {
    greeting: "Welcome back, Akinlade!",
    profileCompletion: 85,
    complianceStatus: "Verified",
    attendanceToday: "Present",
    inductionProgress: 60,
    currentJob: "Software Developer at Carling Care Home",
  },
  pendingActions: [
    {
      id: 1,
      title: "Upload identification",
      priority: "high",
      icon: Upload,
      description: "ID verification pending",
      dueDate: "Today",
    },
    {
      id: 2,
      title: "Complete induction training",
      priority: "high",
      icon: Target,
      description: "Module 3 remaining",
      dueDate: "Today",
    },
    {
      id: 3,
      title: "Clock in for attendance",
      priority: "high",
      icon: Clock,
      description: "Today's attendance pending",
      dueDate: "Now",
    },
    {
      id: 4,
      title: "Job applications awaiting interview",
      priority: "medium",
      icon: Briefcase,
      description: "3 interviews to schedule",
      dueDate: "This week",
    },
    {
      id: 5,
      title: "Expiring compliance documents",
      priority: "medium",
      icon: AlertTriangle,
      description: "2 documents expiring soon",
      dueDate: "7 days",
    },
  ],
  jobStats: {
    totalApplied: 42,
    underReview: 8,
    interviewsScheduled: 3,
    savedJobs: 28,
    rejectedJobs: 156,
  },
  attendanceSnapshot: {
    daysPresent: 20,
    daysAbsent: 2,
    lateArrivals: 1,
    lastClockIn: "09:15 AM",
    monthlyOverview: {
      present: 20,
      absent: 2,
      late: 1,
      leave: 3,
    },
  },
  latestPayslip: {
    monthYear: "June 2024",
    netPay: 4200.5,
    downloadUrl: "/payslips/june-2024.pdf",
  },
  complianceStatus: {
    idVerification: {
      status: "verified",
      label: "ID Verification",
      icon: FileCheck,
    },
    bankDetails: { status: "pending", label: "Bank Details", icon: CreditCard },
    resumeUpload: {
      status: "verified",
      label: "Resume Upload",
      icon: FileText,
    },
    policyDocuments: {
      status: "warning",
      label: "Policy Documents",
      icon: FileSignature,
    },
  },
  induction: {
    progress: 60,
    currentModule: "Module 3: Workplace Safety",
    totalModules: 5,
    nextAction: "Continue Induction",
  },
  recentNotifications: [
    {
      id: 1,
      title: "Welcome to the team!",
      time: "2h ago",
      unread: true,
      type: "system",
    },
    {
      id: 2,
      title: "Induction Module 2 available",
      time: "1d ago",
      unread: true,
      type: "training",
    },
    {
      id: 3,
      title: "Payslip for June ready",
      time: "2d ago",
      unread: false,
      type: "payslip",
    },
    {
      id: 4,
      title: "Compliance document review",
      time: "3d ago",
      unread: false,
      type: "compliance",
    },
    {
      id: 5,
      title: "Team meeting scheduled",
      time: "4d ago",
      unread: false,
      type: "meeting",
    },
  ],
  myApplications: 42,
  savedJobs: 28,
  rejectedJobs: 156,
  earningsHistory: [3200, 4500, 3900, 5200, 6100, 7200],
  applicationHistory: [30, 40, 45, 50, 49, 60],
};

// Status Card Component
const StatusCard: React.FC<StatusCardProps> = ({
  icon: Icon,
  label,
  value,
  status,
  color,
}) => (
  <div className="card h-100">
    <div className="card-body d-flex align-center gap-16">
      <div
        className={`avatar avatar-md bg-${color}-transparent radius-100 text-${color}`}
      >
        <Icon size={25} />
      </div>
      <div className="card-content">
        <span className="d-block fs-14 text-muted mb-5">{label}</span>
        <h3 className="mb-0 fs-24">{value}</h3>
        {status && (
          <span className={`badge bg-label-${status} mt-5`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        )}
      </div>
    </div>
  </div>
);

// Action Item Component
const ActionItem: React.FC<ActionItemProps> = ({
  icon: Icon,
  title,
  description,
  dueDate,
  priority,
}) => {
  const getPriorityColor = (priority: PriorityType): string => {
    switch (priority) {
      case "high":
        return "danger";
      case "medium":
        return "warning";
      case "low":
        return "info";
      default:
        return "info";
    }
  };

  const color = getPriorityColor(priority);

  return (
    <div className="action-item d-flex-between align-center p-3 border-bottom">
      <div className="d-flex align-center gap-10 flex-grow-1">
        <div
          className={`avatar avatar-sm bg-${color}-transparent text-${color}`}
        >
          <Icon size={18} />
        </div>
        <div className="flex-grow-1">
          <div className="fs-14 fw-medium">{title}</div>
          <div className="fs-12 text-muted">{description}</div>
        </div>
      </div>
      <div className="d-flex align-center gap-10">
        <span className={`badge bg-label-${color}`}>{dueDate}</span>
        <button className={`btn btn-sm btn-${color}`}>Complete</button>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
  color,
  subtitle,
}) => (
  <div className="card h-100">
    <div className="card-body d-flex align-center gap-15">
      <div
        className={`avatar avatar-lg bg-${color}-transparent text-${color} radius-100`}
      >
        <Icon size={30} />
      </div>
      <div>
        <h2 className="mb-5">{value}</h2>
        <div className="fs-14 text-muted">{label}</div>
        {subtitle && <div className="fs-12 text-muted">{subtitle}</div>}
      </div>
    </div>
  </div>
);

// Compliance Status Indicator
const ComplianceStatus: React.FC<ComplianceStatusProps> = ({
  icon: Icon,
  label,
  status,
}) => {
  interface StatusConfig {
    color: string;
    text: string;
  }

  const getStatusConfig = (status: ComplianceStatusType): StatusConfig => {
    switch (status) {
      case "verified":
        return { color: "success", text: "Verified" };
      case "pending":
        return { color: "warning", text: "Pending" };
      case "warning":
        return { color: "danger", text: "Action Required" };
      case "not-started":
        return { color: "secondary", text: "Not Started" };
      default:
        return { color: "secondary", text: "Not Started" };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div className="compliance-item d-flex align-center gap-10 p-3 border rounded mb-2">
      <div
        className={`avatar avatar-sm bg-${config.color}-transparent text-${config.color}`}
      >
        <Icon size={16} />
      </div>
      <div className="flex-grow-1">
        <div className="fs-14">{label}</div>
      </div>
      <span className={`badge bg-label-${config.color}`}>{config.text}</span>
    </div>
  );
};

// Main Dashboard Component
const Dashboard: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<string>("overview");
  const [user, setUser] = useState<UserDto>();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await getUserInfo();

    console.log("user", response);
    setUser(response.result);
  };

  const photoUrl = user?.profilePhoto
    ? `${import.meta.env.VITE_API_URL}/${user.profilePhoto}`
    : "https://img.icons8.com/color/48/gender-neutral-user.png";

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">



        {/* SECTION 1: Welcome & Quick Status */}
        <div className="row mb-4">

          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15 py-3">
              <div>
                <h1 className="page-title fs-24 mb-5">
                  {/* {dashboardData.welcome.greeting} */}
                  Welcome {user?.lastName}
                </h1>
                <p className="text-muted">
                  Here's what needs your attention today
                </p>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* Current Job Card (from original) */}
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body mini-card-body d-flex align-center">
                <div className="avatar avatar-xl bg-primary-transparent radius-100 text-primary">
                  <img className="radius-100" src={photoUrl} alt="John" />
                </div>
                <div className="card-content ms-3">
                  <span className="d-none d-block fs-16 mb-5">Current Job</span>
                  <p className="fw-bold mb-0">
                    {/* {dashboardData.welcome.currentJob} */}
                    {user?.lastName}{" "}{user?.firstName}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Completion */}
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 mb-4">
            <StatusCard
              icon={User}
              label="Profile Completion"
              value={`${dashboardData.welcome.profileCompletion}%`}
              status="success"
              color="primary"
            />
          </div>

          {/* Compliance Status */}
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 mb-4">
            <StatusCard
              icon={Shield}
              label="Compliance Status"
              value={dashboardData.welcome.complianceStatus}
              status="success"
              color="success"
            />
          </div>

          {/* Attendance Today */}
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 mb-4">
            <StatusCard
              icon={Clock}
              label="Attendance Today"
              value={dashboardData.welcome.attendanceToday}
              status="success"
              color="info"
            />
          </div>
        </div>

        {/* SECTION 2: Action Required (Critical) */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-danger">
              <div className="card-header bg-danger-light border-danger d-flex-between">
                <div>
                  <h4 className="text-danger mb-0">
                    <AlertCircle className="me-2" size={20} />
                    Action Required
                  </h4>
                  <span className="text-muted fs-14">
                    Complete these tasks to continue
                  </span>
                </div>
                <button className="btn btn-danger">View All Actions</button>
              </div>
              <div className="card-body p-0">
                {dashboardData.pendingActions.map((action) => (
                  <ActionItem
                    key={action.id}
                    icon={action.icon}
                    title={action.title}
                    description={action.description}
                    dueDate={action.dueDate}
                    priority={action.priority}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 & 4: Job Summary & Attendance Snapshot */}
        <div className="row mb-4">
          {/* Job Activity Summary */}
          <div className="col-xl-8 col-lg-8 mb-4">
            <div className="card h-100">
              <div className="card-header justify-between">
                <h4 className="mb-0">Job Activity Summary</h4>
                <NavLink className="btn btn-primary" to={"/MyJobs"}>
                  <Eye size={16} className="me-2" />
                  Find More Jobs
                </NavLink>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-3">
                    <StatCard
                      icon={Briefcase}
                      label="Total Jobs Applied"
                      value={dashboardData.jobStats.totalApplied}
                      color="primary"
                    />
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-3">
                    <StatCard
                      icon={FileText}
                      label="Under Review"
                      value={dashboardData.jobStats.underReview}
                      color="warning"
                      subtitle="Active applications"
                    />
                  </div>
                  <div className="d-none col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-3">
                    <StatCard
                      icon={Calendar}
                      label="Interviews Scheduled"
                      value={dashboardData.jobStats.interviewsScheduled}
                      color="info"
                    />
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-3">
                    <StatCard
                      icon={CheckCircle}
                      label="Saved Jobs"
                      value={dashboardData.jobStats.savedJobs}
                      color="success"
                    />
                  </div>
                </div>

                {/* Application History Chart */}
                <div className="mt-4">
                  <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Snapshot */}
          <div className="col-xl-4 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-header justify-between">
                <h4 className="mb-0">Attendance Snapshot</h4>
                <span className="text-muted fs-14">This Month</span>
              </div>
              <div className="card-body">
                {/* Attendance Chart */}
                <div className="mb-4">
                  <Chart
                    options={attendanceOptions}
                    series={attendanceSeries}
                    type="pie"
                    height={250}
                  />
                </div>

                {/* Attendance Stats */}
                <div className="attendance-stats">
                  <div className="d-flex-between mb-3">
                    <span>Days Present:</span>
                    <strong>
                      {dashboardData.attendanceSnapshot.daysPresent}
                    </strong>
                  </div>
                  <div className="d-flex-between mb-3">
                    <span>Days Absent:</span>
                    <strong className="text-danger">
                      {dashboardData.attendanceSnapshot.daysAbsent}
                    </strong>
                  </div>
                  <div className="d-flex-between mb-3">
                    <span>Late Arrivals:</span>
                    <strong className="text-warning">
                      {dashboardData.attendanceSnapshot.lateArrivals}
                    </strong>
                  </div>
                  <div className="d-flex-between mb-3">
                    <span>Last Clock-in:</span>
                    <strong>
                      {dashboardData.attendanceSnapshot.lastClockIn}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5 & 6: Compliance & Induction Progress */}
        <div className="row mb-4">
          {/* Compliance Status */}
          <div className="col-xl-6 col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h4 className="mb-0">Compliance & KYC Status</h4>
              </div>
              <div className="card-body">
                <div className="compliance-grid">
                  {Object.entries(dashboardData.complianceStatus).map(
                    ([key, item]) => (
                      <ComplianceStatus
                        key={key}
                        icon={item.icon}
                        label={item.label}
                        status={item.status}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Induction Progress */}
          <div className="col-xl-6 col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-header d-flex-between">
                <div>
                  <h4 className="mb-0">Induction Progress</h4>
                  <span className="text-muted fs-14">
                    {dashboardData.induction.currentModule}
                  </span>
                </div>
                <NavLink to={"/Induction"} className="btn btn-primary">
                  <ArrowRight size={16} className="me-2" />
                  {dashboardData.induction.nextAction}
                </NavLink>
              </div>
              <div className="card-body">
                <div className="progress-section">
                  <div className="d-flex-between mb-2">
                    <span>Completion Progress</span>
                    <strong>{dashboardData.induction.progress}%</strong>
                  </div>
                  <div className="progress" style={{ height: "12px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${dashboardData.induction.progress}%` }}
                    ></div>
                  </div>
                  <div className="mt-3">
                    <div className="d-flex-between mb-2">
                      <span className="fs-14 text-muted">
                        Modules Completed
                      </span>
                      <span className="fs-14">
                        {Math.floor(
                          (dashboardData.induction.progress / 100) *
                          dashboardData.induction.totalModules,
                        )}
                        /{dashboardData.induction.totalModules}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 7: Latest Payslip Widget */}
        <div className="d-none row mb-4">
          <div className="col-xl-4 col-lg-4 mb-4">
            <div className="card">
              <div className="card-header">
                <h4 className="mb-0">Latest Payslip</h4>
              </div>
              <div className="card-body">
                <div className="payslip-widget">
                  <div className="d-flex-between mb-3">
                    <span className="text-muted">Month/Year:</span>
                    <strong>{dashboardData.latestPayslip.monthYear}</strong>
                  </div>
                  <div className="d-flex-between mb-4">
                    <span className="text-muted">Net Pay:</span>
                    <h3 className="text-success mb-0">
                      ${dashboardData.latestPayslip.netPay.toFixed(2)}
                    </h3>
                  </div>
                  <a
                    href={dashboardData.latestPayslip.downloadUrl}
                    className="btn btn-outline-primary w-100"
                    download
                  >
                    <Download size={16} className="me-2" />
                    Download Payslip
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 8: Recent Notifications */}
          <div className="col-xl-8 col-lg-8 mb-4">
            <div className="card h-100">
              <div className="card-header d-flex-between">
                <h4 className="mb-0">Recent Notifications</h4>
                <a
                  href="/notifications"
                  className="btn btn-primary-light text-primary"
                >
                  <Eye size={15} /> View All
                </a>
              </div>
              <div className="card-body pt-0">
                <div className="notifications-list">
                  {dashboardData.recentNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`notification-item p-3 border-bottom ${notification.unread ? "bg-light" : ""}`}
                    >
                      <div className="d-flex-between align-start">
                        <div className="d-flex align-center gap-10 flex-grow-1">
                          {notification.unread && (
                            <span className="badge bg-primary badge-dot"></span>
                          )}
                          <div className="flex-grow-1">
                            <div className="fs-14 fw-medium">
                              {notification.title}
                            </div>
                            <div className="fs-12 text-muted">
                              <span
                                className={`badge bg-label-${notification.type === "system" ? "primary" : "info"}`}
                              >
                                {notification.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="text-muted fs-12">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXISTING DASHBOARD COMPONENTS (Integrated) */}
        <div className="d-none row">
          {/* Earnings History */}
          <div className="col-xl-8 col-lg-8 mb-4">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="mb-0">Earnings History</h4>
                <a
                  href="/payslip"
                  className="btn btn-primary-light text-primary"
                >
                  <Eye size={15} /> View All
                </a>
              </div>
              <div className="card-body pt-15">
                <Chart
                  options={earningsOptions}
                  series={earningsSeries}
                  type="line"
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* My Applications Summary */}
          <div className="col-xl-4 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <StatCard
                      icon={Briefcase}
                      label="My Applications"
                      value={dashboardData.myApplications}
                      color="warning"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <StatCard
                      icon={CheckCircle}
                      label="Saved Jobs"
                      value={dashboardData.savedJobs}
                      color="info"
                    />
                  </div>
                  <div className="col-md-12">
                    <StatCard
                      icon={XCircle}
                      label="Rejected Jobs"
                      value={dashboardData.rejectedJobs}
                      color="purple"
                      subtitle="Total applications"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Existing Tasks Section */}
        <div className="d-none row">
          <div className="col-xxl-6 col-xl-12 mb-4">
            <div className="card">
              <div className="card-header justify-between">
                <h4 className="mb-0">My Tasks</h4>
                <a
                  className="btn btn-primary-light btn-sm text-primary"
                  href="/tasks"
                >
                  <Eye size={15} /> View All
                </a>
              </div>
              <div className="card-body pt-15">
                <ul className="task-list card-scrollbar">
                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-danger"></span>
                      <span>Complete Q2 Sales Report</span>
                    </div>
                    <span className="badge bg-label-danger">Due Today</span>
                  </li>
                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-warning"></span>
                      <span>Submit monthly expense report</span>
                    </div>
                    <span className="badge bg-label-warning">Due Tomorrow</span>
                  </li>
                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-success"></span>
                      <span>Schedule team meeting for next sprint</span>
                    </div>
                    <span className="badge bg-label-success">Friday</span>
                  </li>
                  <li className="task-item d-flex-between flex-wrap gap-15">
                    <div className="d-flex-items gap-10">
                      <span className="bullet bg-warning"></span>
                      <span>Prepare client presentation deck</span>
                    </div>
                    <span className="badge bg-label-warning">Monday</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Existing Announcements */}
          <div className="col-xxl-6 col-xl-6 mb-4">
            <div className="card height-equal">
              <div className="card-header justify-between">
                <h4 className="mb-0">Announcements</h4>
              </div>
              <div className="card-body pt-15">
                <div className="announcement-list style-2 card-scrollbar">
                  <div className="announcement-item">
                    <div className="bullet bg-primary mt-5"></div>
                    <div className="announcement-content">
                      <div className="announcement-header d-flex-between mb-10">
                        <h5>Office Renovation Schedule</h5>
                        <span className="fs-12 text-muted">2h ago</span>
                      </div>
                      <p className="mb-15">
                        The 3rd floor will be closed for renovations from June
                        15-20.
                      </p>
                      <div className="announcement-footer d-flex-between">
                        <span className="fs-12 text-body-secondary">
                          By HR Department
                        </span>
                        <div className="announcement-tags d-flex gap-10">
                          <span className="badge bg-label-danger">
                            Important
                          </span>
                          <span className="badge bg-label-info">Facility</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="announcement-view-btn mt-3">
                  <a href="/announcement" className="btn btn-primary w-100">
                    View All Announcements
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
