import { CarbonLocationIcon } from "@/components/atoms/Icons";

type ContactBoxProps = {
  value: string;
  label: string;
};

export const ContactBox = ({ label, value }: ContactBoxProps) => {
  return (
    <div className="bg-lightBlue bg-opacity-40  p-6 rounded shadow border border-boxBorder">
      <div className="flex mb-3 gap-2 text-center">
        <CarbonLocationIcon />
        <p className="text-sm">{label}</p>
      </div>
      <p className="font-semibold text-sm">{value}</p>
    </div>
  );
};
