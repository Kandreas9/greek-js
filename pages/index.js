import Layout from "../components/layout";

export default function Home() {
	return (
		<Layout>
			{/* hero */}
			<section
				aria-labelledby="Learn to Code"
				className="bg-sky-400 text-white text-center py-28 md:py-0 flex justify-center"
			>
				<div className="flex flex-col justify-center">
					<h1 className="font-bold text-4xl" id="Learn to Code">
						Learn to code!
					</h1>
					<p className="text-slate-200 text-lg">
						Programming lessons in greek and english.
					</p>
				</div>

				<img
					className="hidden md:inline h-44 my-14 mx-4 lg:h-64"
					src="./images/hero-img.svg"
					alt="hero img of a website illustration"
				/>
			</section>

			{/* Pricing */}
			<div>
				<h2 className="text-center font-bold text-3xl py-8">Pricing</h2>
			</div>
		</Layout>
	);
}
