interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto px-6 lg:px-12 max-w-screen-3xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;
