import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oliver Hernandez Moreno | Business Analyst, AI & DevOps, Technical Product Owner",
  description: "Bilingual professional portfolio. Specializing in Product Management, DevOps, Cloud Infrastructure & Backend Architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}