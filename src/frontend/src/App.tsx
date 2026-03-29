import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

const SERVICES = [
  {
    title: "Hair Spa",
    image: "/assets/generated/service-hair-spa.dim_600x400.jpg",
    description:
      "Rejuvenating hair spa treatments with premium products to nourish and restore shine to your hair.",
    icon: "sparkles",
  },
  {
    title: "Hair Cutting",
    image: "/assets/generated/service-hair-cut.dim_600x400.jpg",
    description:
      "Precision hair cuts styled to flatter your face shape and personality by expert stylists.",
    icon: "scissors",
  },
  {
    title: "Bridal Makeup (HD)",
    image: "/assets/generated/service-bridal.dim_600x400.jpg",
    description:
      "Exquisite HD bridal makeup crafted for your most special day, long-lasting and camera-perfect.",
    icon: "star",
  },
  {
    title: "Party Makeup",
    image: "/assets/generated/service-party-makeup.dim_600x400.jpg",
    description:
      "Glamorous party makeup looks that make you shine and stand out at every celebration.",
    icon: "sparkles",
  },
  {
    title: "Engagement Makeup",
    image: "/assets/generated/service-engagement.dim_600x400.jpg",
    description:
      "Romantic and elegant engagement makeup that enhances your natural beauty for your big moment.",
    icon: "heart",
  },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "scissors") return <Scissors className="w-5 h-5" />;
  if (type === "star") return <Star className="w-5 h-5" />;
  if (type === "heart") return <Heart className="w-5 h-5" />;
  return <Sparkles className="w-5 h-5" />;
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you soon.", {
        description: "Paridhi Makeover will contact you shortly.",
      });
      setForm({ name: "", phone: "", message: "" });
      setSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-salon-ivory font-sans">
      <Toaster position="top-center" richColors />

      {/* Utility Bar */}
      <div className="bg-salon-charcoal text-white text-xs py-2 text-center tracking-widest uppercase">
        Welcome to Paridhi Makeover – A Professional Beauty Salon
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-salon-beige border-b border-salon-bordergray shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="flex flex-col leading-tight text-left"
            data-ocid="nav.link"
          >
            <span className="font-serif text-xl md:text-2xl font-bold text-salon-gold tracking-wide">
              PARIDHI MAKEOVER
            </span>
            <span className="text-[10px] text-salon-warmgray tracking-widest uppercase">
              A Professional Beauty Salon
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-salon-dark text-sm hover:text-salon-gold transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="hidden md:block bg-salon-gold text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-700 transition-colors shadow-soft"
            data-ocid="nav.primary_button"
          >
            Book Appointment
          </button>

          <button
            type="button"
            className="md:hidden text-salon-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-salon-beige border-t border-salon-bordergray px-4 pb-4 pt-2 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left text-salon-dark text-sm py-2 border-b border-salon-bordergray hover:text-salon-gold"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="mt-2 bg-salon-gold text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-700 transition-colors"
              data-ocid="nav.primary_button"
            >
              Book Appointment
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-bridal.dim_1200x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-salon-gold text-xs tracking-[0.3em] uppercase mb-4">
              ✦ Professional Beauty Studio
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight font-bold mb-5">
              Where Beauty
              <br />
              <em className="italic text-salon-gold">Meets Elegance</em>
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-3 font-light">
              Professional Bridal, Party &amp; Hair Services
            </p>
            <p className="text-white/60 text-sm mb-8 tracking-wide">
              Laxmanpur Chatti, Ballia, U.P.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="bg-salon-gold text-white font-semibold px-7 py-3 rounded-full hover:bg-amber-600 transition-colors shadow-lg"
                data-ocid="hero.primary_button"
              >
                Explore Our Services
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="border border-white/60 text-white font-medium px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
                data-ocid="hero.secondary_button"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-salon-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-salon-gold text-xs tracking-[0.3em] uppercase mb-2">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-salon-dark font-bold">
              Our Services
            </h2>
            <div className="mt-3 mx-auto w-16 h-0.5 bg-salon-gold" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-shadow"
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className="h-1.5"
                  style={{
                    background: "linear-gradient(90deg, #C89B8D, #D7B1A6)",
                  }}
                />
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1 text-salon-gold">
                    <ServiceIcon type={service.icon} />
                    <h3 className="font-serif font-semibold text-salon-dark text-sm leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-salon-warmgray text-xs leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => scrollTo("contact")}
                    className="text-salon-gold text-xs font-semibold hover:underline"
                  >
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-salon-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-salon-gold text-xs tracking-[0.3em] uppercase mb-2">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-salon-dark font-bold">
              About Us
            </h2>
            <div className="mt-3 mx-auto w-16 h-0.5 bg-salon-gold" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="absolute -inset-3 rounded-2xl opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, #B89445 0%, #D7B1A6 100%)",
                }}
              />
              <img
                src="/assets/generated/service-bridal.dim_600x400.jpg"
                alt="Rani Chaubey - Founder"
                className="relative rounded-2xl shadow-card w-full object-cover h-80 sm:h-96"
              />
              <div className="absolute bottom-4 left-4 bg-salon-gold text-white px-4 py-2 rounded-lg text-sm font-semibold shadow">
                <Award className="inline w-4 h-4 mr-1" />
                Certified Professional
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-salon-dark font-bold mb-2">
                Meet Rani Chaubey
              </h3>
              <p className="text-salon-gold text-sm font-semibold tracking-wide mb-5">
                Founder &amp; Chief Makeup Artist
              </p>
              <p className="text-salon-warmgray leading-relaxed mb-4">
                Rani Chaubey is the creative force behind Paridhi Makeover. With
                a passion for beauty and an eye for detail, she has transformed
                hundreds of brides and clients across Ballia and surrounding
                regions.
              </p>
              <p className="text-salon-warmgray leading-relaxed mb-4">
                Professionally trained at the prestigious{" "}
                <strong className="text-salon-dark">
                  Orian International Makeup Learning Studio, Noida (Delhi)
                </strong>
                , Rani brings international-level techniques and the finest
                products to every appointment.
              </p>
              <p className="text-salon-warmgray leading-relaxed mb-6">
                Her specializations include HD Bridal Makeup, Party Makeup,
                Engagement Makeup, and advanced Hair Treatments — each delivered
                with artistry and care.
              </p>
              <div className="border-l-4 border-salon-gold pl-4 italic text-salon-dark font-serif text-lg">
                "Every woman deserves to feel beautiful on her most special
                day."
              </div>
              <p className="mt-3 text-salon-warmgray text-sm font-semibold">
                — Rani Chaubey
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-salon-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-salon-gold text-xs tracking-[0.3em] uppercase mb-2">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-salon-dark font-bold">
              Contact &amp; Visit Us
            </h2>
            <div className="mt-3 mx-auto w-16 h-0.5 bg-salon-gold" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-card"
            >
              <h3 className="font-serif text-xl text-salon-dark font-semibold mb-4">
                Salon Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-salon-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-salon-dark text-sm">
                      Address
                    </p>
                    <p className="text-salon-warmgray text-sm leading-relaxed">
                      Laxmanpur Chatti,
                      <br />
                      Pipra Road,
                      <br />
                      District Ballia, U.P.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-salon-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-salon-dark text-sm">
                      Phone
                    </p>
                    <a
                      href="tel:8528535773"
                      className="text-salon-gold font-semibold text-sm hover:underline"
                      data-ocid="contact.link"
                    >
                      +91 8528535773
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-salon-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-salon-dark text-sm">
                      Run By
                    </p>
                    <p className="text-salon-warmgray text-sm">Rani Chaubey</p>
                    <p className="text-salon-warmgray text-xs mt-0.5">
                      Certified from Orian International,
                      <br />
                      Noida Delhi
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-salon-bordergray">
                <p className="text-salon-warmgray text-xs">Working Hours</p>
                <p className="text-salon-dark text-sm font-medium mt-1">
                  Mon – Sun: 9:00 AM – 8:00 PM
                </p>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl shadow-card bg-salon-beige border-2 border-salon-gold/30 flex flex-col items-center justify-center text-center p-6 min-h-64"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, #B89445, #D7B1A6)",
                }}
              >
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-serif text-lg text-salon-dark font-semibold mb-2">
                Paridhi Makeover
              </h4>
              <p className="text-salon-warmgray text-sm leading-relaxed">
                Laxmanpur Chatti,
                <br />
                Pipra Road, District Ballia
                <br />
                Uttar Pradesh
              </p>
              <a
                href="https://maps.google.com/?q=Laxmanpur+Chatti+Pipra+Road+Ballia+UP"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-salon-gold text-sm font-semibold hover:underline"
                data-ocid="contact.link"
              >
                Get Directions →
              </a>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-card"
            >
              <h3 className="font-serif text-xl text-salon-dark font-semibold mb-4">
                Book an Inquiry
              </h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-ocid="contact.modal"
              >
                <div>
                  <label
                    htmlFor="inq-name"
                    className="block text-salon-dark text-xs font-semibold mb-1 uppercase tracking-wide"
                  >
                    Your Name
                  </label>
                  <Input
                    id="inq-name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Enter your name"
                    required
                    className="border-salon-bordergray"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="inq-phone"
                    className="block text-salon-dark text-xs font-semibold mb-1 uppercase tracking-wide"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="inq-phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="Enter your phone"
                    required
                    type="tel"
                    className="border-salon-bordergray"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="inq-message"
                    className="block text-salon-dark text-xs font-semibold mb-1 uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <Textarea
                    id="inq-message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell us about your requirements..."
                    rows={3}
                    className="border-salon-bordergray resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-salon-gold hover:bg-amber-700 text-white font-semibold rounded-full transition-colors"
                  data-ocid="contact.submit_button"
                >
                  {submitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-salon-charcoal text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl font-bold text-salon-gold tracking-wide mb-2">
                PARIDHI MAKEOVER
              </h3>
              <p className="text-white/60 text-xs tracking-widest uppercase mb-4">
                A Professional Beauty Salon
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Bringing elegance and professional beauty services to Ballia,
                U.P. with love and dedication.
              </p>
              <div className="flex items-center gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-salon-gold text-salon-gold"
                  />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="text-white/60 text-sm hover:text-salon-gold transition-colors"
                      data-ocid="nav.link"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => scrollTo("contact")}
                    className="text-salon-gold text-sm font-semibold hover:underline"
                    data-ocid="nav.primary_button"
                  >
                    Book Appointment
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                Run by Rani Chaubey
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-salon-gold mt-0.5 shrink-0" />
                  <span className="text-white/60 leading-relaxed">
                    Laxmanpur Chatti, Pipra Road,
                    <br />
                    District Ballia, U.P.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-salon-gold shrink-0" />
                  <a
                    href="tel:8528535773"
                    className="text-white/60 hover:text-salon-gold transition-colors"
                  >
                    +91 8528535773
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-salon-gold mt-0.5 shrink-0" />
                  <span className="text-white/60 text-xs leading-relaxed">
                    Trained at Orian International
                    <br />
                    Makeup Learning Studio, Noida Delhi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Paridhi Makeover. All rights reserved.
            &nbsp;|&nbsp; Built with{" "}
            <Heart className="inline w-3 h-3 text-red-400 fill-red-400" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-salon-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
