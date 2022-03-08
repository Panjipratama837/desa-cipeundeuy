import { Link } from "react-router-dom";
import "./Icon.css";

function Icon() {
  return (
    <div class="icon d-flex justify-content-end">
      <Link to={"/"}>
        <i class="bi bi-link text-black"></i>
      </Link>
      <Link to={"/"}>
        <i class="bi bi-facebook text-primary"></i>
      </Link>
      <Link to={"/"}>
        <i class="bi bi-twitter text-info"></i>
      </Link>
      <Link to={"/"}>
        <i class="bi bi-whatsapp text-success"></i>
      </Link>
    </div>
  );
}

export default Icon;
