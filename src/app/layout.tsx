import './globals.css'
// import { Inter } from 'next/font/google'
import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'NextFrontend',
//   description: 'NextFrontend',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }

const Layout = ({ children }) => {
  return (
      <div>
        <nav>
          <Link href="/pages/home">Ana Sayfa</Link>
          <Link href="/pages/about">Hakkında</Link>
          <Link href="/pages/profil">Profil</Link>
        </nav>
        {children}
      </div>
  );
};

export default Layout;