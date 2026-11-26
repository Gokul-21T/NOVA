"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(() => import("@/components/visuals/SceneCanvas"), {
  ssr: false,
  loading: () => <div className="scene-poster" aria-hidden="true"><span>NOVA®</span><i /><b /></div>,
});

export function DetailScene({ variant, label }: { variant: string; label: string }) {
  return (
    <div className="detail-scene" role="img" aria-label={label}>
      <SceneCanvas variant={variant} />
      <span className="scene-label">NOVA® / FORM STUDY</span>
    </div>
  );
}
