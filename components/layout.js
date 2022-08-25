import Header from "./header";

export default function Layout({ children }) {
	return (
		<>
			<Header></Header>
			<main className="max-w-[90rem] mx-auto">{children}</main>
		</>
	);
}
