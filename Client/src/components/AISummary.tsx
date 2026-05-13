interface AISummaryProps {
  summary: string;
}

const AISummary = ({ summary }: AISummaryProps) => {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl w-full max-w-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🤖 AI Summary</h2>

      <p className="text-lg leading-8">{summary}</p>
    </div>
  );
};

export default AISummary;