import { BsFiletypeJson } from "react-icons/bs";
import { MdOutlineImage } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { BsFillFileWordFill } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";
export default function FileIcons() {
  return {
    JSON: <BsFiletypeJson className="text-blue-400" size={40} />,
    JPEG: <MdOutlineImage className="text-red-400" size={40} />,
    JPG: <MdOutlineImage className="text-red-400" size={40} />,
    PNG: <MdOutlineImage className="text-red-400" size={40} />,
    PDF: <FaRegFilePdf className="text-red-400" size={40} />,
    DOC: <BsFillFileWordFill className="text-blue-400" size={40} />,
    FILE: <FaRegFileLines className="text-blue-400" size={40} />,
  };
}
