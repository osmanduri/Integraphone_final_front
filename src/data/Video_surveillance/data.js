const systemes_de_conference = [
    {
        titre:"Visualiseur",
        img:"visuel.png",
        text:"Le visualiseur est un outil de visioconférence de petite taille qui vous permettra de diffuser sur un écran intéractif ou un tableau blanc tous vos documents ou objets physiques. Pouvant être à bras mécanique, flexible ou encore USB, cette caméra vous donnera l’occasion de renforcer l’attractivité de votre présentation grâce à sa capacité d’annotation et ses images d’une qualité supérieure."
    },
    {
        titre:"Caméra autosuiveuse",
        img:"camera_autosuiveuse.png",
        text:"Les caméras de visioconférence traditionnelles peuvent vite se retrouver en difficultées lorsque vous vous mettez en mouvement lors de votre présentation. Grâce à son Intelligence Intégrée, la caméra autosuiveuse vous évite tout cela. Conçue pour faire face à toute perte de netteté ou sortie de champ lors de vos déplacements, son suivi automatique vous permettra une qualité d’image en Haute Définition à tout moment."
    },
    {
        titre:"Barre vidéo/son",
        img:"barre_video_son.png",
        text:"La barre de vidéo et de son vous permet de réunir, en un seul produit, des images hautes définition ainsi qu’une qualité sonore exceptionnelle. Conçu pour les salles de réunion de petite et moyenne taille, cet équipement tout-en-un vous fera profiter de nombreuses technologies comme le suivi audio, le cadrage automatique ou le grand angle pour rendre vos échanges à distance les plus réalistes possibles."
    },
    {
        titre:"Caméra de conférence",
        img:"camera_conference.png",
        text:"De la petite à la grande salle de réunion, la caméra de conférence est l’élément primordial pour toute visioconférence de qualité. Avec l’intégration de nombreuses technologies telles que la résolution en 4K, le grand angle ou le zoom détaillé mais aussi d’innovations de plus en plus nombreuses comme le cadrage intelligent, la caméra de conférence vous offre l’opportunité de vivre des réunions distancielles proches du réel. "
    },
    {
        titre:"Speakrphone",
        img:"speaker_phone.png",
        text:"Interférences, grésillements, coupures,... sans un équipement de qualité, vos échanges à distance peuvent être interrompus par de nombreux problèmes techniques. Le speakerphone (ou haut-parleur de conférence) vous assure ainsi une qualité sonore de haute qualité et facilite par la même occasion vos discussions grâce à des technologies comme la suppression du bruit ou encore la détection de double parole."
    },
    {
        titre:"Ecran interactif",
        img:"ecran_interactif.png",
        text:"Lors d’une visioconférence, il peut être difficile de rester attractif auprès de son audience tout le long de la réunion. L’écran interactif vous permettra d’optimiser la productivité de vos échanges grâce à son côté collaboratif et participatif. En effet, en plus d’être un support parfait pour le partage d’écran traditionnel, sa capacité d’annotation instantanée, son interaction tactile et sa transformation potentielle en tableau blanc feront de votre écran interactif l’outil parfait pour des réunions intuitives et efficaces."
    }
]

const video_surveillance = [
    {
        titre:"Caméra IP",
        img:"camera_ip.png",
        text:"La caméra IP (Internet Protocol) est une caméra connectée au réseau internet (via câble RJ45 ou en Wi-Fi) offrant une fiabilité et une sérénité à toute épreuve. En plus de vous fournir des images d’une qualité largement supérieure à celle d’une caméra analogique, la caméra IP vous permettra de consulter les images de votre système de vidéo-surveillance à distance et sur n’importe quel support : smartphone, ordinateur, tablette,... Dans le cas où vous ne seriez pas en train de visionner ses images, son système d’alerte vous permettra d’être prévenu en cas d’anomalie pour une sécurité assurée à tout moment."
    },
    {
        titre:"Caméra PTZ",
        img:"camera_ptz.png",
        text:"Conçue pour surveiller de grands périmètres comme les parkings, les carrefours ou encore de grandes places, la caméra PTZ offre de nombreux avantages. En effet, grâce à la combinaison des fonctions de panoramique, d’inclinaison et de zoom, ce système vous permettra de couvrir une zone étendue tout en offrant l’opportunité de se concentrer sur une zone précise, de manière précise, en cas d’anomalie."
    },
    {
        titre:"Caméra HDCVI / HDTVI",
        img:"camera_hdcvi _hdtvi.png",
        text:"Les caméras HDCVI / HDTVI sont les seules caméras basées sur un système coaxial à bénéficier d’une qualité d’image en HD. Ces technologies transmettent également en simultanée de 4 signaux : audio, vidéo, données et alimentation sur un seul câble coaxial vous offrant ainsi une solution la plus complète possible. Enfin, grâce à leur transmission longue distance, les technologies HDCVI et HDTVI  vous permettront de couvrir une zone plus grande et ce, sans perte de signal."
    },
    {
        titre:"Caméra thermique",
        img:"camera_thermique.png",
        text:"La caméra thermique vous permet de visualiser les radiations invisibles et rayonnements infrarouges émises par des objets et personnes dont la température est supérieure à 0°C sous la forme de zones de chaleur. Fonctionnant dans des conditions difficiles telles qu’une obscurité extrême ou de mauvaises conditions météorologiques, la caméra thermique vous assurera une surveillance de vos locaux et une connaissance des événements qu’il s’agisse d’une intrusion ou d’une détection d’incendie 24h/24, 7j/7. "
    },
    {
        titre:"Caméra panoramique",
        img:"camera_panoramique.png",
        text:"Dans les grands environnements, la surveillance peut être rendue difficile sans une installation complète composée de plusieurs caméras. Avec la caméra panoramique, le problème ne se pose plus. En effet, grâce à des images panoramiques allant jusqu’à 360°, elle vous permettra d’avoir une vue d’ensemble dans une seule "
    },
    {
        titre:"Caméra antidéflagrante",
        img:"camera_antideflagrante.png",
        text:"Certains sites traitant des produits chimiques ou autres matériaux inflammables présentent un risque accru d’incendies et d’explosions. Dans cet environnement, la présence de caméras de vidéo-surveillance traditionnelles semble improductive. Au contraire de la caméra antidéflagration qui est prévue à cet effet. Enfermée dans un boîtier acier inoxydable renforcé par un joint antidéflagrant, cette caméra vous offrira une résistance aux explosions internes causées par les potentiels incendies."
    },
    {
        titre:"Caméra anti-corrosion",
        img:"camera_anticorrosion.png",
        text:"Espaces maritimes, usines chimiques,... de nombreux endroits doivent faire face à des environnements corrosifs dans lesquels les caméras traditionnelles peuvent vite se détériorer. Grâce à leur revêtement en acier inoxydable et les nombreuses normes auxquelles elles se soumettent, les caméras anti-corrosion vous offrent une fiabilité face à l’eau de mer salée, l’air marin, les environnements chimiques,... vous assurant une surveillance à toute épreuve."
    },
    {
        titre:"Caméra mobile",
        img:"camera_mobile.png",
        text:"Destinée à répondre aux besoins de vidéo-surveillance des différents moyens de transport comme les camions, bus, taxis,... la caméra mobile vous assure un voyage en toute sérénité. Résistante face aux changements de température, de luminosité ou aux vibrations extrêmes, cette caméra vous offrira des images de haute qualité en continue peu importe l’environnement dans lequel vous vous trouvez."
    },
    
]

const nos_alarmes = [
    {
        titre:"Alarme sans fil",
        img:"alarme_sansfil.png",
        text:"Connecté directement à votre réseau, le système d’alarme sans fil confère de nombreux avantages propres à son fonctionnement. En plus d’être, comme tout système d’alarme, un élément de sécurité efficace, son déploiement non filaire vous permettra une installation rapide et simplifiée. Pouvant être placé et déplacé à l’endroit souhaité, l’alarme sans fil vous fera également profiter d’une évolutivité facile de votre installation en fonction de vos besoins."
    },
    {
        titre:"Alarme filaire",
        img:"alarme_filaire.png",
        text:"Dans un contexte où les installations non filaires sont de plus en plus fréquentes, l’alarme filaire reste une référence de qualité des systèmes de sécurité en entreprise. En effet, son système câblé vous offrira une installation résistante à toutes les interférences et/ou piratages pour un fonctionnement et une protection de vos locaux en continu."
    },
    {
        titre:"Centrale d’alarme",
        img:"central_alarme.png",
        text:"La centrale est, comme son nom l’indique, le cœur de votre système de sécurité. Grâce à cet outil, vous pourrez gérer et piloter l’ensemble des composants constituant votre système de sécurité. C’est également votre centrale d’alarme qui recevra les différents signaux en cas de déclenchement d’une alarme et qui vous en informera, faisant ainsi d’elle un élément primordial pour votre infrastructure."
    },
    {
        titre:"Détecteur",
        img:"detecteur.png",
        text:"Incendie, intrusion, bris de glace,... les risques encourus par une entreprise peuvent être nombreux et parfois difficilement repérables notamment lorsqu’aucun des collaborateurs n’est présent sur le site. Installer un système de détection vous permettra de déclencher une alerte à tout moment et d’être prévenu en cas d’anomalies vous aidant ainsi à faire face à ces situations et à réduire les potentiels dégâts."
    }

]

const nos_controle_acces = [
    {
        titre:"Digicode",
        img:"digicode.png",
        text:"Le digicode est un appareil électronique d’ouverture basé sur la composition d’un code secret. Ainsi, seules les personnes en possession de ce dernier pourront entrer dans vos locaux ou vos bureaux vous assurant ainsi une sécurité face aux effractions et/ou cambriolages. Ce système a également un côté pratique puisqu’ils évitent l’utilisation de clé, carte ou badge pouvant être égarés à tout moment."
    },
    {
        titre:"Biométrie",
        img:"biometrie.png",
        text:"Avec le lecteur biométrique plus besoin de carte, de badge ou de code secret pour entrer dans les locaux de votre entreprise. Vous devenez votre propre clé !En effet, basé sur vos caractéristiques physiques, ce système d’accessibilité vous permettra de vous rendre dans vos bureaux grâce à vos empreintes digitales."
    },
    {
        titre:"Lecteur de badges",
        img:"lecteur_badge.png",
        text:"Avec une carte ou un badge, sur un lecteur longue portée ou de proximité, le lecteur de badge (et ses multiples possibilités) est devenu un des systèmes d’accès les plus répandus dans les entreprises aujourd’hui. Facilement modulable et paramétrable pour donner un accès restreint à certaines zones, pouvant servir de contrôle des flux entrants et sortants, le lecteur de badges vous assure un système de sécurité fiable."
    },
    {
        titre:"Interphone IP",
        img:"interphone_ip.png",
        text:"Connecté directement à votre réseau internet, l’interphonie IP est l’alliance parfaite d’une communication audio/vidéo et d’un lecteur de contrôle d’accès. Encastré, en saillie, modulaire, robuste,... peu importe son format, cet interphone sa technologie IP vous fera profiter d’une qualité audio et vidéo largement supérieure à celle d’un système analogique, en plus de nombreuses fonctionnalités possibles (contrôle via mobile, écran tactile,...)"
    },
    {
        titre:"Lecteur IP",
        img:"lecteur_ip.png",
        text:"Relié directement à votre réseau internet, le lecteur IP vous permet de bénéficier d’une multitude de combinaison de technologies d’accessibilité. RFID, PIN, empreintes et même Bluetooth, tous vous donneront accès à vos locaux. Cette dernière technologie vous permettra d’ailleurs d’utiliser votre téléphone mobile comme une clé, vous donnant ainsi l’assurance de l’avoir toujours auprès de vous."
    }
]

const wildix = [
    {
        titre:"Wildix",
        img:"wildix.webp",
        text:"Fondée en 2005, Wildix est une entreprise se définissant comme “la première solution de communications unifiées axée sur les ventes”. Spécialisée dans les produits utilisant la technologie Voix sur IP (VoIP), Wildix propose une large gamme de téléphones IP. Du manager souhaitant surveiller l’activité téléphonique de son entreprise au téléphone le plus simple conçu pour les employés en passant par celui compatible pour la visioconférence,... ces derniers ont tous des caractéristiques qui leurs sont propres. Ainsi, vous trouverez forcément la solution adaptée à vos besoins qu’ils soient techniques ou économiques vous offrant ainsi une optimisation de votre communication interne et externe."
    }
]

const video_surveillance_partenaire = [
    {
        titre:"Hikvision",
        img:"hkvision2.png",
        text:"Grâce à de nombreux investissements effectués dans la Recherche & Développement, Hikvision se positionne aujourd’hui comme l’un des premiers fournisseurs de solution IoT au monde, au niveau de la vidéosurveillance. En choisissant Hikvision, vous aurez ainsi accès à des produits innovants basés, de plus en plus, sur l’Intelligence Artificielle avec des caractéristiques telles que l’AcuSense, la reconnaissance faciale et bien d’autres encore. Enfin, la marque fondée en 2001 propose une large gamme de caméras (réseau, PTZ, Turbo HD, thermique, antidéflagrante, anticorrosion) adaptées à tous les secteurs, scénarios et tailles d’entreprises."
    },
    {
        titre:"Dahua",
        img:"dahua.png",
        text:"Deuxième plus grand fabricant de système de vidéosurveillance au monde après Hikvision, Dahua se base, à l’instar de son homologue, sur de forts investissements en Recherche & Développement afin de fournir les produits les plus innovants possibles. Caméra réseau, PTZ, HDCVI, thermique, EZ-IP,... la marque chinoise propose une large gamme de solutions répondant à tous les besoins du marché. Enfin, parce que les entreprises n’ont pas tous les mêmes budgets et ambitions pour leurs installations, Dahua propose 3 versions de leurs produits : Lite, Pro et Ultra afin d’offrir des prestations optimales et adaptées de la petite entreprise à la grande structure. "
    }
]

const alarme_partenaire = [
    {
        titre:"Ajax",
        img:"ajax.png",
        text:"Lancé en 2011, Ajax Systems, qui se définit comme une “société de technologie”, a su devenir un acteur majeur des systèmes de sécurité en entreprise.Basés sur de nombreuses innovations, ses produits feront passer votre dispositif d’alarme en mode 2.0 ! Systèmes modulables, contrôle du hub jusqu’à 2000 mètres de distance, gestion complète via application mobile et/ou desktop... Ces fonctionnalités vous offriront une installation inédite et personnalisée. Choisir Ajax c’est bénéficier d’appareils sur batterie avec une autonomie de 7 ans et d’une fiabilité face à des menaces externes (piratage, brouillage, interception) de plus en plus fréquentes !"
    },
    {
        titre:"Daitem",
        img:"daitem.png",
        text:"Entreprise ancrée dans le domaine de la sécurité depuis plus de 45 ans maintenant, la marque Daitem est à l’origine d’un système ayant révolutionné le marché : l’alarme sans fil. Avec une conception et une fabrication 100% françaises, vous bénéficierez de produits fiables et robustes, notamment grâce à leur blindage métallique, système d’autoprotection et à la technologie TwinBand. En plus de ces caractéristiques, les produits Daitem vous permettront d’opter pour une installation rapide, autonome et modulable grâce à son système sans fil que vous soyez une petite entreprise ou une grande structure multi-sites."
    }
]

const controle_acces_partenaire = [
    {
        titre:"Cdvi",
        img:"cdvi.png",
        text:"Entreprise fondée en 1985, CDVI est un fabricant de solutions de contrôle d’accès à l’origine, notamment, de produits tels que le Digicode et autres systèmes de verrouillage brevetés. Fort de ces 37 années d’expérience, la marque française propose aujourd’hui de nombreux produits répondant à tous les besoins en contrôle d’accès des entreprises : digicodes, contrôle d’accès centralisé et autonome, lecteurs, interphonie, systèmes de verrouillage et bien d’autres encore.Enfin, grâce à ses multiples pôles de R&D (France, Italie, Canada) et d’une conception, développement et maintenance effectués à 100% en France, vous aurez l’assurance de bénéficier de solutions d’une fiabilité exceptionnelle garanties 10 ans."
    },
    {
        titre:"2N",
        img:"2n.png",
        text:"Racheté par Axis Communications en 2016, 2N est un fabricant de systèmes de contrôle d’accès à l’origine du développement des interphones IP et LTE. Distribuée dans plus de 130 pays, cette entreprise vous permettra d’accéder à des solutions modernes et durables.Interphonie IP, contrôle d’accès IP, moniteur de réception,... ces produits vous offriront un contrôle total de l’accessibilité de vos locaux. Dans cette lignée innovante, la société 2N a développé de nombreuses applications logicielles vous permettant de contrôler et gérer vos systèmes directement sur votre mobile ou desktop et même de communiquer via ces différentes interfaces."
    }
]

const serveur_et_hebergement_partenaire = [
    {
        titre:"Lenovo",
        img:"lenovo.png",
        text:"Lenovo est une des marques du secteur que l’on ne présente plus. Fabricant de nombreux produits tels que des téléphones, ordinateurs, télévisions,... l’entreprise chinoise est également reconnue pour la qualité de ses serveurs informatiques. Sa gamme de serveurs Think System a d’ailleurs été classée première en termes de fiabilité et disponibilité parmi les plateformes Intel x86 selon l’enquête internationale 2021 de l’ITIC. De par cette reconnaissance, vous vous assurez de bénéficier d’un service de qualité, évolutif et adapté à vos besoins grâce à ses différents types de serveur : rack, tour, Edge, stratégiques, lame, haute densité,..."
    },
    {
        titre:"Fujitsu",
        img:"fujitsu.png",
        text:"S’appuyant sur plus de 85 années d’expérience, Fujitsu est l’un des pionniers en technologie de l’information et de la communication (TIC). En effet, grâce à ses 126 000 salariés et sa présence dans plus de 100 pays, la marque japonais déploie aujourd’hui de nombreuses solutions dans l’informatique, l’IA ou encore la sécurisation des données,... Fujitsu, c’est également des serveurs s’adaptant à tous les besoins qu’ils soient économiques ou matériels grâce à de nombreuses séries : PRIMERGY, PRIMEQUEST, GS21 et PRIMEHPC. Enfin, pour accompagner l’arrivée de vos nouveaux serveurs, Fujitsu vous propose une large gamme de logiciels qui vous permettront une gestion simplifiée de vos infrastructures."
    }
]



module.exports = { systemes_de_conference, video_surveillance, nos_alarmes, nos_controle_acces, wildix, video_surveillance_partenaire, alarme_partenaire, controle_acces_partenaire, serveur_et_hebergement_partenaire }