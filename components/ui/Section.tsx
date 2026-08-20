import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`scroll-mt-28 border-t border-(--border) bg-(--surface) py-16 text-(--foreground) md:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
