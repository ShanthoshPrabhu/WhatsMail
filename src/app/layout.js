// import { Inter } from 'next/font/google'
// import { cn } from '@/lib/utils'
// import './globals.css'

// const fontHeading = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-heading',
// })

// const fontBody = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-body',
// })

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body 
//         className={cn(
//           'antialiased',
//           fontHeading.variable,
//           fontBody.variable
//         )}
//       >
//         {children}
//       </body>
//     </html>
//   )
// }

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "WhatsMail",
  description: "Streamline your communication with our powerful integration of Gmail and WhatsApp. Stay connected and productive like never before.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}