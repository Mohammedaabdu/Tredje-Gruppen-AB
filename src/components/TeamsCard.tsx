interface TeamsCardProps {
  image: string;
  name: string;
  role: string;
}
const TeamsCard = ({ image, name, role }: TeamsCardProps) => {
  return (
    <article className="group">
      <div className="relative rounded-2xl overflow-hidden aspect-3/4 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <p className="font-semibold text-sm">Connect on LinkedIn</p>
          </div>
        </div>
      </div>
      <h3>{name}</h3>
      <p className="text-green-600">{role}</p>
    </article>
  );
};

export default TeamsCard;
