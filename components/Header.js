import styles from "../styles/Header.module.css";
import Link from 'next/link'

export default function Header({ home }) {
  const siteTitle = "@Dali"
  return (
    <div className="px-4 py-5 text-center">
      <h1 className="display-1 fw-bold text-light"><Link href="/"><a style={{color: "inherit"}}>{siteTitle}</a></Link></h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead text-nowrap text-center mb-1 text-light">
          Meet our team @ DALI. Post tidbits about anything software related. Make friends ❤️.
        </p>
      </div>
    </div>
  );
}
