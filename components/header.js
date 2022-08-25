import Link from "next/link";

export default function Header() {
	return (
		<header className="max-w-[90rem] py-4 px-10 border-b-2 mx-auto">
			<Link href="/">
				<a>
					<img
						className="h-14"
						src="./images/logo.svg"
						alt="js logo with greek flag"
					/>
				</a>
			</Link>
		</header>
	);
}
