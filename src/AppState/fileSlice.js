import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  files: [],
  fileCount: 0,
  isLoading: false,
  error: "",
  success: "",
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    addFile: (state, action) => {
      state.files.push(action.payload);
    },
    deleteFile: (state, action) => {
      state.files = state.files.filter((file) => file.id !== action.payload);
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiles.pending, (state) => {
        // fetch the files from the Google Drive
        state.isLoading = true;
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.files = action.payload;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(uploadFile.pending, (state, action) => {
        // upload file to google drive
        state.isLoading = true;
        state.files.push(action.payload);
      })
      .addCase(uploadFile.fulfilled, (state) => {
        state.isLoading = false;
        state.success = "File Uploaded";
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(downloadFile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(downloadFile.fulfilled, (state) => {
        state.isLoading = false;
        state.success = "File Downloaded";
      })
      .addCase(downloadFile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const fetchFiles = createAsyncThunk(
  "file/fetchFiles",
  async (arg, thunkAPI) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + `/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_token: Cookies.get("access_token"),
            refresh_token: Cookies.get("refresh_token"),
          }),
        }
      );
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadFile = createAsyncThunk(
  "file/uploadFile",
  async (file, thunkAPI) => {
    try {
      // state available to use
      //   const state = thunkAPI.getState();
      const formData = new FormData();
      formData.append("file", file);
      await fetch(import.meta.env.VITE_SERVER_URL + "/google/upload", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const downloadFile = createAsyncThunk(
  "file/downloadFile",
  async (fileId, thunkAPI) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + `/google/download/${fileId}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to download the file");
      }

      const blob = await response.blob();

      // Log the headers to see if filename is in the header
      const contentDisposition = response.headers.get("Content-Disposition");

      // const fileNameMatch = contentDisposition?.match(/filename="?(.+)"?/);
      const fileNameMatch = contentDisposition.match(/filename="([^;]+)"/);
      const fileName = fileNameMatch?.[1] || "downloaded_file";

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const { setIsLoading, setFiles, addFile, deleteFile } =
  fileSlice.actions;
export default fileSlice.reducer;
