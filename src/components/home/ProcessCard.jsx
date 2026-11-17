export default function ProcessCard({
  number,
  title,
  description,
}) {
  return (
    <li className="process-step">
      <article className="process-card">
        <span className="process-step-number">
          {Number(number)}
        </span>

        <h3 className="process-card-title">
          {title}
        </h3>

        <p className="process-card-description">
          {description}
        </p>
      </article>
    </li>
  );
}
