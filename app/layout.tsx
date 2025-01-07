import { EdsProvider } from "@equinor/eds-core-react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<EdsProvider>{children}</EdsProvider>
			</body>
		</html>
	);
}
