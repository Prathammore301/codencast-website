type EditorialListProps = {
  items: string[];
  className?: string;
};

export function EditorialList({ items, className = "" }: EditorialListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 cn-body-md text-brand-muted before:mt-2 before:size-1.5 before:shrink-0 before:rounded-full before:bg-brand-accent/80"
        >
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
