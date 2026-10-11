(window.courseData = window.courseData || []).push({
  id: 11,
  title: "11. Frontiere dell'Informatica: AI, LLM & Quantum Computing",
  keyRequired: "PYTHON-MASTER-909",
  nextKey: null,
  submodules: [
    {
      title: "11.1 Intelligenza Artificiale e Machine Learning: Come Funzionano e la Grande Differenza",
      content: `
        <h2>11.1 Intelligenza Artificiale e Machine Learning: La Rivoluzione dei Dati</h2>

        <p>Nei moduli precedenti abbiamo scoperto come funzionano i computer tradizionali: un programmatore umano inventa un algoritmo, scrive ogni singola riga di codice, e la CPU esegue gli ordini alla lettera. Questo approccio è perfetto per compiti di calcolo matematico, database o fogli di calcolo. Ma cosa succede se chiediamo a un computer: <em>"Riconosci se in questa fotografia c'è un gatto o una ciambella"?</em></p>

        <p>Scrivere regole rigide a mano per un compito del genere è praticamente impossibile! Quanti peli deve avere un gatto? Che forma hanno i baffi se il gatto è girato di lato o è al buio? E se la ciambella è quadrata? Il codice tradizionale si bloccherebbe subito con un errore.</p>

        <p>Qui entra in gioco la più grande svolta tecnologica del nostro tempo: l'<strong>Intelligenza Artificiale</strong> e il <strong>Machine Learning</strong>!</p>

        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Metodo</th>
                <th>Cosa diamo al Computer</th>
                <th>Cosa ottiene il Computer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Informatica Tradizionale</strong></td>
                <td>Dati grezzi + <strong>Regole scritte a mano dal programmatore</strong></td>
                <td><strong>Risultati ed esecuzioni</strong></td>
              </tr>
              <tr>
                <td><strong>Machine Learning (Apprendimento)</strong></td>
                <td>Dati + <strong>Migliaia di Esempi corretti (Foto di gatti e ciambelle)</strong></td>
                <td><strong>Il Modello! (Il computer impara da solo le regole)</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>La Mappa dei Termini: AI vs Machine Learning vs Deep Learning</h3>
        <p>Spesso in TV e sui social questi termini vengono confusi. Immaginali invece come tre scatole cinesi una dentro l'altra:</p>

        <ul>
          <li><strong>Intelligenza Artificiale (AI):</strong> La scatola più grande. È il grande sogno scientifico nato negli anni '50 di costruire macchine capaci di svolgere compiti che richiederebbero intelligenza umana (vedere, capire la lingua, prendere decisioni).</li>
          <li><strong>Machine Learning (ML):</strong> La scatola intermedia. È il modo più efficace per realizzare l'AI: invece di dire alla macchina cosa fare passo per passo, le permettiamo di <em>imparare dall'esperienza e dai dati</em>.</li>
          <li><strong>Deep Learning (Reti Neurali Profonde):</strong> La scatola più interna e potente! È la tecnologia dietro i riconoscitori facciali, le auto a guida autonoma e ChatGPT. Si basa su <strong>Reti Neurali Artificiali</strong> con tantissimi strati (layers), liberamente ispirate al funzionamento dei neuroni del nostro cervello.</li>
        </ul>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-11/ai-neural-network.jpg" alt="Rappresentazione semplice di una rete neurale a strati" loading="lazy">
          <div class="figure-caption">Una Rete Neurale Artificiale: i dati entrano a sinistra (Input), passano attraverso strati di neuroni nascosti che estraggono indizi e forme, e producono la risposta a destra (Output).</div>
        </div>

        <h3>I Tre Modi in cui una Macchina Impara</h3>
        <ol>
          <li><strong>Apprendimento Supervisionato (Con l'Insegnante):</strong> È come fare i compiti con il libro delle soluzioni. Mostriamo al computer 10.000 foto etichettate ("Questo è un cane", "Questo è un muffin"). Dopo averne viste a migliaia, il modello capisce i dettagli distintivi e sa riconoscere un cane anche in una foto mai vista prima!</li>
          <li><strong>Apprendimento Non Supervisionato (L'Esploratore Solitario):</strong> Nessuno dice alla macchina cosa c'è nei dati. La macchina analizza milioni di informazioni e scopre da sola raggruppamenti nascosti. È così che Spotify o YouTube capiscono quali brani e video consigliarti raggruppando gusti musicali simili!</li>
          <li><strong>Apprendimento per Rinforzo (Tentativi, Errori e Punti Premio):</strong> Come quando impari a giocare a un nuovo videogioco: all'inizio premi tasti a caso e perdi subito. Quando fai una mossa buona guadagni punti (+1), quando sbagli vieni penalizzato (-1). Provando milioni di volte, l'AI diventa un giocatore imbattibile (è così che algoritmi come AlphaGo hanno sconfitto i campioni mondiali di giochi complessi!).</li>
        </ol>

        <div class="callout-box info">
          <div class="callout-title">💡 La Metafora dello Sciatore nella Nebbia: Come Fa un Neurone a Imparare?</div>
          <p>Un neurone artificiale è un piccolo calcolatore che riceve degli <strong>indizi (Input)</strong>. A ciascun indizio assegna una manopola di importanza chiamata <strong>Peso (Weight)</strong>.<br>
          All'inizio tutte le manopole sono impostate a caso, quindi la risposta del neurone è completamente sbagliata. Ma il computer misura l'errore commesso e usa un trucco matematico chiamato <strong>Discesa del Gradiente</strong>:</p>
          <p><em>Immagina uno sciatore bloccato su una montagna in mezzo a una nebbia fittissima. Non vede la vallata, ma sotto gli scarponi sente da che parte scende la pendenza. Facendo un passetto dopo l'altro nella direzione che scende, prima o poi arriverà sano e salvo in fondo alla valle!</em><br>
          Allo stesso modo, la rete neurale regola leggermente i suoi pesi a ogni errore fino a quando sbaglia pochissimo!</p>
        </div>

        <!-- WIDGET 11.1: LABORATORIO DEL NEURONE AMICO -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🧠 Laboratorio Interattivo: Allena il Tuo Primo Neurone Artificiale!</span>
            <span class="widget-badge">Simulatore Semplice</span>
          </div>
          <div class="widget-body">
            <p>Vogliamo insegnare a questo neurone a riconoscere se l'animale misterioso è un <strong>Gatto (Obiettivo = 1.0)</strong> oppure no <strong>(Obiettivo = 0.0)</strong>, usando due indizi visivi!</p>

            <div class="neuron-workbench">
              <div class="neuron-controls-panel">
                <h4 style="margin: 0 0 10px 0; color: #818cf8; font-size: 0.95rem;">1. Gli Indizi in Ingresso (Input)</h4>
                
                <div class="neuron-slider-group">
                  <label>🐱 Indizio 1: Ha orecchie a punta? (0 = No, 1 = Sì): <strong id="lblInputX1">1.0</strong></label>
                  <input type="range" id="sliderX1" min="0" max="1" step="0.1" value="1.0" oninput="updateNeuronSim()">
                </div>

                <div class="neuron-slider-group">
                  <label>🐾 Indizio 2: Fa le fusa? (0 = No, 1 = Sì): <strong id="lblInputX2">0.8</strong></label>
                  <input type="range" id="sliderX2" min="0" max="1" step="0.1" value="0.8" oninput="updateNeuronSim()">
                </div>

                <h4 style="margin: 15px 0 10px 0; color: #34d399; font-size: 0.95rem;">2. Le Manopole del Neurone (Pesi regolabili)</h4>
                
                <div class="neuron-slider-group">
                  <label>⚖️ Peso 1 (Importanza Orecchie): <strong id="lblWeightW1">0.30</strong></label>
                  <input type="range" id="sliderW1" min="-2" max="2" step="0.05" value="0.3" oninput="updateNeuronSim()">
                </div>

                <div class="neuron-slider-group">
                  <label>⚖️ Peso 2 (Importanza Fusa): <strong id="lblWeightW2">0.20</strong></label>
                  <input type="range" id="sliderW2" min="-2" max="2" step="0.05" value="0.2" oninput="updateNeuronSim()">
                </div>

                <div class="neuron-slider-group">
                  <label>🎛️ Soglia / Bias (Inclinazione personale): <strong id="lblBiasB">-0.10</strong></label>
                  <input type="range" id="sliderB" min="-2" max="2" step="0.05" value="-0.1" oninput="updateNeuronSim()">
                </div>

                <div style="display: none;">
                  <input type="range" id="sliderY" value="1.0">
                  <span id="lblTargetY">1.0</span>
                  <select id="selActivation"><option value="sigmoid" selected>Sigmoide</option></select>
                </div>
              </div>

              <div class="neuron-display-panel">
                <div class="neuron-math-badge" id="neuronFormulaText">
                  Somma Ponderata (z) = 0.36
                </div>

                <div style="margin: 15px 0; text-align: center;">
                  <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px;">Certezza del Neurone:</div>
                  <div id="neuronOutputScore" style="font-size: 2.2rem; font-weight: 900; color: #38bdf8; font-family: monospace;">
                    58.9%
                  </div>
                  <div id="neuronFriendlyVerdict" style="font-size: 1rem; font-weight: bold; margin-top: 6px; color: #fbbf24;">
                    🤔 "Sono ancora insicuro... serve altro allenamento!"
                  </div>
                </div>

                <div style="background: rgba(0,0,0,0.25); border-radius: 8px; padding: 12px; margin-bottom: 15px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
                    <span>Errore da correggere (Loss):</span>
                    <strong id="lblLossScore" style="color: #f87171;">0.084</strong>
                  </div>
                  <div class="neuron-loss-bar-container">
                    <div class="neuron-loss-bar" id="neuronLossBar" style="width: 42%;"></div>
                  </div>
                </div>

                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button class="btn-primary" style="flex: 1;" onclick="stepGradientDescent()">
                    🎓 Fai un Passo di Allenamento!
                  </button>
                  <button class="btn-secondary" onclick="resetNeuronSim()">
                    ↺ Reset Pesi
                  </button>
                </div>
                <div id="neuronTrainNotice" style="font-size: 0.8rem; color: #34d399; margin-top: 8px; text-align: center; min-height: 18px;"></div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "11.2 Large Language Models (LLM): Come Funzionano ChatGPT e le AI che Parlano",
      content: `
        <h2>11.2 Large Language Models: Dentro la Scatola Magica di ChatGPT</h2>

        <p>Negli ultimi anni hai sicuramente usato o sentito parlare di <strong>ChatGPT, Claude o Google Gemini</strong>. Possono scrivere favole, spiegare la fisica quantistica, inventare canzoni o aiutarti a trovare un errore in un codice Python.</p>

        <p>Ma come fanno a "parlare" così bene? Hanno davvero una coscienza umana dentro i server? La risposta è affascinante e sorprendente: <strong>no, sono i più potenti "completatori automatici" mai costruiti dall'umanità!</strong></p>

        <div class="callout-box tip">
          <div class="callout-title">📱 La Tastiera dello Smartphone alla Ennesima Potenza</div>
          <p>Quando scrivi un messaggio con lo smartphone e digiti: <em>"Ci vediamo..."</em>, la tastiera ti suggerisce: <em>"dopo", "stasera", "domani"</em>.<br>
          Un <strong>Large Language Model (LLM)</strong> fa esattamente questo: prende tutte le parole che gli hai scritto (il tuo <strong>Prompt</strong>) e calcola matematicamente qual è la parola o sillaba successiva più probabile e sensata nel mondo. Ma lo fa avendo "letto" quasi tutto ciò che l'umanità ha mai scritto su Internet!</p>
        </div>

        <h3>Il Viaggio di una Frase nei Livelli (Layers) del Transformer</h3>
        <p>Tutti gli LLM moderni usano un'architettura inventata nel 2017 chiamata <strong>Transformer</strong>. Quando scrivi una frase a un'AI, il testo compie un viaggio straordinario attraverso 5 livelli:</p>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-11/transformer-architecture.png" alt="Architettura Transformer con token, attention e strati profondi" loading="lazy">
          <div class="figure-caption">L'Architettura del Transformer: il testo viene trasformato in numeri (Token), arricchito dal contesto con l'Attention, elaborato dagli strati profondi e trasformato nella predizione della parola successiva.</div>
        </div>

        <ol>
          <li><strong>Livello 1: La Fabbrica dei Token (Spezzettare le parole):</strong>
            I computer non sanno cosa sia la lettera 'A' o 'Z': capiscono solo i numeri! Quindi il modello spezzetta la frase in tesserine chiamate <strong>Token</strong> (che possono essere parole intere o pezzi di sillabe). Ad esempio, la parola <em>"Informatica"</em> viene divisa in <code>["Infor", "matica"]</code> e a ciascuna viene assegnato un codice numerico univoco (come una targa d'auto).
          </li>

          <li><strong>Livello 2: La Mappa dei Significati (Embeddings):</strong>
            Ogni parola viene posizionata su una gigantesca "mappa spaziale" con migliaia di dimensioni. Le parole con significato simile si trovano vicine! Nella mappa del computer, <em>"cane"</em> e <em>"gatto"</em> sono vicini di casa, mentre <em>"carota"</em> si trova in un altro quartiere. C'è una magia incredibile: la distanza tra <em>"Re"</em> e <em>"Regina"</em> è la stessa che c'è tra <em>"Uomo"</em> e <em>"Donna"</em>!
          </li>

          <li><strong>Livello 3: Il Meccanismo dell'Attenzione (Self-Attention - Il vero colpo di genio!):</strong>
            Come fa l'AI a capire la parola <strong>"banco"</strong>? Può significare il banco di scuola o lo sportello della banca!<br>
            Qui entra in gioco il meccanismo dell'<strong>Attenzione</strong>: mentre legge la parola "banco", il modello lancia dei "raggi di luce" su tutte le altre parole della frase. Se trova le parole <em>"quaderno"</em> e <em>"lezione"</em>, capisce subito che stiamo parlando di scuola; se trova <em>"soldi"</em> e <em>"conto"</em>, capisce che è una banca! L'Attenzione permette all'AI di comprendere il contesto perfetto di ogni singola parola.
          </li>

          <li><strong>Livello 4: Gli Strati Profondi di Memoria (Deep Layers):</strong>
            Il testo passa attraverso decine (o centinaia) di strati sovrapposti. Nei primi strati la rete controlla la grammatica; negli strati intermedi collega i fatti e i ricordi; negli strati finali elabora il ragionamento logico e la risposta.
          </li>

          <li><strong>Livello 5: La Scelta della Parola Finale (La "Temperatura"):</strong>
            Alla fine, il modello assegna un punteggio percentuale a tutte le parole del dizionario. Con un parametro chiamato <strong>Temperatura</strong> possiamo decidere il suo stile:
            <ul>
              <li><strong>Temperatura Bassa (0.1):</strong> L'AI sceglie sempre la parola più ovvia e sicura (ottimo per la matematica e il codice).</li>
              <li><strong>Temperatura Alta (0.8):</strong> L'AI sceglie parole più rare e originali, diventando fantasiosa e creativa (ottimo per scrivere fiabe o poesie!).</li>
            </ul>
          </li>
        </ol>

        <!-- WIDGET 11.2: ESPLORATORE DELL'ATTENZIONE E NEXT-TOKEN -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🤖 Laboratorio Interattivo: L'Attenzione e il Completamento dell'AI</span>
            <span class="widget-badge">Simulatore LLM</span>
          </div>
          <div class="widget-body">
            <p>Scegli una frase e clicca sulle parole per vedere i <strong>raggi dell'Attenzione</strong> illuminare le parole collegate nel contesto:</p>

            <div class="transformer-workbench">
              <div class="sample-picker-row">
                <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: bold;">Scegli una Frase:</span>
                <button class="sample-phrase-btn active" id="btnSample0" onclick="loadTransformerSample(0)">🐱 Il gatto e l'albero</button>
                <button class="sample-phrase-btn" id="btnSample1" onclick="loadTransformerSample(1)">🚀 La missione su Marte</button>
                <button class="sample-phrase-btn" id="btnSample2" onclick="loadTransformerSample(2)">🏰 Il castello incantato</button>
              </div>

              <!-- Visualizzatore Token -->
              <div style="margin: 15px 0;">
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px;">
                  1. Clicca su un Token per vedere dove concentra la sua attenzione:
                </div>
                <div class="token-sentence-box" id="tokenSentenceBox">
                  <!-- Token Pills inseriti via JS -->
                </div>
              </div>

              <!-- Mappa di Attenzione Visiva -->
              <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border); border-radius: 10px; padding: 15px; margin-bottom: 15px;">
                <div style="font-size: 0.88rem; font-weight: bold; color: #a78bfa; margin-bottom: 8px;">
                  💡 Raggi di Attenzione per la parola: <span id="lblActiveTokenName" style="color: #38bdf8;">"..."</span>
                </div>
                <div id="attentionBarsContainer">
                  <!-- Barre di attenzione generate dinamicamente -->
                </div>
                <div id="attentionExplainText" style="font-size: 0.82rem; color: var(--text-muted); margin-top: 10px; line-height: 1.5;"></div>
              </div>

              <!-- Previsione della Parola Successiva (Next Token) -->
              <div>
                <div style="font-size: 0.88rem; font-weight: bold; color: #34d399; margin-bottom: 8px;">
                  🔮 Cosa prevede l'AI come parola successiva più probabile?
                </div>
                <div class="next-token-predictions-grid" id="predictionsGrid">
                  <!-- 4 card delle parole previste -->
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "11.3 Il Calcolo Quantistico: Benvenuti nel Mondo dei Qubit e dell'Impossibile!",
      content: `
        <h2>11.3 Il Calcolo Quantistico: La Fisica dell'Impossibile</h2>

        <p>Nei primi dieci moduli abbiamo studiato le meraviglie dell'informatica classica: circuiti integrati di silicio, bit, registri e porte logiche. Ma nel mondo dell'infinitamente piccolo (le particelle come elettroni e fotoni), le leggi della fisica che conosciamo smettono di funzionare e lasciano il posto alla misteriosa e sbalorditiva <strong>Meccanica Quantistica</strong>!</p>

        <p>I computer quantistici non sono semplicemente computer classici "più veloci": sono macchine basate su un modo completamente nuovo di elaborare l'universo!</p>

        <h3>La Moneta che Gira: Dal Bit al Qubit</h3>
        <p>Nel computer normale, l'unità fondamentale è il <strong>Bit</strong>: come un interruttore della luce, può essere solo <strong>0 (Spento)</strong> o <strong>1 (Acceso)</strong>.</p>

        <p>Immagina ora una moneta poggiata sul tavolo: vedi Testa (0) o Croce (1). Ma cosa succede se <strong>fai girare la moneta vorticosamente su se stessa</strong> con le dita?</p>

        <div class="callout-box tip">
          <div class="callout-title">🪙 Il Segreto del Qubit: La Sovrapposizione Quantistica</div>
          <p>Mentre la moneta gira sul tavolo, è contemporaneamente un po' Testa e un po' Croce! Non ha ancora deciso cosa essere finché non ci metti sopra la mano per fermarla.<br>
          Questo è il <strong>Qubit (Quantum Bit)</strong>: grazie al principio della <strong>Sovrapposizione Quantistica</strong>, un qubit non è costretto a essere 0 o 1, ma può trovarsi in una combinazione simultanea di entrambi!</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-11/quantum-computer.jpg" alt="Un computer quantistico moderno a forma di lampadario dorato criogenico" loading="lazy">
          <div class="figure-caption">Un moderno computer quantistico: la struttura a 'lampadario dorato' è un criostato che raffredda il chip a -273 °C per proteggere i delicatissimi qubit.</div>
        </div>

        <h3>Il Superpotere Quantistico: Il Labirinto Esplorato Tutto Insieme</h3>
        <p>Perché la sovrapposizione è così rivoluzionaria? Immagina un labirinto gigante con un milione di percorsi possibili:</p>

        <ul>
          <li><strong>Un computer normale:</strong> È come un corridore veloce. Prova la strada 1: vicolo cieco! Torna indietro, prova la strada 2: vicolo cieco! Deve provare una strada alla volta, in sequenza.</li>
          <li><strong>Un computer quantistico:</strong> Grazie alla sovrapposizione, è come se un'onda d'acqua venisse versata nel labirinto: <strong>imbocca tutte le strade contemporaneamente nello stesso istante!</strong> Con soli 30 qubit, un processore quantistico può esplorare più di <em>1 miliardo di possibilità simultanee</em>!</li>
        </ul>

        <h3>L'Entanglement: I Gemelli Magici a Distanza</h3>
        <p>C'è un secondo fenomeno ancora più bizzarro chiamato <strong>Entanglement Quantistico (Intreccio)</strong>:</p>
        <p>Possiamo collegare due qubit in modo speciale. Se lo facciamo, i due qubit diventano come "gemelli telepatici". Anche se allontaniamo un qubit a Roma e l'altro sulla Luna, nel momento esatto in cui misuriamo il primo, il secondo reagisce istantaneamente nello stesso millisecondo! Albert Einstein era così disorientato da questa scoperta da definirla scherzosamente <em>"un'azione spettrale a distanza"</em>.</p>

        <h3>Perché Non Abbiamo un Computer Quantistico nello Smartphone?</h3>
        <p>Se sono così potenti, perché non li usiamo per giocare a Minecraft? Perché i qubit sono fragilissimi!</p>
        <ul>
          <li>Un piccolissimo raggio di luce, un briciolo di calore o una minima vibrazione distruggono la sovrapposizione (questo disastro si chiama <strong>Decoerenza</strong>).</li>
          <li>Per funzionare, i computer quantistici devono essere racchiusi in enormi "lampadari" di rame dorato chiamati <strong>criostati</strong>, raffreddati a <strong>-273 °C (vicino allo zero assoluto)</strong>: una temperatura più fredda dello spazio profondo tra le stelle!</li>
        </ul>

        <div class="callout-box warning">
          <div class="callout-title">🔐 La Minaccia alla Crittografia e le Cure del Futuro</div>
          <p>Nel 1994, il matematico Peter Shor scoprì che un computer quantistico sufficientemente grande potrebbe frantumare facilmente la sicurezza di algoritmi come RSA, usati per proteggere le banche e le password di tutto il mondo. Per questo gli scienziati stanno già costruendo nuovi cifrari protetti chiamati <strong>Crittografia Post-Quantistica</strong>!<br>
          Allo stesso tempo, i computer quantistici promettono di simulare le molecole atomo per atomo, aiutandoci a inventare <strong>nuovi farmaci salvavita</strong>, materiali superconduttori e batterie verdi per salvare il pianeta.</p>
        </div>

        <!-- WIDGET 11.3: LABORATORIO DELLA MONETA QUANTISTICA -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚡ Laboratorio Interattivo: La Moneta Quantistica e il Collasso della Misura</span>
            <span class="widget-badge">Simulatore Semplificato</span>
          </div>
          <div class="widget-body">
            <p>Metti il Qubit in rotazione (sovrapposizione) e poi premi <strong>Misura!</strong> per vedere l'effetto del collasso quantistico:</p>

            <div class="quantum-workbench">
              <div class="quantum-bloch-box">
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">Stato Attuale del Qubit:</div>
                <div class="quantum-state-ket" id="quantumKetEquation" style="font-size: 1.5rem; color: #38bdf8;">
                  |ψ⟩ = 1.000 |0⟩ + 0.000 |1⟩
                </div>
                <div id="quantumStateDesc" style="font-size: 0.95rem; color: #a78bfa; margin: 10px 0; font-weight: 500;">
                  🪙 Moneta ferma: Stato certo al 100% su |0⟩ (Testa).
                </div>

                <!-- Grafico Probabilità -->
                <div style="margin: 15px 0;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
                    <span>Probabilità di trovare <strong>|0⟩ (Testa)</strong>:</span>
                    <strong id="probValZero" style="color: #34d399;">100.0%</strong>
                  </div>
                  <div class="quantum-prob-track">
                    <div class="quantum-prob-bar" id="probBarZero" style="width: 100%; background: #10b981;"></div>
                  </div>

                  <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-top: 10px; margin-bottom: 4px;">
                    <span>Probabilità di trovare <strong>|1⟩ (Croce)</strong>:</span>
                    <strong id="probValOne" style="color: #f472b6;">0.0%</strong>
                  </div>
                  <div class="quantum-prob-track">
                    <div class="quantum-prob-bar" id="probBarOne" style="width: 0%; background: #ec4899;"></div>
                  </div>
                </div>

                <div id="quantumMeasurementResult" style="display: none; padding: 12px; border-radius: 8px; margin-top: 12px; border: 1px solid; font-size: 0.9rem;"></div>
              </div>

              <div class="quantum-circuit-box">
                <h4 style="margin: 0 0 10px 0; font-size: 0.95rem; color: #818cf8;">🎛️ Azioni Quantistiche Disponibili:</h4>
                
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  <button class="quantum-gate-btn" onclick="applyQuantumGate('H')">
                    🌪️ Fai Girare la Moneta (Porta di Hadamard 'H')
                    <span style="display: block; font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">Crea sovrapposizione perfetta: 50% Testa e 50% Croce!</span>
                  </button>

                  <button class="quantum-gate-btn" onclick="applyQuantumGate('X')">
                    🔄 Ribalta la Moneta (Porta NOT Quantistica 'X')
                    <span style="display: block; font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">Scambia lo stato: se era 0 diventa 1, se era 1 diventa 0.</span>
                  </button>

                  <button class="btn-primary" style="background: #e11d48; padding: 12px; font-size: 1rem; margin-top: 6px;" onclick="performQuantumMeasurement()">
                    ✋ Ferma e Misura la Moneta! (Collasso Quantistico)
                  </button>
                </div>

                <div id="quantumMeasurementStats" style="font-size: 0.82rem; color: var(--text-muted); margin-top: 15px; text-align: center; line-height: 1.5;">
                  Misure effettuate: 0 (Zeri: 0 | Uni: 0)
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ]
});

/* =========================================================
   LOGICA JAVASCRIPT DEI WIDGET DEL MODULO 11
   ========================================================= */

// --- WIDGET 11.1: SIMULATORE DEL NEURONE ARTIFICIALE ---
window.neuronState = {
  x1: 1.0,
  w1: 0.3,
  x2: 0.8,
  w2: 0.2,
  b: -0.1,
  targetY: 1.0,
  stepCount: 0
};

window.updateNeuronSim = function() {
  const sX1 = document.getElementById('sliderX1');
  const sW1 = document.getElementById('sliderW1');
  const sX2 = document.getElementById('sliderX2');
  const sW2 = document.getElementById('sliderW2');
  const sB  = document.getElementById('sliderB');

  if (!sX1 || !sW1 || !sX2 || !sW2 || !sB) return;

  window.neuronState.x1 = parseFloat(sX1.value);
  window.neuronState.w1 = parseFloat(sW1.value);
  window.neuronState.x2 = parseFloat(sX2.value);
  window.neuronState.w2 = parseFloat(sW2.value);
  window.neuronState.b  = parseFloat(sB.value);

  const lblX1 = document.getElementById('lblInputX1');
  const lblW1 = document.getElementById('lblWeightW1');
  const lblX2 = document.getElementById('lblInputX2');
  const lblW2 = document.getElementById('lblWeightW2');
  const lblB  = document.getElementById('lblBiasB');

  if (lblX1) lblX1.innerText = window.neuronState.x1.toFixed(1);
  if (lblW1) lblW1.innerText = window.neuronState.w1.toFixed(2);
  if (lblX2) lblX2.innerText = window.neuronState.x2.toFixed(1);
  if (lblW2) lblW2.innerText = window.neuronState.w2.toFixed(2);
  if (lblB)  lblB.innerText  = window.neuronState.b.toFixed(2);

  // Somma ponderata z = (x1 * w1) + (x2 * w2) + b
  const z = (window.neuronState.x1 * window.neuronState.w1) + 
            (window.neuronState.x2 * window.neuronState.w2) + 
            window.neuronState.b;

  // Funzione sigmoide 1 / (1 + e^-z) per avere una percentuale 0..100%
  const out = 1.0 / (1.0 + Math.exp(-z));
  const loss = Math.pow(out - window.neuronState.targetY, 2);

  const formulaEl = document.getElementById('neuronFormulaText');
  const scoreEl = document.getElementById('neuronOutputScore');
  const verdictEl = document.getElementById('neuronFriendlyVerdict');
  const lossScoreEl = document.getElementById('lblLossScore');
  const lossBarEl = document.getElementById('neuronLossBar');

  if (formulaEl) formulaEl.innerText = `Somma Indizi (z) = ${z.toFixed(2)}`;
  if (scoreEl) scoreEl.innerText = `${(out * 100).toFixed(1)}%`;
  
  if (verdictEl) {
    if (out >= 0.85) {
      verdictEl.innerText = "😺 \"Sicurissimo! È un Gatto al 100%!\"";
      verdictEl.style.color = "#34d399";
    } else if (out >= 0.55) {
      verdictEl.innerText = "🤔 \"Penso sia un gatto, ma ho ancora qualche dubbio...\"";
      verdictEl.style.color = "#fbbf24";
    } else {
      verdictEl.innerText = "❌ \"Non mi sembra affatto un gatto!\"";
      verdictEl.style.color = "#f87171";
    }
  }

  if (lossScoreEl) lossScoreEl.innerText = loss.toFixed(3);
  if (lossBarEl) lossBarEl.style.width = `${Math.min(100, Math.max(3, loss * 100))}%`;
};

window.stepGradientDescent = function() {
  const state = window.neuronState;
  const z = (state.x1 * state.w1) + (state.x2 * state.w2) + state.b;
  const out = 1.0 / (1.0 + Math.exp(-z));
  const err = out - state.targetY; // errore rispetto all'obiettivo 1.0

  // Passo di discesa: riduce l'errore aumentando leggermente i pesi positivi
  const learningRate = 0.4;
  state.w1 -= learningRate * err * state.x1;
  state.w2 -= learningRate * err * state.x2;
  state.b  -= learningRate * err * 0.5;

  state.stepCount++;

  const sW1 = document.getElementById('sliderW1');
  const sW2 = document.getElementById('sliderW2');
  const sB  = document.getElementById('sliderB');
  if (sW1) sW1.value = state.w1.toFixed(2);
  if (sW2) sW2.value = state.w2.toFixed(2);
  if (sB)  sB.value  = state.b.toFixed(2);

  const notice = document.getElementById('neuronTrainNotice');
  if (notice) {
    notice.innerText = `✨ Passo #${state.stepCount} completato! I pesi sono stati corretti per ridurre l'errore.`;
  }

  window.updateNeuronSim();
};

window.resetNeuronSim = function() {
  window.neuronState = {
    x1: 1.0, w1: 0.3,
    x2: 0.8, w2: 0.2,
    b: -0.1, targetY: 1.0,
    stepCount: 0
  };
  const sX1 = document.getElementById('sliderX1');
  const sW1 = document.getElementById('sliderW1');
  const sX2 = document.getElementById('sliderX2');
  const sW2 = document.getElementById('sliderW2');
  const sB  = document.getElementById('sliderB');
  if (sX1) sX1.value = 1.0;
  if (sW1) sW1.value = 0.3;
  if (sX2) sX2.value = 0.8;
  if (sW2) sW2.value = 0.2;
  if (sB)  sB.value  = -0.1;
  const notice = document.getElementById('neuronTrainNotice');
  if (notice) notice.innerText = "";
  window.updateNeuronSim();
};

window.renderNeuronPlayground = function() {
  window.updateNeuronSim();
};

// --- WIDGET 11.2: ESPLORATORE DELL'ATTENZIONE E TRANSFORMER ---
window.transformerSamples = [
  {
    tokens: ["Il", "gatto", "si", "è", "arrampicato", "sull'albero", "perché", "voleva", "giocare", "con"],
    activeIdx: 1, // "gatto"
    attentionMap: {
      "gatto": {
        highlights: { "gatto": 1.0, "arrampicato": 0.85, "albero": 0.7, "giocare": 0.65 },
        explain: "L'attenzione collega strettamente <strong>'gatto'</strong> ad <strong>'arrampicato'</strong> e <strong>'giocare'</strong>, capendo che il soggetto dell'azione è l'animale!"
      },
      "arrampicato": {
        highlights: { "arrampicato": 1.0, "gatto": 0.8, "sull'albero": 0.95 },
        explain: "L'azione <strong>'arrampicato'</strong> si collega all'oggetto dove avviene l'azione: <strong>'sull'albero'</strong>."
      },
      "giocare": {
        highlights: { "giocare": 1.0, "gatto": 0.75, "voleva": 0.8, "con": 0.9 },
        explain: "Il verbo <strong>'giocare'</strong> richiede di sapere <em>con cosa</em> giocare, preparando il modello alla parola successiva!"
      }
    },
    predictions: [
      { word: "una foglia", prob: "45%" },
      { word: "un gomitolo", prob: "30%" },
      { word: "un uccellino", prob: "18%" },
      { word: "un ramo", prob: "7%" }
    ]
  },
  {
    tokens: ["La", "navicella", "spaziale", "ha", "acceso", "i", "motori", "ed", "è", "partita", "verso"],
    activeIdx: 1, // "navicella"
    attentionMap: {
      "navicella": {
        highlights: { "navicella": 1.0, "spaziale": 0.95, "motori": 0.8, "partita": 0.7 },
        explain: "La parola <strong>'navicella'</strong> è fortemente associata a <strong>'spaziale'</strong> e <strong>'motori'</strong>: il modello sa che si parla di un viaggio nel cosmo!"
      },
      "motori": {
        highlights: { "motori": 1.0, "acceso": 0.9, "navicella": 0.75 },
        explain: "I <strong>'motori'</strong> sono legati ad <strong>'acceso'</strong>: rappresentano la propulsione di lancio."
      },
      "verso": {
        highlights: { "verso": 1.0, "partita": 0.85, "spaziale": 0.8, "navicella": 0.7 },
        explain: "La preposizione <strong>'verso'</strong> richiede una destinazione astronomica coerente con una navicella spaziale!"
      }
    },
    predictions: [
      { word: "Marte", prob: "52%" },
      { word: "la Luna", prob: "31%" },
      { word: "lo spazio profondo", prob: "12%" },
      { word: "la stazione orbitale", prob: "5%" }
    ]
  },
  {
    tokens: ["Nel", "castello", "incantato", "il", "mago", "aprì", "il", "suo", "antico", "libro", "di"],
    activeIdx: 4, // "mago"
    attentionMap: {
      "mago": {
        highlights: { "mago": 1.0, "castello": 0.7, "incantato": 0.85, "libro": 0.9 },
        explain: "Il <strong>'mago'</strong> è in un contesto fantastico e possiede un <strong>'libro antico'</strong>: il modello prevede oggetti di magia!"
      },
      "libro": {
        highlights: { "libro": 1.0, "antico": 0.85, "mago": 0.9, "di": 0.95 },
        explain: "Un <strong>'libro antico'</strong> posseduto da un mago è quasi certamente un libro di incantesimi o pozioni!"
      }
    },
    predictions: [
      { word: "incantesimi", prob: "58%" },
      { word: "magia", prob: "26%" },
      { word: "pozioni", prob: "11%" },
      { word: "segreti", prob: "5%" }
    ]
  }
];

window.currentTransSampleIdx = 0;
window.currentActiveTokenText = "gatto";

window.loadTransformerSample = function(idx) {
  window.currentTransSampleIdx = idx;
  const sample = window.transformerSamples[idx];
  [0, 1, 2].forEach(i => {
    const btn = document.getElementById(`btnSample${i}`);
    if (btn) btn.classList.toggle('active', i === idx);
  });
  const firstKey = Object.keys(sample.attentionMap)[0];
  window.currentActiveTokenText = firstKey;
  window.renderAttentionExplorer();
};

window.selectActiveToken = function(tokText) {
  window.currentActiveTokenText = tokText;
  window.renderAttentionExplorer();
};

window.renderAttentionExplorer = function() {
  const sample = window.transformerSamples[window.currentTransSampleIdx];
  const sentenceBox = document.getElementById('tokenSentenceBox');
  const label = document.getElementById('lblActiveTokenName');
  const barsContainer = document.getElementById('attentionBarsContainer');
  const explainEl = document.getElementById('attentionExplainText');
  const predGrid = document.getElementById('predictionsGrid');

  if (!sentenceBox || !barsContainer) return;

  // Render tokens
  sentenceBox.innerHTML = "";
  sample.tokens.forEach(tok => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `token-pill-btn ${tok === window.currentActiveTokenText ? 'active' : ''}`;
    btn.innerText = tok;
    btn.onclick = () => window.selectActiveToken(tok);
    sentenceBox.appendChild(btn);
  });

  if (label) label.innerText = `"${window.currentActiveTokenText}"`;

  // Dati di attenzione
  let attData = sample.attentionMap[window.currentActiveTokenText];
  if (!attData) {
    attData = {
      highlights: { [window.currentActiveTokenText]: 1.0 },
      explain: `La parola <strong>"${window.currentActiveTokenText}"</strong> scambia attenzione con il resto della frase.`
    };
  }

  // Render barre
  barsContainer.innerHTML = "";
  sample.tokens.forEach(tok => {
    const score = attData.highlights[tok] || (tok === window.currentActiveTokenText ? 1.0 : 0.15);
    const row = document.createElement('div');
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "8px";
    row.style.marginBottom = "5px";

    const tokLabel = document.createElement('span');
    tokLabel.style.width = "100px";
    tokLabel.style.fontSize = "0.8rem";
    tokLabel.style.textAlign = "right";
    tokLabel.style.color = tok === window.currentActiveTokenText ? "#38bdf8" : "var(--text-muted)";
    tokLabel.innerText = tok;

    const barTrack = document.createElement('div');
    barTrack.style.flex = "1";
    barTrack.style.height = "10px";
    barTrack.style.background = "rgba(255,255,255,0.06)";
    barTrack.style.borderRadius = "5px";
    barTrack.style.overflow = "hidden";

    const barFill = document.createElement('div');
    barFill.style.height = "100%";
    barFill.style.width = `${score * 100}%`;
    barFill.style.background = tok === window.currentActiveTokenText ? "#38bdf8" : (score > 0.6 ? "#a78bfa" : "#64748b");
    barFill.style.transition = "width 0.3s ease";

    const scoreNum = document.createElement('span');
    scoreNum.style.fontSize = "0.75rem";
    scoreNum.style.width = "40px";
    scoreNum.style.color = "var(--text-muted)";
    scoreNum.innerText = `${Math.round(score * 100)}%`;

    barTrack.appendChild(barFill);
    row.appendChild(tokLabel);
    row.appendChild(barTrack);
    row.appendChild(scoreNum);
    barsContainer.appendChild(row);
  });

  if (explainEl) explainEl.innerHTML = attData.explain;

  // Render previsioni
  if (predGrid) {
    predGrid.innerHTML = "";
    sample.predictions.forEach(p => {
      const card = document.createElement('div');
      card.className = "next-token-card";
      card.innerHTML = `
        <div style="font-size: 1.1rem; font-weight: bold; color: #38bdf8;">"${p.word}"</div>
        <div style="font-size: 0.85rem; color: #34d399; font-weight: bold; margin-top: 4px;">Probabilità: ${p.prob}</div>
      `;
      predGrid.appendChild(card);
    });
  }
};

// --- WIDGET 11.3: SIMULATORE DELLA MONETA QUANTISTICA & QUBIT ---
window.quantumSimState = {
  isSuperposition: false,
  alpha: 1.0, // |0>
  beta: 0.0,  // |1>
  measurements: { zeros: 0, ones: 0, total: 0 }
};

window.applyQuantumGate = function(gate) {
  const q = window.quantumSimState;
  const banner = document.getElementById('quantumMeasurementResult');
  if (banner) banner.style.display = 'none';

  if (gate === 'H') {
    // Porta di Hadamard: mette in sovrapposizione equiprobabile (50% / 50%)
    q.isSuperposition = true;
    q.alpha = Math.SQRT1_2; // 0.707
    q.beta = Math.SQRT1_2;  // 0.707
  } else if (gate === 'X') {
    // Porta NOT quantistica: inverte le ampiezze
    const tmp = q.alpha;
    q.alpha = q.beta;
    q.beta = tmp;
  } else if (gate === 'Z') {
    q.beta = -q.beta;
  }

  window.renderQuantumLab();
};

window.performQuantumMeasurement = function() {
  const q = window.quantumSimState;
  const pZero = Math.pow(q.alpha, 2);
  const rnd = Math.random();

  const measuredValue = rnd < pZero ? 0 : 1;

  // Il collasso della funzione d'onda proietta istantaneamente lo stato!
  if (measuredValue === 0) {
    q.alpha = 1.0;
    q.beta = 0.0;
    q.measurements.zeros++;
  } else {
    q.alpha = 0.0;
    q.beta = 1.0;
    q.measurements.ones++;
  }
  q.isSuperposition = false;
  q.measurements.total++;

  const banner = document.getElementById('quantumMeasurementResult');
  if (banner) {
    banner.style.display = 'block';
    banner.style.background = measuredValue === 0 ? '#0f3b2e' : '#4a154b';
    banner.style.borderColor = measuredValue === 0 ? '#34d399' : '#f472b6';
    banner.style.color = measuredValue === 0 ? '#6ee7b7' : '#fbcfe8';
    banner.innerHTML = `⚡ <strong>Collasso Quantistico Avvenuto!</strong><br>La moneta si è fermata su: <span style="font-size: 1.5rem; font-weight: 900;">|${measuredValue}⟩ (${measuredValue === 0 ? 'Testa' : 'Croce'})</span>.<br>La sovrapposizione è svanita e il Qubit è ora fissato su questo valore definitivo.`;
  }

  window.renderQuantumLab();
};

window.renderQuantumLab = function() {
  const q = window.quantumSimState;
  const eqEl = document.getElementById('quantumKetEquation');
  const descEl = document.getElementById('quantumStateDesc');
  const probValZ = document.getElementById('probValZero');
  const probValO = document.getElementById('probValOne');
  const probBarZ = document.getElementById('probBarZero');
  const probBarO = document.getElementById('probBarOne');
  const statsEl = document.getElementById('quantumMeasurementStats');

  if (!eqEl || !probValZ || !probValO) return;

  const pZero = Math.pow(q.alpha, 2);
  const pOne = Math.pow(q.beta, 2);

  const sign = q.beta >= 0 ? '+' : '-';
  eqEl.innerText = `|ψ⟩ = ${q.alpha.toFixed(3)} |0⟩ ${sign} ${Math.abs(q.beta).toFixed(3)} |1⟩`;

  if (Math.abs(q.alpha - 1.0) < 0.001) {
    descEl.innerText = "🪙 Moneta ferma: Stato certo al 100% su |0⟩ (Testa).";
  } else if (Math.abs(q.beta - 1.0) < 0.001) {
    descEl.innerText = "🪙 Moneta ferma: Stato certo al 100% su |1⟩ (Croce).";
  } else if (Math.abs(pZero - 0.5) < 0.05) {
    descEl.innerText = "🌪️ Moneta che gira vorticosamente: Sovrapposizione perfetta (50% Testa / 50% Croce)!";
  } else {
    descEl.innerText = "🌀 Sovrapposizione quantistica attiva: probabilità sbilanciata.";
  }

  probValZ.innerText = `${(pZero * 100).toFixed(1)}%`;
  probValO.innerText = `${(pOne * 100).toFixed(1)}%`;

  if (probBarZ) probBarZ.style.width = `${pZero * 100}%`;
  if (probBarO) probBarO.style.width = `${pOne * 100}%`;

  if (statsEl) {
    const total = q.measurements.total;
    const z = q.measurements.zeros;
    const o = q.measurements.ones;
    statsEl.innerText = `Misure effettuate: ${total} (Testa/0: ${z} [${total ? Math.round(z/total*100) : 0}%] | Croce/1: ${o} [${total ? Math.round(o/total*100) : 0}%])`;
  }
};
