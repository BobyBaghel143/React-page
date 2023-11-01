
function Column({ month, background, height }) {
  return (
    <div className="text-center month">
      <div className={` w-[2.3rem] bg-gray-300 rounded-md ${background}  ${height} column`}></div>
      {month}
    </div>
  );
}

export default Column;
