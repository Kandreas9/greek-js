import Layout from "../components/layout";
import PricingSection from "../components/pricingSection";

export default function Home() {
	return (
		<Layout>
			{/* Hero */}
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
				<h2 className="text-center font-bold text-3xl pt-8">Pricing</h2>
				<div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center md:gap-8">
					<PricingSection price={"25 €"}>
						<p className="text-center text-lg font-bold mb-2">
							Per Lesson
						</p>
						<ul>
							<li>
								<span aria-hidden="true">✔️</span> First lesson
								Free $
							</li>
							<li>
								<span aria-hidden="true">✔️</span> Starting from
								scratch 🏁
							</li>
							<li>
								<span aria-hidden="true">✔️</span> 24/7
								communication for questions 🎁
							</li>
						</ul>
					</PricingSection>

					<PricingSection price={"? €"}>
						<p className="text-center text-lg font-bold mb-2">
							For me to make site
						</p>
						<ul>
							<li>
								<span aria-hidden="true">✔️</span> Price depends
								on order $
							</li>
							<li>
								<span aria-hidden="true">✔️</span> Any amount of
								pages 📄
							</li>
							<li>
								<span aria-hidden="true">✔️</span> Responsive
								for mobile 📱
							</li>
							<li>
								<span aria-hidden="true">✔️</span> As accessible
								as i can ♿️
							</li>
							<li>
								<span aria-hidden="true">✔️</span> 3-5 Revisions
								🔁
							</li>
							<li>
								<span aria-hidden="true">✔️</span> Access to
								codebase 🔐
							</li>
						</ul>
					</PricingSection>
				</div>

				{/* Contact */}
				<section
					aria-labelledby="Contact Me"
					className="bg-sky-400 text-white text-center"
				>
					<h2 id="Contact Me" className=" font-bold text-3xl py-8">
						Contact me
					</h2>

					<div className="pb-8">
						<p>
							Phone:{" "}
							<a
								className="text-orange-200"
								href="tel:+33682585200"
							>
								+33 6 82 58 52 00
							</a>
						</p>

						<p>
							Linkedin:{" "}
							<a
								className="text-orange-200"
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/andreas-karydopoulos-599658196/"
							>
								Andreas Karydopoulos
							</a>
						</p>

						<p>
							Github:{" "}
							<a
								className="text-orange-200"
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/Kandreas9"
							>
								Kandreas9
							</a>
						</p>

						<p>
							Email:{" "}
							<a
								className="text-orange-200"
								href="mailto: andkarido@gmail.com"
							>
								andkarido@gmail.com
							</a>
						</p>
					</div>
				</section>
			</div>
		</Layout>
	);
}
