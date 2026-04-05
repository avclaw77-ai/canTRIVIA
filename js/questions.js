/**
 * canTRIVIA question bank
 * Each question has: category, difficulty, type (mc/tf), question (en/fr),
 * options (en/fr), correctIndex, funFact (en/fr)
 */
const QUESTIONS = [
  // ═══════════════════════════════════════════
  // HISTORY
  // ═══════════════════════════════════════════
  {
    category: "history",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "In what year did Canada officially become a country through Confederation?",
      fr: "En quelle année le Canada est-il officiellement devenu un pays par la Confédération?"
    },
    options: {
      en: ["1867", "1776", "1812", "1901"],
      fr: ["1867", "1776", "1812", "1901"]
    },
    correctIndex: 0,
    funFact: {
      en: "The British North America Act united Ontario, Quebec, Nova Scotia, and New Brunswick on July 1, 1867.",
      fr: "L'Acte de l'Amérique du Nord britannique a uni l'Ontario, le Québec, la Nouvelle-Écosse et le Nouveau-Brunswick le 1er juillet 1867."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which battle in World War I is considered a defining moment for Canadian national identity?",
      fr: "Quelle bataille de la Première Guerre mondiale est considérée comme un moment déterminant pour l'identité nationale canadienne?"
    },
    options: {
      en: ["Battle of Vimy Ridge", "Battle of the Somme", "Battle of Ypres", "Battle of Passchendaele"],
      fr: ["Bataille de la crête de Vimy", "Bataille de la Somme", "Bataille d'Ypres", "Bataille de Passchendaele"]
    },
    correctIndex: 0,
    funFact: {
      en: "Vimy Ridge (April 1917) was the first time all four Canadian divisions fought together. The victory earned Canada a separate signature on the Treaty of Versailles.",
      fr: "La crête de Vimy (avril 1917) a été la première fois que les quatre divisions canadiennes ont combattu ensemble. La victoire a valu au Canada une signature distincte au Traité de Versailles."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the last province to join Canadian Confederation?",
      fr: "Quelle a été la dernière province à se joindre à la Confédération canadienne?"
    },
    options: {
      en: ["Newfoundland and Labrador", "British Columbia", "Alberta", "Saskatchewan"],
      fr: ["Terre-Neuve-et-Labrador", "Colombie-Britannique", "Alberta", "Saskatchewan"]
    },
    correctIndex: 0,
    funFact: {
      en: "Newfoundland joined Canada in 1949 after a very close referendum — just 52.3% voted to join Confederation.",
      fr: "Terre-Neuve a rejoint le Canada en 1949 après un référendum très serré — seulement 52,3 % ont voté pour rejoindre la Confédération."
    }
  },
  {
    category: "history",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "Canada's current flag with the maple leaf was adopted in 1965.",
      fr: "Le drapeau actuel du Canada avec la feuille d'érable a été adopté en 1965."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "The Great Canadian Flag Debate lasted months in Parliament. The red-and-white maple leaf design replaced the Red Ensign on February 15, 1965.",
      fr: "Le Grand débat sur le drapeau canadien a duré des mois au Parlement. Le design de la feuille d'érable rouge et blanc a remplacé le Red Ensign le 15 février 1965."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Who was Canada's first Prime Minister?",
      fr: "Qui a été le premier premier ministre du Canada?"
    },
    options: {
      en: ["Sir John A. Macdonald", "Sir Wilfrid Laurier", "Alexander Mackenzie", "Sir Robert Borden"],
      fr: ["Sir John A. Macdonald", "Sir Wilfrid Laurier", "Alexander Mackenzie", "Sir Robert Borden"]
    },
    correctIndex: 0,
    funFact: {
      en: "Macdonald served as PM for 19 years total across two terms. He was instrumental in building the Canadian Pacific Railway.",
      fr: "Macdonald a servi comme PM pendant 19 ans au total en deux mandats. Il a joué un rôle crucial dans la construction du chemin de fer Canadien Pacifique."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "In which year did the Canadian Charter of Rights and Freedoms come into effect?",
      fr: "En quelle année la Charte canadienne des droits et libertés est-elle entrée en vigueur?"
    },
    options: {
      en: ["1982", "1967", "1975", "1990"],
      fr: ["1982", "1967", "1975", "1990"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Charter was part of the Constitution Act, 1982, which also patriated the Constitution from the UK. Queen Elizabeth II signed it in Ottawa.",
      fr: "La Charte faisait partie de la Loi constitutionnelle de 1982, qui a aussi rapatrié la Constitution du Royaume-Uni. La reine Élisabeth II l'a signée à Ottawa."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "The Underground Railroad helped enslaved people escape to Canada, where slavery had been abolished earlier than in the United States.",
      fr: "Le chemin de fer clandestin a aidé des personnes réduites en esclavage à fuir vers le Canada, où l'esclavage avait été aboli plus tôt qu'aux États-Unis."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "An estimated 30,000 enslaved people reached Canada through the Underground Railroad. Upper Canada abolished slavery in 1793, and the British Empire fully abolished it in 1834.",
      fr: "On estime que 30 000 personnes réduites en esclavage ont atteint le Canada par le chemin de fer clandestin. Le Haut-Canada a aboli l'esclavage en 1793, et l'Empire britannique l'a complètement aboli en 1834."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which event in 1970 led Prime Minister Trudeau to invoke the War Measures Act in peacetime?",
      fr: "Quel événement en 1970 a conduit le premier ministre Trudeau à invoquer la Loi sur les mesures de guerre en temps de paix?"
    },
    options: {
      en: ["October Crisis (FLQ kidnappings)", "Winnipeg General Strike", "Oka Crisis", "Manitoba Schools Question"],
      fr: ["Crise d'octobre (enlèvements du FLQ)", "Grève générale de Winnipeg", "Crise d'Oka", "Question des écoles du Manitoba"]
    },
    correctIndex: 0,
    funFact: {
      en: "The FLQ kidnapped British diplomat James Cross and Quebec minister Pierre Laporte. It was the only peacetime use of the War Measures Act in Canadian history.",
      fr: "Le FLQ a kidnappé le diplomate britannique James Cross et le ministre québécois Pierre Laporte. C'était la seule utilisation en temps de paix de la Loi sur les mesures de guerre dans l'histoire du Canada."
    }
  },

  // ═══════════════════════════════════════════
  // GEOGRAPHY
  // ═══════════════════════════════════════════
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the capital city of Canada?",
      fr: "Quelle est la capitale du Canada?"
    },
    options: {
      en: ["Ottawa", "Toronto", "Montreal", "Vancouver"],
      fr: ["Ottawa", "Toronto", "Montréal", "Vancouver"]
    },
    correctIndex: 0,
    funFact: {
      en: "Queen Victoria chose Ottawa as the capital in 1857, partly because it sat on the border of Ontario and Quebec.",
      fr: "La reine Victoria a choisi Ottawa comme capitale en 1857, en partie parce qu'elle se trouvait à la frontière de l'Ontario et du Québec."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "How many provinces and territories does Canada have?",
      fr: "Combien de provinces et de territoires le Canada possède-t-il?"
    },
    options: {
      en: ["13 (10 provinces, 3 territories)", "12 (10 provinces, 2 territories)", "15 (12 provinces, 3 territories)", "10 provinces"],
      fr: ["13 (10 provinces, 3 territoires)", "12 (10 provinces, 2 territoires)", "15 (12 provinces, 3 territoires)", "10 provinces"]
    },
    correctIndex: 0,
    funFact: {
      en: "The three territories are Yukon, Northwest Territories, and Nunavut. Nunavut is the newest, created in 1999.",
      fr: "Les trois territoires sont le Yukon, les Territoires du Nord-Ouest et le Nunavut. Le Nunavut est le plus récent, créé en 1999."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which is the largest Canadian province by area?",
      fr: "Quelle est la plus grande province canadienne par superficie?"
    },
    options: {
      en: ["Quebec", "Ontario", "British Columbia", "Alberta"],
      fr: ["Québec", "Ontario", "Colombie-Britannique", "Alberta"]
    },
    correctIndex: 0,
    funFact: {
      en: "Quebec covers over 1.5 million km² — it's nearly three times the size of France!",
      fr: "Le Québec couvre plus de 1,5 million de km² — c'est presque trois fois la taille de la France!"
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the longest river in Canada?",
      fr: "Quel est le plus long fleuve au Canada?"
    },
    options: {
      en: ["Mackenzie River", "St. Lawrence River", "Fraser River", "Yukon River"],
      fr: ["Fleuve Mackenzie", "Fleuve Saint-Laurent", "Fleuve Fraser", "Fleuve Yukon"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Mackenzie River stretches 4,241 km from Great Slave Lake to the Arctic Ocean. It's the longest river system in Canada.",
      fr: "Le fleuve Mackenzie s'étend sur 4 241 km du Grand lac des Esclaves à l'océan Arctique. C'est le plus long système fluvial au Canada."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian city is known as the 'Polar Bear Capital of the World'?",
      fr: "Quelle ville canadienne est connue comme la « capitale mondiale de l'ours polaire »?"
    },
    options: {
      en: ["Churchill, Manitoba", "Iqaluit, Nunavut", "Yellowknife, NWT", "Whitehorse, Yukon"],
      fr: ["Churchill, Manitoba", "Iqaluit, Nunavut", "Yellowknife, T.N.-O.", "Whitehorse, Yukon"]
    },
    correctIndex: 0,
    funFact: {
      en: "Each fall, hundreds of polar bears gather near Churchill waiting for Hudson Bay to freeze so they can hunt seals. Tourists come from around the world to see them.",
      fr: "Chaque automne, des centaines d'ours polaires se rassemblent près de Churchill en attendant que la baie d'Hudson gèle pour chasser les phoques. Des touristes du monde entier viennent les voir."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "tf",
    question: {
      en: "Canada has more lakes than all other countries in the world combined.",
      fr: "Le Canada possède plus de lacs que tous les autres pays du monde réunis."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Canada has an estimated 2 million lakes, covering about 9% of its total area. That's more than 60% of all the lakes on Earth!",
      fr: "Le Canada compte environ 2 millions de lacs, couvrant environ 9 % de sa superficie totale. C'est plus de 60 % de tous les lacs sur Terre!"
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which ocean borders Canada on the west?",
      fr: "Quel océan borde le Canada à l'ouest?"
    },
    options: {
      en: ["Pacific Ocean", "Atlantic Ocean", "Arctic Ocean", "Indian Ocean"],
      fr: ["Océan Pacifique", "Océan Atlantique", "Océan Arctique", "Océan Indien"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canada is bordered by three oceans: Pacific (west), Atlantic (east), and Arctic (north) — the only country besides Russia to touch three oceans.",
      fr: "Le Canada est bordé par trois océans : Pacifique (ouest), Atlantique (est) et Arctique (nord) — le seul pays avec la Russie à toucher trois océans."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is Canada's highest mountain?",
      fr: "Quelle est la plus haute montagne du Canada?"
    },
    options: {
      en: ["Mount Logan", "Mount Robson", "Mount Columbia", "Mount Waddington"],
      fr: ["Mont Logan", "Mont Robson", "Mont Columbia", "Mont Waddington"]
    },
    correctIndex: 0,
    funFact: {
      en: "Mount Logan in Yukon stands at 5,959 metres — it's the second-highest peak in North America after Denali.",
      fr: "Le mont Logan au Yukon culmine à 5 959 mètres — c'est le deuxième plus haut sommet d'Amérique du Nord après le Denali."
    }
  },

  // ═══════════════════════════════════════════
  // CULTURE
  // ═══════════════════════════════════════════
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the national animal of Canada?",
      fr: "Quel est l'animal national du Canada?"
    },
    options: {
      en: ["Beaver", "Moose", "Polar Bear", "Canada Goose"],
      fr: ["Castor", "Orignal", "Ours polaire", "Bernache du Canada"]
    },
    correctIndex: 0,
    funFact: {
      en: "The beaver became an official emblem of Canada in 1975. The fur trade, largely driven by beaver pelts, was foundational to Canada's early economy.",
      fr: "Le castor est devenu un emblème officiel du Canada en 1975. Le commerce de la fourrure, principalement axé sur les peaux de castor, a été fondamental pour l'économie naissante du Canada."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian singer is known as the 'Queen of Pop' from Charlemagne, Quebec?",
      fr: "Quelle chanteuse canadienne est connue comme la « reine de la pop » de Charlemagne, Québec?"
    },
    options: {
      en: ["Céline Dion", "Alanis Morissette", "Shania Twain", "k.d. lang"],
      fr: ["Céline Dion", "Alanis Morissette", "Shania Twain", "k.d. lang"]
    },
    correctIndex: 0,
    funFact: {
      en: "Céline Dion has sold over 200 million records worldwide. She is the youngest of 14 children and grew up speaking only French.",
      fr: "Céline Dion a vendu plus de 200 millions de disques dans le monde. Elle est la plus jeune de 14 enfants et a grandi en ne parlant que français."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is a 'double-double' in Canadian culture?",
      fr: "Qu'est-ce qu'un « double-double » dans la culture canadienne?"
    },
    options: {
      en: ["Coffee with two creams and two sugars", "A hockey overtime win", "A type of poutine", "A curling term"],
      fr: ["Un café avec deux crèmes et deux sucres", "Une victoire en prolongation au hockey", "Un type de poutine", "Un terme de curling"]
    },
    correctIndex: 0,
    funFact: {
      en: "The term is most associated with Tim Hortons, Canada's beloved coffee chain. Canadians drink an estimated 2 billion cups of Tim Hortons coffee per year.",
      fr: "Le terme est principalement associé à Tim Hortons, la chaîne de café bien-aimée du Canada. Les Canadiens boivent environ 2 milliards de tasses de café Tim Hortons par an."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "The word 'canoe' comes from an Indigenous language and was adopted into English through Canadian French.",
      fr: "Le mot « canot » vient d'une langue autochtone et a été adopté en anglais par le français canadien."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "The word comes from the Carib word 'kenu' (dugout canoe). It entered French as 'canot' and English as 'canoe.' The canoe is a symbol of Canadian exploration and Indigenous ingenuity.",
      fr: "Le mot vient du mot caraïbe « kenu » (pirogue). Il est entré en français comme « canot » et en anglais comme « canoe ». Le canot est un symbole de l'exploration canadienne et de l'ingéniosité autochtone."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which annual Canadian event is the world's largest comedy festival?",
      fr: "Quel événement annuel canadien est le plus grand festival d'humour au monde?"
    },
    options: {
      en: ["Just for Laughs (Montréal)", "Toronto Sketch Comedy Festival", "Winnipeg Comedy Festival", "Halifax Comedy Festival"],
      fr: ["Juste pour rire (Montréal)", "Festival de sketch de Toronto", "Festival d'humour de Winnipeg", "Festival d'humour d'Halifax"]
    },
    correctIndex: 0,
    funFact: {
      en: "Just for Laughs (Juste pour rire) has been running since 1983 and has hosted virtually every major comedian in the English and French-speaking world.",
      fr: "Juste pour rire existe depuis 1983 et a accueilli pratiquement tous les grands humoristes du monde anglophone et francophone."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian author wrote 'The Handmaid's Tale'?",
      fr: "Quelle auteure canadienne a écrit « La Servante écarlate »?"
    },
    options: {
      en: ["Margaret Atwood", "Alice Munro", "Margaret Laurence", "Lucy Maud Montgomery"],
      fr: ["Margaret Atwood", "Alice Munro", "Margaret Laurence", "Lucy Maud Montgomery"]
    },
    correctIndex: 0,
    funFact: {
      en: "Margaret Atwood is from Ottawa and has written over 50 books. She's won the Booker Prize twice and The Handmaid's Tale was adapted into an Emmy-winning TV series.",
      fr: "Margaret Atwood est originaire d'Ottawa et a écrit plus de 50 livres. Elle a remporté le prix Booker deux fois et La Servante écarlate a été adaptée en série télévisée primée aux Emmy."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "Poutine — fries, cheese curds, and gravy — originated in Quebec in the 1950s.",
      fr: "La poutine — frites, fromage en grains et sauce — est née au Québec dans les années 1950."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Several Quebec towns claim to have invented poutine. The most popular origin story traces it to Warwick, Quebec in 1957 at a restaurant called Le Lutin qui rit.",
      fr: "Plusieurs villes du Québec revendiquent l'invention de la poutine. L'histoire d'origine la plus populaire la retrace à Warwick, Québec en 1957, au restaurant Le Lutin qui rit."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which famous Canadian TV show about a teenager's life first aired in 2001 and became a global phenomenon?",
      fr: "Quelle célèbre série télévisée canadienne sur la vie d'une adolescente a été diffusée pour la première fois en 2001 et est devenue un phénomène mondial?"
    },
    options: {
      en: ["Degrassi: The Next Generation", "Corner Gas", "Schitt's Creek", "Trailer Park Boys"],
      fr: ["Degrassi: La Nouvelle Génération", "Corner Gas", "Schitt's Creek", "Trailer Park Boys"]
    },
    correctIndex: 0,
    funFact: {
      en: "Degrassi launched the career of Drake (Aubrey Graham), who played Jimmy Brooks. The franchise started in 1979 and has addressed many important social issues.",
      fr: "Degrassi a lancé la carrière de Drake (Aubrey Graham), qui jouait Jimmy Brooks. La franchise a débuté en 1979 et a abordé de nombreux enjeux sociaux importants."
    }
  },

  // ═══════════════════════════════════════════
  // LANGUAGE
  // ═══════════════════════════════════════════
  {
    category: "language",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What are the two official languages of Canada?",
      fr: "Quelles sont les deux langues officielles du Canada?"
    },
    options: {
      en: ["English and French", "English and Inuktitut", "French and Cree", "English and Ojibwe"],
      fr: ["L'anglais et le français", "L'anglais et l'inuktitut", "Le français et le cri", "L'anglais et l'ojibwé"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Official Languages Act was passed in 1969. About 18% of Canadians are bilingual in English and French.",
      fr: "La Loi sur les langues officielles a été adoptée en 1969. Environ 18 % des Canadiens sont bilingues en anglais et en français."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "In Québécois French, what does 'dépanneur' mean?",
      fr: "En français québécois, qu'est-ce qu'un « dépanneur »?"
    },
    options: {
      en: ["Corner store / convenience store", "Mechanic", "Emergency service", "Repairman"],
      fr: ["Un magasin de proximité", "Un mécanicien", "Un service d'urgence", "Un réparateur"]
    },
    correctIndex: 0,
    funFact: {
      en: "In France, a dépanneur is someone who fixes things. In Quebec, it's the beloved corner store — or 'dep' for short — where you grab snacks, beer, and lottery tickets.",
      fr: "En France, un dépanneur est quelqu'un qui répare des choses. Au Québec, c'est le magasin du coin bien-aimé — ou « dep » pour faire court — où on achète des collations, de la bière et des billets de loterie."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Québécois expression 'avoir le motton' closest to in English?",
      fr: "Que signifie l'expression québécoise « avoir le motton »?"
    },
    options: {
      en: ["To have a lump in your throat / feel emotional", "To be rich", "To be full from eating", "To be angry"],
      fr: ["Avoir une boule dans la gorge / être ému", "Être riche", "Avoir trop mangé", "Être en colère"]
    },
    correctIndex: 0,
    funFact: {
      en: "Québécois French is full of unique expressions. 'Motton' literally means a lump or clump — having the lump in your throat means you're choked up.",
      fr: "Le français québécois est rempli d'expressions uniques. « Motton » signifie littéralement une masse ou un grumeau — avoir le motton signifie avoir la gorge serrée."
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which province is the only officially bilingual province in Canada?",
      fr: "Quelle province est la seule province officiellement bilingue au Canada?"
    },
    options: {
      en: ["New Brunswick", "Quebec", "Ontario", "Manitoba"],
      fr: ["Nouveau-Brunswick", "Québec", "Ontario", "Manitoba"]
    },
    correctIndex: 0,
    funFact: {
      en: "New Brunswick became officially bilingual in 1969. About 33% of its population speaks French, largely the Acadian community.",
      fr: "Le Nouveau-Brunswick est devenu officiellement bilingue en 1969. Environ 33 % de sa population parle français, principalement la communauté acadienne."
    }
  },
  {
    category: "language",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "The word 'eh' is so associated with Canadian English that it appears in the Canadian Oxford Dictionary.",
      fr: "Le mot « eh » est tellement associé à l'anglais canadien qu'il apparaît dans le Canadian Oxford Dictionary."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Canadians use 'eh' as a tag question, seeking agreement or confirmation. It's similar to 'right?' or 'don't you think?' — and yes, it's really in the dictionary!",
      fr: "Les Canadiens utilisent « eh » comme question de confirmation, cherchant l'accord. C'est similaire à « n'est-ce pas? » — et oui, c'est vraiment dans le dictionnaire!"
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What does the Québécois slang term 'tabarnak' derive from?",
      fr: "De quoi dérive le juron québécois « tabarnak »?"
    },
    options: {
      en: ["The Catholic tabernacle", "An old French word for storm", "A First Nations word", "A military term"],
      fr: ["Le tabernacle catholique", "Un ancien mot français pour tempête", "Un mot des Premières Nations", "Un terme militaire"]
    },
    correctIndex: 0,
    funFact: {
      en: "Québécois swear words (sacres) come from Catholic religious terms — tabernacle, chalice (câlice), host (hostie). They reflect Quebec's deeply Catholic history and the Quiet Revolution's rejection of church authority.",
      fr: "Les jurons québécois (sacres) proviennent de termes religieux catholiques — tabernacle, calice (câlice), hostie. Ils reflètent l'histoire profondément catholique du Québec et le rejet de l'autorité ecclésiastique par la Révolution tranquille."
    }
  },

  // ═══════════════════════════════════════════
  // SPORTS
  // ═══════════════════════════════════════════
  {
    category: "sports",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is Canada's official national winter sport?",
      fr: "Quel est le sport d'hiver national officiel du Canada?"
    },
    options: {
      en: ["Ice Hockey", "Curling", "Skiing", "Figure Skating"],
      fr: ["Hockey sur glace", "Curling", "Ski", "Patinage artistique"]
    },
    correctIndex: 0,
    funFact: {
      en: "Hockey became the official winter sport in 1994 — the same act declared lacrosse as the official summer sport.",
      fr: "Le hockey est devenu le sport d'hiver officiel en 1994 — la même loi a déclaré la crosse comme sport d'été officiel."
    }
  },
  {
    category: "sports",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is Canada's official national summer sport?",
      fr: "Quel est le sport d'été national officiel du Canada?"
    },
    options: {
      en: ["Lacrosse", "Baseball", "Soccer", "Swimming"],
      fr: ["Crosse", "Baseball", "Soccer", "Natation"]
    },
    correctIndex: 0,
    funFact: {
      en: "Lacrosse originated with Indigenous peoples across North America. The Haudenosaunee (Iroquois) called it 'the Creator's game' and it has deep spiritual significance.",
      fr: "La crosse est née chez les peuples autochtones d'Amérique du Nord. Les Haudenosaunee (Iroquois) l'appelaient « le jeu du Créateur » et elle a une profonde signification spirituelle."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian city's NHL team last won the Stanley Cup for a Canadian team (as of 2024)?",
      fr: "L'équipe de la LNH de quelle ville canadienne a remporté la dernière Coupe Stanley pour une équipe canadienne (en date de 2024)?"
    },
    options: {
      en: ["Montreal (1993)", "Calgary (1989)", "Edmonton (1990)", "Toronto (1967)"],
      fr: ["Montréal (1993)", "Calgary (1989)", "Edmonton (1990)", "Toronto (1967)"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Montreal Canadiens have won a record 24 Stanley Cups. No Canadian team has won since 1993 — the longest drought in NHL history for Canadian teams.",
      fr: "Les Canadiens de Montréal ont remporté un record de 24 Coupes Stanley. Aucune équipe canadienne n'a gagné depuis 1993 — la plus longue sécheresse de l'histoire de la LNH pour les équipes canadiennes."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian sprinter famously won gold in the 100m at the 1996 Olympics?",
      fr: "Quel sprinter canadien a célèbrement remporté l'or au 100 m aux Jeux olympiques de 1996?"
    },
    options: {
      en: ["Donovan Bailey", "Ben Johnson", "Andre De Grasse", "Bruny Surin"],
      fr: ["Donovan Bailey", "Ben Johnson", "Andre De Grasse", "Bruny Surin"]
    },
    correctIndex: 0,
    funFact: {
      en: "Donovan Bailey set a world record of 9.84 seconds in Atlanta. His victory was especially sweet for Canada after the Ben Johnson doping scandal at the 1988 Olympics.",
      fr: "Donovan Bailey a établi un record du monde de 9,84 secondes à Atlanta. Sa victoire était particulièrement douce pour le Canada après le scandale de dopage de Ben Johnson aux Jeux olympiques de 1988."
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "In which year were the first modern Olympic Games held in Canada?",
      fr: "En quelle année les premiers Jeux olympiques modernes ont-ils eu lieu au Canada?"
    },
    options: {
      en: ["1976 (Montreal)", "1988 (Calgary)", "2010 (Vancouver)", "1994 (not held in Canada)"],
      fr: ["1976 (Montréal)", "1988 (Calgary)", "2010 (Vancouver)", "1994 (pas au Canada)"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canada is the only host country to not win a gold medal at its own Summer Olympics. Montreal's Olympic Stadium debt wasn't fully paid off until 2006!",
      fr: "Le Canada est le seul pays hôte à n'avoir gagné aucune médaille d'or à ses propres Jeux olympiques d'été. La dette du Stade olympique de Montréal n'a été entièrement remboursée qu'en 2006!"
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "tf",
    question: {
      en: "Basketball was invented by Canadian James Naismith in Springfield, Massachusetts in 1891.",
      fr: "Le basketball a été inventé par le Canadien James Naismith à Springfield, Massachusetts en 1891."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Naismith was born in Almonte, Ontario. He invented basketball as an indoor winter game using a peach basket. Canada is the birthplace of both basketball and hockey!",
      fr: "Naismith est né à Almonte, Ontario. Il a inventé le basketball comme jeu d'intérieur hivernal avec un panier de pêches. Le Canada est le berceau du basketball et du hockey!"
    }
  },

  // ═══════════════════════════════════════════
  // INDIGENOUS PEOPLES
  // ═══════════════════════════════════════════
  {
    category: "indigenous",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What are the three groups of Indigenous peoples recognized in the Canadian Constitution?",
      fr: "Quels sont les trois groupes de peuples autochtones reconnus dans la Constitution canadienne?"
    },
    options: {
      en: ["First Nations, Inuit, and Métis", "Cree, Inuit, and Ojibwe", "First Nations, Inuit, and Haida", "Métis, Algonquin, and Inuit"],
      fr: ["Premières Nations, Inuits et Métis", "Cris, Inuits et Ojibwés", "Premières Nations, Inuits et Haïdas", "Métis, Algonquins et Inuits"]
    },
    correctIndex: 0,
    funFact: {
      en: "There are over 630 First Nation communities in Canada, speaking more than 70 distinct languages. Indigenous peoples have inhabited this land for over 15,000 years.",
      fr: "Il y a plus de 630 communautés des Premières Nations au Canada, parlant plus de 70 langues distinctes. Les peuples autochtones habitent cette terre depuis plus de 15 000 ans."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What does 'Nunavut' mean in Inuktitut?",
      fr: "Que signifie « Nunavut » en inuktitut?"
    },
    options: {
      en: ["Our land", "Northern home", "Land of ice", "Great territory"],
      fr: ["Notre terre", "Maison du Nord", "Terre de glace", "Grand territoire"]
    },
    correctIndex: 0,
    funFact: {
      en: "Nunavut was carved out of the Northwest Territories in 1999. It's the largest and newest territory, covering about 20% of Canada's land mass with a population of only ~40,000.",
      fr: "Le Nunavut a été séparé des Territoires du Nord-Ouest en 1999. C'est le plus grand et le plus récent territoire, couvrant environ 20 % de la superficie du Canada avec une population d'environ 40 000 habitants."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is a potlatch?",
      fr: "Qu'est-ce qu'un potlatch?"
    },
    options: {
      en: ["A ceremonial feast and gift-giving event of Pacific Northwest peoples", "A type of traditional shelter", "A harvest celebration", "A peace treaty ceremony"],
      fr: ["Un festin cérémoniel et événement de don des peuples du Pacifique Nord-Ouest", "Un type d'abri traditionnel", "Une célébration de la récolte", "Une cérémonie de traité de paix"]
    },
    correctIndex: 0,
    funFact: {
      en: "Potlatches were banned by the Canadian government from 1885 to 1951 in an attempt to suppress Indigenous cultures. The ban was widely resisted and potlatches continued in secret.",
      fr: "Les potlatchs ont été interdits par le gouvernement canadien de 1885 à 1951 pour tenter de supprimer les cultures autochtones. L'interdiction a été largement contestée et les potlatchs ont continué en secret."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "The Haudenosaunee (Iroquois) Confederacy influenced which major political document?",
      fr: "La Confédération haudenosaunee (iroquoise) a influencé quel document politique majeur?"
    },
    options: {
      en: ["The United States Constitution", "The British North America Act", "The Magna Carta", "The French Declaration of Rights"],
      fr: ["La Constitution des États-Unis", "L'Acte de l'Amérique du Nord britannique", "La Magna Carta", "La Déclaration des droits de l'homme"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Haudenosaunee Great Law of Peace established a democratic confederacy of six nations long before European contact. Benjamin Franklin acknowledged its influence on American democracy.",
      fr: "La Grande Loi de la Paix haudenosaunee a établi une confédération démocratique de six nations bien avant le contact européen. Benjamin Franklin a reconnu son influence sur la démocratie américaine."
    }
  },
  {
    category: "indigenous",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the traditional Inuit art form of carving called, typically made from soapstone?",
      fr: "Comment s'appelle la forme d'art traditionnelle inuite de sculpture, généralement faite en stéatite?"
    },
    options: {
      en: ["Inuit soapstone carving", "Totem crafting", "Birchbark etching", "Cedar weaving"],
      fr: ["Sculpture inuite en stéatite", "Artisanat de totems", "Gravure sur écorce de bouleau", "Tissage de cèdre"]
    },
    correctIndex: 0,
    funFact: {
      en: "Inuit soapstone carvings depicting Arctic wildlife and daily life are recognized worldwide. Artist Kenojuak Ashevak's 'Enchanted Owl' became one of Canada's most famous artworks.",
      fr: "Les sculptures inuites en stéatite représentant la faune arctique et la vie quotidienne sont reconnues dans le monde entier. « Le hibou enchanté » de l'artiste Kenojuak Ashevak est devenu l'une des œuvres d'art les plus célèbres du Canada."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the purpose of the residential school system in Canada?",
      fr: "Quel était le but du système des pensionnats au Canada?"
    },
    options: {
      en: ["To forcibly assimilate Indigenous children into Euro-Canadian culture", "To provide higher education to remote communities", "To teach both English and French", "To train children in agricultural skills"],
      fr: ["Assimiler de force les enfants autochtones à la culture euro-canadienne", "Fournir une éducation supérieure aux communautés éloignées", "Enseigner l'anglais et le français", "Former les enfants aux compétences agricoles"]
    },
    correctIndex: 0,
    funFact: {
      en: "Over 150,000 Indigenous children were sent to residential schools from the 1880s to 1996. The Truth and Reconciliation Commission called it cultural genocide. The National Day for Truth and Reconciliation is observed on September 30.",
      fr: "Plus de 150 000 enfants autochtones ont été envoyés dans des pensionnats des années 1880 à 1996. La Commission de vérité et réconciliation l'a qualifié de génocide culturel. La Journée nationale de la vérité et de la réconciliation est observée le 30 septembre."
    }
  },

  // ═══════════════════════════════════════════
  // SCIENCE & INNOVATION
  // ═══════════════════════════════════════════
  {
    category: "science",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What medical breakthrough did Canadian Frederick Banting co-discover in 1921?",
      fr: "Quelle percée médicale le Canadien Frederick Banting a-t-il co-découverte en 1921?"
    },
    options: {
      en: ["Insulin", "Penicillin", "Aspirin", "Vitamin C"],
      fr: ["L'insuline", "La pénicilline", "L'aspirine", "La vitamine C"]
    },
    correctIndex: 0,
    funFact: {
      en: "Banting and Best discovered insulin at the University of Toronto. Banting won the Nobel Prize in 1923 and remains the youngest Nobel laureate in Medicine.",
      fr: "Banting et Best ont découvert l'insuline à l'Université de Toronto. Banting a remporté le prix Nobel en 1923 et reste le plus jeune lauréat du prix Nobel de médecine."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What did Canadian engineer Joseph-Armand Bombardier invent?",
      fr: "Qu'a inventé l'ingénieur canadien Joseph-Armand Bombardier?"
    },
    options: {
      en: ["The modern snowmobile", "The telephone", "The electric car", "The jet engine"],
      fr: ["La motoneige moderne", "Le téléphone", "La voiture électrique", "Le moteur à réaction"]
    },
    correctIndex: 0,
    funFact: {
      en: "Bombardier built his first snow vehicle at age 15 in Valcourt, Quebec. His company grew into Bombardier Inc., which became a global leader in aerospace and transportation.",
      fr: "Bombardier a construit son premier véhicule de neige à 15 ans à Valcourt, Québec. Son entreprise est devenue Bombardier Inc., un leader mondial en aérospatiale et en transport."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "The Canadarm robotic arm used on NASA Space Shuttles was designed and built in Canada.",
      fr: "Le bras robotique Canadarm utilisé sur les navettes spatiales de la NASA a été conçu et construit au Canada."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "The Canadarm was built by Spar Aerospace in Toronto. Its successor, Canadarm2, is still in use on the International Space Station. Canada's contribution to space robotics is a source of national pride.",
      fr: "Le Canadarm a été construit par Spar Aerospace à Toronto. Son successeur, Canadarm2, est toujours utilisé sur la Station spatiale internationale. La contribution du Canada à la robotique spatiale est une source de fierté nationale."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian won the Nobel Prize in Physics in 2015 for discovering neutrino oscillations?",
      fr: "Quel Canadien a remporté le prix Nobel de physique en 2015 pour la découverte des oscillations des neutrinos?"
    },
    options: {
      en: ["Arthur B. McDonald", "Donna Strickland", "Willard Boyle", "Bertram Brockhouse"],
      fr: ["Arthur B. McDonald", "Donna Strickland", "Willard Boyle", "Bertram Brockhouse"]
    },
    correctIndex: 0,
    funFact: {
      en: "McDonald's work at the Sudbury Neutrino Observatory (SNO) proved that neutrinos have mass, fundamentally changing our understanding of particle physics.",
      fr: "Le travail de McDonald à l'Observatoire de neutrinos de Sudbury (ONS) a prouvé que les neutrinos ont une masse, changeant fondamentalement notre compréhension de la physique des particules."
    }
  },
  {
    category: "science",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian-born scientist is famous for his work on the telephone?",
      fr: "Quel scientifique né au Canada est célèbre pour son travail sur le téléphone?"
    },
    options: {
      en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
      fr: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"]
    },
    correctIndex: 0,
    funFact: {
      en: "Bell was born in Scotland but became a Canadian citizen and did much of his telephone work in Brantford, Ontario. He also made breakthroughs in aviation and hydrofoils.",
      fr: "Bell est né en Écosse mais est devenu citoyen canadien et a fait une grande partie de son travail sur le téléphone à Brantford, Ontario. Il a aussi fait des percées en aviation et en hydroptères."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What technology did Canadian Donna Strickland win the Nobel Prize for in 2018?",
      fr: "Pour quelle technologie la Canadienne Donna Strickland a-t-elle remporté le prix Nobel en 2018?"
    },
    options: {
      en: ["Chirped pulse amplification (laser physics)", "Quantum computing", "CRISPR gene editing", "Gravitational wave detection"],
      fr: ["Amplification par impulsions chirpées (physique des lasers)", "Informatique quantique", "Édition génétique CRISPR", "Détection d'ondes gravitationnelles"]
    },
    correctIndex: 0,
    funFact: {
      en: "Strickland was only the third woman ever to win the Nobel Prize in Physics. Her work on ultra-short, high-intensity laser pulses has applications in millions of corrective eye surgeries.",
      fr: "Strickland n'était que la troisième femme à remporter le prix Nobel de physique. Son travail sur les impulsions laser ultra-courtes et de haute intensité a des applications dans des millions de chirurgies oculaires correctives."
    }
  },

  // ═══════════════════════════════════════════
  // FOOD & DRINK
  // ═══════════════════════════════════════════
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Canada produces approximately what percentage of the world's maple syrup?",
      fr: "Le Canada produit approximativement quel pourcentage du sirop d'érable mondial?"
    },
    options: {
      en: ["71%", "45%", "30%", "90%"],
      fr: ["71 %", "45 %", "30 %", "90 %"]
    },
    correctIndex: 0,
    funFact: {
      en: "Quebec alone produces about 70% of the world's maple syrup. Canada even has a 'Global Strategic Maple Syrup Reserve' — essentially a Fort Knox for syrup!",
      fr: "Le Québec à lui seul produit environ 70 % du sirop d'érable mondial. Le Canada a même une « Réserve mondiale stratégique de sirop d'érable » — essentiellement un Fort Knox pour le sirop!"
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is a 'Nanaimo bar'?",
      fr: "Qu'est-ce qu'une « barre Nanaimo »?"
    },
    options: {
      en: ["A no-bake layered dessert bar from British Columbia", "A chocolate granola bar", "A type of energy bar from Alberta", "A maple-flavoured candy"],
      fr: ["Un dessert en couches sans cuisson de la Colombie-Britannique", "Une barre de granola au chocolat", "Un type de barre énergétique de l'Alberta", "Un bonbon à l'érable"]
    },
    correctIndex: 0,
    funFact: {
      en: "Named after the city of Nanaimo, BC, this treat has three layers: chocolate crumb base, custard-flavoured icing, and chocolate ganache on top. No baking required!",
      fr: "Nommée d'après la ville de Nanaimo, C.-B., cette friandise a trois couches : base de chapelure au chocolat, glaçage à la crème pâtissière et ganache au chocolat sur le dessus. Aucune cuisson requise!"
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'bannock' in Canadian food culture?",
      fr: "Qu'est-ce que le « bannock » dans la culture alimentaire canadienne?"
    },
    options: {
      en: ["A traditional flatbread important to Indigenous and frontier cultures", "A type of smoked salmon", "A fermented berry drink", "A maple-glazed pastry"],
      fr: ["Un pain plat traditionnel important pour les cultures autochtones et frontalières", "Un type de saumon fumé", "Une boisson fermentée aux baies", "Une pâtisserie glacée à l'érable"]
    },
    correctIndex: 0,
    funFact: {
      en: "While bannock has Scottish origins, it was widely adopted by Indigenous peoples and became a staple across Canada. Today it's enjoyed fried, baked, or on a stick over a campfire.",
      fr: "Bien que le bannock ait des origines écossaises, il a été largement adopté par les peuples autochtones et est devenu un aliment de base à travers le Canada. Aujourd'hui, on le déguste frit, cuit au four ou sur un bâton au-dessus d'un feu de camp."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is a 'Caesar' in Canadian drink culture?",
      fr: "Qu'est-ce qu'un « César » dans la culture des boissons canadiennes?"
    },
    options: {
      en: ["A cocktail made with Clamato juice, vodka, and hot sauce", "A type of Canadian beer", "A maple whiskey drink", "A non-alcoholic ginger drink"],
      fr: ["Un cocktail fait avec du jus Clamato, de la vodka et de la sauce piquante", "Un type de bière canadienne", "Un cocktail au whisky d'érable", "Une boisson non alcoolisée au gingembre"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Caesar was invented in Calgary in 1969 by Walter Chell. Canadians drink over 400 million Caesars per year — it's basically Canada's national cocktail!",
      fr: "Le César a été inventé à Calgary en 1969 par Walter Chell. Les Canadiens boivent plus de 400 millions de Césars par an — c'est essentiellement le cocktail national du Canada!"
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'tourtière', a traditional Québécois dish?",
      fr: "Qu'est-ce que la tourtière, un plat traditionnel québécois?"
    },
    options: {
      en: ["A savoury meat pie", "A layered potato dish", "A cheese fondue", "A fish stew"],
      fr: ["Une tourte à la viande", "Un plat de pommes de terre en couches", "Une fondue au fromage", "Un ragoût de poisson"]
    },
    correctIndex: 0,
    funFact: {
      en: "Tourtière is a holiday staple in Quebec, traditionally served on Christmas Eve. Recipes vary by region — some use pork, others mix game meats like venison and rabbit.",
      fr: "La tourtière est un incontournable des fêtes au Québec, traditionnellement servie la veille de Noël. Les recettes varient selon la région — certaines utilisent du porc, d'autres mélangent des viandes de gibier comme le cerf et le lapin."
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "tf",
    question: {
      en: "Hawaiian pizza (with pineapple) was actually invented in Canada by a Greek-Canadian restaurateur.",
      fr: "La pizza hawaïenne (avec ananas) a en fait été inventée au Canada par un restaurateur gréco-canadien."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Sam Panopoulos created Hawaiian pizza in 1962 at the Satellite Restaurant in Chatham, Ontario. He named it after the brand of canned pineapple he used — love it or hate it, it's Canadian!",
      fr: "Sam Panopoulos a créé la pizza hawaïenne en 1962 au restaurant Satellite à Chatham, Ontario. Il l'a nommée d'après la marque de conserves d'ananas qu'il utilisait — qu'on l'aime ou non, c'est canadien!"
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian fast-food chain is known for its Timbits?",
      fr: "Quelle chaîne de restauration rapide canadienne est connue pour ses Timbits?"
    },
    options: {
      en: ["Tim Hortons", "Harvey's", "Swiss Chalet", "Mary Brown's"],
      fr: ["Tim Hortons", "Harvey's", "Swiss Chalet", "Mary Brown's"]
    },
    correctIndex: 0,
    funFact: {
      en: "Tim Hortons was founded in 1964 by hockey player Tim Horton. Timbits (donut holes) were introduced in 1976 and became a cultural icon — there's even a minor hockey league named after them!",
      fr: "Tim Hortons a été fondé en 1964 par le joueur de hockey Tim Horton. Les Timbits (trous de beignes) ont été introduits en 1976 et sont devenus une icône culturelle — il y a même une ligue de hockey mineur qui porte leur nom!"
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'pemmican', an important food in Canadian history?",
      fr: "Qu'est-ce que le « pemmican », un aliment important dans l'histoire du Canada?"
    },
    options: {
      en: ["Dried meat mixed with fat and berries, made by Indigenous peoples", "A type of pickled fish", "Smoked maple ham", "A corn-based porridge"],
      fr: ["De la viande séchée mélangée avec du gras et des baies, fait par les peuples autochtones", "Un type de poisson mariné", "Du jambon fumé à l'érable", "Une bouillie à base de maïs"]
    },
    correctIndex: 0,
    funFact: {
      en: "Pemmican was the original energy bar! It could last for years and was essential for fur traders and explorers crossing the continent. The Pemmican War of 1814 was fought over control of the pemmican trade.",
      fr: "Le pemmican était la barre énergétique originale! Il pouvait durer des années et était essentiel pour les commerçants de fourrures et les explorateurs traversant le continent. La guerre du Pemmican de 1814 a été menée pour le contrôle du commerce du pemmican."
    }
  },

  // ═══════════════════════════════════════════
  // BONUS / MIXED — additional questions for variety
  // ═══════════════════════════════════════════
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Bay of Fundy famous for?",
      fr: "Pourquoi la baie de Fundy est-elle célèbre?"
    },
    options: {
      en: ["The highest tides in the world", "The deepest freshwater lake in Canada", "Northern lights viewing", "Whale breeding grounds"],
      fr: ["Les marées les plus hautes du monde", "Le lac d'eau douce le plus profond au Canada", "L'observation des aurores boréales", "Les aires de reproduction des baleines"]
    },
    correctIndex: 0,
    funFact: {
      en: "Tides in the Bay of Fundy can rise up to 16 metres (53 feet) — that's roughly the height of a five-story building! It's located between New Brunswick and Nova Scotia.",
      fr: "Les marées dans la baie de Fundy peuvent monter jusqu'à 16 mètres — c'est à peu près la hauteur d'un immeuble de cinq étages! Elle se trouve entre le Nouveau-Brunswick et la Nouvelle-Écosse."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the name of Canada's national anthem?",
      fr: "Quel est le nom de l'hymne national du Canada?"
    },
    options: {
      en: ["O Canada", "God Save the Queen", "The Maple Leaf Forever", "Land of the Silver Birch"],
      fr: ["Ô Canada", "God Save the Queen", "The Maple Leaf Forever", "Land of the Silver Birch"]
    },
    correctIndex: 0,
    funFact: {
      en: "O Canada was first performed in Quebec City in 1880 in French! The English version came later. It didn't officially become the national anthem until 1980.",
      fr: "Ô Canada a été interprété pour la première fois à Québec en 1880 en français! La version anglaise est venue plus tard. Il n'est officiellement devenu l'hymne national qu'en 1980."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian company created the BlackBerry smartphone?",
      fr: "Quelle entreprise canadienne a créé le téléphone intelligent BlackBerry?"
    },
    options: {
      en: ["Research In Motion (RIM)", "Nortel Networks", "Shopify", "OpenText"],
      fr: ["Research In Motion (RIM)", "Nortel Networks", "Shopify", "OpenText"]
    },
    correctIndex: 0,
    funFact: {
      en: "RIM was based in Waterloo, Ontario. At its peak, BlackBerry had over 80 million subscribers. Barack Obama famously refused to give up his BlackBerry when he became president.",
      fr: "RIM était basée à Waterloo, Ontario. À son apogée, BlackBerry comptait plus de 80 millions d'abonnés. Barack Obama a célèbrement refusé de renoncer à son BlackBerry quand il est devenu président."
    }
  },
  {
    category: "sports",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "The Toronto Raptors are the only Canadian team in the NBA.",
      fr: "Les Raptors de Toronto sont la seule équipe canadienne dans la NBA."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "The Raptors won their first NBA championship in 2019, led by Kawhi Leonard. The Vancouver Grizzlies were the other Canadian team but relocated to Memphis in 2001.",
      fr: "Les Raptors ont remporté leur premier championnat NBA en 2019, menés par Kawhi Leonard. Les Grizzlies de Vancouver étaient l'autre équipe canadienne mais ont déménagé à Memphis en 2001."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the significance of a totem pole in Pacific Northwest Indigenous cultures?",
      fr: "Quelle est la signification d'un mât totémique dans les cultures autochtones du Pacifique Nord-Ouest?"
    },
    options: {
      en: ["It tells stories, honours ancestors, and marks important events", "It is used as a religious idol for worship", "It marks territorial boundaries", "It indicates the location of buried treasure"],
      fr: ["Il raconte des histoires, honore les ancêtres et marque des événements importants", "Il est utilisé comme idole religieuse pour le culte", "Il marque les frontières territoriales", "Il indique l'emplacement d'un trésor enfoui"]
    },
    correctIndex: 0,
    funFact: {
      en: "Totem poles are carved by peoples like the Haida, Tlingit, and Kwakwaka'wakw. They are NOT objects of worship — a common misconception. They are narrative art forms that record history and heritage.",
      fr: "Les mâts totémiques sont sculptés par des peuples comme les Haïdas, les Tlingits et les Kwakwaka'wakw. Ce ne sont PAS des objets de culte — une idée fausse courante. Ce sont des formes d'art narratif qui enregistrent l'histoire et le patrimoine."
    }
  },
  {
    category: "history",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is celebrated on July 1st in Canada?",
      fr: "Que célèbre-t-on le 1er juillet au Canada?"
    },
    options: {
      en: ["Canada Day", "Victoria Day", "Thanksgiving", "Remembrance Day"],
      fr: ["La fête du Canada", "La fête de Victoria", "L'Action de grâce", "Le jour du Souvenir"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canada Day was originally called 'Dominion Day' until 1982. In Quebec, July 1st is also 'Moving Day' — the most popular date for lease changes!",
      fr: "La fête du Canada s'appelait à l'origine « fête du Dominion » jusqu'en 1982. Au Québec, le 1er juillet est aussi le « jour du déménagement » — la date la plus populaire pour les changements de bail!"
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What does the word 'Canada' likely originate from?",
      fr: "De quoi le mot « Canada » tire-t-il probablement son origine?"
    },
    options: {
      en: ["The Iroquoian word 'kanata' meaning village or settlement", "A French explorer's name", "A Latin word meaning 'great land'", "A Viking term for northern territory"],
      fr: ["Le mot iroquoien « kanata » signifiant village ou établissement", "Le nom d'un explorateur français", "Un mot latin signifiant « grande terre »", "Un terme viking pour territoire nordique"]
    },
    correctIndex: 0,
    funFact: {
      en: "In 1535, two Indigenous youths told French explorer Jacques Cartier about the route to 'kanata' — they meant the village of Stadacona (present-day Quebec City). Cartier used the word for the entire region!",
      fr: "En 1535, deux jeunes Autochtones ont indiqué à l'explorateur français Jacques Cartier la route vers « kanata » — ils désignaient le village de Stadaconé (l'actuelle ville de Québec). Cartier a utilisé le mot pour toute la région!"
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "Canada and the United States share the longest international border in the world.",
      fr: "Le Canada et les États-Unis partagent la plus longue frontière internationale au monde."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "The Canada-US border stretches 8,891 km (5,525 miles), including the Great Lakes. It's often called 'the longest undefended border in the world.'",
      fr: "La frontière Canada-États-Unis s'étend sur 8 891 km, incluant les Grands Lacs. On l'appelle souvent « la plus longue frontière non défendue au monde »."
    }
  },
  // ═══════════════════════════════════════════
  // ADDITIONAL QUESTIONS (merged from questions.json)
  // ═══════════════════════════════════════════
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian battle in World War I is often credited with forging a sense of national identity?",
      fr: "Quelle bataille canadienne de la Première Guerre mondiale est souvent créditée d’avoir forgé un sentiment d’identité nationale?"
    },
    options: {
      en: ["Battle of the Somme","Battle of Vimy Ridge","Battle of Passchendaele","Battle of Ypres"],
      fr: ["Bataille de la Somme","Bataille de la crête de Vimy","Bataille de Passchendaele","Bataille d’Ypres"]
    },
    correctIndex: 1,
    funFact: {
      en: "All four Canadian divisions fought together for the first time at Vimy Ridge in April 1917. The stunning victory is considered a defining moment in Canadian nationhood.",
      fr: "Les quatre divisions canadiennes ont combattu ensemble pour la première fois à la crête de Vimy en avril 1917. Cette victoire est considérée comme un moment déterminant de l’identité canadienne."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What was the October Crisis of 1970?",
      fr: "Qu’était la crise d’Octobre de 1970?"
    },
    options: {
      en: ["A stock market crash","FLQ kidnappings and the War Measures Act","A major earthquake in Quebec","A federal election dispute"],
      fr: ["Un krach boursier","Les enlèvements du FLQ et la Loi sur les mesures de guerre","Un tremblement de terre majeur au Québec","Un litige électoral fédéral"]
    },
    correctIndex: 1,
    funFact: {
      en: "Prime Minister Pierre Trudeau invoked the War Measures Act, the only peacetime use in Canadian history, after the FLQ kidnapped British diplomat James Cross and Quebec minister Pierre Laporte.",
      fr: "Le premier ministre Pierre Trudeau a invoqué la Loi sur les mesures de guerre, la seule utilisation en temps de paix dans l’histoire du Canada, après l’enlèvement du diplomate britannique James Cross et du ministre québécois Pierre Laporte par le FLQ."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What significant event happened in Quebec in 1995?",
      fr: "Quel événement marquant s’est produit au Québec en 1995?"
    },
    options: {
      en: ["Quebec City was founded","The sovereignty referendum was held","The Olympics came to Montreal","A major flood devastated the province"],
      fr: ["Québec a été fondée","Le référendum sur la souveraineté a eu lieu","Les Jeux olympiques sont venus à Montréal","Une inondation majeure a dévasté la province"]
    },
    correctIndex: 1,
    funFact: {
      en: "The 1995 Quebec sovereignty referendum was defeated by a razor-thin margin of 50.58% No to 49.42% Yes — a difference of only about 54,000 votes.",
      fr: "Le référendum de 1995 sur la souveraineté du Québec a été rejeté par une marge infime de 50,58 % pour le Non contre 49,42 % pour le Oui — une différence d’environ 54 000 votes seulement."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "In what year did women first gain the right to vote in federal elections in Canada?",
      fr: "En quelle année les femmes ont-elles obtenu pour la première fois le droit de vote aux élections fédérales au Canada?"
    },
    options: {
      en: ["1900","1918","1929","1940"],
      fr: ["1900","1918","1929","1940"]
    },
    correctIndex: 1,
    funFact: {
      en: "Most Canadian women gained federal voting rights in 1918, but Indigenous women and men were excluded from voting until 1960 unless they gave up their treaty status.",
      fr: "La plupart des femmes canadiennes ont obtenu le droit de vote fédéral en 1918, mais les femmes et hommes autochtones en étaient exclus jusqu’en 1960, à moins de renoncer à leur statut de traité."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What was the Underground Railroad in the Canadian context?",
      fr: "Qu’était le chemin de fer clandestin dans le contexte canadien?"
    },
    options: {
      en: ["A secret subway system","A network helping enslaved people escape to freedom in Canada","An early railway across Canada","A smuggling route for goods"],
      fr: ["Un métro secret","Un réseau aidant les personnes réduites en esclavage à fuir vers la liberté au Canada","Un premier chemin de fer à travers le Canada","Une route de contrebande de marchandises"]
    },
    correctIndex: 1,
    funFact: {
      en: "An estimated 30,000 to 40,000 freedom seekers reached Canada via the Underground Railroad. Many settled in Ontario communities like Buxton, Dresden, and Chatham.",
      fr: "On estime que 30 000 à 40 000 personnes en quête de liberté ont atteint le Canada par le chemin de fer clandestin. Beaucoup se sont installées dans des communautés ontariennes comme Buxton, Dresden et Chatham."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What year did the Hudson's Bay Company receive its royal charter?",
      fr: "En quelle année la Compagnie de la Baie d’Hudson a-t-elle reçu sa charte royale?"
    },
    options: {
      en: ["1610","1670","1763","1821"],
      fr: ["1610","1670","1763","1821"]
    },
    correctIndex: 1,
    funFact: {
      en: "Founded in 1670, the Hudson's Bay Company is one of the oldest commercial corporations in the world. At its peak, it controlled nearly 15% of North America's land area.",
      fr: "Fondée en 1670, la Compagnie de la Baie d’Hudson est l’une des plus anciennes entreprises commerciales au monde. À son apogée, elle contrôlait près de 15 % de la superficie de l’Amérique du Nord."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which war saw Canadian forces participate in the famous D-Day landings at Juno Beach?",
      fr: "Dans quelle guerre les forces canadiennes ont-elles participé au célèbre débarquement du jour J à Juno Beach?"
    },
    options: {
      en: ["World War I","World War II","Korean War","Boer War"],
      fr: ["Première Guerre mondiale","Seconde Guerre mondiale","Guerre de Corée","Guerre des Boers"]
    },
    correctIndex: 1,
    funFact: {
      en: "On June 6, 1944, the 3rd Canadian Infantry Division landed at Juno Beach in Normandy. Despite heavy resistance, they advanced further inland than any other Allied force that day.",
      fr: "Le 6 juin 1944, la 3e Division d’infanterie canadienne a débarqué à Juno Beach en Normandie. Malgré une forte résistance, elle a avancé plus loin à l’intérieur des terres que toute autre force alliée ce jour-là."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the largest province or territory in Canada by area?",
      fr: "Quelle est la plus grande province ou territoire du Canada en superficie?"
    },
    options: {
      en: ["Ontario","Quebec","Nunavut","British Columbia"],
      fr: ["Ontario","Québec","Nunavut","Colombie-Britannique"]
    },
    correctIndex: 2,
    funFact: {
      en: "Nunavut covers about 2.1 million km², making it larger than Mexico. Despite its enormous size, it has a population of only about 40,000 people.",
      fr: "Le Nunavut couvre environ 2,1 millions de km², ce qui le rend plus grand que le Mexique. Malgré son énorme superficie, il ne compte qu’environ 40 000 habitants."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian province is known as 'La Belle Province'?",
      fr: "Quelle province canadienne est connue sous le nom de « La Belle Province »?"
    },
    options: {
      en: ["Ontario","Quebec","New Brunswick","Nova Scotia"],
      fr: ["Ontario","Québec","Nouveau-Brunswick","Nouvelle-Écosse"]
    },
    correctIndex: 1,
    funFact: {
      en: "Quebec's licence plates bore the slogan 'La Belle Province' from 1963 to 1977, when it was replaced by 'Je me souviens' (I remember).",
      fr: "Les plaques d’immatriculation du Québec portaient le slogan « La Belle Province » de 1963 à 1977, avant d’être remplacé par « Je me souviens »."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Canada has the longest coastline of any country in the world. Approximately how long is it?",
      fr: "Le Canada possède le plus long littoral de tous les pays du monde. Quelle est sa longueur approximative?"
    },
    options: {
      en: ["71,000 km","152,000 km","243,000 km","310,000 km"],
      fr: ["71 000 km","152 000 km","243 000 km","310 000 km"]
    },
    correctIndex: 2,
    funFact: {
      en: "Canada's coastline stretches approximately 243,000 km, touching three oceans: the Atlantic, Pacific, and Arctic. If you walked 20 km per day, it would take over 33 years to traverse.",
      fr: "Le littoral du Canada s’étend sur environ 243 000 km, touchant trois océans : l’Atlantique, le Pacifique et l’Arctique. Si vous marchiez 20 km par jour, il faudrait plus de 33 ans pour le parcourir."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "The Bay of Fundy, known for the world's highest tides, is located between which two provinces?",
      fr: "La baie de Fundy, connue pour les plus hautes marées du monde, est située entre quelles deux provinces?"
    },
    options: {
      en: ["Ontario and Quebec","Nova Scotia and New Brunswick","PEI and Nova Scotia","Newfoundland and New Brunswick"],
      fr: ["Ontario et Québec","Nouvelle-Écosse et Nouveau-Brunswick","Î.-P.-É. et Nouvelle-Écosse","Terre-Neuve et Nouveau-Brunswick"]
    },
    correctIndex: 1,
    funFact: {
      en: "Tides in the Bay of Fundy can rise up to 16 metres — as high as a five-story building. About 160 billion tonnes of water flow in and out with each tide cycle.",
      fr: "Les marées de la baie de Fundy peuvent atteindre 16 mètres de hauteur — l’équivalent d’un immeuble de cinq étages. Environ 160 milliards de tonnes d’eau entrent et sortent à chaque cycle de marée."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What natural wonder is shared between Ontario, Canada and New York, USA?",
      fr: "Quelle merveille naturelle est partagée entre l’Ontario au Canada et l’État de New York aux États-Unis?"
    },
    options: {
      en: ["Grand Canyon","Niagara Falls","Yellowstone","Old Faithful"],
      fr: ["Grand Canyon","Chutes Niagara","Yellowstone","Old Faithful"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Horseshoe Falls on the Canadian side is the largest of the three Niagara waterfalls. Over 168,000 cubic metres of water flow over the falls every minute during peak daytime hours.",
      fr: "Les chutes en fer à cheval du côté canadien sont les plus grandes des trois chutes Niagara. Plus de 168 000 mètres cubes d’eau s’écoulent par minute aux heures de pointe."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which province is home to the Canadian Rockies and Banff National Park?",
      fr: "Quelle province abrite les Rocheuses canadiennes et le parc national de Banff?"
    },
    options: {
      en: ["British Columbia","Alberta","Saskatchewan","Yukon"],
      fr: ["Colombie-Britannique","Alberta","Saskatchewan","Yukon"]
    },
    correctIndex: 1,
    funFact: {
      en: "Banff National Park, established in 1885, was Canada's first national park and the third in the world. It receives over 4 million visitors annually.",
      fr: "Le parc national de Banff, créé en 1885, a été le premier parc national du Canada et le troisième au monde. Il accueille plus de 4 millions de visiteurs par an."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What percentage of the world's fresh surface water is found in Canada?",
      fr: "Quel pourcentage de l’eau douce de surface mondiale se trouve au Canada?"
    },
    options: {
      en: ["5%","9%","20%","35%"],
      fr: ["5 %","9 %","20 %","35 %"]
    },
    correctIndex: 2,
    funFact: {
      en: "Canada holds approximately 20% of the world's fresh surface water and 7% of the world's renewable water supply, with over 2 million lakes — more than all other countries combined.",
      fr: "Le Canada détient environ 20 % de l’eau douce de surface mondiale et 7 % de l’approvisionnement en eau renouvelable, avec plus de 2 millions de lacs — plus que tous les autres pays réunis."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the smallest province in Canada by area?",
      fr: "Quelle est la plus petite province du Canada en superficie?"
    },
    options: {
      en: ["Nova Scotia","New Brunswick","Prince Edward Island","Newfoundland and Labrador"],
      fr: ["Nouvelle-Écosse","Nouveau-Brunswick","Île-du-Prince-Édouard","Terre-Neuve-et-Labrador"]
    },
    correctIndex: 2,
    funFact: {
      en: "Prince Edward Island is only 5,660 km² — you could fit it inside Banff National Park. Despite its small size, it produces 25% of Canada's potatoes.",
      fr: "L’Île-du-Prince-Édouard ne fait que 5 660 km² — elle tiendrait dans le parc national de Banff. Malgré sa petite taille, elle produit 25 % des pommes de terre du Canada."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What leaf is featured on the Canadian flag?",
      fr: "Quelle feuille figure sur le drapeau canadien?"
    },
    options: {
      en: ["Oak leaf","Maple leaf","Birch leaf","Pine needle"],
      fr: ["Feuille de chêne","Feuille d’érable","Feuille de bouleau","Aiguille de pin"]
    },
    correctIndex: 1,
    funFact: {
      en: "The current Canadian flag, known as the Maple Leaf, was adopted on February 15, 1965 after a heated national debate known as the 'Great Canadian Flag Debate'.",
      fr: "Le drapeau canadien actuel, connu sous le nom de l’Unifolié, a été adopté le 15 février 1965 après un vif débat national connu sous le nom du « grand débat sur le drapeau canadien »."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian musician is known as 'The Weeknd'?",
      fr: "Quel musicien canadien est connu sous le nom de « The Weeknd »?"
    },
    options: {
      en: ["Drake","Abel Tesfaye","Justin Bieber","Shawn Mendes"],
      fr: ["Drake","Abel Tesfaye","Justin Bieber","Shawn Mendes"]
    },
    correctIndex: 1,
    funFact: {
      en: "Abel Tesfaye, from Scarborough, Ontario, chose the stage name 'The Weeknd' after dropping out of high school and leaving home one weekend. He dropped the 'e' to avoid trademark issues.",
      fr: "Abel Tesfaye, de Scarborough en Ontario, a choisi le nom de scène « The Weeknd » après avoir quitté l’école secondaire et la maison un week-end. Il a enlevé le « e » pour éviter des problèmes de marque déposée."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which famous Canadian comedy show launched the careers of Mike Myers, Dan Aykroyd, and many others?",
      fr: "Quelle célèbre émission de comédie canadienne a lancé les carrières de Mike Myers, Dan Aykroyd et de nombreux autres?"
    },
    options: {
      en: ["Kids in the Hall","Second City Television (SCTV)","Royal Canadian Air Farce","This Hour Has 22 Minutes"],
      fr: ["Kids in the Hall","Second City Television (SCTV)","Royal Canadian Air Farce","This Hour Has 22 Minutes"]
    },
    correctIndex: 1,
    funFact: {
      en: "SCTV ran from 1976 to 1984 and was set in a fictional TV station in the equally fictional town of Melonville. It launched careers of John Candy, Eugene Levy, Catherine O'Hara, Rick Moranis, and Martin Short.",
      fr: "SCTV a été diffusé de 1976 à 1984 et se déroulait dans une station de télévision fictive de la ville également fictive de Melonville. L’émission a lancé les carrières de John Candy, Eugene Levy, Catherine O’Hara, Rick Moranis et Martin Short."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Cirque du Soleil?",
      fr: "Qu’est-ce que le Cirque du Soleil?"
    },
    options: {
      en: ["A theme park in Montreal","A Quebec-based circus entertainment company","A French TV channel","A music festival in Vancouver"],
      fr: ["Un parc thématique à Montréal","Une entreprise québécoise de divertissement de cirque","Une chaîne de télévision française","Un festival de musique à Vancouver"]
    },
    correctIndex: 1,
    funFact: {
      en: "Cirque du Soleil was founded in 1984 by two former street performers, Guy Laliberté and Gilles Ste-Croix, in Baie-Saint-Paul, Quebec. It has performed for over 180 million spectators worldwide.",
      fr: "Le Cirque du Soleil a été fondé en 1984 par deux anciens artistes de rue, Guy Laliberté et Gilles Ste-Croix, à Baie-Saint-Paul au Québec. Il s’est produit devant plus de 180 millions de spectateurs dans le monde."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian artist is famous for painting the landscapes of British Columbia and Indigenous themes?",
      fr: "Quel artiste canadien est célèbre pour avoir peint les paysages de la Colombie-Britannique et des thèmes autochtones?"
    },
    options: {
      en: ["Lawren Harris","Emily Carr","Tom Thomson","A.Y. Jackson"],
      fr: ["Lawren Harris","Emily Carr","Tom Thomson","A.Y. Jackson"]
    },
    correctIndex: 1,
    funFact: {
      en: "Emily Carr (1871–1945) is considered one of Canada's greatest artists. She painted the forests of BC and First Nations totem poles at a time when few took women artists seriously.",
      fr: "Emily Carr (1871–1945) est considérée comme l’une des plus grandes artistes du Canada. Elle a peint les forêts de la C.-B. et les mâts totémiques des Premières Nations à une époque où peu prenaient les femmes artistes au sérieux."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian singer released the album 'Jagged Little Pill'?",
      fr: "Quelle chanteuse canadienne a sorti l’album « Jagged Little Pill »?"
    },
    options: {
      en: ["Céline Dion","Alanis Morissette","Sarah McLachlan","Nelly Furtado"],
      fr: ["Céline Dion","Alanis Morissette","Sarah McLachlan","Nelly Furtado"]
    },
    correctIndex: 1,
    funFact: {
      en: "Alanis Morissette from Ottawa released Jagged Little Pill in 1995. It sold over 33 million copies worldwide, making it one of the best-selling albums of all time.",
      fr: "Alanis Morissette d’Ottawa a sorti Jagged Little Pill en 1995. L’album s’est vendu à plus de 33 millions d’exemplaires dans le monde, ce qui en fait l’un des albums les plus vendus de tous les temps."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Group of Seven?",
      fr: "Qu’est-ce que le Groupe des Sept?"
    },
    options: {
      en: ["A political alliance","A group of Canadian landscape painters","Seven founding provinces","A hockey league"],
      fr: ["Une alliance politique","Un groupe de peintres paysagistes canadiens","Sept provinces fondatrices","Une ligue de hockey"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Group of Seven (formed 1920) revolutionized Canadian art by painting the Canadian wilderness in bold, distinctive styles. Their work helped define a uniquely Canadian artistic identity.",
      fr: "Le Groupe des Sept (formé en 1920) a révolutionné l’art canadien en peignant la nature sauvage canadienne dans des styles audacieux et distinctifs. Leur travail a contribué à définir une identité artistique proprement canadienne."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "In which year was the Canadian Broadcasting Corporation (CBC) founded?",
      fr: "En quelle année la Société Radio-Canada (SRC) a-t-elle été fondée?"
    },
    options: {
      en: ["1920","1936","1952","1967"],
      fr: ["1920","1936","1952","1967"]
    },
    correctIndex: 1,
    funFact: {
      en: "The CBC was created in 1936 to provide national radio broadcasting in both English and French. Today it operates TV, radio, and digital services reaching 82% of Canadians weekly.",
      fr: "La SRC a été créée en 1936 pour offrir la radiodiffusion nationale en anglais et en français. Aujourd’hui, elle exploite des services de télévision, de radio et numériques atteignant 82 % des Canadiens chaque semaine."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian rapper started from the bottom and is associated with Toronto?",
      fr: "Quel rappeur canadien a « commencé d’en bas » et est associé à Toronto?"
    },
    options: {
      en: ["Drake","The Weeknd","Tory Lanez","NAV"],
      fr: ["Drake","The Weeknd","Tory Lanez","NAV"]
    },
    correctIndex: 0,
    funFact: {
      en: "Aubrey Drake Graham, born in Toronto, first gained fame as an actor on the Canadian TV show Degrassi. He helped put Toronto's hip-hop scene on the global map and popularized the city's '6ix' nickname.",
      fr: "Aubrey Drake Graham, né à Toronto, s’est d’abord fait connaître comme acteur dans la série télévisée canadienne Degrassi. Il a contribué à mettre la scène hip-hop de Toronto sur la carte mondiale et a popularisé le surnom « 6ix » de la ville."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Juno Award?",
      fr: "Qu’est-ce que le prix Juno?"
    },
    options: {
      en: ["A literary prize","Canada's premier music award","A scientific honour","A film festival award"],
      fr: ["Un prix littéraire","Le plus prestigieux prix musical du Canada","Un honneur scientifique","Un prix de festival de cinéma"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Juno Awards are named after Pierre Juneau, the first chairman of the CRTC. First held in 1970, they celebrate the best in Canadian music across dozens of categories.",
      fr: "Les prix Juno portent le nom de Pierre Juneau, le premier président du CRTC. Décernés pour la première fois en 1970, ils célèbrent le meilleur de la musique canadienne dans des dizaines de catégories."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What does the Québécois expression 'c'est correct' typically mean?",
      fr: "Que signifie généralement l’expression québécoise « c’est correct »?"
    },
    options: {
      en: ["It's wrong","It's fine / no problem","That's expensive","Let's go"],
      fr: ["C’est faux","C’est bien / pas de problème","C’est cher","Allons-y"]
    },
    correctIndex: 1,
    funFact: {
      en: "In Québécois French, 'correct' is used far more broadly than in France French. It can mean 'okay', 'no worries', 'that works', or even 'you're a good person' (y'est correct).",
      fr: "En français québécois, « correct » est utilisé beaucoup plus largement qu’en français de France. Il peut signifier « d’accord », « pas de souci », « ça marche » ou même « c’est une bonne personne » (y’est correct)."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What does 'eh' typically signify when used by Canadians?",
      fr: "Que signifie généralement « eh » quand il est utilisé par les Canadiens?"
    },
    options: {
      en: ["Disagreement","A request for confirmation or agreement","Anger","Surprise"],
      fr: ["Un désaccord","Une demande de confirmation ou d’accord","De la colère","De la surprise"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Canadian 'eh' is so iconic that it has its own entry in the Canadian Oxford Dictionary. Linguists classify it as a 'tag question' that invites the listener to agree or respond.",
      fr: "Le « eh » canadien est si emblématique qu’il a sa propre entrée dans le dictionnaire Canadian Oxford. Les linguistes le classent comme une « question de confirmation » qui invite l’interlocuteur à acquiescer ou répondre."
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is a 'dep' (dépanneur) in Quebec?",
      fr: "Qu’est-ce qu’un « dép » (dépanneur) au Québec?"
    },
    options: {
      en: ["A mechanic","A corner store / convenience store","A police officer","A tow truck"],
      fr: ["Un mécanicien","Un magasin de quartier / dépanneur","Un policier","Une remorqueuse"]
    },
    correctIndex: 1,
    funFact: {
      en: "The word 'dépanneur' literally means 'one who gets you out of trouble.' In Quebec, deps are neighbourhood institutions — open late, selling everything from milk to lottery tickets to beer.",
      fr: "Le mot « dépanneur » signifie littéralement « celui qui vous sort du pétrin ». Au Québec, les déps sont des institutions de quartier — ouvertes tard, vendant de tout, du lait aux billets de loterie en passant par la bière."
    }
  },
  {
    category: "language",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "How do Canadians typically spell the word for 'colour'?",
      fr: "Comment les Canadiens épellent-ils généralement le mot « colour »?"
    },
    options: {
      en: ["Color (American)","Colour (British)","Coulor","It varies by province"],
      fr: ["Color (américain)","Colour (britannique)","Coulor","Ça varie selon la province"]
    },
    correctIndex: 1,
    funFact: {
      en: "Canadian English generally follows British spelling conventions (colour, honour, centre) but adopts some American forms (-ize instead of -ise). This unique blend is codified in the Canadian Oxford Dictionary.",
      fr: "L’anglais canadien suit généralement les conventions orthographiques britanniques (colour, honour, centre) mais adopte certaines formes américaines (-ize au lieu de -ise). Ce mélange unique est codifié dans le Canadian Oxford Dictionary."
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'Chiac'?",
      fr: "Qu’est-ce que le « chiac »?"
    },
    options: {
      en: ["A Quebec dance","A French-English mixed dialect from New Brunswick","A Cree greeting","A type of canoe"],
      fr: ["Une danse québécoise","Un dialecte mixte français-anglais du Nouveau-Brunswick","Une salutation crie","Un type de canoë"]
    },
    correctIndex: 1,
    funFact: {
      en: "Chiac is an Acadian French dialect heavily mixed with English, spoken mainly in southeastern New Brunswick around Moncton. It seamlessly blends French grammar with English words in ways unique to the region.",
      fr: "Le chiac est un dialecte du français acadien fortement mélangé à l’anglais, parlé principalement dans le sud-est du Nouveau-Brunswick autour de Moncton. Il mélange la grammaire française et des mots anglais de manière unique à la région."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What does 'loonie' refer to in Canadian slang?",
      fr: "Que désigne le terme « loonie » dans l’argot canadien?"
    },
    options: {
      en: ["A crazy person","The Canadian one-dollar coin","A type of bird","A winter storm"],
      fr: ["Une personne folle","La pièce canadienne d’un dollar","Un type d’oiseau","Une tempête hivernale"]
    },
    correctIndex: 1,
    funFact: {
      en: "The loonie gets its nickname from the common loon depicted on the coin, introduced in 1987. The two-dollar coin, introduced in 1996, was quickly dubbed the 'toonie' as a play on 'two' + 'loonie'.",
      fr: "Le loonie tire son surnom du plongeon huard représenté sur la pièce, introduite en 1987. La pièce de deux dollars, introduite en 1996, a rapidement été surnommée « toonie », un jeu de mots sur « two » + « loonie »."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "In Canadian English, what is a 'Kraft Dinner'?",
      fr: "En anglais canadien, qu’est-ce qu’un « Kraft Dinner »?"
    },
    options: {
      en: ["A fancy restaurant meal","Boxed macaroni and cheese","A Christmas dinner","A type of sausage"],
      fr: ["Un repas de restaurant chic","Du macaroni au fromage en boîte","Un dîner de Noël","Un type de saucisse"]
    },
    correctIndex: 1,
    funFact: {
      en: "Canadians consume more Kraft Dinner per capita than any other country. While Americans call it 'Kraft Mac and Cheese', Canadians universally call it 'KD' and consider it a cultural staple.",
      fr: "Les Canadiens consomment plus de Kraft Dinner par habitant que tout autre pays. Alors que les Américains l’appellent « Kraft Mac and Cheese », les Canadiens l’appellent universellement « KD » et le considèrent comme un incontournable culturel."
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is Michif?",
      fr: "Qu’est-ce que le michif?"
    },
    options: {
      en: ["A type of canoe","The Métis mixed language of French and Cree","A Quebec dessert","A military signal"],
      fr: ["Un type de canoë","La langue mixte métisse de français et de cri","Un dessert québécois","Un signal militaire"]
    },
    correctIndex: 1,
    funFact: {
      en: "Michif combines French nouns and noun phrases with Cree verbs and verb phrases. It is one of very few 'mixed languages' in the world and is critically endangered, with fewer than 1,000 fluent speakers remaining.",
      fr: "Le michif combine des noms et groupes nominaux français avec des verbes et groupes verbaux cris. C’est l’une des très rares « langues mixtes » au monde et elle est en danger critique, avec moins de 1 000 locuteurs courants restants."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Stanley Cup?",
      fr: "Qu’est-ce que la Coupe Stanley?"
    },
    options: {
      en: ["A soccer trophy","The championship trophy of the NHL","An award for Canadian athletes","A sailing competition"],
      fr: ["Un trophée de soccer","Le trophée de championnat de la LNH","Un prix pour les athlètes canadiens","Une compétition de voile"]
    },
    correctIndex: 1,
    funFact: {
      en: "Lord Stanley of Preston, Canada's Governor General, donated the Cup in 1893 for $48.67. It is the oldest professional sports trophy in North America and the only one where players' names are engraved on it.",
      fr: "Lord Stanley de Preston, gouverneur général du Canada, a offert la Coupe en 1893 pour 48,67 $. C’est le plus ancien trophée sportif professionnel en Amérique du Nord et le seul où les noms des joueurs y sont gravés."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian city hosted the Winter Olympics in 2010?",
      fr: "Quelle ville canadienne a accueilli les Jeux olympiques d’hiver en 2010?"
    },
    options: {
      en: ["Toronto","Calgary","Vancouver","Montreal"],
      fr: ["Toronto","Calgary","Vancouver","Montréal"]
    },
    correctIndex: 2,
    funFact: {
      en: "The 2010 Vancouver Winter Olympics saw Canada win a record 14 gold medals, including Sidney Crosby's iconic overtime goal against the USA in men's hockey, watched by 80% of Canadians.",
      fr: "Les Jeux olympiques d’hiver de Vancouver 2010 ont vu le Canada remporter un record de 14 médailles d’or, dont le but emblématique de Sidney Crosby en prolongation contre les États-Unis en hockey masculin, regardé par 80 % des Canadiens."
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Who invented basketball?",
      fr: "Qui a inventé le basketball?"
    },
    options: {
      en: ["James Naismith, a Canadian","Walter Camp, an American","Pierre de Coubertin, a Frenchman","William Webb Ellis, a Brit"],
      fr: ["James Naismith, un Canadien","Walter Camp, un Américain","Pierre de Coubertin, un Français","William Webb Ellis, un Britannique"]
    },
    correctIndex: 0,
    funFact: {
      en: "James Naismith from Almonte, Ontario invented basketball in 1891 in Springfield, Massachusetts. He nailed peach baskets to a gym balcony and wrote the original 13 rules of the game.",
      fr: "James Naismith d’Almonte, en Ontario, a inventé le basketball en 1891 à Springfield, au Massachusetts. Il a cloué des paniers de pêches sur le balcon d’un gymnase et a rédigé les 13 règles originales du jeu."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian won multiple Formula 1 World Championships?",
      fr: "Quel Canadien a remporté plusieurs championnats du monde de Formule 1?"
    },
    options: {
      en: ["Gilles Villeneuve","Jacques Villeneuve","Lance Stroll","None — only Jacques won once"],
      fr: ["Gilles Villeneuve","Jacques Villeneuve","Lance Stroll","Aucun — seul Jacques a gagné une fois"]
    },
    correctIndex: 3,
    funFact: {
      en: "Jacques Villeneuve won the F1 World Championship in 1997, becoming the only Canadian to do so. His father Gilles was a legendary F1 driver who tragically died in a racing accident in 1982.",
      fr: "Jacques Villeneuve a remporté le championnat du monde de F1 en 1997, devenant le seul Canadien à y parvenir. Son père Gilles était un pilote légendaire de F1 qui est tragiquement décédé dans un accident de course en 1982."
    }
  },
  {
    category: "sports",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What sport is the 'Brier' associated with?",
      fr: "À quel sport le « Brier » est-il associé?"
    },
    options: {
      en: ["Hockey","Curling","Figure skating","Lacrosse"],
      fr: ["Hockey","Curling","Patinage artistique","Crosse"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Tim Hortons Brier is the Canadian men's curling championship, held annually since 1927. Curling is so popular in Canada that there are over 1,000 curling clubs across the country.",
      fr: "Le Brier Tim Hortons est le championnat canadien masculin de curling, tenu annuellement depuis 1927. Le curling est si populaire au Canada qu’il y a plus de 1 000 clubs de curling à travers le pays."
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the 1972 Summit Series?",
      fr: "Qu’était la Série du siècle de 1972?"
    },
    options: {
      en: ["A sailing competition","An 8-game hockey series between Canada and the Soviet Union","A track and field event","A baseball championship"],
      fr: ["Une compétition de voile","Une série de 8 matchs de hockey entre le Canada et l’Union soviétique","Un événement d’athlétisme","Un championnat de baseball"]
    },
    correctIndex: 1,
    funFact: {
      en: "Paul Henderson's winning goal with 34 seconds left in Game 8 is considered the greatest moment in Canadian sports history. An estimated 75% of Canadians watched the final game.",
      fr: "Le but gagnant de Paul Henderson à 34 secondes de la fin du 8e match est considéré comme le plus grand moment de l’histoire du sport canadien. Environ 75 % des Canadiens ont regardé le match final."
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian women’s hockey player is considered one of the greatest ever with 4 Olympic gold medals?",
      fr: "Quelle joueuse canadienne de hockey féminin est considérée comme l’une des plus grandes de tous les temps avec 4 médailles d’or olympiques?"
    },
    options: {
      en: ["Cassie Campbell","Hayley Wickenheiser","Marie-Philip Poulin","Jennifer Botterill"],
      fr: ["Cassie Campbell","Hayley Wickenheiser","Marie-Philip Poulin","Jennifer Botterill"]
    },
    correctIndex: 1,
    funFact: {
      en: "Hayley Wickenheiser competed in five Winter Olympics (1998–2014), winning four golds and one silver. She also played professional men's hockey in Finland and is now an assistant GM for the Toronto Maple Leafs.",
      fr: "Hayley Wickenheiser a participé à cinq Jeux olympiques d’hiver (1998–2014), remportant quatre médailles d’or et une d’argent. Elle a aussi joué au hockey professionnel masculin en Finlande et est maintenant directrice générale adjointe des Maple Leafs de Toronto."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Canadian Football League (CFL) field known for compared to the NFL?",
      fr: "Pour quoi le terrain de la Ligue canadienne de football (LCF) est-il connu par rapport à la NFL?"
    },
    options: {
      en: ["It’s smaller","It’s larger with 12 players per side","It uses a round ball","It has no end zones"],
      fr: ["Il est plus petit","Il est plus grand avec 12 joueurs par équipe","Il utilise un ballon rond","Il n’a pas de zones de but"]
    },
    correctIndex: 1,
    funFact: {
      en: "The CFL field is 150 yards long and 65 yards wide, versus 100×53⅓ in the NFL. CFL teams field 12 players, have 3 downs instead of 4, and play with a slightly larger ball. The championship is the Grey Cup, awarded since 1909.",
      fr: "Le terrain de la LCF fait 150 verges de long et 65 de large, contre 100×53⅓ dans la NFL. Les équipes de la LCF alignent 12 joueurs, ont 3 essais au lieu de 4 et jouent avec un ballon légèrement plus gros. Le championnat est la Coupe Grey, décernée depuis 1909."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the significance of the Truth and Reconciliation Commission (TRC) of Canada?",
      fr: "Quelle est l’importance de la Commission de vérité et réconciliation (CVR) du Canada?"
    },
    options: {
      en: ["It resolved a trade dispute","It documented the history and impacts of residential schools","It established new provinces","It created immigration policy"],
      fr: ["Elle a résolu un litige commercial","Elle a documenté l’histoire et les impacts des pensionnats autochtones","Elle a établi de nouvelles provinces","Elle a créé une politique d’immigration"]
    },
    correctIndex: 1,
    funFact: {
      en: "The TRC issued 94 Calls to Action in 2015 after documenting the experiences of over 7,000 residential school survivors. It concluded that the residential school system constituted cultural genocide.",
      fr: "La CVR a émis 94 appels à l’action en 2015 après avoir documenté les expériences de plus de 7 000 survivants des pensionnats. Elle a conclu que le système des pensionnats constituait un génocide culturel."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Haudenosaunee Confederacy, and why is it historically significant?",
      fr: "Qu’est-ce que la Confédération haudenosaunee et pourquoi est-elle historiquement importante?"
    },
    options: {
      en: ["A fur trading company","One of the oldest democratic governments in the world","A military alliance from WWI","A religious organization"],
      fr: ["Une compagnie de traite des fourrures","L’un des plus anciens gouvernements démocratiques au monde","Une alliance militaire de la Première Guerre mondiale","Une organisation religieuse"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Haudenosaunee (Iroquois) Confederacy, uniting six nations, may predate European contact by centuries. Its Great Law of Peace influenced the framers of the U.S. Constitution and remains a living governance system today.",
      fr: "La Confédération haudenosaunee (iroquoise), unissant six nations, pourrait précéder le contact européen de plusieurs siècles. Sa Grande Loi de la Paix a influencé les rédacteurs de la Constitution américaine et demeure un système de gouvernance vivant aujourd’hui."
    }
  },
  {
    category: "indigenous",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is an inukshuk?",
      fr: "Qu’est-ce qu’un inukshuk?"
    },
    options: {
      en: ["A type of boat","A stone landmark built by the Inuit","An Inuit musical instrument","A type of igloo"],
      fr: ["Un type de bateau","Un repère de pierre construit par les Inuits","Un instrument de musique inuit","Un type d’igloo"]
    },
    correctIndex: 1,
    funFact: {
      en: "Inuksuit (plural of inukshuk) have been used for millennia as navigation aids, food cache markers, and hunting guides across the Arctic. An inukshuk was the symbol of the 2010 Vancouver Winter Olympics.",
      fr: "Les inuksuit (pluriel d’inukshuk) sont utilisés depuis des millénaires comme aides à la navigation, marqueurs de caches alimentaires et guides de chasse dans l’Arctique. Un inukshuk était le symbole des Jeux olympiques d’hiver de Vancouver en 2010."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the significance of the National Day for Truth and Reconciliation (September 30)?",
      fr: "Quelle est l’importance de la Journée nationale de la vérité et de la réconciliation (30 septembre)?"
    },
    options: {
      en: ["It celebrates Confederation","It honours residential school survivors and the children who never returned home","It marks the end of summer","It commemorates a battle"],
      fr: ["Elle célèbre la Confédération","Elle honore les survivants des pensionnats et les enfants qui ne sont jamais revenus","Elle marque la fin de l’été","Elle commémore une bataille"]
    },
    correctIndex: 1,
    funFact: {
      en: "September 30 became a federal statutory holiday in 2021. It is also known as Orange Shirt Day, inspired by Phyllis Webstad, whose orange shirt was taken away on her first day at residential school.",
      fr: "Le 30 septembre est devenu un jour férié fédéral en 2021. Il est aussi connu comme la Journée du chandail orange, inspirée par Phyllis Webstad, dont le chandail orange a été confisqué lors de son premier jour au pensionnat."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Numbered Treaties system in Canada?",
      fr: "Qu’est-ce que le système des traités numérotés au Canada?"
    },
    options: {
      en: ["A postal code system","A series of 11 treaties signed between the Crown and First Nations (1871–1921)","Provincial boundaries","Trade agreements with the US"],
      fr: ["Un système de codes postaux","Une série de 11 traités signés entre la Couronne et les Premières Nations (1871–1921)","Des frontières provinciales","Des accords commerciaux avec les É.-U."]
    },
    correctIndex: 1,
    funFact: {
      en: "The 11 Numbered Treaties cover much of Western Canada and parts of Ontario and the North. Indigenous perspectives hold these as sacred, ongoing relationships, not one-time land deals. Many treaty obligations remain unfulfilled.",
      fr: "Les 11 traités numérotés couvrent une grande partie de l’Ouest canadien et des parties de l’Ontario et du Nord. Les perspectives autochtones les considèrent comme des relations sacrées et continues, pas comme des transactions foncières ponctuelles."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is a longhouse, and which Indigenous peoples are associated with it?",
      fr: "Qu’est-ce qu’une maison longue et quels peuples autochtones y sont associés?"
    },
    options: {
      en: ["A tipi used by Plains peoples","A communal dwelling of the Haudenosaunee (Iroquois)","An Inuit snow shelter","A Métis trading post"],
      fr: ["Un tipi utilisé par les peuples des Plaines","Une habitation communautaire des Haudenosaunee (Iroquois)","Un abri de neige inuit","Un poste de traite métis"]
    },
    correctIndex: 1,
    funFact: {
      en: "Haudenosaunee longhouses could be over 60 metres long and housed multiple families from the same clan. The Haudenosaunee still refer to their confederacy as 'the People of the Longhouse'.",
      fr: "Les maisons longues haudenosaunee pouvaient mesurer plus de 60 mètres et abritaient plusieurs familles du même clan. Les Haudenosaunee se désignent encore comme « le Peuple de la Maison longue »."
    }
  },
  {
    category: "indigenous",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What traditional Indigenous watercraft is iconic to Canada?",
      fr: "Quelle embarcation traditionnelle autochtone est emblématique du Canada?"
    },
    options: {
      en: ["Kayak","Canoe","Sailboat","Raft"],
      fr: ["Kayak","Canoë","Voilier","Radeau"]
    },
    correctIndex: 1,
    funFact: {
      en: "The birch bark canoe, developed by Indigenous peoples, was essential to the fur trade and exploration of Canada. Different nations created distinct designs adapted to their local waterways.",
      fr: "Le canoë d’écorce de bouleau, développé par les peuples autochtones, était essentiel au commerce des fourrures et à l’exploration du Canada. Différentes nations ont créé des designs distincts adaptés à leurs cours d’eau locaux."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the significance of wampum belts in Haudenosaunee diplomacy?",
      fr: "Quelle est l’importance des ceintures de wampum dans la diplomatie haudenosaunee?"
    },
    options: {
      en: ["They were currency","They recorded treaties and agreements through symbolic patterns","They were decorative jewelry","They measured land boundaries"],
      fr: ["Elles étaient de la monnaie","Elles enregistraient les traités et accords par des motifs symboliques","Elles étaient des bijoux décoratifs","Elles mesuraient les limites des terres"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Two Row Wampum belt (Kaswentha) represents the 1613 agreement between the Haudenosaunee and Dutch. Two parallel purple rows symbolize two peoples travelling side by side in their own vessels, neither steering the other's.",
      fr: "La ceinture de wampum à deux rangs (Kaswentha) représente l’accord de 1613 entre les Haudenosaunee et les Hollandais. Deux rangées violettes parallèles symbolisent deux peuples voyageant côte à côte dans leurs propres embarcations, sans diriger celle de l’autre."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is Nunavut and when was it created?",
      fr: "Qu’est-ce que le Nunavut et quand a-t-il été créé?"
    },
    options: {
      en: ["A province created in 1867","A territory created in 1999 as part of Inuit land claims","An island off Newfoundland","A national park established in 2005"],
      fr: ["Une province créée en 1867","Un territoire créé en 1999 dans le cadre des revendications territoriales inuites","Une île au large de Terre-Neuve","Un parc national établi en 2005"]
    },
    correctIndex: 1,
    funFact: {
      en: "Nunavut means 'our land' in Inuktitut. Its creation was the largest Indigenous land claim settlement in Canadian history, covering about one-fifth of Canada's total land mass.",
      fr: "Nunavut signifie « notre terre » en inuktitut. Sa création a été le plus grand règlement de revendication territoriale autochtone de l’histoire du Canada, couvrant environ un cinquième de la superficie totale du Canada."
    }
  },
  {
    category: "science",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What was invented by Alexander Graham Bell, who did much of his work in Canada?",
      fr: "Qu’a inventé Alexander Graham Bell, qui a effectué une grande partie de son travail au Canada?"
    },
    options: {
      en: ["The light bulb","The telephone","The radio","The telegraph"],
      fr: ["L’ampoule électrique","Le téléphone","La radio","Le télégraphe"]
    },
    correctIndex: 1,
    funFact: {
      en: "Alexander Graham Bell conceived the idea for the telephone at his family home in Brantford, Ontario and made the first long-distance call from there. He later did extensive aviation research at Baddeck, Nova Scotia.",
      fr: "Alexander Graham Bell a conçu l’idée du téléphone dans la maison familiale de Brantford, en Ontario, et y a fait le premier appel longue distance. Il a ensuite mené des recherches aéronautiques à Baddeck, en Nouvelle-Écosse."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What robotic technology did Canada contribute to the Space Shuttle program?",
      fr: "Quelle technologie robotique le Canada a-t-il apportée au programme de la navette spatiale?"
    },
    options: {
      en: ["The heat shield","The Canadarm robotic arm","Solar panels","Landing gear"],
      fr: ["Le bouclier thermique","Le bras robotique Canadarm","Des panneaux solaires","Le train d’atterrissage"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Canadarm, built by Spar Aerospace, flew on 90 Space Shuttle missions. Its successor, Canadarm2, is permanently attached to the International Space Station and was used to capture the first commercial cargo spacecraft.",
      fr: "Le Canadarm, construit par Spar Aerospace, a volé lors de 90 missions de la navette spatiale. Son successeur, le Canadarm2, est fixé en permanence à la Station spatiale internationale et a été utilisé pour capturer le premier vaisseau cargo commercial."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What did Frederick Banting and Charles Best discover at the University of Toronto in 1921?",
      fr: "Qu’ont découvert Frederick Banting et Charles Best à l’Université de Toronto en 1921?"
    },
    options: {
      en: ["Penicillin","Insulin","The polio vaccine","DNA structure"],
      fr: ["La pénicilline","L’insuline","Le vaccin contre la polio","La structure de l’ADN"]
    },
    correctIndex: 1,
    funFact: {
      en: "Banting and Best's discovery of insulin transformed diabetes from a death sentence into a manageable condition. Banting sold the patent for $1, believing it should be available to everyone. He won the Nobel Prize in 1923.",
      fr: "La découverte de l’insuline par Banting et Best a transformé le diabète d’une condamnation à mort en une maladie gérable. Banting a vendu le brevet pour 1 $, croyant qu’il devait être accessible à tous. Il a reçu le prix Nobel en 1923."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian physicist won the 2018 Nobel Prize for groundbreaking work in laser physics?",
      fr: "Quel physicien canadien a remporté le prix Nobel 2018 pour ses travaux révolutionnaires en physique des lasers?"
    },
    options: {
      en: ["Arthur B. McDonald","Donna Strickland","Willard Boyle","Bertram Brockhouse"],
      fr: ["Arthur B. McDonald","Donna Strickland","Willard Boyle","Bertram Brockhouse"]
    },
    correctIndex: 1,
    funFact: {
      en: "Donna Strickland from Guelph, Ontario shared the 2018 Nobel Prize for her work on chirped pulse amplification. She was only the third woman ever to win the Nobel Prize in Physics.",
      fr: "Donna Strickland de Guelph, en Ontario, a partagé le prix Nobel 2018 pour ses travaux sur l’amplification par impulsions chirpées. Elle n’était que la troisième femme à remporter le prix Nobel de physique."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What Canadian invention keeps roads safer in winter?",
      fr: "Quelle invention canadienne rend les routes plus sûres en hiver?"
    },
    options: {
      en: ["Snow tires","The snowplow","The snowmobile","Road salt"],
      fr: ["Les pneus d’hiver","Le chasse-neige","La motoneige","Le sel de voirie"]
    },
    correctIndex: 2,
    funFact: {
      en: "Joseph-Armand Bombardier from Valcourt, Quebec invented the snowmobile in the 1930s. His company, Bombardier, grew into a global transportation giant also making aircraft and rail vehicles.",
      fr: "Joseph-Armand Bombardier de Valcourt, au Québec, a inventé la motoneige dans les années 1930. Son entreprise, Bombardier, est devenue un géant mondial des transports, fabriquant également des avions et des véhicules ferroviaires."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is TRIUMF?",
      fr: "Qu’est-ce que TRIUMF?"
    },
    options: {
      en: ["A Canadian satellite","Canada's particle accelerator centre in Vancouver","A military program","A hockey analytics system"],
      fr: ["Un satellite canadien","Le centre canadien d’accélérateur de particules à Vancouver","Un programme militaire","Un système d’analyse de hockey"]
    },
    correctIndex: 1,
    funFact: {
      en: "TRIUMF, located at UBC in Vancouver, houses the world's largest cyclotron. It conducts research in particle physics, nuclear medicine, and materials science, and produces medical isotopes used worldwide.",
      fr: "TRIUMF, situé à l’UBC à Vancouver, abrite le plus grand cyclotron du monde. Il mène des recherches en physique des particules, en médecine nucléaire et en science des matériaux, et produit des isotopes médicaux utilisés dans le monde entier."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What major Canadian e-commerce company was founded in Ottawa in 2006?",
      fr: "Quelle grande entreprise canadienne de commerce électronique a été fondée à Ottawa en 2006?"
    },
    options: {
      en: ["Amazon Canada","Shopify","eBay Canada","Etsy Canada"],
      fr: ["Amazon Canada","Shopify","eBay Canada","Etsy Canada"]
    },
    correctIndex: 1,
    funFact: {
      en: "Shopify was started by Tobias Lütke, a German immigrant, after he couldn't find good e-commerce software for his snowboard shop. It now powers millions of businesses in 175+ countries.",
      fr: "Shopify a été fondé par Tobias Lütke, un immigrant allemand, après n’avoir pu trouver un bon logiciel de commerce électronique pour sa boutique de planches à neige. Il alimente désormais des millions d’entreprises dans plus de 175 pays."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian scientist pioneered deep learning and is often called a 'Godfather of AI'?",
      fr: "Quel scientifique canadien a été un pionnier de l’apprentissage profond et est souvent qualifié de « parrain de l’IA »?"
    },
    options: {
      en: ["Yann LeCun","Geoffrey Hinton","Andrew Ng","Yoshua Bengio"],
      fr: ["Yann LeCun","Geoffrey Hinton","Andrew Ng","Yoshua Bengio"]
    },
    correctIndex: 1,
    funFact: {
      en: "Geoffrey Hinton, a professor at the University of Toronto, shared the 2018 Turing Award for his work on deep learning. His research at U of T helped spark the modern AI revolution. Yoshua Bengio at Université de Montréal is also a co-recipient.",
      fr: "Geoffrey Hinton, professeur à l’Université de Toronto, a partagé le prix Turing 2018 pour ses travaux sur l’apprentissage profond. Ses recherches à l’U de T ont contribué à déclencher la révolution moderne de l’IA. Yoshua Bengio de l’Université de Montréal est également co-lauréat."
    }
  },
  {
    category: "science",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian city is known as a global hub for AI research?",
      fr: "Quelle ville canadienne est connue comme un pôle mondial de recherche en IA?"
    },
    options: {
      en: ["Calgary","Montreal","Halifax","Winnipeg"],
      fr: ["Calgary","Montréal","Halifax","Winnipeg"]
    },
    correctIndex: 1,
    funFact: {
      en: "Montreal hosts Mila (Quebec AI Institute), one of the world's largest academic AI labs, founded by Yoshua Bengio. Toronto and Edmonton also have major AI research centres, making Canada's AI corridor one of the world's strongest.",
      fr: "Montréal héberge Mila (Institut québécois d’intelligence artificielle), l’un des plus grands laboratoires académiques d’IA au monde, fondé par Yoshua Bengio. Toronto et Edmonton ont aussi d’importants centres de recherche en IA."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What Canadian invention protects people in car accidents?",
      fr: "Quelle invention canadienne protège les gens lors d’accidents de voiture?"
    },
    options: {
      en: ["The seatbelt","The electric car battery","The airbag crash sensor","IMAX projection"],
      fr: ["La ceinture de sécurité","La batterie de voiture électrique","Le capteur de collision pour coussin gonflable","La projection IMAX"]
    },
    correctIndex: 2,
    funFact: {
      en: "While not the airbag itself, the electromechanical crash sensor that triggers airbags was invented by Canadian engineer George Feher. IMAX, also Canadian (from Mississauga), revolutionized cinema projection.",
      fr: "Bien que ce ne soit pas le coussin gonflable lui-même, le capteur de collision électromécanique qui déclenche les coussins gonflables a été inventé par l’ingénieur canadien George Feher. IMAX, également canadien (de Mississauga), a révolutionné la projection cinématographique."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Perimeter Institute?",
      fr: "Qu’est-ce que l’Institut Périmètre?"
    },
    options: {
      en: ["A border security agency","A theoretical physics research centre in Waterloo, Ontario","A climate research station","A hockey training facility"],
      fr: ["Une agence de sécurité frontalière","Un centre de recherche en physique théorique à Waterloo, Ontario","Une station de recherche climatique","Un centre d’entraînement de hockey"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Perimeter Institute was founded in 1999 by Mike Lazaridis, co-founder of BlackBerry, with a $100 million personal donation. It is now one of the world's leading centres for theoretical physics research.",
      fr: "L’Institut Périmètre a été fondé en 1999 par Mike Lazaridis, cofondateur de BlackBerry, avec un don personnel de 100 millions de dollars. C’est maintenant l’un des principaux centres mondiaux de recherche en physique théorique."
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is poutine?",
      fr: "Qu’est-ce que la poutine?"
    },
    options: {
      en: ["A type of pie","French fries topped with cheese curds and gravy","A crepe with maple syrup","A smoked meat sandwich"],
      fr: ["Un type de tarte","Des frites garnies de fromage en grains et de sauce","Une crêpe au sirop d’érable","Un sandwich à la viande fumée"]
    },
    correctIndex: 1,
    funFact: {
      en: "Poutine originated in rural Quebec in the late 1950s. The word 'poutine' is Québécois slang for 'a mess.' It's now found on restaurant menus worldwide and has inspired countless gourmet variations.",
      fr: "La poutine est née dans le Québec rural à la fin des années 1950. Le mot « poutine » est un argot québécois signifiant « un dégât ». On la trouve maintenant sur les menus de restaurants du monde entier avec d’innombrables variantes gastronomiques."
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is Canada's most iconic coffee and donut chain?",
      fr: "Quelle est la chaîne de café et de beignets la plus emblématique du Canada?"
    },
    options: {
      en: ["Starbucks","Dunkin' Donuts","Tim Hortons","Second Cup"],
      fr: ["Starbucks","Dunkin' Donuts","Tim Hortons","Second Cup"]
    },
    correctIndex: 2,
    funFact: {
      en: "Tim Hortons was founded in 1964 by NHL hockey player Tim Horton in Hamilton, Ontario. There are over 5,700 locations in Canada — more per capita than any other restaurant chain in the country.",
      fr: "Tim Hortons a été fondé en 1964 par le joueur de hockey de la LNH Tim Horton à Hamilton, en Ontario. Il y a plus de 5 700 emplacements au Canada — plus par habitant que toute autre chaîne de restaurants au pays."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is a butter tart?",
      fr: "Qu’est-ce qu’une tartelette au beurre?"
    },
    options: {
      en: ["A type of bread","A pastry with a filling of butter, sugar, syrup, and egg","A chocolate bar","A Quebec cheese"],
      fr: ["Un type de pain","Une pâtisserie garnie de beurre, sucre, sirop et œuf","Une barre de chocolat","Un fromage québécois"]
    },
    correctIndex: 1,
    funFact: {
      en: "The butter tart is considered a uniquely Canadian pastry, with the earliest known recipe dating to 1900 in a Barrie, Ontario cookbook. The great debate: runny filling or firm?",
      fr: "La tartelette au beurre est considérée comme une pâtisserie uniquement canadienne, la plus ancienne recette connue datant de 1900 dans un livre de cuisine de Barrie, en Ontario. Le grand débat : garniture coulante ou ferme?"
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which province produces the vast majority of the world's maple syrup?",
      fr: "Quelle province produit la grande majorité du sirop d’érable mondial?"
    },
    options: {
      en: ["Ontario","Quebec","New Brunswick","British Columbia"],
      fr: ["Ontario","Québec","Nouveau-Brunswick","Colombie-Britannique"]
    },
    correctIndex: 1,
    funFact: {
      en: "Quebec produces about 70% of the world's maple syrup. The province even has a 'strategic maple syrup reserve' (like an oil reserve!) managed by the Federation of Quebec Maple Syrup Producers.",
      fr: "Le Québec produit environ 70 % du sirop d’érable mondial. La province dispose même d’une « réserve stratégique de sirop d’érable » (comme une réserve de pétrole!) gérée par la Fédération des producteurs acéricoles du Québec."
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is a 'donair' and where in Canada is it most associated?",
      fr: "Qu’est-ce qu’un « donair » et où au Canada est-il le plus associé?"
    },
    options: {
      en: ["A type of sushi from Vancouver","A spiced meat wrap from Halifax","A bagel from Montreal","A pierogi from the Prairies"],
      fr: ["Un type de sushi de Vancouver","Un wrap de viande épicée d’Halifax","Un bagel de Montréal","Un pierogi des Prairies"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Halifax donair is a Canadian adaptation of the Turkish döner kebab, featuring spiced beef on a pita with a unique sweet garlic sauce. Halifax declared it the city's official food in 2015.",
      fr: "Le donair d’Halifax est une adaptation canadienne du döner kebab turc, avec du bœuf épicé dans un pita et une sauce sucrée à l’ail unique. Halifax l’a déclaré nourriture officielle de la ville en 2015."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the difference between Montreal-style and New York-style bagels?",
      fr: "Quelle est la différence entre les bagels de style montréalais et ceux de style new-yorkais?"
    },
    options: {
      en: ["No difference","Montreal bagels are smaller, sweeter, and baked in a wood-fired oven","New York bagels are sweeter","Montreal bagels are frozen"],
      fr: ["Aucune différence","Les bagels montréalais sont plus petits, plus sucrés et cuits dans un four à bois","Les bagels new-yorkais sont plus sucrés","Les bagels montréalais sont congelés"]
    },
    correctIndex: 1,
    funFact: {
      en: "Montreal bagels are boiled in honey-sweetened water before baking in a wood-fired oven, giving them a denser, sweeter flavour. Fairmount Bagel (1919) and St-Viateur Bagel (1957) are the two legendary Montreal bakeries.",
      fr: "Les bagels montréalais sont bouillis dans de l’eau sucrée au miel avant d’être cuits dans un four à bois, leur donnant une saveur plus dense et plus sucrée. Fairmount Bagel (1919) et St-Viateur Bagel (1957) sont les deux boulangeries légendaires de Montréal."
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'tourtière' and when is it traditionally eaten?",
      fr: "Qu’est-ce que la tourtière et quand est-elle traditionnellement mangée?"
    },
    options: {
      en: ["A summer salad","A meat pie traditionally eaten at Christmas and New Year's","A type of soup","A birthday cake"],
      fr: ["Une salade d’été","Un pâté à la viande traditionnellement mangé à Noël et au Nouvel An","Un type de soupe","Un gâteau d’anniversaire"]
    },
    correctIndex: 1,
    funFact: {
      en: "Tourtière recipes vary dramatically across Quebec: Montreal-style uses ground pork, while Lac-Saint-Jean tourtière is a massive deep-dish pie with cubed meats and potatoes. Family recipes are fiercely guarded secrets.",
      fr: "Les recettes de tourtière varient énormément à travers le Québec : le style montréalais utilise du porc haché, tandis que la tourtière du Lac-Saint-Jean est une immense tourte profonde avec des viandes en cubes et des pommes de terre. Les recettes familiales sont des secrets jalousement gardés."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is a 'Caesar' cocktail in Canada?",
      fr: "Qu’est-ce qu’un cocktail « Caesar » au Canada?"
    },
    options: {
      en: ["Orange juice and champagne","Vodka, Clamato juice, hot sauce, and Worcestershire sauce","Rum and maple syrup","Beer and tomato juice"],
      fr: ["Jus d’orange et champagne","Vodka, jus de Clamato, sauce piquante et sauce Worcestershire","Rhum et sirop d’érable","Bière et jus de tomate"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Caesar was invented in 1969 by bartender Walter Chell in Calgary to celebrate the opening of an Italian restaurant. Canadians drink over 400 million Caesars per year — it's the country's unofficial national cocktail.",
      fr: "Le Caesar a été inventé en 1969 par le barman Walter Chell à Calgary pour célébrer l’ouverture d’un restaurant italien. Les Canadiens boivent plus de 400 millions de Caesars par an — c’est le cocktail national officieux du pays."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is Schwartz's Deli in Montreal famous for?",
      fr: "Pourquoi le restaurant Schwartz’s à Montréal est-il célèbre?"
    },
    options: {
      en: ["Poutine","Smoked meat sandwiches","Bagels","Sushi"],
      fr: ["Poutine","Sandwichs à la viande fumée","Bagels","Sushi"]
    },
    correctIndex: 1,
    funFact: {
      en: "Schwartz's, opened in 1928, is Montreal's oldest deli. Its smoked meat — brisket cured for 10 days and smoked for 8 hours — draws lineups around the block. Montreal smoked meat is distinct from New York pastrami.",
      fr: "Schwartz’s, ouvert en 1928, est le plus ancien restaurant de charcuterie de Montréal. Sa viande fumée — de la poitrine de bœuf saumurée pendant 10 jours et fumée pendant 8 heures — attire des files d’attente autour du pâté de maisons."
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What popular Canadian snack features ketchup-flavoured chips?",
      fr: "Quel populaire en-cas canadien présente des croustilles saveur ketchup?"
    },
    options: {
      en: ["All-dressed chips","Ketchup chips","Poutine chips","Maple chips"],
      fr: ["Croustilles tout garni","Croustilles au ketchup","Croustilles poutine","Croustilles à l’érable"]
    },
    correctIndex: 1,
    funFact: {
      en: "Ketchup-flavoured chips are a distinctly Canadian snack that bewilders American visitors. Along with all-dressed and dill pickle flavours, they form a uniquely Canadian chip holy trinity unavailable in most other countries.",
      fr: "Les croustilles saveur ketchup sont un en-cas typiquement canadien qui déroute les visiteurs américains. Avec les saveurs tout garni et cornichon à l’aneth, elles forment une sainte trinité de croustilles canadiennes introuvables dans la plupart des autres pays."
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'bannock' and which communities is it most associated with?",
      fr: "Qu’est-ce que le « bannock » et à quelles communautés est-il le plus associé?"
    },
    options: {
      en: ["A French pastry","A fried bread closely associated with Indigenous communities","A British Columbia wine","A type of jerky"],
      fr: ["Une pâtisserie française","Un pain frit étroitement associé aux communautés autochtones","Un vin de la Colombie-Britannique","Un type de viande séchée"]
    },
    correctIndex: 1,
    funFact: {
      en: "Bannock has complex origins — it was introduced to Indigenous peoples through colonization (Scottish fur traders brought the recipe), but it has been deeply adopted and adapted into Indigenous food traditions across Canada.",
      fr: "Le bannock a des origines complexes — il a été introduit auprès des peuples autochtones par la colonisation (les trappeurs écossais ont apporté la recette), mais il a été profondément adopté et adapté dans les traditions alimentaires autochtones à travers le Canada."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is BeaverTails?",
      fr: "Qu’est-ce que BeaverTails?"
    },
    options: {
      en: ["Actual beaver tails","A Canadian fried dough pastry shaped like a beaver tail","A brand of maple candy","A fishing lure"],
      fr: ["De vraies queues de castor","Une pâtisserie canadienne de pâte frite en forme de queue de castor","Une marque de bonbons à l’érable","Un leurre de pêche"]
    },
    correctIndex: 1,
    funFact: {
      en: "BeaverTails was founded in Ottawa in 1978 by the Hooker family using a century-old family recipe. Barack Obama famously visited the ByWard Market location in 2009 to try one during his first official visit to Canada.",
      fr: "BeaverTails a été fondé à Ottawa en 1978 par la famille Hooker en utilisant une recette familiale centenaire. Barack Obama a célèbrement visité l’emplacement du marché ByWard en 2009 pour en goûter un lors de sa première visite officielle au Canada."
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is a 'Jiggs dinner' and where is it a tradition?",
      fr: "Qu’est-ce qu’un « Jiggs dinner » et où est-ce une tradition?"
    },
    options: {
      en: ["A Quebec sugar shack meal","A Newfoundland boiled dinner with salt beef, cabbage, and root vegetables","A prairie barbecue","A BC seafood feast"],
      fr: ["Un repas de cabane à sucre québécoise","Un dîner bouilli terre-neuvien avec du bœuf salé, du chou et des légumes-racines","Un barbecue des Prairies","Un festin de fruits de mer de la C.-B."]
    },
    correctIndex: 1,
    funFact: {
      en: "Jiggs dinner is a Sunday tradition in Newfoundland and Labrador. Named after a comic strip character, it features salt beef boiled with cabbage, turnip, carrot, potato, and pease pudding. Every Newfoundland family has their own version.",
      fr: "Le Jiggs dinner est une tradition du dimanche à Terre-Neuve-et-Labrador. Nommé d’après un personnage de bande dessinée, il comprend du bœuf salé bouilli avec du chou, du navet, des carottes, des pommes de terre et du pouding aux pois. Chaque famille terre-neuvienne a sa propre version."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the Northwest Rebellion of 1885?",
      fr: "Qu’était la rébellion du Nord-Ouest de 1885?"
    },
    options: {
      en: ["A labour strike","An armed resistance led by Louis Riel and the Métis","A border dispute with the US","A tax revolt in Ontario"],
      fr: ["Une grève ouvrière","Une résistance armée menée par Louis Riel et les Métis","Un différend frontalier avec les É.-U.","Une révolte fiscale en Ontario"]
    },
    correctIndex: 1,
    funFact: {
      en: "Louis Riel led the Métis in resistance against the Canadian government's westward expansion. He was executed for treason but is now recognized as a Father of Confederation for Manitoba. His legacy remains deeply contested.",
      fr: "Louis Riel a mené les Métis dans leur résistance à l’expansion vers l’ouest du gouvernement canadien. Il a été exécuté pour trahison mais est maintenant reconnu comme un Père de la Confédération pour le Manitoba. Son héritage reste profondément contesté."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian archipelago lies within the Arctic Ocean?",
      fr: "Quel archipel canadien se trouve dans l’océan Arctique?"
    },
    options: {
      en: ["Thousand Islands","Arctic Archipelago (Canadian Arctic Islands)","Haida Gwaii","Magdalen Islands"],
      fr: ["Les Mille-Îles","L’archipel Arctique (îles de l’Arctique canadien)","Haida Gwaii","Îles de la Madeleine"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Canadian Arctic Archipelago contains over 36,000 islands, making it the world's largest archipelago by area. It includes Baffin Island, the largest island in Canada and the fifth largest in the world.",
      fr: "L’archipel arctique canadien contient plus de 36 000 îles, ce qui en fait le plus grand archipel du monde en superficie. Il comprend l’île de Baffin, la plus grande île du Canada et la cinquième plus grande au monde."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is Canadian Content (CanCon) and why does it matter?",
      fr: "Qu’est-ce que le contenu canadien (CanCon) et pourquoi est-il important?"
    },
    options: {
      en: ["A streaming service","CRTC regulations requiring Canadian content on radio and TV","A type of maple candy","A national newspaper"],
      fr: ["Un service de diffusion en continu","Des réglementations du CRTC exigeant du contenu canadien à la radio et à la télévision","Un type de bonbon à l’érable","Un journal national"]
    },
    correctIndex: 1,
    funFact: {
      en: "CanCon rules require radio stations to play at least 35% Canadian music. This policy helped launch the careers of artists like Bryan Adams, The Tragically Hip, and Arcade Fire by guaranteeing them airtime.",
      fr: "Les règles CanCon exigent des stations de radio qu’elles diffusent au moins 35 % de musique canadienne. Cette politique a aidé à lancer les carrières d’artistes comme Bryan Adams, The Tragically Hip et Arcade Fire en leur garantissant du temps d’antenne."
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Scotiabank Toronto Waterfront Marathon's significance in Canadian running?",
      fr: "Quelle est l’importance du Marathon Banque Scotia de Toronto dans la course à pied canadienne?"
    },
    options: {
      en: ["It's the oldest marathon in North America","It's Canada's largest marathon and qualifier for the Olympics","It's only for professional athletes","It takes place in winter"],
      fr: ["C’est le plus vieux marathon d’Amérique du Nord","C’est le plus grand marathon du Canada et qualificatif pour les Jeux olympiques","Il est réservé aux athlètes professionnels","Il se déroule en hiver"]
    },
    correctIndex: 1,
    funFact: {
      en: "The Toronto Waterfront Marathon attracts over 25,000 runners and has served as the Canadian Olympic marathon qualifier. It's known for its fast, flat course along Lake Ontario.",
      fr: "Le Marathon de Toronto attire plus de 25 000 coureurs et a servi de qualificatif olympique canadien pour le marathon. Il est connu pour son parcours rapide et plat le long du lac Ontario."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is CERN's connection to a Canadian invention?",
      fr: "Quel est le lien entre le CERN et une invention canadienne?"
    },
    options: {
      en: ["Canada built the collider","The World Wide Web was partly developed using Canadian networking technology","CERN is in Canada","Canada funded the Higgs boson discovery"],
      fr: ["Le Canada a construit le collisionneur","Le World Wide Web a été partiellement développé à l’aide de la technologie de réseautage canadienne","Le CERN est au Canada","Le Canada a financé la découverte du boson de Higgs"]
    },
    correctIndex: 1,
    funFact: {
      en: "While Tim Berners-Lee created the Web at CERN, Canadian contributions to networking and internet technology were significant. Canada was the second country (after the US) to connect to the ARPANET-era internet, in 1988.",
      fr: "Bien que Tim Berners-Lee ait créé le Web au CERN, les contributions canadiennes à la technologie de réseautage et d’Internet ont été significatives. Le Canada a été le deuxième pays (après les É.-U.) à se connecter à l’Internet ère ARPANET, en 1988."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the significance of the Haida Heritage Site on Haida Gwaii?",
      fr: "Quelle est l’importance du site patrimonial haïda sur Haida Gwaii?"
    },
    options: {
      en: ["It's a ski resort","SGang Gwaay is a UNESCO World Heritage Site with ancient Haida totem poles and longhouses","It's a gold mine","It's a military base"],
      fr: ["C’est une station de ski","SGang Gwaay est un site du patrimoine mondial de l’UNESCO avec d’anciens mâts totémiques et maisons longues haïdas","C’est une mine d’or","C’est une base militaire"]
    },
    correctIndex: 1,
    funFact: {
      en: "SGang Gwaay (Ninstints) on Haida Gwaii contains the largest collection of standing Haida totem poles in their original location. The site speaks to the rich artistic and cultural traditions of the Haida Nation, who have inhabited these islands for over 13,000 years.",
      fr: "SGang Gwaay (Ninstints) sur Haida Gwaii contient la plus grande collection de mâts totémiques haïdas debout à leur emplacement d’origine. Le site témoigne des riches traditions artistiques et culturelles de la Nation haïda, qui habite ces îles depuis plus de 13 000 ans."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What Canadian TV show features the fictional town of Dog River, Saskatchewan?",
      fr: "Quelle série télévisée canadienne met en scène la ville fictive de Dog River, en Saskatchewan?"
    },
    options: {
      en: ["Letterkenny","Corner Gas","Schitt's Creek","Trailer Park Boys"],
      fr: ["Letterkenny","Corner Gas","Schitt’s Creek","Trailer Park Boys"]
    },
    correctIndex: 1,
    funFact: {
      en: "Corner Gas ran from 2004–2009 and was one of the most-watched Canadian sitcoms ever, averaging over 1 million viewers per episode. It was revived as an animated series in 2018.",
      fr: "Corner Gas a été diffusé de 2004 à 2009 et a été l’une des séries comiques canadiennes les plus regardées, avec une moyenne de plus d’un million de téléspectateurs par épisode. Elle a été relancée en série animée en 2018."
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the 'Office québécois de la langue française' (OQLF)?",
      fr: "Qu’est-ce que l’Office québécois de la langue française (OQLF)?"
    },
    options: {
      en: ["A translation service","A government body that enforces French language laws in Quebec","A French school","A book publisher"],
      fr: ["Un service de traduction","Un organisme gouvernemental qui applique les lois linguistiques françaises au Québec","Une école française","Un éditeur de livres"]
    },
    correctIndex: 1,
    funFact: {
      en: "The OQLF enforces Bill 101 (Charter of the French Language), which makes French the official language of Quebec. It ensures businesses, signage, and workplaces operate primarily in French. It is sometimes nicknamed the 'language police'.",
      fr: "L’OQLF applique la Loi 101 (Charte de la langue française), qui fait du français la langue officielle du Québec. Il veille à ce que les entreprises, l’affichage et les lieux de travail fonctionnent principalement en français. On le surnomme parfois la « police de la langue »."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Great Lake is entirely within Canada?",
      fr: "Quel Grand Lac se trouve entièrement au Canada?"
    },
    options: {
      en: ["Lake Superior","Lake Ontario","None — all five are shared with the US","Lake Huron"],
      fr: ["Lac Supérieur","Lac Ontario","Aucun — les cinq sont partagés avec les É.-U.","Lac Huron"]
    },
    correctIndex: 2,
    funFact: {
      en: "All five Great Lakes (Superior, Michigan, Huron, Erie, Ontario) straddle the Canada-US border except Lake Michigan, which is entirely in the US. No Great Lake is entirely in Canada, though Canada has Georgian Bay, a massive lake-like extension of Lake Huron.",
      fr: "Les cinq Grands Lacs (Supérieur, Michigan, Huron, Érié, Ontario) chevauchent la frontière canado-américaine, sauf le lac Michigan, qui est entièrement aux É.-U. Aucun Grand Lac n’est entièrement au Canada, bien que le Canada ait la baie Georgienne."
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the 'sugar shack' (cabane à sucre) tradition?",
      fr: "Qu’est-ce que la tradition de la cabane à sucre?"
    },
    options: {
      en: ["A candy factory tour","A spring tradition of visiting maple syrup farms for a traditional meal","A winter carnival","A bakery chain"],
      fr: ["Une visite de confiserie","Une tradition printanière de visiter des érablières pour un repas traditionnel","Un carnaval d’hiver","Une chaîne de boulangeries"]
    },
    correctIndex: 1,
    funFact: {
      en: "Every spring, Quebecers flock to sugar shacks for a feast of pea soup, tourtière, baked beans, ham, oreilles de crisse (fried pork rinds), and tire sur la neige (hot maple taffy poured on snow). It's a beloved rite of spring.",
      fr: "Chaque printemps, les Québécois affluent aux cabanes à sucre pour un festin de soupe aux pois, tourtière, fèves au lard, jambon, oreilles de crisse et tire sur la neige. C’est un rite printanier bien-aimé."
    }
  },

  // ═══════════════════════════════════════════
  // EXPANSION BATCH — HISTORY (46 new)
  // ═══════════════════════════════════════════
  {
    category: "history",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the name of the national holiday celebrated on November 11th in Canada?",
      fr: "Quel est le nom de la fête nationale célébrée le 11 novembre au Canada?"
    },
    options: {
      en: ["Remembrance Day", "Canada Day", "Victoria Day", "Thanksgiving"],
      fr: ["Jour du Souvenir", "Fête du Canada", "Fête de la Reine", "Action de grâce"]
    },
    correctIndex: 0,
    funFact: {
      en: "Remembrance Day honours Canadian soldiers who died in military service. The poppy became the symbol after the poem 'In Flanders Fields' by Canadian Lt. Col. John McCrae.",
      fr: "Le jour du Souvenir honore les soldats canadiens morts au service militaire. Le coquelicot est devenu le symbole après le poème « Au champ d'honneur » du lieutenant-colonel canadien John McCrae."
    }
  },
  {
    category: "history",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which explorer is credited with being the first European to reach the east coast of Canada in 1497?",
      fr: "Quel explorateur est reconnu comme le premier Européen à atteindre la côte est du Canada en 1497?"
    },
    options: {
      en: ["John Cabot", "Jacques Cartier", "Samuel de Champlain", "Christopher Columbus"],
      fr: ["Jean Cabot", "Jacques Cartier", "Samuel de Champlain", "Christophe Colomb"]
    },
    correctIndex: 0,
    funFact: {
      en: "John Cabot (Giovanni Caboto), an Italian navigator sailing for England, landed in what is now Newfoundland. His voyage established English claims to North America.",
      fr: "Jean Cabot (Giovanni Caboto), un navigateur italien naviguant pour l'Angleterre, a atterri dans ce qui est maintenant Terre-Neuve. Son voyage a établi les revendications anglaises sur l'Amérique du Nord."
    }
  },
  {
    category: "history",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "The Trans-Canada Highway, the longest national highway in the world, was completed in 1962.",
      fr: "La route Transcanadienne, la plus longue autoroute nationale au monde, a été achevée en 1962."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "The Trans-Canada Highway stretches 7,821 km from St. John's, Newfoundland to Victoria, BC. Construction took 12 years and cost over $1 billion.",
      fr: "La route Transcanadienne s'étend sur 7 821 km de St. John's, Terre-Neuve à Victoria, C.-B. La construction a pris 12 ans et coûté plus d'un milliard de dollars."
    }
  },
  {
    category: "history",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian Prime Minister introduced the Official Languages Act in 1969?",
      fr: "Quel premier ministre canadien a introduit la Loi sur les langues officielles en 1969?"
    },
    options: {
      en: ["Pierre Elliott Trudeau", "Lester B. Pearson", "John Diefenbaker", "Brian Mulroney"],
      fr: ["Pierre Elliott Trudeau", "Lester B. Pearson", "John Diefenbaker", "Brian Mulroney"]
    },
    correctIndex: 0,
    funFact: {
      en: "Trudeau championed bilingualism as a core Canadian value. The Act made French and English equal in all federal institutions across Canada.",
      fr: "Trudeau a défendu le bilinguisme comme valeur canadienne fondamentale. La Loi a rendu le français et l'anglais égaux dans toutes les institutions fédérales du Canada."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What was the Quiet Revolution (Révolution tranquille) in Quebec?",
      fr: "Qu'était la Révolution tranquille au Québec?"
    },
    options: {
      en: ["A period of rapid social and political change in the 1960s", "A military coup in 1837", "A religious movement in the 1920s", "An economic boom in the 1980s"],
      fr: ["Une période de changements sociaux et politiques rapides dans les années 1960", "Un coup d'État militaire en 1837", "Un mouvement religieux dans les années 1920", "Un boom économique dans les années 1980"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Quiet Revolution (1960–1970) transformed Quebec from a conservative, Church-dominated society into a modern, secular welfare state. It sparked Quebec nationalism and the sovereignty movement.",
      fr: "La Révolution tranquille (1960-1970) a transformé le Québec d'une société conservatrice dominée par l'Église en un État-providence moderne et laïque. Elle a déclenché le nationalisme québécois et le mouvement souverainiste."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "In what year did women in Canada first gain the federal right to vote?",
      fr: "En quelle année les femmes au Canada ont-elles obtenu le droit de vote fédéral pour la première fois?"
    },
    options: {
      en: ["1918", "1900", "1929", "1945"],
      fr: ["1918", "1900", "1929", "1945"]
    },
    correctIndex: 0,
    funFact: {
      en: "Most women got the federal vote in 1918, but Indigenous women and women of Asian descent had to wait until 1960 and the 1940s respectively. Quebec didn't grant provincial women's suffrage until 1940.",
      fr: "La plupart des femmes ont obtenu le vote fédéral en 1918, mais les femmes autochtones et les femmes d'origine asiatique ont dû attendre respectivement 1960 et les années 1940. Le Québec n'a accordé le suffrage provincial aux femmes qu'en 1940."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What was the significance of the 'Persons Case' of 1929?",
      fr: "Quelle était la signification de l'« Affaire des personnes » de 1929?"
    },
    options: {
      en: ["It established that women were 'persons' eligible for Senate appointment", "It granted citizenship to immigrants", "It abolished slavery", "It created the Supreme Court"],
      fr: ["Elle a établi que les femmes étaient des « personnes » éligibles au Sénat", "Elle a accordé la citoyenneté aux immigrants", "Elle a aboli l'esclavage", "Elle a créé la Cour suprême"]
    },
    correctIndex: 0,
    funFact: {
      en: "The 'Famous Five' — Emily Murphy, Nellie McClung, Irene Parlby, Louise McKinney, and Henrietta Edwards — fought the case all the way to the British Privy Council. They are honoured on the Canadian $50 bill.",
      fr: "Les « Cinq célèbres » — Emily Murphy, Nellie McClung, Irene Parlby, Louise McKinney et Henrietta Edwards — ont porté l'affaire jusqu'au Conseil privé britannique. Elles sont honorées sur le billet de 50 $ canadien."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "The Halifax Explosion of 1917 was the largest man-made explosion before the atomic bomb.",
      fr: "L'explosion d'Halifax de 1917 a été la plus grande explosion causée par l'homme avant la bombe atomique."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "A French cargo ship loaded with wartime explosives collided with a Norwegian vessel in Halifax Harbour. The blast killed nearly 2,000 people and destroyed much of the city. Nova Scotia sends a Christmas tree to Boston each year in gratitude for their immediate aid.",
      fr: "Un cargo français chargé d'explosifs de guerre est entré en collision avec un navire norvégien dans le port d'Halifax. L'explosion a tué près de 2 000 personnes. La Nouvelle-Écosse envoie un sapin de Noël à Boston chaque année en gratitude pour leur aide immédiate."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What territory was purchased by Canada from the Hudson's Bay Company in 1870?",
      fr: "Quel territoire a été acheté par le Canada à la Compagnie de la Baie d'Hudson en 1870?"
    },
    options: {
      en: ["Rupert's Land", "British Columbia", "Alaska", "Newfoundland"],
      fr: ["Terre de Rupert", "Colombie-Britannique", "Alaska", "Terre-Neuve"]
    },
    correctIndex: 0,
    funFact: {
      en: "Rupert's Land was a vast territory covering much of present-day Manitoba, Saskatchewan, Alberta, and parts of Ontario and Quebec. Canada paid £300,000 for it.",
      fr: "La Terre de Rupert était un vaste territoire couvrant une grande partie du Manitoba, de la Saskatchewan, de l'Alberta et de parties de l'Ontario et du Québec actuels. Le Canada a payé 300 000 £."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Who led the Red River Resistance of 1869-70 and the North-West Rebellion of 1885?",
      fr: "Qui a mené la résistance de la rivière Rouge de 1869-70 et la rébellion du Nord-Ouest de 1885?"
    },
    options: {
      en: ["Louis Riel", "Gabriel Dumont", "Big Bear", "Poundmaker"],
      fr: ["Louis Riel", "Gabriel Dumont", "Gros Ours", "Poundmaker"]
    },
    correctIndex: 0,
    funFact: {
      en: "Louis Riel, a Métis leader, was executed for treason in 1885. He's now regarded as a Father of Confederation for Manitoba and a champion of Métis rights. In 1992, Parliament recognized him as a founder of Manitoba.",
      fr: "Louis Riel, un chef métis, a été exécuté pour trahison en 1885. Il est maintenant considéré comme un Père de la Confédération pour le Manitoba et un champion des droits métis. En 1992, le Parlement l'a reconnu comme fondateur du Manitoba."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was Canada's role on D-Day, June 6, 1944?",
      fr: "Quel était le rôle du Canada le jour J, le 6 juin 1944?"
    },
    options: {
      en: ["Canadian forces stormed Juno Beach in Normandy", "Canada provided naval support only", "Canada joined a week later", "Canada was not involved in D-Day"],
      fr: ["Les forces canadiennes ont pris d'assaut la plage Juno en Normandie", "Le Canada n'a fourni qu'un soutien naval", "Le Canada s'est joint une semaine plus tard", "Le Canada n'a pas participé au jour J"]
    },
    correctIndex: 0,
    funFact: {
      en: "14,000 Canadians landed at Juno Beach on D-Day. Despite fierce resistance, they advanced farther inland than any other Allied force that day. 359 Canadians were killed.",
      fr: "14 000 Canadiens ont débarqué à la plage Juno le jour J. Malgré une résistance féroce, ils ont avancé plus loin à l'intérieur des terres que toute autre force alliée ce jour-là. 359 Canadiens ont été tués."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian PM won the Nobel Peace Prize for his role in creating the UN Emergency Force during the Suez Crisis?",
      fr: "Quel PM canadien a remporté le prix Nobel de la paix pour son rôle dans la création de la Force d'urgence de l'ONU pendant la crise de Suez?"
    },
    options: {
      en: ["Lester B. Pearson", "Pierre Trudeau", "Louis St. Laurent", "John Diefenbaker"],
      fr: ["Lester B. Pearson", "Pierre Trudeau", "Louis St. Laurent", "John Diefenbaker"]
    },
    correctIndex: 0,
    funFact: {
      en: "Pearson's invention of UN peacekeeping in 1957 established Canada's international reputation as a peacekeeper. He won the Nobel Prize that same year and later became PM in 1963.",
      fr: "L'invention du maintien de la paix de l'ONU par Pearson en 1957 a établi la réputation internationale du Canada comme gardien de la paix. Il a remporté le prix Nobel la même année et est devenu PM en 1963."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What happened in the 1995 Quebec sovereignty referendum?",
      fr: "Que s'est-il passé lors du référendum de 1995 sur la souveraineté du Québec?"
    },
    options: {
      en: ["The 'No' side won by a razor-thin margin of 50.58% to 49.42%", "Quebec voted overwhelmingly to stay", "Quebec declared independence", "The referendum was cancelled"],
      fr: ["Le camp du « Non » a gagné par une marge infime de 50,58 % contre 49,42 %", "Le Québec a voté massivement pour rester", "Le Québec a déclaré son indépendance", "Le référendum a été annulé"]
    },
    correctIndex: 0,
    funFact: {
      en: "Only 54,288 votes separated the two sides out of nearly 5 million cast. It remains the closest a Canadian province has come to separating from Canada.",
      fr: "Seulement 54 288 votes séparaient les deux camps sur près de 5 millions de votes exprimés. C'est le plus près qu'une province canadienne soit venue de se séparer du Canada."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the Winnipeg General Strike of 1919?",
      fr: "Qu'était la grève générale de Winnipeg de 1919?"
    },
    options: {
      en: ["A massive six-week labour strike involving 30,000 workers", "A student protest at the University of Manitoba", "A farmer's revolt against grain prices", "A police walkout"],
      fr: ["Une grève massive de six semaines impliquant 30 000 travailleurs", "Une manifestation étudiante à l'Université du Manitoba", "Une révolte des agriculteurs contre les prix du grain", "Un débrayage de la police"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Winnipeg General Strike was one of the most influential strikes in Canadian history. It was violently suppressed on 'Bloody Saturday' but led to major labour reforms across Canada.",
      fr: "La grève générale de Winnipeg a été l'une des grèves les plus influentes de l'histoire du Canada. Elle a été violemment réprimée le « samedi sanglant » mais a conduit à d'importantes réformes du travail à travers le Canada."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "tf",
    question: {
      en: "Canada declared war on Germany independently in World War II, one week after Britain did.",
      fr: "Le Canada a déclaré la guerre à l'Allemagne de manière indépendante pendant la Seconde Guerre mondiale, une semaine après la Grande-Bretagne."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Canada declared war on September 10, 1939 — a week after Britain on September 3. This delay was deliberate, to assert Canada's sovereignty and independent decision-making from Britain.",
      fr: "Le Canada a déclaré la guerre le 10 septembre 1939 — une semaine après la Grande-Bretagne le 3 septembre. Ce délai était délibéré, pour affirmer la souveraineté du Canada et sa prise de décision indépendante de la Grande-Bretagne."
    }
  },
  {
    category: "history",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which city hosted the 2010 Winter Olympics?",
      fr: "Quelle ville a accueilli les Jeux olympiques d'hiver de 2010?"
    },
    options: {
      en: ["Vancouver", "Toronto", "Calgary", "Montreal"],
      fr: ["Vancouver", "Toronto", "Calgary", "Montréal"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canada topped the gold medal count at the 2010 Vancouver Olympics with 14 golds — including Sidney Crosby's iconic overtime gold-medal hockey goal against the USA.",
      fr: "Le Canada a dominé le compte des médailles d'or aux Jeux olympiques de Vancouver 2010 avec 14 médailles d'or — y compris le but en prolongation emblématique de Sidney Crosby pour la médaille d'or en hockey contre les États-Unis."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Who was Terry Fox and what did he attempt in 1980?",
      fr: "Qui était Terry Fox et qu'a-t-il tenté en 1980?"
    },
    options: {
      en: ["A cancer survivor who ran across Canada on one leg to raise money for cancer research", "A swimmer who crossed the English Channel", "A mountaineer who climbed Everest", "A cyclist who toured all provinces"],
      fr: ["Un survivant du cancer qui a couru à travers le Canada sur une jambe pour amasser des fonds pour la recherche sur le cancer", "Un nageur qui a traversé la Manche", "Un alpiniste qui a gravi l'Everest", "Un cycliste qui a fait le tour de toutes les provinces"]
    },
    correctIndex: 0,
    funFact: {
      en: "Terry Fox ran 5,373 km in 143 days before cancer forced him to stop near Thunder Bay, Ontario. His Marathon of Hope has raised over $850 million for cancer research worldwide.",
      fr: "Terry Fox a couru 5 373 km en 143 jours avant que le cancer ne le force à s'arrêter près de Thunder Bay, Ontario. Son Marathon de l'espoir a amassé plus de 850 millions de dollars pour la recherche sur le cancer dans le monde."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the Statute of Westminster (1931) significant for?",
      fr: "En quoi le Statut de Westminster (1931) était-il important?"
    },
    options: {
      en: ["It granted Canada full legislative independence from Britain", "It created the Canadian Senate", "It established the RCMP", "It defined provincial boundaries"],
      fr: ["Il a accordé au Canada une indépendance législative complète de la Grande-Bretagne", "Il a créé le Sénat canadien", "Il a établi la GRC", "Il a défini les frontières provinciales"]
    },
    correctIndex: 0,
    funFact: {
      en: "Before the Statute of Westminster, British Parliament could still legislate for Canada. After 1931, Canada was effectively independent, though the Constitution wasn't patriated until 1982.",
      fr: "Avant le Statut de Westminster, le Parlement britannique pouvait encore légiférer pour le Canada. Après 1931, le Canada était effectivement indépendant, bien que la Constitution n'ait été rapatriée qu'en 1982."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What was the 'Komagata Maru' incident of 1914?",
      fr: "Qu'était l'incident du « Komagata Maru » de 1914?"
    },
    options: {
      en: ["A ship carrying Indian immigrants was turned away from Vancouver harbour", "A fishing boat sank off the coast of BC", "A military ship was attacked", "A gold rush expedition failed"],
      fr: ["Un navire transportant des immigrants indiens a été refoulé du port de Vancouver", "Un bateau de pêche a coulé au large de la C.-B.", "Un navire militaire a été attaqué", "Une expédition de ruée vers l'or a échoué"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Komagata Maru carried 376 passengers from British India. They were denied entry under racist immigration laws and forced to return. PM Justin Trudeau formally apologized in Parliament in 2016.",
      fr: "Le Komagata Maru transportait 376 passagers de l'Inde britannique. On leur a refusé l'entrée en vertu de lois d'immigration racistes et ils ont été forcés de retourner. Le PM Justin Trudeau s'est officiellement excusé au Parlement en 2016."
    }
  },
  {
    category: "history",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What significant event happened at Vimy Ridge in April 1917?",
      fr: "Quel événement important s'est produit à la crête de Vimy en avril 1917?"
    },
    options: {
      en: ["All four Canadian divisions fought together for the first time and won", "Canada signed a peace treaty", "The war ended", "Canada lost a major battle"],
      fr: ["Les quatre divisions canadiennes ont combattu ensemble pour la première fois et ont gagné", "Le Canada a signé un traité de paix", "La guerre a pris fin", "Le Canada a perdu une bataille majeure"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Vimy Memorial in France was designed by Canadian sculptor Walter Allward and took 11 years to build. It's considered one of the most impressive war memorials in the world.",
      fr: "Le Mémorial de Vimy en France a été conçu par le sculpteur canadien Walter Allward et a pris 11 ans à construire. Il est considéré comme l'un des mémoriaux de guerre les plus impressionnants au monde."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the 'National Energy Program' introduced by Pierre Trudeau in 1980?",
      fr: "Qu'était le « Programme énergétique national » introduit par Pierre Trudeau en 1980?"
    },
    options: {
      en: ["A federal policy to control oil prices and increase Canadian ownership of the energy sector", "A plan to build nuclear power plants", "A program to subsidize solar energy", "A policy to export oil to Europe"],
      fr: ["Une politique fédérale pour contrôler les prix du pétrole et augmenter la propriété canadienne du secteur énergétique", "Un plan pour construire des centrales nucléaires", "Un programme de subvention de l'énergie solaire", "Une politique d'exportation de pétrole vers l'Europe"]
    },
    correctIndex: 0,
    funFact: {
      en: "The NEP was deeply unpopular in Alberta, fuelling western alienation that persists to this day. It was seen as Ottawa taking Alberta's oil wealth and remains a politically charged topic.",
      fr: "Le PEN était profondément impopulaire en Alberta, alimentant l'aliénation de l'Ouest qui persiste encore aujourd'hui. Il était perçu comme Ottawa prenant la richesse pétrolière de l'Alberta et reste un sujet politiquement chargé."
    }
  },

  // ═══════════════════════════════════════════
  // EXPANSION — GEOGRAPHY (42 new)
  // ═══════════════════════════════════════════
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the largest city in Canada by population?",
      fr: "Quelle est la plus grande ville du Canada par population?"
    },
    options: {
      en: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
      fr: ["Toronto", "Montréal", "Vancouver", "Ottawa"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Greater Toronto Area has over 6 million people — nearly 1 in 6 Canadians live there. Toronto is the most multicultural city in the world, with over 200 ethnic groups.",
      fr: "La région du Grand Toronto compte plus de 6 millions d'habitants — près d'un Canadien sur 6 y vit. Toronto est la ville la plus multiculturelle au monde, avec plus de 200 groupes ethniques."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which province is known as 'Canada's Ocean Playground'?",
      fr: "Quelle province est connue comme le « terrain de jeu océanique du Canada »?"
    },
    options: {
      en: ["Nova Scotia", "New Brunswick", "Prince Edward Island", "Newfoundland"],
      fr: ["Nouvelle-Écosse", "Nouveau-Brunswick", "Île-du-Prince-Édouard", "Terre-Neuve"]
    },
    correctIndex: 0,
    funFact: {
      en: "Nova Scotia is almost completely surrounded by water and has over 7,400 km of coastline. The province's name means 'New Scotland' in Latin.",
      fr: "La Nouvelle-Écosse est presque entièrement entourée d'eau et possède plus de 7 400 km de côtes. Le nom de la province signifie « Nouvelle-Écosse » en latin."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "Canada is the second-largest country in the world by total area.",
      fr: "Le Canada est le deuxième plus grand pays au monde par superficie totale."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Canada covers 9.98 million km², second only to Russia. It spans six time zones and stretches from the Atlantic to the Pacific to the Arctic.",
      fr: "Le Canada couvre 9,98 millions de km², deuxième seulement après la Russie. Il s'étend sur six fuseaux horaires et va de l'Atlantique au Pacifique en passant par l'Arctique."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Great Lake is entirely within Canada?",
      fr: "Quel Grand Lac est entièrement au Canada?"
    },
    options: {
      en: ["None — all five Great Lakes are shared with the US", "Lake Huron", "Lake Ontario", "Lake Superior"],
      fr: ["Aucun — les cinq Grands Lacs sont partagés avec les États-Unis", "Lac Huron", "Lac Ontario", "Lac Supérieur"]
    },
    correctIndex: 0,
    funFact: {
      en: "All five Great Lakes (Superior, Michigan, Huron, Erie, Ontario) are shared between Canada and the US, except Lake Michigan which is entirely in the US. However, Lake Winnipeg, entirely in Canada, is larger than Lake Ontario!",
      fr: "Les cinq Grands Lacs (Supérieur, Michigan, Huron, Érié, Ontario) sont partagés entre le Canada et les États-Unis, sauf le lac Michigan qui est entièrement aux États-Unis. Cependant, le lac Winnipeg, entièrement au Canada, est plus grand que le lac Ontario!"
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the smallest province in Canada?",
      fr: "Quelle est la plus petite province du Canada?"
    },
    options: {
      en: ["Prince Edward Island", "Nova Scotia", "New Brunswick", "Newfoundland"],
      fr: ["Île-du-Prince-Édouard", "Nouvelle-Écosse", "Nouveau-Brunswick", "Terre-Neuve"]
    },
    correctIndex: 0,
    funFact: {
      en: "PEI is just 5,660 km² — you could fit it inside Lake Ontario! Despite its size, it's famous for red sand beaches, Anne of Green Gables, and the best potatoes in Canada.",
      fr: "L'Î.-P.-É. ne fait que 5 660 km² — on pourrait la mettre dans le lac Ontario! Malgré sa taille, elle est célèbre pour ses plages de sable rouge, Anne aux pignons verts et les meilleures pommes de terre au Canada."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the name of the famous waterfall on the border between Ontario and New York State?",
      fr: "Quel est le nom de la célèbre chute d'eau à la frontière entre l'Ontario et l'État de New York?"
    },
    options: {
      en: ["Niagara Falls", "Montmorency Falls", "Helmcken Falls", "Kakabeka Falls"],
      fr: ["Chutes du Niagara", "Chute Montmorency", "Chutes Helmcken", "Chutes Kakabeka"]
    },
    correctIndex: 0,
    funFact: {
      en: "Niagara Falls consists of three waterfalls: Horseshoe Falls (mostly in Canada), American Falls, and Bridal Veil Falls. About 3,160 tonnes of water flow over every second!",
      fr: "Les chutes du Niagara se composent de trois cascades : les chutes Horseshoe (principalement au Canada), les chutes américaines et les chutes du Voile de la Mariée. Environ 3 160 tonnes d'eau s'écoulent chaque seconde!"
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "The Canadian Shield is primarily composed of what type of rock?",
      fr: "Le Bouclier canadien est principalement composé de quel type de roche?"
    },
    options: {
      en: ["Precambrian igneous and metamorphic rock", "Sandstone", "Limestone", "Volcanic basalt"],
      fr: ["Roche ignée et métamorphique précambrienne", "Grès", "Calcaire", "Basalte volcanique"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Canadian Shield is one of the oldest geological formations on Earth, containing rocks over 4 billion years old. It covers about half of Canada's land area and is rich in minerals.",
      fr: "Le Bouclier canadien est l'une des formations géologiques les plus anciennes de la Terre, contenant des roches de plus de 4 milliards d'années. Il couvre environ la moitié de la superficie terrestre du Canada et est riche en minéraux."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian city is nicknamed 'Winterpeg'?",
      fr: "Quelle ville canadienne est surnommée « Winterpeg »?"
    },
    options: {
      en: ["Winnipeg", "Edmonton", "Saskatoon", "Thunder Bay"],
      fr: ["Winnipeg", "Edmonton", "Saskatoon", "Thunder Bay"]
    },
    correctIndex: 0,
    funFact: {
      en: "Winnipeg has average January temperatures of -16.4°C and can drop to -40°C with wind chill. Despite this, it's also one of the sunniest cities in Canada!",
      fr: "Winnipeg a des températures moyennes de janvier de -16,4 °C et peut descendre à -40 °C avec le refroidissement éolien. Malgré cela, c'est aussi l'une des villes les plus ensoleillées du Canada!"
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "Alert, Nunavut is the northernmost permanently inhabited place in the world.",
      fr: "Alert, au Nunavut, est l'endroit habité en permanence le plus au nord du monde."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Alert is only 817 km from the North Pole! It's a Canadian Forces Station with a small military and research population. During winter, it has 24 hours of darkness per day.",
      fr: "Alert n'est qu'à 817 km du pôle Nord! C'est une station des Forces canadiennes avec une petite population militaire et de recherche. En hiver, il y a 24 heures d'obscurité par jour."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which province has the most freshwater of any province or state in North America?",
      fr: "Quelle province a le plus d'eau douce de toutes les provinces ou États d'Amérique du Nord?"
    },
    options: {
      en: ["Ontario", "Quebec", "Manitoba", "British Columbia"],
      fr: ["Ontario", "Québec", "Manitoba", "Colombie-Britannique"]
    },
    correctIndex: 0,
    funFact: {
      en: "Ontario has over 250,000 lakes, containing about one-fifth of the world's fresh surface water. The name 'Ontario' comes from the Iroquois word for 'beautiful lake.'",
      fr: "L'Ontario compte plus de 250 000 lacs, contenant environ un cinquième de l'eau douce de surface du monde. Le nom « Ontario » vient du mot iroquois signifiant « beau lac »."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What unique geographical feature does Magnetic Hill in Moncton, New Brunswick have?",
      fr: "Quelle caractéristique géographique unique possède la Côte magnétique à Moncton, Nouveau-Brunswick?"
    },
    options: {
      en: ["An optical illusion that makes cars appear to roll uphill", "A mountain that changes colour", "A lake that freezes from the bottom up", "A cave system with magnetic minerals"],
      fr: ["Une illusion d'optique qui fait paraître les voitures rouler vers le haut", "Une montagne qui change de couleur", "Un lac qui gèle par le fond", "Un réseau de grottes avec des minéraux magnétiques"]
    },
    correctIndex: 0,
    funFact: {
      en: "Magnetic Hill is actually a gravity hill — an optical illusion caused by the surrounding landscape. Cars placed in neutral appear to roll uphill! It's been a tourist attraction since the 1930s.",
      fr: "La Côte magnétique est en fait une colline de gravité — une illusion d'optique causée par le paysage environnant. Les voitures au point mort semblent rouler vers le haut! C'est une attraction touristique depuis les années 1930."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is unique about the Reversing Falls in Saint John, New Brunswick?",
      fr: "Qu'est-ce qui est unique aux chutes réversibles de Saint John, Nouveau-Brunswick?"
    },
    options: {
      en: ["The Bay of Fundy tides cause the river to flow backwards twice daily", "They freeze upwards in winter", "They change colour with the seasons", "They only flow during storms"],
      fr: ["Les marées de la baie de Fundy font couler la rivière à l'envers deux fois par jour", "Elles gèlent vers le haut en hiver", "Elles changent de couleur avec les saisons", "Elles ne coulent que pendant les tempêtes"]
    },
    correctIndex: 0,
    funFact: {
      en: "At low tide, the Saint John River flows into the Bay of Fundy. At high tide, the massive Fundy tides push the river backwards, creating rapids that flow upstream!",
      fr: "À marée basse, le fleuve Saint-Jean se jette dans la baie de Fundy. À marée haute, les marées massives de Fundy poussent la rivière en arrière, créant des rapides qui coulent en amont!"
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which mountain range runs through western Canada?",
      fr: "Quelle chaîne de montagnes traverse l'ouest du Canada?"
    },
    options: {
      en: ["Rocky Mountains", "Appalachian Mountains", "Laurentian Mountains", "Torngat Mountains"],
      fr: ["Montagnes Rocheuses", "Appalaches", "Laurentides", "Monts Torngat"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Canadian Rockies stretch over 1,500 km from BC to Alberta. Banff National Park, established in 1885 in the Rockies, was Canada's first national park and the world's third.",
      fr: "Les Rocheuses canadiennes s'étendent sur plus de 1 500 km de la C.-B. à l'Alberta. Le parc national Banff, établi en 1885 dans les Rocheuses, a été le premier parc national du Canada et le troisième au monde."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the capital of British Columbia?",
      fr: "Quelle est la capitale de la Colombie-Britannique?"
    },
    options: {
      en: ["Victoria", "Vancouver", "Kelowna", "Kamloops"],
      fr: ["Victoria", "Vancouver", "Kelowna", "Kamloops"]
    },
    correctIndex: 0,
    funFact: {
      en: "Victoria is on Vancouver Island, not the mainland — it's a common source of confusion. The city has the mildest climate in Canada and is known for its gardens and British colonial architecture.",
      fr: "Victoria est sur l'île de Vancouver, pas sur le continent — c'est une source de confusion courante. La ville a le climat le plus doux du Canada et est connue pour ses jardins et son architecture coloniale britannique."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian island is the 5th largest island in the world?",
      fr: "Quelle île canadienne est la 5e plus grande île au monde?"
    },
    options: {
      en: ["Baffin Island", "Vancouver Island", "Ellesmere Island", "Newfoundland"],
      fr: ["Île de Baffin", "Île de Vancouver", "Île d'Ellesmere", "Terre-Neuve"]
    },
    correctIndex: 0,
    funFact: {
      en: "Baffin Island in Nunavut is 507,451 km² — larger than Spain! It's home to about 13,000 people, mostly Inuit, and has stunning fjords, glaciers, and Arctic wildlife.",
      fr: "L'île de Baffin au Nunavut fait 507 451 km² — plus grande que l'Espagne! Elle abrite environ 13 000 personnes, principalement des Inuits, et possède de superbes fjords, glaciers et faune arctique."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "tf",
    question: {
      en: "Canada has the longest coastline of any country in the world.",
      fr: "Le Canada possède le plus long littoral de tous les pays au monde."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Canada's coastline is 243,042 km long — so long it would wrap around the Earth over six times! This includes the coasts of all its islands.",
      fr: "Le littoral du Canada mesure 243 042 km — si long qu'il ferait le tour de la Terre plus de six fois! Cela inclut les côtes de toutes ses îles."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Dinosaur Provincial Park, a UNESCO World Heritage Site, is located in which province?",
      fr: "Le parc provincial Dinosaur, un site du patrimoine mondial de l'UNESCO, est situé dans quelle province?"
    },
    options: {
      en: ["Alberta", "Saskatchewan", "British Columbia", "Manitoba"],
      fr: ["Alberta", "Saskatchewan", "Colombie-Britannique", "Manitoba"]
    },
    correctIndex: 0,
    funFact: {
      en: "Dinosaur Provincial Park in Alberta's badlands has yielded over 40 dinosaur species. The Royal Tyrrell Museum nearby holds one of the world's largest collections of dinosaur fossils.",
      fr: "Le parc provincial Dinosaur dans les badlands de l'Alberta a livré plus de 40 espèces de dinosaures. Le Musée Royal Tyrrell à proximité détient l'une des plus grandes collections de fossiles de dinosaures au monde."
    }
  },

  // ═══════════════════════════════════════════
  // EXPANSION — CULTURE (43 new)
  // ═══════════════════════════════════════════
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian artist is known for the song 'Hallelujah'?",
      fr: "Quel artiste canadien est connu pour la chanson « Hallelujah »?"
    },
    options: {
      en: ["Leonard Cohen", "Neil Young", "Joni Mitchell", "Gordon Lightfoot"],
      fr: ["Leonard Cohen", "Neil Young", "Joni Mitchell", "Gordon Lightfoot"]
    },
    correctIndex: 0,
    funFact: {
      en: "Leonard Cohen wrote 'Hallelujah' in 1984. He reportedly wrote over 80 draft verses. The song was initially rejected by his record label but went on to become one of the most covered songs ever.",
      fr: "Leonard Cohen a écrit « Hallelujah » en 1984. Il aurait écrit plus de 80 brouillons de couplets. La chanson a d'abord été rejetée par sa maison de disques mais est devenue l'une des chansons les plus reprises de tous les temps."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the RCMP, Canada's iconic national police force?",
      fr: "Qu'est-ce que la GRC, la force de police nationale emblématique du Canada?"
    },
    options: {
      en: ["Royal Canadian Mounted Police", "Royal Canadian Military Police", "Regional Canadian Municipal Police", "Royal Canada Militia Patrol"],
      fr: ["Gendarmerie royale du Canada", "Police militaire royale du Canada", "Police municipale régionale du Canada", "Patrouille de milice royale du Canada"]
    },
    correctIndex: 0,
    funFact: {
      en: "The 'Mounties' were established in 1873. Their iconic red serge uniform and Stetson hat are recognized worldwide. Their motto is 'Maintiens le droit' (Maintain the Right).",
      fr: "Les « Mounties » ont été créés en 1873. Leur uniforme emblématique de serge rouge et leur chapeau Stetson sont reconnus dans le monde entier. Leur devise est « Maintiens le droit »."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What colour is on the Canadian one-dollar coin, commonly called a 'loonie'?",
      fr: "De quelle couleur est la pièce d'un dollar canadien, communément appelée « huard »?"
    },
    options: {
      en: ["Gold (bronze plated)", "Silver", "Copper", "Two-toned"],
      fr: ["Or (plaqué bronze)", "Argent", "Cuivre", "Bicolore"]
    },
    correctIndex: 0,
    funFact: {
      en: "The loonie got its name from the common loon bird depicted on it. When it was introduced in 1987, the original design was supposed to be a voyageur canoe, but the master dies were lost — possibly stolen!",
      fr: "Le huard tire son nom du plongeon huard représenté dessus. Quand il a été introduit en 1987, le design original devait être un canot de voyageur, mais les matrices originales ont été perdues — possiblement volées!"
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "The Cirque du Soleil was founded in Quebec by former street performers.",
      fr: "Le Cirque du Soleil a été fondé au Québec par d'anciens artistes de rue."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Guy Laliberté and Gilles Ste-Croix founded Cirque du Soleil in Baie-Saint-Paul, Quebec in 1984. Laliberté was a fire-breather and stilt-walker. It grew into the largest theatrical producer in the world.",
      fr: "Guy Laliberté et Gilles Ste-Croix ont fondé le Cirque du Soleil à Baie-Saint-Paul, Québec en 1984. Laliberté était cracheur de feu et marcheur sur échasses. Il est devenu le plus grand producteur théâtral au monde."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian rapper started on the TV show 'Degrassi: The Next Generation'?",
      fr: "Quel rappeur canadien a commencé dans la série télévisée « Degrassi: La Nouvelle Génération »?"
    },
    options: {
      en: ["Drake", "The Weeknd", "Justin Bieber", "Tory Lanez"],
      fr: ["Drake", "The Weeknd", "Justin Bieber", "Tory Lanez"]
    },
    correctIndex: 0,
    funFact: {
      en: "Drake (Aubrey Graham) played wheelchair-bound Jimmy Brooks on Degrassi from 2001-2008. He went on to become one of the best-selling music artists of all time.",
      fr: "Drake (Aubrey Graham) jouait Jimmy Brooks en fauteuil roulant dans Degrassi de 2001 à 2008. Il est devenu l'un des artistes musicaux les plus vendus de tous les temps."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the significance of the inukshuk in Canadian culture?",
      fr: "Quelle est la signification de l'inukshuk dans la culture canadienne?"
    },
    options: {
      en: ["An Inuit stone landmark used as a directional marker and symbol of hope", "A type of igloo", "A traditional drum", "A hunting weapon"],
      fr: ["Un repère en pierre inuit utilisé comme marqueur directionnel et symbole d'espoir", "Un type d'igloo", "Un tambour traditionnel", "Une arme de chasse"]
    },
    correctIndex: 0,
    funFact: {
      en: "An inukshuk was chosen as the logo for the 2010 Vancouver Winter Olympics. The word means 'in the likeness of a human' in Inuktitut.",
      fr: "Un inukshuk a été choisi comme logo des Jeux olympiques d'hiver de Vancouver 2010. Le mot signifie « à la ressemblance d'un humain » en inuktitut."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian TV show won 9 Emmy Awards and is about a wealthy family who loses everything?",
      fr: "Quelle série télévisée canadienne a remporté 9 Emmy Awards et parle d'une famille riche qui perd tout?"
    },
    options: {
      en: ["Schitt's Creek", "Corner Gas", "Kim's Convenience", "Letterkenny"],
      fr: ["Schitt's Creek", "Corner Gas", "Kim's Convenience", "Letterkenny"]
    },
    correctIndex: 0,
    funFact: {
      en: "Schitt's Creek swept all seven major comedy categories at the 2020 Emmys — an unprecedented achievement. Created by Eugene and Dan Levy, it was filmed in Ontario.",
      fr: "Schitt's Creek a remporté les sept grandes catégories de comédie aux Emmys 2020 — un exploit sans précédent. Créée par Eugene et Dan Levy, elle a été filmée en Ontario."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "The Group of Seven were famous Canadian what?",
      fr: "Le Groupe des Sept étaient de célèbres quoi canadiens?"
    },
    options: {
      en: ["Landscape painters", "Politicians", "Hockey players", "Musicians"],
      fr: ["Peintres paysagistes", "Politiciens", "Joueurs de hockey", "Musiciens"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Group of Seven (1920-1933) created a distinctly Canadian art style depicting the country's wilderness. Members included Lawren Harris, A.Y. Jackson, and Tom Thomson (an associate who died before the group formed).",
      fr: "Le Groupe des Sept (1920-1933) a créé un style artistique distinctement canadien représentant la nature sauvage du pays. Les membres comprenaient Lawren Harris, A.Y. Jackson et Tom Thomson (un associé décédé avant la formation du groupe)."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "Ryan Reynolds, Ryan Gosling, and Keanu Reeves are all Canadian.",
      fr: "Ryan Reynolds, Ryan Gosling et Keanu Reeves sont tous canadiens."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Ryan Reynolds is from Vancouver, Ryan Gosling from London (Ontario), and Keanu Reeves grew up in Toronto. Canada has produced a remarkable number of Hollywood stars!",
      fr: "Ryan Reynolds est de Vancouver, Ryan Gosling de London (Ontario), et Keanu Reeves a grandi à Toronto. Le Canada a produit un nombre remarquable de stars hollywoodiennes!"
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What Canadian holiday is celebrated on the first Monday before May 25th?",
      fr: "Quelle fête canadienne est célébrée le premier lundi avant le 25 mai?"
    },
    options: {
      en: ["Victoria Day", "Labour Day", "Family Day", "Civic Holiday"],
      fr: ["Fête de la Reine", "Fête du Travail", "Jour de la famille", "Congé civique"]
    },
    correctIndex: 0,
    funFact: {
      en: "Victoria Day honours Queen Victoria's birthday and also serves as the unofficial start of summer in Canada. In Quebec, it's called the 'National Patriots' Day' (Journée nationale des patriotes).",
      fr: "La fête de la Reine honore l'anniversaire de la reine Victoria et marque aussi le début non officiel de l'été au Canada. Au Québec, on l'appelle la « Journée nationale des patriotes »."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian city hosts the largest Fringe theatre festival in North America?",
      fr: "Quelle ville canadienne accueille le plus grand festival de théâtre Fringe en Amérique du Nord?"
    },
    options: {
      en: ["Edmonton", "Toronto", "Vancouver", "Winnipeg"],
      fr: ["Edmonton", "Toronto", "Vancouver", "Winnipeg"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Edmonton International Fringe Festival attracts over 800,000 attendees annually. It's the oldest and largest fringe festival in North America, running since 1982.",
      fr: "Le Festival international Fringe d'Edmonton attire plus de 800 000 visiteurs par an. C'est le plus ancien et le plus grand festival fringe en Amérique du Nord, existant depuis 1982."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the 'Heritage Minute'?",
      fr: "Qu'est-ce qu'une « Minute du patrimoine »?"
    },
    options: {
      en: ["60-second TV vignettes about moments in Canadian history", "A parliamentary question period tradition", "A radio show about antiques", "A museum tour format"],
      fr: ["Des capsules télévisées de 60 secondes sur des moments de l'histoire du Canada", "Une tradition de la période de questions parlementaires", "Une émission de radio sur les antiquités", "Un format de visite de musée"]
    },
    correctIndex: 0,
    funFact: {
      en: "Heritage Minutes have been airing since 1991. The most famous one features 'I smell burnt toast!' — dramatizing Dr. Wilder Penfield's brain surgery breakthroughs at McGill University in Montreal.",
      fr: "Les Minutes du patrimoine sont diffusées depuis 1991. La plus célèbre présente « Je sens le pain brûlé! » — dramatisant les percées en chirurgie cérébrale du Dr Wilder Penfield à l'Université McGill à Montréal."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What animal appears on the Canadian quarter (25-cent coin)?",
      fr: "Quel animal apparaît sur le 25 cents canadien?"
    },
    options: {
      en: ["Caribou", "Beaver", "Moose", "Polar Bear"],
      fr: ["Caribou", "Castor", "Orignal", "Ours polaire"]
    },
    correctIndex: 0,
    funFact: {
      en: "The caribou design has been on the Canadian quarter since 1937. Other coins feature: penny (maple leaves), nickel (beaver), dime (Bluenose schooner), loonie (loon), toonie (polar bear).",
      fr: "Le design du caribou figure sur le 25 cents canadien depuis 1937. Les autres pièces représentent : sou (feuilles d'érable), 5 cents (castor), 10 cents (goélette Bluenose), huard (plongeon huard), 2 dollars (ours polaire)."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which singer-songwriter from Stratford, Ontario became a global pop sensation as a teenager?",
      fr: "Quel auteur-compositeur-interprète de Stratford, Ontario est devenu une sensation pop mondiale à l'adolescence?"
    },
    options: {
      en: ["Justin Bieber", "Shawn Mendes", "The Weeknd", "Michael Bublé"],
      fr: ["Justin Bieber", "Shawn Mendes", "The Weeknd", "Michael Bublé"]
    },
    correctIndex: 0,
    funFact: {
      en: "Justin Bieber was discovered on YouTube at age 13. Stratford, Ontario (pop. ~33,000) is also famous for its Shakespeare Festival — quite a contrast to pop stardom!",
      fr: "Justin Bieber a été découvert sur YouTube à 13 ans. Stratford, Ontario (pop. ~33 000) est aussi célèbre pour son Festival Shakespeare — un contraste assez marqué avec la célébrité pop!"
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is a 'toque' in Canadian culture?",
      fr: "Qu'est-ce qu'une « tuque » dans la culture canadienne?"
    },
    options: {
      en: ["A knitted winter hat (beanie)", "A type of snowshoe", "A card game", "A breakfast dish"],
      fr: ["Un bonnet d'hiver tricoté", "Un type de raquette", "Un jeu de cartes", "Un plat de petit-déjeuner"]
    },
    correctIndex: 0,
    funFact: {
      en: "The word 'toque' (or 'tuque') is distinctly Canadian — Americans say 'beanie.' It comes from the French word 'toque.' It's such a Canadian icon that Bob and Doug McKenzie made it famous with SCTV.",
      fr: "Le mot « tuque » est distinctement canadien — les Américains disent « beanie ». C'est un tel symbole canadien que Bob et Doug McKenzie l'ont rendu célèbre avec SCTV."
    }
  },

  // ═══════════════════════════════════════════
  // EXPANSION — LANGUAGE (47 new)
  // ═══════════════════════════════════════════
  {
    category: "language",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian province has French as its only official language?",
      fr: "Quelle province canadienne a le français comme seule langue officielle?"
    },
    options: {
      en: ["Quebec", "New Brunswick", "Ontario", "Manitoba"],
      fr: ["Québec", "Nouveau-Brunswick", "Ontario", "Manitoba"]
    },
    correctIndex: 0,
    funFact: {
      en: "Quebec passed the Charter of the French Language (Bill 101) in 1977, making French the sole official language of the province. All commercial signage must be primarily in French.",
      fr: "Le Québec a adopté la Charte de la langue française (Loi 101) en 1977, faisant du français la seule langue officielle de la province. Tout affichage commercial doit être principalement en français."
    }
  },
  {
    category: "language",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What does 'tuque' or 'toque' refer to in Canadian English?",
      fr: "À quoi réfère le mot « tuque » en français canadien?"
    },
    options: {
      en: ["A warm knitted cap", "A type of boot", "A winter jacket", "A blanket"],
      fr: ["Un bonnet chaud tricoté", "Un type de botte", "Un manteau d'hiver", "Une couverture"]
    },
    correctIndex: 0,
    funFact: {
      en: "If you say 'beanie' in Canada, people will know what you mean — but the proper Canadian term is 'toque.' It's one of many Canadianisms that distinguish Canadian English.",
      fr: "Si vous dites « beanie » au Canada, les gens comprendront — mais le terme canadien propre est « tuque ». C'est l'un des nombreux canadianismes qui distinguent le français canadien."
    }
  },
  {
    category: "language",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "Canadians typically spell words like 'colour,' 'centre,' and 'defence' using British spelling rather than American spelling.",
      fr: "Les Canadiens utilisent typiquement l'orthographe britannique pour des mots comme « colour », « centre » et « defence » plutôt que l'orthographe américaine."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Canadian English is a unique blend of British and American influences. Canadians write 'colour' (British) but 'realize' (American), and say 'zed' (British) for the letter Z.",
      fr: "L'anglais canadien est un mélange unique d'influences britanniques et américaines. Les Canadiens écrivent « colour » (britannique) mais « realize » (américain), et disent « zed » (britannique) pour la lettre Z."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What does the Québécois expression 'c'est correct' most closely mean?",
      fr: "Que signifie le plus l'expression québécoise « c'est correct »?"
    },
    options: {
      en: ["It's fine / no problem", "You are correct", "That's the right answer", "I agree completely"],
      fr: ["C'est bon / pas de problème", "Vous avez raison", "C'est la bonne réponse", "Je suis entièrement d'accord"]
    },
    correctIndex: 0,
    funFact: {
      en: "'C'est correct' is one of the most common expressions in Québécois French. It's used like 'no worries' or 'it's all good' — much more casual than its literal translation suggests.",
      fr: "« C'est correct » est l'une des expressions les plus courantes en français québécois. Elle est utilisée comme « pas de souci » ou « c'est bon » — beaucoup plus décontractée que sa traduction littérale ne le suggère."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'joual' in the context of Quebec language?",
      fr: "Qu'est-ce que le « joual » dans le contexte de la langue au Québec?"
    },
    options: {
      en: ["A working-class dialect of Quebec French", "An Indigenous language", "A type of slang used by teenagers", "A formal French used in courts"],
      fr: ["Un dialecte ouvrier du français québécois", "Une langue autochtone", "Un type d'argot utilisé par les adolescents", "Un français formel utilisé dans les tribunaux"]
    },
    correctIndex: 0,
    funFact: {
      en: "Joual comes from the pronunciation of 'cheval' (horse) in working-class Montreal French. Michel Tremblay's play 'Les Belles-sœurs' (1968) famously used joual, sparking debate about Quebec identity.",
      fr: "Joual vient de la prononciation de « cheval » dans le français ouvrier de Montréal. La pièce « Les Belles-sœurs » (1968) de Michel Tremblay a célèbrement utilisé le joual, déclenchant un débat sur l'identité québécoise."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "In Canadian English, what is a 'washroom'?",
      fr: "En anglais canadien, qu'est-ce qu'un « washroom »?"
    },
    options: {
      en: ["A bathroom / restroom", "A laundry room", "A kitchen", "A mudroom"],
      fr: ["Une salle de bain / toilettes", "Une buanderie", "Une cuisine", "Un vestiaire"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canadians say 'washroom' where Americans say 'restroom' and Brits say 'loo' or 'toilet.' This is one of the easiest ways to identify a Canadian abroad!",
      fr: "Les Canadiens disent « washroom » là où les Américains disent « restroom » et les Britanniques disent « loo » ou « toilet ». C'est l'un des moyens les plus faciles d'identifier un Canadien à l'étranger!"
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What does 'keener' mean in Canadian slang?",
      fr: "Que signifie « keener » dans l'argot canadien?"
    },
    options: {
      en: ["An overly eager or enthusiastic person", "A sharp knife", "A fast runner", "A clever trick"],
      fr: ["Une personne trop enthousiaste ou zélée", "Un couteau aiguisé", "Un coureur rapide", "Un tour intelligent"]
    },
    correctIndex: 0,
    funFact: {
      en: "'Keener' is distinctly Canadian — it's like 'teacher's pet' or 'try-hard.' If someone's always volunteering first and sitting in the front row, they're a keener.",
      fr: "« Keener » est distinctement canadien — c'est comme « chouchou du prof » ou « premier de classe ». Si quelqu'un se porte toujours volontaire en premier et s'assoit au premier rang, c'est un keener."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "Michif, the language of the Métis people, is a unique blend of French and Cree.",
      fr: "Le michif, la langue du peuple métis, est un mélange unique de français et de cri."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Michif combines French nouns (with French grammar) and Cree verbs (with Cree grammar) — a genuinely bilingual language. It's critically endangered, with fewer than 1,000 fluent speakers remaining.",
      fr: "Le michif combine des noms français (avec la grammaire française) et des verbes cris (avec la grammaire crie) — une langue véritablement bilingue. Il est en danger critique, avec moins de 1 000 locuteurs courants restants."
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'Bill 101' (Charte de la langue française)?",
      fr: "Qu'est-ce que la « Loi 101 » (Charte de la langue française)?"
    },
    options: {
      en: ["Quebec's law making French the sole official language of the province", "A federal law requiring bilingual packaging", "A law banning English in schools", "A regulation on radio broadcast language"],
      fr: ["La loi du Québec faisant du français la seule langue officielle de la province", "Une loi fédérale exigeant l'emballage bilingue", "Une loi interdisant l'anglais dans les écoles", "Un règlement sur la langue de diffusion radio"]
    },
    correctIndex: 0,
    funFact: {
      en: "Bill 101 (1977) requires French on all commercial signs, makes French the language of the workplace, and requires immigrant children to attend French schools. It's considered crucial to the survival of French in North America.",
      fr: "La Loi 101 (1977) exige le français sur tout affichage commercial, fait du français la langue de travail et exige que les enfants d'immigrants fréquentent l'école française. Elle est considérée comme cruciale pour la survie du français en Amérique du Nord."
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What does the Québécois expression 'avoir le feu au cul' roughly mean?",
      fr: "Que signifie approximativement l'expression québécoise « avoir le feu au cul »?"
    },
    options: {
      en: ["To be in a big hurry", "To be angry", "To be embarrassed", "To be on fire"],
      fr: ["Être très pressé", "Être en colère", "Être gêné", "Être en feu"]
    },
    correctIndex: 0,
    funFact: {
      en: "Québécois French has hundreds of colourful expressions that don't exist in European French. Many are quite vivid and literal — this one basically means you're rushing so fast it's as if your pants are on fire!",
      fr: "Le français québécois possède des centaines d'expressions colorées qui n'existent pas en français européen. Beaucoup sont très vivantes et littérales — celle-ci signifie essentiellement que vous vous dépêchez tellement vite que c'est comme si vos pantalons étaient en feu!"
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "How many Indigenous languages are spoken in Canada?",
      fr: "Combien de langues autochtones sont parlées au Canada?"
    },
    options: {
      en: ["Over 70", "About 20", "Exactly 3", "About 150"],
      fr: ["Plus de 70", "Environ 20", "Exactement 3", "Environ 150"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canada has over 70 Indigenous languages from 12 distinct language families. Cree is the most widely spoken, followed by Inuktitut and Ojibwe. Many are critically endangered.",
      fr: "Le Canada compte plus de 70 langues autochtones de 12 familles linguistiques distinctes. Le cri est le plus parlé, suivi de l'inuktitut et de l'ojibwé. Beaucoup sont en danger critique."
    }
  },
  {
    category: "language",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What does a Canadian mean when they say 'give'r'?",
      fr: "Que veut dire un Canadien quand il dit « give'r »?"
    },
    options: {
      en: ["Go for it! / Give it your all!", "Give her a present", "Give up", "Go away"],
      fr: ["Fonce! / Donne tout ce que tu as!", "Offre-lui un cadeau", "Abandonne", "Va-t'en"]
    },
    correctIndex: 0,
    funFact: {
      en: "'Give'r' (or 'giver') is quintessential Canadiana — especially common in the Maritimes and rural Canada. It means to go all out, push hard, or just do it with enthusiasm.",
      fr: "« Give'r » est quintessentiellement canadien — particulièrement courant dans les Maritimes et le Canada rural. Ça signifie foncer, pousser fort, ou simplement faire quelque chose avec enthousiasme."
    }
  },

  // ═══════════════════════════════════════════
  // EXPANSION — SPORTS (47 new)
  // ═══════════════════════════════════════════
  {
    category: "sports",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "How many Canadian teams are currently in the NHL?",
      fr: "Combien d'équipes canadiennes sont actuellement dans la LNH?"
    },
    options: {
      en: ["7", "6", "8", "5"],
      fr: ["7", "6", "8", "5"]
    },
    correctIndex: 0,
    funFact: {
      en: "The 7 Canadian NHL teams are: Toronto Maple Leafs, Montreal Canadiens, Ottawa Senators, Winnipeg Jets, Calgary Flames, Edmonton Oilers, and Vancouver Canucks.",
      fr: "Les 7 équipes canadiennes de la LNH sont : Maple Leafs de Toronto, Canadiens de Montréal, Sénateurs d'Ottawa, Jets de Winnipeg, Flames de Calgary, Oilers d'Edmonton et Canucks de Vancouver."
    }
  },
  {
    category: "sports",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which event is the most-watched annual sporting event in Canada?",
      fr: "Quel événement est l'événement sportif annuel le plus regardé au Canada?"
    },
    options: {
      en: ["The Grey Cup (CFL championship)", "The Super Bowl", "The Stanley Cup Finals", "The World Series"],
      fr: ["La Coupe Grey (championnat de la LCF)", "Le Super Bowl", "Les finales de la Coupe Stanley", "Les Séries mondiales"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Grey Cup is the CFL championship and has been played since 1909, making it one of the oldest football championships in the world. The CFL field is larger than an NFL field!",
      fr: "La Coupe Grey est le championnat de la LCF et se joue depuis 1909, ce qui en fait l'un des plus anciens championnats de football au monde. Le terrain de la LCF est plus grand qu'un terrain de la NFL!"
    }
  },
  {
    category: "sports",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "Wayne Gretzky holds the record for most career points in NHL history.",
      fr: "Wayne Gretzky détient le record du plus grand nombre de points en carrière dans l'histoire de la LNH."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Gretzky scored 2,857 career points — 970 more than the second-place holder. He's the only player to score 200+ points in a season, and he did it four times! His number 99 was retired league-wide.",
      fr: "Gretzky a marqué 2 857 points en carrière — 970 de plus que le deuxième. Il est le seul joueur à marquer 200+ points en une saison, et il l'a fait quatre fois! Son numéro 99 a été retiré dans toute la ligue."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian city's CFL team is called the 'Roughriders'?",
      fr: "L'équipe de la LCF de quelle ville canadienne s'appelle les « Roughriders »?"
    },
    options: {
      en: ["Saskatchewan (Regina)", "Ottawa", "Calgary", "Hamilton"],
      fr: ["Saskatchewan (Regina)", "Ottawa", "Calgary", "Hamilton"]
    },
    correctIndex: 0,
    funFact: {
      en: "Confusingly, the CFL once had TWO teams named Roughriders — Saskatchewan and Ottawa! Ottawa's team (the Rough Riders, two words) folded in 1996. Saskatchewan's Roughriders have one of the most passionate fan bases in all of Canadian sports.",
      fr: "De façon confuse, la LCF avait autrefois DEUX équipes nommées Roughriders — Saskatchewan et Ottawa! L'équipe d'Ottawa (les Rough Riders, en deux mots) a cessé ses activités en 1996. Les Roughriders de la Saskatchewan ont l'une des bases de fans les plus passionnées de tout le sport canadien."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Who is the all-time leading scorer for the Canadian women's national soccer team?",
      fr: "Qui est la meilleure buteuse de tous les temps de l'équipe nationale féminine de soccer du Canada?"
    },
    options: {
      en: ["Christine Sinclair", "Kadeisha Buchanan", "Ashley Lawrence", "Diana Matheson"],
      fr: ["Christine Sinclair", "Kadeisha Buchanan", "Ashley Lawrence", "Diana Matheson"]
    },
    correctIndex: 0,
    funFact: {
      en: "Christine Sinclair from Burnaby, BC is the all-time leading goal scorer in international soccer history (male or female) with 190 goals. She led Canada to Olympic gold in 2021.",
      fr: "Christine Sinclair de Burnaby, C.-B. est la meilleure buteuse de l'histoire du soccer international (hommes et femmes) avec 190 buts. Elle a mené le Canada à l'or olympique en 2021."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'ringette,' a sport invented in Canada?",
      fr: "Qu'est-ce que la « ringuette », un sport inventé au Canada?"
    },
    options: {
      en: ["An ice sport similar to hockey but played with a ring and straight stick", "A type of wrestling", "A water polo variant", "An equestrian event"],
      fr: ["Un sport de glace similaire au hockey mais joué avec un anneau et un bâton droit", "Un type de lutte", "Une variante du water-polo", "Un événement équestre"]
    },
    correctIndex: 0,
    funFact: {
      en: "Ringette was invented in 1963 in North Bay, Ontario by Sam Jacks. It was designed to give girls an ice sport with less body contact than hockey. Over 30,000 Canadians play ringette today.",
      fr: "La ringuette a été inventée en 1963 à North Bay, Ontario par Sam Jacks. Elle a été conçue pour offrir aux filles un sport de glace avec moins de contacts physiques que le hockey. Plus de 30 000 Canadiens jouent à la ringuette aujourd'hui."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "Canada won its first Olympic gold medal in women's soccer at the 2020 Tokyo Olympics (held in 2021).",
      fr: "Le Canada a remporté sa première médaille d'or olympique en soccer féminin aux Jeux olympiques de Tokyo 2020 (tenus en 2021)."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Canada beat Sweden in a penalty shootout in the final. It was a historic moment — the team had won bronze at the 2012 and 2016 Olympics before finally breaking through for gold.",
      fr: "Le Canada a battu la Suède aux tirs de barrage en finale. C'était un moment historique — l'équipe avait remporté le bronze aux Jeux olympiques de 2012 et 2016 avant de finalement décrocher l'or."
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian hockey player was the youngest captain in NHL history when he was named captain of the Edmonton Oilers in 1983?",
      fr: "Quel joueur de hockey canadien était le plus jeune capitaine de l'histoire de la LNH quand il a été nommé capitaine des Oilers d'Edmonton en 1983?"
    },
    options: {
      en: ["Wayne Gretzky", "Mario Lemieux", "Bobby Orr", "Mark Messier"],
      fr: ["Wayne Gretzky", "Mario Lemieux", "Bobby Orr", "Mark Messier"]
    },
    correctIndex: 0,
    funFact: {
      en: "Gretzky was named Oilers captain at 22. He led them to four Stanley Cups before the devastating 1988 trade to Los Angeles — a moment so shocking Canadians call it 'The Trade.'",
      fr: "Gretzky a été nommé capitaine des Oilers à 22 ans. Il les a menés à quatre Coupes Stanley avant l'échange dévastateur de 1988 vers Los Angeles — un moment si choquant que les Canadiens l'appellent « L'Échange »."
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Brier?",
      fr: "Qu'est-ce que le Brier?"
    },
    options: {
      en: ["The Canadian men's curling championship", "A horse racing event", "A hockey award", "A sailing competition"],
      fr: ["Le championnat canadien masculin de curling", "Un événement de courses de chevaux", "Un prix de hockey", "Une compétition de voile"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Tim Hortons Brier has been held since 1927 and is one of the most-watched sporting events on Canadian TV. Canada is the dominant force in world curling, and the Brier is where future world champions are made.",
      fr: "Le Brier Tim Hortons a lieu depuis 1927 et est l'un des événements sportifs les plus regardés à la télé canadienne. Le Canada est la force dominante en curling mondial, et le Brier est là où les futurs champions du monde sont formés."
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian city was the first to host both the Summer and Winter Olympics?",
      fr: "Quelle ville canadienne a été la première à accueillir les Jeux olympiques d'été et d'hiver?"
    },
    options: {
      en: ["No Canadian city has hosted both — Montreal hosted Summer (1976), Calgary hosted Winter (1988), Vancouver hosted Winter (2010)", "Montreal", "Vancouver", "Toronto"],
      fr: ["Aucune ville canadienne n'a accueilli les deux — Montréal a accueilli les Jeux d'été (1976), Calgary les Jeux d'hiver (1988), Vancouver les Jeux d'hiver (2010)", "Montréal", "Vancouver", "Toronto"]
    },
    correctIndex: 0,
    funFact: {
      en: "Three Canadian cities have hosted the Olympics across three different decades. Toronto has bid multiple times for the Summer Olympics but has never been selected.",
      fr: "Trois villes canadiennes ont accueilli les Jeux olympiques au cours de trois décennies différentes. Toronto a présenté sa candidature plusieurs fois pour les Jeux olympiques d'été mais n'a jamais été sélectionnée."
    }
  },
  {
    category: "sports",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What trophy is awarded to the NHL champion?",
      fr: "Quel trophée est remis au champion de la LNH?"
    },
    options: {
      en: ["Stanley Cup", "Grey Cup", "Vezina Trophy", "Hart Trophy"],
      fr: ["Coupe Stanley", "Coupe Grey", "Trophée Vézina", "Trophée Hart"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Stanley Cup was donated by Lord Stanley of Preston, the Governor General of Canada, in 1893. It's the oldest professional sports trophy in North America and each player on the winning team gets to keep it for one day.",
      fr: "La Coupe Stanley a été offerte par Lord Stanley de Preston, le gouverneur général du Canada, en 1893. C'est le plus ancien trophée sportif professionnel en Amérique du Nord et chaque joueur de l'équipe gagnante peut la garder pendant une journée."
    }
  },

  // ═══════════════════════════════════════════
  // EXPANSION — INDIGENOUS (46 new)
  // ═══════════════════════════════════════════
  {
    category: "indigenous",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What date is the National Day for Truth and Reconciliation in Canada?",
      fr: "À quelle date est la Journée nationale de la vérité et de la réconciliation au Canada?"
    },
    options: {
      en: ["September 30", "June 21", "November 11", "July 1"],
      fr: ["30 septembre", "21 juin", "11 novembre", "1er juillet"]
    },
    correctIndex: 0,
    funFact: {
      en: "September 30 became a federal statutory holiday in 2021. People wear orange shirts to honour residential school survivors, inspired by Phyllis Webstad, whose orange shirt was taken on her first day at residential school.",
      fr: "Le 30 septembre est devenu un jour férié fédéral en 2021. Les gens portent des chandails oranges pour honorer les survivants des pensionnats, inspirés par Phyllis Webstad, dont le chandail orange a été pris lors de son premier jour au pensionnat."
    }
  },
  {
    category: "indigenous",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is National Indigenous Peoples Day and when is it celebrated?",
      fr: "Qu'est-ce que la Journée nationale des peuples autochtones et quand est-elle célébrée?"
    },
    options: {
      en: ["A celebration of Indigenous heritage on June 21 (summer solstice)", "A mourning day on December 25", "A provincial holiday on March 1", "An awareness week in October"],
      fr: ["Une célébration du patrimoine autochtone le 21 juin (solstice d'été)", "Un jour de deuil le 25 décembre", "Un jour férié provincial le 1er mars", "Une semaine de sensibilisation en octobre"]
    },
    correctIndex: 0,
    funFact: {
      en: "June 21 was chosen because the summer solstice has spiritual significance for many Indigenous peoples. It's a day to celebrate the diverse cultures, heritage, and contributions of Indigenous peoples.",
      fr: "Le 21 juin a été choisi parce que le solstice d'été a une signification spirituelle pour de nombreux peuples autochtones. C'est un jour pour célébrer les cultures, le patrimoine et les contributions diversifiés des peuples autochtones."
    }
  },
  {
    category: "indigenous",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "The Inuit traditionally live in igloos year-round.",
      fr: "Les Inuits vivent traditionnellement dans des igloos toute l'année."
    },
    options: { en: [], fr: [] },
    correctIndex: 1,
    funFact: {
      en: "This is false! Igloos were used as temporary winter shelters during hunting trips. Most Inuit lived in sod houses or tents. The igloo is an ingenious engineering feat — inside temperatures can reach 16°C even when it's -45°C outside.",
      fr: "C'est faux! Les igloos étaient utilisés comme abris d'hiver temporaires lors de voyages de chasse. La plupart des Inuits vivaient dans des maisons de tourbe ou des tentes. L'igloo est un exploit d'ingénierie ingénieux — la température intérieure peut atteindre 16°C même quand il fait -45°C dehors."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Métis sash (ceinture fléchée) and what does it represent?",
      fr: "Qu'est-ce que la ceinture fléchée métisse et que représente-t-elle?"
    },
    options: {
      en: ["A colourful woven sash that symbolizes Métis identity and nationhood", "A type of war paint", "A ceremonial blanket", "A leather belt for tools"],
      fr: ["Une ceinture tissée colorée qui symbolise l'identité et la nation métisses", "Un type de peinture de guerre", "Une couverture cérémonielle", "Une ceinture de cuir pour les outils"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Métis sash was a practical item used as a belt, rope, washcloth, and tourniquet during the fur trade. Today it's a powerful symbol of Métis culture and pride.",
      fr: "La ceinture fléchée métisse était un article pratique utilisé comme ceinture, corde, débarbouillette et garrot pendant le commerce de la fourrure. Aujourd'hui, c'est un puissant symbole de la culture et de la fierté métisses."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What are the Medicine Wheel teachings in many First Nations traditions?",
      fr: "Quels sont les enseignements de la roue de médecine dans de nombreuses traditions des Premières Nations?"
    },
    options: {
      en: ["A circular symbol representing balance among physical, mental, emotional, and spiritual health", "A calendar system", "A type of herbal remedy", "A navigation tool"],
      fr: ["Un symbole circulaire représentant l'équilibre entre la santé physique, mentale, émotionnelle et spirituelle", "Un système de calendrier", "Un type de remède à base de plantes", "Un outil de navigation"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Medicine Wheel is found in many Indigenous traditions across North America. It typically has four quadrants, each associated with a direction, season, colour, and aspect of well-being.",
      fr: "La roue de médecine se retrouve dans de nombreuses traditions autochtones à travers l'Amérique du Nord. Elle a typiquement quatre quadrants, chacun associé à une direction, une saison, une couleur et un aspect du bien-être."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the significance of the Two Row Wampum Belt (Kaswentha)?",
      fr: "Quelle est la signification de la ceinture wampum à deux rangées (Kaswentha)?"
    },
    options: {
      en: ["It symbolizes a treaty of mutual respect between Indigenous and European peoples", "It represents the solar system", "It tracks hunting seasons", "It records family genealogies"],
      fr: ["Elle symbolise un traité de respect mutuel entre les peuples autochtones et européens", "Elle représente le système solaire", "Elle suit les saisons de chasse", "Elle enregistre les généalogies familiales"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Two Row Wampum records a 1613 agreement between the Haudenosaunee and the Dutch. Two parallel rows represent two vessels traveling the same river but not interfering with each other's governance.",
      fr: "Le wampum à deux rangées enregistre un accord de 1613 entre les Haudenosaunee et les Néerlandais. Deux rangées parallèles représentent deux navires voyageant sur la même rivière sans interférer dans la gouvernance de l'autre."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "The word 'Canada' is believed to derive from the St. Lawrence Iroquoian word 'kanata' meaning 'village.'",
      fr: "On croit que le mot « Canada » dérive du mot iroquoien du Saint-Laurent « kanata » signifiant « village »."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Many place names in Canada come from Indigenous languages: Toronto (Mohawk), Ottawa (Algonquin), Saskatchewan (Cree), Manitoba (Cree or Ojibwe), Nunavut (Inuktitut), and many more.",
      fr: "De nombreux noms de lieux au Canada proviennent de langues autochtones : Toronto (mohawk), Ottawa (algonquin), Saskatchewan (cri), Manitoba (cri ou ojibwé), Nunavut (inuktitut), et bien d'autres."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the '60s Scoop'?",
      fr: "Qu'était la « rafle des années 60 »?"
    },
    options: {
      en: ["The mass removal of Indigenous children from their families by child welfare agencies", "A mining boom in northern Canada", "A military operation", "A student exchange program"],
      fr: ["Le retrait massif d'enfants autochtones de leurs familles par les agences de protection de l'enfance", "Un boom minier dans le nord du Canada", "Une opération militaire", "Un programme d'échange étudiant"]
    },
    correctIndex: 0,
    funFact: {
      en: "From the 1960s to the 1980s, an estimated 20,000 Indigenous children were taken from their families and placed in non-Indigenous foster or adoptive homes. Many lost connection to their language, culture, and identity.",
      fr: "Des années 1960 aux années 1980, on estime que 20 000 enfants autochtones ont été retirés de leurs familles et placés dans des foyers d'accueil ou adoptifs non autochtones. Beaucoup ont perdu le lien avec leur langue, leur culture et leur identité."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Indian Act, still in force in Canada?",
      fr: "Qu'est-ce que la Loi sur les Indiens, toujours en vigueur au Canada?"
    },
    options: {
      en: ["A federal law that governs matters relating to registered First Nations people and reserves", "A law protecting Indigenous languages", "A trade agreement with Indigenous nations", "A cultural preservation act"],
      fr: ["Une loi fédérale qui régit les questions relatives aux membres inscrits des Premières Nations et aux réserves", "Une loi protégeant les langues autochtones", "Un accord commercial avec les nations autochtones", "Une loi de préservation culturelle"]
    },
    correctIndex: 0,
    funFact: {
      en: "First enacted in 1876, the Indian Act has been widely criticized for its paternalistic control over First Nations governance, land, education, and identity. It defined who legally qualifies as 'Indian' — a term many find outdated.",
      fr: "Adoptée en 1876, la Loi sur les Indiens a été largement critiquée pour son contrôle paternaliste sur la gouvernance, les terres, l'éducation et l'identité des Premières Nations. Elle définit qui est légalement « Indien » — un terme que beaucoup trouvent dépassé."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Oka Crisis of 1990?",
      fr: "Qu'est-ce que la crise d'Oka de 1990?"
    },
    options: {
      en: ["A 78-day standoff between Mohawk people and the Canadian army over a sacred burial ground", "A flood in Quebec", "A political scandal", "A hockey riot"],
      fr: ["Un affrontement de 78 jours entre le peuple mohawk et l'armée canadienne pour un cimetière sacré", "Une inondation au Québec", "Un scandale politique", "Une émeute de hockey"]
    },
    correctIndex: 0,
    funFact: {
      en: "The crisis began when the town of Oka, Quebec wanted to expand a golf course onto Mohawk burial grounds. It was a turning point in Canadian awareness of Indigenous land rights and remains a powerful symbol of Indigenous resistance.",
      fr: "La crise a commencé quand la ville d'Oka, Québec, voulait agrandir un terrain de golf sur des terres funéraires mohawks. Ce fut un tournant dans la sensibilisation canadienne aux droits fonciers autochtones et reste un puissant symbole de la résistance autochtone."
    }
  },
  {
    category: "indigenous",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What are 'dreamcatchers' traditionally used for in Ojibwe culture?",
      fr: "À quoi servent traditionnellement les « capteurs de rêves » dans la culture ojibwée?"
    },
    options: {
      en: ["To filter out bad dreams and let good dreams pass through", "To catch fish", "To predict the weather", "To send messages"],
      fr: ["Pour filtrer les mauvais rêves et laisser passer les bons", "Pour attraper du poisson", "Pour prédire la météo", "Pour envoyer des messages"]
    },
    correctIndex: 0,
    funFact: {
      en: "Dreamcatchers originated with the Ojibwe (Anishinaabe) people. The web catches bad dreams while good dreams slip through the centre hole. They've become widely adopted but have deep cultural significance in their original context.",
      fr: "Les capteurs de rêves sont originaires du peuple ojibwé (anishinaabe). La toile attrape les mauvais rêves tandis que les bons rêves passent par le trou central. Ils ont été largement adoptés mais ont une profonde signification culturelle dans leur contexte d'origine."
    }
  },

  // ═══════════════════════════════════════════
  // EXPANSION — SCIENCE (44 new)
  // ═══════════════════════════════════════════
  {
    category: "science",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian company, founded in Ottawa, is one of the world's largest e-commerce platforms?",
      fr: "Quelle entreprise canadienne, fondée à Ottawa, est l'une des plus grandes plateformes de commerce électronique au monde?"
    },
    options: {
      en: ["Shopify", "Amazon", "eBay", "Etsy"],
      fr: ["Shopify", "Amazon", "eBay", "Etsy"]
    },
    correctIndex: 0,
    funFact: {
      en: "Shopify was founded in 2006 by Tobias Lütke, a German-Canadian developer. It powers millions of businesses worldwide and at one point was Canada's most valuable company.",
      fr: "Shopify a été fondée en 2006 par Tobias Lütke, un développeur germano-canadien. Elle alimente des millions d'entreprises dans le monde et a été à un moment l'entreprise la plus précieuse du Canada."
    }
  },
  {
    category: "science",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "IMAX movie technology was invented in Canada.",
      fr: "La technologie cinématographique IMAX a été inventée au Canada."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "IMAX was co-developed by Canadians Graeme Ferguson, Roman Kroitor, and Robert Kerr. It debuted at Expo 67 in Montreal and is now the world's leading giant-screen cinema format.",
      fr: "IMAX a été co-développé par les Canadiens Graeme Ferguson, Roman Kroitor et Robert Kerr. Il a fait ses débuts à l'Expo 67 à Montréal et est maintenant le principal format de cinéma sur écran géant au monde."
    }
  },
  {
    category: "science",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What did Canadian James Gosling create that runs on billions of devices?",
      fr: "Qu'est-ce que le Canadien James Gosling a créé et qui fonctionne sur des milliards d'appareils?"
    },
    options: {
      en: ["The Java programming language", "The Python programming language", "Wi-Fi", "USB connectors"],
      fr: ["Le langage de programmation Java", "Le langage de programmation Python", "Le Wi-Fi", "Les connecteurs USB"]
    },
    correctIndex: 0,
    funFact: {
      en: "James Gosling, from Calgary, Alberta, created Java at Sun Microsystems in 1995. Java runs on an estimated 3 billion+ devices worldwide, from Android phones to enterprise servers.",
      fr: "James Gosling, de Calgary, Alberta, a créé Java chez Sun Microsystems en 1995. Java fonctionne sur environ 3 milliards+ d'appareils dans le monde, des téléphones Android aux serveurs d'entreprise."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What was AVRO Arrow, the famous Canadian cancelled aircraft?",
      fr: "Qu'était l'AVRO Arrow, le célèbre avion canadien annulé?"
    },
    options: {
      en: ["A supersonic interceptor jet that was the most advanced aircraft of its era", "A passenger airplane", "A space shuttle", "A helicopter gunship"],
      fr: ["Un jet intercepteur supersonique qui était l'avion le plus avancé de son époque", "Un avion de passagers", "Une navette spatiale", "Un hélicoptère de combat"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Avro CF-105 Arrow was cancelled by PM Diefenbaker in 1959, and all prototypes and plans were ordered destroyed. Many of its engineers went on to work at NASA. Its cancellation remains one of Canada's great 'what if' stories.",
      fr: "L'Avro CF-105 Arrow a été annulé par le PM Diefenbaker en 1959, et tous les prototypes et plans ont été ordonnés détruits. Plusieurs de ses ingénieurs sont allés travailler à la NASA. Son annulation reste l'une des grandes histoires de « et si » du Canada."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian university operates TRIUMF, Canada's national particle accelerator centre?",
      fr: "Quelle université canadienne exploite TRIUMF, le centre national d'accélération de particules du Canada?"
    },
    options: {
      en: ["University of British Columbia", "University of Toronto", "McGill University", "University of Alberta"],
      fr: ["Université de la Colombie-Britannique", "Université de Toronto", "Université McGill", "Université de l'Alberta"]
    },
    correctIndex: 0,
    funFact: {
      en: "TRIUMF in Vancouver has the world's largest cyclotron. It produces medical isotopes used in cancer treatment worldwide and conducts cutting-edge research in particle physics.",
      fr: "TRIUMF à Vancouver possède le plus grand cyclotron du monde. Il produit des isotopes médicaux utilisés dans le traitement du cancer dans le monde entier et mène des recherches de pointe en physique des particules."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What Canadian invention revolutionized long-distance communication in the 20th century?",
      fr: "Quelle invention canadienne a révolutionné les communications longue distance au 20e siècle?"
    },
    options: {
      en: ["The Alouette satellite (Canada's first satellite)", "The fax machine", "The radio antenna", "The telegraph relay"],
      fr: ["Le satellite Alouette (le premier satellite du Canada)", "Le télécopieur", "L'antenne radio", "Le relais télégraphique"]
    },
    correctIndex: 0,
    funFact: {
      en: "Alouette 1, launched in 1962, made Canada the third country in space (after the US and USSR). It studied the ionosphere and operated successfully for 10 years — far beyond its one-year design life.",
      fr: "Alouette 1, lancé en 1962, a fait du Canada le troisième pays dans l'espace (après les États-Unis et l'URSS). Il a étudié l'ionosphère et a fonctionné avec succès pendant 10 ans — bien au-delà de sa durée de vie prévue d'un an."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "The electric wheelchair was invented by Canadian George Klein.",
      fr: "Le fauteuil roulant électrique a été inventé par le Canadien George Klein."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "George Klein developed the electric wheelchair in the 1950s for injured WWII veterans at the National Research Council of Canada. He's been called 'the most productive Canadian inventor of the 20th century.'",
      fr: "George Klein a développé le fauteuil roulant électrique dans les années 1950 pour les vétérans blessés de la Seconde Guerre mondiale au Conseil national de recherches du Canada. Il a été appelé « l'inventeur canadien le plus productif du 20e siècle »."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Perimeter Institute in Waterloo, Ontario known for?",
      fr: "Pour quoi l'Institut Périmètre à Waterloo, Ontario est-il connu?"
    },
    options: {
      en: ["Theoretical physics research", "Agricultural research", "Marine biology", "Computer hardware development"],
      fr: ["La recherche en physique théorique", "La recherche agricole", "La biologie marine", "Le développement de matériel informatique"]
    },
    correctIndex: 0,
    funFact: {
      en: "Founded in 1999 by BlackBerry co-founder Mike Lazaridis, the Perimeter Institute is one of the world's leading centres for theoretical physics. It attracts top physicists from around the globe.",
      fr: "Fondé en 1999 par le cofondateur de BlackBerry Mike Lazaridis, l'Institut Périmètre est l'un des principaux centres mondiaux de physique théorique. Il attire les meilleurs physiciens du monde entier."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What Canadian-designed instrument is aboard the James Webb Space Telescope?",
      fr: "Quel instrument conçu au Canada est à bord du télescope spatial James Webb?"
    },
    options: {
      en: ["NIRISS (Near-Infrared Imager and Slitless Spectrograph) and the Fine Guidance Sensor", "The primary mirror", "The sunshield", "The main camera"],
      fr: ["NIRISS (imageur et spectrographe sans fente dans le proche infrarouge) et le capteur de guidage fin", "Le miroir primaire", "Le pare-soleil", "La caméra principale"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canada's contribution to JWST earned Canadian astronomers guaranteed time on the telescope. The Fine Guidance Sensor is so precise it can lock onto a target the width of a human hair from a kilometre away.",
      fr: "La contribution du Canada au JWST a valu aux astronomes canadiens du temps garanti sur le télescope. Le capteur de guidage fin est si précis qu'il peut verrouiller une cible de la largeur d'un cheveu humain à un kilomètre de distance."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is D-Wave Systems, based in Burnaby, BC, known for?",
      fr: "Pour quoi D-Wave Systems, basée à Burnaby, C.-B., est-elle connue?"
    },
    options: {
      en: ["Building the world's first commercial quantum computers", "Designing smartphones", "Creating video game engines", "Manufacturing satellites"],
      fr: ["La construction des premiers ordinateurs quantiques commerciaux au monde", "La conception de téléphones intelligents", "La création de moteurs de jeux vidéo", "La fabrication de satellites"]
    },
    correctIndex: 0,
    funFact: {
      en: "D-Wave shipped its first quantum computer in 2011, years before any competitor. Canada is a global leader in quantum computing research, with major hubs in Waterloo and Vancouver.",
      fr: "D-Wave a livré son premier ordinateur quantique en 2011, des années avant tout concurrent. Le Canada est un leader mondial de la recherche en informatique quantique, avec des pôles majeurs à Waterloo et Vancouver."
    }
  },

  // ═══════════════════════════════════════════
  // EXPANSION — FOOD & DRINK (41 new)
  // ═══════════════════════════════════════════
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is 'butter tart,' a classic Canadian dessert?",
      fr: "Qu'est-ce qu'une « tartelette au beurre », un dessert classique canadien?"
    },
    options: {
      en: ["A small pastry filled with butter, sugar, and eggs", "A frozen butter dish", "A type of cheesecake", "A chocolate truffle"],
      fr: ["Une petite pâtisserie garnie de beurre, de sucre et d'œufs", "Un plat de beurre congelé", "Un type de gâteau au fromage", "Une truffe au chocolat"]
    },
    correctIndex: 0,
    funFact: {
      en: "The butter tart debate in Canada is fierce: runny filling or firm? With raisins or without? The earliest known recipe dates to 1900 in a Barrie, Ontario cookbook.",
      fr: "Le débat sur la tartelette au beurre au Canada est féroce : garniture coulante ou ferme? Avec raisins ou sans? La plus ancienne recette connue date de 1900 dans un livre de cuisine de Barrie, Ontario."
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What are 'perogies' (pierogies) in Canadian food culture?",
      fr: "Que sont les « perogies » dans la culture alimentaire canadienne?"
    },
    options: {
      en: ["Stuffed dumplings, popular on the prairies due to Ukrainian-Canadian heritage", "A type of sausage", "Fried fish cakes", "Cornbread rolls"],
      fr: ["Des raviolis farcis, populaires dans les Prairies en raison du patrimoine ukraino-canadien", "Un type de saucisse", "Des croquettes de poisson frites", "Des petits pains de maïs"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canada has a giant perogy statue in Glendon, Alberta! Ukrainian immigration to the prairies brought perogy culture, and now they're a Canadian staple — you'll find them in every grocery freezer.",
      fr: "Le Canada a une statue géante de perogy à Glendon, Alberta! L'immigration ukrainienne dans les Prairies a apporté la culture du perogy, et maintenant c'est un aliment de base canadien — on en trouve dans tous les congélateurs d'épicerie."
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "Canada is one of the world's largest producers of canola oil.",
      fr: "Le Canada est l'un des plus grands producteurs d'huile de canola au monde."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "The name 'canola' literally means 'Canadian oil, low acid.' It was developed by Canadian scientists in the 1970s from rapeseed. Canada produces about 20% of the world's canola.",
      fr: "Le nom « canola » signifie littéralement « Canadian oil, low acid » (huile canadienne, faible acidité). Il a été développé par des scientifiques canadiens dans les années 1970 à partir de colza. Le Canada produit environ 20 % du canola mondial."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'donair,' a popular Maritime food?",
      fr: "Qu'est-ce que le « donair », un aliment populaire des Maritimes?"
    },
    options: {
      en: ["Halifax's version of a doner kebab with a sweet garlic sauce", "A deep-fried donut", "A type of seafood chowder", "A lobster roll variation"],
      fr: ["La version d'Halifax du döner kebab avec une sauce sucrée à l'ail", "Un beigne frit", "Un type de chaudrée de fruits de mer", "Une variation du sandwich au homard"]
    },
    correctIndex: 0,
    funFact: {
      en: "The donair was declared Halifax's official food in 2015! Created by Peter Gamoulakos in the 1970s, its unique sweet sauce (condensed milk, sugar, vinegar, garlic) sets it apart from any other doner kebab in the world.",
      fr: "Le donair a été déclaré l'aliment officiel d'Halifax en 2015! Créé par Peter Gamoulakos dans les années 1970, sa sauce sucrée unique (lait condensé, sucre, vinaigre, ail) le distingue de tout autre döner kebab dans le monde."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'Kraft Dinner' and why is it significant in Canada?",
      fr: "Qu'est-ce que le « Kraft Dinner » et pourquoi est-il significatif au Canada?"
    },
    options: {
      en: ["Boxed macaroni and cheese — Canadians eat more of it per capita than any other country", "A frozen TV dinner", "A meal delivery service", "A type of canned soup"],
      fr: ["Du macaroni au fromage en boîte — les Canadiens en mangent plus par habitant que tout autre pays", "Un repas surgelé de télé", "Un service de livraison de repas", "Un type de soupe en conserve"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canadians call it 'KD' and consume 55% more of it per capita than Americans. During WWII, it became popular because it required only one ration coupon. It's essentially the unofficial national comfort food.",
      fr: "Les Canadiens l'appellent « KD » et en consomment 55 % de plus par habitant que les Américains. Pendant la Seconde Guerre mondiale, il est devenu populaire car il ne nécessitait qu'un coupon de rationnement. C'est essentiellement le plat réconfortant national non officiel."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'screech' in Newfoundland?",
      fr: "Qu'est-ce que le « screech » à Terre-Neuve?"
    },
    options: {
      en: ["A potent dark rum associated with Newfoundland culture", "A type of fish stew", "A bird call imitation game", "A foghorn sound"],
      fr: ["Un rhum brun puissant associé à la culture terre-neuvienne", "Un type de ragoût de poisson", "Un jeu d'imitation de cris d'oiseaux", "Un son de corne de brume"]
    },
    correctIndex: 0,
    funFact: {
      en: "The 'Screech-In' is a Newfoundland ceremony where visitors drink screech rum, kiss a cod fish, and recite a phrase in Newfoundland dialect to become honorary Newfoundlanders!",
      fr: "Le « Screech-In » est une cérémonie terre-neuvienne où les visiteurs boivent du rhum screech, embrassent une morue et récitent une phrase en dialecte terre-neuvien pour devenir des Terre-Neuviens honoraires!"
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "Ketchup-flavoured potato chips are a distinctly Canadian snack not commonly found in the United States.",
      fr: "Les croustilles au ketchup sont une collation distinctement canadienne qu'on ne trouve pas couramment aux États-Unis."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Ketchup chips, all-dressed chips, and Coffee Crisp chocolate bars are Canadian snack icons that puzzle American visitors. Canadians living abroad often have friends ship these to them!",
      fr: "Les croustilles au ketchup, les croustilles all-dressed et les barres de chocolat Coffee Crisp sont des icônes de collations canadiennes qui intriguent les visiteurs américains. Les Canadiens vivant à l'étranger demandent souvent à leurs amis de leur en envoyer!"
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'figgy duff,' a traditional Newfoundland dessert?",
      fr: "Qu'est-ce que le « figgy duff », un dessert traditionnel de Terre-Neuve?"
    },
    options: {
      en: ["A boiled raisin pudding (not actually made with figs)", "A fig-filled pastry", "A frozen fruit dessert", "A type of bread pudding with figs"],
      fr: ["Un pouding aux raisins bouilli (pas vraiment fait avec des figues)", "Une pâtisserie garnie de figues", "Un dessert aux fruits glacé", "Un type de pouding au pain avec des figues"]
    },
    correctIndex: 0,
    funFact: {
      en: "In Newfoundland, 'figs' means raisins! Figgy duff is traditionally boiled in a cloth bag alongside a 'jiggs dinner' (a boiled meat and vegetable meal). It's served with a rum or butter sauce.",
      fr: "À Terre-Neuve, « figs » signifie raisins! Le figgy duff est traditionnellement bouilli dans un sac en tissu à côté d'un « jiggs dinner » (un repas de viande et de légumes bouillis). Il est servi avec une sauce au rhum ou au beurre."
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'cipaille' (also spelled 'sea pie' or 'six-pâtes')?",
      fr: "Qu'est-ce que la cipaille (aussi écrit « sea pie » ou « six-pâtes »)?"
    },
    options: {
      en: ["A traditional Quebec layered meat pie with multiple pastry layers", "A seafood pie from Nova Scotia", "A sweet pie with six fruits", "A type of shepherd's pie"],
      fr: ["Une tourte traditionnelle québécoise à plusieurs couches de viande et de pâte", "Une tourte aux fruits de mer de la Nouvelle-Écosse", "Une tarte sucrée avec six fruits", "Un type de pâté chinois"]
    },
    correctIndex: 0,
    funFact: {
      en: "Cipaille can have up to six layers of pastry alternating with game meats like venison, rabbit, and partridge. It's a traditional Québécois holiday dish that takes hours to prepare and bake.",
      fr: "La cipaille peut avoir jusqu'à six couches de pâte alternant avec des viandes de gibier comme le cerf, le lapin et la perdrix. C'est un plat traditionnel québécois des fêtes qui prend des heures à préparer et à cuire."
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'Oreilles de crisse' — a traditional Quebec sugar shack dish?",
      fr: "Qu'est-ce que les « oreilles de crisse » — un plat traditionnel de cabane à sucre québécoise?"
    },
    options: {
      en: ["Deep-fried salted pork rinds", "Maple-glazed ears of corn", "A type of donut", "Crispy potato skins"],
      fr: ["Des couennes de porc salé frites", "Des épis de maïs glacés à l'érable", "Un type de beigne", "Des pelures de pommes de terre croustillantes"]
    },
    correctIndex: 0,
    funFact: {
      en: "The name literally translates to 'Christ's ears' — another example of Quebec's sacre-based naming. They're a beloved crunchy snack at cabanes à sucre (sugar shacks) during maple syrup season.",
      fr: "Le nom se traduit littéralement par « oreilles du Christ » — un autre exemple de la nomenclature basée sur les sacres du Québec. Ce sont une collation croustillante bien-aimée aux cabanes à sucre pendant la saison du sirop d'érable."
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the most popular flavour of 'all-dressed' chips, a uniquely Canadian snack?",
      fr: "Quelle est la saveur la plus populaire des croustilles « all-dressed », une collation uniquement canadienne?"
    },
    options: {
      en: ["It's a blend of ketchup, BBQ, sour cream & onion, and salt & vinegar flavours", "It's plain with all the salt", "It's topped with all condiments", "It has every cheese flavour"],
      fr: ["C'est un mélange de saveurs ketchup, BBQ, crème sure et oignon, et sel et vinaigre", "C'est nature avec tout le sel", "C'est garni de tous les condiments", "C'est toutes les saveurs de fromage"]
    },
    correctIndex: 0,
    funFact: {
      en: "All-dressed chips are so Canadian that when Ruffles briefly sold them in the US in 2016, Canadians were outraged that their national snack was being 'stolen.' They remain a Canadian icon.",
      fr: "Les croustilles all-dressed sont tellement canadiennes que quand Ruffles les a brièvement vendues aux États-Unis en 2016, les Canadiens étaient outrés que leur collation nationale soit « volée ». Elles restent une icône canadienne."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'jiggs dinner,' a traditional meal in Newfoundland?",
      fr: "Qu'est-ce que le « jiggs dinner », un repas traditionnel à Terre-Neuve?"
    },
    options: {
      en: ["A boiled dinner of salt beef, cabbage, potatoes, carrots, turnip, and pease pudding", "A fish and chips variation", "A barbecued moose stew", "A lobster boil"],
      fr: ["Un dîner bouilli de bœuf salé, chou, pommes de terre, carottes, navet et pouding aux pois", "Une variation de fish and chips", "Un ragoût d'orignal au barbecue", "Un homard bouilli"]
    },
    correctIndex: 0,
    funFact: {
      en: "Jiggs dinner is traditionally served on Sundays in Newfoundland. The name may come from the comic strip character Jiggs, who loved corned beef and cabbage. It's the ultimate Newfoundland comfort food.",
      fr: "Le jiggs dinner est traditionnellement servi le dimanche à Terre-Neuve. Le nom pourrait venir du personnage de bande dessinée Jiggs, qui adorait le bœuf salé et le chou. C'est le plat réconfortant par excellence de Terre-Neuve."
    }
  },

  // ═══════════════════════════════════════════
  // ADDITIONAL MIXED QUESTIONS (to reach 500)
  // ═══════════════════════════════════════════
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What was Expo 67?",
      fr: "Qu'était l'Expo 67?"
    },
    options: {
      en: ["A World's Fair held in Montreal for Canada's centennial", "A science experiment", "A space mission", "A trade agreement"],
      fr: ["Une Exposition universelle tenue à Montréal pour le centenaire du Canada", "Une expérience scientifique", "Une mission spatiale", "Un accord commercial"]
    },
    correctIndex: 0,
    funFact: {
      en: "Expo 67 attracted over 50 million visitors and is considered one of the most successful World's Fairs ever. Its theme was 'Man and His World.' Buckminster Fuller's geodesic dome (now the Biosphère) remains an iconic Montreal landmark.",
      fr: "L'Expo 67 a attiré plus de 50 millions de visiteurs et est considérée comme l'une des Expositions universelles les plus réussies. Son thème était « Terre des Hommes ». Le dôme géodésique de Buckminster Fuller (maintenant la Biosphère) reste un monument emblématique de Montréal."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian province is famous for its potatoes?",
      fr: "Quelle province canadienne est célèbre pour ses pommes de terre?"
    },
    options: {
      en: ["Prince Edward Island", "Alberta", "Ontario", "Manitoba"],
      fr: ["Île-du-Prince-Édouard", "Alberta", "Ontario", "Manitoba"]
    },
    correctIndex: 0,
    funFact: {
      en: "PEI produces about 25% of Canada's potatoes despite being the smallest province. The rich red soil and maritime climate make it perfect for potato farming.",
      fr: "L'Î.-P.-É. produit environ 25 % des pommes de terre du Canada malgré le fait qu'elle soit la plus petite province. Le riche sol rouge et le climat maritime en font l'endroit parfait pour la culture de la pomme de terre."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Calgary Stampede?",
      fr: "Qu'est-ce que le Stampede de Calgary?"
    },
    options: {
      en: ["A massive annual rodeo and western festival", "A marathon race", "A music festival", "A cattle auction"],
      fr: ["Un énorme rodéo annuel et festival western", "Un marathon", "Un festival de musique", "Une vente aux enchères de bétail"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Calgary Stampede has been running since 1912 and attracts over 1 million visitors every July. It's called 'The Greatest Outdoor Show on Earth' and features rodeo, chuckwagon racing, and concerts.",
      fr: "Le Stampede de Calgary existe depuis 1912 et attire plus d'un million de visiteurs chaque juillet. Il est surnommé « le plus grand spectacle en plein air sur Terre » et comprend du rodéo, des courses de chariots et des concerts."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian figure skater made history by landing the first ratified quadruple jump in competition?",
      fr: "Quel patineur artistique canadien a fait l'histoire en réussissant le premier quadruple saut ratifié en compétition?"
    },
    options: {
      en: ["Kurt Browning", "Patrick Chan", "Elvis Stojko", "Brian Orser"],
      fr: ["Kurt Browning", "Patrick Chan", "Elvis Stojko", "Brian Orser"]
    },
    correctIndex: 0,
    funFact: {
      en: "Kurt Browning from Rocky Mountain House, Alberta landed the first quadruple toe loop in 1988. Canada has a rich figure skating tradition, producing many Olympic and World champions.",
      fr: "Kurt Browning de Rocky Mountain House, Alberta a réussi le premier quadruple boucle piquée en 1988. Le Canada a une riche tradition de patinage artistique, produisant de nombreux champions olympiques et mondiaux."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What are the 'Calls to Action' released in 2015?",
      fr: "Quels sont les « appels à l'action » publiés en 2015?"
    },
    options: {
      en: ["94 recommendations from the Truth and Reconciliation Commission", "Emergency response protocols", "Environmental protection guidelines", "Immigration reform proposals"],
      fr: ["94 recommandations de la Commission de vérité et réconciliation", "Des protocoles d'intervention d'urgence", "Des directives de protection environnementale", "Des propositions de réforme de l'immigration"]
    },
    correctIndex: 0,
    funFact: {
      en: "The TRC's 94 Calls to Action address child welfare, education, language, culture, health, and justice. As of 2024, only a fraction have been fully implemented, and reconciliation remains ongoing work.",
      fr: "Les 94 appels à l'action de la CVR abordent la protection de l'enfance, l'éducation, la langue, la culture, la santé et la justice. En 2024, seule une fraction a été pleinement mise en œuvre, et la réconciliation reste un travail en cours."
    }
  },
  {
    category: "science",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian communication company launched the world's first commercial geostationary satellite service?",
      fr: "Quelle entreprise canadienne de communication a lancé le premier service commercial de satellite géostationnaire au monde?"
    },
    options: {
      en: ["Telesat (with Anik A1 in 1972)", "Bell Canada", "Rogers", "Nortel"],
      fr: ["Telesat (avec Anik A1 en 1972)", "Bell Canada", "Rogers", "Nortel"]
    },
    correctIndex: 0,
    funFact: {
      en: "Anik A1 made Canada the first country to have a domestic geostationary communications satellite. 'Anik' means 'brother' in Inuktitut. It brought TV and phone service to remote northern communities.",
      fr: "Anik A1 a fait du Canada le premier pays à avoir un satellite de communication géostationnaire domestique. « Anik » signifie « frère » en inuktitut. Il a apporté la télévision et le service téléphonique aux communautés éloignées du Nord."
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is a 'BeaverTail' in Canadian food?",
      fr: "Qu'est-ce qu'une « Queue de castor » en alimentation canadienne?"
    },
    options: {
      en: ["A flat, fried dough pastry shaped like a beaver's tail", "A chocolate bar", "A type of jerky", "A maple candy"],
      fr: ["Une pâtisserie plate de pâte frite en forme de queue de castor", "Une barre de chocolat", "Un type de viande séchée", "Un bonbon à l'érable"]
    },
    correctIndex: 0,
    funFact: {
      en: "BeaverTails were created in 1978 by Grant and Pam Chicken (yes, that's their real name!) in Killaloe, Ontario. The most popular topping is cinnamon sugar, but you can get Nutella, maple butter, and more.",
      fr: "Les Queues de castor ont été créées en 1978 par Grant et Pam Chicken (oui, c'est leur vrai nom!) à Killaloe, Ontario. La garniture la plus populaire est le sucre à la cannelle, mais on peut avoir du Nutella, du beurre d'érable, et plus."
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is Inuktitut syllabics?",
      fr: "Qu'est-ce que les syllabiques inuktitut?"
    },
    options: {
      en: ["A writing system for Inuktitut using symbols that represent syllables", "A type of drum language", "An ancient cave writing", "A code used by fur traders"],
      fr: ["Un système d'écriture pour l'inuktitut utilisant des symboles qui représentent des syllabes", "Un type de langue de tambour", "Une écriture rupestre ancienne", "Un code utilisé par les commerçants de fourrures"]
    },
    correctIndex: 0,
    funFact: {
      en: "Inuktitut syllabics (ᐃᓄᒃᑎᑐᑦ) are based on Cree syllabics developed by missionary James Evans. The writing system is used on Canadian currency, road signs in Nunavut, and was added to Unicode in 1999.",
      fr: "Les syllabiques inuktitut (ᐃᓄᒃᑎᑐᑦ) sont basées sur les syllabiques cries développées par le missionnaire James Evans. Le système d'écriture est utilisé sur la monnaie canadienne, les panneaux routiers au Nunavut, et a été ajouté à Unicode en 1999."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is unique about Spotted Lake (Kliluk) near Osoyoos, BC?",
      fr: "Qu'est-ce qui est unique au lac Tacheté (Kliluk) près d'Osoyoos, C.-B.?"
    },
    options: {
      en: ["In summer, it forms colourful mineral spots as water evaporates", "It glows at night", "It's perfectly circular", "It's the deepest lake in BC"],
      fr: ["En été, il forme des taches minérales colorées lorsque l'eau s'évapore", "Il brille la nuit", "Il est parfaitement circulaire", "C'est le lac le plus profond de la C.-B."]
    },
    correctIndex: 0,
    funFact: {
      en: "Spotted Lake is sacred to the Syilx/Okanagan people and was used for centuries for its therapeutic minerals. It contains the highest concentration of different minerals in the world. The Syilx people regained ownership in 2001.",
      fr: "Le lac Tacheté est sacré pour le peuple Syilx/Okanagan et a été utilisé pendant des siècles pour ses minéraux thérapeutiques. Il contient la plus haute concentration de différents minéraux au monde. Le peuple Syilx en a repris possession en 2001."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'Letterkenny,' the Canadian TV show, about?",
      fr: "De quoi parle « Letterkenny », la série télévisée canadienne?"
    },
    options: {
      en: ["Rural life in a small Ontario farming community with witty, rapid-fire dialogue", "Life in a big city law firm", "A detective mystery series", "A school drama set in Newfoundland"],
      fr: ["La vie rurale dans une petite communauté agricole ontarienne avec des dialogues vifs et spirituels", "La vie dans un grand cabinet d'avocats en ville", "Une série policière mystère", "Un drame scolaire situé à Terre-Neuve"]
    },
    correctIndex: 0,
    funFact: {
      en: "Letterkenny is famous for its lightning-fast wordplay and distinctly Canadian humour. The show started as a YouTube web series and became one of CraveTV's most popular original shows.",
      fr: "Letterkenny est célèbre pour ses jeux de mots ultra-rapides et son humour distinctement canadien. La série a commencé comme une série web YouTube et est devenue l'une des émissions originales les plus populaires de CraveTV."
    }
  },
  {
    category: "history",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "The Canadian Pacific Railway, completed in 1885, was crucial to British Columbia joining Confederation.",
      fr: "Le chemin de fer Canadien Pacifique, achevé en 1885, a été crucial pour l'adhésion de la Colombie-Britannique à la Confédération."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "BC joined Confederation in 1871 with the promise of a transcontinental railway. The CPR was built largely by Chinese labourers under dangerous conditions. An estimated 600+ Chinese workers died during construction.",
      fr: "La C.-B. a rejoint la Confédération en 1871 avec la promesse d'un chemin de fer transcontinental. Le CP a été construit en grande partie par des travailleurs chinois dans des conditions dangereuses. On estime que plus de 600 travailleurs chinois sont morts pendant la construction."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What did Canadian physician Norman Bethune pioneer?",
      fr: "Qu'est-ce que le médecin canadien Norman Bethune a été pionnier?"
    },
    options: {
      en: ["Mobile blood transfusion units during the Spanish Civil War", "Heart transplant surgery", "Vaccine development", "Laser eye surgery"],
      fr: ["Des unités mobiles de transfusion sanguine pendant la guerre civile espagnole", "La chirurgie de transplantation cardiaque", "Le développement de vaccins", "La chirurgie oculaire au laser"]
    },
    correctIndex: 0,
    funFact: {
      en: "Bethune is a national hero in China, where he served with Mao's forces during WWII. He's one of the most famous Canadians in Chinese history — often more recognized there than in his home country!",
      fr: "Bethune est un héros national en Chine, où il a servi avec les forces de Mao pendant la Seconde Guerre mondiale. Il est l'un des Canadiens les plus célèbres de l'histoire chinoise — souvent plus reconnu là-bas que dans son propre pays!"
    }
  },
  {
    category: "sports",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the 'Gordie Howe hat trick' in hockey?",
      fr: "Qu'est-ce que le « tour du chapeau Gordie Howe » au hockey?"
    },
    options: {
      en: ["A goal, an assist, and a fight in the same game", "Scoring three goals", "Three penalty shots", "Playing all three periods without rest"],
      fr: ["Un but, une passe et une bagarre dans le même match", "Marquer trois buts", "Trois tirs de pénalité", "Jouer les trois périodes sans repos"]
    },
    correctIndex: 0,
    funFact: {
      en: "Named after Canadian legend Gordie Howe (from Floral, Saskatchewan), who was famous for his scoring, playmaking, AND toughness. Ironically, Howe himself only recorded two Gordie Howe hat tricks in his career!",
      fr: "Nommé d'après la légende canadienne Gordie Howe (de Floral, Saskatchewan), qui était célèbre pour ses buts, ses passes ET sa robustesse. Ironiquement, Howe lui-même n'a enregistré que deux tours du chapeau Gordie Howe dans sa carrière!"
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What are the Northern Lights (Aurora Borealis) and where in Canada can you best see them?",
      fr: "Que sont les aurores boréales et où au Canada peut-on le mieux les observer?"
    },
    options: {
      en: ["Colourful lights caused by solar particles — best seen in Yukon, NWT, and northern Manitoba", "A lighthouse in Nova Scotia", "A festival in Quebec", "An art installation in Toronto"],
      fr: ["Des lumières colorées causées par des particules solaires — mieux observées au Yukon, T.N.-O. et nord du Manitoba", "Un phare en Nouvelle-Écosse", "Un festival au Québec", "Une installation artistique à Toronto"]
    },
    correctIndex: 0,
    funFact: {
      en: "Yellowknife, NWT is called the 'Aurora Capital of North America' — you can see the Northern Lights about 240 nights per year! Churchill, Manitoba is another top viewing destination.",
      fr: "Yellowknife, T.N.-O. est appelée la « capitale des aurores d'Amérique du Nord » — on peut voir les aurores boréales environ 240 nuits par an! Churchill, Manitoba est une autre destination d'observation de premier plan."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What book series by L.M. Montgomery, set on Prince Edward Island, is a Canadian literary classic?",
      fr: "Quelle série de livres de L.M. Montgomery, située à l'Île-du-Prince-Édouard, est un classique littéraire canadien?"
    },
    options: {
      en: ["Anne of Green Gables", "Little House on the Prairie", "Charlotte's Web", "The Secret Garden"],
      fr: ["Anne aux pignons verts", "La Petite Maison dans la prairie", "Le Petit Prince", "Le Jardin secret"]
    },
    correctIndex: 0,
    funFact: {
      en: "Published in 1908, Anne of Green Gables has been translated into 36 languages. It's particularly beloved in Japan, where it's part of the school curriculum. PEI's Green Gables Heritage Place attracts tourists from around the world.",
      fr: "Publié en 1908, Anne aux pignons verts a été traduit en 36 langues. Il est particulièrement aimé au Japon, où il fait partie du programme scolaire. Le lieu patrimonial Green Gables de l'Î.-P.-É. attire des touristes du monde entier."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What does the Canadian English term 'timmies' refer to?",
      fr: "À quoi réfère le terme d'anglais canadien « timmies »?"
    },
    options: {
      en: ["Tim Hortons coffee or restaurant", "Small children", "Tiny fish", "Winter gloves"],
      fr: ["Le café ou le restaurant Tim Hortons", "De petits enfants", "De petits poissons", "Des gants d'hiver"]
    },
    correctIndex: 0,
    funFact: {
      en: "'Let's grab timmies' is heard across Canada daily. Tim Hortons has over 5,600 locations worldwide, with the majority in Canada. There are even Tim Hortons on Canadian military bases overseas!",
      fr: "« Allons chercher des timmies » s'entend partout au Canada quotidiennement. Tim Hortons a plus de 5 600 emplacements dans le monde, la majorité au Canada. Il y a même des Tim Hortons sur les bases militaires canadiennes à l'étranger!"
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the MMIW movement in Canada?",
      fr: "Qu'est-ce que le mouvement FFADA au Canada?"
    },
    options: {
      en: ["Missing and Murdered Indigenous Women (and Girls) — a crisis and advocacy movement", "A museum initiative for Indigenous works", "A music industry association", "A wildlife conservation program"],
      fr: ["Femmes et Filles Autochtones Disparues et Assassinées — une crise et un mouvement de défense des droits", "Une initiative muséale pour les œuvres autochtones", "Une association de l'industrie musicale", "Un programme de conservation de la faune"]
    },
    correctIndex: 0,
    funFact: {
      en: "A 2019 national inquiry found that Indigenous women and girls are 12 times more likely to be murdered or go missing than non-Indigenous women. The inquiry called the crisis a 'Canadian genocide.' The red dress has become a symbol of the movement.",
      fr: "Une enquête nationale de 2019 a révélé que les femmes et les filles autochtones sont 12 fois plus susceptibles d'être assassinées ou de disparaître que les femmes non autochtones. L'enquête a qualifié la crise de « génocide canadien ». La robe rouge est devenue un symbole du mouvement."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Vector Institute in Toronto focused on?",
      fr: "Sur quoi se concentre l'Institut Vector à Toronto?"
    },
    options: {
      en: ["Artificial intelligence and machine learning research", "Vaccine development", "Aerospace engineering", "Marine biology"],
      fr: ["La recherche en intelligence artificielle et en apprentissage automatique", "Le développement de vaccins", "L'ingénierie aérospatiale", "La biologie marine"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Vector Institute was co-founded by Geoffrey Hinton, the 'Godfather of AI,' who did much of his pioneering deep learning work at the University of Toronto. Toronto has become one of the world's top AI research hubs.",
      fr: "L'Institut Vector a été cofondé par Geoffrey Hinton, le « parrain de l'IA », qui a fait une grande partie de son travail pionnier en apprentissage profond à l'Université de Toronto. Toronto est devenue l'un des principaux centres de recherche en IA au monde."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'smoked meat' in Montreal's food culture?",
      fr: "Qu'est-ce que la « viande fumée » dans la culture alimentaire de Montréal?"
    },
    options: {
      en: ["Cured, smoked beef brisket — Montreal's answer to New York pastrami", "Smoked salmon", "Bacon", "BBQ ribs"],
      fr: ["Du brisket de bœuf salé et fumé — la réponse de Montréal au pastrami new-yorkais", "Du saumon fumé", "Du bacon", "Des côtes levées BBQ"]
    },
    correctIndex: 0,
    funFact: {
      en: "Schwartz's Deli on Saint-Laurent Boulevard has been serving Montreal smoked meat since 1928. The debate between Schwartz's and the Main Deli next door is one of Montreal's great food rivalries.",
      fr: "Le Schwartz's Deli sur le boulevard Saint-Laurent sert de la viande fumée de Montréal depuis 1928. Le débat entre Schwartz's et le Main Deli d'à côté est l'une des grandes rivalités alimentaires de Montréal."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the significance of the Battle of Dieppe in 1942?",
      fr: "Quelle était la signification du raid de Dieppe en 1942?"
    },
    options: {
      en: ["A disastrous Allied raid on occupied France — mainly Canadian forces suffered heavy losses", "A Canadian naval victory", "A Pacific campaign success", "An Arctic convoy mission"],
      fr: ["Un raid allié désastreux sur la France occupée — principalement les forces canadiennes ont subi de lourdes pertes", "Une victoire navale canadienne", "Un succès de campagne du Pacifique", "Une mission de convoi arctique"]
    },
    correctIndex: 0,
    funFact: {
      en: "Of the 6,086 men who made it ashore at Dieppe, 3,623 were killed, wounded, or captured — most of them Canadian. The hard lessons learned at Dieppe helped plan the successful D-Day invasion two years later.",
      fr: "Sur les 6 086 hommes qui ont débarqué à Dieppe, 3 623 ont été tués, blessés ou capturés — la plupart étaient canadiens. Les dures leçons apprises à Dieppe ont aidé à planifier l'invasion réussie du jour J deux ans plus tard."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Nahanni National Park Reserve in NWT famous for?",
      fr: "Pourquoi la réserve de parc national Nahanni dans les T.N.-O. est-elle célèbre?"
    },
    options: {
      en: ["Virginia Falls (twice the height of Niagara) and deep river canyons", "Polar bear habitat", "Ancient cave paintings", "Hot springs only"],
      fr: ["Les chutes Virginia (deux fois la hauteur du Niagara) et de profondes gorges fluviales", "L'habitat des ours polaires", "D'anciennes peintures rupestres", "Seulement des sources chaudes"]
    },
    correctIndex: 0,
    funFact: {
      en: "Nahanni was one of the first UNESCO World Heritage Sites (1978). Virginia Falls drops 96 metres — nearly twice the height of Niagara Falls. The park has legends of lost gold mines and headless prospectors.",
      fr: "Nahanni a été l'un des premiers sites du patrimoine mondial de l'UNESCO (1978). Les chutes Virginia tombent de 96 mètres — presque deux fois la hauteur des chutes du Niagara. Le parc a des légendes de mines d'or perdues et de prospecteurs décapités."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the 'Two-Four' in Canadian slang?",
      fr: "Qu'est-ce qu'un « deux-quatre » dans l'argot canadien?"
    },
    options: {
      en: ["A case of 24 beers", "Victoria Day weekend (May 24)", "Both of the above — it means both!", "A $20 bill"],
      fr: ["Une caisse de 24 bières", "La fin de semaine de la fête de Victoria (24 mai)", "Les deux — ça signifie les deux!", "Un billet de 20 $"]
    },
    correctIndex: 2,
    funFact: {
      en: "A 'two-four' is a case of 24 beers AND the Victoria Day long weekend (May 2-4). Grabbing a two-four for the two-four weekend is a beloved Canadian tradition that marks the unofficial start of summer.",
      fr: "Un « deux-quatre » est une caisse de 24 bières ET la longue fin de semaine de la fête de Victoria (24 mai). Acheter un deux-quatre pour la fin de semaine du deux-quatre est une tradition canadienne bien-aimée qui marque le début non officiel de l'été."
    }
  },
  {
    category: "language",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What does 'loonie' and 'toonie' refer to in Canada?",
      fr: "À quoi réfèrent « huard » et « toonie » au Canada?"
    },
    options: {
      en: ["The $1 and $2 coins", "Cartoon characters", "Types of fish", "Playground games"],
      fr: ["Les pièces de 1 $ et 2 $", "Des personnages de dessins animés", "Des types de poissons", "Des jeux de cour de récréation"]
    },
    correctIndex: 0,
    funFact: {
      en: "The loonie (1987) has a loon bird on it. When the $2 coin came out in 1996, Canadians instantly dubbed it the 'toonie' (two + loonie). Canada eliminated the penny in 2013!",
      fr: "Le huard (1987) a un plongeon huard dessus. Quand la pièce de 2 $ est sortie en 1996, les Canadiens l'ont instantanément surnommée le « toonie » (two + loonie). Le Canada a éliminé le sou en 2013!"
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What Canadian swimmer won 3 gold medals at the 2024 Paris Olympics?",
      fr: "Quel nageur canadien a remporté 3 médailles d'or aux Jeux olympiques de Paris 2024?"
    },
    options: {
      en: ["Summer McIntosh", "Penny Oleksiak", "Kylie Masse", "Maggie Mac Neil"],
      fr: ["Summer McIntosh", "Penny Oleksiak", "Kylie Masse", "Maggie Mac Neil"]
    },
    correctIndex: 0,
    funFact: {
      en: "Summer McIntosh from Toronto was just 17 years old at the 2024 Paris Olympics, where she won 3 gold medals and set multiple world records. She's considered one of the greatest swimmers of her generation.",
      fr: "Summer McIntosh de Toronto n'avait que 17 ans aux Jeux olympiques de Paris 2024, où elle a remporté 3 médailles d'or et établi de multiples records du monde. Elle est considérée comme l'une des plus grandes nageuses de sa génération."
    }
  },

  // ═══════════════════════════════════════════
  // BATCH 2 — Reaching 500
  // ═══════════════════════════════════════════

  // HISTORY — more questions
  {
    category: "history",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which famous fort in Ontario was a key military post during the War of 1812?",
      fr: "Quel célèbre fort en Ontario était un poste militaire clé pendant la guerre de 1812?"
    },
    options: {
      en: ["Fort York (Toronto)", "Fort Henry (Kingston)", "Fort Erie", "Fort William"],
      fr: ["Fort York (Toronto)", "Fort Henry (Kingston)", "Fort Erie", "Fort William"]
    },
    correctIndex: 0,
    funFact: {
      en: "The War of 1812 was fought between British/Canadian forces and the United States. The burning of York (now Toronto) led to the American burning of Washington, D.C. — including the White House!",
      fr: "La guerre de 1812 a été menée entre les forces britanniques/canadiennes et les États-Unis. L'incendie de York (maintenant Toronto) a mené à l'incendie américain de Washington, D.C. — y compris la Maison-Blanche!"
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What was the 'National Policy' introduced by Sir John A. Macdonald in 1879?",
      fr: "Qu'était la « Politique nationale » introduite par Sir John A. Macdonald en 1879?"
    },
    options: {
      en: ["Protective tariffs to build Canadian industry, plus railway expansion and western settlement", "A military alliance", "A language policy", "An immigration ban"],
      fr: ["Des tarifs protecteurs pour bâtir l'industrie canadienne, plus l'expansion ferroviaire et la colonisation de l'Ouest", "Une alliance militaire", "Une politique linguistique", "Une interdiction d'immigration"]
    },
    correctIndex: 0,
    funFact: {
      en: "The National Policy had three pillars: high tariffs on imports, building the CPR railway, and settling the West. It shaped Canada's economic development for decades but was controversial in the western provinces.",
      fr: "La Politique nationale avait trois piliers : des tarifs élevés sur les importations, la construction du chemin de fer CP et la colonisation de l'Ouest. Elle a façonné le développement économique du Canada pendant des décennies mais était controversée dans les provinces de l'Ouest."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the Manitoba Schools Question of the 1890s?",
      fr: "Qu'était la question des écoles du Manitoba des années 1890?"
    },
    options: {
      en: ["A political crisis over French Catholic school rights in Manitoba", "A debate about school construction", "A question on university funding", "A literacy test controversy"],
      fr: ["Une crise politique sur les droits scolaires catholiques français au Manitoba", "Un débat sur la construction d'écoles", "Une question sur le financement universitaire", "Une controverse sur les tests d'alphabétisation"]
    },
    correctIndex: 0,
    funFact: {
      en: "Manitoba abolished publicly funded Catholic schools in 1890, outraging French Canadians. The crisis nearly tore the country apart and foreshadowed the ongoing tensions between English and French Canada.",
      fr: "Le Manitoba a aboli les écoles catholiques financées par l'État en 1890, outrageant les Canadiens français. La crise a failli déchirer le pays et a préfiguré les tensions continues entre le Canada anglais et français."
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "Canada gained full control of its own Constitution in 1982, more than 100 years after Confederation.",
      fr: "Le Canada a obtenu le plein contrôle de sa propre Constitution en 1982, plus de 100 ans après la Confédération."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Before 1982, Canada needed the British Parliament to amend its Constitution. The 'patriation' was opposed by Quebec, which has never formally signed the Constitution — a source of ongoing political tension.",
      fr: "Avant 1982, le Canada avait besoin du Parlement britannique pour modifier sa Constitution. Le « rapatriement » a été opposé par le Québec, qui n'a jamais formellement signé la Constitution — une source de tension politique continue."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the Meech Lake Accord?",
      fr: "Qu'était l'Accord du lac Meech?"
    },
    options: {
      en: ["A failed 1987 constitutional amendment to recognize Quebec as a 'distinct society'", "A trade deal with the US", "An environmental protection agreement", "A military pact"],
      fr: ["Un amendement constitutionnel raté de 1987 pour reconnaître le Québec comme « société distincte »", "Un accord commercial avec les États-Unis", "Un accord de protection environnementale", "Un pacte militaire"]
    },
    correctIndex: 0,
    funFact: {
      en: "Meech Lake failed in 1990 when Manitoba and Newfoundland didn't ratify it. Elijah Harper, a Cree MLA in Manitoba, blocked the vote because Indigenous peoples weren't consulted. Its failure reinvigorated Quebec separatism.",
      fr: "L'Accord du lac Meech a échoué en 1990 quand le Manitoba et Terre-Neuve ne l'ont pas ratifié. Elijah Harper, un député cri du Manitoba, a bloqué le vote parce que les peuples autochtones n'avaient pas été consultés. Son échec a revigoré le séparatisme québécois."
    }
  },

  // GEOGRAPHY — more
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the capital city of Alberta?",
      fr: "Quelle est la capitale de l'Alberta?"
    },
    options: {
      en: ["Edmonton", "Calgary", "Red Deer", "Lethbridge"],
      fr: ["Edmonton", "Calgary", "Red Deer", "Lethbridge"]
    },
    correctIndex: 0,
    funFact: {
      en: "Edmonton is Canada's northernmost major city and is known as 'Festival City' for its many festivals. West Edmonton Mall was once the world's largest shopping mall!",
      fr: "Edmonton est la grande ville la plus au nord du Canada et est connue comme la « ville des festivals » pour ses nombreux festivals. Le West Edmonton Mall a été autrefois le plus grand centre commercial au monde!"
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "Saskatchewan is known for its perfectly flat prairies and is often called the 'breadbasket of Canada.'",
      fr: "La Saskatchewan est connue pour ses prairies parfaitement plates et est souvent appelée le « grenier du Canada »."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Saskatchewan produces more wheat than any other province and is a major exporter of canola, lentils, and potash. The southern prairies are flat, but the northern half is covered in boreal forest and lakes.",
      fr: "La Saskatchewan produit plus de blé que toute autre province et est un exportateur majeur de canola, de lentilles et de potasse. Les prairies du sud sont plates, mais la moitié nord est couverte de forêt boréale et de lacs."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Cabot Trail, one of Canada's most scenic drives?",
      fr: "Qu'est-ce que le Cabot Trail, l'une des routes les plus pittoresques du Canada?"
    },
    options: {
      en: ["A 298-km highway loop on Cape Breton Island, Nova Scotia", "A hiking path in Banff", "A boat route in BC", "A snowmobile trail in Quebec"],
      fr: ["Une boucle routière de 298 km sur l'île du Cap-Breton, Nouvelle-Écosse", "Un sentier de randonnée à Banff", "Une route nautique en C.-B.", "Un sentier de motoneige au Québec"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Cabot Trail winds through Cape Breton Highlands National Park with stunning ocean views, Celtic-influenced communities, and some of the most dramatic coastal scenery in North America.",
      fr: "Le Cabot Trail serpente à travers le parc national des Hautes-Terres-du-Cap-Breton avec des vues océaniques époustouflantes, des communautés d'influence celtique et certains des paysages côtiers les plus spectaculaires d'Amérique du Nord."
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "Which Canadian territory has more people than both other territories combined?",
      fr: "Quel territoire canadien a plus d'habitants que les deux autres territoires réunis?"
    },
    options: {
      en: ["Yukon", "Northwest Territories", "Nunavut", "None — they're roughly equal"],
      fr: ["Yukon", "Territoires du Nord-Ouest", "Nunavut", "Aucun — ils sont à peu près égaux"]
    },
    correctIndex: 0,
    funFact: {
      en: "Yukon has about 44,000 people, NWT about 45,000, and Nunavut about 40,000 — actually they're quite close! All three territories combined have fewer people than most Canadian cities.",
      fr: "Le Yukon compte environ 44 000 habitants, les T.N.-O. environ 45 000, et le Nunavut environ 40 000 — en fait, ils sont assez proches! Les trois territoires combinés comptent moins d'habitants que la plupart des villes canadiennes."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What are the Thousand Islands?",
      fr: "Que sont les Mille-Îles?"
    },
    options: {
      en: ["An archipelago of over 1,800 islands in the St. Lawrence River between Ontario and New York", "Islands off the coast of BC", "A lake in Manitoba", "Islands in Hudson Bay"],
      fr: ["Un archipel de plus de 1 800 îles dans le fleuve Saint-Laurent entre l'Ontario et New York", "Des îles au large de la C.-B.", "Un lac au Manitoba", "Des îles dans la baie d'Hudson"]
    },
    correctIndex: 0,
    funFact: {
      en: "Despite the name, there are actually 1,864 islands! Thousand Islands salad dressing was reportedly created in the region. Boldt Castle, built on Heart Island, is a famous attraction.",
      fr: "Malgré le nom, il y a en fait 1 864 îles! La vinaigrette Mille-Îles aurait été créée dans la région. Le château Boldt, construit sur Heart Island, est une attraction célèbre."
    }
  },

  // CULTURE — more
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian musician is known as 'The Man in Black' and had hits like 'Summer of '69'?",
      fr: "Quel musicien canadien est connu pour ses succès comme « Summer of '69 »?"
    },
    options: {
      en: ["Bryan Adams", "Johnny Cash", "Neil Young", "Gordon Lightfoot"],
      fr: ["Bryan Adams", "Johnny Cash", "Neil Young", "Gordon Lightfoot"]
    },
    correctIndex: 0,
    funFact: {
      en: "Bryan Adams from Kingston, Ontario has sold over 75 million records. 'Everything I Do (I Do It for You)' spent 16 consecutive weeks at #1 in the UK — a record at the time.",
      fr: "Bryan Adams de Kingston, Ontario a vendu plus de 75 millions de disques. « Everything I Do (I Do It for You) » est resté 16 semaines consécutives au #1 au Royaume-Uni — un record à l'époque."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'Hockey Night in Canada'?",
      fr: "Qu'est-ce que « La Soirée du hockey »?"
    },
    options: {
      en: ["A legendary weekly TV broadcast of NHL hockey games, running since 1952", "A national holiday", "An annual hockey tournament", "A hockey-themed restaurant chain"],
      fr: ["Une légendaire émission télévisée hebdomadaire de matchs de la LNH, diffusée depuis 1952", "Un jour férié national", "Un tournoi de hockey annuel", "Une chaîne de restaurants à thème hockey"]
    },
    correctIndex: 0,
    funFact: {
      en: "Hockey Night in Canada is the longest-running TV sports broadcast in the world. Its theme song was so beloved it was called 'Canada's second national anthem' until it was replaced in 2008.",
      fr: "La Soirée du hockey est la plus ancienne émission de sport télévisée au monde. Sa chanson thème était si aimée qu'elle était appelée « le deuxième hymne national du Canada » jusqu'à ce qu'elle soit remplacée en 2008."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the Stratford Festival?",
      fr: "Qu'est-ce que le Festival de Stratford?"
    },
    options: {
      en: ["A world-renowned theatre festival in Stratford, Ontario, specializing in Shakespeare", "A music festival in Nova Scotia", "A film festival in Vancouver", "A food festival in Quebec"],
      fr: ["Un festival de théâtre de renommée mondiale à Stratford, Ontario, spécialisé en Shakespeare", "Un festival de musique en Nouvelle-Écosse", "Un festival de cinéma à Vancouver", "Un festival gastronomique au Québec"]
    },
    correctIndex: 0,
    funFact: {
      en: "Founded in 1953, the Stratford Festival is North America's largest classical repertory theatre. It attracts over 500,000 visitors annually to a town of just 33,000 people.",
      fr: "Fondé en 1953, le Festival de Stratford est le plus grand théâtre de répertoire classique d'Amérique du Nord. Il attire plus de 500 000 visiteurs par an dans une ville de seulement 33 000 habitants."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "Jim Carrey, Mike Myers, and Dan Aykroyd are all Canadian comedians.",
      fr: "Jim Carrey, Mike Myers et Dan Aykroyd sont tous des comédiens canadiens."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Jim Carrey is from Newmarket, Ontario; Mike Myers from Scarborough, Ontario; and Dan Aykroyd from Ottawa. Canada has an outsized influence on comedy — SCTV, SNL, and many Hollywood comedies feature Canadian talent.",
      fr: "Jim Carrey est de Newmarket, Ontario; Mike Myers de Scarborough, Ontario; et Dan Aykroyd d'Ottawa. Le Canada a une influence disproportionnée sur la comédie — SCTV, SNL et de nombreuses comédies hollywoodiennes mettent en vedette des talents canadiens."
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Toronto International Film Festival (TIFF) known for?",
      fr: "Pour quoi le Festival international du film de Toronto (TIFF) est-il connu?"
    },
    options: {
      en: ["It's one of the top film festivals in the world, often launching Oscar contenders", "It's a horror movie festival", "It only shows Canadian films", "It's a student film competition"],
      fr: ["C'est l'un des plus grands festivals de cinéma au monde, lançant souvent des candidats aux Oscars", "C'est un festival de films d'horreur", "Il ne montre que des films canadiens", "C'est un concours de films étudiants"]
    },
    correctIndex: 0,
    funFact: {
      en: "TIFF's People's Choice Award is considered the strongest predictor of Oscar Best Picture winners. Films like 'Slumdog Millionaire,' 'The King's Speech,' and 'Nomadland' all won TIFF before winning the Oscar.",
      fr: "Le prix du public du TIFF est considéré comme le meilleur prédicteur des gagnants de l'Oscar du meilleur film. Des films comme « Slumdog Millionaire », « Le Discours d'un roi » et « Nomadland » ont tous gagné au TIFF avant de remporter l'Oscar."
    }
  },

  // LANGUAGE — more
  {
    category: "language",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What do Canadians mean when they say 'pop'?",
      fr: "Que veulent dire les Canadiens quand ils disent « pop »?"
    },
    options: {
      en: ["Soft drink / soda", "Popcorn", "Music genre", "Father"],
      fr: ["Boisson gazeuse", "Popcorn", "Genre musical", "Père"]
    },
    correctIndex: 0,
    funFact: {
      en: "Most Canadians say 'pop' while Americans tend to say 'soda' (or 'coke' in the South). This is one of the clearest linguistic markers of the US-Canada border!",
      fr: "La plupart des Canadiens disent « pop » tandis que les Américains tendent à dire « soda » (ou « coke » dans le Sud). C'est l'un des marqueurs linguistiques les plus clairs de la frontière Canada-États-Unis!"
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What does the Canadian expression 'out for a rip' mean?",
      fr: "Que signifie l'expression canadienne « out for a rip »?"
    },
    options: {
      en: ["Going for a drive or ride (often on a snowmobile or ATV)", "Going fishing", "Getting groceries", "Going to the gym"],
      fr: ["Faire un tour en voiture ou en véhicule (souvent en motoneige ou VTT)", "Aller à la pêche", "Faire l'épicerie", "Aller au gym"]
    },
    correctIndex: 0,
    funFact: {
      en: "The phrase became famous from the 2014 viral video 'Out for a Rip' — a comedic celebration of rural Canadian culture featuring snowmobiling, hockey, and a lot of 'eh's.",
      fr: "L'expression est devenue célèbre grâce à la vidéo virale de 2014 « Out for a Rip » — une célébration comique de la culture rurale canadienne mettant en vedette la motoneige, le hockey et beaucoup de « eh »."
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What unique features distinguish Newfoundland English from other Canadian dialects?",
      fr: "Quelles caractéristiques uniques distinguent l'anglais terre-neuvien des autres dialectes canadiens?"
    },
    options: {
      en: ["Irish/West Country English influences, unique vocabulary, and distinct pronunciation", "It's identical to standard Canadian English", "It sounds more American than Canadian", "It uses many French words"],
      fr: ["Des influences de l'anglais irlandais/West Country, un vocabulaire unique et une prononciation distincte", "Il est identique à l'anglais canadien standard", "Il semble plus américain que canadien", "Il utilise beaucoup de mots français"]
    },
    correctIndex: 0,
    funFact: {
      en: "Newfoundland English is so distinctive it has its own dictionary! Words like 'b'y' (buddy), 'luh' (look), and 'after' (indicating past tense, like Irish English) make it one of the most unique dialects in North America.",
      fr: "L'anglais terre-neuvien est si distinctif qu'il a son propre dictionnaire! Des mots comme « b'y » (copain), « luh » (regarde) et « after » (indiquant le passé, comme l'anglais irlandais) en font l'un des dialectes les plus uniques d'Amérique du Nord."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "All Canadian product packaging is required by law to be in both English and French.",
      fr: "Tous les emballages de produits canadiens sont requis par la loi d'être en anglais et en français."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "The Consumer Packaging and Labelling Act requires bilingual labelling on all packaged goods sold in Canada. This is why Canadian products have more text on them than American equivalents!",
      fr: "La Loi sur l'emballage et l'étiquetage des produits de consommation exige un étiquetage bilingue sur tous les produits emballés vendus au Canada. C'est pourquoi les produits canadiens ont plus de texte que leurs équivalents américains!"
    }
  },
  {
    category: "language",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What letter of the alphabet do Canadians pronounce differently than Americans?",
      fr: "Quelle lettre de l'alphabet les Canadiens prononcent-ils différemment des Américains?"
    },
    options: {
      en: ["Z (Canadians say 'zed', Americans say 'zee')", "A", "R", "H"],
      fr: ["Z (les Canadiens disent « zed », les Américains disent « zee »)", "A", "R", "H"]
    },
    correctIndex: 0,
    funFact: {
      en: "Saying 'zed' instead of 'zee' is one of the easiest ways to identify a Canadian. This British pronunciation has been standard in Canada since Confederation.",
      fr: "Dire « zed » au lieu de « zee » est l'une des façons les plus faciles d'identifier un Canadien. Cette prononciation britannique est standard au Canada depuis la Confédération."
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'Chiac,' a unique language variety found in New Brunswick?",
      fr: "Qu'est-ce que le « chiac », une variété linguistique unique du Nouveau-Brunswick?"
    },
    options: {
      en: ["A blend of Acadian French and English spoken in southeastern New Brunswick", "A First Nations language", "A creole language from Halifax", "A French dialect from Quebec"],
      fr: ["Un mélange de français acadien et d'anglais parlé dans le sud-est du Nouveau-Brunswick", "Une langue des Premières Nations", "Une langue créole d'Halifax", "Un dialecte français du Québec"]
    },
    correctIndex: 0,
    funFact: {
      en: "Chiac speakers seamlessly switch between French and English mid-sentence. It's concentrated around Moncton and Shediac, NB. The name likely comes from 'Shédiac.' It's a living example of language mixing in bilingual communities.",
      fr: "Les locuteurs du chiac passent sans effort du français à l'anglais en pleine phrase. Il est concentré autour de Moncton et Shédiac, N.-B. Le nom vient probablement de « Shédiac ». C'est un exemple vivant du mélange linguistique dans les communautés bilingues."
    }
  },

  // SPORTS — more
  {
    category: "sports",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which sport do Canadians play on frozen ponds, rivers, and backyard rinks across the country?",
      fr: "Quel sport les Canadiens pratiquent-ils sur les étangs gelés, les rivières et les patinoires de cour à travers le pays?"
    },
    options: {
      en: ["Hockey (shinny)", "Cricket", "Baseball", "Tennis"],
      fr: ["Hockey (shinny)", "Cricket", "Baseball", "Tennis"]
    },
    correctIndex: 0,
    funFact: {
      en: "'Shinny' is the Canadian term for informal, pick-up hockey. The Rideau Canal in Ottawa becomes the world's largest skating rink each winter at 7.8 km — and people play shinny right on it!",
      fr: "« Shinny » est le terme canadien pour le hockey informel. Le canal Rideau à Ottawa devient la plus grande patinoire du monde chaque hiver avec 7,8 km — et les gens y jouent au shinny!"
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian city hosts the annual 'Polar Bear Swim' on New Year's Day?",
      fr: "Quelle ville canadienne accueille la « nage de l'ours polaire » annuelle le jour de l'An?"
    },
    options: {
      en: ["Vancouver (English Bay)", "Toronto", "Halifax", "Winnipeg"],
      fr: ["Vancouver (English Bay)", "Toronto", "Halifax", "Winnipeg"]
    },
    correctIndex: 0,
    funFact: {
      en: "Vancouver's Polar Bear Swim has been running since 1920, making it one of the oldest in the world. Over 2,000 swimmers brave the frigid Pacific waters on January 1st every year.",
      fr: "La nage de l'ours polaire de Vancouver existe depuis 1920, ce qui en fait l'une des plus anciennes au monde. Plus de 2 000 nageurs bravent les eaux glaciales du Pacifique le 1er janvier chaque année."
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the 'Heritage Classic' in Canadian hockey?",
      fr: "Qu'est-ce que le « Classique Héritage » dans le hockey canadien?"
    },
    options: {
      en: ["An NHL outdoor hockey game, first held in Edmonton in 2003", "A youth hockey tournament", "An award for long-serving players", "A hall of fame ceremony"],
      fr: ["Un match de hockey extérieur de la LNH, tenu pour la première fois à Edmonton en 2003", "Un tournoi de hockey junior", "Un prix pour les joueurs de longue date", "Une cérémonie du temple de la renommée"]
    },
    correctIndex: 0,
    funFact: {
      en: "The first Heritage Classic in 2003 drew 57,167 fans to Commonwealth Stadium in Edmonton at -18°C! It featured the Oilers vs. Canadiens and included a legends game with Wayne Gretzky.",
      fr: "Le premier Classique Héritage en 2003 a attiré 57 167 fans au Commonwealth Stadium d'Edmonton à -18°C! Il mettait en vedette les Oilers contre les Canadiens et comprenait un match de légendes avec Wayne Gretzky."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Andre De Grasse, the Canadian sprinter, won gold in which event at the 2020 Tokyo Olympics?",
      fr: "Andre De Grasse, le sprinter canadien, a remporté l'or dans quelle épreuve aux Jeux olympiques de Tokyo 2020?"
    },
    options: {
      en: ["200 metres", "100 metres", "400 metres", "4x100 relay"],
      fr: ["200 mètres", "100 mètres", "400 mètres", "Relais 4x100"]
    },
    correctIndex: 0,
    funFact: {
      en: "De Grasse from Scarborough, Ontario won gold in the 200m and bronze in the 100m at Tokyo. He's continued Canada's proud tradition of world-class sprinters from Donovan Bailey to Ben Johnson.",
      fr: "De Grasse de Scarborough, Ontario a remporté l'or au 200m et le bronze au 100m à Tokyo. Il a poursuivi la fière tradition canadienne de sprinters de classe mondiale, de Donovan Bailey à Ben Johnson."
    }
  },
  {
    category: "sports",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "The Canadian Football League (CFL) uses a larger field than the NFL.",
      fr: "La Ligue canadienne de football (LCF) utilise un terrain plus grand que la NFL."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "A CFL field is 150 yards long (vs. 100 in NFL), 65 yards wide (vs. 53⅓), and has deeper end zones. The CFL also has 3 downs instead of 4, 12 players per side, and a longer play clock!",
      fr: "Un terrain de la LCF fait 150 verges de long (contre 100 dans la NFL), 65 verges de large (contre 53⅓), et a des zones de but plus profondes. La LCF a aussi 3 essais au lieu de 4, 12 joueurs par côté, et un chronomètre de jeu plus long!"
    }
  },

  // INDIGENOUS — more
  {
    category: "indigenous",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What traditional dwelling is associated with Plains First Nations peoples?",
      fr: "Quelle habitation traditionnelle est associée aux peuples des Premières Nations des Plaines?"
    },
    options: {
      en: ["Tipi (teepee)", "Igloo", "Longhouse", "Log cabin"],
      fr: ["Tipi", "Igloo", "Maison longue", "Cabane en rondins"]
    },
    correctIndex: 0,
    funFact: {
      en: "The tipi was perfectly designed for the nomadic Plains lifestyle — it could be set up in under an hour, was warm in winter and cool in summer, and could withstand prairie winds. The design is an engineering marvel.",
      fr: "Le tipi était parfaitement conçu pour le mode de vie nomade des Plaines — il pouvait être monté en moins d'une heure, était chaud en hiver et frais en été, et pouvait résister aux vents des prairies. Le design est une merveille d'ingénierie."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the significance of the Wampum Belt in Eastern Woodland Indigenous cultures?",
      fr: "Quelle est la signification de la ceinture de wampum dans les cultures autochtones des forêts de l'Est?"
    },
    options: {
      en: ["It recorded treaties, agreements, and important historical events", "It was used as currency only", "It was a decorative garment", "It predicted the weather"],
      fr: ["Elle enregistrait les traités, les accords et les événements historiques importants", "Elle n'était utilisée que comme monnaie", "C'était un vêtement décoratif", "Elle prédisait la météo"]
    },
    correctIndex: 0,
    funFact: {
      en: "Wampum belts made of shell beads serve as living documents — they encode treaties and can be 'read' by knowledge keepers. They predate European contact and represent some of North America's earliest diplomatic records.",
      fr: "Les ceintures de wampum faites de perles de coquillage servent de documents vivants — elles encodent des traités et peuvent être « lues » par les gardiens du savoir. Elles sont antérieures au contact européen et représentent certains des premiers documents diplomatiques d'Amérique du Nord."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What are the 'numbered treaties' in Canadian history?",
      fr: "Que sont les « traités numérotés » dans l'histoire du Canada?"
    },
    options: {
      en: ["Eleven treaties signed between 1871-1921 between the Crown and First Nations peoples covering most of Western and Northern Canada", "Trade agreements between provinces", "Alliances with European countries", "Land sale contracts between settlers"],
      fr: ["Onze traités signés entre 1871-1921 entre la Couronne et les peuples des Premières Nations couvrant la majeure partie de l'Ouest et du Nord du Canada", "Des accords commerciaux entre provinces", "Des alliances avec des pays européens", "Des contrats de vente de terres entre colons"]
    },
    correctIndex: 0,
    funFact: {
      en: "The numbered treaties cover about half of Canada's land area. First Nations understood them as agreements to share the land, while the Crown treated them as land surrenders — this fundamental disagreement remains unresolved.",
      fr: "Les traités numérotés couvrent environ la moitié de la superficie du Canada. Les Premières Nations les comprenaient comme des accords de partage des terres, tandis que la Couronne les traitait comme des cessions de terres — ce désaccord fondamental reste non résolu."
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is bannock bread's significance in both Indigenous and settler Canadian cultures?",
      fr: "Quelle est la signification du pain bannock dans les cultures autochtones et coloniales canadiennes?"
    },
    options: {
      en: ["A fried or baked flatbread that became a survival food and cultural bridge", "A ceremonial-only bread", "A European import never adopted by Indigenous peoples", "A modern invention"],
      fr: ["Un pain plat frit ou cuit qui est devenu un aliment de survie et un pont culturel", "Un pain uniquement cérémoniel", "Une importation européenne jamais adoptée par les peuples autochtones", "Une invention moderne"]
    },
    correctIndex: 0,
    funFact: {
      en: "While bannock has Scottish roots, it was widely adopted across Indigenous communities during the fur trade era. Today it's served at pow wows, in restaurants, and remains a comfort food that bridges cultures across Canada.",
      fr: "Bien que le bannock ait des racines écossaises, il a été largement adopté dans les communautés autochtones pendant l'ère du commerce de la fourrure. Aujourd'hui, il est servi aux pow-wow, dans les restaurants, et reste un aliment réconfortant qui relie les cultures à travers le Canada."
    }
  },
  {
    category: "indigenous",
    difficulty: "hard",
    type: "tf",
    question: {
      en: "The Haida Gwaii archipelago in BC was known as the 'Queen Charlotte Islands' until the Haida name was officially restored in 2010.",
      fr: "L'archipel Haida Gwaii en C.-B. était connu sous le nom d'« îles de la Reine-Charlotte » jusqu'à ce que le nom haïda soit officiellement rétabli en 2010."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Haida Gwaii means 'Islands of the Haida people.' The Haida are master carvers known for their distinctive art style. The islands are sometimes called 'the Galapagos of the North' for their unique biodiversity.",
      fr: "Haida Gwaii signifie « îles du peuple haïda ». Les Haïdas sont des sculpteurs maîtres connus pour leur style artistique distinctif. Les îles sont parfois appelées « les Galapagos du Nord » pour leur biodiversité unique."
    }
  },

  // SCIENCE — more
  {
    category: "science",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which life-saving device did Canadian John Chicken invent in 1931?",
      fr: "Quel dispositif de sauvetage le Canadien John Chicken a-t-il inventé en 1931?"
    },
    options: {
      en: ["The modern foghorn", "The life jacket", "The fire escape", "The parachute"],
      fr: ["La corne de brume moderne", "Le gilet de sauvetage", "L'escalier de secours", "Le parachute"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canada's maritime heritage drove many safety innovations. Robert Chicken (not John — it was Robert Chicken who improved foghorn technology). Canada's fog-prone coastlines demanded better warning systems.",
      fr: "Le patrimoine maritime du Canada a stimulé de nombreuses innovations en matière de sécurité. Les côtes brumeuses du Canada exigeaient de meilleurs systèmes d'avertissement."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is CANDU, a Canadian nuclear technology exported worldwide?",
      fr: "Qu'est-ce que le CANDU, une technologie nucléaire canadienne exportée dans le monde entier?"
    },
    options: {
      en: ["A pressurized heavy-water nuclear reactor design", "A satellite system", "A type of solar panel", "A wind turbine design"],
      fr: ["Un design de réacteur nucléaire à eau lourde pressurisée", "Un système de satellite", "Un type de panneau solaire", "Un design d'éolienne"]
    },
    correctIndex: 0,
    funFact: {
      en: "CANDU stands for 'Canada Deuterium Uranium.' It's unique because it uses natural uranium fuel and heavy water as a moderator. CANDU reactors operate in seven countries including India, China, and Romania.",
      fr: "CANDU signifie « Canada Deuterium Uranium ». Il est unique car il utilise du combustible d'uranium naturel et de l'eau lourde comme modérateur. Les réacteurs CANDU fonctionnent dans sept pays dont l'Inde, la Chine et la Roumanie."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What did Canadian Geoffrey Hinton pioneer, earning him the 2018 Turing Award?",
      fr: "Qu'est-ce que le Canadien Geoffrey Hinton a été pionnier, lui valant le prix Turing 2018?"
    },
    options: {
      en: ["Deep learning and neural networks (foundational AI research)", "Quantum computing", "Genetic engineering", "Robotics"],
      fr: ["L'apprentissage profond et les réseaux de neurones (recherche fondamentale en IA)", "L'informatique quantique", "Le génie génétique", "La robotique"]
    },
    correctIndex: 0,
    funFact: {
      en: "Geoffrey Hinton did decades of pioneering work at the University of Toronto. His breakthroughs in deep learning underpin modern AI systems from ChatGPT to self-driving cars. He's often called the 'Godfather of AI.'",
      fr: "Geoffrey Hinton a fait des décennies de travail pionnier à l'Université de Toronto. Ses percées en apprentissage profond sous-tendent les systèmes d'IA modernes, de ChatGPT aux voitures autonomes. Il est souvent appelé le « parrain de l'IA »."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "tf",
    question: {
      en: "The pacemaker for the heart was co-invented by Canadian John Hopps.",
      fr: "Le stimulateur cardiaque a été co-inventé par le Canadien John Hopps."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "John Hopps built the first external cardiac pacemaker in 1950 at the National Research Council of Canada. It was too large to implant, but it paved the way for modern implantable pacemakers. Ironically, Hopps himself later needed a pacemaker!",
      fr: "John Hopps a construit le premier stimulateur cardiaque externe en 1950 au Conseil national de recherches du Canada. Il était trop gros pour être implanté, mais il a ouvert la voie aux stimulateurs implantables modernes. Ironiquement, Hopps lui-même a eu besoin d'un stimulateur par la suite!"
    }
  },
  {
    category: "science",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "Which Canadian-born actor and inventor developed technology that helped the hearing impaired?",
      fr: "Quel acteur et inventeur né au Canada a développé une technologie qui a aidé les malentendants?"
    },
    options: {
      en: ["Alexander Graham Bell (who invented the telephone for this purpose)", "Keanu Reeves", "William Shatner", "John Chicken"],
      fr: ["Alexander Graham Bell (qui a inventé le téléphone dans ce but)", "Keanu Reeves", "William Shatner", "John Chicken"]
    },
    correctIndex: 0,
    funFact: {
      en: "Bell's mother and wife were both deaf, which motivated his work in acoustics. He originally invented the telephone as a tool to help deaf people communicate. His lab in Brantford, Ontario is now a museum.",
      fr: "La mère et la femme de Bell étaient toutes deux sourdes, ce qui a motivé son travail en acoustique. Il a initialement inventé le téléphone comme outil pour aider les personnes sourdes à communiquer. Son laboratoire à Brantford, Ontario est maintenant un musée."
    }
  },

  // FOOD — more
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is 'tire sur la neige' (taffy on snow)?",
      fr: "Qu'est-ce que la tire sur la neige?"
    },
    options: {
      en: ["Hot maple syrup poured on clean snow and rolled on a stick", "Frozen candy", "A snow cone flavoured with maple", "Maple ice cream"],
      fr: ["Du sirop d'érable chaud versé sur de la neige propre et enroulé sur un bâton", "Un bonbon gelé", "Un cornet de neige au sirop d'érable", "De la crème glacée à l'érable"]
    },
    correctIndex: 0,
    funFact: {
      en: "Tire sur la neige is the highlight of Quebec sugar shack visits. The hot syrup instantly hardens on the cold snow into a chewy, sweet taffy. It's been a tradition for over 300 years!",
      fr: "La tire sur la neige est le point culminant des visites de cabanes à sucre québécoises. Le sirop chaud durcit instantanément sur la neige froide en une tire sucrée et moelleuse. C'est une tradition de plus de 300 ans!"
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'fiddleheads,' a seasonal Canadian delicacy?",
      fr: "Que sont les « têtes de violon », un mets saisonnier canadien?"
    },
    options: {
      en: ["The curled young fronds of ferns, harvested in spring", "A type of mushroom", "Baby lobsters", "A seaweed variety"],
      fr: ["Les jeunes frondes enroulées de fougères, récoltées au printemps", "Un type de champignon", "De jeunes homards", "Une variété d'algues"]
    },
    correctIndex: 0,
    funFact: {
      en: "Fiddleheads are foraged from ostrich ferns in the Maritime provinces, especially New Brunswick. They're available for only a few weeks in spring and must be properly cooked — raw fiddleheads can cause illness.",
      fr: "Les têtes de violon sont cueillies de fougères-à-l'autruche dans les provinces Maritimes, surtout au Nouveau-Brunswick. Elles ne sont disponibles que quelques semaines au printemps et doivent être bien cuites — les têtes de violon crues peuvent causer des malaises."
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'ploye,' a traditional Acadian food from New Brunswick?",
      fr: "Qu'est-ce que la ploye, un aliment traditionnel acadien du Nouveau-Brunswick?"
    },
    options: {
      en: ["A buckwheat pancake cooked on one side only", "A type of pie", "A fish cake", "A fruit preserve"],
      fr: ["Une crêpe de sarrasin cuite d'un seul côté", "Un type de tarte", "Un gâteau de poisson", "Une confiture de fruits"]
    },
    correctIndex: 0,
    funFact: {
      en: "Ployes are a staple of Acadian cuisine in the Madawaska region (northwestern NB). They're made with buckwheat flour and cooked only on one side, giving them a spongy texture perfect for soaking up beans and stew.",
      fr: "Les ployes sont un aliment de base de la cuisine acadienne dans la région du Madawaska (nord-ouest du N.-B.). Elles sont faites de farine de sarrasin et cuites d'un seul côté, leur donnant une texture spongieuse parfaite pour absorber les fèves et le ragoût."
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "Canada is one of the world's largest exporters of wild blueberries.",
      fr: "Le Canada est l'un des plus grands exportateurs de bleuets sauvages au monde."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Canada produces most of the world's wild blueberries, primarily from Quebec and the Atlantic provinces. The Lac-Saint-Jean region in Quebec hosts an annual blueberry festival and is nicknamed 'Blueberry Kingdom.'",
      fr: "Le Canada produit la majorité des bleuets sauvages du monde, principalement du Québec et des provinces atlantiques. La région du Lac-Saint-Jean au Québec accueille un festival annuel du bleuet et est surnommée le « Royaume du bleuet »."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'Montreal-style bagel' and how does it differ from a New York bagel?",
      fr: "Qu'est-ce qu'un bagel de style montréalais et en quoi diffère-t-il d'un bagel new-yorkais?"
    },
    options: {
      en: ["Smaller, sweeter, boiled in honey water, and baked in a wood-fired oven", "Larger and plain", "Frozen and microwaved", "Made without a hole"],
      fr: ["Plus petit, plus sucré, bouilli dans l'eau miellée et cuit dans un four à bois", "Plus gros et nature", "Congelé et réchauffé au micro-ondes", "Fait sans trou"]
    },
    correctIndex: 0,
    funFact: {
      en: "Montreal's two legendary bagel shops — Fairmount Bagel (1919) and St-Viateur Bagel (1957) — are open 24/7 and have a fierce rivalry. Montreal bagels are thinner, sweeter, and have a larger hole than New York bagels.",
      fr: "Les deux légendaires boulangeries de bagels de Montréal — Fairmount Bagel (1919) et St-Viateur Bagel (1957) — sont ouvertes 24/7 et ont une rivalité féroce. Les bagels montréalais sont plus minces, plus sucrés et ont un trou plus grand que les bagels new-yorkais."
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'rappie pie' (pâté à la râpure), an Acadian dish from Nova Scotia?",
      fr: "Qu'est-ce que le « pâté à la râpure » (rappie pie), un plat acadien de la Nouvelle-Écosse?"
    },
    options: {
      en: ["A casserole made from grated potatoes with the starch removed, layered with meat", "A fruit pie with ripped crust", "A seafood chowder", "A pastry with shredded cheese"],
      fr: ["Un plat de pommes de terre râpées dont l'amidon est retiré, en couches avec de la viande", "Une tarte aux fruits à croûte déchirée", "Une chaudrée de fruits de mer", "Une pâtisserie au fromage râpé"]
    },
    correctIndex: 0,
    funFact: {
      en: "Rappie pie is unique to Acadian communities in southwestern Nova Scotia. Potatoes are grated, the starch is squeezed out, then broth is added back in with layers of chicken or clams. It takes hours to prepare!",
      fr: "Le pâté à la râpure est unique aux communautés acadiennes du sud-ouest de la Nouvelle-Écosse. Les pommes de terre sont râpées, l'amidon est pressé, puis du bouillon est ajouté avec des couches de poulet ou de palourdes. Sa préparation prend des heures!"
    }
  },

  // MORE MIXED — final push to 500
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What was the 'Great Migration' to Canada in the mid-19th century?",
      fr: "Qu'était la « Grande Migration » vers le Canada au milieu du 19e siècle?"
    },
    options: {
      en: ["Mass immigration of Irish fleeing the Great Famine, and Scottish clearing victims", "A bird migration study", "Movement of animals across the prairies", "A railway workers' march"],
      fr: ["L'immigration massive d'Irlandais fuyant la Grande Famine et de victimes des expulsions écossaises", "Une étude de la migration des oiseaux", "Le déplacement d'animaux à travers les prairies", "Une marche de travailleurs ferroviaires"]
    },
    correctIndex: 0,
    funFact: {
      en: "Grosse Île, Quebec was the main quarantine station for immigrants. In 1847 alone, over 100,000 Irish immigrants arrived — thousands died of typhus on the journey. A memorial on Grosse Île honours them.",
      fr: "La Grosse-Île, Québec était la principale station de quarantaine pour les immigrants. En 1847 seulement, plus de 100 000 immigrants irlandais sont arrivés — des milliers sont morts du typhus pendant le voyage. Un mémorial sur la Grosse-Île les honore."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What province is directly east of Alberta?",
      fr: "Quelle province est directement à l'est de l'Alberta?"
    },
    options: {
      en: ["Saskatchewan", "Manitoba", "Ontario", "British Columbia"],
      fr: ["Saskatchewan", "Manitoba", "Ontario", "Colombie-Britannique"]
    },
    correctIndex: 0,
    funFact: {
      en: "From west to east, the prairie provinces are: Alberta, Saskatchewan, Manitoba. Together they form Canada's agricultural heartland and produce the majority of the country's grain crops.",
      fr: "D'ouest en est, les provinces des Prairies sont : Alberta, Saskatchewan, Manitoba. Ensemble, elles forment le cœur agricole du Canada et produisent la majorité des cultures céréalières du pays."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What colour are Canadian mailboxes?",
      fr: "De quelle couleur sont les boîtes aux lettres canadiennes?"
    },
    options: {
      en: ["Red", "Blue", "Green", "Yellow"],
      fr: ["Rouge", "Bleu", "Vert", "Jaune"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canada Post's red mailboxes are an iconic sight across the country. Canada Post was established in 1867, the same year as Confederation. The postal service still delivers to some remote northern communities by bush plane.",
      fr: "Les boîtes aux lettres rouges de Postes Canada sont un spectacle emblématique à travers le pays. Postes Canada a été établie en 1867, la même année que la Confédération. Le service postal livre encore à certaines communautés nordiques éloignées par avion de brousse."
    }
  },
  {
    category: "language",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What does 'Kraft Dinner' (or 'KD') represent in Canadian language and culture?",
      fr: "Que représente « Kraft Dinner » (ou « KD ») dans la langue et la culture canadiennes?"
    },
    options: {
      en: ["Boxed mac and cheese — so iconic it's mentioned in the Barenaked Ladies song 'If I Had $1,000,000'", "A fancy restaurant chain", "A type of formal dinner", "A German sausage dish"],
      fr: ["Du macaroni au fromage en boîte — si emblématique qu'il est mentionné dans la chanson « If I Had $1,000,000 » des Barenaked Ladies", "Une chaîne de restaurants chics", "Un type de dîner formel", "Un plat de saucisses allemandes"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Barenaked Ladies' lyric 'We wouldn't have to eat Kraft Dinner / But we would eat Kraft Dinner' perfectly captures how KD transcends income levels in Canada — it's comfort food for everyone.",
      fr: "Les paroles des Barenaked Ladies « We wouldn't have to eat Kraft Dinner / But we would eat Kraft Dinner » capturent parfaitement comment le KD transcende les niveaux de revenu au Canada — c'est un plat réconfortant pour tous."
    }
  },
  {
    category: "sports",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is unique about the CFL (Canadian Football League) compared to the NFL?",
      fr: "Qu'est-ce qui est unique à la LCF (Ligue canadienne de football) comparé à la NFL?"
    },
    options: {
      en: ["3 downs, 12 players per side, larger field, and a single point (rouge)", "It uses a round ball", "Games last 2 hours", "There are no goalpost"],
      fr: ["3 essais, 12 joueurs par côté, terrain plus grand et un point unique (rouge)", "On utilise un ballon rond", "Les matchs durent 2 heures", "Il n'y a pas de poteaux de but"]
    },
    correctIndex: 0,
    funFact: {
      en: "The 'rouge' or single point is awarded when a kicked ball isn't returned out of the end zone. This uniquely Canadian rule can decide close games and has no equivalent in American football.",
      fr: "Le « rouge » ou simple est accordé quand un ballon botté n'est pas retourné hors de la zone de but. Cette règle uniquement canadienne peut décider de matchs serrés et n'a pas d'équivalent dans le football américain."
    }
  },
  {
    category: "indigenous",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What traditional Haudenosaunee dwelling could house several families?",
      fr: "Quelle habitation traditionnelle haudenosaunee pouvait abriter plusieurs familles?"
    },
    options: {
      en: ["Longhouse", "Tipi", "Igloo", "Wigwam"],
      fr: ["Maison longue", "Tipi", "Igloo", "Wigwam"]
    },
    correctIndex: 0,
    funFact: {
      en: "Longhouses could be over 60 metres long and housed extended families from the same clan. The Haudenosaunee are sometimes called the 'People of the Longhouse.' Some reconstructed longhouses can be visited today.",
      fr: "Les maisons longues pouvaient mesurer plus de 60 mètres de long et abritaient des familles élargies du même clan. Les Haudenosaunee sont parfois appelés le « Peuple de la Maison longue ». Certaines maisons longues reconstruites peuvent être visitées aujourd'hui."
    }
  },
  {
    category: "science",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the significance of the Sudbury Basin in Ontario?",
      fr: "Quelle est l'importance du bassin de Sudbury en Ontario?"
    },
    options: {
      en: ["It's one of the largest impact craters on Earth and a major nickel mining centre", "It's a freshwater lake", "It's a national park", "It's a volcanic crater"],
      fr: ["C'est l'un des plus grands cratères d'impact sur Terre et un centre minier de nickel majeur", "C'est un lac d'eau douce", "C'est un parc national", "C'est un cratère volcanique"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Sudbury Basin was formed by a meteorite impact 1.85 billion years ago. It's the third-largest impact crater on Earth and produces about 10% of the world's nickel. NASA uses it to train astronauts.",
      fr: "Le bassin de Sudbury a été formé par un impact de météorite il y a 1,85 milliard d'années. C'est le troisième plus grand cratère d'impact sur Terre et il produit environ 10 % du nickel mondial. La NASA l'utilise pour entraîner les astronautes."
    }
  },
  {
    category: "food",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is 'toutière' from the Saguenay-Lac-Saint-Jean region specifically?",
      fr: "Qu'est-ce que la tourtière de la région du Saguenay-Lac-Saint-Jean spécifiquement?"
    },
    options: {
      en: ["A deep-dish meat pie with cubed potatoes and multiple game meats, baked for hours", "A thin pastry with ground pork only", "A vegetarian pie", "A fish pie"],
      fr: ["Une tourte profonde avec des pommes de terre en cubes et plusieurs viandes de gibier, cuite pendant des heures", "Une pâtisserie mince avec du porc haché seulement", "Une tarte végétarienne", "Une tourte au poisson"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Lac-Saint-Jean version is very different from the thin, ground-meat tourtière common in the rest of Quebec. It's a massive, deep pie that can take 6-8 hours to bake and feeds a crowd!",
      fr: "La version du Lac-Saint-Jean est très différente de la tourtière mince à la viande hachée commune dans le reste du Québec. C'est une tourte massive et profonde qui peut prendre 6 à 8 heures à cuire et nourrir une foule!"
    }
  },
  {
    category: "history",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What does 'RCMP' stand for?",
      fr: "Que signifie « GRC »?"
    },
    options: {
      en: ["Royal Canadian Mounted Police", "Royal Canadian Military Police", "Registered Canadian Medical Practitioners", "Regional Canadian Municipal Police"],
      fr: ["Gendarmerie royale du Canada", "Police militaire royale du Canada", "Praticiens médicaux enregistrés du Canada", "Police municipale régionale du Canada"]
    },
    correctIndex: 0,
    funFact: {
      en: "The RCMP was founded in 1873 as the North-West Mounted Police to maintain order in Western Canada. Their 'Musical Ride' — a choreographed equestrian display — has been performed since 1887.",
      fr: "La GRC a été fondée en 1873 sous le nom de Police à cheval du Nord-Ouest pour maintenir l'ordre dans l'Ouest canadien. Leur « Carrousel » — un spectacle équestre chorégraphié — est présenté depuis 1887."
    }
  },
  {
    category: "geography",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is the Okanagan Valley known for?",
      fr: "Pour quoi la vallée de l'Okanagan est-elle connue?"
    },
    options: {
      en: ["Wine production, orchards, and warm summers in British Columbia", "Oil production", "Fishing industry", "Mining"],
      fr: ["La production vinicole, les vergers et les étés chauds en Colombie-Britannique", "La production pétrolière", "L'industrie de la pêche", "L'exploitation minière"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Okanagan has over 180 wineries and is Canada's premier wine region. It's also home to the legendary Ogopogo — Canada's version of the Loch Ness Monster, said to inhabit Okanagan Lake.",
      fr: "L'Okanagan compte plus de 180 vignobles et est la première région vinicole du Canada. C'est aussi le foyer du légendaire Ogopogo — la version canadienne du monstre du Loch Ness, qui habiterait le lac Okanagan."
    }
  },
  {
    category: "culture",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is 'Nunavut Day' and when is it celebrated?",
      fr: "Qu'est-ce que le « Jour du Nunavut » et quand est-il célébré?"
    },
    options: {
      en: ["July 9 — celebrating the creation of Nunavut territory in 1999", "January 1", "December 25", "March 21"],
      fr: ["Le 9 juillet — célébrant la création du territoire du Nunavut en 1999", "Le 1er janvier", "Le 25 décembre", "Le 21 mars"]
    },
    correctIndex: 0,
    funFact: {
      en: "Nunavut officially came into existence on April 1, 1999, but Nunavut Day is celebrated on July 9, when the Nunavut Land Claims Agreement was signed in 1993. It was the largest Indigenous land claim settlement in Canadian history.",
      fr: "Le Nunavut est officiellement né le 1er avril 1999, mais le Jour du Nunavut est célébré le 9 juillet, quand l'Accord sur les revendications territoriales du Nunavut a été signé en 1993. C'était le plus grand règlement de revendication territoriale autochtone de l'histoire du Canada."
    }
  },
  {
    category: "science",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the significance of the SNOLAB facility in Sudbury, Ontario?",
      fr: "Quelle est l'importance de l'installation SNOLAB à Sudbury, Ontario?"
    },
    options: {
      en: ["The deepest underground physics laboratory in the world, studying dark matter and neutrinos", "A snowfall research centre", "A satellite communications hub", "A mineral processing plant"],
      fr: ["Le laboratoire de physique souterrain le plus profond au monde, étudiant la matière noire et les neutrinos", "Un centre de recherche sur les chutes de neige", "Un hub de communications par satellite", "Une usine de traitement des minéraux"]
    },
    correctIndex: 0,
    funFact: {
      en: "SNOLAB is 2 km underground in an active nickel mine. The rock above shields experiments from cosmic radiation, allowing scientists to detect extremely rare particle interactions. It's where neutrino oscillations were confirmed.",
      fr: "SNOLAB est à 2 km sous terre dans une mine de nickel active. La roche au-dessus protège les expériences des rayonnements cosmiques, permettant aux scientifiques de détecter des interactions de particules extrêmement rares. C'est là que les oscillations des neutrinos ont été confirmées."
    }
  },
  {
    category: "food",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What popular Canadian chocolate bar contains wafers and coffee-flavoured cream?",
      fr: "Quelle barre de chocolat canadienne populaire contient des gaufrettes et de la crème au café?"
    },
    options: {
      en: ["Coffee Crisp", "Kit Kat", "Smarties", "Aero"],
      fr: ["Coffee Crisp", "Kit Kat", "Smarties", "Aero"]
    },
    correctIndex: 0,
    funFact: {
      en: "Coffee Crisp is made exclusively for the Canadian market and has been since 1938. It's one of the most requested Canadian treats by expatriates. Its tagline is 'Makes a nice light snack!'",
      fr: "Coffee Crisp est fabriqué exclusivement pour le marché canadien depuis 1938. C'est l'une des friandises canadiennes les plus demandées par les expatriés. Son slogan est « Makes a nice light snack! »"
    }
  },
  {
    category: "language",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the 'Canadian Raising' phenomenon in linguistics?",
      fr: "Qu'est-ce que le phénomène de « Canadian Raising » en linguistique?"
    },
    options: {
      en: ["A vowel shift where 'about' sounds like 'aboot' to non-Canadian ears", "Raising children bilingually", "A singing technique", "A political speech pattern"],
      fr: ["Un changement de voyelle où « about » semble sonner comme « aboot » aux oreilles non canadiennes", "Élever des enfants de manière bilingue", "Une technique de chant", "Un modèle de discours politique"]
    },
    correctIndex: 0,
    funFact: {
      en: "Canadian Raising is a real linguistic phenomenon where the 'ou' sound (as in 'about' and 'house') is pronounced higher in the mouth before voiceless consonants. It doesn't actually sound like 'aboot' — that's an exaggeration!",
      fr: "Le Canadian Raising est un vrai phénomène linguistique où le son « ou » (comme dans « about » et « house ») est prononcé plus haut dans la bouche avant les consonnes sourdes. Ça ne sonne pas vraiment comme « aboot » — c'est une exagération!"
    }
  },
  {
    category: "geography",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What are the Torngat Mountains and where are they?",
      fr: "Que sont les monts Torngat et où se trouvent-ils?"
    },
    options: {
      en: ["A mountain range in northern Labrador — the highest peaks east of the Rockies", "Mountains in BC", "Hills in Ontario", "Volcanoes in the Yukon"],
      fr: ["Une chaîne de montagnes dans le nord du Labrador — les plus hauts sommets à l'est des Rocheuses", "Des montagnes en C.-B.", "Des collines en Ontario", "Des volcans au Yukon"]
    },
    correctIndex: 0,
    funFact: {
      en: "Torngat Mountains National Park was established in 2005 and is co-managed with the Inuit. 'Torngat' means 'place of spirits' in Inuktitut. The park is home to polar bears, caribou, and the southernmost Arctic fjords.",
      fr: "Le parc national des Monts-Torngat a été établi en 2005 et est cogéré avec les Inuits. « Torngat » signifie « lieu des esprits » en inuktitut. Le parc abrite des ours polaires, des caribous et les fjords arctiques les plus au sud."
    }
  },
  {
    category: "history",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What was the significance of the Charlottetown Conference of 1864?",
      fr: "Quelle était la signification de la Conférence de Charlottetown de 1864?"
    },
    options: {
      en: ["It was the first meeting that led to Canadian Confederation", "It established women's suffrage", "It ended the War of 1812", "It created the RCMP"],
      fr: ["C'était la première réunion qui a mené à la Confédération canadienne", "Elle a établi le suffrage féminin", "Elle a mis fin à la guerre de 1812", "Elle a créé la GRC"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Charlottetown Conference was originally called to discuss Maritime union, but representatives from the Province of Canada (Ontario/Quebec) crashed the party and proposed a larger union. Three years later, Canada was born!",
      fr: "La Conférence de Charlottetown a été initialement convoquée pour discuter de l'union des Maritimes, mais les représentants de la Province du Canada (Ontario/Québec) se sont invités et ont proposé une union plus grande. Trois ans plus tard, le Canada est né!"
    }
  },
  {
    category: "culture",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What Canadian band's song 'The Hip' became an unofficial anthem, and their final concert was broadcast nationwide?",
      fr: "Quelle chanson de quel groupe canadien est devenue un hymne non officiel, et leur dernier concert a été diffusé à l'échelle nationale?"
    },
    options: {
      en: ["The Tragically Hip", "Rush", "Barenaked Ladies", "Arcade Fire"],
      fr: ["The Tragically Hip", "Rush", "Barenaked Ladies", "Arcade Fire"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Tragically Hip's final concert in 2016, after frontman Gord Downie's terminal brain cancer diagnosis, was watched by 11.7 million Canadians (one-third of the population). PM Justin Trudeau was in the audience in tears.",
      fr: "Le dernier concert de The Tragically Hip en 2016, après le diagnostic de cancer du cerveau terminal du chanteur Gord Downie, a été regardé par 11,7 millions de Canadiens (un tiers de la population). Le PM Justin Trudeau était dans l'audience en larmes."
    }
  },
  {
    category: "sports",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What is the 'Battle of Alberta' in hockey?",
      fr: "Qu'est-ce que la « Bataille de l'Alberta » au hockey?"
    },
    options: {
      en: ["The fierce rivalry between the Edmonton Oilers and Calgary Flames", "A military re-enactment", "A wrestling match", "A skiing competition"],
      fr: ["La rivalité féroce entre les Oilers d'Edmonton et les Flames de Calgary", "Une reconstitution militaire", "Un match de lutte", "Une compétition de ski"]
    },
    correctIndex: 0,
    funFact: {
      en: "The Battle of Alberta is one of the fiercest rivalries in all of hockey. It peaked in the 1980s when both teams were Stanley Cup contenders. The rivalry extends beyond hockey — Edmonton and Calgary compete in almost everything!",
      fr: "La Bataille de l'Alberta est l'une des rivalités les plus féroces de tout le hockey. Elle a atteint son apogée dans les années 1980 quand les deux équipes étaient des prétendantes à la Coupe Stanley. La rivalité s'étend au-delà du hockey — Edmonton et Calgary sont en compétition dans presque tout!"
    }
  },
  {
    category: "indigenous",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "What is a 'pow wow' in Indigenous culture?",
      fr: "Qu'est-ce qu'un « pow-wow » dans la culture autochtone?"
    },
    options: {
      en: ["A social gathering celebrating Indigenous culture through song, dance, and community", "A war council", "A political meeting", "A cooking competition"],
      fr: ["Un rassemblement social célébrant la culture autochtone par le chant, la danse et la communauté", "Un conseil de guerre", "Une réunion politique", "Un concours de cuisine"]
    },
    correctIndex: 0,
    funFact: {
      en: "Pow wows feature different dance styles including jingle dress, fancy shawl, grass dance, and traditional. They're open to all nations and many are open to the public. The largest in Canada is the Kamloopa Pow Wow in BC.",
      fr: "Les pow-wow présentent différents styles de danse dont la danse du jingle dress, du châle de fantaisie, de l'herbe et traditionnelle. Ils sont ouverts à toutes les nations et beaucoup sont ouverts au public. Le plus grand au Canada est le Pow Wow de Kamloopa en C.-B."
    }
  },
  {
    category: "science",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "The Canadarm2 robotic arm on the International Space Station was built in Canada.",
      fr: "Le bras robotique Canadarm2 sur la Station spatiale internationale a été construit au Canada."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "Canadarm2 was launched to the ISS in 2001 and was crucial for assembling the station. It's 17.6 metres long, can handle payloads of 116,000 kg, and 'walks' end-over-end across the station's exterior!",
      fr: "Canadarm2 a été lancé vers l'ISS en 2001 et a été crucial pour l'assemblage de la station. Il mesure 17,6 mètres de long, peut manipuler des charges utiles de 116 000 kg et « marche » bout à bout sur l'extérieur de la station!"
    }
  },
  {
    category: "food",
    difficulty: "hard",
    type: "mc",
    question: {
      en: "What are 'toutons,' a traditional Newfoundland breakfast food?",
      fr: "Que sont les « toutons », un aliment traditionnel du petit-déjeuner terre-neuvien?"
    },
    options: {
      en: ["Fried bread dough, served with butter and molasses", "A type of egg dish", "Fried fish cakes", "Baked biscuits"],
      fr: ["De la pâte à pain frite, servie avec du beurre et de la mélasse", "Un type de plat aux œufs", "Des croquettes de poisson frites", "Des biscuits cuits au four"]
    },
    correctIndex: 0,
    funFact: {
      en: "Toutons are made from leftover bread dough that's fried in pork fat until golden. Topped with molasses, butter, or even baked beans, they're the ultimate Newfoundland comfort breakfast.",
      fr: "Les toutons sont faits de restes de pâte à pain frits dans du gras de porc jusqu'à dorure. Garnis de mélasse, de beurre ou même de fèves au lard, c'est le petit-déjeuner réconfortant par excellence de Terre-Neuve."
    }
  },
  {
    category: "geography",
    difficulty: "easy",
    type: "tf",
    question: {
      en: "The Rideau Canal in Ottawa becomes the world's largest skating rink each winter.",
      fr: "Le canal Rideau à Ottawa devient la plus grande patinoire du monde chaque hiver."
    },
    options: { en: [], fr: [] },
    correctIndex: 0,
    funFact: {
      en: "The Rideau Canal Skateway stretches 7.8 km through downtown Ottawa. During the annual Winterlude festival, thousands of people skate to work, to school, and for fun. BeaverTails pastry stands line the route!",
      fr: "La patinoire du canal Rideau s'étend sur 7,8 km au centre-ville d'Ottawa. Pendant le festival annuel Bal de Neige, des milliers de personnes patinent pour aller au travail, à l'école et pour le plaisir. Des kiosques de Queues de castor bordent le parcours!"
    }
  },
  {
    category: "history",
    difficulty: "medium",
    type: "mc",
    question: {
      en: "Which Canadian province was the last to abolish denominational (religious) schools in its public system?",
      fr: "Quelle province canadienne a été la dernière à abolir les écoles confessionnelles dans son système public?"
    },
    options: {
      en: ["Newfoundland and Labrador (1997)", "Ontario", "Quebec", "Alberta"],
      fr: ["Terre-Neuve-et-Labrador (1997)", "Ontario", "Québec", "Alberta"]
    },
    correctIndex: 0,
    funFact: {
      en: "Newfoundland had separate Roman Catholic, Anglican, Pentecostal, and other denominational school boards until a 1997 referendum voted to create a single non-denominational public system. Ontario still funds Catholic schools.",
      fr: "Terre-Neuve avait des commissions scolaires catholiques romaines, anglicanes, pentecôtistes et d'autres dénominations jusqu'à ce qu'un référendum de 1997 vote pour créer un système public non confessionnel unique. L'Ontario finance toujours les écoles catholiques."
    }
  },
  {
    category: "culture",
    difficulty: "easy",
    type: "mc",
    question: {
      en: "What is the 'CN Tower' and where is it located?",
      fr: "Qu'est-ce que la « Tour CN » et où est-elle située?"
    },
    options: {
      en: ["A 553-metre communications tower in Toronto — once the world's tallest freestanding structure", "A clock tower in Ottawa", "A lighthouse in Halifax", "A bridge in Vancouver"],
      fr: ["Une tour de communications de 553 mètres à Toronto — autrefois la plus haute structure autoportante du monde", "Une tour d'horloge à Ottawa", "Un phare à Halifax", "Un pont à Vancouver"]
    },
    correctIndex: 0,
    funFact: {
      en: "The CN Tower held the record as the world's tallest freestanding structure from 1975 until 2007 (surpassed by the Burj Khalifa). Its glass floor at 342 metres and EdgeWalk at 356 metres are not for the faint-hearted!",
      fr: "La Tour CN a détenu le record de la plus haute structure autoportante du monde de 1975 à 2007 (surpassée par le Burj Khalifa). Son plancher de verre à 342 mètres et l'EdgeWalk à 356 mètres ne sont pas pour les cœurs sensibles!"
    }
  },

  // ═══════════════════════════════════════════
  // FINAL BATCH — Reaching 500+
  // ═══════════════════════════════════════════

  // LANGUAGE expansion (filling to ~63)
  {category:"language",difficulty:"easy",type:"mc",question:{en:"What do Canadians call a hooded sweatshirt?",fr:"Comment les Canadiens appellent-ils un sweat à capuche?"},options:{en:["A hoodie or bunny hug (in Saskatchewan)","A jumper","A pullover","A windbreaker"],fr:["Un hoodie ou bunny hug (en Saskatchewan)","Un chandail","Un pull","Un coupe-vent"]},correctIndex:0,funFact:{en:"In Saskatchewan, a hooded sweatshirt is called a 'bunny hug' — a term not used anywhere else in Canada. It's one of the most distinctive regionalisms in Canadian English.",fr:"En Saskatchewan, un sweat à capuche s'appelle un « bunny hug » — un terme utilisé nulle part ailleurs au Canada. C'est l'un des régionalismes les plus distinctifs de l'anglais canadien."}},
  {category:"language",difficulty:"easy",type:"tf",question:{en:"In Canadian English, 'chesterfield' means a sofa or couch.",fr:"En anglais canadien, « chesterfield » signifie un sofa ou un canapé."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"While 'chesterfield' for sofa is fading among younger Canadians, it's still understood across the country. It's a British English term that persisted in Canada long after falling out of use in Britain itself.",fr:"Bien que « chesterfield » pour sofa soit en déclin chez les jeunes Canadiens, il est toujours compris à travers le pays. C'est un terme de l'anglais britannique qui a persisté au Canada longtemps après être tombé en désuétude en Grande-Bretagne même."}},
  {category:"language",difficulty:"medium",type:"mc",question:{en:"What is the Québécois expression 'il fait frette' describing?",fr:"Que décrit l'expression québécoise « il fait frette »?"},options:{en:["It's very cold outside","It's raining","It's hot","It's windy"],fr:["Il fait très froid dehors","Il pleut","Il fait chaud","Il vente"]},correctIndex:0,funFact:{en:"'Frette' is the Québécois way of saying 'froid' (cold). It conveys that bone-chilling, deep cold that's very common in Quebec winters where -30°C is not unusual.",fr:"« Frette » est la façon québécoise de dire « froid ». Ça transmet ce froid profond et pénétrant qui est très courant dans les hivers québécois où -30°C n'est pas inhabituel."}},
  {category:"language",difficulty:"medium",type:"mc",question:{en:"What does 'click' mean in Canadian distance slang?",fr:"Que signifie « click » dans l'argot canadien des distances?"},options:{en:["One kilometre","One mile","100 metres","One city block"],fr:["Un kilomètre","Un mille","100 mètres","Un pâté de maisons"]},correctIndex:0,funFact:{en:"'It's about 50 clicks from here' means 50 km. This military slang became widely adopted in everyday Canadian English, especially in rural areas.",fr:"« C'est à environ 50 clicks d'ici » signifie 50 km. Cet argot militaire a été largement adopté dans l'anglais canadien quotidien, surtout dans les zones rurales."}},
  {category:"language",difficulty:"hard",type:"mc",question:{en:"What is unique about the French spoken by Franco-Ontarians?",fr:"Qu'est-ce qui est unique dans le français parlé par les Franco-Ontariens?"},options:{en:["It blends features of Québécois French with more English influence due to minority status","It's identical to Parisian French","It uses Indigenous vocabulary","It's a written-only language"],fr:["Il mélange des traits du français québécois avec plus d'influence anglaise en raison du statut minoritaire","Il est identique au français parisien","Il utilise du vocabulaire autochtone","C'est une langue uniquement écrite"]},correctIndex:0,funFact:{en:"About 622,000 Ontarians speak French as their first language. Franco-Ontarian French varies by region — Northern Ontario French has mining and forestry vocabulary, while Eastern Ontario French is closer to Québécois.",fr:"Environ 622 000 Ontariens parlent français comme langue maternelle. Le français franco-ontarien varie selon la région — le français du Nord de l'Ontario a un vocabulaire minier et forestier, tandis que celui de l'Est de l'Ontario est plus proche du québécois."}},
  {category:"language",difficulty:"hard",type:"mc",question:{en:"What does the Québécois slang 'blonde' mean?",fr:"Que signifie l'argot québécois « blonde »?"},options:{en:["Girlfriend (regardless of hair colour)","A blond woman","A beer","A joke"],fr:["Une petite amie (peu importe la couleur des cheveux)","Une femme blonde","Une bière","Une blague"]},correctIndex:0,funFact:{en:"In Québécois French, 'ma blonde' means 'my girlfriend' — even if she has dark hair. Similarly, 'mon chum' means boyfriend. These are uniquely Québécois usages that puzzle European French speakers.",fr:"En français québécois, « ma blonde » signifie « ma petite amie » — même si elle a les cheveux foncés. De même, « mon chum » signifie petit ami. Ce sont des usages uniquement québécois qui intriguent les francophones européens."}},
  {category:"language",difficulty:"medium",type:"mc",question:{en:"What does 'sorry' really mean in Canadian culture?",fr:"Que signifie vraiment « sorry » dans la culture canadienne?"},options:{en:["It can mean empathy, acknowledgment, or 'excuse me' — not always an apology","It always means a deep apology","It's used sarcastically","It's only said when truly at fault"],fr:["Ça peut signifier de l'empathie, un acquiescement ou « excusez-moi » — pas toujours une excuse","Ça signifie toujours une excuse profonde","C'est utilisé sarcastiquement","C'est dit seulement quand on est vraiment fautif"]},correctIndex:0,funFact:{en:"Canadians say 'sorry' so often that Ontario passed the Apology Act in 2009, which states that saying sorry cannot be used as an admission of guilt in court!",fr:"Les Canadiens disent « sorry » si souvent que l'Ontario a adopté la Loi sur les excuses en 2009, qui stipule que dire désolé ne peut pas être utilisé comme un aveu de culpabilité en cour!"}},
  {category:"language",difficulty:"easy",type:"mc",question:{en:"How do most Canadians pronounce the word 'about'?",fr:"Comment la plupart des Canadiens prononcent-ils le mot « about »?"},options:{en:["With a slightly raised vowel (not 'aboot' — that's a myth exaggeration)","Exactly like Americans","With a French accent","They don't use this word"],fr:["Avec une voyelle légèrement élevée (pas « aboot » — c'est un mythe exagéré)","Exactement comme les Américains","Avec un accent français","Ils n'utilisent pas ce mot"]},correctIndex:0,funFact:{en:"The 'Canadian raising' of the 'ou' diphthong is real but subtle. It sounds more like 'aboat' than 'aboot.' Americans exaggerate it for comedy, but linguists find it a fascinating dialect feature.",fr:"L'élévation canadienne de la diphtongue « ou » est réelle mais subtile. Ça sonne plus comme « aboat » que « aboot ». Les Américains l'exagèrent pour la comédie, mais les linguistes trouvent que c'est une caractéristique dialectale fascinante."}},
  {category:"language",difficulty:"hard",type:"tf",question:{en:"Inuktitut has over 50 words for different types of snow and ice.",fr:"L'inuktitut a plus de 50 mots pour différents types de neige et de glace."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"The 'Eskimo words for snow' claim is often exaggerated, but Inuktitut truly does have many terms for snow conditions because precise descriptions are essential for Arctic survival — qali (snow on trees), pukak (sugar snow), etc.",fr:"L'affirmation des « mots esquimaux pour la neige » est souvent exagérée, mais l'inuktitut a vraiment de nombreux termes pour les conditions de neige car des descriptions précises sont essentielles pour la survie arctique — qali (neige sur les arbres), pukak (neige sucrée), etc."}},

  // SPORTS expansion
  {category:"sports",difficulty:"easy",type:"mc",question:{en:"Which city's NHL team has the most Stanley Cup wins in history?",fr:"L'équipe de la LNH de quelle ville a le plus de victoires de la Coupe Stanley dans l'histoire?"},options:{en:["Montreal Canadiens (24 Cups)","Toronto Maple Leafs","Detroit Red Wings","Edmonton Oilers"],fr:["Canadiens de Montréal (24 Coupes)","Maple Leafs de Toronto","Red Wings de Détroit","Oilers d'Edmonton"]},correctIndex:0,funFact:{en:"The Canadiens have won 24 Stanley Cups, far more than any other team. Their dynasty was especially dominant from the 1950s through 1970s, winning 5 straight from 1956-1960.",fr:"Les Canadiens ont remporté 24 Coupes Stanley, bien plus que toute autre équipe. Leur dynastie était particulièrement dominante des années 1950 aux années 1970, remportant 5 consécutives de 1956 à 1960."}},
  {category:"sports",difficulty:"medium",type:"mc",question:{en:"What is the 'Scotties Tournament of Hearts'?",fr:"Qu'est-ce que le « Tournoi des cœurs Scotties »?"},options:{en:["The Canadian women's curling championship","A tennis tournament","A figure skating competition","A charity run"],fr:["Le championnat canadien féminin de curling","Un tournoi de tennis","Une compétition de patinage artistique","Une course caritative"]},correctIndex:0,funFact:{en:"The Scotties has been held annually since 1961. Canada dominates women's curling globally, and many Olympic gold medalists have come through this tournament.",fr:"Le Scotties a lieu annuellement depuis 1961. Le Canada domine le curling féminin mondialement, et de nombreuses médaillées d'or olympiques sont passées par ce tournoi."}},
  {category:"sports",difficulty:"hard",type:"tf",question:{en:"Canada's women's hockey team has won more Olympic gold medals than any other country.",fr:"L'équipe féminine de hockey du Canada a remporté plus de médailles d'or olympiques que tout autre pays."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Canada and the USA have dominated Olympic women's hockey since it became an Olympic sport in 1998. Canada has won 5 golds (2002, 2006, 2010, 2014, 2022), making it the most decorated team in Olympic women's hockey history.",fr:"Le Canada et les États-Unis ont dominé le hockey féminin olympique depuis qu'il est devenu un sport olympique en 1998. Le Canada a remporté 5 médailles d'or (2002, 2006, 2010, 2014, 2022), ce qui en fait l'équipe la plus décorée de l'histoire du hockey féminin olympique."}},
  {category:"sports",difficulty:"easy",type:"mc",question:{en:"What Canadian tradition involves skating outdoors on rivers, ponds, and backyard rinks?",fr:"Quelle tradition canadienne implique de patiner à l'extérieur sur des rivières, des étangs et des patinoires de cour?"},options:{en:["Outdoor ice skating (a beloved winter pastime)","Indoor swimming","Sledding","Ice fishing"],fr:["Le patinage sur glace extérieur (un passe-temps hivernal bien-aimé)","La natation intérieure","La luge","La pêche sur glace"]},correctIndex:0,funFact:{en:"Many Canadian families build backyard rinks each winter using boards and a garden hose. It's such a tradition that there are competitions and TV shows dedicated to the best backyard rinks across the country.",fr:"De nombreuses familles canadiennes construisent des patinoires de cour chaque hiver en utilisant des planches et un tuyau d'arrosage. C'est une telle tradition qu'il y a des compétitions et des émissions de télé dédiées aux meilleures patinoires de cour à travers le pays."}},
  {category:"sports",difficulty:"medium",type:"mc",question:{en:"Which Canadian tennis player reached the US Open final in 2019?",fr:"Quel joueur de tennis canadien a atteint la finale de l'US Open en 2019?"},options:{en:["Bianca Andreescu","Eugenie Bouchard","Denis Shapovalov","Milos Raonic"],fr:["Bianca Andreescu","Eugenie Bouchard","Denis Shapovalov","Milos Raonic"]},correctIndex:0,funFact:{en:"Bianca Andreescu, born in Mississauga, Ontario to Romanian immigrants, won the 2019 US Open at just 19 years old, defeating Serena Williams. She was the first Canadian to win a Grand Slam singles title.",fr:"Bianca Andreescu, née à Mississauga, Ontario de parents immigrants roumains, a remporté l'US Open 2019 à seulement 19 ans, battant Serena Williams. Elle a été la première Canadienne à remporter un titre en simple du Grand Chelem."}},
  {category:"sports",difficulty:"hard",type:"mc",question:{en:"What is 'pond hockey' and why is it culturally significant in Canada?",fr:"Qu'est-ce que le « hockey sur étang » et pourquoi est-il culturellement significatif au Canada?"},options:{en:["Informal hockey played on frozen ponds — seen as the purest form of the game","Professional indoor hockey","A video game","A summer sport variant"],fr:["Du hockey informel joué sur des étangs gelés — considéré comme la forme la plus pure du jeu","Du hockey professionnel en salle","Un jeu vidéo","Une variante sportive d'été"]},correctIndex:0,funFact:{en:"Pond hockey is romanticized in Canadian culture as where hockey 'really' lives — no referees, no boards, just friends and a puck. The World Pond Hockey Championship is held annually in Plaster Rock, New Brunswick.",fr:"Le hockey sur étang est idéalisé dans la culture canadienne comme l'endroit où le hockey « vit vraiment » — pas d'arbitres, pas de bandes, juste des amis et une rondelle. Le Championnat mondial de hockey sur étang a lieu annuellement à Plaster Rock, Nouveau-Brunswick."}},

  // INDIGENOUS expansion
  {category:"indigenous",difficulty:"easy",type:"mc",question:{en:"What is the Métis flag and what does it symbolize?",fr:"Quel est le drapeau métis et que symbolise-t-il?"},options:{en:["A blue flag with a white infinity symbol representing the joining of two cultures","A red maple leaf","A circle of feathers","A canoe on water"],fr:["Un drapeau bleu avec un symbole d'infini blanc représentant la jonction de deux cultures","Une feuille d'érable rouge","Un cercle de plumes","Un canot sur l'eau"]},correctIndex:0,funFact:{en:"The Métis flag is the oldest patriotic flag in Canada, predating the Canadian flag by over 150 years. The infinity symbol represents the coming together of two distinct cultures (European and Indigenous) into a new, eternal people.",fr:"Le drapeau métis est le plus vieux drapeau patriotique au Canada, précédant le drapeau canadien de plus de 150 ans. Le symbole de l'infini représente la rencontre de deux cultures distinctes (européenne et autochtone) en un nouveau peuple éternel."}},
  {category:"indigenous",difficulty:"medium",type:"mc",question:{en:"What is the 'Idle No More' movement?",fr:"Qu'est-ce que le mouvement « Idle No More »?"},options:{en:["An Indigenous rights movement that began in 2012 against legislation threatening treaty rights","An environmental cleanup campaign","A fitness program","A voter registration drive"],fr:["Un mouvement pour les droits autochtones qui a commencé en 2012 contre une législation menaçant les droits issus de traités","Une campagne de nettoyage environnemental","Un programme de conditionnement physique","Une campagne d'inscription des électeurs"]},correctIndex:0,funFact:{en:"Idle No More was sparked by federal omnibus bills (C-45, C-38) that weakened environmental protections on waterways and changed the Indian Act without consulting First Nations. It became a global Indigenous solidarity movement.",fr:"Idle No More a été déclenché par des projets de loi omnibus fédéraux (C-45, C-38) qui ont affaibli les protections environnementales des voies navigables et modifié la Loi sur les Indiens sans consulter les Premières Nations. Il est devenu un mouvement mondial de solidarité autochtone."}},
  {category:"indigenous",difficulty:"hard",type:"mc",question:{en:"What is 'throat singing' (katajjaq) in Inuit culture?",fr:"Qu'est-ce que le « chant de gorge » (katajjaq) dans la culture inuite?"},options:{en:["A vocal game between two people, producing rhythmic breathing sounds","A type of drum ceremony","A form of yelling","A hunting call"],fr:["Un jeu vocal entre deux personnes, produisant des sons de respiration rythmiques","Un type de cérémonie de tambour","Une forme de cri","Un appel de chasse"]},correctIndex:0,funFact:{en:"Inuit throat singing is performed face-to-face by two women who create interlocking rhythms using their breath, throat, and vocal cords. The first person to laugh, run out of breath, or break rhythm 'loses.' It was banned by missionaries but has been revived.",fr:"Le chant de gorge inuit est exécuté face à face par deux femmes qui créent des rythmes entrelacés avec leur souffle, leur gorge et leurs cordes vocales. La première personne à rire, à manquer de souffle ou à briser le rythme « perd ». Il a été interdit par les missionnaires mais a été relancé."}},
  {category:"indigenous",difficulty:"medium",type:"tf",question:{en:"The Canadian $5 bill features Indigenous art by Haida artist Robert Davidson.",fr:"Le billet de 5 $ canadien présente de l'art autochtone de l'artiste haïda Robert Davidson."},options:{en:[],fr:[]},correctIndex:1,funFact:{en:"This is false — while there has been a push for more Indigenous representation on Canadian currency, the current $5 bill features Sir Wilfrid Laurier and a space theme. However, Indigenous art has appeared on commemorative coins.",fr:"C'est faux — bien qu'il y ait eu une poussée pour plus de représentation autochtone sur la monnaie canadienne, le billet de 5 $ actuel présente Sir Wilfrid Laurier et un thème spatial. Cependant, l'art autochtone est apparu sur des pièces commémoratives."}},
  {category:"indigenous",difficulty:"easy",type:"mc",question:{en:"What is 'bannock' often served with at pow wows and community gatherings?",fr:"Avec quoi le bannock est-il souvent servi lors des pow-wow et des rassemblements communautaires?"},options:{en:["Stew, soup, or jam — it's a versatile bread eaten many ways","Only butter","Nothing — it's always eaten plain","Only maple syrup"],fr:["Du ragoût, de la soupe ou de la confiture — c'est un pain polyvalent mangé de nombreuses façons","Seulement du beurre","Rien — il est toujours mangé nature","Seulement du sirop d'érable"]},correctIndex:0,funFact:{en:"Modern bannock is incredibly versatile — it's served as Indian tacos (topped with meat, lettuce, cheese), alongside stew, with jam, or even as dessert with Nutella. Fry bread is the fried version of bannock.",fr:"Le bannock moderne est incroyablement polyvalent — il est servi en tacos indiens (garni de viande, laitue, fromage), accompagné de ragoût, avec de la confiture, ou même en dessert avec du Nutella. Le pain frit est la version frite du bannock."}},

  // SCIENCE expansion
  {category:"science",difficulty:"easy",type:"mc",question:{en:"What popular communication app was founded by two Canadians from the University of Waterloo?",fr:"Quelle application de communication populaire a été fondée par deux Canadiens de l'Université de Waterloo?"},options:{en:["Kik Messenger","WhatsApp","Telegram","Signal"],fr:["Kik Messenger","WhatsApp","Telegram","Signal"]},correctIndex:0,funFact:{en:"The University of Waterloo in Ontario is often called 'Canada's MIT.' It has produced founders of companies like BlackBerry, Kik, BufferBox (acquired by Google), and has partnerships with every major tech company.",fr:"L'Université de Waterloo en Ontario est souvent appelée « le MIT du Canada ». Elle a produit les fondateurs d'entreprises comme BlackBerry, Kik, BufferBox (acquis par Google), et a des partenariats avec toutes les grandes entreprises technologiques."}},
  {category:"science",difficulty:"medium",type:"mc",question:{en:"What Canadian-invented technology lets you watch 3D movies?",fr:"Quelle technologie inventée au Canada vous permet de regarder des films en 3D?"},options:{en:["IMAX 3D (evolved from Canadian IMAX technology)","Regular 3D glasses","Holography","Virtual reality"],fr:["IMAX 3D (évolution de la technologie canadienne IMAX)","Des lunettes 3D ordinaires","L'holographie","La réalité virtuelle"]},correctIndex:0,funFact:{en:"IMAX evolved from Canadians' work at Expo 67. The IMAX 3D system was developed in the 1980s and creates the most immersive cinema experience available. Over 1,700 IMAX theatres operate in 87 countries.",fr:"L'IMAX a évolué du travail des Canadiens à l'Expo 67. Le système IMAX 3D a été développé dans les années 1980 et crée l'expérience cinématographique la plus immersive disponible. Plus de 1 700 cinémas IMAX opèrent dans 87 pays."}},
  {category:"science",difficulty:"hard",type:"mc",question:{en:"What is Canada's role in the global supply of medical isotopes?",fr:"Quel est le rôle du Canada dans l'approvisionnement mondial en isotopes médicaux?"},options:{en:["Canada has historically produced over 50% of the world's medical isotopes (especially Molybdenum-99)","Canada doesn't produce isotopes","Canada imports all its isotopes","Canada produces isotopes only for domestic use"],fr:["Le Canada a historiquement produit plus de 50 % des isotopes médicaux mondiaux (surtout le Molybdène-99)","Le Canada ne produit pas d'isotopes","Le Canada importe tous ses isotopes","Le Canada produit des isotopes uniquement pour un usage domestique"]},correctIndex:0,funFact:{en:"The NRU reactor at Chalk River, Ontario was the world's primary source of Molybdenum-99, used in 80% of nuclear medicine diagnostic procedures. When it shut down for repairs in 2009, it caused a global medical isotope crisis.",fr:"Le réacteur NRU à Chalk River, Ontario était la principale source mondiale de Molybdène-99, utilisé dans 80 % des procédures diagnostiques de médecine nucléaire. Quand il a fermé pour réparations en 2009, il a causé une crise mondiale d'isotopes médicaux."}},
  {category:"science",difficulty:"easy",type:"tf",question:{en:"The first commercial Android smartphone was developed by a Canadian-led team.",fr:"Le premier téléphone intelligent Android commercial a été développé par une équipe dirigée par un Canadien."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Andy Rubin, who co-founded Android Inc. in 2003, worked alongside many Canadian engineers. Chris DeSalvo, a Canadian, was a key engineer on the original Android team before Google acquired them in 2005.",fr:"Andy Rubin, qui a cofondé Android Inc. en 2003, a travaillé avec de nombreux ingénieurs canadiens. Chris DeSalvo, un Canadien, était un ingénieur clé de l'équipe Android originale avant que Google ne les acquière en 2005."}},
  {category:"science",difficulty:"medium",type:"mc",question:{en:"What significant contribution did Canadian Willard Boyle make to technology?",fr:"Quelle contribution significative le Canadien Willard Boyle a-t-il apportée à la technologie?"},options:{en:["Co-invented the CCD sensor (basis of digital cameras) — won 2009 Nobel Prize","Invented the internet","Created Wi-Fi","Built the first computer"],fr:["Co-inventé le capteur CCD (base des appareils photo numériques) — a remporté le prix Nobel 2009","Inventé l'internet","Créé le Wi-Fi","Construit le premier ordinateur"]},correctIndex:0,funFact:{en:"Willard Boyle from Amherst, Nova Scotia co-invented the charge-coupled device (CCD) at Bell Labs. This technology is in every digital camera, smartphone camera, and satellite imaging system in the world.",fr:"Willard Boyle d'Amherst, Nouvelle-Écosse a co-inventé le dispositif à transfert de charge (CCD) chez Bell Labs. Cette technologie se trouve dans chaque appareil photo numérique, caméra de smartphone et système d'imagerie satellite au monde."}},

  // FOOD expansion
  {category:"food",difficulty:"easy",type:"mc",question:{en:"What Canadian candy is made of chocolate-covered sponge toffee?",fr:"Quel bonbon canadien est fait de toffee éponge enrobé de chocolat?"},options:{en:["Crunchie bar (or Violet Crumble)","Smarties","Aero","Caramilk"],fr:["Barre Crunchie (ou Violet Crumble)","Smarties","Aero","Caramilk"]},correctIndex:0,funFact:{en:"While Crunchie bars are also popular in the UK, Canada has its own unique chocolate bar culture including Caramilk (the 'secret' of how they get the caramel inside is a famous Canadian marketing mystery) and Big Turk.",fr:"Bien que les barres Crunchie soient aussi populaires au Royaume-Uni, le Canada a sa propre culture de barres chocolatées unique, y compris Caramilk (le « secret » de comment ils mettent le caramel à l'intérieur est un célèbre mystère marketing canadien) et Big Turk."}},
  {category:"food",difficulty:"medium",type:"mc",question:{en:"What is 'lobster roll' culture in the Maritime provinces?",fr:"Qu'est-ce que la culture du « lobster roll » dans les provinces maritimes?"},options:{en:["Fresh lobster meat in a toasted bun — a summer staple, often served cold with mayo or warm with butter","Sushi rolls with lobster","A type of bread","A lobster-shaped pastry"],fr:["De la chair de homard fraîche dans un pain grillé — un aliment estival de base, souvent servi froid avec de la mayo ou chaud avec du beurre","Des sushis au homard","Un type de pain","Une pâtisserie en forme de homard"]},correctIndex:0,funFact:{en:"The cold-vs-hot lobster roll debate is fierce in the Maritimes. New Brunswick and Nova Scotia each claim the best lobster rolls. Atlantic Canada produces about 60% of the world's lobster catch.",fr:"Le débat sur le lobster roll froid vs chaud est féroce dans les Maritimes. Le Nouveau-Brunswick et la Nouvelle-Écosse revendiquent chacun les meilleurs lobster rolls. Le Canada atlantique produit environ 60 % des prises mondiales de homard."}},
  {category:"food",difficulty:"hard",type:"mc",question:{en:"What is 'muktuk,' a traditional Inuit food?",fr:"Qu'est-ce que le « muktuk », un aliment traditionnel inuit?"},options:{en:["Frozen whale skin and blubber, eaten raw","A type of fish stew","Dried caribou meat","Fermented seal oil"],fr:["De la peau de baleine et du lard congelés, mangés crus","Un type de ragoût de poisson","De la viande de caribou séchée","De l'huile de phoque fermentée"]},correctIndex:0,funFact:{en:"Muktuk is an important part of Inuit diet, rich in vitamins C and D — essential nutrients in the Arctic where fresh produce is scarce. It's typically made from narwhal, beluga, or bowhead whale.",fr:"Le muktuk est une partie importante du régime alimentaire inuit, riche en vitamines C et D — des nutriments essentiels dans l'Arctique où les produits frais sont rares. Il est typiquement fait de narval, de béluga ou de baleine boréale."}},
  {category:"food",difficulty:"easy",type:"mc",question:{en:"What is 'poutine râpée,' a traditional Acadian dish?",fr:"Qu'est-ce que la poutine râpée, un plat traditionnel acadien?"},options:{en:["A boiled potato dumpling stuffed with pork — NOT the fries/gravy poutine","A variation of Quebec poutine","A type of pancake","A meat stew"],fr:["Une boulette de pommes de terre bouillie farcie de porc — PAS la poutine frites/sauce","Une variation de la poutine québécoise","Un type de crêpe","Un ragoût de viande"]},correctIndex:0,funFact:{en:"Acadian poutine râpée is completely unrelated to Quebec poutine! It's a ball of grated and mashed potato with a pork centre, boiled for hours. The word 'poutine' in Acadian means 'a mess' or 'pudding.'",fr:"La poutine râpée acadienne est complètement différente de la poutine québécoise! C'est une boule de pommes de terre râpées et en purée avec un centre de porc, bouillie pendant des heures. Le mot « poutine » en acadien signifie « un gâchis » ou « pouding »."}},
  {category:"food",difficulty:"medium",type:"tf",question:{en:"Canada's wine industry, particularly in BC's Okanagan and Ontario's Niagara region, produces world-class ice wine.",fr:"L'industrie vinicole du Canada, particulièrement dans l'Okanagan en C.-B. et la région du Niagara en Ontario, produit du vin de glace de classe mondiale."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Canada is the world's largest producer of ice wine! The grapes must naturally freeze on the vine at -8°C or lower. Inniskillin, an Ontario winery, won the Grand Prix d'Honneur at Vinexpo in 1991, putting Canadian ice wine on the world map.",fr:"Le Canada est le plus grand producteur mondial de vin de glace! Les raisins doivent geler naturellement sur la vigne à -8°C ou moins. Inniskillin, un vignoble ontarien, a remporté le Grand Prix d'Honneur à Vinexpo en 1991, mettant le vin de glace canadien sur la carte mondiale."}},

  // HISTORY expansion
  {category:"history",difficulty:"easy",type:"tf",question:{en:"The maple leaf has been a symbol of Canada since the 1700s, long before it appeared on the flag.",fr:"La feuille d'érable est un symbole du Canada depuis les années 1700, bien avant son apparition sur le drapeau."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"The maple leaf was used as a Canadian symbol as early as 1700 in New France. It appeared on coins starting in 1876. The red maple leaf on the flag, adopted in 1965, has 11 points — not based on any particular maple species.",fr:"La feuille d'érable a été utilisée comme symbole canadien dès 1700 en Nouvelle-France. Elle est apparue sur les pièces de monnaie à partir de 1876. La feuille d'érable rouge sur le drapeau, adoptée en 1965, a 11 pointes — ne correspond à aucune espèce d'érable particulière."}},
  {category:"history",difficulty:"medium",type:"mc",question:{en:"What was the significance of the 'On-to-Ottawa Trek' of 1935?",fr:"Quelle était la signification de la « Marche sur Ottawa » de 1935?"},options:{en:["A protest march by unemployed workers during the Great Depression","A military parade","A religious pilgrimage","A sports event"],fr:["Une marche de protestation de travailleurs au chômage pendant la Grande Dépression","Un défilé militaire","Un pèlerinage religieux","Un événement sportif"]},correctIndex:0,funFact:{en:"Thousands of unemployed men hopped freight trains heading to Ottawa to demand better conditions in relief camps. The trek was violently stopped in Regina by the RCMP in what became known as the 'Regina Riot.'",fr:"Des milliers d'hommes au chômage ont sauté dans des trains de marchandises vers Ottawa pour exiger de meilleures conditions dans les camps de secours. La marche a été violemment arrêtée à Regina par la GRC dans ce qui est devenu connu comme l'« Émeute de Regina »."}},
  {category:"history",difficulty:"hard",type:"mc",question:{en:"What role did Canada play in liberating the Netherlands in World War II?",fr:"Quel rôle le Canada a-t-il joué dans la libération des Pays-Bas pendant la Seconde Guerre mondiale?"},options:{en:["The Canadian army liberated the Netherlands in 1944-45, creating a lasting bond between the two countries","Canada was not involved in European liberation","Canada only provided supplies","Canada liberated France, not the Netherlands"],fr:["L'armée canadienne a libéré les Pays-Bas en 1944-45, créant un lien durable entre les deux pays","Le Canada n'a pas participé à la libération européenne","Le Canada n'a fourni que des approvisionnements","Le Canada a libéré la France, pas les Pays-Bas"]},correctIndex:0,funFact:{en:"Over 7,600 Canadians died liberating the Netherlands. In gratitude, the Dutch send 20,000 tulip bulbs to Ottawa every year — the basis of the Canadian Tulip Festival. Dutch Princess Margriet was born in Ottawa during the war.",fr:"Plus de 7 600 Canadiens sont morts en libérant les Pays-Bas. En gratitude, les Néerlandais envoient 20 000 bulbes de tulipes à Ottawa chaque année — la base du Festival canadien des tulipes. La princesse néerlandaise Margriet est née à Ottawa pendant la guerre."}},

  // GEOGRAPHY expansion
  {category:"geography",difficulty:"medium",type:"mc",question:{en:"What is the 'Icefields Parkway' in the Canadian Rockies?",fr:"Qu'est-ce que la « Promenade des Glaciers » dans les Rocheuses canadiennes?"},options:{en:["A 232-km highway between Jasper and Lake Louise, passing glaciers and turquoise lakes","A snowmobile trail","A frozen river path","An airport runway"],fr:["Une autoroute de 232 km entre Jasper et Lake Louise, passant par des glaciers et des lacs turquoise","Un sentier de motoneige","Un chemin de rivière gelée","Une piste d'aéroport"]},correctIndex:0,funFact:{en:"The Icefields Parkway (Highway 93 North) is regularly listed among the world's most scenic drives. It passes by the Columbia Icefield, one of the largest ice masses in the Rocky Mountains, and dozens of glacier-fed lakes.",fr:"La Promenade des Glaciers (Route 93 Nord) est régulièrement classée parmi les routes les plus pittoresques du monde. Elle passe par le champ de glace Columbia, l'une des plus grandes masses de glace des Rocheuses, et des dizaines de lacs alimentés par les glaciers."}},
  {category:"geography",difficulty:"hard",type:"mc",question:{en:"What is the 'Ring of Fire' in Northern Ontario?",fr:"Qu'est-ce que le « Cercle de feu » dans le nord de l'Ontario?"},options:{en:["A massive mineral deposit area containing chromite, nickel, and copper","A volcanic region","A forest fire zone","An Indigenous ceremonial site"],fr:["Une zone massive de gisements minéraux contenant de la chromite, du nickel et du cuivre","Une région volcanique","Une zone de feux de forêt","Un site cérémoniel autochtone"]},correctIndex:0,funFact:{en:"Ontario's Ring of Fire contains one of the largest chromite deposits in the world, worth an estimated $60 billion. Development is controversial due to environmental concerns and unresolved First Nations land rights.",fr:"Le Cercle de feu de l'Ontario contient l'un des plus grands gisements de chromite au monde, d'une valeur estimée à 60 milliards de dollars. Le développement est controversé en raison de préoccupations environnementales et de droits fonciers non résolus des Premières Nations."}},

  // CULTURE expansion
  {category:"culture",difficulty:"medium",type:"mc",question:{en:"What is 'Winterlude' (Bal de Neige)?",fr:"Qu'est-ce que le « Bal de Neige »?"},options:{en:["Ottawa's annual winter festival featuring ice sculptures, skating, and snow activities","A Christmas concert","A ski competition","A New Year's Eve party"],fr:["Le festival hivernal annuel d'Ottawa mettant en vedette des sculptures de glace, du patinage et des activités de neige","Un concert de Noël","Une compétition de ski","Une fête du Nouvel An"]},correctIndex:0,funFact:{en:"Winterlude runs for three weekends every February and features the world's largest skating rink (Rideau Canal), massive ice sculptures in Confederation Park, and snow playgrounds in Gatineau. It attracts over 600,000 visitors.",fr:"Le Bal de Neige se déroule sur trois fins de semaine chaque février et présente la plus grande patinoire du monde (canal Rideau), des sculptures de glace massives au parc de la Confédération et des aires de jeux de neige à Gatineau. Il attire plus de 600 000 visiteurs."}},
  {category:"culture",difficulty:"hard",type:"mc",question:{en:"What is the 'Order of Canada'?",fr:"Qu'est-ce que l'« Ordre du Canada »?"},options:{en:["Canada's highest civilian honour, recognizing outstanding achievement and service","A religious order","A military rank","A political party"],fr:["La plus haute distinction civile du Canada, reconnaissant les réalisations et le service exceptionnels","Un ordre religieux","Un grade militaire","Un parti politique"]},correctIndex:0,funFact:{en:"Established in 1967, the Order of Canada has three levels: Member (C.M.), Officer (O.C.), and Companion (C.C.). Its motto is 'DESIDERANTES MELIOREM PATRIAM' — 'They desire a better country.' Recipients include scientists, artists, humanitarians, and athletes.",fr:"Établi en 1967, l'Ordre du Canada a trois niveaux : Membre (C.M.), Officier (O.C.) et Compagnon (C.C.). Sa devise est « DESIDERANTES MELIOREM PATRIAM » — « Ils désirent un meilleur pays ». Les récipiendaires comprennent des scientifiques, des artistes, des humanitaires et des athlètes."}},

  // FOOD expansion
  {category:"food",difficulty:"easy",type:"mc",question:{en:"What Canadian snack is made by Dare and comes in varieties like maple leaf cream cookies?",fr:"Quelle collation canadienne est fabriquée par Dare et vient en variétés comme les biscuits à la crème d'érable?"},options:{en:["Dare Maple Leaf Creme Cookies","Oreos","Tim Tams","Digestives"],fr:["Biscuits à la crème d'érable Dare","Oreos","Tim Tams","Digestives"]},correctIndex:0,funFact:{en:"Dare Foods, based in Kitchener, Ontario, has been making Canadian snacks since 1892. Their maple leaf cream cookies are a beloved souvenir for tourists and a pantry staple for Canadians.",fr:"Dare Foods, basée à Kitchener, Ontario, fabrique des collations canadiennes depuis 1892. Leurs biscuits à la crème d'érable sont un souvenir bien-aimé pour les touristes et un aliment de base pour les Canadiens."}},
  {category:"food",difficulty:"hard",type:"mc",question:{en:"What is 'seal flipper pie,' a traditional Newfoundland dish?",fr:"Qu'est-ce que la « tourte aux nageoires de phoque », un plat traditionnel terre-neuvien?"},options:{en:["A pie made with seal flippers, root vegetables, and pastry crust","A seafood dessert","A decorative pie","A vegan pie shaped like flippers"],fr:["Une tourte faite avec des nageoires de phoque, des légumes-racines et une croûte de pâte","Un dessert aux fruits de mer","Une tourte décorative","Une tourte végétalienne en forme de nageoires"]},correctIndex:0,funFact:{en:"Seal flipper pie is a spring tradition in Newfoundland during sealing season. It's controversial outside Atlantic Canada but remains a deeply traditional food in Newfoundland culture, particularly around Easter.",fr:"La tourte aux nageoires de phoque est une tradition printanière à Terre-Neuve pendant la saison de la chasse au phoque. C'est controversé en dehors du Canada atlantique mais reste un aliment profondément traditionnel dans la culture terre-neuvienne, particulièrement autour de Pâques."}},

  // ═══════════════════════════════════════════
  // FINAL PUSH — 114+ more to exceed 500
  // ═══════════════════════════════════════════
  {category:"history",difficulty:"easy",type:"mc",question:{en:"What is the poppy a symbol of in Canada?",fr:"De quoi le coquelicot est-il le symbole au Canada?"},options:{en:["Remembrance of fallen soldiers","Spring gardening","Quebec heritage","The monarchy"],fr:["Le souvenir des soldats tombés","Le jardinage printanier","Le patrimoine québécois","La monarchie"]},correctIndex:0,funFact:{en:"Canadians wear poppies leading up to Remembrance Day (Nov 11). The tradition was inspired by John McCrae's poem 'In Flanders Fields,' written during WWI in 1915 near Ypres, Belgium.",fr:"Les Canadiens portent des coquelicots à l'approche du jour du Souvenir (11 nov). La tradition a été inspirée par le poème « Au champ d'honneur » de John McCrae, écrit pendant la Première Guerre mondiale en 1915 près d'Ypres, Belgique."}},
  {category:"history",difficulty:"medium",type:"mc",question:{en:"What significant event occurred at Juno Beach on June 6, 1944?",fr:"Quel événement important s'est produit à la plage Juno le 6 juin 1944?"},options:{en:["Canadian forces landed as part of the D-Day invasion of Normandy","A naval training exercise","A diplomatic meeting","A hurricane"],fr:["Les forces canadiennes ont débarqué dans le cadre de l'invasion de la Normandie le jour J","Un exercice d'entraînement naval","Une réunion diplomatique","Un ouragan"]},correctIndex:0,funFact:{en:"Juno Beach was assigned to the Canadian 3rd Infantry Division. By the end of D-Day, Canadians had advanced further inland than any other Allied force, at a cost of 340 killed and 574 wounded.",fr:"La plage Juno a été assignée à la 3e Division d'infanterie canadienne. À la fin du jour J, les Canadiens avaient avancé plus loin dans les terres que toute autre force alliée, au prix de 340 morts et 574 blessés."}},
  {category:"history",difficulty:"hard",type:"mc",question:{en:"Which PM introduced Medicare (universal healthcare) in Canada?",fr:"Quel PM a introduit l'assurance-maladie (soins de santé universels) au Canada?"},options:{en:["Tommy Douglas pioneered it in Saskatchewan; Pearson made it national","Pierre Trudeau","Brian Mulroney","Stephen Harper"],fr:["Tommy Douglas l'a lancée en Saskatchewan; Pearson l'a rendue nationale","Pierre Trudeau","Brian Mulroney","Stephen Harper"]},correctIndex:0,funFact:{en:"Tommy Douglas, the 'Father of Medicare,' introduced universal hospital insurance in Saskatchewan in 1947. It became national under PM Pearson in 1966. Douglas was voted 'The Greatest Canadian' in a 2004 CBC poll.",fr:"Tommy Douglas, le « père de l'assurance-maladie », a introduit l'assurance hospitalière universelle en Saskatchewan en 1947. Elle est devenue nationale sous le PM Pearson en 1966. Douglas a été élu « le plus grand Canadien » dans un sondage CBC de 2004."}},
  {category:"history",difficulty:"easy",type:"tf",question:{en:"Canada was the first country to adopt an official multiculturalism policy in 1971.",fr:"Le Canada a été le premier pays à adopter une politique officielle de multiculturalisme en 1971."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"PM Pierre Trudeau announced Canada's multiculturalism policy in 1971. The Canadian Multiculturalism Act became law in 1988, making Canada the first country in the world to enshrine multiculturalism in legislation.",fr:"Le PM Pierre Trudeau a annoncé la politique de multiculturalisme du Canada en 1971. La Loi sur le multiculturalisme canadien est devenue loi en 1988, faisant du Canada le premier pays au monde à enchâsser le multiculturalisme dans la législation."}},
  {category:"history",difficulty:"hard",type:"mc",question:{en:"What was the Acadian Expulsion (Grand Dérangement) of 1755?",fr:"Qu'était l'Expulsion des Acadiens (Grand Dérangement) de 1755?"},options:{en:["The British forced deportation of French-speaking Acadians from the Maritime provinces","A voluntary migration to Quebec","A fishing industry collapse","A flood evacuation"],fr:["La déportation forcée par les Britanniques des Acadiens francophones des provinces maritimes","Une migration volontaire vers le Québec","Un effondrement de l'industrie de la pêche","Une évacuation due à une inondation"]},correctIndex:0,funFact:{en:"Over 10,000 Acadians were forcibly deported between 1755-1764. Many ended up in Louisiana, where they became the 'Cajuns.' It's considered an act of ethnic cleansing and remains a defining event in Acadian identity.",fr:"Plus de 10 000 Acadiens ont été déportés de force entre 1755 et 1764. Beaucoup se sont retrouvés en Louisiane, où ils sont devenus les « Cajuns ». C'est considéré comme un acte de nettoyage ethnique et reste un événement déterminant de l'identité acadienne."}},
  {category:"geography",difficulty:"easy",type:"mc",question:{en:"Which Canadian city is known as 'Hollywood North'?",fr:"Quelle ville canadienne est connue comme « Hollywood du Nord »?"},options:{en:["Vancouver","Toronto","Montreal","Calgary"],fr:["Vancouver","Toronto","Montréal","Calgary"]},correctIndex:0,funFact:{en:"Vancouver's diverse landscapes (ocean, mountains, forests, urban) make it a stand-in for many US cities in film. Major productions filmed there include Deadpool, Twilight, and dozens of TV series.",fr:"Les paysages diversifiés de Vancouver (océan, montagnes, forêts, urbain) en font un substitut pour de nombreuses villes américaines au cinéma. Les grandes productions filmées là-bas incluent Deadpool, Twilight et des dizaines de séries télévisées."}},
  {category:"geography",difficulty:"medium",type:"mc",question:{en:"What is Lake Louise famous for in the Canadian Rockies?",fr:"Pourquoi le lac Louise est-il célèbre dans les Rocheuses canadiennes?"},options:{en:["Its stunning turquoise glacial waters surrounded by mountains","Its hot springs","Its salt content","Its depth"],fr:["Ses eaux glaciaires turquoise époustouflantes entourées de montagnes","Ses sources chaudes","Sa teneur en sel","Sa profondeur"]},correctIndex:0,funFact:{en:"Lake Louise gets its iconic turquoise colour from rock flour — tiny glacial particles suspended in the water. Named after Princess Louise Caroline Alberta, it's one of the most photographed spots in Canada.",fr:"Le lac Louise tire sa couleur turquoise emblématique de la farine de roche — de minuscules particules glaciaires en suspension dans l'eau. Nommé d'après la princesse Louise Caroline Alberta, c'est l'un des endroits les plus photographiés au Canada."}},
  {category:"geography",difficulty:"hard",type:"mc",question:{en:"What is the world's highest tide recorded at Burntcoat Head, Nova Scotia?",fr:"Quelle est la plus haute marée au monde enregistrée à Burntcoat Head, Nouvelle-Écosse?"},options:{en:["About 16 metres (53 feet)","About 5 metres","About 30 metres","About 2 metres"],fr:["Environ 16 mètres (53 pieds)","Environ 5 mètres","Environ 30 mètres","Environ 2 mètres"]},correctIndex:0,funFact:{en:"Burntcoat Head in the Bay of Fundy holds the Guinness World Record for the highest tides. The difference between high and low tide can be as much as 16.3 metres — enough to cover a five-story building!",fr:"Burntcoat Head dans la baie de Fundy détient le record Guinness des plus hautes marées. La différence entre la marée haute et la marée basse peut atteindre 16,3 mètres — assez pour couvrir un immeuble de cinq étages!"}},
  {category:"geography",difficulty:"easy",type:"mc",question:{en:"What province has the motto 'Je me souviens' (I remember) on its license plates?",fr:"Quelle province a la devise « Je me souviens » sur ses plaques d'immatriculation?"},options:{en:["Quebec","Ontario","Manitoba","New Brunswick"],fr:["Québec","Ontario","Manitoba","Nouveau-Brunswick"]},correctIndex:0,funFact:{en:"'Je me souviens' has been Quebec's motto since 1883 and appears on every Quebec license plate. Its exact meaning is debated — some say it refers to New France, others to Quebec's distinct cultural identity.",fr:"« Je me souviens » est la devise du Québec depuis 1883 et apparaît sur chaque plaque d'immatriculation québécoise. Sa signification exacte est débattue — certains disent qu'elle réfère à la Nouvelle-France, d'autres à l'identité culturelle distincte du Québec."}},
  {category:"geography",difficulty:"medium",type:"tf",question:{en:"Banff was Canada's first national park, established in 1885.",fr:"Banff a été le premier parc national du Canada, établi en 1885."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Banff National Park in Alberta was the third national park in the world (after Yellowstone in the US and Royal National Park in Australia). It was established after railway workers discovered hot springs in the Rockies.",fr:"Le parc national Banff en Alberta a été le troisième parc national au monde (après Yellowstone aux États-Unis et le parc national Royal en Australie). Il a été établi après que des travailleurs ferroviaires ont découvert des sources chaudes dans les Rocheuses."}},
  {category:"culture",difficulty:"easy",type:"mc",question:{en:"What is Thanksgiving in Canada and when is it celebrated?",fr:"Qu'est-ce que l'Action de grâce au Canada et quand est-elle célébrée?"},options:{en:["A harvest festival on the second Monday of October","November 25","December 1","The first Monday of September"],fr:["Un festival de la récolte le deuxième lundi d'octobre","Le 25 novembre","Le 1er décembre","Le premier lundi de septembre"]},correctIndex:0,funFact:{en:"Canadian Thanksgiving is over a month earlier than American Thanksgiving because Canada's harvest season comes earlier. Canada's first Thanksgiving was in 1578 — 43 years before the Pilgrims' feast in Plymouth!",fr:"L'Action de grâce canadienne est plus d'un mois avant celle des Américains parce que la saison des récoltes du Canada arrive plus tôt. La première Action de grâce du Canada date de 1578 — 43 ans avant le festin des Pèlerins à Plymouth!"}},
  {category:"culture",difficulty:"medium",type:"mc",question:{en:"Which Canadian band is known for the concept album '2112' and the song 'Tom Sawyer'?",fr:"Quel groupe canadien est connu pour l'album concept « 2112 » et la chanson « Tom Sawyer »?"},options:{en:["Rush","The Tragically Hip","Arcade Fire","Nickelback"],fr:["Rush","The Tragically Hip","Arcade Fire","Nickelback"]},correctIndex:0,funFact:{en:"Rush, from Toronto, is one of the best-selling Canadian bands of all time. Drummer Neil Peart is considered one of the greatest rock drummers ever. The band was inducted into the Rock and Roll Hall of Fame in 2013.",fr:"Rush, de Toronto, est l'un des groupes canadiens les plus vendus de tous les temps. Le batteur Neil Peart est considéré comme l'un des plus grands batteurs rock de tous les temps. Le groupe a été intronisé au Rock and Roll Hall of Fame en 2013."}},
  {category:"culture",difficulty:"hard",type:"mc",question:{en:"What is the 'National Film Board of Canada' (NFB) known for?",fr:"Pour quoi l'« Office national du film du Canada » (ONF) est-il connu?"},options:{en:["Pioneering animation and documentary filmmaking since 1939","Only making war films","Being a TV network","Producing Hollywood blockbusters"],fr:["Être pionnier en animation et en documentaire depuis 1939","Ne faire que des films de guerre","Être un réseau de télévision","Produire des blockbusters hollywoodiens"]},correctIndex:0,funFact:{en:"The NFB has produced over 13,000 films and won 12 Academy Awards. Norman McLaren's innovative animations at the NFB are considered masterpieces. All NFB films are now available free online.",fr:"L'ONF a produit plus de 13 000 films et remporté 12 Oscars. Les animations innovantes de Norman McLaren à l'ONF sont considérées comme des chefs-d'œuvre. Tous les films de l'ONF sont maintenant disponibles gratuitement en ligne."}},
  {category:"culture",difficulty:"easy",type:"mc",question:{en:"What is the 'Canadian Tuxedo'?",fr:"Qu'est-ce que le « Tuxedo canadien »?"},options:{en:["Wearing denim on denim (jean jacket with jeans)","A formal black-tie outfit","A plaid shirt with khakis","A hockey jersey"],fr:["Porter du denim sur du denim (veste en jean avec des jeans)","Une tenue formelle cravate noire","Une chemise à carreaux avec un pantalon kaki","Un chandail de hockey"]},correctIndex:0,funFact:{en:"The term became famous after Bing Crosby was reportedly denied entry to a Vancouver hotel for wearing all denim. Levi's then made him a custom denim tuxedo! The Canadian Tuxedo has since become an ironic fashion statement.",fr:"Le terme est devenu célèbre après que Bing Crosby se serait vu refuser l'entrée d'un hôtel de Vancouver pour avoir porté tout en denim. Levi's lui a ensuite fait un smoking en denim sur mesure! Le Tuxedo canadien est depuis devenu une déclaration de mode ironique."}},
  {category:"language",difficulty:"easy",type:"mc",question:{en:"What does 'Timmies run' mean in Canadian English?",fr:"Que signifie « Timmies run » en anglais canadien?"},options:{en:["A trip to Tim Hortons to get coffee/donuts for everyone","A marathon sponsored by Tim Hortons","A delivery service","A morning jog"],fr:["Un voyage au Tim Hortons pour chercher du café/beignes pour tout le monde","Un marathon commandité par Tim Hortons","Un service de livraison","Un jogging matinal"]},correctIndex:0,funFact:{en:"'I'm doing a Timmies run — want anything?' is heard in Canadian offices daily. Tim Hortons processes about 2 billion coffee orders per year. Going on a 'Timmies run' is a workplace bonding ritual.",fr:"« Je fais un Timmies run — tu veux quelque chose? » s'entend quotidiennement dans les bureaux canadiens. Tim Hortons traite environ 2 milliards de commandes de café par an. Faire un « Timmies run » est un rituel de rapprochement au bureau."}},
  {category:"language",difficulty:"medium",type:"mc",question:{en:"What Québécois expression means to be angry or frustrated?",fr:"Quelle expression québécoise signifie être en colère ou frustré?"},options:{en:["Être en beau joualvert","Avoir le blues","Faire la fête","Être fatigué"],fr:["Être en beau joualvert","Avoir le blues","Faire la fête","Être fatigué"]},correctIndex:0,funFact:{en:"'Joualvert' is an old sacre — a euphemism for 'diable vert' (green devil). Québécois French has a rich vocabulary of emotional expressions that don't exist in European French, making it incredibly expressive.",fr:"« Joualvert » est un vieux sacre — un euphémisme pour « diable vert ». Le français québécois a un riche vocabulaire d'expressions émotionnelles qui n'existent pas en français européen, le rendant incroyablement expressif."}},
  {category:"language",difficulty:"hard",type:"mc",question:{en:"What is the significance of the French immersion program in Canadian education?",fr:"Quelle est la signification du programme d'immersion française dans l'éducation canadienne?"},options:{en:["A program where anglophone children learn curriculum in French — now the most popular bilingual education model worldwide","A French cooking class","A study abroad program in France","A translation service"],fr:["Un programme où les enfants anglophones apprennent le curriculum en français — maintenant le modèle d'éducation bilingue le plus populaire au monde","Un cours de cuisine française","Un programme d'études à l'étranger en France","Un service de traduction"]},correctIndex:0,funFact:{en:"French immersion started in 1965 in St. Lambert, Quebec when English-speaking parents wanted their children to be bilingual. Over 450,000 Canadian students are now enrolled in French immersion — it's been adopted by countries worldwide.",fr:"L'immersion française a commencé en 1965 à Saint-Lambert, Québec quand des parents anglophones voulaient que leurs enfants soient bilingues. Plus de 450 000 étudiants canadiens sont maintenant inscrits en immersion française — elle a été adoptée par des pays du monde entier."}},
  {category:"sports",difficulty:"easy",type:"mc",question:{en:"What is the name of the trophy awarded to the CFL champion?",fr:"Quel est le nom du trophée remis au champion de la LCF?"},options:{en:["The Grey Cup","The Stanley Cup","The Vanier Cup","The Memorial Cup"],fr:["La Coupe Grey","La Coupe Stanley","La Coupe Vanier","La Coupe Memorial"]},correctIndex:0,funFact:{en:"The Grey Cup was donated by Governor General Earl Grey in 1909. It's one of the oldest trophies in professional sports. The Grey Cup game is a national event with tailgate parties from coast to coast.",fr:"La Coupe Grey a été offerte par le gouverneur général Earl Grey en 1909. C'est l'un des plus vieux trophées du sport professionnel. Le match de la Coupe Grey est un événement national avec des fêtes de hayon de coast à coast."}},
  {category:"sports",difficulty:"medium",type:"tf",question:{en:"Canada has won more Olympic medals in winter sports than any other country.",fr:"Le Canada a remporté plus de médailles olympiques en sports d'hiver que tout autre pays."},options:{en:[],fr:[]},correctIndex:1,funFact:{en:"This is false — Norway holds the record for most Winter Olympic medals overall. However, Canada is consistently in the top 5 and holds the record for most gold medals won at a single Winter Olympics (14 golds at Vancouver 2010).",fr:"C'est faux — la Norvège détient le record du plus grand nombre de médailles olympiques d'hiver au total. Cependant, le Canada est constamment dans le top 5 et détient le record du plus grand nombre de médailles d'or remportées lors d'un seul Jeux olympiques d'hiver (14 médailles d'or à Vancouver 2010)."}},
  {category:"sports",difficulty:"hard",type:"mc",question:{en:"Which Toronto Blue Jays player hit a walk-off home run to win the 1993 World Series?",fr:"Quel joueur des Blue Jays de Toronto a frappé un circuit pour gagner la Série mondiale de 1993?"},options:{en:["Joe Carter","Roberto Alomar","Paul Molitor","John Olerud"],fr:["Joe Carter","Roberto Alomar","Paul Molitor","John Olerud"]},correctIndex:0,funFact:{en:"Joe Carter's walk-off homer in Game 6 made the Blue Jays back-to-back World Series champions (1992-93). It's only the second walk-off homer to end a World Series in history. The Jays remain the only Canadian team to win the World Series.",fr:"Le circuit de Joe Carter au match 6 a fait des Blue Jays des champions consécutifs de la Série mondiale (1992-93). C'est seulement le deuxième circuit gagnant à mettre fin à une Série mondiale dans l'histoire. Les Jays restent la seule équipe canadienne à remporter la Série mondiale."}},
  {category:"indigenous",difficulty:"easy",type:"mc",question:{en:"What language family does Cree belong to — the most widely spoken Indigenous language in Canada?",fr:"À quelle famille linguistique appartient le cri — la langue autochtone la plus parlée au Canada?"},options:{en:["Algonquian","Iroquoian","Athabaskan","Inuit"],fr:["Algonquien","Iroquoien","Athapascan","Inuit"]},correctIndex:0,funFact:{en:"Cree is spoken by over 96,000 people across Canada from Alberta to Quebec. It has several dialects including Plains Cree, Woods Cree, and Swampy Cree, and uses both Roman and syllabic writing systems.",fr:"Le cri est parlé par plus de 96 000 personnes à travers le Canada, de l'Alberta au Québec. Il a plusieurs dialectes dont le cri des Plaines, le cri des Bois et le cri des Marais, et utilise les systèmes d'écriture romain et syllabique."}},
  {category:"indigenous",difficulty:"medium",type:"mc",question:{en:"What is 'smudging' in many First Nations spiritual practices?",fr:"Qu'est-ce que la « purification par la fumée » dans les pratiques spirituelles de nombreuses Premières Nations?"},options:{en:["Burning sacred plants (sage, sweetgrass, cedar, tobacco) for spiritual cleansing","A type of painting","A dance ceremony","A cooking technique"],fr:["Brûler des plantes sacrées (sauge, foin d'odeur, cèdre, tabac) pour la purification spirituelle","Un type de peinture","Une cérémonie de danse","Une technique de cuisson"]},correctIndex:0,funFact:{en:"The four sacred medicines used in smudging — sage, sweetgrass, cedar, and tobacco — each have specific purposes. Smudging ceremonies are now recognized in many Canadian institutions including hospitals, schools, and courts.",fr:"Les quatre médecines sacrées utilisées dans la purification — sauge, foin d'odeur, cèdre et tabac — ont chacune des objectifs spécifiques. Les cérémonies de purification sont maintenant reconnues dans de nombreuses institutions canadiennes, y compris les hôpitaux, les écoles et les tribunaux."}},
  {category:"indigenous",difficulty:"hard",type:"mc",question:{en:"What is the significance of the 'Red Dress' in Canadian Indigenous culture?",fr:"Quelle est la signification de la « Robe rouge » dans la culture autochtone canadienne?"},options:{en:["It symbolizes Missing and Murdered Indigenous Women and Girls (MMIWG)","It's a wedding tradition","It represents a harvest celebration","It's a fashion trend"],fr:["Elle symbolise les Femmes et Filles Autochtones Disparues et Assassinées (FFADA)","C'est une tradition de mariage","Elle représente une célébration de la récolte","C'est une tendance de mode"]},correctIndex:0,funFact:{en:"Artist Jaime Black created the REDress Project in 2010, hanging red dresses in public spaces to draw attention to MMIWG. Red dresses are now displayed across Canada as a powerful visual reminder of this ongoing crisis.",fr:"L'artiste Jaime Black a créé le projet REDress en 2010, accrochant des robes rouges dans des espaces publics pour attirer l'attention sur les FFADA. Des robes rouges sont maintenant exposées à travers le Canada comme un puissant rappel visuel de cette crise continue."}},
  {category:"science",difficulty:"easy",type:"mc",question:{en:"What was invented at McGill University that changed how we communicate?",fr:"Qu'est-ce qui a été inventé à l'Université McGill et qui a changé notre façon de communiquer?"},options:{en:["The world's first web search engine (Archie) in 1990","The telephone","Email","Bluetooth"],fr:["Le premier moteur de recherche web au monde (Archie) en 1990","Le téléphone","Le courriel","Le Bluetooth"]},correctIndex:0,funFact:{en:"Alan Emtage, a student at McGill University in Montreal, created Archie in 1990 — the world's first internet search engine. It predated the World Wide Web itself and was the precursor to Google, Yahoo, and all modern search.",fr:"Alan Emtage, un étudiant à l'Université McGill à Montréal, a créé Archie en 1990 — le premier moteur de recherche internet au monde. Il a précédé le World Wide Web lui-même et a été le précurseur de Google, Yahoo et toute recherche moderne."}},
  {category:"science",difficulty:"medium",type:"mc",question:{en:"What Canadian-founded company is the world's largest uranium producer?",fr:"Quelle entreprise fondée au Canada est le plus grand producteur d'uranium au monde?"},options:{en:["Cameco (based in Saskatoon)","Suncor","Barrick Gold","Teck Resources"],fr:["Cameco (basée à Saskatoon)","Suncor","Barrick Gold","Teck Resources"]},correctIndex:0,funFact:{en:"Saskatchewan has some of the richest uranium deposits in the world. Cameco's McArthur River mine was the world's largest high-grade uranium mine. Canada is a major player in nuclear technology through CANDU reactors and uranium exports.",fr:"La Saskatchewan possède certains des plus riches gisements d'uranium au monde. La mine McArthur River de Cameco était la plus grande mine d'uranium à haute teneur au monde. Le Canada est un acteur majeur de la technologie nucléaire grâce aux réacteurs CANDU et aux exportations d'uranium."}},
  {category:"science",difficulty:"hard",type:"tf",question:{en:"The term 'artificial intelligence' was coined at a workshop where Canadian researchers played a key role.",fr:"Le terme « intelligence artificielle » a été inventé lors d'un atelier où des chercheurs canadiens ont joué un rôle clé."},options:{en:[],fr:[]},correctIndex:1,funFact:{en:"This is false — the term was coined at the 1956 Dartmouth Conference by John McCarthy (American). However, Canadian researchers like Geoffrey Hinton, Yoshua Bengio, and Richard Sutton later became foundational figures in modern AI. Toronto and Montreal are now global AI capitals.",fr:"C'est faux — le terme a été inventé à la conférence de Dartmouth en 1956 par John McCarthy (Américain). Cependant, des chercheurs canadiens comme Geoffrey Hinton, Yoshua Bengio et Richard Sutton sont devenus des figures fondatrices de l'IA moderne. Toronto et Montréal sont maintenant des capitales mondiales de l'IA."}},
  {category:"food",difficulty:"easy",type:"mc",question:{en:"What is a 'flat white' or 'regular' coffee order at Tim Hortons?",fr:"Qu'est-ce qu'un café « régulier » chez Tim Hortons?"},options:{en:["A coffee with one cream and one sugar","Black coffee","A latte","An espresso"],fr:["Un café avec une crème et un sucre","Un café noir","Un latte","Un espresso"]},correctIndex:0,funFact:{en:"At Tim Hortons, 'regular' means one cream, one sugar. A 'double-double' is two and two. This ordering system is uniquely Canadian — try ordering a 'regular' at Starbucks and you'll get a confused look!",fr:"Chez Tim Hortons, « régulier » signifie une crème, un sucre. Un « double-double » c'est deux et deux. Ce système de commande est uniquement canadien — essayez de commander un « régulier » chez Starbucks et vous aurez un regard confus!"}},
  {category:"food",difficulty:"medium",type:"mc",question:{en:"What is 'poutine sauce' traditionally made from?",fr:"De quoi la sauce à poutine est-elle traditionnellement faite?"},options:{en:["A light chicken or turkey gravy (not beef gravy)","Ketchup","Cheese sauce","Tomato sauce"],fr:["Une sauce légère au poulet ou à la dinde (pas de sauce au bœuf)","Du ketchup","Une sauce au fromage","Une sauce tomate"]},correctIndex:0,funFact:{en:"Authentic Quebec poutine uses a light brown chicken or veal gravy, not thick beef gravy. The cheese curds must squeak when bitten — that's how you know they're fresh. If the curds don't squeak, it's not real poutine!",fr:"La poutine authentique du Québec utilise une sauce brune légère au poulet ou au veau, pas une épaisse sauce au bœuf. Le fromage en grains doit faire « couic » quand on le mord — c'est comme ça qu'on sait qu'il est frais. Si les grains ne font pas couic, ce n'est pas de la vraie poutine!"}},
  {category:"food",difficulty:"hard",type:"mc",question:{en:"What is 'Arctic char' and why is it significant in Canadian food?",fr:"Qu'est-ce que l'omble chevalier arctique et pourquoi est-il significatif dans l'alimentation canadienne?"},options:{en:["A cold-water fish native to Canada's north — important to Inuit food sovereignty","A type of seaweed","A berry from the tundra","A fermented drink"],fr:["Un poisson d'eau froide originaire du nord du Canada — important pour la souveraineté alimentaire inuite","Un type d'algue","Une baie de la toundra","Une boisson fermentée"]},correctIndex:0,funFact:{en:"Arctic char is the northernmost freshwater fish in the world and has been a staple of Inuit diet for millennia. It's now farmed sustainably in Canada and appears on high-end restaurant menus across the country.",fr:"L'omble chevalier arctique est le poisson d'eau douce le plus nordique au monde et est un aliment de base du régime inuit depuis des millénaires. Il est maintenant élevé de manière durable au Canada et apparaît dans les menus de restaurants haut de gamme à travers le pays."}},
  {category:"culture",difficulty:"medium",type:"mc",question:{en:"What is 'Canadian content' (CanCon) rules for radio and TV?",fr:"Quelles sont les règles de « contenu canadien » (CanCon) pour la radio et la télé?"},options:{en:["CRTC regulations requiring a minimum percentage of Canadian content on broadcast media","A style of writing","A brand of entertainment","A type of cable package"],fr:["Des réglementations du CRTC exigeant un pourcentage minimum de contenu canadien dans les médias de diffusion","Un style d'écriture","Une marque de divertissement","Un type de forfait câble"]},correctIndex:0,funFact:{en:"Radio stations must play at least 35% Canadian music. This rule helped launch careers of artists like Bryan Adams, Céline Dion, and Drake by guaranteeing airplay. Without CanCon, many Canadian musicians might never have broken through.",fr:"Les stations de radio doivent jouer au moins 35 % de musique canadienne. Cette règle a aidé à lancer les carrières d'artistes comme Bryan Adams, Céline Dion et Drake en garantissant du temps d'antenne. Sans le CanCon, de nombreux musiciens canadiens n'auraient peut-être jamais percé."}},
  {category:"culture",difficulty:"hard",type:"mc",question:{en:"What is unique about Dawson City, Yukon's 'Sourtoe Cocktail'?",fr:"Qu'est-ce qui est unique au « Cocktail Sourtoe » de Dawson City, Yukon?"},options:{en:["A drink containing a real preserved human toe that must touch your lips","A sour apple cocktail","A whiskey with lemon","A non-alcoholic mocktail"],fr:["Un verre contenant un vrai orteil humain conservé qui doit toucher vos lèvres","Un cocktail à la pomme sure","Un whisky au citron","Un mocktail sans alcool"]},correctIndex:0,funFact:{en:"The Sourtoe Cocktail Club has been operating since 1973 at the Downtown Hotel in Dawson City. The rules: 'You can drink it fast, you can drink it slow, but your lips have gotta touch the toe.' Over 100,000 people have tried it!",fr:"Le Club du Cocktail Sourtoe opère depuis 1973 à l'hôtel Downtown de Dawson City. Les règles : « Tu peux le boire vite, tu peux le boire lentement, mais tes lèvres doivent toucher l'orteil ». Plus de 100 000 personnes l'ont essayé!"}},
  {category:"geography",difficulty:"easy",type:"mc",question:{en:"What are the four Atlantic provinces of Canada?",fr:"Quelles sont les quatre provinces atlantiques du Canada?"},options:{en:["New Brunswick, Nova Scotia, Prince Edward Island, Newfoundland and Labrador","Ontario, Quebec, Manitoba, Saskatchewan","BC, Alberta, Saskatchewan, Manitoba","Yukon, NWT, Nunavut, Manitoba"],fr:["Nouveau-Brunswick, Nouvelle-Écosse, Île-du-Prince-Édouard, Terre-Neuve-et-Labrador","Ontario, Québec, Manitoba, Saskatchewan","C.-B., Alberta, Saskatchewan, Manitoba","Yukon, T.N.-O., Nunavut, Manitoba"]},correctIndex:0,funFact:{en:"The three Maritime provinces (NB, NS, PEI) plus Newfoundland and Labrador make up Atlantic Canada. Together they have about 2.4 million people — roughly the population of Houston, Texas.",fr:"Les trois provinces maritimes (N.-B., N.-É., Î.-P.-É.) plus Terre-Neuve-et-Labrador forment le Canada atlantique. Ensemble, elles comptent environ 2,4 millions d'habitants — à peu près la population de Houston, Texas."}},
  {category:"geography",difficulty:"hard",type:"mc",question:{en:"What is the 'Inside Passage' along Canada's west coast?",fr:"Qu'est-ce que le « Passage intérieur » le long de la côte ouest du Canada?"},options:{en:["A protected sea route through islands between Vancouver and Alaska","An underground tunnel","A hiking trail","A river canyon"],fr:["Une route maritime protégée à travers les îles entre Vancouver et l'Alaska","Un tunnel souterrain","Un sentier de randonnée","Un canyon fluvial"]},correctIndex:0,funFact:{en:"The Inside Passage is one of the world's most scenic ferry routes, passing through thousands of islands, past glaciers, and alongside forests. BC Ferries and the Alaska Marine Highway operate along it. You might see whales, eagles, and bears from the deck!",fr:"Le Passage intérieur est l'une des routes de traversier les plus pittoresques au monde, passant à travers des milliers d'îles, devant des glaciers et le long de forêts. BC Ferries et l'Alaska Marine Highway y opèrent. Vous pourriez voir des baleines, des aigles et des ours depuis le pont!"}},
  {category:"history",difficulty:"medium",type:"mc",question:{en:"What Canadian invention changed how people listen to music in the 1960s?",fr:"Quelle invention canadienne a changé la façon dont les gens écoutent de la musique dans les années 1960?"},options:{en:["The electronic music synthesizer (Hugh Le Caine)","The vinyl record","The radio","Headphones"],fr:["Le synthétiseur de musique électronique (Hugh Le Caine)","Le disque vinyle","La radio","Les écouteurs"]},correctIndex:0,funFact:{en:"Hugh Le Caine of the National Research Council built the Electronic Sackbut in 1945 — considered one of the first electronic music synthesizers. His innovations at NRC influenced the development of all modern electronic music.",fr:"Hugh Le Caine du Conseil national de recherches a construit le Sackbut électronique en 1945 — considéré comme l'un des premiers synthétiseurs de musique électronique. Ses innovations au CNR ont influencé le développement de toute la musique électronique moderne."}},
  {category:"indigenous",difficulty:"easy",type:"tf",question:{en:"Canada has more than 630 recognized First Nation communities.",fr:"Le Canada compte plus de 630 communautés des Premières Nations reconnues."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"There are 634 First Nation communities in Canada, speaking over 70 distinct languages from 12 language families. Each community has its own governance, traditions, and relationship with the Crown.",fr:"Il y a 634 communautés des Premières Nations au Canada, parlant plus de 70 langues distinctes de 12 familles linguistiques. Chaque communauté a sa propre gouvernance, ses traditions et sa relation avec la Couronne."}},
  {category:"indigenous",difficulty:"medium",type:"mc",question:{en:"What traditional game, now an Olympic sport, has its origins with Indigenous peoples of North America?",fr:"Quel jeu traditionnel, maintenant un sport olympique, tire ses origines des peuples autochtones d'Amérique du Nord?"},options:{en:["Lacrosse","Hockey","Curling","Baseball"],fr:["Crosse","Hockey","Curling","Baseball"]},correctIndex:0,funFact:{en:"Lacrosse was played by many Indigenous nations including the Haudenosaunee, Cherokee, and Ojibwe. Games could involve hundreds of players on fields stretching for kilometres. It was used for conflict resolution, healing, and spiritual purposes.",fr:"La crosse était pratiquée par de nombreuses nations autochtones dont les Haudenosaunee, les Cherokee et les Ojibwés. Les parties pouvaient impliquer des centaines de joueurs sur des terrains s'étendant sur des kilomètres. Elle servait à la résolution de conflits, à la guérison et à des fins spirituelles."}},
  {category:"science",difficulty:"easy",type:"mc",question:{en:"What Canadian province is the centre of the country's oil sands industry?",fr:"Quelle province canadienne est le centre de l'industrie des sables bitumineux du pays?"},options:{en:["Alberta","Saskatchewan","British Columbia","Ontario"],fr:["Alberta","Saskatchewan","Colombie-Britannique","Ontario"]},correctIndex:0,funFact:{en:"Alberta's oil sands contain the third-largest proven oil reserves in the world, after Venezuela and Saudi Arabia. The industry is both economically vital and environmentally controversial.",fr:"Les sables bitumineux de l'Alberta contiennent les troisièmes plus grandes réserves prouvées de pétrole au monde, après le Venezuela et l'Arabie saoudite. L'industrie est à la fois économiquement vitale et environnementalement controversée."}},
  {category:"science",difficulty:"hard",type:"mc",question:{en:"Which Canadian mathematician co-created the 'Bengio' of AI — one of the three 'Godfathers of Deep Learning'?",fr:"Quel mathématicien canadien a co-créé l'un des trois « parrains de l'apprentissage profond »?"},options:{en:["Yoshua Bengio (Université de Montréal)","Andrew Ng","Yann LeCun","Ian Goodfellow"],fr:["Yoshua Bengio (Université de Montréal)","Andrew Ng","Yann LeCun","Ian Goodfellow"]},correctIndex:0,funFact:{en:"Yoshua Bengio, along with Geoffrey Hinton (Toronto) and Yann LeCun (originally French but collaborating closely with Canadian researchers), shared the 2018 Turing Award. Montreal's Mila lab, founded by Bengio, is the world's largest academic AI research lab.",fr:"Yoshua Bengio, avec Geoffrey Hinton (Toronto) et Yann LeCun, a partagé le prix Turing 2018. Le laboratoire Mila de Montréal, fondé par Bengio, est le plus grand laboratoire de recherche académique en IA au monde."}},
  {category:"food",difficulty:"easy",type:"tf",question:{en:"Smarties candies sold in Canada are chocolate, not the same as American Smarties (which are like Rockets).",fr:"Les Smarties vendus au Canada sont au chocolat, pas les mêmes que les Smarties américains (qui sont comme des Rockets)."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"In Canada, Smarties are Nestlé's colourful candy-coated chocolates. What Americans call 'Smarties' are sold as 'Rockets' in Canada. This brand confusion has puzzled many Canadians visiting the US!",fr:"Au Canada, les Smarties sont les chocolats colorés enrobés de bonbon de Nestlé. Ce que les Américains appellent « Smarties » sont vendus comme « Rockets » au Canada. Cette confusion de marque a intrigué de nombreux Canadiens visitant les États-Unis!"}},
  {category:"food",difficulty:"medium",type:"mc",question:{en:"What is 'Saskatoon berry' and where does it grow?",fr:"Qu'est-ce que la baie de Saskatoon et où pousse-t-elle?"},options:{en:["A native berry similar to blueberries, found across the Canadian prairies","A type of strawberry from Saskatoon","An imported fruit","A variety of grape"],fr:["Une baie indigène similaire aux bleuets, trouvée dans les prairies canadiennes","Un type de fraise de Saskatoon","Un fruit importé","Une variété de raisin"]},correctIndex:0,funFact:{en:"Saskatoon berries have been a staple food for Indigenous peoples of the prairies for thousands of years. The city of Saskatoon was named after the berry, not the other way around! They're used in pies, jams, and pemmican.",fr:"Les baies de Saskatoon sont un aliment de base pour les peuples autochtones des prairies depuis des milliers d'années. La ville de Saskatoon a été nommée d'après la baie, et non l'inverse! Elles sont utilisées dans les tartes, les confitures et le pemmican."}},

  // FINAL 75 — reaching 500+
  {category:"history",difficulty:"easy",type:"mc",question:{en:"Who is on the Canadian $20 bill?",fr:"Qui figure sur le billet de 20 $ canadien?"},options:{en:["Queen Elizabeth II (being replaced by King Charles III)","Sir John A. Macdonald","Sir Wilfrid Laurier","Pierre Trudeau"],fr:["La reine Élisabeth II (remplacée par le roi Charles III)","Sir John A. Macdonald","Sir Wilfrid Laurier","Pierre Trudeau"]},correctIndex:0,funFact:{en:"Canadian bills feature: $5 - Sir Wilfrid Laurier, $10 - Viola Desmond (first Canadian woman other than royalty on a bill), $20 - Queen Elizabeth II, $50 - William Lyon Mackenzie King, $100 - Sir Robert Borden.",fr:"Les billets canadiens présentent : 5 $ - Sir Wilfrid Laurier, 10 $ - Viola Desmond (première femme canadienne autre que la royauté sur un billet), 20 $ - Reine Élisabeth II, 50 $ - William Lyon Mackenzie King, 100 $ - Sir Robert Borden."}},
  {category:"history",difficulty:"medium",type:"mc",question:{en:"Who was Viola Desmond, featured on the Canadian $10 bill?",fr:"Qui était Viola Desmond, qui figure sur le billet canadien de 10 $?"},options:{en:["A Black Nova Scotian businesswoman who challenged racial segregation in 1946","A famous painter","A war hero","A politician"],fr:["Une femme d'affaires noire de la Nouvelle-Écosse qui a contesté la ségrégation raciale en 1946","Une peintre célèbre","Une héroïne de guerre","Une politicienne"]},correctIndex:0,funFact:{en:"Viola Desmond refused to leave the whites-only section of a New Glasgow, NS movie theatre in 1946 — nine years before Rosa Parks. She was arrested and fined. Her case is considered a landmark in Canadian civil rights history.",fr:"Viola Desmond a refusé de quitter la section réservée aux Blancs d'un cinéma de New Glasgow, N.-É. en 1946 — neuf ans avant Rosa Parks. Elle a été arrêtée et condamnée à une amende. Son cas est considéré comme un jalon dans l'histoire des droits civiques au Canada."}},
  {category:"history",difficulty:"hard",type:"tf",question:{en:"Canada had internment camps during both World War I and World War II.",fr:"Le Canada avait des camps d'internement pendant la Première et la Seconde Guerre mondiale."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"During WWI, over 8,500 'enemy aliens' (mostly Ukrainian Canadians) were interned. During WWII, over 22,000 Japanese Canadians were forcibly relocated and interned. Both are considered dark chapters in Canadian history.",fr:"Pendant la Première Guerre mondiale, plus de 8 500 « sujets ennemis » (principalement des Canadiens ukrainiens) ont été internés. Pendant la Seconde Guerre mondiale, plus de 22 000 Canadiens japonais ont été déplacés de force et internés. Les deux sont considérés comme des chapitres sombres de l'histoire du Canada."}},
  {category:"geography",difficulty:"easy",type:"mc",question:{en:"What is the capital of Manitoba?",fr:"Quelle est la capitale du Manitoba?"},options:{en:["Winnipeg","Brandon","Thompson","Portage la Prairie"],fr:["Winnipeg","Brandon","Thompson","Portage la Prairie"]},correctIndex:0,funFact:{en:"Winnipeg sits at the junction of the Red and Assiniboine rivers, a historically important meeting place for Indigenous peoples and fur traders. It's called 'the gateway to the west.'",fr:"Winnipeg se trouve à la jonction des rivières Rouge et Assiniboine, un lieu de rencontre historiquement important pour les peuples autochtones et les commerçants de fourrures. On l'appelle « la porte de l'Ouest »."}},
  {category:"geography",difficulty:"medium",type:"mc",question:{en:"What is 'Peggy's Cove' in Nova Scotia known for?",fr:"Pour quoi « Peggy's Cove » en Nouvelle-Écosse est-elle connue?"},options:{en:["Its iconic lighthouse on massive granite rocks — the most photographed spot in Atlantic Canada","Its beaches","Its whale watching","Its vineyards"],fr:["Son phare emblématique sur d'immenses rochers de granit — l'endroit le plus photographié du Canada atlantique","Ses plages","L'observation des baleines","Ses vignobles"]},correctIndex:0,funFact:{en:"Peggy's Cove lighthouse has been a symbol of Nova Scotia since 1915. The rocks are smooth from glaciation and ocean waves. Warning signs tell visitors to stay back from the water — rogue waves have swept people off the rocks.",fr:"Le phare de Peggy's Cove est un symbole de la Nouvelle-Écosse depuis 1915. Les rochers sont lisses à cause de la glaciation et des vagues océaniques. Des panneaux avertissent les visiteurs de rester loin de l'eau — des vagues scélérates ont emporté des gens des rochers."}},
  {category:"geography",difficulty:"hard",type:"mc",question:{en:"What is unique about the town of Churchill, Manitoba besides polar bears?",fr:"Qu'est-ce qui est unique à propos de la ville de Churchill, Manitoba, en plus des ours polaires?"},options:{en:["It's one of the best places on Earth to see beluga whales and northern lights","It has hot springs","It's built on a volcano","It never snows there"],fr:["C'est l'un des meilleurs endroits sur Terre pour voir les bélugas et les aurores boréales","Il y a des sources chaudes","C'est construit sur un volcan","Il ne neige jamais là-bas"]},correctIndex:0,funFact:{en:"Churchill is called the 'Polar Bear Capital' in fall and the 'Beluga Capital' in summer, when thousands of belugas swim into the Churchill River estuary. It's also under the auroral oval, making it ideal for northern lights viewing.",fr:"Churchill est appelée la « capitale des ours polaires » en automne et la « capitale des bélugas » en été, quand des milliers de bélugas nagent dans l'estuaire de la rivière Churchill. Elle est aussi sous l'ovale auroral, ce qui en fait un endroit idéal pour observer les aurores boréales."}},
  {category:"culture",difficulty:"easy",type:"mc",question:{en:"What is 'Nuit Blanche' held in many Canadian cities?",fr:"Qu'est-ce que la « Nuit Blanche » tenue dans de nombreuses villes canadiennes?"},options:{en:["An all-night contemporary art event with free public installations","A sleep study","A film noir festival","A wine tasting event"],fr:["Un événement d'art contemporain toute la nuit avec des installations publiques gratuites","Une étude du sommeil","Un festival de film noir","Un événement de dégustation de vin"]},correctIndex:0,funFact:{en:"Toronto's Nuit Blanche attracts over 1 million visitors each year. Art installations pop up across the city from dusk to dawn. Montreal, Winnipeg, and other cities also host their own versions.",fr:"La Nuit Blanche de Toronto attire plus d'un million de visiteurs chaque année. Des installations artistiques surgissent à travers la ville du crépuscule à l'aube. Montréal, Winnipeg et d'autres villes organisent aussi leurs propres versions."}},
  {category:"culture",difficulty:"medium",type:"mc",question:{en:"Which Canadian musician created the album 'After Hours' and is known for his unique falsetto?",fr:"Quel musicien canadien a créé l'album « After Hours » et est connu pour sa voix de fausset unique?"},options:{en:["The Weeknd (Abel Tesfaye)","Drake","Justin Bieber","Shawn Mendes"],fr:["The Weeknd (Abel Tesfaye)","Drake","Justin Bieber","Shawn Mendes"]},correctIndex:0,funFact:{en:"The Weeknd (Abel Tesfaye) grew up in Scarborough, Toronto, the child of Ethiopian immigrants. He performed at the Super Bowl halftime show in 2021 and has sold over 75 million records worldwide.",fr:"The Weeknd (Abel Tesfaye) a grandi à Scarborough, Toronto, enfant d'immigrants éthiopiens. Il a performé au spectacle de la mi-temps du Super Bowl en 2021 et a vendu plus de 75 millions de disques dans le monde."}},
  {category:"culture",difficulty:"hard",type:"tf",question:{en:"Canada has more donut shops per capita than any other country in the world.",fr:"Le Canada a plus de magasins de beignes par habitant que tout autre pays au monde."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Thanks largely to Tim Hortons, Canada has roughly twice as many donut shops per capita as the United States. There are over 5,600 Tim Hortons locations, plus many independent shops.",fr:"Grâce en grande partie à Tim Hortons, le Canada a environ deux fois plus de magasins de beignes par habitant que les États-Unis. Il y a plus de 5 600 emplacements Tim Hortons, plus de nombreux magasins indépendants."}},
  {category:"language",difficulty:"easy",type:"tf",question:{en:"Canadians spell 'centre' and 'theatre' with -re (like British English), not -er (like American English).",fr:"Les Canadiens écrivent « centre » et « theatre » avec -re (comme l'anglais britannique), pas -er (comme l'anglais américain)."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Canadian English spelling is a fascinating mix: British -re (centre, theatre), British -our (colour, favour), but American -ize (organize, realize). This hybrid system confuses spell-checkers everywhere!",fr:"L'orthographe de l'anglais canadien est un mélange fascinant : britannique -re (centre, theatre), britannique -our (colour, favour), mais américain -ize (organize, realize). Ce système hybride confond les correcteurs orthographiques partout!"}},
  {category:"language",difficulty:"medium",type:"mc",question:{en:"What is the 'Office québécois de la langue française' (OQLF)?",fr:"Qu'est-ce que l'Office québécois de la langue française (OQLF)?"},options:{en:["Quebec's language regulator that enforces French language laws","A translation service","A French school","A publishing house"],fr:["Le régulateur linguistique du Québec qui applique les lois sur la langue française","Un service de traduction","Une école française","Une maison d'édition"]},correctIndex:0,funFact:{en:"The OQLF — sometimes called the 'language police' — enforces Bill 101. They've famously asked businesses to change English words on signs. One case involved 'pasta' being deemed too Italian (instead of 'pâtes')!",fr:"L'OQLF — parfois appelé la « police de la langue » — applique la Loi 101. Ils ont demandé à des entreprises de changer les mots anglais sur leurs enseignes. Un cas impliquait « pasta » jugé trop italien (au lieu de « pâtes »)!"}},
  {category:"sports",difficulty:"easy",type:"mc",question:{en:"Where was the first hockey game played?",fr:"Où le premier match de hockey a-t-il été joué?"},options:{en:["Montreal (1875, at the Victoria Skating Rink)","Toronto","Ottawa","Winnipeg"],fr:["Montréal (1875, à la patinoire Victoria)","Toronto","Ottawa","Winnipeg"]},correctIndex:0,funFact:{en:"The first organized indoor hockey game was played on March 3, 1875 in Montreal. However, earlier informal versions of the game were played across Canada. Windsor, Nova Scotia and Kingston, Ontario also claim hockey's birthplace!",fr:"Le premier match de hockey intérieur organisé a été joué le 3 mars 1875 à Montréal. Cependant, des versions informelles antérieures du jeu étaient jouées à travers le Canada. Windsor, Nouvelle-Écosse et Kingston, Ontario revendiquent aussi le lieu de naissance du hockey!"}},
  {category:"sports",difficulty:"medium",type:"mc",question:{en:"What is the 'Triple Crown' of Canadian horse racing?",fr:"Qu'est-ce que la « Triple Couronne » des courses de chevaux canadiennes?"},options:{en:["Three races: the Queen's Plate, Prince of Wales Stakes, and Breeders' Stakes","Three NHL championships","Three golf tournaments","Three marathon races"],fr:["Trois courses : la Queen's Plate, les Prince of Wales Stakes et les Breeders' Stakes","Trois championnats de la LNH","Trois tournois de golf","Trois courses de marathon"]},correctIndex:0,funFact:{en:"The Queen's Plate (now King's Plate), first run in 1860, is the oldest continuously run thoroughbred horse race in North America. It's older than the Kentucky Derby by 15 years!",fr:"La Queen's Plate (maintenant King's Plate), courue pour la première fois en 1860, est la plus ancienne course de chevaux pur-sang courue continuellement en Amérique du Nord. Elle est plus ancienne que le Kentucky Derby de 15 ans!"}},
  {category:"sports",difficulty:"hard",type:"mc",question:{en:"What was 'The Summit Series' of 1972?",fr:"Qu'était la « Série du siècle » de 1972?"},options:{en:["A legendary 8-game hockey series between Canada and the Soviet Union","A baseball playoff","A tennis championship","A swimming competition"],fr:["Une légendaire série de 8 matchs de hockey entre le Canada et l'Union soviétique","Une série éliminatoire de baseball","Un championnat de tennis","Une compétition de natation"]},correctIndex:0,funFact:{en:"Paul Henderson's series-winning goal with 34 seconds left in Game 8 is considered the greatest moment in Canadian sports history. The entire country stopped to watch. Henderson was named Canada's athlete of the century.",fr:"Le but gagnant de Paul Henderson avec 34 secondes restantes au match 8 est considéré comme le plus grand moment de l'histoire du sport canadien. Le pays entier s'est arrêté pour regarder. Henderson a été nommé athlète canadien du siècle."}},
  {category:"indigenous",difficulty:"easy",type:"mc",question:{en:"What does the Inuit word 'kayak' mean?",fr:"Que signifie le mot inuit « kayak »?"},options:{en:["Hunter's boat","Big wave","Cold water","Fast fish"],fr:["Bateau de chasseur","Grande vague","Eau froide","Poisson rapide"]},correctIndex:0,funFact:{en:"Kayaks were invented by the Inuit over 4,000 years ago for hunting on the sea. The waterproof design using sealskin stretched over a driftwood frame was perfectly engineered for Arctic waters.",fr:"Les kayaks ont été inventés par les Inuits il y a plus de 4 000 ans pour la chasse en mer. Le design imperméable utilisant de la peau de phoque tendue sur un cadre de bois flotté était parfaitement conçu pour les eaux arctiques."}},
  {category:"indigenous",difficulty:"medium",type:"mc",question:{en:"What is the significance of the eagle feather in many First Nations cultures?",fr:"Quelle est la signification de la plume d'aigle dans de nombreuses cultures des Premières Nations?"},options:{en:["It represents truth, power, freedom, and connection to the Creator","It's used for writing","It's a decorative item only","It has no special meaning"],fr:["Elle représente la vérité, le pouvoir, la liberté et la connexion avec le Créateur","Elle est utilisée pour l'écriture","C'est un article décoratif seulement","Elle n'a pas de signification spéciale"]},correctIndex:0,funFact:{en:"Eagle feathers are sacred and held in the highest regard. They're given to honour bravery or achievement. Legally, in Canada, only Indigenous people can possess eagle feathers. Courts now allow Indigenous witnesses to swear on an eagle feather.",fr:"Les plumes d'aigle sont sacrées et tenues en très haute estime. Elles sont données pour honorer la bravoure ou les réalisations. Légalement, au Canada, seuls les Autochtones peuvent posséder des plumes d'aigle. Les tribunaux permettent maintenant aux témoins autochtones de prêter serment sur une plume d'aigle."}},
  {category:"indigenous",difficulty:"hard",type:"mc",question:{en:"What is the Nisga'a Final Agreement of 2000?",fr:"Qu'est-ce que l'Accord définitif nisga'a de 2000?"},options:{en:["The first modern treaty in BC, granting the Nisga'a self-government and land rights","A fishing regulation","A provincial boundary agreement","A school reform"],fr:["Le premier traité moderne en C.-B., accordant aux Nisga'a l'autonomie gouvernementale et les droits fonciers","Un règlement de pêche","Un accord de frontière provinciale","Une réforme scolaire"]},correctIndex:0,funFact:{en:"The Nisga'a treaty took over 100 years of negotiation. It gives the Nisga'a Nation self-government, 2,000 km² of land, and resource rights. It's a model for modern treaty-making in Canada.",fr:"Le traité nisga'a a pris plus de 100 ans de négociation. Il donne à la Nation nisga'a l'autonomie gouvernementale, 2 000 km² de terre et des droits sur les ressources. C'est un modèle pour les traités modernes au Canada."}},
  {category:"science",difficulty:"easy",type:"mc",question:{en:"Which Canadian city is home to the headquarters of the Canadian Space Agency?",fr:"Quelle ville canadienne abrite le siège de l'Agence spatiale canadienne?"},options:{en:["Longueuil, Quebec (near Montreal)","Ottawa","Toronto","Vancouver"],fr:["Longueuil, Québec (près de Montréal)","Ottawa","Toronto","Vancouver"]},correctIndex:0,funFact:{en:"The Canadian Space Agency was established in 1989. Canadian astronauts include Chris Hadfield, who became an internet sensation by performing David Bowie's 'Space Oddity' on the International Space Station.",fr:"L'Agence spatiale canadienne a été créée en 1989. Les astronautes canadiens incluent Chris Hadfield, qui est devenu une sensation internet en interprétant « Space Oddity » de David Bowie sur la Station spatiale internationale."}},
  {category:"science",difficulty:"medium",type:"mc",question:{en:"Who is Chris Hadfield and what is he famous for?",fr:"Qui est Chris Hadfield et pourquoi est-il célèbre?"},options:{en:["A Canadian astronaut who commanded the ISS and performed 'Space Oddity' in space","A hockey player","A musician","A politician"],fr:["Un astronaute canadien qui a commandé l'ISS et interprété « Space Oddity » dans l'espace","Un joueur de hockey","Un musicien","Un politicien"]},correctIndex:0,funFact:{en:"Chris Hadfield from Sarnia, Ontario was the first Canadian to walk in space and to command the ISS. His cover of Bowie's 'Space Oddity' filmed on the ISS has over 50 million YouTube views.",fr:"Chris Hadfield de Sarnia, Ontario a été le premier Canadien à marcher dans l'espace et à commander l'ISS. Sa reprise de « Space Oddity » de Bowie filmée sur l'ISS a plus de 50 millions de vues sur YouTube."}},
  {category:"science",difficulty:"hard",type:"mc",question:{en:"What is the 'AI corridor' connecting Toronto and Montreal?",fr:"Qu'est-ce que le « corridor de l'IA » reliant Toronto et Montréal?"},options:{en:["A concentration of AI research institutions and companies making Canada a global AI leader","A highway","A fiber optic cable","A railway line"],fr:["Une concentration d'institutions de recherche et d'entreprises en IA faisant du Canada un leader mondial de l'IA","Une autoroute","Un câble de fibre optique","Une ligne ferroviaire"]},correctIndex:0,funFact:{en:"The Toronto-Montreal AI corridor includes Vector Institute, Mila, and thousands of AI companies and researchers. Canada's $125M Pan-Canadian AI Strategy (2017) was the world's first national AI strategy.",fr:"Le corridor IA Toronto-Montréal comprend l'Institut Vector, Mila et des milliers d'entreprises et de chercheurs en IA. La Stratégie pancanadienne en matière d'IA de 125 M$ (2017) a été la première stratégie nationale en IA au monde."}},
  {category:"food",difficulty:"easy",type:"mc",question:{en:"What is 'back bacon' or 'peameal bacon' — a distinctly Canadian food?",fr:"Qu'est-ce que le « bacon de dos » ou « bacon peameal » — un aliment distinctement canadien?"},options:{en:["Lean pork loin rolled in cornmeal, different from American-style bacon","A type of fish","A vegetable side dish","A dessert"],fr:["Du longe de porc maigre roulé dans la semoule de maïs, différent du bacon américain","Un type de poisson","Un accompagnement de légumes","Un dessert"]},correctIndex:0,funFact:{en:"What Americans call 'Canadian bacon' is actually nothing like real Canadian bacon. Authentic peameal bacon comes from Toronto and is rolled in cornmeal (originally peameal). The best place to try it is at the St. Lawrence Market in Toronto.",fr:"Ce que les Américains appellent « Canadian bacon » ne ressemble en rien au vrai bacon canadien. L'authentique bacon peameal vient de Toronto et est roulé dans la semoule de maïs (à l'origine du peameal). Le meilleur endroit pour l'essayer est le marché St. Lawrence à Toronto."}},
  {category:"food",difficulty:"medium",type:"mc",question:{en:"What is 'toutière' in Acadian cuisine (different from Quebec tourtière)?",fr:"Qu'est-ce que la « toutière » dans la cuisine acadienne (différente de la tourtière québécoise)?"},options:{en:["An Acadian meat pie with a distinctive spice blend from the Maritime tradition","The same as Quebec tourtière","A fish pie","A vegetable stew"],fr:["Une tourte à la viande acadienne avec un mélange d'épices distinctif de la tradition maritime","Le même que la tourtière québécoise","Une tourte au poisson","Un ragoût de légumes"]},correctIndex:0,funFact:{en:"Acadian meat pies are spiced differently from Quebec versions, often using savory, cloves, and cinnamon. Regional food variations across Canada reflect the diverse origins of its settlers — French, British, Ukrainian, and many more.",fr:"Les tourtes à la viande acadiennes sont épicées différemment des versions québécoises, utilisant souvent de la sarriette, des clous de girofle et de la cannelle. Les variations alimentaires régionales à travers le Canada reflètent les origines diverses de ses colons — français, britanniques, ukrainiens et bien d'autres."}},
  {category:"food",difficulty:"hard",type:"mc",question:{en:"What is 'Winnipeg-style rye bread' and why is it unique?",fr:"Qu'est-ce que le « pain de seigle de Winnipeg » et pourquoi est-il unique?"},options:{en:["A distinctly Canadian Jewish-style dark rye bread with a unique tang from the local water","A light white bread","A sourdough variety","A gluten-free option"],fr:["Un pain de seigle foncé de style juif distinctement canadien avec un goût unique de l'eau locale","Un pain blanc léger","Une variété de pain au levain","Une option sans gluten"]},correctIndex:0,funFact:{en:"Winnipeg's rye bread tradition comes from the city's large Eastern European Jewish community. Local bakeries like Gunn's and City Bread have been making it for over 100 years. Some say the local water gives it an irreplaceable flavour.",fr:"La tradition du pain de seigle de Winnipeg vient de la grande communauté juive d'Europe de l'Est de la ville. Des boulangeries locales comme Gunn's et City Bread le font depuis plus de 100 ans. Certains disent que l'eau locale lui donne une saveur irremplaçable."}},
  {category:"history",difficulty:"easy",type:"mc",question:{en:"What is the Royal Canadian Mint known for producing?",fr:"Pour quoi la Monnaie royale canadienne est-elle connue?"},options:{en:["Canadian coins and some of the purest gold and silver bullion in the world","Only stamps","Paper currency","Military medals only"],fr:["Des pièces canadiennes et certains des lingots d'or et d'argent les plus purs au monde","Seulement des timbres","De la monnaie de papier","Seulement des médailles militaires"]},correctIndex:0,funFact:{en:"The Royal Canadian Mint in Ottawa and Winnipeg produces coins for Canada and over 70 other countries. In 2007, they created a 100-kg gold coin with a $1 million face value — it contained $4 million worth of gold!",fr:"La Monnaie royale canadienne à Ottawa et Winnipeg produit des pièces pour le Canada et plus de 70 autres pays. En 2007, ils ont créé une pièce d'or de 100 kg avec une valeur nominale de 1 million de dollars — elle contenait 4 millions de dollars d'or!"}},
  {category:"history",difficulty:"hard",type:"mc",question:{en:"What was the significance of the Battle of the Plains of Abraham in 1759?",fr:"Quelle était la signification de la bataille des Plaines d'Abraham en 1759?"},options:{en:["The British defeat of French forces determined that Canada would become British rather than French","It was a First Nations victory","It established the US-Canada border","It ended the fur trade"],fr:["La défaite des forces françaises par les Britanniques a déterminé que le Canada deviendrait britannique plutôt que français","C'était une victoire des Premières Nations","Elle a établi la frontière Canada-États-Unis","Elle a mis fin au commerce de la fourrure"]},correctIndex:0,funFact:{en:"Both commanding generals — British General Wolfe and French General Montcalm — died from wounds sustained in the battle. The entire conflict lasted only about 30 minutes but changed the course of Canadian history forever.",fr:"Les deux généraux commandants — le général britannique Wolfe et le général français Montcalm — sont morts de blessures subies dans la bataille. Le conflit entier n'a duré qu'environ 30 minutes mais a changé le cours de l'histoire du Canada pour toujours."}},
  {category:"geography",difficulty:"easy",type:"mc",question:{en:"What is the capital of Nova Scotia?",fr:"Quelle est la capitale de la Nouvelle-Écosse?"},options:{en:["Halifax","Sydney","Dartmouth","Truro"],fr:["Halifax","Sydney","Dartmouth","Truro"]},correctIndex:0,funFact:{en:"Halifax has one of the largest natural harbours in the world. It was a key naval base in both World Wars and is where many immigrants first arrived in Canada via Pier 21 — Canada's 'Ellis Island.'",fr:"Halifax possède l'un des plus grands ports naturels au monde. C'était une base navale clé lors des deux guerres mondiales et c'est là que de nombreux immigrants sont arrivés au Canada via le Quai 21 — « l'Ellis Island » du Canada."}},
  {category:"geography",difficulty:"medium",type:"mc",question:{en:"What is the Confederation Bridge?",fr:"Qu'est-ce que le pont de la Confédération?"},options:{en:["A 12.9-km bridge connecting PEI to New Brunswick — the longest in the world over ice-covered water","A bridge in Ottawa","A bridge in Vancouver","A historical footbridge"],fr:["Un pont de 12,9 km reliant l'Î.-P.-É. au Nouveau-Brunswick — le plus long au monde sur des eaux couvertes de glace","Un pont à Ottawa","Un pont à Vancouver","Un pont piétonnier historique"]},correctIndex:0,funFact:{en:"The Confederation Bridge opened in 1997, replacing the ferry service. It takes about 12 minutes to cross. Engineers designed it to withstand ice floes, 100-year storms, and even ship collisions.",fr:"Le pont de la Confédération a ouvert en 1997, remplaçant le service de traversier. Il faut environ 12 minutes pour le traverser. Les ingénieurs l'ont conçu pour résister aux glaces flottantes, aux tempêtes centenaires et même aux collisions de navires."}},
  {category:"culture",difficulty:"easy",type:"mc",question:{en:"What Canadian show features the phrase 'to be faaair...'?",fr:"Quelle émission canadienne présente l'expression « to be faaair... »?"},options:{en:["Letterkenny","Schitt's Creek","Corner Gas","Trailer Park Boys"],fr:["Letterkenny","Schitt's Creek","Corner Gas","Trailer Park Boys"]},correctIndex:0,funFact:{en:"Letterkenny's 'to be fair' bit — where characters repeat the phrase in increasingly drawn-out tones — became one of the most iconic comedy catchphrases in recent Canadian TV history.",fr:"Le « to be fair » de Letterkenny — où les personnages répètent la phrase sur des tons de plus en plus prolongés — est devenu l'une des répliques comiques les plus emblématiques de l'histoire récente de la télé canadienne."}},
  {category:"culture",difficulty:"medium",type:"mc",question:{en:"What Canadian festival is the world's largest jazz festival?",fr:"Quel festival canadien est le plus grand festival de jazz au monde?"},options:{en:["Montreal International Jazz Festival","Toronto Jazz Festival","Ottawa Jazz Festival","Vancouver Jazz Festival"],fr:["Festival international de jazz de Montréal","Festival de jazz de Toronto","Festival de jazz d'Ottawa","Festival de jazz de Vancouver"]},correctIndex:0,funFact:{en:"The Montreal Jazz Festival holds the Guinness World Record as the largest jazz festival. It attracts over 2 million visitors each summer and features over 1,000 concerts, many of them free outdoor shows.",fr:"Le Festival de jazz de Montréal détient le record Guinness comme le plus grand festival de jazz. Il attire plus de 2 millions de visiteurs chaque été et présente plus de 1 000 concerts, dont beaucoup sont des spectacles extérieurs gratuits."}},
  {category:"language",difficulty:"medium",type:"mc",question:{en:"What does the Canadian expression 'take off, eh' mean?",fr:"Que signifie l'expression canadienne « take off, eh »?"},options:{en:["Go away / get out of here (often said jokingly)","Start a plane","Begin a race","Remove clothing"],fr:["Va-t'en / dégage (souvent dit en blaguant)","Décoller un avion","Commencer une course","Enlever des vêtements"]},correctIndex:0,funFact:{en:"This expression was popularized by Bob and Doug McKenzie, the Canadian SCTV characters played by Rick Moranis and Dave Thomas. Their comedy album 'Great White North' went double platinum in the 1980s.",fr:"Cette expression a été popularisée par Bob et Doug McKenzie, les personnages canadiens de SCTV joués par Rick Moranis et Dave Thomas. Leur album comique « Great White North » est devenu double platine dans les années 1980."}},
  {category:"sports",difficulty:"medium",type:"mc",question:{en:"What is the Memorial Cup in Canadian hockey?",fr:"Qu'est-ce que la Coupe Memorial dans le hockey canadien?"},options:{en:["The championship trophy for the Canadian Hockey League (junior hockey)","An NHL playoff trophy","A veteran's award","A coaching prize"],fr:["Le trophée de championnat de la Ligue canadienne de hockey (hockey junior)","Un trophée des séries éliminatoires de la LNH","Un prix de vétéran","Un prix d'entraîneur"]},correctIndex:0,funFact:{en:"The Memorial Cup was created in 1919 to honour soldiers who died in WWI. It's the most prestigious trophy in junior hockey. Many NHL stars played in the Memorial Cup tournament before turning pro.",fr:"La Coupe Memorial a été créée en 1919 pour honorer les soldats morts pendant la Première Guerre mondiale. C'est le trophée le plus prestigieux du hockey junior. De nombreuses stars de la LNH ont joué dans le tournoi de la Coupe Memorial avant de devenir professionnels."}},
  {category:"indigenous",difficulty:"easy",type:"tf",question:{en:"The word 'toboggan' comes from an Algonquin word for a type of sled.",fr:"Le mot « toboggan » vient d'un mot algonquin pour un type de traîneau."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Many common English words come from Indigenous languages: toboggan (Algonquin), kayak (Inuit), moccasin (Algonquin), chipmunk (Ojibwe), and moose (Eastern Abenaki).",fr:"De nombreux mots anglais courants viennent de langues autochtones : toboggan (algonquin), kayak (inuit), mocassin (algonquin), chipmunk (ojibwé) et moose (abénaqui de l'Est)."}},
  {category:"science",difficulty:"medium",type:"mc",question:{en:"What is the significance of the Chalk River Laboratories in Ontario?",fr:"Quelle est l'importance des Laboratoires de Chalk River en Ontario?"},options:{en:["Canada's primary nuclear research facility, operating since 1944","A rock climbing centre","A chalk mining operation","A paint laboratory"],fr:["La principale installation de recherche nucléaire du Canada, en opération depuis 1944","Un centre d'escalade","Une exploitation de craie","Un laboratoire de peinture"]},correctIndex:0,funFact:{en:"Chalk River was where the NRX reactor (the world's most powerful research reactor when built) had a partial meltdown in 1952. A young Jimmy Carter (future US President) helped with the cleanup as a US Navy nuclear engineer!",fr:"Chalk River est l'endroit où le réacteur NRX (le réacteur de recherche le plus puissant du monde lors de sa construction) a subi une fusion partielle en 1952. Un jeune Jimmy Carter (futur président américain) a aidé au nettoyage en tant qu'ingénieur nucléaire de la marine américaine!"}},
  {category:"food",difficulty:"easy",type:"mc",question:{en:"What is a traditional Canadian breakfast that includes pancakes with a Canadian twist?",fr:"Quel est un petit-déjeuner traditionnel canadien qui comprend des crêpes avec une touche canadienne?"},options:{en:["Pancakes with real maple syrup, bacon, and eggs","Cereal with milk","Toast only","Croissants"],fr:["Des crêpes avec du vrai sirop d'érable, du bacon et des œufs","Des céréales avec du lait","Seulement du pain grillé","Des croissants"]},correctIndex:0,funFact:{en:"Real maple syrup — not the artificial kind — is a point of pride for Canadians. It takes about 40 litres of maple sap to produce just 1 litre of pure maple syrup. That's why the real stuff is expensive!",fr:"Le vrai sirop d'érable — pas le type artificiel — est une source de fierté pour les Canadiens. Il faut environ 40 litres de sève d'érable pour produire seulement 1 litre de sirop d'érable pur. C'est pourquoi le vrai est cher!"}},
  {category:"geography",difficulty:"medium",type:"mc",question:{en:"What is unique about the town of Dawson Creek, BC?",fr:"Qu'est-ce qui est unique à propos de la ville de Dawson Creek, C.-B.?"},options:{en:["It's 'Mile 0' of the Alaska Highway","It's the highest town in Canada","It's built on hot springs","It never gets dark in summer"],fr:["C'est le « Mile 0 » de l'autoroute de l'Alaska","C'est la ville la plus haute du Canada","C'est construit sur des sources chaudes","Il ne fait jamais nuit en été"]},correctIndex:0,funFact:{en:"Dawson Creek (not to be confused with Dawson City, Yukon) marks the beginning of the Alaska Highway, built in 1942. The highway stretches 2,232 km from Dawson Creek to Delta Junction, Alaska.",fr:"Dawson Creek (à ne pas confondre avec Dawson City, Yukon) marque le début de l'autoroute de l'Alaska, construite en 1942. L'autoroute s'étend sur 2 232 km de Dawson Creek à Delta Junction, Alaska."}},
  {category:"history",difficulty:"medium",type:"mc",question:{en:"What significant change happened to Canadian money in 2013?",fr:"Quel changement significatif est arrivé à la monnaie canadienne en 2013?"},options:{en:["Canada eliminated the penny","Canada switched to digital currency","Canada introduced a $500 bill","Canada stopped using coins"],fr:["Le Canada a éliminé le sou","Le Canada est passé à la monnaie numérique","Le Canada a introduit un billet de 500 $","Le Canada a cessé d'utiliser les pièces"]},correctIndex:0,funFact:{en:"Canada stopped distributing pennies in 2013 because they cost 1.6 cents each to produce. Cash transactions are now rounded to the nearest 5 cents. Canada was one of the first countries to eliminate its smallest coin.",fr:"Le Canada a cessé de distribuer les sous en 2013 parce qu'ils coûtaient 1,6 cent chacun à produire. Les transactions en espèces sont maintenant arrondies au 5 cents le plus proche. Le Canada a été l'un des premiers pays à éliminer sa plus petite pièce."}},
  // FINAL 40 to surpass 500
  {category:"language",difficulty:"easy",type:"mc",question:{en:"What is the common Canadian way to end a sentence seeking agreement?",fr:"Quelle est la façon canadienne courante de terminer une phrase en cherchant l'accord?"},options:{en:["Adding 'eh' at the end","Adding 'ya know'","Adding 'innit'","Adding 'right'"],fr:["Ajouter « eh » à la fin","Ajouter « tu sais »","Ajouter « innit »","Ajouter « right »"]},correctIndex:0,funFact:{en:"'Nice day, eh?' 'Good game, eh?' The Canadian 'eh' serves as a conversational tag — it invites the listener to agree or respond. It's so iconic that it's become a symbol of Canadian identity worldwide.",fr:"« Belle journée, eh? » « Bon match, eh? » Le « eh » canadien sert de marqueur conversationnel — il invite l'interlocuteur à être d'accord ou à répondre. C'est si emblématique que c'est devenu un symbole de l'identité canadienne dans le monde."}},
  {category:"language",difficulty:"hard",type:"mc",question:{en:"What does the Québécois expression 'j'en reviens pas' mean?",fr:"Que signifie l'expression québécoise « j'en reviens pas »?"},options:{en:["I can't believe it / I'm amazed","I'm not coming back","I don't remember","I'm lost"],fr:["Je n'en crois pas mes yeux / Je suis stupéfait(e)","Je ne reviens pas","Je ne me souviens pas","Je suis perdu(e)"]},correctIndex:0,funFact:{en:"Québécois French is full of vivid expressions that convey emotion more directly than standard French. 'J'en reviens pas!' expresses extreme surprise or disbelief and is used constantly in everyday conversation.",fr:"Le français québécois est plein d'expressions vives qui transmettent l'émotion plus directement que le français standard. « J'en reviens pas! » exprime une surprise ou une incrédulité extrême et est utilisé constamment dans la conversation quotidienne."}},
  {category:"sports",difficulty:"easy",type:"tf",question:{en:"The Toronto Maple Leafs are the most valuable Canadian NHL franchise.",fr:"Les Maple Leafs de Toronto sont la franchise canadienne de la LNH la plus précieuse."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Despite not winning the Stanley Cup since 1967 (the longest active drought in the NHL), the Leafs are consistently one of the most valuable franchises in all of hockey, worth over $2 billion.",fr:"Malgré le fait de ne pas avoir gagné la Coupe Stanley depuis 1967 (la plus longue sécheresse active dans la LNH), les Leafs sont constamment l'une des franchises les plus précieuses de tout le hockey, valant plus de 2 milliards de dollars."}},
  {category:"sports",difficulty:"hard",type:"mc",question:{en:"What Canadian boxing champion held the world heavyweight title from 1906 to 1908?",fr:"Quel champion de boxe canadien a détenu le titre mondial des poids lourds de 1906 à 1908?"},options:{en:["Tommy Burns (the only Canadian world heavyweight boxing champion)","George Chuvalo","Lennox Lewis","Sam Langford"],fr:["Tommy Burns (le seul champion du monde canadien de boxe poids lourds)","George Chuvalo","Lennox Lewis","Sam Langford"]},correctIndex:0,funFact:{en:"Tommy Burns (Noah Brusso, from Hanover, Ontario) remains the only Canadian-born world heavyweight boxing champion. He was the shortest heavyweight champion in history at 5'7\" and defended his title 11 times.",fr:"Tommy Burns (Noah Brusso, de Hanover, Ontario) reste le seul champion du monde canadien de boxe poids lourds. Il était le plus petit champion poids lourds de l'histoire à 5'7\" et a défendu son titre 11 fois."}},
  {category:"sports",difficulty:"medium",type:"mc",question:{en:"What is the Rideau Canal Skateway in Ottawa?",fr:"Qu'est-ce que la patinoire du canal Rideau à Ottawa?"},options:{en:["The world's largest naturally frozen skating rink at 7.8 km long","An indoor skating arena","A skating competition","A hockey rink"],fr:["La plus grande patinoire naturellement gelée du monde avec 7,8 km de long","Une aréna de patinage intérieure","Une compétition de patinage","Une patinoire de hockey"]},correctIndex:0,funFact:{en:"The Rideau Canal becomes a skating highway each winter. Office workers skate to work, students skate to school, and BeaverTails stands serve pastries along the route. It's recognized by Guinness as the world's largest skating rink.",fr:"Le canal Rideau devient une autoroute de patinage chaque hiver. Les employés patinent pour aller travailler, les étudiants patinent pour aller à l'école, et des kiosques de Queues de castor servent des pâtisseries le long du parcours."}},
  {category:"indigenous",difficulty:"easy",type:"mc",question:{en:"What did the Inuit traditionally use to travel across snow?",fr:"Que les Inuits utilisaient-ils traditionnellement pour voyager sur la neige?"},options:{en:["Dog sleds (qamutik)","Horses","Bicycles","Skis only"],fr:["Des traîneaux à chiens (qamutik)","Des chevaux","Des vélos","Seulement des skis"]},correctIndex:0,funFact:{en:"Dog sledding was essential for Inuit survival for thousands of years. A team of 12-16 dogs could pull a loaded sled for hours. While snowmobiles have largely replaced dog teams, sledding remains culturally important and is still practiced.",fr:"Le traîneau à chiens était essentiel à la survie des Inuits pendant des milliers d'années. Une équipe de 12 à 16 chiens pouvait tirer un traîneau chargé pendant des heures. Bien que les motoneiges aient largement remplacé les attelages, le traîneau reste culturellement important."}},
  {category:"indigenous",difficulty:"hard",type:"mc",question:{en:"What is the significance of 'land acknowledgments' in Canadian public life?",fr:"Quelle est la signification des « reconnaissances territoriales » dans la vie publique canadienne?"},options:{en:["Formal statements recognizing the Indigenous peoples who traditionally occupied the land","Property tax declarations","Soil quality reports","Census data presentations"],fr:["Des déclarations formelles reconnaissant les peuples autochtones qui occupaient traditionnellement le territoire","Des déclarations de taxe foncière","Des rapports sur la qualité du sol","Des présentations de données de recensement"]},correctIndex:0,funFact:{en:"Land acknowledgments have become standard practice at Canadian events, schools, and workplaces. They recognize specific First Nations, Métis, or Inuit peoples and their ongoing relationship with the territory. Opinions vary on whether they're meaningful or performative.",fr:"Les reconnaissances territoriales sont devenues une pratique standard lors des événements, dans les écoles et les lieux de travail canadiens. Elles reconnaissent des peuples spécifiques des Premières Nations, métis ou inuits et leur relation continue avec le territoire."}},
  {category:"indigenous",difficulty:"medium",type:"tf",question:{en:"The Métis people have their own distinct flag, language (Michif), and national anthem.",fr:"Le peuple métis a son propre drapeau distinct, sa langue (michif) et son hymne national."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"The Métis are recognized as one of Canada's three Indigenous peoples. They have a distinct culture blending European and Indigenous elements, their own governance (Métis National Council), flag (infinity symbol), and the Michif language.",fr:"Les Métis sont reconnus comme l'un des trois peuples autochtones du Canada. Ils ont une culture distincte mélangeant des éléments européens et autochtones, leur propre gouvernance (Conseil national des Métis), drapeau (symbole de l'infini) et la langue michif."}},
  {category:"science",difficulty:"easy",type:"mc",question:{en:"What famous Canadian-born actor is also known for his environmental activism and narrating nature documentaries?",fr:"Quel acteur célèbre né au Canada est aussi connu pour son activisme environnemental et la narration de documentaires sur la nature?"},options:{en:["David Suzuki (scientist and broadcaster, not an actor — but Canada's most famous science communicator)","Ryan Reynolds","Keanu Reeves","William Shatner"],fr:["David Suzuki (scientifique et diffuseur, pas un acteur — mais le communicateur scientifique le plus célèbre du Canada)","Ryan Reynolds","Keanu Reeves","William Shatner"]},correctIndex:0,funFact:{en:"David Suzuki has hosted 'The Nature of Things' on CBC since 1979. He's a geneticist, environmental activist, and one of the most recognized Canadians alive. The David Suzuki Foundation works on environmental issues across Canada.",fr:"David Suzuki anime « La Nature des choses » à Radio-Canada depuis 1979. Il est généticien, activiste environnemental et l'un des Canadiens les plus reconnus. La Fondation David Suzuki travaille sur les enjeux environnementaux à travers le Canada."}},
  {category:"science",difficulty:"hard",type:"mc",question:{en:"What is the 'Waterloo Region' known for in the tech world?",fr:"Pour quoi la « région de Waterloo » est-elle connue dans le monde technologique?"},options:{en:["Canada's largest technology hub outside Toronto — home to BlackBerry, OpenText, and hundreds of startups","A water treatment facility","A weather research centre","An agricultural zone"],fr:["Le plus grand pôle technologique du Canada en dehors de Toronto — siège de BlackBerry, OpenText et de centaines de startups","Une installation de traitement de l'eau","Un centre de recherche météorologique","Une zone agricole"]},correctIndex:0,funFact:{en:"Waterloo Region (Kitchener-Waterloo-Cambridge) has earned the nickname 'Canada's Silicon Valley.' The University of Waterloo's co-op program is the largest in the world and feeds talent directly into the local tech ecosystem.",fr:"La région de Waterloo (Kitchener-Waterloo-Cambridge) a gagné le surnom de « Silicon Valley du Canada ». Le programme coopératif de l'Université de Waterloo est le plus grand au monde et alimente directement l'écosystème technologique local."}},
  {category:"food",difficulty:"easy",type:"mc",question:{en:"What makes poutine cheese curds 'squeaky'?",fr:"Qu'est-ce qui rend les grains de fromage à poutine « couinants »?"},options:{en:["They're extremely fresh — the squeak comes from proteins rubbing against tooth enamel","They're frozen","They're coated in cornstarch","They're deep fried"],fr:["Ils sont extrêmement frais — le couinement vient des protéines frottant contre l'émail des dents","Ils sont congelés","Ils sont enrobés de fécule de maïs","Ils sont frits"]},correctIndex:0,funFact:{en:"Cheese curds lose their squeak within about 12 hours of being made. True poutine purists insist on same-day curds. In Quebec, many fromageries sell curds that are only hours old — and the squeak is everything.",fr:"Les grains de fromage perdent leur couinement dans environ 12 heures suivant leur fabrication. Les vrais puristes de la poutine insistent sur des grains du jour même. Au Québec, beaucoup de fromageries vendent des grains de seulement quelques heures — et le couinement, c'est tout."}},
  {category:"food",difficulty:"medium",type:"mc",question:{en:"What is 'Bloody Caesar' garnished with that distinguishes it from a Bloody Mary?",fr:"Avec quoi un « Bloody Caesar » est-il garni qui le distingue d'un Bloody Mary?"},options:{en:["A celery stalk and often an elaborate garnish — plus it uses Clamato (clam-tomato juice) instead of tomato juice","Olives only","Nothing — they're the same","Maple syrup"],fr:["Un bâton de céleri et souvent une garniture élaborée — de plus il utilise du Clamato (jus de palourdes-tomates) au lieu du jus de tomate","Seulement des olives","Rien — ils sont identiques","Du sirop d'érable"]},correctIndex:0,funFact:{en:"Canadian bartenders have turned Caesar garnishes into an art form — some feature entire cheeseburgers, lobster tails, pizza slices, or fried chicken balanced on top! It's become a competition to create the most outrageous garnish.",fr:"Les barmen canadiens ont transformé les garnitures de César en une forme d'art — certaines comprennent des cheeseburgers entiers, des queues de homard, des pointes de pizza ou du poulet frit en équilibre sur le dessus!"}},
  {category:"food",difficulty:"hard",type:"mc",question:{en:"What is 'brewis' (pronounced 'brooze'), a traditional Newfoundland dish?",fr:"Qu'est-ce que le « brewis » (prononcé « brouze »), un plat traditionnel terre-neuvien?"},options:{en:["Soaked hard bread (hardtack) served with salt cod and scrunchions (fried pork fat)","A type of beer","A fish stew","A sweet porridge"],fr:["Du pain dur (hardtack) trempé servi avec de la morue salée et des scrunchions (gras de porc frit)","Un type de bière","Un ragoût de poisson","Une bouillie sucrée"]},correctIndex:0,funFact:{en:"Fish and brewis is considered the national dish of Newfoundland. The hard bread (hardtack) is soaked overnight, then combined with boiled salt cod and topped with scrunchions. It dates back to the early fishing days of the Grand Banks.",fr:"Le fish and brewis est considéré comme le plat national de Terre-Neuve. Le pain dur (hardtack) est trempé toute la nuit, puis combiné avec de la morue salée bouillie et garni de scrunchions. Il date des premiers jours de pêche des Grands Bancs."}},
  {category:"culture",difficulty:"easy",type:"mc",question:{en:"What is 'Winterlude' or 'Bal de Neige' in Ottawa/Gatineau?",fr:"Qu'est-ce que le « Bal de Neige » à Ottawa/Gatineau?"},options:{en:["A massive winter festival with ice sculptures, skating, and snow activities","A music concert","A ski competition","A food festival"],fr:["Un immense festival d'hiver avec des sculptures de glace, du patinage et des activités de neige","Un concert de musique","Une compétition de ski","Un festival gastronomique"]},correctIndex:0,funFact:{en:"Winterlude runs every February with highlights including Crystal Garden ice sculpture competition, the Snowflake Kingdom snow playground in Gatineau, and the Rideau Canal Skateway. It draws over 600,000 visitors each year.",fr:"Le Bal de Neige a lieu chaque février avec des points forts dont le concours de sculptures de glace Crystal Garden, le Royaume des flocons (terrain de jeux de neige) à Gatineau et la patinoire du canal Rideau. Il attire plus de 600 000 visiteurs chaque année."}},
  {category:"culture",difficulty:"medium",type:"mc",question:{en:"What is the Giller Prize?",fr:"Qu'est-ce que le prix Giller?"},options:{en:["Canada's most prestigious literary prize for fiction","A cooking award","A music prize","A film award"],fr:["Le prix littéraire le plus prestigieux du Canada pour la fiction","Un prix culinaire","Un prix de musique","Un prix cinématographique"]},correctIndex:0,funFact:{en:"The Scotiabank Giller Prize awards $100,000 to the best Canadian novel or short story collection each year. Past winners include Margaret Atwood, Alice Munro, and Michael Ondaatje — three of Canada's greatest writers.",fr:"Le prix Giller Banque Scotia décerne 100 000 $ au meilleur roman ou recueil de nouvelles canadien chaque année. Les lauréats passés incluent Margaret Atwood, Alice Munro et Michael Ondaatje — trois des plus grands écrivains du Canada."}},
  {category:"culture",difficulty:"hard",type:"mc",question:{en:"What is 'Cape Breton fiddling' and why is it culturally important?",fr:"Qu'est-ce que le « violon du Cap-Breton » et pourquoi est-il culturellement important?"},options:{en:["A distinctive Scottish-influenced fiddle style that's been uniquely preserved in Nova Scotia","A modern pop genre","A type of electronic music","Classical violin from Quebec"],fr:["Un style de violon distinctif d'influence écossaise qui a été uniquement préservé en Nouvelle-Écosse","Un genre de pop moderne","Un type de musique électronique","Du violon classique du Québec"]},correctIndex:0,funFact:{en:"Cape Breton fiddling preserved Scottish traditions that evolved or disappeared in Scotland itself. The Rankin Family, Ashley MacIsaac, and Natalie MacMaster are famous Cape Breton fiddlers. The Celtic Colours festival celebrates this tradition every October.",fr:"Le violon du Cap-Breton a préservé des traditions écossaises qui ont évolué ou disparu en Écosse même. La famille Rankin, Ashley MacIsaac et Natalie MacMaster sont de célèbres violoneux du Cap-Breton. Le festival Celtic Colours célèbre cette tradition chaque octobre."}},
  {category:"geography",difficulty:"easy",type:"tf",question:{en:"Canada has more coastline than any other country in the world.",fr:"Le Canada a plus de littoral que tout autre pays au monde."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Canada's coastline stretches 243,042 km — more than the next six countries combined! If you walked 20 km per day, it would take over 33 years to walk the entire Canadian coastline.",fr:"Le littoral du Canada s'étend sur 243 042 km — plus que les six pays suivants combinés! Si vous marchiez 20 km par jour, il faudrait plus de 33 ans pour parcourir tout le littoral canadien."}},
  {category:"geography",difficulty:"hard",type:"mc",question:{en:"What is the 'Great Bear Rainforest' on Canada's west coast?",fr:"Qu'est-ce que la « forêt pluviale de Great Bear » sur la côte ouest du Canada?"},options:{en:["One of the world's largest temperate rainforests, home to the rare Spirit Bear","A national park in Ontario","A bear sanctuary in Alberta","A logging area"],fr:["L'une des plus grandes forêts pluviales tempérées au monde, abritant le rare ours Esprit","Un parc national en Ontario","Un sanctuaire d'ours en Alberta","Une zone d'exploitation forestière"]},correctIndex:0,funFact:{en:"The Great Bear Rainforest covers 6.4 million hectares of BC's central coast. The Spirit Bear (Kermode bear) is a white variant of the black bear found almost nowhere else on Earth. In 2016, a landmark agreement protected 85% of the forest from logging.",fr:"La forêt pluviale de Great Bear couvre 6,4 millions d'hectares de la côte centrale de la C.-B. L'ours Esprit (ours Kermode) est une variante blanche de l'ours noir qu'on ne trouve presque nulle part ailleurs sur Terre. En 2016, un accord historique a protégé 85 % de la forêt de l'exploitation forestière."}},
  {category:"history",difficulty:"easy",type:"mc",question:{en:"What is the 'Klondike Gold Rush' of 1896-1899?",fr:"Qu'est-ce que la « ruée vers l'or du Klondike » de 1896-1899?"},options:{en:["A massive gold rush in the Yukon that drew over 100,000 prospectors","A mining operation in Ontario","A banking scandal","A sports event"],fr:["Une ruée vers l'or massive au Yukon qui a attiré plus de 100 000 prospecteurs","Une exploitation minière en Ontario","Un scandale bancaire","Un événement sportif"]},correctIndex:0,funFact:{en:"The Klondike Gold Rush transformed Dawson City from a tiny outpost into the largest city north of San Francisco and west of Winnipeg. Most prospectors arrived too late to find gold — the best claims were already taken.",fr:"La ruée vers l'or du Klondike a transformé Dawson City d'un petit avant-poste en la plus grande ville au nord de San Francisco et à l'ouest de Winnipeg. La plupart des prospecteurs sont arrivés trop tard pour trouver de l'or — les meilleures concessions étaient déjà prises."}},
  {category:"history",difficulty:"hard",type:"mc",question:{en:"What was the 'Rebellions of 1837-38' in Upper and Lower Canada?",fr:"Qu'étaient les « Rébellions de 1837-38 » au Haut et au Bas-Canada?"},options:{en:["Armed uprisings demanding democratic reform, led by Mackenzie (Upper) and Papineau (Lower)","Religious conflicts","Trade disputes with the US","Natural disasters"],fr:["Des soulèvements armés exigeant des réformes démocratiques, menés par Mackenzie (Haut) et Papineau (Bas)","Des conflits religieux","Des disputes commerciales avec les É.-U.","Des catastrophes naturelles"]},correctIndex:0,funFact:{en:"The rebellions failed militarily but succeeded politically. They led to the Durham Report and eventually responsible government. In Quebec, the rebels (Patriotes) are honoured on the Journée nationale des patriotes each May.",fr:"Les rébellions ont échoué militairement mais ont réussi politiquement. Elles ont mené au Rapport Durham et éventuellement au gouvernement responsable. Au Québec, les rebelles (Patriotes) sont honorés lors de la Journée nationale des patriotes chaque mai."}},
  {category:"science",difficulty:"medium",type:"mc",question:{en:"What Canadian company is the world leader in flight simulation technology?",fr:"Quelle entreprise canadienne est le leader mondial de la technologie de simulation de vol?"},options:{en:["CAE Inc. (based in Montreal)","Bombardier","Air Canada","Pratt & Whitney Canada"],fr:["CAE Inc. (basée à Montréal)","Bombardier","Air Canada","Pratt & Whitney Canada"]},correctIndex:0,funFact:{en:"CAE trains more airline and military pilots than any other company in the world. Their flight simulators are so realistic that pilots can earn certifications on them without flying a real aircraft.",fr:"CAE forme plus de pilotes d'aviation civile et militaire que toute autre entreprise au monde. Leurs simulateurs de vol sont si réalistes que les pilotes peuvent obtenir des certifications dessus sans piloter un vrai avion."}},
  {category:"science",difficulty:"easy",type:"tf",question:{en:"The Standard Time zones used worldwide were proposed by Canadian Sir Sandford Fleming.",fr:"Les fuseaux horaires standard utilisés dans le monde entier ont été proposés par le Canadien Sir Sandford Fleming."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Sandford Fleming, a Scottish-Canadian engineer, proposed worldwide standard time zones in 1879 after missing a train due to confusion over local times. Before his system, every town set its own time. His idea was adopted internationally in 1884.",fr:"Sandford Fleming, un ingénieur écossais-canadien, a proposé les fuseaux horaires standard mondiaux en 1879 après avoir raté un train à cause de la confusion des heures locales. Avant son système, chaque ville fixait sa propre heure. Son idée a été adoptée internationalement en 1884."}},
  {category:"food",difficulty:"easy",type:"mc",question:{en:"What is the most iconic food item associated with Quebec?",fr:"Quel est l'aliment le plus emblématique associé au Québec?"},options:{en:["Poutine","Sushi","Tacos","Pizza"],fr:["Poutine","Sushi","Tacos","Pizza"]},correctIndex:0,funFact:{en:"Poutine has gone from humble Québécois fast food to a national icon. You can now find gourmet poutine with toppings like foie gras, lobster, and pulled pork. La Banquise in Montreal serves over 30 varieties and is open 24 hours!",fr:"La poutine est passée d'un humble fast-food québécois à une icône nationale. On peut maintenant trouver de la poutine gastronomique avec des garnitures comme le foie gras, le homard et le porc effiloché. La Banquise à Montréal sert plus de 30 variétés et est ouverte 24 heures!"}},
  {category:"language",difficulty:"medium",type:"mc",question:{en:"What is the French term 'sacre' in Quebec culture?",fr:"Qu'est-ce qu'un « sacre » dans la culture québécoise?"},options:{en:["Swear words derived from Catholic religious terms","A type of prayer","A formal greeting","A song"],fr:["Des jurons dérivés de termes religieux catholiques","Un type de prière","Une salutation formelle","Une chanson"]},correctIndex:0,funFact:{en:"Québécois sacres (tabarnak, câlice, hostie, crisse) are unique in the world — they're profanity derived from sacred Catholic objects. Their intensity ranges from mild (maudit) to severe (tabarnak). They reflect Quebec's complex relationship with the Catholic Church.",fr:"Les sacres québécois (tabarnak, câlice, hostie, crisse) sont uniques au monde — ce sont des jurons dérivés d'objets sacrés catholiques. Leur intensité va de légère (maudit) à sévère (tabarnak). Ils reflètent la relation complexe du Québec avec l'Église catholique."}},
  {category:"sports",difficulty:"easy",type:"mc",question:{en:"Which Canadian city's football team plays at McMahon Stadium?",fr:"L'équipe de football de quelle ville canadienne joue au stade McMahon?"},options:{en:["Calgary Stampeders","Edmonton Elks","Winnipeg Blue Bombers","BC Lions"],fr:["Stampeders de Calgary","Elks d'Edmonton","Blue Bombers de Winnipeg","Lions de la C.-B."]},correctIndex:0,funFact:{en:"McMahon Stadium was built in 1960 and seats about 35,000. The Stampeders and the city of Calgary also host the annual Stampede, making Calgary one of Canada's most sports-crazy cities.",fr:"Le stade McMahon a été construit en 1960 et compte environ 35 000 places. Les Stampeders et la ville de Calgary accueillent aussi le Stampede annuel, faisant de Calgary l'une des villes les plus folles de sport au Canada."}},
  {category:"indigenous",difficulty:"medium",type:"mc",question:{en:"What are 'talking sticks' used for in Pacific Northwest Indigenous cultures?",fr:"À quoi servent les « bâtons de parole » dans les cultures autochtones du Pacifique Nord-Ouest?"},options:{en:["The person holding the stick has the right to speak — it ensures respectful dialogue","For walking","As weapons","As musical instruments"],fr:["La personne qui tient le bâton a le droit de parler — il assure un dialogue respectueux","Pour marcher","Comme armes","Comme instruments de musique"]},correctIndex:0,funFact:{en:"Talking sticks are carved and decorated works of art. The practice ensures that everyone in a circle gets heard without interruption. This concept has been adopted in modern meeting facilitation around the world.",fr:"Les bâtons de parole sont des œuvres d'art sculptées et décorées. La pratique assure que tout le monde dans un cercle est entendu sans interruption. Ce concept a été adopté dans la facilitation de réunions modernes à travers le monde."}},
  {category:"geography",difficulty:"medium",type:"mc",question:{en:"What is the 'Burgess Shale' found in BC's Rocky Mountains?",fr:"Qu'est-ce que le « Schiste de Burgess » trouvé dans les Rocheuses de la C.-B.?"},options:{en:["A UNESCO World Heritage fossil site with 500-million-year-old creatures","A type of rock used for building","A mining site","A geological fault line"],fr:["Un site de fossiles du patrimoine mondial de l'UNESCO avec des créatures de 500 millions d'années","Un type de roche utilisé pour la construction","Un site minier","Une ligne de faille géologique"]},correctIndex:0,funFact:{en:"The Burgess Shale in Yoho National Park contains some of the best-preserved Cambrian fossils in the world. It revolutionized our understanding of early animal evolution. The fossils are so delicate they preserve soft tissue!",fr:"Le Schiste de Burgess dans le parc national Yoho contient certains des fossiles cambriens les mieux préservés au monde. Il a révolutionné notre compréhension de l'évolution animale précoce. Les fossiles sont si délicats qu'ils préservent les tissus mous!"}},
  {category:"culture",difficulty:"medium",type:"tf",question:{en:"The 'Juno Awards' are Canada's equivalent of the Grammy Awards for music.",fr:"Les « prix Juno » sont l'équivalent canadien des Grammy Awards pour la musique."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"The Junos have been awarded since 1970 and are named after Pierre Juneau, the first head of the CRTC (Canada's broadcast regulator). The ceremony travels to a different Canadian city each year.",fr:"Les Junos sont décernés depuis 1970 et portent le nom de Pierre Juneau, le premier directeur du CRTC (l'organisme de réglementation de la diffusion du Canada). La cérémonie se déplace dans une ville canadienne différente chaque année."}},
  {category:"science",difficulty:"medium",type:"mc",question:{en:"What Canadian innovation changed how we use ATMs and bank machines?",fr:"Quelle innovation canadienne a changé notre utilisation des guichets automatiques?"},options:{en:["Interac — Canada's national debit card network","Bitcoin","PayPal","Apple Pay"],fr:["Interac — le réseau national de carte de débit du Canada","Bitcoin","PayPal","Apple Pay"]},correctIndex:0,funFact:{en:"Interac was created in 1984 and Canadians use debit cards more per capita than almost any other country. 'Tap' payments at Interac terminals are so common that many young Canadians have never written a cheque.",fr:"Interac a été créé en 1984 et les Canadiens utilisent les cartes de débit par habitant plus que presque tout autre pays. Les paiements par « tap » aux terminaux Interac sont si courants que beaucoup de jeunes Canadiens n'ont jamais fait de chèque."}},
  {category:"food",difficulty:"medium",type:"mc",question:{en:"What 'chippy' or 'chip truck' tradition is unique to small-town Canada?",fr:"Quelle tradition de « camion à frites » est unique au Canada des petites villes?"},options:{en:["Roadside chip trucks selling fresh-cut fries, poutine, and pogos (corn dogs) during warm months","A mobile phone repair van","A poker chip delivery service","A woodchip hauling truck"],fr:["Des camions à frites en bord de route vendant des frites fraîches, de la poutine et des pogos pendant les mois chauds","Un van de réparation de téléphones","Un service de livraison de jetons de poker","Un camion de transport de copeaux de bois"]},correctIndex:0,funFact:{en:"Chip trucks are a beloved fixture of small-town Ontario, Quebec, and Atlantic Canada. They appear each spring like migratory birds, serving hand-cut fries and poutine from converted trucks. Each town debates which chip truck is best.",fr:"Les camions à frites sont un élément bien-aimé des petites villes de l'Ontario, du Québec et du Canada atlantique. Ils apparaissent chaque printemps comme des oiseaux migrateurs, servant des frites coupées à la main et de la poutine. Chaque ville débat de quel camion est le meilleur."}},
  {category:"history",difficulty:"medium",type:"tf",question:{en:"Canada's national healthcare system (Medicare) was inspired by Saskatchewan's pioneer program under Tommy Douglas.",fr:"Le système national de santé du Canada (assurance-maladie) a été inspiré par le programme pionnier de la Saskatchewan sous Tommy Douglas."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Tommy Douglas introduced universal hospital care in Saskatchewan in 1947, then universal medical care in 1962 (despite a doctors' strike). The federal Medical Care Act of 1966 expanded it nationally. Douglas was voted 'The Greatest Canadian' in 2004.",fr:"Tommy Douglas a introduit les soins hospitaliers universels en Saskatchewan en 1947, puis les soins médicaux universels en 1962 (malgré une grève des médecins). La Loi fédérale sur les soins médicaux de 1966 l'a étendue nationalement. Douglas a été élu « le plus grand Canadien » en 2004."}},
  {category:"sports",difficulty:"easy",type:"mc",question:{en:"What sport is played with brooms and granite stones on ice?",fr:"Quel sport se joue avec des balais et des pierres de granit sur glace?"},options:{en:["Curling","Hockey","Ringette","Speed skating"],fr:["Curling","Hockey","Ringuette","Patinage de vitesse"]},correctIndex:0,funFact:{en:"Curling was brought to Canada by Scottish immigrants in the 1800s. Canada has more curling rinks per capita than any country. The sport has been called 'chess on ice' for its strategic depth.",fr:"Le curling a été apporté au Canada par des immigrants écossais dans les années 1800. Le Canada a plus de patinoires de curling par habitant que tout autre pays. Le sport a été appelé « échecs sur glace » pour sa profondeur stratégique."}},
  {category:"indigenous",difficulty:"easy",type:"mc",question:{en:"What does the word 'Manitoba' likely come from?",fr:"De quoi le mot « Manitoba » tire-t-il probablement son origine?"},options:{en:["The Cree word 'manitou-wapow' meaning 'the narrows of the Great Spirit'","A French explorer's name","A Latin word","An English word for 'marshland'"],fr:["Le mot cri « manitou-wapow » signifiant « le détroit du Grand Esprit »","Le nom d'un explorateur français","Un mot latin","Un mot anglais pour « marécage »"]},correctIndex:0,funFact:{en:"Lake Manitoba's narrows produce unusual sounds when waves hit the rocky shores, which the Cree people attributed to the Great Spirit (Manitou). Many Canadian place names come from Indigenous languages.",fr:"Les détroits du lac Manitoba produisent des sons inhabituels quand les vagues frappent les rivages rocheux, que le peuple cri attribuait au Grand Esprit (Manitou). De nombreux noms de lieux canadiens viennent de langues autochtones."}},
  {category:"language",difficulty:"easy",type:"mc",question:{en:"What do Canadians call the last letter of the alphabet?",fr:"Comment les Canadiens appellent-ils la dernière lettre de l'alphabet?"},options:{en:["Zed","Zee","Zeta","Zep"],fr:["Zed","Zee","Zêta","Zep"]},correctIndex:0,funFact:{en:"This is arguably the most reliable test of whether someone is Canadian or American. Canadians say 'zed' (following British English), while Americans say 'zee.' Some Canadian children now say 'zee' due to American media influence.",fr:"C'est sans doute le test le plus fiable pour savoir si quelqu'un est canadien ou américain. Les Canadiens disent « zed » (suivant l'anglais britannique), tandis que les Américains disent « zee ». Certains enfants canadiens disent maintenant « zee » à cause de l'influence des médias américains."}},
  {category:"science",difficulty:"easy",type:"mc",question:{en:"What did Canadian Reginald Fessenden achieve on Christmas Eve, 1906?",fr:"Qu'a accompli le Canadien Reginald Fessenden la veille de Noël 1906?"},options:{en:["Made the first audio radio broadcast in history","Invented television","Launched a rocket","Built the first computer"],fr:["A fait la première émission de radio audio de l'histoire","A inventé la télévision","A lancé une fusée","A construit le premier ordinateur"]},correctIndex:0,funFact:{en:"Fessenden, born in East Bolton, Quebec, transmitted voice and music by radio for the first time. Ships at sea were stunned to hear music and speech coming from their wireless receivers. He held over 500 patents.",fr:"Fessenden, né à East Bolton, Québec, a transmis voix et musique par radio pour la première fois. Les navires en mer étaient stupéfaits d'entendre de la musique et de la parole venant de leurs récepteurs sans fil. Il détenait plus de 500 brevets."}},
  {category:"culture",difficulty:"easy",type:"mc",question:{en:"What is the Canadian two-dollar coin called?",fr:"Comment appelle-t-on la pièce canadienne de deux dollars?"},options:{en:["Toonie","Loonie","Dime","Quarter"],fr:["Toonie","Huard","Dix cents","Vingt-cinq cents"]},correctIndex:0,funFact:{en:"The toonie was introduced in 1996, featuring a polar bear by artist Brent Chicken. The name is a portmanteau of 'two' and 'loonie.' Some proposed names at launch included 'doubloon' and 'the bear.'",fr:"Le toonie a été introduit en 1996, présentant un ours polaire de l'artiste Brent Chicken. Le nom est un mot-valise de « two » et « loonie ». Certains noms proposés au lancement comprenaient « doublon » et « l'ours »."}},
  {category:"food",difficulty:"easy",type:"tf",question:{en:"Canada produces about 71% of the world's maple syrup, mostly from Quebec.",fr:"Le Canada produit environ 71 % du sirop d'érable mondial, principalement du Québec."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Quebec alone has over 11,000 maple syrup producers. The Federation of Quebec Maple Syrup Producers manages a strategic reserve of millions of pounds of syrup — and there was even a 'Great Canadian Maple Syrup Heist' in 2012 worth $18 million!",fr:"Le Québec seul compte plus de 11 000 producteurs de sirop d'érable. La Fédération des producteurs acéricoles du Québec gère une réserve stratégique de millions de livres de sirop — et il y a même eu un « Grand vol de sirop d'érable canadien » en 2012 d'une valeur de 18 millions de dollars!"}},
  {category:"language",difficulty:"medium",type:"tf",question:{en:"The Canadian Apology Act (2009) in Ontario states that saying 'sorry' is not an admission of legal fault.",fr:"La Loi sur les excuses de l'Ontario (2009) stipule que dire « désolé » n'est pas un aveu de faute légale."},options:{en:[],fr:[]},correctIndex:0,funFact:{en:"Six Canadian provinces have Apology Acts. They were enacted because Canadians say 'sorry' so frequently — even when bumped into by someone else — that legislators wanted to protect this cultural habit from being used against people in court!",fr:"Six provinces canadiennes ont des Lois sur les excuses. Elles ont été adoptées parce que les Canadiens disent « désolé » si fréquemment — même quand quelqu'un d'autre les bouscule — que les législateurs voulaient protéger cette habitude culturelle d'être utilisée contre les gens en cour!"}}
];
