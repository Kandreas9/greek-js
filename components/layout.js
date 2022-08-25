import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<>
			<Header></Header>
			<main className="max-w-[90rem] mx-auto">{children}</main>
			<Footer></Footer>
		</>
	);
}
