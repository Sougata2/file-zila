import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { downloadFile, fetchFiles } from "@/AppState/fileSlice.js";
import RectangleBox from "@/AppComponent/RectangleBox.jsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import { FiDownloadCloud } from "react-icons/fi";

function ViewFiles() {
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.file);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <div
      className={
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 px-4 py-3 ms-5"
      }
    >
      {files?.map((file) => {
        return (
          <Dialog key={file?.id}>
            <DialogTrigger>
              <RectangleBox key={file?.id} file={file} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle
                  className={
                    "overflow-hidden whitespace-nowrap text-ellipsis w-[150px] sm:w-[200px]"
                  }
                >
                  {file?.name}
                </DialogTitle>
                <DialogDescription
                  className={"border shadow-md rounded-md overflow-hidden"}
                >
                  <iframe
                    src={
                      import.meta.env.VITE_SERVER_URL +
                      `/google/preview/${file?.id}`
                    }
                    allow="autoplay"
                    height={"180rem"}
                    width={"100%"}
                  />
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose
                  className={
                    "bg-blue-400 lg:w-20 w-full h-8 hover:bg-blue-500 text-white rounded-md flex justify-center items-center"
                  }
                  onClick={() => dispatch(downloadFile(file?.id))}
                >
                  <FiDownloadCloud size={20} />
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}

export default ViewFiles;
