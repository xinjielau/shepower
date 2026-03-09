export default function SectionIntro({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
      <h2 className="title-xl">{title}</h2>
      {description ? <p className="desc-xl">{description}</p> : null}
    </div>
  );
}
