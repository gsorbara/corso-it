(window.courseData = window.courseData || []).push({
  id: 6,
  title: "6. Il Sistema Operativo & Grandi Famiglie",
  keyRequired: "KERNEL-OS-505",
  nextKey: "EXEC-PROCESS-707",
  submodules: [
    {
      title: "6.1 Il Paradosso del Bootstrapping: ROM, BIOS/UEFI e il Risveglio del PC",
      content: `
        <h2>6.1 Il Paradosso del Bootstrapping: Come Fa un Computer a Svegliarsi da Solo?</h2>

        <p>Immagina di essere addormentato in un sonno così profondo da aver dimenticato perfino come si fa a pensare, chi sei e come si muovono le braccia. Come faresti a svegliarti se non hai la capacità di decidere di farlo?</p>

        <p>Questo è esattamente il gigantesco <strong>paradosso dell'uovo e della gallina</strong> che si presenta ogni volta che premiamo il tasto di accensione di un computer:</p>
        <ul>
          <li>La memoria di lavoro principale, la <strong>RAM</strong>, è volatile: a computer spento la tensione elettrica è 0 Volt. All'interno della RAM c'è solo il vuoto assoluto o una sequenza caotica di rumore elettronico casuale;</li>
          <li>Il microprocessore (la <strong>CPU</strong>) sa fare una sola cosa al mondo: leggere un'istruzione binaria dalla memoria, decodificarla ed eseguirla;</li>
          <li>Il sistema operativo (Windows, macOS o Linux) si trova memorizzato come un file gigante sull'unità a stato solido (SSD) o sul disco rigido;</li>
          <li><strong>Il dilemma:</strong> La CPU non sa come comunicare con un disco SSD né conosce il formato dei file (file system). Per imparare a leggere il disco ha bisogno del sistema operativo... ma il sistema operativo è sul disco e non può entrare nella RAM senza che la CPU lo legga!</li>
        </ul>

        <div class="callout-box history">
          <div class="callout-title">👢 L'Origine Incredibile della Parola "Boot"</div>
          <p>Il termine informatico <strong>Boot</strong> (o <em>Bootstrapping</em>) deriva da un antico modo di dire inglese del XVIII secolo: <em>"To pull oneself up by one's own bootstraps"</em> (sollevarsi da terra tirandosi su per i lacci dei propri stivali).<br>
          È un'impresa fisicamente impossibile nel mondo reale (come volare tirandosi i capelli), ma nel mondo dei computer descrive perfettamente il miracolo tecnologico con cui una macchina completamente inerte riesce a sollevare se stessa dal nulla e diventare intelligente in una manciata di secondi!</p>
        </div>

        <h3>La Soluzione Hardware: La ROM e il "Reset Vector"</h3>
        <p>Come hanno risolto gli ingegneri questo paradosso?</p>
        <p>Hanno saldato sulla scheda madre un piccolo chip speciale a stato solido chiamato <a href="https://it.wikipedia.org/wiki/Read_Only_Memory" target="_blank">ROM (Read-Only Memory)</a> o <strong>Memoria Flash</strong>. A differenza della RAM, la ROM non dimentica nulla quando togli la corrente elettrica: i bit sono incisi in modo permanente nel silicio.</p>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-06/bios-chip.jpg" alt="Chip BIOS ROM su scheda madre per personal computer" loading="lazy">
          <div class="figure-caption">Un chip BIOS su una scheda madre per PC: la "scintilla vitale" permanente che contiene le prime istruzioni eseguite dalla CPU all'accensione.</div>
        </div>

        <p>La sequenza di risveglio elettrico segue una coreografia rigidissima:</p>
        <ol>
          <li><strong>Segnale Power Good:</strong> Quando premi il tasto Power, l'alimentatore stabilizza le tensioni a +12V, +5V e +3.3V. Quando la corrente è perfetta, invia un segnale elettrico alla scheda madre chiamato <code>POWER GOOD</code>;</li>
          <li><strong>Il Reset Vector:</strong> Ricevuto il segnale, la CPU si "sveglia" dallo stato di reset. I progettisti del processore hanno cablato nel silicio una regola scolpita nella pietra: al primo ciclo di clock, il contatore delle istruzioni (Program Counter) punta <strong>sempre e invariabilmente a uno specifico indirizzo fisico</strong> (sui chip Intel/AMD x86 è l'indirizzo <code>0xFFFFFFF0</code>);</li>
          <li><strong>La Mappa sulla ROM:</strong> Le piste della scheda madre collegano quell'indirizzo direttamente al chip della ROM! La CPU, senza nemmeno sapere che la RAM esiste ancora, inizia a leggere le primissime istruzioni impresse sulla ROM: il <a href="https://it.wikipedia.org/wiki/BIOS" target="_blank">BIOS</a> o il moderno <a href="https://it.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface" target="_blank">UEFI</a>.</li>
        </ol>

        <h3>Il POST (Power-On Self-Test) e i Beep Code</h3>
        <p>La prima cosa che fa il BIOS/UEFI non è caricare Windows o Linux, ma fare un controllo medico approfondito dell'hardware, chiamato <a href="https://it.wikipedia.org/wiki/Power-on_self-test" target="_blank">POST (Power-On Self-Test)</a>:</p>
        <ul>
          <li>Verifica l'integrità del proprio codice calcolando un checksum matematico;</li>
          <li>Testa la memoria RAM scrivendo e rileggendo pattern di bit per assicurarsi che i banchi di memoria siano sani;</li>
          <li>Inizializza la scheda video, la tastiera e i canali di storage;</li>
          <li>Se qualcosa è rotto (ad esempio se un banco di RAM non fa contatto o la scheda video è guasta), lo schermo non può ancora accendersi! La scheda madre usa allora un piccolo altoparlante (buzzer) per comunicare tramite una serie di <strong>Beep Code (segnali acustici)</strong>: ad esempio, 1 beep breve significa "Tutto OK", mentre 3 beep lunghi indicano un guasto critico alla memoria RAM!</li>
        </ul>

        <h3>Dalla Partizione di Boot al Kernel</h3>
        <p>Superato il test POST, il BIOS consulta la propria lista di priorità (SSD NVMe, porta USB, disco esterno o rete):</p>
        <ol>
          <li>Legge il primo blocco del disco: il <strong>Master Boot Record (MBR)</strong> storico (512 byte che terminano con la firma magica <code>0x55AA</code>) o la moderna <strong>partizione EFI</strong>;</li>
          <li>In quel blocco trova il <a href="https://it.wikipedia.org/wiki/Bootloader" target="_blank">Bootloader</a> (come <strong>GRUB</strong> su Linux o <strong>Windows Boot Manager</strong> su Windows);</li>
          <li>Il BIOS copia il bootloader nella memoria RAM appena testata e gli cede le redini della CPU;</li>
          <li>Il Bootloader è un software sofisticato: riconosce i dischi veloci e i file system, localizza il file compresso del <strong>Kernel</strong> (es. <code>vmlinuz</code> su Linux o <code>ntoskrnl.exe</code> su Windows), lo decomprime riversandolo nella RAM e salta al suo indirizzo d'ingresso;</li>
          <li>Il Kernel prende il comando supremo: attiva la modalità a 64 bit protetta (<a href="https://it.wikipedia.org/wiki/Ring_(sicurezza_informatica)" target="_blank">Ring 0</a>), accende la memoria virtuale e genera il primissimo processo utente del mondo: <strong>PID 1</strong> (come <code>systemd</code> o <code>launchd</code>), che fa comparire la schermata di login. Il computer è pronto!</li>
        </ol>

        <!-- WIDGET 6.1: IL SIMULATORE DEL BOOTSTRAPPING -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚡ Simulatore del Bootstrapping: Dall'Interruttore al Desktop</span>
            <span class="widget-badge">Widget 6.1</span>
          </div>
          <div class="widget-body">
            <p>Vivi in tempo reale il risveglio di un computer. Osserva come la CPU, guidata dalla ROM permanente, collauda la RAM ed esegue il bootloader fino a consegnare il sistema allo spazio utente:</p>

            <div class="boot-workbench">
              <!-- Barra di Avanzamento Fasi -->
              <div class="boot-stepper-track" id="bootStepperTrack">
                <!-- Generata via JS: Step 0 a Step 6 -->
              </div>

              <!-- Griglia Hardware dei 4 Nodi Chiave -->
              <div class="boot-hardware-grid">
                <!-- CPU Node -->
                <div class="boot-hw-node" id="nodeCpu">
                  <div class="boot-node-header">
                    <span>🧠 CPU (PROCESSORE)</span>
                    <span class="boot-node-badge" id="cpuBadgeMode">OFF</span>
                  </div>
                  <div class="boot-node-detail" id="cpuDetailText">Tensione 0V. Nessun ciclo di clock attivo.</div>
                </div>

                <!-- ROM / Flash BIOS Node -->
                <div class="boot-hw-node" id="nodeRom">
                  <div class="boot-node-header">
                    <span>💾 ROM FLASH (BIOS/UEFI)</span>
                    <span class="boot-node-badge" id="romBadgeMode">INATTIVA</span>
                  </div>
                  <div class="boot-node-detail" id="romDetailText">Memoria permanente non-volatile pronta all'alimentazione.</div>
                </div>

                <!-- RAM Node -->
                <div class="boot-hw-node" id="nodeRam">
                  <div class="boot-node-header">
                    <span>⚡ RAM (MEMORIA VOLATILE)</span>
                    <span class="boot-node-badge" id="ramBadgeMode">VUOTA (0V)</span>
                  </div>
                  <div class="boot-node-detail" id="ramDetailText">Celle capacitive prive di carica. Nessun dato memorizzato.</div>
                </div>

                <!-- SSD / Storage Node -->
                <div class="boot-hw-node" id="nodeStorage">
                  <div class="boot-node-header">
                    <span>💿 DISCO SSD (STORAGE)</span>
                    <span class="boot-node-badge" id="storageBadgeMode">STANDBY</span>
                  </div>
                  <div class="boot-node-detail" id="storageDetailText">Contiene partizione EFI, Bootloader GRUB e immagine Kernel.</div>
                </div>
              </div>

              <!-- Terminale CRT Retro di Boot -->
              <div class="boot-screen-monitor">
                <div class="boot-monitor-header">
                  <span class="boot-led-dot" id="bootMonitorLed"></span>
                  <span>MONITOR DI SISTEMA // CONSOLE DI BOOT TTY0</span>
                  <span id="bootStageTitleBadge" style="color: #38bdf8; font-weight: bold;">STATO: COMPUTER SPENTO</span>
                </div>
                <pre class="boot-monitor-output" id="bootMonitorText">[SISTEMA SPENTO] Premi 'Avanza Passo di Boot' o 'Avvio Automatico' per accendere l'alimentatore.</pre>
              </div>

              <!-- Controlli Interattivi -->
              <div class="boot-controls-row">
                <button class="btn-primary" onclick="stepBootSequence()">Avanza Passo di Boot ⏩</button>
                <button class="btn-primary" style="background: #0284c7;" onclick="autoRunBootSequence()">Avvio Automatico 🚀</button>
                <button class="btn-primary" style="background: #dc2626;" onclick="triggerBootError('ram')">Simula Guasto POST (Errore RAM!) ⚠️</button>
                <button class="btn-primary" style="background: #d97706;" onclick="triggerBootError('no-disk')">Simula Disco Assente 💽</button>
                <button class="btn-primary" style="background: #475569;" onclick="resetBootSequence()">Riavvia da Zero ↺</button>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "6.2 Il Direttore d'Orchestra & L'Albero Genealogico",
      content: `
        <h2>6.2 Perché Serve un Sistema Operativo? Dalla Preistoria al Time-Sharing</h2>

        <p>L'hardware nudo di un calcolatore è fatto di pura elettronica: circuiti integrati, segnali di tensione e registri di silicio. Un microprocessore non sa che cosa sia una "cartella", una "finestra", un "file PDF" o una "connessione Wi-Fi".</p>

        <p>Negli anni '50, prima della nascita dei sistemi operativi, i computer funzionavano a <strong>elaborazione a lotti (Batch Processing)</strong>: un programmatore consegnava un pacco di schede perforate a un operatore umano; la macchina eseguiva quel singolo programma dall'inizio alla fine, usando il 100% dell'hardware. Se il programma conteneva un errore e si bloccava in un ciclo infinito, l'intero computer rimaneva congelato per ore finché un tecnico non premeva fisicamente il pulsante rosso di emergenza!</p>

        <p>La svolta avvenne nei primi anni '60 al MIT con il pioniere <a href="https://it.wikipedia.org/wiki/Fernando_Corbató" target="_blank">Fernando Corbató</a>, che inventò il <strong>Time-Sharing (condivisione del tempo)</strong>: l'idea che un software centrale potesse fare da mediatore invisibile, dividendo il tempo della CPU tra dozzine di utenti e programmi simultanei. Nacque così il concetto moderno di <a href="https://it.wikipedia.org/wiki/Sistema_operativo" target="_blank">Sistema Operativo</a> (OS).</p>

        <h3>L'Albero Genealogico: La Rivoluzione di Unix (1969)</h3>
        <p>Nel 1969, ai Bell Labs della AT&T, due leggendari informatici di nome <a href="https://it.wikipedia.org/wiki/Ken_Thompson" target="_blank">Ken Thompson</a> e <a href="https://it.wikipedia.org/wiki/Dennis_Ritchie" target="_blank">Dennis Ritchie</a> (che inventò anche il linguaggio C) crearono <a href="https://it.wikipedia.org/wiki/Unix" target="_blank">Unix</a>. Unix introdusse principi di design così eleganti da essere ancora oggi il pilastro su cui si regge l'intera informatica mondiale:</p>
        <ul>
          <li><strong>La Regola "Fai una cosa sola e falla bene":</strong> Invece di programmi monolitici giganteschi, Unix è composto da decine di strumenti piccoli e specializzati che possono essere combinati a piacere;</li>
          <li><strong>"Tutto è un File" (Everything is a file):</strong> In Unix, non solo i documenti di testo sono file, ma anche una stampante, la tastiera, la scheda audio e la connessione di rete vengono letti e scritti come semplici flussi di byte!</li>
        </ul>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-06/thompson-ritchie-1973.jpg" alt="Ken Thompson e Dennis Ritchie davanti al PDP-11 ai Bell Labs (1973)" loading="lazy">
          <div class="figure-caption">Dennis Ritchie e Ken Thompson: i leggendari padri di Unix e del linguaggio C ai Bell Labs.</div>
        </div>

        <div class="callout-box history">
          <div class="callout-title">🐧 Linus Torvalds e la Favola di Linux (1991)</div>
          <p>Il 25 agosto 1991, uno studente ventunenne dell'Università di Helsinki di nome <a href="https://it.wikipedia.org/wiki/Linus_Torvalds" target="_blank">Linus Torvalds</a> pubblicò un timido messaggio su un gruppo di discussione online: <em>"Sto realizzando un sistema operativo libero (solo un hobby, non sarà grande e professionale come GNU) per cloni AT 386..."</em>.<br>
          Quel messaggio diede vita a <strong>Linux</strong>, un kernel libero e <a href="https://it.wikipedia.org/wiki/Open_source" target="_blank">open source</a> (a codice aperto). Sviluppatori di tutto il mondo iniziarono a collaborare volontariamente per migliorarlo.<br>
          Oggi Linux muove il <strong>100% dei 500 supercomputer più potenti del pianeta</strong>, l'intera infrastruttura del Cloud di Google, Amazon e Microsoft, e più di 3 miliardi di smartphone attraverso il sistema operativo <a href="https://it.wikipedia.org/wiki/Android" target="_blank">Android</a>!</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-06/linus-torvalds.jpg" alt="Linus Torvalds, creatore del kernel Linux" loading="lazy">
          <div class="figure-caption">Linus Torvalds: nel 1991 creò il kernel Linux, oggi spina dorsale di Internet, dei server globali e di Android.</div>
        </div>

        <h3>Le Due Grandi Famiglie Commerciali: Windows e macOS</h3>
        <ul>
          <li><a href="https://it.wikipedia.org/wiki/Microsoft_Windows" target="_blank">Microsoft Windows</a>: Nato come interfaccia sopra l'MS-DOS e rifondato con l'architettura moderna di <em>Windows NT</em>, ha conquistato oltre il 70% dei computer desktop del mondo puntando sulla <strong>compatibilità universale</strong>: gira su centinaia di migliaia di combinazioni diverse di schede madri e schede video, mantenendo una leggendaria retrocompatibilità con software scritti decenni fa;</li>
          <li><a href="https://it.wikipedia.org/wiki/MacOS" target="_blank">Apple macOS</a>: Basato su solide fondamenta Unix (il kernel Darwin / BSD), segue la filosofia opposta dell'<strong>integrazione verticale chiusa</strong>: Apple progetta sia l'hardware (processori Apple Silicon) sia il sistema operativo, garantendo un'altissima efficienza energetica e una perfetta fluidità grafica.</li>
        </ul>
      `
    },
    {
      title: "6.3 Il Kernel, i Processi e il Multitasking Preemptive",
      content: `
        <h2>6.3 Il Cuore del Sistema: Il Kernel e la Gestione dei Processi</h2>

        <p>Il cuore pulsante del sistema operativo si chiama <a href="https://it.wikipedia.org/wiki/Kernel" target="_blank">Kernel</a>. È il primo software caricato in memoria RAM durante l'accensione (il <em>boot</em>) e l'ultimo a spegnersi.</p>

        <h3>Programma vs Processo: Una Differenza Vitale</h3>
        <p>Spesso usiamo le parole "programma" e "processo" come sinonimi, ma in informatica indicano due cose profondamente diverse:</p>
        <ul>
          <li>Un <strong>Programma</strong> è un'entità statica e inerte: è un file salvato sul disco o sull'SSD (come <code>minecraft.exe</code> o <code>chrome</code>), fatto di byte addormentati;</li>
          <li>Un <strong>Processo</strong> è un'entità dinamica e viva: è il programma nel momento esatto in cui viene caricato nella RAM e attivamente eseguito dal processore. Un processo possiede il proprio spazio di memoria, i propri registri della CPU, lo stack e un identificatore numerico univoco chiamato <strong>PID (Process ID)</strong>. Puoi aprire lo stesso programma 3 volte: avrai 1 file su disco ma 3 processi distinti in esecuzione!</li>
        </ul>

        <div class="callout-box history">
          <div class="callout-title">💥 Multitasking Cooperativo vs Preemptive (La Fine dei Freeze Totali)</div>
          <p>Nei vecchi sistemi degli anni '80 e '90 (come Windows 3.1 o il Mac OS classico), il multitasking era <strong>Cooperativo</strong>: il sistema operativo chiedeva gentilmente a ciascun programma: <em>"Per favore, quando hai finito di calcolare, cedi la CPU al prossimo?"</em>. Se un programma andava in tilt in un ciclo infinito e si rifiutava di cedere il turno, <strong>l'intero computer si bloccava</strong> e l'unica soluzione era togliere la corrente!<br>
          I sistemi moderni (Windows NT, Linux, macOS) usano il <strong>Multitasking Preemptive (con prelazione)</strong>: il Kernel è un sovrano assoluto. Grazie a un timer hardware della scheda madre che scatta ogni pochi millisecondi, il Kernel <strong>strappa con la forza la CPU</strong> al processo in corso e la assegna al successivo. Anche se un programma crasha o si blocca al 100%, il mouse si muove e il resto del PC continua a funzionare perfettamente!</p>
        </div>

        <h3>Gli Stati di un Processo e lo Scheduler Round-Robin</h3>
        <p>In ogni istante, un processo attraversa diversi stati operativi:</p>
        <ol>
          <li><strong>PRONTO (Ready):</strong> Il processo ha tutto ciò che gli serve ed è in coda in attesa del suo turno sulla CPU;</li>
          <li><strong>IN ESECUZIONE (Running):</strong> La CPU sta attivamente eseguendo le sue istruzioni;</li>
          <li><strong>IN ATTESA (Waiting / Blocked):</strong> Il processo si è fermato volontariamente perché è in attesa di un evento lento di I/O (ad esempio aspetta che arrivi un pacchetto dalla rete Wi-Fi o che l'utente prema un tasto).</li>
        </ol>

        <p>Il componente del Kernel che decide chi ha diritto alla CPU si chiama <a href="https://it.wikipedia.org/wiki/Scheduler" target="_blank">Scheduler</a>. Il metodo più celebre è il <strong>Round-Robin</strong>: assegna a ogni processo una fettina di tempo microscopica chiamata <strong>Quanto di Tempo (Time Slice)</strong>, tipicamente di appena <strong>5-10 millisecondi</strong>. Passando freneticamente da un processo all'altro centinaia di volte al secondo, la CPU crea l'illusione perfetta che musica, chat e videogiochi stiano girando nello stesso istante!</p>

        <!-- WIDGET 6.2: SIMULATORE DELLO SCHEDULER MULTITASKING -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⏱️ Simulatore Interattivo dello Scheduler Multitasking (Round-Robin)</span>
            <span class="widget-badge">Widget 6.2</span>
          </div>
          <div class="widget-body">
            <p>Osserva come il Kernel alterna i processi sulla CPU in fette di tempo da 5 ms. Premi <strong>Passo di Time-Slice</strong> o simula un blocco di rete I/O:</p>

            <div class="scheduler-workbench">
              <div class="sched-lanes-grid">
                <!-- Coda Pronti -->
                <div class="sched-lane-box">
                  <div class="sched-lane-title">
                    <span>CODA DEI PRONTI (READY)</span>
                    <span id="readyCountBadge" style="color: #3b82f6;">2 Processi</span>
                  </div>
                  <div id="readyQueueContainer" style="display: flex; flex-direction: column; gap: 6px;">
                    <!-- Rendered via JS -->
                  </div>
                </div>

                <!-- Slot CPU Running -->
                <div class="sched-lane-box" style="border-color: #3b82f6; background: rgba(59, 130, 246, 0.05);">
                  <div class="sched-lane-title">
                    <span style="color: #3b82f6;">CPU ATTIVA (RUNNING)</span>
                    <span style="font-size: 0.72rem; color: #10b981;">CORE #0</span>
                  </div>
                  <div id="cpuRunningSlot" style="flex: 1; display: flex; align-items: center; justify-content: center;">
                    <!-- Rendered via JS -->
                  </div>
                </div>

                <!-- Coda In Attesa (I/O) -->
                <div class="sched-lane-box">
                  <div class="sched-lane-title">
                    <span>IN ATTESA (WAITING I/O)</span>
                    <span id="waitingCountBadge" style="color: #f59e0b;">0 Processi</span>
                  </div>
                  <div id="waitingQueueContainer" style="display: flex; flex-direction: column; gap: 6px;">
                    <!-- Rendered via JS -->
                  </div>
                </div>
              </div>

              <!-- Cronologia Gantt dei Time Slices -->
              <div class="sched-gantt-container">
                <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 6px; font-weight: bold;">
                  TIMELINE DELLA CPU (Fette di tempo da 5 ms ciascuna):
                </div>
                <div class="sched-gantt-bar" id="schedGanttBar">
                  <!-- Slices Populated via JS -->
                </div>
              </div>

              <div id="schedStepLog" style="font-size: 0.84rem; font-family: monospace; color: var(--text-muted);">
                Premi 'Passo di Time-Slice' per cedere la CPU al processo successivo nella coda.
              </div>
            </div>

            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
              <button class="btn-primary" onclick="stepSchedulerSlice()">Passo di Time-Slice (5 ms) ⏩</button>
              <button class="btn-primary" style="background: #f59e0b;" onclick="toggleIoBlockCurrent()">Simula Attesa Download I/O 🌐</button>
              <button class="btn-primary" style="background: #475569;" onclick="resetSchedulerSimulator()">Resetta Scheduler ↺</button>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "6.4 Memoria Virtuale, MMU e la Protezione (Addio Schermata Blu)",
      content: `
        <h2>6.4 Memoria Virtuale, MMU e il Mito del "Segmentation Fault"</h2>

        <p>Nei primi personal computer con MS-DOS, ogni programma caricato in memoria poteva liberamente leggere e sovrascrivere <strong>qualsiasi cella fisica della RAM</strong>. Se un videogioco aveva un bug e scriveva per sbaglio all'indirizzo dove risiedeva il sistema operativo, il computer andava in crash istantaneo con schermate illeggibili!</p>

        <p>Nei sistemi operativi moderni questo non può più accadere grazie a una tecnologia straordinaria: la <a href="https://it.wikipedia.org/wiki/Memoria_virtuale" target="_blank">Memoria Virtuale</a>.</p>

        <h3>L'Illusione Perfetta e la MMU Hardware</h3>
        <p>Nessun programma moderno (né Chrome, né Word, né un videogioco) conosce gli indirizzi reali della RAM fisica del tuo computer:</p>
        <ul>
          <li>A ciascun processo viene data l'<strong>illusione</strong> di avere a disposizione uno spazio di memoria continuo, gigante e privato, che parte da zero (da <code>0x00000000</code> fino a valori astronomici);</li>
          <li>All'interno della CPU c'è un componente hardware specializzato chiamato <strong>MMU (Memory Management Unit)</strong>: a ogni singola lettura o scrittura, la MMU consulta una tabella gestita dal Kernel chiamata <strong>Tabella delle Pagine (Page Table)</strong> e traduce istantaneamente l'indirizzo virtuale nell'indirizzo fisico reale della RAM;</li>
          <li>Due programmi possono credere entrambi di scrivere all'indirizzo virtuale <code>0x0040</code>: la MMU mapperà il primo programma sul blocco fisico di RAM #12 e il secondo sul blocco fisico #89, impedendo totalmente che possano toccarsi o spiarsi!</li>
        </ul>

        <h3>Il Paging e il File di Swap</h3>
        <p>Cosa succede se il tuo computer ha 16 GB di RAM fisica ma apri così tanti programmi e schede del browser da occuparne 20 GB?</p>
        <p>Il sistema operativo non va in crash: attiva il <a href="https://it.wikipedia.org/wiki/Paginazione" target="_blank">Paging (Paginazione)</a>. Il Kernel prende le pagine di memoria dei programmi che sono aperti ma minimizzati in background (e che non usi da mezz'ora) e le "parcheggia" temporaneamente su un'area nascosta del disco SSD chiamata <strong>File di Swap (o file di Paging)</strong>. Quando riapri quella finestra, il Kernel scambia di nuovo le pagine con la RAM!</p>

        <div class="callout-box history">
          <div class="callout-title">🚨 Cos'è un "Segmentation Fault" (Segfault / Access Violation)?</div>
          <p>Tutti i programmatori hanno visto comparire prima o poi il temuto messaggio <em>"Segmentation Fault (core dumped)"</em> in Linux o <em>"Access Violation 0xC0000005"</em> in Windows.<br>
          Che cosa significa? Significa che il programma ha tentato di accedere a un indirizzo di memoria che non gli appartiene (ad esempio una pagina riservata a un altro processo o allo spazio sacro del Kernel).<br>
          Nel momento esatto in cui l'indirizzo proibito tocca la MMU, la MMU blocca l'operazione elettrica e lancia una <strong>trappola hardware (Hardware Exception)</strong> al Kernel. Il Kernel interviene come un poliziotto severo e <strong>termina all'istante solo il programma colpevole</strong>, proteggendo la stabilità di tutti gli altri programmi e del sistema!</p>
        </div>

        <!-- WIDGET 6.3: SIMULATORE MEMORIA VIRTUALE E SEGFAULT -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🛡️ Simulatore della MMU: Memoria Virtuale & Protezione dai Crash</span>
            <span class="widget-badge">Widget 6.3</span>
          </div>
          <div class="widget-body">
            <p>Osserva come la MMU traduce gli indirizzi virtuali isolando i processi. Prova a eseguire un accesso legittimo oppure simula un tentativo di violazione illegale per vedere scattare il Segfault:</p>

            <div class="mmu-workbench">
              <div class="mmu-layout-grid">
                <!-- Spazio Virtuale App 1 -->
                <div class="mmu-box" id="boxVirtMem">
                  <div class="mmu-box-title" style="color: #3b82f6;">1. SPAZIO VIRTUALE (APP 1)</div>
                  <div class="mmu-table-row" id="vRow0"><span>Pagina 0 [0x00]</span> <span>Codice</span></div>
                  <div class="mmu-table-row" id="vRow1"><span>Pagina 1 [0x10]</span> <span>Dati App</span></div>
                  <div class="mmu-table-row" id="vRow2"><span>Pagina 2 [0x20]</span> <span>Stack</span></div>
                  <div class="mmu-table-row" style="color: #ef4444; border-color: #ef4444;" id="vRowIllegal"><span>Pagina 9 [0x99]</span> <span>PROIBITA!</span></div>
                </div>

                <!-- Tabella delle Pagine MMU -->
                <div class="mmu-box" style="border-color: #10b981;">
                  <div class="mmu-box-title" style="color: #10b981;">2. MMU: TRADUZIONE PAGINE</div>
                  <div class="mmu-table-row" id="mmuRow0"><span>Pag 0 ➔ RAM Frame #14</span> <span>R/X ✅</span></div>
                  <div class="mmu-table-row" id="mmuRow1"><span>Pag 1 ➔ RAM Frame #22</span> <span>R/W ✅</span></div>
                  <div class="mmu-table-row" id="mmuRow2"><span>Pag 2 ➔ RAM Frame #08</span> <span>R/W ✅</span></div>
                  <div class="mmu-table-row" style="color: #ef4444;" id="mmuRowFault"><span>Pag 9 ➔ NON ASSEGNATA</span> <span>TRAP ⛔</span></div>
                </div>

                <!-- RAM Fisica Reale -->
                <div class="mmu-box" id="boxPhysMem">
                  <div class="mmu-box-title" style="color: #8b5cf6;">3. RAM FISICA REALE</div>
                  <div class="mmu-table-row" id="pRow08"><span>Frame #08</span> <span>[Dati App 1]</span></div>
                  <div class="mmu-table-row" id="pRow14"><span>Frame #14</span> <span>[Codice App 1]</span></div>
                  <div class="mmu-table-row" id="pRow22"><span>Frame #22</span> <span>[Stack App 1]</span></div>
                  <div class="mmu-table-row" style="color: #f59e0b;"><span>Frame #99</span> <span>[KERNEL PRIVATO]</span></div>
                </div>
              </div>

              <!-- Banner Segfault Alert -->
              <div class="segfault-alert-banner" id="segfaultAlertBanner">
                🚨 <strong>HARDWARE TRAP: SEGMENTATION FAULT (SIGSEGV - SEGNALE 11) RILEVATO!</strong><br>
                L'applicazione ha tentato di accedere alla Pagina 9 non mappata o protetta. La MMU ha intercettato la violazione fisica! <br>
                <em>Azione del Kernel: Processo terminato in sicurezza con codice di errore (Exit 139). Il resto del sistema rimane al 100% integro e stabile!</em>
              </div>

              <div id="mmuActionLog" style="font-size: 0.84rem; font-family: monospace; color: var(--text-muted); margin-top: 6px;">
                Seleziona un'operazione per testare la traduzione della MMU.
              </div>
            </div>

            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
              <button class="btn-primary" onclick="simulateMmuAccess('valid')">Accesso Legittimo (Scrivi su Pagina 1) ✅</button>
              <button class="btn-primary" style="background: #dc2626;" onclick="simulateMmuAccess('illegal')">Accesso Illegale (Scrivi su Pagina Proibita 9) 🚨</button>
              <button class="btn-primary" style="background: #475569;" onclick="resetMmuSimulator()">Resetta ↺</button>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "6.5 Privilegi della CPU (Ring 0 vs Ring 3), Syscall e la Pipeline Unix",
      content: `
        <h2>6.5 I Livelli di Protezione: Kernel Space vs User Space</h2>

        <p>I microprocessori moderni (come i chip Intel x86 o ARM degli smartphone) contengono a livello hardware diversi <strong>Anelli di Privilegio (Privilege Rings)</strong>:</p>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-06/cpu-privilege-rings.svg" alt="Diagramma degli Anelli di Privilegio della CPU (Ring 0 vs Ring 3)" loading="lazy" style="object-fit: contain;">
          <div class="figure-caption">Anelli di privilegio della CPU: Ring 0 al centro con privilegi assoluti (Kernel Space), e Ring 3 all'esterno per le applicazioni ordinarie (User Space).</div>
        </div>

        <h3>I Due Mondi Separati</h3>
        <ul>
          <li><strong>Ring 0 - Kernel Space (Modalità Supervisore):</strong> È il santuario centrale dove risiede il Kernel e i driver di dispositivo. Qui la CPU esegue istruzioni privilegiate senza alcun limite: può riprogrammare la MMU, disabilitare gli interrupt hardware e impartire ordini diretti a dischi, schede di rete e chip;</li>
          <li><strong>Ring 3 - User Space (Spazio Utente):</strong> È la "gabbia dorata" dove girano tutti i normali programmi applicativi (il browser, WhatsApp, Spotify, i videogiochi). In Ring 3 la CPU <strong>vieta categoricamente</strong> l'accesso diretto all'hardware. Se un'app cerca di inviare un comando diretto al disco rigido, la CPU blocca l'istruzione al volo!</li>
        </ul>

        <h3>La Metafora dello Sportello Bancario: La Chiamata di Sistema (Syscall)</h3>
        <p>Se un'applicazione in User Space non può toccare l'hardware, come fa a salvare un file sul disco SSD, emettere un suono dagli altoparlanti o aprire una connessione a Internet?</p>
        <p>Funziona esattamente come una <strong>Banca con una cassaforte blindata</strong>:</p>
        <ol>
          <li>Tu (il programma in User Space) non puoi entrare liberamente nel caveau a prendere i soldi;</li>
          <li>Devi avvicinarti allo sportello blindato e fare una richiesta formale all'impiegato consegnando i tuoi documenti: questa richiesta si chiama <a href="https://it.wikipedia.org/wiki/Chiamata_di_sistema" target="_blank">Chiamata di Sistema (Syscall)</a>;</li>
          <li>La CPU compie un passaggio controllato da Ring 3 a Ring 0;</li>
          <li>L'impiegato della banca (il Kernel) verifica i tuoi permessi (ad esempio: <em>"Questo utente ha il diritto di scrivere in questa cartella?"</em>). Se la risposta è sì, il Kernel entra nella cassaforte, scrive il file sull'SSD per tuo conto, e torna allo sportello consegnandoti la ricevuta con il codice <code>OK (0)</code>!</li>
        </ol>

        <h3>La Magia delle Pipe Unix (Il Carattere <code>|</code>)</h3>
        <p>Nel 1964, il ricercatore Douglas McIlroy propose un'idea geniale che divenne il cuore della filosofia Unix: <em>"Dovremmo avere modi di collegare programmi insieme come tubi dell'acqua da giardino: quando troviamo un modo di far fluire l'informazione in un altro canale, lo colleghiamo!"</em>.</p>
        <p>Nacque così la <strong>Pipe (Tubo, simbolo <code>|</code>)</strong>: un meccanismo che prende l'output testuale di un programma e lo riversa istantaneamente come input del programma successivo, senza dover salvare file temporanei sul disco!</p>

        <!-- WIDGET 6.4: IL LABORATORIO DELLA PIPELINE UNIX -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🧪 Laboratorio della Pipeline Unix: Componi il Tuo Tubo di Dati</span>
            <span class="widget-badge">Widget 6.4</span>
          </div>
          <div class="widget-body">
            <p>Seleziona i comandi e la combinazione di pipe per filtrare una lista grezza di log di gioco in tempo reale:</p>

            <div class="pipe-workbench">
              <div style="font-size: 0.8rem; font-weight: bold; color: #94a3b8;">
                COMANDO PIPELINE IN COSTRUZIONE:
              </div>

              <div class="pipe-stages-row" id="pipeStagesRow">
                <span class="pipe-stage-chip">cat punteggi.txt</span>
                <span class="pipe-char">|</span>
                <span class="pipe-stage-chip" id="pipeFilterChip">grep "VITTORIA"</span>
                <span class="pipe-char">|</span>
                <span class="pipe-stage-chip" id="pipeSortChip">sort</span>
              </div>

              <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 6px;">
                RISULTATO A TERMINALE (STDOUT):
              </div>
              <div class="pipe-terminal-preview" id="pipeTerminalOutput">
[CARICAMENTO DATI]...
              </div>
            </div>

            <!-- Controlli Pipeline -->
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
              <button class="btn-primary" style="font-size: 0.82rem; padding: 6px 12px;" onclick="setPipeFilter('VITTORIA')">Filtra: grep 'VITTORIA' 🏆</button>
              <button class="btn-primary" style="font-size: 0.82rem; padding: 6px 12px; background: #dc2626;" onclick="setPipeFilter('SCONFITTA')">Filtra: grep 'SCONFITTA' 💀</button>
              <button class="btn-primary" style="font-size: 0.82rem; padding: 6px 12px; background: #059669;" onclick="setPipeFilter('TUTTI')">Mostra Tutti (Senza Filtro) 📜</button>
              <button class="btn-primary" style="font-size: 0.82rem; padding: 6px 12px; background: #8b5cf6;" onclick="togglePipeSort()">Inverti Ordinamento (sort -r) ↕️</button>
            </div>
          </div>
        </div>
      `
    }
  ],
  quiz: {
    questions: [
      {
        q: "Qual è il 'paradosso del bootstrapping' all'accensione del computer e come viene superato a livello hardware e firmware?",
        options: [
          { text: "La RAM all'avvio è vuota e volatile, quindi la CPU non ha codice da eseguire; l'hardware risolve il problema impostando il Program Counter sul 'Reset Vector', che punta alla memoria permanente ROM/Flash contenente il firmware BIOS/UEFI", correct: true },
          { text: "Lo scheduler del Kernel alloca preventivamente il processo speciale 'init' nello spazio di swap su disco prima ancora che la CPU riceva alimentazione", correct: false },
          { text: "Il controller DMA carica autonomamente il bootloader dall'MBR direttamente nei registri dell'ALU bypassando il bus degli indirizzi", correct: false },
          { text: "La CPU accede direttamente alla tabella delle partizioni GPT tramite microcodice per identificare il Kernel prima di inizializzare il clock", correct: false }
        ]
      },
      {
        q: "Qual è la differenza fondamentale tra Multitasking Cooperativo e Multitasking Preemptive nella gestione della CPU?",
        options: [
          { text: "Nel cooperativo ogni processo riceve un quanto di tempo fisso calcolato dallo scheduler Round Robin, mentre nel preemptive i processi girano ininterrottamente fino alla loro terminazione", correct: false },
          { text: "Nel preemptive i thread comunicano unicamente tramite memoria condivisa senza semafori, mentre nel cooperativo è obbligatorio l'uso di pipe per ogni context switch", correct: false },
          { text: "Nel cooperativo il cambio di contesto (context switch) è gestito direttamente dall'hardware della MMU senza coinvolgere il codice del Kernel", correct: false },
          { text: "Nel cooperativo i processi decidono autonomamente quando rilasciare il controllo della CPU (rischio di freeze totale se un'app va in loop infinito); nel preemptive lo scheduler del Kernel interrompe forzatamente i thread tramite interrupt di timer hardware periodici", correct: true }
        ]
      },
      {
        q: "Cosa avviene a livello hardware e di sistema operativo durante un evento di 'Page Fault' nella gestione della Memoria Virtuale?",
        options: [
          { text: "La CPU genera un'eccezione irreversibile di Segmentation Fault e termina immediatamente il processo poiché la memoria protetta è stata violata", correct: false },
          { text: "La MMU rileva che la pagina richiesta ha il bit di presenza a 0 e solleva un'eccezione hardware: il Kernel sospende il processo, legge la pagina dall'area di Swap su disco, la alloca in un frame libero di RAM, aggiorna la Page Table e riavvia l'istruzione", correct: true },
          { text: "Il controller della memoria RAM ricalcola gli indirizzi convertendo dinamicamente le pagine virtuali in blocchi continui di memoria cache L3", correct: false },
          { text: "Lo scheduler assegna un intervallo temporale supplementare al thread per consentirgli di completare l'operazione in sola lettura", correct: false }
        ]
      },
      {
        q: "Perché i moderni sistemi operativi e processori isolano l'esecuzione tra User Space (Ring 3) e Kernel Space (Ring 0), imponendo le Syscall?",
        options: [
          { text: "Per garantire sicurezza e stabilità: le app in Ring 3 non possono accedere direttamente all'hardware o alla memoria altrui; solo il codice del Kernel in Ring 0 possiede i privilegi per manipolare i registri hardware dopo aver validato la richiesta", correct: true },
          { text: "Perché le chiamate di funzione ordinarie non possono allocare parametri nello stack, costringendo i programmi a usare le Syscall per eseguire calcoli aritmetici", correct: false },
          { text: "Perché il cambio di contesto da Ring 3 a Ring 0 azzera la memoria RAM liberando risorse per i processi ad alta priorità", correct: false },
          { text: "Perché in Ring 3 la CPU disabilita il controller delle interruzioni per impedire allo scheduler di eseguire il multitasking preemptive", correct: false }
        ]
      },
      {
        q: "Nel file system dei sistemi operativi Unix/Linux, quale ruolo architetturale svolge la struttura nota come 'Inode' (Index Node)?",
        options: [
          { text: "Rappresenta la voce della tabella dei file aperti (file descriptor table) che tiene traccia dell'offset del cursore di lettura del processo", correct: false },
          { text: "È il blocco di 'Superblock' che memorizza la dimensione complessiva della partizione e la geometria dei cilindri del disco", correct: false },
          { text: "Memorizza tutti i metadati del file (permessi, proprietario, timestamp, dimensione) e i puntatori ai blocchi dati fisici su disco, rimanendo separato dal nome del file che risiede invece nella directory", correct: true },
          { text: "È un file speciale di dispositivo (device node) montato nella cartella virtuale /proc per esporre le statistiche del Kernel", correct: false }
        ]
      }
    ]
  }
});

/* =========================================================
   LOGICA JAVASCRIPT DEI WIDGET DEL MODULO 6
   ========================================================= */

// --- WIDGET 6.1: SIMULATORE DEL BOOTSTRAPPING (DALL'INTERRUTTORE AL DESKTOP) ---
window.bootState = {
  currentStep: 0,
  autoInterval: null,
  errorMode: null,
  steps: [
    {
      id: 0,
      title: "STATO: STANDBY / SPENTO",
      badgeMode: "POWER OFF",
      cpuMode: "OFF (0V)",
      cpuDesc: "Nessuna tensione elettrica. Pin RESET attivo a massa.",
      romMode: "INATTIVA",
      romDesc: "Memoria permanente saldata su scheda madre a riposo.",
      ramMode: "VUOTA (0V)",
      ramDesc: "Celle capacitive prive di carica elettrica.",
      storageMode: "STANDBY",
      storageDesc: "Canali PCIe/SATA inattivi.",
      ledColor: "#64748b",
      logText: "[SISTEMA IN STANDBY - 0 VOLT]\nPremi 'Avanza Passo di Boot' o 'Avvio Automatico' per premere l'interruttore Power."
    },
    {
      id: 1,
      title: "1. POWER ON & RESET VECTOR",
      badgeMode: "POWER GOOD",
      cpuMode: "16-BIT REAL MODE",
      cpuDesc: "Ricevuto segnale POWER GOOD! La CPU imposta Program Counter su 0xFFFFFFF0.",
      romMode: "ATTIVA (MAPPATA)",
      romDesc: "L'indirizzo 0xFFFFFFF0 mappa sul chip Flash: inizia l'esecuzione del codice BIOS/UEFI!",
      ramMode: "ALIMENTATA",
      ramDesc: "RAM riceve alimentazione ma contiene dati caotici casuali.",
      storageMode: "INIZIALIZZAZIONE",
      storageDesc: "Handshake iniziale dei controller di storage.",
      ledColor: "#f59e0b",
      logText: ">> [T=0.00s] POWER ON DETECTED: Linee +12V, +5V, +3.3V stabilizzate.\n>> Alimentatore invia segnale 'POWER GOOD' alla scheda madre.\n>> CPU esce dallo stato di reset. Program Counter fisso cablato -> 0xFFFFFFF0.\n>> Bus di sistema redirige l'indirizzo direttamente al chip ROM Flash.\n>> Esecuzione istruzioni primordiali del Firmware (BIOS/UEFI)..."
    },
    {
      id: 2,
      title: "2. ROM BIOS / UEFI & DIAGNOSTICA POST",
      badgeMode: "POST DIAGNOSTICS",
      cpuMode: "16-BIT REAL MODE",
      cpuDesc: "La CPU esegue le routine POST: controlla se stessa, registri, controller DMA e bus.",
      romMode: "ESECUZIONE POST",
      romDesc: "Verifica checksum integrità firmware e configurazione CMOS.",
      ramMode: "TEST BANCHI OK",
      ramDesc: "Test pattern di scrittura/lettura completato: 16 GB DDR5 perfettamente integri!",
      storageMode: "RICERCA PERIFERICHE",
      storageDesc: "Rilevata unità NVMe SSD Samsung 990 PRO 1TB.",
      ledColor: "#3b82f6",
      logText: ">> [T=0.45s] BIOS Version 3.12 (C) American Megatrends Inc.\n>> CPU: Intel Core / AMD Ryzen (8 Cores, 16 Threads) @ 3.8 GHz OK.\n>> POST Memory Test: 16.384 MB DDR5 verificati senza errori [OK].\n>> Bus PCIe 4.0 link x16 negoziato con successo.\n>> Buzzer scheda madre: *BEEP* (1 segnale breve = Tutti i componenti sani!).\n>> Inizializzazione display video e tastiera USB."
    },
    {
      id: 3,
      title: "3. RICERCA SUPPORTO DI AVVIO (BOOT DEVICE)",
      badgeMode: "BOOT SCAN",
      cpuMode: "16-BIT REAL MODE",
      cpuDesc: "La CPU consulta l'elenco prioritario di boot configurato nel BIOS.",
      romMode: "LETTURA BOOT SECTOR",
      romDesc: "Ispezione primo settore disco (MBR 512 byte o partizione EFI).",
      ramMode: "BUFFER PRIMARIO",
      ramDesc: "Riservati i primi 640 KB di RAM per accogliere il settore di avvio.",
      storageMode: "LETTURA PARTIZIONE",
      storageDesc: "Trovata partizione EFI System con firma valida (0x55AA / FAT32)!",
      ledColor: "#8b5cf6",
      logText: ">> [T=0.90s] Selezione periferica di avvio da tabella delle priorità...\n>> Scansione 1: Porta USB-0 -> Nessun supporto.\n>> Scansione 2: NVMe SSD (/dev/nvme0n1) -> Trovata Partizione EFI di Sistema!\n>> Lettura settore di avvio: rilevato magic number di boot (0x55AA).\n>> Trovato file eseguibile del Bootloader (GRUB 2.06 / EFI/boot/bootx64.efi).\n>> Copia del Bootloader dal disco alla memoria RAM..."
    },
    {
      id: 4,
      title: "4. ESECUZIONE DEL BOOTLOADER (GRUB)",
      badgeMode: "BOOTLOADER RUNNING",
      cpuMode: "32-BIT PROTECTED",
      cpuDesc: "La CPU cede il comando al Bootloader. Salto fuori dal firmware BIOS.",
      romMode: "FIRMWARE COMPLETATO",
      romDesc: "Il BIOS conclude il suo lavoro e passa in secondo piano.",
      ramMode: "CARICAMENTO KERNEL",
      ramDesc: "Il Bootloader carica in RAM il file compresso del Kernel (vmlinuz) e l'initramfs.",
      storageMode: "STREAMING KERNEL",
      storageDesc: "Lettura ad alta velocità dell'immagine binaria del sistema operativo.",
      ledColor: "#06b6d4",
      logText: ">> [T=1.30s] GNU GRUB version 2.06 avviato in memoria RAM.\n>> Lettura configurazione /boot/grub/grub.cfg...\n>> Caricamento Kernel compresso: /boot/vmlinuz-6.8.0-generic in RAM.\n>> Caricamento disco ramdisk iniziale: /boot/initrd.img-6.8.0...\n>> Decompressione Kernel in memoria RAM all'indirizzo protetto 0x1000000...\n>> Bootloader esegue il salto finale all'Entry Point del Kernel!"
    },
    {
      id: 5,
      title: "5. RISVEGLIO DEL KERNEL & SWITCH IN RING 0",
      badgeMode: "RING 0 KERNEL",
      cpuMode: "64-BIT LONG MODE",
      cpuDesc: "Il Kernel assume il controllo supremo: attiva la MMU e la modalità Ring 0.",
      romMode: "DISATTIVATA",
      romDesc: "Nessun ruolo rimasto: il Kernel parla direttamente all'hardware.",
      ramMode: "PAGINAZIONE MMU",
      ramDesc: "Inizializzata tabella delle pagine (Page Table). Attivata Memoria Virtuale.",
      storageMode: "ROOT FS MONTATO",
      storageDesc: "Montato il File System radice '/' con permessi read/write.",
      ledColor: "#10b981",
      logText: ">> [T=1.80s] [  0.000000] Linux version 6.8.0 (root@kernel.org) x86_64.\n>> [  0.021000] CPU: Passaggio a 64-bit Long Mode completato con successo.\n>> [  0.054000] MMU: Tabelle delle pagine a 4 livelli (PML4) attivate.\n>> [  0.110000] Memory: 16.298.496K disponibili, spazio Kernel isolato.\n>> [  0.250000] Caricamento driver hardware: Scheda di rete, GPU, Audio, NVMe.\n>> [  0.420000] Montaggio File System radice (EXT4 su nvme0n1p2) completato.\n>> [  0.550000] Kernel lancia il primissimo processo utente: PID 1 (systemd)!"
    },
    {
      id: 6,
      title: "6. SPAZIO UTENTE, PID 1 E LOGIN DESKTOP",
      badgeMode: "DESKTOP ATTIVO",
      cpuMode: "RING 3 (USER SPACE)",
      cpuDesc: "Multitasking preemptive attivo! La CPU alterna centinaia di processi utente.",
      romMode: "A RIPOSO",
      romDesc: "Disattivata fino al prossimo riavvio.",
      ramMode: "USER SPACE ALLOCATO",
      ramDesc: "Caricate le applicazioni utente: Display Server, Audio Daemon, Shell grafica.",
      storageMode: "OPERATIVO",
      storageDesc: "Pronto alle richieste di lettura e scrittura dei processi.",
      ledColor: "#22c55e",
      logText: ">> [T=2.20s] [  0.890000] systemd[1]: Avvio dei servizi di sistema completato.\n>> [  1.020000] Avvio del server grafico Wayland / Desktop Manager...\n>> [  1.200000] Interfaccia grafica caricata su schermo.\n====================================================================\n          BENVENUTO NEL SISTEMA OPERATIVO! ACCESSO PRONTO.\n===================================================================="
    }
  ]
};

window.renderBootSequence = function() {
  const stepperTrack = document.getElementById("bootStepperTrack");
  const cpuBadge = document.getElementById("cpuBadgeMode");
  const cpuDetail = document.getElementById("cpuDetailText");
  const romBadge = document.getElementById("romBadgeMode");
  const romDetail = document.getElementById("romDetailText");
  const ramBadge = document.getElementById("ramBadgeMode");
  const ramDetail = document.getElementById("ramDetailText");
  const storageBadge = document.getElementById("storageBadgeMode");
  const storageDetail = document.getElementById("storageDetailText");
  const stageBadge = document.getElementById("bootStageTitleBadge");
  const monitorText = document.getElementById("bootMonitorText");
  const ledDot = document.getElementById("bootMonitorLed");

  if (!stepperTrack || !monitorText) return;

  const b = window.bootState;
  const cur = b.steps[b.currentStep];

  // Render Stepper dots
  stepperTrack.innerHTML = "";
  b.steps.forEach((st, idx) => {
    const dot = document.createElement("div");
    dot.className = `boot-step-dot ${idx === b.currentStep ? "active" : ""} ${idx < b.currentStep ? "completed" : ""}`;
    dot.title = st.title;
    dot.innerHTML = `<span>${idx}</span>`;
    dot.onclick = () => {
      b.currentStep = idx;
      b.errorMode = null;
      if (b.autoInterval) { clearInterval(b.autoInterval); b.autoInterval = null; }
      window.renderBootSequence();
    };
    stepperTrack.appendChild(dot);
  });

  // Render Hardware Cards
  if (cpuBadge) cpuBadge.innerText = cur.cpuMode;
  if (cpuDetail) cpuDetail.innerText = cur.cpuDesc;
  if (romBadge) romBadge.innerText = cur.romMode;
  if (romDetail) romDetail.innerText = cur.romDesc;
  if (ramBadge) ramBadge.innerText = cur.ramMode;
  if (ramDetail) ramDetail.innerText = cur.ramDesc;
  if (storageBadge) storageBadge.innerText = cur.storageMode;
  if (storageDetail) storageDetail.innerText = cur.storageDesc;

  // Active highlights
  const nodeCpu = document.getElementById("nodeCpu");
  const nodeRom = document.getElementById("nodeRom");
  const nodeRam = document.getElementById("nodeRam");
  const nodeStorage = document.getElementById("nodeStorage");

  [nodeCpu, nodeRom, nodeRam, nodeStorage].forEach(n => {
    if (n) n.classList.remove("node-active", "node-error");
  });

  if (b.errorMode === 'ram' && nodeRam) {
    nodeRam.classList.add("node-error");
  } else if (b.errorMode === 'no-disk' && nodeStorage) {
    nodeStorage.classList.add("node-error");
  } else {
    if (b.currentStep >= 1 && nodeCpu) nodeCpu.classList.add("node-active");
    if ((b.currentStep === 1 || b.currentStep === 2 || b.currentStep === 3) && nodeRom) nodeRom.classList.add("node-active");
    if (b.currentStep >= 2 && nodeRam) nodeRam.classList.add("node-active");
    if (b.currentStep >= 3 && nodeStorage) nodeStorage.classList.add("node-active");
  }

  // Monitor text & LED
  if (stageBadge) stageBadge.innerText = cur.title;
  if (ledDot) ledDot.style.background = cur.ledColor;
  monitorText.innerText = cur.logText;
  monitorText.scrollTop = monitorText.scrollHeight;
};

window.stepBootSequence = function() {
  const b = window.bootState;
  b.errorMode = null;
  if (b.currentStep < b.steps.length - 1) {
    b.currentStep++;
  } else {
    b.currentStep = 0;
  }
  window.renderBootSequence();
};

window.autoRunBootSequence = function() {
  const b = window.bootState;
  b.errorMode = null;
  if (b.autoInterval) {
    clearInterval(b.autoInterval);
    b.autoInterval = null;
    return;
  }
  if (b.currentStep >= b.steps.length - 1) {
    b.currentStep = 0;
  }
  window.renderBootSequence();
  b.autoInterval = setInterval(() => {
    if (b.currentStep < b.steps.length - 1) {
      b.currentStep++;
      window.renderBootSequence();
    } else {
      clearInterval(b.autoInterval);
      b.autoInterval = null;
    }
  }, 1200);
};

window.triggerBootError = function(type) {
  const b = window.bootState;
  if (b.autoInterval) { clearInterval(b.autoInterval); b.autoInterval = null; }
  b.errorMode = type;

  const monitorText = document.getElementById("bootMonitorText");
  const stageBadge = document.getElementById("bootStageTitleBadge");
  const ledDot = document.getElementById("bootMonitorLed");

  if (type === 'ram') {
    b.currentStep = 2;
    window.renderBootSequence();
    if (stageBadge) stageBadge.innerText = "🚨 ERRORE POST: GUASTO MEMORIA RAM!";
    if (ledDot) ledDot.style.background = "#ef4444";
    if (monitorText) {
      monitorText.innerText = `>> [T=0.52s] BIOS Version 3.12 (C) American Megatrends Inc.\n>> CPU: Intel / AMD Processore OK.\n>> POST Memory Test: ERRORE CRITICO SUL BANCO #0!\n>> Mancata risposta dai moduli DDR5 (Tensione anomala o chip danneggiato).\n>> Buzzer Scheda Madre: *BEEP* *BEEP* *BEEP* (3 segnali acustici lunghi!)\n>> [SYSTEM HALTED]: Impossibile procedere! La CPU non può caricare alcun sistema operativo senza memoria RAM funzionante.`;
    }
  } else if (type === 'no-disk') {
    b.currentStep = 3;
    window.renderBootSequence();
    if (stageBadge) stageBadge.innerText = "🚨 ERRORE BOOT: NESSUN DISCO AVVIABILE!";
    if (ledDot) ledDot.style.background = "#ef4444";
    if (monitorText) {
      monitorText.innerText = `>> [T=0.98s] POST Hardware completato con successo (RAM 16GB OK).\n>> Scansione periferiche di boot: [USB -> Vuota, NVMe SSD -> Non risponde, Rete -> Assente]\n>> ERRORE 0x0000000E: Nessun settore di avvio con firma 0x55AA o partizione EFI trovato!\n>> Reboot and Select proper Boot device or Insert Boot Media in selected Boot device.\n>> [SYSTEM HALTED]: Inserisci una chiavetta USB con l'installer del sistema operativo per proseguire.`;
    }
  }
};

window.resetBootSequence = function() {
  const b = window.bootState;
  if (b.autoInterval) { clearInterval(b.autoInterval); b.autoInterval = null; }
  b.currentStep = 0;
  b.errorMode = null;
  window.renderBootSequence();
};

// --- WIDGET 6.2: SIMULATORE SCHEDULER MULTITASKING ---
window.schedulerState = {
  quantumMs: 5,
  sliceCount: 0,
  processes: [
    { id: 101, name: "Spotify 🎵", status: "RUNNING", color: "#10b981", cpuTime: 0 },
    { id: 102, name: "Browser Web 🌐", status: "READY", color: "#3b82f6", cpuTime: 0 },
    { id: 103, name: "Minecraft 🎮", status: "READY", color: "#f59e0b", cpuTime: 0 }
  ],
  ganttHistory: []
};

window.renderSchedulerWorkbench = function() {
  const readyContainer = document.getElementById("readyQueueContainer");
  const runningSlot = document.getElementById("cpuRunningSlot");
  const waitingContainer = document.getElementById("waitingQueueContainer");
  const readyBadge = document.getElementById("readyCountBadge");
  const waitingBadge = document.getElementById("waitingCountBadge");
  const ganttBar = document.getElementById("schedGanttBar");

  if (!readyContainer || !runningSlot || !waitingContainer) return;

  const s = window.schedulerState;
  const readyList = s.processes.filter(p => p.status === "READY");
  const runningProc = s.processes.find(p => p.status === "RUNNING");
  const waitingList = s.processes.filter(p => p.status === "WAITING");

  if (readyBadge) readyBadge.innerText = `${readyList.length} Processi`;
  if (waitingBadge) waitingBadge.innerText = `${waitingList.length} Processi`;

  // Render Ready Queue
  readyContainer.innerHTML = "";
  if (readyList.length === 0) {
    readyContainer.innerHTML = `<span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">Nessun processo in coda</span>`;
  } else {
    readyList.forEach(p => {
      const card = document.createElement("div");
      card.className = "process-pcb-card";
      card.innerHTML = `
        <div><strong>PID ${p.id}:</strong> ${p.name}</div>
        <span style="font-size: 0.72rem; color: #3b82f6; font-weight: bold;">READY</span>
      `;
      readyContainer.appendChild(card);
    });
  }

  // Render CPU Running Slot
  runningSlot.innerHTML = "";
  if (runningProc) {
    const card = document.createElement("div");
    card.className = "process-pcb-card active";
    card.style.width = "100%";
    card.innerHTML = `
      <div>
        <div style="font-weight: bold; color: ${runningProc.color}; font-size: 1.05rem;">${runningProc.name}</div>
        <div style="font-size: 0.72rem; color: var(--text-muted);">PID ${runningProc.id} | Tempo CPU: ${runningProc.cpuTime} ms</div>
      </div>
      <span style="font-size: 0.75rem; background: #10b981; color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: bold;">RUNNING ⚡</span>
    `;
    runningSlot.appendChild(card);
  } else {
    runningSlot.innerHTML = `<span style="font-size: 0.8rem; color: var(--text-muted);">CPU IDLE (Inattiva)</span>`;
  }

  // Render Waiting Queue
  waitingContainer.innerHTML = "";
  if (waitingList.length === 0) {
    waitingContainer.innerHTML = `<span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">Nessun processo bloccato</span>`;
  } else {
    waitingList.forEach(p => {
      const card = document.createElement("div");
      card.className = "process-pcb-card waiting";
      card.innerHTML = `
        <div><strong>PID ${p.id}:</strong> ${p.name}</div>
        <span style="font-size: 0.72rem; color: #f59e0b; font-weight: bold;">WAITING I/O</span>
      `;
      waitingContainer.appendChild(card);
    });
  }

  // Render Gantt Bar
  if (ganttBar) {
    ganttBar.innerHTML = "";
    s.ganttHistory.forEach(slice => {
      const div = document.createElement("div");
      div.className = "gantt-slice";
      div.style.background = slice.color;
      div.innerText = slice.name.split(" ")[0].substring(0, 3);
      div.title = `${slice.name} (+5 ms)`;
      ganttBar.appendChild(div);
    });
    ganttBar.scrollLeft = ganttBar.scrollWidth;
  }
};

window.stepSchedulerSlice = function() {
  const s = window.schedulerState;
  const running = s.processes.find(p => p.status === "RUNNING");
  const readyList = s.processes.filter(p => p.status === "READY");
  const log = document.getElementById("schedStepLog");

  if (running) {
    running.cpuTime += 5;
    s.ganttHistory.push({ name: running.name, color: running.color });
    if (s.ganttHistory.length > 25) s.ganttHistory.shift();

    // Se ci sono altri pronti, esegui il context switch Round-Robin!
    if (readyList.length > 0) {
      running.status = "READY";
      const nextProc = readyList[0];
      nextProc.status = "RUNNING";

      // Ruota la coda
      const idx = s.processes.indexOf(nextProc);
      s.processes.splice(idx, 1);
      s.processes.push(running);
      s.processes.unshift(nextProc);

      if (log) {
        log.innerHTML = `
          ⏱️ <strong>TIME-SLICE EXPIRED (5 ms):</strong> Il Kernel salva i registri di <strong>${running.name}</strong> e assegna la CPU a <strong>${nextProc.name}</strong> (Context Switch).
        `;
      }
    } else {
      if (log) log.innerHTML = `La CPU continua a eseguire <strong>${running.name}</strong> (nessun altro processo in coda pronti).`;
    }
  } else if (readyList.length > 0) {
    readyList[0].status = "RUNNING";
  }

  // Se c'è un processo in attesa, dopo 2 step si sblocca spontaneamente
  const waiting = s.processes.find(p => p.status === "WAITING");
  if (waiting && Math.random() > 0.4) {
    waiting.status = "READY";
    if (log) log.innerHTML += `<br>✅ <em>I/O completato:</em> <strong>${waiting.name}</strong> ha ricevuto i dati ed è tornato nella coda dei PRONTI!`;
  }

  window.renderSchedulerWorkbench();
};

window.toggleIoBlockCurrent = function() {
  const s = window.schedulerState;
  const running = s.processes.find(p => p.status === "RUNNING");
  const readyList = s.processes.filter(p => p.status === "READY");
  const log = document.getElementById("schedStepLog");

  if (running) {
    running.status = "WAITING";
    if (log) {
      log.innerHTML = `
        🛑 <strong>BLOCCO I/O:</strong> <strong>${running.name}</strong> deve attendere la rete Wi-Fi! Si sposta volontariamente nella coda WAITING per non sprecare cicli di CPU.
      `;
    }
    if (readyList.length > 0) {
      readyList[0].status = "RUNNING";
    }
    window.renderSchedulerWorkbench();
  }
};

window.resetSchedulerSimulator = function() {
  window.schedulerState = {
    quantumMs: 5,
    sliceCount: 0,
    processes: [
      { id: 101, name: "Spotify 🎵", status: "RUNNING", color: "#10b981", cpuTime: 0 },
      { id: 102, name: "Browser Web 🌐", status: "READY", color: "#3b82f6", cpuTime: 0 },
      { id: 103, name: "Minecraft 🎮", status: "READY", color: "#f59e0b", cpuTime: 0 }
    ],
    ganttHistory: []
  };
  const log = document.getElementById("schedStepLog");
  if (log) log.innerText = "Scheduler reimpostato allo stato iniziale.";
  window.renderSchedulerWorkbench();
};

// --- WIDGET 6.3: SIMULATORE MMU E MEMORIA VIRTUALE ---
window.simulateMmuAccess = function(type) {
  const banner = document.getElementById("segfaultAlertBanner");
  const log = document.getElementById("mmuActionLog");
  const vRow0 = document.getElementById("vRow0");
  const vRow1 = document.getElementById("vRow1");
  const vRowIllegal = document.getElementById("vRowIllegal");
  const mmuRow0 = document.getElementById("mmuRow0");
  const mmuRow1 = document.getElementById("mmuRow1");
  const mmuRowFault = document.getElementById("mmuRowFault");
  const pRow14 = document.getElementById("pRow14");

  if (!banner || !log) return;

  // Reset highlight
  [vRow0, vRow1, vRowIllegal, mmuRow0, mmuRow1, mmuRowFault, pRow14].forEach(r => {
    if (r) r.classList.remove("highlight");
  });

  if (type === 'valid') {
    banner.classList.remove("show");
    if (vRow1) vRow1.classList.add("highlight");
    if (mmuRow1) mmuRow1.classList.add("highlight");
    if (pRow14) pRow14.classList.add("highlight");

    log.innerHTML = `
      <span style="color: #10b981; font-weight: bold;">[TRADUZIONE OK]</span> App 1 richiede scrittura su Indirizzo Virtuale <code>0x10</code>.<br>
      La <strong>MMU</strong> controlla i permessi: Pagina 1 ha flag Read/Write ✅. <br>
      L'indirizzo viene tradotto nel <strong>Frame Fisico #22 di RAM</strong>. Scrittura eseguita con successo!
    `;
  } else {
    banner.classList.add("show");
    if (vRowIllegal) vRowIllegal.classList.add("highlight");
    if (mmuRowFault) mmuRowFault.classList.add("highlight");

    log.innerHTML = `
      <span style="color: #ef4444; font-weight: bold;">[VIOLAZIONE DI ACCESSO INTERCETTATA]</span> App 1 ha tentato di toccare la Pagina 9.<br>
      La <strong>MMU hardware</strong> respinge la richiesta al microsecondo e allerta il Kernel!
    `;
  }
};

window.resetMmuSimulator = function() {
  const banner = document.getElementById("segfaultAlertBanner");
  const log = document.getElementById("mmuActionLog");
  if (banner) banner.classList.remove("show");
  if (log) log.innerText = "Simulatore MMU pronto. Scegli un'operazione di accesso.";
};

// --- WIDGET 6.4: IL LABORATORIO DELLA PIPELINE UNIX ---
window.pipeState = {
  filter: "VITTORIA",
  sortReverse: false,
  dataset: [
    { utente: "Marco", score: 980, status: "VITTORIA", data: "10-Ott-2026" },
    { utente: "Sara",  score: 420, status: "SCONFITTA", data: "10-Ott-2026" },
    { utente: "Luca",  score: 1150, status: "VITTORIA", data: "11-Ott-2026" },
    { utente: "Elena", score: 310, status: "SCONFITTA", data: "11-Ott-2026" },
    { utente: "Davide", score: 850, status: "VITTORIA", data: "11-Ott-2026" }
  ]
};

window.renderPipeWorkbench = function() {
  const filterChip = document.getElementById("pipeFilterChip");
  const sortChip = document.getElementById("pipeSortChip");
  const terminalOut = document.getElementById("pipeTerminalOutput");

  if (!filterChip || !sortChip || !terminalOut) return;

  const s = window.pipeState;

  if (s.filter === "TUTTI") {
    filterChip.innerText = "cat (nessun filtro)";
  } else {
    filterChip.innerText = `grep "${s.filter}"`;
  }

  sortChip.innerText = s.sortReverse ? "sort -r (Decrescente)" : "sort (Crescente)";

  // Applica pipeline logica
  let results = [...s.dataset];

  if (s.filter !== "TUTTI") {
    results = results.filter(d => d.status === s.filter);
  }

  results.sort((a, b) => s.sortReverse ? b.score - a.score : a.score - b.score);

  let outputText = `$ cat punteggi.txt ${s.filter !== "TUTTI" ? `| grep "${s.filter}"` : ""} | sort ${s.sortReverse ? "-r" : ""}\n\n`;
  outputText += `NOME       PUNTEGGIO   ESITO       DATA\n`;
  outputText += `-----------------------------------------------\n`;

  results.forEach(r => {
    outputText += `${r.utente.padEnd(10, " ")} ${r.score.toString().padEnd(11, " ")} ${r.status.padEnd(11, " ")} ${r.data}\n`;
  });

  outputText += `\n[Pipeline completata: ${results.length} record filtrati dal flusso]`;
  terminalOut.innerText = outputText;
};

window.setPipeFilter = function(filterVal) {
  window.pipeState.filter = filterVal;
  window.renderPipeWorkbench();
};

window.togglePipeSort = function() {
  window.pipeState.sortReverse = !window.pipeState.sortReverse;
  window.renderPipeWorkbench();
};

// Inizializza widget al caricamento
setTimeout(() => {
  if (typeof renderBootSequence === 'function') renderBootSequence();
  if (typeof renderSchedulerWorkbench === 'function') renderSchedulerWorkbench();
  if (typeof renderPipeWorkbench === 'function') renderPipeWorkbench();
}, 200);
