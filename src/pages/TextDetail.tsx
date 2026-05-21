import { useParams, useNavigate } from "react-router-dom";
import { TopNav } from "@/components/portfolio/TopNav";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const TextDetail = () => {
  const { textId } = useParams();
  const navigate = useNavigate();
  
  const handleNavigate = (section: string) => {
    switch (section) {
      case "home":
        navigate("/");
        break;
      case "about":
        navigate("/sobre-mim");
        break;
      case "photo":
        navigate("/fotografia");
        break;
      case "writing":
        navigate("/literatura");
        break;
      case "contact":
        navigate("/contato");
        break;
    }
  };

  const getTextContent = (id: string) => {
    if (id === "revolucao-dos-bichos") {
      return {
        title: "Porcos no Poder",
        subtitle: "Um paralelo entre a fábula orwelliana e o atual cenário político no Brasil",
        image: "/lovable-uploads/porcos-no-poder.png",
        content: `Antes de chegar na última página do livro, já não me restava qualquer resquício de dúvida. A Revolução dos Bichos (1945), de George Orwell, não é apenas uma fábula política: é um tratado filosófico em forma alegórica sobre o poder, a corrupção e a fragilidade da memória coletiva.

Os animais, ao se rebelarem contra os humanos, aspiram liberdade, igualdade, justiça, respeito, esperança, dignidade. No entanto, o que se instala é apenas a substituição de um sistema de dominação por outro. A máxima "todos os animais são iguais" degrada-se, pouco a pouco, até transformar-se em "todos os animais são iguais, mas alguns são mais iguais que os outros". Esse deslocamento sutil, quase imperceptível, simboliza o mecanismo pelo qual a linguagem se torna instrumento de poder e opressão.

Do ponto de vista filosófico, a obra é uma reflexão amarga sobre a natureza humana (mesmo que encenada por animais). Questiona-se se a busca pela liberdade não está invariavelmente fadada a cair em novos sistemas de tirania. Rousseau, ao falar do contrato social, acreditava que a coletividade poderia organizar-se de forma justa; Orwell, ao contrário, expõe a tendência da coletividade a reproduzir hierarquias e privilégios.

Literariamente, a fábula revela a potência da simplicidade narrativa. Orwell se vale de uma estrutura aparentemente ingênua — animais em uma fazenda — para tratar de questões de poder, ideologia, abuso e manipulação. Essa ingenuidade aparente serve para expor o grotesco: o absurdo de que ideais libertários possam ser tão facilmente distorcidos pela retórica e pela memória seletiva.

A obra é uma parábola atemporal sobre os ciclos do poder: revoluções nascem da esperança, mas sem vigilância crítica e sem consciência histórica e imparcial, elas degeneram em novas formas de opressão.

E o que "A Revolução dos Bichos" tem a ver com o atual cenário político brasileiro?

Orwell nos mostra, através da fazenda e seus animais, que os projetos de poder frequentemente se apresentam com um discurso redentor, prometendo justiça, igualdade, prosperidade e mudanças. No Brasil, tanto os que se colocam à direita quanto os que se alinham à esquerda constroem suas narrativas como se representassem a verdadeira libertação do povo — e, ao mesmo tempo, acusam o "outro lado" de ser o verdadeiro opressor. Essa lógica é exatamente a da fazenda: os porcos, ao expulsarem o fazendeiro, afirmam libertar os animais; mas, logo, usam a mesma retórica de libertação para justificar novos privilégios.

Além disso, o livro também nos alerta para o papel da memória e da linguagem. No Brasil, o discurso político é constantemente ressignificado para manter determinada base de apoio: promessas são reinterpretadas, erros são reescritos como acertos, e slogans se tornam mantras ideológicos. É o mesmo mecanismo pelo qual a frase original "todos os animais são iguais" vai sendo alterada, até tornar-se irreconhecível. O povo, muitas vezes, aceita essas mudanças, seja por conveniência, por cansaço ou por falta de acesso crítico à informação.

Por isso, a polarização política brasileira, vista à luz da fábula de Orwell, mostra que a disputa não é apenas entre projetos políticos distintos, mas também entre versões rivais de uma mesma promessa de salvação. A "fazenda brasileira" se divide entre dois blocos que, paradoxalmente, se alimentam mutuamente: cada lado precisa do inimigo para justificar seus próprios excessos. O perigo maior, como Orwell nos adverte, é que nesse embate os interesses coletivos em jogo fiquem soterrados sob narrativas que servem sobretudo à perpetuação do poder a qualquer custo.

O ponto mais inquietante é que, tanto no livro quanto no Brasil, o estratagema de perpetuação do poder não depende apenas da manipulação das elites dirigentes, mas também da passividade e da memória curta das massas. Quando o povo se deixa conduzir sem questionar, abre-se o caminho para que os líderes, independentemente de seu espectro político, se sirvam da mesma estratégia: trocar símbolos e narrativas, mas preservar o essencial - o controle do poder.

Um outro ponto de extrema relevância no debate filosófico sobre o totalitarismo é a manipulação da linguagem como instrumento de controle do pensamento. George Orwell, em A Revolução dos Bichos e ainda mais em 1984, já intuía que a manipulação da linguagem não é apenas um recurso retórico, mas um mecanismo ontológico de dominação, pois limita o próprio horizonte do pensar.

Em Origens do Totalitarismo (1951), Hannah Arendt mostra como regimes totalitários criam uma realidade paralela através da linguagem. A manipulação não é apenas propaganda: é a tentativa de substituir a verdade factual por narrativas oficiais. O objetivo não é convencer, mas dissolver a confiança coletiva em qualquer critério de realidade. Assim, a mentira sistemática transforma-se em arma de governo.

Para Antonio Gramsci, o poder não se sustenta apenas pela força, mas pela capacidade de modelar a linguagem, os símbolos e os significados. A luta política passa pelo controle do discurso, de modo que até mesmo o senso comum da sociedade se molda a partir da narrativa dominante.

Para o filólogo alemão Victor Kemperer, em LTI: A linguagem do Terceiro Reich (1947), analisou como o nazismo infiltrou sua ideologia na fala cotidiana. Klemperer mostra que ao repetir certas expressões, metáforas e modos de falar, o regime colonizava o imaginário e transformava cidadãos comuns em partícipes inconscientes da lógica totalitária. Para ele, "as palavras podem ser como minúsculas doses de arsênico: ingerem-se sem perceber, mas com efeito cumulativo".

Embora não trate diretamente do totalitarismo, Foucault investigou o vínculo entre discurso e poder. Para ele, o que se pode dizer e pensar é moldado por "regimes de verdade" que determinam quais enunciados são aceitáveis. Essa análise é essencial para entender como sistemas políticos autoritários estabelecem fronteiras do pensável: controlando a linguagem, controlam-se os corpos e as subjetividades.

Em A Sociedade Aberta e Seus Inimigos (1945), Karl Popper denuncia como ideologias fechadas se servem de um vocabulário rígido para blindar-se contra a crítica. Quando o regime monopoliza a linguagem — transformando divergência em "traição", por exemplo —, a sociedade deixa de debater e passa apenas a repetir.

Desse modo, convergimos para a responsabilidade da imprensa no que diz respeito ao controle e a manipulação da informação. Como se sabe, desde a modernidade, a imprensa foi vista como "o quarto poder". Na concepção liberal, sua função era garantir a publicidade dos atos do Estado (no sentido kantiano), fiscalizando governos e ampliando a esfera pública. A imprensa, nesse ideal, deveria criar cidadãos críticos, capazes de deliberar com base em informação plural e verdadeira. Contudo, como advertiu Hannah Arendt, regimes totalitários e autoritários aprenderam rapidamente que o controle da opinião pública passa pelo controle da informação. Se o cidadão não tem acesso a múltiplas versões da realidade, sua capacidade de juízo é amputada.

Autores como Noam Chomsky e Edward Herman, em Manufacturing Consent (A fabricação do consenso), mostraram que mesmo em democracias formais a imprensa pode ser cooptada. Não apenas pela censura explícita, mas por mecanismos mais sutis: concentração de propriedade, dependência de anunciantes, alinhamento com interesses econômicos e políticos.

Isso cria um filtro: a sociedade acredita estar informada, mas na verdade recebe narrativas selecionadas, moldadas para reforçar determinadas agendas. O paralelismo com Orwell é evidente: a função da imprensa cooptada assemelha-se à do porco Squealer, que não "informa" a verdade, mas traduz a realidade de acordo com a conveniência e os interesses do poder, manipulando as palavras de modo que a sua interpretação se torne enviesada, sem que os que estão sendo "informados" percebam.

Nesse sentido, governos procuram controlar a imprensa porque sabem que o poder político depende da construção simbólica da realidade. Não basta governar – é preciso convencer que se governa bem. Subornar (financeiramente ou com privilégios) significa garantir que a imprensa não investigue certas contradições. Controlar significa monopolizar a narrativa, impedindo a pluralidade. Influenciar significa pautar o debate, escolher quais temas ganham destaque e quais permanecem invisíveis.

Assim, governos não se contentam com a força bruta. Querem a hegemonia da percepção pública, pois, se controlam o que as pessoas acreditam ser a realidade, controlam também sua reação ao poder.

Desse modo, o controle da imprensa é também uma maneira de manter viva a ideia de um "inimigo" – seja interno ou externo. Ao pautar manchetes e análises em torno da ameaça representada pelo adversário político, cria-se um estado de alerta constante. Isso mobiliza apoios, justifica medidas impopulares e arbitrárias, além de deslocar a atenção dos fracassos do governo para bem longe.

Dito isso, a imprensa tem um papel crucial no controle do pensamento porque ela não apenas transmite fatos, mas organiza o modo como a sociedade os percebe. Os governos procuram cooptá-la porque sabem que a batalha do poder não se vence apenas nos palanques, mas nas narrativas que moldam o imaginário coletivo. O perigo, como Orwell já antecipava, é quando a imprensa deixa de ser mediadora crítica e torna-se apenas eco da linguagem oficial — um megafone do poder.

Por fim, Orwell nos lembra que a verdadeira revolução cultural começa e termina nas palavras. Traduzindo a fábula para o momento atual no Brasil, percebemos que a luta política é, também, uma luta semântica: quem controla o léxico público controla — por meios mais suaves ou mais brutais — a possibilidade de contestação. Romper o ciclo exige, portanto, não apenas dispositivos técnicos ou legais, mas uma renovação ética: revalorizar a verdade factual, cultivar instituições de mediação crítica e reconstruir uma memória coletiva que resista ao apagamento e à reescrita oportunista da história. Sem isso, a fazenda continuará renovando suas figuras de mando sob a mesma retórica de salvação, perpetuando os porcos no poder.`
      };
    }

    switch (id) {
      case "cavalo-de-pijamas":
        return {
          title: "Cavalo de Pijamas",
          image: "/lovable-uploads/ea329aab-a5af-48ec-8724-c842df1148ca.png",
          content: `Os contornos eram vistos com clareza. O formato era mantido na memória pela misericordiosa recordação da infância. A lembrança rejuvenescia na mente devido aos ventos, que sopravam alegremente um ar sem ausência de lugar visitado, mas ao mesmo tempo, sozinho. A imaginação, por si só, coloria a imagem apagada na escuridão de um navegador noturno. Podia-se ouvir a música de felicidade, a agitação dos animais ansiosos para o início do grande espetáculo, o aroma de criança sorrindo, o gosto de pipoca voando no ar, o tumulto da multidão se aproximando e várias outras coisas imperceptíveis aos outros, mas sensíveis àqueles olhos de dragão. Era assim que Raul percebia tudo. E foi assim a chegada do circo na cidade.

          
	Já na primeira apresentação, a cidade teve que enfrentar a mais difícil fase da sobrevivência: o abandono. Nenhuma alma-viva, nem morta, conteve-se diante do envenenamento injusto causado pela felicidade exasperada e rendeu-se aos encantos do circo. Estavam todos lá. Raul, logo na entrada, resistiu ao perfume das cores e notou, deslumbrado, a lona colorida que formava aquela estrutura mágica. Comprou seu bilhete sem a ajuda de ninguém e entrou pelo portal para um universo estranho e lúdico.

    
	Depois de dar apenas três passos confusos, Raul foi incomodado pela presença de um palhaço que, completamente vencido pelo poder do sorriso, lhe ofereceu uma maçã do amor.

    
	- Com esta maçã do amor, até a princesa invisível do castelo de açúcar adormeceria nos seus braços.

    
	Raul entendeu a propaganda enganosa e mesmo assim não resistiu. 

    
	- Dê-me logo cinco dessas! 

    
	O palhaço foi honesto e não aceitou vender-lhe as cinco milagrosas maçãs do amor. “Faltariam mãos para levá-las.” - disse ele, entregando-lhe uma só. Raul sorriu e compreendeu que não era preciso tanta ganância, pois existia somente uma única princesa invisível no castelo de açúcar e somente esta já lhe era suficiente.

    
	Sozinho, Raul sentou-se num canto discreto, ansioso para assistir ao grande espetáculo. Foi quando as luzes começaram a piscar, de modo que pareciam estar sendo atacados por estrelas-cadentes. Um senhor imponente apareceu no meio da fumaça que subia até os ares mais longínquos e disse:

    
	- Respeitável público, é com imensa satisfação que lhes apresento o mágico dos reis.  

    
	O mágico dos reis era assim conhecido porque foi o único mágico que se atreveu a praticar sua arte para os reis. Era preciso muita coragem para enganá-los, mas o mais difícil mesmo era manter o sigilo e não revelar como se fazia para transformar rainhas em ouro puro. E, neste espetáculo, ele chegou flutuando...

    
	Conseguiu fascinar a plateia de tal maneira, quando fez desaparecer em dois segundos o cavalo de pijamas, que foi possível sentir o tremor das palmas do outro lado do continente. Raul, com sua visão desfigurada, mas com seu faro aguçado de tamanduá, sabia que, na verdade, o cavalo de pijamas havia se retirado por um esconderijo debaixo do picadeiro. Mesmo assim, não desmereceu as palmas e nem contou o segredo para ninguém, pois sabia que o cavalo de pijamas estava indo dormir sossegado.

    
	Os palhaços invadiram o palco com a promessa de que estrangulariam o riso de todos. As crianças explodiram em gargalhadas infinitas, provenientes das inúmeras gracinhas que os palhaços faziam. Eram excêntricos em sua maneira de vestir, com sapatos enormes, flores artificiais no bolso da camisa colorida e uma maquiagem que realçava a personalidade do personagem. Os adultos se continham, pois ainda havia o medo antigo de que os adultos não podiam rir por besteiras, mas no fundo do peito se entregavam com a certeza de que o riso é o melhor remédio para a vida. Raul chorou de tanto rir, fez lavar os olhos com as lágrimas saudáveis da felicidade. Era tudo um sonho. Um sonho escuro e sem cor. 

    
	Raul sempre quis ser astronauta, mas sabia que seus olhos tornavam as estrelas muito distante para tocar. No circo, os viajantes do espaço eram conhecidos como trapezistas e eram eles os próximos a se apresentar. Voavam com precisão, fazendo piruetas e mergulhando no ar como se dominassem a gravidade. Para Raul, parecia que tudo acontecia em câmera lenta, permitindo-lhe analisar cada movimento e constatar, sem dúvida alguma, que não havia erros. Era tudo simplesmente perfeito!

    
	Os animais eram exibidos como troféus: o urso que dançava bolero, o leão que pulava cordas, a girafa com trinta milhões de anéis de ouro no pescoço, o jacaré cor-de-pinga, o cachorro que atravessava o fogo, o peixe que bateu o recorde de tempo fora d’água. Eram diversos animais, com características únicas que os tornaram atrações de circo. Raul achava tudo aquilo uma brutalidade, pois sabia que, fora do circo, havia nas florestas escondidas um bando de animais afundados na tristeza e que, certamente, necessitavam de ajuda. 

    
	Naquela noite, o circo havia cumprido seu papel social. Obrigou a todos o sentimento de felicidade. Arrebentou os corações mais duros. Acrescentou o riso e a satisfação de viver. Ao final, todos os artistas se reuniram no picadeiro e foram retribuídos com aplausos eternos e cheios de verdade. O único que não pôde comparecer ao fim do espetáculo para receber suas honras foi o cavalo de pijamas, que há muito tempo repousava tranquilo em seu merecido descanso. 

    
	Raul permaneceu sentado até que a última pessoa se retirou da plateia. Tinha esperanças de que seria surpreendido pela paixão da princesa invisível do castelo de açúcar. Mas entendeu que nem mesmo com a capacidade de ver enxergaria a bela princesa pelo simples motivo da invisibilidade. Assim, Raul se retirou, completo em sua solidão e caminhou na escuridão de sua cegueira até que pudesse compreender que agora já estava apto a morrer sorrindo... 

     
`
        };
      case "tempo-suficiente":
        return {
          title: "Tempo Suficiente",
          image: "/lovable-uploads/5f7df7ca-80f7-420f-b883-66e3bbae2e3e.png",
           content: `Imagine ter tempo mais que suficiente para observar o céu e fazer conclusões astronômicas. Esse pensamento intrusivo ocupou a mente de Almir enquanto ele, num movimento automático, percorria com o dedo indicador os vídeos do TikTok. Não percebeu que o relógio marcava 02h44 da manhã e preferiu atribuir a culpa pela insônia ao vizinho que provocou um barulho incomum no início da noite. Não considerou as pílulas fracionadas com altas doses de dopamina, que ele consumia ao longo do dia, transformando seu ciclo circadiano em uma balbúrdia. Sempre foi mais fácil apontar um culpado, sobretudo quando se tratava daquele vizinho.

Assim que a cidade deu indícios de que a quinta-feira havia começado, chuvosa e tumultuada, ele acordou. Atrasado: não há pior maneira de começar um dia! Sem tempo para um banho gelado e um café revigorante. Às pressas, precisou abotoar a camisa nova de algodão, enquanto chamava o elevador para buscá-lo no 35º andar. Observando seu reflexo no vidro da pequena janela do hall social, percebeu que a camisa estava toda amarrotada. Só então lembrou a falta de tempo dos últimos dias, correria danada, não fazia ideia onde havia guardado o ferro de passar.

Almir abaixou a cabeça para conferir no celular a distância exata que o motorista de aplicativo estava de sua residência, na tentativa fugaz de saber se teria tempo suficiente. Detestava deixar quem quer fosse esperando. “Tempo é dinheiro” - ele dizia, sempre que o contexto era apropriado. Acabou se distraindo com um vídeo aleatório, quando abriu sem querer o Instagram. Uma das armadilhas da estratégia do gancho de atenção nos primeiros segundos. Estranhou a demora do elevador – injustificável! – mesmo que precisasse escalar todos aqueles andares.

Algum morador segurava o elevador além do razoável. Sem procurar entender a razão, Almir deu uma tremenda porrada na porta de ferro, fazendo ecoar um estrondo vergonhoso no condomínio. “Malditos vizinhos!” – pensou. Saiu correndo feito louco, atravessando a porta corta-fogo para alcançar o lado oposto do edifício. O elevador de serviços seria agora a solução para o seu problema contra o tempo, ainda que o motorista já estivesse o aguardando, estacionado no meio da rua, com o pisca-alerta ligado.

— Perdoe a demora! – disse – Algum vizinho idiota segurou o elevador.

O trajeto até o trabalho lhe presenteou com alguns minutos de puro ócio. Pelo WhatsApp, no grupo dos amigos, aproveitou para condenar a decisão absurda do árbitro que anulou um gol legal do Flamengo, mesmo recorrendo à ajuda tardia da tecnologia. Destilou seu ódio com tanta voracidade que o motorista percebeu a raiva sobressaltada em seus dedos enquanto digitava cada palavra. Aproveitou ainda para conferir a foto que a moça bonita publicou durante as horas que esteve na academia — criando muito conteúdo e se exercitando bem pouco. Assistiu ao vídeo que prometia entregar o segredo dos grandes mentores, mas se irritou ao descobrir que precisaria ler a interminável legenda de cinco linhas para compreender toda a verdade.

Só então levantou a cabeça, curvando-se no banco com a intenção de se localizar na cidade, procurando um ponto de referência que lhe fosse familiar. Se acaso alguém observasse a cena do alto, olhando pela janela de um dos edifícios ao redor do cruzamento, veria o grande amontoado de veículos ligados, encurralados pela ignorância dos motoristas em dias de chuva, que esmagam sua furiosa buzina, como o fuzil de um soldado no campo de batalha.  

Vendo que o semáforo alternava suas cores, conforme os cálculos imprecisos dos engenheiros de trânsito, e os automóveis permaneciam parados – presos no tempo –, ilhados como uma baleia encalhada na praia, Almir precisou admitir, balançando a cabeça em sinal de desaprovação: “Vou me atrasar outra vez!”

Quando, por fim, venceu o caos urbano, fazendo a curva na esquina da empresa, Almir conferiu o relógio para estimar o tempo perdido: 47 minutos. “O chefe vai entender!” pensou, tentando aliviar a própria tensão com justificativas nas quais ele mesmo não acreditava.

Servindo-se de uma dose generosa de café sem açúcar, manteve a cabeça erguida para atravessar o corredor —  disfarçando o constrangimento do atraso — com os mesmos passos que lhe acompanhavam no cotidiano, mas um ar de arrogância involuntária, agindo como se fosse o gerente sem horários a cumprir com rigor. 

Entre um gole e outro do café amargo, mais uma vez navegou sem rumo pelas redes sociais, com o celular apoiado num local discreto e protegido, aguardando o cérebro começar a funcionar – como ele costumava dizer, antes que a cafeína tivesse feito algum efeito. 

Com a nítida intenção de chegar sem ser visto, cuidando para não fazer alarde com os sapatos, o diretor apareceu sorrateiro, batendo com a mão direita na parede de gesso acartonado, a ponto de quase derrubá-la de uma só vez.

— Terminou o relatório? – perguntou – sem sequer dizer bom dia, num tom de voz que não pareceu amistoso.

O susto quase fez com que Almir derramasse todo o café em sua camisa nova amarrotada. Teve poucos segundos para fingir serenidade e se recompor, ajustando sua postura na cadeira do escritório. 

— Bom dia, chefe! – respondeu – tentando ganhar algum tempo para formular a desculpa perfeita. – Não tive tempo de terminar, ainda, mas… já comecei a trabalhar nisso. 

— Começou? – arrematou o diretor – com um sarcasmo nas entrelinhas capaz de desconcertar o mais sagaz dos ditadores.

O restante daquela manhã se desenrolou de maneira meramente protocolar. Não foi possível confirmar se alguém teria tido a audácia de culpar a chuva por mais uma manhã desperdiçada; vencida pela preguiça notável dos funcionários, sonolentos e silenciosos, até então. Talvez por isso o almoço tenha sido muito aguardado. Não que acreditassem que comeriam arroz e salada, com pedaços de motivação e energia, e agora de barrigas cheias, teriam, enfim, alguma vontade de produzir. Parece óbvio, mas talvez só estivessem aguardando que o próximo pretexto surgisse para dar aquela pausa providencial no trabalho. 

O refeitório era grande o suficiente para que todos pudessem fazer as suas refeições em paz, embora a televisão estivesse ligada, noticiando as tragédias do dia em um volume atordoante. Havia um limite estipulado em contrato: apenas duas proteínas no prato, por colaborador, sem exceção. Isso viria a ser motivo de uma rebelião interna; precisavam eleger com urgência um representante que levasse as demandas “lá pra cima”. A norma deveria mudar, de modo que todos pudessem escolher duas carnes, além, é claro, do ovo frito que tanto gostavam.

Naquele horário as cadeiras estavam todas ocupadas. No entanto, não havia sequer um assunto na mesa que permitisse qualquer diálogo, ainda que superficial. Todos mastigavam sua comida — sem tempo suficiente para conversar ou sorrir. Do lado esquerdo do prato, onde deveria repousar a faca, os celulares traziam todas aquelas informações, em tempo recorde. Sem olhar para a comida – como robôs programados – iam rolando a tela do celular e mastigando sem digerir, ora um pedaço de bife suculento, ora um conteúdo inútil, que logo seria esquecido.

O tempo destinado para o almoço – embora cronometrado pela chefia imediata com a mesma precisão das competições de natação – era considerado sagrado. Trinta minutos para comer e escovar os dentes. “Tempo mais que suficiente” – deixaram eternizado na sétima página escrita do regulamento interno.  

Almir não teve tempo suficiente para terminar o relatório que a diretoria solicitou e só foi capaz de lembrar desse detalhe no final do expediente, quando bateu seu ponto com o crachá, passando pela catraca de segurança com marcas de ferrugem. Dessa vez se armou com argumentos contundentes na tentativa de justificar sua falha, prevendo que ela seria cobrada de uma forma irreversível. A forte chuva vespertina teria sido a provável responsável pela queda abrupta de energia que desligou os computadores, fazendo com que o arquivo se perdesse num estranho vazio digital.

Cansado, enquanto aguardava o táxi que o levaria de volta para casa, suspirou: “Que dia corrido!” Qualquer pessoa que observasse a cena de longe seria capaz de enxergar o rosto de Almir, iluminado pela tela do celular, embora ele mesmo não tivesse brilho algum. Assim, permaneceu com a sola do sapato escorada na mureta de concreto, navegando sozinho e em silêncio no seu mundo virtual preferido; com uma equivocada sensação de controle dos minutos e uma indecifrável tristeza no olhar.

A chuva ainda caia, cuidadosa e certeira, revestida de uma complacência rara de se ver em meio aos grandes temporais. O cheiro de terra molhada flutuava no ar como uma maravilhosa benção divina. A dispersão mágica de luzes atravessando as nuvens no céu desenhava um crepúsculo colorido no horizonte. As plantas exibiam o seu pleno vigor característico que antecede as lindas florações no esplendor da primavera. E assim a vida ia acontecendo lá fora: ininterrupta, única e bela — ainda que ninguém tivesse tempo suficiente para vivê-la.

`
        };
      case "ultima-memoria":
        return {
          title: "A última memória antes do fim",
          image: "/lovable-uploads/0bb0ed33-6470-43b8-9d76-534feea7093e.png",
          content: `00:59.

Eram os minutos finais de toda existência. Sentado em um bloco de pedra, abrigado pela sombra reconfortante de um jacarandá florido, Luiz teve pouco tempo para refletir sobre a efemeridade da vida, enquanto enxugava o suor e as lágrimas misturados de maneira irremediável em seu rosto. Em silêncio, buscou no fundo do bolso da calça jeans uma fotografia dobrada ao meio e marcada pelo tempo. Seus olhos demoraram-se nela, como se enxergassem o verdadeiro significado de sua salvação.

Não por acaso, Luiz escolheu o alto da montanha para assistir ao desfecho de tudo. As autoridades previram que o momento exato do fim coincidiria com os derradeiros raios de luz amarela, tingindo o horizonte com o último pôr do sol.

Luiz não conseguiu disfarçar a angústia causada por seu ritmo cardíaco e a velocidade com que o sangue percorria suas extremidades, carregando níveis de adrenalina que ele nunca havia experimentado. Pela primeira vez em muitos anos ele se sentiu presente por inteiro - sem distrações tecnológicas, sem intervenções que fugiam da sua alçada de controle. Lamentou ter percebido isso somente agora, enquanto desfrutava os últimos minutos da eternidade. Atormentado pela iminência do nada, ele olhou mais uma vez a fotografia, deixando derramar por completo um carinho especial que ele raramente sentia em sua rotina.

Enquanto os minutos passavam, implacáveis e ininterruptos, Luiz teve a sutil impressão de que o Sol havia se recusado a terminar o dia, como se, em um gesto de misericórdia, pudesse adiar o terrível fim. Apesar disso, todo o restante do universo parecia saber e, de alguma forma, concordar que as cortinas se fechassem pela última vez. Talvez por isso mesmo os minutos finais do espetáculo da vida aconteceram com muita veemência, ousadia e uma certa dose de saudade.

O céu estava repleto de nuvens do algodão mais branco que já se viu, formando desenhos maravilhosos criados pelos grandes artistas da esplêndida divindade. O vento soprava a brisa suave capaz de varrer as sombras escondidas nas profundezas da alma. O canto dos pássaros soava em perfeita harmonia e afinação, como a mais bela orquestra de anjos. Enquanto os fascinantes detalhes da vida aconteciam, Luiz voltou ao dia em que aquela fotografia havia sido tirada. Apenas mais tarde compreendeu que revisitar esse instante significava aceitar que aquela fosse a sua última memória antes do fim. 

Era um sábado qualquer e seu pai havia acordado bem cedo para conferir o tempero da feijoada. Os ingredientes haviam sido colocados na panela na noite anterior, com a mesma precisão de um quebra-cabeças: feijão preto, bacon, linguiça calabresa defumada, costelinha e lombo, além de outras partes do porco que ele jamais comentou na mesa do almoço para não impressionar a ingenuidade das crianças. Os segredos da receita, guardados a sete chaves por gerações, acompanhavam a tradição da família, selada por um juramento eterno. Os outros temperos todos conheciam: pitadas generosas de muito amor, oito folhas de louro, pimenta-do-reino moída na hora, quatro cebolas grandes, sal a gosto, cinco dentes de alho e uma caprichada dose de pinga.

Como de costume, se esbaldaram de tanto comer aquela que havia sido considerada uma iguaria gastronômica da casa. O peso dos olhos começava a dificultar a sustentação do corpo, indicando o prenúncio da sesta sagrada após as delícias sabatinas, quando o pai de Luiz pegou o celular para registrar o momento. A foto capturou um instante puro e sincero e talvez tenha sido o mais espontâneo de toda a história: um pai, com o olhar sonolento e a barriga estufada, e seu filho pequeno, morrendo de alegria sem imaginar que havia acabado de saborear a orelha de um porco. 

Muitos anos depois, enquanto folheava um álbum de fotografias no quarto da mãe, Luiz foi surpreendido com o registro daquele almoço. A lembrança foi tão real que ele foi capaz de sentir o cheiro da feijoada flutuando no ar e a felicidade no coração de um filho transbordando saudade. Não precisou de dois segundos para decidir retirar a fotografia do álbum e guardá-la no bolso, escondida como um tesouro secreto, apesar da certeza de que sua mãe lhe daria de presente aquelas memórias eternizadas no papel. 

Agora, contemplando a vista da montanha, Luiz sentiu um vazio esmagador dentro de si quando olhou a fotografia pela última vez. Jamais soube explicar se aquela lembrança havia lhe causado fome ou se, na verdade, era a presença devastadora do rancor, essa criatura feroz que se aloja nos corações incapazes de perdoar, tão cruel e fatal quanto um furacão desgovernado.

Luiz não foi capaz de chegar em um consenso razoável com o seu pai sobre a doçura ou amargor da torra escura do café. A altura e o tom de voz das palavras jogadas ao vento evidenciou uma energia desnecessária que nem o excesso de cafeína poderia explicar. A discussão sobre um fato tão mesquinho, como colocar ou não açúcar no próprio café, causou um dano quase irreversível entre eles; mais doloroso e absurdo que o silêncio improvável do trompete, como se a música da convivência tivesse sido calada para sempre. Até hoje ninguém conseguiu encontrar um motivo plausível que justificasse a dupla exaltação daquele dia e, sem que percebessem, pai e filho, ficaram sem se falar por todos os anos seguintes, separados pelo imenso abismo que uma colher de açúcar fora capaz de abrir.

Restavam poucos minutos agora, talvez tempo suficiente para um suspiro profundo ou um arrependimento legítimo. Luiz olhou para o relógio e viu que apenas um dígito lhe restava, quem sabe o último grão de areia caindo na ampulheta do destino. Diante das opções que tinha, escolheu fechar os olhos e esperar que o tempo se encarregasse de tudo, embora no fundo quisesse fugir para bem longe na tentativa de escapar ileso do inevitável fim. 

O minuto zero se aproximava, rápido e impiedoso. Ainda com os olhos fechados, Luiz sentiu um alívio fantasmagórico, como se descobrisse o peso de sua alma na plenitude do além. Nos segundos finais, manteve a lembrança de seu pai guardada no coração feito um escudo de aço, como se, de alguma forma, pudesse protegê-lo da tragédia final. Essa decisão espontânea serviu como um poderoso antídoto, livrando-o da pior das inquietudes da vida. 

00:00.

O tempo acabou. Na escuridão absoluta do fim foi possível escutar um alarme sonoro que insistiu em ecoar pelas paredes com a nítida intenção de despertar um novo dia. Luiz abriu os olhos com certa dificuldade, se esforçando para retomar a consciência. Estaria sonhando? Seria o fim ou o começo? O mundo parecia esperar por sua decisão, mas Luiz, suspenso no limiar entre o que se foi e o que poderia ser, permaneceu imóvel, encarando o vazio com a coragem de quem ainda não tinha todas as respostas. Era um sábado qualquer e o cheiro delicioso de feijoada invadiu seu quarto pela fresta da porta de madeira, anunciando mais uma oportunidade para sorrir.`

          
        };
      default:
        return {
          title: "Texto não encontrado",
          content: "O texto solicitado não foi encontrado."
        };
    }
  };

  const textData = getTextContent(textId || "");

  return (
    <>
      <TopNav
        onHome={() => handleNavigate("home")}
        section="writing"
        onToPhoto={() => handleNavigate("photo")}
        onToWriting={() => handleNavigate("writing")}
        onToAbout={() => handleNavigate("about")}
        onToContact={() => handleNavigate("contact")}
        onNavigate={handleNavigate}
      />
      
      <main className="min-h-screen pt-20">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl px-4 py-12"
        >
          {/* Top left back button */}
          <div className="mb-8">
            <button
              onClick={() => navigate("/literatura")}
              className="bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>

          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Didot, serif' }}>{textData.title}</h1>
            
            {textData.subtitle && (
              <h2 className="text-xl text-gray-600 mb-8 italic">{textData.subtitle}</h2>
            )}

            {textData.image && (
              <div className="mb-8">
                <img 
                  src={textData.image} 
                  alt={`Imagem do texto ${textData.title}`} 
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </header>

          <div className="prose prose-lg mx-auto text-foreground max-w-none">
            {textData.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/literatura")}
              className="bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
        </motion.article>
      </main>
    </>
  );
};

export default TextDetail;