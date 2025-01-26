export function getAlbumsData(t: (key: string) => string) {
	return [
		{ key: "SeedsOvHell", title: t("Release.SeedsOvHell.title"), description: t("Release.SeedsOvHell.description") },
		{ key: "ForTheSun", title: t("Release.ForTheSun.title"), description: t("Release.ForTheSun.description") },
		{ key: "ToTheDust", title: t("Release.ToTheDust.title"), description: t("Release.ToTheDust.description") },
		{ key: "AnotherOnes", title: t("Release.AnotherOnes.title"), description: t("Release.AnotherOnes.description") },
		{ key: "AnabasisOvSpirit", title: t("Release.AnabasisOvSpirit.title"), description: t("Release.AnabasisOvSpirit.description") },
		{ key: "BloodMagic", title: t("Release.BloodMagic.title"), description: t("Release.BloodMagic.description") },
	];
}