import { PUBLIC_API_URL } from "$env/static/public";
import type { PageServerLoad } from "./$types";

import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ url }) => {
    const res = await fetch(PUBLIC_API_URL + url.pathname);
    const content = await res.json();

    if (res.status != 200) {
        error(404, "404 - not found");
    }

    return {
        about_me: content.about_me,
        about_my_blog: content.about_my_blog,
        projects: content.projects
    };
};