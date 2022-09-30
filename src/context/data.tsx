import React, { createContext, useContext, useState } from 'react';
import formatObjectByFieldToArray from '../helpers/formatObjectByFieldToArray';
import methodologicalOpinionsData from '../data/methodological_opinions.json';
import referencesData from '../data/references.json';
import detailedReferencesData from '../data/detailed_references.json';

const methodologies = formatObjectByFieldToArray(
  methodologicalOpinionsData,
  'Heading'
);
const references = formatObjectByFieldToArray(referencesData, 'Heading');
const detailedReferences = formatObjectByFieldToArray(
  detailedReferencesData,
  'Reference'
);

interface IData {
  methodologies: typeof methodologies;
  references: typeof references;
  detailedReferences: typeof detailedReferences;
}

export interface IDataContext {
  searchTerm: string;
  suggestedSearch: string;
  suggestTermHandler: (accept?: boolean) => void;
  onSearch: () => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  data: null | IData;
  activeTab: TabEnum;
  setActiveTab: React.Dispatch<React.SetStateAction<TabEnum>>;
}

export enum TabEnum {
  'References',
  'Methodology',
  'CodeNotebook',
  'Data',
}

const DataContext = createContext<Partial<IDataContext>>({});

export const DataContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestedSearch, setSuggestedSearch] = useState('');
  const [data, setData] = useState<null | IData>(null);
  const [activeTab, setActiveTab] = useState(TabEnum.Methodology);

  const suggestTermHandler = (accept = false) => {
    if (accept) {
      setSearchTerm(suggestedSearch);
    }
    setSuggestedSearch('');
  };

  const onSearch = () => {
    setSuggestedSearch('Corporate PD model calibration');

    setData({ methodologies, references, detailedReferences });
  };

  return (
    <DataContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        suggestedSearch,
        suggestTermHandler,
        onSearch,
        data,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
