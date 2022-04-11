const data = [
    {   
        id: 1,
        name: "MERCÚRIO",
        source: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
        overView:{
            urls: "./src/assets/images/planet-mercury.svg",
            description: "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol. Sua órbita ao redor do Sol leva 87,97 dias terrestres, o menor de todos os planetas do Sol. Mercúrio é um dos quatro planetas terrestres do Sistema Solar e é um corpo rochoso como a Terra.",
        },
        internalStructure:{
            urls: "./src/assets/images/planet-mercury-internal.svg",
            description: "Mercúrio parece ter uma crosta sólida de silicato e um manto sobrejacente a uma camada de núcleo externo sólida de sulfeto de ferro, uma camada de núcleo líquido mais profunda e um núcleo interno sólido. A densidade do planeta é a segunda mais alta do Sistema Solar, com 5,427 g/cm3, apenas um pouco menor que a densidade da Terra.",
        },
        surfaceGeology:{
            urls: "./src/assets/images/planet-mercury-geology.png",
            description: "A superfície de Mercúrio é semelhante em aparência à da Lua, mostrando extensas planícies semelhantes a mares e crateras pesadas, indicando que está geologicamente inativo há bilhões de anos. É mais heterogêneo do que o de Marte ou o da Lua.",
        },
        generalData:{
            rotationTime: "58.6 DIAS",
            revolutionTime: "87.97 DIAS",
            radius: "2,439.7 KM",
            averageTemp: "430°C",
        }
    },
    {   
        id: 2,
        name: "VÊNUS",
        source: "https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)",
        overView:{
            urls: "./src/assets/images/planet-venus.svg",
            description: "Vênus é o segundo planeta a partir do Sol. É nomeado após a deusa romana do amor e da beleza. Como o objeto natural mais brilhante no céu noturno da Terra depois da Lua, Vênus pode lançar sombras e pode ser, em raras ocasiões, visível a olho nu em plena luz do dia.",
        },
        internalStructure:{
            urls: "./src/assets/images/planet-venus-internal.svg",
            description: "A semelhança em tamanho e densidade entre Vênus e a Terra sugere que eles compartilham uma estrutura interna semelhante: um núcleo, manto e crosta. Como o da Terra, o núcleo venusiano é provavelmente pelo menos parcialmente líquido porque os dois planetas estão esfriando aproximadamente na mesma taxa.",
        },
        surfaceGeology:{
            urls: "./src/assets/images/planet-venus-geology.png",
            description: "Grande parte da superfície venusiana parece ter sido moldada pela atividade vulcânica. Vênus tem várias vezes mais vulcões que a Terra e tem 167 grandes vulcões com mais de 100 km (60 milhas) de diâmetro. O único complexo vulcânico deste tamanho na Terra é a Grande Ilha do Havaí.",
        },
        generalData:{
            rotationTime: "243 DIAS",
            revolutionTime: "224.7 DIAS",
            radius: "6,051.8 KM",
            averageTemp: "471°C",
        }
    }
    ,
    {   
        id: 3,
        name: "TERRA",
        source: "https://pt.wikipedia.org/wiki/Terra",
        overView:{
            urls: "./src/assets/images/planet-earth.svg",
            description: "Terceiro planeta a partir do Sol e o único planeta conhecido a abrigar vida. Cerca de 29,2% da superfície da Terra é terra, com os restantes 70,8% cobertos por água. A distância da Terra ao Sol, as propriedades físicas e a história geológica permitiram que a vida evoluísse e prosperasse.",
        },
        internalStructure:{
            urls: "./src/assets/images/planet-earth-internal.svg",
            description: "O interior da Terra, como o de outros planetas terrestres, é dividido em camadas por suas propriedades químicas ou físicas (reológicas). A camada externa é uma crosta sólida de silicato quimicamente distinta, que é sustentada por um manto sólido altamente viscoso.",
        },
        surfaceGeology:{
            urls: "./src/assets/images/planet-earth-geology.png",
            description: "A superfície total da Terra é de cerca de 510 milhões de km2. A crosta continental é constituída por material de menor densidade como as rochas ígneas granito e andesito. Menos comum é o basalto, uma rocha vulcânica mais densa que é o principal constituinte dos fundos oceânicos.",
        },
        generalData:{
            rotationTime: "0.99 DIAS",
            revolutionTime: "365.26 DIAS",
            radius: "6,371 KM",
            averageTemp: "16°C",
        }
    }
    ,
    {   
        id: 4,
        name: "MARTE",
        source: "https://pt.wikipedia.org/wiki/Marte_(planeta)",
        overView:{
            urls: "./src/assets/images/planet-mars.svg",
            description: 'Marte é o quarto planeta a partir do Sol e o segundo menor planeta do Sistema Solar, sendo maior que apenas Mercúrio. Em inglês, Marte carrega o nome do deus romano da guerra e é muitas vezes referido como o "Planeta Vermelho".',
        },
        internalStructure:{
            urls: "./src/assets/images/planet-mars-internal.svg",
            description: "Como a Terra, Marte se diferenciou em um núcleo metálico denso sobreposto por materiais menos densos. Os cientistas determinaram inicialmente que o núcleo é pelo menos parcialmente líquido. Os modelos atuais de seu interior implicam um núcleo consistindo principalmente de ferro e níquel com cerca de 16 a 17% de enxofre.",
        },
        surfaceGeology:{
            urls: "./src/assets/images/planet-mars-geology.png",
            description: "Marte é um planeta terrestre cuja superfície consiste em minerais contendo silício e oxigênio, metais e outros elementos que normalmente compõem a rocha. A superfície é composta principalmente de basalto toleítico, embora as partes sejam mais ricas em sílica do que o basalto típico.",
        },
        generalData:{
            rotationTime: "1.03 DIAS",
            revolutionTime: "1.88 ANOS",
            radius: "3,389.5 KM",
            averageTemp: "-28°C",
        }
    }
    ,
    {   
        id: 5,
        name: "JÚPITER",
        source: "https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)",
        overView:{
            urls: "./src/assets/images/planet-jupiter.svg",
            description: "Júpiter é o quinto planeta a partir do Sol e o maior do Sistema Solar. É um gigante gasoso com uma massa duas vezes e meia maior que a de todos os outros planetas do Sistema Solar combinados, mas menos de um milésimo da massa do Sol.",
        },
        internalStructure:{
            urls: "./src/assets/images/planet-jupiter-internal.svg",
            description: "Quando o Juno chegou em 2016, descobriu que Júpiter tem um núcleo muito difuso que se mistura ao seu manto. Uma possível causa é um impacto de um planeta de cerca de dez massas terrestres alguns milhões de anos após a formação de Júpiter, o que teria interrompido um núcleo joviano originalmente sólido.",
        },
        surfaceGeology:{
            urls: "./src/assets/images/planet-jupiter-geology.png",
            description: "A característica mais conhecida de Júpiter é a Grande Mancha Vermelha, uma persistente tempestade anticiclônica localizada 22° ao sul do equador. Sabe-se que existe desde pelo menos 1831, e possivelmente desde 1665.",
        },
        generalData:{
            rotationTime: "9.93 HORAS",
            revolutionTime: "11.86 ANOS",
            radius: "69,911 KM",
            averageTemp: "-108°C",
        }
    }
    ,
    {   
        id: 6,
        name: "SATURNO",
        source: "https://pt.wikipedia.org/wiki/Saturno_(planeta)",
        overView:{
            urls: "./src/assets/images/planet-saturn.svg",
            description: "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar, depois de Júpiter. É um gigante gasoso com um raio médio de cerca de nove vezes e meia o da Terra. Tem apenas um oitavo da densidade média da Terra.",
        },
        internalStructure:{
            urls: "./src/assets/images/planet-saturn-internal.svg",
            description: "Apesar de consistir principalmente de hidrogênio e hélio, a maior parte da massa de Saturno não está na fase gasosa, porque o hidrogênio se torna um líquido não ideal quando a densidade é superior a 0,01 g/cm3, que é alcançada em um raio contendo 99,9% da massa de Saturno.",
        },
        surfaceGeology:{
            urls: "./src/assets/images/planet-saturn-geology.png",
            description: "A atmosfera externa de Saturno contém 96,3% de hidrogênio molecular e 3,25% de hélio em volume. A característica mais famosa do planeta é seu proeminente sistema de anéis, composto principalmente de partículas de gelo com uma quantidade menor de detritos rochosos e poeira.",
        },
        generalData:{
            rotationTime: "10.8 HORAS",
            revolutionTime: "29.46 ANOS",
            radius: "58,232 KM",
            averageTemp: "-138°C",
        }
    }
    ,
    {   
        id: 7,
        name: "URANO",
        source: "https://pt.wikipedia.org/wiki/Urano_(planeta)",
        overView:{
            urls: "./src/assets/images/planet-urano.svg",
            description: "Urano é o sétimo planeta a partir do Sol. Seu nome é uma referência ao deus grego do céu, Urano segundo a mitologia grega, era o bisavô de Ares. Tem o terceiro maior raio planetário e a quarta maior massa planetária do Sistema Solar.",

        },
        internalStructure:{
            urls: "./src/assets/images/planet-urano-internal.svg",
            description: "O modelo padrão da estrutura de Urano é que consiste em três camadas: um núcleo rochoso (silicato/ferro-níquel) no centro, um manto gelado no meio e um envelope gasoso externo de hidrogênio/hélio. O núcleo é relativamente pequeno, com uma massa de apenas 0,55 massa terrestre.",
        },
        surfaceGeology:{
            urls: "./src/assets/images/planet-urano-geology.png",
            description: "A composição da atmosfera de Urano é diferente de seu volume, consistindo principalmente de hidrogênio molecular e hélio. A fração molar de hélio, ou seja, o número de átomos de hélio por molécula de gás, é 0,15±0,03 na troposfera superior.",
        },
        generalData:{
            rotationTime: "17.2 HORAS",
            revolutionTime: "84 ANOS",
            radius: "25,362 KM",
            averageTemp: "-195°C",
        }
    }
    ,
    {   
        id: 8,
        name: "NETUNO",
        source: "https://pt.wikipedia.org/wiki/Netuno_(planeta)",
        overView:{
            urls: "./src/assets/images/planet-neptune.svg",
            description: "Netuno é o oitavo e mais distante planeta solar conhecido do Sol. No Sistema Solar, é o quarto maior planeta em diâmetro, o terceiro planeta mais massivo e o planeta gigante mais denso. É 17 vezes a massa da Terra, mais massiva que seu quase gêmeo Urano.",
        },
        internalStructure:{
            urls: "./src/assets/images/planet-neptune-internal.svg",
            description: "A estrutura interna de Netuno se assemelha à de Urano. Sua atmosfera forma cerca de 5% a 10% de sua massa e se estende talvez de 10% a 20% do caminho em direção ao núcleo. Concentrações crescentes de metano, amônia e água são encontradas nas regiões mais baixas.",
        },
        surfaceGeology:{
            urls: "./src/assets/images/planet-neptune-geology.png",
            description: "A atmosfera de Netuno é 80% de hidrogênio e 19% de hélio. Uma pequena quantidade de metano também está presente. Bandas de absorção proeminentes de metano existem em comprimentos de onda acima de 600 nm, na porção vermelha e infravermelha do espectro.",
        },
        generalData:{
            rotationTime: "16.08 HORAS",
            revolutionTime: "164.79 ANOS",
            radius: "24,622 KM",
            averageTemp: "-201°C",
        }
    }
]
   
