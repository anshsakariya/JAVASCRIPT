import PDFMerger from "pdf-merger-js";

let merger = new PDFMerger();

export async function mergePdf(p1, p2) {
  await merger.add(p1);
  await merger.add(p2);

  let d = new Date().getTime();
  await merger.save(`public/${d}.pdf`);
  return d;
}
