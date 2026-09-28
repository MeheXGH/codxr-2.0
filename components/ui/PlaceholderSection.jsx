export default function PlaceholderSection({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="section-space">
      <div className="container-codxr">
        <div className="placeholder-surface rounded-[2rem] p-8 md:p-12">
          {eyebrow ? (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6f9900] dark:text-codxr-green">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>

          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-codxr-lightMuted dark:text-codxr-darkMuted">
              {description}
            </p>
          ) : null}

          {children}
        </div>
      </div>
    </section>
  );
}
