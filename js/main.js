/**
 * Main Application Controller
 * Handles dynamic DOM rendering, AOS animations, project modals, and clipboard copy.
 */

// Global Toast Notification
window.showToast = function(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
};

// Global helper for safe text
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Copy to Clipboard Utility
window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    window.showToast(`${label || 'Copied'}: "${text}" copied to clipboard!`);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    window.showToast(`Error copying to clipboard`);
  });
};

// Render Entire Portfolio
window.renderPortfolio = function() {
  const data = getPortfolioData();

  // 1. Header Brand & Avatar
  const brandName = document.getElementById('brand-name');
  const brandAvatar = document.getElementById('brand-avatar');
  if (brandName) brandName.textContent = data.profile.name;
  if (brandAvatar) {
    brandAvatar.src = data.profile.avatarUrl;
  }

  // 2. Hero Section
  const heroName = document.getElementById('hero-name');
  const heroRole = document.getElementById('hero-role');
  const heroBio = document.getElementById('hero-bio');
  const statusBadgeText = document.getElementById('status-badge-text');
  const collegeBadgeText = document.getElementById('college-badge-text');
  const devCardName = document.getElementById('dev-card-name');
  const devCardRole = document.getElementById('dev-card-role');
  const devCardImg = document.getElementById('dev-card-img');
  const statsGrid = document.getElementById('stats-grid');
  const heroSocials = document.getElementById('hero-socials');

  if (heroName) heroName.textContent = data.profile.name;
  if (heroRole) heroRole.textContent = data.profile.role;
  if (heroBio) heroBio.textContent = data.profile.bio;
  if (statusBadgeText) statusBadgeText.textContent = data.profile.statusBadge;
  if (collegeBadgeText) collegeBadgeText.textContent = `${data.profile.college} • Class of ${data.profile.gradYear}`;
  if (devCardName) devCardName.textContent = data.profile.name;
  if (devCardRole) devCardRole.textContent = data.profile.role;
  if (devCardImg) {
    devCardImg.src = data.profile.avatarUrl;
  }

  // Render Stats Grid
  if (statsGrid && data.profile.stats) {
    statsGrid.innerHTML = data.profile.stats.map(s => `
      <div class="stat-item">
        <div class="stat-value">${escapeHtml(s.value)}</div>
        <div class="stat-label">${escapeHtml(s.label)}</div>
      </div>
    `).join('');
  }

  // Render Hero Socials
  if (heroSocials && data.profile.socials) {
    heroSocials.innerHTML = `
      <a href="${data.profile.socials.github}" target="_blank" rel="noopener" class="social-icon-btn" title="GitHub Profile">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
      </a>
      <a href="${data.profile.socials.linkedin}" target="_blank" rel="noopener" class="social-icon-btn" title="LinkedIn Profile">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </a>
      <a href="mailto:${data.profile.socials.email}" class="social-icon-btn" title="Send Email">
        <i data-lucide="mail"></i>
      </a>
      <button class="social-icon-btn" onclick="copyToClipboard('${data.profile.socials.email}', 'Email')" title="Copy Email">
        <i data-lucide="copy"></i>
      </button>
    `;
  }

  // 3. Core Capabilities Section
  const capabilitiesGrid = document.getElementById('capabilities-grid');
  if (capabilitiesGrid && data.capabilities) {
    capabilitiesGrid.innerHTML = data.capabilities.map((c, idx) => `
      <div class="cap-card" data-aos="fade-up" data-aos-delay="${idx * 80}">
        <div class="cap-icon-box">
          <i data-lucide="${c.icon}"></i>
        </div>
        <h3 class="cap-title">${escapeHtml(c.title)}</h3>
        <p class="cap-desc">${escapeHtml(c.description)}</p>
      </div>
    `).join('');
  }

  // 4. Showcase Projects
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid && data.projects) {
    projectsGrid.innerHTML = data.projects.map((p, idx) => `
      <div class="project-card" data-aos="fade-up" data-aos-delay="${idx * 120}">
        <div class="project-preview-bar">
          <div class="window-dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <span class="project-badge">${escapeHtml(p.badge)}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${escapeHtml(p.title)}</h3>
          <div class="project-tagline">${escapeHtml(p.tagline)}</div>
          <p class="project-desc">${escapeHtml(p.description)}</p>
          ${p.elementLogos && p.elementLogos.length ? `
            <div class="project-element-logos">
              ${p.elementLogos.map(el => `
                <div class="element-logo-pill">
                  <span class="pill-icon">
                    <i data-lucide="${escapeHtml(el.icon)}"></i>
                  </span>
                  <span>${escapeHtml(el.label)}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
          <div class="tech-tags">
            ${p.techStack.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="project-actions">
            <a href="${p.demoUrl}" target="_blank" class="btn btn-primary btn-sm">
              <i data-lucide="external-link"></i> Launch Demo
            </a>
            ${p.caseStudyUrl ? `
              <a href="${p.caseStudyUrl}" class="btn btn-secondary btn-sm" style="border-color: rgba(99, 102, 241, 0.4); color: #c7d2fe;">
                <i data-lucide="book-open"></i> Case Study
              </a>
            ` : ''}
            <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${p.id}')">
              <i data-lucide="info"></i> Architecture
            </button>
            <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" title="View GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 5. Technical & Design Skills
  const designSkills = document.getElementById('design-skills');
  const langSkills = document.getElementById('lang-skills');
  const toolSkills = document.getElementById('tool-skills');
  const focusGrid = document.getElementById('focus-grid');

  if (designSkills && data.skills?.design) {
    designSkills.innerHTML = data.skills.design.map(d => `
      <div class="skill-item">
        <div class="skill-info">
          <i data-lucide="${d.icon || 'palette'}" style="color: #c084fc; width: 17px; height: 17px;"></i>
          <span>${escapeHtml(d.name)}</span>
        </div>
        <span class="skill-level" style="color: #c084fc; background: rgba(168, 85, 247, 0.12);">${escapeHtml(d.level)}</span>
      </div>
    `).join('');
  }

  if (langSkills && data.skills?.languages) {
    langSkills.innerHTML = data.skills.languages.map(l => `
      <div class="skill-item">
        <div class="skill-info">
          <i data-lucide="${l.icon || 'code'}" style="color: var(--accent-primary); width: 17px; height: 17px;"></i>
          <span>${escapeHtml(l.name)}</span>
        </div>
        <span class="skill-level">${escapeHtml(l.level)}</span>
      </div>
    `).join('');
  }

  if (toolSkills && data.skills?.frameworksAndTools) {
    toolSkills.innerHTML = data.skills.frameworksAndTools.map(t => `
      <div class="skill-item">
        <div class="skill-info">
          <i data-lucide="${t.icon || 'layers'}" style="color: var(--accent-secondary); width: 17px; height: 17px;"></i>
          <span>${escapeHtml(t.name)}</span>
        </div>
        <span class="skill-level">${escapeHtml(t.level)}</span>
      </div>
    `).join('');
  }

  if (focusGrid && data.skills?.developerFocus) {
    focusGrid.innerHTML = data.skills.developerFocus.map(f => `
      <div class="focus-card" data-aos="fade-up">
        <h4 class="focus-title">${escapeHtml(f.name)}</h4>
        <p class="focus-desc">${escapeHtml(f.desc)}</p>
      </div>
    `).join('');
  }

  // 6. Journey Timeline
  const timeline = document.getElementById('timeline-list');
  if (timeline && data.journey) {
    timeline.innerHTML = data.journey.map(j => `
      <div class="timeline-item" data-aos="fade-up">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-period">${escapeHtml(j.period)}</div>
          <h3 class="timeline-title">${escapeHtml(j.title)}</h3>
          ${j.institution ? `<div style="font-size: 0.85rem; color: #818cf8; margin-bottom: 6px; font-weight: 500;">${escapeHtml(j.institution)}</div>` : ''}
          <p class="timeline-desc">${escapeHtml(j.description)}</p>
        </div>
      </div>
    `).join('');
  }

  // 7. Contact Channels
  const contactChannels = document.getElementById('contact-channels');
  if (contactChannels && data.profile.socials) {
    contactChannels.innerHTML = `
      <a href="mailto:${data.profile.socials.email}" class="copy-badge-btn">
        <i data-lucide="mail"></i>
        <span>${escapeHtml(data.profile.socials.email)}</span>
      </a>
      <a href="${data.profile.socials.github}" target="_blank" rel="noopener" class="copy-badge-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        <span>GitHub: patnalanikitha</span>
      </a>
      <a href="${data.profile.socials.linkedin}" target="_blank" rel="noopener" class="copy-badge-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        <span>LinkedIn Profile</span>
      </a>
    `;
  }

  // Refresh Lucide Icons & AOS
  if (window.lucide) {
    window.lucide.createIcons();
  }
  if (window.AOS) {
    window.AOS.refresh();
  }
};

// Project Architecture Modal
window.openProjectModal = function(projectId) {
  const data = getPortfolioData();
  const project = data.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-project-title');
  const desc = document.getElementById('modal-project-desc');
  const highlights = document.getElementById('modal-project-highlights');
  const arch = document.getElementById('modal-project-arch');
  const demoBtn = document.getElementById('modal-demo-btn');
  const codeBtn = document.getElementById('modal-code-btn');
  const caseStudyBtn = document.getElementById('modal-case-study-btn');

  title.textContent = project.title;
  desc.textContent = project.description;
  arch.textContent = project.architecture;
  demoBtn.href = project.demoUrl;
  codeBtn.href = project.githubUrl;

  if (caseStudyBtn) {
    if (project.caseStudyUrl) {
      caseStudyBtn.href = project.caseStudyUrl;
      caseStudyBtn.style.display = 'inline-flex';
    } else {
      caseStudyBtn.style.display = 'none';
    }
  }

  highlights.innerHTML = project.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('');

  modal.classList.add('active');
  if (window.lucide) window.lucide.createIcons();
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.remove('active');
};

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  if (window.AOS) {
    window.AOS.init({
      duration: 700,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });
  }

  // Render content
  window.renderPortfolio();

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  // Project Modal Close Buttons
  const projectModalClose = document.getElementById('close-project-modal-btn');
  if (projectModalClose) {
    projectModalClose.addEventListener('click', window.closeProjectModal);
  }

  // Close modals when clicking overlay background
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
});
