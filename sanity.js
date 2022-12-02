import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    appVersion: "2021-03-25",

    useCdn: process.env.NODE_ENV === "production",
};

//Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
//export const useCurrentUser = createCurrentUserHook(config);
