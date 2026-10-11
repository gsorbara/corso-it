(window.courseData = window.courseData || []).push({
  id: 8,
  title: "8. Internet & World Wide Web: La Rete delle Reti",
  keyRequired: "CODE-LANG-808",
  nextKey: "NET-WEB-888",
  submodules: [
    {
      title: "8.1 Dalla Guerra Fredda alla Rete Globale (Packet Switching)",
      content: `
        <h2>8.1 Dalla Guerra Fredda alla Rete Globale: La Nascita di Internet</h2>

        <p>Negli anni '60, in piena Guerra Fredda, le superpotenze vivevano con l'incubo che un singolo attacco nucleare potesse distruggere i centri di comando centralizzati, lasciando il paese isolato e privo di comunicazioni.</p>

        <p>I ricercatori americani dell'agenzia militare DARPA, guidati da menti brillanti come <strong>Paul Baran</strong> e <strong>J.C.R. Licklider</strong>, proposero un'architettura radicalmente nuova: una rete di computer <strong>decentralizzata a maglia</strong>, priva di un centro nevralgico unico. Se una città o un nodo della rete fosse stato distrutto, i dati avrebbero semplicemente trovato una strada alternativa per raggiungere la destinazione!</p>

        <p>Il 29 ottobre 1969 nacque <strong>ARPANET</strong>: collegando quattro università (UCLA, Stanford, UC Santa Barbara e l'Università dello Utah), venne inviato il primo messaggio telematico della storia umana (tentarono di digitare <code>LOGIN</code>, ma il sistema crashò dopo le prime due lettere <code>LO</code>!).</p>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-08/arpanet-map-1977.png" alt="Mappa logica di ARPANET nel 1977" loading="lazy" style="object-fit: contain; background: #fff; max-height: 440px;">
          <div class="figure-caption">Mappa logica di ARPANET nel 1977: l'antenata diretta di Internet che collegava i primi mainframe e minicomputer universitari tramite linee telefoniche dedicate.</div>
        </div>

        <h3>La Grande Invenzione: Commutazione di Circuito vs di Pacchetto</h3>
        <p>Per comprendere perché Internet ha conquistato il pianeta, dobbiamo confrontare le due modalità con cui i dati possono viaggiare sui cavi:</p>
        <ul>
          <li><strong>La Commutazione di Circuito (La vecchia rete telefonica):</strong> Quando fai una chiamata tradizionale, una serie di centralini fisici riserva un filo di rame continuo ed esclusivo tra te e chi risponde. Nessun altro può usare quel cavo per tutta la durata della telefonata. Se un albero cade e spezza il filo a metà, la chiamata muore all'istante!;</li>
          <li><strong>La Commutazione di Pacchetto (Packet Switching - Il segreto di Internet):</strong> Un file, un'email o un video non vengono mai spediti come un flusso unico continuo. Vengono <strong>spezzettati in migliaia di microscopici pacchetti indipendenti</strong> (datagrammi). Ciascun pacchetto contiene un'etichetta con il mittente, il destinatario e il proprio numero di sequenza (es. "Pacchetto 3 di 100").</li>
        </ul>

        <div class="callout-box history">
          <div class="callout-title">📦 Perché i Pacchetti Sono Indistruttibili?</div>
          <p>Immagina di dover spedire un castello di Lego a un amico in un'altra città: invece di spedire il castello intero in un furgone gigante (che rimarrebbe bloccato nel primo ingorgo stradale), smonti il castello in 50 scatoline numerate e le affidi a postini diversi in bicicletta. Alcuni passano per l'autostrada, altri per vie secondarie. Anche se un postino fora una gomma, gli altri arrivano a destinazione e il tuo amico deve solo richiedere l'invio della scatolina mancante per ricostruire il castello perfetto!</p>
        </div>

        <!-- WIDGET 8.1: IL SIMULATORE DI PACKET SWITCHING -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">📦 Simulatore della Commutazione di Pacchetto (Packet Switching)</span>
            <span class="widget-badge">Widget 8.1</span>
          </div>
          <div class="widget-body">
            <p>Invia il messaggio <code>"INTERNET_ROCKS!"</code> da Roma a Tokyo attraverso una rete di router intermedi. Osserva come i pacchetti scelgono percorsi diversi e si ricompongono in ordine:</p>

            <div class="packet-workbench">
              <div class="packet-network-map">
                <!-- Nodo Roma (Mittente) -->
                <div class="net-node-box" id="nodeRome">
                  <div class="net-node-title">🇮🇹 ROMA (CLIENT)</div>
                  <div style="font-size: 0.72rem; color: #94a3b8;">IP: 193.204.114.1</div>
                  <div class="net-node-status" id="romeStatusBadge">Pronto all'invio</div>
                </div>

                <!-- Router Intermedi -->
                <div class="net-routers-col">
                  <div class="net-router-item" id="rtrFrankfurt">
                    <span>📡 Router Francoforte</span>
                    <span class="rtr-load" id="loadFrankfurt">Carico: 20%</span>
                  </div>
                  <div class="net-router-item" id="rtrLondon">
                    <span>📡 Router Londra</span>
                    <span class="rtr-load" id="loadLondon">Carico: 45%</span>
                  </div>
                  <div class="net-router-item" id="rtrDubai">
                    <span>📡 Router Dubai</span>
                    <span class="rtr-load" id="loadDubai">Carico: 15%</span>
                  </div>
                </div>

                <!-- Nodo Tokyo (Destinatario) -->
                <div class="net-node-box" id="nodeTokyo">
                  <div class="net-node-title">🇯🇵 TOKYO (SERVER)</div>
                  <div style="font-size: 0.72rem; color: #94a3b8;">IP: 133.11.0.1</div>
                  <div class="net-node-status" id="tokyoStatusBadge">In ascolto...</div>
                </div>
              </div>

              <!-- Buffer di Ricezione e Riordino -->
              <div class="packet-buffer-display">
                <div style="font-size: 0.75rem; font-weight: bold; color: #94a3b8; margin-bottom: 6px;">
                  BUFFER DI RIORDINO PACCHETTI RICEVUTI A DESTINAZIONE (TCP REASSEMBLY):
                </div>
                <div class="packet-slots-row" id="packetSlotsRow">
                  <!-- Rendered via JS -->
                </div>
              </div>

              <!-- Log Console Pacchetti -->
              <div id="packetTransitLog" style="font-family: monospace; font-size: 0.82rem; color: var(--text-muted); background: #020617; padding: 10px; border-radius: 6px; border: 1px solid #1e293b; min-height: 80px;">
                Premi 'Invia Pacchetti' per avviare lo spezzettamento del messaggio.
              </div>

              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
                <button class="btn-primary" onclick="startPacketTransmission()">Invia Pacchetti attraverso la Rete 🚀</button>
                <button class="btn-primary" style="background: #dc2626;" onclick="simulateRouterFailure()">Simula Guasto su Router Londra 💥</button>
                <button class="btn-primary" style="background: #475569;" onclick="resetPacketSimulator()">Resetta Rete ↺</button>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "8.2 Come Viaggiano i Dati: Indirizzi IP, Router e TCP/IP",
      content: `
        <h2>8.2 La Lingua Universale della Rete: La Suite TCP/IP</h2>

        <p>Nel 1974, due leggendari informatici di nome <strong>Vint Cerf</strong> e <strong>Bob Kahn</strong> inventarono il protocollo che avrebbe reso possibile la comunicazione universale tra computer di marche e sistemi operativi diversi: <a href="https://it.wikipedia.org/wiki/Suite_di_protocolli_Internet" target="_blank">TCP/IP</a>.</p>

        <h3>1. L'Indirizzo IP: La Targa Digitale nel Mondo</h3>
        <p>Ogni singola scheda di rete connessa a Internet possiede un <a href="https://it.wikipedia.org/wiki/Indirizzo_IP" target="_blank">Indirizzo IP</a> univoco che indica dove si trova nel mondo:</p>
        <ul>
          <li><strong>IPv4 (Storico a 32 bit):</strong> Composto da quattro numeri decimali da 0 a 255 separati da punti (es. <code>192.168.1.1</code> o <code>142.250.180.206</code> per Google). Offre circa <strong>4,3 miliardi di indirizzi possibili</strong>. Con l'esplosione di miliardi di smartphone, smartwatch e sensori nel mondo, gli indirizzi IPv4 sono terminati ufficialmente nel 2011!;</li>
          <li><strong>IPv6 (Il Nuovo Standard a 128 bit):</strong> Scritto in formato esadecimale (es. <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>). Mette a disposizione l'astronomica cifra di <strong>340 sestilioni di indirizzi</strong> ($3.4 \times 10^{38}$), sufficienti per assegnare un IP unico a ogni singolo atomo sulla superficie della Terra!</li>
        </ul>

        <h3>2. I Router: I Postini Intelligenti della Rete</h3>
        <p>Quando il tuo computer invia un pacchetto a un server dall'altra parte del mondo, non esiste un unico cavo diretto che li collega. Il pacchetto passa attraverso dozzine di <a href="https://it.wikipedia.org/wiki/Router" target="_blank">Router</a> intermedi. Ogni router legge l'indirizzo IP di destinazione nell'header del pacchetto, consulta la propria tabella di instradamento (Routing Table) e "calcia" il pacchetto verso il prossimo incrocio più veloce (operazione chiamata <em>Hop</em>).</p>

        <h3>3. Il Grande Dilemma: TCP vs UDP (Sicurezza o Velocità?)</h3>
        <p>Sopra lo strato IP risiedono i due principali protocolli di trasporto:</p>
        <ul>
          <li><strong>TCP (Transmission Control Protocol - Consegna Garantita):</strong> È una raccomandata postale con ricevuta di ritorno. Prima di spedire i dati, stabilisce una connessione sicura con un handshake a 3 passaggi (<em>"Pronto?" - "Sì, pronto!" - "Ricevuto!"</em>). Se un pacchetto si perde nel tragitto, TCP se ne accorge e ne richiede immediatamente il rinvio. È usato per pagine web, email, download e acquisti online;</li>
          <li><strong>UDP (User Datagram Protocol - Spedisci e Dimentica):</strong> Non controlla se il pacchetto arriva o se arriva nell'ordine giusto. È velocissimo e privo di attese: perfetto per <strong>videochiamate in streaming</strong> (Zoom, FaceTime) e <strong>videogiochi multiplayer online</strong> (Fortnite, Valorant). Se stai giocando online e un pacchetto con la posizione del tuo avversario di 5 millisecondi fa va perso, non ha senso fermare il gioco per richiederlo: conta solo la posizione attuale!</li>
        </ul>
      `
    },
    {
      title: "8.3 Il DNS: La Rubrica Telefonica del Pianeta",
      content: `
        <h2>8.3 Il DNS: Come il Tuo Browser Trova i Computer nel Mondo</h2>

        <p>I computer e i router amano i numeri: dialogano esclusivamente tramite indirizzi IP binari o decimali come <code>142.250.180.206</code>. Gli esseri umani, al contrario, sono bravissimi a ricordare parole con un significato (come <code>wikipedia.org</code> o <code>youtube.com</code>), ma odiano mandare a memoria sequenze di cifre casuali.</p>

        <p>Nel 1983, l'informatico <strong>Paul Mockapetris</strong> inventò il sistema che risolve questo problema: il <a href="https://it.wikipedia.org/wiki/Domain_Name_System" target="_blank">DNS (Domain Name System)</a>, la gigantesca <strong>rubrica telefonica decentralizzata di Internet</strong>.</p>

        <h3>Cosa Succede in 30 Millisecondi Quando Digiti un Sito Web?</h3>
        <p>Quando digiti <code>www.scuola.edu.it</code> nel browser e premi Invio, il computer attiva una catena gerarchica di richieste chiamata <strong>Risoluzione DNS Ricorsiva</strong>:</p>
        <ol>
          <li><strong>Cache Locale:</strong> Il computer controlla prima se si ricorda già quell'indirizzo nella memoria cache locale del browser o del sistema operativo;</li>
          <li><strong>Resolver DNS Locale (ISP o 8.8.8.8):</strong> Se non lo conosce, interroga il server DNS del tuo fornitore di rete;</li>
          <li><strong>Root Nameserver (I Guardiani della Radice):</strong> Il resolver interpella uno dei 13 server radice mondiali (denominati da <code>A.root-servers.net</code> a <code>M</code>), che risponde: <em>"Non so dove sia scuola, ma ti dico chi gestisce il suffisso .it!"</em>;</li>
          <li><strong>Server TLD (Top-Level Domain):</strong> Il server dei domini <code>.it</code> risponde: <em>"Ecco l'indirizzo del server ufficiale per edu.it!"</em>;</li>
          <li><strong>Server Autoritativo:</strong> Il server finale possiede la mappa definitiva e risponde con l'indirizzo IP numerico esatto (es. <code>193.204.114.22</code>);</li>
          <li>Il browser salva l'IP nella propria cache e stabilisce istantaneamente la connessione!</li>
        </ol>

        <!-- WIDGET 8.2: IL RISOLUTORE DNS A TAPPE -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🔍 Il Risolutore DNS a Tappe: Dall'URL all'Indirizzo IP</span>
            <span class="widget-badge">Widget 8.2</span>
          </div>
          <div class="widget-body">
            <p>Seleziona un dominio internet e segui passo dopo passo il viaggio della richiesta DNS attraverso la gerarchia mondiale:</p>

            <div class="dns-workbench">
              <div class="dns-input-row">
                <span style="font-weight: bold; font-size: 0.82rem;">Dominio da Cercare:</span>
                <select id="dnsDomainSelect" class="dns-select" onchange="resetDnsWorkbench()">
                  <option value="scuola.edu.it">www.scuola.edu.it 🇮🇹</option>
                  <option value="nasa.gov">www.nasa.gov 🚀</option>
                  <option value="wikipedia.org">www.wikipedia.org 📚</option>
                </select>
                <button class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem;" onclick="stepDnsLookup()">Avanza Passo DNS ⏩</button>
                <button class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem; background: #475569;" onclick="resetDnsWorkbench()">Resetta ↺</button>
              </div>

              <!-- Fasi Gerarchiche del DNS -->
              <div class="dns-stages-grid">
                <div class="dns-stage-box" id="dnsNodeClient">
                  <div class="dns-box-title">1. BROWSER UTENTE</div>
                  <div class="dns-box-detail" id="dnsDetailClient">Digita URL. Controllo cache locale...</div>
                </div>
                <div class="dns-stage-box" id="dnsNodeResolver">
                  <div class="dns-box-title">2. RESOLVER ISP (8.8.8.8)</div>
                  <div class="dns-box-detail" id="dnsDetailResolver">In attesa di richieste dal client...</div>
                </div>
                <div class="dns-stage-box" id="dnsNodeRoot">
                  <div class="dns-box-title">3. ROOT SERVER (.)</div>
                  <div class="dns-box-detail" id="dnsDetailRoot">Reindirizza verso il server TLD...</div>
                </div>
                <div class="dns-stage-box" id="dnsNodeTld">
                  <div class="dns-box-title">4. TLD SERVER (.it / .gov)</div>
                  <div class="dns-box-detail" id="dnsDetailTld">Reindirizza verso il server del dominio...</div>
                </div>
                <div class="dns-stage-box" id="dnsNodeAuthoritative">
                  <div class="dns-box-title">5. SERVER AUTORITATIVO</div>
                  <div class="dns-box-detail" id="dnsDetailAuth">Possiede la mappa IP finale!</div>
                </div>
              </div>

              <!-- Esito Risoluzione -->
              <div class="dns-result-banner" id="dnsResultBanner">
                🌐 Inizia la ricerca per scoprire a quale indirizzo IP numerico corrisponde il dominio.
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "8.4 Tim Berners-Lee e la Rivoluzione del Web (WWW != Internet!)",
      content: `
        <h2>8.4 Tim Berners-Lee e la Nascita del World Wide Web (WWW)</h2>

        <p>C'è un errore comunissimo che compiono milioni di persone: usare le parole <strong>Internet</strong> e <strong>Web</strong> come se fossero la stessa cosa.</p>

        <div class="callout-box warning">
          <div class="callout-title">⚠️ Internet vs Web: Una Differenza Vitale!</div>
          <ul>
            <li><strong>Internet è l'Infrastruttura:</strong> È la rete fisica globale fatta di cavi in fibra ottica posati sotto gli oceani, antenne radio 5G, satelliti in orbita e router. Esiste dal 1969;</li>
            <li><strong>Il Web (World Wide Web) è un'Applicazione:</strong> È la gigantesca ragnatela di pagine ipertestuali, immagini, video e negozi digitali che navighi attraverso il browser. È nato 20 anni dopo Internet, nel <strong>1989</strong>!</li>
          </ul>
          <p><em>Metafora perfetta:</em> Internet è la rete ferroviaria di binari e stazioni; il Web è uno dei tipi di treno che viaggia su quei binari (insieme ai treni delle email, dei giochi online e delle videochiamate!).</p>
        </div>

        <h3>L'Invenzione al CERN e il Computer NeXT (1989)</h3>
        <p>Nel 1989, un giovane scienziato britannico di nome <a href="https://it.wikipedia.org/wiki/Tim_Berners-Lee" target="_blank">Tim Berners-Lee</a> lavorava al <strong>CERN di Ginevra</strong> (il più grande laboratorio di fisica delle particelle del mondo). I ricercatori avevano difficoltà enormi a scambiarsi articoli scientifici e grafici perché ogni computer usava formati proprietari incompatibili.</p>
        <p>Berners-Lee progettò tre tecnologie fondamentali che cambiarono la civiltà umana per sempre:</p>
        <ol>
          <li><strong>URL (Uniform Resource Locator):</strong> L'indirizzo universale che identifica in modo univoco qualunque documento sul pianeta (es. <code>https://scuola.it/lezioni/storia.html</code>);</li>
          <li><strong>HTML (HyperText Markup Language):</strong> Il linguaggio per impaginare testi contenenti <em>Ipertesti</em>: parole cliccabili (link) che consentono di saltare istantaneamente da un documento a un altro;</li>
          <li><strong>HTTP (HyperText Transfer Protocol):</strong> Il protocollo di comunicazione con cui un client (il tuo browser) chiede un documento a un server web (tramite richieste come <code>GET /index.html</code>) e riceve una risposta (come <code>200 OK</code>).</li>
        </ol>

        <div class="figure-box">
          <img class="figure-img" src="images/modulo-08/first-web-server.jpg" alt="Il computer NeXTcube di Tim Berners-Lee al CERN" loading="lazy">
          <div class="figure-caption">Il computer NeXTcube di Tim Berners-Lee al CERN: il primo server web al mondo. Sulla destra è visibile l'etichetta adesiva originale: <em>"This machine is a server. DO NOT POWER DOWN!"</em>.</div>
        </div>

        <div class="callout-box history">
          <div class="callout-title">🎁 Il Regalo di Tim Berners-Lee al Mondo</div>
          <p>Se oggi il Web è libero, aperto e accessibile a chiunque, è merito di una scelta etica straordinaria. Nel 1993, Tim Berners-Lee convinse il CERN a <strong>rilasciare il codice sorgente del World Wide Web nel pubblico dominio per sempre</strong>, senza brevetti e senza pretendere un solo centesimo di royalty.<br>
          Se Berners-Lee avesse brevettato il Web come una tecnologia privata, oggi sarebbe forse l'uomo più ricco del pianeta, ma Internet sarebbe frammentata in giardini recintati a pagamento!</p>
        </div>

        <!-- WIDGET 8.3: IL DIALOGO HTTP CLIENT-SERVER -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🌐 Il Dialogo HTTP Client-Server: Anatomia di una Richiesta Web</span>
            <span class="widget-badge">Widget 8.3</span>
          </div>
          <div class="widget-body">
            <p>Osserva come il tuo browser comunica con il server web inviando richieste e interpretando i celebri codici di stato HTTP:</p>

            <div class="http-workbench">
              <div class="http-actions-bar">
                <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px;" onclick="simulateHttpRequest('get-home')">GET /index.html (Pagina Trovata ✅)</button>
                <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px; background: #dc2626;" onclick="simulateHttpRequest('get-404')">GET /segreto.html (File Non Trovato 404 🚫)</button>
                <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px; background: #d97706;" onclick="simulateHttpRequest('post-login')">POST /login (Invio Modulo Dati 📝)</button>
                <button class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px; background: #7c3aed;" onclick="simulateHttpRequest('get-500')">GET /crash.php (Errore Server 500 💥)</button>
              </div>

              <div class="http-dialogue-grid">
                <!-- Finestra Richiesta Client -->
                <div class="http-box">
                  <div class="http-box-header" style="color: #38bdf8;">1. RICHIESTA CLIENT (BROWSER)</div>
                  <pre class="http-code-area" id="httpRequestText">
GET /index.html HTTP/1.1
Host: www.scuola.edu.it
User-Agent: Mozilla/5.0 (Macintosh)
Accept: text/html
                  </pre>
                </div>

                <!-- Finestra Risposta Server -->
                <div class="http-box">
                  <div class="http-box-header" style="color: #10b981;">2. RISPOSTA SERVER (APACHE / NGINX)</div>
                  <pre class="http-code-area" id="httpResponseText">
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 412

&lt;!DOCTYPE html&gt;
&lt;h1&gt;Benvenuto a Scuola!&lt;/h1&gt;
&lt;p&gt;Il server ha risposto con successo.&lt;/p&gt;
                  </pre>
                </div>
              </div>

              <!-- Banner Significato Codice di Stato -->
              <div class="http-status-banner" id="httpStatusBanner">
                <span style="font-weight: bold; color: #10b981;">STATUS: 200 OK</span> — La risorsa richiesta esiste ed è stata trasferita con successo al browser.
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
        q: "Perché l'architettura di commutazione di pacchetto (Packet Switching) rende Internet robusta contro i guasti?",
        options: [
          { text: "Perché l'informazione viene divisa in pacchetti indipendenti che possono percorrere strade alternative e ricomporsi alla destinazione anche se un router lungo il percorso si guasta", correct: true },
          { text: "Perché impedisce alle persone di spegnere i computer portatili", correct: false },
          { text: "Perché converte tutti i cavi in fibra ottica in fili d'oro", correct: false }
        ]
      },
      {
        q: "Qual è la differenza fondamentale tra il protocollo TCP e il protocollo UDP?",
        options: [
          { text: "TCP garantisce la consegna corretta e ordinata di ogni pacchetto richiedendo il rinvio di quelli persi; UDP invia pacchetti senza verifiche privilegiando la massima velocità in tempo reale (streaming e gaming)", correct: true },
          { text: "TCP funziona solo di giorno, mentre UDP funziona solo di notte", correct: false },
          { text: "Non c'è alcuna differenza, sono due nomi per la stessa chiavetta USB", correct: false }
        ]
      },
      {
        q: "Qual è il compito primario del sistema DNS (Domain Name System)?",
        options: [
          { text: "Agire come una rubrica telefonica universale, traducendo i nomi di dominio facili da ricordare per gli umani (es. wikipedia.org) nei relativi indirizzi IP numerici compresi dai router", correct: true },
          { text: "Aumentare il volume della musica riprodotta dal browser", correct: false },
          { text: "Cancellare la cronologia delle ricerche ogni 10 minuti", correct: false }
        ]
      },
      {
        q: "Qual è la differenza tra Internet e il World Wide Web (WWW)?",
        options: [
          { text: "Internet è l'infrastruttura di rete globale fisica di cavi e router (1969); il Web è il sistema ipertestuale di documenti e siti navigabili tramite browser ideato da Tim Berners-Lee (1989)", correct: true },
          { text: "Internet è un'applicazione per smartphone, mentre il Web è un tipo di tastiera", correct: false },
          { text: "Sono due parole perfettamente sinonime nate nello stesso giorno", correct: false }
        ]
      }
    ]
  }
});

/* =========================================================
   LOGICA JAVASCRIPT DEI WIDGET DEL MODULO 8
   ========================================================= */

// --- WIDGET 8.1: PACKET SWITCHING WORKBENCH ---
window.packetState = {
  message: "INTERNET_ROCKS!",
  packets: [
    { id: 1, text: "INT", route: "Frankfurt", status: "WAITING", delay: 200 },
    { id: 2, text: "ERN", route: "London",    status: "WAITING", delay: 350 },
    { id: 3, text: "ET_", route: "Dubai",     status: "WAITING", delay: 180 },
    { id: 4, text: "ROC", route: "Frankfurt", status: "WAITING", delay: 280 },
    { id: 5, text: "KS!", route: "Dubai",     status: "WAITING", delay: 320 }
  ],
  londonBroken: false,
  isTransmitting: false
};

window.renderPacketSlots = function() {
  const row = document.getElementById("packetSlotsRow");
  if (!row) return;

  const ps = window.packetState;
  row.innerHTML = "";
  ps.packets.forEach(p => {
    const slot = document.createElement("div");
    slot.className = `packet-slot ${p.status === 'ARRIVED' ? 'arrived' : ''}`;
    slot.innerHTML = `
      <div style="font-size: 0.68rem; color: #94a3b8;">P#${p.id}</div>
      <div style="font-size: 0.85rem; font-weight: bold; color: ${p.status === 'ARRIVED' ? '#10b981' : '#64748b'};">
        ${p.status === 'ARRIVED' ? p.text : "___"}
      </div>
      <div style="font-size: 0.65rem; color: #f59e0b;">${p.route}</div>
    `;
    row.appendChild(slot);
  });
};

window.startPacketTransmission = function() {
  const ps = window.packetState;
  if (ps.isTransmitting) return;
  ps.isTransmitting = true;

  const log = document.getElementById("packetTransitLog");
  const romeStatus = document.getElementById("romeStatusBadge");
  const tokyoStatus = document.getElementById("tokyoStatusBadge");

  if (romeStatus) romeStatus.innerText = "Spezzettamento in 5 pacchetti...";
  if (log) log.innerHTML = `🚀 [T=0ms] Messaggio 'INTERNET_ROCKS!' diviso in 5 pacchetti TCP.<br>Spedizione parallela attraverso router intermedi...`;

  let arrivedCount = 0;
  ps.packets.forEach(p => {
    p.status = 'IN_TRANSIT';
    // Se Londra è rotta e il pacchetto era assegnato a Londra, rerouting via Dubai!
    let route = p.route;
    if (ps.londonBroken && route === 'London') {
      route = 'Dubai (Rerouted)';
      p.route = route;
    }

    setTimeout(() => {
      p.status = 'ARRIVED';
      arrivedCount++;
      window.renderPacketSlots();
      if (log) {
        log.innerHTML += `<br>📦 <strong>Pacchetto #${p.id} ('${p.text}')</strong> arrivato a Tokyo via ${route}!`;
      }
      if (arrivedCount === ps.packets.length) {
        ps.isTransmitting = false;
        if (tokyoStatus) tokyoStatus.innerText = "Messaggio Riassemblato: 100% OK!";
        if (log) log.innerHTML += `<br>✅ <strong>TCP REASSEMBLY COMPLETATO:</strong> Tutti i 5 pacchetti sono stati riordinati nella sequenza originaria: <em>'INTERNET_ROCKS!'</em>`;
      }
    }, p.delay * 3);
  });

  window.renderPacketSlots();
};

window.simulateRouterFailure = function() {
  const ps = window.packetState;
  ps.londonBroken = true;
  const rtr = document.getElementById("rtrLondon");
  const load = document.getElementById("loadLondon");
  const log = document.getElementById("packetTransitLog");
  if (rtr) rtr.style.borderColor = "#ef4444";
  if (load) {
    load.innerText = "GUASTO 100% 💥";
    load.style.color = "#ef4444";
  }
  if (log) log.innerHTML = `⚠️ <strong>AVVISO DI RETE:</strong> Router Londra irraggiungibile! Il protocollo di routing dinamico devia automaticamente il traffico verso Dubai e Francoforte.`;
};

window.resetPacketSimulator = function() {
  window.packetState = {
    message: "INTERNET_ROCKS!",
    packets: [
      { id: 1, text: "INT", route: "Frankfurt", status: "WAITING", delay: 200 },
      { id: 2, text: "ERN", route: "London",    status: "WAITING", delay: 350 },
      { id: 3, text: "ET_", route: "Dubai",     status: "WAITING", delay: 180 },
      { id: 4, text: "ROC", route: "Frankfurt", status: "WAITING", delay: 280 },
      { id: 5, text: "KS!", route: "Dubai",     status: "WAITING", delay: 320 }
    ],
    londonBroken: false,
    isTransmitting: false
  };
  const rtr = document.getElementById("rtrLondon");
  const load = document.getElementById("loadLondon");
  const log = document.getElementById("packetTransitLog");
  const romeStatus = document.getElementById("romeStatusBadge");
  const tokyoStatus = document.getElementById("tokyoStatusBadge");
  if (rtr) rtr.style.borderColor = "#334155";
  if (load) { load.innerText = "Carico: 45%"; load.style.color = "#94a3b8"; }
  if (romeStatus) romeStatus.innerText = "Pronto all'invio";
  if (tokyoStatus) tokyoStatus.innerText = "In ascolto...";
  if (log) log.innerText = "Simulatore reimpostato. Premi 'Invia Pacchetti'.";
  window.renderPacketSlots();
};

// --- WIDGET 8.2: DNS RESOLVER WORKBENCH ---
window.dnsState = {
  step: 0,
  db: {
    "scuola.edu.it": { ip: "193.204.114.22", tld: "it", auth: "ns1.cineca.it" },
    "nasa.gov": { ip: "198.118.214.15", tld: "gov", auth: "ns1.nasa.gov" },
    "wikipedia.org": { ip: "91.198.174.192", tld: "org", auth: "ns0.wikimedia.org" }
  }
};

window.stepDnsLookup = function() {
  const sel = document.getElementById("dnsDomainSelect");
  if (!sel) return;
  const dom = sel.value;
  const data = window.dnsState.db[dom] || window.dnsState.db["scuola.edu.it"];
  const banner = document.getElementById("dnsResultBanner");

  window.dnsState.step++;
  const s = window.dnsState.step;

  const nodeClient = document.getElementById("dnsNodeClient");
  const nodeResolver = document.getElementById("dnsNodeResolver");
  const nodeRoot = document.getElementById("dnsNodeRoot");
  const nodeTld = document.getElementById("dnsNodeTld");
  const nodeAuth = document.getElementById("dnsNodeAuthoritative");

  [nodeClient, nodeResolver, nodeRoot, nodeTld, nodeAuth].forEach(n => {
    if (n) n.classList.remove("active-step", "completed-step");
  });

  if (s === 1) {
    if (nodeClient) nodeClient.classList.add("active-step");
    if (banner) banner.innerHTML = `<strong>1. CLIENT CACHE MISS:</strong> Il browser controlla la memoria locale: l'IP di <code>${dom}</code> non è salvato in cache. Invia la richiesta al Resolver locale dell'operatore (8.8.8.8).`;
  } else if (s === 2) {
    if (nodeClient) nodeClient.classList.add("completed-step");
    if (nodeResolver) nodeResolver.classList.add("active-step");
    if (banner) banner.innerHTML = `<strong>2. RESOLVER ISP:</strong> Il resolver riceve la query ricorsiva. Non conoscendo l'indirizzo, interpella uno dei 13 Root Server mondiali (Root '.')`;
  } else if (s === 3) {
    if (nodeResolver) nodeResolver.classList.add("completed-step");
    if (nodeRoot) nodeRoot.classList.add("active-step");
    if (banner) banner.innerHTML = `<strong>3. ROOT SERVER (.):</strong> Il server radice risponde: <em>"Non so dove sia ${dom}, ma ecco i nameserver che gestiscono il dominio di primo livello <strong>.${data.tld}</strong>!"</em>`;
  } else if (s === 4) {
    if (nodeRoot) nodeRoot.classList.add("completed-step");
    if (nodeTld) nodeTld.classList.add("active-step");
    if (banner) banner.innerHTML = `<strong>4. TLD SERVER (.${data.tld}):</strong> Il server del registro TLD risponde: <em>"Ecco l'indirizzo del server autoritativo ufficiale (${data.auth})!"</em>`;
  } else if (s >= 5) {
    if (nodeTld) nodeTld.classList.add("completed-step");
    if (nodeAuth) nodeAuth.classList.add("completed-step");
    if (banner) banner.innerHTML = `🎉 <strong>RISOLUZIONE COMPLETATA CON SUCCESSO!</strong><br>Il server autoritativo restituisce il record A: <code>${dom} ➔ ${data.ip}</code>.<br>Il browser salva l'IP in cache e apre la connessione TCP sulla porta 443!`;
    window.dnsState.step = 5;
  }
};

window.resetDnsWorkbench = function() {
  window.dnsState.step = 0;
  const banner = document.getElementById("dnsResultBanner");
  const nodes = [
    document.getElementById("dnsNodeClient"),
    document.getElementById("dnsNodeResolver"),
    document.getElementById("dnsNodeRoot"),
    document.getElementById("dnsNodeTld"),
    document.getElementById("dnsNodeAuthoritative")
  ];
  nodes.forEach(n => {
    if (n) n.classList.remove("active-step", "completed-step");
  });
  if (banner) banner.innerHTML = `🌐 Inizia la ricerca per scoprire a quale indirizzo IP numerico corrisponde il dominio.`;
};

// --- WIDGET 8.3: HTTP CLIENT-SERVER DIALOGUE ---
window.simulateHttpRequest = function(type) {
  const reqText = document.getElementById("httpRequestText");
  const resText = document.getElementById("httpResponseText");
  const statusBanner = document.getElementById("httpStatusBanner");

  if (!reqText || !resText || !statusBanner) return;

  if (type === 'get-home') {
    reqText.innerText = `GET /index.html HTTP/1.1\nHost: www.scuola.edu.it\nUser-Agent: Chrome/120.0 (Macintosh)\nAccept: text/html,application/xhtml+xml`;
    resText.innerText = `HTTP/1.1 200 OK\nDate: Sun, 11 Oct 2026 12:00:00 GMT\nContent-Type: text/html; charset=UTF-8\nContent-Length: 412\n\n<!DOCTYPE html>\n<h1>Benvenuto a Scuola!</h1>\n<p>La pagina è stata caricata con successo.</p>`;
    statusBanner.innerHTML = `<span style="font-weight: bold; color: #10b981;">STATUS: 200 OK</span> — La richiesta è valida e il server ha consegnato il documento richiesto al browser.`;
  } else if (type === 'get-404') {
    reqText.innerText = `GET /segreto.html HTTP/1.1\nHost: www.scuola.edu.it\nUser-Agent: Chrome/120.0\nAccept: text/html`;
    resText.innerText = `HTTP/1.1 404 Not Found\nDate: Sun, 11 Oct 2026 12:00:01 GMT\nContent-Type: text/html\nContent-Length: 184\n\n<h1>404 Pagina Non Trovata</h1>\n<p>Il file richiesto non esiste su questo server.</p>`;
    statusBanner.innerHTML = `<span style="font-weight: bold; color: #ef4444;">STATUS: 404 NOT FOUND</span> — Il server è attivo e raggiungibile, ma il file specificato nel percorso dell'URL non esiste!`;
  } else if (type === 'post-login') {
    reqText.innerText = `POST /api/login HTTP/1.1\nHost: www.scuola.edu.it\nContent-Type: application/json\nContent-Length: 45\n\n{"username": "studente42", "token": "abc123xyz"}`;
    resText.innerText = `HTTP/1.1 201 Created\nDate: Sun, 11 Oct 2026 12:00:02 GMT\nContent-Type: application/json\n\n{"status": "success", "session_id": "sess_8899"}`;
    statusBanner.innerHTML = `<span style="font-weight: bold; color: #f59e0b;">STATUS: 201 CREATED (POST)</span> — Il client ha inviato nuovi dati con metodo POST e il server ha creato la sessione utente.`;
  } else if (type === 'get-500') {
    reqText.innerText = `GET /database-query.php HTTP/1.1\nHost: www.scuola.edu.it\nAccept: text/html`;
    resText.innerText = `HTTP/1.1 500 Internal Server Error\nDate: Sun, 11 Oct 2026 12:00:03 GMT\nContent-Type: text/html\n\n<h1>500 Errore Interno del Server</h1>\n<p>Connessione al database SQL fallita!</p>`;
    statusBanner.innerHTML = `<span style="font-weight: bold; color: #a855f7;">STATUS: 500 INTERNAL SERVER ERROR</span> — Il server web ha ricevuto la richiesta ma un programma backend o script PHP è crashato internamente!`;
  }
};

// Inizializza widget al caricamento
setTimeout(() => {
  if (typeof renderPacketSlots === 'function') renderPacketSlots();
}, 200);
