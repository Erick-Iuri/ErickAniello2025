// Importa a font da página
import { Public_Sans, Roboto } from "next/font/google";

const robotoo = Roboto({
  subsets: ["latin"],
  weight: "400", // ou 700, conforme sua necessidade
  style: "normal", // ou 'italic' se preferir
});

// Importações do Chakra UI
import { Provider } from "@/components/ui/provider";

// DarkMode
import { ColorModeProvider } from "@/components/ui/color-mode";

// Importações do Next
import type { Metadata } from "next";

// Titulo da página
export const metadata: Metadata = {
  title: "Erick Aniello",
};

// Aplicação
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={robotoo.className}>
        <ColorModeProvider>
          <Provider>{children}</Provider>
        </ColorModeProvider>
      </body>
    </html>
  );
}
