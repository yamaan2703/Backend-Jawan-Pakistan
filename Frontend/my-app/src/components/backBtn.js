export default function BackBtn(props) {
    const { label, onClick } = props;
  return (
    <>
      <button className="my-1 p-3 text-center rounded-lg bg-sky-600 font-bold text-white outline-none w-[300px]"
      onClick={onClick}>
        {label}
      </button>
    </>
  );
}