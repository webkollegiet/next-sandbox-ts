import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
	return (
		<header className="py-8">
			<div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
				<div className="col-span-4">
					<Image src="/logo.png" width="300" height="48" alt="" />
				</div>
				<nav className="col-span-8 self-end">
					<ul className="flex justify-end gap-8">
						<li>
							<Link href="#">Link 1</Link>
						</li>
						<li>
							<Link href="#">Link 2</Link>
						</li>
						<li>
							<Link href="/login">Log ind</Link>
						</li>
					</ul>
				</nav>
			</div >
		</header>
	);
}