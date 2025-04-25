import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "sonner";

function SuccessComponent() {
  const { success } = useSelector((state) => state.file);
  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, [success]);
}

export default SuccessComponent;
