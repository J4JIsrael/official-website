const styles = {
  headerBg: {
    background:
      'linear-gradient(154deg, rgba(0, 255, 157, 0.2) -92.79%, rgba(213, 93, 255, 0.1) 218.33%)',
  },
  bodyBg: {
    background:
      'linear-gradient(324.86deg, rgba(0, 255, 157, 0.1) -107.86%, rgba(213, 93, 255, 0.2) 176.56%);',
  },
};

interface CardProps {
  title: string;
  content: string;
}

export const Card = ({ title, content }: CardProps) => {
  return (
    <>
      <div>
        <div
          style={styles.bodyBg}
          className="relative mt-8  flex 
h-[137.54px] w-[342.75px] items-center justify-center rounded-md  bg-white text-center "
        >
          <p className="text-white">{content}</p>
          <div
            style={styles.headerBg}
            className="absolute left-[50%] top-0 flex  h-[52.5px] w-[267.73px] translate-x-[-50%] translate-y-[-50%] transform items-center justify-center rounded-md  text-center  "
          >
            <h6>{title}</h6>
          </div>
        </div>
      </div>
    </>
  );
};
