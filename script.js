/* ===== Configuration =====
   Before launch, set FORM_ENDPOINT to a confirmed secure form service URL (for example a
   form-handling provider that forwards to the business inbox). While it is null the form
   shows an honest demo confirmation and sends nothing. */
const FORM_ENDPOINT = null;

document.documentElement.classList.add('js');
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const NS = 'http://www.w3.org/2000/svg';
const svgEl = (tag, attrs = {}, text) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (text != null) e.textContent = text; return e; };
const icon = id => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;

/* ===== References ===== */
var REFS = [
  { id: 'ohid', tag: 'stat', short: 'OHID 2025', t: 'OHID: Adult substance misuse treatment statistics 2024 to 2025, report', u: 'https://www.gov.uk/government/statistics/substance-misuse-treatment-for-adults-statistics-2024-to-2025/adult-substance-misuse-treatment-statistics-2024-to-2025-report', s: 'Adults in treatment (329,646); starters with a mental-health need (74%, 124,763); unmet need (22%); completed exits (46%); market-sizing base.' },
  { id: 'ons', tag: 'stat', short: 'ONS 2025', t: 'ONS: Deaths related to drug poisoning in England and Wales, 2024 registrations', u: 'https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/bulletins/deathsrelatedtodrugpoisoninginenglandandwales/2024registrations', s: 'Drug-poisoning deaths registered in 2024 (5,565), cited as national context.' },
  { id: 'ncish', tag: 'stat', short: 'NCISH 2025', t: 'National Confidential Inquiry into Suicide and Safety in Mental Health: Annual Report 2025, key findings', u: 'https://sites.manchester.ac.uk/ncish/reports/annual-report-2025/key-findings/', s: 'The period after in-patient discharge as a recognised time of heightened risk.' },
  { id: 'phe', tag: 'policy', short: 'PHE 2017', t: 'Public Health England (2017): Better care for people with co-occurring mental health and alcohol/drug use conditions', u: 'https://assets.publishing.service.gov.uk/media/5a75b781ed915d6faf2b5276/Co-occurring_mental_health_and_alcohol_drug_use_conditions.pdf', s: 'Long-standing national guidance calling for joined-up care.' },
  { id: 'groshkova', tag: 'res', short: 'Groshkova et al. 2013', t: 'Groshkova, Best and White (2013): The Assessment of Recovery Capital, properties and psychometrics. Drug and Alcohol Review', u: 'https://pubmed.ncbi.nlm.nih.gov/22882622/', s: 'Recovery capital can be measured reliably.' },
  { id: 'vilsaint', tag: 'res', short: 'Vilsaint et al. 2017', t: 'Vilsaint et al. (2017): Development and validation of a Brief Assessment of Recovery Capital (BARC-10). Drug and Alcohol Dependence', u: 'https://www.sciencedirect.com/science/article/abs/pii/S0376871617302119', s: 'A validated 10-item brief measure, enabling low-burden anchoring of the DDRCI.' },
  { id: 'scott', tag: 'res', short: 'Scott et al. 2018', t: 'Scott, Dennis and Gustafson (2018): Using ecological momentary assessments to predict relapse after adult substance use treatment. Addictive Behaviors', u: 'https://pubmed.ncbi.nlm.nih.gov/29499393/', s: 'Frequent smartphone check-ins after treatment are feasible.' },
  { id: 'brorson', tag: 'res', short: 'Brorson et al. 2013', t: 'Brorson et al. (2013): Drop-out from addiction treatment, a systematic review of risk factors. Clinical Psychology Review', u: 'https://pubmed.ncbi.nlm.nih.gov/24029221/', s: 'Drop-out is common across 122 studies; basis for the engagement-decay signal.' },
  { id: 'chung', tag: 'res', short: 'Chung et al. 2017', t: 'Chung et al. (2017): Suicide rates after discharge from psychiatric facilities, systematic review and meta-analysis. JAMA Psychiatry', u: 'https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2629522', s: 'Transitions out of in-patient care are high-risk periods; basis for timed handover.' },
  { id: 'merrall', tag: 'res', short: 'Merrall et al. 2010', t: 'Merrall et al. (2010): Meta-analysis of drug-related deaths soon after release from prison. Addiction', u: 'https://pubmed.ncbi.nlm.nih.gov/20579009/', s: 'Elevated risk in the weeks after release; basis for timed handover.' },
  { id: 'dennis', tag: 'res', short: 'Dennis & Scott 2012', t: 'Dennis and Scott (2012): Four-year outcomes from the Early Re-Intervention experiment using Recovery Management Checkups. Drug and Alcohol Dependence', u: 'https://www.sciencedirect.com/science/article/abs/pii/S0376871611003541', s: 'Evidence for ongoing recovery check-ups; basis for adaptive step-down.' },
  { id: 'kaye', tag: 'res', short: 'Kaye et al. 2015', t: 'Kaye et al. (2015): Dynamic consent, a patient interface for twenty-first century research networks. European Journal of Human Genetics', u: 'https://pubmed.ncbi.nlm.nih.gov/24801761/', s: 'Dynamic consent as a model for giving, changing and tracking consent.' },
  { id: 'eddie', tag: 'res', short: 'Eddie et al. 2019', t: 'Eddie et al. (2019): Lived experience in new models of care for substance use disorder, a systematic review of peer recovery support services. Frontiers in Psychology', u: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2019.01052/full', s: 'Peer recovery support, with mixed evidence and a call for more rigorous trials.' },
  { id: 'roozen', tag: 'res', short: 'Roozen et al. 2010', t: 'Roozen, de Waart and van der Kroft (2010): Community reinforcement and family training. Addiction', u: 'https://pubmed.ncbi.nlm.nih.gov/20626372/', s: 'Basis for planned family and carer involvement.' },
  { id: 'goldacre', tag: 'policy', short: 'Goldacre Review 2022', t: 'Goldacre and Morley (2022): Better, broader, safer, using health data for research and analysis. DHSC', u: 'https://assets.publishing.service.gov.uk/media/624ea3788fa8f54a864cc6ba/summary-goldacre-review-using-health-data-for-research-and-analysis.pdf', s: 'Trusted research environments and transparency; basis for the planned data trust.' },
  { id: 'nice', tag: 'policy', short: 'NICE ESF', t: 'NICE: Evidence standards framework for digital health technologies', u: 'https://www.nice.org.uk/what-nice-does/digital-health/evidence-standards-framework-esf-for-digital-health-technologies', s: 'The evidence commissioners expect; planned evidence plan.' },
  { id: 'phgrant', tag: 'policy', short: 'Health Business 2026', t: 'Health Business (February 2026): Government publishes multi-year Public Health Grant allocation', u: 'https://healthbusinessuk.net/news/11022026/government-publishes-multi-year-public-health-grant-allocation', s: 'Multi-year, ring-fenced public-health funding as the buyer\'s budget context.' },
  { id: 'dtac', tag: 'policy', short: 'HTN 2026', t: 'HTN (February 2026): Digital Technology Assessment Criteria refreshed', u: 'https://htn.co.uk/2026/02/25/digital-technology-assessment-criteria-refreshed-to-create-simpler-more-trusted-pathway-for-nhs-digital-innovation/', s: 'DTAC as the NHS assessment route.' },
  { id: 'corx', tag: 'policy', short: 'CORX 2023', t: 'Recovery Capital Tracking Systems: review of four platforms (January 2023)', u: 'https://corxconsortium.org/wp-content/uploads/Recovery-Capital-Platforms-Summary-with-Glossary.pdf', s: 'Comparison of existing recovery-capital platforms.' }
];

/* ===== Header, menu, active section ===== */
(() => {
  const header = $('.site-header');
  const menuBtn = $('#menuBtn'), panel = $('#mobileMenu');
  const toTop = $('#toTop');
  const setMenu = open => {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuBtn.innerHTML = icon(open ? 'i-close' : 'i-menu');
    panel.hidden = !open;
  };
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  $$('a', panel).forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) { setMenu(false); menuBtn.focus(); } });
  window.matchMedia('(min-width: 1181px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 8);
    toTop.classList.toggle('show', y > 900);
  };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  toTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); $('.brand').focus({ preventScroll: true }); });

  const map = { home: 'home', challenge: 'challenge', platform: 'platform', views: 'platform', how: 'how', innovation: 'innovation', trust: 'trust', roadmap: 'roadmap', market: 'roadmap', founder: 'founder', evidence: 'founder', contact: 'contact' };
  const sections = Object.keys(map).map(id => document.getElementById(id)).filter(Boolean);
  const setActive = key => $$('[data-nav]').forEach(a => { const on = a.dataset.nav === key; a.classList.toggle('active', on); on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'); });
  const pick = () => {
    const line = window.innerHeight * 0.32;
    let current = sections[0];
    for (const s of sections) { if (s.getBoundingClientRect().top - line <= 0) current = s; }
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections[sections.length - 1];
    setActive(map[current.id]);
  };
  let raf; window.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(pick); }, { passive: true }); pick();
})();

/* ===== Tooltips ===== */
$$('[data-tip]').forEach(btn => {
  const pop = document.getElementById(btn.getAttribute('aria-describedby'));
  const show = () => pop.hidden = false, hide = () => pop.hidden = true;
  btn.addEventListener('mouseenter', show); btn.addEventListener('mouseleave', hide);
  btn.addEventListener('focus', show); btn.addEventListener('blur', hide);
  btn.addEventListener('click', () => pop.hidden = !pop.hidden);
  btn.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
});

/* ===== Generic tablist with arrow keys ===== */
function wireTabs(tabs, onSelect, horizontal = true) {
  const select = (i, focus) => {
    tabs.forEach((t, j) => { t.setAttribute('aria-selected', String(i === j)); t.tabIndex = i === j ? 0 : -1; });
    if (focus) tabs[i].focus();
    onSelect(i);
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i, false));
    t.addEventListener('keydown', e => {
      const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'];
      if (!keys.includes(e.key)) return;
      e.preventDefault();
      let n = i;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') n = 0; if (e.key === 'End') n = tabs.length - 1;
      select(n, true);
    });
  });
  return select;
}

/* ===== Product views ===== */
(() => {
  const tabs = $$('#views [role="tab"]');
  const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
  wireTabs(tabs, i => panels.forEach((p, j) => { p.hidden = i !== j; if (i === j) { p.classList.remove('fade'); void p.offsetWidth; p.classList.add('fade'); } }));

  // Person: check-in scale
  const scale = $$('#panel-person .scale button'), msg = $('#ciMsg');
  const words = ['not at all connected', 'a little connected', 'somewhat connected', 'quite connected', 'very connected'];
  scale.forEach((b, i) => b.addEventListener('click', () => {
    scale.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    msg.textContent = `Saved: ${words[i]}. Two questions left.`;
  }));
  // Person: consent switches
  const receipt = $('#receipt');
  $$('#panel-person .switch').forEach(sw => sw.addEventListener('click', () => {
    const on = sw.getAttribute('aria-checked') !== 'true';
    sw.setAttribute('aria-checked', String(on));
    const t = new Date(); const hh = String(t.getHours()).padStart(2, '0'), mm = String(t.getMinutes()).padStart(2, '0');
    receipt.textContent = `Consent receipt · ${hh}:${mm} · ${sw.dataset.who}: ${on ? 'can now see' : 'can no longer see'} check-in trend`;
  }));

  // Practitioner: caseload
  const cases = [
    { id: 'P-0412', svc: ['mh', 'su'], score: 58, vel: -6, eng: '3 missed check-ins', flag: true, stage: 'Post-discharge · week 5',
      dom: [52, 49, 38, 61], prompt: '3 missed check-ins + missed appointment', action: 'Reach-out contact suggested. Step-up to weekly check-ups proposed.', hand: null, tier: 'Fortnightly → weekly (awaiting approval)' },
    { id: 'P-0291', svc: ['su', 'mh'], score: 49, vel: 0, eng: 'Handover in progress', flag: false, stage: 'Referral to mental-health team',
      dom: [47, 51, 40, 55], prompt: null, action: 'Handover pack sent with consent. Accepted by a named practitioner.', hand: { h: 31, of: 72 }, tier: 'Weekly' },
    { id: 'P-0377', svc: ['su'], score: 64, vel: 4, eng: 'Steady', flag: false, stage: 'Step-down · monthly',
      dom: [66, 62, 58, 70], prompt: null, action: 'No prompt. Next recovery check-up due in 3 weeks.', hand: null, tier: 'Monthly (approved)' },
    { id: 'P-0508', svc: ['mh', 'su'], score: 71, vel: 3, eng: 'Steady', flag: false, stage: 'In treatment',
      dom: [74, 69, 63, 76], prompt: null, action: 'No prompt. Goals reviewed at last contact.', hand: null, tier: 'Weekly (in treatment)' },
    { id: 'P-0186', svc: ['mh'], score: 52, vel: -3, eng: '1 missed check-in', flag: true, stage: 'Post-discharge · week 11',
      dom: [55, 44, 46, 60], prompt: 'Social domain falling for 4 weeks', action: 'Suggest a peer-worker introduction to a local group.', hand: null, tier: 'Monthly' }
  ];
  const tbody = $('#caseRows'), detail = $('#caseDetail');
  const domNames = ['Personal', 'Social', 'Community', 'Cultural'];
  const renderDetail = c => {
    detail.innerHTML = `
      <div class="box"><h6>Recovery capital · ${c.id}</h6>${c.dom.map((v, i) => `<div class="domain"><span>${domNames[i]}</span><span class="t"><i style="width:${v}%"></i></span><span class="mono tnum">${v}</span></div>`).join('')}</div>
      <div class="box"><h6>Prompt</h6>${c.prompt ? `<span class="reason">${c.prompt}</span>` : '<span class="muted">No active prompt</span>'}<span>${c.action}</span><span class="small muted">A practitioner decides what happens next.</span></div>
      <div class="box"><h6>Handover</h6>${c.hand ? `<span>Accepted · first contact due within ${c.hand.of} hours</span><div class="timer"><span class="t"><i style="width:${Math.round(c.hand.h / c.hand.of * 100)}%"></i></span><span class="mono small tnum">${c.hand.h}h / ${c.hand.of}h</span></div><span class="small muted">Sender and peer worker alerted if the window passes. The person can see the status.</span>` : '<span class="muted">No open handover</span>'}</div>
      <div class="box"><h6>Step-down tier</h6><span>${c.tier}</span><span class="small muted">Weekly → fortnightly → monthly → quarterly. Rules propose; the practitioner approves.</span></div>`;
  };
  cases.forEach((c, i) => {
    const tr = document.createElement('tr');
    tr.tabIndex = 0; tr.setAttribute('aria-selected', String(i === 0));
    const arrow = c.vel > 0 ? '▲' : c.vel < 0 ? '▼' : '■';
    tr.innerHTML = `<td class="mono">${c.id}</td><td>${c.svc.map(s => `<span class="svc ${s}">${s === 'mh' ? 'MH' : 'SU'}</span>`).join('')}</td>
      <td><span class="mono tnum">${c.score}</span> <span class="trend ${c.vel > 0 ? 'up' : c.vel < 0 ? 'down' : ''}">${arrow} ${c.vel > 0 ? '+' : ''}${c.vel}</span></td>
      <td>${c.flag ? `<span class="flag">${c.eng}</span>` : c.eng}</td><td>${c.stage}</td>`;
    const choose = () => { $$('tr', tbody).forEach(r => r.setAttribute('aria-selected', 'false')); tr.setAttribute('aria-selected', 'true'); renderDetail(c); };
    tr.addEventListener('click', choose);
    tr.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); } });
    tbody.appendChild(tr);
  });
  renderDetail(cases[0]);

  // Commissioner: KPIs and chart
  const cohorts = {
    all: { kpi: [['Active people (example)', '742', 'All services'], ['Cohort recovery-capital change', '+5.8', 'points vs example baseline'], ['Handovers closed within 72 hours', '78%', 'vs 61% example baseline']], bars: [48, 52, 55, 57, 61, 63], base: 45 },
    co: { kpi: [['Active people (example)', '512', 'Co-occurring needs'], ['Cohort recovery-capital change', '+6.4', 'points vs example baseline'], ['Handovers closed within 72 hours', '74%', 'vs 58% example baseline']], bars: [46, 50, 54, 56, 60, 62], base: 42 },
    post: { kpi: [['Active people (example)', '236', 'After discharge'], ['Cohort recovery-capital change', '+4.1', 'points vs example baseline'], ['Handovers closed within 72 hours', '81%', 'vs 64% example baseline']], bars: [41, 47, 50, 53, 56, 58], base: 38 }
  };
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const chart = $('#commChart'), kpis = $('#kpis');
  const drawComm = key => {
    const d = cohorts[key];
    kpis.innerHTML = d.kpi.map(([l, v, s]) => `<div class="kpi"><span class="l">${l}</span><span class="v tnum">${v}</span><span class="d">${s}</span></div>`).join('');
    chart.innerHTML = '';
    const L = 40, R = 452, T = 14, B = 160, y = v => B - (v / 100) * (B - T);
    [0, 25, 50, 75, 100].forEach(g => {
      chart.appendChild(svgEl('line', { x1: L, x2: 512, y1: y(g), y2: y(g), stroke: 'var(--line)', 'stroke-width': 1 }));
      chart.appendChild(svgEl('text', { x: L - 8, y: y(g) + 4, 'text-anchor': 'end', class: 'svg-mono' }, g + '%'));
    });
    const bw = (R - L) / d.bars.length;
    d.bars.forEach((v, i) => {
      const x = L + i * bw + bw * 0.22, w = bw * 0.56;
      chart.appendChild(svgEl('rect', { x, y: y(v), width: w, height: B - y(v), rx: 3, fill: 'var(--teal)', opacity: i === d.bars.length - 1 ? 1 : 0.72 }));
      chart.appendChild(svgEl('text', { x: x + w / 2, y: y(v) - 6, 'text-anchor': 'middle', class: 'svg-label', style: 'font-size:11px' }, v + '%'));
      chart.appendChild(svgEl('text', { x: x + w / 2, y: B + 18, 'text-anchor': 'middle', class: 'svg-mono' }, months[i].toUpperCase()));
    });
    chart.appendChild(svgEl('line', { x1: L, x2: 512, y1: y(d.base), y2: y(d.base), stroke: 'var(--muted)', 'stroke-width': 1.5, 'stroke-dasharray': '5 4' }));
    chart.appendChild(svgEl('text', { x: 512, y: y(d.base) - 18, 'text-anchor': 'end', class: 'svg-mono' }, 'BASELINE'));
    chart.appendChild(svgEl('text', { x: 512, y: y(d.base) - 6, 'text-anchor': 'end', class: 'svg-mono' }, d.base + '%'));
    chart.setAttribute('aria-label', `Illustrative: engagement 12 weeks after discharge rising from ${d.bars[0]}% to ${d.bars[d.bars.length - 1]}% against a ${d.base}% example baseline. Fictional data.`);
  };
  $$('[data-cohort]').forEach(b => b.addEventListener('click', () => {
    $$('[data-cohort]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    drawComm(b.dataset.cohort);
  }));
  drawComm('all');
})();

/* ===== How it works journey ===== */
(() => {
  const steps = [
    { icon: 'i-key', t: 'Person-controlled consent', s: 'The person decides what is shared, with whom, and for what purpose.',
      d: 'Sharing starts with the person. At onboarding, and at any time afterwards, they choose which categories of information each organisation may see and for what purpose.',
      li: ['Consent set by data type, organisation and purpose', 'Time-limited grants and one-tap withdrawal', 'A consent receipt for every change'],
      aside: [['Who acts', 'The person, supported by a practitioner at onboarding.'], ['Safeguard', 'Consent is checked every time data is viewed or exported, and every access is logged.']] },
    { icon: 'i-inputs', t: 'Authorised information inputs', s: 'Check-ins, service events and practitioner contacts feed the record.',
      d: 'Only information the person has agreed to share, from organisations that are authorised to share it, contributes to the recovery record.',
      li: ['Short weekly check-ins, about a minute on a phone', 'Service events such as attended or missed appointments and referrals', 'Contacts logged by practitioners and peer workers'],
      aside: [['Integration', 'Connections to each area\'s existing systems are scoped locally, starting with the first area\'s provider.'], ['Principle', 'Collect the minimum needed for a named purpose.']] },
    { icon: 'i-signal', t: 'DDRCI measurement', s: 'The proposed index tracks recovery-capital change over time.',
      d: 'The Dynamic Digital Recovery Capital Index combines an established anchor measure with check-ins and events to estimate recovery capital across four domains, how fast it is changing, and how confident that estimate is.',
      li: ['Personal, social, community and cultural domains', 'A rate of change, not only a level', 'A confidence band that widens when data are sparse'],
      aside: [['Boundary', 'Measures recovery capital. It does not diagnose or predict individual clinical risk.'], ['More', '<a href="#ddrci">Read how the index is intended to work</a>']] },
    { icon: 'i-views', t: 'Role-specific views', s: 'Each person sees what their role needs, and no more.',
      d: 'The same underlying record produces different views. The person sees their strengths and goals. Authorised practitioners see their caseload. Commissioners see aggregated cohorts only.',
      li: ['Person: progress, goals, consent and contacts', 'Practitioner: trends, prompts, handovers and step-down', 'Commissioner: cohort outcomes against baselines'],
      aside: [['Access', 'Role-based and consent-based, enforced at the data layer.'], ['See it', '<a href="#views">Explore the three views</a>']] },
    { icon: 'i-hands', t: 'Human-led follow-up', s: 'Practitioners use the information to guide contact, handover and continuity.',
      d: 'The platform prompts; people decide. When a signal declines or engagement fades, an authorised practitioner or peer worker sees why and chooses whether and how to make contact.',
      li: ['Prompts carry plain-English reasons', 'Handovers are accepted by a named person, with a first-contact window', 'Step-down tiers are proposed by rules and approved by a practitioner'],
      aside: [['Why it matters', 'National safety research identifies the period after discharge as one of heightened risk (<a href="https://sites.manchester.ac.uk/ncish/reports/annual-report-2025/key-findings/" target="_blank" rel="noopener noreferrer">NCISH 2025</a>).'], ['Safeguard', 'No automated decisions about care or access.']] }
  ];
  const wrap = $('#journey'), det = $('#stepDetail');
  steps.forEach((s, i) => {
    const b = document.createElement('button');
    b.className = 'step'; b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'step-' + i;
    b.setAttribute('aria-controls', 'stepDetail');
    b.innerHTML = `<span class="node">${icon(s.icon)}</span><span class="sn">STAGE ${i + 1}</span><span class="st">${s.t}</span><span class="ss">${s.s}</span>`;
    wrap.appendChild(b);
  });
  const render = i => {
    const s = steps[i];
    det.setAttribute('aria-labelledby', 'step-' + i);
    det.innerHTML = `<div><span class="mono small muted">STAGE ${i + 1} OF 5</span><h3 style="margin-top:6px">${s.t}</h3><p>${s.d}</p><ul>${s.li.map(x => `<li>${x}</li>`).join('')}</ul></div>
      <div class="step-aside">${s.aside.map(([h, p]) => `<h4>${h}</h4><p>${p}</p>`).join('')}</div>`;
  };
  const sel = wireTabs($$('.step', wrap), render);
  sel(0, false);
})();

/* ===== DDRCI illustrative chart ===== */
(() => {
  const svg = $('#ddrciChart');
  const L = 44, R = 540, T = 22, B = 236;
  const x = w => L + (w / 52) * (R - L), y = v => B - ((v - 20) / 60) * (B - T);
  const keys = [[0, 40], [8, 46], [14, 52], [18, 46], [21, 42], [25, 47], [30, 53], [39, 58], [44, 55], [48, 55], [52, 59]];
  const interp = w => { for (let k = 0; k < keys.length - 1; k++) { const [a, va] = keys[k], [b, vb] = keys[k + 1]; if (w >= a && w <= b) { const t = (w - a) / (b - a), s = (1 - Math.cos(Math.PI * t)) / 2; return va + (vb - va) * s; } } return keys[keys.length - 1][1]; };
  const pts = []; for (let w = 0; w <= 52; w++) pts.push([w, interp(w) + Math.sin(w * 1.7) * 0.9]);
  const band = w => w <= 39 ? 2.6 : 2.6 + (w - 39) * 0.42;
  // grid
  [20, 40, 60, 80].forEach(v => { svg.appendChild(svgEl('line', { x1: L, x2: R, y1: y(v), y2: y(v), stroke: 'var(--line)' })); svg.appendChild(svgEl('text', { x: L - 8, y: y(v) + 4, 'text-anchor': 'end', class: 'svg-mono' }, v)); });
  // dip highlight
  svg.appendChild(svgEl('rect', { x: x(16), y: T, width: x(24) - x(16), height: B - T, fill: 'var(--amber-bg)', opacity: 0.8 }));
  svg.appendChild(svgEl('text', { x: x(20), y: T + 12, 'text-anchor': 'middle', class: 'svg-mono', style: 'fill:var(--amber)' }, 'DIP BETWEEN REVIEWS'));
  // discharge line
  svg.appendChild(svgEl('line', { x1: x(39), x2: x(39), y1: T, y2: B, stroke: 'var(--ink)', 'stroke-dasharray': '3 4', 'stroke-width': 1.2 }));
  svg.appendChild(svgEl('text', { x: x(39) + 6, y: T + 12, class: 'svg-mono', style: 'fill:var(--ink)' }, 'DISCHARGE'));
  // band
  const up = pts.map(([w, v]) => `${x(w).toFixed(1)},${y(v + band(w)).toFixed(1)}`), lo = pts.slice().reverse().map(([w, v]) => `${x(w).toFixed(1)},${y(v - band(w)).toFixed(1)}`);
  svg.appendChild(svgEl('polygon', { points: up.concat(lo).join(' '), fill: 'var(--teal)', opacity: 0.14 }));
  // continuous line
  svg.appendChild(svgEl('path', { d: 'M' + pts.map(([w, v]) => `${x(w).toFixed(1)} ${y(v).toFixed(1)}`).join(' L'), fill: 'none', stroke: 'var(--teal)', 'stroke-width': 2.4, 'stroke-linejoin': 'round' }));
  // periodic
  const per = [[0, 40, 'ENTRY'], [26, 50, 'REVIEW'], [39, 58, 'EXIT']];
  svg.appendChild(svgEl('path', { d: 'M' + per.map(([w, v]) => `${x(w)} ${y(v)}`).join(' L'), fill: 'none', stroke: 'var(--mh)', 'stroke-width': 1.8, 'stroke-dasharray': '6 5' }));
  per.forEach(([w, v, l]) => { svg.appendChild(svgEl('circle', { cx: x(w), cy: y(v), r: 6, fill: 'var(--surface)', stroke: 'var(--mh)', 'stroke-width': 2.4 })); svg.appendChild(svgEl('text', { x: x(w) + (w === 39 ? -8 : 8), y: y(v) + 20, 'text-anchor': w === 39 ? 'end' : 'start', class: 'svg-mono', style: 'fill:var(--mh)' }, l)); });
  svg.appendChild(svgEl('text', { x: x(46), y: y(51) + 52, 'text-anchor': 'middle', class: 'svg-label' }, 'No periodic score'));
  svg.appendChild(svgEl('text', { x: x(46), y: y(51) + 67, 'text-anchor': 'middle', class: 'svg-label' }, 'after discharge'));
  // x axis
  [0, 3, 6, 9, 12].forEach(m => svg.appendChild(svgEl('text', { x: x(m * 52 / 12), y: B + 18, 'text-anchor': 'middle', class: 'svg-mono' }, 'M' + m)));
  svg.appendChild(svgEl('text', { x: L, y: 12, class: 'svg-mono' }, 'RECOVERY CAPITAL (ILLUSTRATIVE SCALE)'));
  // legend
  const g = svgEl('g', { transform: `translate(${L},${B + 40})` });
  g.appendChild(svgEl('line', { x1: 0, x2: 22, y1: 0, y2: 0, stroke: 'var(--teal)', 'stroke-width': 2.4 }));
  g.appendChild(svgEl('text', { x: 28, y: 4, class: 'svg-label' }, 'Continuous signal with confidence band'));
  g.appendChild(svgEl('line', { x1: 270, x2: 292, y1: 0, y2: 0, stroke: 'var(--mh)', 'stroke-width': 1.8, 'stroke-dasharray': '6 5' }));
  g.appendChild(svgEl('text', { x: 298, y: 4, class: 'svg-label' }, 'Periodic questionnaire'));
  svg.appendChild(g);
})();

/* ===== Innovation cards ===== */
(() => {
  const items = [
    { code: 'I1', t: 'Dynamic Digital Recovery Capital Index (DDRCI)', sum: 'Turns recovery capital from a periodic questionnaire score into a continuously updated signal.',
      p: 'Validated recovery-capital tools are long and used at entry, review and exit, so there is little signal between reviews or after discharge.',
      h: 'A brief validated anchor, about a minute of rotating weekly questions and recorded service events are combined into a per-domain score, a rate of change and a confidence band.',
      v: 'Decline could become visible weeks before a scheduled review. Whether it does is a Phase 1 validation question.',
      g: 'Measures and displays recovery capital. Does not diagnose or predict individual clinical risk.', refs: ['groshkova', 'vilsaint', 'scott'], st: ['concept', 'Concept'] },
    { code: 'I2', t: 'Engagement-decay signal', sum: 'Treats silence as information: fading engagement becomes visible instead of disappearing from reports.',
      p: 'People who disengage are often those most in need of contact, yet in most systems missing data simply means no data.',
      h: 'Response delays, broken check-in streaks, missed appointments and unanswered contacts produce a separate engagement trend and a reach-out prompt with plain-English reason codes.',
      v: 'People drifting away from support become visible to a practitioner or peer worker while there is still time to reconnect.',
      g: 'Prompts human contact only. No automated decisions, and reasons are always shown.', refs: ['brorson'], st: ['concept', 'Concept'] },
    { code: 'I3', t: 'Timed, consented cross-service handover', sum: '“Tell it once”: transitions between services become tracked, accountable processes.',
      p: 'Moves between mental-health and substance-use services, and out of hospital, prison or treatment, are where people are most often lost.',
      h: 'A referral or discharge event assembles a consented handover pack. A named person accepts it and a first-contact window starts. If it passes, the sender and a peer worker are alerted, and the person can see the status.',
      v: 'Fewer lost referrals and no retelling. Measured through referral-to-first-contact time and the share of handovers closed on time.',
      g: 'Clinical content is written by practitioners, not generated. Access follows the person\'s consent.', refs: ['chung', 'merrall', 'ncish'], st: ['concept', 'Concept'] },
    { code: 'I4', t: 'Adaptive step-down aftercare', sum: 'Support reduces gradually as recovery strengthens, and steps back up if it weakens.',
      p: 'Discharge can be a cliff edge: support often stops on a date rather than when the person is ready.',
      h: 'Tiers move from weekly to fortnightly, monthly and quarterly recovery check-ups. Rules based on the DDRCI propose a tier; a practitioner approves. A decline proposes a step-up.',
      v: 'Support matched to need, with staff time directed where the signal suggests it matters most.',
      g: 'Rules-based and practitioner-approved in Phase 1. Any automated tailoring would be reviewed for medical-device status first.', refs: ['dennis'], st: ['concept', 'Concept'] },
    { code: 'I5', t: 'Dynamic consent and the Recovery Passport', sum: 'People control, track and carry their own recovery information across services.',
      p: 'Stigma, fear of misuse and information-governance risk often block sharing of substance-use and mental-health information.',
      h: 'A consent matrix by data type, organisation and purpose, with time-limited grants, one-tap withdrawal, consent receipts and a readable access log. The Recovery Passport, a portable person-held record, follows in Phase 2.',
      v: 'Trust for people in recovery, and a lawful, auditable basis for sharing between organisations.',
      g: 'UK GDPR Article 9 basis documented, a DPIA in each area, and DSPT compliance as requirements.', refs: ['kaye'], st: ['planned', 'Consent Phase 1 · Passport Phase 2'] }
  ];
  const grid = $('#innoGrid');
  items.forEach((it, i) => {
    const art = document.createElement('article'); art.className = 'inno';
    art.innerHTML = `<div class="inno-head"><div class="row"><span class="code">${it.code}</span><span class="chip ${it.st[0]}">${it.st[1]}</span></div><h3>${it.t}</h3><p>${it.sum}</p></div>
      <button type="button" class="inno-toggle" aria-expanded="false" aria-controls="inno-b-${i}">Problem, approach and value ${icon('i-down')}</button>
      <div class="inno-body" id="inno-b-${i}" hidden><dl>
        <div><dt>What problem does it address?</dt><dd>${it.p}</dd></div>
        <div><dt>How is the approach different?</dt><dd>${it.h}</dd></div>
        <div><dt>What value could it create?</dt><dd>${it.v}</dd></div></dl>
        <p class="guard"><b>Guardrail:</b> ${it.g} · Research basis: ${it.refs.map(r => `<a href="${REFS.find(x => x.id === r).u}" target="_blank" rel="noopener noreferrer">${REFS.find(x => x.id === r).short}</a>`).join(', ')}</p></div>`;
    const btn = $('.inno-toggle', art), body = $('.inno-body', art);
    btn.addEventListener('click', () => { const open = btn.getAttribute('aria-expanded') !== 'true'; btn.setAttribute('aria-expanded', String(open)); body.hidden = !open; });
    grid.appendChild(art);
  });
})();

/* ===== Roadmap ===== */
(() => {
  const phases = [
    { n: 'Phase 1', t: 'Core platform: Birmingham', w: 'Discover, build and pilot in one area', chip: ['concept', 'Initial concept'],
      scope: [['Discovery interviews and co-design', 'planned'], ['Consent and identity layer', 'planned'], ['DDRCI v1', 'planned'], ['Practitioner and commissioner views', 'planned'], ['Core continuity workflows: handover, step-down', 'planned'], ['Initial integration with local service systems', 'gated', 'Subject to scoping'], ['Validation against established recovery-capital measures', 'gated', 'Subject to validation'], ['Clinical-safety case, DPIA, DSPT', 'planned']],
      gate: ['The DDRCI shows meaningful change over time (target correlation with an established measure r ≥ 0.6)', 'Engagement after discharge is sustained (target ≥ 60% weekly check-in completion)', 'The commissioner accepts the outcome reporting'],
      note: 'Before the build: structured interviews, pilot scope and success criteria agreed in writing with the first commissioner.' },
    { n: 'Phase 2', t: 'Continuity expansion', w: 'Make it repeatable across areas', chip: ['planned', 'Planned'],
      scope: [['Recovery Passport: portable, person-held record', 'planned'], ['Concord cross-service layer', 'planned'], ['Community recovery assets', 'planned'], ['Peer recovery coordination', 'planned'], ['Cross-service value measurement', 'planned'], ['Further commissioner and provider deployments', 'planned']],
      gate: ['Second and third commissioning areas live', 'Interoperability proven with more than one provider', 'Validation results published with an academic partner'],
      note: 'Named in the founder\'s concept note. Scope depends on what Phase 1 shows.' },
    { n: 'Phase 3', t: 'Advanced intelligence and research', w: 'Only once the evidence allows', chip: ['gated', 'Subject to validation'],
      scope: [['Research into explainable early warning', 'gated', 'Gated'], ['Potential recovery data trust', 'gated', 'Subject to validation'], ['OneGateway layer', 'gated', 'Subject to validation'], ['Programme-level and ICB-wide deployments', 'planned'], ['Expansion across further commissioning areas', 'planned']],
      gate: ['Clinical-safety case for any predictive feature (DCB0129)', 'MHRA medical-device classification decision documented', 'Independent evaluation, multi-area validation and a bias audit complete'],
      note: 'No predictive feature will be released before these gates are passed.' }
  ];
  const tabsWrap = $('#phaseTabs'), panel = $('#phasePanel');
  phases.forEach((p, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'phase-btn'; b.setAttribute('role', 'tab'); b.id = 'ph-' + i; b.setAttribute('aria-controls', 'phasePanel');
    b.innerHTML = `<span class="pn">${p.n}</span><span class="pt">${p.t}</span><span class="pw">${p.w}</span>`;
    tabsWrap.appendChild(b);
  });
  const label = { planned: 'Planned', gated: 'Gated', concept: 'Concept' };
  const render = i => {
    const p = phases[i];
    panel.setAttribute('aria-labelledby', 'ph-' + i);
    panel.innerHTML = `<div class="phase-scope"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><h3>${p.n}: scope</h3><span class="chip ${p.chip[0]}">${p.chip[1]}</span></div>
      <ul class="scope-list">${p.scope.map(([s, c, l]) => `<li><span>${s}</span><span class="chip ${c}">${l || label[c]}</span></li>`).join('')}</ul>
      <p class="small muted" style="margin-top:14px">${p.note}</p></div>
      <div class="gate"><h4>Gate to ${i < 2 ? 'the next phase' : 'any release'}</h4><ul>${p.gate.map(g => `<li>${icon('i-check')}<span>${g}</span></li>`).join('')}</ul><p class="small muted">Targets are planning goals, not results.</p></div>`;
  };
  const sel = wireTabs($$('.phase-btn', tabsWrap), render);
  sel(0, false);
})();

/* ===== Market sizing ===== */
(() => {
  const basis = {
    tam: '<b>TAM</b>: adults in contact with drug and alcohol treatment in England, 2024 to 2025 (OHID). Counts only the English treatment population.',
    sam: '<b>SAM</b>: approximation applying the 74% of new starters reporting a mental-health need to the whole treatment population. An estimate, not a published figure.',
    som: '<b>SOM</b>: Year 3 target of six commissioning areas and about 12,000 active people, roughly 3.6% of the TAM. A planning target only.'
  };
  const layers = $$('.layer'), circles = $$('.circle'), out = $('#basis');
  let unit = 'people';
  const choose = key => {
    layers.forEach(l => l.setAttribute('aria-pressed', String(l.dataset.layer === key)));
    circles.forEach(c => c.style.opacity = c.dataset.layer === key || (key !== 'som' && c.dataset.layer === 'som') ? 1 : 0.45);
    out.innerHTML = basis[key];
  };
  layers.forEach(l => l.addEventListener('click', () => choose(l.dataset.layer)));
  circles.forEach(c => c.addEventListener('click', () => choose(c.dataset.layer)));
  $$('[data-unit]').forEach(b => b.addEventListener('click', () => {
    unit = b.dataset.unit;
    $$('[data-unit]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    $$('.lv').forEach(v => v.textContent = unit === 'people' ? v.dataset.p : v.dataset.v);
  }));
  choose('som');
})();

/* ===== Contact form ===== */
(() => {
  const form = $('#contactForm'), result = $('#formResult'), submit = $('#f-submit');
  const fields = {
    name: { el: $('#f-name'), err: $('#e-name'), test: v => v.trim().length >= 2 || 'Enter your name.' },
    org: { el: $('#f-org'), err: $('#e-org'), test: v => v.trim().length >= 2 || 'Enter your organisation.' },
    email: { el: $('#f-email'), err: $('#e-email'), test: v => !v.trim() ? 'Enter your work email.' : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter an email address in the format name@organisation.org.uk.' },
    interest: { el: $('#f-interest'), err: $('#e-interest'), test: v => !!v || 'Choose an area of interest.' },
    msg: { el: $('#f-msg'), err: $('#e-msg'), test: v => v.trim().length >= 10 || 'Add a short message of at least 10 characters.' }
  };
  const check = f => { const r = f.test(f.el.value); const ok = r === true; f.el.closest('.field').classList.toggle('invalid', !ok); f.el.setAttribute('aria-invalid', String(!ok)); f.err.textContent = ok ? '' : r; return ok; };
  Object.values(fields).forEach(f => { f.el.addEventListener('blur', () => { if (f.el.value) check(f); }); f.el.addEventListener('input', () => { if (f.el.closest('.field').classList.contains('invalid')) check(f); }); });
  const setBusy = busy => { submit.disabled = busy; submit.innerHTML = busy ? '<span class="spinner" aria-hidden="true"></span> Checking' : `Send enquiry ${icon('i-arrow')}`; };
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const bad = Object.values(fields).filter(f => !check(f));
    if (bad.length) { bad[0].el.focus(); return; }
    setBusy(true);
    try {
      if (FORM_ENDPOINT) {
        const data = Object.fromEntries(new FormData(form).entries());
        const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error('Status ' + res.status);
      } else {
        await new Promise(r => setTimeout(r, 700));
      }
      $$('.frow, .field, .warnbox, .form-foot', form).forEach(x => x.hidden = true);
      result.hidden = false; result.focus();
    } catch (err) {
      fields.msg.err.textContent = 'Your enquiry could not be sent. Check your connection and try again.';
    } finally { setBusy(false); }
  });
  $('#formReset').addEventListener('click', () => {
    form.reset(); result.hidden = true;
    $$('.frow, .field, .warnbox, .form-foot', form).forEach(x => x.hidden = false);
    Object.values(fields).forEach(f => { f.el.closest('.field').classList.remove('invalid'); f.el.removeAttribute('aria-invalid'); f.err.textContent = ''; });
    fields.name.el.focus();
  });
  // Preselect interest from links that carry data-interest
  $$('[data-interest]').forEach(a => a.addEventListener('click', () => { fields.interest.el.value = a.dataset.interest; }));
})();
