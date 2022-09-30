import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
        <div>
          <h2 className="font-semibold text-sky-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h2>
          <p className="mt-1.5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            assumenda aperiam nesciunt officiis dolor quae ad! Voluptate
            consequatur, quam totam maiores obcaecati impedit et repellendus
            laborum vero eum, nisi sit. Impedit eos tempora voluptas placeat
            consectetur similique provident? Quia numquam ipsam modi mollitia at
            quasi delectus quae alias quaerat culpa?
          </p>

          <div className="mt-2 flex items-center space-x-1 text-sm italic">
            <span className="text-gray-500">Open Article:</span>
            <a href="https://facebook.com" className="text-violet-500">
              https://facebook.com
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-sky-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h2>
          <p className="mt-1.5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            assumenda aperiam nesciunt officiis dolor quae ad! Voluptate
            consequatur, quam totam maiores obcaecati impedit et repellendus
            laborum vero eum, nisi sit. Impedit eos tempora voluptas placeat
            consectetur similique provident? Quia numquam ipsam modi mollitia at
            quasi delectus quae alias quaerat culpa?
          </p>

          <div className="mt-2 flex items-center space-x-1 text-sm italic">
            <span className="text-gray-500">Open Article:</span>
            <a href="https://facebook.com" className="text-violet-500">
              https://facebook.com
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-sky-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h2>
          <p className="mt-1.5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            assumenda aperiam nesciunt officiis dolor quae ad! Voluptate
            consequatur, quam totam maiores obcaecati impedit et repellendus
            laborum vero eum, nisi sit. Impedit eos tempora voluptas placeat
            consectetur similique provident? Quia numquam ipsam modi mollitia at
            quasi delectus quae alias quaerat culpa?
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
    </div>
  );
};

export default Methodology;
