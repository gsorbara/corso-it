(window.courseData = window.courseData || []).push({
  id: 7,
  title: "7. Che cos'è un Programma: dal File al Processo",
  keyRequired: "EXEC-PROCESS-707",
  nextKey: "CODE-LANG-808",
  submodules: [
    {
      title: "7.1 L'Autopsia di un File Eseguibile (.exe & ELF)",
      content: `
        <h2>7.1 L'Autopsia di un File Eseguibile: Cosa c'è dentro un .exe o un binario ELF?</h2>

        <p>Quando scarichiamo un'applicazione o compiliamo il nostro codice, otteniamo un file salvato su disco: un file <code>.exe</code> su Windows, un binario senza estensione (o formato <strong>ELF</strong>) su Linux, oppure un pacchetto <strong>Mach-O</strong> su macOS.</p>

        <p>A prima vista potrebbe sembrare una sequenza caotica di milioni di byte incomprensibili. In realtà, un file eseguibile possiede <strong>un'anatomia rigidissima e affascinante</strong>, standardizzata a livello internazionale fin nei minimi dettagli.</p>

        <h3>I "Magic Numbers": La Firma Segreta all'Inizio del File</h3>
        <p>Come fa il sistema operativo a sapere con certezza se un file è un vero programma eseguibile, un'immagine JPEG o un documento di testo, senza fidarsi ciecamente della sola estensione del file (che chiunque potrebbe rinominare con facilità)?</p>
        <p>Ispeziona i primissimi byte del file, chiamati <a href="https://it.wikipedia.org/wiki/Numero_magico_(informatica)" target="_blank">Magic Numbers (Numeri Magici)</a>:</p>
        <ul>
          <li><strong>Windows PE (.exe / .dll):</strong> I primi due byte sono immancabilmente <code>4D 5A</code> in esadecimale. In codice ASCII corrispondono alle lettere <strong>"MZ"</strong>: sono le iniziali storiche di <a href="https://it.wikipedia.org/wiki/Mark_Zbikowski" target="_blank">Mark Zbikowski</a>, uno dei programmatori di testa che creò l'MS-DOS nel 1981! Ancora oggi, nel 2026, ogni singolo file <code>.exe</code> di Windows si apre con il suo tributo personale;</li>
          <li><strong>Linux & Android (ELF):</strong> I primi quattro byte sono <code>7F 45 4C 46</code>, che decodificano come <code>\x7fELF</code> (Executable and Linkable Format);</li>
          <li><strong>Java Bytecode (.class):</strong> I file compilati di Java iniziano con i quattro byte <code>CA FE BA BE</code> ("Cafe Babe"), un celebre omaggio goliardico degli sviluppatori al caffè!</li>
        </ul>

        <h3>L'Anatomia a Sezioni di un File Eseguibile</h3>
        <p>Subito dopo l'Header (che indica per quale processore è stato compilato il programma, es. x86_64 o ARM64, e qual è il punto di inizio o <strong>Entry Point</strong>), il file è suddiviso in sezioni specializzate:</p>
        <ol>
          <li><strong>Sezione <code>.text</code> (o <code>.code</code>):</strong> Contiene le pure istruzioni in linguaggio macchina destinate alla CPU (come <code>MOV</code>, <code>ADD</code>, <code>CALL</code>). Questa sezione è protetta dal sistema operativo come <strong>Sola Lettura ed Eseguibile (R-X)</strong>: è rigorosamente vietato scrivervi per impedire che il programma modifichi se stesso o che virus possano iniettare codice malevolo;</li>
          <li><strong>Sezione <code>.rodata</code> (Read-Only Data):</strong> Contiene i dati e i testi costanti che non devono mai cambiare durante l'esecuzione del programma: ad esempio i messaggi dei menu (<code>"Benvenuto nel Gioco!"</code>), le scritte di copyright o costanti matematiche come Pi Greco;</li>
          <li><strong>Sezione <code>.data</code>:</strong> Contiene le variabili globali del programma che hanno un valore iniziale stabilito dal programmatore (ad esempio <code>int vite_iniziali = 3;</code> oppure <code>int livello_partenza = 1;</code>);</li>
          <li><strong>Sezione <code>.bss</code> (Block Started by Symbol):</strong> Rappresenta le variabili globali non inizializzate (es. un grande array vuoto di 10.000 caselle). Nel file su disco occupa <strong>ZERO byte</strong> (c'è solo un'etichetta che indica quanti byte riservare all'avvio), permettendo di risparmiare spazio prezioso sul disco rigido!</li>
        </ol>

        <!-- WIDGET 7.1: ISPETTORE DI FILE ESEGUIBILI -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🔍 Ispettore Interattivo di File Eseguibili (Hex Dump & Sezioni)</span>
            <span class="widget-badge">Widget 7.1</span>
          </div>
          <div class="widget-body">
            <p>Esplora l'anatomia interna di un binario reale. Seleziona il formato e clicca sulle sezioni per visualizzare i byte esadecimali corrispondenti e il loro significato:</p>

            <div class="exe-inspector-workbench">
              <!-- Selettore File Campione -->
              <div class="exe-file-tabs">
                <button class="exe-tab-btn active" id="btnTabExe" onclick="switchExecutableSample('exe')">📦 SpaceInvaders.exe (Windows PE)</button>
                <button class="exe-tab-btn" id="btnTabElf" onclick="switchExecutableSample('elf')">🐧 WebServer.elf (Linux ELF)</button>
              </div>

              <div class="exe-inspector-grid">
                <!-- Selettore Sezioni a Albero -->
                <div class="exe-sections-list" id="exeSectionsList">
                  <!-- Rendered via JS -->
                </div>

                <!-- Visualizzatore Hex Dump -->
                <div class="exe-hex-viewer">
                  <div class="exe-hex-header">
                    <span>OFFSET</span>
                    <span>BYTE ESADECIMALI (HEX)</span>
                    <span>ASCII DECODE</span>
                  </div>
                  <pre class="exe-hex-body" id="exeHexBody">
                    <!-- Populated via JS -->
                  </pre>
                </div>
              </div>

              <!-- Scheda Informativa Sezione Selezionata -->
              <div class="exe-info-card" id="exeSectionInfoCard">
                <div style="font-weight: bold; color: #38bdf8;" id="exeInfoTitle">Sezione: Magic Bytes</div>
                <div style="font-size: 0.85rem; color: var(--text-color); margin-top: 4px;" id="exeInfoDesc">
                  I primissimi byte che certificano il formato al sistema operativo prima dell'esecuzione.
                </div>
                <div style="font-family: monospace; font-size: 0.78rem; color: #10b981; margin-top: 6px;" id="exeInfoPerms">
                  Permessi MMU: Non mappata in RAM (Header di controllo)
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "7.2 Il Doppio Clic a Rallentatore (La Pipeline del Loader)",
      content: `
        <h2>7.2 Il Doppio Clic a Rallentatore: Come Nasce un Processo Vivo</h2>

        <p>Fai doppio clic con il mouse sull'icona di un gioco sul desktop oppure digiti <code>./server</code> nel terminale e premi Invio. Sul monitor, dopo appena un battito di ciglia (circa <strong>30-50 millisecondi</strong>), compare la finestra dell'applicazione.</p>

        <p>In quell'istante quasi impercettibile per l'occhio umano, il sistema operativo e il processore eseguono una delle sequenze ingegneristiche più complesse e affascinanti del mondo digitale: la <strong>Pipeline del Loader</strong>.</p>

        <h3>I 6 Stadi della Nascita di un Processo</h3>
        <ol>
          <li><strong>Stadio 1: L'Intercettazione e la Syscall di Creazione (0 ms):</strong> La shell grafica (come Explorer su Windows o Finder su macOS) rileva il clic ed emette una chiamata di sistema al Kernel (come <code>CreateProcess()</code> su Windows o <code>fork()</code> + <code>execve()</code> su Linux e macOS);</li>
          <li><strong>Stadio 2: Ispezione degli Header e Verifica di Sicurezza (8 ms):</strong> Il Kernel legge i primi blocchi del file da disco. Controlla che i Magic Bytes siano validi, verifica che il file sia compilato per l'architettura della CPU attuale (non puoi eseguire un binario per smartphone ARM su un processore Intel x86 senza emulatore!) e ne controlla la firma crittografica digitale;</li>
          <li><strong>Stadio 3: Creazione dello Spazio di Indirizzi Virtuale (16 ms):</strong> Il Kernel genera il <strong>PCB (Process Control Block)</strong> assegnando al nuovo nato un identificatore univoco numerico: il <strong>PID (Process ID)</strong>. La MMU alloca una nuova Tabella delle Pagine vergine: per il nuovo processo si apre un gigantesco universo virtuale a 64 bit completamente privato;</li>
          <li><strong>Stadio 4: Memory-Mapped Loading (Il Trucco del Caricamento su Richiesta) (24 ms):</strong> Se un videogioco ha un file eseguibile da 500 Megabyte, il sistema operativo NON copia stupidamente tutti i 500 MB nella RAM prima di partire! Sarebbe lentissimo. Il Kernel fa <em>Memory-Mapping</em>: collega le pagine virtuali ai settori del disco SSD. I blocchi di codice verranno letti dal disco solo quando la CPU proverà a leggerli davvero per la prima volta (tramite <a href="https://it.wikipedia.org/wiki/Paginazione" target="_blank">Page Fault</a> trasparenti);</li>
          <li><strong>Stadio 5: Il Dynamic Linker e il Collegamento delle Librerie (.dll / .so) (35 ms):</strong> Quasi nessun programma moderno è un'isola autosufficiente. Per aprire finestre, suonare audio o usare la scheda video 3D, il programma dichiara di aver bisogno di librerie esterne condivise (come <code>DirectX.dll</code>, <code>kernel32.dll</code> su Windows, o <code>libc.so</code> su Linux). Un componente speciale chiamato <strong>Dynamic Linker</strong> individua queste librerie, le carica o le riutilizza se già presenti in RAM, e ricuce gli indirizzi di memoria di tutte le funzioni mancanti;</li>
          <li><strong>Stadio 6: Inizializzazione dello Stack e Salto all'Entry Point (45 ms):</strong> Il Kernel predispone il fondo dello Stack inserendo gli argomenti della riga di comando (<code>argc</code>, <code>argv</code>) e le variabili d'ambiente. Poi imposta il Program Counter della CPU sull'indirizzo dell'<strong>Entry Point</strong> (la funzione <code>main()</code>), abbassa i privilegi da Ring 0 a Ring 3 (User Space) e avvia il clock. Il processo è nato e calcola!</li>
        </ol>

        <!-- WIDGET 7.2: IL SIMULATORE DEL LOADER A RALLENTATORE -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⏱️ La Macchina del Tempo del Doppio Clic (La Pipeline del Loader in 45 ms)</span>
            <span class="widget-badge">Widget 7.2</span>
          </div>
          <div class="widget-body">
            <p>Esplora al millisecondo ogni singola tappa che trasforma un file inerte su disco in un processo attivo e calcolante sulla CPU:</p>

            <div class="loader-workbench">
              <!-- Timeline a Tappe del Loader -->
              <div class="loader-timeline" id="loaderTimelineBar">
                <!-- Populated via JS -->
              </div>

              <!-- Scheda Dettaglio Stadio Attivo -->
              <div class="loader-stage-card">
                <div class="loader-stage-top">
                  <div>
                    <span class="loader-time-badge" id="loaderTimeBadge">T = 0 ms</span>
                    <strong style="font-size: 1.05rem; margin-left: 8px;" id="loaderStageTitle">1. Shell GUI & Syscall CreateProcess()</strong>
                  </div>
                  <span class="loader-actor-badge" id="loaderActorBadge">Desktop GUI ➔ Kernel</span>
                </div>

                <div class="loader-stage-desc" id="loaderStageDesc">
                  L'utente fa doppio clic sull'icona di Minecraft.exe. L'interfaccia grafica cattura l'evento del mouse e invoca la chiamata di sistema al Kernel per richiedere la creazione di una nuova istanza.
                </div>

                <!-- Schemi grafici dei componenti interessati -->
                <div class="loader-components-status">
                  <div class="loader-comp-pill" id="lCompGui">🖥️ Desktop GUI</div>
                  <div class="loader-comp-pill" id="lCompKernel">🛡️ Kernel Space</div>
                  <div class="loader-comp-pill" id="lCompDisk">💿 Disco SSD</div>
                  <div class="loader-comp-pill" id="lCompMmu">🗺️ MMU & RAM</div>
                  <div class="loader-comp-pill" id="lCompLinker">🔗 Linker DLL</div>
                  <div class="loader-comp-pill" id="lCompCpu">⚡ CPU Core</div>
                </div>
              </div>

              <!-- Controlli Interattivi -->
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
                <button class="btn-primary" onclick="stepLoader()">Avanza Stadio (+8 ms) ⏩</button>
                <button class="btn-primary" style="background: #0284c7;" onclick="autoRunLoader()">Simula Doppio Clic a Rallentatore 🖱️</button>
                <button class="btn-primary" style="background: #475569;" onclick="resetLoader()">Riavvia da Zero ↺</button>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "7.3 La Memoria del Processo: Lo Stack vs lo Heap",
      content: `
        <h2>7.3 Il Teatro della Memoria: Lo Stack, lo Heap e i Due Grandi Mostri dei Programmatori</h2>

        <p>Una volta che il processo è vivo all'interno della memoria RAM, la sua memoria virtuale non è un calderone disordinato. Al contrario, è strutturata con una delle architetture più ingegnose e simmetriche dell'informatica:</p>

        <div class="figure-box">
          <img class="figure-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Program_memory_layout.svg/640px-Program_memory_layout.svg.png" alt="Diagramma della segmentazione della memoria di un programma (Text, Data, BSS, Heap e Stack)" loading="lazy">
          <div class="figure-caption">Organizzazione classica della memoria di un processo: il Codice in basso, l'Heap che cresce verso l'alto e lo Stack che scende dall'alto verso il basso.</div>
        </div>

        <h3>La Sfida Simmetrica: Stack vs Heap</h3>
        <ul>
          <li><strong>In Fondo (Indirizzi Bassi):</strong> Risiedono il codice immutabile (<code>.text</code>) e le variabili globali (<code>.data</code> / <code>.bss</code>);</li>
          <li><strong>Lo Heap (Il Mucchio Dinamico):</strong> Cresce dal basso <strong>VERSO L'ALTO</strong> (indirizzi crescenti). È la riserva di memoria flessibile usata per contenere strutture dati create al volo durante l'esecuzione (tramite istruzioni come <code>malloc()</code> in C o <code>new</code> in C++, Java e JavaScript). Se un gioco scarica una nuova mappa da Internet o carica una bitmap 4K, alloca spazio nell'Heap;</li>
          <li><strong>Lo Stack (La Pila di Chiamata):</strong> Cresce dalla cima <strong>VERSO IL BASSO</strong> (indirizzi decrescenti)! È un'area ultra-veloce, ordinata secondo la disciplina <strong>LIFO (Last-In, First-Out)</strong>. Ogni volta che il programma chiama una funzione, la CPU "spinge" (push) sulla pila uno <strong>Stack Frame</strong> che contiene le variabili locali della funzione, i parametri ricevuti e l'indirizzo esatto a cui tornare al termine; quando la funzione finisce, il frame viene rimosso (pop) istantaneamente;</li>
          <li><strong>La Terra di Nessuno:</strong> Al centro rimane un enorme spazio vuoto in cui lo Stack e l'Heap possono espandersi liberamente senza ostacolarsi.</li>
        </ul>

        <div class="callout-box warning">
          <div class="callout-title">💥 1. Lo Spauracchio dello "Stack Overflow"</div>
          <p>Cosa succede se un programmatore scrive una funzione ricorsiva (una funzione che richiama se stessa) dimenticando di inserire una condizione di uscita?<br>
          La funzione continua a chiamare se stessa all'infinito: ogni millisecondo vengono aggiunti centinaia di migliaia di Stack Frame. Lo Stack cresce voracemente verso il basso finché non sfonda il limite massimo consentito, invadendo la cosiddetta <strong>Guard Page</strong> (una pagina di memoria sentinella non mappata).<br>
          La MMU intercetta l'invasione ed esplode con un crash istantaneo: <strong>Stack Overflow</strong>! (Proprio da questo leggendario errore prende il nome il sito web più famoso dei programmatori del mondo!).</p>
        </div>

        <div class="callout-box history">
          <div class="callout-title">💧 2. La Piaga del "Memory Leak" e l'OOM Killer</div>
          <p>Cosa succede se invece un programma alloca continuamente nuovi blocchi di memoria nell'Heap (ad esempio ricarica un'immagine ogni secondo) ma dimentica di deallocarli e liberarli con <code>free()</code> o <code>delete</code>?<br>
          I blocchi di memoria rimangono formalmente occupati anche se nessuno li usa più. Questo bug si chiama <strong>Memory Leak (Perdita di Memoria)</strong>.<br>
          L'Heap si gonfia a dismisura fino a divorare tutti i Gigabyte di RAM del computer. Quando la memoria fisica finisce, il sistema rallenta paurosamente e il Kernel scatena un arbitro spietato: l'<strong>OOM Killer (Out Of Memory Killer)</strong>, che abbatte e uccide all'istante il programma divoratore di memoria per salvare il sistema operativo dal collasso totale!</p>
        </div>

        <!-- WIDGET 7.3: IL TEATRO DELLA MEMORIA (STACK VS HEAP) -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🎭 Il Teatro della Memoria: Simulatore Interattivo Stack vs Heap</span>
            <span class="widget-badge">Widget 7.3</span>
          </div>
          <div class="widget-body">
            <p>Sperimenta in prima persona l'anatomia della memoria in esecuzione. Chiama funzioni, alloca oggetti e scatena dal vivo i due errori più famosi della storia dell'informatica:</p>

            <div class="memory-theater-workbench">
              <div class="memory-theater-grid">
                <!-- Colonna Visiva della RAM del Processo -->
                <div class="mem-v-column">
                  <!-- Cima: Spazio Kernel Protetto -->
                  <div class="mem-v-segment" style="background: rgba(239, 68, 68, 0.15); border-color: #ef4444; color: #fca5a5;">
                    <span>TOP 0xFFFFFFFF (Spazio Riservato al Kernel)</span>
                  </div>

                  <!-- Stack Area (Cresce verso il basso) -->
                  <div class="mem-v-stack-box" id="memVisualStackBox">
                    <div class="mem-box-label" style="color: #38bdf8;">
                      <span>🔽 STACK (PILA - LIFO)</span>
                      <span id="stackPointerIndicator" style="font-family: monospace; font-size: 0.72rem;">SP: 0x7FFF...</span>
                    </div>
                    <div class="mem-frames-container" id="memFramesContainer">
                      <!-- Stack Frames Populated via JS -->
                    </div>
                  </div>

                  <!-- Spazio Libero Centrale -->
                  <div class="mem-v-free-gap" id="memFreeGapIndicator">
                    <span id="memFreeBytesLabel">MEMORIA LIBERA DISPONIBILE: ~1.850 MB</span>
                  </div>

                  <!-- Heap Area (Cresce verso l'alto) -->
                  <div class="mem-v-heap-box" id="memVisualHeapBox">
                    <div class="mem-box-label" style="color: #f59e0b;">
                      <span>🔼 HEAP (ALLOCAZIONE DINAMICA)</span>
                      <span id="heapBreakIndicator" style="font-family: monospace; font-size: 0.72rem;">brk: 0x10A0...</span>
                    </div>
                    <div class="mem-heap-container" id="memHeapContainer">
                      <!-- Heap Chunks Populated via JS -->
                    </div>
                  </div>

                  <!-- Fondo: Data e Codice Text -->
                  <div class="mem-v-segment" style="background: rgba(16, 185, 129, 0.12); border-color: #10b981; color: #86efac;">
                    <span>BASE 0x00400000 [.data Globali & .text Codice Macchina]</span>
                  </div>
                </div>

                <!-- Pannello Laterale Informativo & Crash Alert -->
                <div class="mem-sidebar-panel">
                  <div style="font-weight: bold; color: var(--text-color); margin-bottom: 8px;">
                    STATO DELLA MEMORIA DEL PROCESSO
                  </div>
                  <div class="mem-stat-row">
                    <span>Frame Attivi nello Stack:</span>
                    <strong id="statStackCount" style="color: #38bdf8;">1 (main)</strong>
                  </div>
                  <div class="mem-stat-row">
                    <span>Blocchi Allocati su Heap:</span>
                    <strong id="statHeapCount" style="color: #f59e0b;">1 blocco</strong>
                  </div>
                  <div class="mem-stat-row">
                    <span>RAM Totale Occupata:</span>
                    <strong id="statTotalMem" style="color: #10b981;">150 MB / 2048 MB</strong>
                  </div>

                  <!-- Banner di Crash Alert per Simulazioni -->
                  <div class="mem-crash-banner" id="memCrashBanner">
                    <span id="memCrashTitle">CRASH ALERT</span>
                    <p id="memCrashMessage" style="font-size: 0.78rem; margin: 4px 0 0;"></p>
                  </div>

                  <div id="memActionLog" style="font-size: 0.82rem; font-family: monospace; color: var(--text-muted); margin-top: 10px;">
                    Usa i controlli sottostanti per manipolare Stack e Heap.
                  </div>
                </div>
              </div>

              <!-- Controlli Interattivi & Esperimenti Distruttivi -->
              <div class="mem-controls-grid">
                <div class="mem-ctrl-group">
                  <div style="font-size: 0.75rem; font-weight: bold; color: #38bdf8; margin-bottom: 4px;">OPERAZIONI STACK:</div>
                  <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                    <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px;" onclick="pushStackFrame()">Chiama Funzione (Push) 📥</button>
                    <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px; background: #64748b;" onclick="popStackFrame()">Ritorna (Pop) 📤</button>
                    <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px; background: #dc2626;" onclick="triggerStackOverflow()">Scatena Stack Overflow! 💥</button>
                  </div>
                </div>

                <div class="mem-ctrl-group">
                  <div style="font-size: 0.75rem; font-weight: bold; color: #f59e0b; margin-bottom: 4px;">OPERAZIONI HEAP:</div>
                  <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                    <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px; background: #d97706;" onclick="allocHeapObject()">Alloca Memoria (malloc) 📦</button>
                    <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px; background: #059669;" onclick="freeHeapObject()">Libera Ultimo (free) 🗑️</button>
                    <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px; background: #9333ea;" onclick="triggerMemoryLeak()">Scatena Memory Leak! 💧</button>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-end;">
                  <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px; background: #334155;" onclick="resetMemoryTheater()">Ripristina Memoria ↺</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "7.4 Le Chiamate di Sistema e la Separazione dei Privilegi",
      content: `
        <h2>7.4 Le Chiamate di Sistema (Syscall) e la Porta Blindata della CPU</h2>

        <p>Come abbiamo visto, i programmi che usiamo ogni giorno girano in <strong>User Space (Ring 3)</strong>: una modalità hardware protetta in cui la CPU impedisce fisicamente qualunque accesso diretto ai registri della scheda madre, alle porte di rete o ai settori del disco fisso.</p>

        <p>Se un programma (ad esempio un editor di testo) vuole salvare un file sul disco rigido, come fa se non ha il permesso di toccare il controller del disco?</p>

        <h3>La Metafora dello Sportello Blindato</h3>
        <p>Il meccanismo è identico a quello di una banca con un caveau sotterraneo:</p>
        <ol>
          <li>Il programma applicativo prepara i parametri (il nome del file, i byte da scrivere, la cartella di destinazione);</li>
          <li>Esegue un'istruzione speciale del processore: sui moderni chip x86_64 si chiama <code>SYSCALL</code> (sui processori ARM si chiama <code>SVC</code>, Supervisor Call);</li>
          <li>Questa istruzione scatena una <strong>trappola hardware (Trap)</strong>: la CPU sospende l'esecuzione del programma utente, salva lo stato dei registri e compie un salto istantaneo di privilegio, passando in <strong>Ring 0 (Kernel Space)</strong>;</li>
          <li>Il Kernel prende in carico la richiesta e svolge severi controlli di sicurezza: <em>"L'utente ha i permessi per scrivere in questa cartella? Lo spazio su disco è sufficiente? I dati violano qualche regola di sicurezza?"</em>;</li>
          <li>Se i controlli hanno successo, il Kernel dialoga direttamente con il driver del controller SSD e scrive fisicamente i dati;</li>
          <li>Infine, il Kernel esegue l'istruzione <code>SYSRET</code>: la CPU viene retrocessa di nuovo a Ring 3 e il programma utente riprende l'esecuzione, ricevendo il codice di ritorno <code>0 (Operazione riuscita con successo!)</code>.</li>
        </ol>

        <div class="callout-box history">
          <div class="callout-title">🛡️ Perché Questa Architettura Protegge il Tuo Computer?</div>
          <p>Senza questa rigida barriera hardware tra User Space e Kernel Space, qualsiasi sito web visitato con il browser potrebbe contenere una riga di codice in grado di cancellare l'intero disco fisso o manomettere la memoria di un'altra applicazione aperta (come il tuo gestore delle password).<br>
          La combinazione di <strong>Memoria Virtuale isolata</strong>, <strong>Anelli di Privilegio della CPU</strong> e <strong>Syscall controllate</strong> è la tripla corazza su cui si fonda l'intera sicurezza dell'informatica moderna!</p>
        </div>
      `
    }
  ],
  quiz: {
    questions: [
      {
        q: "Cosa sono i 'Magic Numbers' all'inizio di un file eseguibile (es. 'MZ' per Windows o '\\x7fELF' per Linux)?",
        options: [
          { text: "Sequenze costanti di byte che consentono al sistema operativo di identificare con certezza assoluta il formato del file prima di eseguirlo", correct: true },
          { text: "Numeri casuali generati dal mouse per fare magie grafiche", correct: false },
          { text: "Password segrete che solo la NASA può decifrare", correct: false }
        ]
      },
      {
        q: "Qual è il compito del 'Loader' del sistema operativo quando l'utente fa doppio clic su un file eseguibile?",
        options: [
          { text: "Leggere gli header del file, allocare lo spazio di indirizzi virtuale privato in RAM, mappare le sezioni, collegare le librerie dinamiche e saltare all'Entry Point", correct: true },
          { text: "Riformattare l'intero disco rigido ogni volta che si apre un programma", correct: false },
          { text: "Inviare un'email di notifica a tutti gli utenti della rete Wi-Fi", correct: false }
        ]
      },
      {
        q: "Qual è la differenza strutturale principale tra Stack e Heap nella memoria di un processo?",
        options: [
          { text: "Lo Stack gestisce automaticamente con logica LIFO le variabili locali e il ritorno dalle funzioni; lo Heap è una riserva dinamica usata per allocare oggetti a runtime su richiesta esplicita", correct: true },
          { text: "Lo Stack contiene solo immagini JPEG mentre l'Heap contiene solo canzoni MP3", correct: false },
          { text: "Non c'è alcuna differenza, sono due nomi sinonimi per la scheda video", correct: false }
        ]
      },
      {
        q: "Cosa provoca fisicamente l'errore fatale di 'Stack Overflow'?",
        options: [
          { text: "Una sequenza di chiamate di funzione ricorsive senza fine che consuma tutta la memoria della pila fino a sfondare la Guard Page protetta dalla MMU", correct: true },
          { text: "La presenza di polvere all'interno della ventola di raffreddamento del processore", correct: false },
          { text: "L'apertura di troppe finestre del browser contemporaneamente", correct: false }
        ]
      }
    ]
  }
});

/* =========================================================
   LOGICA JAVASCRIPT DEI WIDGET DEL MODULO 7
   ========================================================= */

// --- WIDGET 7.1: ISPETTORE DI FILE ESEGUIBILI (HEX & SEZIONI) ---
window.executableState = {
  currentType: 'exe',
  currentSection: 'magic',
  data: {
    exe: {
      name: "SpaceInvaders.exe",
      sections: [
        { id: "magic", label: "Magic Bytes (MZ)", offset: "00000000", hex: "4D 5A 90 00 03 00 00 00", ascii: "MZ......", perms: "Header (Controllo)", desc: "Firma leggendaria di Mark Zbikowski (MZ). Certifica che il file è un eseguibile per architettura DOS/Windows PE." },
        { id: "header", label: "PE Header & Entry Point", offset: "00000080", hex: "50 45 00 00 64 86 04 00", ascii: "PE..d...", perms: "Header (Controllo)", desc: "Contiene la firma PE (Portable Executable), architettura target x86_64 e l'indirizzo dell'Entry Point: 0x00401000 (main)." },
        { id: "text", label: ".text (Istruzioni CPU)", offset: "00001000", hex: "55 48 89 E5 48 83 EC 20", ascii: "UH..H.. ", perms: "Read / Execute (R-X) ✅", desc: "Le vere istruzioni in linguaggio macchina! Inizia con 'push rbp; mov rbp, rsp' (preparazione dello stack frame della funzione main)." },
        { id: "rodata", label: ".rodata (Stringhe Costanti)", offset: "00002000", hex: "53 70 61 63 65 20 49 6E", ascii: "Space In", perms: "Read-Only (R--) ✅", desc: "Stringhe di testo fisse dell'interfaccia: 'Space Invaders v1.0', testi dei menu e costanti immutabili protette da scrittura." },
        { id: "data", label: ".data (Variabili Globali)", offset: "00003000", hex: "03 00 00 00 01 00 00 00", ascii: "........", perms: "Read / Write (R-W) ✅", desc: "Variabili globali pre-inizializzate: 'int vite = 3;' (0x03) e 'int livello_iniziale = 1;' (0x01)." },
        { id: "bss", label: ".bss (Variabili Vuote)", offset: "00004000", hex: "00 00 00 00 00 00 00 00", ascii: "........", perms: "Allocata in RAM (Zero byte su disco)", desc: "Spazio riservato per array non inizializzati. Sul disco occupa 0 byte, ma all'avvio il Loader riserva 64 KB azzerati in RAM." }
      ]
    },
    elf: {
      name: "WebServer.elf",
      sections: [
        { id: "magic", label: "Magic Bytes (\\x7fELF)", offset: "00000000", hex: "7F 45 4C 46 02 01 01 00", ascii: ".ELF....", perms: "Header (Controllo)", desc: "Firma standard Linux/Unix ELF a 64 bit (02 = 64-bit, 01 = Little-Endian, 01 = Versione ELF 1)." },
        { id: "header", label: "ELF Header & Program Table", offset: "00000040", hex: "02 00 3E 00 01 00 00 00", ascii: "..>.....", perms: "Header (Controllo)", desc: "Identifica l'architettura x86_64 (0x3E) e l'indirizzo della funzione di partenza _start: 0x00400560." },
        { id: "text", label: ".text (Codice Macchina)", offset: "00001000", hex: "31 ED 49 89 D1 5E 48 89", ascii: "1.I..^H.", perms: "Read / Execute (R-X) ✅", desc: "Codice del demone Web Server. Istruzioni assembly compilate con GCC (xor ebp, ebp; mov r9, rdx; pop rsi)." },
        { id: "rodata", label: ".rodata (Banner HTTP)", offset: "00002000", hex: "48 54 54 50 2F 31 2E 31", ascii: "HTTP/1.1", perms: "Read-Only (R--) ✅", desc: "Stringhe HTTP per le risposte web: 'HTTP/1.1 200 OK\\r\\nServer: Nginx-Mini\\r\\n'." },
        { id: "data", label: ".data (Porta & Config)", offset: "00003000", hex: "50 00 00 00 0A 00 00 00", ascii: "P.......", perms: "Read / Write (R-W) ✅", desc: "Configurazione predefinita: 'int server_port = 80;' (0x50 = 80 in decimale) e numero massimo di connessioni (0x0A = 10)." },
        { id: "bss", label: ".bss (Buffer Connessioni)", offset: "00004000", hex: "00 00 00 00 00 00 00 00", ascii: "........", perms: "Allocata in RAM (Zero byte su disco)", desc: "Buffer di ricezione socket da 1 MB azzerato al momento della nascita del processo." }
      ]
    }
  }
};

window.renderExecutableInspector = function() {
  const sectionsList = document.getElementById("exeSectionsList");
  const hexBody = document.getElementById("exeHexBody");
  const infoTitle = document.getElementById("exeInfoTitle");
  const infoDesc = document.getElementById("exeInfoDesc");
  const infoPerms = document.getElementById("exeInfoPerms");

  if (!sectionsList || !hexBody) return;

  const st = window.executableState;
  const fileData = st.data[st.currentType];

  // Render Sezioni Tabs/Chips
  sectionsList.innerHTML = "";
  fileData.sections.forEach(sec => {
    const chip = document.createElement("div");
    chip.className = `exe-sec-chip ${sec.id === st.currentSection ? "active" : ""}`;
    chip.innerHTML = `<strong>${sec.label}</strong><span style="font-size: 0.72rem; color: #94a3b8;">${sec.offset}</span>`;
    chip.onclick = () => {
      st.currentSection = sec.id;
      window.renderExecutableInspector();
    };
    sectionsList.appendChild(chip);
  });

  // Trova sezione attiva
  const activeSec = fileData.sections.find(s => s.id === st.currentSection) || fileData.sections[0];

  // Render Hex Dump (simula contesto intorno)
  let hexContent = "";
  fileData.sections.forEach(s => {
    const isAct = s.id === activeSec.id;
    hexContent += `<span class="${isAct ? "hex-row-active" : "hex-row-normal"}">${s.offset}   ${s.hex.padEnd(26, " ")}   |${s.ascii}|  <span style="color: #64748b; font-size: 0.75rem;">// ${s.label}</span></span>\n`;
  });
  hexBody.innerHTML = hexContent;

  // Render Info Card
  if (infoTitle) infoTitle.innerText = `Sezione: ${activeSec.label}`;
  if (infoDesc) infoDesc.innerText = activeSec.desc;
  if (infoPerms) infoPerms.innerText = `Permessi MMU: ${activeSec.perms}`;
};

window.switchExecutableSample = function(type) {
  window.executableState.currentType = type;
  window.executableState.currentSection = "magic";
  const btnExe = document.getElementById("btnTabExe");
  const btnElf = document.getElementById("btnTabElf");
  if (btnExe) btnExe.classList.toggle("active", type === 'exe');
  if (btnElf) btnElf.classList.toggle("active", type === 'elf');
  window.renderExecutableInspector();
};

// --- WIDGET 7.2: LA MACCHINA DEL TEMPO DEL DOPPIO CLIC ---
window.loaderState = {
  currentStage: 0,
  autoInterval: null,
  stages: [
    {
      time: "T = 0 ms",
      title: "1. Shell GUI & Syscall CreateProcess()",
      actor: "Desktop GUI ➔ Kernel",
      desc: "L'utente compie il doppio clic col mouse sull'icona. L'interfaccia grafica cattura l'evento e invoca la chiamata di sistema (CreateProcess o fork+execve) consegnando il percorso del file su disco.",
      activeComps: ["lCompGui", "lCompKernel"]
    },
    {
      time: "T = 8 ms",
      title: "2. Ispezione Header & Verifica Architettura",
      actor: "Kernel Space ➔ Disco SSD",
      desc: "Il Kernel legge i primi 4096 byte da disco. Verifica i Magic Bytes ('MZ' o '\\x7fELF'), controlla che il processore sia compatibile (x86_64) e valida la firma digitale di sicurezza del file.",
      activeComps: ["lCompKernel", "lCompDisk"]
    },
    {
      time: "T = 16 ms",
      title: "3. Spazio Virtuale & Assegnazione PID",
      actor: "Kernel ➔ MMU & Tabella Pagine",
      desc: "Viene allocato il Process Control Block (PCB) con un nuovo Process ID univoco (es. PID 4821). La MMU genera una Tabella delle Pagine vuota per isolare il processo dagli altri programmi.",
      activeComps: ["lCompKernel", "lCompMmu"]
    },
    {
      time: "T = 24 ms",
      title: "4. Memory-Mapped File (Paging su Richiesta)",
      actor: "Kernel ➔ MMU & Disco SSD",
      desc: "Il Kernel NON copia l'intero file in RAM! Mappa solo le sezioni (.text, .rodata, .data) sulle pagine virtuali. I blocchi fisici verranno letti solo al primo accesso effettivo della CPU.",
      activeComps: ["lCompMmu", "lCompDisk"]
    },
    {
      time: "T = 35 ms",
      title: "5. Dynamic Linker & Collegamento DLL (.so)",
      actor: "Dynamic Linker (ld-linux / ntdll)",
      desc: "Il programma dichiara di usare librerie condivise (DirectX.dll, kernel32.dll, libc.so). Il Linker Dinamico individua le librerie in memoria e collega gli indirizzi delle chiamate a funzione.",
      activeComps: ["lCompLinker", "lCompMmu"]
    },
    {
      time: "T = 45 ms",
      title: "6. Configurazione Stack & Salto al main()!",
      actor: "Kernel ➔ CPU Core (Ring 3)",
      desc: "Il Kernel prepara lo Stack iniziale con argc e argv, imposta il Program Counter della CPU sull'Entry Point (funzione main), declassa i privilegi a Ring 3 e avvia l'esecuzione. Il processo è vivo!",
      activeComps: ["lCompKernel", "lCompCpu"]
    }
  ]
};

window.renderLoaderPipeline = function() {
  const timelineBar = document.getElementById("loaderTimelineBar");
  const timeBadge = document.getElementById("loaderTimeBadge");
  const stageTitle = document.getElementById("loaderStageTitle");
  const actorBadge = document.getElementById("loaderActorBadge");
  const stageDesc = document.getElementById("loaderStageDesc");

  if (!timelineBar || !stageTitle) return;

  const ls = window.loaderState;
  const cur = ls.stages[ls.currentStage];

  // Render Timeline Bar Dots
  timelineBar.innerHTML = "";
  ls.stages.forEach((stg, idx) => {
    const dot = document.createElement("div");
    dot.className = `loader-time-node ${idx === ls.currentStage ? "active" : ""} ${idx < ls.currentStage ? "completed" : ""}`;
    dot.title = stg.title;
    dot.innerHTML = `<span>${stg.time.split(" ")[2]}</span>`;
    dot.onclick = () => {
      ls.currentStage = idx;
      if (ls.autoInterval) { clearInterval(ls.autoInterval); ls.autoInterval = null; }
      window.renderLoaderPipeline();
    };
    timelineBar.appendChild(dot);
  });

  // Render Card
  if (timeBadge) timeBadge.innerText = cur.time;
  if (stageTitle) stageTitle.innerText = cur.title;
  if (actorBadge) actorBadge.innerText = cur.actor;
  if (stageDesc) stageDesc.innerText = cur.desc;

  // Active Components Highlighting
  const compIds = ["lCompGui", "lCompKernel", "lCompDisk", "lCompMmu", "lCompLinker", "lCompCpu"];
  compIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (cur.activeComps.includes(id)) {
        el.classList.add("comp-active");
      } else {
        el.classList.remove("comp-active");
      }
    }
  });
};

window.stepLoader = function() {
  const ls = window.loaderState;
  if (ls.currentStage < ls.stages.length - 1) {
    ls.currentStage++;
  } else {
    ls.currentStage = 0;
  }
  window.renderLoaderPipeline();
};

window.autoRunLoader = function() {
  const ls = window.loaderState;
  if (ls.autoInterval) {
    clearInterval(ls.autoInterval);
    ls.autoInterval = null;
    return;
  }
  if (ls.currentStage >= ls.stages.length - 1) {
    ls.currentStage = 0;
  }
  window.renderLoaderPipeline();
  ls.autoInterval = setInterval(() => {
    if (ls.currentStage < ls.stages.length - 1) {
      ls.currentStage++;
      window.renderLoaderPipeline();
    } else {
      clearInterval(ls.autoInterval);
      ls.autoInterval = null;
    }
  }, 1000);
};

window.resetLoader = function() {
  const ls = window.loaderState;
  if (ls.autoInterval) { clearInterval(ls.autoInterval); ls.autoInterval = null; }
  ls.currentStage = 0;
  window.renderLoaderPipeline();
};

// --- WIDGET 7.3: IL TEATRO DELLA MEMORIA (STACK VS HEAP) ---
window.memoryState = {
  stackFrames: [
    { name: "main(argc, argv)", sizeKb: 32, vars: "vite=3, score=0" }
  ],
  heapObjects: [
    { name: "ConfigTabella [0x10A0]", sizeKb: 120 }
  ],
  crashState: null, // null | 'overflow' | 'leak'
  leakInterval: null
};

window.renderMemoryTheater = function() {
  const framesContainer = document.getElementById("memFramesContainer");
  const heapContainer = document.getElementById("memHeapContainer");
  const statStack = document.getElementById("statStackCount");
  const statHeap = document.getElementById("statHeapCount");
  const statTotal = document.getElementById("statTotalMem");
  const crashBanner = document.getElementById("memCrashBanner");
  const crashTitle = document.getElementById("memCrashTitle");
  const crashMessage = document.getElementById("memCrashMessage");
  const freeLabel = document.getElementById("memFreeBytesLabel");
  const actionLog = document.getElementById("memActionLog");

  if (!framesContainer || !heapContainer) return;

  const ms = window.memoryState;

  // Render Stack Frames
  framesContainer.innerHTML = "";
  ms.stackFrames.forEach((fr, idx) => {
    const el = document.createElement("div");
    el.className = "mem-stack-frame-chip";
    el.innerHTML = `
      <div style="font-weight: bold; color: #38bdf8;">#${idx}: ${fr.name}</div>
      <div style="font-size: 0.72rem; color: #94a3b8;">${fr.vars} (${fr.sizeKb} KB)</div>
    `;
    framesContainer.appendChild(el);
  });

  // Render Heap Chunks
  heapContainer.innerHTML = "";
  ms.heapObjects.forEach((hp, idx) => {
    const el = document.createElement("div");
    el.className = "mem-heap-chunk-chip";
    el.innerHTML = `
      <div style="font-weight: bold; color: #f59e0b;">${hp.name}</div>
      <div style="font-size: 0.72rem; color: #94a3b8;">${hp.sizeKb} KB</div>
    `;
    heapContainer.appendChild(el);
  });

  // Stats
  const stackMemKb = ms.stackFrames.reduce((acc, f) => acc + f.sizeKb, 0);
  const heapMemKb = ms.heapObjects.reduce((acc, h) => acc + h.sizeKb, 0);
  const totalMb = Math.round((stackMemKb + heapMemKb + 10000) / 1024); // baseline codice

  if (statStack) statStack.innerText = `${ms.stackFrames.length} frame attivi`;
  if (statHeap) statHeap.innerText = `${ms.heapObjects.length} blocchi allocati`;
  if (statTotal) statTotal.innerText = `${totalMb} MB / 2048 MB allocati`;
  if (freeLabel) freeLabel.innerText = `MEMORIA LIBERA DISPONIBILE: ~${Math.max(0, 2048 - totalMb)} MB`;

  // Crash banner
  if (crashBanner) {
    if (ms.crashState === 'overflow') {
      crashBanner.className = "mem-crash-banner show crash-overflow";
      if (crashTitle) crashTitle.innerText = "🚨 HARDWARE TRAP: STACK OVERFLOW RILEVATO!";
      if (crashMessage) crashMessage.innerText = "La pila delle funzioni ha sfondato la Guard Page! Ricorsione infinita intercettata dalla MMU. Il Kernel ha terminato il processo per prevenire la corruzione di memoria.";
    } else if (ms.crashState === 'leak') {
      crashBanner.className = "mem-crash-banner show crash-leak";
      if (crashTitle) crashTitle.innerText = "⚠️ KERNEL OOM KILLER: PROCESSO TERMINATO!";
      if (crashMessage) crashMessage.innerText = "Perdita di memoria incontrollata (Memory Leak): l'Heap ha divorato tutta la RAM disponibile (2048 MB)! L'Out-Of-Memory Killer del Kernel ha abbattuto il processo per salvare il sistema operativo.";
    } else {
      crashBanner.className = "mem-crash-banner";
    }
  }
};

window.pushStackFrame = function() {
  const ms = window.memoryState;
  if (ms.crashState) return;

  const funcNames = [
    { name: "calcolaPunteggio(giocatore)", vars: "punti=140, bonus=2" },
    { name: "aggiornaGrafica(delta)", vars: "frame=60, render=true" },
    { name: "controllaCollisioni(nemico)", vars: "dist=12.4, col=false" },
    { name: "riproduciEffettoAudio(id)", vars: "vol=0.8, snd=laser.wav" }
  ];
  const nextFn = funcNames[ms.stackFrames.length % funcNames.length];
  ms.stackFrames.push({ name: nextFn.name, sizeKb: 64, vars: nextFn.vars });

  const actionLog = document.getElementById("memActionLog");
  if (actionLog) actionLog.innerHTML = `📥 <strong>PUSH FRAME:</strong> Chiamata a funzione <code>${nextFn.name}</code>. Lo Stack Pointer (SP) scende verso il basso allocando 64 KB.`;

  window.renderMemoryTheater();
};

window.popStackFrame = function() {
  const ms = window.memoryState;
  if (ms.crashState) return;

  if (ms.stackFrames.length > 1) {
    const popped = ms.stackFrames.pop();
    const actionLog = document.getElementById("memActionLog");
    if (actionLog) actionLog.innerHTML = `📤 <strong>POP FRAME:</strong> Funzione <code>${popped.name}</code> terminata. Lo Stack Pointer sale verso l'alto liberando istantaneamente 64 KB.`;
    window.renderMemoryTheater();
  } else {
    const actionLog = document.getElementById("memActionLog");
    if (actionLog) actionLog.innerText = "Non puoi rimuovere il frame di main(): è la radice del processo!";
  }
};

window.allocHeapObject = function() {
  const ms = window.memoryState;
  if (ms.crashState) return;

  const heapNames = [
    { name: "Texture2D [0x2A40]", sizeKb: 180 },
    { name: "BufferAudio [0x3B80]", sizeKb: 240 },
    { name: "Modello3D [0x4C10]", sizeKb: 320 },
    { name: "AlberoNemici [0x5D20]", sizeKb: 150 }
  ];
  const nextObj = heapNames[ms.heapObjects.length % heapNames.length];
  ms.heapObjects.push({ name: nextObj.name, sizeKb: nextObj.sizeKb });

  const actionLog = document.getElementById("memActionLog");
  if (actionLog) actionLog.innerHTML = `📦 <strong>HEAP ALLOC (malloc):</strong> Riservati ${nextObj.sizeKb} KB per <code>${nextObj.name}</code>. Il limite superiore dell'Heap (brk) sale verso l'alto.`;

  window.renderMemoryTheater();
};

window.freeHeapObject = function() {
  const ms = window.memoryState;
  if (ms.crashState) return;

  if (ms.heapObjects.length > 0) {
    const freed = ms.heapObjects.pop();
    const actionLog = document.getElementById("memActionLog");
    if (actionLog) actionLog.innerHTML = `🗑️ <strong>HEAP FREE:</strong> Liberata memoria per <code>${freed.name}</code> (${freed.sizeKb} KB). Spazio restituito al sistema.`;
    window.renderMemoryTheater();
  }
};

window.triggerStackOverflow = function() {
  const ms = window.memoryState;
  if (ms.leakInterval) { clearInterval(ms.leakInterval); ms.leakInterval = null; }

  // Simula ricorsione infinita a raffica
  for (let i = 0; i < 9; i++) {
    ms.stackFrames.push({ name: `ricorsioneInfinita(profondità=${i + 1})`, sizeKb: 128, vars: "errore_nessun_caso_base" });
  }
  ms.crashState = 'overflow';
  window.renderMemoryTheater();
};

window.triggerMemoryLeak = function() {
  const ms = window.memoryState;
  if (ms.leakInterval) { clearInterval(ms.leakInterval); ms.leakInterval = null; }

  // Alloca blocchi heap a raffica fino a saturazione
  for (let i = 0; i < 12; i++) {
    ms.heapObjects.push({ name: `LeakBlocco_${i} [0x${(1000 + i * 40).toString(16)}]`, sizeKb: 350 });
  }
  ms.crashState = 'leak';
  window.renderMemoryTheater();
};

window.resetMemoryTheater = function() {
  const ms = window.memoryState;
  if (ms.leakInterval) { clearInterval(ms.leakInterval); ms.leakInterval = null; }
  window.memoryState = {
    stackFrames: [
      { name: "main(argc, argv)", sizeKb: 32, vars: "vite=3, score=0" }
    ],
    heapObjects: [
      { name: "ConfigTabella [0x10A0]", sizeKb: 120 }
    ],
    crashState: null,
    leakInterval: null
  };
  const actionLog = document.getElementById("memActionLog");
  if (actionLog) actionLog.innerText = "Memoria del processo ripristinata allo stato iniziale.";
  window.renderMemoryTheater();
};

// Inizializza widget al caricamento
setTimeout(() => {
  if (typeof renderExecutableInspector === 'function') renderExecutableInspector();
  if (typeof renderLoaderPipeline === 'function') renderLoaderPipeline();
  if (typeof renderMemoryTheater === 'function') renderMemoryTheater();
}, 200);
