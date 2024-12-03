// Importa a font da página
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: '400', // ou 700, conforme sua necessidade
  style: 'normal', // ou 'italic' se preferir
})

// Importações do Chakra UI
import { Provider } from "@/components/ui/provider"

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
      <body className={publicSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
