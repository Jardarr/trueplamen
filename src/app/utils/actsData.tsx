// actsData.ts
export function getActsData( t: (key: string) => string ) {
    return [
        { key: 'act1', title: t("acts.act1.title"), stanza: t("acts.act1.stanza"), description: t("acts.act1.description") },
        { key: 'act2', title: t("acts.act2.title"), stanza: t("acts.act2.stanza"), description: t("acts.act2.description") },
        { key: 'act3', title: t("acts.act3.title"), stanza: t("acts.act3.stanza"), description: t("acts.act3.description") },
        { key: 'act4', title: t("acts.act4.title"), stanza: t("acts.act4.stanza"), description: t("acts.act4.description") },
        { key: 'act5', title: t("acts.act5.title"), stanza: t("acts.act5.stanza"), description: t("acts.act5.description") },
        { key: 'act6', title: t("acts.act6.title"), stanza: t("acts.act6.stanza"), description: t("acts.act6.description") },
        { key: 'act7', title: t("acts.act7.title"), stanza: t("acts.act7.stanza"), description: t("acts.act7.description") },
        { key: 'act8', title: t("acts.act8.title"), stanza: t("acts.act8.stanza"), description: t("acts.act8.description") },
    ];
}
