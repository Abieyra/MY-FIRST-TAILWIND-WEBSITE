
import styles from "../about/about.module.css";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className={styles.container}>
        <h1>ABOUT</h1>
      <p className={styles.header}>This is about page</p>

      <ul>

<li><Link href="/"> GO TO Home PAGE</Link></li>
<li><Link href="contact"> GO TO Contact PAGE</Link></li>
<li><Link href="services">GO TO SERVICE PAGE</Link></li>

      </ul>


    </div>
  )
}

export default AboutPage;







