import { BsSearch } from 'react-icons/bs';
import cn from 'classnames';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineSetting } from 'react-icons/ai';
import FaceFrownIcon from './icons/face-frown';
import FaceHappyIcon from './icons/face-happy';
import Methodology from './components/tabs/Methodology';
import FooterNav from './components/FooterNav';
import References from './components/tabs/References';
import CodeNotebook from './components/tabs/CodeNotebook';
import Data from './components/tabs/Data';
import { useState } from 'react';

enum TabEnum {
  'References',
  'Methodology',
  'CodeNotebook',
  'Data',
}

function App() {
  const [activeTab, setActiveTab] = useState(TabEnum.Methodology);

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
            <option value="risk quantification">risk quantification</option>
            <option value="risk calibration">risk calibration</option>
            <option value="Corporate PD">Corporate PD</option>
            <option value="Corporate LGD">Corporate LGD</option>
            <option value="Margin of Conservatism">
              Margin of Conservatism
            </option>
          </select>
          <select name="risk" className="flex-1 py-2 px-3">
            <option disabled selected>
              Select Topic
            </option>
            <option value="methodology">methodology</option>
            <option value="coding">coding</option>
            <option value="benchmarking">benchmarking</option>
            <option value="data">data</option>
          </select>
          <button className="flex-1 rounded bg-gray-900 py-2 px-14 text-lg font-medium text-white md:flex-grow-0">
            Search
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-3 lg:gap-5">
        <button
          onClick={() => setActiveTab(TabEnum.Methodology)}
          className="flex flex-1 items-center justify-between space-x-2 rounded bg-blue-300/40 py-2 px-5"
        >
          <span
            className={cn(
              activeTab === TabEnum.Methodology
                ? 'text-blue-700'
                : 'text-gray-700'
            )}
          >
            Methodology
          </span>
          <span className="rounded bg-gray-900 py-1 px-2 font-medium text-white">
            14
          </span>
        </button>
        <button
          onClick={() => setActiveTab(TabEnum.CodeNotebook)}
          className="flex flex-1 items-center justify-between space-x-2 whitespace-nowrap rounded bg-blue-300/40 py-2 px-5"
        >
          <span
            className={cn(
              activeTab === TabEnum.CodeNotebook
                ? 'text-blue-700'
                : 'text-gray-700'
            )}
          >
            Code and notebooks
          </span>
          <span className="rounded bg-gray-900 py-1 px-2 font-medium text-white">
            14
          </span>
        </button>
        <button
          onClick={() => setActiveTab(TabEnum.References)}
          className="flex flex-1 items-center justify-between space-x-2 whitespace-nowrap rounded bg-blue-300/40 py-2 px-5"
        >
          <span
            className={cn(
              activeTab === TabEnum.References
                ? 'text-blue-700'
                : 'text-gray-700'
            )}
          >
            Regulatory References
          </span>
          <span className="rounded bg-gray-900 py-1 px-2 font-medium text-white">
            14
          </span>
        </button>
        <button
          onClick={() => setActiveTab(TabEnum.Data)}
          className="flex flex-1 items-center justify-between space-x-2 whitespace-nowrap rounded bg-blue-300/40 py-2 px-5"
        >
          <span
            className={cn(
              activeTab === TabEnum.Data ? 'text-blue-700' : 'text-gray-700'
            )}
          >
            Data
          </span>
          <span className="rounded bg-gray-900 py-1 px-2 font-medium text-white">
            14
          </span>
        </button>
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
          <button className="rounded-lg bg-gray-200 px-5 py-1.5 text-gray-700">
            Accept
          </button>
          <button className="rounded-lg bg-gray-200 px-5 py-1.5 text-gray-700">
            Reject
          </button>
        </div>
      </div>

      {renderTab(activeTab)}

      <FooterNav />
    </div>
  );
}

export default App;

const renderTab = (tab: TabEnum) => {
  switch (tab) {
    case TabEnum.Methodology:
      return <Methodology />;
    case TabEnum.References:
      return <References />;
    case TabEnum.CodeNotebook:
      return <CodeNotebook />;
    case TabEnum.Data:
      return <Data />;
    default:
      return null;
  }
};
