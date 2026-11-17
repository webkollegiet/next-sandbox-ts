import type { Metadata } from "next";
import "./globals.css";

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
			<body className="min-h-full">{children}</body>
		</html>
	);
}
