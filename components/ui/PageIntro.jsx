export default function PageIntro({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="max-w-4xl">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#6f9900] dark:text-codxr-green">
        {eyebrow}
      </p>

      <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] md:text-7xl">
        {title}
      </h1>

      {description ? (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-codxr-lightMuted dark:text-codxr-darkMuted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
