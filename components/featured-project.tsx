import { Cloud, GitBranch, Layers3 } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/ui";

const clients = ["ICICI Lombard", "Daimler", "HCCBPL", "AVON"];
const contributions = [
  "Provisioned AWS VPCs, subnets, route tables, and security groups with Terraform, reducing manual setup time by 70%.",
  "Automated infrastructure workflows with GitHub Actions and built CI/CD pipelines with Jenkins and GitHub Actions.",
  "Used Docker multi-stage builds to reduce image size by 90%, deployment time by 50%, and storage costs by 40%.",
  "Deployed containerized applications with Docker and Kubernetes to improve scalability and reliability."
];

export function FeaturedProject() {
  return (
    <section id="projects" className="border-y border-line bg-white/[0.025] py-20">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="Selected client work" title="Cloud and DevOps delivery">
            Experience across enterprise engagements at Infosys, including the clients listed in the CV.
          </SectionHeading>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {clients.map((client) => <span key={client} className="rounded-md border border-line bg-white/[0.045] px-4 py-2 text-sm text-cloud">{client}</span>)}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {contributions.map((item, index) => {
            const Icon = [Cloud, GitBranch, Layers3, Cloud][index];
            return (
            <Reveal key={item} delay={index * 0.04}>
              <article className="flex h-full gap-4 rounded-lg border border-line bg-ink/64 p-5">
                <Icon className="mt-1 size-5 shrink-0 text-aqua" />
                <p className="text-sm leading-6 text-mist">{item}</p>
              </article>
            </Reveal>
          );})}
        </div>
      </div>
    </section>
  );
}
