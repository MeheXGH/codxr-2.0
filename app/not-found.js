import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="section-space">
      <Container>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6f9900] dark:text-codxr-green">
          404
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight">
          Page not found.
        </h1>

        <p className="mt-4 text-codxr-lightMuted dark:text-codxr-darkMuted">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-codxr-green px-6 py-3 font-semibold text-black"
        >
          Back Home
        </Link>
      </Container>
    </section>
  );
}
