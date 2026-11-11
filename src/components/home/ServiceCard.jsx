
export default function ServiceCard({
  title,
  description,
  icon: Icon,
  link,
}) {
  return (
    <article className="service-card">
      <div className="service-card-icon">
        <Icon
          size={28}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      <h3 className="service-card-title">
        {title}
      </h3>

      <p className="service-card-description">
        {description}
      </p>

      <a
        className="service-card-link"
        href={link}
        aria-label={`Learn more about ${title}`}
      >
        Lorem Ipsum
        <span aria-hidden="true"> →</span>
      </a>
    </article>
  );
}
