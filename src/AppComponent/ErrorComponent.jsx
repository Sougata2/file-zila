import {useSelector} from "react-redux";
import {useEffect} from "react";
import {toast} from "sonner";

function ErrorComponent() {
    const {error} = useSelector(state => state.file);
    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);
}

export default ErrorComponent;