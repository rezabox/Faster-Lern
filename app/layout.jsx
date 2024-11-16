import Header from '@/components/Header';
import '../styles/globals.css';

export const metadata = {
   title: 'Faster lern',
   description: 'Faster lern',
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <Header/>
            {children}
         </body>
      </html>
   )
}
