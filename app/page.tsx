import 'bootstrap/dist/css/bootstrap.css'

export default function HomePage() {
  return (
    <div className='container'>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span className="fs-5 fw-bold">Leo (Shengdi) Wang</span>
        </a>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link border-end" href="#">Blog</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://github.com/leowang396/">Projects</a>
          </li>
        </ul>
    </header>
    <div></div>
    </div>
  )
}
