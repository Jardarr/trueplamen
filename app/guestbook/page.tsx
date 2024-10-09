import Form from "../components/form";
import prisma from "../db";

interface GuestbookEntry {
    message: string;
    id: string;
}

async function getEntries() {
    const data = await prisma.guestbook.findMany({
        take: 10,
        orderBy: {
            created_at: "desc",
        },
    });
    return data;
}

export const revalidate = 60;

export default async function Guestbook() {
    const data = await getEntries();

    return (
        <div className="bg-img custom-font w-full flex justify-center h-custom-height">
            <div className="w-full max-w-[1200px] px-4 md:px-0">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl text-gray-800 sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight">
                        Guestbook
                    </h1>
                </div>
                <div className="w-full">
                    <div className="max-w-[500px] mx-auto mt-8">
                        <Form />
                        <div className="flex flex-col space-y-4 text-gray-300">
                            {data.map((entry: GuestbookEntry) => (
                                <div
                                    key={entry.id}
                                    className="w-full text-sm break-words"
                                >
                                    <p>{entry.message}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}