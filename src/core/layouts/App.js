import { useRouter } from "next/router";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

const hideNavbarPages = ["/success"];

export default function AppLayout({ children }) {
  const router = useRouter();
  const hideNavBar = hideNavbarPages.includes(router.asPath);

  return (
    <>
      <Meta />
      {hideNavBar ? null : <Navbar />}
      {children}
    </>
  );
}
