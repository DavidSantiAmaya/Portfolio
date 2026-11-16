const base = `${import.meta.env.BASE_URL}models/`;

export function createResponsiveCover(filename, name, extension) {
    const mobile = `${base}responsive-covers/${name}-480.${extension}`;
    const desktop = `${base}responsive-covers/${name}-960.${extension}`;

    return {
        cover: `${base}${filename}`,
        coverMobile: mobile,
        coverDesktop: desktop,
        coverSrcSet: `${mobile} 480w, ${desktop} 960w`,
        coverSizes: '(max-width: 520px) 90vw, (max-width: 1000px) 43vw, 320px'
    };
}
