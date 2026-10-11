(window.courseData = window.courseData || []).push({
  id: 11,
  title: "11. Frontiere dell'Informatica: AI, LLM & Quantum Computing",
  keyRequired: "PYTHON-MASTER-909",
  nextKey: null,
  submodules: [
    {
      title: "11.1 Intelligenza Artificiale e Machine Learning: Paradigmi, Reti Neurali e Addestramento",
      content: `
        <h2>11.1 Intelligenza Artificiale e Machine Learning: La Rivoluzione dei Dati</h2>

        <p>Nei moduli precedenti abbiamo esplorato il modello computazionale classico: un programmatore umano progetta un algoritmo deterministico, scrive il codice sorgente, lo compila o interpreta, e la CPU esegue le istruzioni riga per riga manipolando la memoria. Questo approccio (noto come <strong>Software 1.0</strong>) è ideale per calcoli contabili, compilatori e motori di database, ma fallisce miseramente quando si tenta di formalizzare compiti complessi del mondo reale: <em>riconoscere un volto in una foto, tradurre una lingua naturale con le sue sfumature o guidare un'auto nel traffico</em>.</p>

        <p>L'<strong>Intelligenza Artificiale (AI)</strong> e in particolare il <strong>Machine Learning (ML)</strong> ribaltano radicalmente questo paradigma:</p>

        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Approccio</th>
                <th>Cosa forniamo in Ingresso</th>
                <th>Cosa produce il Sistema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Informatica Tradizionale</strong></td>
                <td>Dati + <strong>Regole Esplicite (Codice)</strong></td>
                <td><strong>Risposte / Output</strong></td>
              </tr>
              <tr>
                <td><strong>Machine Learning (ML)</strong></td>
                <td>Dati + <strong>Risposte Desiderate (Esempi)</strong></td>
                <td><strong>Regole e Pesi Statistici (Il Modello!)</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>La Tassonomia: AI vs Machine Learning vs Deep Learning</h3>
        <p>Spesso usati come sinonimi commerciali, questi termini identificano invece cerchi concentrici con complessità e metodi profondamente differenti:</p>

        <ul>
          <li><strong>Intelligenza Artificiale (AI):</strong> La disciplina omnicomprensiva nata nel 1956 (Dartmouth Conference) che studia come realizzare macchine capaci di svolgere compiti che richiederebbero intelligenza umana. Include anche la storica <em>AI Simbolica (GOFAI)</em> basata su motori di inferenza logica e sistemi esperti con regole <code>IF-THEN</code> rigide.</li>
          <li><strong>Machine Learning (ML):</strong> Il sottoinsieme dell'AI in cui la macchina non viene programmata con regole esplicite, ma <em>impara autonomamente</em> analizzando grandi volumi di dati per scoprire schemi matematici e formulare previsioni probabilistiche.</li>
          <li><strong>Deep Learning (DL):</strong> Il sottoinsieme più potente del Machine Learning basato su <strong>Reti Neurali Artificiali Profonde</strong> (con decine o centinaia di strati nascosti). È la tecnologia dietro la computer vision, il riconoscimento vocale e i Large Language Models moderni.</li>
        </ul>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-11/ai-neural-network.jpg" alt="Rappresentazione di una Rete Neurale Artificiale Profonda" loading="lazy">
          <div class="figure-caption">Struttura di una Rete Neurale Artificiale: lo strato di ingresso (Input Layer) riceve i dati grezzi, gli strati nascosti (Hidden Layers) estraggono gerarchie di caratteristiche astratte, e lo strato finale (Output Layer) produce la predizione.</div>
        </div>

        <h3>I Tre Grandi Paradigmi del Machine Learning</h3>
        <ol>
          <li><strong>Apprendimento Supervisionato (Supervised Learning):</strong> Il modello viene addestrato su una raccolta di dati già etichettati dall'uomo (coppie <em>input $\\to$ target</em>). Esempi: classificare email come "Spam" o "Non Spam", diagnosticare radiografie polmonari o stimare il prezzo di una casa date superficie e posizione.</li>
          <li><strong>Apprendimento Non Supervisionato (Unsupervised Learning):</strong> Il modello riceve dati grezzi privi di etichette e deve scoprire autonomamente strutture nascoste, raggruppamenti (clustering) o anomalie statistiche. Esempi: segmentazione dei clienti per affinità di acquisto, compressione dimensionale (PCA) o rilevamento di frodi bancarie.</li>
          <li><strong>Apprendimento per Rinforzo (Reinforcement Learning - RL):</strong> Un agente autonomo interagisce con un ambiente virtuale compiendo azioni per massimizzare una funzione di ricompensa cumulativa (Reward) attraverso tentativi ed errori. È il metodo con cui algoritmi come <em>AlphaGo</em> e <em>AlphaZero</em> hanno battuto i campioni mondiali di Go e scacchi.</li>
        </ol>

        <h3>Anatomia Microscopica di un Neurone Artificiale</h3>
        <p>Ispirato lontanamente al neurone biologico (ma formalizzato matematicamente nel 1943 da McCulloch e Pitts e nel 1958 da Frank Rosenblatt con il <strong>Perceptron</strong>), un neurone artificiale esegue due passaggi matematici elementari:</p>

        <ol>
          <li><strong>Combinazione Lineare Pesata:</strong> Moltiplica ciascun segnale di input $x_i$ per un coefficiente numerico regolabile chiamato <strong>Peso ($w_i$)</strong>, somma tutti i prodotti e aggiunge un termine costante chiamato <strong>Bias ($b$)</strong>:<br>
          <div style="text-align: center; margin: 10px 0; font-family: monospace; font-size: 1.1rem; color: #818cf8;">z = (x₁ · w₁) + (x₂ · w₂) + ... + (xₙ · wₙ) + b</div>
          I pesi determinano l'importanza di ciascuna caratteristica, mentre il bias sposta la soglia di attivazione.</li>
          <li><strong>Funzione di Attivazione Non Lineare:</strong> Applica una funzione matematica non lineare $\\sigma(z)$ al risultato per decidere il valore di uscita. Senza la non-linearità, anche una rete neurale con miliardi di strati collasserebbe in una semplice trasformazione lineare (incapace di risolvere problemi come la porta logica XOR o approssimare forme complesse). Le funzioni più impiegate sono:
            <ul>
              <li><strong>ReLU (Rectified Linear Unit):</strong> $\\text{ReLU}(z) = \\max(0, z)$ — semplicissima e veloce, domina il deep learning contemporaneo;</li>
              <li><strong>Sigmoide:</strong> $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ — comprime qualsiasi valore nell'intervallo reale $(0, 1)$, ottima per calcolare probabilità;</li>
              <li><strong>GeLU / Swish:</strong> Varianti lisce utilizzate nei moderni Large Language Models.</li>
            </ul>
          </li>
        </ol>

        <div class="callout-box info">
          <div class="callout-title">⚙️ Come Impara una Rete: Discesa del Gradiente e Backpropagation</div>
          <p>All'inizio dell'addestramento, tutti i pesi della rete vengono inizializzati con numeri casuali: le sue risposte sono puro rumore. L'apprendimento si articola in un ciclo ciclico continuo:</p>
          <ol>
            <li><strong>Forward Pass:</strong> I dati fluiscono in avanti e la rete genera una predizione;</li>
            <li><strong>Calcolo della Loss (Funzione di Perdita):</strong> Si misura la distanza matematica tra la risposta della rete e quella corretta reale (es. Mean Squared Error o Cross-Entropy);</li>
            <li><strong>Backpropagation (Retropropagazione):</strong> Tramite la regola di derivazione a catena (Chain Rule del calcolo differenziale), si calcola la derivata parziale dell'errore rispetto a ogni singolo peso (il <strong>Gradiente</strong>: $\\nabla L$);</li>
            <li><strong>Discesa del Gradiente (Gradient Descent):</strong> Si aggiornano tutti i pesi nella direzione opposta al gradiente per scendere lungo la superficie dell'errore verso il minimo globale:<br>
            <code>peso = peso - (learning_rate * gradiente)</code></li>
          </ol>
        </div>

        <div class="callout-box warning">
          <div class="callout-title">⚠️ La Trappola dell'Overfitting e il Trade-off Bias-Varianza</div>
          <p>Il più grande pericolo nel Machine Learning è l'<strong>Overfitting (Sovradattamento)</strong>: se un modello ha troppi parametri rispetto ai dati disponibili, finisce per <em>imparare a memoria</em> il rumore specifico e le anomalie del set di addestramento (Training Set), ottenendo un'accuratezza del 100% durante l'addestramento ma fallendo miseramente su nuovi dati reali (Test Set). Per contrastarlo si adottano tecniche di <strong>Regolarizzazione</strong> (come il Dropout, che spegne casualmente neuroni durante l'addestramento) e si separano rigorosamente i dati in <em>Training, Validation e Test</em> set.</p>
        </div>

        <!-- WIDGET 11.1: SIMULATORE DI NEURONE ARTIFICIALE & GRADIENT DESCENT -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🧠 Laboratorio Interattivo: Neurone Artificiale e Discesa del Gradiente</span>
            <span class="widget-badge">Simulatore Interattivo</span>
          </div>
          <div class="widget-body">
            <p style="font-size: 0.9rem; margin-bottom: 14px;">Modifica i pesi sinaptici e il bias per osservare il calcolo in tempo reale, oppure clicca su <strong>"Step di Discesa del Gradiente"</strong> per far apprendere al neurone il target desiderato riducendo la Loss matematica:</p>

            <div class="neuron-workbench">
              <div class="neuron-grid-layout">
                <!-- COLONNA INPUT & PESI -->
                <div class="neuron-col-card">
                  <h4 style="font-size: 0.95rem; margin-bottom: 12px; color: #38bdf8;">📥 Input & Pesi Sinaptici</h4>
                  
                  <div class="neuron-slider-group">
                    <label><span>Input x₁:</span> <code id="lblInputX1">1.00</code></label>
                    <input type="range" id="sliderX1" min="-2" max="2" step="0.1" value="1.0" oninput="updateNeuronSim()">
                  </div>

                  <div class="neuron-slider-group">
                    <label><span>Peso w₁:</span> <code id="lblWeightW1">0.50</code></label>
                    <input type="range" id="sliderW1" min="-3" max="3" step="0.05" value="0.5" oninput="updateNeuronSim()">
                  </div>

                  <div class="neuron-slider-group">
                    <label><span>Input x₂:</span> <code id="lblInputX2">0.50</code></label>
                    <input type="range" id="sliderX2" min="-2" max="2" step="0.1" value="0.5" oninput="updateNeuronSim()">
                  </div>

                  <div class="neuron-slider-group">
                    <label><span>Peso w₂:</span> <code id="lblWeightW2">-0.80</code></label>
                    <input type="range" id="sliderW2" min="-3" max="3" step="0.05" value="-0.8" oninput="updateNeuronSim()">
                  </div>

                  <div class="neuron-slider-group">
                    <label><span>Bias b:</span> <code id="lblBiasB">0.10</code></label>
                    <input type="range" id="sliderB" min="-2" max="2" step="0.05" value="0.1" oninput="updateNeuronSim()">
                  </div>
                </div>

                <!-- NODO CENTRALE DEL NEURONE -->
                <div style="text-align: center;">
                  <div class="neuron-center-node" id="neuronNode">
                    <div style="font-size: 0.72rem; opacity: 0.7; letter-spacing: 1px;">SOMMA PESATA</div>
                    <div id="lblSumZ" style="font-family: monospace; font-size: 1.15rem; font-weight: 700; color: #a5b4fc;">z = 0.20</div>
                    <div style="font-size: 0.75rem; margin-top: 6px; color: #38bdf8;" id="lblActType">σ(z) = Sigmoid</div>
                    <div id="lblNeuronOut" style="font-size: 1.35rem; font-weight: 800; color: #4ade80; margin-top: 2px;">0.55</div>
                  </div>

                  <div style="margin-top: 14px;">
                    <label style="font-size: 0.8rem; font-weight: 600; margin-right: 8px;">Funzione di Attivazione:</label>
                    <select id="selActivation" onchange="updateNeuronSim()" style="background: #0f172a; color: #fff; border: 1px solid #334155; padding: 4px 8px; border-radius: 4px;">
                      <option value="sigmoid">Sigmoide: 1 / (1 + e^-z)</option>
                      <option value="relu">ReLU: max(0, z)</option>
                      <option value="step">Step (Soglia Heaviside)</option>
                    </select>
                  </div>
                </div>

                <!-- COLONNA TARGET & TRAINING LOSS -->
                <div class="neuron-col-card">
                  <h4 style="font-size: 0.95rem; margin-bottom: 12px; color: #f43f5e;">🎯 Obiettivo (Supervisione)</h4>
                  
                  <div class="neuron-slider-group">
                    <label><span>Target Atteso (y):</span> <code id="lblTargetY">1.00</code></label>
                    <input type="range" id="sliderTargetY" min="0" max="1" step="0.05" value="1.0" oninput="updateNeuronSim()">
                  </div>

                  <div class="loss-meter-box">
                    <div style="font-size: 0.75rem; color: #c7d2fe; text-transform: uppercase;">Errore Quadratico (Loss)</div>
                    <div id="lblLossVal" style="font-size: 1.5rem; font-weight: 800; font-family: monospace; color: #f87171; margin: 4px 0;">0.2025</div>
                    <div style="font-size: 0.72rem; color: #94a3b8;">Loss = ½ · (output - target)²</div>
                  </div>

                  <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 8px;">
                    <button class="btn-primary" style="background: #6366f1; width: 100%;" onclick="stepGradientDescent()">📉 Esegui Step Gradient Descent</button>
                    <button class="btn-secondary" style="width: 100%; font-size: 0.82rem;" onclick="resetNeuronSim()">↺ Reimposta Pesi Casuali</button>
                  </div>
                </div>
              </div>

              <div id="gradientDescentLog" style="font-size: 0.82rem; background: #020617; border: 1px solid #1e293b; padding: 8px 12px; border-radius: 6px; color: #94a3b8; font-family: monospace;">
                Pronto. Clicca su "Esegui Step Gradient Descent" per calcolare le derivate parziali e aggiornare i pesi verso il target.
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "11.2 Large Language Models (LLM): L'Architettura Transformer e i Livelli Interni",
      content: `
        <h2>11.2 Large Language Models: Come Funzionano i Giganti Generativi</h2>

        <p>Negli ultimi anni, l'informatica ha vissuto una trasformazione paragonabile alla nascita di Internet o del Personal Computer: l'avvento dei <strong>Large Language Models (LLM)</strong> (come GPT-4, Claude, LLaMA o Gemini). Ma cosa accade matematicamente quando un modello linguistico genera un testo, scrive codice Python o risponde a una domanda complessa?</p>

        <p>Un LLM non possiede una coscienza, intenzioni o un database di risposte preconfezionate. A livello fondamentale, è una gigantesca rete neurale con centinaia di miliardi di parametri addestrata a compiere un unico compito statistico: <strong>calcolare la distribuzione di probabilità del prossimo token dato il contesto precedente</strong> ($P(t_n \\mid t_1, t_2, \\dots, t_{n-1})$).</p>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-11/transformer-architecture.png" alt="Architettura del Transformer con blocchi di Self-Attention" loading="lazy">
          <div class="figure-caption">L'Architettura del Transformer (Vaswani et al., 2017): i token fluiscono attraverso molteplici blocchi identici composti da Multi-Head Attention e reti Feed-Forward con connessioni residue.</div>
        </div>

        <h3>La Svolta Epocale: Il Paper "Attention Is All You Need" (2017)</h3>
        <p>Prima del 2017, l'elaborazione del linguaggio naturale (NLP) si affidava a reti ricorrenti (<strong>RNN</strong> e <strong>LSTM</strong>). Queste reti elaboravano le parole in sequenza, una dopo l'altra: avevano il limite insormontabile di non poter essere parallelizzate sui cluster di GPU e soffrivano di "amnesia", dimenticando l'inizio di una frase dopo poche decine di parole.</p>

        <p>Il gruppo di ricercatori di Google guidato da Ashish Vaswani introdusse l'architettura <strong>Transformer</strong> basata esclusivamente sul meccanismo di <strong>Self-Attention (Auto-Attenzione)</strong>. Il Transformer può elaborare tutti i token di una sequenza <em>simultaneamente in parallelo</em>, calcolando istantaneamente le relazioni semantiche tra qualsiasi coppia di parole, indipendentemente dalla loro distanza nel testo.</p>

        <h3>Il Viaggio di un Testo attraverso i Livelli (Layers) di un LLM</h3>
        <p>Quando inviamo un prompt a un Large Language Model, il testo attraversa una pipeline rigorosa articolata in livelli microscopici:</p>

        <ol>
          <li><strong>Livello 1: Tokenizzazione (Byte-Pair Encoding - BPE):</strong>
            I computer non elaborano lettere o parole, ma numeri. Il testo viene frammentato in <em>token</em> (frammenti di parole o sillabe) secondo un vocabolario fisso di circa 50.000–100.000 token. Ad esempio, la frase <em>"L'informatica è affascinante"</em> viene trasformata in una sequenza di ID interi come <code>[432, 19802, 381, 74211]</code>.
          </li>

          <li><strong>Livello 2: Input Embedding & Positional Encoding:</strong>
            Ciascun Token ID numerico viene convertito in un vettore geometrico denso ad altissima dimensionalità (ad esempio, 4.096 dimensioni in LLaMA-7B o 12.288 in GPT-4). Nello <strong>Spazio Vettoriale degli Embedding</strong>, parole con significato semantico simile risiedono vicine (es. il vettore di "Re" meno il vettore di "Uomo" più "Donna" converge verso "Regina"). Poiché il Transformer elabora tutto in parallelo, viene aggiunto un <strong>Positional Encoding</strong> (come <em>RoPE - Rotary Position Embedding</em>) che codifica l'ordine sequenziale delle parole nello spazio vettoriale.
          </li>

          <li><strong>Livello 3: Multi-Head Self-Attention (Il Cuore dell'Intelligenza):</strong>
            All'interno di ciascuno strato, ogni token genera tre vettori tramite matrici di proiezione lineari:
            <ul>
              <li><strong>Query (Q):</strong> <em>"Cosa sto cercando?"</em> (la domanda posta dal token);</li>
              <li><strong>Key (K):</strong> <em>"Cosa offro?"</em> (l'etichetta del token che risponde alla query);</li>
              <li><strong>Value (V):</strong> <em>"Qual è il mio contenuto semantico?"</em>.</li>
            </ul>
            La formula fondamentale dell'attenzione calcola il prodotto scalare tra Query e Key di tutte le parole:<br>
            <div style="text-align: center; margin: 12px 0; font-family: monospace; font-size: 1.15rem; color: #ec4899;">Attention(Q, K, V) = softmax( (Q · Kᵀ) / √dₖ ) · V</div>
            Se il prodotto scalare è alto, la parola riceve un peso di attenzione elevato. Ad esempio, nella frase <em>"L'animale non attraversò la strada perché era troppo stanco"</em>, la parola <em>"era"</em> presta massima attenzione ad <em>"animale"</em>, permettendo al modello di comprendere a chi si riferisce il pronome!
          </li>

          <li><strong>Livello 4: Connessioni Residue (Skip Connections) & Layer Normalization:</strong>
            Attorno a ogni blocco di Attention e Feed-Forward, l'input viene sommato direttamente all'output (<code>output = LayerNorm(x + SubLayer(x))</code>). Questo permette al segnale di propagarsi attraverso 80 o 100 strati senza che i gradienti matematici svaniscano (Vanishing Gradient).
          </li>

          <li><strong>Livello 5: Feed-Forward Network (FFN / MLP):</strong>
            Dopo aver raccolto il contesto con l'Attention, ciascun token passa attraverso una rete neurale densa non lineare a due strati. Ricerche recenti mostrano che questi strati FFN agiscono come una <strong>memoria associativa a lungo termine</strong>, dove sono archiviati i fatti e le informazioni sul mondo (es. date storiche, regole sintattiche, codice software).
          </li>

          <li><strong>Livello 6: Unembedding Head, Softmax & Parametri di Campionamento:</strong>
            All'ultimo strato, il vettore finale viene proiettato sull'intero vocabolario di 100.000 token producendo valori numerici grezzi (<strong>Logits</strong>). La funzione <strong>Softmax</strong> converte i logits in probabilità percentuali che sommano a 1.0 (100%).
          </li>
        </ol>

        <div class="callout-box history">
          <div class="callout-title">🎲 Temperatura, Top-p e Allineamento RLHF</div>
          <p>Come sceglie il modello quale parola stampare tra quelle probabili?</p>
          <ul>
            <li><strong>Temperatura ($T$):</strong> Controlla la creatività dividendo i logits prima della Softmax. Con $T = 0$, il modello sceglie sempre la parola più probabile (deterministico, perfetto per matematica e codice); con $T = 0.8$, esplora token meno ovvi (creativo, ideale per scrittura narrativa).</li>
            <li><strong>Top-p (Nucleus Sampling):</strong> Limita la scelta al gruppo minimo di parole la cui somma di probabilità raggiunge $p$ (es. il top 90%), tagliando le parole assurde.</li>
            <li><strong>RLHF (Reinforcement Learning from Human Feedback):</strong> L'addestramento base (Pre-Training) insegna solo a completare frasi di internet; la fase successiva di <em>Fine-Tuning e RLHF</em> allinea il modello a comportarsi come un assistente cortese, sicuro e utile, rifiutando richieste dannose.</li>
          </ul>
        </div>

        <!-- WIDGET 11.2: VISUALIZZATORE TOKENIZZAZIONE & ATTENTION MAP -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🔍 Ispettore Interattivo: Tokenizzazione BPE e Meccanismo di Self-Attention</span>
            <span class="widget-badge">Laboratorio LLM</span>
          </div>
          <div class="widget-body">
            <p style="font-size: 0.9rem; margin-bottom: 12px;">Seleziona una frase di esempio. Clicca su ciascun <strong>Token</strong> per esaminare la sua scomposizione in ID numerici e osservare come la <strong>Self-Attention</strong> assegna pesi di correlazione semantica verso le altre parole del contesto:</p>

            <div class="transformer-workbench">
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
                <span style="font-size: 0.82rem; font-weight: 600; color: #94a3b8; align-self: center;">Frasi di Test:</span>
                <button class="btn-secondary" style="font-size: 0.8rem; padding: 4px 10px;" onclick="loadTransformerSample(0)">1. La volpe salta sul cane perché ha paura</button>
                <button class="btn-secondary" style="font-size: 0.8rem; padding: 4px 10px;" onclick="loadTransformerSample(1)">2. Il server rispose con codice 200 OK</button>
                <button class="btn-secondary" style="font-size: 0.8rem; padding: 4px 10px;" onclick="loadTransformerSample(2)">3. Ada Lovelace scrisse il primo algoritmo</button>
              </div>

              <!-- PILLS DEI TOKEN -->
              <div class="token-pills-row" id="tokenPillsContainer">
                <!-- Generati dinamicamente via JS -->
              </div>

              <!-- MAPPA DEI PESI DI ATTENZIONE -->
              <div class="attention-weights-board">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid #334155; padding-bottom: 6px;">
                  <span style="font-size: 0.85rem; font-weight: 700; color: #ec4899;">Pesi di Attenzione della Query: <code id="activeTokenLabel" style="color: #38bdf8;">"paura"</code></span>
                  <span style="font-size: 0.75rem; color: #94a3b8;">Calcolati tramite softmax(Q·Kᵀ / √d)</span>
                </div>

                <div id="attentionBarsList">
                  <!-- Generati dinamicamente via JS -->
                </div>

                <div id="attentionExplanationBox" style="margin-top: 12px; font-size: 0.85rem; line-height: 1.5; background: #020617; padding: 10px; border-radius: 6px; border-left: 3px solid #ec4899;">
                  <!-- Spiegazione semantica generata via JS -->
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "11.3 Quantum Computing: Dal Bit al Qubit, Sovrapposizione e la Nuova Fisica del Calcolo",
      content: `
        <h2>11.3 Quantum Computing: La Frontiera Ultima della Computazione</h2>

        <p>Per oltre settant'anni, l'informatica si è basata sulle leggi della <strong>Fisica Classica</strong> di Newton e Maxwell: nei circuiti stampati, la corrente fluisce o non fluisce, i condensatori sono carichi o scarichi, e l'unità fondamentale di informazione è il <strong>Bit binario (0 oppure 1)</strong>.</p>

        <p>Tuttavia, l'industria dei semiconduttori si trova di fronte a una barriera fisica invalicabile: quando le piste dei transistor scendono a scale nanometriche (sotto i 2 nanometri), gli elettroni cessano di comportarsi come granelli di sabbia e manifestano fenomeni di <em>effetto tunnel quantistico</em>, attraversando le barriere isolanti come fantasmi e provocando dispersioni insostenibili. Per superare questi limiti, i fisici e gli informatici hanno compiuto il passo più audace: <strong>utilizzare le leggi controintuitive della Meccanica Quantistica non come un ostacolo, ma come il motore stesso del calcolo</strong>.</p>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-11/quantum-computer.jpg" alt="Computer Quantistico IBM all'interno del refrigeratore criogenico a diluizione" loading="lazy">
          <div class="figure-caption">Un processore quantistico a superconduttori: i tubi e i dischi dorati formano il "lampadario criogenico" (dilution refrigerator), che raffredda il chip a circa 15 millikelvin (-273,13 °C), una temperatura più fredda dello spazio intergalattico profondo.</div>
        </div>

        <h3>Dal Bit al Qubit: La Sfera di Bloch e lo Spazio di Hilbert</h3>
        <p>Nel calcolo quantistico, l'unità elementare è il <strong>Qubit (Quantum Bit)</strong>. Mentre un bit classico può trovarsi esclusivamente nello stato deterministico <code>0</code> o <code>1</code>, un qubit è un sistema quantistico a due livelli (come lo spin di un elettrone, la polarizzazione di un fotone o la corrente di un circuito superconduttore a giunzione Josephson).</p>

        <p>Finché non viene misurato dall'ambiente esterno, il qubit risiede in uno stato di <strong>Sovrapposizione Coerente (Superposition)</strong>, espresso formalmente come vettore nello spazio di Hilbert (notazione <em>Bra-Ket</em> di Dirac):</p>

        <div style="text-align: center; margin: 14px 0; font-family: monospace; font-size: 1.25rem; color: #38bdf8;">
          |ψ⟩ = α|0⟩ + β|1⟩
        </div>

        <p>Dove $\\alpha$ e $\\beta$ sono <strong>ampiezze di probabilità complesse</strong> che soddisfano la condizione di normalizzazione:<br>
        <span style="font-family: monospace; font-size: 1rem; color: #a5b4fc;">|α|² + |β|² = 1</span>.<br>
        Geometricamente, questo stato può essere rappresentato come qualsiasi punto sulla superficie tridimensionale di una sfera unitaria nota come <strong>Sfera di Bloch</strong>.</p>

        <h3>I Tre Superpoteri della Meccanica Quantistica</h3>
        <ol>
          <li><strong>1. Sovrapposizione Esponenziale (Superposition):</strong>
            Un computer classico con $N$ bit può memorizzare <em>uno solo</em> tra i $2^N$ numeri possibili alla volta. Un registro di $N$ qubit può esistere contemporaneamente in una combinazione lineare di <strong>tutti i $2^N$ stati simultaneamente</strong>!
            <ul>
              <li>Con 50 qubit, un computer quantistico elabora simultaneamente $2^{50} \\approx 1.125.000.000.000.000$ di configurazioni;</li>
              <li>Con appena <strong>300 qubit</strong>, il numero di stati contemporanei ($2^{300}$) supera <strong>il numero totale di atomi presenti nell'intero universo osservabile</strong> ($~10^{80}$)!</li>
            </ul>
          </li>

          <li><strong>2. Entanglement (Correlazione Quantistica Inestricabile):</strong>
            Definito da Albert Einstein come <em>"spettrale azione a distanza"</em> (spooky action at a distance), l'entanglement è un legame quantistico per cui due o più qubit formano un unico sistema inscindibile. Se due qubit sono in uno stato di Bell (entangled), misurare lo stato del primo determina <em>istantaneamente e con certezza matematica</em> lo stato del secondo, anche se i due qubit fossero posizionati a galassie di distanza!
          </li>

          <li><strong>3. Interferenza Quantistica:</strong>
            Un computer quantistico non si limita a "provare tutti i tentativi insieme a forza bruta": se misurassimo subito, otterremmo un risultato casuale inutile. Gli algoritmi quantistici manipolano le fasi delle onde di probabilità facendo collidere i percorsi matematici tramite <strong>interferenza costruttiva</strong> (che amplifica la probabilità della risposta esatta) e <strong>interferenza distruttiva</strong> (che annulla le ampiezze di tutti i miliardi di percorsi errati).
          </li>
        </ol>

        <h3>Le Porte Logiche Quantistiche (Quantum Gates)</h3>
        <p>A differenza dei chip classici basati su porte irreversibili come NAND e OR (dove si perde informazione sotto forma di calore termico), le porte logiche quantistiche sono <strong>operatori unitari puramente reversibili</strong>:</p>

        <ul>
          <li><strong>Porta Pauli-X:</strong> Il NOT quantistico; scambia le ampiezze invertendo $|0\\rangle \\leftrightarrow |1\\rangle$. Sulla sfera di Bloch corrisponde a una rotazione di 180° attorno all'asse X.</li>
          <li><strong>Porta di Hadamard (H):</strong> La porta regina del calcolo quantistico. Trasforma uno stato classico puro $|0\\rangle$ in una sovrapposizione equiprobabile perfetta: $\\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}$.</li>
          <li><strong>Porta Pauli-Z:</strong> Applica un cambio di fase di 180° allo stato $|1\\rangle$ lasciando inalterato $|0\\rangle$.</li>
          <li><strong>Porta CNOT (Controlled-NOT):</strong> Porta a due qubit fondamentale per generare entanglement: inverte il secondo qubit (target) se e solo se il primo qubit (control) si trova nello stato $|1\\rangle$.</li>
        </ul>

        <h3>Gli Algoritmi Celebri e l'Impatto sulla Sicurezza Mondiale</h3>
        <div class="callout-box warning">
          <div class="callout-title">🚨 L'Algoritmo di Shor (1994) e la Fine della Crittografia RSA</div>
          <p>Nel 1994, il matematico Peter Shor scoprì un algoritmo quantistico capace di trovare il periodo di una funzione ed eseguire la <strong>fattorizzazione in numeri primi di interi giganteschi in tempo polinomiale</strong> ($O((\\log N)^3)$).<br>
          Un computer classico impiegherebbe miliardi di anni per fattorizzare una chiave RSA a 2048 o 4096 bit. Un computer quantistico fault-tolerant dotato di sufficienti qubit logici potrebbe violarla in poche decine di minuti! Questo ha innescato la corsa mondiale alla <strong>Crittografia Post-Quantistica (PQC)</strong>, basata su problemi matematici a reticolo (Lattices) non vulnerabili a Shor, recentemente standardizzata dal NIST.</p>
        </div>

        <div class="callout-box info">
          <div class="callout-title">🔎 L'Algoritmo di Grover (1996) e la Simulazione della Natura</div>
          <p>L'<strong>Algoritmo di Lov Grover</strong> consente di cercare un elemento in un database non indicizzato di $N$ record con una complessità quadratica di $O(\\sqrt{N})$ anziché classica $O(N)$. Ma il vero valore del quantum computing non è il database: come intuì il premio Nobel <strong>Richard Feynman</strong> nel 1982: <em>"La natura non è classica, accidenti; e se volete fare una simulazione della natura, fareste meglio a farla quantomeccanica!"</em>. I computer quantistici rivoluzioneranno la chimica farmaceutica, la sintesi di catalizzatori per fertilizzanti e la progettazione di superconduttori a temperatura ambiente.</p>
        </div>

        <h3>La Dura Realtà Ingegneristica: Perché non abbiamo un Quantum PC a Casa?</h3>
        <ul>
          <li><strong>Decoerenza Quantistica:</strong> Gli stati di sovrapposizione ed entanglement sono fragilissimi. La minima vibrazione termica, onda radio o raggio cosmico distrugge lo stato coerente, provocando il collasso immediato (decoerenza) e corrompendo il calcolo.</li>
          <li><strong>Temperature Vicine allo Zero Assoluto:</strong> I qubit a superconduttori richiedono refrigeratori a diluizione all'elio liquido che mantengono il chip a <strong>15 millikelvin (-273,135 °C)</strong>, assorbendo enormi quantità di energia per il vuoto termico.</li>
          <li><strong>Correzione degli Errori Quantistici (QEC):</strong> A causa del <em>Teorema di Non-Clonazione Quantistica</em> (è impossibile copiare esattamente uno stato quantistico sconosciuto), non si possono fare copie di backup semplici dei bit. Per creare 1 singolo "Qubit Logico" privo di errori servono oggi centinaia o migliaia di "Qubit Fisici" rumorosi ridondanti.</li>
        </ul>

        <!-- WIDGET 11.3: SIMULATORE INTERATTIVO DEL QUBIT -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">⚛️ Laboratorio del Qubit: Sfera di Bloch, Porte Quantistiche & Collasso</span>
            <span class="widget-badge">Simulatore Quantistico</span>
          </div>
          <div class="widget-body">
            <p style="font-size: 0.9rem; margin-bottom: 14px;">Interagisci con un Qubit reale in tempo reale. Applica la <strong>Porta Hadamard (H)</strong> per generare la sovrapposizione quantistica al 50%/50%, e premi <strong>"Effettua Misura Quantistica"</strong> per osservare il collasso probabilistico della funzione d'onda nel mondo classico:</p>

            <div class="quantum-workbench">
              <div class="quantum-grid">
                <!-- PANNELLO STATO VETTORE & SFERA BLOCH -->
                <div class="bloch-card">
                  <h4 style="font-size: 0.92rem; color: #38bdf8; margin-bottom: 10px;">Vettore di Stato |ψ⟩</h4>

                  <!-- VISUALIZZATORE GRAFICO DELLO STATO -->
                  <div style="background: #020617; border: 1px solid #1e293b; border-radius: 8px; padding: 16px; margin-bottom: 12px;">
                    <div id="quantumKetEquation" style="font-family: monospace; font-size: 1.3rem; font-weight: 700; color: #a5b4fc; margin-bottom: 8px;">
                      |ψ⟩ = 1.000 |0⟩ + 0.000 |1⟩
                    </div>
                    <div id="quantumStateDesc" style="font-size: 0.82rem; color: #94a3b8;">
                      Stato Base Puro: deterministico al 100% sullo stato |0⟩.
                    </div>
                  </div>

                  <!-- BARRE DI PROBABILITA' -->
                  <div style="text-align: left; margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600; margin-bottom: 4px;">
                      <span>Probabilità P(0) = |α|²:</span>
                      <code id="probValZero" style="color: #38bdf8;">100.0%</code>
                    </div>
                    <div style="background: #1e293b; height: 12px; border-radius: 6px; overflow: hidden; margin-bottom: 10px;">
                      <div id="probBarZero" style="width: 100%; height: 100%; background: #38bdf8; transition: width 0.3s ease;"></div>
                    </div>

                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600; margin-bottom: 4px;">
                      <span>Probabilità P(1) = |β|²:</span>
                      <code id="probValOne" style="color: #ec4899;">0.0%</code>
                    </div>
                    <div style="background: #1e293b; height: 12px; border-radius: 6px; overflow: hidden;">
                      <div id="probBarOne" style="width: 0%; height: 100%; background: #ec4899; transition: width 0.3s ease;"></div>
                    </div>
                  </div>
                </div>

                <!-- CONTROLLI CIRCUITO & PORTE QUANTISTICHE -->
                <div class="bloch-card" style="display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <h4 style="font-size: 0.92rem; color: #818cf8; margin-bottom: 10px;">Porte Logiche sul Circuito</h4>
                    <p style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 12px;">Clicca su una porta per applicare una trasformazione unitaria al vettore di stato:</p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 16px;">
                      <button class="quantum-gate-btn" onclick="applyQuantumGate('H')">Porta H (Hadamard)<br><span style="font-size: 0.7rem; font-weight: 400; opacity: 0.8;">Crea Sovrapposizione</span></button>
                      <button class="quantum-gate-btn" onclick="applyQuantumGate('X')">Porta X (Pauli-X)<br><span style="font-size: 0.7rem; font-weight: 400; opacity: 0.8;">NOT Quantistico</span></button>
                      <button class="quantum-gate-btn" onclick="applyQuantumGate('Z')">Porta Z (Phase Flip)<br><span style="font-size: 0.7rem; font-weight: 400; opacity: 0.8;">Inverte la Fase di |1⟩</span></button>
                      <button class="quantum-gate-btn" style="border-color: #64748b; color: #94a3b8;" onclick="applyQuantumGate('RESET')">Reset |0⟩<br><span style="font-size: 0.7rem; font-weight: 400; opacity: 0.8;">Reinizializza</span></button>
                    </div>
                  </div>

                  <div>
                    <button class="measure-btn" style="width: 100%; font-size: 1rem;" onclick="performQuantumMeasurement()">👁️ Effettua Misura Quantistica (Collasso)</button>

                    <!-- BANNER DI COLLASSO -->
                    <div id="quantumMeasurementResult" class="quantum-collapse-banner" style="display: none; background: #064e3b; border: 1px solid #10b981; color: #a7f3d0;">
                      <!-- Risultato misurazione generato da JS -->
                    </div>

                    <div id="quantumMeasurementStats" style="margin-top: 10px; font-size: 0.78rem; color: #64748b;">
                      Misure totali effettuate: 0 (Zeri: 0 | Uni: 0)
                    </div>
                  </div>
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

// --- WIDGET 11.1: NEURONE ARTIFICIALE & GRADIENT DESCENT ---
window.neuronState = {
  x1: 1.0,
  w1: 0.5,
  x2: 0.5,
  w2: -0.8,
  b: 0.1,
  targetY: 1.0,
  actType: 'sigmoid'
};

window.updateNeuronSim = function() {
  const sX1 = document.getElementById('sliderX1');
  const sW1 = document.getElementById('sliderW1');
  const sX2 = document.getElementById('sliderX2');
  const sW2 = document.getElementById('sliderW2');
  const sB  = document.getElementById('sliderB');
  const sY  = document.getElementById('sliderTargetY');
  const sAct = document.getElementById('selActivation');

  if (!sX1 || !sW1 || !sX2 || !sW2 || !sB || !sY || !sAct) return;

  window.neuronState.x1 = parseFloat(sX1.value);
  window.neuronState.w1 = parseFloat(sW1.value);
  window.neuronState.x2 = parseFloat(sX2.value);
  window.neuronState.w2 = parseFloat(sW2.value);
  window.neuronState.b  = parseFloat(sB.value);
  window.neuronState.targetY = parseFloat(sY.value);
  window.neuronState.actType = sAct.value;

  // Aggiorna label
  document.getElementById('lblInputX1').innerText = window.neuronState.x1.toFixed(2);
  document.getElementById('lblWeightW1').innerText = window.neuronState.w1.toFixed(2);
  document.getElementById('lblInputX2').innerText = window.neuronState.x2.toFixed(2);
  document.getElementById('lblWeightW2').innerText = window.neuronState.w2.toFixed(2);
  document.getElementById('lblBiasB').innerText = window.neuronState.b.toFixed(2);
  document.getElementById('lblTargetY').innerText = window.neuronState.targetY.toFixed(2);

  // Calcolo combinazione lineare z
  const z = (window.neuronState.x1 * window.neuronState.w1) + (window.neuronState.x2 * window.neuronState.w2) + window.neuronState.b;
  document.getElementById('lblSumZ').innerText = `z = ${z.toFixed(2)}`;

  // Funzione di attivazione
  let out = 0;
  if (window.neuronState.actType === 'sigmoid') {
    out = 1 / (1 + Math.exp(-z));
    document.getElementById('lblActType').innerText = 'σ(z) = Sigmoid';
  } else if (window.neuronState.actType === 'relu') {
    out = Math.max(0, z);
    document.getElementById('lblActType').innerText = 'ReLU(z) = max(0, z)';
  } else {
    out = z >= 0 ? 1 : 0;
    document.getElementById('lblActType').innerText = 'Step: z >= 0 ? 1 : 0';
  }

  document.getElementById('lblNeuronOut').innerText = out.toFixed(3);

  // Calcolo Loss (MSE)
  const loss = 0.5 * Math.pow(out - window.neuronState.targetY, 2);
  document.getElementById('lblLossVal').innerText = loss.toFixed(4);

  // Animazione pulsazione nodo
  const node = document.getElementById('neuronNode');
  if (node) {
    node.classList.remove('pulsing');
    void node.offsetWidth;
    node.classList.add('pulsing');
  }
};

window.stepGradientDescent = function() {
  const state = window.neuronState;
  const z = (state.x1 * state.w1) + (state.x2 * state.w2) + state.b;
  const out = 1 / (1 + Math.exp(-z));
  const err = out - state.targetY;
  
  // Derivata sigmoide: out * (1 - out)
  const dAct = out * (1 - out);
  const delta = err * dAct;
  
  const lr = 0.6; // learning rate
  const gradW1 = delta * state.x1;
  const gradW2 = delta * state.x2;
  const gradB  = delta;

  // Aggiorna parametri
  state.w1 -= lr * gradW1;
  state.w2 -= lr * gradW2;
  state.b  -= lr * gradB;

  // Rifletti sui controlli
  document.getElementById('sliderW1').value = state.w1.toFixed(2);
  document.getElementById('sliderW2').value = state.w2.toFixed(2);
  document.getElementById('sliderB').value = state.b.toFixed(2);
  
  window.updateNeuronSim();

  const logBox = document.getElementById('gradientDescentLog');
  if (logBox) {
    logBox.innerHTML = `📉 <strong>Step di Discesa applicato:</strong> Grad(w₁)=${gradW1.toFixed(3)}, Grad(w₂)=${gradW2.toFixed(3)}, Grad(b)=${gradB.toFixed(3)} | Nuova Loss: <code>${(0.5 * Math.pow(out - state.targetY, 2)).toFixed(4)}</code> (Errore in calo!)`;
  }
};

window.resetNeuronSim = function() {
  document.getElementById('sliderX1').value = "1.0";
  document.getElementById('sliderW1').value = (Math.random() * 2 - 1).toFixed(2);
  document.getElementById('sliderX2').value = "0.5";
  document.getElementById('sliderW2').value = (Math.random() * 2 - 1).toFixed(2);
  document.getElementById('sliderB').value = (Math.random() * 0.4 - 0.2).toFixed(2);
  document.getElementById('sliderTargetY').value = "1.0";
  window.updateNeuronSim();
  const logBox = document.getElementById('gradientDescentLog');
  if (logBox) logBox.innerText = "Pesi reinizializzati casualmente. Pronto per nuovo addestramento.";
};

window.renderNeuronPlayground = function() {
  window.updateNeuronSim();
};


// --- WIDGET 11.2: TRANSFORMER TOKEN & ATTENTION EXPLORER ---
window.transformerSamples = [
  {
    text: "La volpe salta sul cane perché ha paura",
    tokens: [
      { text: "La", id: 412 },
      { text: "volpe", id: 18402 },
      { text: "salta", id: 29110 },
      { text: "sul", id: 894 },
      { text: "cane", id: 14201 },
      { text: "perché", id: 1205 },
      { text: "ha", id: 618 },
      { text: "paura", id: 33419 }
    ],
    // Pesi di attenzione quando il token attivo è selezionato
    attentionMap: {
      "paura": {
        weights: [0.03, 0.46, 0.08, 0.02, 0.22, 0.05, 0.14, 1.00],
        desc: "Il token <strong>'paura'</strong> focalizza l'attenzione primaria su <strong>'volpe' (46%)</strong> (il soggetto che prova l'emozione causale) e su <strong>'cane' (22%)</strong> (l'oggetto che suscita la paura)."
      },
      "salta": {
        weights: [0.05, 0.52, 1.00, 0.08, 0.28, 0.02, 0.02, 0.03],
        desc: "Il predicato <strong>'salta'</strong> assegna massima attenzione a <strong>'volpe' (52%)</strong> (il soggetto agente del movimento) e a <strong>'cane' (28%)</strong> (il bersaglio del salto)."
      },
      "perché": {
        weights: [0.02, 0.35, 0.25, 0.03, 0.15, 1.00, 0.10, 0.10],
        desc: "La congiunzione causale <strong>'perché'</strong> funge da ponte logico collegando la causa iniziale <strong>('volpe salta', 60%)</strong> all'evento scatenante."
      }
    }
  },
  {
    text: "Il server rispose con codice 200 OK",
    tokens: [
      { text: "Il", id: 310 },
      { text: "server", id: 7420 },
      { text: "rispose", id: 41920 },
      { text: "con", id: 492 },
      { text: "codice", id: 11045 },
      { text: "200", id: 9840 },
      { text: "OK", id: 3190 }
    ],
    attentionMap: {
      "200": {
        weights: [0.02, 0.28, 0.15, 0.03, 0.42, 1.00, 0.10],
        desc: "Il token <strong>'200'</strong> si lega saldamente a <strong>'codice' (42%)</strong> e a <strong>'server' (28%)</strong>, riconoscendo l'entità HTTP di risposta positiva."
      },
      "rispose": {
        weights: [0.04, 0.62, 1.00, 0.05, 0.12, 0.10, 0.07],
        desc: "Il verbo <strong>'rispose'</strong> cerca primariamente il soggetto operante <strong>'server' (62%)</strong> per risolvere la relazione sintattica."
      }
    }
  },
  {
    text: "Ada Lovelace scrisse il primo algoritmo",
    tokens: [
      { text: "Ada", id: 19401 },
      { text: "Lovelace", id: 44120 },
      { text: "scrisse", id: 31201 },
      { text: "il", id: 280 },
      { text: "primo", id: 3410 },
      { text: "algoritmo", id: 18912 }
    ],
    attentionMap: {
      "algoritmo": {
        weights: [0.22, 0.32, 0.18, 0.04, 0.24, 1.00],
        desc: "Il sostantivo <strong>'algoritmo'</strong> riceve forte attenzione da <strong>'Lovelace' (32%)</strong> e dall'aggettivo <strong>'primo' (24%)</strong> completando il costrutto storico."
      },
      "scrisse": {
        weights: [0.42, 0.44, 1.00, 0.02, 0.04, 0.08],
        desc: "Il verbo <strong>'scrisse'</strong> connette simmetricamente <strong>'Ada' (42%)</strong> e <strong>'Lovelace' (44%)</strong> riconoscendo l'identità composta della figura storica."
      }
    }
  }
];

window.currentTransSampleIdx = 0;
window.currentActiveTokenText = "paura";

window.loadTransformerSample = function(idx) {
  window.currentTransSampleIdx = idx;
  const sample = window.transformerSamples[idx];
  const keys = Object.keys(sample.attentionMap);
  window.currentActiveTokenText = keys[0];
  window.renderAttentionExplorer();
};

window.selectActiveToken = function(tokText) {
  const sample = window.transformerSamples[window.currentTransSampleIdx];
  if (sample.attentionMap[tokText]) {
    window.currentActiveTokenText = tokText;
  } else {
    // Se non ha una mappa dedicata, impostiamo default proporzionale
    window.currentActiveTokenText = tokText;
  }
  window.renderAttentionExplorer();
};

window.renderAttentionExplorer = function() {
  const sample = window.transformerSamples[window.currentTransSampleIdx];
  const container = document.getElementById('tokenPillsContainer');
  const barsContainer = document.getElementById('attentionBarsList');
  const label = document.getElementById('activeTokenLabel');
  const explanation = document.getElementById('attentionExplanationBox');

  if (!container || !barsContainer) return;

  // Render dei Pills dei Token
  container.innerHTML = sample.tokens.map(tok => `
    <button class="token-pill-btn ${tok.text === window.currentActiveTokenText ? 'active' : ''}" onclick="selectActiveToken('${tok.text}')">
      <span>${tok.text}</span>
      <span class="token-id-tag">ID: ${tok.id}</span>
    </button>
  `).join('');

  if (label) label.innerText = `"${window.currentActiveTokenText}"`;

  // Dati di attenzione
  let attData = sample.attentionMap[window.currentActiveTokenText];
  if (!attData) {
    // Genera pesi fittizi realistici se non espliciti
    attData = {
      weights: sample.tokens.map(t => t.text === window.currentActiveTokenText ? 1.0 : Math.random() * 0.35 + 0.05),
      desc: `Visualizzazione dei coefficienti di attenzione pesati dal meccanismo Query-Key per il token <strong>"${window.currentActiveTokenText}"</strong>.`
    };
  }

  // Render Barre di Attenzione
  barsContainer.innerHTML = sample.tokens.map((tok, i) => {
    const w = attData.weights[i] !== undefined ? attData.weights[i] : 0.1;
    const pct = Math.round(w * 100);
    return `
      <div class="attention-row">
        <div style="width: 85px; font-weight: 600; font-size: 0.85rem; text-align: right; color: #cbd5e1;">${tok.text}</div>
        <div class="attention-bar-track">
          <div class="attention-bar-fill" style="width: ${pct}%;"></div>
        </div>
        <div style="width: 45px; font-family: monospace; font-size: 0.8rem; color: #f472b6;">${pct}%</div>
      </div>
    `;
  }).join('');

  if (explanation) explanation.innerHTML = `💡 <strong>Analisi Semantica:</strong> ${attData.desc}`;
};


// --- WIDGET 11.3: QUANTUM BLOCH & CIRCUIT LAB ---
window.quantumSimState = {
  alpha: 1.0, // Ampiezza |0>
  beta: 0.0,  // Ampiezza |1>
  measurements: { zeros: 0, ones: 0, total: 0 }
};

window.applyQuantumGate = function(gate) {
  const q = window.quantumSimState;

  if (gate === 'RESET') {
    q.alpha = 1.0;
    q.beta = 0.0;
  } else if (gate === 'X') {
    // Porta Pauli-X: inverte ampiezze
    const tmp = q.alpha;
    q.alpha = q.beta;
    q.beta = tmp;
  } else if (gate === 'H') {
    // Porta Hadamard: H |0> = (|0>+|1>)/sqrt(2), H |1> = (|0>-|1>)/sqrt(2)
    const invSqrt2 = 1 / Math.SQRT2;
    const newA = invSqrt2 * (q.alpha + q.beta);
    const newB = invSqrt2 * (q.alpha - q.beta);
    q.alpha = newA;
    q.beta = newB;
  } else if (gate === 'Z') {
    // Porta Pauli-Z: inverte segno di beta
    q.beta = -q.beta;
  }

  // Nasconde banner misurazione precedente quando si applicano porte
  const banner = document.getElementById('quantumMeasurementResult');
  if (banner) banner.style.display = 'none';

  window.renderQuantumLab();
};

window.performQuantumMeasurement = function() {
  const q = window.quantumSimState;
  const pZero = Math.pow(q.alpha, 2);
  const rnd = Math.random();

  const measuredValue = rnd < pZero ? 0 : 1;

  // Il collasso della funzione d'onda proietta lo stato al 100% sul valore misurato!
  if (measuredValue === 0) {
    q.alpha = 1.0;
    q.beta = 0.0;
    q.measurements.zeros++;
  } else {
    q.alpha = 0.0;
    q.beta = 1.0;
    q.measurements.ones++;
  }
  q.measurements.total++;

  // Mostra banner del collasso
  const banner = document.getElementById('quantumMeasurementResult');
  if (banner) {
    banner.style.display = 'block';
    banner.style.background = measuredValue === 0 ? '#0f3b2e' : '#4a154b';
    banner.style.borderColor = measuredValue === 0 ? '#34d399' : '#f472b6';
    banner.style.color = measuredValue === 0 ? '#6ee7b7' : '#fbcfe8';
    banner.innerHTML = `⚡ <strong>Collasso della Funzione d'Onda Avvenuto!</strong><br>Risultato Classico Misurato: <span style="font-size: 1.4rem; font-weight: 900;">|${measuredValue}⟩</span> (Il Qubit è ora proiettato definitivamente su questo stato).`;
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

  // Descrizione fisica
  if (Math.abs(q.alpha - 1.0) < 0.001) {
    descEl.innerText = "Stato Puro Deterministico |0⟩: probabilità certa al 100% di misurare 0.";
  } else if (Math.abs(q.beta - 1.0) < 0.001) {
    descEl.innerText = "Stato Puro Deterministico |1⟩: probabilità certa al 100% di misurare 1.";
  } else if (Math.abs(pZero - 0.5) < 0.05) {
    descEl.innerText = "Sovrapposizione Coerente Perfetta (|0⟩ + |1⟩) / √2: equiprobabilità quantistica al 50%/50%!";
  } else {
    descEl.innerText = `Sovrapposizione Quantistica generica: vettore orientato sulla Sfera di Bloch.`;
  }

  probValZ.innerText = `${(pZero * 100).toFixed(1)}%`;
  probValO.innerText = `${(pOne * 100).toFixed(1)}%`;

  if (probBarZ) probBarZ.style.width = `${pZero * 100}%`;
  if (probBarO) probBarO.style.width = `${pOne * 100}%`;

  if (statsEl) {
    const total = q.measurements.total;
    const z = q.measurements.zeros;
    const o = q.measurements.ones;
    statsEl.innerText = `Misure totali effettuate: ${total} (Zeri: ${z} [${total ? Math.round(z/total*100) : 0}%] | Uni: ${o} [${total ? Math.round(o/total*100) : 0}%])`;
  }
};
