const styles = {
  headerBg: {
    background: 'linear-gradient(0deg, #1D3742 0%, #1b0a3f 158.33%)',
    boxShadow: '0px 1px 64px rgba(0, 0, 0, 0.39)',
    backdropFilter: 'blur(23px)',
    borderRadius: '22px',
  },
  bodyBg: {
    background:
      'linear-gradient(324.86deg, rgba(0, 255, 157, 0.1) -107.86%, rgba(61, 208, 185, 0.128819) -51.57%, rgba(92, 185, 199, 0.143229) -23.42%, rgba(98, 180, 202, 0.146173) -13.05%, rgba(150, 141, 226, 0.170563) 72.87%, rgba(213, 93, 255, 0.2) 176.56%)',
    opacity: '0.7',
    boxShadow: '0px 1px 64px rgba(0, 0, 0, 0.39)',
  },
};

interface CardProps {
  title: string;
  content: string;
}

export const Card = ({ title, content }: CardProps) => {
  return (
    <div>
      <div
        style={styles.bodyBg}
        className="relative mt-8 flex h-[137.54px] 
w-[342.75px] items-center justify-center rounded-md bg-white  p-2 text-center "
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
  );
};
