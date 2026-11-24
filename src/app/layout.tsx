import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

export const metadata: Metadata = {
	title: "En god titel",
	description: "En beskrivende tekst der giver mening på googles søgeresultat",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="da"
			className="h-full antialiased"
		>
			<body className="min-h-full">
				<SiteHeader />
				{children}
				<SiteFooter />
			</body>
		</html>
	);
}
