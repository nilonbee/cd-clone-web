import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import GMap from "@/components/molecules/Maps";
import convertArrayToObjectArray from "@/utils/convertArray";

import { SingleEventBox } from "@/components/molecules";
import { IDateLocation, IEvent, IMapLocation } from "@/types/events";
import { getEventBySlug } from "@/utils/api-requests";
import { rootImagePath } from "@/utils/rootImagePath";

const SingleEventPage = async ({ params }: any) => {
  const response = await getEventBySlug(params.singleEvent);
  console.log("res", response);
  const {
    title,
    description,
    cover_url,
    map_locations,
    dates_n_locations,
    meta_description,
    meta_title,
    meta_keywords,
  } = response?.event as IEvent;
  const mapDetails: IMapLocation[] = convertArrayToObjectArray(map_locations);
  const dates: IDateLocation[] = convertArrayToObjectArray(dates_n_locations);

  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="my-12">
          <SectionHeader title={meta_title} description={meta_description} />
        </div>
        <InnerContainer>
          <SingleEventBox
            title={title}
            subtitle={meta_description}
            image={rootImagePath(cover_url as string)}
            dates={dates}
            mapDetails={mapDetails}
            description={description}
          />
          <div className="my-12">
            <SectionHeader
              title={map_locations[0].location_name}
              description={meta_keywords}
            />
          </div>
          <div className="p-4 mx-auto my-12 bg-lightBlue bg-opacity-40 rounded-md border border-boxBorder">
            <GMap mapData={mapDetails} />
          </div>
        </InnerContainer>
      </ContainerLayout>
    </>
  );
};

export default SingleEventPage;
