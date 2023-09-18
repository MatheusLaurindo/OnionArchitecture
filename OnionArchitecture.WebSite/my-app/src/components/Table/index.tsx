import { BookResponseListDto } from "../../dtos/bookDTO";

function Table({ columns, list }: ITable) {
  return (
    <div className="relative overflow-x-auto mt-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-zinc-100 uppercase bg-zinc-700">
          <tr>
            {columns.map((item, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item.id} className="bg-white border-b dark:bg-zinc-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4">{item.writer}</td>
                <td className="px-6 py-4">{item.insertDate.substring(0, 10)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

type ITable = {
  columns: string[];
  list: BookResponseListDto[];
};

export default Table;
