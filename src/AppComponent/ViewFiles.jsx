import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { downloadFile, fetchFiles } from "@/AppState/fileSlice.js";
import RectangleBox from "@/AppComponent/RectangleBox.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { FiDownloadCloud } from "react-icons/fi";

function ViewFiles() {
  const dispatch = useDispatch();
  const { files, isLoading } = useSelector((state) => state.file);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={"flex justify-center items-center h-screen"}>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className={"grid grid-cols-6 gap-3 px-4 py-3 ms-5"}>
      {files.map((file) => {
        console.log(file);

        return (
          <Dialog key={file.id}>
            <DialogTrigger>
              <RectangleBox key={file.id} file={file} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle
                  className={
                    "overflow-hidden whitespace-nowrap text-ellipsis w-[150px] sm:w-[200px]"
                  }
                >
                  {file.name}
                </DialogTitle>
                <DialogDescription>
                  <iframe
                    src={
                      import.meta.env.VITE_SERVER_URL +
                      `/google/preview/${file.id}`
                    }
                    allow="autoplay"
                    width={"100%"}
                  />
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className={"flex items-end"}>
                <Button
                  onClick={() => dispatch(downloadFile(file.id))}
                  className={
                    "bg-blue-400 w-[50px] hover:bg-blue-500 text-white"
                  }
                >
                  <FiDownloadCloud />
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}

export default ViewFiles;
