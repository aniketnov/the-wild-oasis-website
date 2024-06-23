import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  dispaly: "swap",
});

export const metadata = {
  // title: "The wild Oasis",
  title: {
    template: "%s / the wild oasis",
    default: "welcome / the wild oasis",
  },
  description:
    "Built on a vision of grandeur, Taj Hotels conjures a panoply of superlative experiences that are envisioned to indulge and forge unforgettable memories.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 min-h-screen  text-primary-100 flex flex-col antialiased`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl  mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
