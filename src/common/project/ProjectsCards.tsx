import { HoverEffect } from "../../components/ui/card-hover-effect";

export function ProjectCards() {
    return (
        <div className="max-w-lg mx-auto px-3">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        description:
            "2 0 2 2",
        title: "Uwang Corp.",

        link: "https://stripe.com",
    },
    {
        description:
            "2 0 2 2",
        title: "DEF Manu.",

        link: "https://netflix.com",
    },
    {
        description:
            "2 0 2 2",
        title: "Markland Corp.",

        link: "https://google.com",
    },
    {
        description:
            "2 0 2 2",
        title: "Kings Ent.",

        link: "https://meta.com",
    },
    {
        description:
            "2 0 2 2",
        title: "Amazon",

        link: "https://amazon.com",
    },
    {
        description:
            "2 0 2 2",
        title: "Gojun Retail",

        link: "https://microsoft.com",
    },
    {
        description:
            "2 0 2 2",
        title: "Digital.Co",

        link: "https://meta.com",
    },
    {
        description:
            "2 0 2 2",
        title: "Luxury Inc.",

        link: "https://amazon.com",
    },
    {
        description:
            "2 0 2 2",
        title: "Buddy & Co.",

        link: "https://microsoft.com",
    },
];
