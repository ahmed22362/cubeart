import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

const GuardAuth = () => {
    const cookies = new Cookies();
    return !!cookies.get('user-access-token');
};

export default GuardAuth;