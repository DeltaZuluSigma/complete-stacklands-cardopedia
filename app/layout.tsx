import "./global.css";
import { IMG_PREFIX } from "./utils/GenericHelpers";

import { Varela_Round } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

const varelaRound = Varela_Round({
  weight: '400',
  subsets:['latin']
});

export const metadata: Metadata = {
  title: 'The Complete Stacklands Cardopedia',
  description: 'An near complete emulation of Stacklands\' Cardopedia with more card details.',
  keywords: ['Stacklands', 'Cardopedia', 'Stacklands Cardopedia'],
  creator: 'DeltaZuluSigma',
  icons:{
    other:[
      {
        url: `${IMG_PREFIX}/favicon.ico`,
        sizes: '128x128',
        type: 'image/ico'
      }
    ]
  }
}

export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className={varelaRound.className}>
      <body>{children}</body>
    </html>
  )
}