import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="flex flex-col items-center text-center group">
            <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Email</h4>
            <a
              href="mailto:taringamutsa@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              taringamutsah@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center group">
            <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Phone</h4>
            <a
              href="tel:+263785094296"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              +263 78 509 4296
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center group">
            <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Location</h4>
            <p className="text-sm text-muted-foreground">Harare, Zimbabwe</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/mutsa-taringa-b8857723b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/mutsah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Mutsa Taringa. All rights reserved.
            </p>
            <a
              href="#hero"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
