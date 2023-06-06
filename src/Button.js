const Button = ({ value, onClickCustom }) => {
  return (
    <button className="playbtn " onClick={onClickCustom}>
      {value}
    </button>
  );
};
export default Button;
