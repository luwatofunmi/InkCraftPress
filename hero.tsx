import { BookOpen, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-50 overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-primary" />
          <span className="text-2xl font-semibold text-foreground">Lexicon Press</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">Services</a>
          <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a>
          <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/50 rounded-full">
              <span className="text-sm text-accent-foreground">Publishing Excellence Since 1998</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground">
              Bringing Stories
              <span className="block text-primary">To Life</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              From manuscripts to masterpieces, we create, publish, and market books, magazines, 
              and publishing materials that captivate readers worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 group">
                Explore Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-border text-foreground rounded-lg hover:bg-secondary transition-colors">
                Contact Us
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl text-primary">1200+</div>
                <div className="text-sm text-muted-foreground mt-1">Books Published</div>
              </div>
              <div>
                <div className="text-3xl text-primary">350+</div>
                <div className="text-sm text-muted-foreground mt-1">Magazine Issues</div>
              </div>
              <div>
                <div className="text-3xl text-primary">25+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582203914614-e23623afc345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwcmVhZGluZ3xlbnwxfHx8fDE3NjgzNzcwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Publishing materials"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Latest Release</div>
                  <div className="font-medium text-foreground mt-1">The Modern Publisher's Guide</div>
                  <div className="text-xs text-muted-foreground mt-1">Available Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
}
