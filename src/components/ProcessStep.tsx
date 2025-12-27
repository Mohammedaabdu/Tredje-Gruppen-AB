interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <article className="space-y-6 p-8 border border-slate-100 rounded-xl shadow-lg">
      <div className="rounded-full bg-green-600 text-white w-16 h-16 p-4 mx-auto text-2xl font-bold">
        {number}
      </div>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </article>
  );
};

export default ProcessStep;
