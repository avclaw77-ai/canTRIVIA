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
  }
];
