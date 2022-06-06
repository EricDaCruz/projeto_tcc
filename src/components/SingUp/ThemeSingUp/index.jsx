import { Footer } from '../Footer';
import { Header } from '../Header'
import { Toaster } from "react-hot-toast";

export function ThemeSingUp({ children }) {
   return (
      <div>
         <Header />
         <section>
            {children}
         </section>
         <Footer />
         <Toaster 
             position="bottom-right"
         />
      </div>
   );
}
