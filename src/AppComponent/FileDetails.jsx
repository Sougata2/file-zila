function FileDetails({name, ext}) {
    return (
        <div className={"flex flex-col gap-3"}>
            <div><Detail label={"File"} value={name}/></div>
            <div className={"text-xs  text-slate-400 text-shadow-amber-400"}><Detail label={"Ext"}
                                                                                     value={ext}/></div>
        </div>
    );
}

function Detail({label, value}) {
    return (
        <div className={"flex gap-2"}>
            <span className={"text-slate-500"}>{label}</span>
            <span className={"text-slate-400"}>:</span>
            <span className={"truncate max-w-full"}>{value}</span>
        </div>
    );
}

export default FileDetails;