import { PeopleGraph } from './PeopleGraph';

// import { ReadMoreBtn } from './ReadMoreBtn';

export const Main = () => (
  <main className="relative mt-12 h-[600px]">
    <div className="relative h-full lg:flex lg:justify-between">
      <div className="translate-w-[-30%] absolute left-[0] top-0 z-0 h-full transform opacity-20 xs:w-[100vw] md:w-[calc(60%)] lg:-ml-32 lg:w-[calc(60%)] lg:opacity-100">
        <PeopleGraph />
      </div>
      <div className="z-10 mt-6 lg:w-1/2">
        <h1>
          <span className="block text-4xl xs:text-center sm:text-center md:text-start lg:text-start">
            ברוכים הבאים לקהילת
          </span>
          <br />
          <span className="mt-1 block text-6xl xs:text-center sm:text-center md:text-start lg:text-start">
            Juniors for Juniors
          </span>
        </h1>
        {/* <CircleShadowRight /> */}
        <p className="my-12 text-2xl xs:text-center sm:text-center md:text-start lg:text-start">
          קהילת Juniors for Juniors (או J4J) היא מקום שבו ג׳וניורים בתחומים
          שונים בהייטק יכולים לשתף פעולה אחד עם השני על ידי עזרה ותמיכה בנושאים
          שונים, כמו: כלים למציאת עבודה, קבוצות למידה במגוון תחומים והכנת
          פרויקטים משותפים.
        </p>
        {/* <ReadMoreBtn /> */}
      </div>
    </div>
  </main>
);

/* <main className="mt-12 h-[calc(100vh-80px)]"> */

// h-[732px] w-[816px]
