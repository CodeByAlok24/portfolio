import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'alok.officials.25@gmail.com',
    href: 'mailto:alok.officials.25@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9835137229',
    href: 'tel:+919835137229',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dharwad, Karnataka',
    href: '#',
  },
];

const getErrorMessage = (err: unknown) => {
  if (err instanceof Error) {
    return err.message;
  }

  return 'Please try again later or email me directly.';
};

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (e: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      toast({ title: 'Name required', description: 'Please enter your name.' });
      return;
    }
    if (!isValidEmail(formData.email)) {
      toast({ title: 'Invalid email', description: 'Please enter a valid email.' });
      return;
    }
    if (!formData.message.trim()) {
      toast({ title: 'Message required', description: 'Please enter your message.' });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || 'Please try again later or email me directly.');
      }

      toast({
        title: 'Message sent!',
        description:
          "Thanks for reaching out. Let's collaborate - I'll get back to you shortly.",
      });

      setFormData({ name: '', email: '', message: '' });
      formRef.current?.reset();
    } catch (err: unknown) {
      const message = getErrorMessage(err);
      console.error('Contact form error:', message);
      toast({
        title: 'Failed to send',
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="mx-auto max-w-2xl text-base text-foreground/80 sm:text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="animated-card spread-hover glass glass-hover group flex items-center gap-4 rounded-xl p-4 sm:p-6"
                >
                  <div className="h-11 w-11 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary to-accent p-3 shadow-glow sm:h-12 sm:w-12">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-sm mb-1">{info.label}</p>
                    <p className="break-words text-sm font-medium text-foreground sm:text-base">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="animated-card glass rounded-2xl p-5 space-y-5 sm:p-8 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                  placeholder="your.email@example.com"
                />
                {isValidEmail(formData.email) && (
                  <div className="text-primary mt-2 text-sm">
                    Awesome! I'd love to collaborate - share your project details below.
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="spread-hover w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
