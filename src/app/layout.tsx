import {Inter} from "next/font/google";
import localFont from "next/font/local";

const geometria = localFont({
    src: "/fonts/Geometria.ttf",
    variable: "--font-geometria",
    display: "swap",
});

const inter = Inter({subsets: ["latin"], variable: '--font-inter'});

export const metadata = {
    title: "Ystaff"
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${geometria.variable} scroll-auto`}>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
