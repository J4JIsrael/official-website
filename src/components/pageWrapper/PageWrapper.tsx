export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto flex max-w-[1200px] flex-col justify-evenly gap-20">
      {children}
    </div>
  );
};
