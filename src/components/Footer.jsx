import { business } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-bar">
        <address>
          {business.name}
          <span>
            {business.owners}, {business.street}, {business.postal}
          </span>
        </address>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
