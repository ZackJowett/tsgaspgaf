export default function Menu() {
	return (
		<nav className="absolute top-1/4 main-nav flex flex-col justify-start h-full text-left">
			<a className="mb-2 hover:font-medium">
				<h2 className="">STORY</h2>
			</a>
			<a className="mb-2 hover:font-medium">
				<h2>CREW</h2>
			</a>
			<a className="mb-2 hover:font-medium">
				<h2>DONATE</h2>
			</a>
			<a className="hover:font-medium">
				<h2>CONTACT</h2>
			</a>
		</nav>
	);
}
