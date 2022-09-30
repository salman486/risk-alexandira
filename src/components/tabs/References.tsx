const References = () => {
  return (
    <div className="mt-8 space-y-5">
      <div>
        <h2 className="font-semibold italic text-sky-500">
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
          <span className="text-gray-500">Excel file:</span>
          <a href="https://facebook.com" className="text-violet-500">
            https://facebook.com
          </a>
        </div>
      </div>

      <div>
        <h2 className="font-semibold italic text-sky-500">
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
          <span className="text-gray-500">Excel file:</span>
          <a href="https://facebook.com" className="text-violet-500">
            https://facebook.com
          </a>
        </div>
      </div>
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
            <tr>
              <td className="border border-gray-900 px-2 py-1 text-center">
                1
              </td>
              <td className="border border-gray-900 px-5 py-1 text-center text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                voluptate obcaecati aliquid culpa assumenda sequi officiis quasi
                commodi!
              </td>

              <td className="border border-gray-900 px-10 py-1 text-center text-gray-500">
                Section 2.1
              </td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-2 py-1 text-center">
                2
              </td>
              <td className="border border-gray-900 px-5 py-1 text-center text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                voluptate obcaecati aliquid culpa assumenda sequi officiis quasi
                commodi!
              </td>

              <td className="border border-gray-900 px-10 py-1 text-center text-gray-500">
                Section 2.1
              </td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-2 py-1 text-center">
                -
              </td>
              <td className="border border-gray-900 px-5 py-1 text-center text-gray-500">
                -
              </td>

              <td className="border border-gray-900 px-10 py-1 text-center text-gray-500">
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default References;
