(window.courseData = window.courseData || []).push({
  id: 2,
  title: "2. Storia del Calcolo & Architetture",
  keyRequired: "ALGO-KEY-101",
  nextKey: "BINARY-CHIP-202",
  submodules: [
    {
      title: "2.1 Babbage, Ada Lovelace & Il Telaio Meccanico",
      content: `
        <h2>2.1 Dal Telaio per Tessitura al Primo Computer Meccanico</h2>
        
        <p>Prima dell'elettricità, la parola <em>computer</em> (calcolatore) non indicava una macchina di metallo o silicio, ma una <strong>professione umana</strong>! Nei secoli XVIII e XIX, i "calcolatori" erano centinaia di impiegati che compilavano a mano enormi tomi di tavole matematiche, nautiche e astronomiche per la navigazione delle navi da guerra e mercantili.</p>

        <p>Il problema era drammatico: gli esseri umani si stancano, si distraggono e commettono errori. Una singola cifra errata in una tavola di navigazione poteva far naufragare una nave sugli scogli.</p>

        <div class="callout-box history">
          <div class="callout-title">🧵 L'Idea Rivoluzionaria: Il Telaio Jacquard (1804)</div>
          <p>La scintilla che cambiò il mondo non nacque in un laboratorio matematico, ma nell'industria tessile della seta a Lione! Nel 1804, l'inventore francese <a href="https://it.wikipedia.org/wiki/Joseph-Marie_Jacquard" target="_blank">Joseph-Marie Jacquard</a> inventò un telaio guidato da <strong>cartoncini rigidi forati</strong> collegati tra loro a nastro continuo.<br>
          Se sul cartone c'era un foro, l'ago passava e il filo entrava nella trama; se non c'era il foro, l'ago veniva bloccato. Sostituendo il nastro di cartoni bucati, lo stesso telaio poteva tessere in pochi minuti un semplice motivo a righe oppure un complicatissimo arazzo damascato con figure umane e fiori!</p>
        </div>

        <h3>Charles Babbage e la Macchina Analitica</h3>
        <p>Il matematico londinese <a href="https://it.wikipedia.org/wiki/Charles_Babbage" target="_blank">Charles Babbage</a> vide nel telaio Jacquard una rivelazione: <em>"Se le schede perforate possono guidare la tessitura di fili di seta, possono anche guidare ruote dentate per tessere calcoli numerici!"</em></p>

        <p>Babbage progettò prima il <strong>Motore Differenziale</strong> (una calcolatrice meccanica gigantesca a manovella) e poi la leggendaria <strong>Macchina Analitica</strong> (1837): il primo computer universale programmabile della storia, alimentato da una motrice a vapore e composto da:</p>
        <ul>
          <li><strong>Il Magazzino (Store):</strong> una memoria meccanica capace di conservare 1.000 numeri da 50 cifre ciascuno su colonne di ruote dentate;</li>
          <li><strong>Il Mulino (Mill):</strong> l'unità di calcolo (l'antenato dell'odierna ALU della CPU) capace di eseguire le quattro operazioni aritmetiche;</li>
          <li><strong>Il Meccanismo a Schede:</strong> l'unità di input per leggere le istruzioni e i dati dai cartoni perforati ispirati a Jacquard.</li>
        </ul>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-02/babbage-difference-engine.jpg" alt="Motore Differenziale di Babbage" loading="lazy">
          <div class="figure-caption">Porzione del Motore Differenziale di Charles Babbage conservata al Science Museum di Londra: migliaia di ingranaggi di bronzo e acciaio per azzerare gli errori umani.</div>
        </div>

        <div class="callout-box curiosity">
          <div class="callout-title">💡 Dalla Meccanica alla Rappresentazione dei Dati</div>
          <p>L'uso dei fori per registrare informazioni rappresentava il primissimo antenato della logica binaria: <em>foro presente</em> (1) oppure <em>foro assente</em> (0). Nel prossimo modulo vedremo nel dettaglio come questa semplice alternativa a due stati si trasforma nel concetto moderno di <strong>Bit, Sistema Binario e Codifica ASCII</strong>!</p>
        </div>
      `
    },
    {
      title: "2.2 L'Evoluzione Fisica dell'Hardware & Federico Faggin",
      content: `
        <h2>2.2 Dalle Stanze ai Microchip: La Rivoluzione Elettronica</h2>

        <p>Benché i progetti di Babbage fossero geniali, la tecnologia metallurgica dell'epoca vittoriana non era abbastanza precisa per costruire migliaia di ingranaggi perfetti. La vera svolta avvenne nel Novecento, quando la meccanica venne sostituita dall'<strong>elettronica</strong>.</p>

        <h3>1ª Generazione (Anni '40): Le Valvole Termoioniche e l'ENIAC</h3>
        <p>I primi computer elettronici usavano <a href="https://it.wikipedia.org/wiki/Valvola_termoionica" target="_blank">valvole termoioniche</a> (tubi a vuoto): lampadine di vetro riscaldate che potevano far passare o bloccare il flusso di elettroni, funzionando da interruttori ultra-rapidi.</p>
        
        <div class="callout-box curiosity">
          <div class="callout-title">💡 Il Gigante ENIAC (1945) e il quartiere al buio</div>
          <p>Costruito per l'esercito americano per calcolare le traiettorie dell'artiglieria, l'<a href="https://it.wikipedia.org/wiki/ENIAC" target="_blank">ENIAC</a> (Electronic Numerical Integrator and Computer) pesava <strong>30 tonnellate</strong>, occupava <strong>167 metri quadrati</strong> e conteneva oltre <strong>18.000 valvole</strong>. Consumava 150 kW di elettricità: a Filadelfia si diceva che le luci della città tremassero quando veniva avviato! Inoltre, le valvole scaldavano così tanto che in media una si bruciava ogni due giorni, richiedendo ore di lavoro per trovarla e sostituirla.</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-02/eniac.jpg" alt="ENIAC e le programmatrici" loading="lazy">
          <div class="figure-caption">L'ENIAC a Filadelfia (1946). La macchina veniva programmata a mano spostando fisicamente cavi telefonici e commutatori da pannelli a parete.</div>
        </div>

        <div class="callout-box history">
          <div class="callout-title">🦋 L'Invenzione del "Bug": Grace Hopper e la Falena (1947)</div>
          <p>Il 9 settembre 1947, presso l'Università di Harvard, il gigantesco calcolatore <em>Mark II</em> andò in blocco. La pioniera dell'informatica <a href="https://it.wikipedia.org/wiki/Grace_Hopper" target="_blank">Grace Hopper</a> andò a ispezionare i relè elettromeccanici e trovò una <strong>falena</strong> schiacciata tra i contatti metallici del Relè #70!<br>
          Hopper estrasse l'insetto con delle pinzette, lo incollò con nastro adesivo sul registro ufficiale delle operazioni e annotò ironicamente: <em>"First actual case of bug being found"</em> ("Primo caso reale di bug trovato"). Da quel giorno, ogni errore logico o guasto in un programma viene chiamato <strong>bug</strong>, e l'azione di correggerlo <strong>debugging</strong>!</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-02/first-bug.jpg" alt="Il registro originale del Mark II con la falena incollata (1947)" loading="lazy">
          <div class="figure-caption">Il registro originale del Mark II (9 settembre 1947) con la falena conservata allo Smithsonian Institute di Washington: la nascita ufficiale del termine informatico "Bug".</div>
        </div>

        <h3>2ª e 3ª Generazione: Il Transistor e i Circuiti Integrati</h3>
        <p>Nel 1947, ai Bell Labs, venne inventato il <a href="https://it.wikipedia.org/wiki/Transistor" target="_blank">transistor</a>: un minuscolo componente fatto di silicio e germanio. Il transistor fa lo stesso identico lavoro della valvola (interruttore acceso/spento per la corrente), ma non ha filamenti incandescenti, consuma un milionesimo dell'energia e non si brucia mai.</p>

        <p>Negli anni '60 arrivarono i <strong>circuiti integrati</strong>: invece di saldare i transistor uno per uno con dei fili, decine di transistor vennero stampati fotograficamente su una singola fettina di silicio.</p>

        <div class="callout-box history">
          <div class="callout-title">🇮🇹 Genio Italiano: Federico Faggin e la Nascita del Microprocessore (Intel 4004)</div>
          <p>La nascita del computer moderno come lo conosciamo oggi è legata indissolubilmente al nome di un fisico e inventore italiano: <a href="https://it.wikipedia.org/wiki/Federico_Faggin" target="_blank">Federico Faggin</a> (nato a Vicenza nel 1941).<br>
          Dopo aver lavorato in Italia alla Olivetti, Faggin si trasferì nella Silicon Valley dove sviluppò la rivoluzionaria <strong>tecnologia MOS con gate di silicio (Silicon Gate Technology)</strong>, che permise di costruire transistor microscopici, velocissimi e ultra-affidabili.<br>
          Nel 1971, lavorando per Intel, Faggin realizzò l'<strong>Intel 4004</strong>: il <strong>primo microprocessore commerciale al mondo su singolo chip</strong>! In soli 12 millimetri quadrati di silicio, Faggin riuscì a racchiudere l'intera CPU di un calcolatore. Sul master di silicio del chip 4004, Faggin incise con orgoglio le proprie iniziali: <strong>"F.F."</strong>.</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-02/intel-4004.jpg" alt="Microprocessore Intel 4004" loading="lazy">
          <div class="figure-caption">Il microprocessore Intel 4004 (1971), ideato e progettato da Federico Faggin: il primo chip al mondo a integrare l'intera CPU di un computer.</div>
        </div>

        <!-- WIDGET 2: LA MACCHINA DEL TEMPO DEI TRANSISTOR -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⏳ La Macchina del Tempo dei Transistor & Legge di Moore</span>
            <span class="widget-badge">Widget 2.2</span>
          </div>
          <div class="widget-body">
            <p>Sposta la barra temporale per vedere come la tecnologia è passata da intere stanze a miliardi di interruttori microscopici su silicio:</p>

            <div style="margin: 16px 0;">
              <input type="range" id="eraRangeInput" min="0" max="3" value="0" step="1" oninput="updateEraDisplay(this.value)" style="width: 100%; cursor: pointer;">
              <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">
                <span>1945: Valvole (ENIAC)</span>
                <span>1955: Transistor</span>
                <span>1971: Intel 4004 (Faggin)</span>
                <span>Oggi: 3 Nanometri</span>
              </div>
            </div>

            <div class="time-era-box" id="eraCardDisplay">
              <!-- Rendered via JS -->
            </div>
          </div>
        </div>
      `
    },
    {
      title: "2.3 Von Neumann vs Harvard & Architetture del Futuro",
      content: `
        <h2>2.3 Architetture a Confronto: Von Neumann vs Harvard</h2>

        <p>Prima degli anni '40, ogni volta che l'ENIAC doveva cambiare calcolo, i tecnici dovevano spegnere la macchina e passare <strong>giorni interi</strong> a staccare e riattaccare a mano centinaia di cavi telefonici per riconfigurare il circuito.</p>

        <p>Nel 1945, il matematico <a href="https://it.wikipedia.org/wiki/John_von_Neumann" target="_blank">John von Neumann</a> ideò il concetto di <strong>programma memorizzato</strong>: dati e istruzioni software non sono fili, ma numeri residenti nello stesso identico spazio di memoria RAM.</p>

        <h3>Il "Collo di Bottiglia" di Von Neumann (The Bottleneck)</h3>
        <p>L'Architettura di Von Neumann è elegantissima ed economica: una sola memoria e un solo canale (Bus) condiviso tra istruzioni e dati. Tuttavia, ha un limite fisico inevitabile:</p>
        <ul>
          <li>La CPU <strong>non può</strong> contemporaneamente prelevare un'istruzione e leggere o scrivere un dato;</li>
          <li>Poiché il bus è uno solo, la CPU deve fare "la fila al casello": prima usa il bus per l'istruzione (Fase 1), poi aspetta e riusa il bus per i dati (Fase 2). Questo rallentamento è noto in informatica come <strong>Collo di Bottiglia di Von Neumann</strong>.</li>
        </ul>

        <h3>La Risposta Parallela: L'Architettura Harvard</h3>
        <p>Quasi contemporaneamente, all'Università di Harvard, Howard Aiken progettò il calcolatore <em>Harvard Mark I</em> con un'idea completamente differente:</p>
        <div class="callout-box history">
          <div class="callout-title">⚡ Architettura Harvard: Memorie e Bus Separati</div>
          <p>Nell'<a href="https://it.wikipedia.org/wiki/Architettura_Harvard" target="_blank">Architettura Harvard</a>, le istruzioni del programma e i dati risiedono in <strong>due memorie fisicamente separate</strong>, collegate alla CPU da <strong>due bus completamente indipendenti</strong>!<br>
          <strong>Il vantaggio?</strong> La CPU può fare due cose nello stesso identico ciclo di clock: legge l'istruzione successiva dal bus istruzioni MENTRE legge o scrive i dati dal bus dati. Massima velocità e zero colli di bottiglia!</p>
        </div>

        <!-- WIDGET 3: SIMULATORE COMPARATIVO VON NEUMANN VS HARVARD -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚔️ Simulatore a Confronto: Von Neumann vs Harvard</span>
            <span class="widget-badge">Widget 2.3</span>
          </div>
          <div class="widget-body">
            <p>Seleziona l'architettura per vedere come viaggiano istruzioni e dati tra memoria e processore:</p>

            <div class="arch-toggle-group">
              <button class="arch-toggle-btn active" id="btnModeVN" onclick="setArchitectureMode('VN')">🏛️ Architettura Von Neumann (Bus Condiviso)</button>
              <button class="arch-toggle-btn" id="btnModeHARV" onclick="setArchitectureMode('HARV')">⚡ Architettura Harvard (Doppio Bus)</button>
            </div>

            <!-- Display dinamico dell'architettura -->
            <div id="archDynamicWorkspace">
              <!-- Rendered via JS -->
            </div>

            <div style="margin-top: 14px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
              <button class="btn-primary" onclick="stepCurrentArchCycle()">Esegui Passo di Clock ⏱️</button>
              <button class="btn-primary" style="background: #475569;" onclick="resetCurrentArchCycle()">Resetta Ciclo ↺</button>
            </div>

            <div class="arch-metric-card" id="archMetricBanner">
              <!-- Rendered via JS -->
            </div>
          </div>
        </div>

        <h3>Come funzionano i nostri Computer oggi? L'Architettura Harvard Modificata</h3>
        <p>Ti starai chiedendo: <em>"Il mio portatile (Mac o Windows) o il mio smartphone usa Von Neumann o Harvard?"</em></p>
        <p>La risposta è geniale: <strong>usa entrambe!</strong> I computer moderni adottano l'<a href="https://it.wikipedia.org/wiki/Architettura_Harvard_modificata" target="_blank">Architettura Harvard Modificata</a>:</p>
        <ul>
          <li><strong>All'esterno (Livello Scheda Madre e RAM):</strong> Sembra un'architettura <strong>Von Neumann</strong>. C'è un unico grande banco di memoria RAM dove vengono caricati liberamente sia i programmi (Chrome, Minecraft) sia i tuoi documenti. Questo garantisce massima flessibilità e costi contenuti.</li>
          <li><strong>All'interno del Microprocessore (Livello Cache L1):</strong> È pura <strong>Architettura Harvard</strong>! Dentro il silicio della CPU, la memoria cache di Livello 1 è fisicamente spezzata in due: una <strong>L1i (Instruction Cache)</strong> solo per le istruzioni e una <strong>L1d (Data Cache)</strong> solo per i dati, ciascuna con il proprio bus ultraveloce.</li>
        </ul>

        <div class="callout-box experiment">
          <div class="callout-title">🤖 Dove si usa ancora l'Architettura Harvard Pura?</div>
          <p>Nei microcontrollori per l'elettronica e l'automazione, come <strong>Arduino</strong> (con il chip ATmega328P)! In Arduino, il programma compilato risiede nella memoria <em>Flash</em> permanente, mentre le variabili di lavoro risiedono in una memoria <em>SRAM</em> completamente separata. Questo garantisce che nessun errore nel codice possa accidentalmente sovrascrivere o cancellare le istruzioni del programma.</p>
        </div>

        <h3>Curiosità: Le Architetture di Nicchia e del Futuro</h3>
        <p>Oltre a Von Neumann e Harvard, gli scienziati hanno esplorato paradigmi architetturali alternativi e affascinanti:</p>

        <div class="callout-box curiosity">
          <div class="callout-title">🧠 1. Calcolo Neuromorfico (Ispirato al Cervello Umano)</div>
          <p>Chip come <em>Intel Loihi</em> o <em>IBM TrueNorth</em> non hanno né CPU né RAM separate! Riducono il consumo energetico imitando i neuroni e le sinapsi biologiche: ogni "nodo" neuronale conserva ed elabora le informazioni direttamente sul posto. Consumano fino a 10.000 volte meno energia di un chip tradizionale per compiti di intelligenza artificiale visiva e sensoriale.</p>
        </div>

        <div class="callout-box curiosity">
          <div class="callout-title">💾 2. Processing-In-Memory (PIM)</div>
          <p>Invece di continuare a spostare miliardi di byte tra la memoria e il processore lungo il bus (sprecando tempo ed energia termica), le architetture <em>PIM</em> integrano minuscoli core di calcolo direttamente <strong>all'interno dei chip di memoria RAM o HBM</strong>. La memoria esegue i calcoli da sola prima di rimandare il risultato finale.</p>
        </div>

        <div class="callout-box curiosity">
          <div class="callout-title">🌊 3. Architetture Dataflow (A Flusso di Dati)</div>
          <p>Nelle CPU tradizionali c'è un contatore (Program Counter) che dice: <em>"Esegui istruzione 1, poi istruzione 2, poi istruzione 3..."</em>. Nelle architetture <em>Dataflow</em> non esiste un ordine fisso di programma: un'istruzione si attiva e viene eseguita istantaneamente <strong>nel momento esatto in cui i suoi dati di ingresso sono disponibili</strong>. Usate nei supercomputer di ricerca scientifica e nei sistemi radar.</p>
        </div>
      `
    }
  ],
  quiz: {
    questions: [
      {
        q: "In che cosa consiste il principio rivoluzionario dello 'Stored-Program' introdotto dall'Architettura di Von Neumann (1945)?",
        options: [
          { text: "Istruzioni e dati devono risiedere in spazi di memoria fisicamente separati e sincronizzati da oscillatori al quarzo indipendenti", correct: false },
          { text: "Dati e istruzioni risiedono nella medesima memoria primaria ad accesso casuale; la CPU può manipolare il programma stesso come se fosse dato, permettendo al calcolatore di riprogrammarsi dinamicamente senza ricablaggio fisico", correct: true },
          { text: "Il programma viene inciso permanentemente in microcodice di sola lettura nella ROM, mentre la RAM memorizza unicamente i vettori di interrupt", correct: false },
          { text: "Le istruzioni risiedono esclusivamente all'interno dei registri generali dell'ALU eliminando qualsiasi transito di codice sui bus di sistema", correct: false }
        ]
      },
      {
        q: "Quale innovazione permise a Federico Faggin di realizzare l'Intel 4004 (1971), il primo microprocessore monolitico su singolo chip?",
        options: [
          { text: "L'invenzione del transistor bipolare a giunzione (BJT) presso i Bell Labs, che sostituì le valvole termoioniche su piastra madre", correct: false },
          { text: "L'adozione di semiconduttori compositi all'arseniuro di gallio (GaAs) per superare i limiti di mobilità elettronica del silicio", correct: false },
          { text: "L'impiego della Silicon Gate Technology (SGT) con gate in silicio policristallino autoallineato, che consentì di integrare per la prima volta l'intera CPU (ALU, registri, Control Unit) su un unico chip", correct: true },
          { text: "La sostituzione delle interconnessioni in alluminio con guide d'onda ottiche miniaturizzate integrate nel substrato di silicio", correct: false }
        ]
      },
      {
        q: "Qual è la differenza strutturale primaria tra l'Architettura di Von Neumann e l'Architettura Harvard pura?",
        options: [
          { text: "L'architettura Harvard dispone di memorie e bus fisicamente distinti per codice e dati, consentendo accessi simultanei; Von Neumann unifica memoria e bus, introducendo il collo di bottiglia di trasferimento ma massimizzando la flessibilità", correct: true },
          { text: "L'architettura Harvard impiega memorie cache multilivello hardware, mentre Von Neumann si affida unicamente a registri mappati nello spazio di I/O", correct: false },
          { text: "Von Neumann consente alla CPU di eseguire codice direttamente dalla memoria secondaria (disco), mentre Harvard esige il caricamento previo in banchi ROM", correct: false },
          { text: "L'architettura Harvard è concepita esclusivamente per calcoli a virgola mobile, mentre Von Neumann elabora unicamente valori interi in complemento a due", correct: false }
        ]
      },
      {
        q: "Come implementano i moderni processori (Intel Core, AMD Ryzen, Apple Silicon) l'Architettura Harvard Modificata?",
        options: [
          { text: "Separano la memoria RAM fisica in due banchi DDR distinti sulla scheda madre (uno dedicato agli eseguibili e uno alle variabili di runtime)", correct: false },
          { text: "Utilizzano l'architettura Harvard nella cache L3 condivisa tra tutti i core, mantenendo la cache L1 completamente unificata per codice e dati", correct: false },
          { text: "Alternano via software il bus di sistema tra modalità Von Neumann nel ciclo di Fetch e modalità Harvard nel ciclo di Write-Back", correct: false },
          { text: "Adottano un modello unificato Von Neumann per la memoria RAM principale esterna, ma integrano all'interno del die cache L1 fisicamente separate per Istruzioni (L1-I) e Dati (L1-D) per eliminare i conflitti di accesso", correct: true }
        ]
      },
      {
        q: "Durante la fase di Fetch nel ciclo macchina CPU, quale ruolo svolgono il Program Counter (PC) e l'Instruction Register (IR)?",
        options: [
          { text: "Il Program Counter memorizza l'esito algebrico dell'ultima istruzione dell'ALU, mentre l'Instruction Register conta i cicli di clock trascorsi", correct: false },
          { text: "Il Program Counter contiene l'indirizzo di memoria della prossima istruzione da prelevare in RAM; l'istruzione letta viene copiata nell'IR per la decodifica, mentre il PC si incrementa per preparare il ciclo successivo", correct: true },
          { text: "L'Instruction Register funge da puntatore alla cima dello stack (RSP), mentre il Program Counter traduce l'Assembly in microcodice binario", correct: false },
          { text: "Il Program Counter legge direttamente gli operandi dall'Accumulatore, mentre l'Instruction Register invia i segnali di sincronizzazione al generatore di clock", correct: false }
        ]
      }
    ]
  }
});

/* ==========================================================================
   FUNZIONI LOGICHE DEI WIDGET DEL MODULO 2
   ========================================================================== */

// --- WIDGET 2.2: Macchina del Tempo Transistor ---
const eraDatabase = [
  {
    year: "1945",
    name: "1ª Generazione: Valvola Termoionica (ENIAC)",
    transistorEquivalent: "1 Valvola = 1 Interruttore a vuoto",
    count: "~18.000 valvole",
    size: "167 mq (Intero salone)",
    speed: "5.000 addizioni al secondo (5 kHz)",
    power: "150.000 Watt (Scalda come 75 forni)",
    desc: "Ogni valvola ha le dimensioni di una grossa lampadina ad incandescenza. La macchina pesa 30 tonnellate. Affidabilità bassa: una valvola si guasta ogni 48 ore."
  },
  {
    year: "1955",
    name: "2ª Generazione: Transistor a Giunzione (Bell Labs)",
    transistorEquivalent: "1 Transistor discreto",
    count: "~10.000 transistor discreti",
    size: "Armadi metallici da ufficio (2 mq)",
    speed: "100.000 operazioni al secondo (100 kHz)",
    power: "1.500 Watt (Consumo ridotto del 99%)",
    desc: "Il silicio sostituisce il vuoto. I transistor sono grandi quanto un chicco di caffè, durano decenni senza bruciare e non scaldano."
  },
  {
    year: "1971",
    name: "3ª Generazione: Intel 4004 (L'invenzione di Federico Faggin)",
    transistorEquivalent: "2.300 transistor su 1 chip",
    count: "2.300 transistor",
    size: "12 millimetri quadrati (Un francobollo)",
    speed: "740.000 operazioni al secondo (740 kHz)",
    power: "0.5 Watt (Alimentato da una pila)",
    desc: "Il primo microprocessore commerciale su singolo chip della storia, progettato dal fisico vicentino Federico Faggin grazie alla sua Silicon Gate Technology. Faggin incise le sue iniziali 'F.F.' direttamente nell'angolo del silicio!"
  },
  {
    year: "2026",
    name: "4ª Generazione: Microchip Moderno a 3 Nanometri",
    transistorEquivalent: "> 50.000.000.000 di transistor",
    count: "Oltre 50 Miliardi di transistor",
    size: "100 millimetri quadrati (Come un'unghia)",
    speed: "> 3.500.000.000 cicli/sec (3.5 GHz)",
    power: "Circa 15-45 Watt (Batteria smartphone dura tutto il giorno)",
    desc: "Ogni transistor misura circa 3 nanometri: più piccolo di un singolo filamento di DNA umano! La Legge di Moore ha aumentato la densità di oltre 25 milioni di volte rispetto al 4004 di Faggin."
  }
];

window.updateEraDisplay = function(index) {
  const container = document.getElementById('eraCardDisplay');
  if (!container) return;

  const era = eraDatabase[parseInt(index)] || eraDatabase[0];
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
      <h4 style="margin: 0; color: var(--primary); font-size: 1.05rem;">${era.name}</h4>
      <span style="font-size: 0.78rem; font-weight: bold; background: var(--primary-light); color: var(--primary); padding: 2px 8px; border-radius: 4px;">Epoca: ${era.year}</span>
    </div>
    <p style="font-size: 0.92rem; margin-bottom: 12px; line-height: 1.5;">${era.desc}</p>
    <div class="era-stat-grid">
      <div class="era-stat-card">
        <div class="era-stat-label">Numero Interruttori</div>
        <div class="era-stat-val">${era.count}</div>
      </div>
      <div class="era-stat-card">
        <div class="era-stat-label">Spazio Occupato</div>
        <div class="era-stat-val">${era.size}</div>
      </div>
      <div class="era-stat-card">
        <div class="era-stat-label">Velocità di Calcolo</div>
        <div class="era-stat-val">${era.speed}</div>
      </div>
      <div class="era-stat-card">
        <div class="era-stat-label">Potenza Assorbita</div>
        <div class="era-stat-val">${era.power}</div>
      </div>
    </div>
  `;
};

// --- WIDGET 2.3: Confronto Architetturale Von Neumann vs Harvard ---
window.currentArchMode = 'VN';
window.currentArchStep = 0;

window.setArchitectureMode = function(mode) {
  window.currentArchMode = mode;
  window.currentArchStep = 0;

  const btnVN = document.getElementById('btnModeVN');
  const btnHARV = document.getElementById('btnModeHARV');
  if (btnVN) btnVN.classList.toggle('active', mode === 'VN');
  if (btnHARV) btnHARV.classList.toggle('active', mode === 'HARV');

  renderArchitectureWorkspace();
};

function renderArchitectureWorkspace() {
  const container = document.getElementById('archDynamicWorkspace');
  const banner = document.getElementById('archMetricBanner');
  if (!container) return;

  if (window.currentArchMode === 'VN') {
    container.innerHTML = `
      <div class="vn-architecture-board">
        <div class="vn-unit-box">
          <div class="vn-unit-title">
            <span>Memoria RAM Unica</span>
            <span style="font-size: 0.72rem; color: var(--primary);">Istruzioni + Dati</span>
          </div>
          <table class="vn-ram-table">
            <tr id="vnRowCode" class="${window.currentArchStep === 1 ? 'active-cell' : ''}">
              <td>@00</td>
              <td><strong>ISTRUZIONE:</strong> SOMMA RegA, RegB</td>
            </tr>
            <tr id="vnRowData1" class="${window.currentArchStep === 2 ? 'active-cell' : ''}">
              <td>@01</td>
              <td><strong>DATO A:</strong> 15</td>
            </tr>
            <tr id="vnRowData2" class="${window.currentArchStep === 2 ? 'active-cell' : ''}">
              <td>@02</td>
              <td><strong>DATO B:</strong> 27</td>
            </tr>
          </table>
        </div>

        <div class="vn-bus-bridge ${window.currentArchStep > 0 ? 'active' : ''}" id="vnBusUnique">
          <span>⇄</span>
          <span style="font-size: 0.68rem; font-weight: bold; ${window.currentArchStep === 1 ? 'color: #3b82f6;' : window.currentArchStep === 2 ? 'color: #10b981;' : ''}">
            ${window.currentArchStep === 1 ? 'BUS OCCUPATO: Istruzione' : window.currentArchStep === 2 ? 'BUS OCCUPATO: Dati' : 'BUS CONDIVISO'}
          </span>
        </div>

        <div class="vn-unit-box">
          <div class="vn-unit-title">
            <span>CPU (Von Neumann)</span>
            <span style="font-size: 0.72rem; color: #ef4444;">1 Canale</span>
          </div>
          <div class="vn-cpu-subpart ${window.currentArchStep === 1 ? 'highlight' : ''}">
            <strong>Control Unit:</strong> ${window.currentArchStep >= 1 ? 'Istruzione Caricata ✅' : 'In attesa'}
          </div>
          <div class="vn-cpu-subpart ${window.currentArchStep === 2 ? 'highlight' : ''}">
            <strong>ALU:</strong> ${window.currentArchStep === 2 ? 'Dati Ricevuti: 15 + 27 = 42 ✅' : 'In attesa operandi'}
          </div>
        </div>
      </div>
    `;

    if (banner) {
      banner.innerHTML = `
        <div><strong>Cicli di Clock necessari:</strong> <span style="color: #ef4444; font-weight: bold;">2 Cicli Separati</span> (Collo di Bottiglia presente)</div>
        <div><strong>Stato:</strong> ${window.currentArchStep === 0 ? 'Pronto per il Ciclo 1 (Fetch Istruzione)' : window.currentArchStep === 1 ? 'Ciclo 1: Istruzione prelevata. Ora il bus deve essere liberato per i dati.' : 'Ciclo 2: Dati prelevati ed elaborati!'}</div>
      `;
    }
  } else {
    // HARVARD MODE
    container.innerHTML = `
      <div class="harvard-board">
        <!-- Memoria Istruzioni -->
        <div class="vn-unit-box" style="border-color: #3b82f6;">
          <div class="vn-unit-title">
            <span style="color: #2563eb;">Memoria Istruzioni (ROM/Flash)</span>
          </div>
          <p style="font-size: 0.8rem; font-family: monospace; padding: 6px; background: var(--card-bg); border-radius: 4px; margin: 0;">
            @00: SOMMA RegA, RegB
          </p>
        </div>

        <!-- Bus Istruzioni -->
        <div class="vn-bus-bridge ${window.currentArchStep === 1 ? 'active' : ''}" style="color: #3b82f6;">
          <span>➔</span>
          <span style="font-size: 0.65rem; font-weight: bold;">Bus Istr.</span>
        </div>

        <!-- CPU Centrale -->
        <div class="vn-unit-box" style="border-color: #10b981;">
          <div class="vn-unit-title">
            <span>CPU (Harvard)</span>
            <span style="font-size: 0.72rem; color: #10b981;">2 Canali Paralleli</span>
          </div>
          <div class="vn-cpu-subpart ${window.currentArchStep === 1 ? 'highlight' : ''}">
            <strong>Control Unit:</strong> ${window.currentArchStep === 1 ? 'Istruzione Ricevuta ✅' : 'In attesa'}
          </div>
          <div class="vn-cpu-subpart ${window.currentArchStep === 1 ? 'highlight' : ''}">
            <strong>ALU:</strong> ${window.currentArchStep === 1 ? 'Dati Letti: 15 + 27 = 42 ✅' : 'In attesa'}
          </div>
        </div>

        <!-- Bus Dati -->
        <div class="vn-bus-bridge ${window.currentArchStep === 1 ? 'active' : ''}" style="color: #10b981;">
          <span>⇄</span>
          <span style="font-size: 0.65rem; font-weight: bold;">Bus Dati</span>
        </div>

        <!-- Memoria Dati -->
        <div class="vn-unit-box" style="border-color: #10b981;">
          <div class="vn-unit-title">
            <span style="color: #059669;">Memoria Dati (RAM/SRAM)</span>
          </div>
          <p style="font-size: 0.8rem; font-family: monospace; padding: 6px; background: var(--card-bg); border-radius: 4px; margin: 0;">
            @D0: 15<br>@D1: 27
          </p>
        </div>
      </div>
    `;

    if (banner) {
      banner.innerHTML = `
        <div><strong>Cicli di Clock necessari:</strong> <span style="color: #10b981; font-weight: bold;">1 Singolo Ciclo Parallelo!</span> (Nessun Collo di Bottiglia)</div>
        <div><strong>Stato:</strong> ${window.currentArchStep === 0 ? 'Premi per avviare il ciclo parallelo simultaneo' : '🎉 Istruzione e Dati prelevati CONTEMPORANEAMENTE in 1 solo clock!'}</div>
      `;
    }
  }
}

window.stepCurrentArchCycle = function() {
  if (window.currentArchMode === 'VN') {
    if (window.currentArchStep >= 2) window.currentArchStep = 0;
    else window.currentArchStep++;
  } else {
    if (window.currentArchStep >= 1) window.currentArchStep = 0;
    else window.currentArchStep = 1;
  }
  renderArchitectureWorkspace();
};

window.resetCurrentArchCycle = function() {
  window.currentArchStep = 0;
  renderArchitectureWorkspace();
};

// Inizializza i widget al caricamento
setTimeout(() => {
  if (typeof updateEraDisplay === 'function') updateEraDisplay(0);
  if (typeof renderArchitectureWorkspace === 'function') renderArchitectureWorkspace();
}, 250);
