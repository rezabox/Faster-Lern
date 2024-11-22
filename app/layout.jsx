import Header from '@/components/Header';
import '../styles/globals.css';
import Footer from '@/components/footer';

export const metadata = {
   title: 'Faster lern',
   description: 'Faster lern',
}

export default function RootLayout({ children }) {
   return (
      <html lang="fa-IR">
         <body>
            <Header/>
            {children}
            <Footer/>
         </body>
      </html>
   )
}
