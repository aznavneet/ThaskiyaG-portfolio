import { Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/motion";
import { Button, SectionHeading } from "@/components/ui";
import { profile } from "@/data/portfolio";

export function ContactSection() {
  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? `mailto:${profile.email}`;

  return (
    <section id="contact" className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Cloud and DevOps opportunities">
            Reach out directly by email or phone.
          </SectionHeading>
          <div className="mt-8 grid gap-3 text-sm text-mist">
            <Link href={`mailto:${profile.email}`} className="focus-ring flex items-center gap-3 rounded-md p-2 hover:bg-white/[0.05] hover:text-cloud">
              <Mail className="size-4 text-aqua" />
              {profile.email}
            </Link>
            <a href="tel:9113873649" className="focus-ring flex items-center gap-3 rounded-md p-2 hover:bg-white/[0.05] hover:text-cloud"><Phone className="size-4 text-aqua" />{profile.phone}</a>
            <span className="flex items-center gap-3 rounded-md p-2">
              <MapPin className="size-4 text-aqua" />
              {profile.location}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CopyEmail />
            <Button href={`mailto:${profile.email}`} variant="primary">
              <Mail className="size-4" />
              Email
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <form action={formEndpoint} method="POST" className="rounded-lg border border-line bg-white/[0.04] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-cloud">
                Name
                <input name="name" required className="focus-ring min-h-11 rounded-md border border-line bg-ink px-3 text-sm text-cloud outline-none" />
              </label>
              <label className="grid gap-2 text-sm text-cloud">
                Email
                <input name="email" type="email" required className="focus-ring min-h-11 rounded-md border border-line bg-ink px-3 text-sm text-cloud outline-none" />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm text-cloud">
              Message
              <textarea name="message" required rows={6} className="focus-ring rounded-md border border-line bg-ink px-3 py-3 text-sm text-cloud outline-none" />
            </label>
            <button
              type="submit"
              className="focus-ring mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-cloud px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white"
            >
              <Send className="size-4" />
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
