import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get In Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Have a question about a product, your order, or just want to talk about pets? We'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
        <div className="space-y-8">
            <h2 className="text-2xl font-headline font-bold">Contact Information</h2>
            <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-muted-foreground">Send us a message and we'll get back to you within 24 hours.</p>
                    <a href="mailto:hello@pawandco.com" className="text-primary hover:underline">hello@pawandco.com</a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-muted-foreground">Mon - Fri, 9am - 5pm EST</p>
                    <a href="tel:1-800-123-4567" className="text-primary hover:underline">1-800-123-4567</a>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-bold">Our Location</h3>
                    <p className="text-muted-foreground">123 Puppy Lane<br/>Petville, PV 12345</p>
                </div>
            </div>
        </div>
        <div>
           <h2 className="text-2xl font-headline font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={6} />
                <Button type="submit" size="lg">Send Message</Button>
            </form>
        </div>
      </div>
    </div>
  );
}
