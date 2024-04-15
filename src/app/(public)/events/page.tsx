import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { EventBox, GridWrapper } from "@/components/molecules/";
import { InterestedSection } from "@/components/organisms";
import axiosInstance from "@/utils/axiosInstance";
import { IEvent, IEventResponse } from "@/types/events";

const EventsPage = async () => {
  const response =
    await axiosInstance.get<IEventResponse>("/v1/user/events/lk");
  const events = response.data.data;

  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="my-12">
          <SectionHeader
            title="Events"
            description="Campus Direct is passionate about empowering students"
          />
        </div>
        <InnerContainer>
          <div className="mb-12">
            <GridWrapper gap="6">
              {events?.map((item: IEvent) => (
                <EventBox
                  key={item.id}
                  title={item.title}
                  image={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/${item.cover_url}`}
                  slug={item.slug}
                />
              ))}
            </GridWrapper>
          </div>
        </InnerContainer>
      </ContainerLayout>
      <InterestedSection />
    </>
  );
};

export default EventsPage;
