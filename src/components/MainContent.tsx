interface mainProps {
  children: React.ReactNode;
}

const MainContent = ({ children }: mainProps) => {
  return <main className="grow">{children}</main>;
};

export default MainContent;
