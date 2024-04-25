import { IListItem } from "@/types/contactUs";

export const ContactBox = ({ label, value, icon }: IListItem) => {

  return (
    <div className="bg-lightBlue bg-opacity-40  p-6 rounded shadow border border-boxBorder">
      <div className="flex mb-3 gap-2 text-center">
        {icon}
        <p className="text-sm">{label}</p>
      </div>
      <p className="font-semibold text-sm">{value}</p>
    </div>
  );
};
