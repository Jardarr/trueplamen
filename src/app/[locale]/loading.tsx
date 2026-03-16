export default function Loading() {
	return (
		<div className="custom-font w-full flex justify-center bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
			<div className="w-full max-w-[1200px] px-4 md:px-0">
				<div className="flex h-screen items-center justify-center py-16">
					<div
						className="h-10 w-10 rounded-full border-4 border-neutral-700 border-t-red-700 animate-spin"
						aria-label="Loading"
					/>
				</div>
			</div>
		</div>
	);
}
