/* =====================================================
   Team website script (CSC 216, Lab 2)
   Loaded on every page with `defer`, so the HTML is
   fully parsed before any of this code runs.
   ===================================================== */

/* ---------- 1. Shared: runs on every page ---------- */

// Put the current year in the footer.
const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Open and close the navigation menu on small screens.
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Dark mode, remembered across pages and visits.
const themeToggle = document.querySelector('.theme-toggle');
const THEME_KEY = 'team-theme';

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark', isDark);
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
  }
}

applyTheme(localStorage.getItem(THEME_KEY));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });
}








/* ---------- 2. Projects page ---------- */

const projects = [
  {
    title: 'File Compression Algorithm',
    category: 'algorithms',
    description: 'Build a compression tool using Huffman coding to reduce file sizes and reconstruct the original files.'
  },
  {
    title: 'Operating System Process Scheduler',
    category: 'systems',
    description: 'Simulate CPU scheduling algorithms such as FCFS, SJF and Round Robin, comparing their performance.'
  },
  {
    title: 'Peer-to-Peer File Sharing',
    category: 'networking',
    description: 'Build a decentralized file-sharing system where computers exchange files directly over a network.'
  },
  {
    title: 'Database Management System',
    category: 'databases',
    description: 'Create a lightweight database engine that supports record storage, indexing, searching and basic queries.'
  },
  {
    title: 'Compiler for a Custom Language',
    category: 'languages',
    description: 'Design a simple programming language with lexical analysis, parsing, syntax validation and execution.'
  },
  {
    title: 'Computer Network Traffic Analyzer',
    category: 'networking',
    description: 'Capture and analyze network packets to understand protocols, communication patterns and traffic statistics.'
  },
  {
    title: 'Pathfinding Algorithm Visualizer',
    category: 'algorithms',
    description: 'Implement Dijkstra and A* algorithms to find optimal paths through obstacles and visualize how they work.'
  },
  {
    title: 'Distributed Task Queue',
    category: 'systems',
    description: 'Develop a system that distributes background tasks across multiple workers and handles failures.'
  },
  {
    title: 'Password Security Analyzer',
    category: 'cybersecurity',
    description: 'Evaluate password strength using entropy calculations, pattern detection and common password analysis.'
  },
  {
    title: 'Version Control System',
    category: 'systems',
    description: 'Build a simplified Git-like tool that tracks file changes, creates commits and supports version restoration.'
  },
  {
    title: 'Search Engine',
    category: 'algorithms',
    description: 'Build a miniature search engine with document indexing, keyword retrieval and relevance ranking.'
  },
  {
    title: 'Digital Logic Circuit Simulator',
    category: 'hardware',
    description: 'Simulate logic gates and interconnected digital circuits to evaluate Boolean expressions and circuit outputs.'
  }
];
const categoryNames = { html: 'HTML', css: 'CSS', js: 'JavaScript' };

const projectList = document.querySelector('#project-list');
const projectCount = document.querySelector('#project-count');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderProjects(filter) {
  const visible = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  projectList.replaceChildren();

  visible.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'card';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = categoryNames[project.category];

    const heading = document.createElement('h3');
    heading.textContent = project.title;

    const text = document.createElement('p');
    text.textContent = project.description;

    card.append(tag, heading, text);
    projectList.append(card);
  });

  projectCount.textContent = `Showing ${visible.length} of ${projects.length} projects`;
}

if (projectList) {
  renderProjects('all');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
      renderProjects(button.dataset.filter);
    });
  });
}


/* ---------- 3. Contact page ---------- */

const form = document.querySelector('#contact-form');

if (form) {
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');
  const charCount = document.querySelector('#char-count');
  const statusEl = document.querySelector('#form-status');

  // Live character counter.
  messageInput.addEventListener('input', () => {
    charCount.textContent = messageInput.value.length;
  });

  // Show (or clear) the error message under one field.
  function showError(input, message) {
    const errorEl = document.querySelector(`#${input.id}-error`);
    errorEl.textContent = message;
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  // Check every field. Returns true only if all are valid.
  function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
      showError(nameInput, 'Please enter your name.');
      isValid = false;
    } else {
      showError(nameInput, '');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, 'Enter an email address like name@example.com.');
      isValid = false;
    } else {
      showError(emailInput, '');
    }

    if (messageInput.value.trim().length < 20) {
      showError(messageInput, 'Your message needs at least 20 characters.');
      isValid = false;
    } else {
      showError(messageInput, '');
    }

    return isValid;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    statusEl.textContent = '';

    if (!validateForm()) {
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    const firstName = nameInput.value.trim().split(' ')[0];
    statusEl.textContent = `Thanks, ${firstName}! Your message is ready. (We connect this form to a real server later.)`;
    form.reset();
    charCount.textContent = '0';
  });
}
