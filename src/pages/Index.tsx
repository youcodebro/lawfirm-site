import { useEffect, useState } from "react";
import accent from "@/assets/accent.jpg";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Scale, Briefcase, Users, Home, Shield, FileText, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const practiceAreas = [
  { icon: Briefcase, title: "Corporate & Business Law", desc: "Formation, contracts, governance, and compliance for growing enterprises." },
  { icon: Home, title: "Real Estate", desc: "Transactions, closings, and disputes — residential and commercial." },
  { icon: Users, title: "Family Law", desc: "Compassionate counsel through divorce, custody, and adoption matters." },
  { icon: Shield, title: "Civil Rights & Employment", desc: "Advocacy against discrimination, wrongful termination, and workplace injustice." },
  { icon: FileText, title: "Estate Planning", desc: "Wills, trusts, and probate — protecting what you have built." },
  { icon: Scale, title: "Personal Injury", desc: "Aggressive representation when negligence has changed your life." },
];

const results = [
  { value: "20+", label: "Years of practice" },
  { value: "$50M+", label: "Recovered for clients" },
  { value: "98%", label: "Client retention" },
  { value: "500+", label: "Cases resolved" },
];

const testimonials = [
  { quote: "She fought for me when no one else would. Strategic, brilliant, and genuinely cares about her clients.", name: "Jasmine R.", role: "Civil Rights Client" },
  { quote: "The most prepared attorney I have ever worked with. Walked into mediation and walked out with everything we asked for.", name: "Marcus T.", role: "Corporate Client" },
  { quote: "Calm, clear, and commanding in the courtroom. I felt protected from the very first call.", name: "Diane K.", role: "Family Law Client" },
];

const Index = () => {
  const [matterType, setMatterType] = useState("");

  useEffect(() => {
    document.title = "Whitfield & Associates — Boutique Law Firm";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Whitfield & Associates is a Black woman–owned boutique law firm delivering strategic, results-driven counsel in corporate, family, civil rights, and real estate law.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal-on-scroll");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <nav className="container flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-2 text-ivory">
            <Scale className="h-5 w-5 text-gold" />
            <span className="font-serif text-lg tracking-wide">Whitfield <span className="text-gold">&</span> Associates</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-ivory/80">
            <a href="#practice" className="hover:text-gold transition-smooth">Practice</a>
            <a href="#about" className="hover:text-gold transition-smooth">About</a>
            <a href="#results" className="hover:text-gold transition-smooth">Results</a>
            <a href="#contact" className="hover:text-gold transition-smooth">Contact</a>
          </div>
          <Button asChild variant="outline" className="border-gold/60 bg-transparent text-ivory hover:bg-gold hover:text-ink">
            <a href="#contact">Consultation</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-hero text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold))_0%,transparent_50%)]" />
        <div className="container relative grid lg:grid-cols-12 gap-12 pt-36 pb-24 lg:pt-44 lg:pb-32 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-soft">Est. 2008 · Atlanta, GA</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
              Justice, pursued with <em className="text-gold">precision</em> and purpose.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ivory/75 leading-relaxed">
              A Black woman–owned boutique firm representing individuals and enterprises with the strategy of a national practice and the attention of a trusted advisor.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gold text-ink hover:bg-gold-soft">
                <a href="#contact">Schedule a consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-ivory hover:bg-ivory/10 hover:text-ivory">
                <a href="#practice">Explore our practice</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
              <div
                className="h-full w-full bg-zinc-400/70"
                aria-label="Placeholder hero image"
                role="img"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/90 to-transparent">
                <p className="font-serif text-xl">Image Placeholder</p>
                <p className="text-sm text-ivory/70">Hero visual coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40" data-reveal>
        <div className="container py-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>State Bar of Georgia</span>
          <span className="hidden md:inline text-gold">◆</span>
          <span>National Bar Association</span>
          <span className="hidden md:inline text-gold">◆</span>
          <span>Super Lawyers Rising Star</span>
          <span className="hidden md:inline text-gold">◆</span>
          <span>NAACP Legal Defense Fund</span>
        </div>
      </section>

      {/* Practice areas */}
      <section id="practice" className="container py-24 lg:py-32" data-reveal>
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Practice Areas</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">Counsel across the matters that shape lives and businesses.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {practiceAreas.map((p) => (
            <article key={p.title} className="group bg-background p-8 lg:p-10 transition-smooth hover:bg-card">
              <p.icon className="h-7 w-7 text-gold transition-smooth group-hover:scale-110" strokeWidth={1.25} />
              <h3 className="mt-6 font-serif text-2xl">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-ink group-hover:text-gold transition-smooth">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-secondary/50" data-reveal>
        <div className="container py-24 lg:py-32 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <img src={accent} alt="Classical courthouse columns" loading="lazy" width={1200} height={1500} className="rounded-sm shadow-soft aspect-[4/5] object-cover w-full" />
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-ink text-ivory p-8 max-w-xs hidden md:block shadow-elegant">
              <p className="font-serif text-3xl text-gold">15+</p>
              <p className="mt-2 text-sm text-ivory/80">Years standing with the underserved and underrepresented.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-gold">About the Firm</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">Built on conviction. Guided by experience.</h2>
            <div className="hairline my-8 max-w-xs" />
            <div className="space-y-5 text-taupe leading-relaxed">
              <p>
                Whitfield & Associates was founded on a simple belief: every client deserves a lawyer who is as prepared, as committed, and as fearless as the matter requires.
              </p>
              <p>
                As a Black woman–owned firm, we bring a perspective the legal profession has too often overlooked — one rooted in advocacy, cultural fluency, and an unwavering pursuit of equity. From boardrooms to courtrooms, we represent our clients with the seriousness their stories demand.
              </p>
              <p>
                Our boutique structure means partner-level attention on every file. No layers. No handoffs. Just counsel that listens, strategy that wins, and a team that treats your matter as our own.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-gold pl-4">
                <p className="font-serif text-xl">J.D., Howard Law</p>
                <p className="text-sm text-muted-foreground">Magna Cum Laude</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <p className="font-serif text-xl">Federal & State</p>
                <p className="text-sm text-muted-foreground">Trial-tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-ink text-ivory" data-reveal>
        <div className="container py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Results</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">A record measured in outcomes.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/10">
            {results.map((r) => (
              <div key={r.label} className="bg-ink p-8 lg:p-12 text-center">
                <p className="font-serif text-5xl lg:text-6xl text-gold">{r.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ivory/70">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-24 lg:py-32" data-reveal>
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Client Voices</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">Trusted when it matters most.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <figure key={i} className="bg-card p-8 border border-border shadow-soft transition-smooth hover:shadow-elegant hover:-translate-y-1">
              <span className="font-serif text-6xl text-gold leading-none block">"</span>
              <blockquote className="mt-2 text-foreground leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="font-serif text-lg">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-hero text-ivory" data-reveal>
        <div className="container py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Consultation</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">Let's discuss your matter — confidentially.</h2>
            <p className="mt-6 text-ivory/75 leading-relaxed max-w-md">
              Every conversation begins with listening. Reach out to schedule a private consultation with our team.
            </p>
            <div className="mt-10 space-y-4 text-ivory/85">
              <a href="tel:+14045550199" className="flex items-center gap-4 hover:text-gold transition-smooth">
                <Phone className="h-5 w-5 text-gold" /> (404) 555-0199
              </a>
              <a href="mailto:hello@whitfieldlaw.com" className="flex items-center gap-4 hover:text-gold transition-smooth">
                <Mail className="h-5 w-5 text-gold" /> hello@whitfieldlaw.com
              </a>
              <p className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-gold" /> 1100 Peachtree St NE, Suite 800, Atlanta, GA
              </p>
            </div>
          </div>
          <form className="bg-ivory text-foreground p-8 lg:p-10 shadow-elegant space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">First name</label>
                <input className="mt-2 w-full bg-transparent border-b border-border py-2 focus:border-gold outline-none transition-smooth" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Last name</label>
                <input className="mt-2 w-full bg-transparent border-b border-border py-2 focus:border-gold outline-none transition-smooth" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</label>
              <input type="email" className="mt-2 w-full bg-transparent border-b border-border py-2 focus:border-gold outline-none transition-smooth" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Matter type</label>
              <Select value={matterType} onValueChange={setMatterType}>
                <SelectTrigger
                  className={`mt-2 h-auto w-full border-0 border-b-0 bg-transparent px-3 py-2 text-left shadow-none ring-0 focus:ring-0 focus:ring-offset-0 md:rounded-none md:border-b md:border-border md:px-0 md:data-[placeholder]:text-sm ${
                    matterType ? "text-base text-foreground" : "text-sm text-muted-foreground"
                  }`}
                >
                  <SelectValue placeholder="Select a matter type" />
                </SelectTrigger>
                <SelectContent className="border-border bg-card text-foreground shadow-elegant">
                  <SelectItem value="corporate-business">Corporate &amp; Business Law</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="family-law">Family Law</SelectItem>
                  <SelectItem value="civil-rights-employment">Civil Rights &amp; Employment</SelectItem>
                  <SelectItem value="estate-planning">Estate Planning</SelectItem>
                  <SelectItem value="personal-injury">Personal Injury</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">How can we help?</label>
              <textarea rows={4} className="mt-2 w-full bg-transparent border-b border-border py-2 focus:border-gold outline-none transition-smooth resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-ink text-ivory hover:bg-gold hover:text-ink">
              Request consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground">Submissions are confidential. No attorney-client relationship is created until engagement.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-ivory/70 border-t border-ivory/10">
        <div className="container py-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-gold" />
            <span className="font-serif text-ivory">Whitfield & Associates</span>
          </div>
          <p className="text-center text-sm">© {new Date().getFullYear()} Whitfield & Associates, LLC. All rights reserved.</p>
          <p className="md:text-right text-xs uppercase tracking-[0.2em]">Attorney advertising</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
