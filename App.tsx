import { Hero } from './Hero';
import { Problem } from './Problem';
import { Solution } from './Solution';
import { Features } from './Features';
import { Audience } from './Audience';
import { Offer } from './Offer';
import { Footer } from './Footer';
import { Button } from './Button';

const App: React.FC = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past hero (approx 600px)
      if (window.scrollY > 600) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Sticky Mobile/Desktop CTA Header that appears after scroll */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md transition-transform duration-300 ${showStickyNav ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-sm font-bold text-brand-700 hidden sm:block">Dinheiro Simples Diário</div>
          <Button href={LINKS.CHECKOUT} className="py-2 px-4 text-sm w-full sm:w-auto">
            Quero organizar meu dinheiro
          </Button>
        </div>
      </div>

      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Audience />
        <Offer />
      </main>

      <Footer />

      {/* Floating Scroll Top Button (Mobile convenience) */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-slate-800 text-white shadow-lg z-40 transition-opacity duration-300 hover:bg-slate-700 ${showStickyNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default App;