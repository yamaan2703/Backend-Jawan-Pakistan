export default function BackInp(props) {
    const { label, onChange, type, value, name } = props;
    return (
      <>
        <input
          className="my-2 p-3 text-center rounded-lg bg-sky-200 outline-none w-[300px]"
          placeholder={label}
          name={name}
          value={value}
          onChange={onChange}
          type={type ?? "text"}
        ></input>
      </>
    );
  }