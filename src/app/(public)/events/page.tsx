import {
  ContainerLayout,
  Hero,
  InnerContainer,
  SectionHeader,
} from "@/components/atoms";
import { EventBox, GridWrapper } from "@/components/molecules/";
import { InterestedSection } from "@/components/organisms";
import { IEvent } from "@/types/events";
import { getEvents } from "@/utils/api-requests";

const EventsPage = async () => {
  const events = await getEvents();
  return (
    <>
      <Hero />
      <ContainerLayout>
        <div className="my-12">
          <SectionHeader
            title="Events"
            description="Providing you with information and opportunities."
          />
        </div>
        <InnerContainer>
          <div className="mb-12">
            <GridWrapper>
              {events?.map((item: IEvent) => (
                <EventBox
                  key={item.id}
                  title={item.title}
                  image={item.cover_url}
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
