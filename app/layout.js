import Header from "@/components/navbar/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const resp = await fetch(
    `https://123-movies.world/api/url/putlocker2.monster`
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await resp.json();
  let res = data;

  return res;
}

export const metadata = {
  title: "CineWorld",
  description: "A World of Cinema",
};

export default async function RootLayout({ children }) {
  const moviesData = await getData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header data={moviesData} />
        <div>{children}</div>
        <Footer data={moviesData} />
      </body>
    </html>
  );
}
