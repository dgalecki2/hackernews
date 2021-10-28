import "./Button.scss";

const Button = ({ onClick = () => null, text }) => {
  return (
    <button className="button__button" onClick={onClick}>
      <span className="button__text">{text}</span>
    </button>
  );
};

export default Button;
