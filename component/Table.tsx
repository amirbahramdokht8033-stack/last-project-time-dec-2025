
import React from "react";


export interface Column<T> {
    header: string;
    accessor: keyof T;
}

export interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
}

function Table<T>({ columns, data }: TableProps<T>) {
    return (
        <div className="overflow-x-auto mt-25">
            <table className="min-w-full border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.header}
                                className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700"
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="odd:bg-white even:bg-gray-50 hover:bg-gray-200 transition"
                        >
                            {columns.map((col) => (
                                <td
                                    key={String(col.accessor)}
                                    className="px-4 py-2 border-b text-sm text-gray-700"
                                >
                                    {String(row[col.accessor])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
