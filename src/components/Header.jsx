import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className="#1565c0 blue darken-3">
    <div class="nav-wrapper">
      <Link to="/" class="brand-logo">Logo</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
  )
}
