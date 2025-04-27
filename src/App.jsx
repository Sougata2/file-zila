import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "@/AppComponent/AppLayout.jsx";
import ViewFiles from "@/pages/ViewFiles.jsx";
import UploadFile from "./pages/UploadFile";
import GoogleLogin from "./pages/GoogleLogin";
import ProtectedRoute from "./AppComponent/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* <Route index element={<Navigate to={"/view-files"} />} /> */}
          {/* <Route path="/view-files" element={<ViewFiles />} /> */}
          <Route path="/" element={<GoogleLogin />} />
          <Route
            path="/view-files"
            element={
              <ProtectedRoute>
                <ViewFiles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upload-file"
            element={
              <ProtectedRoute>
                <UploadFile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
