import HomePage from "@/components/homePage/homePage";
import getToken from "@/components/getToken/getToken";

export default function Home() {
    getToken();
    return (
       <>
        <HomePage />
       </>
    )
}
