import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const Outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Mitchelle M",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Outfit.className} ${Ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
