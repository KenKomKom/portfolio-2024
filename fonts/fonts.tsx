import { Inter, Roboto_Mono, Josefin_Sans, Poppins, Bodoni_Moda } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
export const jose = Josefin_Sans({
    subsets:['latin'],
    variable: '--font-josefin',
  })

export const poppins = Poppins({
    subsets: ["latin"], 
    weight:["200","300","400","500", "600","700","800","900"],
    variable: '--font-poppins',
  
  })

export const bodoniModa = Bodoni_Moda({
  subsets:["latin"],
  weight:['400','500','600','700','800','900']
})