import wsaLogo from "../assets/images/wsa-logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={wsaLogo} alt="wsa logo" width={183} height={63} />
      <p className="header-text">WEATHER</p>
    </div>
  );
}
