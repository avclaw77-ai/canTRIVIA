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
  }
];
