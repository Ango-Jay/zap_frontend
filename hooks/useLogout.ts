import { useAppDispatch } from "@/store/hooks";
import { toggleIsAuthenticated } from "@/store/appSlice";
import { useRouter } from "next/router";

const useLogout = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(toggleIsAuthenticated(false));
        const origin = window.location.origin;
        window.location.assign(`${origin}/login`);
    }

    return {
        handleLogout
    }
}

export default useLogout;
