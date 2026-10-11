(window.courseData = window.courseData || []).push({
  id: 4,
  title: "4. Introduzione al Personal Computer",
  keyRequired: "DESKTOP-GUI-303",
  nextKey: "HARDWARE-CPU-404",
  submodules: [
    {
      title: "4.1 Dai Mainframe al Desktop & Genio Olivetti",
      content: `
        <h2>4.1 Dai Giganti di Vetro al Tuo Tavolo: La Rivoluzione dei PC</h2>

        <p>Oggi diamo per scontato di avere un computer portatile nello zaino o uno smartphone nella tasca dei pantaloni. Eppure, per i primi trent'anni della storia dell'informatica (dagli anni '40 fino agli anni '70), un computer non era qualcosa che una singola persona potesse possedere o toccare.</p>

        <p>I calcolatori dell'epoca erano i giganteschi <a href="https://it.wikipedia.org/wiki/Mainframe" target="_blank">Mainframe</a> prodotti da colossi come IBM: macchine che costavano milioni di dollari, pesavano diverse tonnellate ed erano custodite in stanze climatizzate con pavimenti rialzati all'interno di università, banche o basi militari. Decine di impiegati o ricercatori si collegavano simultaneamente allo stesso calcolatore tramite "terminali muti" (uno schermo a tubo catodico e una tastiera, privi di CPU o memoria autonoma) noleggiando il tempo di calcolo a minuti.</p>

        <div class="callout-box history">
          <div class="callout-title">🇮🇹 Orgoglio Italiano: L'Olivetti Programma 101 (Ivrea, 1965)</div>
          <p>Molti credono che il personal computer sia stato inventato nella Silicon Valley californiana negli anni '70. In realtà, il <strong>primo personal computer commerciale da tavolo della storia</strong> nacque in Italia, a Ivrea, nei laboratori della Olivetti!<br>
          Progettata tra il 1962 e il 1964 dall'ingegnere italiano <a href="https://it.wikipedia.org/wiki/Pier_Giorgio_Perotto" target="_blank">Pier Giorgio Perotto</a> (insieme ai collaboratori Giovanni De Sandre e Gastone Garziera) e vestita con una splendida scocca futuristica disegnata da Mario Bellini, la <strong>Programma 101</strong> (chiamata affettuosamente <em>"la Perottina"</em>) fu presentata alla Fiera Mondiale di New York del 1964, rubando la scena ai colossi americani.<br>
          La P101 era autonoma, stava comodamente su una scrivania da ufficio, costava 3.200 dollari (contro le centinaia di migliaia dei calcolatori dell'epoca) e salvava i programmi su <strong>cartoline magnetiche</strong> riutilizzabili con una banda di ferrite!</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-04/programma-101.jpg" alt="Olivetti Programma 101 esposta al Museo della Scienza e Tecnologia di Milano" loading="lazy">
          <div class="figure-caption">La leggendaria Olivetti Programma 101 (1965): il primo personal computer programmabile da tavolo al mondo, oggi celebrato anche al MoMA di New York.</div>
        </div>

        <div class="callout-box curiosity">
          <div class="callout-title">🌕 La P101 della Olivetti nello Sbarco sulla Luna (Apollo 11, 1969)</div>
          <p>Quando nel luglio 1969 Neil Armstrong e Buzz Aldrin atterrarono sulla Luna, nei centri di controllo della NASA a Houston c'erano decine di Olivetti Programma 101 in funzione!<br>
          L'ingegnere della NASA David W. Whittle raccontò: <em>"Per la missione Apollo 11 avevamo calcolatori enormi, ma per calcolare in tempo reale le manovre di rientro in orbita e le correzioni di rotta del Modulo Lunare usavamo la Programma 101 di Olivetti: inserivi la cartolina magnetica, battevi i dati e in pochi secondi avevi i calcoli stampati sulla carta!"</em></p>
        </div>

        <!-- WIDGET 1: SIMULATORE OLIVETTI PROGRAMMA 101 -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">📠 Simulatore Storico: Olivetti Programma 101 (P101)</span>
            <span class="widget-badge">Widget 4.1</span>
          </div>
          <div class="widget-body">
            <p>Vivi l'esperienza degli ingegneri della NASA nel 1965! Inserisci una cartolina magnetica con il programma, imposta i parametri e premi Esegui per veder stampare i calcoli sulla striscia di carta della P101:</p>

            <div class="p101-housing">
              <div class="p101-top-row">
                <!-- Selettore Cartoline Magnetiche -->
                <div class="p101-card-slot">
                  <div style="font-weight: bold; font-size: 0.85rem; margin-bottom: 4px;">FESSURA CARTOLINA MAGNETICA 📼</div>
                  <div id="p101CurrentCardLabel" style="font-size: 0.82rem; color: #38bdf8; margin-bottom: 8px;">Nessuna cartolina inserita</div>
                  
                  <button class="p101-card-btn" onclick="insertP101Card('apollo')">🌕 Inserisci Cartolina: Traiettoria Lunare Apollo 11</button>
                  <button class="p101-card-btn" style="background: #10b981; border-color: #059669; color: #fff;" onclick="insertP101Card('pythagoras')">📐 Inserisci Cartolina: Ipotenusa di Pitagora</button>
                  <button class="p101-card-btn" style="background: #64748b; border-color: #475569; color: #fff;" onclick="ejectP101Card()">⏏️ Espelli Cartolina</button>
                </div>

                <!-- Striscia di Carta della Stampante Integrata -->
                <div>
                  <div style="font-size: 0.78rem; font-weight: bold; margin-bottom: 4px; text-transform: uppercase;">
                    RULLO DI CARTA STAMPANTE INTEGRATA 📜
                  </div>
                  <div class="p101-tape-output" id="p101TapeOutput">
OLIVETTI PROGRAMMA 101 - IVREA (1965)
PRONTA PER LA LETTURA MAGNETICA...
-----------------------------------
                  </div>
                </div>
              </div>

              <!-- Input Dati e Tasti Esegui -->
              <div style="margin-top: 14px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <label for="p101InputVal" style="font-size: 0.85rem; font-weight: bold;">Valore Variabile (Registro V):</label>
                  <input type="number" id="p101InputVal" value="40" style="width: 70px; padding: 6px; font-weight: bold; text-align: center;">
                </div>
                <button class="btn-primary" onclick="runP101Program()">▶️ Esegui Programma Magnetico (Tasto V/A)</button>
                <button class="btn-primary" style="background: #475569;" onclick="clearP101Tape()">Cancella Striscia ↺</button>
              </div>
            </div>
          </div>
        </div>

        <h3>L'Altair 8800 e la Nascita di Apple e Microsoft (1975)</h3>
        <p>Nel gennaio 1975, la rivista americana <em>Popular Electronics</em> pubblicò in copertina un kit da montare per hobbisti chiamato <strong>Altair 8800</strong>, basato sul microprocessore Intel 8080. Non aveva monitor, né tastiera: si programmava alzando e abbassando levette metalliche sul pannello frontale leggendo il risultato sui led luminosi.</p>
        <p>Quella copertina cambiò per sempre la storia:</p>
        <ul>
          <li>A Menlo Park (California) nacque l'<strong>Homebrew Computer Club</strong>: appassionati di elettronica che si incontravano per scambiarsi schede. Tra loro c'erano due giovani amici, <a href="https://it.wikipedia.org/wiki/Steve_Wozniak" target="_blank">Steve Wozniak</a> e <a href="https://it.wikipedia.org/wiki/Steve_Jobs" target="_blank">Steve Jobs</a>. Wozniak progettò un calcolatore che si collegava a un normale televisore e a una tastiera: nacque così l'<strong>Apple I</strong> (costruito a mano in un garage), seguito dal celebre <strong>Apple II</strong> (1977), il primo PC rifinito in una scocca di plastica pronto all'uso per le famiglie;</li>
          <li>Ad Harvard, due studenti di nome <a href="https://it.wikipedia.org/wiki/Bill_Gates" target="_blank">Bill Gates</a> e <a href="https://it.wikipedia.org/wiki/Paul_Allen" target="_blank">Paul Allen</a> videro la stessa rivista, mollarono gli studi e scrissero in otto settimane un interprete del linguaggio BASIC per l'Altair. Fondarono una società chiamata <strong>Micro-Soft</strong> ad Albuquerque.</li>
        </ul>

        <h3>L'IBM PC (1981) e l'Invasione dei "Cloni"</h3>
        <p>Nel 1981, vedendo il successo di Apple, il gigante IBM decise di entrare nel mercato con l'<strong>IBM PC 5150</strong>. Per fare in fretta, IBM non inventò componenti proprietari: comprò la CPU da Intel (l'8088), il sistema operativo da Microsoft (l'MS-DOS) e rese pubblica l'architettura della scheda madre.</p>
        <p>Questa scelta creò una reazione a catena imprevista: altre aziende (come Compaq) ricrearono legalmente il BIOS tramite ingegneria inversa, inondando il mercato globale di <strong>PC IBM-Compatibili ("cloni")</strong> a prezzi stracciati. Fu questa standardizzazione a rendere il computer un elettrodomestico presente in ogni singola casa.</p>

        <div class="callout-box curiosity">
          <div class="callout-title">🧠 Memoria di Massa vs RAM: La Barriera dei 640 KB del Primo PC</div>
          <p>Ripensando al <strong>disallineamento tra memoria di massa e memoria di accesso</strong> introdotto nel Modulo 3, l'IBM PC del 1981 è un caso emblematico di architettura:</p>
          <ul>
            <li><strong>Storage (Memoria di Massa):</strong> Dischetti Floppy magnetici da 360 KB o hard disk da 10 MB. La CPU non può eseguire codice direttamente da lì!</li>
            <li><strong>RAM (Memoria di Lavoro):</strong> Il processore Intel 8088 aveva un bus indirizzi a 20 bit ($2^{20} = 1.048.576\text{ byte} = 1\text{ MB}$). IBM decise che i primi <strong>640 KB</strong> di spazio erano riservati ai programmi dell'utente (RAM), mentre i restanti 384 KB erano riservati alla memoria video e al BIOS!</li>
          </ul>
          <p>Negli anni '80 nessuno immaginava che un singolo programma potesse superare 640 Kilobyte. Quando nei primi anni '90 uscirono videogiochi spettacolari come <em>Doom</em> o enormi fogli di calcolo aziendali, i programmatori sbatterono contro questo "muro invisibile" dei 640 KB, dovendo inventare ingegnosi trucchi di memoria espansa (EMS/XMS) prima che arrivassero i processori a 32 bit!</p>
        </div>
      `
    },
    {
      title: "4.2 Dalla Riga di Comando alla Scrivania Virtuale",
      content: `
        <h2>4.2 Dalla Riga di Comando (CLI) alla Scrivania Virtuale (GUI)</h2>

        <p>Fino alla metà degli anni '80, mettersi davanti a un computer significava trovarsi di fronte a uno <strong>schermo nero con un cursore lampeggiante verde o ambra</strong>. Non c'era nessun mouse, nessuna freccia da muovere, nessuna icona colorata su cui fare clic.</p>

        <p>L'unico modo per interagire con la macchina era la <a href="https://it.wikipedia.org/wiki/Interfaccia_a_riga_di_comando" target="_blank">Riga di Comando</a> (CLI, Command Line Interface) come l'MS-DOS di Microsoft o la shell dei sistemi Unix. Per usare il PC bisognava imparare a memoria una serie di comandi testuali in lingua inglese:</p>
        <ul>
          <li><code>DIR</code> o <code>ls</code> per vedere l'elenco dei file;</li>
          <li><code>CD Documenti</code> per entrare in una cartella;</li>
          <li><code>COPY file.txt A:</code> per copiare un file su un dischetto floppy;</li>
          <li><code>DEL</code> o <code>rm</code> per cancellare un file.</li>
        </ul>
        <p>Un singolo errore di battitura (come digitare uno spazio nel punto sbagliato) poteva cancellare l'intero contenuto del disco rigido senza alcuna finestra di conferma!</p>

        <div class="callout-box history">
          <div class="callout-title">🖱️ Doug Engelbart e "La Madre di Tutte le Demo" (9 Dicembre 1968)</div>
          <p>Il 9 dicembre 1968, al Convention Center di San Francisco, il ricercatore <a href="https://it.wikipedia.org/wiki/Douglas_Engelbart" target="_blank">Douglas Engelbart</a> tenne una presentazione di 90 minuti rimasta scolpita per sempre nella storia come <em>"The Mother of All Demos"</em>.<br>
          Davanti a un pubblico sbalordito di scienziati, Engelbart mostrò in funzione per la prima volta al mondo:<br>
          1. Il <strong>primo mouse per computer della storia</strong>: una scatoletta artigianale intagliata in legno di pino con un solo pulsante rosso e due rotelle metalliche perpendicolari sulla pancia;<br>
          2. Il concetto di <strong>ipertesto</strong> (testo cliccabile che apre altri documenti, l'antenato dei link del Web);<br>
          3. La divisione dello schermo in <strong>finestre multiple</strong>;<br>
          4. La videoscrittura collaborativa in tempo reale a distanza con videochiamata sullo schermo!</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-04/first-mouse.jpg" alt="Il primo prototipo di mouse in legno di Douglas Engelbart (vista inferiore con rotelle)" loading="lazy">
          <div class="figure-caption">Il primo prototipo di mouse per computer (1964-1968), intagliato in legno da Douglas Engelbart e Bill English allo Stanford Research Institute: vista inferiore con le due rotelle metalliche perpendicolari per il tracciamento degli assi X e Y.</div>
        </div>

        <h3>Lo Xerox PARC e la Nascita della Scrivania Virtuale (GUI)</h3>
        <p>Nei primi anni '70, la celebre azienda di fotocopiatrici Xerox creò a Palo Alto (California) un centro di ricerca d'avanguardia: lo <strong>Xerox PARC</strong>. Gli scienziati del PARC ebbero un'idea rivoluzionaria: <em>"Perché costringere gli esseri umani a parlare come i computer, quando possiamo far parlare i computer come gli esseri umani?"</em></p>
        <p>Nel 1973 crearono lo <strong>Xerox Alto</strong>, il primo computer con un'<a href="https://it.wikipedia.org/wiki/Interfaccia_grafica" target="_blank">Interfaccia Grafica Utente</a> (GUI, Graphical User Interface) basata sulla <strong>Metafora della Scrivania (Desktop Metaphor)</strong>:</p>
        <ul>
          <li>Lo schermo non è un foglio nero per righe di testo, ma una <strong>scrivania virtuale (Desktop)</strong>;</li>
          <li>I file non sono codici aridi, ma disegni intuitivi chiamati <strong>Icone</strong> (foglietti di carta, raccoglitori);</li>
          <li>I programmi non occupano l'intero schermo a turno, ma galleggiano in riquadri sovrapponibili chiamati <strong>Finestre (Windows)</strong>;</li>
          <li>I comandi si scelgono con il mouse attraverso <strong>Menu a tendina</strong>;</li>
          <li>Per cancellare un file non serve digitare comandi rischiosi: basta trascinarlo nel <strong>Cestino della spazzatura</strong> (con la possibilità di ripescarlo se ci si ripensa!).</li>
        </ul>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-04/xerox-alto.jpg" alt="Il computer Xerox Alto del 1973" loading="lazy">
          <div class="figure-caption">Lo Xerox Alto (1973): il laboratorio vivente dove nacquero la GUI, il mouse moderno, la rete Ethernet e la stampa laser.</div>
        </div>

        <h3>Steve Jobs, il Macintosh (1984) e Windows</h3>
        <p>I dirigenti della Xerox erano venditori di fotocopiatrici e non capirono il valore economico di ciò che avevano inventato. Nel dicembre 1979, un giovane Steve Jobs visitò lo Xerox PARC: rimase folgorato dalla GUI e capì immediatamente che il futuro di tutta l'informatica mondiale si trovava in quella stanza.</p>
        <p>Apple perfezionò l'interfaccia rendendola fluida, intuitiva ed economica, lanciando nel 1984 il <strong>Macintosh</strong>. Poco dopo, Microsoft creò <strong>Windows</strong> per i PC IBM-compatibili: da quel momento, il computer smise di essere una macchina per soli matematici e divenne lo strumento di lavoro, studio e creatività per l'intera umanità!</p>

        <!-- WIDGET 2: SIMULATORE COMPARATIVO CLI VS GUI -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚔️ Macchina del Tempo: Riga di Comando (CLI) vs Scrivania Virtuale (GUI)</span>
            <span class="widget-badge">Widget 4.2</span>
          </div>
          <div class="widget-body">
            <p>Confronta le due modalità operative storiche. Prova a esplorare i file, creare una cartella e leggere un documento sia digitando comandi nel terminale, sia usando le icone grafiche del desktop:</p>

            <div class="cli-gui-toggle-bar">
              <button class="cli-gui-view-btn active" id="btnShowCliView" onclick="setCliGuiView('cli')">💻 Modalità 1: Riga di Comando (CLI - MS-DOS Anni '80)</button>
              <button class="cli-gui-view-btn" id="btnShowGuiView" onclick="setCliGuiView('gui')">🖥️ Modalità 2: Scrivania Virtuale (GUI - Desktop & Finestre)</button>
            </div>

            <!-- VISTA CLI: Terminale MS-DOS -->
            <div id="cliContainerView" style="display: block;">
              <div class="cli-terminal-box">
                <div class="cli-screen-log" id="cliScreenLog">MS-DOS Versione 3.30 (C)Copyright 1987 Microsoft Corp.
Digita 'HELP' o 'DIR' per iniziare la sessione.

C:\UTENTE> </div>
                <div class="cli-input-row">
                  <span class="cli-prompt-lbl">C:\UTENTE&gt;</span>
                  <input type="text" class="cli-text-input" id="cliCommandLineInput" placeholder="Digita un comando (es. dir, cat segreto.txt, mkdir scuola, help)..." onkeydown="handleCliKeyDown(event)">
                </div>
              </div>
              <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px;">
                <button class="btn-primary" style="font-size: 0.8rem; padding: 4px 8px; background: #334155;" onclick="runCliQuickCommand('dir')">Comando: DIR (Elenca File)</button>
                <button class="btn-primary" style="font-size: 0.8rem; padding: 4px 8px; background: #334155;" onclick="runCliQuickCommand('cat segreto.txt')">Comando: TYPE segreto.txt</button>
                <button class="btn-primary" style="font-size: 0.8rem; padding: 4px 8px; background: #334155;" onclick="runCliQuickCommand('mkdir compiti')">Comando: MKDIR compiti</button>
                <button class="btn-primary" style="font-size: 0.8rem; padding: 4px 8px; background: #334155;" onclick="runCliQuickCommand('help')">Comando: HELP</button>
                <button class="btn-primary" style="font-size: 0.8rem; padding: 4px 8px; background: #475569;" onclick="runCliQuickCommand('cls')">Pulisci Schermo (CLS)</button>
              </div>
            </div>

            <!-- VISTA GUI: Scrivania Virtuale -->
            <div id="guiContainerView" style="display: none;">
              <div class="gui-desktop-box">
                <div class="desktop-topbar">
                  <span>🍎 File &nbsp; Modifica &nbsp; Vista &nbsp; Speciale</span>
                  <span id="guiClockDisplay">10:42 AM</span>
                </div>

                <div class="desktop-icon-area" id="desktopIconArea">
                  <!-- Rendered via JS -->
                </div>

                <!-- Finestra Modale File Manager GUI -->
                <div class="desktop-window-modal" id="guiWindowModal" style="display: none;">
                  <div class="desktop-window-header">
                    <span id="guiWindowTitle">Documento</span>
                    <button style="border: none; background: #ef4444; color: #fff; border-radius: 50%; width: 20px; height: 20px; cursor: pointer; font-weight: bold;" onclick="closeGuiWindow()">✕</button>
                  </div>
                  <div class="desktop-window-content" id="guiWindowContent">
                    <!-- Contenuto finestra -->
                  </div>
                </div>
              </div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 8px;">
                💡 <em>Nota la magia dell'astrazione:</em> Il file system è esattamente lo stesso! Se crei la cartella <code>compiti</code> nel terminale e poi apri la Scrivania GUI, troverai l'icona della cartella pronta sul Desktop!
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "4.3 Il Computer come Macchina Universale",
      content: `
        <h2>4.3 Macchina Specializzata vs Macchina Universale</h2>

        <p>Nel mondo fisico che ci circonda, quasi tutti gli oggetti meccanici ed elettronici sono <strong>macchine specializzate a funzione fissa</strong>:</p>
        <ul>
          <li>Un tostapane sa solo scaldare il pane con resistenze elettriche;</li>
          <li>Una macchina fotografica analogica sa solo impressionare la pellicola chimica;</li>
          <li>Una calcolatrice da tavolo sa compiere unicamente operazioni aritmetiche.</li>
        </ul>
        <p>Se volessi che il tuo tostapane suonasse una sinfonia di Beethoven o controllasse le tue email, dovresti smontarne fisicamente i circuiti, buttare le resistenze e saldare nuovi componenti. L'hardware è rigido e immutabile.</p>

        <h3>La Macchina di Turing Universale nel Tuo Portatile</h3>
        <p>Il Personal Computer è l'esatto opposto: è l'incarnazione fisica della celebre <a href="https://it.wikipedia.org/wiki/Macchina_di_Turing" target="_blank">Macchina di Turing Universale</a> teorizzata dal matematico Alan Turing nel 1936.<br>
        Un PC non ha alcuno scopo prestabilito. Il silicio della CPU, i banchi di memoria RAM e i pixel dello schermo sono <strong>materia grezza malleabile</strong>. Il suo scopo cambia nel momento stesso in cui carichi un software diverso nella memoria di accesso!</p>

        <h3>La Catena del Valore: Storage ➔ RAM ➔ CPU</h3>
        <p>Come avviene questa metamorfosi nei computer reali?</p>
        <ol>
          <li><strong>Storage (Memoria di Massa - SSD o Hard Disk):</strong> Sul disco i programmi (Word, Minecraft, Spotify, Python) riposano come file binari freddi composti da milioni di byte;</li>
          <li><strong>Caricamento in RAM:</strong> Quando fai doppio clic sull'icona di un programma, il sistema operativo copia le istruzioni del file dal disco alla memoria RAM veloce ad accesso diretto;</li>
          <li><strong>Esecuzione sulla CPU:</strong> Il processore inizia il ciclo Fetch-Decode-Execute su quelle nuove istruzioni. Senza muovere un solo filo di rame, lo stesso identico computer si trasforma in un batter d'occhio da macchina per scrivere a studio di registrazione musicale, console per videogiochi tridimensionali o calcolatore astrofisico!</li>
        </ol>

        <!-- WIDGET 3: LA PIPELINE DELLA MACCHINA UNIVERSALE -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚙️ Laboratorio Hardware: Come il Software Trasforma la Macchina</span>
            <span class="widget-badge">Widget 4.3</span>
          </div>
          <div class="widget-body">
            <p>Seleziona un'applicazione da caricare dal disco. Osserva il flusso di dati attraverso la gerarchia hardware (Storage ➔ RAM ➔ CPU) e scopri come l'hardware si riconfigura per eseguire compiti radicalmente diversi:</p>

            <div class="pipeline-layout">
              <!-- STAGE 1: STORAGE DISK -->
              <div class="pipeline-box" id="pipeStageStorage">
                <div style="font-weight: bold; font-size: 0.85rem; color: #0284c7; margin-bottom: 8px;">
                  1. MEMORIA DI MASSA (STORAGE) 💽
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 8px;">
                  Programmi memorizzati su disco non volatile:
                </div>
                
                <button class="app-select-btn active" id="btnAppWord" onclick="loadUniversalApp('word')">
                  <span>📄</span> <span>Videoscrittura (Writer)</span>
                </button>
                <button class="app-select-btn" id="btnAppPiano" onclick="loadUniversalApp('piano')">
                  <span>🎹</span> <span>Sintetizzatore Audio (DAW)</span>
                </button>
                <button class="app-select-btn" id="btnAppGame" onclick="loadUniversalApp('game')">
                  <span>👾</span> <span>Videogioco Retro (Arcade)</span>
                </button>
                <button class="app-select-btn" id="btnAppPython" onclick="loadUniversalApp('python')">
                  <span>🐍</span> <span>Interprete Python (Codice)</span>
                </button>
              </div>

              <!-- FRECCIA 1 -->
              <div class="pipeline-arrow">➔</div>

              <!-- STAGE 2: RAM -->
              <div class="pipeline-box" id="pipeStageRam">
                <div style="font-weight: bold; font-size: 0.85rem; color: #10b981; margin-bottom: 8px;">
                  2. MEMORIA DI ACCESSO (RAM) ⚡
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 6px;">
                  Byte caricati ad alta velocità:
                </div>
                <div id="ramBytesDisplay" style="font-family: monospace; font-size: 0.8rem; background: var(--card-hover); padding: 8px; border-radius: 6px; flex: 1; border: 1px solid var(--border); overflow-y: auto;">
                  [RAM BLOCKS]<br>
                  0x00A0: LOAD_TEXT_ENGINE<br>
                  0x00A4: INIT_KEYBOARD_BUFFER<br>
                  0x00A8: RENDER_FONT_SURFACE
                </div>
              </div>

              <!-- FRECCIA 2 -->
              <div class="pipeline-arrow">➔</div>

              <!-- STAGE 3: CPU & SCREEN OUTPUT -->
              <div class="pipeline-box" id="pipeStageCpu">
                <div style="font-weight: bold; font-size: 0.85rem; color: #8b5cf6; margin-bottom: 8px;">
                  3. CPU & SCHERMO ATTIVO 🖥️
                </div>
                <div id="universalAppActiveScreen" style="background: var(--card-hover); border-radius: 6px; border: 1px solid var(--border); padding: 10px; flex: 1; display: flex; flex-direction: column; justify-content: center;">
                  <!-- Dynamic App View Rendered via JS -->
                </div>
              </div>
            </div>

            <div style="font-size: 0.82rem; color: var(--text-muted); text-align: center;">
              💡 <em>Principio di Turing:</em> L'hardware (CPU e RAM) non è cambiato di una virgola. Solo caricando byte diversi in memoria, la macchina si è trasformata in uno strumento completamente nuovo!
            </div>
          </div>
        </div>
      `
    }
  ],
  quiz: {
    questions: [
      {
        q: "Perché l'Olivetti Programma 101 (1965), ideata da Pier Giorgio Perotto, è storicamente riconosciuta come il primo personal computer da tavolo?",
        options: [
          { text: "Fu il primo calcolatore ad adottare un'architettura a microprocessore integrato su silicio con interfaccia a finestre derivata da CP/M", correct: false },
          { text: "Era un terminale di calcolo privo di memoria propria, collegato in time-sharing all'Elea 9003 tramite linea telefonica commutata", correct: false },
          { text: "Era una macchina autonoma, compatta e programmabile direttamente dall'utente da scrivania: registrava ed eseguiva algoritmi tramite cartoline magnetiche (fu usata anche dalla NASA per calcolare la discesa lunare dell'Apollo 11), senza richiedere sale climatizzate o tecnici specializzati", correct: true },
          { text: "Si trattava di una calcolatrice meccanica ad addizione binaria priva di supporto per cicli di iterazione o salti condizionati", correct: false }
        ]
      },
      {
        q: "Qual è la differenza architetturale e funzionale primaria tra Memoria di Lavoro (RAM) e Memoria di Massa (Storage SSD/HDD)?",
        options: [
          { text: "La CPU preleva ed esegue le istruzioni macchina leggendo direttamente dai settori dell'SSD NVMe tramite protocollo DMA senza transitare per la memoria volatile", correct: false },
          { text: "Lo Storage è non volatile e capiente ma ad accesso indiretto e a blocchi; la RAM è volatile, direttamente indirizzabile a byte dal memory controller della CPU con latenze di pochi nanosecondi, ed è l'unico spazio da cui il processore può eseguire direttamente le istruzioni", correct: true },
          { text: "La RAM conserva i dati in modo permanente mediante celle magnetiche a riluttanza variabile, mentre l'SSD richiede cicli di refresh periodici a carico del sistema operativo", correct: false },
          { text: "RAM e Storage condividono la medesima latenza di accesso, ma l'unità SSD viene riservata esclusivamente alla gestione dei frame dello stack di sistema", correct: false }
        ]
      },
      {
        q: "Quali tecnologie fondamentali dell'informatica moderna furono mostrate pubblicamente per la prima volta nella 'Madre di Tutte le Demo' di Douglas Engelbart (1968)?",
        options: [
          { text: "La prima dimostrazione di una rete geografica a commutazione di pacchetto (ARPANET) collegata al protocollo applicativo HTTP", correct: false },
          { text: "La prima scheda grafica per computer con accelerazione tridimensionale geometrica e pipeline programmabile", correct: false },
          { text: "Il primo microprocessore monolitico a 8 bit dotato di memoria flash riscrivibile e bus seriale ad alta velocità", correct: false },
          { text: "Il mouse per computer a rotelle ortogonali, il testo ipertestuale navigabile, le interfacce a finestre multiple e la collaborazione interattiva in tempo reale su display", correct: true }
        ]
      },
      {
        q: "In che modo la 'Desktop Metaphor' ideata allo Xerox PARC (1973) ha rivoluzionato il modello di interazione uomo-macchina?",
        options: [
          { text: "Ha sostituito l'obbligo di memorizzare comandi testuali da riga di comando (CLI) con rappresentazioni grafiche intuitive di oggetti quotidiani (scrivania, cartelle, documenti, finestre sovrapponibili e cestino) manipolabili tramite puntatore", correct: true },
          { text: "Ha introdotto il modello di virtualizzazione hardware consentendo l'esecuzione di più sistemi operativi ospiti isolati sullo stesso processore", correct: false },
          { text: "Ha unificato lo spazio di memoria fisica eliminando la distinzione di privilegio tra Ring 0 del Kernel e Ring 3 delle applicazioni utente", correct: false },
          { text: "Ha stabilito gli standard ipertestuali del Web separando il codice logico delle pagine dai fogli di stile visuali", correct: false }
        ]
      },
      {
        q: "Secondo le migliori pratiche di sicurezza hardware e protezione dei dati, come si articola la 'Regola del Backup 3-2-1'?",
        options: [
          { text: "Mantenere 3 partizioni logiche distinte all'interno dello stesso hard disk interno, formattate con 2 file system differenti, ed eseguire 1 scansione antimalware settimanale", correct: false },
          { text: "Mantenere almeno 3 copie totali dei dati, su 2 supporti con tecnologie differenti (es. SSD locale e storage NAS/ottico), di cui almeno 1 copia custodita geograficamente fuori sede (off-site o cloud cifrato)", correct: true },
          { text: "Effettuare 3 backup completi al giorno, conservarli per 2 settimane sul desktop e sincronizzarli tramite 1 sola cartella condivisa non autenticata", correct: false },
          { text: "Distribuire l'intero volume di dati su 3 dischi meccanici configurati in modalità RAID 0 per massimizzare contemporaneamente fault tolerance e transfer rate", correct: false }
        ]
      }
    ]
  }
});

/* =========================================================
   LOGICA JAVASCRIPT DEI WIDGET DEL MODULO 4
   ========================================================= */

// --- WIDGET 4.1: SIMULATORE OLIVETTI PROGRAMMA 101 (P101) ---
window.p101State = {
  cardInserted: null,
  tapeLog: [
    "OLIVETTI PROGRAMMA 101 - IVREA (1965)",
    "PRONTA PER LA LETTURA MAGNETICA...",
    "-----------------------------------"
  ]
};

window.renderP101Console = function() {
  const lbl = document.getElementById("p101CurrentCardLabel");
  const tape = document.getElementById("p101TapeOutput");
  if (!lbl || !tape) return;

  if (window.p101State.cardInserted === 'apollo') {
    lbl.innerText = "📼 Cartolina Attiva: 'TRAIETTORIA LUNARE APOLLO 11' (NASA)";
    lbl.style.color = "#38bdf8";
  } else if (window.p101State.cardInserted === 'pythagoras') {
    lbl.innerText = "📼 Cartolina Attiva: 'TEOREMA DI PITAGORA & IPOTENUSA'";
    lbl.style.color = "#10b981";
  } else {
    lbl.innerText = "Nessuna cartolina inserita (Modalità Calcolatrice Manuale)";
    lbl.style.color = "var(--text-muted)";
  }

  tape.innerText = window.p101State.tapeLog.join("\n");
  tape.scrollTop = tape.scrollHeight;
};

window.insertP101Card = function(cardType) {
  window.p101State.cardInserted = cardType;
  if (cardType === 'apollo') {
    window.p101State.tapeLog.push(">> LETTURA CARTOLINA MAGNETICA...");
    window.p101State.tapeLog.push("PROG: APOLLO 11 LUNAR TRAJECTORY");
    window.p101State.tapeLog.push("REGISTRI AZZERATI. INSERIRE PARAMETRO V:");
  } else if (cardType === 'pythagoras') {
    window.p101State.tapeLog.push(">> LETTURA CARTOLINA MAGNETICA...");
    window.p101State.tapeLog.push("PROG: TEOREMA DI PITAGORA");
    window.p101State.tapeLog.push("REGISTRI PRONTI. INSERIRE CATETO:");
  }
  window.renderP101Console();
};

window.ejectP101Card = function() {
  window.p101State.cardInserted = null;
  window.p101State.tapeLog.push(">> CARTOLINA MAGNETICA ESPULSA ⏏️");
  window.renderP101Console();
};

window.runP101Program = function() {
  const valInput = document.getElementById("p101InputVal");
  const val = valInput ? parseFloat(valInput.value) || 10 : 10;

  if (window.p101State.cardInserted === 'apollo') {
    // Simula calcolo orbita lunare: R = V * 1.609 + delta
    const altitudine = (val * 1.852).toFixed(2);
    const spintaRichiesta = (val * 9.81 * 0.45).toFixed(1);
    window.p101State.tapeLog.push(`-----------------------------------`);
    window.p101State.tapeLog.push(`INPUT PARAM V: ${val}`);
    window.p101State.tapeLog.push(`ORBIT ALTITUDE: ${altitudine} KM`);
    window.p101State.tapeLog.push(`THRUST DELTA-V: ${spintaRichiesta} M/S`);
    window.p101State.tapeLog.push(`STATUS: TRAJECTORY OPTIMAL ✅`);
  } else if (window.p101State.cardInserted === 'pythagoras') {
    const catetoB = 30;
    const ipotenusa = Math.sqrt(val * val + catetoB * catetoB).toFixed(2);
    window.p101State.tapeLog.push(`-----------------------------------`);
    window.p101State.tapeLog.push(`CATETO A: ${val}`);
    window.p101State.tapeLog.push(`CATETO B: ${catetoB}`);
    window.p101State.tapeLog.push(`IPOTENUSA (SQRT): ${ipotenusa} ✅`);
  } else {
    // Calcolatrice semplice
    const res = (val * 2.5).toFixed(2);
    window.p101State.tapeLog.push(`CALCOLO MANUALE: ${val} * 2.5 = ${res}`);
  }
  window.renderP101Console();
};

window.clearP101Tape = function() {
  window.p101State.tapeLog = [
    "OLIVETTI PROGRAMMA 101 - STRISCIA AZZERATA",
    "-------------------------------------------"
  ];
  window.renderP101Console();
};

// --- WIDGET 4.2: SIMULATORE COMPARATIVO CLI VS GUI ---
window.cliGuiFs = {
  currentView: "cli",
  files: [
    { name: "segreto.txt", type: "file", icon: "📄", content: "Messaggio segreto del 1984: La tecnologia deve amplificare la creatività umana!" },
    { name: "foto_viaggio", type: "folder", icon: "📁", content: "Cartella contenente 3 file grafici (formato RAW bitmap)." },
    { name: "vecchio.bak", type: "file", icon: "📑", content: "Copia di backup temporanea del sistema MS-DOS." },
    { name: "Cestino", type: "trash", icon: "🗑️", content: "Cestino virtuale di sistema: vuoto." }
  ],
  cliLogText: `MS-DOS Versione 3.30 (C)Copyright 1987 Microsoft Corp.
Digita 'HELP' o 'DIR' per iniziare la sessione.

C:\\UTENTE> `
};

window.setCliGuiView = function(viewMode) {
  window.cliGuiFs.currentView = viewMode;
  const cliBox = document.getElementById("cliContainerView");
  const guiBox = document.getElementById("guiContainerView");
  const btnCli = document.getElementById("btnShowCliView");
  const btnGui = document.getElementById("btnShowGuiView");

  if (viewMode === 'cli') {
    if (cliBox) cliBox.style.display = "block";
    if (guiBox) guiBox.style.display = "none";
    if (btnCli) btnCli.classList.add("active");
    if (btnGui) btnGui.classList.remove("active");
  } else {
    if (cliBox) cliBox.style.display = "none";
    if (guiBox) guiBox.style.display = "block";
    if (btnCli) btnCli.classList.remove("active");
    if (btnGui) btnGui.classList.add("active");
    window.renderDesktopIcons();
  }
};

window.renderCliGuiWorkbench = function() {
  const log = document.getElementById("cliScreenLog");
  if (log) {
    log.innerText = window.cliGuiFs.cliLogText;
    log.scrollTop = log.scrollHeight;
  }
  window.renderDesktopIcons();
};

window.renderDesktopIcons = function() {
  const area = document.getElementById("desktopIconArea");
  if (!area) return;

  area.innerHTML = "";
  window.cliGuiFs.files.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "desktop-icon-btn";
    btn.onclick = () => window.openGuiItem(item.name);

    btn.innerHTML = `
      <span class="icon-sym">${item.icon}</span>
      <span>${item.name}</span>
    `;
    area.appendChild(btn);
  });
};

window.openGuiItem = function(name) {
  const item = window.cliGuiFs.files.find(f => f.name === name);
  if (!item) return;

  const modal = document.getElementById("guiWindowModal");
  const title = document.getElementById("guiWindowTitle");
  const content = document.getElementById("guiWindowContent");

  if (!modal || !title || !content) return;

  title.innerText = `${item.icon} ${item.name}`;
  content.innerHTML = `
    <div style="font-size: 0.95rem; line-height: 1.5;">${item.content}</div>
    <div style="margin-top: 14px; font-size: 0.78rem; color: var(--text-muted);">
      Dimensione: ${item.type === 'folder' ? '4 KB (Directory)' : '256 Byte'} &nbsp;|&nbsp; Permessi: RW-R--
    </div>
  `;
  modal.style.display = "flex";
};

window.closeGuiWindow = function() {
  const modal = document.getElementById("guiWindowModal");
  if (modal) modal.style.display = "none";
};

window.handleCliKeyDown = function(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("cliCommandLineInput");
    if (input) {
      window.executeCliCommand(input.value.trim());
      input.value = "";
    }
  }
};

window.runCliQuickCommand = function(cmd) {
  window.executeCliCommand(cmd);
};

window.executeCliCommand = function(rawCmd) {
  if (!rawCmd) return;
  const cmd = rawCmd.toLowerCase();
  let response = "";

  if (cmd === "dir" || cmd === "ls") {
    response = `
 Volume in unità C non ha etichetta.
 Directory di C:\\UTENTE

.              <DIR>        11-10-87  10:00
..             <DIR>        11-10-87  10:00
`;
    window.cliGuiFs.files.forEach(f => {
      const typeStr = f.type === 'folder' ? '<DIR>     ' : '      256 ';
      response += `${f.name.toUpperCase().padEnd(14, ' ')} ${typeStr} 11-10-87  10:30\n`;
    });
    response += `         ${window.cliGuiFs.files.length} file            1.048.576 byte liberi\n`;
  } else if (cmd.startsWith("cat ") || cmd.startsWith("type ")) {
    const fileName = rawCmd.substring(rawCmd.indexOf(" ") + 1).trim();
    const found = window.cliGuiFs.files.find(f => f.name.toLowerCase() === fileName.toLowerCase());
    if (found) {
      response = `\n${found.content}\n`;
    } else {
      response = `\nFile '${fileName}' non trovato.\n`;
    }
  } else if (cmd.startsWith("mkdir ")) {
    const folderName = rawCmd.substring(6).trim();
    if (folderName) {
      window.cliGuiFs.files.push({
        name: folderName,
        type: "folder",
        icon: "📁",
        content: `Nuova cartella '${folderName}' creata da riga di comando.`
      });
      response = `\nCartella '${folderName}' creata con successo.\n`;
      window.renderDesktopIcons();
    }
  } else if (cmd === "cls" || cmd === "clear") {
    window.cliGuiFs.cliLogText = "C:\\UTENTE> ";
    window.renderCliGuiWorkbench();
    return;
  } else if (cmd === "help") {
    response = `
Comandi disponibili:
  DIR                - Elenca i file e le cartelle nella directory corrente
  TYPE <file>        - Mostra il contenuto testuale di un file (es. TYPE segreto.txt)
  MKDIR <cartella>   - Crea una nuova cartella
  CLS                - Pulisce lo schermo del terminale
  HELP               - Mostra questo messaggio di aiuto
`;
  } else {
    response = `\nComando o nome file non valido: '${rawCmd}'. Digita HELP per i comandi.\n`;
  }

  window.cliGuiFs.cliLogText += `${rawCmd}\n${response}\nC:\\UTENTE> `;
  window.renderCliGuiWorkbench();
};

// --- WIDGET 4.3: LA MACCHINA UNIVERSALE (PIPELINE) ---
window.currentUniversalApp = "word";

window.loadUniversalApp = function(appId) {
  window.currentUniversalApp = appId;

  // Toggle button styles
  const btnWord = document.getElementById("btnAppWord");
  const btnPiano = document.getElementById("btnAppPiano");
  const btnGame = document.getElementById("btnAppGame");
  const btnPython = document.getElementById("btnAppPython");

  [btnWord, btnPiano, btnGame, btnPython].forEach(b => {
    if (b) b.classList.remove("active");
  });

  if (appId === 'word' && btnWord) btnWord.classList.add("active");
  if (appId === 'piano' && btnPiano) btnPiano.classList.add("active");
  if (appId === 'game' && btnGame) btnGame.classList.add("active");
  if (appId === 'python' && btnPython) btnPython.classList.add("active");

  window.renderUniversalPipeline();
};

window.renderUniversalPipeline = function() {
  const ramDisplay = document.getElementById("ramBytesDisplay");
  const appScreen = document.getElementById("universalAppActiveScreen");
  if (!ramDisplay || !appScreen) return;

  const appId = window.currentUniversalApp || "word";

  if (appId === 'word') {
    ramDisplay.innerHTML = `
      <span style="color: #0284c7;">[CARICATO: WORD PROCESSOR]</span><br>
      0x0100: INIT_TEXT_BUFFER<br>
      0x0104: CURSOR_POS_TRACK<br>
      0x0108: FONT_ARIAL_12PT<br>
      0x010C: SPELLCHECK_ACTIVE
    `;
    appScreen.innerHTML = `
      <div style="font-size: 0.82rem; font-weight: bold; margin-bottom: 6px;">📝 Mini Editor di Testo</div>
      <textarea style="width: 100%; height: 80px; font-family: sans-serif; font-size: 0.85rem; padding: 6px; border-radius: 4px; border: 1px solid var(--border); background: var(--card-bg); color: var(--text);" placeholder="Scrivi qui i tuoi pensieri... Il computer ora è una macchina per scrivere ultraveloce!"></textarea>
      <div style="font-size: 0.72rem; color: #10b981; margin-top: 4px;">CPU: Modalità Videoscrittura attiva</div>
    `;
  } else if (appId === 'piano') {
    ramDisplay.innerHTML = `
      <span style="color: #10b981;">[CARICATO: AUDIO SYNTHESIZER]</span><br>
      0x0200: WEB_AUDIO_OSCILLATOR<br>
      0x0204: FREQ_TABLE_SINE<br>
      0x0208: SAMPLE_RATE_44100HZ<br>
      0x020C: ENVELOPE_ATTACK_DECAY
    `;
    appScreen.innerHTML = `
      <div style="font-size: 0.82rem; font-weight: bold; margin-bottom: 6px;">🎹 Mini Sintetizzatore Musicale</div>
      <div style="display: flex; gap: 6px; justify-content: center; margin: 8px 0;">
        <button class="btn-primary" style="padding: 10px 14px; background: #3b82f6;" onclick="playSynthTone(261.63)">DO</button>
        <button class="btn-primary" style="padding: 10px 14px; background: #6366f1;" onclick="playSynthTone(293.66)">RE</button>
        <button class="btn-primary" style="padding: 10px 14px; background: #8b5cf6;" onclick="playSynthTone(329.63)">MI</button>
        <button class="btn-primary" style="padding: 10px 14px; background: #a855f7;" onclick="playSynthTone(349.23)">FA</button>
        <button class="btn-primary" style="padding: 10px 14px; background: #d946ef;" onclick="playSynthTone(392.00)">SOL</button>
      </div>
      <div style="font-size: 0.72rem; color: #10b981; text-align: center;">Premi i tasti per generare onde sonore reali! La CPU ora è uno strumento musicale!</div>
    `;
  } else if (appId === 'game') {
    ramDisplay.innerHTML = `
      <span style="color: #f59e0b;">[CARICATO: RETRO ARCADE GAME]</span><br>
      0x0300: SPRITE_SPACESHIP_RENDER<br>
      0x0304: COLLISION_BOX_DETECTOR<br>
      0x0308: SCORE_COUNTER_60FPS<br>
      0x030C: SOUND_EXPLOSION_SFX
    `;
    appScreen.innerHTML = `
      <div style="font-size: 0.82rem; font-weight: bold; margin-bottom: 6px;">👾 Retro Space Defender</div>
      <div style="background: #020617; color: #38bdf8; padding: 12px; border-radius: 6px; text-align: center; font-family: monospace;">
        <div>🚀 [ NAVE SPAZIALE: PRONTA ]</div>
        <div style="font-size: 1.2rem; margin: 6px 0; color: #f59e0b;">👾 👾 👾 👾 👾</div>
        <button class="btn-primary" style="font-size: 0.8rem; padding: 4px 10px; background: #ef4444;" onclick="shootArcadeLaser()">Spara Laser 💥</button>
        <span id="arcadeScoreLbl" style="margin-left: 10px; font-weight: bold;">Punteggio: 0</span>
      </div>
      <div style="font-size: 0.72rem; color: #f59e0b; margin-top: 4px;">CPU: Loop a 60 FPS e collisioni grafiche!</div>
    `;
  } else if (appId === 'python') {
    ramDisplay.innerHTML = `
      <span style="color: #ec4899;">[CARICATO: PYTHON INTERPRETER]</span><br>
      0x0400: LEXER_PARSER_TREE<br>
      0x0404: BYTECODE_EVAL_LOOP<br>
      0x0408: GARBAGE_COLLECTOR<br>
      0x040C: STDOUT_STREAM_CONSOLE
    `;
    appScreen.innerHTML = `
      <div style="font-size: 0.82rem; font-weight: bold; margin-bottom: 6px;">🐍 Interprete Python</div>
      <div style="font-family: monospace; font-size: 0.82rem; background: #0f172a; color: #a5f3fc; padding: 8px; border-radius: 4px;">
        &gt;&gt;&gt; for i in range(3):<br>
        ... &nbsp;&nbsp;&nbsp;&nbsp;print("Ciao Mondo!", i * 2)<br>
        <span style="color: #4ade80;">Ciao Mondo! 0<br>Ciao Mondo! 2<br>Ciao Mondo! 4</span>
      </div>
      <div style="font-size: 0.72rem; color: #ec4899; margin-top: 4px;">CPU: Esecuzione di codice e logica algoritmica pura!</div>
    `;
  }
};

// Play realistic synth notes using Web Audio API
window.playSynthTone = function(freq) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.6);
  } catch (e) {
    console.log("Audio non supportato:", e);
  }
};

window.arcadeScore = 0;
window.shootArcadeLaser = function() {
  window.arcadeScore += 100;
  const lbl = document.getElementById("arcadeScoreLbl");
  if (lbl) lbl.innerText = `Punteggio: ${window.arcadeScore}`;
  if (typeof playSynthTone === 'function') playSynthTone(880);
};

// Auto-init widgets on load
setTimeout(() => {
  if (typeof renderP101Console === 'function') renderP101Console();
  if (typeof renderCliGuiWorkbench === 'function') renderCliGuiWorkbench();
  if (typeof renderUniversalPipeline === 'function') renderUniversalPipeline();
}, 200);
