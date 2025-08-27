import { PUBLIC_API_URL } from "$env/static/public";
import type { BlogPost } from "$lib/types";
import type { PageServerLoad } from "../$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ url }) => {
    const res = await fetch(PUBLIC_API_URL + url.pathname);
    const data = await res.json();

    if (res.status != 200) {
        error(404, "404 - not found");
    }

    return {
        post: data as BlogPost
    };
};