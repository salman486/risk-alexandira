import { BsSearch } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import FaceFrownIcon from './icons/face-frown';
import FaceHappyIcon from './icons/face-happy';

function App() {
  return (
    <div className="container pb-20">
      <header className="flex flex-col justify-between space-y-3 pt-2 md:flex-row md:items-end md:space-y-0">
        <div className="flex items-end space-x-5">
          <img className="w-6" src="/imgs/logo.png" alt="logo" />
          <h4 className="text-2xl font-bold leading-6 text-gray-700">
            Risk Alexandria
          </h4>
        </div>

        <div className="flex items-center space-x-4">
          <p className="font-medium text-gray-500">
            Did you find what you were looking for?
          </p>
          <div className="flex items-center space-x-1.5">
            <button type="button">
              <FaceHappyIcon className="w-6 text-[rgb(168,168,168)]" />
            </button>
            <button type="button">
              <img
                className="w-6"
                src="/imgs/winking-face-emoji.png"
                alt="winking face emoji"
              />
            </button>
            <button type="button">
              <FaceFrownIcon className="w-6 text-[rgb(168,168,168)]" />
            </button>
          </div>
        </div>
      </header>

      <div className="mt-5 space-y-5 bg-gray-100 p-5">
        <div className="relative">
          <BsSearch className="absolute top-1/2 left-4 w-5 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="w-full p-2 pl-11"
            placeholder="Search..."
          />
          <div className="absolute right-2 top-1/2 flex -translate-y-1/2 space-x-2">
            <button type="button">
              <GrFormClose className="h-7 w-7 font-bold every-child:stroke-cyan-500 every-child:stroke-[3px]" />
            </button>
            <button type="button">
              <AiOutlineSetting className="h-6 w-6 text-cyan-500" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 lg:gap-5">
          <select name="risk" className="flex-1 py-2 px-3">
            <option disabled selected>
              Select Risk Category
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <select name="risk" className="flex-1 py-2 px-3">
            <option disabled selected>
              Select Topic
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <button className="flex-1 rounded bg-gray-900 py-2 px-14 text-lg font-medium text-white md:flex-grow-0">
            Search
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-3 lg:gap-5">
        <div className="flex flex-1 items-center justify-between space-x-2 rounded bg-blue-300/40 py-2 px-5">
          <span className="text-blue-700">Methodology</span>
          <span className="rounded bg-gray-900 py-1 px-2 font-medium text-white">
            14
          </span>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 whitespace-nowrap rounded bg-blue-300/40 py-2 px-5">
          <span className="text-gray-700">Code and notebooks</span>
          <span className="rounded bg-gray-900 py-1 px-2 font-medium text-white">
            14
          </span>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 whitespace-nowrap rounded bg-blue-300/40 py-2 px-5">
          <span className="text-gray-700">Regulatory References</span>
          <span className="rounded bg-gray-900 py-1 px-2 font-medium text-white">
            14
          </span>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 whitespace-nowrap rounded bg-blue-300/40 py-2 px-5">
          <span className="text-gray-700">Data</span>
          <span className="rounded bg-gray-900 py-1 px-2 font-medium text-white">
            14
          </span>
        </div>
      </div>

      <div className="relative mt-8 flex flex-col justify-between space-y-2 rounded-lg border border-gray-300 p-2 pl-5 md:flex-row md:items-center md:space-y-0">
        <span className="absolute top-0 left-3 -translate-y-1/2 bg-white px-2 text-sm font-medium text-gray-500">
          Input Interpretation
        </span>
        <p className="text-sm text-gray-700">
          Showing result for: Corporate PD model{' '}
          <span className="font-medium">calibration</span>
        </p>
        <div className="flex items-center space-x-3">
          <button className="rounded-lg bg-gray-200 px-5 py-1.5">Accept</button>
          <button className="rounded-lg bg-gray-200 px-5 py-1.5">Reject</button>
        </div>
      </div>

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
          <div>
            <h2 className="font-medium text-sky-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>
            <p className="mt-1.5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              assumenda aperiam nesciunt officiis dolor quae ad! Voluptate
              consequatur, quam totam maiores obcaecati impedit et repellendus
              laborum vero eum, nisi sit. Impedit eos tempora voluptas placeat
              consectetur similique provident? Quia numquam ipsam modi mollitia
              at quasi delectus quae alias quaerat culpa?
            </p>

            <div className="mt-2 flex items-center space-x-1 text-sm italic">
              <span className="text-gray-500">Open Article:</span>
              <a href="https://facebook.com" className="text-violet-500">
                https://facebook.com
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-medium text-sky-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>
            <p className="mt-1.5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              assumenda aperiam nesciunt officiis dolor quae ad! Voluptate
              consequatur, quam totam maiores obcaecati impedit et repellendus
              laborum vero eum, nisi sit. Impedit eos tempora voluptas placeat
              consectetur similique provident? Quia numquam ipsam modi mollitia
              at quasi delectus quae alias quaerat culpa?
            </p>

            <div className="mt-2 flex items-center space-x-1 text-sm italic">
              <span className="text-gray-500">Open Article:</span>
              <a href="https://facebook.com" className="text-violet-500">
                https://facebook.com
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-medium text-sky-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>
            <p className="mt-1.5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              assumenda aperiam nesciunt officiis dolor quae ad! Voluptate
              consequatur, quam totam maiores obcaecati impedit et repellendus
              laborum vero eum, nisi sit. Impedit eos tempora voluptas placeat
              consectetur similique provident? Quia numquam ipsam modi mollitia
              at quasi delectus quae alias quaerat culpa?
            </p>

            <div className="mt-2 flex items-center space-x-1 text-sm italic">
              <span className="text-gray-500">Open Article:</span>
              <a href="https://facebook.com" className="text-violet-500">
                https://facebook.com
              </a>
            </div>
          </div>
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

        <div className="mt-7 flex items-center justify-center divide-x-[1px] divide-blue-600 text-sm text-blue-600">
          <div className="px-4 lg:px-14">
            <a href="/#">Home</a>
          </div>
          <div className="px-4 lg:px-14">
            <a href="/#">Contact</a>
          </div>
          <div className="px-4 lg:px-14">
            <a href="/#">Privacy</a>
          </div>
          <div className="px-4 lg:px-14">
            <a href="/#">Terms of use</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
