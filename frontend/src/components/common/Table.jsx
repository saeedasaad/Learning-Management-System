function Table({ columns, data, renderActions }) {
  return (
    <div className="w-full">
      {/* Desktop / Tablet view */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="border border-gray-300 px-4 py-2 text-left capitalize whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
              {renderActions && (
                <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data?.map((row) => (
              <tr key={row._id} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td
                    key={col}
                    className="border border-gray-300 px-4 py-2 truncate"
                  >
                    {row[col]}
                  </td>
                ))}
                {renderActions && (
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex flex-wrap gap-2">
                      {renderActions(row)}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden space-y-4">
        {data?.map((row) => (
          <div
            key={row._id}
            className="border border-gray-300 rounded-md p-3 shadow-sm bg-white"
          >
            {columns.map((col) => (
              <div key={col} className="flex justify-between py-1">
                <span className="font-semibold capitalize">{col}:</span>
                <span className="truncate">{row[col]}</span>
              </div>
            ))}
            {renderActions && (
              <div className="mt-2 flex flex-wrap gap-2">
                {renderActions(row)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
