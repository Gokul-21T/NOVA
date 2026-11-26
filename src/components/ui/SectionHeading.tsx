import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  children: ReactNode;
  accent?: string;
};

export function SectionHeading({ eyebrow, children, accent }: SectionHeadingProps) {
  return (
    <div>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">
        {children}{accent ? <> <em>{accent}</em></> : null}
      </h2>
    </div>
  );
}
