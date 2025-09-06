/* eslint-disable @next/next/no-img-element */
import { Button } from "../Button";

interface NavItem {
  id?: string;
  text?: string;
  color?: string;
  iconClass?: string;
  iconColor?: string;
  render?: boolean;
  active?: boolean;
}

interface NavbarProps {
  logoImage?: {
    id?: string;
    img_src?: string;
    render?: boolean;
  };
  logoTitle?: {
    id?: string;
    text?: string;
    color?: string;
    render?: boolean;
  };
  menuItems?: NavItem[];
  loginButton?: {
    id?: string;
    text?: string;
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
    render?: boolean;
  };
  signupButton?: {
    id?: string;
    text?: string;
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
    borderRadius?: string;
    render?: boolean;
  };
  className?: string;
}

export function Navbar({
  logoImage,
  logoTitle,
  menuItems,
  loginButton,
  signupButton,
  className = "",
}: NavbarProps) {
  const validMenuItems =
    menuItems?.filter((item) => item.render !== false) || [];

  return (
    <nav className={`navbar navbar-expand-lg bg-white ${className}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          {logoImage?.render && (
            <img
              alt="Logo"
              className="img-fluid me-3"
              width="40"
              height="40"
              id={logoImage.id}
              src={logoImage.img_src || ""}
            />
          )}
          {logoTitle?.render && (
            <span
              className="fw-medium"
              style={{ color: logoTitle.color }}
              id={logoTitle.id}
            >
              {logoTitle.text}
            </span>
          )}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarGetintouchContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarGetintouchContent">
          {validMenuItems.length > 0 && (
            <ul className="navbar-nav mb-lg-0 me-auto mb-2">
              {validMenuItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    className={`nav-link ${item.active ? "active" : ""} ${index > 0 ? "ms-3" : ""}`}
                    href="#"
                    style={{ color: item.color }}
                    id={item.id}
                  >
                    {item.text}
                    {item.iconClass && (
                      <i
                        className={`ms-1 ${item.iconClass}`}
                        style={{ color: item.iconColor }}
                      ></i>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="d-flex">
            {loginButton?.render && (
              <Button
                id={loginButton.id}
                text={loginButton.text || ""}
                color={loginButton.color}
                borderColor={loginButton.borderColor}
                backgroundColor={loginButton.backgroundColor}
                className="btn-outline-secondary me-2"
                type="button"
              />
            )}
            {signupButton?.render && (
              <Button
                id={signupButton.id}
                text={signupButton.text || ""}
                color={signupButton.color}
                borderColor={signupButton.borderColor}
                backgroundColor={signupButton.backgroundColor}
                borderRadius={signupButton.borderRadius}
                className="btn-primary"
                type="button"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
