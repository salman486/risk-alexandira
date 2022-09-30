import { useData } from '../../context/data';

const References = () => {
  const { data } = useData();

  return (
    <div className="mt-8 space-y-5">
      {data?.references.map((reference, i) => (
        <div key={i}>
          <h2 className="font-semibold italic text-sky-500">
            {reference.Heading}
          </h2>
          <p className="mt-1.5 text-gray-500">{reference.Text}</p>

          <div className="mt-2 flex items-center space-x-1 text-sm italic">
            <span className="text-gray-500">
              {reference['File reference'].split('\u00a0')[0]}
            </span>
            <a
              href={reference['File reference'].split('\u00a0')[1]}
              className="text-violet-500"
            >
              {reference['File reference'].split('\u00a0')[1]}
            </a>
          </div>
        </div>
      ))}

      <div>
        <h2 className="font-semibold italic text-sky-500">
          Detailed references
        </h2>

        <table className="mt-5 w-full border border-gray-900">
          <thead className="bg-blue-800 text-white ">
            <tr>
              <th className="border border-gray-900 px-2 py-1 text-center">
                #
              </th>

              <th className="border border-gray-900 px-5 py-1 text-center">
                Reference
              </th>
              <th className="border border-gray-900 px-10 py-1 text-center">
                Section
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.detailedReferences.map(({ Reference, Sections }, i) => (
              <tr key={i}>
                <td className="border border-gray-900 px-2 py-1 text-center">
                  {i + 1}
                </td>
                <td className="border border-gray-900 px-5 py-1 text-center text-gray-500">
                  {Reference}
                </td>

                <td className="border border-gray-900 px-10 py-1 text-center text-gray-500">
                  {Sections}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default References;
