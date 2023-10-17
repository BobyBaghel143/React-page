function Column({month, background, height}) {
  return (
    <div className="text-center">
      <div className={` w-[2.5rem] bg-gray-300 rounded-md ${background}  ${height} `}></div>
      {month}
    </div>
  );
}

export default Column;
