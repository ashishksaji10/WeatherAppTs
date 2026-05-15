import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4">
      <Loader2 size={48} className="animate-spin text-blue-300" />
      <div className="text-lg font-medium text-white/80 tracking-wide">
        Analyzing weather patterns...
      </div>
    </div>
  );
};

export default Loader;