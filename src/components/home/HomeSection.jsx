
export default function HomeSection({
  id,
  title,
  children,
  alternate = false,
}) {
  return (
    <section
      id={id}
      className={`home-section ${
        alternate ? "home-section--alternate" : ""
      }`}
    >
      <div className="container">
        <div className="section-accent" />

        <h2 className="section-title">
          {title}
        </h2>

        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
}
