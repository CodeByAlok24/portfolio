import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const subjectOptions = [
  { value: 'collaboration', label: 'Project Collaboration' },
  { value: 'freelance', label: 'Freelance Work' },
  { value: 'job', label: 'Job Opportunity' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'other', label: 'Other' },
];

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
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    if (!formData.subject) {
      toast({ title: 'Subject required', description: 'Please select a subject.' });
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
          subject: formData.subject,
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

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
      setFormData({ name: '', email: '', subject: '', message: '' });
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
    <section id="contact" className="py-16 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-lg text-white/50 max-w-2xl"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
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
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                >
                  <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                    <SelectValue placeholder="What's this about?" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjectOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                disabled={isSubmitting || isSuccess}
                className="spread-hover w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
              >
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center"
                    >
                      <CheckCircle2 size={18} className="mr-2" />
                      Sent!
                    </motion.span>
                  ) : isSubmitting ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
