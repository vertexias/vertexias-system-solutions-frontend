import Link from "next/link";
import { Facebook, Github, Linkedin } from "lucide-react";

const socialLinks = [
  { href: "linkedin.com/company/vertexias", label: "LinkedIn", Icon: Linkedin },
  { href: "#", label: "Facebook", Icon: Facebook },
  { href: "github.com/sszobaer", label: "GitHub", Icon: Github },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-cyan-200 hover:text-cyan-600"
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
}