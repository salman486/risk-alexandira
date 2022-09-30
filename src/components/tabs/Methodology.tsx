import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import formatObjectByFieldToArray from '../../helpers/formatObjectByFieldToArray';
import methodologicalOpinionsData from '../../data/methodological_opinions.json';

const methodologies = formatObjectByFieldToArray(
  methodologicalOpinionsData,
  'Heading'
);

const Methodology = () => {
  return (
    <div className="mt-5 px-5 lg:px-8">
      <div className="relative flex font-medium text-gray-500">
        <span className="absolute bottom-0 z-[-4] h-0.5 w-full bg-gray-200"></span>
        <button className="mx-3 cursor-pointer border-b-2 border-red-400 px-2 pb-1.5">
          Methodological opinions
        </button>
        <button className="mx-3 cursor-pointer border-b-2 border-transparent px-2 pb-1.5">
          Regulatory benchmarking
        </button>
      </div>

      <div className="mt-8 space-y-5">
        {methodologies.map(({ Heading, Link, Text }, i) => (
          <div key={i}>
            <h2 className="font-semibold text-sky-500">{Heading}</h2>
            <p className="mt-1.5 text-gray-500">{Text}</p>

            <div className="mt-2 flex items-center space-x-1 text-sm italic">
              <span className="text-gray-500">Open Article:</span>
              <a href={Link} className="text-violet-500">
                {Link}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-5 flex max-w-md items-center justify-between rounded-md bg-gray-100 px-6 py-2 text-cyan-400 lg:px-10">
        <FaChevronLeft />
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Methodology;
