(window.courseData = window.courseData || []).push({
  id: 10,
  title: "10. I Linguaggi di Programmazione: Tassonomia & Scelta",
  keyRequired: "CYBER-SEC-999",
  nextKey: "PYTHON-MASTER-909",
  submodules: [
    {
      title: "10.1 La Babele dei Linguaggi & La Torre dell'Astrazione",
      content: `
        <h2>10.1 La Babele dei Linguaggi: Perché non Ne Esiste Uno Solo?</h2>

        <p>Nel mondo dell'informatica moderna sono stati inventati <strong>più di 700 linguaggi di programmazione</strong> diversi, e ogni anno ne nascono di nuovi. Perché l'umanità non si è accordata su un singolo linguaggio universale perfetto?</p>

        <p>La risposta è che in informatica non esiste un linguaggio "migliore" in assoluto: <strong>ogni linguaggio è un compromesso ingegneristico</strong>. Alcuni sono progettati per spremere l'ultimo briciolo di velocità dal processore a costo di essere difficilissimi da scrivere; altri sacrificano un po' di velocità per permettere agli esseri umani di scrivere codice chiaro, veloce e privo di errori.</p>

        <h3>La Scala dell'Astrazione: Dagli 0 e 1 alla Lingua Umana</h3>
        <p>Il concetto più potente dell'intera informatica è l'<a href="https://it.wikipedia.org/wiki/Astrazione_(informatica)" target="_blank">Astrazione</a>: l'arte di nascondere i dettagli elettronici microscopici e noiosi per concentrarsi sul significato logico del problema.</p>

        <div class="callout-box history">
          <div class="callout-title">⚓ Grace Hopper e la Nascita del Primo Compilatore (1952)</div>
          <p>Nei primi anni '50, i programmatori inserivano le istruzioni digitando codici ottali o binari a mano. Una straordinaria matematica e ammiraglio della Marina statunitense di nome <a href="https://it.wikipedia.org/wiki/Grace_Hopper" target="_blank">Grace Hopper</a> ebbe un'idea considerata allora folle: <em>"Perché non facciamo scrivere agli umani parole in lingua inglese (come 'ADD' o 'MULTIPLY') e facciamo tradurre quelle parole alla macchina stessa?"</em>.<br>
          I suoi colleghi maschi risposero con scetticismo: <em>"I computer non possono comprendere l'inglese, sono solo calcolatrici per numeri!"</em>.<br>
          Grace Hopper non si arrese: nel 1952 inventò il <strong>primo compilatore della storia (A-0)</strong> e guidò la creazione del linguaggio <strong>COBOL</strong>, dimostrando al mondo intero che la programmazione poteva diventare accessibile all'intelletto umano!</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-10/grace-hopper.jpg" alt="Grace Hopper alla console del computer UNIVAC" loading="lazy">
          <div class="figure-caption">Grace Hopper davanti al supercomputer UNIVAC: la pioniera che inventò il compilatore e aprì la strada ai linguaggi ad alto livello.</div>
        </div>

        <h3>I 5 Piani della Piramide dei Linguaggi</h3>
        <ol>
          <li><strong>Linguaggio Macchina (Livello 0):</strong> Sequenze di numeri esadecimali grezzi (es. <code>B8 05 00 00 00</code>) che accendono e spengono direttamente i transistor della CPU. Incomprensibile per gli umani;</li>
          <li><strong>Assembly (Livello 1 - Basso Livello):</strong> Traduzione 1:1 delle istruzioni CPU in parole mnemoniche (es. <code>MOV EAX, 5</code>, <code>ADD EAX, EBX</code>). Velocità assoluta, ma se cambi processore (da Intel a Apple Silicon ARM) devi riscrivere tutto da zero!;</li>
          <li><strong>Linguaggi di Sistema (Livello 2 - C, C++, Rust):</strong> Controllo totale della memoria senza intermediari. Usati per costruire i sistemi operativi (il kernel di Windows e Linux è scritto in C/C++), i motori grafici dei videogiochi 3D (Unreal Engine) e i browser web (Chrome);</li>
          <li><strong>Linguaggi a Macchina Virtuale (Livello 3 - Java, C#, Go):</strong> Gestione automatica della memoria tramite il <a href="https://it.wikipedia.org/wiki/Garbage_collection" target="_blank">Garbage Collector</a> (che pulisce gli oggetti inutilizzati evitando i memory leak) e portabilità universale ("Scrivi una volta, esegui ovunque");</li>
          <li><strong>Linguaggi ad Altissimo Livello (Livello 4 - Python, JavaScript, Ruby):</strong> Sintassi elegantissima vicina al linguaggio naturale. Sacrificano qualche millisecondo di esecuzione per regalare una velocità di sviluppo ineguagliabile: ideali per intelligenza artificiale, data science, web e per chiunque stia imparando a programmare!</li>
        </ol>

        <!-- WIDGET 10.1: LA TORRE DELL'ASTRAZIONE -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🏰 La Torre dell'Astrazione: Stesso Algoritmo, 5 Livelli di Linguaggio</span>
            <span class="widget-badge">Widget 10.1</span>
          </div>
          <div class="widget-body">
            <p>Osserva come lo stesso identico algoritmo (calcolare la somma dei numeri da 1 a 5 e mostrare il risultato: <code>15</code>) si trasforma salendo i piani dell'astrazione:</p>

            <div class="tower-workbench">
              <!-- Selettore dei Piani della Torre -->
              <div class="tower-levels-selector">
                <button class="tower-btn active" id="tBtn1" onclick="selectAbstractionLevel(1)">1. Macchina (Hex)</button>
                <button class="tower-btn" id="tBtn2" onclick="selectAbstractionLevel(2)">2. Assembly x86</button>
                <button class="tower-btn" id="tBtn3" onclick="selectAbstractionLevel(3)">3. Linguaggio C</button>
                <button class="tower-btn" id="tBtn4" onclick="selectAbstractionLevel(4)">4. Java (OOP)</button>
                <button class="tower-btn" id="tBtn5" onclick="selectAbstractionLevel(5)">5. Python 🐍</button>
              </div>

              <!-- Schermo Editor di Codice del Piano Selezionato -->
              <div class="tower-code-box">
                <div class="tower-code-header">
                  <span id="towerLevelBadge" style="font-weight: bold; color: #38bdf8;">PIANO 1: CODICE MACCHINA (HEX RAW)</span>
                  <span id="towerHumanScore" style="font-size: 0.75rem; color: #f59e0b;">Leggibilità Umana: 1 / 10 🤯</span>
                </div>
                <pre class="tower-code-display" id="towerCodeDisplay">
B8 00 00 00 00   ; mov eax, 0  (azzera registro accumulatore)
BB 01 00 00 00   ; mov ebx, 1  (registro contatore i = 1)
01 D8            ; add eax, ebx (accumulatore += contatore)
83 C3 01         ; add ebx, 1  (incrementa contatore)
83 FB 05         ; cmp ebx, 5  (confronta con 5)
7E F6            ; jle -10     (salta indietro se minore o uguale)
                </pre>
              </div>

              <!-- Metriche di Confronto -->
              <div class="tower-metrics-row">
                <div class="tower-metric-card">
                  <span class="metric-label">Righe di Codice:</span>
                  <strong class="metric-val" id="metricLines">6 istruzioni hex</strong>
                </div>
                <div class="tower-metric-card">
                  <span class="metric-label">Velocità di Esecuzione:</span>
                  <strong class="metric-val" style="color: #10b981;" id="metricSpeed">Massima (3 cicli clock)</strong>
                </div>
                <div class="tower-metric-card">
                  <span class="metric-label">Tempo di Scrittura per un Umano:</span>
                  <strong class="metric-val" style="color: #ef4444;" id="metricTime">Lentissimo (Ore di manuale)</strong>
                </div>
              </div>

              <div id="towerExplanationText" style="font-size: 0.84rem; color: var(--text-color); margin-top: 8px; line-height: 1.45;">
                Istruzioni esadecimali pure inviate direttamente ai circuiti dell'ALU. Zero astrazione.
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "10.2 Come Diventa Eseguibile? Compilazione vs Interpretazione vs JIT",
      content: `
        <h2>10.2 Dalla Tastiera al Silicio: Come Viene Tradotto il Tuo Codice?</h2>

        <p>Un microprocessore capisce esclusivamente il linguaggio macchina. Quando tu scrivi codice in C, Python o JavaScript sul tuo computer, quel testo inglese si chiama <a href="https://it.wikipedia.org/wiki/Codice_sorgente" target="_blank">Codice Sorgente</a>.</p>

        <p>Esistono <strong>tre grandi filosofie</strong> con cui il computer può tradurre questo sorgente per i transistor:</p>

        <h3>1. La Compilazione Pura (AOT - Ahead-Of-Time: C, C++, Rust, Go)</h3>
        <p><strong>La Metafora del Libro Tradotto in Tipografia:</strong> Immagina di voler leggere un libro scritto in giapponese. Un traduttore professionista (il <a href="https://it.wikipedia.org/wiki/Compilatore" target="_blank">Compilatore</a>) impiega del tempo prima di vendere il libro per tradurre ogni singola pagina in perfetto italiano e stampare un nuovo volume rilegato (il file eseguibile binario <code>.exe</code> o <code>ELF</code>).</p>
        <ul>
          <li><strong>Vantaggi:</strong> Quando il lettore acquista il libro in italiano, legge a velocità supersonica senza la minima interruzione! Il processore riceve codice macchina perfetto, ottimizzato per sfruttare ogni singolo registro;</li>
          <li><strong>Svantaggi:</strong> C'è un tempo di attesa iniziale di compilazione (la "Fase di Build"). Inoltre, il file compilato per Windows non funzionerà su un Mac senza ricompilare!</li>
        </ul>

        <h3>2. L'Interpretazione Pura (Python standard, Bash, Ruby)</h3>
        <p><strong>La Metafora dell'Interprete Simultaneo all'ONU:</strong> L'oratore parla sul palco e l'interprete sussurra la traduzione all'ascoltatore riga per riga, in tempo reale, mentre il discorso si svolge.</p>
        <ul>
          <li><strong>Vantaggi:</strong> Flessibilità immediata! Non c'è alcuna attesa di compilazione: scrivi una riga di codice, premi Invio e vedi subito l'effetto a schermo;</li>
          <li><strong>Svantaggi:</strong> È più lento nell'esecuzione. Se il tuo programma contiene un ciclo che si ripete un milione di volte, l'interprete deve rileggere, decodificare e interpretare quella stessa riga per <strong>un milione di volte consecutive</strong>!</li>
        </ul>

        <h3>3. Il Modello Ibrido con JIT (Java JVM, JavaScript nei Browser, C# .NET)</h3>
        <p>Perché non unire il meglio dei due mondi? Nei primi anni '90, gli ingegneri inventarono la compilazione <a href="https://it.wikipedia.org/wiki/Compilatore_just-in-time" target="_blank">Just-In-Time (JIT)</a>:</p>
        <ol>
          <li>Il sorgente viene tradotto rapidamente in un formato intermedio compatto e universale chiamato <strong>Bytecode</strong>;</li>
          <li>Il programma parte velocemente come se fosse interpretato;</li>
          <li>Mentre il programma gira, un componente intelligente del motore (il compilatore JIT) monitora l'esecuzione: quando scopre un ciclo eseguito spessissimo (un <em>"Hot Spot"</em>), <strong>compila quel pezzetto al volo in puro codice macchina nativo</strong>! Il programma acquista improvvisamente una velocità paragonabile a C!</li>
        </ol>

        <!-- WIDGET 8.2: BANCO DI PROVA COMPILAZIONE VS INTERPRETAZIONE -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🏎️ Il Banco di Prova della Traduzione: Compilato vs Interpretato vs JIT</span>
            <span class="widget-badge">Widget 10.2</span>
          </div>
          <div class="widget-body">
            <p>Metti alla prova le tre strategie di traduzione su un ciclo di calcolo da 100.000 iterazioni. Guarda la timeline per confrontare tempo di preparazione iniziale ed efficienza di calcolo:</p>

            <div class="translation-workbench">
              <!-- Selettore Strategia -->
              <div class="trans-strategy-tabs">
                <button class="trans-tab active" id="trTabAot" onclick="selectTranslationMode('aot')">⚙️ Compilato AOT (C / Rust)</button>
                <button class="trans-tab" id="trTabInterp" onclick="selectTranslationMode('interp')">📜 Interpretato Puro (Python)</button>
                <button class="trans-tab" id="trTabJit" onclick="selectTranslationMode('jit')">⚡ Ibrido JIT (Java JVM / JS V8)</button>
              </div>

              <!-- Fasi della Pipeline di Traduzione -->
              <div class="trans-pipeline-view" id="transPipelineView">
                <!-- Populated via JS -->
              </div>

              <!-- Statistiche di Prestazione del Modello -->
              <div class="trans-stats-grid">
                <div class="trans-stat-box">
                  <span class="trans-stat-label">Tempo di Build Iniziale:</span>
                  <strong class="trans-stat-val" id="transStatBuild">850 ms (Compilazione)</strong>
                </div>
                <div class="trans-stat-box">
                  <span class="trans-stat-label">Velocità del Ciclo CPU:</span>
                  <strong class="trans-stat-val" style="color: #10b981;" id="transStatRun">1.1 ms (Nativo x86-64)</strong>
                </div>
                <div class="trans-stat-box">
                  <span class="trans-stat-label">Portabilità del Binario:</span>
                  <strong class="trans-stat-val" id="transStatPort">Specifica per OS/CPU</strong>
                </div>
              </div>

              <!-- Controlli del Banco di Prova -->
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
                <button class="btn-primary" onclick="runTranslationBenchmark()">Avvia Simulazione Traduzione 🚀</button>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "10.3 I Paradigmi di Programmazione: Come Strutturare il Pensiero Logico",
      content: `
        <h2>10.3 I Paradigmi di Programmazione: Come Strutturare il Ragionamento</h2>

        <p>Un <a href="https://it.wikipedia.org/wiki/Paradigma_di_programmazione" target="_blank">Paradigma di Programmazione</a> non è una sintassi o una collezione di comandi: è il <strong>modello mentale e filosofico</strong> con cui uno sviluppatore scompone un problema complesso in parti governabili.</p>

        <p>Immagina di dover descrivere come pulire una stanza disordinata: puoi dare una lista cronologica di ordini precisi, oppure puoi assegnare dei compiti a dei robot autonomi, oppure puoi definire una trasformazione geometrica delle coordinate. Ecco i tre paradigmi fondamentali:</p>

        <h3>1. Il Paradigma Imperativo / Procedurale (C, Pascal, Assembly)</h3>
        <p>È il modello più antico e naturale per la macchina: il programma è una <strong>ricetta di cucina passo per passo</strong>. Ci sono variabili globali che memorizzano lo stato e una sequenza di ordini che modificano quelle variabili nel tempo (<code>fai questo</code>, <code>se x > 5 allora fai quello</code>, <code>ripeti fino alla fine</code>).</p>

        <h3>2. Il Paradigma Orientato agli Oggetti - OOP (Java, C++, Python, C#)</h3>
        <p>Ideato dal pioniere <a href="https://it.wikipedia.org/wiki/Alan_Kay" target="_blank">Alan Kay</a> allo Xerox PARC negli anni '70, trae ispirazione dalla biologia cellulare: <em>"Invece di avere un unico cervellone monolitico, dividiamo il mondo in tante entità autonome chiamate <strong>Oggetti</strong>, ciascuna dotata dei propri dati interni (Attributi) e delle proprie abilità (Metodi)"</em>.</p>
        <p>Ad esempio, invece di avere variabili sparse, crei la classe <code>Automobile</code>: ogni auto ha un colore e un livello di carburante, e sa rispondere al comando <code>auto.accelera()</code> o <code>auto.frena()</code>. Questo approccio è la spina dorsale dello sviluppo di videogiochi e grandi applicazioni aziendali!</p>

        <h3>3. Il Paradigma Funzionale (Haskell, Lisp, ma integrato in JS e Python)</h3>
        <p>Si basa sulla matematica pura: <strong>i dati sono immutabili (non cambiano mai)</strong>. Invece di modificare una variabile esistente, il calcolo consiste nel far passare i dati attraverso una catena di funzioni pure che producono nuovi dati (senza "effetti collaterali" o variabili nascoste). È il paradigma ideale per elaborare moli gigantesche di dati in parallelo nel Cloud!</p>

        <!-- WIDGET 8.3: IL LABORATORIO DEI PARADIGMI -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🤖 Il Laboratorio dei Paradigmi: "Il Robot Aspirapolvere"</span>
            <span class="widget-badge">Widget 10.3</span>
          </div>
          <div class="widget-body">
            <p>Guarda come cambia la struttura logica del codice per far pulire una stanza 4x4 a un piccolo robot aspirapolvere:</p>

            <div class="paradigm-workbench">
              <!-- Selettore Paradigma -->
              <div class="paradigm-selector-tabs">
                <button class="paradigm-tab active" id="pTabProc" onclick="selectParadigm('procedural')">1. Procedurale (Stile C)</button>
                <button class="paradigm-tab" id="pTabOop" onclick="selectParadigm('oop')">2. Orientato agli Oggetti (OOP)</button>
                <button class="paradigm-tab" id="pTabFunc" onclick="selectParadigm('functional')">3. Funzionale (Pure Pipe)</button>
              </div>

              <div class="paradigm-main-grid">
                <!-- Stanza a Griglia con Polvere e Robot -->
                <div class="room-grid-container">
                  <div class="room-grid-header">
                    <span>MAPPA DELLA STANZA (4x4)</span>
                    <span id="roomDustCountBadge" style="color: #f59e0b; font-weight: bold;">Polvere: 4 caselle</span>
                  </div>
                  <div class="room-grid" id="roomGrid">
                    <!-- Populated via JS: 16 celle -->
                  </div>
                </div>

                <!-- Anteprima Codice del Paradigma -->
                <div class="paradigm-code-box">
                  <div class="paradigm-code-header" id="paradigmCodeTitle">
                    STRUTTURA: PROCEDURALE (SEQUENZA DI ORDINI)
                  </div>
                  <pre class="paradigm-code-text" id="paradigmCodeText">
// Variabili di stato sciolte
int robot_x = 0;
int robot_y = 0;

void pulisciStanza() {
    while (ciSonoCaselleSporche()) {
        muoviVerso(prossimaSporca());
        aspiraPolvere();
    }
}
                  </pre>
                </div>
              </div>

              <!-- Controlli Interattivi -->
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
                <button class="btn-primary" onclick="runRobotSimulation()">Esegui Pulizia Stanza con il Robot 🧹</button>
                <button class="btn-primary" style="background: #475569;" onclick="resetRobotRoom()">Sporca di Nuovo la Stanza ↺</button>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "10.4 La Bussola del Programmatore: Verso la Prima Applicazione Reale",
      content: `
        <h2>10.4 La Bussola del Futuro Programmatore: Da Dove Iniziare?</h2>

        <p>Sei arrivata/o all'ultimo sottomodulo della parte teorica del corso! Hai esplorato il viaggio straordinario dell'informazione: dai singoli <strong>bit</strong> e l'algebra booleana, attraverso le memorie, i transistor, i microprocessori di Faggin, i sistemi operativi, il bootstrapping del BIOS fino alla struttura intima dei processi.</p>

        <p>Ora sorge la domanda più bella ed emozionante di tutte: <strong>quale linguaggio dovresti imparare per iniziare a costruire le tue creazioni digitali?</strong></p>

        <h3>I Quattro Grandi Reami del Software Moderno</h3>
        <ul>
          <li><strong>1. Il Regno dei Videogiochi 3D (Gaming):</strong>
            Se sogni di dare vita a mondi tridimensionali e giochi d'azione, la scelta sovrana è <strong>C#</strong> (usato con il motore grafico <em>Unity</em>), <strong>C++</strong> (per il motore fotorealistico <em>Unreal Engine</em>), oppure l'intuitivo <strong>GDScript</strong> (con il motore libero <em>Godot</em>);</li>
          <li><strong>2. Il Regno del Web & delle App Interattive:</strong>
            Se vuoi creare applicazioni utilizzabili istantaneamente su qualsiasi browser, computer o smartphone da amici e utenti di tutto il pianeta senza installare nulla, il dominatore indiscusso è <strong>JavaScript</strong> (e la sua versione con tipi rigorosi, <strong>TypeScript</strong>);</li>
          <li><strong>3. Il Regno dell'Intelligenza Artificiale & Data Science:</strong>
            Se vuoi addestrare reti neurali, analizzare dati astronomici o costruire bot intelligenti, la scelta mondiale unanime è <strong>Python</strong>: ha una sintassi così pulita e vicina all'italiano/inglese da farti sentire un mago capace di compiere imprese complesse in appena cinque righe di codice!;</li>
          <li><strong>4. Il Regno dell'Hardware & della Robotica:</strong>
            Se vuoi programmare droni, bracci robotici o schede elettroniche Arduino, i re rimangono <strong>C</strong>, <strong>C++</strong> e il moderno <strong>MicroPython</strong>.</li>
        </ul>

        <!-- WIDGET 8.4: LA BUSSOLA INTERATTIVA -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🧭 La Bussola Interattiva: Trova il Tuo Linguaggio Ideale</span>
            <span class="widget-badge">Widget 10.4</span>
          </div>
          <div class="widget-body">
            <p>Rispondi a 3 semplici domande sui tuoi sogni e passioni per scoprire il linguaggio di programmazione perfetto con cui iniziare il tuo viaggio pratico:</p>

            <div class="compass-workbench">
              <div class="compass-questions-container">
                <!-- Domanda 1 -->
                <div class="compass-q-card">
                  <div class="compass-q-title">1. Che cosa sogni di costruire principalmente?</div>
                  <div class="compass-options-row">
                    <button class="compass-opt-btn active" id="cOpt1_ai" onclick="selectCompassOption(1, 'ai')">🧠 Robot & Intelligenza Artificiale</button>
                    <button class="compass-opt-btn" id="cOpt1_web" onclick="selectCompassOption(1, 'web')">🌐 Siti Web & Applicazioni</button>
                    <button class="compass-opt-btn" id="cOpt1_game" onclick="selectCompassOption(1, 'game')">🎮 Videogiochi 3D</button>
                    <button class="compass-opt-btn" id="cOpt1_drone" onclick="selectCompassOption(1, 'drone')">🚁 Droni & Schede Elettroniche</button>
                  </div>
                </div>

                <!-- Domanda 2 -->
                <div class="compass-q-card">
                  <div class="compass-q-title">2. Qual è la tua priorità per iniziare?</div>
                  <div class="compass-options-row">
                    <button class="compass-opt-btn active" id="cOpt2_easy" onclick="selectCompassOption(2, 'easy')">✨ Sintassi semplice e risultato immediato</button>
                    <button class="compass-opt-btn" id="cOpt2_speed" onclick="selectCompassOption(2, 'speed')">⚡ Massima velocità di calcolo possibile</button>
                    <button class="compass-opt-btn" id="cOpt2_share" onclick="selectCompassOption(2, 'share')">🔗 Condividere con un link a chiunque</button>
                  </div>
                </div>
              </div>

              <!-- Risultato Consigliato dalla Bussola -->
              <div class="compass-result-card" id="compassResultCard">
                <div class="compass-result-header">
                  <div>
                    <span style="font-size: 0.75rem; color: #94a3b8; text-transform: uppercase;">LINGUAGGIO CONSIGLIATO PER TE:</span>
                    <h3 id="compassLangTitle" style="margin: 2px 0; color: #38bdf8; font-size: 1.3rem;">🐍 Python</h3>
                  </div>
                  <span class="compass-score-badge" id="compassMatchBadge">Match 98% 🎯</span>
                </div>

                <p id="compassLangDesc" style="font-size: 0.88rem; line-height: 1.45; margin: 8px 0;">
                  Python è universalmente riconosciuto come il miglior primo linguaggio al mondo: è elegantissimo, facilissimo da leggere e domina il settore dell'Intelligenza Artificiale e dell'analisi dati.
                </p>

                <div class="compass-code-snippet">
                  <div style="font-size: 0.72rem; color: #64748b; margin-bottom: 4px;">IL TUO PRIMO CODICE IN QUESTO LINGUAGGIO:</div>
                  <pre id="compassCodeSnippet" style="margin: 0; font-family: monospace; font-size: 0.85rem; color: #4ade80;">nome = input("Come ti chiami? ")
print(f"Benvenuta/o nel mondo della programmazione, {nome}!")</pre>
                </div>
              </div>
            </div>

            <!-- Box di Chiusura del Corso -->
            <div class="callout-box" style="margin-top: 18px; border-left-color: #10b981;">
              <div class="callout-title" style="color: #10b981;">🎓 Congratulazioni! Hai Concluso le Fondamenta Teoriche!</div>
              <p>Completando il quiz finale qui sotto, otterrai la <strong>Chiave di Completamento del Corso</strong> (<code>PYTHON-MASTER-909</code>).<br>
              Ora possiedi la visione d'insieme completa di come funziona un calcolatore elettronico, dall'interruttore della luce al silicio, dalla memoria al sistema operativo. Sei pronta/o per scrivere la tua prima vera applicazione!</p>
            </div>
          </div>
        </div>
      `
    }
  ],
  quiz: {
    questions: [
      {
        q: "Nell'architettura software e nella piramide dell'astrazione, quale trade-off ingegneristico fondamentale distingue un linguaggio di sistema (es. C o Rust) da un linguaggio di altissimo livello (es. Python)?",
        options: [
          { text: "I linguaggi di sistema offrono controllo deterministico a basso livello sulla memoria e massima velocità di esecuzione a fronte di maggiore complessità e gestione manuale delle risorse; i linguaggi di altissimo livello massimizzano la produttività e la leggibilità introducendo runtime di astrazione con overhead prestazionale", correct: true },
          { text: "I linguaggi di sistema possono essere eseguiti solo su server cloud distribuiti, mentre i linguaggi di scripting operano unicamente all'interno della memoria cache L1 della CPU", correct: false },
          { text: "Python traduce direttamente il codice sorgente in impulsi elettromagnetici inviati al monitor, mentre C richiede una conversione in immagini grafiche", correct: false },
          { text: "Nei linguaggi di sistema non è possibile implementare algoritmi algebrici complessi a causa dell'assenza di registri a 64 bit", correct: false }
        ]
      },
      {
        q: "Come opera tecnicamente un motore di esecuzione con compilatore Just-In-Time (JIT), come V8 di JavaScript o HotSpot di Java?",
        options: [
          { text: "Avvia l'esecuzione traducendo un formato intermedio (bytecode) e, monitorando a runtime le porzioni di codice più frequentemente invocate ('hot spots'), le compila dinamicamente in codice macchina nativo ottimizzato per la specifica CPU ospite", correct: true },
          { text: "Compila l'intero programma in linguaggio binario statico su disco rigido mesi prima che l'utente apra l'applicazione", correct: false },
          { text: "Invia ogni singola istruzione a un server DNS centrale per verificarne la correttezza prima di allocare la memoria nello stack", correct: false },
          { text: "Disattiva le istruzioni di salto condizionato (branch) della CPU convertendo tutti i loop di iterazione in costanti immutabili", correct: false }
        ]
      },
      {
        q: "Quale criticità architetturale caratterizza la gestione manuale della memoria (malloc/free in C/C++) rispetto all'uso di un Garbage Collector automatico (Java, Go, C#)?",
        options: [
          { text: "La gestione manuale evita pause imprevedibili di 'stop-the-world' garantendo minima latenza nei sistemi real-time, ma espone a bug critici di sicurezza come Memory Leaks, Buffer Overflow e Use-After-Free dovuti a deallocazioni errate o mancate", correct: true },
          { text: "La memoria allocata manualmente non può essere memorizzata nei banchi di RAM ma deve risiedere nei registri interni dell'ALU", correct: false },
          { text: "Il Garbage Collector cancella i file sorgenti dal disco fisso ogni volta che un thread rilascia un puntatore nello heap", correct: false },
          { text: "La gestione manuale è supportata esclusivamente dai microprocessori a 8 bit e impedisce l'uso della memoria virtuale protetta", correct: false }
        ]
      },
      {
        q: "Qual è la differenza concettuale fondamentale tra il paradigma Orientato agli Oggetti (OOP) e il paradigma Funzionale Puro?",
        options: [
          { text: "L'OOP modella il sistema mediante oggetti che incapsulano stato interno mutabile e comportamenti (metodi); il paradigma funzionale tratta il calcolo come valutazione di funzioni matematiche pure prive di effetti collaterali (side-effects) e con strutture dati immutabili", correct: true },
          { text: "L'OOP è limitato all'elaborazione di stringhe di testo, mentre il paradigma funzionale è utilizzabile solo per la gestione delle porte USB", correct: false },
          { text: "La programmazione funzionale richiede la scrittura esclusiva in codice esadecimale grezzo senza supporto per le variabili", correct: false },
          { text: "L'OOP vieta l'utilizzo di classi ed ereditarietà, consentendo solo chiamate di sistema (Syscall) dirette al Kernel", correct: false }
        ]
      },
      {
        q: "In base a quali vincoli architetturali un team ingegneristico sceglie tipicamente di implementare un motore ad altissime prestazioni (es. trading ad alta frequenza o motore grafico 3D) in Rust/C++ anziché in Python o Ruby?",
        options: [
          { text: "Per la necessità di tempi di risposta deterministici al microsecondo (assenza di pause improvvise del Garbage Collector), consumo di memoria rigorosamente predicibile e massimo sfruttamento delle istruzioni vettoriali della CPU", correct: true },
          { text: "Perché Python e Ruby non possiedono librerie per aprire connessioni su protocolli TCP/IP o leggere file da disco", correct: false },
          { text: "Perché i compilatori C++ e Rust disabilitano il consumo di corrente elettrica della scheda madre durante l'elaborazione", correct: false },
          { text: "Perché i moderni sistemi operativi a 64 bit bloccano per motivi di sicurezza l'esecuzione di script interpretati a livello di kernel", correct: false }
        ]
      }
    ]
  }
});

/* =========================================================
   LOGICA JAVASCRIPT DEI WIDGET DEL MODULO 10
   ========================================================= */

// --- WIDGET 10.1: LA TORRE DELL'ASTRAZIONE ---
window.towerState = {
  currentLevel: 1,
  levels: {
    1: {
      badge: "PIANO 1: CODICE MACCHINA (HEX RAW x86-64)",
      humanScore: "Leggibilità Umana: 1 / 10 🤯",
      lines: "6 istruzioni hex",
      speed: "Massima (3 cicli clock)",
      time: "Lentissimo (Ore di manuale)",
      code: `B8 00 00 00 00   ; mov eax, 0  (azzera registro accumulatore)
BB 01 00 00 00   ; mov ebx, 1  (registro contatore i = 1)
01 D8            ; add eax, ebx (accumulatore += contatore)
83 C3 01         ; add ebx, 1  (incrementa contatore)
83 FB 05         ; cmp ebx, 5  (confronta con 5)
7E F6            ; jle -10     (salta indietro se i <= 5)`,
      desc: "Istruzioni esadecimali pure inviate direttamente ai circuiti dell'ALU. Zero astrazione: per capirle serve il manuale tecnico dei transistor Intel o AMD."
    },
    2: {
      badge: "PIANO 2: ASSEMBLY x86 (MNEMONICI DIRETTI)",
      humanScore: "Leggibilità Umana: 3 / 10 ⚙️",
      lines: "8 righe assembly",
      speed: "Massima (3 cicli clock)",
      time: "Molto lento (Decine di minuti)",
      code: `global _start
_start:
    mov eax, 0          ; Somma = 0
    mov ebx, 1          ; i = 1
ciclo:
    add eax, ebx        ; Somma += i
    inc ebx             ; i++
    cmp ebx, 5          ; i <= 5?
    jle ciclo           ; Se sì, ripete!`,
      desc: "Usa abbreviazioni mnemoniche leggibili (MOV, ADD, INC) ma richiede ancora di gestire a mano i singoli registri hardware del microprocessore."
    },
    3: {
      badge: "PIANO 3: LINGUAGGIO C (MEDIO/BASSO LIVELLO STRUTTURATO)",
      humanScore: "Leggibilità Umana: 7 / 10 ⚡",
      lines: "7 righe di codice",
      speed: "Ultra-veloce (Compilato nativo)",
      time: "Veloce (pochi secondi)",
      code: `#include <stdio.h>

int main() {
    int somma = 0;
    for (int i = 1; i <= 5; i++) {
        somma += i;
    }
    printf("Somma: %d\\n", somma);
    return 0;
}`,
      desc: "Appaiono i cicli 'for', le variabili con nome simbolico e le funzioni. Il compilatore traduce tutto automaticamente in linguaggio macchina nativo."
    },
    4: {
      badge: "PIANO 4: JAVA (ALTO LIVELLO ORIENTATO AGLI OGGETTI)",
      humanScore: "Leggibilità Umana: 8 / 10 ☕",
      lines: "8 righe (con classe)",
      speed: "Elevata (JIT Virtual Machine)",
      time: "Molto rapido",
      code: `public class Calcolatore {
    public static void main(String[] args) {
        int somma = 0;
        for (int i = 1; i <= 5; i++) {
            somma += i;
        }
        System.out.println("Somma: " + somma);
    }
}`,
      desc: "Tutto è racchiuso in una Classe. Memoria gestita dal Garbage Collector. Gira su qualsiasi sistema operativo grazie al Bytecode JVM."
    },
    5: {
      badge: "PIANO 5: PYTHON (ALTISSIMO LIVELLO ESPRESSIVO) 🐍",
      humanScore: "Leggibilità Umana: 10 / 10 ✨",
      lines: "2 righe chiarissime",
      speed: "Media (Interpretato)",
      time: "Istantaneo (pochi secondi)",
      code: `somma = sum(range(1, 6))
print(f"Somma: {somma}")`,
      desc: "Il massimo dell'astrazione: l'algoritmo è espresso in sole due righe chiarissime e leggibili da chiunque, come se fosse una frase in italiano!"
    }
  }
};

window.renderAbstractionTower = function() {
  const codeDisplay = document.getElementById("towerCodeDisplay");
  const lvlBadge = document.getElementById("towerLevelBadge");
  const humanScore = document.getElementById("towerHumanScore");
  const metricLines = document.getElementById("metricLines");
  const metricSpeed = document.getElementById("metricSpeed");
  const metricTime = document.getElementById("metricTime");
  const explText = document.getElementById("towerExplanationText");

  if (!codeDisplay || !lvlBadge) return;

  const st = window.towerState;
  const cur = st.levels[st.currentLevel];

  // Update tabs
  for (let i = 1; i <= 5; i++) {
    const btn = document.getElementById(`tBtn${i}`);
    if (btn) btn.classList.toggle("active", i === st.currentLevel);
  }

  lvlBadge.innerText = cur.badge;
  if (humanScore) humanScore.innerText = cur.humanScore;
  if (metricLines) metricLines.innerText = cur.lines;
  if (metricSpeed) metricSpeed.innerText = cur.speed;
  if (metricTime) metricTime.innerText = cur.time;
  if (explText) explText.innerText = cur.desc;
  codeDisplay.innerText = cur.code;
};

window.selectAbstractionLevel = function(lvl) {
  window.towerState.currentLevel = lvl;
  window.renderAbstractionTower();
};

// --- WIDGET 8.2: BANCO DI PROVA COMPILAZIONE VS INTERPRETAZIONE ---
window.translationState = {
  currentMode: 'aot', // 'aot' | 'interp' | 'jit'
  modes: {
    aot: {
      stages: [
        { label: "1. Parsing Sorgente", time: "150 ms", status: "Lexer & AST" },
        { label: "2. Ottimizzazione AST", time: "400 ms", status: "Dead code removal" },
        { label: "3. Generazione Binario", time: "300 ms", status: "Eseguibile x86_64" },
        { label: "4. Esecuzione CPU", time: "1.1 ms", status: "Puro Silicio Nativo ⚡" }
      ],
      buildTime: "850 ms (Compilazione AOT)",
      runtime: "1.1 ms (Velocità Massima)",
      portability: "Legata a OS/CPU specifica"
    },
    interp: {
      stages: [
        { label: "1. Caricamento Script", time: "5 ms", status: "Nessun build! Pronto subito" },
        { label: "2. Lettura Riga per Riga", time: "18 ms", status: "Analisi continua del loop" },
        { label: "3. Traduzione al Volo", time: "22 ms", status: "Decodifica istruzioni runtime" },
        { label: "4. Esecuzione CPU", time: "48.0 ms", status: "Overhead per ogni riga 📜" }
      ],
      buildTime: "0 ms (Avvio Immediato)",
      runtime: "48.0 ms (Overhead Traduzione)",
      portability: "Universale (gira ovunque c'è Python)"
    },
    jit: {
      stages: [
        { label: "1. Pre-compilazione Bytecode", time: "40 ms", status: "File .class o Bytecode V8" },
        { label: "2. Avvio Interprete", time: "12 ms", status: "Esecuzione rapida iniziale" },
        { label: "3. JIT Profiling Hot Loop", time: "8 ms", status: "Rilevato ciclo da 100k!" },
        { label: "4. Turbo Boost Nativo", time: "3.5 ms", status: "Tradotto al volo in Machine Code ⚡" }
      ],
      buildTime: "40 ms (Bytecode compatto)",
      runtime: "3.5 ms (Turbo Boost JIT)",
      portability: "Universale (JVM / Motore V8)"
    }
  }
};

window.renderTranslationWorkbench = function() {
  const pipelineView = document.getElementById("transPipelineView");
  const statBuild = document.getElementById("transStatBuild");
  const statRun = document.getElementById("transStatRun");
  const statPort = document.getElementById("transStatPort");

  if (!pipelineView) return;

  const ts = window.translationState;
  const cur = ts.modes[ts.currentMode];

  // Update tabs
  const tabAot = document.getElementById("trTabAot");
  const tabInterp = document.getElementById("trTabInterp");
  const tabJit = document.getElementById("trTabJit");
  if (tabAot) tabAot.classList.toggle("active", ts.currentMode === 'aot');
  if (tabInterp) tabInterp.classList.toggle("active", ts.currentMode === 'interp');
  if (tabJit) tabJit.classList.toggle("active", ts.currentMode === 'jit');

  // Render stages
  pipelineView.innerHTML = "";
  cur.stages.forEach(st => {
    const card = document.createElement("div");
    card.className = "trans-stage-card";
    card.innerHTML = `
      <div style="font-weight: bold; font-size: 0.8rem; color: #38bdf8;">${st.label}</div>
      <div style="font-size: 0.72rem; color: #94a3b8; margin: 4px 0;">${st.status}</div>
      <span class="trans-stage-time">${st.time}</span>
    `;
    pipelineView.appendChild(card);
  });

  if (statBuild) statBuild.innerText = cur.buildTime;
  if (statRun) statRun.innerText = cur.runtime;
  if (statPort) statPort.innerText = cur.portability;
};

window.selectTranslationMode = function(mode) {
  window.translationState.currentMode = mode;
  window.renderTranslationWorkbench();
};

window.runTranslationBenchmark = function() {
  const cards = document.querySelectorAll(".trans-stage-card");
  cards.forEach((c, idx) => {
    c.classList.remove("active-stage");
    setTimeout(() => {
      c.classList.add("active-stage");
    }, idx * 250);
  });
};

// --- WIDGET 8.3: IL LABORATORIO DEI PARADIGMI ---
window.paradigmState = {
  currentParadigm: "procedural",
  robotPos: { x: 0, y: 0 },
  dustCells: [ { x: 1, y: 1 }, { x: 3, y: 0 }, { x: 2, y: 3 }, { x: 0, y: 2 } ],
  isCleaning: false
};

window.renderParadigmLab = function() {
  const grid = document.getElementById("roomGrid");
  const dustBadge = document.getElementById("roomDustCountBadge");
  const codeTitle = document.getElementById("paradigmCodeTitle");
  const codeText = document.getElementById("paradigmCodeText");

  if (!grid || !codeTitle) return;

  const ps = window.paradigmState;

  // Update tabs
  const tabProc = document.getElementById("pTabProc");
  const tabOop = document.getElementById("pTabOop");
  const tabFunc = document.getElementById("pTabFunc");
  if (tabProc) tabProc.classList.toggle("active", ps.currentParadigm === 'procedural');
  if (tabOop) tabOop.classList.toggle("active", ps.currentParadigm === 'oop');
  if (tabFunc) tabFunc.classList.toggle("active", ps.currentParadigm === 'functional');

  // Render Grid 4x4
  grid.innerHTML = "";
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const cell = document.createElement("div");
      cell.className = "room-cell";
      const isRobot = ps.robotPos.x === x && ps.robotPos.y === y;
      const isDust = ps.dustCells.some(d => d.x === x && d.y === y);

      if (isRobot) {
        cell.classList.add("cell-robot");
        cell.innerText = "🤖";
      } else if (isDust) {
        cell.classList.add("cell-dust");
        cell.innerText = "💨";
      } else {
        cell.innerText = "";
      }
      grid.appendChild(cell);
    }
  }

  if (dustBadge) dustBadge.innerText = `Polvere: ${ps.dustCells.length} caselle`;

  // Render Code
  if (ps.currentParadigm === 'procedural') {
    codeTitle.innerText = "STRUTTURA: PROCEDURALE (SEQUENZA DI ORDINI & VARIABILI GLOBALI)";
    codeText.innerText = `// Variabili globali di stato
int robot_x = 0;
int robot_y = 0;

void pulisciStanza() {
    while (ciSonoCaselleSporche()) {
        Punto p = trovaCasellaPiuVicina();
        spostaRobot(p.x, p.y);
        aspiraPolvere();
    }
}`;
  } else if (ps.currentParadigm === 'oop') {
    codeTitle.innerText = "STRUTTURA: ORIENTATA AGLI OGGETTI (CLASSI, METODI & MESSAGGI)";
    codeText.innerText = `class RobotAspirapolvere {
    private Posizione pos;
    private int serbatoioPolvere = 0;

    public void pulisci(Stanza stanza) {
        for (Casella c : stanza.getCaselleSporche()) {
            this.muoviVerso(c.getCoordinate());
            this.aspira(c);
        }
    }
}`;
  } else {
    codeTitle.innerText = "STRUTTURA: FUNZIONALE (DATI IMMUTABILI & PIPELINE DI FUNZIONI PURE)";
    codeText.innerText = `// Funzioni pure prive di effetti collaterali
const pulisciStanza = (mappaStanza, robot) => 
    mappaStanza
        .filter(casella => casella.haPolvere)
        .reduce((statoRobot, bersaglio) => 
            eseguiMovimentoEAspira(statoRobot, bersaglio), 
            robot);`;
  }
};

window.selectParadigm = function(p) {
  window.paradigmState.currentParadigm = p;
  window.renderParadigmLab();
};

window.runRobotSimulation = function() {
  const ps = window.paradigmState;
  if (ps.isCleaning || ps.dustCells.length === 0) return;
  ps.isCleaning = true;

  const timer = setInterval(() => {
    if (ps.dustCells.length > 0) {
      const target = ps.dustCells.shift();
      ps.robotPos = { x: target.x, y: target.y };
      window.renderParadigmLab();
    } else {
      clearInterval(timer);
      ps.isCleaning = false;
      const dustBadge = document.getElementById("roomDustCountBadge");
      if (dustBadge) dustBadge.innerText = "Stanza completamente pulita! ✨";
    }
  }, 400);
};

window.resetRobotRoom = function() {
  window.paradigmState.robotPos = { x: 0, y: 0 };
  window.paradigmState.dustCells = [ { x: 1, y: 1 }, { x: 3, y: 0 }, { x: 2, y: 3 }, { x: 0, y: 2 } ];
  window.paradigmState.isCleaning = false;
  window.renderParadigmLab();
};

// --- WIDGET 8.4: LA BUSSOLA DEL PROGRAMMATORE ---
window.compassState = {
  q1: 'ai',
  q2: 'easy'
};

window.compassProfiles = {
  'ai_easy': {
    title: "🐍 Python",
    match: "Match 99% 🎯",
    desc: "Python è la scelta perfetta per te! È il linguaggio più amato al mondo per la sua leggibilità cristallina e domina l'Intelligenza Artificiale, la robotica e il machine learning. Permette di creare magie in pochissime righe.",
    snippet: `import math

# Il tuo primo algoritmo di intelligenza artificiale
def saluta_robot(nome):
    return f"Ciao {nome}, il sistema neurale è pronto!"

print(saluta_robot("Futura Programmatrice"))`
  },
  'web_easy': {
    title: "🌐 JavaScript & TypeScript",
    match: "Match 97% 🎯",
    desc: "JavaScript è il linguaggio del Web! Puoi scrivere codice ed eseguirlo all'istante su qualsiasi browser e dispositivo del mondo senza installare alcun compilatore. Con HTML e CSS, darai vita a siti e app interattive.",
    snippet: `// Il tuo primo script interattivo
const bottone = document.querySelector("#cliccami");
bottone.onclick = () => {
    alert("Hai appena creato la tua prima app interattiva!");
};`
  },
  'game_speed': {
    title: "🎮 C# (Unity) & C++ (Unreal)",
    match: "Match 96% 🎯",
    desc: "I linguaggi dei veri motori grafici! C# con Unity ti permette di costruire giochi 2D e 3D spettacolari, mentre C++ offre il massimo controllo del framerate e della scheda grafica per giochi tripla A.",
    snippet: `// Creazione di un componente per un personaggio
public class Giocatore : MonoBehaviour {
    public float velocita = 10.0f;
    void Update() {
        transform.Translate(Vector3.forward * velocita * Time.deltaTime);
    }
}`
  },
  'drone_speed': {
    title: "🚁 C & C++ (Sistemi Embedded)",
    match: "Match 98% 🎯",
    desc: "Vuoi controllare direttamente i motori di un drone o un sensore di temperatura su Arduino? C e C++ ti consentono di dialogare direttamente con i pin della scheda elettronica alla velocità del microsecondo.",
    snippet: `// Codice Arduino per far pulsare un LED
void setup() {
    pinMode(13, OUTPUT);
}
void loop() {
    digitalWrite(13, HIGH);
    delay(500);
    digitalWrite(13, LOW);
    delay(500);
}`
  }
};

window.renderLanguageCompass = function() {
  const cardTitle = document.getElementById("compassLangTitle");
  const cardDesc = document.getElementById("compassLangDesc");
  const cardSnippet = document.getElementById("compassCodeSnippet");
  const cardMatch = document.getElementById("compassMatchBadge");

  if (!cardTitle || !cardDesc) return;

  const cs = window.compassState;
  const key = `${cs.q1}_${cs.q2}`;
  const profile = window.compassProfiles[key] || window.compassProfiles['ai_easy'];

  cardTitle.innerText = profile.title;
  if (cardMatch) cardMatch.innerText = profile.match;
  cardDesc.innerText = profile.desc;
  if (cardSnippet) cardSnippet.innerText = profile.snippet;
};

window.selectCompassOption = function(qNum, val) {
  if (qNum === 1) {
    window.compassState.q1 = val;
    ['ai', 'web', 'game', 'drone'].forEach(v => {
      const btn = document.getElementById(`cOpt1_${v}`);
      if (btn) btn.classList.toggle("active", v === val);
    });
  } else if (qNum === 2) {
    window.compassState.q2 = val;
    ['easy', 'speed', 'share'].forEach(v => {
      const btn = document.getElementById(`cOpt2_${v}`);
      if (btn) btn.classList.toggle("active", v === val);
    });
  }
  window.renderLanguageCompass();
};

// Inizializza widget al caricamento
setTimeout(() => {
  if (typeof renderAbstractionTower === 'function') renderAbstractionTower();
  if (typeof renderTranslationWorkbench === 'function') renderTranslationWorkbench();
  if (typeof renderParadigmLab === 'function') renderParadigmLab();
  if (typeof renderLanguageCompass === 'function') renderLanguageCompass();
}, 200);
