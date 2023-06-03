import {
  CommunitySentence,
  GoalIcons,
  Main,
  OurActivitiesSection,
  PageWrapper,
} from '@j4j/components';

export default function Home() {
  return (
    <PageWrapper>
      <Main />
      <CommunitySentence />
      <GoalIcons />
      <OurActivitiesSection />
    </PageWrapper>
  );
}
