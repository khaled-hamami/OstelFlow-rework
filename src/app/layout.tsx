import "@/styles/globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Toaster } from "sonner"
import ClerkAuthProvider from "@/providers/clerk"
import QueryProvider from "@/providers/queryClient"
import { ThemeProvider } from "@/providers/theme"
import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FooterGallery from "@/components/footerGalery"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

type children = { children: React.ReactNode }
export default function RootLayout({ children }: children) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <ClerkAuthProvider>
              <Header />
              <Navbar />
              {children}
              <FooterGallery />
              <Footer />
              <Toaster richColors />
            </ClerkAuthProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
