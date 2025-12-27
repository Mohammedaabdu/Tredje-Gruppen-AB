interface StatsIemProps {
  title: string;
  text: string;
}

const StatsIem = ({ title, text }: StatsIemProps) => {
  return (
    <div className="p-4 ">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-green-600 mb-2">
        {title}
      </h2>
      <p className="text-sm text-center font-medium md:text-lg text-gray-600">
        {text}
      </p>
    </div>
  );
};

export default StatsIem;
