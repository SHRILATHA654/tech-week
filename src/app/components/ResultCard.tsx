
interface ResultCardProps {
  result: string;
  warnings: string[];
}

export default function ResultCard({
  result,
  warnings,
}: ResultCardProps) {
  const resultColor =
    result === "Potentially Fraudulent"
      ? "text-red-400"
      : result === "Suspicious"
      ? "text-yellow-400"
      : result === "No obvious warning signs found"
      ? "text-green-400"
      : "text-slate-300";

  return (
    <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800 p-5">
      <h3 className="text-xl font-bold text-cyan-400">
        Analysis Result
      </h3>

      <p className={`mt-3 text-lg font-bold ${resultColor}`}>
        {result}
      </p>

      {warnings.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold text-slate-300">
            Warning signs:
          </p>

          <ul className="mt-2 list-disc space-y-2 pl-6 text-slate-300">
            {warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
