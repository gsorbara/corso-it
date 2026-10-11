(window.courseData = window.courseData || []).push({
  id: 9,
  title: "9. Sicurezza Informatica & Minacce Digitali: Virus, Malware & Difese",
  keyRequired: "NET-WEB-888",
  nextKey: "CYBER-SEC-999",
  submodules: [
    {
      title: "9.1 L'Ecosistema del Malware: La Tassonomia dei Nemici Digitali",
      content: `
        <h2>9.1 L'Ecosistema del Malware: Chi Minaccia i Nostri Computer?</h2>

        <p>Nel momento stesso in cui colleghiamo un calcolatore a una rete globale come Internet, la macchina smette di essere un'isola sicura ed entra in un ecosistema vivente, popolato da miliardi di utenti legittimi ma anche da minacce sofisticate.</p>

        <p>Il termine generico con cui gli esperti definiscono qualunque software creato per danneggiare, spiare o estorcere denaro si chiama <a href="https://it.wikipedia.org/wiki/Malware" target="_blank">Malware</a> (contrazione delle parole inglesi <em>Malicious Software</em>, "software malevolo").</p>

        <h3>La Tassonomia delle Minacce: Non Tutti Sono "Virus"!</h3>
        <p>Spesso nel linguaggio comune si chiama "virus" qualunque cosa faccia funzionare male un computer. In realtà, la sicurezza informatica distingue categorie profondamente diverse:</p>
        <ol>
          <li><strong>Virus:</strong> Come un virus biologico, ha bisogno di un "ospite" per vivere. È un frammento di codice maligno che si attacca all'interno di un file legittimo (un programma <code>.exe</code> o un documento con macro). Per attivarsi richiede l'azione dell'utente (ad esempio fare doppio clic sul file infetto o inserire una chiavetta USB compromessa);</li>
          <li><strong>Worm (Verme di Rete):</strong> È un programma autonomo e autosufficiente! Non ha bisogno di file ospiti né dell'azione dell'utente: scandaglia continuamente la rete alla ricerca di porte aperte e vulnerabilità nei sistemi operativi, <strong>auto-replicandosi da solo da un computer all'altro a velocità impressionante</strong>;</li>
          <li><strong>Trojan Horse (Cavallo di Troia):</strong> Ispirato al celebre mito dell'Odissea, si maschera da programma innocuo, gioco gratuito o utility utile. Quando l'utente lo installa, in silenzio apre una <strong>Backdoor (porta sul retro)</strong> che concede il controllo remoto totale del computer ai criminali;</li>
          <li><strong>Spyware & Keylogger:</strong> Spie invisibili che non distruggono file, ma registrano silenziosamente tutto ciò che fai: catturano ogni singolo tasto digitato sulla tastiera (rubando credenziali di accesso, password e numeri di carta di credito) o attivano di nascosto webcam e microfono;</li>
          <li><strong>Ransomware (Il Ricatto Digitale):</strong> È la minaccia più devastante degli ultimi anni (come il famigerato <em>WannaCry</em> del 2017). Si introduce nel sistema, individua tutti i documenti personali, foto e database e li <strong>crittografa istantaneamente con chiavi matematiche militari indistruttibili</strong>. Poi cancella le copie di backup e mostra una schermata minatoria con un conto alla rovescia, chiedendo un riscatto in criptovalute (Bitcoin) per consegnare la chiave di decifrazione!</li>
        </ol>

        <div class="callout-box history">
          <div class="callout-title">🐛 Il Morris Worm: Il Primo Incidente Globale di Internet (1988)</div>
          <p>Il 2 novembre 1988, uno studente universitario della Cornell University di nome <a href="https://it.wikipedia.org/wiki/Robert_Tappan_Morris" target="_blank">Robert Tappan Morris</a> rilasciò sulla rete ARPANET un piccolo programma sperimentale per misurare le dimensioni di Internet.<br>
          A causa di un errore nel codice, il worm si replicava molte più volte del previsto sullo stesso computer: in meno di 24 ore <strong>infettò e mandò in blocco circa il 10% di tutti i computer connessi a Internet nel mondo</strong> (circa 6.000 macchine universitarie e militari!). Fu il primo campanello d'allarme planetario che rese la sicurezza informatica una priorità mondiale.</p>
        </div>

        <!-- WIDGET 9.1: IL LABORATORIO DEL MALWARE -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🧪 Il Laboratorio del Malware: Identifica e Neutralizza la Minaccia</span>
            <span class="widget-badge">Widget 9.1</span>
          </div>
          <div class="widget-body">
            <p>Esamina 5 campioni isolati di minacce informatiche in quarantena. Clicca su ciascun tipo per scoprirne il vettore di attacco e la specifica contromisura di difesa:</p>

            <div class="malware-workbench">
              <!-- Selettore Campioni Malware -->
              <div class="malware-chips-grid">
                <button class="malware-chip active" id="mChipVirus" onclick="selectMalwareSample('virus')">🦠 1. Virus Parassita</button>
                <button class="malware-chip" id="mChipWorm" onclick="selectMalwareSample('worm')">🐛 2. Worm di Rete</button>
                <button class="malware-chip" id="mChipTrojan" onclick="selectMalwareSample('trojan')">🐴 3. Trojan Horse</button>
                <button class="malware-chip" id="mChipSpy" onclick="selectMalwareSample('spyware')">👁️ 4. Spyware / Keylogger</button>
                <button class="malware-chip" id="mChipRansom" onclick="selectMalwareSample('ransomware')">🔒 5. Ransomware Ricatto</button>
              </div>

              <!-- Scheda Anatomia del Campione -->
              <div class="malware-specimen-card">
                <div class="malware-card-header">
                  <div>
                    <span style="font-size: 0.72rem; color: #94a3b8; text-transform: uppercase;">CAMPIONE IN ISOLAMENTO:</span>
                    <h3 id="malwareTitle" style="margin: 2px 0; color: #ef4444; font-size: 1.25rem;">🦠 Virus Informatico Tradizionale</h3>
                  </div>
                  <span class="malware-danger-badge" id="malwareDangerBadge">PERICOLO: ALTO</span>
                </div>

                <div class="malware-detail-grid">
                  <div class="malware-detail-box">
                    <span class="m-box-label">Vettore di Infezione:</span>
                    <p id="malwareVector" style="font-size: 0.82rem; margin: 4px 0;">Allegato a file eseguibili legittimi o documenti con macro. Richiede l'apertura manuale da parte dell'utente.</p>
                  </div>
                  <div class="malware-detail-box">
                    <span class="m-box-label">Sintomo Tipico nel Sistema:</span>
                    <p id="malwareSymptom" style="font-size: 0.82rem; margin: 4px 0;">Rallentamento anomalo, file corrotti o scomparsi, comparsa di messaggi di errore bizzarri.</p>
                  </div>
                </div>

                <!-- Contromisura Consigliata -->
                <div class="malware-defense-box">
                  <span style="font-size: 0.75rem; font-weight: bold; color: #10b981;">🛡️ CONTROMISURA E DIFESA EFFICACE:</span>
                  <p id="malwareDefense" style="font-size: 0.84rem; margin: 4px 0 0; color: #86efac;">
                    Antivirus con firme hash aggiornate quotidianamente, scansione preventiva dei download e blocco dell'esecuzione automatica di macro non certificate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "9.2 L'Anello Debole: Social Engineering, Phishing e l'Errore Umano",
      content: `
        <h2>9.2 L'Anello Debole della Catena: L'Ingegneria Sociale e il Phishing</h2>

        <p>Puoi installare il firewall più costoso del pianeta e cifrare ogni cartella con password chilometriche: la sicurezza informatica crollerà comunque in un secondo se una persona autorizzata <strong>consegna spontaneamente la propria password a un truffatore</strong>.</p>

        <p>Il più celebre hacker degli anni '80 e '90, <strong>Kevin Mitnick</strong> (che dopo la condanna divenne uno dei massimi consulenti mondiali di sicurezza), coniò la celebre frase: <em>"L'anello più debole della sicurezza non è il computer, è l'essere umano!"</em>.</p>

        <h3>L'Ingegneria Sociale (Social Engineering)</h3>
        <p>L'<a href="https://it.wikipedia.org/wiki/Ingegneria_sociale" target="_blank">Ingegneria Sociale</a> è l'arte psicologica dell'inganno: invece di cercare falle matematiche nel software, i criminali manipolano le emozioni umane (la paura, la curiosità, il senso di urgenza o l'avidità) per spingere la vittima a compiere un'azione dannosa.</p>

        <h3>Il Phishing: L'Esca nella Tua Casella di Posta</h3>
        <p>La forma più diffusa al mondo di ingegneria sociale è il <a href="https://it.wikipedia.org/wiki/Phishing" target="_blank">Phishing</a> (da <em>fishing</em>, "pescare" vittime con esche digitali):</p>
        <ul>
          <li><strong>Le False Notifiche di Emergenza:</strong> <em>"Il tuo account verrà chiuso entro 2 ore se non confermi la password!"</em> (sfrutta il panico);</li>
          <li><strong>Le False Vincite:</strong> <em>"Congratulazioni, hai vinto un iPhone! Clicca qui per ritirarlo"</em> (sfrutta l'avidità);</li>
          <li><strong>Il Falso Mittente (Spoofing & Typosquatting):</strong> L'email sembra provenire da <code>servizio@bancaposte.it</code>, ma in realtà il dominio reale nascosto è <code>bancap0ste-sicurezza.ru</code>.</li>
        </ul>

        <!-- WIDGET 9.2: IL DETECTIVE ANTI-PHISHING -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🕵️ Il Detective Anti-Phishing: Riconosci la Trappola nell'Email</span>
            <span class="widget-badge">Widget 9.2</span>
          </div>
          <div class="widget-body">
            <p>Esamina 3 email arrivate nella casella di posta della scuola. Usa gli indizi per decidere se il messaggio è sicuro o se si tratta di un tentativo di truffa:</p>

            <div class="phishing-workbench">
              <!-- Selettore Email Campione -->
              <div class="phishing-tabs">
                <button class="phish-tab-btn active" id="pTabEmail1" onclick="selectPhishingEmail(1)">✉️ Email #1: Avviso Account</button>
                <button class="phish-tab-btn" id="pTabEmail2" onclick="selectPhishingEmail(2)">✉️ Email #2: Ricevuta Digitale</button>
                <button class="phish-tab-btn" id="pTabEmail3" onclick="selectPhishingEmail(3)">✉️ Email #3: Circolare Scolastica</button>
              </div>

              <!-- Visualizzatore Email Simulata -->
              <div class="phishing-mail-card" id="phishMailCard">
                <div class="mail-header-row">
                  <div>
                    <div><strong>Da:</strong> <span id="phishMailSender" style="font-family: monospace; color: #ef4444;">support@paypaI-security.com</span></div>
                    <div><strong>Oggetto:</strong> <span id="phishMailSubject" style="font-weight: bold;">URGENTE: Conto Sospeso per Attività Sospetta!</span></div>
                  </div>
                  <div style="font-size: 0.72rem; color: #94a3b8;">Oggi, 12:45</div>
                </div>

                <div class="mail-body-content" id="phishMailBody">
                  Gentile utente, abbiamo rilevato un accesso non autorizzato sul tuo conto. Se non confermi le tue credenziali e il tuo numero di carta entro 60 minuti, il tuo account sarà revocato per sempre.<br><br>
                  <a href="#" class="fake-link" id="phishFakeLink" onclick="return false;">👉 Clicca qui per confermare l'identità: https://www.paypal.it/verifica-sicura</a>
                </div>
              </div>

              <!-- Pulsanti di Valutazione dell'Utente -->
              <div class="phish-action-row">
                <button class="btn-primary" style="background: #059669;" onclick="evaluatePhishingChoice(false)">Email Sicura e Legittima ✅</button>
                <button class="btn-primary" style="background: #dc2626;" onclick="evaluatePhishingChoice(true)">Attacco di Phishing! 🚨</button>
              </div>

              <!-- Esito del Detective -->
              <div class="phish-feedback-banner" id="phishFeedbackBanner" style="display: none;">
                <!-- Populated via JS -->
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "9.3 Le Porte Blindate del Computer: Firewall, Antivirus e Zero-Day",
      content: `
        <h2>9.3 Le Porte Blindate del Computer: Come Lavorano le Nostre Difese?</h2>

        <p>Un sistema operativo moderno non si fida ciecamente dei dati che arrivano dal mondo esterno: possiede un vero e proprio esercito di sentinelle hardware e software che controllano continuamente la memoria e i cavi di rete.</p>

        <h3>1. Il Firewall: Il Doganiere della Rete</h3>
        <p>Ogni computer collegato a Internet ha a disposizione oltre <strong>65.535 porte logiche di comunicazione</strong> (ad esempio la porta 80 per HTTP, la 443 per HTTPS, la 22 per SSH). Se lasci una porta aperta senza protezione, un malintenzionato può tentare di inviare comandi alla tua macchina!</p>
        <p>Il <a href="https://it.wikipedia.org/wiki/Firewall" target="_blank">Firewall</a> (paratia parafuoco) agisce come un severo doganiere di frontiera: controlla ogni singolo pacchetto in ingresso e in uscita e <strong>blocca categoricamente qualunque connessione non richiesta espressamente dall'utente</strong>.</p>

        <h3>2. L'Antivirus: Firme Digitali vs Intelligenza Euristica</h3>
        <p>Come fa un software antivirus a riconoscere un file pericoloso prima che faccia danni?</p>
        <ul>
          <li><strong>Database di Firme (Hash Signature):</strong> Ogni file malevolo noto ha una propria "impronta digitale matematica" (un codice hash SHA-256 univoco). L'antivirus calcola l'impronta di ogni file scaricato e la confronta con un archivio globale di milioni di virus catalogati;</li>
          <li><strong>Analisi Euristica e Comportamentale:</strong> Cosa succede se un criminale crea un virus nuovo di zecca 5 minuti fa, che non è ancora in nessun database? L'antivirus osserva il <strong>comportamento del programma a runtime</strong>: se vede un programma che tenta di modificare le impostazioni del bootloader, catturare screenshot di nascosto o cifrare 100 file in tre secondi, l'antivirus lo congela istantaneamente in quarantena!</li>
        </ul>

        <h3>3. Le Vulnerabilità "Zero-Day" e l'Importanza degli Aggiornamenti</h3>
        <p>Nessun software umano composto da milioni di righe di codice è perfetto: a volte gli sviluppatori lasciano per distrazione una falla di memoria (come un buffer overflow).</p>
        <p>Una falla sconosciuta sia al pubblico sia ai creatori del programma si chiama <a href="https://it.wikipedia.org/wiki/Zero-day" target="_blank">Zero-Day (Giorno Zero)</a>: gli ingegneri hanno avuto esattamente "zero giorni" per ripararla prima che venisse scoperta dai criminali.</p>
        <p>Ecco perché <strong>installare subito gli aggiornamenti di sicurezza</strong> del sistema operativo e dello smartphone è l'azione di difesa più importante di tutte: gli aggiornamenti riparano le falle prima che qualcuno possa usarle contro di te!</p>
      `
    },
    {
      title: "9.4 La Crittografia e l'Hacking Etico: La Scienza della Difesa",
      content: `
        <h2>9.4 La Crittografia e l'Hacking Etico: La Scienza della Difesa</h2>

        <p>Quando invii un messaggio privato su WhatsApp, fai un acquisto con carta di credito o accedi al tuo account di gioco, i tuoi dati viaggiano su decine di router pubblici in giro per il mondo. Come facciamo a essere sicuri che nessuno lungo il percorso possa leggere i nostri segreti?</p>

        <h3>La Magia della Crittografia Asimmetrica (A Chiave Pubblica e Privata)</h3>
        <p>La <a href="https://it.wikipedia.org/wiki/Crittografia_asimmetrica" target="_blank">Crittografia Asimmetrica</a> è una delle più straordinarie conquiste della matematica moderna (inventata da Rivest, Shamir e Adleman con l'algoritmo RSA):</p>
        <ul>
          <li>A differenza di una normale cassaforte con una sola chiave, qui ogni utente possiede <strong>due chiavi matematiche gemelle</strong>:</li>
          <li><strong>1. La Chiave Pubblica (Il Lucchetto Aperto):</strong> La puoi distribuire liberamente a tutti nel mondo, pubblicandola sul tuo sito web o sul tuo profilo. Chiunque voglia scriverti usa questo lucchetto per sigillare il messaggio;</li>
          <li><strong>2. La Chiave Privata (La Chiave Segreta):</strong> La tieni custodita gelosamente sul tuo computer e non la mostri mai a nessuno. Solo questa chiave privata ha il potere matematico di aprire i messaggi sigillati con il tuo lucchetto pubblico!;</li>
          <li>Anche se un pirata informatico intercetta il messaggio cifrato mentre viaggia sul cavo, vedrà solo una sequenza indecifrabile di rumore matematico. Questa tecnologia è il cuore del protocollo <strong>HTTPS</strong> (il lucchetto verde nella barra del browser)!</li>
        </ul>

        <!-- WIDGET 9.3: LA CASSAFORTE CRITTOGRAFICA -->
        <div class="widget-box">
          <div class="widget-header">
            <span class="widget-title">🔐 La Cassaforte Crittografica: Alice, Bob e la Spia sulla Rete</span>
            <span class="widget-badge">Widget 9.3</span>
          </div>
          <div class="widget-body">
            <p>Simula l'invio di un messaggio segreto tra Alice e Bob. Guarda cosa riesce a vedere la spia (Eve) in ascolto sulla rete rispetto a ciò che legge Bob con la sua chiave privata:</p>

            <div class="crypto-workbench">
              <div class="crypto-actors-grid">
                <!-- Alice (Mittente) -->
                <div class="crypto-actor-card">
                  <div class="crypto-actor-title" style="color: #38bdf8;">👩‍💻 ALICE (MITTENTE)</div>
                  <div style="font-size: 0.75rem; color: #94a3b8; margin: 4px 0;">Messaggio da spedire:</div>
                  <input type="text" id="cryptoPlainInput" class="crypto-input" value="La password del club è: STELLA_2026">
                  <button class="btn-primary" style="margin-top: 8px; width: 100%; font-size: 0.8rem; padding: 6px;" onclick="encryptAndSendCryptoMessage()">Cifra con Lucchetto di Bob 🔒</button>
                </div>

                <!-- La Spia sulla Rete -->
                <div class="crypto-actor-card" style="border-color: #ef4444; background: rgba(239, 68, 68, 0.05);">
                  <div class="crypto-actor-title" style="color: #ef4444;">🕵️ EVE (SPIA INTERMEDIA SUL ROUTER)</div>
                  <div style="font-size: 0.75rem; color: #94a3b8; margin: 4px 0;">Cosa vede intercettando i pacchetti:</div>
                  <div class="crypto-cipher-view" id="cryptoInterceptView">[In attesa di transito...]</div>
                  <div style="font-size: 0.72rem; color: #ef4444; margin-top: 4px;">Impossibile decifrare senza la chiave privata!</div>
                </div>

                <!-- Bob (Destinatario) -->
                <div class="crypto-actor-card">
                  <div class="crypto-actor-title" style="color: #10b981;">👨‍💻 BOB (DESTINATARIO)</div>
                  <div style="font-size: 0.75rem; color: #94a3b8; margin: 4px 0;">Messaggio decifrato con Chiave Privata 🗝️:</div>
                  <div class="crypto-decrypted-view" id="cryptoDecryptedView">[Nessun messaggio ricevuto]</div>
                  <div style="font-size: 0.72rem; color: #10b981; margin-top: 4px;">Decifrazione corretta al 100% ✅</div>
                </div>
              </div>

              <div id="cryptoExplanationLog" style="font-size: 0.82rem; font-family: monospace; color: var(--text-muted); margin-top: 10px; background: #020617; padding: 10px; border-radius: 6px; border: 1px solid #1e293b;">
                Premi 'Cifra con Lucchetto di Bob' per simulare l'handshake e la cifratura asimmetrica.
              </div>
            </div>
          </div>
        </div>

        <h3>Hacker vs Cracker: Chi Sono i Veri Difensori?</h3>
        <p>Nel gergo giornalistico e nei film si usa spesso la parola "Hacker" per indicare i criminali informatici. Nella cultura informatica originale, tuttavia, esiste una distinzione netta e nobile:</p>
        <ul>
          <li><strong>White Hat (Hacker Etici):</strong> Esperti di sicurezza che mettono la propria intelligenza al servizio della società. Vengono assunti da banche, governi e ospedali per simulare attacchi legali (<em>Penetration Testing</em>) e individuare le falle prima che i criminali possano sfruttarle;</li>
          <li><strong>Black Hat (Cracker):</strong> Criminali che violano i sistemi informatici con scopi distruttivi, furto di dati o estorsione economica.</li>
        </ul>
      `
    }
  ],
  quiz: {
    questions: [
      {
        q: "Qual è la distinzione fondamentale nel meccanismo di propagazione ed esecuzione tra Virus, Worm e Trojan Horse?",
        options: [
          { text: "Il Virus è codice parassita che infetta un file ospite ed esige l'azione dell'utente per avviarsi; il Worm è un'entità autonoma che si replica sfruttando vulnerabilità di rete senza intervento umano; il Trojan è un malware mascherato da software apparentemente legittimo o utile", correct: true },
          { text: "Il Worm attacca unicamente i registri interni della CPU, mentre il Trojan e il Virus risiedono esclusivamente nel firmware della tastiera", correct: false },
          { text: "I Virus operano solo attraverso la riga di comando Linux, mentre Worm e Trojan sono file grafici interpretati dal display del monitor", correct: false },
          { text: "Il Trojan richiede un cavo di rete disconnesso per propagarsi, mentre il Worm è un algoritmo di compressione privo di payload malevolo", correct: false }
        ]
      },
      {
        q: "Quale sequenza operativa caratterizza formalmente il funzionamento dei moderni Ransomware a doppia estorsione?",
        options: [
          { text: "Infiltrazione silente, esfiltrazione dei dati sensibili sui server dell'attaccante, eliminazione delle copie di backup (Volume Shadow Copies) e cifratura simmetrica ad alta velocità (AES) dei file con chiave protetta asimmetricamente (RSA) e richiesta di riscatto", correct: true },
          { text: "Riformattazione a basso livello del settore MBR del disco per convertire la partizione NTFS in formato ext4 incompatibile", correct: false },
          { text: "Sovraccarico dei condensatori della scheda madre tramite loop infinito dell'ALU che forza la fusione termica del processore", correct: false },
          { text: "Sostituzione istantanea di tutti i caratteri delle credenziali memorizzate nel browser con caratteri speciali non digitabili", correct: false }
        ]
      },
      {
        q: "Perché il protocollo HTTPS / TLS adotta un'architettura crittografica ibrida sia con crittografia asimmetrica sia simmetrica?",
        options: [
          { text: "La crittografia asimmetrica viene impiegata nell'handshake per autenticare il server (tramite certificato CA) e negoziare in sicurezza una chiave di sessione effimera; la crittografia simmetrica (molto più efficiente computazionalmente) cifra poi l'effettivo flusso continuo di dati", correct: true },
          { text: "La crittografia asimmetrica cifra solo gli elementi grafici del sito, mentre quella simmetrica elabora unicamente i tag HTML", correct: false },
          { text: "La crittografia simmetrica funziona solo se client e server condividono lo stesso interruttore di alimentazione elettrica", correct: false },
          { text: "L'uso congiunto è necessario perché le chiavi asimmetriche possono essere lette in chiaro da qualsiasi router di transito senza decodifica", correct: false }
        ]
      },
      {
        q: "Su quali tre pilastri logici e distinti si fonda l'architettura di Autenticazione Multifattore (MFA / 2FA)?",
        options: [
          { text: "Qualcosa che sai (conoscenza: es. password o PIN), qualcosa che hai (possesso: es. token hardware, smartphone con app TOTP) e qualcosa che sei (inerenza: es. impronta digitale, FaceID o scansione dell'iride)", correct: true },
          { text: "Indirizzo IP pubblico della rete locale, modello della scheda video installata e velocità in megabit della connessione in fibra", correct: false },
          { text: "Sistema operativo installato, numero di finestre aperte sulla scrivania e data di registrazione della licenza commerciale del software", correct: false },
          { text: "Nome del fornitore di connettività Internet, frequenza di scansione del display in Hertz e tipologia di mouse USB collegato", correct: false }
        ]
      },
      {
        q: "Perché gli attacchi di Ingegneria Sociale e Spear Phishing registrano la più alta percentuale di compromissione anche contro infrastrutture con difese avanzate?",
        options: [
          { text: "Sfruttano vulnerabilità psicologiche ed euristiche umane (senso di urgenza, deferenza verso l'autorità, timore o avidità) per indurre la persona ad aggirare spontaneamente le policy di sicurezza o cedere le credenziali, bypassando i controlli crittografici", correct: true },
          { text: "Inviano pacchetti di rete speciali capaci di invertire la polarità elettrica dei firewall hardware disattivandone i filtri a monte", correct: false },
          { text: "Riscrivono il microcodice della CPU della vittima sfruttando onde radio riflesse dall'antenna del router Wi-Fi", correct: false },
          { text: "Decodificano gli hash crittografici SHA-256 in tempo reale tramite chip quantistici integrati nei normali browser web", correct: false }
        ]
      }
    ]
  }
});

/* =========================================================
   LOGICA JAVASCRIPT DEI WIDGET DEL MODULO 9
   ========================================================= */

// --- WIDGET 9.1: MALWARE WORKBENCH ---
window.malwareState = {
  currentSample: "virus",
  db: {
    virus: {
      title: "🦠 Virus Informatico Tradizionale",
      danger: "PERICOLO: ALTO",
      vector: "Allegato a file eseguibili (.exe) o documenti con macro. Richiede l'avvio manuale da parte dell'utente per infettare altri file dell'hard disk.",
      symptom: "Rallentamento anomalo, file corrotti o scomparsi, comparsa di messaggi di errore bizzarri.",
      defense: "Antivirus con database di firme hash (SHA-256) costantemente aggiornato e blocco delle macro non firmate."
    },
    worm: {
      title: "🐛 Worm (Verme di Rete Autonomo)",
      danger: "PERICOLO: CRITICO (PROPAGAZIONE ISTANTANEA)",
      vector: "Scansione autonoma della rete locale e di Internet alla ricerca di porte aperte e vulnerabilità del sistema operativo. Zero azione umana richiesta!",
      symptom: "Saturazione totale della banda internet, blocco dei router, crash simultaneo di decine di computer nella stessa rete.",
      defense: "Firewall attivo che chiude le porte non necessarie e installazione immediata delle patch di sicurezza del sistema operativo."
    },
    trojan: {
      title: "🐴 Trojan Horse (Cavallo di Troia)",
      danger: "PERICOLO: ALTO (CONTROLLO REMOTO)",
      vector: "Mimetizzato all'interno di crack per videogiochi, programmi gratuiti scaricati da siti dubbi o finti aggiornamenti di Flash/browser.",
      symptom: "Apertura silenziosa di una Backdoor: il computer diventa uno 'zombie' controllato a distanza dai criminali per attacchi DDoS.",
      defense: "Scaricare software solo da store ufficiali e verificare sempre le firme digitali e i certificati dello sviluppatore."
    },
    spyware: {
      title: "👁️ Spyware & Keylogger Silenzioso",
      danger: "PERICOLO: SEVERO (FURTO PRIVACY)",
      vector: "Installato tramite estensioni fraudolente del browser o bundle di programmi gratuiti senza consenso.",
      symptom: "Nessun rallentamento visibile: intercettazione invisibile delle password digitate, screenshot dello schermo e accesso a webcam.",
      defense: "Autenticazione a due fattori (2FA con app su smartphone) e software anti-spyware con analisi comportamentale."
    },
    ransomware: {
      title: "🔒 Ransomware (Estorsione Crittografica)",
      danger: "PERICOLO: MASSIMO / DEVASTANTE",
      vector: "Email di phishing con finta fattura o chiavetta USB infetta. In pochi secondi cifra tutti i file personali con algoritmo AES-256.",
      symptom: "Schermata nera con timer e richiesta di riscatto in Bitcoin. File rinominati con estensione bloccata (es. .locked).",
      defense: "Backup dei dati regolari su dischi esterni scollegati (offline 3-2-1) e mai pagare il riscatto (finanzia il crimine senza garanzia di recupero!)."
    }
  }
};

window.selectMalwareSample = function(sampleKey) {
  window.malwareState.currentSample = sampleKey;
  const data = window.malwareState.db[sampleKey];
  if (!data) return;

  ['virus', 'worm', 'trojan', 'spyware', 'ransomware'].forEach(k => {
    const btn = document.getElementById(`mChip${k.charAt(0).toUpperCase() + k.slice(1)}`);
    if (btn) btn.classList.toggle("active", k === sampleKey);
  });

  const title = document.getElementById("malwareTitle");
  const badge = document.getElementById("malwareDangerBadge");
  const vector = document.getElementById("malwareVector");
  const symptom = document.getElementById("malwareSymptom");
  const defense = document.getElementById("malwareDefense");

  if (title) title.innerText = data.title;
  if (badge) badge.innerText = data.danger;
  if (vector) vector.innerText = data.vector;
  if (symptom) symptom.innerText = data.symptom;
  if (defense) defense.innerText = data.defense;
};

// --- WIDGET 9.2: PHISHING DETECTIVE WORKBENCH ---
window.phishingState = {
  currentEmail: 1,
  emails: {
    1: {
      sender: "support@paypaI-security.com (Nota la 'I' maiuscola al posto della 'l'!)",
      subject: "URGENTE: Conto Sospeso per Attività Sospetta!",
      body: "Gentile utente, abbiamo rilevato un accesso non autorizzato sul tuo conto. Se non confermi le tue credenziali e il tuo numero di carta entro 60 minuti, il tuo account sarà revocato per sempre.<br><br>👉 Clicca qui per confermare: <code>http://194.26.29.11/fake-paypal/login.php</code>",
      isPhishing: true,
      explanation: "🚨 <strong>CORRETTO! È UN ATTACCO DI PHISHING:</strong> Il mittente usa 'typosquatting' (una 'I' maiuscola al posto di 'l'); c'è un finto senso di urgenza (60 minuti) e il link punta a un indirizzo IP russo anziché al dominio ufficiale paypal.com!"
    },
    2: {
      sender: "noreply@steampowered.com",
      subject: "Ricevuta del tuo acquisto su Steam #849201",
      body: "Grazie per il tuo acquisto recente! Il gioco 'Portal 2' è stato aggiunto alla tua libreria. Non è richiesta alcuna azione da parte tua.<br><br>Dettagli ordine disponibili nell'applicazione desktop ufficiale di Steam.",
      isPhishing: false,
      explanation: "✅ <strong>CORRETTO! È UN'EMAIL LEGITTIMA:</strong> Il dominio mittente è autentico (steampowered.com); non richiede password, non minaccia scadenze e invita a controllare nell'app ufficiale."
    },
    3: {
      sender: "segreteria@liceo-davinci.edu.it.supporto-scuole.biz",
      subject: "Circolare n.42: Variazione Orario e Chiusura Straordinaria",
      body: "Si comunica a tutti gli studenti che l'orario scolastico è stato modificato. Leggere attentamente il documento allegato:<br><br>📎 <code>circolare_orario_urgente.pdf.exe</code> (Doppia estensione pericolosa!)",
      isPhishing: true,
      explanation: "🚨 <strong>CORRETTO! È UN GRAVISSIMO ATTACCO MALWARE:</strong> Il dominio termina in '.biz' anziché '.edu.it'; l'allegato ha una doppia estensione (.pdf.exe) per ingannare Windows e far eseguire un virus trojan!"
    }
  }
};

window.selectPhishingEmail = function(emailNum) {
  window.phishingState.currentEmail = emailNum;
  const data = window.phishingState.emails[emailNum];
  if (!data) return;

  [1, 2, 3].forEach(n => {
    const btn = document.getElementById(`pTabEmail${n}`);
    if (btn) btn.classList.toggle("active", n === emailNum);
  });

  const sender = document.getElementById("phishMailSender");
  const subj = document.getElementById("phishMailSubject");
  const body = document.getElementById("phishMailBody");
  const banner = document.getElementById("phishFeedbackBanner");

  if (sender) sender.innerText = data.sender;
  if (subj) subj.innerText = data.subject;
  if (body) body.innerHTML = data.body;
  if (banner) banner.style.display = "none";
};

window.evaluatePhishingChoice = function(userSaidPhishing) {
  const cur = window.phishingState.emails[window.phishingState.currentEmail];
  const banner = document.getElementById("phishFeedbackBanner");
  if (!cur || !banner) return;

  banner.style.display = "block";
  if (userSaidPhishing === cur.isPhishing) {
    banner.style.background = "#064e3b";
    banner.style.borderColor = "#10b981";
    banner.style.color = "#a7f3d0";
    banner.innerHTML = `🎯 <strong>OTTIMO OCCHIO DA INVESTIGATORE!</strong><br>${cur.explanation}`;
  } else {
    banner.style.background = "#7f1d1d";
    banner.style.borderColor = "#ef4444";
    banner.style.color = "#fecaca";
    banner.innerHTML = `❌ <strong>ATTENZIONE! RISPOSTA SBAGLIATA:</strong><br>${cur.explanation}`;
  }
};

// --- WIDGET 9.3: CRYPTO WORKBENCH ---
window.encryptAndSendCryptoMessage = function() {
  const plainInput = document.getElementById("cryptoPlainInput");
  const cipherView = document.getElementById("cryptoInterceptView");
  const decryptView = document.getElementById("cryptoDecryptedView");
  const log = document.getElementById("cryptoExplanationLog");

  if (!plainInput || !cipherView || !decryptView) return;

  const text = plainInput.value || "MESSAGGIO SEGRETO";

  // Genera finto hash crittografico realistico
  let fakeCipher = "";
  for (let i = 0; i < text.length; i++) {
    fakeCipher += (text.charCodeAt(i) ^ 0x5A).toString(16).padStart(2, "0").toUpperCase() + " ";
  }

  cipherView.innerText = fakeCipher.trim();
  decryptView.innerText = text;

  if (log) {
    log.innerHTML = `
      🔒 [T=0ms] Alice prende la <strong>Chiave Pubblica di Bob (RSA 4096 bit)</strong> e cifra il testo in chiaro.<br>
      🌐 [T=12ms] Il testo cifrato viaggia attraverso il router pubblico di Internet.<br>
      🕵️ [T=15ms] <strong>Eve intercetta i pacchetti:</strong> vede solo byte esadecimali casuali (${fakeCipher.substring(0, 14)}...). La crittografia regge!<br>
      🗝️ [T=25ms] <strong>Bob riceve i pacchetti:</strong> inserisce la sua <strong>Chiave Privata Segreta</strong> e decifra istantaneamente il messaggio in chiaro: <em>'${text}'</em>.
    `;
  }
};
