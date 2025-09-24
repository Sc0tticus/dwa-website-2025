import Link from 'next/link';
import styles from "src/app/resources/styles/resourcesPage.module.css";

export default function annual_reports_component() {
return (
    <div className={styles.annual_reports}>
        <h2>Annual Reports</h2>
        <Link href="src/app/reports/2024/page.js">
          <a>2024</a>
        </Link>
        <Link href="src/app/reports/2023/page.js">
          <a>2023</a>
        </Link>
        <Link href="src/app/reports/2022/page.js">
          <a>2022</a>
        </Link>
        <Link href="src/app/reports/2021/page.js">
          <a>2021</a>
        </Link>
        <Link href="src/app/reports/2020/page.js">
          <a className={styles.annual_reports_last_link}>2020</a>
        </Link>                   
    </div>
);
}
