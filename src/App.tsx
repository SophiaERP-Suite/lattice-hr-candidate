import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
// import "./assets/css/main.css";
// import "./assets/css/vendor/bootstrap.min.css";
// import "./assets/css/vendor/animate.css";
// import "./assets/css/vendor/spacing.css";
// import "./assets/css/vendor/magnific-popup.css";
// import "./assets/css/plugins/simplebar.min.css";
// import "./assets/css/plugins/waves.min.css";
// import "./assets/css/plugins/nano.min.css";
// import "./assets/css/plugins/line-awesome.min.css";
// import "./assets/css/plugins/remixicon.css";
// import "./assets/css/plugins/tabler-icons.css";
// import "./assets/css/plugins/jsvectormap.min.css";
// import "./assets/css/plugins/swiper.min.css";



function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
