(window.courseData = window.courseData || []).push({
  id: 1,
  title: "1. Scienza dell'Informazione vs Computer Science",
  keyRequired: null,
  nextKey: "ALGO-KEY-101",
  submodules: [
    {
      title: "1.1 Informazione vs Dati",
      content: `
        <h2>1.1 Il Mistero dei Numeri Nudi: Che cos'è l'informazione?</h2>
        
        <p>Immagina di camminare per strada e trovare a terra un foglietto strappato con scarabocchiato sopra un unico numero: <code>120</code>.</p>
        <p>Cosa significa quel numero? Da solo, <strong>assolutamente nulla</strong>. Potrebbe essere:</p>
        <ul>
          <li>La frequenza cardiaca (battiti al minuto) di uno sportivo durante una corsa;</li>
          <li>Il limite di velocità su una tangenziale espresso in km/h;</li>
          <li>Il prezzo in euro di un paio di scarpe da ginnastica;</li>
          <li>La pressione arteriosa sistolica misurata da un medico;</li>
          <li>Il livello sonoro in decibel di un concerto rock vicino alle casse.</li>
        </ul>

        <p>Questo semplice esempio racchiude una delle distinzioni più importanti dell'intera era digitale: la differenza tra <strong>dato</strong> e <strong>informazione</strong>.</p>

        <div class="callout-box experiment">
          <div class="callout-title">📐 La Formula dell'Informatica</div>
          <p><strong>Dato + Contesto + Significato = Informazione</strong><br>
          Un <em>dato</em> è un elemento grezzo, neutro e privo di interpretazione. L'<em>informazione</em> nasce solo quando quel dato viene contestualizzato, permettendo a un essere umano (o a una macchina) di comprendere una situazione e prendere decisioni.</p>
        </div>

        <div class="callout-box curiosity">
          <div class="callout-title">💡 Curiosità: Il disastro spaziale da 327 milioni di dollari della NASA (1999)</div>
          <p>Nel 1999, la NASA perse la sonda spaziale <a href="https://it.wikipedia.org/wiki/Mars_Climate_Orbiter" target="_blank">Mars Climate Orbiter</a> proprio a causa di un malinteso tra dati e contesto! Il team di costruttori della Lockheed Martin programmò il software di bordo usando il sistema imperiale (forza calcolata in <em>libbre</em>), mentre il computer di navigazione della NASA a terra si aspettava i dati in unità metriche (<em>Newton</em>). Nessuno aveva specificato l'unità di misura nel flusso di dati: la sonda scese troppo vicina all'atmosfera di Marte e andò completamente distrutta.</p>
        </div>

        <h3>Claude Shannon e la Teoria dell'Informazione (1948)</h3>
        <p>Nel 1948, un brillante matematico e ingegnere americano di nome <a href="https://it.wikipedia.org/wiki/Claude_Shannon" target="_blank">Claude Shannon</a> pubblicò un articolo intitolato <em>"A Mathematical Theory of Communication"</em>, fondando la disciplina scientifica della <strong>Teoria dell'Informazione</strong>.</p>
        <p>Shannon si pose una domanda apparentemente filosofica: <em>"È possibile misurare quantitativamente l'informazione, proprio come si misurano i chili o i metri?"</em></p>
        <p>La sua risposta fu rivoluzionaria: <strong>l'informazione misura la riduzione dell'incertezza</strong>.</p>
        <ul>
          <li>Se qualcuno ti dice: <em>"Domani il sole sorgerà al mattino"</em>, quella frase contiene <strong>zero informazione utile</strong>, perché l'evento era già certo al 100%.</li>
          <li>Se invece lanci una moneta e un amico ti dice: <em>"È uscita Testa!"</em>, ti sta comunicando esattamente <strong>1 Bit</strong> di informazione, perché ha dimezzato l'incertezza tra due esiti equiprobabili.</li>
        </ul>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-01/claude-shannon.jpg" alt="Claude Shannon" loading="lazy">
          <div class="figure-caption">Claude Shannon (1916–2001), padre della teoria dell'informazione e creatore del concetto moderno di Bit.</div>
        </div>

        <!-- WIDGET 1: DECODIFICATORE DI CONTESTO -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🧪 Simulatore Interattivo: Il Decodificatore di Contesto</span>
            <span class="widget-badge">Widget 1</span>
          </div>
          <div class="widget-body">
            <p>Seleziona un dato grezzo e un contesto per osservare come il medesimo dato cambia radicalmente significato:</p>
            
            <p style="font-weight: 600; margin-top: 10px; margin-bottom: 4px;">1. Scegli il Dato Grezzo:</p>
            <div class="decoder-selector-group" id="decoderDataGroup">
              <button class="decoder-btn active" onclick="setDecoderData('120')">120</button>
              <button class="decoder-btn" onclick="setDecoderData('ROSSO')">ROSSO</button>
              <button class="decoder-btn" onclick="setDecoderData('404')">404</button>
              <button class="decoder-btn" onclick="setDecoderData('37.5')">37.5</button>
            </div>

            <p style="font-weight: 600; margin-top: 10px; margin-bottom: 4px;">2. Scegli il Contesto Applicativo:</p>
            <div class="decoder-selector-group" id="decoderContextGroup">
              <button class="decoder-btn active" onclick="setDecoderContext('medico')">🏥 Medicina</button>
              <button class="decoder-btn" onclick="setDecoderContext('strada')">🚦 Codice della Strada</button>
              <button class="decoder-btn" onclick="setDecoderContext('web')">🌐 Rete Internet</button>
              <button class="decoder-btn" onclick="setDecoderContext('meteo')">☀️ Meteorologia</button>
            </div>

            <div class="decoder-card-display" id="decoderOutputCard">
              <!-- Rendered via JS -->
            </div>
          </div>
        </div>
      `
    },
    {
      title: "1.2 Computer Science",
      content: `
        <h2>1.2 La Computer Science come scienza del calcolo</h2>
        
        <p>Nel linguaggio quotidiano capita spesso di confondere l'abilità nell'usare i computer con la <strong>Computer Science</strong> (l'informatica come scienza). Saper montare un video con lo smartphone o navigare sui social network è <em>alfabetizzazione digitale</em>, non informatica scientifica.</p>

        <p>Un celebre pioniere del settore, l'olandese <a href="https://it.wikipedia.org/wiki/Edsger_Dijkstra" target="_blank">Edsger Dijkstra</a>, coniò una frase rimasta leggendaria:</p>
        
        <div class="callout-box history">
          <div class="callout-title">🔭 La Metafora di Dijkstra</div>
          <p><em>"L'informatica non riguarda i computer più di quanto l'astronomia riguardi i telescopi."</em><br>
          Così come l'astronomo usa il telescopio per studiare la fisica delle galassie e delle stelle, l'informatico usa il computer come strumento per studiare <strong>la logica, la complessità e le leggi universali del calcolo</strong>.</p>
        </div>

        <h3>Che cosa studia davvero la Computer Science?</h3>
        <p>La Computer Science affronta domande matematiche profonde che resterebbero valide anche se i computer elettronici sparissero:</p>
        <ul>
          <li><strong>Teoria della Calcolabilità:</strong> Quali problemi possono essere risolti matematicamente da una sequenza di passi logici e quali sono intrinsecamente impossibili da risolvere per qualunque macchina (i limiti scoperti da <a href="https://it.wikipedia.org/wiki/Alan_Turing" target="_blank">Alan Turing</a>)?</li>
          <li><strong>Complessità Computazionale:</strong> Quanta memoria e quanti passaggi di tempo richiede la risoluzione di un problema? Un algoritmo che risolve un puzzle in 10 secondi è utilizzabile; uno che richiede 500 anni è inutile, anche se in teoria è corretto.</li>
          <li><strong>Progettazione dei Sistemi:</strong> Come gestire la cooperazione tra miliardi di transistor microscopici senza che il sistema collassi.</li>
        </ul>

        <div class="callout-box curiosity">
          <div class="callout-title">📜 Da Baghdad alla Silicon Valley: Al-Khwarizmi</div>
          <p>Sapevi che la parola <strong>Algoritmo</strong> ha più di mille anni? Deriva dalla latinizzazione del nome del matematico persiano <strong>Muhammad ibn Musa al-Khwarizmi</strong> (circa 780–850 d.C.), che lavorava nella celebre <em>Casa della Sapienza</em> a Baghdad. Dal titolo del suo trattato più famoso (<em>Al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr</em>) deriva anche la parola <strong>Algebra</strong>! Al-Khwarizmi fu il primo a formalizzare procedimenti passo dopo passo per risolvere equazioni e calcoli commerciali, secoli prima dell'avvento dei microprocessori.</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-01/al-khwarizmi.jpg" alt="Monumento ad Al-Khwarizmi" loading="lazy">
          <div class="figure-caption">Monumento a Muhammad ibn Musa al-Khwarizmi (IX sec.), dalle cui opere derivano i termini "Algoritmo" e "Algebra".</div>
        </div>

        <!-- WIDGET 2: RICERCA LINEARE VS RICERCA BINARIA -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚡ Simulatore di Efficienza: Ricerca Lineare vs Ricerca Binaria</span>
            <span class="widget-badge">Widget 2</span>
          </div>
          <div class="widget-body">
            <p>Perché la Computer Science si concentra sugli algoritmi e non solo sulla potenza della macchina? Guarda cosa succede cercando un numero tra <strong>1 e 100</strong> con due strategie diverse:</p>
            
            <div style="display: flex; gap: 10px; align-items: center; margin: 12px 0; flex-wrap: wrap;">
              <label style="font-weight: 600;">Numero da cercare (1-100):</label>
              <input type="number" id="searchTargetInput" min="1" max="100" value="73" style="width: 80px; padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--input-bg); color: var(--text);">
              <button class="btn-primary" onclick="runSearchComparisonDemo()">Avvia Confronto Algoritmi ➔</button>
            </div>

            <div class="search-comparison-grid">
              <div class="search-algo-box">
                <div class="search-algo-header">
                  <span>Ricerca Lineare (Ingenua)</span>
                  <span style="font-size: 0.75rem; color: #ef4444;">O(N)</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-muted);">Controlla una casella alla volta dal primo all'ultimo elemento.</p>
                <div class="search-steps-counter" id="linearStepCount">0 passi</div>
                <div class="search-bar-track">
                  <div class="search-bar-fill" id="linearBarFill" style="background: #ef4444;"></div>
                </div>
                <p id="linearStatusMsg" style="font-size: 0.82rem; margin-top: 6px; color: var(--text-muted);">In attesa...</p>
              </div>

              <div class="search-algo-box">
                <div class="search-algo-header">
                  <span>Ricerca Binaria (Intelligente)</span>
                  <span style="font-size: 0.75rem; color: #10b981;">O(log N)</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-muted);">Apre a metà e scarta il 50% dei numeri a ogni passaggio.</p>
                <div class="search-steps-counter" id="binaryStepCount">0 passi</div>
                <div class="search-bar-track">
                  <div class="search-bar-fill" id="binaryBarFill" style="background: #10b981;"></div>
                </div>
                <p id="binaryStatusMsg" style="font-size: 0.82rem; margin-top: 6px; color: var(--text-muted);">In attesa...</p>
              </div>
            </div>

            <div id="searchVerdictBox" style="margin-top: 14px; padding: 12px; border-radius: 6px; background: var(--card-hover); font-size: 0.88rem; display: none;"></div>
          </div>
        </div>
      `
    },
    {
      title: "1.3 Algoritmi e Pensiero Computazionale",
      content: `
        <h2>1.3 Algoritmi, Pensiero Computazionale e la Macchina di Ada Lovelace</h2>
        
        <p>Un <a href="https://it.wikipedia.org/wiki/Algoritmo" target="_blank">algoritmo</a> è l'anima di qualsiasi programma. Formalmente, è una <strong>sequenza finita, ordinata e priva di ambiguità di istruzioni</strong> che trasforma dati in ingresso (input) in risultati (output).</p>
        
        <p>Un algoritmo deve possedere tre proprietà imprescindibili:</p>
        <ol>
          <li><strong>Finitezza:</strong> deve sempre concludersi dopo un numero determinato di passaggi, senza finire in loop infiniti involontari.</li>
          <li><strong>Determinismo:</strong> fornendo gli stessi dati iniziali, deve produrre esattamente lo stesso risultato a ogni esecuzione.</li>
          <li><strong>Non ambiguità:</strong> ogni istruzione deve avere un solo significato univoco.</li>
        </ol>

        <div class="callout-box experiment">
          <div class="callout-title">🥪 L'Esperimento Mentale del Robot e del Panino</div>
          <p>Nelle scuole di informatica si usa spesso un esperimento divertente: chiedi a una persona di recitare la parte di un computer e dagli istruzioni per preparare un panino con la marmellata. Se dici semplicemente: <em>"Spalma la marmellata sul pane"</em>, il robot prenderà l'intero barattolo chiuso di vetro e lo schiaccerà sul sacchetto di plastica della pagnotta!<br>
          Gli esseri umani colmano le istruzioni con il buon senso; <strong>le macchine non hanno intuito</strong>. Bisogna specificare: <em>"Apri il cassetto; afferra il coltello per il manico; svita il coperchio del barattolo in senso antiorario..."</em>.</p>
        </div>

        <h3>I 4 Pilastri del Pensiero Computazionale</h3>
        <p>Per risolvere problemi complessi come gli informatici, utilizziamo il <a href="https://it.wikipedia.org/wiki/Pensiero_computazionale" target="_blank">pensiero computazionale</a>:</p>
        <ul>
          <li><strong>1. Scomposizione:</strong> Dividere un problema titanico in minuscoli sotto-problemi elementari. (Ad esempio, per creare un videogioco separiamo la fisica del salto, il punteggio, il rendering della grafica e la musica).</li>
          <li><strong>2. Riconoscimento di Pattern:</strong> Notare regolarità e schemi ripetuti. (Come fa <a href="https://it.wikipedia.org/wiki/Shazam_(servizio)" target="_blank">Shazam</a> a riconoscere una canzone in 2 secondi? Confronta l'impronta acustica con pattern memorizzati).</li>
          <li><strong>3. Astrazione:</strong> Ignorare i dettagli superflui per concentrarsi solo sull'essenziale. (Pensa alla celebre mappa della metropolitana di Londra disegnata da Harry Beck nel 1931: non mostra le vere curve geografiche della città, ma solo le fermate e gli interscambi. Meno dettagli realistici = massima chiarezza!).</li>
          <li><strong>4. Progettazione Algoritmica:</strong> Scrivere la sequenza precisa di passi per automatizzare la soluzione.</li>
        </ul>

        <!-- WIDGET 3A: IL SEQUENZIATORE DI ISTRUZIONI -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚙️ Mini-Simulatore: Il Sequenziatore di Istruzioni CPU</span>
            <span class="widget-badge">Widget 3A</span>
          </div>
          <div class="widget-body">
            <p>Guarda come una CPU esegue un algoritmo elementare istruzione per istruzione modificando il valore contenuto in un <strong>Registro di memoria</strong>:</p>
            
            <div class="code-canvas" id="codeSequencerCanvas">
              <div class="code-step-row active" id="codeRow0"><span>01: IMPOSTA Registro_A = 5</span> <span>// Inizializzazione</span></div>
              <div class="code-step-row" id="codeRow1"><span>02: AGGIUNGI 7 a Registro_A</span> <span>// Addizione</span></div>
              <div class="code-step-row" id="codeRow2"><span>03: MOLTIPLICA Registro_A per 3</span> <span>// Moltiplicazione</span></div>
              <div class="code-step-row" id="codeRow3"><span>04: SE Registro_A &gt; 30 ALLORA SOTTRAI 6</span> <span>// Condizione</span></div>
              <div class="code-step-row" id="codeRow4"><span>05: STAMPA "Risultato pronto!"</span> <span>// Conclusione</span></div>
            </div>

            <div class="register-display-bar">
              <div class="register-pill">Istruzione Corrente: <span id="currentStepPointer">Passo 1/5</span></div>
              <div class="register-pill">Valore Registro A: <span id="regAValue">5</span></div>
              <div class="register-pill">Stato CPU: <span id="cpuStatusText" style="color: #10b981;">PRONTO</span></div>
            </div>

            <div style="margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap;">
              <button class="btn-primary" onclick="stepInstructionSequencer()">Esegui Passo Successivo ➔</button>
              <button class="btn-primary" style="background: #475569;" onclick="resetInstructionSequencer()">Ricomincia da Capo ↺</button>
            </div>
          </div>
        </div>

        <h3>Ada Lovelace: La Prima Programmatrice della Storia (1843)</h3>
        <p>Nel 1843, ben un secolo prima dell'invenzione dei computer elettronici, la nobildonna e matematica britannica <a href="https://it.wikipedia.org/wiki/Ada_Lovelace" target="_blank">Ada Lovelace</a> (figlia del poeta Lord Byron) collaborò con Charles Babbage sul progetto della <strong>Macchina Analitica</strong>: un gigantesco calcolatore meccanico alimentato a vapore fatto di migliaia di ruote dentate.</p>

        <p>Mentre Babbage vedeva nella sua macchina solo uno strumento per calcolare tabelle matematiche, Lovelace ebbe un'intuizione che cambiò la storia: <em>se una macchina può manipolare numeri, e i numeri possono rappresentare qualsiasi cosa (lettere, note musicali, immagini), allora quella macchina può manipolare simboli e comporre musica, scrivere testi o ragionare!</em></p>

        <p>Nelle sue note esplicative (la famosa <strong>Note G</strong>), Lovelace pubblicò una tabella passo-passo per calcolare i <a href="https://it.wikipedia.org/wiki/Numeri_di_Bernoulli" target="_blank">numeri di Bernoulli</a> tramite schede perforate. Quello schema è universalmente riconosciuto come il <strong>primo algoritmo software della storia</strong>.</p>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-01/ada-lovelace.jpg" alt="Ritratto di Ada Lovelace" loading="lazy">
          <div class="figure-caption">Ada Lovelace (1815–1852), pioniera assoluta dell'informatica e prima persona ad aver scritto un algoritmo per computer.</div>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-01/bernoulli-diagram.jpg" alt="Diagramma di Ada Lovelace Note G 1843" loading="lazy" style="object-fit: contain; background: #fff; max-height: 480px;">
          <div class="figure-caption">Il diagramma originale del 1843 (Note G) in cui Ada Lovelace descrisse le variabili e il ciclo di calcolo per la Macchina Analitica.</div>
        </div>

        <!-- WIDGET 3B: RIPRODUZIONE DELLA MACCHINA DI ADA LOVELACE -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚙️ Riproduzione Storica: La Macchina di Ada Lovelace (1843)</span>
            <span class="widget-badge" style="background: rgba(212, 175, 55, 0.2); color: #b45309;">Note G Simulation</span>
          </div>
          <div class="widget-body">
            <p>La Macchina Analitica memorizzava i dati su colonne numerate chiamate variabili ($V_1, V_2, \dots$) e usava schede perforate per le operazioni. Prova la riproduzione del ciclo di calcolo di Ada Lovelace:</p>

            <div class="lovelace-container">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
                <span class="lovelace-badge">Meccanismo di Calcolo Analitico</span>
                <span style="font-size: 0.82rem; font-style: italic; color: var(--text-muted);">Anno di Progettazione: 1843</span>
              </div>

              <table class="lovelace-table">
                <thead>
                  <tr>
                    <th>Passo Scheda</th>
                    <th>Operazione Meccanica</th>
                    <th>Variabili Coinvolte</th>
                    <th>Risultato Calcolato</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="lovelaceRow0" class="current-step">
                    <td>Scheda 1</td>
                    <td>Inizializzazione</td>
                    <td>$V_1 = 1, V_2 = 2$</td>
                    <td id="lovelaceRes0">Pronto</td>
                  </tr>
                  <tr id="lovelaceRow1">
                    <td>Scheda 2</td>
                    <td>Moltiplicazione ($V_1 \\times V_2$)</td>
                    <td>Registra su $V_3$</td>
                    <td id="lovelaceRes1">-</td>
                  </tr>
                  <tr id="lovelaceRow2">
                    <td>Scheda 3</td>
                    <td>Addizione ($V_3 + V_2$)</td>
                    <td>Registra su $V_4$</td>
                    <td id="lovelaceRes2">-</td>
                  </tr>
                  <tr id="lovelaceRow3">
                    <td>Scheda 4</td>
                    <td>Ciclo di Chiusura / Stampa</td>
                    <td>$V_4 \\rightarrow$ Colonna Risultato</td>
                    <td id="lovelaceRes3">-</td>
                  </tr>
                </tbody>
              </table>

              <div style="margin-top: 14px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                <button class="btn-brass" onclick="crankLovelaceEngine()">Gira la Manovella (Esegui Passo Meccanico) ⚙️</button>
                <button class="btn-primary" style="background: none; border: 1px solid var(--border); color: var(--text-muted);" onclick="resetLovelaceEngine()">Resetta Macchina ↺</button>
              </div>

              <div id="lovelaceStatusBanner" style="margin-top: 12px; font-size: 0.88rem; color: #b45309; font-weight: 600;">
                ⚙️ Stato: Inserisci la prima scheda perforata girando la manovella.
              </div>
            </div>
          </div>
        </div>
      `
    }
  ],
  quiz: {
    questions: [
      {
        q: "Perché l'incidente della sonda Mars Climate Orbiter (1999) illustra la differenza fondamentale tra 'dato' e 'informazione'?",
        options: [
          { text: "I dati erano stati alterati da un bit-flip indotto da radiazioni cosmiche durante la trasmissione radio, rendendo illeggibile la telemetria di bordo", correct: false },
          { text: "L'informazione consiste nella pura grandezza numerica grezza immagazzinata nei registri, mentre il dato è il significato semantico interpretativo fornito a valle", correct: false },
          { text: "I numeri trasmessi erano dati grezzi corretti, ma privi del contesto semantico essenziale (l'unità di misura: libbre-forza vs Newton), rendendo impossibile ricavare l'informazione corretta", correct: true },
          { text: "Entrambi i sistemi software condividevano lo stesso contesto semantico, ma si verificò un errore di troncamento a virgola mobile a 64 bit", correct: false }
        ]
      },
      {
        q: "Secondo la Teoria Matematica della Comunicazione di Claude Shannon (1948), come viene definita e misurata l'informazione?",
        options: [
          { text: "Come riduzione dell'incertezza rispetto a un evento: un messaggio altamente prevedibile apporta pochissima informazione, mentre un evento inatteso ne trasmette molta", correct: true },
          { text: "Come la capacità teorica massima di trasmissione in bit al secondo sostenibile da un canale continuo in presenza di rumore gaussiano", correct: false },
          { text: "Come il massimo rapporto di compressione lossless ottenibile eliminando integralmente i bit di ridondanza sintattica dai pacchetti", correct: false },
          { text: "Come il numero totale di impulsi elettrici a due stati discreti (0 e 1) che attraversano le porte logiche nell'unità di tempo", correct: false }
        ]
      },
      {
        q: "Quale affermazione descrive con precisione la definizione formale di 'Algoritmo'?",
        options: [
          { text: "Qualsiasi procedura logica che elabora dati di input, anche nel caso in cui non garantisca la terminazione ed esegua cicli ricorsivi infiniti", correct: false },
          { text: "Una sequenza finita di istruzioni non ambigue, eseguibili in tempo finito da un esecutore deterministico, che trasforma dati di input in dati di output", correct: true },
          { text: "Una descrizione matematica informale che delega all'interprete la facoltà di dedurre soggettivamente i passaggi intermedi", correct: false },
          { text: "Una sequenza di euristiche probabilistiche finalizzata ad approssimare una soluzione per problemi non computabili secondo Turing", correct: false }
        ]
      },
      {
        q: "Perché le 'Note G' di Ada Lovelace (1843) sulla Macchina Analitica segnano la nascita della Computer Science?",
        options: [
          { text: "Concepì l'architettura con separazione fisica tra magazzino di memoria (Store) e mulino di calcolo (Mill), costruendone il primo esemplare funzionante", correct: false },
          { text: "Formulò l'algebra booleana applicando i valori logici vero/falso ai circuiti con commutatori a relè elettromeccanici", correct: false },
          { text: "Sviluppò il primo programma traduttore automatico in grado di convertire equazioni algebriche in combinazioni di schede tessili", correct: false },
          { text: "Intuì che la macchina non era una mera calcolatrice aritmetica, ma poteva manipolare simboli astratti secondo regole logiche, e descrisse il primo algoritmo per calcolare i numeri di Bernoulli", correct: true }
        ]
      },
      {
        q: "Quale dei seguenti processi rappresenta il pilastro dell''Astrazione' nel Pensiero Computazionale?",
        options: [
          { text: "Scomporre un problema complesso e articolato in sotto-problemi elementari e indipendenti da risolvere separatamente", correct: false },
          { text: "Isolare le caratteristiche essenziali di un problema complesso nascondendo i dettagli microscopici non rilevanti per la soluzione logica", correct: true },
          { text: "Individuare regolarità, tendenze e similarità ricorrenti tra problemi differenti per riutilizzare strategie risolutive già note", correct: false },
          { text: "Definire la sequenza ordinata e rigorosa di passaggi esatti necessari per guidare l'esecutore alla soluzione del problema", correct: false }
        ]
      }
    ]
  }
});

/* ==========================================================================
   FUNZIONI LOGICHE DEI WIDGET DEL MODULO 1
   ========================================================================== */

// --- WIDGET 1: Decodificatore di Contesto ---
window.decoderCurrentData = '120';
window.decoderCurrentContext = 'medico';

const decoderDatabase = {
  '120': {
    medico: { label: "Pressione Arteriosa Sistolica", desc: "120 mmHg indica una pressione sanguigna ideale e sana in un giovane adulto.", action: "Nessun intervento necessario, parametri ottimali." },
    strada: { label: "Velocità in Autostrada", desc: "120 km/h: velocità elevata, vicina al limite massimo consentito su autostrada italiana (130 km/h).", action: "Mantenere distanza di sicurezza e corsia di destra." },
    web: { label: "Codice di Protocollo Locale", desc: "Porta 120 (o pacchetto di 120 Byte) utilizzato per brevi scambi di diagnostica UDP.", action: "Consentire transito nel firewall di rete." },
    meteo: { label: "Indice di Radiazione Solare / UV", desc: "Indice termico insolito o 120 mm di pioggia cumulata durante un forte nubifragio.", action: "Emettere allerta meteo per precipitazioni abbondanti." }
  },
  'ROSSO': {
    medico: { label: "Codice di Pronto Soccorso", desc: "Emergenza di massima gravità: pericolo imminente di vita per il paziente.", action: "Accesso immediato alla sala di rianimazione." },
    strada: { label: "Semaforo / Stop", desc: "Segnale luminoso di arresto obbligatorio prima della linea di arresto.", action: "Frenare e fermare completamente il veicolo." },
    web: { label: "Stato del Server / Monitoraggio", desc: "Server offline o servizio di database non raggiungibile.", action: "Inviare notifica immediata al team di ingegneri di guardia." },
    meteo: { label: "Allerta Protezione Civile", desc: "Allerta meteo Rossa: rischio elevatissimo di alluvioni o frane sul territorio.", action: "Chiusura delle scuole e divieto di transito vicino ai corsi d'acqua." }
  },
  '404': {
    medico: { label: "Numero di Stanza Ospedaliera", desc: "Stanza 404 al 4° piano del reparto specialistico.", action: "Accogliere il paziente e assegnare il posto letto." },
    strada: { label: "Strada Statale / Cartello Stradale", desc: "Strada provinciale o statale 404 verso il valico di montagna.", action: "Seguire la segnaletica per non sbagliare svincolo." },
    web: { label: "HTTP 404 Not Found", desc: "Il server web risponde che la pagina o risorsa richiesta non esiste o è stata spostata.", action: "Verificare l'URL digitato o reindirizzare alla home page." },
    meteo: { label: "Quota Altimetrica / Pressione", desc: "Altitudine di 404 metri sul livello del mare o pressione barometrica anomala.", action: "Calibrare il barometro per la quota collinare." }
  },
  '37.5': {
    medico: { label: "Temperatura Corporea", desc: "37.5°C indica un leggero stato febbrile (alterazione termica).", action: "Riposare, bere acqua e monitorare l'evoluzione." },
    strada: { label: "Chilometro Progressivo", desc: "Chilometro 37.5 della strada statale: riferimento per il soccorso stradale.", action: "Comunicare il punto esatto al carro attrezzi." },
    web: { label: "Tempo di Risposta (Latenza)", desc: "37.5 millisecondi: tempo eccellente per un ping verso il server di gioco online.", action: "Connessione fluida senza ritardi percepibili." },
    meteo: { label: "Temperatura Estiva all'Ombra", desc: "37.5°C: ondata di calore estremo durante i mesi estivi.", action: "Non uscire nelle ore più calde e idratarsi con frequenza." }
  }
};

window.setDecoderData = function(dataVal) {
  window.decoderCurrentData = dataVal;
  document.querySelectorAll('#decoderDataGroup .decoder-btn').forEach(btn => {
    btn.classList.toggle('active', btn.innerText.trim() === dataVal);
  });
  renderDecoderCard();
};

window.setDecoderContext = function(contextKey) {
  window.decoderCurrentContext = contextKey;
  const contextMap = { medico: '🏥 Medicina', strada: '🚦 Codice della Strada', web: '🌐 Rete Internet', meteo: '☀️ Meteorologia' };
  document.querySelectorAll('#decoderContextGroup .decoder-btn').forEach(btn => {
    btn.classList.toggle('active', btn.innerText.includes(contextMap[contextKey]));
  });
  renderDecoderCard();
};

function renderDecoderCard() {
  const container = document.getElementById('decoderOutputCard');
  if (!container) return;
  const match = decoderDatabase[window.decoderCurrentData][window.decoderCurrentContext];
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
      <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">Dato Analizzato: <code>${window.decoderCurrentData}</code></span>
      <span style="font-size: 0.78rem; background: var(--primary-light); color: var(--primary); padding: 2px 8px; border-radius: 4px; font-weight: 600;">Contesto Applicato</span>
    </div>
    <h4 style="font-size: 1.1rem; margin-bottom: 6px; color: var(--text);">${match.label}</h4>
    <p style="margin-bottom: 8px; font-size: 0.95rem; line-height: 1.5;">${match.desc}</p>
    <div style="font-size: 0.88rem; background: var(--card-bg); padding: 8px 12px; border-radius: 6px; border: 1px solid var(--border);">
      👉 <strong>Azione Decisionale:</strong> ${match.action}
    </div>
  `;
}

// --- WIDGET 2: Ricerca Lineare vs Binaria ---
window.runSearchComparisonDemo = function() {
  const input = document.getElementById('searchTargetInput');
  let target = parseInt(input.value);
  if (isNaN(target) || target < 1) target = 1;
  if (target > 100) target = 100;
  input.value = target;

  const linearSteps = target; // In array [1..100], linear search takes target steps
  let binarySteps = 0;
  let low = 1, high = 100;
  while (low <= high) {
    binarySteps++;
    let mid = Math.floor((low + high) / 2);
    if (mid === target) break;
    if (mid < target) low = mid + 1;
    else high = mid - 1;
  }

  // Update Linear
  const linCounter = document.getElementById('linearStepCount');
  const linFill = document.getElementById('linearBarFill');
  const linStatus = document.getElementById('linearStatusMsg');
  if (linCounter) linCounter.innerText = `${linearSteps} passi`;
  if (linFill) linFill.style.width = `${linearSteps}%`;
  if (linStatus) linStatus.innerText = `Ha dovuto esaminare ogni singolo elemento da 1 a ${target}.`;

  // Update Binary
  const binCounter = document.getElementById('binaryStepCount');
  const binFill = document.getElementById('binaryBarFill');
  const binStatus = document.getElementById('binaryStatusMsg');
  if (binCounter) binCounter.innerText = `${binarySteps} passi`;
  if (binFill) binFill.style.width = `${Math.min(100, binarySteps * 14.2)}%`;
  if (binStatus) binStatus.innerText = `Dimezzando le possibilità ha isolato ${target} in soli ${binarySteps} confronti!`;

  // Verdict box
  const verdict = document.getElementById('searchVerdictBox');
  if (verdict) {
    verdict.style.display = 'block';
    const diff = Math.round(linearSteps / binarySteps);
    verdict.innerHTML = `
      🏆 <strong>Risultato:</strong> L'algoritmo di Ricerca Binaria è stato circa <strong>${diff} volte più veloce</strong>!<br>
      Immagina se l'elenco contenesse <strong>1.000.000</strong> di utenti: la ricerca lineare richiederebbe fino a 1.000.000 di passaggi, mentre la ricerca binaria ne impiegherebbe al massimo <strong>20</strong>!
    `;
  }
};

// --- WIDGET 3A: Sequenziatore Istruzioni CPU ---
window.cpuCurrentStep = 0;
window.cpuRegA = 5;

const cpuInstructions = [
  { text: "IMPOSTA Registro_A = 5", run: () => { window.cpuRegA = 5; } },
  { text: "AGGIUNGI 7 a Registro_A", run: () => { window.cpuRegA += 7; } },
  { text: "MOLTIPLICA Registro_A per 3", run: () => { window.cpuRegA *= 3; } },
  { text: "SE Registro_A > 30 ALLORA SOTTRAI 6", run: () => { if (window.cpuRegA > 30) window.cpuRegA -= 6; } },
  { text: "STAMPA Risultato", run: () => {} }
];

window.stepInstructionSequencer = function() {
  if (window.cpuCurrentStep >= cpuInstructions.length) {
    window.cpuCurrentStep = 0;
  }
  
  cpuInstructions[window.cpuCurrentStep].run();

  for (let i = 0; i < cpuInstructions.length; i++) {
    const row = document.getElementById(`codeRow${i}`);
    if (row) row.classList.toggle('active', i === window.cpuCurrentStep);
  }

  const pointer = document.getElementById('currentStepPointer');
  const regDisplay = document.getElementById('regAValue');
  const status = document.getElementById('cpuStatusText');

  if (pointer) pointer.innerText = `Passo ${window.cpuCurrentStep + 1}/5`;
  if (regDisplay) regDisplay.innerText = window.cpuRegA;
  if (status) {
    if (window.cpuCurrentStep === cpuInstructions.length - 1) {
      status.innerText = "ESECUZIONE COMPLETATA ✅";
      status.style.color = "#10b981";
    } else {
      status.innerText = "IN ESECUZIONE...";
      status.style.color = "#4f46e5";
    }
  }

  window.cpuCurrentStep++;
};

window.resetInstructionSequencer = function() {
  window.cpuCurrentStep = 0;
  window.cpuRegA = 5;
  for (let i = 0; i < cpuInstructions.length; i++) {
    const row = document.getElementById(`codeRow${i}`);
    if (row) row.classList.toggle('active', i === 0);
  }
  const pointer = document.getElementById('currentStepPointer');
  const regDisplay = document.getElementById('regAValue');
  const status = document.getElementById('cpuStatusText');
  if (pointer) pointer.innerText = "Passo 1/5";
  if (regDisplay) regDisplay.innerText = "5";
  if (status) {
    status.innerText = "PRONTO";
    status.style.color = "#10b981";
  }
};

// --- WIDGET 3B: Riproduzione Macchina di Ada Lovelace ---
window.lovelaceStep = 0;
const lovelaceSteps = [
  { row: 0, res: "V1=1, V2=2 caricate", status: "⚙️ Scheda 1: Variabili V1 e V2 impostate sulle colonne meccaniche della macchina." },
  { row: 1, res: "V3 = 2", status: "⚙️ Scheda 2: Meccanismo moltiplicatore attivato: V1 (1) × V2 (2) = V3 (2)." },
  { row: 2, res: "V4 = 4", status: "⚙️ Scheda 3: Meccanismo addizionatore attivato: V3 (2) + V2 (2) = V4 (4)." },
  { row: 3, res: "Ciclo 1 Concluso! (V4=4)", status: "🎉 Scheda 4: Ciclo della Note G completato con successo! Il risultato è impresso sui rulli di stampa!" }
];

window.crankLovelaceEngine = function() {
  if (window.lovelaceStep >= lovelaceSteps.length) {
    window.lovelaceStep = 0;
  }

  const current = lovelaceSteps[window.lovelaceStep];

  for (let i = 0; i < lovelaceSteps.length; i++) {
    const r = document.getElementById(`lovelaceRow${i}`);
    if (r) r.classList.toggle('current-step', i === current.row);
  }

  const resCell = document.getElementById(`lovelaceRes${current.row}`);
  if (resCell) resCell.innerText = current.res;

  const status = document.getElementById('lovelaceStatusBanner');
  if (status) status.innerText = current.status;

  window.lovelaceStep++;
};

window.resetLovelaceEngine = function() {
  window.lovelaceStep = 0;
  for (let i = 0; i < lovelaceSteps.length; i++) {
    const r = document.getElementById(`lovelaceRow${i}`);
    if (r) r.classList.toggle('current-step', i === 0);
    const resCell = document.getElementById(`lovelaceRes${i}`);
    if (resCell) resCell.innerText = i === 0 ? "Pronto" : "-";
  }
  const status = document.getElementById('lovelaceStatusBanner');
  if (status) status.innerText = "⚙️ Stato: Inserisci la prima scheda perforata girando la manovella.";
};

// Inizializza visualizzazione al caricamento di modulo 1
setTimeout(() => {
  if (typeof renderDecoderCard === 'function') renderDecoderCard();
}, 200);
