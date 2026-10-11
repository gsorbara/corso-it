(window.courseData = window.courseData || []).push({
  id: 5,
  title: "5. Architettura Hardware del PC",
  keyRequired: "HARDWARE-CPU-404",
  nextKey: "KERNEL-OS-505",
  submodules: [
    {
      title: "5.1 La CPU: Microarchitettura e Ciclo Fetch-Decode-Execute",
      content: `
        <h2>5.1 La Central Processing Unit: Il Motore di Calcolo al Microscopio</h2>

        <p>Nei moduli precedenti abbiamo scoperto la nascita dei microprocessori con Federico Faggin e la Macchina di Turing. Ma cosa accade esattamente all'interno del silicio di una moderna <a href="https://it.wikipedia.org/wiki/CPU" target="_blank">CPU</a> durante ogni frazione di secondo?</p>

        <p>Una CPU non è un blocco monolitico, ma una metropoli microscopica composta da miliardi di transistor organizzati in <strong>sottosistemi specializzati</strong> con ruoli architetturali distinti e insostituibili:</p>

        <h3>I Componenti Chiave della Microarchitettura</h3>
        <ul>
          <li><strong>Il Program Counter (PC):</strong> È il contatore ordinale delle istruzioni. Contiene l'indirizzo di memoria RAM dove si trova la <em>prossima</em> istruzione da eseguire. Non appena preleva l'istruzione, si incrementa automaticamente di uno (<code>PC = PC + 1</code>) per puntare all'istruzione successiva;</li>
          <li><strong>L'Instruction Register (IR):</strong> È la scrivania di lavoro temporanea della CPU. Quando un'istruzione viene prelevata dalla memoria, viene depositata nell'IR affinché la macchina possa analizzarla senza rischiare che cambi;</li>
          <li><strong>La Control Unit (CU - Unità di Controllo):</strong> È il direttore d'orchestra dell'intero chip. Legge i bit dell'istruzione presenti nell'IR, decodifica il codice operativo (Opcode) e invia i micro-segnali elettrici necessari ad attivare l'ALU, aprire i bus e leggere o scrivere nei registri corretti;</li>
          <li><strong>L'ALU (Arithmetic Logic Unit - Unità Aritmetico-Logica):</strong> Il calcolatore matematico puro. Esegue operazioni aritmetiche (addizioni, sottrazioni, moltiplicazioni) e logiche (AND, OR, NOT, confronti) e aggiorna i <em>Flag di stato</em> (es. Flag Zero se il risultato è 0, Flag Negativo, Flag Overflow);</li>
          <li><strong>I Registri Generali (es. Registri A, B o R0-R15):</strong> Minuscole celle di memoria integrate sul silicio della CPU. Lavorano alla velocità massima del processore (zero tempo di attesa). La CPU non può compiere calcoli direttamente nella RAM: deve prima copiare i dati dentro i suoi registri interni;</li>
          <li><strong>L'Oscillatore al Quarzo (Clock):</strong> Il metronomo del computer. Un cristallo di quarzo che vibra con precisione millimetrica quando stimolato elettricamente, generando un'onda quadra. Se la tua CPU viaggia a <strong>4.0 GHz</strong>, significa che il metronomo batte <strong>4 miliardi di impulsi al secondo</strong>!</li>
        </ul>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-05/intel-486-die.jpg" alt="Microfotografia del die di un processore Intel 486 DX2" loading="lazy">
          <div class="figure-caption">Microfotografia del die di silicio di un processore Intel 486: sono chiaramente visibili le aree geometriche separate della cache, dell'ALU e dell'unità di controllo.</div>
        </div>

        <h3>Il Ciclo Fetch-Decode-Execute a Rallentatore</h3>
        <p>Ogni singola azione compiuta dal computer (dal movimento del mouse alla grafica di un videogioco) è scomposta nel ciclo continuo <a href="https://it.wikipedia.org/wiki/Fetch-decode-execute_cycle" target="_blank">Fetch-Decode-Execute</a>:</p>
        <ol>
          <li><strong>FETCH (Prelievo):</strong> L'indirizzo nel Program Counter (PC) viene inviato sul Bus Indirizzi. La memoria RAM risponde inviando i byte dell'istruzione sul Bus Dati. L'istruzione entra nell'Instruction Register (IR) e il PC incrementa di 1.</li>
          <li><strong>DECODE (Decodifica):</strong> La Control Unit (CU) analizza il codice dell'istruzione: riconosce se si tratta di una somma (<code>ADD</code>), di uno spostamento di dati (<code>LOAD</code>) o di un salto condizionato (<code>JUMP</code>).</li>
          <li><strong>EXECUTE (Esecuzione):</strong> La Control Unit ordina all'ALU di compiere l'operazione matematica o logica sui dati prelevati dai Registri. Il risultato finale viene salvato nel registro di destinazione.</li>
        </ol>

        <!-- WIDGET 1: SIMULATORE MICRO-CPU FETCH-DECODE-EXECUTE -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚙️ Simulatore Interattivo: Il Ciclo Fetch-Decode-Execute a Micro-Passi</span>
            <span class="widget-badge">Widget 5.1</span>
          </div>
          <div class="widget-body">
            <p>Osserva come ogni singolo componente hardware della CPU si attiva a turno durante il ciclo di clock. Premi <strong>Esegui Passo di Clock</strong> per avanzare:</p>

            <div class="cpu-micro-workbench">
              <div class="cpu-internal-grid">
                <!-- Colonna 1: Unità di Controllo & Program Counter -->
                <div class="cpu-part-card" id="cardCu">
                  <div class="cpu-part-title">
                    <span style="color: #f59e0b;">Control Unit (CU)</span>
                    <span id="cuStatusBadge" style="font-size: 0.72rem; color: #10b981;">PRONTA</span>
                  </div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Program Counter (PC):</div>
                  <div class="cpu-data-slot" id="slotPc" style="color: #38bdf8;">@00</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">Instruction Register (IR):</div>
                  <div class="cpu-data-slot" id="slotIr" style="color: #eab308;">---</div>
                </div>

                <!-- Colonna 2: ALU & Registri Interni -->
                <div class="cpu-part-card" id="cardAlu">
                  <div class="cpu-part-title">
                    <span style="color: #10b981;">ALU & Registri</span>
                    <span id="aluStatusBadge" style="font-size: 0.72rem; color: var(--text-muted);">ATTESA</span>
                  </div>
                  <div style="display: flex; gap: 8px;">
                    <div style="flex: 1;">
                      <div style="font-size: 0.72rem; color: var(--text-muted);">Registro A:</div>
                      <div class="cpu-data-slot" id="slotRegA" style="color: #a855f7;">0</div>
                    </div>
                    <div style="flex: 1;">
                      <div style="font-size: 0.72rem; color: var(--text-muted);">Registro B:</div>
                      <div class="cpu-data-slot" id="slotRegB" style="color: #ec4899;">0</div>
                    </div>
                  </div>
                  <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 6px;">Uscita ALU:</div>
                  <div class="cpu-data-slot" id="slotAluOut" style="color: #10b981;">---</div>
                </div>

                <!-- Colonna 3: Memoria RAM Programma -->
                <div class="cpu-part-card" id="cardRam">
                  <div class="cpu-part-title">
                    <span style="color: #3b82f6;">Memoria RAM (Istruzioni)</span>
                    <span style="font-size: 0.72rem; color: #3b82f6;">RAM BUS</span>
                  </div>
                  <div id="ramInstructionsList" style="font-family: monospace; font-size: 0.78rem; display: flex; flex-direction: column; gap: 4px;">
                    <!-- Rendered via JS -->
                  </div>
                </div>
              </div>

              <!-- Autostrada del Bus Interno -->
              <div class="cpu-bus-highway" id="cpuBusHighway">
                <span>BUS DATI INTERNO:</span>
                <span id="busHighwayTraffic">Nessun dato in transito (Bus Libero)</span>
              </div>

              <!-- Banner Spiegazione Passo Corrente -->
              <div class="cpu-step-banner" id="cpuStepExplanation">
                <strong>FASE INIZIALE:</strong> Il processore è pronto per il prelievo della prima istruzione in RAM all'indirizzo @00. Premi il tasto per avviare il primo impulso di clock.
              </div>
            </div>

            <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
              <button class="btn-primary" onclick="stepCpuMicroCycle()">Esegui Passo di Clock ⏱️</button>
              <button class="btn-primary" style="background: #475569;" onclick="resetCpuMicroCycle()">Resetta Esecuzione ↺</button>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "5.2 La Gerarchia delle Memorie & La Scala Umana delle Latenze",
      content: `
        <h2>5.2 La Piramide delle Memorie: Compromessi Fisici e Latenze</h2>

        <p>Perché i nostri computer non sono costruiti con 1 Terabyte di velocissimi Registri della CPU o di Cache L1? Perché dobbiamo avere memorie diverse come RAM, SSD e Hard Disk?</p>

        <p>La risposta è un <strong>invalicabile compromesso fisico ed economico</strong> dell'ingegneria elettronica:</p>
        <ul>
          <li>Più una memoria è veloce e vicina al nucleo della CPU, più transistor complessi richiede per singola cella, più calore dissipa, più corrente consuma e più costa produrla in termini economici;</li>
          <li>Più una memoria è capiente ed economica (come i chip Flash degli SSD), più tempo richiede fisicamente per leggere o scrivere ogni singolo blocco di dati.</li>
        </ul>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-05/memory-hierarchy.svg" alt="Diagramma della Gerarchia delle Memorie di un Calcolatore" loading="lazy" style="object-fit: contain;">
          <div class="figure-caption">La classica Piramide delle Memorie: al vertice troviamo velocità massima e capacità minima; alla base capacità immensa e latenze elevate.</div>
        </div>

        <h3>La Piramide dal Vertice alla Base</h3>
        <ol>
          <li><strong>Registri della CPU:</strong> Meno di 1 Kilobyte. Tempo di accesso: <strong>&lt; 0.5 nanosecondi</strong> (immediati).</li>
          <li><strong>Cache L1 (Livello 1):</strong> 32-64 KB per core. Integrata direttamente nel nucleo di calcolo (divisa in L1i per istruzioni e L1d per dati). Tempo: <strong>~1 nanosecondo</strong>.</li>
          <li><strong>Cache L2 (Livello 2):</strong> 512 KB - 1 MB per core. Tempo: <strong>~3-4 nanosecondi</strong>.</li>
          <li><strong>Cache L3 (Livello 3):</strong> 16-64 MB. Grande memoria cache condivisa tra tutti i core della CPU sullo stesso die di silicio. Tempo: <strong>~10-15 nanosecondi</strong>.</li>
          <li><strong>Memoria RAM Principale (DDR4 / DDR5):</strong> 16-64 Gigabyte. Banchi di memoria esterni collegati dal bus di memoria sulla scheda madre. È volatile (perde tutto allo spegnimento). Tempo: <strong>~60-80 nanosecondi</strong>.</li>
          <li><strong>Storage NVMe SSD (PCIe):</strong> 1-4 Terabyte. Memoria a stato solido non volatile. Tempo: <strong>~20-50 microsecondi</strong> (1.000 volte più lenta della RAM!).</li>
          <li><strong>Hard Disk Meccanico (HDD):</strong> 2-20 Terabyte. Piatti magnetici rotanti a 7200 giri/min con testina mobile. Tempo: <strong>~5-10 millisecondi</strong>.</li>
          <li><strong>Rete Internet / Cloud:</strong> Capacità virtualmente infinita. Tempo: <strong>~30-100 millisecondi</strong>.</li>
        </ol>

        <div class="callout-box curiosity">
          <div class="callout-title">☕ La Scala Umana delle Latenze: Se 1 Ciclo di Clock fosse 1 Secondo</div>
          <p>Nel mondo dei nanosecondi è difficile per noi umani concepire la differenza tra 1 nanosecondo e 50 microsecondi. Per capirlo, gli scienziati usano una celebre metafora: <strong>immagina che 1 ciclo di clock della CPU duri 1 secondo umano</strong> (uno schiocco di dita):</p>
          <ul>
            <li><strong>Registro CPU:</strong> 1 secondo (prendi una penna che hai già in mano);</li>
            <li><strong>Cache L1:</strong> 3 secondi (prendi un foglio sul tavolo davanti a te);</li>
            <li><strong>Cache L2:</strong> 14 secondi (ti allunghi a prendere un libro dalla libreria dietro la scrivania);</li>
            <li><strong>Cache L3:</strong> 40 secondi (vai a prendere un raccoglitore nella stanza accanto);</li>
            <li><strong>Memoria RAM:</strong> <strong>4 MINUTI!</strong> (devi alzarti, metterti il cappotto, scendere in strada e andare a prendere un caffè al bar!);</li>
            <li><strong>Disco NVMe SSD:</strong> <strong>1 GIORNO E MEZZO!</strong> (un'estenuante camminata a piedi da Milano a Bologna!);</li>
            <li><strong>Vecchio Hard Disk Meccanico:</strong> <strong>2 MESI!</strong> (una traversata in barca a vela attraverso l'Oceano Atlantico!);</li>
            <li><strong>Chiamata di Rete Internet:</strong> <strong>1-2 ANNI!</strong> (un viaggio di andata e ritorno per il pianeta Marte!).</li>
          </ul>
          <p>Capisci ora perché la Cache è fondamentale? Senza la Cache, la tua CPU passerebbe il <strong>99,9% della sua vita senza fare nulla</strong>, congelata ad aspettare che i dati arrivino dalla lentissima RAM o dal disco!</p>
        </div>

        <!-- WIDGET 2: IL TELESCOPIO DELLE LATENZE & CACHE HIT/MISS -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🔭 Il Telescopio delle Latenze & Simulatore Cache Hit / Miss</span>
            <span class="widget-badge">Widget 5.2</span>
          </div>
          <div class="widget-body">
            <p>Esplora i diversi gradini della gerarchia delle memorie per scoprire la loro tecnologia, la latenza reale in nanosecondi e l'equivalente in tempo umano:</p>

            <div class="pyramid-tier-container">
              <div class="pyramid-tier-row active" id="tierRow0" onclick="selectPyramidTier(0)">
                <div class="pyramid-tier-label"><span>🥇</span> <span>Registri CPU</span></div>
                <div class="pyramid-tier-stat">&lt; 0.5 ns &nbsp;|&nbsp; Equiv. Umano: 1 secondo</div>
              </div>
              <div class="pyramid-tier-row" id="tierRow1" onclick="selectPyramidTier(1)">
                <div class="pyramid-tier-label"><span>⚡</span> <span>Cache L1 & L2</span></div>
                <div class="pyramid-tier-stat">1 - 4 ns &nbsp;|&nbsp; Equiv. Umano: 3 - 14 secondi</div>
              </div>
              <div class="pyramid-tier-row" id="tierRow2" onclick="selectPyramidTier(2)">
                <div class="pyramid-tier-label"><span>🧠</span> <span>Cache L3 (Condivisa)</span></div>
                <div class="pyramid-tier-stat">10 - 15 ns &nbsp;|&nbsp; Equiv. Umano: 40 secondi</div>
              </div>
              <div class="pyramid-tier-row" id="tierRow3" onclick="selectPyramidTier(3)">
                <div class="pyramid-tier-label"><span>📦</span> <span>Memoria RAM (DDR5)</span></div>
                <div class="pyramid-tier-stat">~60 - 80 ns &nbsp;|&nbsp; Equiv. Umano: 4 minuti</div>
              </div>
              <div class="pyramid-tier-row" id="tierRow4" onclick="selectPyramidTier(4)">
                <div class="pyramid-tier-label"><span>💽</span> <span>Storage NVMe SSD</span></div>
                <div class="pyramid-tier-stat">~20 - 50 µs &nbsp;|&nbsp; Equiv. Umano: 1 giorno e mezzo</div>
              </div>
              <div class="pyramid-tier-row" id="tierRow5" onclick="selectPyramidTier(5)">
                <div class="pyramid-tier-label"><span>🌐</span> <span>Rete Internet / Cloud</span></div>
                <div class="pyramid-tier-stat">~50 ms &nbsp;|&nbsp; Equiv. Umano: 1 anno e mezzo</div>
              </div>
            </div>

            <!-- Dettaglio livello selezionato -->
            <div class="pyramid-detail-box" id="pyramidTierDetail">
              <!-- Rendered via JS -->
            </div>

            <div style="margin-top: 14px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
              <button class="btn-primary" onclick="simulateCacheAccess(true)">Simula Lettura con Cache HIT ✅</button>
              <button class="btn-primary" style="background: #dc2626;" onclick="simulateCacheAccess(false)">Simula Lettura con Cache MISS ❌</button>
            </div>
            <div id="cacheAccessResultLog" style="margin-top: 10px; font-size: 0.85rem; font-family: monospace; color: var(--text-muted);">
              Premi un pulsante per testare la differenza tra trovare il dato in Cache (HIT) o doverlo attendere dalla RAM (MISS).
            </div>
          </div>
        </div>
      `
    },
    {
      title: "5.3 La Scheda Madre: I Tre Bus e l'Autostrada dei Dati",
      content: `
        <h2>5.3 La Scheda Madre: Il Sistema Circolatorio e i Tre Bus Fondamentali</h2>

        <p>Se la CPU è il cervello del computer, la <a href="https://it.wikipedia.org/wiki/Scheda_madre" target="_blank">Scheda Madre</a> (Motherboard) ne è lo scheletro e l'intero sistema circolatorio e nervoso. Si tratta di un circuito stampato (PCB) multistrato estremamente complesso, composto da 6 fino a 12 sottilissimi strati di rame isolati da fibra di vetro.</p>

        <p>Sulle piste di rame della scheda madre viaggiano miliardi di segnali elettrici al secondo. Perché i componenti possano capirsi, la comunicazione è suddivisa in <strong>tre autostrade parallele distinte</strong> chiamate <a href="https://it.wikipedia.org/wiki/Bus_(informatica)" target="_blank">Bus</a>:</p>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-05/motherboard.jpg" alt="Scheda madre moderna per PC con socket CPU, slot RAM e slot PCIe" loading="lazy">
          <div class="figure-caption">Una scheda madre moderna: al centro il socket della CPU, a destra gli slot verticali per la memoria RAM e in basso gli slot PCIe per la scheda video.</div>
        </div>

        <h3>I Tre Bus Fondamentali e i loro Ruoli Precisi</h3>
        <ol>
          <li><strong>Address Bus (Bus degli Indirizzi - Unidirezionale):</strong>
            <ul>
              <li>È il "postino" che trasporta unicamente l'indirizzo della cella di memoria o del dispositivo con cui la CPU vuole parlare;</li>
              <li>Viaggia solo in una direzione: <strong>dalla CPU verso l'esterno</strong>;</li>
              <li>La sua ampiezza in bit stabilisce la quantità massima di memoria fisicamente indirizzabile dal processore: un vecchio bus a 32 bit poteva raggiungere al massimo $2^{32} = 4\text{ GB}$; un moderno bus a 64 bit può teoricamente indirizzare fino a $2^{64} = 16\text{ Exabyte}$ (miliardi di Gigabyte!).</li>
            </ul>
          </li>
          <li><strong>Data Bus (Bus dei Dati - Bidirezionale):</strong>
            <ul>
              <li>È il "furgone merci" che trasporta fisicamente i bit delle istruzioni e dei dati;</li>
              <li>È <strong>bidirezionale</strong>: la CPU può leggere dati dalla RAM o scrivere risultati sulla RAM e sui dischi;</li>
              <li>Più il bus è largo (64 bit, 128 bit), più byte viaggiano simultaneamente a ogni ciclo di clock.</li>
            </ul>
          </li>
          <li><strong>Control Bus (Bus di Controllo - Segnali di Coordinamento):</strong>
            <ul>
              <li>Trasporta i comandi operativi e i segnali di sincronizzazione tra i chip: linea di lettura (<code>MEM_READ</code>), linea di scrittura (<code>MEM_WRITE</code>), impulsi di clock, e soprattutto le fondamentali linee di <strong>Interrupt (IRQ - Interrupt Request)</strong>;</li>
              <li><em>Cosa succede quando muovi il mouse o batti un tasto?</em> La tastiera invia una scarica di Interrupt sul Control Bus. La CPU "congela" istantaneamente il programma in corso, gestisce l'input dell'utente e poi riprende il lavoro precedente senza che tu te ne accorga!</li>
            </ul>
          </li>
        </ol>

        <!-- WIDGET 3: SIMULATORE DELL'INCROCIO DEI TRE BUS -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🛣️ L'Incrocio dei Tre Bus della Scheda Madre</span>
            <span class="widget-badge">Widget 5.3</span>
          </div>
          <div class="widget-body">
            <p>Seleziona un'operazione del computer per vedere quale dei tre bus (Indirizzi, Dati, Controllo) si illumina e in quale direzione viaggiano i segnali:</p>

            <div class="motherboard-diagram-box">
              <div class="mb-components-row">
                <div class="mb-chip-box" id="mbChipCpu">
                  <div style="font-size: 1.3rem;">🧠</div>
                  <div>CPU CENTRALE</div>
                  <div style="font-size: 0.7rem; color: #94a3b8;">Master dei Bus</div>
                </div>
                <div class="mb-chip-box" id="mbChipRam">
                  <div style="font-size: 1.3rem;">📦</div>
                  <div>MEMORIA RAM</div>
                  <div style="font-size: 0.7rem; color: #94a3b8;">Indirizzi 0x00 - 0xFF</div>
                </div>
                <div class="mb-chip-box" id="mbChipIo">
                  <div style="font-size: 1.3rem;">⌨️ / 💽</div>
                  <div>PERIFERICHE I/O</div>
                  <div style="font-size: 0.7rem; color: #94a3b8;">Tastiera, Mouse, SSD</div>
                </div>
              </div>

              <div class="mb-bus-tracks">
                <div class="mb-bus-lane address" id="busLaneAddress">
                  <span>🔵 ADDRESS BUS (Unidirezionale: Solo CPU ➔ Memoria)</span>
                  <span id="busStatusAddress">Inattivo</span>
                </div>
                <div class="mb-bus-lane data" id="busLaneData">
                  <span>🟢 DATA BUS (Bidirezionale: Dati & Istruzioni ⇄ CPU)</span>
                  <span id="busStatusData">Inattivo</span>
                </div>
                <div class="mb-bus-lane control" id="busLaneControl">
                  <span>🔴 CONTROL BUS (Comandi READ, WRITE, INTERRUPT)</span>
                  <span id="busStatusControl">Inattivo</span>
                </div>
              </div>
            </div>

            <!-- Pulsanti Operazioni Bus -->
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
              <button class="btn-primary" onclick="triggerMotherboardBusAction('read_ram')">1. CPU Legge Dato dalla RAM (READ)</button>
              <button class="btn-primary" style="background: #059669;" onclick="triggerMotherboardBusAction('write_ram')">2. CPU Scrive Risultato in RAM (WRITE)</button>
              <button class="btn-primary" style="background: #dc2626;" onclick="triggerMotherboardBusAction('keyboard_interrupt')">3. Utente Preme Tasto Tastiera (INTERRUPT)</button>
            </div>
            <div id="mbActionExplanationLog" style="margin-top: 10px; font-size: 0.85rem; font-family: monospace; color: var(--text-muted);">
              Seleziona un'operazione per visualizzare il traffico elettrico sui tre bus.
            </div>
          </div>
        </div>
      `
    },
    {
      title: "5.4 CPU vs GPU: Pochi Core da Corsa vs Migliaia di Core Paralleli",
      content: `
        <h2>5.4 CPU vs GPU: Due Filosofie Architetturali a Confronto</h2>

        <p>Chiunque giochi ai videogiochi, monti video in 4K o utilizzi software di Intelligenza Artificiale sa che il computer ha bisogno di una <a href="https://it.wikipedia.org/wiki/Graphics_processing_unit" target="_blank">GPU</a> (Graphics Processing Unit, o scheda video). Ma perché un potentissimo processore centrale a 16 core non può fare lo stesso lavoro di una scheda grafica?</p>

        <p>La ragione sta in due filosofie architetturali completamente opposte:</p>

        <div class="callout-box history">
          <div class="callout-title">🏎️ La CPU: 8 Piloti di Formula 1 (Bassa Latenza Sequenziale)</div>
          <p>La CPU è progettata per eccellere in <strong>compiti sequenziali complessi e imprevedibili</strong>:<br>
          Ha da 4 a 16 core grandi e sofisticati. Ogni core possiede un'enorme Control Unit dotata di <em>Branch Prediction</em> (predizione delle diramazioni: algoritmi che "indovinano" cosa farà il programma prima che il calcolo sia finito) ed esecuzione fuori ordine (Out-of-Order execution).<br>
          È perfetta per far girare il sistema operativo, gestire i file, eseguire cicli logici complessi e prendere decisioni al millisecondo.</p>
        </div>

        <div class="callout-box experiment">
          <div class="callout-title">🛵 La GPU: 5.000 Scooter da Consegna (Altissimo Throughput Parallelo)</div>
          <p>La GPU è progettata per il <strong>calcolo parallelo massivo (SIMD - Single Instruction, Multiple Data)</strong>:<br>
          Non ha 8 core, ma tra <strong>3.000 e oltre 16.000 core microscopici</strong>! Questi core hanno unità di controllo minime e nessuna predizione di salto, ma sono mostruosamente efficienti nell'eseguire <em>la stessa identica operazione matematica su milioni di numeri indipendenti nello stesso istante</em>.<br>
          È come avere una flotta di cinquemila scooter: ognuno è più lento di una Formula 1, ma insieme possono consegnare una montagna di pacchi in un solo minuto!</p>
        </div>

        <h3>Perché la GPU Regna nei Videogiochi 3D e nell'Intelligenza Artificiale?</h3>
        <ul>
          <li><strong>Nei Videogiochi 3D:</strong> Uno schermo 4K contiene oltre <strong>8,3 milioni di pixel</strong> indipendenti. Calcolare il colore, l'ombra e il riflesso di ogni singolo pixel è la stessa operazione ripetuta 8 milioni di volte. La GPU assegna un thread a ciascun pixel e li calcola tutti insieme a 60 o 120 volte al secondo!</li>
          <li><strong>Nei Modelli di Intelligenza Artificiale (LLM e Reti Neurali):</strong> Quando un'IA genera una frase o analizza un'immagine, compie gigantesche <strong>moltiplicazioni di matrici numeriche</strong> con centinaia di miliardi di parametri. La GPU digerisce queste matrici matematiche in parallelo in pochi millisecondi.</li>
        </ul>

        <!-- WIDGET 4: SFIDA IN TEMPO REALE CPU VS GPU -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚔️ Sfida di Rendering: CPU (4 Core Seriali) vs GPU (64 Core Paralleli)</span>
            <span class="widget-badge">Widget 5.4</span>
          </div>
          <div class="widget-body">
            <p>Confronta visivamente la differenza tra elaborazione seriale e parallela. Guarda come una CPU a 4 core deve scorrere la griglia a blocchi sequenziali, mentre una GPU calcola tutti i pixel in un unico burst simultaneo:</p>

            <div class="cpu-gpu-grid-container">
              <!-- Card CPU -->
              <div class="proc-challenge-card">
                <div style="font-weight: bold; font-size: 0.88rem; color: #3b82f6;">
                  CPU (4 Core ad Alte Prestazioni)
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-align: center;">
                  Elaborazione a blocchi di 4 pixel per ciclo
                </div>
                <div class="pixel-canvas-grid" id="cpuPixelCanvas">
                  <!-- 64 Pixel Nodes -->
                </div>
                <div id="cpuRenderTimer" style="font-family: monospace; font-size: 0.82rem; color: #3b82f6;">Tempo: 0 ms (In attesa)</div>
                <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px;" onclick="startCpuRenderingChallenge()">Avvia Rendering con CPU 🏎️</button>
              </div>

              <!-- Card GPU -->
              <div class="proc-challenge-card">
                <div style="font-weight: bold; font-size: 0.88rem; color: #10b981;">
                  GPU (64 Core Paralleli SIMD)
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-align: center;">
                  Tutti i 64 pixel calcolati nello stesso istante
                </div>
                <div class="pixel-canvas-grid" id="gpuPixelCanvas">
                  <!-- 64 Pixel Nodes -->
                </div>
                <div id="gpuRenderTimer" style="font-family: monospace; font-size: 0.82rem; color: #10b981;">Tempo: 0 ms (In attesa)</div>
                <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px; background: #059669;" onclick="startGpuRenderingChallenge()">Avvia Rendering con GPU ⚡</button>
              </div>
            </div>

            <div style="font-size: 0.82rem; color: var(--text-muted); text-align: center; margin-top: 6px;">
              💡 <em>Morale Ingegneristica:</em> Non esiste un processore "migliore in assoluto": la CPU è il comandante che prende decisioni complesse, la GPU è l'esercito instancabile che macina numeri in parallelo!
            </div>
          </div>
        </div>
      `
    }
  ],
  quiz: {
    questions: [
      {
        q: "Come fa la memoria Cache (L1, L2, L3) ad accelerare così tanto il computer pur essendo molto piccola rispetto alla RAM?",
        options: [
          { text: "Cancella automaticamente i programmi vecchi dal disco fisso per fare spazio", correct: false },
          { text: "Sfrutta la località dei dati: tiene a portata di mano i dati usati di recente e quelli memorizzati vicino ad essi, che con grandissima probabilità serviranno a breve", correct: true },
          { text: "Raddoppia la velocità della corrente elettrica che scorre nei cavi della scheda madre", correct: false },
          { text: "Funziona solo quando il computer è completamente disconnesso da Internet", correct: false }
        ]
      },
      {
        q: "Sulla scheda madre, quali compiti svolgono i tre Bus fondamentali (Dati, Indirizzi, Controllo)?",
        options: [
          { text: "Il Bus Dati trasporta le informazioni effettive, il Bus Indirizzi indica 'dove' leggerle o scriverle, e il Bus Controllo invia i comandi di sincronizzazione e lettura/scrittura", correct: true },
          { text: "Tutti e tre i bus servono solo a raffreddare la CPU trasportando aria fredda", correct: false },
          { text: "Il Bus Indirizzi serve solo per navigare su Internet, mentre il Bus Dati gestisce l'audio", correct: false },
          { text: "I bus collegano solo le ventole all'alimentatore senza interagire con la memoria", correct: false }
        ]
      },
      {
        q: "All'interno della CPU, qual è la differenza di compiti tra l'ALU (Unità Aritmetica e Logica) e la Control Unit (Unità di Controllo)?",
        options: [
          { text: "L'ALU memorizza i file in modo permanente, mentre la Control Unit proietta le immagini sullo schermo", correct: false },
          { text: "L'ALU spegne la CPU se si scalda troppo, mentre la Control Unit calcola la grafica dei videogiochi", correct: false },
          { text: "L'ALU esegue i calcoli matematici e i confronti logici (es. somme e confronti vero/falso), mentre la Control Unit decodifica le istruzioni e coordina tutti i componenti", correct: true },
          { text: "Non hanno compiti diversi: sono due nomi identici per i transistor di alimentazione", correct: false }
        ]
      },
      {
        q: "Nella 'piramide delle memorie' del computer, perché non si costruisce un PC con una memoria tutta super-veloce come i Registri della CPU?",
        options: [
          { text: "Perché le memorie più veloci sono costosissime, consumano più calore ed energia e occupano troppo spazio fisico sul chip: la gerarchia trova il perfetto equilibrio tra velocità, capacità e costo", correct: true },
          { text: "Perché i registri possono contenere solo numeri negativi e non lettere o immagini", correct: false },
          { text: "Perché i sistemi operativi moderni rifiutano di avviarsi se la memoria è troppo veloce", correct: false },
          { text: "Perché la memoria veloce smette di funzionare se il computer supera i 100 megabyte di dati", correct: false }
        ]
      },
      {
        q: "Qual è la differenza filosofica e pratica tra una CPU e una GPU spiegata nel modulo?",
        options: [
          { text: "La CPU è un grande 'treno merci' per milioni di pacchi, mentre la GPU è un piccolo orologio da polso", correct: false },
          { text: "La CPU è come una macchina da corsa (pochi core velocissimi e intelligenti per compiti sequenziali e decisioni rapide), mentre la GPU è come una flotta di centinaia di furgoncini (migliaia di core semplici per fare tantissimi calcoli identici in parallelo)", correct: true },
          { text: "La CPU elabora solo immagini 3D, mentre la GPU esegue tutto il sistema operativo", correct: false },
          { text: "La GPU serve solo nei calcolatori scientifici e non viene mai usata per i videogiochi", correct: false }
        ]
      }
    ]
  }
});

/* =========================================================
   LOGICA JAVASCRIPT DEI WIDGET DEL MODULO 5
   ========================================================= */

// --- WIDGET 5.1: SIMULATORE CPU MICRO FETCH-DECODE-EXECUTE ---
window.cpuMicroState = {
  step: 0, // 0 to 8
  pc: 0,
  ir: "---",
  regA: 0,
  regB: 0,
  aluOut: "---",
  cuStatus: "PRONTA",
  busData: "Nessun dato in transito (Bus Libero)",
  program: [
    { addr: "@00", code: "LOAD A, 7", desc: "Carica il valore 7 nel Registro A" },
    { addr: "@01", code: "LOAD B, 5", desc: "Carica il valore 5 nel Registro B" },
    { addr: "@02", code: "ADD A, B",  desc: "Somma A + B e salva il risultato in A" },
    { addr: "@03", code: "STORE A, 10", desc: "Scrive il valore 12 nella cella RAM @10" }
  ]
};

window.renderCpuMicroWorkbench = function() {
  const slotPc = document.getElementById("slotPc");
  const slotIr = document.getElementById("slotIr");
  const slotRegA = document.getElementById("slotRegA");
  const slotRegB = document.getElementById("slotRegB");
  const slotAluOut = document.getElementById("slotAluOut");
  const cuBadge = document.getElementById("cuStatusBadge");
  const busMsg = document.getElementById("busHighwayTraffic");
  const banner = document.getElementById("cpuStepExplanation");
  const ramList = document.getElementById("ramInstructionsList");
  const cardCu = document.getElementById("cardCu");
  const cardAlu = document.getElementById("cardAlu");
  const busHighway = document.getElementById("cpuBusHighway");

  if (!slotPc || !ramList) return;

  const s = window.cpuMicroState;

  slotPc.innerText = `@0${s.pc}`;
  slotIr.innerText = s.ir;
  slotRegA.innerText = s.regA;
  slotRegB.innerText = s.regB;
  slotAluOut.innerText = s.aluOut;
  if (cuBadge) cuBadge.innerText = s.cuStatus;
  if (busMsg) busMsg.innerText = s.busData;

  // Render RAM Instructions
  ramList.innerHTML = "";
  s.program.forEach((item, idx) => {
    const isTarget = idx === s.pc;
    const isExecuting = s.ir.startsWith(item.code.split(" ")[0]);
    const div = document.createElement("div");
    div.style.padding = "4px 6px";
    div.style.borderRadius = "4px";
    div.style.background = isTarget ? "rgba(59, 130, 246, 0.2)" : "transparent";
    div.style.border = isTarget ? "1px solid #3b82f6" : "1px solid transparent";
    div.style.color = isTarget ? "#60a5fa" : "inherit";
    div.innerHTML = `<strong>${item.addr}:</strong> <code>${item.code}</code>`;
    ramList.appendChild(div);
  });

  // Card highlight logic
  if (cardCu) cardCu.classList.remove("highlight");
  if (cardAlu) cardAlu.classList.remove("highlight");
  if (busHighway) busHighway.classList.remove("active");

  const explanations = [
    "<strong>FASE INIZIALE:</strong> PC = @00. Premi 'Esegui Passo di Clock' per avviare il prelievo della prima istruzione.",
    "<strong>1. FETCH:</strong> L'indirizzo @00 viaggia sul Bus Indirizzi. L'istruzione <code>LOAD A, 7</code> viene copiata dalla RAM nell'IR. Il PC incrementa a @01.",
    "<strong>2. DECODE:</strong> La Control Unit decodifica l'istruzione: riconosce il comando LOAD immediato verso il Registro A.",
    "<strong>3. EXECUTE:</strong> Il valore 7 viene scritto nel Registro A. Registro A = 7!",
    "<strong>4. FETCH:</strong> L'indirizzo @01 preleva l'istruzione <code>LOAD B, 5</code> nell'IR. Il PC incrementa a @02.",
    "<strong>5. DECODE:</strong> La Control Unit prepara il caricamento del valore immediato 5 nel Registro B.",
    "<strong>6. EXECUTE:</strong> Il valore 5 viene scritto nel Registro B. Registro B = 5!",
    "<strong>7. FETCH:</strong> Prelevata l'istruzione <code>ADD A, B</code> nell'IR. Il PC incrementa a @03.",
    "<strong>8. DECODE:</strong> La Control Unit attiva l'ALU per una somma aritmetica tra i Registri A e B.",
    "<strong>9. EXECUTE (ALU):</strong> L'ALU somma 7 + 5 = 12. Il risultato 12 viene scritto nel Registro A! Calcolo completato con successo 🎉"
  ];

  if (banner) banner.innerHTML = explanations[s.step] || "Ciclo terminato. Premi 'Resetta' per ricominciare.";

  if ([1, 4, 7].includes(s.step)) {
    if (busHighway) busHighway.classList.add("active");
  } else if ([2, 5, 8].includes(s.step)) {
    if (cardCu) cardCu.classList.add("highlight");
  } else if ([3, 6, 9].includes(s.step)) {
    if (cardAlu) cardAlu.classList.add("highlight");
  }
};

window.stepCpuMicroCycle = function() {
  const s = window.cpuMicroState;

  if (s.step === 0) {
    // 1. FETCH LOAD A, 7
    s.step = 1;
    s.ir = "LOAD A, 7";
    s.pc = 1;
    s.busData = "Istruzione 'LOAD A, 7' viaggia dalla RAM all'IR";
    s.cuStatus = "FETCH IN CORSO";
  } else if (s.step === 1) {
    // 2. DECODE LOAD A, 7
    s.step = 2;
    s.busData = "Control Unit analizza OPCODE: LOAD A";
    s.cuStatus = "DECODIFICA ATTIVA";
  } else if (s.step === 2) {
    // 3. EXECUTE LOAD A, 7
    s.step = 3;
    s.regA = 7;
    s.busData = "Valore 7 caricato nel Registro A";
    s.cuStatus = "ESECUZIONE COMPLETATA";
  } else if (s.step === 3) {
    // 4. FETCH LOAD B, 5
    s.step = 4;
    s.ir = "LOAD B, 5";
    s.pc = 2;
    s.busData = "Istruzione 'LOAD B, 5' viaggia dalla RAM all'IR";
    s.cuStatus = "FETCH IN CORSO";
  } else if (s.step === 4) {
    // 5. DECODE LOAD B, 5
    s.step = 5;
    s.busData = "Control Unit analizza OPCODE: LOAD B";
    s.cuStatus = "DECODIFICA ATTIVA";
  } else if (s.step === 5) {
    // 6. EXECUTE LOAD B, 5
    s.step = 6;
    s.regB = 5;
    s.busData = "Valore 5 caricato nel Registro B";
    s.cuStatus = "ESECUZIONE COMPLETATA";
  } else if (s.step === 6) {
    // 7. FETCH ADD A, B
    s.step = 7;
    s.ir = "ADD A, B";
    s.pc = 3;
    s.busData = "Istruzione 'ADD A, B' viaggia dalla RAM all'IR";
    s.cuStatus = "FETCH IN CORSO";
  } else if (s.step === 7) {
    // 8. DECODE ADD A, B
    s.step = 8;
    s.busData = "Control Unit attiva ALU su registri A e B";
    s.cuStatus = "ATTIVAZIONE ALU";
  } else if (s.step === 8) {
    // 9. EXECUTE ADD A, B
    s.step = 9;
    s.aluOut = "7 + 5 = 12";
    s.regA = 12;
    s.busData = "ALU: Somma completata, Registro A aggiornato a 12";
    s.cuStatus = "TERMINATO";
  } else {
    // Ciclo finito
    s.step = 0;
    s.pc = 0;
    s.ir = "---";
    s.regA = 0;
    s.regB = 0;
    s.aluOut = "---";
    s.cuStatus = "PRONTA";
    s.busData = "Nessun dato in transito (Bus Libero)";
  }

  window.renderCpuMicroWorkbench();
};

window.resetCpuMicroCycle = function() {
  window.cpuMicroState = {
    step: 0,
    pc: 0,
    ir: "---",
    regA: 0,
    regB: 0,
    aluOut: "---",
    cuStatus: "PRONTA",
    busData: "Nessun dato in transito (Bus Libero)",
    program: window.cpuMicroState.program
  };
  window.renderCpuMicroWorkbench();
};

// --- WIDGET 5.2: IL TELESCOPIO DELLE LATENZE ---
window.pyramidTiersData = [
  {
    name: "Registri Interni della CPU",
    capacity: "~1 Kilobyte (poche decine di celle a 64 bit)",
    latency: "< 0.5 nanosecondi (< 0.0000000005 s)",
    humanTime: "1 Secondo (uno schiocco di dita)",
    desc: "Celle microscopiche costruite con flip-flop SRAM statici direttamente dentro l'ALU e i core. Zero attesa, massima velocità fisica raggiungibile nel silicio."
  },
  {
    name: "Memoria Cache L1 & L2",
    capacity: "64 KB (L1) fino a 1 MB (L2) per singolo core",
    latency: "1 - 4 nanosecondi",
    humanTime: "3 - 14 Secondi (prendere un foglio sul tavolo)",
    desc: "Memoria SRAM ultra-rapida integrata sul die. La L1 è divisa fisicamente in L1i (istruzioni) e L1d (dati). Conserva i loop di codice e le variabili più calde."
  },
  {
    name: "Memoria Cache L3 (Condivisa)",
    capacity: "16 - 64 MegaByte",
    latency: "10 - 15 nanosecondi",
    humanTime: "40 Secondi (andare a prendere un libro nella stanza accanto)",
    desc: "Un grande bacino di memoria condiviso tra tutti i core della CPU. Fa da cuscinetto per evitare accessi lenti alla memoria RAM esterna."
  },
  {
    name: "Memoria RAM Principale (DDR5)",
    capacity: "16 - 64 GigaByte",
    latency: "60 - 80 nanosecondi",
    humanTime: "4 Minuti (uscire di casa e prendere un caffè al bar)",
    desc: "Chip di memoria DRAM dinamica esterni su moduli DIMM. Le celle usano condensatori microscopici che devono essere rinfrescati migliaia di volte al secondo."
  },
  {
    name: "Storage NVMe SSD (PCIe Flash)",
    capacity: "1 - 4 TeraByte",
    latency: "20 - 50 microsecondi (20.000 - 50.000 ns)",
    humanTime: "1 Giorno e Mezzo di Cammino!",
    desc: "Chip di memoria Flash NAND non volatile. Anche se velocissimo rispetto ai vecchi dischi meccanici, per la CPU l'accesso a un SSD è un'eternità (migliaia di cicli sprecati)."
  },
  {
    name: "Rete Internet / Cloud Storage",
    capacity: "Virtualmente Infinita (Data Center Mondiali)",
    latency: "30 - 100 millisecondi (30.000.000 - 100.000.000 ns)",
    humanTime: "1 - 2 Anni di Viaggio Spaziale!",
    desc: "I pacchetti di dati devono attraversare cavi in fibra ottica sottomarini e router di rete. Latenza enorme rispetto alle velocità della CPU."
  }
];

window.selectedTierIndex = 0;

window.renderMemoryPyramid = function() {
  const detail = document.getElementById("pyramidTierDetail");
  if (!detail) return;

  const data = window.pyramidTiersData[window.selectedTierIndex];

  // Update rows active class
  for (let i = 0; i < 6; i++) {
    const row = document.getElementById(`tierRow${i}`);
    if (row) {
      if (i === window.selectedTierIndex) row.classList.add("active");
      else row.classList.remove("active");
    }
  }

  detail.innerHTML = `
    <div style="font-weight: bold; font-size: 1.05rem; color: var(--primary); margin-bottom: 6px;">
      ${data.name}
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px; font-size: 0.85rem;">
      <div><strong>Capacità Tipica:</strong> <span style="font-family: monospace;">${data.capacity}</span></div>
      <div><strong>Latenza Reale:</strong> <span style="font-family: monospace; color: #ef4444;">${data.latency}</span></div>
    </div>
    <div style="background: rgba(37, 99, 235, 0.1); border-left: 3px solid var(--primary); padding: 8px 12px; border-radius: 4px; font-size: 0.85rem; margin-bottom: 8px;">
      ⏱️ <strong>Equivalente in Scala Umana (se 1 clock = 1 sec):</strong> <strong style="color: #2563eb;">${data.humanTime}</strong>
    </div>
    <p style="font-size: 0.84rem; line-height: 1.4; margin: 0; color: var(--text-muted);">${data.desc}</p>
  `;
};

window.selectPyramidTier = function(idx) {
  window.selectedTierIndex = idx;
  window.renderMemoryPyramid();
};

window.simulateCacheAccess = function(isHit) {
  const log = document.getElementById("cacheAccessResultLog");
  if (!log) return;

  if (isHit) {
    log.innerHTML = `
      <span style="color: #10b981; font-weight: bold;">[CACHE HIT!]</span> ➔ Il dato cercato è presente nella Cache L1! <br>
      Tempo CPU: <strong>1 nanosecondo (3 secondi umani)</strong>. La CPU prosegue immediatamente alla massima velocità senza alcuno stallo! ✅
    `;
  } else {
    log.innerHTML = `
      <span style="color: #ef4444; font-weight: bold;">[CACHE MISS!]</span> ➔ Il dato non è in Cache! La CPU invia la richiesta alla RAM... <br>
      Tempo CPU: <strong>70 nanosecondi (4 MINUTI UMANI)</strong>. La CPU entra in 'wait state' (stallo) bruciando decine di cicli di clock a vuoto! ⚠️
    `;
  }
};

// --- WIDGET 5.3: L'INCROCIO DEI TRE BUS ---
window.triggerMotherboardBusAction = function(actionType) {
  const bAddr = document.getElementById("busLaneAddress");
  const bData = document.getElementById("busLaneData");
  const bCtrl = document.getElementById("busLaneControl");
  const sAddr = document.getElementById("busStatusAddress");
  const sData = document.getElementById("busStatusData");
  const sCtrl = document.getElementById("busStatusControl");
  const log = document.getElementById("mbActionExplanationLog");

  if (!bAddr || !bData || !bCtrl) return;

  // Reset
  [bAddr, bData, bCtrl].forEach(b => b.classList.remove("active"));

  if (actionType === 'read_ram') {
    bAddr.classList.add("active");
    bCtrl.classList.add("active");
    bData.classList.add("active");

    sAddr.innerText = "ATTIVO: Indirizzo 0x42 ➔ RAM";
    sCtrl.innerText = "ATTIVO: Segnale 'MEM_READ' [Lettura]";
    sData.innerText = "ATTIVO: Dato 10110010 viaggia RAM ➔ CPU";

    log.innerHTML = `
      <strong>AZIONE LETTURA:</strong> La CPU invia l'indirizzo <code>0x42</code> sull'<strong>Address Bus</strong> e alza il segnale <code>READ</code> sul <strong>Control Bus</strong>.<br>
      La RAM risponde riversando il byte memorizzato sul <strong>Data Bus</strong> in direzione della CPU!
    `;
  } else if (actionType === 'write_ram') {
    bAddr.classList.add("active");
    bCtrl.classList.add("active");
    bData.classList.add("active");

    sAddr.innerText = "ATTIVO: Indirizzo 0x88 ➔ RAM";
    sCtrl.innerText = "ATTIVO: Segnale 'MEM_WRITE' [Scrittura]";
    sData.innerText = "ATTIVO: Risultato 0xFF viaggia CPU ➔ RAM";

    log.innerHTML = `
      <strong>AZIONE SCRITTURA:</strong> La CPU posiziona l'indirizzo <code>0x88</code> sull'<strong>Address Bus</strong>, il dato calcolato sul <strong>Data Bus</strong> e invia il segnale <code>WRITE</code> sul <strong>Control Bus</strong>.<br>
      La RAM cattura il dato e lo memorizza permanentemente nella cella!
    `;
  } else if (actionType === 'keyboard_interrupt') {
    bCtrl.classList.add("active");
    bData.classList.add("active");
    sAddr.innerText = "INATTIVO (Nessun indirizzo necessario)";
    sCtrl.innerText = "ATTIVO: Segnale INTERRUPT (IRQ 1) ➔ CPU!";
    sData.innerText = "ATTIVO: Codice Tasto 'A' (ScanCode 0x1E) ➔ CPU";

    log.innerHTML = `
      <strong>AZIONE INTERRUPT:</strong> La tastiera invia un impulso di <strong>INTERRUPT (IRQ)</strong> prioritario sul <strong>Control Bus</strong>!<br>
      La CPU interrompe temporaneamente il programma in corso, legge il tasto premuto sul <strong>Data Bus</strong> e aggiorna lo schermo in tempo reale!
    `;
  }
};

// --- WIDGET 5.4: SFIDA DI RENDERING CPU VS GPU ---
window.initPixelCanvases = function() {
  const cpuCanvas = document.getElementById("cpuPixelCanvas");
  const gpuCanvas = document.getElementById("gpuPixelCanvas");

  if (!cpuCanvas || !gpuCanvas) return;

  cpuCanvas.innerHTML = "";
  gpuCanvas.innerHTML = "";

  for (let i = 0; i < 64; i++) {
    const p1 = document.createElement("div");
    p1.className = "pixel-node";
    p1.id = `cpuPix_${i}`;
    cpuCanvas.appendChild(p1);

    const p2 = document.createElement("div");
    p2.className = "pixel-node";
    p2.id = `gpuPix_${i}`;
    gpuCanvas.appendChild(p2);
  }
};

window.startCpuRenderingChallenge = function() {
  window.initPixelCanvases();
  const timerLbl = document.getElementById("cpuRenderTimer");
  let currentPixel = 0;
  const startTime = performance.now();

  const interval = setInterval(() => {
    // La CPU a 4 core renderizza 4 pixel alla volta
    for (let c = 0; c < 4 && currentPixel < 64; c++) {
      const pix = document.getElementById(`cpuPix_${currentPixel}`);
      if (pix) pix.classList.add("rendered");
      currentPixel++;
    }

    if (currentPixel >= 64) {
      clearInterval(interval);
      const elapsed = Math.round(performance.now() - startTime);
      if (timerLbl) timerLbl.innerText = `Tempo Finale: ${elapsed} ms (16 passaggi seriali)`;
    }
  }, 70);
};

window.startGpuRenderingChallenge = function() {
  window.initPixelCanvases();
  const timerLbl = document.getElementById("gpuRenderTimer");
  const startTime = performance.now();

  // La GPU con 64 core paralleli calcola TUTTI i pixel in 1 singolo istante!
  setTimeout(() => {
    for (let i = 0; i < 64; i++) {
      const pix = document.getElementById(`gpuPix_${i}`);
      if (pix) pix.classList.add("gpu-rendered");
    }
    const elapsed = Math.max(8, Math.round(performance.now() - startTime));
    if (timerLbl) timerLbl.innerText = `Tempo Finale: ${elapsed} ms (1 SINGOLO BURST PARALLELO! ⚡)`;
  }, 40);
};

// Inizializza i widget al caricamento
setTimeout(() => {
  if (typeof renderCpuMicroWorkbench === 'function') renderCpuMicroWorkbench();
  if (typeof renderMemoryPyramid === 'function') renderMemoryPyramid();
  if (typeof initPixelCanvases === 'function') initPixelCanvases();
}, 200);
