import { Footer } from '../Footer';
import { Header } from '../Header'
import { Toaster } from "react-hot-toast";

export function ThemeSingUp({ children }) {
   return (
      <div>
         <Header />
         <section className="mx-5">
            {children}
         </section>
         <Footer />
         <Toaster 
             position="top-right"
         />
      </div>
   );
}
