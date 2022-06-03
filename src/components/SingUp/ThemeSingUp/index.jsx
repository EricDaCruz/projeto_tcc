import { Footer } from '../Footer';
import { Header } from '../Header'

export function ThemeSingUp({ children }) {
   return (
      <div>
         <Header />
         <section>
            {children}
         </section>
         <Footer />
      </div>
   );
}
