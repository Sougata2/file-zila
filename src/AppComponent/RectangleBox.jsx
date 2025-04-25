import FileDetails from "@/AppComponent/FileDetails.jsx";

function RectangleBox({ file }) {
  return (
    <div className={"border rounded-md shadow-md w-full p-3 hover:bg-gray-100"}>
      <FileDetails
        name={file.name}
        ext={file.mimeType.split("/")[1].toUpperCase()}
      />
    </div>
  );
}

export default RectangleBox;
