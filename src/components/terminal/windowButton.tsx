
interface WindowButtonProps{
    color: string;
}


const WindowButton = ({color}: WindowButtonProps) => {
  return (
    <div
      style={{
        height: "10px",
        width: "10px",
        borderRadius: "50%",
        backgroundColor: color,
      }}
    ></div>
  );
};

export default WindowButton;