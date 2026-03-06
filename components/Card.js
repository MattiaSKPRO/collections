export default function Card() {
  return (
    <>
      <div className="border border-[#B4C1C6] rounded-2xl w-70 shadow-lg  mx-auto justify-items-center flex flex-col md:flex-row md:w-120">
        <div>
          <img
            src="images/maestro.jpeg"
            alt=""
            className=" w-full object-fill rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-none transform hover:scale-105 hover:rounded-xl duration-200  "
          />
        </div>
        <div className="p-4">
            <h2 className="text-2xl font-bold">prova</h2>
            <p>ciao a tutti, mi chiamo mario </p>
        </div>
      </div>
    </>
  );
}
