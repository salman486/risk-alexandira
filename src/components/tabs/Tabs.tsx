import React from 'react';
import cn from 'classnames';
import { IDataContext, TabEnum, useData } from '../../context/data';

const Tabs = () => {
  const { activeTab, setActiveTab, data } = useData() as IDataContext;

  return (
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
          {data?.methodologies.length || 0}
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
            activeTab === TabEnum.References ? 'text-blue-700' : 'text-gray-700'
          )}
        >
          Regulatory References
        </span>
        <span className="rounded bg-gray-900 py-1 px-2 font-medium text-white">
          {data?.references.length || 0}
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
  );
};

export default Tabs;
