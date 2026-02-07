// Scenario data - add new scenarios here
const scenarios = [
    {
        id: 'solo-selfrelease',
        title: 'Soloartist som skriver och ger ut själv',
        description: 'Du skriver dina egna låtar, spelar in dem själv (eller med hjälp av en producent du betalar), och ger ut musiken via en digital distributör som DistroKid eller TuneCore. Du har inget skivbolag och inget förlag. Det här är det vanligaste scenariot för nya indie-artister idag — och det innebär att du har rätt till i princip alla typer av royalties, men du måste själv se till att du är registrerad överallt.',
        royalties: [
            {
                type: 'Inspelningsroyalties (master)',
                organization: 'Distributör (t.ex. DistroKid)',
                description: 'När din musik streamas på Spotify, Apple Music etc. får du inspelningsroyalties via din distributör. Eftersom du äger mastern själv behåller du allt (minus distributörens eventuella avgift). Dessa betalas vanligtvis ut kvartalsvis.'
            },
            {
                type: 'Framföranderoyalties',
                organization: 'Stim',
                description: 'Som låtskrivare har du rätt till ersättning när dina låtar framförs offentligt — det inkluderar streaming, radio, TV och liveframträdanden. Du måste vara ansluten till Stim och ha registrerat dina verk för att få dessa pengar. Stim betalar ut åtta gånger per år.'
            },
            {
                type: 'Mekaniska royalties',
                organization: 'Stim/NCB',
                description: 'Varje gång din komposition reproduceras (streaming, nedladdning, CD) genereras mekaniska royalties. I Norden hanteras dessa av NCB och betalas ut till dig via Stim. Du behöver inte registrera dig separat hos NCB — det sköts automatiskt via din Stim-anslutning.'
            },
            {
                type: 'Närstående rättigheter (artist)',
                organization: 'SAMI',
                description: 'Som medverkande artist på inspelningen har du rätt till ersättning via SAMI när musiken spelas på radio, TV eller som bakgrundsmusik i offentliga miljöer. Gå med i SAMI (gratis) och fyll i SAMI-listan för varje inspelning du medverkat på.'
            },
            {
                type: 'Närstående rättigheter (master)',
                organization: 'IFPI',
                description: 'Eftersom du äger mastern kan du registrera dig hos IFPI för att få den del av närstående rättigheter som tillfaller fonogramframställaren (masterägaren). Hälften av det IFPI/SAMI samlar in vid offentligt framförande går till artisterna, hälften till masterägaren. Observera att IFPI kräver ett registrerat bolag — privatpersoner kan inte bli medlemmar.'
            }
        ]
    },
    {
        id: 'independent-producer',
        title: 'Producent som gör beats åt andra artister',
        description: 'Du producerar musik (beats, instrumentals) som andra artister använder i sina låtar. Du kanske säljer eller licensierar beats online, eller samarbetar direkt med artister. Beroende på hur avtalet ser ut kan du ha rätt till flera typer av royalties — både som medupphovsperson och ibland som masterägare.',
        royalties: [
            {
                type: 'Upphovsrättsroyalties (komposition)',
                organization: 'Stim',
                description: 'Om du är med och skapar melodin eller arrangemanget (inte bara mixar/mastrar) räknas du ofta som medupphovsperson och har rätt till en andel av framförande- och mekaniska royalties via Stim. Se till att du och artisten avtalar om splits innan release och att kompositionen registreras hos Stim med din andel.'
            },
            {
                type: 'Mekaniska royalties',
                organization: 'Stim/NCB',
                description: 'Som medupphovsperson till kompositionen får du din andel av mekaniska royalties varje gång låten streamas, laddas ner eller reproduceras. Dessa betalas ut via Stim.'
            },
            {
                type: 'Inspelningsroyalties (master)',
                organization: 'Distributör / Skivbolag',
                description: 'Om du äger en andel av masterinspelningen (vanligt om du producerat beaten och licensierat den med en royaltyandel) får du inspelningsroyalties från streaming och försäljning. Detta regleras i avtalet med artisten eller skivbolaget. Om du sålde beaten med full buy-out har du vanligtvis ingen masterandel.'
            },
            {
                type: 'Närstående rättigheter',
                organization: 'SAMI',
                description: 'Om du som producent även spelar instrument eller på annat sätt "utövar" musik på inspelningen kan du ha rätt till närstående rättigheter via SAMI. Notera att bara "programmering" av beats inte alltid kvalificerar — det beror på din faktiska medverkan.'
            }
        ]
    },
    {
        id: 'band-member-label',
        title: 'Bandmedlem som ger ut via skivbolag',
        description: 'Du spelar i ett band som har skrivit på med ett skivbolag. Skivbolaget finansierar inspelning, marknadsföring och distribution, men äger i regel masterrättigheterna. Beroende på om du även är med och skriver låtarna eller "bara" spelar, skiljer sig vilka royalties du har rätt till avsevärt.',
        royalties: [
            {
                type: 'Artistroyalties (inspelning)',
                organization: 'Skivbolag',
                description: 'Skivbolaget betalar ut en andel av intäkterna från streaming och försäljning till bandet enligt ert avtal. Vanliga andelar för artisten kan vara 15–25 % av nettointäkterna, men det varierar stort. Om ni fått förskott måste det först vara återbetalt ("recoupat") innan ni får artistroyalties.'
            },
            {
                type: 'Framförande- och mekaniska royalties',
                organization: 'Stim',
                description: 'Om du är med och skriver bandets låtar har du rätt till Stim-ersättning som upphovsperson. Dessa pengar går direkt från Stim till dig personligen — inte via skivbolaget. Se till att ni har tydliga splits registrerade hos Stim för varje låt.'
            },
            {
                type: 'Närstående rättigheter (artist)',
                organization: 'SAMI',
                description: 'Oavsett om du skriver låtar eller inte — som medverkande musiker på inspelningen har du rätt till ersättning via SAMI när musiken spelas på radio, TV eller offentligt. Varje bandmedlem behöver vara med i SAMI individuellt, men en person kan registrera inspelningen på SAMI-listan och lägga till övriga medverkande.'
            },
            {
                type: 'Närstående rättigheter (master)',
                organization: 'IFPI',
                description: 'Masterägarens andel av närstående rättigheter samlas in av IFPI och betalas ut till skivbolaget. Eftersom bolaget äger mastern går dessa pengar inte direkt till dig som bandmedlem.'
            },
            {
                type: 'Liveframträdanden',
                organization: 'Stim (via arrangör)',
                description: 'Vid konserter betalar arrangören en Stim-avgift. Om du är låtskrivare i bandet får du ersättning för de framförda verken. Se till att setlistor rapporteras till Stim efter varje spelning.'
            }
        ]
    },
    {
        id: 'songwriter',
        title: 'Låtskrivare utan artistkarriär',
        description: 'Du skriver låtar åt andra artister men framträder inte själv. Kanske jobbar du med ett musikförlag som hjälper dig att pitcha dina låtar. Som ren låtskrivare är det upphovsrättsliga royalties som är din huvudsakliga inkomstkälla — du har ingen masterandel om du inte avtalar specifikt om det.',
        royalties: [
            {
                type: 'Framföranderoyalties',
                organization: 'Stim',
                description: 'Din viktigaste intäktskälla. Varje gång en låt du skrivit spelas på radio, TV, streamas eller framförs live får du ersättning via Stim. Se till att varje låt du medverkar på registreras hos Stim med korrekta splits mellan alla upphovspersoner.'
            },
            {
                type: 'Mekaniska royalties',
                organization: 'Stim/NCB',
                description: 'Varje gång en låt du skrivit reproduceras — streaming, nedladdning, fysisk skiva — genereras mekaniska royalties. Dessa hanteras av NCB i Norden och betalas ut via Stim.'
            },
            {
                type: 'Synkroniseringsersättning',
                organization: 'Förlag / direkt',
                description: 'Om en av dina låtar används i film, TV, reklam eller spel betalas en synklicensavgift. Om du har ett förlag förhandlar de vanligtvis detta åt dig och tar en procentandel. Utan förlag behöver du hantera synkförfrågningar själv.'
            },
            {
                type: 'Förlagsavtal',
                organization: 'Musikförlag',
                description: 'Många låtskrivare har ett förlagsavtal. Förlaget hjälper till att pitcha låtar, administrera rättigheter och samla in royalties (särskilt internationellt). I utbyte delar du dina upphovsrättsliga royalties med förlaget, vanligtvis 60/40 eller 70/30 till din fördel. Förlaget kan även betala ut förskott.'
            }
        ]
    },
    {
        id: 'session-musician',
        title: 'Studiomusiker / sessionmusiker',
        description: 'Du blir inhyrd för att spela på andra artisters inspelningar — kanske gitarr, stråkar, blås eller bakgrundssång. Du skriver vanligtvis inte låtarna och äger inte mastern. Trots det har du viktiga rättigheter som många sessionmusiker missar.',
        royalties: [
            {
                type: 'Närstående rättigheter',
                organization: 'SAMI',
                description: 'Som utövande konstnär som medverkar på en inspelning har du rätt till ersättning via SAMI varje gång inspelningen spelas på radio, TV eller i offentliga miljöer. Det här är din viktigaste royaltykälla — och den många sessionmusiker missar. Gå med i SAMI och fyll i SAMI-listan för varje inspelning du medverkat på.'
            },
            {
                type: 'Tilläggsersättning',
                organization: 'SAMI (via skivbolag)',
                description: 'Sedan skyddstiden för inspelningar förlängdes från 50 till 70 år har musiker som överlåtit sina rättigheter mot en engångsersättning rätt till en tilläggsersättning från skivbolaget. Denna rätt går inte att förhandla bort, oavsett vad som avtalats.'
            },
            {
                type: 'Rätt till skälig ersättning',
                organization: 'Lagstadgad',
                description: 'Enligt upphovsrättslagen har du rätt till skälig ersättning när du överlåter eller licensierar din medverkan. Om ersättningen i efterhand visar sig vara oproportionerligt låg i förhållande till vad din motpart tjänat, har du rätt till ytterligare ersättning. Denna rätt går inte att avtala bort.'
            },
            {
                type: 'Upphovsrättsroyalties (om tillämpligt)',
                organization: 'Stim',
                description: 'Om du bidrar kreativt till kompositionen — exempelvis spelar in ett riff som blir en central del av låten — kan du ha rätt till upphovsrättslig ersättning. Detta beror helt på överenskommelsen med låtskrivarna och om ditt bidrag anses vara del av kompositionen.'
            }
        ]
    },
    {
        id: 'sync-placement',
        title: 'Din låt har blivit syncad (film/reklam/TV)',
        description: 'En av dina låtar har plockats upp för användning i en reklamfilm, TV-serie, film eller dataspel. Synkronisering ("sync") är en av de mest lukrativa intäktskällorna för musikskapare, men det kan vara förvirrande att förstå vem som behöver ge tillstånd och vilka pengar som genereras.',
        royalties: [
            {
                type: 'Synkroniseringslicens (komposition)',
                organization: 'Förlag / direkt',
                description: 'Den som vill använda din musik måste få licens för kompositionen. Om du har ett förlag hanterar de förhandlingen. Utan förlag förhandlar du direkt. Ersättningen är en engångssumma som varierar enormt — allt från några tusen kronor för en liten webbfilm till hundratusentals kronor för en stor internationell reklamkampanj.'
            },
            {
                type: 'Masterlicens (inspelning)',
                organization: 'Skivbolag / direkt',
                description: 'Utöver kompositionen behöver användaren även licens för den specifika inspelningen (mastern). Om du äger mastern själv förhandlar du detta direkt. Om ett skivbolag äger mastern behöver de ge tillstånd. Vanligtvis matchar masterlicensen beloppet för synklicensen.'
            },
            {
                type: 'Framföranderoyalties vid sändning',
                organization: 'Stim',
                description: 'Utöver engångslicensen genereras framföranderoyalties via Stim varje gång reklamen eller programmet sänds på TV eller radio. Vid upprepade sändningar kan dessa royalties bli betydande över tid.'
            },
            {
                type: 'Närstående rättigheter vid sändning',
                organization: 'SAMI / IFPI',
                description: 'Varje gång inspelningen sänds på TV eller radio genereras även ersättning för artister (via SAMI) och masterägare (via IFPI), utöver synkavgiften.'
            }
        ]
    },
    {
        id: 'cover-artist',
        title: 'Du spelar in en cover',
        description: 'Du vill spela in och ge ut din egen version av en annan artists låt. Att göra en cover är helt lagligt, men det finns regler. Du behöver inte be originallåtskrivaren om lov för att spela in en cover (det hanteras via så kallad tvångslicens i de flesta länder), men ersättningen till originallåtskrivaren måste betalas.',
        royalties: [
            {
                type: 'Mekaniska royalties (till originallåtskrivaren)',
                organization: 'NCB/Stim',
                description: 'När din coverversion streamas eller säljs genereras mekaniska royalties som betalas till den ursprungliga låtskrivaren via Stim/NCB. Detta sker automatiskt — du behöver inte kontakta låtskrivaren. Distributörer som DistroKid och CD Baby kan hjälpa dig hantera detta.'
            },
            {
                type: 'Framföranderoyalties (till originallåtskrivaren)',
                organization: 'Stim',
                description: 'När din cover spelas på radio, live eller streamas får den ursprungliga låtskrivaren framföranderoyalties via Stim. Du som coverartist får inga upphovsrättsliga royalties för kompositionen — du har ju inte skrivit låten.'
            },
            {
                type: 'Inspelningsroyalties (till dig)',
                organization: 'Distributör',
                description: 'Du äger mastern av din inspelning och får inspelningsroyalties via din distributör för streaming och försäljning — precis som för egna låtar. Det är din unika inspelning, även om kompositionen tillhör någon annan.'
            },
            {
                type: 'Närstående rättigheter (till dig)',
                organization: 'SAMI / IFPI',
                description: 'Som medverkande artist och masterägare av din coverversion har du rätt till närstående rättigheter via SAMI och IFPI när din inspelning spelas offentligt.'
            }
        ]
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderScenarioButtons();
    if (scenarios.length > 0) {
        selectScenario(scenarios[0].id);
    }
});

function renderScenarioButtons() {
    const container = document.getElementById('scenarioButtons');
    container.innerHTML = scenarios.map(scenario =>
        `<button class="scenario-btn" data-id="${scenario.id}" onclick="selectScenario('${scenario.id}')">
            ${scenario.title}
        </button>`
    ).join('');
}

function selectScenario(id) {
    const scenario = scenarios.find(s => s.id === id);
    if (!scenario) return;

    // Update button states
    document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.id === id);
    });

    // Render content
    const container = document.getElementById('scenarioContent');
    container.innerHTML = `
        <div class="scenario-detail">
            <h3>${scenario.title}</h3>
            <p>${scenario.description}</p>
            <h4>Relevanta royalties:</h4>
            <ul class="royalty-list">
                ${scenario.royalties.map(r => `
                    <li>
                        <strong>${r.type}</strong>
                        <span class="organization-tag">${r.organization}</span>
                        <p>${r.description}</p>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}
