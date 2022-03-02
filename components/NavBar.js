import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href='/'>
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href='/about'>
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}

{
  /* CSS module을 이용한 두 가지 스타일 적용(NavBar.module.css) */
}
{
  /* <Link href='/'>
        <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>
      </Link>
      <Link href='/about'>
        <a className={[styles.link, router.pathname === "/about" ? styles.active : ""].join(" ")}>About</a>
      </Link> */
}

{
  /* css를 합쳐서 작성할 때 코드 */
}
{
  /* <Link href='/'>
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href='/about'>
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>About</a>
      </Link> */
}
