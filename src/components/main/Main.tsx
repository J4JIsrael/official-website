import { Description } from './Description';
import { PeopleGraph } from './PeopleGraph';
import { WelcomeTitle } from './WelcomeTitle';

// import { ReadMoreBtn } from './ReadMoreBtn';

export const Main = () => (
  <main className="relative z-0 h-[600px]">
    <div className="relative h-full lg:flex lg:justify-between">
      <div className="translate-w-[-30%] absolute left-[0] h-full transform opacity-20 xs:-top-[200px] xs:-z-10 xs:w-[100vw] sm:-top-[200px] sm:-z-10 sm:w-[100vw] md:-top-[200px] md:-z-10 md:w-[100vw] lg:-top-[0] lg:-ml-32 lg:w-[calc(60%)] lg:opacity-100">
        <PeopleGraph />
      </div>
      <div className="mt-6 lg:w-1/2">
        <WelcomeTitle />

        {/* <CircleShadowRight /> */}
        <Description />
        {/* <ReadMoreBtn /> */}
      </div>
    </div>
  </main>
);

/* <main className="mt-12 h-[calc(100vh-80px)]"> */

// h-[732px] w-[816px]
