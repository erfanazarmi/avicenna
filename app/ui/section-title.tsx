export function SectionTitle({ text }: { text: string }) {
  return (
    <div className="flex items-center whitespace-nowrap font-mono">
      <span className="text-2xl sm:text-3xl text-gold-dark dark:text-gold pr-6 sm:pr-10">{"{"}</span>
      <h2 className="text-3xl sm:text-4xl bg-background">{text}</h2>
      <span className="text-2xl sm:text-3xl text-gold-dark dark:text-gold pl-6 sm:pl-10">{"}"}</span>
    </div>
  );
}
