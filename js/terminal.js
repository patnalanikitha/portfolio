/**
 * Modern Developer Command Console Emulator
 * Clean CLI engine with commands, history, and autocomplete.
 */
(function() {
  const terminalOverlay = document.getElementById('terminal-modal');
  const termInput = document.getElementById('term-input');
  const termOutput = document.getElementById('term-output');
  const closeBtn = document.getElementById('term-close-btn');

  if (!terminalOverlay || !termInput) return;

  const history = [];
  let historyIndex = -1;

  const COMMANDS = {
    help: 'List all available console commands',
    about: 'Display background, university, and core focus',
    skills: 'View technical skills & toolchain proficiency',
    projects: 'View showcase projects & live demo links',
    contact: 'Display direct channels (Email, GitHub, LinkedIn)',
    clear: 'Clear console screen',
    exit: 'Close the developer console'
  };

  // Open / Close Console
  window.openTerminal = function() {
    terminalOverlay.classList.add('active');
    setTimeout(() => termInput.focus(), 50);
  };

  window.closeTerminal = function() {
    terminalOverlay.classList.remove('active');
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeTerminal);
  }

  // Global toggle with backtick (`) key
  window.addEventListener('keydown', (e) => {
    if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      if (terminalOverlay.classList.contains('active')) {
        window.closeTerminal();
      } else {
        window.openTerminal();
      }
    }
    if (e.key === 'Escape' && terminalOverlay.classList.contains('active')) {
      window.closeTerminal();
    }
  });

  // Command Execution
  function executeCommand(rawCmd) {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    history.push(trimmed);
    historyIndex = history.length;

    // Echo input line
    const echoLine = document.createElement('div');
    echoLine.className = 'term-line';
    echoLine.innerHTML = `<span class="term-prompt-prefix">nikitha@gitam:~$</span> <span class="term-cmd-text">${escapeHtml(trimmed)}</span>`;
    termOutput.appendChild(echoLine);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();

    const data = getPortfolioData();
    let responseHtml = '';

    switch(cmd) {
      case 'help':
        responseHtml = `
          <div class="term-output">
            <span class="term-highlight">Available Commands:</span><br>
            ${Object.entries(COMMANDS).map(([k, v]) => `  <span class="term-accent">${k.padEnd(10)}</span> - ${v}`).join('<br>')}
          </div>
        `;
        break;

      case 'about':
        responseHtml = `
          <div class="term-output">
            <span class="term-highlight">${escapeHtml(data.profile.name)}</span> — ${escapeHtml(data.profile.role)}<br>
            <span class="term-accent">University:</span> ${escapeHtml(data.profile.college)} (Graduation: ${escapeHtml(data.profile.gradYear)})<br>
            <span class="term-accent">Location:</span> ${escapeHtml(data.profile.location)}<br><br>
            ${escapeHtml(data.profile.bio)}
          </div>
        `;
        break;

      case 'skills':
        const design = (data.skills.design || []).map(d => `${d.name} (${d.level})`).join(', ');
        const langs = data.skills.languages.map(l => `${l.name} (${l.level})`).join(', ');
        const tools = data.skills.frameworksAndTools.map(t => `${t.name} (${t.level})`).join(', ');
        responseHtml = `
          <div class="term-output">
            <span class="term-highlight">[Core Focus: UI/UX & Product Design]</span><br>
            ${design}<br><br>
            <span class="term-highlight">[Languages & Fundamentals]</span><br>
            ${langs}<br><br>
            <span class="term-highlight">[Frameworks, Databases & AI]</span><br>
            ${tools}
          </div>
        `;
        break;

      case 'projects':
        responseHtml = `
          <div class="term-output">
            <span class="term-highlight">Working Showcase Projects:</span><br>
            ${data.projects.map((p, i) => `
              ${i + 1}. <span class="term-accent">${escapeHtml(p.title)}</span><br>
                 ${escapeHtml(p.tagline)}<br>
                 <span class="term-warning">Demo:</span> <a href="${p.demoUrl}" style="color:#38bdf8; text-decoration:underline;">${p.demoUrl}</a>
            `).join('<br><br>')}
          </div>
        `;
        break;

      case 'contact':
        responseHtml = `
          <div class="term-output">
            <span class="term-highlight">Direct Communication:</span><br>
            Email: <a href="mailto:${data.profile.socials.email}" style="color:#38bdf8;">${escapeHtml(data.profile.socials.email)}</a><br>
            GitHub: <a href="${data.profile.socials.github}" target="_blank" style="color:#38bdf8;">${data.profile.socials.github}</a><br>
            LinkedIn: <a href="${data.profile.socials.linkedin}" target="_blank" style="color:#38bdf8;">${data.profile.socials.linkedin}</a>
          </div>
        `;
        break;

      case 'clear':
        termOutput.innerHTML = '';
        return;

      case 'exit':
        window.closeTerminal();
        return;

      default:
        responseHtml = `<div class="term-error">Command not recognized: "${escapeHtml(cmd)}". Type <span class="term-highlight">help</span> for a list of commands.</div>`;
    }

    const outLine = document.createElement('div');
    outLine.className = 'term-line';
    outLine.innerHTML = responseHtml;
    termOutput.appendChild(outLine);

    // Scroll to bottom
    const termBody = termOutput.parentElement;
    termBody.scrollTop = termBody.scrollHeight;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // Handle Input Events
  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = termInput.value;
      termInput.value = '';
      executeCommand(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex > 0) {
        historyIndex--;
        termInput.value = history[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        historyIndex++;
        termInput.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        termInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = termInput.value.trim().toLowerCase();
      if (current) {
        const matches = Object.keys(COMMANDS).filter(c => c.startsWith(current));
        if (matches.length === 1) {
          termInput.value = matches[0];
        }
      }
    }
  });

  const termWindow = document.querySelector('.terminal-window');
  if (termWindow) {
    termWindow.addEventListener('click', () => termInput.focus());
  }
})();
