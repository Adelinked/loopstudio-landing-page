const Logo = ({ logoText, footer }) => {
  return (
    <div className={footer ? "logoContainerFooter" : "logoContainer"}>
      {logoText}
    </div>
  );
};
export default Logo;
