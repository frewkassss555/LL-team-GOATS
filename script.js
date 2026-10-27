const ROSTER = [
  { nick: '8 | Miles',      name: 'Иван Фролов',       role: 'Star player',  faceit: 10, photo: 'img/players/1.jpg' },
  { nick: 'frewkassss555',  name: 'Феликс Боярский',   role: 'Lurker',       faceit: 10, photo: 'img/players/2.jpg' },
  { nick: 'dioorr',         name: 'Тимофей Вашков',    role: 'Support',      faceit: 6,  photo: 'img/players/3.jpg' },
  { nick: 'Phan',           name: 'Филипп Гуринович',  role: 'Captain',      faceit: 8,  photo: 'img/players/4.jpg' },
  { nick: 'Cub3rr',         name: 'Сергей Астапов',    role: 'Open fragger', faceit: 10, photo: 'img/players/5.jpg' }
];

const TROPHIES = [
  {
    date: '2025-12', name: 'StarLadder Budapest Major 2025', place: '1', prize: 500000, major: true,
    stage: 'Финал', opponent: 'Vitality', score: '2:1',
    maps: ['Nuke 13:10', 'Mirage 9:13', 'Inferno 13:11'],
    story: 'Третий мейджор за два года. На решающей Inferno команда уступала 6:11, после чего забрала семь раундов подряд и закрыла сезон главным трофеем.',
    facts: [
      'Камбэк 6:11 → 13:11 — крупнейший в финалах мейджоров эпохи CS2',
      'MVP турнира — 8 | Miles, рейтинг 1.38 за плей-офф',
      'Phan — первый капитан с тремя титулами мейджора в CS2'
    ]
  },
  {
    date: '2025-08', name: 'IEM Cologne 2025', place: '1', prize: 400000,
    stage: 'Финал', opponent: 'MOUZ', score: '3:1',
    maps: ['Ancient 13:8', 'Anubis 10:13', 'Mirage 13:5', 'Dust II 13:11'],
    story: 'Турнир без единого поражения в группе (5–0). В финале до пяти карт команда отдала MOUZ только Anubis и подняла трофей в LANXESS Arena.',
    facts: [
      'Cub3rr — 38 убийств на Ancient, лучший результат турнира на одной карте',
      'dioorr — 41 помощь флешками, рекорд IEM Cologne',
      'Счёт 13:5 на Mirage — самая крупная карта финала за историю турнира'
    ]
  },
  {
    date: '2025-06', name: 'BLAST.tv Austin Major 2025', place: '1', prize: 500000, major: true,
    stage: 'Финал', opponent: 'FURIA', score: '2:0',
    maps: ['Mirage 13:4', 'Nuke 13:9'],
    story: 'Плей-офф без единой проигранной карты. Финал против FURIA занял 1 час 34 минуты — самый быстрый финал мейджора в CS2.',
    facts: [
      'Ни одной проигранной карты в плей-офф: 6–0',
      'frewkassss555 — 4 выигранных клатча 1v2 за плей-офф',
      'Второй мейджор менее чем за полтора года после основания'
    ]
  },
  {
    date: '2025-02', name: 'IEM Katowice 2025', place: '1', prize: 400000,
    stage: 'Финал', opponent: 'Spirit', score: '3:2',
    maps: ['Dust II 13:11', 'Ancient 7:13', 'Inferno 13:10', 'Mirage 11:13', 'Nuke 16:14'],
    story: 'Самый долгий финал в истории команды: пять карт и овертайм на Nuke. Решающий раунд вытащил 8 | Miles — эйс в последнем раунде овертайма.',
    facts: [
      'Финал длился 5 часов 12 минут',
      'Эйс 8 | Miles в 30-м раунде пятой карты',
      '1.4 млн зрителей на пике трансляции'
    ]
  },
  {
    date: '2024-12', name: 'Perfect World Shanghai Major 2024', place: '2', prize: 170000, major: true,
    stage: 'Финал', opponent: 'Vitality', score: '1:2',
    maps: ['Inferno 13:9', 'Nuke 10:13', 'Mirage 11:13'],
    story: 'Единственный проигранный финал мейджора. Команда взяла первую карту, но Vitality отыгрались на Nuke и Mirage. Реванш случился через год в Будапеште.',
    facts: [
      'Phan отыграл весь плей-офф с температурой 38',
      'Cub3rr — лучший на турнире по первым убийствам в раунде',
      'Mirage проиграна со счётом 11:13 — после 11:7 в пользу команды'
    ]
  },
  {
    date: '2024-11', name: 'BLAST Premier World Final 2024', place: '1', prize: 500000,
    stage: 'Финал', opponent: 'G2', score: '2:1',
    maps: ['Anubis 13:11', 'Mirage 8:13', 'Ancient 13:6'],
    story: 'Финал сезона BLAST в Сингапуре. После поражения на Mirage команда разгромила G2 на Ancient и забрала самый крупный чек года.',
    facts: [
      'Серия из 14 выигранных карт подряд на LAN',
      'dioorr — ни одной смерти в пистолетных раундах финала',
      'frewkassss555 — 3 убийства в спину за один раунд на Anubis'
    ]
  },
  {
    date: '2024-09', name: 'ESL Pro League Season 20', place: '3–4', prize: 80000,
    stage: 'Полуфинал', opponent: 'MOUZ', score: '1:2',
    maps: ['Mirage 13:7', 'Ancient 11:13', 'Nuke 12:16'],
    story: 'Единственный турнир сезона без выхода в финал. Групповой этап команда провела с заменой — Phan пропустил первую неделю из-за экзаменов.',
    facts: [
      'Nuke в полуфинале ушла в овертайм — 12:16',
      'Групповой этап пройден с запасным игроком',
      'Лучшая разница раундов в группе: +41'
    ]
  },
  {
    date: '2024-03', name: 'PGL Major Copenhagen 2024', place: '1', prize: 500000, major: true,
    stage: 'Финал', opponent: 'FaZe', score: '2:1',
    maps: ['Ancient 13:7', 'Nuke 9:13', 'Inferno 13:10'],
    story: 'Первый трофей в истории команды — и сразу мейджор, всего через несколько месяцев после основания. Путь начался с открытой квалификации.',
    facts: [
      'Путь от открытой квалификации до чемпионства',
      '8 | Miles — самый молодой MVP мейджора в CS2',
      'Первая в истории CS2 команда, выигравшая мейджор в год основания'
    ]
  }
];

const BIG_WINS = [
  {
    opponent: 'Vitrus bro', score: '13:0', map: 'Mirage', date: '2025-09',
    event: 'Онлайн-квалификация',
    note: 'Матч закончился за 21 минуту. Соперник не выиграл ни одного раунда, даже пистолетного.'
  },
  {
    opponent: '2_beer_Cool_ezniki', score: '13:0', map: 'Dust II', date: '2026-03',
    event: 'Шоу-матч',
    note: 'Второй «сухарь» в истории команды. 8 | Miles закончил карту с 27 убийствами и 2 смертями.'
  }
];

const VRS_DATE = '24 октября 2026';
const VRS = [
  { team: 'LL team',  region: 'EU', points: 2143, ours: true },
  { team: 'Vitality', region: 'EU', points: 1997 },
  { team: 'MOUZ',     region: 'EU', points: 1916 },
  { team: 'FURIA',    region: 'AM', points: 1899 },
  { team: 'Spirit',   region: 'EU', points: 1892 },
  { team: 'Aurora',   region: 'EU', points: 1848 },
  { team: 'Falcons',  region: 'EU', points: 1819 },
  { team: 'BetBoom',  region: 'EU', points: 1767 },
  { team: 'Legacy',   region: 'AM', points: 1737 },
  { team: 'G2',       region: 'EU', points: 1701 }
];

const MONTHS = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

const SILHOUETTE = `
  <svg class="player__sil" viewBox="0 0 300 400" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
    <path d="M128 98 H172 L198 124 V176 L172 214 H128 L102 176 V124 Z"/>
    <path d="M30 400 L48 300 L112 256 H188 L252 300 L270 400 Z"/>
  </svg>`;

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function money(n) {
  return '$' + n.toLocaleString('en-US');
}

function fmtDate(d) {
  const [y, m] = d.split('-');
  return `${MONTHS[+m - 1]} ${y}`;
}

function faceitBadge(level) {
  const lvl = Math.max(1, Math.min(10, +level));
  const color = lvl === 1 ? '#e8e6e1' : lvl <= 3 ? '#1ce400' : lvl <= 7 ? '#ffc800' : lvl <= 9 ? '#ff6309' : '#fe1f00';
  const track = 32.99;
  return `
    <svg class="faceit" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#1a1a1a"/>
      <circle cx="9" cy="9" r="7" fill="none" stroke="#3a3a3a" stroke-width="1.6"
              stroke-dasharray="${track} 44" transform="rotate(135 9 9)"/>
      <circle cx="9" cy="9" r="7" fill="none" stroke="${color}" stroke-width="1.6"
              stroke-dasharray="${(track * lvl / 10).toFixed(2)} 44" transform="rotate(135 9 9)"/>
      <text x="9" y="11.6" text-anchor="middle" fill="${color}">${lvl}</text>
    </svg>`;
}

function renderLineup() {
  document.getElementById('lineup').innerHTML = ROSTER.map(p => `
    <article class="player">
      <div class="player__photo">
        ${SILHOUETTE}
        ${p.photo ? `<img src="${esc(p.photo)}" alt="${esc(p.nick)}">` : ''}
      </div>
      ${p.nick || p.role ? `
        <div class="player__cap">
          <b>${esc(p.nick)}</b>
          ${p.name ? `<i>${esc(p.name)}</i>` : ''}
          <span>${esc(p.role)}${p.faceit ? `<em title="FACEIT level ${esc(p.faceit)}">${faceitBadge(p.faceit)}FACEIT</em>` : ''}</span>
        </div>` : ''}
    </article>`).join('');

  document.querySelectorAll('.player__photo img').forEach(img => {
    img.addEventListener('error', () => img.remove());
  });
}

function renderStats() {
  const wins = TROPHIES.filter(t => t.place === '1');
  const stats = [
    { value: money(TROPHIES.reduce((s, t) => s + t.prize, 0)), label: 'призовых' },
    { value: wins.length, label: 'трофеев' },
    { value: wins.filter(t => t.major).length, label: 'мейджора' },
    { value: TROPHIES.filter(t => t.place === '1' || t.place === '2').length, label: 'финалов' }
  ];
  document.getElementById('stats').innerHTML = stats.map(s => `
    <div class="stat">
      <b>${esc(s.value)}</b>
      <span>${esc(s.label)}</span>
    </div>`).join('');
}

function renderMajors() {
  document.getElementById('majors').innerHTML = TROPHIES
    .filter(t => t.major && t.place === '1')
    .map(t => `
      <article class="major">
        <span class="major__year" aria-hidden="true">${esc(t.date.slice(0, 4))}</span>
        <p class="major__kind"><i class="mark"></i>Чемпион мейджора</p>
        <h3 class="major__name">${esc(t.name)}</h3>
        <p class="major__prize">${money(t.prize)}</p>
      </article>`).join('');
}

function storyHTML(t) {
  if (!t.story) return '';
  return `
    <div class="result__story">
      <div class="result__final">
        <p class="result__stage">${esc(t.stage)}</p>
        <p class="result__score"><b>LL team</b><span>${esc(t.score)}</span><b>${esc(t.opponent)}</b></p>
        <ul class="result__maps">${t.maps.map(m => `<li>${esc(m)}</li>`).join('')}</ul>
      </div>
      <div class="result__text">
        <p>${esc(t.story)}</p>
        <ul class="result__facts">${t.facts.map(f => `<li>${esc(f)}</li>`).join('')}</ul>
      </div>
    </div>`;
}

function renderResults() {
  document.getElementById('results').innerHTML = TROPHIES.map(t => `
    <details class="result${t.place === '1' ? ' is-win' : ''}">
      <summary>
        <span class="r-date">${fmtDate(t.date)}</span>
        <span class="r-name">${esc(t.name)}</span>
        <span class="r-place">${t.place === '1' ? 'Чемпион' : `${esc(t.place)} место`}</span>
        <span class="r-prize">${money(t.prize)}</span>
        <span class="r-toggle" aria-hidden="true"></span>
      </summary>
      ${storyHTML(t)}
    </details>`).join('');
}

function renderBigWins() {
  document.getElementById('big-wins').innerHTML = BIG_WINS.map(w => {
    const [us, them] = w.score.split(':');
    return `
      <article class="win">
        <p class="win__meta">${esc(w.event)} · ${esc(w.map)} · ${fmtDate(w.date)}</p>
        <div class="win__score">
          <span class="win__team">LL team</span>
          <span class="win__num">${esc(us)}</span>
          <span class="win__sep">:</span>
          <span class="win__num win__num--them">${esc(them)}</span>
          <span class="win__team win__team--them">${esc(w.opponent).replace(/_/g, '_<wbr>')}</span>
        </div>
        <p class="win__note">${esc(w.note)}</p>
      </article>`;
  }).join('');
}

function renderRanking() {
  const max = Math.max(...VRS.map(t => t.points));
  document.getElementById('ranking-note').textContent = `Valve Regional Standings · ${VRS_DATE}`;
  document.getElementById('ranking-list').innerHTML = VRS.map((t, i) => `
    <li class="rank${t.ours ? ' is-ours' : ''}">
      <span class="rank__pos">${String(i + 1).padStart(2, '0')}</span>
      <span class="rank__team">${esc(t.team)}</span>
      <span class="rank__region">${esc(t.region)}</span>
      <span class="rank__bar"><i style="width:${(t.points / max * 100).toFixed(1)}%"></i></span>
      <span class="rank__pts">${t.points.toLocaleString('en-US')}</span>
    </li>`).join('');
}

renderLineup();
renderStats();
renderMajors();
renderResults();
renderRanking();
renderBigWins();
