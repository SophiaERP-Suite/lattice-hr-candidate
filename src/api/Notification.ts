const BaseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const GetMyNotifications = async () => {
  const response = await fetch(`${BaseURL}/notifications`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const MarkNotificationAsRead = async (actionUrl: string) => {
  const response = await fetch(
    `${BaseURL}/notifications/messages/${actionUrl}/read`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const MarkAllNotificationsAsRead = async () => {
  const response = await fetch(`${BaseURL}/notifications/messages/read`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
