import { Footer } from '../Footer';
import { Header } from '../Header'

export function ThemeSingUp({ children }) {
   return (
      <div>
         <Header />
         <section className="mx-5">
            {children}
         </section>
         <Footer />
      </div>
   );
}
