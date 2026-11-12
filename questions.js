const quizzesData = {
    amitie: {
        title: "Quel genre d'ami(e) êtes-vous ?",
        results: [
            { min: 13, title: "Le Pilier Bienveillant", desc: "Vous êtes un(e) ami(e) en or, toujours à l'écoute et prêt(e) à soutenir vos proches.", advice: "Veillez à ne pas vous oublier en voulant toujours aider les autres." },
            { min: 9, title: "L'Équilibriste Sincère", desc: "Vous savez être présent(e) quand il le faut tout en préservant votre espace personnel.", advice: "Continuez sur cette voie !" },
            { min: 0, title: "Le Solitaire Indépendant", desc: "Vous accordez une grande importance à votre tranquillité.", advice: "Un petit message spontané de temps en temps rassure vos proches." }
        ],
        questions: [
            { question: "Un ami vous appelle tard le soir parce qu'il a un coup de mou. Que faites-vous ?", options: [{ text: "Je décroche immédiatement et je l'écoute.", points: 3 }, { text: "Je lui envoie un message pour le rappeler demain.", points: 2 }, { text: "Je ne réponds pas, j'ai besoin de dormir.", points: 1 }] },
            { question: "Votre meilleur ami fait un choix de vie risqué. Votre réaction ?", options: [{ text: "Je lui donne mon avis avec bienveillance mais je le soutiens.", points: 3 }, { text: "Je ne dis rien pour ne pas le vexer.", points: 2 }, { text: "Je lui dis froidement qu'il fait une erreur.", points: 1 }] },
            { question: "À quelle fréquence prenez-vous des nouvelles de vos proches ?", options: [{ text: "Très régulièrement au quotidien.", points: 3 }, { text: "De temps en temps, pour les grandes occasions.", points: 2 }, { text: "J'attends presque toujours qu'ils m'écrivent.", points: 1 }] },
            { question: "Lors d'une sortie de groupe, comment vous comportez-vous ?", options: [{ text: "Je veille à ce que tout le monde se sente intégré.", points: 3 }, { text: "Je parle surtout à ceux que je connais déjà.", points: 2 }, { text: "Je reste en retrait et j'observe.", points: 1 }] },
            { question: "Si un ami oublie votre anniversaire, comment réagissez-vous ?", options: [{ text: "Ce n'est pas grave, je sais qu'il tient à moi.", points: 3 }, { text: "Je suis un peu déçu(e) mais je passe à autre chose.", points: 2 }, { text: "Je lui en veux et je lui fais la tête.", points: 1 }] },
            { question: "Un ami vous confie un secret très lourd. Que faites-vous ?", options: [{ text: "Je le garde pour moi à vie, sans exception.", points: 3 }, { text: "Je n'en parle qu'à mon/ma partenaire.", points: 2 }, { text: "J'ai du mal à garder un secret trop longtemps.", points: 1 }] },
            { question: "Comment réagissez-vous face à la réussite spectaculaire d'un ami ?", options: [{ text: "Je suis sincèrement fier(ère) et heureux(se) pour lui.", points: 3 }, { text: "Je le félicite, même si je ressens un petit pincement.", points: 2 }, { text: "Je me compare à lui et cela me frustre.", points: 1 }] },
            { question: "Votre ami déménage ce week-end et cherche de l'aide. Votre réponse ?", options: [{ text: "J'arrive tôt le matin avec des cartons.", points: 3 }, { text: "Je passe deux heures l'après-midi si j'ai le temps.", points: 2 }, { text: "Je trouve une excuse pour éviter la corvée.", points: 1 }] },
            { question: "Deux de vos amis se disputent violemment. Quel rôle jouez-vous ?", options: [{ text: "J'essaie de calmer le jeu et de les réconcilier.", points: 3 }, { text: "J'écoute chacun séparément sans prendre parti.", points: 2 }, { text: "Je choisis un camp et j'alimente la dispute.", points: 1 }] },
            { question: "Un ami a besoin d'un prêt d'argent urgent. Que faites-vous ?", options: [{ text: "Je l'aide sans hésiter selon mes moyens.", points: 3 }, { text: "Je lui prête une petite somme avec un délai précis.", points: 2 }, { text: "Je refuse systématiquement par principe.", points: 1 }] },
            { question: "Comment réagissez-vous si un ami annule une sortie à la dernière minute ?", options: [{ text: "Je comprends qu'il puisse avoir un imprévu.", points: 3 }, { text: "Ça m'agace sur le coup mais je pardonne vite.", points: 2 }, { text: "Je ne lui propose plus rien pendant des mois.", points: 1 }] },
            { question: "Quelle importance accordez-vous aux dates marquantes de vos amis ?", options: [{ text: "Je note tout pour leur faire une surprise.", points: 3 }, { text: "Je leur envoie un message quand je m'en souviens.", points: 2 }, { text: "Je n'accorde aucune importance aux dates.", points: 1 }] },
            { question: "Un ami traverse une rupture difficile. Comment l'aidez-vous ?", options: [{ text: "Je lui propose de venir chez lui ou de sortir.", points: 3 }, { text: "Je lui envoie des messages de soutien réguliers.", points: 2 }, { text: "Je lui dis qu'il s'en remettra et je passe à autre chose.", points: 1 }] },
            { question: "Lorsque vous avez tort dans un débat avec un ami, que faites-vous ?", options: [{ text: "Je reconnais mon erreur avec humour.", points: 3 }, { text: "J'admets à moitié qu'il a peut-être raison.", points: 2 }, { text: "Je campe sur mes positions jusqu'au bout.", points: 1 }] },
            { question: "Un ami vous demande votre avis sur une tenue qui ne lui va pas.", options: [{ text: "Je lui dis gentiment qu'une autre tenue le mettrait plus en valeur.", points: 3 }, { text: "Je lui dis que c'est original pour ne pas le vexer.", points: 2 }, { text: "Je lui dis cash que c'est moche.", points: 1 }] },
            { question: "Comment gérez-vous les amitiés à distance ?", options: [{ text: "On s'appelle régulièrement et on organise des visites.", points: 3 }, { text: "On s'écrit quelques fois par an.", points: 2 }, { text: "Loin des yeux, loin du cœur.", points: 1 }] },
            { question: "Un inconnu critique votre meilleur ami dans son dos devant vous.", options: [{ text: "Je le défends immédiatement sans hésiter.", points: 3 }, { text: "Je change de sujet pour couper court.", points: 2 }, { text: "Je laisse dire sans intervenir.", points: 1 }] },
            { question: "Quelle place occupe l'amitié par rapport au couple ?", options: [{ text: "Une place essentielle que je préserve coûte que coûte.", points: 3 }, { text: "Importante, mais mon couple passe toujours avant.", points: 2 }, { text: "Je délaisse souvent mes amis quand je suis en couple.", points: 1 }] },
            { question: "Savez-vous écouter un ami sans ramener la conversation à vous ?", options: [{ text: "Oui, je lui laisse toute la place pour s'exprimer.", points: 3 }, { text: "J'essaie, même si je partage parfois mon expérience.", points: 2 }, { text: "J'ai tendance à parler surtout de mes problèmes.", points: 1 }] },
            { question: "Un ami vous offre un cadeau qui ne vous plaît pas du tout.", options: [{ text: "Je le remercie chaleureusement pour l'attention.", points: 3 }, { text: "Je souris poliment sans trop en faire.", points: 2 }, { text: "Je lui fais comprendre que ce n'est pas mon style.", points: 1 }] }
        ]
    },
    amoureux: {
        title: "Comment savoir si on est amoureux ?",
        results: [
            { min: 13, title: "C'est le grand amour !", desc: "Aucun doute possible : vous êtes profondément amoureux(se). Cette personne occupe une place centrale dans vos pensées et vos émotions.", advice: "Ne gardez pas tout pour vous : montrez-lui votre intérêt par des attentions sincères." },
            { min: 9, title: "Un attachement grandissant", desc: "Vous ressentez une forte attirance et une vraie complicité. Vous êtes en train de tomber amoureux(se).", advice: "Laissez-vous porter par vos émotions et passez plus de temps en tête-à-tête." },
            { min: 0, title: "De l'affection ou un simple flirt", desc: "Vous appréciez cette personne, mais il ne s'agit pas encore d'amour véritable. C'est plutôt de la curiosité ou de l'amitié.", advice: "Prenez votre temps et ne forcez pas vos sentiments. L'amour ne se commande pas." }
        ],
        questions: [
            { question: "Quand vous recevez un message de cette personne, quelle est votre réaction ?", options: [{ text: "Mon cœur s'accélère et j'ai un sourire immédiat.", points: 3 }, { text: "Je suis content(e) de lui parler.", points: 2 }, { text: "Je réponds quand j'ai le temps, sans émotion.", points: 1 }] },
            { question: "À quelle fréquence pensez-vous à cette personne dans la journée ?", options: [{ text: "Presque tout le temps, tout me ramène à elle.", points: 3 }, { text: "Souvent, surtout le soir ou quand je m'ennuie.", points: 2 }, { text: "Uniquement quand on se parle.", points: 1 }] },
            { question: "Comment réagissez-vous face à ses petits défauts ?", options: [{ text: "Je les trouve presque attachants.", points: 3 }, { text: "Je les accepte sans problème.", points: 2 }, { text: "Ils ont tendance à m'agacer vite.", points: 1 }] },
            { question: "Vous projetez-vous dans l'avenir avec cette personne ?", options: [{ text: "Oui, j'imagine déjà nos futurs voyages et projets.", points: 3 }, { text: "J'ai envie de voir où cela nous mène.", points: 2 }, { text: "Non, je profite juste du moment présent.", points: 1 }] },
            { question: "Quand il/elle vous raconte une bonne nouvelle, que ressentez-vous ?", options: [{ text: "Une joie immense, comme si c'était ma propre réussite.", points: 3 }, { text: "Je suis content(e) pour lui/elle.", points: 2 }, { text: "Une réaction polie sans plus.", points: 1 }] },
            { question: "Avez-vous envie de lui faire découvrir votre univers (musique, lieux, amis) ?", options: [{ text: "Oui, j'ai hâte de tout partager avec lui/elle.", points: 3 }, { text: "Petit à petit, pourquoi pas.", points: 2 }, { text: "Non, je préfère garder mon jardin secret.", points: 1 }] },
            { question: "Comment vous sentez-vous lorsque vous êtes séparés plusieurs jours ?", options: [{ text: "Il/elle me manque énormément.", points: 3 }, { text: "J'ai hâte qu'on se revoie.", points: 2 }, { text: "Cela ne me fait ni chaud ni froid.", points: 1 }] },
            { question: "Faites-vous plus attention à votre apparence quand vous allez le/la voir ?", options: [{ text: "Oui, je veux toujours lui plaire.", points: 3 }, { text: "Un peu plus que d'habitude.", points: 2 }, { text: "Pas particulièrement.", points: 1 }] },
            { question: "Ressentez-vous un petit pincement si quelqu'un d'autre flirte avec lui/elle ?", options: [{ text: "Oui, une pointe de jalousie immédiate.", points: 3 }, { text: "Un léger inconfort.", points: 2 }, { text: "Pas du tout, ça m'est égal.", points: 1 }] },
            { question: "Les autres personnes vous semblent-elles moins attirantes depuis que vous le/la connaissez ?", options: [{ text: "Oui, je n'ai d'yeux que pour lui/elle.", points: 3 }, { text: "Il/elle sort clairement du lot.", points: 2 }, { text: "Non, je regarde toujours ailleurs.", points: 1 }] },
            { question: "Avez-vous envie de prendre soin de lui/elle quand il/elle est fatigué(e) ou malade ?", options: [{ text: "Oui, spontanément et avec tendresse.", points: 3 }, { text: "Je lui propose mon aide poliment.", points: 2 }, { text: "Je préfère éviter de le/la voir dans cet état.", points: 1 }] },
            { question: "Comment réagissez-vous à son contact physique (main, épaule, regard) ?", options: [{ text: "Je ressens des frissons ou une chaleur immédiate.", points: 3 }, { text: "C'est très agréable.", points: 2 }, { text: "C'est neutre, comme avec un ami.", points: 1 }] },
            { question: "Vous surprenez-vous à relire vos anciennes conversations ?", options: [{ text: "Oui, souvent avec le sourire.", points: 3 }, { text: "Ça m'est arrivé une ou deux fois.", points: 2 }, { text: "Jamais.", points: 1 }] },
            { question: "Avez-vous peur de le/la décevoir ou de le/la perdre ?", options: [{ text: "Oui, cette idée me serre le cœur.", points: 3 }, { text: "J'espère que tout se passera bien entre nous.", points: 2 }, { text: "Non, s'il/elle part, tant pis.", points: 1 }] },
            { question: "Pouvez-vous rester en silence à ses côtés sans ressentir de gêne ?", options: [{ text: "Oui, sa simple présence m'apaise.", points: 3 }, { text: "Plutôt oui.", points: 2 }, { text: "Non, je me sens obligé(e) de meubler la conversation.", points: 1 }] },
            { question: "Avez-vous déjà parlé de lui/elle à vos proches ou meilleurs amis ?", options: [{ text: "Oui, ils en entendent parler tout le temps.", points: 3 }, { text: "J'ai mentionné son nom une ou deux fois.", points: 2 }, { text: "Personne ne sait qu'il/elle existe.", points: 1 }] },
            { question: "Quand vous écoutez une chanson d'amour, pensez-vous à lui/elle ?", options: [{ text: "Systématiquement.", points: 3 }, { text: "Parfois.", points: 2 }, { text: "Jamais.", points: 1 }] },
            { question: "Êtes-vous prêt(e) à faire des compromis sur votre emploi du temps pour le/la voir ?", options: [{ text: "Oui, je trouve toujours un créneau pour lui/elle.", points: 3 }, { text: "Si cela m'arrange.", points: 2 }, { text: "Non, mon planning passe avant.", points: 1 }] },
            { question: "Retenez-vous les petits détails insignifiants qu'il/elle vous raconte ?", options: [{ text: "Oui, sa couleur préférée, ses anecdotes, tout.", points: 3 }, { text: "Les choses principales.", points: 2 }, { text: "J'oublie presque tout.", points: 1 }] },
            { question: "En lisant ces questions, avez-vous pensé à une seule et même personne ?", options: [{ text: "Oui, du début à la fin.", points: 3 }, { text: "À une ou deux personnes.", points: 2 }, { text: "À personne en particulier.", points: 1 }] }
        ]
    },
    toxique: {
        title: "Avez-vous un(e) ami(e) toxique ?",
        results: [
            { min: 13, title: "Alerte : Relation Toxique", desc: "Cette amitié nuit à votre bien-être. L'absence de réciprocité, les critiques déguisées et l'épuisement émotionnel sont des signaux d'alarme clairs.", advice: "Prenez vos distances progressivement et posez des limites fermes pour protéger votre équilibre." },
            { min: 9, title: "Une relation déséquilibrée", desc: "Votre ami(e) manque de tact ou traverse une phase centrée sur lui/elle, ce qui crée des tensions régulières.", advice: "Ayez une discussion franche et calme avec cette personne pour lui exprimer votre ressenti." },
            { min: 0, title: "Une amitié saine et solide", desc: "Rassurez-vous, votre relation repose sur le respect mutuel, l'écoute et la bienveillance.", advice: "Prenez soin de cette belle amitié, elle est précieuse !" }
        ],
        questions: [
            { question: "Comment vous sentez-vous après avoir passé du temps avec cet(te) ami(e) ?", options: [{ text: "Épuisé(e), vidé(e) de mon énergie ou rabaissé(e).", points: 3 }, { text: "Parfois agacé(e) mais ça passe.", points: 2 }, { text: "Reboosté(e), heureux(se) et détendu(e).", points: 1 }] },
            { question: "Lorsque vous lui annoncez une bonne nouvelle, comment réagit-il/elle ?", options: [{ text: "Il/elle minimise ma réussite ou ramène tout à lui/elle.", points: 3 }, { text: "Il/elle félicite brièvement puis change de sujet.", points: 2 }, { text: "Il/elle se réjouit sincèrement pour moi.", points: 1 }] },
            { question: "Avez-vous l'impression de devoir marcher sur des œufs avec cette personne ?", options: [{ text: "Oui, j'ai peur de déclencher sa colère ou ses reproches.", points: 3 }, { text: "De temps en temps sur certains sujets.", points: 2 }, { text: "Jamais, je suis 100% moi-même.", points: 1 }] },
            { question: "La relation est-elle équilibrée entre donner et recevoir ?", options: [{ text: "Non, c'est toujours moi qui écoute, aide et fais des efforts.", points: 3 }, { text: "C'est un peu déséquilibré ces derniers temps.", points: 2 }, { text: "Oui, nous sommes là l'un pour l'autre à parts égales.", points: 1 }] },
            { question: "Vous fait-il/elle régulièrement des critiques déguisées sous forme d'humour ?", options: [{ text: "Oui, souvent devant les autres pour me mettre mal à l'aise.", points: 3 }, { text: "Parfois, mais je ne sais pas si c'est volontaire.", points: 2 }, { text: "Jamais, son humour est toujours bienveillant.", points: 1 }] },
            { question: "Comment réagit-il/elle lorsque vous lui dites 'non' ?", options: [{ text: "Il/elle me fait culpabiliser ou me fait la tête.", points: 3 }, { text: "Il/elle insiste lourdement avant d'accepter.", points: 2 }, { text: "Il/elle respecte ma décision sans problème.", points: 1 }] },
            { question: "Parle-t-il/elle souvent en mal de ses autres amis dans leur dos ?", options: [{ text: "Tout le temps, je me demande ce qu'il/elle dit de moi.", points: 3 }, { text: "De temps en temps quand il/elle est énervé(e).", points: 2 }, { text: "Jamais, c'est quelqu'un de loyal.", points: 1 }] },
            { question: "Avez-vous l'impression qu'il/elle essaie de vous isoler de vos autres proches ?", options: [{ text: "Oui, il/elle critique toujours mes autres amis ou mon partenaire.", points: 3 }, { text: "Il/elle préfère qu'on se voie uniquement tous les deux.", points: 2 }, { text: "Pas du tout, il/elle apprécie mon entourage.", points: 1 }] },
            { question: "Lorsque vous traversez un moment difficile, est-il/elle présent(e) ?", options: [{ text: "Non, il/elle disparaît dès que j'ai besoin de soutien.", points: 3 }, { text: "Il/elle envoie un message rapide sans s'impliquer.", points: 2 }, { text: "Oui, il/elle est toujours là pour me soutenir.", points: 1 }] },
            { question: "Reconnaît-il/elle ses torts lorsqu'il/elle vous a blessé(e) ?", options: [{ text: "Jamais, il/elle retourne toujours la situation contre moi.", points: 3 }, { text: "Difficilement et sans vraies excuses.", points: 2 }, { text: "Oui, il/elle s'excuse sincèrement.", points: 1 }] },
            { question: "Vous sentez-vous en compétition constante avec lui/elle ?", options: [{ text: "Oui, il/elle veut toujours prouver qu'il/elle fait mieux.", points: 3 }, { text: "Sur certains domaines parfois.", points: 2 }, { text: "Pas du tout, nous nous tirons vers le haut.", points: 1 }] },
            { question: "Respecte-t-il/elle votre intimité et vos secrets ?", options: [{ text: "Non, j'ai déjà appris qu'il/elle avait répété mes confidences.", points: 3 }, { text: "Je préfère ne pas tout lui dire par prudence.", points: 2 }, { text: "Oui, j'ai une confiance aveugle en lui/elle.", points: 1 }] },
            { question: "Est-ce que vos conversations tournent uniquement autour de ses problèmes ?", options: [{ text: "Oui, je me sens comme son psy gratuit.", points: 3 }, { text: "Souvent, même s'il/elle me demande parfois comment je vais.", points: 2 }, { text: "Non, chacun a son temps de parole.", points: 1 }] },
            { question: "Vous sentez-vous obligé(e) de vous justifier sur vos choix de vie ?", options: [{ text: "Oui, il/elle juge constamment mes décisions.", points: 3 }, { text: "Parfois sur certains sujets.", points: 2 }, { text: "Jamais, il/elle m'accepte tel(le) que je suis.", points: 1 }] },
            { question: "Comment réagit-il/elle si vous réussissez quelque chose qu'il/elle n'a pas ?", options: [{ text: "Avec froideur, jalousie ou sarcasme.", points: 3 }, { text: "Avec un enthousiasme très timide.", points: 2 }, { text: "Avec une grande fierté pour moi.", points: 1 }] },
            { question: "Avez-vous déjà eu peur de lire ses messages ?", options: [{ text: "Oui, j'appréhende souvent ses reproches ou son humeur.", points: 3 }, { text: "Quand on a eu un désaccord.", points: 2 }, { text: "Jamais, ses messages me font toujours plaisir.", points: 1 }] },
            { question: "Change-t-il/elle d'humeur brusquement sans raison apparente ?", options: [{ text: "Oui, je ne sais jamais sur quel pied danser.", points: 3 }, { text: "De temps en temps.", points: 2 }, { text: "Non, c'est quelqu'un de stable.", points: 1 }] },
            { question: "Minimise-t-il/elle vos émotions quand vous êtes triste ou stressé(e) ?", options: [{ text: "Oui, il/elle me dit que j'exagère ou que ce n'est rien.", points: 3 }, { text: "Il/elle change vite de sujet.", points: 2 }, { text: "Non, il/elle valide et écoute mes émotions.", points: 1 }] },
            { question: "Vous demande-t-il/elle souvent des services sans jamais rendre la pareille ?", options: [{ text: "Oui, j'ai l'impression d'être utilisé(e).", points: 3 }, { text: "C'est arrivé plusieurs fois.", points: 2 }, { text: "Non, c'est donnant-donnant.", points: 1 }] },
            { question: "Avez-vous déjà menti pour éviter de le/la voir ?", options: [{ text: "Oui, plusieurs fois par besoin de souffler.", points: 3 }, { text: "Une fois quand j'étais très fatigué(e).", points: 2 }, { text: "Jamais, j'ai toujours hâte de le/la voir.", points: 1 }] }
        ]
    },
    crush: {
        title: "Quelqu'un a-t-il un crush sur vous ?",
        results: [
            { min: 13, title: "Crush confirmé à 95% !", desc: "Tous les signaux sont au vert : regards insistants, attention aux détails et recherche de contact. Vous plaisez énormément à cette personne.", advice: "Si elle vous plaît aussi, tendez-lui une perche en lui proposant une sortie décontractée !" },
            { min: 9, title: "Un intérêt certain", desc: "Vous ne la laissez pas indifférent(e). Il y a de la sympathie et un début d'attirance, mais elle reste encore timide ou prudente.", advice: "Montrez-vous ouvert(e) et souriant(e) pour l'encourager à faire un pas de plus." },
            { min: 0, title: "Plutôt de la simple amitié", desc: "Pour le moment, son comportement ressemble davantage à de la politesse ou de la camaraderie qu'à un crush amoureux.", advice: "Ne tirez pas de conclusions hâtives : apprenez simplement à mieux vous connaître." }
        ],
        questions: [
            { question: "Comment se comporte cette personne lorsque vous êtes dans la même pièce ?", options: [{ text: "Je croise très souvent son regard et elle cherche à se rapprocher.", points: 3 }, { text: "Elle me sourit et vient me saluer facilement.", points: 2 }, { text: "Elle ne fait pas particulièrement attention à moi.", points: 1 }] },
            { question: "Qui relance généralement les conversations par message ?", options: [{ text: "Cette personne m'écrit souvent, même pour des prétextes banals.", points: 3 }, { text: "C'est assez équilibré entre nous deux.", points: 2 }, { text: "C'est presque toujours moi qui envoie le premier message.", points: 1 }] },
            { question: "Se souvient-elle des petits détails que vous lui racontez ?", options: [{ text: "Oui, elle retient tout, même ce que j'ai dit il y a plusieurs semaines.", points: 3 }, { text: "Elle retient les choses importantes.", points: 2 }, { text: "Non, elle oublie souvent ce que je lui dis.", points: 1 }] },
            { question: "Comment réagit-elle à vos blagues ou vos remarques ?", options: [{ text: "Elle rit presque à tout ce que je dis, même quand ce n'est pas drôle.", points: 3 }, { text: "Elle sourit et participe à la bonne humeur.", points: 2 }, { text: "Elle reste neutre ou sérieuse.", points: 1 }] },
            { question: "Cherche-t-elle des excuses pour un contact physique léger (bras, épaule) ?", options: [{ text: "Oui, elle trouve toujours un prétexte pour me toucher.", points: 3 }, { text: "De temps en temps, naturellement.", points: 2 }, { text: "Jamais, elle garde toujours ses distances.", points: 1 }] },
            { question: "Comment vous regarde-t-elle lorsque vous parlez ?", options: [{ text: "Avec une grande attention et un sourire doux.", points: 3 }, { text: "Normalement, comme tout le monde.", points: 2 }, { text: "Elle regarde ailleurs ou sur son téléphone.", points: 1 }] },
            { question: "Vous pose-t-elle beaucoup de questions sur votre vie personnelle et amoureuse ?", options: [{ text: "Oui, elle veut savoir si je suis célibataire et ce que j'aime.", points: 3 }, { text: "Quelques questions générales par politesse.", points: 2 }, { text: "Aucune question sur ma vie privée.", points: 1 }] },
            { question: "Comment réagit-elle sur vos réseaux sociaux (stories, photos) ?", options: [{ text: "Elle like et commente presque tout très rapidement.", points: 3 }, { text: "Elle réagit de temps en temps.", points: 2 }, { text: "Elle ne réagit jamais.", points: 1 }] },
            { question: "Change-t-elle légèrement d'attitude ou de voix quand elle vous parle ?", options: [{ text: "Oui, elle semble un peu nerveuse, excitée ou plus douce.", points: 3 }, { text: "Un peu plus dynamique que d'habitude.", points: 2 }, { text: "Non, elle parle exactement pareil à tout le monde.", points: 1 }] },
            { question: "Vous fait-elle des compliments sur votre physique ou votre style ?", options: [{ text: "Oui, régulièrement et avec sincérité.", points: 3 }, { text: "De temps en temps quand je fais un effort.", points: 2 }, { text: "Jamais.", points: 1 }] },
            { question: "Comment réagit-elle si vous parlez d'une autre personne attirante devant elle ?", options: [{ text: "Elle devient soudainement froide, taquine ou curieuse.", points: 3 }, { text: "Elle écoute sans trop réagir.", points: 2 }, { text: "Elle m'encourage à aller lui parler.", points: 1 }] },
            { question: "Propose-t-elle souvent de passer du temps ensemble en tête-à-tête ?", options: [{ text: "Oui, elle cherche clairement à me voir seul(e).", points: 3 }, { text: "De temps en temps, autour d'un café.", points: 2 }, { text: "Non, uniquement en groupe.", points: 1 }] },
            { question: "Avez-vous remarqué qu'elle imite inconsciemment vos gestes ou expressions ?", options: [{ text: "Oui, très souvent.", points: 3 }, { text: "Une ou deux fois peut-être.", points: 2 }, { text: "Pas du tout.", points: 1 }] },
            { question: "À quelle vitesse répond-elle généralement à vos messages ?", options: [{ text: "Presque instantanément dès qu'elle le peut.", points: 3 }, { text: "Dans un délai raisonnable.", points: 2 }, { text: "Plusieurs heures ou jours plus tard.", points: 1 }] },
            { question: "En groupe, où choisit-elle généralement de s'asseoir ?", options: [{ text: "Juste à côté de moi ou juste en face.", points: 3 }, { text: "Pas très loin.", points: 2 }, { text: "À l'autre bout de la table.", points: 1 }] },
            { question: "Vous envoie-t-elle des messages tard le soir ou dès le réveil ?", options: [{ text: "Oui, je fais partie de ses premières et dernières pensées.", points: 3 }, { text: "Parfois le week-end.", points: 2 }, { text: "Jamais en dehors des heures classiques.", points: 1 }] },
            { question: "Avez-vous déjà surpris cette personne en train de vous fixer discrètement ?", options: [{ text: "Oui, et elle a détourné le regard en souriant ou en rougissant.", points: 3 }, { text: "Une fois par hasard.", points: 2 }, { text: "Jamais.", points: 1 }] },
            { question: "Vous envoie-t-elle des mèmes, vidéos ou chansons en disant 'ça m'a fait penser à toi' ?", options: [{ text: "Très régulièrement.", points: 3 }, { text: "De temps en temps.", points: 2 }, { text: "Jamais.", points: 1 }] },
            { question: "Ses pieds et son buste sont-ils tournés vers vous quand vous discutez ?", options: [{ text: "Oui, son langage corporel est totalement ouvert vers moi.", points: 3 }, { text: "La plupart du temps.", points: 2 }, { text: "Non, elle semble pressée de partir.", points: 1 }] },
            { question: "Votre intuition vous souffle-t-elle que vous lui plaisez ?", options: [{ text: "Oui, les signes sont évidents.", points: 3 }, { text: "J'ai un petit doute positif.", points: 2 }, { text: "Non, je ne pense pas.", points: 1 }] }
        ]
    }
};

const generatorQuestions = {
    amitie: {
        low: [
            "Quelle est la première impression que tu as eue de moi ?",
            "Quel est ton plus beau souvenir de vacances entre amis ?",
            "Si on devait partir en road-trip demain, quelle destination choisirais-tu ?",
            "Quelle est la chose la plus drôle que l'on ait faite ensemble ?",
            "Quel talent caché aimerais-tu posséder ?",
            "Quelle est la pire excuse que tu aies inventée pour annuler une sortie ?"
        ],
        medium: [
            "Quelle est la chose que tu n'as jamais osé me dire en face ?",
            "As-tu déjà été jaloux(se) d'une réussite ou d'une relation d'un ami ici présent ?",
            "Quel est le plus gros mensonge que tu aies raconté à tes parents ?",
            "Si tu devais changer une chose dans notre groupe d'amis, ce serait quoi ?",
            "Quelle est ta plus grande peur concernant ton avenir ?",
            "As-tu déjà fouillé dans le téléphone de quelqu'un ?"
        ],
        hot: [
            "As-tu déjà eu un crush secret sur quelqu'un dans ce groupe d'amis ?",
            "Quel est ton plus grand regret amoureux ou sentimental ?",
            "Quelle est la chose la plus folle que tu aies faite par attirance pour quelqu'un ?",
            "As-tu déjà embrassé quelqu'un uniquement pour rendre une autre personne jalouse ?",
            "Quel est le pire rendez-vous amoureux de ta vie ?",
            "Avec quelle personne de notre entourage pourrais-tu envisager un flirt si vous étiez célibataires ?"
        ],
        superhot: [
            "Quel est ton fantasme inavoué que tu n'as jamais partagé avec personne ?",
            "Quelle est la chose la plus audacieuse que tu aies faite dans un lieu public ?",
            "As-tu déjà eu une aventure d'un soir avec une connaissance commune ?",
            "Quelle est la limite que tu t'étais fixée dans l'intimité mais que tu as finalement franchie par désir ?",
            "Quel est ton plus grand secret intime que personne ici ne soupçonne ?",
            "As-tu déjà envoyé une photo ou un message très osé à la mauvaise personne ?"
        ]
    },
    meilleurs_amis: {
        low: [
            "À quel moment précis as-tu su qu'on allait devenir meilleurs amis ?",
            "Quel est mon plus gros tic de langage ou ma manie la plus drôle ?",
            "Si on devait monter un business ensemble, ce serait dans quel domaine ?",
            "Quelle chanson te fait immédiatement penser à moi ?",
            "Quel est le meilleur conseil que je t'aie jamais donné ?",
            "Quelle est notre plus grosse honte partagée en public ?"
        ],
        medium: [
            "Y a-t-il un moment où je t'ai déçu(e) sans que tu me le dises ?",
            "Quel secret gardes-tu depuis longtemps par peur d'être jugé(e) ?",
            "Quelle est la pire décision que tu m'aies vu prendre ?",
            "De quoi as-tu le plus honte dans ton passé ?",
            "Si je sortais avec ton ex, quelle serait ta vraie réaction ?",
            "Quelle est la chose que tu envies le plus dans ma vie ou ma personnalité ?"
        ],
        hot: [
            "Qui a été ton meilleur baiser et pourquoi ?",
            "As-tu déjà fantasmé sur un(e) de mes ex ou l'un(e) de mes crushs ?",
            "Quelle est la plus grosse bêtise que tu aies faite en soirée et que tu m'as cachée ?",
            "As-tu déjà menti sur ta vie amoureuse pour paraître plus expérimenté(e) ?",
            "Quel est le détail physique qui te fait craquer instantanément chez quelqu'un ?",
            "As-tu déjà eu des sentiments ambigus envers moi à un moment donné ?"
        ],
        superhot: [
            "Quelle est ton expérience intime la plus mémorable ou la plus surprenante ?",
            "As-tu déjà trompé quelqu'un ou été complice d'une infidélité ?",
            "Quelle est la chose la plus taboue que tu aimerais essayer au moins une fois dans ta vie ?",
            "Quel est le secret le plus intime de ton historique de recherche ?",
            "Si personne ne devait jamais le savoir, avec qui de notre entourage passerais-tu une nuit ?",
            "Quelle est la confession la plus brûlante que tu n'as jamais osé faire, même à moi ?"
        ]
    },
    couple: {
        low: [
            "Quel est ton tout premier souvenir de notre rencontre ?",
            "Quelle petite attention de ma part te fait toujours fondre ?",
            "Quel voyage rêves-tu que l'on fasse ensemble ?",
            "Quelle est la qualité que tu admires le plus chez moi ?",
            "Quelle soirée parfaite aimerais-tu qu'on organise cette semaine ?",
            "Qu'est-ce qui t'a attiré chez moi dès le premier regard ?"
        ],
        medium: [
            "Y a-t-il un sujet que tu évites d'aborder avec moi par peur de me blesser ?",
            "Quelle est ta plus grande insécurité dans notre relation ?",
            "À quel moment t'es-tu senti(e) le plus proche de moi récemment ?",
            "Qu'est-ce que je fais parfois qui t'agace mais que tu n'oses pas me dire ?",
            "Comment imagines-tu notre couple dans 5 ans ?",
            "Quel souvenir de nous deux aimerais-tu revivre à l'identique ?"
        ],
        hot: [
            "Quelle est la partie de mon corps que tu préfères embrasser ?",
            "Quel est le moment le plus sensuel que nous ayons partagé ensemble ?",
            "Quelle tenue ou quel look chez moi te fait perdre tous tes moyens ?",
            "Quel est ton plus grand désir à mon égard en ce moment même ?",
            "Préfères-tu quand je prends les devants ou quand je te laisse le contrôle ?",
            "Quel endroit insolite aimerais-tu que l'on teste ensemble ?"
        ],
        superhot: [
            "Quel est ton fantasme le plus secret que nous n'avons pas encore réalisé ensemble ?",
            "Quelle est la chose la plus audacieuse que tu aimerais que je te fasse ce soir ?",
            "Y a-t-il un jeu de rôle ou un scénario intime que tu brûles d'envie d'essayer avec moi ?",
            "Quel est le souvenir le plus torride de notre couple qui te revient souvent en tête ?",
            "Quelle limite aimerais-tu qu'on explore ensemble dans notre intimité ?",
            "Si tu avais carte blanche pendant une heure sans aucun tabou, que ferais-tu ?"
        ]
    }
};

            