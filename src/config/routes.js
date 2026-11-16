const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export const homePath = `${basePath}/`;

export const projectPath = (slug) => `${basePath}/projects/${encodeURIComponent(slug)}`;

export function projectSlugFromPath(pathname = window.location.pathname) {
    const isInsideBasePath = basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`));
    const route = isInsideBasePath ? pathname.slice(basePath.length) || '/' : pathname;
    return route.match(/^\/?projects\/([^/]+)\/?$/)?.[1] ?? null;
}
