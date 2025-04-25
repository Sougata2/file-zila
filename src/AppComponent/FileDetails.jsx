import FileIcons from "./FileIcons";

function FileDetails({ name, ext }) {
  return (
    <div className={"flex flex-col gap-3"}>
      <div className="truncate max-w-full text-left">
        <span>{name}</span>
      </div>
      <div className={"text-white"}>
        {FileIcons()[ext] ?? <span className="text-xl">{ext}</span>}
      </div>
    </div>
  );
}

export default FileDetails;
