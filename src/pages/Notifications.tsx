
import { CheckCheck, ChevronRight, Settings } from "lucide-react";
import type { NotificationData } from "../types/notification";
import { useEffect, useState } from "react";
import { GetMyNotifications, MarkAllNotificationsAsRead, MarkNotificationAsRead } from "../api/Notification";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);


function Compliance() {
  const [notification, setNotification] = useState<NotificationData[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMyNotifications()
  }, [])

  const fetchMyNotifications = async () => {
    try {
      setIsLoading(true)
      const response = await GetMyNotifications()

      if (response.length > 0) {
        setNotification(response)
      }
    } catch {
      setError("Failed to fetch your notifications")
    } finally {
      setIsLoading(false)
    }

  }

  const markAsRead = async (ActionUrl: string) => {
    try {
      await MarkNotificationAsRead(ActionUrl)
      window.location.href = "./" + ActionUrl
    } catch {
      console.error("Failed to run notification")
    } finally {
      await fetchMyNotifications()
    }
  }

  const markAllAsRead = async () => {
    try {
      setIsButtonLoading(true)
      await MarkAllNotificationsAsRead()
    } catch {
      console.error("Failed to run notifications")
    } finally {
      setIsButtonLoading(false)
      await fetchMyNotifications()
    }
  }

  return (
    <div className="app-content-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-title-box d-flex-between flex-wrap gap-15">
              <h1 className="page-title fs-18 lh-1">Notifications</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-example1 mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    Notifications
                  </li>
                  <ChevronRight
                    size={15}
                    style={{ position: "relative", top: "3px" }}
                  />
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Home</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="col-xl-12 mb-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold">All Notifications</h4>
              <div>
                <button onClick={() => markAllAsRead()} disabled={
                  notification && notification.length > 0 ? false : true
                } className="btn btn-secondary btn-sm me-2">
                  {
                    !isButtonLoading ? "Mark All as Read" : "Marking..."
                  }
                  <CheckCheck size={15} />
                </button>
                <a href="Settings" className="btn btn-primary btn-sm">
                  <Settings size={15} /> Notification Settings
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-12">
            {/* <!-- Filters --> */}
            <div className="d-none mb-3">
              <div className="btn-group" role="group">
                <button className="btn btn-outline-primary active">All</button>
                <button className="btn btn-outline-primary">Unread</button>
                <button className="btn btn-outline-primary">System</button>
                <button className="btn btn-outline-primary">
                  Investigation
                </button>
                <button className="btn btn-outline-primary">Timesheet</button>
              </div>
            </div>

            <div className="list-group bg-white shadow-sm">
              {notification && notification.length > 0 ? (
                notification.map((item) => (
                  <div
                    key={item.notificationId}
                    onClick={() => markAsRead(item.actionUrl)}
                    className="list-group-item list-group-item-action cursor-pointer d-flex justify-content-between align-items-start"
                  >
                    <div className="">
                      <div className="fw-bold text-primary">
                        {item.title}
                      </div>
                      <p>{item.message}</p>
                    </div>
                    <span className="badge bg-primary rounded-pill">{dayjs(item.dateCreated).fromNow()}</span>
                  </div>
                ))
              ) : (
                <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                  <div className="content">
                    {/* <h6 className="mb-5">Ooops</h6> */}
                    <p className="mb-5">You have no notifications</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compliance;
