import { Separator } from "@/components/ui/separator";
import DOMPurify from "isomorphic-dompurify";

type Props = {
    title: string;
    stanza: string;
    description: string;
};

export default function AboutUsActs({ title, stanza, description }: Props) {
    const cleanStanza = DOMPurify.sanitize(stanza);
    const cleanDescription = DOMPurify.sanitize(description);

    return (
        <div className="w-full text-sm px-2">
            <div className="flex justify-between">
                <p className="mx-4 text-nowrap">{title}</p>
                <p className="mx-4 italic" dangerouslySetInnerHTML={{ __html: cleanStanza }}></p>
            </div>
            <div className="mt-5">
                <p dangerouslySetInnerHTML={{ __html: cleanDescription }}></p>
            </div>
            <Separator className="my-12 sm:max-w-7xl max-w-72 mx-auto" />
        </div>
    );
}
