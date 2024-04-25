'use client';
import { useIpStore } from '@/store/useIpStore';
import { contactInfo } from "@/mockData/contact"
import { ContactBox } from "@/components/molecules";
import { IListItem } from '@/types/contactUs';

export const ContactInfoSection = () => {
    const { countryCode } = useIpStore();

    let country: IListItem[] = [];
    switch (countryCode) {
        case "AE":
            country = contactInfo.dubai.listItems;
            break;
        case "LK":
            country = contactInfo.colombo.listItems;
            break;
        default:
            country = contactInfo.colombo.listItems
    }
    console.log('countryCode', countryCode);
    return (
        <div className="w-full mt-10 lg:px-20 md:px-0">
            <div className="grid grid-cols-3 gap-4">
                {country.map((item: IListItem, index: number) => (
                    <ContactBox key={index} label={item.label} value={item.value} icon={item.icon} />
                ))}
            </div>
        </div>
    )
}
