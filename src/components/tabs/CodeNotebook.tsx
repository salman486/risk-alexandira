import { useEffect, useState } from 'react';
import cn from 'classnames';
import readGithubFile from '../../helpers/readGithubFile';
import CodeRenderer from '../CodeRenderer';

enum LanguageCodeEnum {
  'Python',
  'R',
  'Matlab',
}

const tabs = [
  {
    name: 'Python',
    id: LanguageCodeEnum.Python,
  },
  {
    name: 'R',
    id: LanguageCodeEnum.R,
  },
  {
    name: 'Matlab',
    id: LanguageCodeEnum.Matlab,
  },
];
const options = [
  '/at621/meliora/blob/main/meliora/Accuracy_Ratio.py',
  '/at621/meliora/blob/main/meliora/Bayesian_Error_Rate.py',
  '/at621/meliora/blob/main/meliora/Binomial_test.py',
  '/at621/meliora/blob/main/meliora/Loss_Capture_Ratio.py',
  '/at621/meliora/blob/main/meliora/Somers_D.py',
];

const CodeNotebook = () => {
  const [activeMethodologyTab, setActiveMethodologyTab] = useState(
    LanguageCodeEnum.Python
  );
  const [fileUrl, setFileUrl] = useState(options[0]);
  const [fileText, setFileText] = useState('');
  const [loadingFile, setLoadingFile] = useState(false);

  useEffect(() => {
    setLoadingFile(true);

    readGithubFile(fileUrl).then(text => {
      setFileText(text);
      setLoadingFile(false);
    });
  }, [setFileText, fileUrl]);

  return (
    <div className="mt-8">
      <div className="relative flex items-start justify-between overflow-auto pb-3 font-medium text-gray-500">
        {/* bottom border line */}
        <span className="absolute bottom-3 z-[-4] h-0.5 w-full bg-gray-200"></span>

        <div className="flex">
          {tabs.map(({ name, id }) => (
            <button
              key={id}
              onClick={() => setActiveMethodologyTab(id)}
              className={cn(
                'mx-3 min-w-[100px] cursor-pointer border-b-2 px-2 pb-1.5',
                activeMethodologyTab === id
                  ? 'border-red-400'
                  : 'border-transparent'
              )}
            >
              {name}
            </button>
          ))}
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
          {options.map((url, i) => (
            <button
              key={url}
              className={cn(
                'whitespace-nowrap',
                fileUrl === url ? 'text-gray-300' : 'text-gray-700'
              )}
              onClick={() => setFileUrl(url)}
            >
              Option {i + 1}
            </button>
          ))}
        </div>
        <div className="mt-4 md:mt-0">
          <p className="max-w-[700px] font-medium text-gray-400">
            This option leads to Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Cumque, saepe? adipisicing elit. Cumque, saepe?
          </p>

          <div className="mt-5">
            {fileText && <CodeRenderer codeString={fileText} />}
            {loadingFile && <span>Loading file...</span>}
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
