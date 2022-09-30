import { useEffect, useState } from 'react';
import cn from 'classnames';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useData } from '../../context/data';
import ReactPaginate from 'react-paginate';

enum MethodologyEnum {
  'opinions',
  'benchmarking',
}

const tabs = [
  {
    name: 'Methodological opinions',
    id: MethodologyEnum.opinions,
  },
  {
    name: 'Regulatory benchmarking',
    id: MethodologyEnum.benchmarking,
  },
];

const itemsPerPage = 5;

const Methodology = () => {
  const [activeMethodologyTab, setActiveMethodologyTab] = useState(
    MethodologyEnum.opinions
  );
  const { data } = useData();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event: { selected: number }) => {
    if (!data?.methodologies) return;
    const newOffset =
      (event.selected * itemsPerPage) % data?.methodologies.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (!data?.methodologies) return;
    setPageCount(Math.ceil(data?.methodologies.length / itemsPerPage));
  }, [itemOffset, data]);

  return (
    <div className="mt-5 px-5 lg:px-8">
      <div className="relative flex font-medium text-gray-500">
        <span className="absolute bottom-0 z-[-4] h-0.5 w-full bg-gray-200"></span>
        {tabs.map(({ name, id }) => (
          <button
            key={id}
            onClick={() => setActiveMethodologyTab(id)}
            className={cn(
              'mx-3 cursor-pointer border-b-2 px-2 pb-1.5',
              activeMethodologyTab === id
                ? 'border-red-400'
                : 'border-transparent'
            )}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-5">
        {data?.methodologies
          .slice(itemOffset, itemOffset + itemsPerPage)
          .map(({ Heading, Link, Text }, i) => (
            <div key={i}>
              <h2 className="font-semibold text-sky-500">{Heading}</h2>
              <p className="mt-1.5 text-gray-500">{Text}</p>

              <div className="mt-2 flex items-center space-x-1 text-sm italic">
                <span className="text-gray-500">Open Article:</span>
                <a href={Link} className="cur text-violet-500">
                  {Link}
                </a>
              </div>
            </div>
          ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaChevronRight />}
        previousLabel={<FaChevronLeft />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={() => null}
        activeClassName="font-bold text-lg"
        className="mx-auto mt-5 flex max-w-md items-center justify-between rounded-md bg-gray-100 px-6 py-2 text-cyan-400 lg:px-10"
        disabledClassName="!text-gray-400 !cursor-not-allowed"
      />
    </div>
  );
};

export default Methodology;
