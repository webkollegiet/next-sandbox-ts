export default function BlockSection(
	{ children, backgroundColor = "bg-white", backgroundImage = undefined }
) {
	let classes;
	let style;

	if (backgroundImage) {
		classes = `bg-no-repeat bg-cover bg-center min-h-90`;
		style = { backgroundImage: `url(${backgroundImage})` };
	} else {
		classes = backgroundColor;
		style = {};
	}

	return (
		<section className={`${classes} py-8`} style={style}>
			<div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
				{children}
			</div>
		</section>
	);
}