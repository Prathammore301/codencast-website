type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  scale?: "default" | "editorial";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  scale = "default",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleClass =
    scale === "editorial"
      ? "cn-display-md lg:cn-display-lg text-brand-text"
      : "cn-heading-xl text-brand-text";

  return (
    <header className={`max-w-4xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="cn-tech-label text-brand-accent">{eyebrow}</p>
      ) : null}
      <h2
        id={titleId}
        className={`${titleClass} ${eyebrow ? "mt-5 lg:mt-6" : ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl cn-body-lg text-brand-muted lg:mt-6 lg:text-[1.125rem] lg:leading-[1.7]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
