(window.courseData = window.courseData || []).push({
  id: 3,
  title: "3. La Rappresentazione dell'Informazione",
  keyRequired: "BINARY-CHIP-202",
  nextKey: "DESKTOP-GUI-303",
  submodules: [
    {
      title: "3.1 Bit e Logica Binaria",
      content: `
        <h2>3.1 L'Interruttore Elettronico, Leibniz e la Nascita del Bit</h2>
        
        <p>Noi viviamo in un universo fatto di grandezze <strong>continue e analogiche</strong>: il volume della voce può alzarsi o abbassarsi all'infinito, la temperatura dell'aria oscilla senza scatti netti, le lancette di un vecchio orologio scorrono fluide. Perché allora i computer moderni non sono macchine analogiche o decimali? Perché non usano dieci diversi livelli di corrente per contare da 0 a 9?</p>

        <p>La risposta è una questione di <strong>certezza fisica contro il rumore elettrico</strong>:</p>
        <ul>
          <li>Se un computer usasse 10 livelli di tensione (ad esempio 0.5 Volt per l'1, 1.0 Volt per il 2, fino a 5.0 Volt per il 9), una minuscola oscillazione nella presa della corrente o il calore del chip potrebbe trasformare 4.9 Volt in 5.1 Volt. Il computer scambierebbe continuamente un 8 per un 9, corrompendo ogni calcolo!</li>
          <li>Nel sistema <strong>binario</strong> esistono solo due stati estremi e opposti: <strong>Spento</strong> (tensione vicina a 0 Volt) o <strong>Acceso</strong> (tensione vicina al massimo, ad esempio 3.3 Volt). Qualsiasi rumore o imperfezione viene azzerata: se la tensione è sotto 1V è sicuramente uno <strong>0</strong>, se è sopra 2V è sicuramente un <strong>1</strong>!</li>
        </ul>

        <div class="callout-box history">
          <div class="callout-title">📜 Gottfried Wilhelm Leibniz e la Magia dell'1 e dello 0 (1703)</div>
          <p>Molti pensano che il sistema binario sia nato con l'elettronica nel Novecento. In realtà fu formalizzato oltre due secoli prima dal geniale filosofo e matematico tedesco <a href="https://it.wikipedia.org/wiki/Gottfried_Wilhelm_von_Leibniz" target="_blank">Gottfried Wilhelm Leibniz</a> nel suo saggio del 1703 intitolato <em>"Explication de l'Arithmétique Binaire"</em>.<br>
          Leibniz era affascinato da un antico testo sapienziale cinese millenario, l'<a href="https://it.wikipedia.org/wiki/Libro_dei_mutamenti" target="_blank">I Ching</a> (Libro dei Mutamenti), i cui 64 esagrammi erano composti da combinazioni di linee spezzate (yin, 0) e linee continue (yang, 1). Leibniz vide nel binario una metafora della creazione divina: l'Universo (1) generato dal Nulla (0).</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-03/leibniz-portrait.jpg" alt="Ritratto di Gottfried Wilhelm Leibniz" loading="lazy">
          <div class="figure-caption">Gottfried Wilhelm Leibniz (ca. 1695, dipinto di Christoph Bernhard Francke): il padre filosofico e matematico dell'aritmetica binaria moderna.</div>
        </div>

        <h3>Claude Shannon: La fusione tra Logica ed Elettricità (1937)</h3>
        <p>Nel 1937, uno studente ventunenne del MIT di nome <a href="https://it.wikipedia.org/wiki/Claude_Shannon" target="_blank">Claude Shannon</a> scrisse quella che oggi è considerata una delle tesi di laurea più influenti della storia umana. Shannon dimostrò che collegando interruttori elettrici (a relè o transistor) in serie e in parallelo, i circuiti potevano calcolare le regole della logica booleana (AND, OR, NOT).</p>
        <p>Fu Shannon a rendere universale il termine <strong>Bit</strong> (crasi di <em>Binary Digit</em>, cifra binaria). Un singolo bit è la quantità minima indispensabile per sciogliere un dubbio tra due alternative equiprobabili: Testa o Croce, Vero o Falso, 0 o 1.</p>

        <div class="callout-box curiosity">
          <div class="callout-title">💾 Disallineamento di Contesto: Memoria di Massa (Storage) vs Memoria di Accesso (RAM)</div>
          <p>Ti ricordi il <strong>disallineamento di contesto</strong> del Modulo 1 (quando la sonda su Marte si schiantò perché due team usavano due unità di misura diverse)? Nel mondo dell'hardware accade ogni giorno una cosa identica!</p>
          <p>Ti è mai capitato di comprare un disco SSD o una chiavetta da <strong>1 TB (1 Terabyte)</strong>, collegarla al computer e leggere disorientato che lo spazio disponibile è solo <strong>931 GB</strong>? Dove sono spariti i quasi 70 Gigabyte mancanti?</p>
          <p>La risposta è un perfetto esempio di teoria dell'informazione: <strong>due contesti diversi applicati allo stesso numero</strong>:</p>
          <ul>
            <li><strong>Il Contesto della Memoria di Massa (Storage Memory):</strong> I produttori di dischi e memorie fisiche contano con il sistema decimale umano (potenze di 10). Per loro, 1 Kilo = 1.000 e quindi <code>1 TB = 10¹² = 1.000.000.000.000 di byte</code>.</li>
            <li><strong>Il Contesto della Memoria di Accesso (RAM e Indirizzamento CPU):</strong> Il processore, il bus di memoria e il sistema operativo non hanno dita: indirizzano ogni singola cella tramite linee binarie ($2^0, 2^1, 2^2...$). Nella logica di accesso alla memoria, i salti di scala avvengono solo per potenze di 2. Per il kernel del sistema operativo, 1 Kilo non può essere 1.000, ma deve essere <code>1.024 (2¹⁰)</code>!</li>
            <li><strong>L'Equivoco Semantico:</strong> Quando Windows analizza il disco, divide i trilioni di byte per <code>1024 × 1024 × 1024</code>. Il risultato è <code>931,32 GiB</code> (Gibibyte binari), ma li etichetta sbrigativamente con la sigla "GB"!</li>
          </ul>
          <p>Entrambi dicono la verità, ma parlano linguaggi diversi: la fabbrica vende memoria con il contesto decimale, mentre la CPU gestisce l'accesso con il contesto binario!</p>
        </div>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-03/leibniz-binary-1703.png" alt="Manoscritto dell'aritmetica binaria di Leibniz del 1703" loading="lazy" style="object-fit: contain; background: #fff; max-height: 440px;">
          <div class="figure-caption">La tavola originale dei numeri da 0 a 32 in sistema binario pubblicata da Leibniz nel 1703 sui Mémoires dell'Accademia Reale delle Scienze di Parigi.</div>
        </div>
      `
    },
    {
      title: "3.2 Il Sistema Binario & L'Overflow di Pac-Man",
      content: `
        <h2>3.2 Come Contano i Calcolatori & L'Incubo dell'Overflow</h2>

        <p>Noi esseri umani usiamo il <strong>sistema decimale</strong> (base 10) unicamente per ragioni anatomiche: siamo nati con 10 dita sulle mani. In base 10 ogni posizione vale una potenza di 10 (unità, decine, centinaia, migliaia). Il numero <code>253</code> significa: <code>(2 × 100) + (5 × 10) + (3 × 1)</code>.</p>

        <p>I calcolatori invece hanno solo 2 stati, quindi usano il <strong>sistema posizionale binario</strong> (base 2). Qui ogni colonna, partendo da destra verso sinistra, vale il <strong>doppio</strong> della precedente:</p>
        <div style="font-family: monospace; font-size: 0.95rem; background: var(--card-hover); padding: 12px; border-radius: 6px; border: 1px solid var(--border); margin: 12px 0;">
          Potenze di 2: &nbsp; 2⁷ &nbsp; 2⁶ &nbsp; 2⁵ &nbsp; 2⁴ &nbsp; 2³ &nbsp; 2² &nbsp; 2¹ &nbsp; 2⁰<br>
          Valore decimale: 128 &nbsp; 64 &nbsp; 32 &nbsp; 16 &nbsp;&nbsp; 8 &nbsp;&nbsp; 4 &nbsp;&nbsp; 2 &nbsp;&nbsp; 1
        </div>

        <p>Ad esempio, il byte binario <code>10100101</code> corrisponde alla somma dei valori delle colonne che hanno un <strong>1</strong>:</p>
        <p style="font-family: monospace; background: var(--card-bg); padding: 8px 12px; border-radius: 4px; border: 1px solid var(--border);">
          128 + 0 + 32 + 0 + 0 + 4 + 0 + 1 = <strong>165</strong> in decimale!
        </p>

        <h3>Il Limite Fisico: Cos'è l'Overflow (Trabalzamento)?</h3>
        <p>Un contachilometri analogico di una vecchia auto con 5 cifre può segnare al massimo <code>99.999</code> km. Se percorri un solo chilometro in più, il contatore non segna 100.000: si azzera tornando a <code>00.000</code>!</p>
        <p>Nei computer accade esattamente la stessa cosa: una cella di memoria o un registro ha un numero finito di bit. Con <strong>8 bit (1 Byte)</strong> possiamo rappresentare solo 256 numeri differenti, da <code>0</code> a <code>255</code> (cioè <code>11111111</code> in binario). Cosa succede se un programma tenta di sommare <code>255 + 1</code> in un registro a 8 bit?</p>
        <p>Il risultato teorico sarebbe <code>256</code> (in binario <code>100000000</code>, che richiede 9 bit). Poiché il 9° bit non ha spazio fisico dove essere salvato, "cade nel vuoto" (viene scartato) e il registro torna istantaneamente a <strong>0</strong>! Questa anomalia si chiama <a href="https://it.wikipedia.org/wiki/Overflow_aritmetico" target="_blank">Overflow Aritmetico</a>.</p>

        <div class="callout-box history">
          <div class="callout-title">👾 Il Famoso "Kill Screen" del Livello 256 di Pac-Man (1980)</div>
          <p>Nel mitico videogioco arcade <em>Pac-Man</em> (1980), i programmatori memorizzavano il numero del livello in un singolo byte a 8 bit.<br>
          Nessuno pensava che un giocatore umano potesse sopravvivere così a lungo! Tuttavia, i campioni mondiali arrivarono al <strong>Livello 256</strong>.<br>
          Al momento del caricamento, la formula del gioco faceva <code>255 + 1</code>. Il registro fece overflow azzerandosi a <code>0</code>! La routine dei bonus andò in tilt e cercò di disegnare 256 frutti sul bordo dello schermo: la memoria video venne sovrascritta con spazzatura di dati, trasformando la metà destra del labirinto in una cascata illeggibile di caratteri e numeri glitchati che impediva di finire la partita!</p>
        </div>

        <div class="callout-box experiment">
          <div class="callout-title">🚀 Il Disastro del Razzo Ariane 5 (1996)</div>
          <p>L'overflow non colpisce solo i videogiochi. Il 4 giugno 1996, il razzo europeo <strong>Ariane 5</strong> esplose 37 secondi dopo il decollo (un danno da oltre 370 milioni di dollari!).<br>
          Il software di navigazione cercò di convertire la velocità orizzontale (un numero a 64 bit con virgola) in un intero a 16 bit con segno (il cui valore massimo è 32.767). La velocità del razzo superò 32.767: il numero fece overflow diventando negativo, il pilota automatico credette che il razzo stesse virando al contrario e ordinò una correzione folle che spezzò la fusoliera!</p>
        </div>

        <h3>Notazioni Compatte: Perché Usiamo l'Esadecimale e l'Ottale?</h3>
        <p>I microchip lavorano instancabilmente con fiumi sterminati di 0 e 1. Ma prova a immaginare se un programmatore dovesse leggere o confrontare a occhio schermate piene di sequenze come:</p>
        <p style="font-family: monospace; background: var(--card-hover); padding: 8px 12px; border-radius: 4px; border: 1px solid var(--border);">
          11011010 11110000 10101111 00111100 11000011 01010101 ...
        </p>
        <p>Gli occhi umani si stancherebbero in pochi secondi, e commettere errori di battitura scambiando uno 0 con un 1 sarebbe inevitabile! Per questo gli informatici hanno ideato delle <strong>notazioni compatte</strong>: modi ordinati e compatti per raggruppare i bit senza alterare il valore matematico sottostante.</p>

        <div class="callout-box history">
          <div class="callout-title">🔢 Il Re delle Scorciatoie: Il Sistema Esadecimale (Base 16)</div>
          <p>La notazione compatta preferita in assoluto nell'informatica è l'<a href="https://it.wikipedia.org/wiki/Sistema_numerico_esadecimale" target="_blank">Esadecimale</a> (Base 16). Perché proprio 16? Perché <code>16 = 2⁴</code>!<br>
          Questo significa una proprietà formidabile: <strong>esattamente 4 bit (chiamati un "nibble" o semi-byte) corrispondono a una singola cifra esadecimale</strong>!</p>
          <ul>
            <li>In base 16 servono 16 cifre distinte: usiamo i numeri da <code>0</code> a <code>9</code> per i primi dieci valori, e poi le lettere dell'alfabeto per i valori successivi: <code>A (10), B (11), C (12), D (13), E (14), F (15 = 1111 binario)</code>;</li>
            <li>In questo modo, un intero byte a 8 bit (come <code>1101 1010</code>) si spezza in due metà da 4 bit: la prima metà <code>1101 = 13 = D</code> e la seconda metà <code>1010 = 10 = A</code>, diventando semplicemente <strong>DA</strong>!</li>
            <li>Nei linguaggi di programmazione si antepone il prefisso <code>0x</code> (ad esempio <code>0xDA</code> o <code>0xFF</code> per indicare 255) per chiarire immediatamente che stiamo usando la base esadecimale;</li>
            <li>Un'altra notazione compatta storica è l'<strong>Ottale (Base 8)</strong>: raggruppa i bit a triplette di 3 (poiché <code>8 = 2³</code>) con cifre da 0 a 7. Era usata nei minicomputer degli anni '60/'70 come il PDP-11 e sopravvive ancora oggi nei permessi dei file dei sistemi Unix e Linux (es. <code>chmod 755</code>).</li>
          </ul>
          <p><em>Ricorda:</em> L'esadecimale e l'ottale non sono "nuovi linguaggi" per i chip (l'elettronica capisce solo il binario acceso/spento!). Sono semplicemente <strong>scorciatoie visive a misura d'uomo</strong> per gestire grandi quantità di bit con facilità.</p>
        </div>

        <!-- WIDGET 1: CONVERTITORE BINARIO 8-BIT & OVERFLOW SIMULATOR -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🕹️ Laboratorio 8-Bit, Notazione Esadecimale & Overflow</span>
            <span class="widget-badge">Widget 3.2</span>
          </div>
          <div class="widget-body">
            <p>Clicca sui singoli bit per accenderli (1) o spegnerli (0). Osserva come gli 8 bit si dividono nei due "nibble" (4 bit ciascuno) per formare le due cifre esadecimali:</p>

            <div class="binary-switch-board" id="binaryBitBoard">
              <!-- Rendered via JS -->
            </div>

            <div class="binary-readout-card">
              <div class="binary-readout-header">
                <div>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">VALORE DECIMALE:</span>
                  <div id="binDecDisplay" style="font-size: 1.8rem; font-weight: 800; color: var(--primary);">0</div>
                </div>
                <div>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">ESADECIMALE (BASE 16):</span>
                  <div id="binHexDisplay" style="font-size: 1.8rem; font-weight: 800; font-family: monospace; color: #10b981;">0x00</div>
                </div>
                <div>
                  <span style="font-size: 0.8rem; color: var(--text-muted);">DUE NIBBLE (4 + 4 BIT):</span>
                  <div id="binNibbleDisplay" style="font-size: 1.35rem; font-weight: 800; font-family: monospace; color: #f59e0b; margin-top: 4px;">0000 · 0000</div>
                </div>
              </div>

              <div class="binary-math-row" id="binMathBreakdown">
                Somma: 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 = 0
              </div>
            </div>

            <!-- Glitch Screen Pac-Man Box -->
            <div class="pacman-glitch-box" id="pacmanGlitchBanner">
              <div style="font-size: 1.1rem; font-weight: bold; margin-bottom: 6px;">
                👾 ATTENZIONE: LIVELLO 256 DI PAC-MAN RAGGIUNTO! (OVERFLOW!)
              </div>
              <p style="margin: 0; font-size: 0.88rem; line-height: 1.4;">
                Il registro a 8 bit ha superato 255! <br>
                <code>255 + 1 = 256 (1 0000 0000 binario)</code> ➔ Il 9° bit cade fuori dal registro a 8 bit, azzerando il contatore a <strong>0</strong>!<br>
                <em>GLITCH DETECTED: [ ▙▟█ §#&@! ?% 42 Cherry_Error_VRAM_Corrupted ]</em>
              </p>
            </div>

            <!-- Pulsanti Operazioni -->
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px;">
              <button class="btn-primary" onclick="incrementBinary()">+1 Incrementa</button>
              <button class="btn-primary" style="background: #475569;" onclick="decrementBinary()">-1 Decrementa</button>
              <button class="btn-primary" style="background: #0284c7;" onclick="resetBinary(0)">Azzera (0)</button>
              <button class="btn-primary" style="background: #059669;" onclick="resetBinary(255)">Tutto a 1 (255)</button>
              <button class="btn-primary" style="background: #dc2626;" onclick="triggerPacmanOverflow()">👾 Simula Overflow Pac-Man (255 + 1)</button>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "3.3 Testo ed Emoji: Schede Perforate, ASCII e Unicode",
      content: `
        <h2>3.3 Come i Computer Leggono Parole ed Emoji: Dal Cartone ad Unicode</h2>

        <p>I microchip sanno manipolare unicamente numeri binari. Come facciamo allora a scrivere un messaggio su WhatsApp, compilare codice Python o cercare una voce su Wikipedia? Serve una <strong>convenzione di codifica</strong> condivisa: assegnare a ogni lettera, simbolo ed emoji un numero preciso.</p>

        <h3>Scrivere Codice prima degli Schermi: Le Schede Perforate IBM</h3>
        <p>Negli anni '50 e '60 non esistevano monitor piatti, chiavette USB o tastiere Bluetooth. Per dare istruzioni a un grande calcolatore (Mainframe), i programmatori usavano <strong>schede perforate</strong> di cartoncino rigido rettangolare standardizzate da IBM.</p>
        <ul>
          <li>Ciascuna scheda conteneva <strong>80 colonne</strong> di fori: ogni colonna rappresentava esattamente 1 carattere o un byte di istruzione;</li>
          <li>Per scrivere un intero programma servivano scatoloni contenenti migliaia di schede numerate in ordine sequenziale. Se un programmatore inciampava nel corridoio e rovesciava lo scatolone, il codice si mescolava e ci volevano ore per rimetterlo in ordine!</li>
          <li><em>Curiosità:</em> Il limite fisico delle 80 colonne delle schede IBM è il motivo per cui ancora oggi i programmatori raccomandano di non scrivere righe di codice più lunghe di 80 caratteri!</li>
        </ul>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-03/punch-card.png" alt="Scheda perforata standard IBM a 80 colonne" loading="lazy">
          <div class="figure-caption">Una scheda perforata standard IBM (80 colonne): la forma fisica con cui l'umanità programmava i calcolatori prima dei monitor e dei dischi rigidi.</div>
        </div>

        <h3>Lo Standard ASCII (1963)</h3>
        <p>Nel 1963 nacque lo standard <a href="https://it.wikipedia.org/wiki/ASCII" target="_blank">ASCII</a> (American Standard Code for Information Interchange). Usava <strong>7 bit</strong> per mappare 128 caratteri (da 0 a 127):</p>
        <ul>
          <li>I numeri da 0 a 31 erano comandi di controllo (es. il tasto <em>Invio</em>, <em>Tab</em>, <em>Esc</em>);</li>
          <li>Il numero <code>32</code> era lo spazio vuoto;</li>
          <li>Il numero <code>65</code> (in binario <code>01000001</code>) corrispondeva alla lettera <code>'A'</code>;</li>
          <li>Il numero <code>97</code> (in binario <code>01100001</code>) corrispondeva alla lettera minuscola <code>'a'</code>. Nota la magia binaria: per trasformare una lettera da maiuscola a minuscola, basta accendere il 6° bit (sommando 32)!</li>
        </ul>

        <!-- WIDGET 2: SCHEDA PERFORATA INTERATTIVA & DECODER ASCII -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">📠 La Punzonatrice di Schede Perforate & ASCII Decoder</span>
            <span class="widget-badge">Widget 3.3A</span>
          </div>
          <div class="widget-body">
            <p>Clicca sui fori del cartoncino per perforarlo (foro = 1) o tapparlo (cartone integro = 0), oppure digita una lettera qualsiasi per vedere come veniva forata dal computer:</p>

            <div class="punch-card-board">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-weight: bold; font-size: 0.82rem; letter-spacing: 1px;">IBM STANDARD PUNCHED CARD (1 BYTE / 8-BIT)</span>
                <span style="font-size: 0.75rem; color: #a16207;">[SERIE 1968]</span>
              </div>

              <div class="punch-strip" id="punchHoleStrip">
                <!-- Rendered via JS -->
              </div>

              <div class="punch-readout-bar" id="punchReadoutBar">
                <!-- Rendered via JS -->
              </div>
            </div>

            <!-- Controlli e input da tastiera -->
            <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-top: 12px;">
              <div style="display: flex; align-items: center; gap: 6px;">
                <label for="charPunchInput" style="font-size: 0.85rem; font-weight: bold;">Digita un carattere:</label>
                <input type="text" id="charPunchInput" maxlength="1" placeholder="es. A" style="width: 50px; text-align: center; font-size: 1.1rem; font-weight: bold; padding: 4px;" oninput="onCharPunchTyped(this.value)">
              </div>

              <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px;" onclick="setPunchPreset(65)">Lettera 'A' (65)</button>
              <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px;" onclick="setPunchPreset(90)">Lettera 'Z' (90)</button>
              <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px;" onclick="setPunchPreset(42)">Numero '42' ('*')</button>
              <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px;" onclick="setPunchPreset(64)">Chiocciola '@' (64)</button>
              <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 10px; background: #64748b;" onclick="setPunchPreset(0)">Cartone Pulito (0)</button>
            </div>
          </div>
        </div>

        <h3>La Torre di Babele dell'ASCII e il Mojibake</h3>
        <p>L'ASCII standard era perfetto per l'inglese, ma non conteneva le vocali accentate italiane (<em>à, è, é, ì, ò, ù</em>), né i caratteri tedeschi con umlaut (<em>ä, ö, ü</em>), né gli alfabeti greco, cirillico, arabo o i kanji giapponesi.</p>
        <p>Negli anni '80 i costruttori aggiunsero l'8° bit (da 128 a 255), ma ogni nazione e produttore inventò la propria tabella incompatibile! Il risultato fu il caos del <a href="https://it.wikipedia.org/wiki/Mojibake" target="_blank">Mojibake</a> (in giapponese 文字化け, "caratteri trasformati in mostri"): aprendo una mail o una pagina web creata su un altro computer, al posto di <em>"è un bel caffè"</em> si leggevano sgorbi assurdi come <code>"Ã¨ un bel caffÃ¨"</code>!</p>

        <h3>La Salvezza: Unicode e UTF-8 (1992)</h3>
        <p>Per porre fine a questa guerra, nel 1991 nacque il consorzio <a href="https://it.wikipedia.org/wiki/Unicode" target="_blank">Unicode</a> con l'obiettivo di assegnare un numero univoco a <strong>ogni singolo carattere di ogni lingua umana</strong> mai esistita (inclusi geroglifici egizi e cuneiforme!).</p>
        <p>Nel 1992, Ken Thompson e Rob Pike (i creatori di Unix) progettarono su una tovaglietta di carta di un diner nel New Jersey il formato <a href="https://it.wikipedia.org/wiki/UTF-8" target="_blank">UTF-8</a>: una codifica geniale a lunghezza variabile:</p>
        <ul>
          <li>I caratteri inglesi usano solo <strong>1 Byte</strong> (esattamente identici al vecchio ASCII);</li>
          <li>Le lettere accentate europee e il greco usano <strong>2 Byte</strong>;</li>
          <li>I caratteri asiatici e simboli matematici usano <strong>3 Byte</strong>;</li>
          <li>Le <strong>Emoji</strong> moderne usano ben <strong>4 Byte</strong> (32 bit)!</li>
        </ul>

        <div class="callout-box history">
          <div class="callout-title">📱 La Nascita delle Emoji: Shigetaka Kurita (1999)</div>
          <p>Nel 1999, l'artista giapponese <strong>Shigetaka Kurita</strong> lavorava per la compagnia telefonica NTT DoCoMo. I cercapersone e i primi cellulari avevano schermi minuscoli e messaggi limitati a pochissimi caratteri. Kurita disegnò una serie di <strong>176 icone da 12×12 pixel</strong> ispirate ai simboli meteo e ai manga per esprimere emozioni rapide (il cuore, la faccina che sorride, la tazzina di caffè).<br>
          Nel 2010 Unicode le incorporò ufficialmente nello standard universale, rendendole leggibili tra qualsiasi smartphone Apple, Android o computer nel mondo!</p>
        </div>

        <!-- WIDGET 3: ISPETTORE UNICODE & EMOJI UTF-8 -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🔬 Ispettore Unicode & Emoji UTF-8</span>
            <span class="widget-badge">Widget 3.3B</span>
          </div>
          <div class="widget-body">
            <p>Seleziona un'emoji o digita un carattere speciale per ispezionare quanti byte occupa in memoria RAM e la sequenza esatta di byte inviata sulla rete:</p>

            <div class="utf8-inspector-card">
              <div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
                <div style="font-size: 3rem;" id="utf8GlyphPreview">🚀</div>
                <div>
                  <div style="font-size: 1.2rem; font-weight: bold;" id="utf8CharName">Rocket (Razzo Spaziale)</div>
                  <div style="font-size: 0.85rem; color: var(--text-muted); font-family: monospace;" id="utf8CodePoint">Code Point: U+1F680 (Decimale: 128640)</div>
                  <div style="font-size: 0.85rem; color: var(--primary); font-weight: 600; margin-top: 2px;" id="utf8ByteCount">Dimensione: 4 Byte (32 bit in UTF-8)</div>
                </div>
              </div>

              <div class="utf8-bytes-row" id="utf8BytesContainer">
                <!-- Rendered via JS -->
              </div>
            </div>

            <!-- Pulsanti preset emoji -->
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
              <button class="btn-primary" style="font-size: 1.1rem; padding: 6px 12px;" onclick="inspectUtf8Char('🚀')">🚀</button>
              <button class="btn-primary" style="font-size: 1.1rem; padding: 6px 12px;" onclick="inspectUtf8Char('🍕')">🍕</button>
              <button class="btn-primary" style="font-size: 1.1rem; padding: 6px 12px;" onclick="inspectUtf8Char('🤖')">🤖</button>
              <button class="btn-primary" style="font-size: 1.1rem; padding: 6px 12px;" onclick="inspectUtf8Char('🎉')">🎉</button>
              <button class="btn-primary" style="font-size: 1.1rem; padding: 6px 12px;" onclick="inspectUtf8Char('€')">€</button>
              <button class="btn-primary" style="font-size: 1.1rem; padding: 6px 12px;" onclick="inspectUtf8Char('è')">è</button>
              <button class="btn-primary" style="font-size: 1.1rem; padding: 6px 12px;" onclick="inspectUtf8Char('漢')">漢</button>
              <button class="btn-primary" style="font-size: 1.1rem; padding: 6px 12px;" onclick="inspectUtf8Char('A')">A</button>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "3.4 Immagini e Suoni Digitali: Pixel, RGB e Campionamento",
      content: `
        <h2>3.4 Digitalizzare la Realtà: Pixel, Subpixel RGB e Suono</h2>

        <p>Come facciamo a racchiudere un tramonto sul mare o una canzone di Spotify dentro una sequenza di numeri binari? La realtà fisica è un flusso continuo di fotoni e onde di pressione acustica nell'aria. Per memorizzarla in un chip, dobbiamo compiere una <strong>digitalizzazione</strong>: scomporre il continuo in una serie finita di tasselli numerici discreti.</p>

        <h3>Digitalizzare la Vista: La Griglia di Pixel e la Sintesi Additiva RGB</h3>
        <p>Un'immagine digitale viene suddivisa in una scacchiera invisibile formata da milioni di mattoncini chiamati <a href="https://it.wikipedia.org/wiki/Pixel" target="_blank">Pixel</a> (abbreviazione di <em>Picture Element</em>). Una foto Full HD (1920 × 1080) contiene oltre <strong>2 milioni di pixel</strong> indipendenti.</p>
        
        <p>Come facciamo a dare il colore a ogni pixel? I display elettronici (smartphone, TV, monitor) sfruttano la <strong>sintesi additiva della luce</strong> basata sui tre colori primari: <strong>Rosso (Red), Verde (Green) e Blu (Blue) - RGB</strong>:</p>
        <ul>
          <li>Mescolare tempere su un foglio di carta è una sintesi sottrattiva: più colori mescoli, più il foglio diventa scuro fino al nero.</li>
          <li>Nei display invece emettiamo luce: sommare fasci di luce produce colori sempre più chiari!
            <ul>
              <li>Rosso + Verde = <strong>Giallo</strong>!</li>
              <li>Rosso + Blu = <strong>Magenta</strong>!</li>
              <li>Verde + Blu = <strong>Ciano</strong>!</li>
              <li>Rosso + Verde + Blu al massimo = <strong>Bianco Puro</strong>!</li>
              <li>Tutti spenti = <strong>Nero Assoluto</strong>.</li>
            </ul>
          </li>
        </ul>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-03/additive-color-rgb.svg" alt="Diagramma della sintesi additiva dei colori RGB" loading="lazy" style="object-fit: contain;">
          <div class="figure-caption">Sintesi additiva RGB: la sovrapposizione dei tre fasci primari di luce genera i colori secondari (Giallo, Ciano, Magenta) e il Bianco al centro.</div>
        </div>

        <div class="callout-box curiosity">
          <div class="callout-title">👁️ Il Tuo Occhio è Ingannato: Il Giallo sullo Schermo non Esiste!</div>
          <p>Quando guardi un limone o una maglietta gialla sullo schermo del tuo telefono, <strong>non c'è alcuna luce gialla emessa dal display</strong>!<br>
          Se prendessi una lente d'ingrandimento da gioielliere o un microscopio e la appoggiassi sullo schermo del telefono, vedresti che ogni pixel è in realtà composto da tre minuscole barrette verticali chiamate <strong>subpixel</strong>: una rossa, una verde e una blu.<br>
          Per mostrarti il giallo, il display accende al massimo la barretta rossa e quella verde vicinissime tra loro. I fotoni rossi e verdi colpiscono insieme i recettori della tua retina e il tuo cervello compie la magia psicofisica di percepire il "Giallo"!</p>
        </div>

        <p>Nello standard a <strong>24 bit (True Color)</strong>, a ciascuno dei tre canali (R, G, B) viene assegnato <strong>1 Byte (8 bit)</strong>, cioè un numero intero compreso tra 0 e 255. Moltiplicando le combinazioni:<br>
        <code>256 (Rosso) × 256 (Verde) × 256 (Blu) = 16.777.216 di colori possibili!</code><br>
        Più sfumature cromatiche di quante l'occhio umano sia biologicamente in grado di distinguere!</p>

        <!-- WIDGET 4: MICROSCOPIO SUBPIXEL RGB -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🔬 Microscopio Virtuale a Subpixel RGB</span>
            <span class="widget-badge">Widget 3.4</span>
          </div>
          <div class="widget-body">
            <p>Muovi gli slider per dosare i tre canali da 0 a 255. Osserva la simulazione microscopica dei subpixel LED nel visore a destra e il colore risultante per sintesi additiva:</p>

            <div class="rgb-workbench">
              <!-- Controlli Slider -->
              <div class="rgb-control-group">
                <div class="rgb-slider-row">
                  <div class="rgb-slider-header">
                    <span style="color: #ef4444;">🔴 Rosso (Red):</span>
                    <span id="valRedDisplay" style="font-family: monospace;">255</span>
                  </div>
                  <input type="range" class="rgb-slider red" id="sliderRed" min="0" max="255" value="255" oninput="onRgbSliderChange()">
                </div>

                <div class="rgb-slider-row">
                  <div class="rgb-slider-header">
                    <span style="color: #10b981;">🟢 Verde (Green):</span>
                    <span id="valGreenDisplay" style="font-family: monospace;">215</span>
                  </div>
                  <input type="range" class="rgb-slider green" id="sliderGreen" min="0" max="255" value="215" oninput="onRgbSliderChange()">
                </div>

                <div class="rgb-slider-row">
                  <div class="rgb-slider-header">
                    <span style="color: #3b82f6;">🔵 Blu (Blue):</span>
                    <span id="valBlueDisplay" style="font-family: monospace;">0</span>
                  </div>
                  <input type="range" class="rgb-slider blue" id="sliderBlue" min="0" max="255" value="0" oninput="onRgbSliderChange()">
                </div>

                <!-- Preset rapidi -->
                <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px;">
                  <button class="btn-primary" style="font-size: 0.78rem; padding: 4px 8px; background: #ca8a04;" onclick="setRgbPreset(255, 255, 0)">Giallo (R+V)</button>
                  <button class="btn-primary" style="font-size: 0.78rem; padding: 4px 8px; background: #0891b2;" onclick="setRgbPreset(0, 255, 255)">Ciano (V+B)</button>
                  <button class="btn-primary" style="font-size: 0.78rem; padding: 4px 8px; background: #c026d3;" onclick="setRgbPreset(255, 0, 255)">Magenta (R+B)</button>
                  <button class="btn-primary" style="font-size: 0.78rem; padding: 4px 8px; background: #475569;" onclick="setRgbPreset(255, 255, 255)">Bianco (Max)</button>
                  <button class="btn-primary" style="font-size: 0.78rem; padding: 4px 8px; background: #0f172a;" onclick="setRgbPreset(0, 0, 0)">Nero (Spento)</button>
                </div>
              </div>

              <!-- Visore Microscopio -->
              <div class="rgb-microscope-view">
                <div style="font-size: 0.72rem; color: #94a3b8; margin-bottom: 8px; font-weight: bold; letter-spacing: 1px;">
                  VISORE INGRANDIMENTO 500×
                </div>

                <div class="microscope-lens">
                  <div class="subpixel-bar red" id="subpixelRedBar"></div>
                  <div class="subpixel-bar green" id="subpixelGreenBar"></div>
                  <div class="subpixel-bar blue" id="subpixelBlueBar"></div>
                </div>

                <div class="color-swatch-box" id="rgbColorSwatch">
                  #FFD700
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>Digitalizzare il Suono: Il Campionamento e il Teorema di Nyquist-Shannon</h3>
        <p>Una canzone o la voce umana è un'onda di pressione che viaggia nell'aria. Per trasformarla in file digitale (MP3, WAV), un microfono converte la vibrazione dell'aria in un segnale elettrico, che viene poi misurato migliaia di volte al secondo attraverso due passaggi:</p>
        <ol>
          <li><strong>Campionamento (Sampling Rate):</strong> Misurare l'altezza dell'onda a intervalli di tempo regolari.
            <div class="callout-box experiment" style="margin: 8px 0;">
              <div class="callout-title">🎵 Perché i CD Audio campionano proprio a 44.100 Hertz?</div>
              <p>Il celebre <strong>Teorema di Nyquist-Shannon</strong> stabilisce che per catturare fedelmente un suono senza distorsioni, la frequenza di campionamento deve essere almeno il <strong>doppio</strong> della frequenza più alta che vogliamo registrare.<br>
              L'udito umano medio percepisce suoni fino a circa <strong>20.000 Hz (20 kHz)</strong>. Raddoppiando 20.000 otteniamo 40.000. Negli anni '70, gli ingegneri di Sony e Philips scelsero la frequenza standard di <strong>44.100 campioni al secondo (44.1 kHz)</strong> per avere un margine di sicurezza e memorizzare musica perfetta su Compact Disc!</p>
            </div>
          </li>
          <li><strong>Quantizzazione (Bit Depth):</strong> Ogni singolo campione numerico viene registrato con un numero di bit (ad esempio <strong>16 bit</strong> per il CD Audio, corrispondente a 65.536 livelli di volume diversi, o <strong>24 bit</strong> per l'audio da studio professionale).</li>
        </ol>

        <p>Infine, i formati come l'<a href="https://it.wikipedia.org/wiki/MP3" target="_blank">MP3</a> applicano la <strong>compressione psicoacustica (lossy)</strong>: algoritmi matematici che eliminano i suoni che l'orecchio umano non riesce a percepire (ad esempio un sussurro coperto da un colpo di tamburo simultaneo), riducendo le dimensioni del file audio fino al 90% senza che ce ne accorgiamo!</p>
      `
    }
  ],
  quiz: {
    questions: [
      {
        q: "Perché l'elettronica digitale dei moderni processori adotta il sistema binario (base 2) anziché il sistema decimale (base 10)?",
        options: [
          { text: "Perché distinguere due soli stati estremi di tensione (transistor in saturazione o interdizione, ON/OFF) offre la massima immunità al rumore elettrico, al degrado termico e alle fluttuazioni di alimentazione", correct: true },
          { text: "Perché la base 10 richiede dieci cavi fisici separati per ogni singolo transistor presente sul die della CPU", correct: false },
          { text: "Perché l'algebra booleana può operare unicamente se i registri della memoria RAM contengono numeri primi", correct: false },
          { text: "Perché i display video RGB possono mostrare pixel luminosi solo se la memoria opera a coppie di bit pari", correct: false }
        ]
      },
      {
        q: "Nel leggendario 'Kill Screen' del livello 256 di Pac-Man, quale fenomeno logico-aritmetico corrompe la schermata di gioco?",
        options: [
          { text: "La corruzione fisica dei banchi di memoria ROM del cabinato dovuta a un surriscaldamento prolungato", correct: false },
          { text: "Un Integer Overflow a 8 bit senza segno: sommando 1 al livello 255 (11111111₂), il bit di riporto viene troncato e il contatore si riazzera a 0, facendo eseguire alla subroutine di disegno dei frutti un ciclo errato da 256 iterazioni", correct: true },
          { text: "Un errore di virgola mobile IEEE 754 dovuto all'incapacità del processore Z80 di calcolare la radice quadrata del punteggio", correct: false },
          { text: "Un attacco di buffer overflow generato dall'inserimento di monete metalliche duplicate nella gettoniera", correct: false }
        ]
      },
      {
        q: "Qual è il motivo tecnico fondamentale per cui lo standard Unicode UTF-8 ha soppiantato ASCII e i set di caratteri a 8 bit?",
        options: [
          { text: "Utilizza una codifica a lunghezza fissa di 32 bit per ogni simbolo, raddoppiando la velocità di esecuzione della CPU", correct: false },
          { text: "È perfettamente retrocompatibile con ASCII a 7 bit (i primi 128 codici occupano 1 singolo byte identico) e impiega una lunghezza variabile da 1 a 4 byte per rappresentare oltre 1 milione di caratteri ed emoji di tutte le lingue mondiali", correct: true },
          { text: "Comprime il testo con un algoritmo lossy che elimina gli spazi e le vocali non accentate per ridurre il traffico di rete", correct: false },
          { text: "È l'unico formato che può essere memorizzato all'interno dei chip BIOS/UEFI delle schede madri", correct: false }
        ]
      },
      {
        q: "In base al Teorema di Campionamento di Nyquist-Shannon, perché i Compact Disc audio adottano la frequenza standard di 44,1 kHz?",
        options: [
          { text: "Perché per ricostruire perfettamente un segnale analogico continuo senza aliasing occorre campionare ad almeno il doppio della massima frequenza udibile (l'udito umano arriva a circa 20 kHz, quindi servono > 40 kHz)", correct: true },
          { text: "Perché la frequenza di 44,1 kHz corrisponde alla velocità di rotazione meccanica del motore laser nel lettore ottico", correct: false },
          { text: "Perché il campionamento a 44,1 kHz consente al processore di riprodurre audio stereo senza occupare memoria RAM", correct: false },
          { text: "Perché stabilisce che ogni secondo di registrazione musicale debba occupare esattamente 44.100 bit su disco fisso", correct: false }
        ]
      },
      {
        q: "Qual è la differenza concettuale e algoritmica tra compressione dati Lossless (es. PNG, FLAC, ZIP) e Lossy (es. JPEG, MP3)?",
        options: [
          { text: "I formati Lossless comprimono solo testo ed eliminano le tabelle, mentre i formati Lossy sono obbligatori per i file eseguibili binari", correct: false },
          { text: "I formati Lossless ricostruiscono bit per bit l'informazione originaria sfruttando ridondanze statistiche; i formati Lossy eliminano irreversibilmente dati psicologicamente trascurabili per ottenere tassi di riduzione molto superiori", correct: true },
          { text: "La compressione Lossy preserva tutti i dati originali al 100% ma richiede il doppio del tempo di decompressione da parte della CPU", correct: false },
          { text: "La compressione Lossless può essere applicata unicamente su memorie di massa a stato solido NVMe", correct: false }
        ]
      }
    ]
  }
});

/* =========================================================
   LOGICA JAVASCRIPT DEI WIDGET DEL MODULO 3
   ========================================================= */

// --- WIDGET 3.2: CONVERTITORE 8-BIT & OVERFLOW ---
window.binaryBits = [0, 0, 0, 0, 0, 0, 0, 0]; // bit 7 down to bit 0

window.renderBinaryConverter = function() {
  const board = document.getElementById("binaryBitBoard");
  if (!board) return;

  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  const powers = ["2⁷", "2⁶", "2⁵", "2⁴", "2³", "2²", "2¹", "2⁰"];

  board.innerHTML = "";
  let decVal = 0;
  let breakdownParts = [];

  for (let i = 0; i < 8; i++) {
    const bitVal = window.binaryBits[i];
    const weight = weights[i];
    if (bitVal === 1) {
      decVal += weight;
      breakdownParts.push(`<strong style="color: var(--primary);">${weight}</strong>`);
    } else {
      breakdownParts.push(`<span style="color: var(--text-muted);">0</span>`);
    }

    const cell = document.createElement("div");
    cell.className = `binary-bit-cell ${bitVal === 1 ? 'active' : ''}`;
    cell.onclick = () => window.toggleBinaryBit(i);

    cell.innerHTML = `
      <span class="bit-power">${powers[i]}</span>
      <button class="bit-val-btn" type="button">${bitVal}</button>
      <span class="bit-weight">${weight}</span>
    `;
    board.appendChild(cell);
  }

  // Update displays
  const decElem = document.getElementById("binDecDisplay");
  const hexElem = document.getElementById("binHexDisplay");
  const nibbleElem = document.getElementById("binNibbleDisplay");
  const mathElem = document.getElementById("binMathBreakdown");

  if (decElem) decElem.innerText = decVal;
  const hexStr = decVal.toString(16).toUpperCase().padStart(2, "0");
  if (hexElem) hexElem.innerText = "0x" + hexStr;
  
  if (nibbleElem) {
    const highBits = window.binaryBits.slice(0, 4).join("");
    const lowBits = window.binaryBits.slice(4, 8).join("");
    const highHex = (decVal >> 4).toString(16).toUpperCase();
    const lowHex = (decVal & 0x0F).toString(16).toUpperCase();
    nibbleElem.innerHTML = `<span>${highBits}</span> (<span style="color: #10b981;">${highHex}</span>) · <span>${lowBits}</span> (<span style="color: #10b981;">${lowHex}</span>)`;
  }

  if (mathElem) {
    mathElem.innerHTML = `Somma potenze: ${breakdownParts.join(" + ")} = <strong>${decVal}</strong>`;
  }
};

window.toggleBinaryBit = function(index) {
  window.binaryBits[index] = window.binaryBits[index] === 1 ? 0 : 1;
  const glitch = document.getElementById("pacmanGlitchBanner");
  if (glitch) glitch.classList.remove("show");
  window.renderBinaryConverter();
};

window.setBinaryFromNumber = function(val) {
  val = Math.max(0, Math.min(255, val));
  for (let i = 0; i < 8; i++) {
    const bitWeight = 1 << (7 - i);
    window.binaryBits[i] = (val & bitWeight) ? 1 : 0;
  }
  window.renderBinaryConverter();
};

window.incrementBinary = function() {
  let val = 0;
  for (let i = 0; i < 8; i++) {
    if (window.binaryBits[i] === 1) val += (1 << (7 - i));
  }
  if (val >= 255) {
    window.triggerPacmanOverflow();
  } else {
    window.setBinaryFromNumber(val + 1);
  }
};

window.decrementBinary = function() {
  let val = 0;
  for (let i = 0; i < 8; i++) {
    if (window.binaryBits[i] === 1) val += (1 << (7 - i));
  }
  window.setBinaryFromNumber(Math.max(0, val - 1));
};

window.resetBinary = function(val) {
  const glitch = document.getElementById("pacmanGlitchBanner");
  if (glitch) glitch.classList.remove("show");
  window.setBinaryFromNumber(val);
};

window.triggerPacmanOverflow = function() {
  // Simula overflow: era 255 e con +1 torna a 0
  window.binaryBits = [0, 0, 0, 0, 0, 0, 0, 0];
  window.renderBinaryConverter();

  const glitch = document.getElementById("pacmanGlitchBanner");
  if (glitch) {
    glitch.classList.add("show");
    glitch.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

// --- WIDGET 3.3A: SCHEDA PERFORATA INTERATTIVA (PUNCH CARD) ---
window.punchCardBits = [0, 1, 0, 0, 0, 0, 0, 1]; // Default 'A' = 65 (01000001)

window.renderPunchCard = function() {
  const strip = document.getElementById("punchHoleStrip");
  const bar = document.getElementById("punchReadoutBar");
  if (!strip) return;

  strip.innerHTML = "";
  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  let decVal = 0;

  for (let i = 0; i < 8; i++) {
    const isPunched = window.punchCardBits[i] === 1;
    if (isPunched) decVal += weights[i];

    const col = document.createElement("div");
    col.className = "punch-col";

    col.innerHTML = `
      <span style="font-size: 0.65rem; color: #854d0e; font-weight: bold;">C${8 - i}</span>
      <button type="button" class="punch-hole-btn ${isPunched ? 'punched' : ''}" onclick="togglePunchHole(${i})">
        ${isPunched ? '●' : '○'}
      </button>
      <span style="font-size: 0.65rem; color: #854d0e;">${weights[i]}</span>
    `;
    strip.appendChild(col);
  }

  if (bar) {
    const binStr = window.punchCardBits.join("");
    let charDisp = "-";
    if (decVal >= 32 && decVal <= 126) charDisp = `'${String.fromCharCode(decVal)}'`;
    else if (decVal === 0) charDisp = "[NUL (Cartoncino Vuoto)]";
    else charDisp = `[Non Stampabile / Codice ${decVal}]`;

    bar.innerHTML = `
      <div><strong>Sequenza Binaria:</strong> <code>${binStr}</code></div>
      <div><strong>Valore Decimale:</strong> <code>${decVal}</code></div>
      <div><strong>Carattere ASCII:</strong> <span style="color: var(--primary); font-weight: bold; font-size: 1.1rem;">${charDisp}</span></div>
    `;
  }
};

window.togglePunchHole = function(index) {
  window.punchCardBits[index] = window.punchCardBits[index] === 1 ? 0 : 1;
  window.renderPunchCard();
};

window.setPunchPreset = function(code) {
  code = Math.max(0, Math.min(255, code));
  for (let i = 0; i < 8; i++) {
    const bitWeight = 1 << (7 - i);
    window.punchCardBits[i] = (code & bitWeight) ? 1 : 0;
  }
  const input = document.getElementById("charPunchInput");
  if (input) {
    input.value = (code >= 32 && code <= 126) ? String.fromCharCode(code) : "";
  }
  window.renderPunchCard();
};

window.onCharPunchTyped = function(str) {
  if (!str || str.length === 0) return;
  const code = str.charCodeAt(0);
  window.setPunchPreset(code);
};

// --- WIDGET 3.3B: ISPETTORE UNICODE & UTF-8 ---
window.currentUtf8Char = "🚀";

window.inspectUtf8Char = function(char) {
  window.currentUtf8Char = char;
  window.renderUtf8Inspector();
};

window.renderUtf8Inspector = function() {
  const container = document.getElementById("utf8BytesContainer");
  const glyphElem = document.getElementById("utf8GlyphPreview");
  const nameElem = document.getElementById("utf8CharName");
  const cpElem = document.getElementById("utf8CodePoint");
  const countElem = document.getElementById("utf8ByteCount");

  if (!container || !window.currentUtf8Char) return;

  const char = window.currentUtf8Char;
  if (glyphElem) glyphElem.innerText = char;

  const codePoint = char.codePointAt(0);
  const codePointHex = "U+" + codePoint.toString(16).toUpperCase().padStart(4, "0");

  // Calcola i byte reali in UTF-8 usando TextEncoder
  const encoder = new TextEncoder();
  const bytes = encoder.encode(char);

  // Nomi amichevoli per le demo
  const namesDict = {
    "🚀": "Rocket (Razzo Spaziale)",
    "🍕": "Pizza Slice (Fetta di Pizza)",
    "🤖": "Robot Face (Faccia da Robot)",
    "🎉": "Party Popper (Festa)",
    "€": "Euro Currency Symbol (Simbolo Euro)",
    "è": "Lettera e con accento grave",
    "漢": "Kanji Giapponese / Cinese Han (Uomo/Cultura)",
    "A": "Lettera Latina Maiuscola A (Standard ASCII)"
  };

  if (nameElem) nameElem.innerText = namesDict[char] || `Simbolo '${char}'`;
  if (cpElem) cpElem.innerText = `Code Point Unicode: ${codePointHex} (Decimale: ${codePoint})`;
  if (countElem) countElem.innerText = `Dimensione in Memoria: ${bytes.length} Byte (${bytes.length * 8} bit in codifica UTF-8)`;

  container.innerHTML = "";
  bytes.forEach((b, idx) => {
    const hex = "0x" + b.toString(16).toUpperCase().padStart(2, "0");
    const bin = b.toString(2).padStart(8, "0");

    const block = document.createElement("div");
    block.className = "utf8-byte-block";
    block.innerHTML = `
      <div class="byte-tag">Byte ${idx + 1} di ${bytes.length}</div>
      <div class="byte-hex" style="color: var(--primary);">${hex}</div>
      <div class="byte-bin">${bin}</div>
    `;
    container.appendChild(block);
  });
};

// --- WIDGET 3.4: MICROSCOPIO SUBPIXEL RGB ---
window.rgbState = { r: 255, g: 215, b: 0 }; // Default Gold/Yellow

window.renderRgbMicroscope = function() {
  const swatch = document.getElementById("rgbColorSwatch");
  const redBar = document.getElementById("subpixelRedBar");
  const greenBar = document.getElementById("subpixelGreenBar");
  const blueBar = document.getElementById("subpixelBlueBar");
  const valR = document.getElementById("valRedDisplay");
  const valG = document.getElementById("valGreenDisplay");
  const valB = document.getElementById("valBlueDisplay");
  const sliderR = document.getElementById("sliderRed");
  const sliderG = document.getElementById("sliderGreen");
  const sliderB = document.getElementById("sliderBlue");

  if (!swatch) return;

  const { r, g, b } = window.rgbState;

  if (valR) valR.innerText = r;
  if (valG) valG.innerText = g;
  if (valB) valB.innerText = b;

  if (sliderR) sliderR.value = r;
  if (sliderG) sliderG.value = g;
  if (sliderB) sliderB.value = b;

  const hexR = r.toString(16).padStart(2, "0").toUpperCase();
  const hexG = g.toString(16).padStart(2, "0").toUpperCase();
  const hexB = b.toString(16).padStart(2, "0").toUpperCase();
  const hexCode = `#${hexR}${hexG}${hexB}`;

  swatch.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  swatch.innerText = `${hexCode} ➔ rgb(${r}, ${g}, ${b})`;

  // Regola la luminosità e opacità delle barrette subpixel simulate
  if (redBar) {
    const opacity = (r / 255).toFixed(2);
    redBar.style.opacity = Math.max(0.12, opacity);
    redBar.style.boxShadow = r > 20 ? `0 0 ${Math.round(r / 15)}px #ef4444` : 'none';
  }
  if (greenBar) {
    const opacity = (g / 255).toFixed(2);
    greenBar.style.opacity = Math.max(0.12, opacity);
    greenBar.style.boxShadow = g > 20 ? `0 0 ${Math.round(g / 15)}px #10b981` : 'none';
  }
  if (blueBar) {
    const opacity = (b / 255).toFixed(2);
    blueBar.style.opacity = Math.max(0.12, opacity);
    blueBar.style.boxShadow = b > 20 ? `0 0 ${Math.round(b / 15)}px #3b82f6` : 'none';
  }
};

window.onRgbSliderChange = function() {
  const sliderR = document.getElementById("sliderRed");
  const sliderG = document.getElementById("sliderGreen");
  const sliderB = document.getElementById("sliderBlue");

  if (sliderR) window.rgbState.r = parseInt(sliderR.value, 10);
  if (sliderG) window.rgbState.g = parseInt(sliderG.value, 10);
  if (sliderB) window.rgbState.b = parseInt(sliderB.value, 10);

  window.renderRgbMicroscope();
};

window.setRgbPreset = function(r, g, b) {
  window.rgbState = { r, g, b };
  window.renderRgbMicroscope();
};

// Inizializza i widget al caricamento del modulo
setTimeout(() => {
  if (typeof renderBinaryConverter === 'function') renderBinaryConverter();
  if (typeof renderPunchCard === 'function') renderPunchCard();
  if (typeof renderUtf8Inspector === 'function') renderUtf8Inspector();
  if (typeof renderRgbMicroscope === 'function') renderRgbMicroscope();
}, 200);
