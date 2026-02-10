"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Crown,
  Heart,
  ShieldCheck,
  Globe,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "Dignity",
    description:
      "We believe every elder deserves to be treated with honor and respect.",
    icon: Crown,
  },
  {
    title: "Compassion",
    description:
      "We lead with kindness, understanding the unique needs of our seniors.",
    icon: Heart,
  },
  {
    title: "Integrity",
    description:
      "We are transparent and accountable in all our actions and resources.",
    icon: ShieldCheck,
  },
  {
    title: "Inclusivity",
    description:
      "We serve all elders regardless of their background or status.",
    icon: Globe,
  },
];

// Placeholder team data
const team = [
  { name: "Jane Mwangi", role: "Founder & Director" },
  { name: "John Kamau", role: "Program Manager" },
  { name: "Dr. Sarah Omondi", role: "Medical Lead" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero / Story Section */}
      <section className="bg-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Founded in Thika, Kenya, Liberty of Hope began with a simple yet
              powerful belief: aging should be a celebration, not a burden. We
              saw our elders facing isolation and neglect, and we decided to
              act. Today, we stand as a beacon of dignity, ensuring every senior
              we touch feels valued, loved, and supported.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-sm text-primary">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-secondary">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team Section Placeholder */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Team</h2>
          <p className="text-muted-foreground">
            The dedicated hearts behind our mission.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div
              key={i}
              className="text-center bg-background p-6 rounded-lg shadow-sm"
            >
              <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-secondary">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <section className="py-20 bg-background" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground text-lg">
                  We'd love to hear from you. Whether you want to volunteer,
                  donate, or just say hello, we are here.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Happy Valley Estate, Thika, Kenya
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">Call Us</h3>
                    <p className="text-muted-foreground">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-secondary">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@libertyofhope.org
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Facebook />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Twitter />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Instagram />
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg border-none">
              <CardContent className="p-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="How can I help?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
