export function SectionTitle({ text }: { text: string }) {
  return (
    <div className="flex items-center whitespace-nowrap font-mono">
      <span className="text-3xl text-gold-dark dark:text-gold pr-10">{"{"}</span>
      <h2 className="text-4xl bg-background">{text}</h2>
      <span className="text-3xl text-gold-dark dark:text-gold pl-10">{"}"}</span>
    </div>
  );
}
