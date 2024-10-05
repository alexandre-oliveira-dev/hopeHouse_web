import type {Metadata} from "next";
import "./globals.css";
import logo from ".././app/assets/logoIcon.png";
import { MenucontextProvider } from "./context/menuContext";

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
      <MenucontextProvider>
        <body>{children}</body>
      </MenucontextProvider>
    </html>
  );
}
