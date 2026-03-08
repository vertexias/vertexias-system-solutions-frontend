import { Mail, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <div>
      <h1 className="mb-6 text-5xl font-semibold tracking-tight text-slate-900">
        Let&apos;s build together.
      </h1>

      <p className="mb-12 text-xl text-slate-600">
        Whether you need a full development team, a technical consultation, or
        a custom build, our engineers are ready to help.
      </p>

      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-50">
            <Mail className="h-5 w-5 text-cyan-600" />
          </div>

          <div>
            <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-slate-500">
              Business Inquiries
            </h3>
            <a
              href="mailto:hello@vertexias.com"
              className="text-xl font-medium text-slate-900 transition-colors hover:text-cyan-600"
            >
              info@vertexias.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50">
            <MapPin className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-slate-500">
              Headquarters
            </h3>
            <p className="text-xl font-medium text-slate-900">
              Dhaka
              <br />
              Bangladesh
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-slate-200 pt-8">
        <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-slate-500">
          Connect
        </h3>
        <SocialLinks />
      </div>
    </div>
  );
}