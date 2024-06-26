import Link from "next/link";
import "./styles/Navbar.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginBtn from "../components/LoginBtn";
import LogOutBtn from "../components/LogOutBtn";
import { MdAccountCircle } from "react-icons/md";

export default async function Navbar() {
  let session = await getServerSession(authOptions);

  return (
    <div className="Navbar">
      <header className="navbar-container">
        <Link href="/" className="logo-img">
          <img src="/ScriptPartyLogo.svg" />
        </Link>
        <div className="menu-items">
          <Link href="/community">
            <p>커뮤니티</p>
          </Link>
          {session ? (
            <>
              <Link href="/write">
                <p>작성하기</p>
              </Link>
              <Link href="/mylist">
                <p>활동내역</p>
              </Link>
            </>
          ) : null}
          <div className="menu-line"></div>
          <Link href="/">
            <p>이벤트</p>
          </Link>
          <Link href="/">
            <p>공지</p>
          </Link>
        </div>
        <div className="login-section">
          {session ? (
            <>
              <img
                className="profile"
                src={`${session.user.image}`}
                alt="프로필"
              />
              <LogOutBtn />
            </>
          ) : (
            <>
              {/* <img
                className="profile"
                src="/noprofile.svg"
                alt="프로필적용안됨"
              /> */}
              <LoginBtn />
              <Link href="/signup" className="__register-btn__">
                <p>
                  회원가입
                  <MdAccountCircle size={20} className="__IoLogInOutline__" />
                </p>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
}
