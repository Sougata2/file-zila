import { uploadFile } from "@/AppState/fileSlice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { useDispatch } from "react-redux";

export default function UploadFile() {
  const dispatch = useDispatch();
  const [file, setFile] = useState();

  async function handlSubmit(e) {
    e.preventDefault();
    dispatch(uploadFile(file));
  }

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <Card className="">
        <CardHeader>
          <CardTitle>Upload File</CardTitle>
          <CardDescription>
            Upload your file to google drive in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="file" onSubmit={handlSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="file">File</Label>
                <Input
                  id="file"
                  type="file"
                  required
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            form="file"
            className={"bg-emerald-400 hover:bg-emerald-500 w-full lg:w-20"}
          >
            <FiUploadCloud size={20} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
