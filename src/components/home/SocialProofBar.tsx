"use client";

import { motion } from "framer-motion";
import { Shield, Flag, Lock, CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const trustItems = [
  { icon: CheckCircle, label: "ISO 14731-konform" },
  { icon: Shield, label: "DSGVO-konform" },
  { icon: Flag, label: "Made in Germany" },
  { icon: Lock, label: "256-Bit SSL" },
];

export function SocialProofBar() {
  return (
    <section className="py-8 bg-muted/50 border-y">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {trustItems.map((item) => (
            <motion.span
              key={item.label}
              variants={fadeInUp}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <item.icon className="h-5 w-5 text-primary" />
              {item.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
