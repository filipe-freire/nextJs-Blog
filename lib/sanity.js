import sanityClient from "@sanity/client"

const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production"
    // useCdn === true, gives fast response
    // but gives me cached data
    // useCdn === false, slowest, but latest data
}

export default sanityClient(options);