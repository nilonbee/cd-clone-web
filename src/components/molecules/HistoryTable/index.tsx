"use client";
import { getApplicationStatusHistory } from "@/utils/auth-api-requests";
import moment from "moment";
import React, { useEffect, useState } from "react";

type Props = {
  selectedId: string;
};

export const HistoryTable = ({ selectedId }: Props) => {
  const [historyData, setHistoryData] = useState([]);
  const filterData = {
    page: 1,
    pageSize: 100,
    status: "all",
    id: selectedId,
  };

  useEffect(() => {
    getApplicationStatusHistory(filterData).then((data) => {
      setHistoryData(data?.data || []);
    });
    // eslint-disable-next-line
  }, [selectedId]);

  return (
    <div className="overflow-auto rounded-md border border-borderGray shadow-md">
      <table className="w-full border-collapse bg-white text-left text-sm text-textColor">
        <thead className="bg-grayLight">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-textColor text-xs"
            >
              Created Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-textColor text-xs"
            >
              Created By
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-textColor text-xs"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-textColor text-xs"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900 text-xs"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-borderGray border-t border-borderGray">
          {historyData.map((data: any) => (
            <tr key={data.id} className="hover:bg-grayLight">
              <td className="px-6 py-2">
                <div className="text-textColor text-xs">
                  {moment(data.created_at).format("DD/MM/YYYY HH:mm:ss")}
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="text-textColor text-xs">
                  {data.added_fname} {data.added_lname}
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="text-textColor text-xs">
                  {data.user_type_name}
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="text-textColor text-xs">{data.happen}</div>
              </td>
              <td className="px-6 py-2">
                <span
                  className={`bg-teal-500 text-white py-1 px-4 rounded-full text-xs shadow uppercase`}
                >
                  {data.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
