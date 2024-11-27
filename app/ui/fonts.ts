import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local'

export const inter = Inter({subsets: ['latin']});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const mFont = localFont({
  src: '../../public/fonts/NanumGothicEco.otf',
  // src: '../../public/fonts/IropkeBatangM.woff',
  display: 'swap',
})