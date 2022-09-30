const CodeNotebook = () => {
  return (
    <div className="mt-8">
      <div className="relative flex items-start justify-between overflow-auto pb-3 font-medium text-gray-500">
        {/* bottom border line */}
        <span className="absolute bottom-3 z-[-4] h-0.5 w-full bg-gray-200"></span>

        <div className="flex">
          <button className="mx-3 min-w-[100px] cursor-pointer border-b-2 border-red-400 px-2 pb-1.5">
            Python
          </button>
          <button className="mx-3 min-w-[100px] cursor-pointer border-b-2 border-transparent px-2 pb-1.5">
            R
          </button>
          <button className="mx-3 min-w-[100px] cursor-pointer border-b-2 border-transparent px-2 pb-1.5">
            Matlab
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <button className="min-w-[150px] rounded-lg bg-gray-200 px-5 py-0.5 text-sm text-gray-500">
            Copy
          </button>
          <button className="min-w-[150px] rounded-lg bg-gray-200 px-5 py-0.5 text-sm text-gray-500">
            Open notebook
          </button>
        </div>
      </div>

      <div className="mt-3 ml-5 flex flex-col md:flex-row md:space-x-8">
        <div className="flex flex-row space-x-5 md:flex-col md:space-x-0 md:space-y-3">
          <button className="whitespace-nowrap text-gray-700">Option 1</button>
          <button className="whitespace-nowrap text-gray-300">Option 2</button>
          <button className="whitespace-nowrap text-gray-700">Option 3</button>
          <button className="whitespace-nowrap text-gray-700">Option 4</button>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="max-w-[700px] font-medium text-gray-400">
            This option leads to Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Cumque, saepe? adipisicing elit. Cumque, saepe?
          </p>

          <div className="mt-5">
            <code></code>
            <p>FIle Here</p>
          </div>

          <div className="mt-2 flex items-center space-x-1 text-sm">
            <span className="text-gray-500">Reference:</span>
            <a href="https://facebook.com" className="text-violet-500">
              https://facebook.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeNotebook;
