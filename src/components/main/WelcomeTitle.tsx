import Image from 'next/image';

export const WelcomeTitle = () => {
  return (
    <div>
      <h1>
        <span className="block text-4xl xs:text-center sm:m-auto sm:w-fit sm:text-center md:text-center lg:w-full lg:text-start">
          ברוכים הבאים לקהילת
        </span>
        <br />
        <span className="block text-5xl font-black xs:hidden xs:text-center sm:hidden sm:text-center md:hidden md:text-start lg:block lg:text-start">
          Juniors for Juniors
        </span>
      </h1>
      <div className="w-fit xs:m-auto sm:m-auto md:m-auto lg:hidden">
        <Image src="/assets/logo.png" width="246" height="59" alt="J4J Logo" />
      </div>
    </div>
  );
};
