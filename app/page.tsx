import HeroLogo from "./components/heroLogo";
import AnimatedContent from "./components/animate";

export default function Home() {
	return (
		<>
			<div className="h-custom-height flex justify-center items-center bg-hero-bg bg-cover bg-center bg-attachment-fixed bg-no-repeat">
				<AnimatedContent />
				<div className="wall flex flex-col items-center justify-center opacity-100 absolute w-full h-full top-0 bg-black text-white text-xs font-thin">
					<p className="stanza opacity-0 px-5">
						<i>
							Вы пришли в мир, чтоб гореть в солнце Града…
							<br />А чем лютей зло, тем ярче пламень чистых
							сердец!
						</i>
					</p>
					<p className="stanza opacity-0 max-w-[340px] w-full text-right px-5 md:px-0">
						&quot;Пламень&quot; Пимен Карпов
					</p>
				</div>
				<div className="heroCard opacity-0">
					<HeroLogo />
				</div>
			</div>
			<div className="bg-black text-white text-xs font-thin">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Iure nostrum sunt sint ab, modi est facilis! Tempora tempore
					eaque aut quae nemo repellendus ea alias velit atque totam,
					nostrum in? Magnam, vel. Excepturi illo dolor numquam alias
					rem officia aut inventore enim culpa! Minus ea, blanditiis
					illum reiciendis earum libero? Fuga assumenda illum voluptas
					voluptatem reprehenderit numquam consequatur neque eaque.
					Animi alias, perspiciatis vero sequi voluptates atque at ab
					aliquid ad, facilis nemo, repellendus velit. Quod maiores,
					fuga nobis error eos deleniti libero, ea dignissimos
					aliquid, natus unde et earum! Voluptatibus, facere sequi.
					Sed tempore, numquam enim suscipit soluta itaque nisi fugiat
					ut, officiis deleniti aliquid praesentium, similique a sit
					quas voluptate eius veritatis? Totam iusto consectetur error
					eos rerum. Voluptatibus itaque sunt cupiditate deserunt
					rerum autem impedit sit laboriosam aut vitae ad asperiores
					nam dicta illo, sint illum omnis. Omnis facere ipsum,
					eveniet aperiam adipisci dicta voluptatibus dolores
					expedita. Nisi quam doloribus vitae eos perspiciatis quo
					maiores, praesentium inventore corporis quos itaque animi
					ipsum a ipsam sit error possimus rerum. Eveniet unde aut
					dignissimos vero aperiam nulla dolore dolorum. Qui, natus
					necessitatibus debitis ipsum fugit provident. Culpa nihil id
					officia illum rerum facere in cumque dignissimos quidem
					ullam consequatur aspernatur voluptatibus aliquam, ipsa
					laboriosam harum asperiores vero. Assumenda, quam! Laborum
					aliquid eaque ducimus est at eius necessitatibus. Reiciendis
					sit, mollitia, necessitatibus aperiam, distinctio
					consectetur nam ex nihil voluptas iure aut laboriosam at
					porro? Delectus tempore quos fugit molestiae quis.
				</p>
			</div>
		</>
	);
}
