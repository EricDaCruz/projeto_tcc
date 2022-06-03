import {Header} from '../Header'

export function ThemeSingUp({ children }) {
   return (
      <div>
         <Header />
         <section className="has-background-danger">
            {children}
         </section>
         <footer>...</footer>
      </div>
   );
}
