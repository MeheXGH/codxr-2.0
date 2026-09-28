import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-codxr-lightBorder dark:border-codxr-darkBorder">
      <div className="container-codxr grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="text-3xl font-black tracking-[-0.05em]">
            CODXR<span className="text-codxr-green">.</span>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-codxr-lightMuted dark:text-codxr-darkMuted">
            Modern websites, web applications, e-commerce experiences, and
            digital growth solutions.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 inline-block text-sm font-semibold"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Explore</h2>

          <nav className="mt-5 grid gap-3 text-sm text-codxr-lightMuted dark:text-codxr-darkMuted">
            {navigation.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Company</h2>

          <nav className="mt-5 grid gap-3 text-sm text-codxr-lightMuted dark:text-codxr-darkMuted">
            <Link href="/tools">Tools</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>

      <div className="container-codxr border-t border-codxr-lightBorder py-6 text-xs text-codxr-lightMuted dark:border-codxr-darkBorder dark:text-codxr-darkMuted">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
