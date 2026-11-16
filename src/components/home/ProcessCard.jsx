
export default function ProcessCard({
  number,
  title,
  description,
  icon: Icon,
}) {
  return (
    <li className="process-step">
      <article className="process-card">
        <span
          className="process-step-number"
          aria-hidden="true"
        >
          {number}
        </span>

        <div className="process-icon">
          <Icon
            size={30}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>

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
