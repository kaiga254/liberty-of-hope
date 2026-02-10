"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, HandHeart, ArrowRight, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Happy elderly African person smiling"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Restoring Dignity,{" "}
              <span className="text-primary">One Elder at a Time</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Ensuring our seniors in Thika and beyond live with honor, health,
              and happiness.
            </p>
            <div className="pt-4">
              <Link href="/programs">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90"
                >
                  Join Our Mission <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <Section className="text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl font-bold text-secondary">Who We Are</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Liberty of Hope is a community-based organization in Thika, Kenya,
            born from the belief that aging should be a celebration, not a
            burden. We are dedicated to providing holistic care, social
            connection, and advocacy for our elderly, ensuring they age with the
            dignity and respect they deserve.
          </p>
        </motion.div>
      </Section>

      {/* Impact Highlights */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Our Pillars of Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We focus on three core areas to improve the quality of life for our
            seniors.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="p-3 bg-primary/10 rounded-full mb-4 text-primary">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  Providing medical camps, health screenings, and partnerships
                  to ensure physical well-being.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="p-3 bg-secondary/10 rounded-full mb-4 text-secondary">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Mental Connection</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  Combating loneliness through peer support groups, community
                  gatherings, and social activities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="p-3 bg-accent/10 rounded-full mb-4 text-accent">
                  <HandHeart className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Dignity & Care</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>
                  Restoring self-worth through grooming, hygiene support, and
                  personal care initiatives.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Vision Banner */}
      <section className="py-20 bg-secondary text-primary-foreground relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Globe className="w-96 h-96" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Global Vision
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Beyond Thika, we envision a future where every elder in East
                Africa is cherished. We aim to expand our model of compassionate
                community care, influencing policy and creating a society that
                truly honors its history by caring for those who wrote it.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-secondary mt-4"
                >
                  Read Our Full Story
                </Button>
              </Link>
            </div>

            {/* Optional statistics or visual element could go here */}
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
                <p className="text-5xl font-bold text-primary mb-2">200+</p>
                <p className="text-white/90">Seniors Supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
