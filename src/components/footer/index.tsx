import "./footer.css";
import {
  HouseHeart,
  Person,
  FileText,
  JournalText,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Vishesh M</h3>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Vishesh M</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
