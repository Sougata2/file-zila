import FileIcons from "./FileIcons";

function FileDetails({ name, ext }) {
  return (
    <div className={"flex flex-col gap-3"}>
      <div className="truncate max-w-full text-left">
        <span>{name}</span>
      </div>
      <div className={"text-white"}>
        {FileIcons()[ext] ?? (
          <div className="flex items-center gap-2">
            {FileIcons()["FILE"]}
            <span className="text-sm text-black">{ext}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileDetails;
