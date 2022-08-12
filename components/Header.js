import styles from "../styles/Header.module.css";

export default function Header({ home }) {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold" styles="color: white">Meet@DALI</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4" styles="color: white">
          Meet our team @ DALI. Post tidbits about anything software related. Make friends ❤️.
        </p>
      </div>
    </div>
  );
}
