import Form from "./form";
import prisma from "../db";

interface GuestbookEntry {
	message: string;
	id: string;
}

async function getEntries() {
	const data = await prisma.guestbook.findMany({
		take: 15,
		orderBy: {
			created_at: "desc",
		},
	});
	return data;
}

export const revalidate = 60;

export default async function GuestbookServer() {
	const data = await getEntries();

	return (
		<div className="w-full">
			<div className="max-w-[500px] mx-auto mt-8">
				<Form />
				<div className="flex flex-col space-y-4 text-gray-300">
					{data.map((entry: GuestbookEntry) => (
						<div key={entry.id} className="w-full text-sm break-words">
							<p>{entry.message}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
