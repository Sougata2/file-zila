import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "@/AppComponent/AppLayout.jsx";
import ViewFiles from "@/pages/ViewFiles.jsx";
import UploadFile from "./pages/UploadFile";
import GoogleLogin from "./pages/GoogleLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* <Route index element={<Navigate to={"/view-files"} />} /> */}
          {/* <Route path="/view-files" element={<ViewFiles />} /> */}
          <Route path="/" element={<GoogleLogin />} />
          <Route path="/view-files" element={<ViewFiles />} />
          <Route path="/upload-file" element={<UploadFile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
