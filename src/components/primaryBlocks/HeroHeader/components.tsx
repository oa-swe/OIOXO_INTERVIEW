export const ListItemLink: React.FC<{
  isActive?: boolean;
  item: {
    href?: string;
    color?: string;
    id?: string;
    text?: string;
    border_bottom_color?: string;
  };
}> = ({ isActive, item }) => {
  return (
    <>
      <style>
        {`
        .nav-link {
            font-weight: 500;
            color: #1E1E1E;
            margin: 0 10px;
            position: relative;
          }

          .nav-link.active {
            color: #3361FF;
          }

          .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: ${item?.border_bottom_color ?? "#3361FF"};
            bottom: -7px !important;
          }
      `}
      </style>
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
    </>
  );
};

export const NavMenuDropDown: React.FC<{
  heroheaderMenu: {
    href?: string;
    color?: string;
    id?: string;
    text?: string;
  };
}> = ({ heroheaderMenu }) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href={heroheaderMenu?.href ?? "#"}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          color: heroheaderMenu?.color ?? "",
        }}
        id={heroheaderMenu?.id ?? ""}
      >
        {heroheaderMenu?.text || ""}
      </a>
    </li>
  );
};

export const TextContainer: React.FC<{
  classNames: string;
  textItem: {
    color?: string;
    id?: string;
    text?: string;
  };
}> = ({ classNames, textItem }) => {
  return (
    <div
      className={classNames ?? ""}
      style={{
        color: textItem?.color ?? "",
      }}
      id={textItem?.id ?? ""}
    >
      {textItem?.text || ""}
    </div>
  );
};
