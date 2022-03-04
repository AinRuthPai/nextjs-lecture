import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <img src='/vercel.svg' />
      <div>
        <Link href='/'>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href='/about'>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
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
