import { PUBLIC_API_URL } from "$env/static/public";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";


export const load: PageServerLoad = async ({ route }) => {
    const res = await fetch(PUBLIC_API_URL + route.id);
    const posts = await res.json();

    if (res.status != 200) {
        error(404, "404 - not found");
    }

    return {
        posts
    };
};