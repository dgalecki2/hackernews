import classnames from "clsx";
import "./Anchor.scss";

const Anchor = ({ children, noStyles = false, url }) => {
  const renderAnchorClassNames = () => {
    return classnames("anchor__anchor", {
      "anchor__anchor--noStyles": noStyles,
    });
  };

  return (
    <a
      className={renderAnchorClassNames()}
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Anchor;
