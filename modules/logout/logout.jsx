import Cookies from "universal-cookie";

const Logout = () => {
  const cookie = new Cookies();
  if (cookie.get("user-data") || cookie.get("user-access-token")) {
    cookie.remove("user-data");
    cookie.remove("user-access-token");
    localStorage.clear();
  }
  setTimeout(() => {
    location.replace("/");
  }, 1000);
};
export default Logout;
