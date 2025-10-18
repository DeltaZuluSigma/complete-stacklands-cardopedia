import "./global.css";
import { Varela_Round } from 'next/font/google';

const varelaRound = Varela_Round({
  weight: '400',
  subsets:['latin']
});

export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className={varelaRound.className}>
      <body>{children}</body>
    </html>
  )
}