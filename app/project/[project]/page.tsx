import { getProject } from "@/sanity/schemas/sanity-utils";

type paramsProp = {
    params: { project: string };
}

export default async function Project({ params }: paramsProp) {
    const slug = params.project;
    const project = await getProject(slug);

    return <div>{project.name}</div>
}