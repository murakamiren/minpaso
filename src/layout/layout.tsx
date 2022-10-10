import { LayoutProps } from "./type";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
