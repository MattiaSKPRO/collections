export default function Iscrizione() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-zinc-700">
        <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
          <div className="flex flex-col md:flex-row rounded-l-xl">
            <img
              src=""
              alt=""
              className="object-fill rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-none transform hover:scale-105 hover:rounded-xl duration-200 "
              
            />
            <div className="p-6 md:p-12">
                <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
                    get diet and fitness tips in your inbox 
                </h2>
                <p className="max-w-xs my-4 txt-xs leading-5 tracking-wide text-center text-white md:text-left">
                    eat better and exercise better. Sign un for the diet&fitness newsletter
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
