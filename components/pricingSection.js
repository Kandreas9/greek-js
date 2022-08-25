export default function PricingSection({ children, price }) {
	return (
		<section className="border border-slate-300 rounded-3xl py-8 px-4 my-8 shadow-xl max-w-[15rem]">
			<h2 className="font-bold text-center py-4 text-6xl">{price}</h2>
			{children}
		</section>
	);
}
