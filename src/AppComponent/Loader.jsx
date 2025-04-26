import { useSelector } from "react-redux";

export default function Loader() {
  const { isLoading } = useSelector((state) => state.file);
  return (
    isLoading && (
      <div className="fixed w-screen h-screen bg-black opacity-40 z-100 flex items-center justify-center">
        <span className="loading loading-bars loading-xl text-white"></span>
      </div>
    )
  );
}
