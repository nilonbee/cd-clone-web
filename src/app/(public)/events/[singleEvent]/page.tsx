import GMap from "@/components/molecules/Maps";
import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import axiosInstance from "@/utils/axiosInstance";
import convertArrayToObjectArray from "@/utils/convertArray";

import { SingleEventBox } from "@/components/molecules";
import {
  IEvent,
  ISingleEventResponse,
  IMapLocation,
  IDateLocation,
} from "@/types/events";

const SingleEventPage = async ({ params }: any) => {
  const response = await axiosInstance.get<ISingleEventResponse>(
    `/v1/user/event-contents/${params.singleEvent}`,
  );
  const event: IEvent = response.data.data.event;
  const {
    title,
    description,
    cover_url,
    map_locations,
    dates_n_locations,
    meta_description,
  } = event;
  const mapDetails: IMapLocation[] = convertArrayToObjectArray(map_locations);
  const dates: IDateLocation[] = convertArrayToObjectArray(dates_n_locations);

  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="my-12">
          <SectionHeader
            title="Canada Application Week"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          architecto placeat non"
          />
        </div>
        <InnerContainer>
          <SingleEventBox
            title={title}
            subtitle={meta_description}
            image={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/${cover_url}`}
            dates={dates}
            mapDetails={mapDetails}
            description={description}
          />
          <div className="my-12">
            <SectionHeader
              title="Location Map"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          architecto placeat non"
            />
          </div>
          <div className="p-4 mx-auto my-12 bg-lightBlue bg-opacity-40 rounded shadow">
            <GMap mapData={mapDetails} />
          </div>
        </InnerContainer>
      </ContainerLayout>
    </>
  );
};

export default SingleEventPage;
