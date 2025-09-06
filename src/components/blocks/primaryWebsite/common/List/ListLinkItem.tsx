export const ListItemLink: React.FC<{
  isActive?: boolean;
  item: {
    href?: string;
    color?: string;
    id?: string;
    text?: string;
  };
}> = ({ isActive, item }) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${isActive ? "active" : ""}`}
        href={item.href ?? ""}
        style={{
          color: item.color ?? "",
        }}
        id={item.id ?? ""}
      >
        {item.text || ""}
      </a>
    </li>
  );
};
