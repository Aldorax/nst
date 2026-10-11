// Matching cubic segments keep the silhouette continuous while it morphs.
export function radialPath(lobes: number, amplitude: number, rotation = 0) {
  const points = Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * Math.PI * 2;
    const radius = 66 + Math.cos(angle * lobes + rotation) * amplitude;
    return [100 + Math.cos(angle) * radius, 100 + Math.sin(angle) * radius];
  });
  const at = (i: number) => points[(i + 16) % 16];
  const round = (v: number) => v.toFixed(2);
  let path = `M${round(points[0][0])},${round(points[0][1])}`;
  for (let i = 0; i < 16; i++) {
    const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
    path += `C${round(p1[0] + (p2[0] - p0[0]) / 6)},${round(p1[1] + (p2[1] - p0[1]) / 6)} ${round(p2[0] - (p3[0] - p1[0]) / 6)},${round(p2[1] - (p3[1] - p1[1]) / 6)} ${round(p2[0])},${round(p2[1])}`;
  }
  return path + "Z";
}
