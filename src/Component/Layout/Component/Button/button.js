import style from "./Button.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
function Button({
  children,
  small,
  normal,
  headerDes,
  colorWhite,
  backgrWhite,
  hover,
  onClick,
  login,
}) {
  const classe = cx("button", {
    classNames: classNames,
    normal,
    small,
    headerDes,
    colorWhite,
    backgrWhite,
    hover,
    login,
  });
  const props = {
    onClick,
  };
  return (
    <button className={classe} {...props}>
      <div className={cx("children")}>{children}</div>
    </button>
  );
}

export default Button;
