import type {Metadata} from "next";
import "./globals.css";
import logo from ".././app/assets/logo.png";

export const metadata: Metadata = {
  title: "Hope house",
  description: "",
  icons: {shortcut: {url: logo.src}},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
