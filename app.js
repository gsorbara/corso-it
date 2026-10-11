let currentModuleIndex = 0;
let currentTabIndex = 0;
let currentTheme = "light";

// Initialize the app
function init() {
  window.courseData = window.courseData || [];
  window.courseData.sort((a, b) => a.id - b.id);

  // Initialize theme
  initTheme();

  // Load saved progress
  const savedModule = localStorage.getItem('last_module_idx');
  const savedTab = localStorage.getItem('last_tab_idx');
  
  if (savedModule !== null) {
    const parsedMod = parseInt(savedModule);
    if (!isNaN(parsedMod) && parsedMod >= 0 && parsedMod < window.courseData.length) {
      currentModuleIndex = parsedMod;
    }
  }
  if (savedTab !== null) {
    const parsedTab = parseInt(savedTab);
    if (!isNaN(parsedTab) && parsedTab >= 0) {
      currentTabIndex = parsedTab;
    }
  }

  renderSidebar();
  renderContent();
  updateProgressBar();
}

/* ==========================================================================
   THEME MANAGEMENT (Dark / Light)
   ========================================================================== */

function initTheme() {
  const saved = localStorage.getItem('user_theme');
  if (saved === 'dark' || saved === 'light') {
    currentTheme = saved;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    currentTheme = 'dark';
  } else {
    currentTheme = 'light';
  }
  applyTheme(currentTheme);
}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('user_theme', theme);

  const isDark = theme === 'dark';
  const icon = isDark ? '☀️' : '🌙';
  const label = isDark ? 'Chiaro' : 'Scuro';

  const topIcon = document.getElementById('topThemeIcon');
  const topLabel = document.getElementById('topThemeLabel');
  const sidebarLabel = document.getElementById('sidebarThemeLabel');
  const mobileBtn = document.getElementById('mobileThemeBtn');

  if (topIcon) topIcon.innerText = icon;
  if (topLabel) topLabel.innerText = isDark ? 'Chiaro' : 'Scuro';
  if (sidebarLabel) sidebarLabel.innerText = isDark ? 'Chiaro' : 'Scuro';
  if (mobileBtn) mobileBtn.innerText = icon;
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

/* ==========================================================================
   NAVIGATION & PROGRESSION
   ========================================================================== */

// Flag to bypass module locking (set to false to re-enable key progression)
const DEV_BYPASS_LOCKS = true;

function isModuleUnlocked(index) {
  if (DEV_BYPASS_LOCKS) return true;
  if (index === 0) return true;
  if (!window.courseData || !window.courseData[index]) return false;
  return localStorage.getItem(`unlocked_mod_${window.courseData[index].id}`) === "true";
}

function toggleSidebar(open) {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  if (open) {
    sidebar.classList.add("open");
    backdrop.classList.add("active");
  } else {
    sidebar.classList.remove("open");
    backdrop.classList.remove("active");
  }
}

function renderSidebar() {
  const nav = document.getElementById("moduleNavList");
  if (!nav) return;
  nav.innerHTML = "";

  window.courseData.forEach((mod, idx) => {
    const unlocked = isModuleUnlocked(idx);
    const li = document.createElement("li");
    li.className = `nav-item ${idx === currentModuleIndex ? "active" : ""} ${!unlocked ? "locked" : ""}`;
    
    let statusIcon = unlocked ? "🔓" : "🔒";
    if (localStorage.getItem(`completed_mod_${mod.id}`) === "true") statusIcon = "✅";

    li.innerHTML = `<span>${mod.title}</span> <span>${statusIcon}</span>`;
    li.onclick = () => {
      currentModuleIndex = idx;
      currentTabIndex = 0;
      savePosition();
      renderSidebar();
      renderContent();
      updateProgressBar();
      toggleSidebar(false);
    };
    nav.appendChild(li);
  });

  const badge = document.getElementById("mobileProgressBadge");
  if (badge) badge.innerText = `Mod ${currentModuleIndex + 1}/${window.courseData.length}`;
}

function savePosition() {
  localStorage.setItem('last_module_idx', currentModuleIndex);
  localStorage.setItem('last_tab_idx', currentTabIndex);
}

function updateProgressBar() {
  const progressContainer = document.getElementById('overallProgress');
  if (!progressContainer || !window.courseData.length) return;

  const completedCount = window.courseData.filter((_, idx) => 
    localStorage.getItem(`completed_mod_${window.courseData[idx].id}`) === "true"
  ).length;

  const percentage = Math.round((completedCount / window.courseData.length) * 100);
  progressContainer.style.width = `${percentage}%`;
  const textContainer = document.getElementById('progressText');
  if (textContainer) textContainer.innerText = `${percentage}%`;
}

function renderContent() {
  const currentMod = window.courseData[currentModuleIndex];
  const tabsBar = document.getElementById("submoduleTabs");
  const content = document.getElementById("contentArea");

  if (!tabsBar || !content || !currentMod) return;

  tabsBar.innerHTML = "";
  content.innerHTML = "";

  if (!isModuleUnlocked(currentModuleIndex)) {
    content.innerHTML = `
      <div class="locked-view">
        <h2>Modulo Bloccato 🔒</h2>
        <p>Supera il test del modulo precedente per ricevere il codice segreto di sblocco.</p>
        <div class="key-input-group">
          <input type="text" id="passkeyInput" placeholder="Inserisci Chiave">
          <button class="btn-primary" onclick="tryUnlockModule()">Sblocca</button>
        </div>
      </div>
    `;
    return;
  }

  currentMod.submodules.forEach((sub, sIdx) => {
    const btn = document.createElement("button");
    btn.className = `tab-btn ${sIdx === currentTabIndex ? "active" : ""}`;
    btn.innerText = sub.title;
    btn.onclick = () => { 
      currentTabIndex = sIdx; 
      savePosition();
      renderContent(); 
    };
    tabsBar.appendChild(btn);
  });

  if (currentMod.quiz && currentMod.quiz.questions.length > 0) {
    const qBtn = document.createElement("button");
    const isQuizActive = currentTabIndex === currentMod.submodules.length;
    qBtn.className = `tab-btn ${isQuizActive ? "active" : ""}`;
    qBtn.innerText = "✍️ Test di Verifica";
    qBtn.onclick = () => {
      currentTabIndex = currentMod.submodules.length;
      savePosition();
      renderContent();
    };
    tabsBar.appendChild(qBtn);
  }

  if (currentTabIndex < currentMod.submodules.length) {
    content.innerHTML = currentMod.submodules[currentTabIndex].content;

    // Initialize module widgets if present
    if (typeof renderDecoderCard === 'function') {
      renderDecoderCard();
    }
    if (typeof renderPunchCard === 'function') {
      renderPunchCard();
    }
    if (typeof updateEraDisplay === 'function') {
      updateEraDisplay(0);
    }
    if (typeof renderArchitectureWorkspace === 'function') {
      renderArchitectureWorkspace();
    }
    if (typeof renderBinaryConverter === 'function') {
      renderBinaryConverter();
    }
    if (typeof renderUtf8Inspector === 'function') {
      renderUtf8Inspector();
    }
    if (typeof renderRgbMicroscope === 'function') {
      renderRgbMicroscope();
    }
    if (typeof renderCliGuiWorkbench === 'function') {
      renderCliGuiWorkbench();
    }
    if (typeof renderUniversalPipeline === 'function') {
      renderUniversalPipeline();
    }
    if (typeof renderP101Console === 'function') {
      renderP101Console();
    }
    if (typeof renderCpuMicroWorkbench === 'function') {
      renderCpuMicroWorkbench();
    }
    if (typeof renderMemoryPyramid === 'function') {
      renderMemoryPyramid();
    }
    if (typeof renderMotherboardBus === 'function') {
      renderMotherboardBus();
    }
    if (typeof renderCpuGpuChallenge === 'function') {
      renderCpuGpuChallenge();
    }
    if (typeof renderBootSequence === 'function') {
      renderBootSequence();
    }
    if (typeof renderSchedulerWorkbench === 'function') {
      renderSchedulerWorkbench();
    }
    if (typeof renderMmuWorkbench === 'function') {
      renderMmuWorkbench();
    }
    if (typeof renderPipeWorkbench === 'function') {
      renderPipeWorkbench();
    }
    if (typeof renderExecutableInspector === 'function') {
      renderExecutableInspector();
    }
    if (typeof renderLoaderPipeline === 'function') {
      renderLoaderPipeline();
    }
    if (typeof renderMemoryTheater === 'function') {
      renderMemoryTheater();
    }
    if (typeof renderPacketSlots === 'function') {
      renderPacketSlots();
    }
    if (typeof resetDnsWorkbench === 'function') {
      resetDnsWorkbench();
    }
    if (typeof selectMalwareSample === 'function') {
      selectMalwareSample('virus');
    }
    if (typeof selectPhishingEmail === 'function') {
      selectPhishingEmail(1);
    }
    if (typeof renderAbstractionTower === 'function') {
      renderAbstractionTower();
    }
    if (typeof renderTranslationWorkbench === 'function') {
      renderTranslationWorkbench();
    }
    if (typeof renderParadigmLab === 'function') {
      renderParadigmLab();
    }
    if (typeof renderLanguageCompass === 'function') {
      renderLanguageCompass();
    }
    
    const footerNav = document.createElement("div");
    footerNav.className = "nav-actions-footer";
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn-primary";
    
    const hasNextSub = currentTabIndex + 1 < currentMod.submodules.length;
    nextBtn.innerText = hasNextSub ? "Prossimo Sottomodulo ➔" : "Vai al Test di Verifica ✍️";
    nextBtn.onclick = () => {
      currentTabIndex++;
      savePosition();
      renderContent();
      content.scrollTo({ top: 0, behavior: 'smooth' });
    };
    footerNav.appendChild(nextBtn);
    content.appendChild(footerNav);
  } else {
    renderQuizView(currentMod, content);
  }
}

function renderQuizView(mod, container) {
  let quizHtml = `
    <div class="quiz-card">
      <h2>Test di Verifica: ${mod.title}</h2>
      <p style="margin-bottom: 20px; color: var(--text-muted)">Rispondi a tutte le domande per ottenere la chiave di accesso al livello successivo.</p>
      <form id="quizForm">
  `;

  mod.quiz.questions.forEach((q, qIndex) => {
    quizHtml += `
      <div class="question-block" id="qBlock_${qIndex}">
        <p>${qIndex + 1}. ${q.q}</p>
        <div class="options-list">
    `;
    q.options.forEach((opt, oIndex) => {
      quizHtml += `
        <label>
          <input type="radio" name="q_${qIndex}" value="${oIndex}"> ${opt.text}
        </label>
      `;
    });
    quizHtml += `</div><div class="feedback-msg" style="display:none; font-size: 0.85rem; margin-top: 5px;"></div></div>`;
  });

  quizHtml += `
      <button type="button" class="btn-primary" onclick="evaluateQuiz()">Invia Risposte</button>
    </form>
    <div class="unlock-banner" id="unlockBanner">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
        <div>
          🎉 Ottimo lavoro! Test superato con successo. La tua chiave per il modulo successivo è: <br>
          <code id="keyDisplayCode">${mod.nextKey}</code>
        </div>
        <button class="btn-primary" style="background: #059669;" onclick="copyKey('${mod.nextKey}')">Copia Chiave 📋</button>
      </div>
    </div>
  </div>`;

  container.innerHTML = quizHtml;
}

function evaluateQuiz() {
  const currentMod = window.courseData[currentModuleIndex];
  let errors = 0;

  currentMod.quiz.questions.forEach((q, qIndex) => {
    const selected = document.querySelector(`input[name="q_${qIndex}"]:checked`);
    const qBlock = document.getElementById(`qBlock_${qIndex}`);
    const feedback = qBlock.querySelector(".feedback-msg");
    
    if (!selected) {
      errors++;
      feedback.style.display = "block";
      feedback.style.color = "#dc2626";
      feedback.innerText = "⚠️ Seleziona una risposta";
    } else {
      const selectedIdx = parseInt(selected.value);
      if (!q.options[selectedIdx].correct) {
        errors++;
        feedback.style.display = "block";
        feedback.style.color = "#dc2626";
        feedback.innerText = "❌ Risposta errata, rileggi il materiale.";
      } else {
        feedback.style.display = "block";
        feedback.style.color = "#059669";
        feedback.innerText = "✅ Corretto!";
      }
    }
  });

  if (errors === 0) {
    document.getElementById("unlockBanner").style.display = "block";
    localStorage.setItem(`completed_mod_${currentMod.id}`, "true");
    renderSidebar();
    updateProgressBar();
  }
}

function copyKey(key) {
  navigator.clipboard.writeText(key).then(() => {
    alert("Chiave copiata negli appunti!");
  });
}

function tryUnlockModule() {
  const inputVal = document.getElementById("passkeyInput").value.trim().toUpperCase();
  const currentMod = window.courseData[currentModuleIndex];

  if (inputVal === currentMod.keyRequired) {
    localStorage.setItem(`unlocked_mod_${currentMod.id}`, "true");
    renderSidebar();
    renderContent();
    updateProgressBar();
  } else {
    alert("Chiave errata. Inserisci il codice rilasciato al termine del modulo precedente!");
  }
}

function resetProgress() {
  if (confirm("Sei sicuro di voler resettare tutti i progressi? Questa azione non è reversibile.")) {
    localStorage.clear();
    location.reload();
  }
}

/* ==========================================================================
   GLOSSARIO & RICERCA ENGINE
   ========================================================================== */
function openGlossary(initialQuery = '') {
  const modal = document.getElementById('glossaryModal');
  if (!modal) return;
  modal.classList.add('active');

  const input = document.getElementById('glossarySearchInput');
  if (input) {
    if (initialQuery) input.value = initialQuery;
    handleGlossarySearch(input.value);
    setTimeout(() => input.focus(), 60);
  }
}

function closeGlossary() {
  const modal = document.getElementById('glossaryModal');
  if (modal) modal.classList.remove('active');
}

function handleModalBackdropClick(event) {
  if (event.target && event.target.id === 'glossaryModal') {
    closeGlossary();
  }
}

function clearGlossarySearch() {
  const input = document.getElementById('glossarySearchInput');
  if (input) {
    input.value = '';
    handleGlossarySearch('');
    input.focus();
  }
}

function handleGlossarySearch(query) {
  const list = document.getElementById('glossaryResultsList');
  const countBadge = document.getElementById('resultsCountBadge');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (!list) return;

  const q = (query || '').trim().toLowerCase();
  if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

  const items = window.glossaryData || [];
  const filtered = items.filter(item => {
    if (!q) return true;
    return item.term.toLowerCase().includes(q) || item.definition.toLowerCase().includes(q);
  });

  if (countBadge) {
    countBadge.innerText = `${filtered.length} ${filtered.length === 1 ? 'termine' : 'termini'}`;
  }

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="glossary-empty">
        <span style="font-size: 2rem; display: block; margin-bottom: 8px;">🔍</span>
        <p style="font-weight: 600; margin-bottom: 4px;">Nessun termine trovato per "${escapeHtml(query)}"</p>
        <p style="font-size: 0.85rem;">Prova a cercare concetti come <em>RAM</em>, <em>CPU</em>, <em>Kernel</em> o <em>Algoritmo</em>.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = filtered.map(item => {
    return `
      <div class="glossary-card">
        <div class="glossary-card-header">
          <div class="glossary-term">${escapeHtml(item.term)}</div>
        </div>
        <p class="glossary-desc">${escapeHtml(item.definition)}</p>
        <a href="${item.wikiUrl}" target="_blank" rel="noopener noreferrer" class="glossary-wiki-btn">
          Approfondisci su Wikipedia ↗
        </a>
      </div>
    `;
  }).join('');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   KEYBOARD SHORTCUTS
   ========================================================================== */

window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault();
    const modal = document.getElementById('glossaryModal');
    if (modal && modal.classList.contains('active')) {
      closeGlossary();
    } else {
      openGlossary();
    }
  } else if (e.key === 'Escape') {
    closeGlossary();
    toggleSidebar(false);
  }
});

window.addEventListener("DOMContentLoaded", init);
