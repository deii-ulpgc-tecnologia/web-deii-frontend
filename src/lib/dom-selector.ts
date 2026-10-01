export const $ = <T = HTMLElement>(query: string) =>
    document.querySelector(query) as T;

export const $$ = <T extends Element = HTMLElement>(query: string) =>
    document.querySelectorAll(query) as NodeListOf<T>;
