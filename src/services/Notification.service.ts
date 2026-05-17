import * as signalR from "@microsoft/signalr";

export class NotificationService {

    private hubConnection!: signalR.HubConnection;

    startConnection(userId: number) {

        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl("${import.meta.env.VITE_API_URL}/notificationHub", {
                withCredentials: true
            })
            .withAutomaticReconnect()
            .build();

        this.hubConnection
            .start()
            .then(() => {
                console.log("SignalR Connected");

                this.hubConnection.invoke(
                    "JoinUserGroup",
                    userId.toString()
                );
            })
            .catch(err => console.error(err));

        this.hubConnection.on(
            "ReceiveNotification",
            (notification) => {

                console.log("Realtime notification:", notification);

            }
        );
    };

    stopConnection() {
        if (this.hubConnection) {
            this.hubConnection.stop();
        }
    }
}