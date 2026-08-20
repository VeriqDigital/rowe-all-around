type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-(--container-width) px-5 sm:px-7 lg:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
