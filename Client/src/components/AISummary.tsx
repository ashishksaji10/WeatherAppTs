import { Smile } from 'lucide-react';

interface AISummaryProps {
  summary: string;
}

const AISummary = ({ summary }: AISummaryProps) => {
  if (!summary) return null;

  const cleanSummary = summary.replace(/^["']|["']$/g, '').trim();

  return (
    <div className="pt-6 border-t border-white/10">
      <p className="text-lg leading-relaxed text-white/90 font-light flex gap-3 items-start">
        <Smile className="text-purple-300 shrink-0 mt-1" size={20} />
        <span>{cleanSummary}</span>
      </p>
    </div>
  );
};

export default AISummary;