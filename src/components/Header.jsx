import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#logo" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
  )
}
