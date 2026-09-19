const ICONS={
  home:'<path d="M4 11.4 12 4.2l8 7.2"/><path d="M6.2 10v9a1 1 0 0 0 1 1H10v-5.4h4V20h2.8a1 1 0 0 0 1-1v-9"/>',
  church:'<path d="M12 2.4v3.4M10.4 4.1h3.2"/><path d="M12 6.4 8 9.6V20h8V9.6L12 6.4Z"/><path d="M4 20v-7.2L8 10M20 20v-7.2L16 10M4 20h16"/><path d="M12 20v-4.2"/>',
  journey:'<circle cx="12" cy="12" r="8.6"/><path d="m14.9 9.1-2 5.1-5.1 2 2-5.1 5.1-2Z"/>',
  community:'<circle cx="8.6" cy="8.4" r="3.1"/><circle cx="16.6" cy="9.6" r="2.4"/><path d="M2.8 19.6c0-3.2 2.6-5.8 5.8-5.8s5.8 2.6 5.8 5.8"/><path d="M15.4 14c2.4.3 4.2 2.3 4.2 4.8"/>',
  me:'<circle cx="12" cy="8" r="3.8"/><path d="M4.6 20c0-4.1 3.3-6.6 7.4-6.6s7.4 2.5 7.4 6.6"/>',
  search:'<circle cx="11" cy="11" r="6.2"/><path d="m19.8 19.8-4.4-4.4"/>',
  bell:'<path d="M6.2 10.2a5.8 5.8 0 0 1 11.6 0c0 3.9 1.6 5.4 1.6 5.4H4.6s1.6-1.5 1.6-5.4Z"/><path d="M10 18.6a2 2 0 0 0 4 0"/>',
  chevR:'<path d="m9.4 5.8 6.2 6.2-6.2 6.2"/>',
  chevL:'<path d="m14.6 5.8-6.2 6.2 6.2 6.2"/>',
  chevD:'<path d="m6 9.4 6 6 6-6"/>',
  x:'<path d="M6.2 6.2 17.8 17.8M17.8 6.2 6.2 17.8"/>',
  plus:'<path d="M12 5.2v13.6M5.2 12h13.6"/>',
  pin:'<path d="M12 21s-6.8-7.3-6.8-11.6a6.8 6.8 0 0 1 13.6 0C18.8 13.7 12 21 12 21Z"/><circle cx="12" cy="9.2" r="2.3"/>',
  cal:'<rect x="3.8" y="5.6" width="16.4" height="14.6" rx="2.4"/><path d="M3.8 10.2h16.4M8.4 3.4v4M15.6 3.4v4"/>',
  clock:'<circle cx="12" cy="12" r="8.6"/><path d="M12 7.2V12l3.2 1.9"/>',
  share:'<circle cx="6.2" cy="12" r="2.4"/><circle cx="17.8" cy="6.2" r="2.4"/><circle cx="17.8" cy="17.8" r="2.4"/><path d="m8.4 10.8 7.2-3.4M8.4 13.2l7.2 3.4"/>',
  msg:'<path d="M4.2 5.4h15.6v11.2H9.6L4.2 20.4V5.4Z"/><path d="M8.4 9.4h7.2M8.4 12.6h4.8"/>',
  send:'<path d="M4.4 11.8 19.6 4.4l-6.6 15.2-2.6-6-6-1.8Z"/>',
  check:'<path d="m5.4 12.6 4.4 4.4 8.8-9.6"/>',
  shield:'<path d="M12 3.2 19 6v6c0 4.4-3 7.4-7 8.8-4-1.4-7-4.4-7-8.8V6l7-2.8Z"/><path d="m9.2 11.8 2 2 3.6-3.8"/>',
  play:'<path d="M8.6 5.4 18.4 12l-9.8 6.6V5.4Z"/>',
  settings:'<circle cx="12" cy="12" r="3.2"/><path d="M19.1 14.6a1.6 1.6 0 0 0 .32 1.77l.06.06a1.9 1.9 0 1 1-2.69 2.69l-.06-.06a1.6 1.6 0 0 0-1.77-.32 1.6 1.6 0 0 0-.97 1.47v.17a1.9 1.9 0 1 1-3.8 0v-.09a1.6 1.6 0 0 0-1.03-1.46 1.6 1.6 0 0 0-1.77.32l-.06.06a1.9 1.9 0 1 1-2.69-2.69l.06-.06a1.6 1.6 0 0 0 .32-1.77 1.6 1.6 0 0 0-1.47-.97H3.3a1.9 1.9 0 1 1 0-3.8h.09a1.6 1.6 0 0 0 1.46-1.03 1.6 1.6 0 0 0-.32-1.77l-.06-.06a1.9 1.9 0 1 1 2.69-2.69l.06.06a1.6 1.6 0 0 0 1.77.32h.08a1.6 1.6 0 0 0 .97-1.47V3.3a1.9 1.9 0 1 1 3.8 0v.09a1.6 1.6 0 0 0 .97 1.47 1.6 1.6 0 0 0 1.77-.32l.06-.06a1.9 1.9 0 1 1 2.69 2.69l-.06.06a1.6 1.6 0 0 0-.32 1.77v.08a1.6 1.6 0 0 0 1.47.97h.17a1.9 1.9 0 1 1 0 3.8h-.09a1.6 1.6 0 0 0-1.47.97Z"/>',
  globe:'<circle cx="12" cy="12" r="8.6"/><path d="M3.4 12h17.2"/><path d="M12 3.4c2.6 3 2.6 14.2 0 17.2M12 3.4c-2.6 3-2.6 14.2 0 17.2"/>',
  moon:'<path d="M20 14.6A8.6 8.6 0 1 1 9.4 4a7 7 0 0 0 10.6 10.6Z"/>',
  sun:'<circle cx="12" cy="12" r="4.2"/><path d="M12 3.4v2M12 18.6v2M3.4 12h2M18.6 12h2M5.7 5.7l1.4 1.4M16.9 16.9l1.4 1.4M5.7 18.3l1.4-1.4M16.9 7.1l1.4-1.4"/>',
  lock:'<rect x="5" y="10.6" width="14" height="9.4" rx="2.2"/><path d="M8.2 10.6V7.4a3.8 3.8 0 0 1 7.6 0v3.2"/>',
  edit:'<path d="M4.2 19.8h4.2L19 9.2 14.8 5 4.2 15.6v4.2Z"/><path d="m13.4 6.4 4.2 4.2"/>',
  gift:'<rect x="4" y="9.4" width="16" height="10.6" rx="1.8"/><path d="M3.4 9.4h17.2M12 9.4V20"/><path d="M12 9.4c-1.4-3.6-5.6-4-5.6-1.6S9.6 9.4 12 9.4Zm0 0c1.4-3.6 5.6-4 5.6-1.6S14.4 9.4 12 9.4Z"/>',
  star:'<path d="m12 3.4 2.6 5.6 6 .6-4.5 4 1.3 6-5.4-3.1L6.6 19.6l1.3-6-4.5-4 6-.6L12 3.4Z"/>',
  arrowL:'<path d="M19.4 12H4.6M10.6 5.8 4.4 12l6.2 6.2"/>',
  mail:'<rect x="3.4" y="5.4" width="17.2" height="13.2" rx="2.2"/><path d="m4 6.6 8 6.4 8-6.4"/>',
  phone:'<path d="M6 3.6h2.6l1.4 4-2 1.4c.9 2.4 2.6 4.1 5 5l1.4-2 4 1.4V16c0 1.3-1.1 2.4-2.4 2.4C9.4 18.4 5.6 14.6 5.6 6 5.6 4.7 4.7 3.6 6 3.6Z"/>',
  apple:'<path d="M15.8 8.6c-1.2-1.4-3-1.2-3.6-1.2s-2.2-.2-3.5 1.2C7 10.2 7.4 14.2 9.7 17.2c.8 1.1 1.6 1.7 2.4 1.7s1.3-.5 2.4-.5 1.4.5 2.3.5c.9 0 1.7-.8 2.4-1.9.4-.7.8-1.4 1-2-2.6-1-3-4.6-.7-6.3-.9-.9-2-1-2.7-1Z"/><path d="M14.2 4.6c.5-.7 1.3-1.1 2.1-1.1.1.9-.2 1.8-.8 2.5-.6.7-1.4 1.1-2.2 1-.1-.9.3-1.7.9-2.4Z"/>',
  sparkle:'<path d="m12 3.2 1.5 4.3 4.3 1.5-4.3 1.5L12 14.8l-1.5-4.3L6.2 9l4.3-1.5L12 3.2Z"/><path d="m18.4 14.4.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"/>',
  book:'<path d="M12 6.4C10.2 5 7.6 4.4 4.6 4.4v13.2c3 0 5.6.6 7.4 2M12 6.4c1.8-1.4 4.4-2 7.4-2v13.2c-3 0-5.6.6-7.4 2M12 6.4v13.2"/>',
  music:'<circle cx="7" cy="17.6" r="2.6"/><circle cx="17.4" cy="15.8" r="2.6"/><path d="M9.6 17.6V6.6L20 4.4v11.4"/>',
  bag:'<path d="M6 8.4h12l1 11.4H5L6 8.4Z"/><path d="M9.2 8.4V6.6a2.8 2.8 0 0 1 5.6 0v1.8"/>',
  news:'<rect x="3.6" y="5" width="16.8" height="14" rx="1.8"/><path d="M7.4 9h9.2M7.4 12.2h9.2M7.4 15.4h5.6"/>',
  upload:'<path d="M12 16.4V5.6M8.2 9.4 12 5.6l3.8 3.8"/><path d="M4.6 19.4h14.8"/>',
  users:'<circle cx="9.4" cy="8.2" r="3.2"/><path d="M3.4 19.4c0-3.3 2.7-5.6 6-5.6s6 2.3 6 5.6"/><path d="M16 5.4a3 3 0 0 1 0 5.8M17.4 13.8c2 .5 3.2 2.2 3.2 4.2"/>',
  radio:'<circle cx="12" cy="12" r="2.4"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 16.2a6 6 0 0 0 0-8.4M4.8 4.8a10 10 0 0 0 0 14.4M19.2 19.2a10 10 0 0 0 0-14.4"/>',
  grid:'<rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/>',
  list:'<path d="M8.4 6.4h11.2M8.4 12h11.2M8.4 17.6h11.2M4.4 6.4h.02M4.4 12h.02M4.4 17.6h.02"/>',
  trend:'<path d="m3.8 15.6 5-5 3.4 3.4 6.4-6.8"/><path d="M14.8 7.2h4.2v4.2"/>',
  file:'<path d="M13.4 3.8H6.6v16.4h10.8V7.8l-4-4Z"/><path d="M13.4 3.8v4h4M9.2 12.6h5.6M9.2 15.8h5.6"/>',
  hands:'<path d="M9.6 12.4V6.2a1.6 1.6 0 0 1 3.2 0v5.4"/><path d="M12.8 11.6V7.6a1.6 1.6 0 0 1 3.2 0v6.8c0 3.2-2 5.6-5.2 5.6s-5.2-2.2-5.2-5.4V9.4a1.5 1.5 0 0 1 3 0v3"/>',
  filter:'<path d="M4.2 5.4h15.6l-6 7.2v6.2l-3.6 1.8v-8L4.2 5.4Z"/>',
  eye:'<path d="M2.6 12S6 6.4 12 6.4 21.4 12 21.4 12 18 17.6 12 17.6 2.6 12 2.6 12Z"/><circle cx="12" cy="12" r="2.8"/>',
  logout:'<path d="M9.6 20H5.4V4h4.2"/><path d="M15.6 15.6 19.6 12l-4-3.6M19 12H9.6"/>',
  mic:'<rect x="9.2" y="3.2" width="5.6" height="10.4" rx="2.8"/><path d="M5.6 11.6a6.4 6.4 0 0 0 12.8 0M12 18v3"/>'
};
function ico(name,size,cls){return '<svg class="'+(cls||'')+'" width="'+(size||22)+'" height="'+(size||22)+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICONS[name]||'')+'</svg>';}

const REACTIONS=[{k:'amen',e:'\u{1F64F}',l:'Amen'},{k:'bless',e:'✝️',l:'Bless'},{k:'peace',e:'\u{1F54A}️',l:'Peace'},{k:'love',e:'❤️',l:'Love'},{k:'fire',e:'\u{1F525}',l:'Spirit'}];
const LANGS=['English','Tamil','Malayalam','Telugu','Hindi','Kannada','Marathi','Bengali'];
const COUNTRIES=['India','United Arab Emirates','Singapore','Malaysia','Sri Lanka','Nepal','United States','United Kingdom','Canada','Australia','New Zealand','Germany','Kenya','Nigeria','South Africa','Qatar','Saudi Arabia','Kuwait','Oman','Bahrain','Other'];
const DIAL_CODES=['+91','+971','+65','+60','+94','+977','+1','+44','+61','+64','+49','+254','+234','+27','+974','+966','+965','+968','+973'];
const GENDERS=['Female','Male','Prefer not to say'];
/* The personal goals offered at the end of onboarding. Plan goals map onto a reading plan. */
const GOALS=[
  {k:'rp1',icon:'book',t:'The Bible in a year',d:'Genesis to Revelation, about 15 minutes a day',plan:'rp1'},
  {k:'rp2',icon:'music',t:'Psalms in 30 days',d:'Five psalms a day for a month',plan:'rp2'},
  {k:'rp3',icon:'star',t:'The Gospels in 50 days',d:'Matthew, Mark, Luke and John, end to end',plan:'rp3'},
  {k:'church',icon:'church',t:'Connect with my church',d:'Services, events and the people I worship with'},
  {k:'journal',icon:'edit',t:'Journal my spiritual journey',d:'Private notes, prayers and answered prayers'}
];
/* Every church hands its members an invite code. Codes are matched ignoring case, spaces and dashes. */
const INVITE_CODES={ch1:'GRACE-7291',ch2:'BETHEL-3304',ch3:'MARTHOMA-1876',ch4:'NEWLIFE-6112',ch5:'HOPE-2210',ch6:'EMMANUEL-1994'};
function normCode(s){return String(s||'').toUpperCase().replace(/[^A-Z0-9]/g,'');}
function churchByInvite(code){const n=normCode(code);if(n.length<4)return null;return state.data.churches.find(function(c){return c.inviteCode&&normCode(c.inviteCode)===n;})||null;}
function makeInviteCode(name){const w=String(name||'CHURCH').toUpperCase().replace(/[^A-Z]/g,'').slice(0,8)||'CHURCH';return w+'-'+String(1000+Math.floor(Math.random()*9000));}
const VERSES=[
  {r:'John 3:16',t:'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.'},
  {r:'Genesis 1:1',t:'In the beginning God created the heaven and the earth.'},
  {r:'Matthew 6:9',t:'After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name.'},
  {r:'Ephesians 2:8',t:'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.'},
  {r:'John 1:1',t:'In the beginning was the Word, and the Word was with God, and the Word was God.'},
  {r:'1 Corinthians 13:4',t:'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up.'},
  {r:'Psalm 46:10',t:'Be still, and know that I am God.'},
  {r:'Isaiah 40:31',t:'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary.'},
  {r:'Psalm 119:105',t:'Thy word is a lamp unto my feet, and a light unto my path.'},
  {r:'Matthew 11:28',t:'Come unto me, all ye that labour and are heavy laden, and I will give you rest.'},
  {r:'Joshua 1:9',t:'Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.'},
  {r:'Philippians 4:6',t:'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.'},
  {r:'Psalm 23:1',t:'The LORD is my shepherd; I shall not want.'},
  {r:'John 14:27',t:'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you.'},
  {r:'Proverbs 3:5',t:'Trust in the LORD with all thine heart; and lean not unto thine own understanding.'},
  {r:'Lamentations 3:22',t:'It is of the LORD’s mercies that we are not consumed, because his compassions fail not.'},
  {r:'2 Corinthians 12:9',t:'My grace is sufficient for thee: for my strength is made perfect in weakness.'},
  {r:'Romans 8:28',t:'And we know that all things work together for good to them that love God.'}
];
const GRADS=[
  ['#D9A95E','#8A5E28'],['#C98A5A','#7A4429'],['#B9925C','#63431F'],['#CE9A78','#8A4A3C'],
  ['#A88FA6','#5A4361'],['#9BA986','#4C5C3A'],['#8FA3B5','#3E5061'],['#D8B074','#96521F']
];
function grad(seed){const g=GRADS[Math.abs(hash(seed))%GRADS.length];return 'linear-gradient(135deg,'+g[0]+','+g[1]+')';}
/* ---------- church logos ----------
   Every church carries its own mark. Until a church uploads a logo of its own it is given one
   of the emblems below; ch1..ch6 are pinned to different designs and colours so no two seeded
   churches ever look alike. The photographs in PHOTO_OF stay what they were — covers and
   gallery art, not identity. */
const CHURCH_EMBLEMS=[
  {k:'arch',c:['#D9A95E','#8A5E28'],d:'M12 2.4c-3.7 0-6.7 3-6.7 6.7v10.6c0 .7.5 1.2 1.2 1.2h3.2v-6.1a2.3 2.3 0 0 1 4.6 0v6.1h3.2c.7 0 1.2-.5 1.2-1.2V9.1c0-3.7-3-6.7-6.7-6.7Zm.9 3.1v1.3h1.3v1.7h-1.3v2.4h-1.8V8.5H9.8V6.8h1.3V5.5h1.8Z'},
  {k:'flame',c:['#E08A44','#A23A22'],d:'M12 2.2c.6 3 2 4.6 3.6 6.2 1.6 1.6 2.8 3.3 2.8 5.7A6.4 6.4 0 0 1 5.6 14c0-1.9.8-3.4 2-4.8.2 1.2.7 2 1.6 2.5-.3-3.6.7-6.7 2.8-9.5Zm0 10.1c-1.1 1.3-1.8 2.3-1.8 3.5a1.8 1.8 0 0 0 3.6 0c0-1.2-.7-2.2-1.8-3.5Z'},
  {k:'cross',c:['#9C7BA8','#4E3660'],d:'M10.2 2.6h3.6v5.1h5.1v3.6h-5.1v10.1h-3.6V11.3H5.1V7.7h5.1z'},
  {k:'dove',c:['#8FA87A','#425A35'],d:'M20.4 4.9c-2.8.4-4.8 1.9-6.6 3.9-2 2.2-4.2 3.3-7 3.2-.7 0-1.1.7-.7 1.3l1.6 2.4-1.9 2.5c-.4.6 0 1.4.8 1.3 4.9-.6 8.6-2.6 11.2-6.2 1.8-2.4 2.9-5.2 3.4-8.1.1-.2-.4-.4-.8-.3ZM17.9 7a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z'},
  {k:'anchor',c:['#7595AE','#33506A'],d:'M12 2.3a2.7 2.7 0 0 0-1 5.2v1.7H8.2v2.2H11v6.2a5.3 5.3 0 0 1-3.9-4.1h1.5L5.4 10 2.2 13.5h1.6A8.3 8.3 0 0 0 12 21.7a8.3 8.3 0 0 0 8.2-8.2h1.6L18.6 10l-3.2 3.5h1.5A5.3 5.3 0 0 1 13 17.6v-6.2h2.8V9.2H13V7.5a2.7 2.7 0 0 0-1-5.2Zm0 1.9a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z'},
  {k:'book',c:['#B5564C','#6E2A2A'],d:'M3.2 5.1c2.7-1 5.4-1.1 8 .1v13.5c-2.6-1.2-5.3-1.1-8-.1V5.1Zm9.6.1c2.6-1.2 5.3-1.1 8-.1v13.5c-2.7-1-5.4-.9-8 .1V5.2Z'},
  {k:'chalice',c:['#C09340','#6D4310'],d:'M6.2 3h11.6l-.6 4.6a5.7 5.7 0 0 1-4.3 4.8v4.2h3.4v2.4H7.7v-2.4h3.4v-4.2A5.7 5.7 0 0 1 6.8 7.6L6.2 3Zm2.3 2.4.3 1.9a3.3 3.3 0 0 0 6.4 0l.3-1.9H8.5Z'},
  {k:'star',c:['#5E9A9B','#23565C'],d:'m12 2.3 2.6 6.4 6.9.5-5.3 4.5 1.7 6.7L12 16.8l-5.9 3.6 1.7-6.7-5.3-4.5 6.9-.5z'}
];
/* Seeded churches are pinned so the six in the directory never repeat a mark. */
const EMBLEM_OF={ch1:0,ch2:1,ch3:2,ch4:3,ch5:4,ch6:5};
function emblemFor(id){
  const i=EMBLEM_OF[id];
  return CHURCH_EMBLEMS[i!=null?i:Math.abs(hash(String(id)))%CHURCH_EMBLEMS.length];
}
/* The church's mark at any size. Pass the church object (or just its id). */
function churchLogo(c,size,style){
  const o=(c&&typeof c==='object')?c:(churchById(c)||{id:c,name:''});
  const px=size||44, r=Math.max(8,Math.round(px*0.29)), e=emblemFor(o.id);
  let extra=String(style||'').trim();
  if(extra&&extra.slice(-1)!==';')extra+=';';
  const base='width:'+px+'px;height:'+px+'px;border-radius:'+r+'px;'+extra;
  if(o.logo)return '<span class="ch-logo" style="'+base+'background:#282828 url('+esc(o.logo)+') center/cover" role="img" aria-label="'+esc(o.name||'Church')+' logo"></span>';
  return '<span class="ch-logo" style="'+base+'background:linear-gradient(140deg,'+e.c[0]+','+e.c[1]+')" role="img" aria-label="'+esc(o.name||'Church')+' logo">'
    +'<svg viewBox="0 0 24 24" width="'+Math.round(px*0.56)+'" height="'+Math.round(px*0.56)+'" fill="#FFFFFF" aria-hidden="true"><path d="'+e.d+'"/></svg></span>';
}
function hash(s){s=String(s);let h=0;for(let i=0;i<s.length;i++){h=(h<<5)-h+s.charCodeAt(i);h|=0;}return h;}
function coverArt(seed){
  /* hues stay inside the warm quarter so every cover reads as the same light */
  const h1=18+Math.abs(hash(seed))%46, h2=(h1+22)%360, h3=(h1+330)%360;
  return '<div class="cover-art" style="background:'
    +'radial-gradient(60% 80% at 18% 22%,hsla('+h1+',72%,62%,.55),transparent 62%),'
    +'radial-gradient(52% 70% at 82% 30%,hsla('+h2+',68%,58%,.45),transparent 64%),'
    +'radial-gradient(64% 90% at 60% 96%,hsla('+h3+',62%,50%,.42),transparent 66%),'
    +'linear-gradient(150deg,#3A2A19,#1C130C)"></div>'
    +'<div class="cover-art aurora" style="inset:-30% -10% auto -10%;height:280px"></div>'
    +'<svg class="glasspane" viewBox="0 0 400 150" preserveAspectRatio="none" aria-hidden="true">'
    +'<g opacity=".3"><path d="M0 150 L60 40 L118 150Z" fill="hsla('+h1+',80%,70%,.5)"/>'
    +'<path d="M108 150 L168 18 L228 150Z" fill="hsla('+h2+',80%,72%,.35)"/>'
    +'<path d="M218 150 L282 52 L344 150Z" fill="hsla('+h3+',80%,70%,.4)"/>'
    +'<path d="M330 150 L390 70 L400 150Z" fill="hsla('+h1+',70%,66%,.3)"/>'
    +'<path d="M0 150h400" stroke="rgba(255,255,255,.16)" stroke-width="1"/></g></svg>';
}
/* ---------- scene artwork ----------
   Composed illustrations in the stained-glass language of the design system, so a post can
   carry a picture before a church has uploaded a real photograph. Deterministic per seed,
   and deliberately dark-toned so they read the same way in both themes, as a photo would. */
function sceneBase(id,a,b){
  return '<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1">'
    +'<stop offset="0" stop-color="'+a+'"/><stop offset="1" stop-color="'+b+'"/></linearGradient></defs>'
    +'<rect width="400" height="225" fill="url(#'+id+')"/>';
}
function hsl(h,s,l,a){return 'hsla('+((h%360)+360)%360+','+s+'%,'+l+'%,'+a+')';}
const SCENES={
  /* arched windows with stained panes and light pooling on the floor */
  arches:function(H,id){
    let s=sceneBase(id,'#2A1D12','#150E08');
    const xs=[36,170,304];
    s+='<defs>'+xs.map(function(x,i){
      return '<clipPath id="'+id+'c'+i+'"><path d="M'+x+' 186V88a30 30 0 0 1 60 0v98Z"/></clipPath>';}).join('')+'</defs>';
    xs.forEach(function(x,i){
      const h=H+i*54;
      s+='<polygon points="'+(x+4)+',92 '+(x-26)+',200 '+(x+86)+',200 '+(x+56)+',92" fill="'+hsl(46,80,70,.07)+'"/>';
      s+='<g clip-path="url(#'+id+'c'+i+')">'
        +'<rect x="'+x+'" y="56" width="60" height="130" fill="'+hsl(h,54,52,.42)+'"/>'
        +'<rect x="'+x+'" y="96" width="60" height="34" fill="'+hsl(h+40,58,58,.32)+'"/>'
        +'<rect x="'+x+'" y="150" width="60" height="36" fill="'+hsl(h+190,48,46,.3)+'"/>'
        +'<circle cx="'+(x+30)+'" cy="86" r="15" fill="'+hsl(46,88,72,.34)+'"/>'
        +'<path d="M'+(x+30)+' 56v130M'+x+' 130h60M'+x+' 96h60" stroke="rgba(255,255,255,.22)" stroke-width="1.4"/></g>';
      s+='<path d="M'+x+' 186V88a30 30 0 0 1 60 0v98" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="1.6"/>';
      s+='<ellipse cx="'+(x+30)+'" cy="199" rx="46" ry="9" fill="'+hsl(46,84,70,.16)+'"/>';
    });
    s+='<path d="M0 186h400" stroke="rgba(255,255,255,.12)" stroke-width="1.4"/>';
    s+='<rect y="186" width="400" height="39" fill="rgba(4,7,20,.55)"/>';
    return s;
  },
  /* volumetric light through a high rose window */
  rays:function(H,id){
    let s=sceneBase(id,'#2E1F12','#160E07');
    s+='<g opacity=".5">'+[0,1,2,3,4].map(function(i){
      return '<polygon points="300,10 320,4 '+(150-i*46)+',225 '+(96-i*46)+',225" fill="'+hsl(46,84,72,.09)+'"/>';}).join('')+'</g>';
    s+='<circle cx="308" cy="52" r="42" fill="'+hsl(H,70,54,.42)+'"/>';
    s+='<circle cx="308" cy="52" r="42" fill="none" stroke="rgba(255,255,255,.24)" stroke-width="1.6"/>';
    s+='<circle cx="308" cy="52" r="19" fill="'+hsl(46,88,74,.5)+'"/>';
    for(let i=0;i<8;i++){const a=i*Math.PI/4;
      s+='<path d="M308 52L'+(308+Math.cos(a)*42).toFixed(1)+' '+(52+Math.sin(a)*42).toFixed(1)+'" stroke="rgba(255,255,255,.22)" stroke-width="1.3"/>';}
    s+='<path d="M0 196h400" stroke="rgba(255,255,255,.1)" stroke-width="1.4"/>';
    s+='<rect y="196" width="400" height="29" fill="rgba(4,7,20,.5)"/>';
    return s;
  },
  /* still water at first light — baptism in the backwaters */
  water:function(H,id){
    let s=sceneBase(id,'#33230F','#1A1109');
    s+='<circle cx="296" cy="96" r="24" fill="'+hsl(38,88,70,.46)+'"/>';
    s+='<path d="M0 112c34-14 58 6 92-2s52-16 88-8 62 14 106 2 78-16 114-4V112Z" fill="'+hsl(205,46,24,.9)+'"/>';
    s+='<rect y="120" width="400" height="105" fill="'+hsl(212,52,17,.95)+'"/>';
    s+=[0,1,2,3,4,5].map(function(i){
      return '<path d="M'+(-20+i*74)+' '+(136+i*14)+'h'+(66+i*10)+'" stroke="'+hsl(46,80,72,(0.2-i*0.026).toFixed(3))+'" stroke-width="'+(2.4-i*0.2).toFixed(1)+'" stroke-linecap="round"/>';}).join('');
    s+=[0,1,2].map(function(i){
      return '<ellipse cx="'+(292-i*16)+'" cy="'+(140+i*22)+'" rx="'+(38+i*24)+'" ry="'+(5+i*3)+'" fill="none" stroke="'+hsl(46,84,74,(0.22-i*0.06).toFixed(2))+'" stroke-width="1.2"/>';}).join('');
    s+='<path d="M0 112c18-10 26-2 40-10s22 2 34-6 26 4 40-8v-4H0Z" fill="rgba(4,7,20,.7)"/>';
    return s;
  },
  /* the road out to the village congregations */
  road:function(H,id){
    let s=sceneBase(id,'#312012','#180F09');
    s+='<circle cx="118" cy="86" r="20" fill="'+hsl(30,84,66,.4)+'"/>';
    s+='<path d="M0 134c56-22 96 10 148-4s94-24 140-6 78 10 112-2v103H0Z" fill="'+hsl(232,40,19,.95)+'"/>';
    s+='<path d="M0 158c62-16 104 12 156 0s96-18 144-4 66 8 100-2v73H0Z" fill="'+hsl(240,44,13,.95)+'"/>';
    s+='<polygon points="186,150 214,150 306,225 88,225" fill="'+hsl(34,26,40,.5)+'"/>';
    s+=[0,1,2,3].map(function(i){const y=164+i*18+i*i*2.2,w=3+i*2.6;
      return '<rect x="'+(200-w/2)+'" y="'+y+'" width="'+w+'" height="'+(5+i*2.4)+'" rx="1" fill="'+hsl(46,84,74,.4)+'"/>';}).join('');
    s+='<path d="M56 150v-26M344 152v-30" stroke="rgba(255,255,255,.18)" stroke-width="1.6"/>';
    return s;
  },
  /* a city that never stops */
  city:function(H,id){
    let s=sceneBase(id,'#281B10','#130C07');
    s+='<circle cx="332" cy="44" r="15" fill="'+hsl(46,60,82,.5)+'"/>';
    let bars='',wins='';
    const hs=[64,96,48,120,80,140,58,104,74,132,52,88];
    hs.forEach(function(hh,i){
      const x=i*34+2,w=28,y=225-hh;
      bars+='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+hh+'" fill="'+hsl(H+i*7,44,(13+(i%3)*4),.96)+'"/>';
      for(let r=0;r<Math.floor(hh/22);r++)for(let c=0;c<3;c++){
        if((i*7+r*3+c)%4===0)continue;
        wins+='<rect x="'+(x+5+c*8)+'" y="'+(y+10+r*22)+'" width="4" height="7" fill="'+hsl(44,86,70,((i+r+c)%3===0?.5:.26))+'"/>';
      }
    });
    s+=bars+wins;
    s+='<rect y="214" width="400" height="11" fill="rgba(4,7,20,.6)"/>';
    return s;
  },
  /* a congregation that meets under tarpaulin */
  canopy:function(H,id){
    let s=sceneBase(id,'#2C1E13','#150E08');
    s+=[[42,28],[120,16],[210,34],[292,20],[350,40],[78,52],[256,12],[330,58]].map(function(p){
      return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="1.4" fill="rgba(255,255,255,.5)"/>';}).join('');
    s+='<polygon points="20,150 118,86 216,150" fill="'+hsl(H,46,42,.85)+'"/>';
    s+='<polygon points="176,152 268,96 360,152" fill="'+hsl(H+30,44,34,.85)+'"/>';
    s+='<path d="M20 150 118 86 216 150M176 152 268 96 360 152" fill="none" stroke="rgba(255,255,255,.24)" stroke-width="1.4"/>';
    s+='<path d="M118 86v-14M268 96v-12M20 150l-16 30M216 150l14 30M360 152l14 28M176 152l-14 28" stroke="rgba(255,255,255,.2)" stroke-width="1.2"/>';
    s+='<ellipse cx="118" cy="162" rx="70" ry="10" fill="'+hsl(46,84,70,.14)+'"/>';
    s+='<ellipse cx="268" cy="168" rx="66" ry="9" fill="'+hsl(46,84,70,.12)+'"/>';
    s+='<rect y="180" width="400" height="45" fill="rgba(4,7,20,.5)"/>';
    s+='<path d="M0 180h400" stroke="rgba(255,255,255,.12)" stroke-width="1.3"/>';
    return s;
  },
  /* stage light for a night of worship */
  stage:function(H,id){
    let s=sceneBase(id,'#2A1A14','#140B08');
    s+=[0,1,2,3,4].map(function(i){const x=60+i*70;
      return '<polygon points="'+x+',34 '+(x+12)+',34 '+(x+62)+',210 '+(x-50)+',210" fill="'+hsl(H+i*30,60,62,.14)+'"/>';}).join('');
    s+='<rect y="24" width="400" height="7" fill="rgba(255,255,255,.14)"/>';
    s+=[0,1,2,3,4].map(function(i){const x=60+i*70;
      return '<circle cx="'+(x+6)+'" cy="34" r="6" fill="'+hsl(H+i*30,70,68,.9)+'"/>';}).join('');
    s+='<ellipse cx="200" cy="208" rx="190" ry="26" fill="'+hsl(46,84,70,.12)+'"/>';
    s+='<rect y="196" width="400" height="29" fill="rgba(4,7,20,.62)"/>';
    s+='<path d="M0 196h400" stroke="rgba(255,255,255,.16)" stroke-width="1.4"/>';
    return s;
  },
  /* a lamp unto my feet */
  lamp:function(H,id){
    let s=sceneBase(id,'#241A10','#110B06');
    s+='<circle cx="200" cy="92" r="76" fill="'+hsl(44,86,70,.12)+'"/>';
    s+='<circle cx="200" cy="92" r="42" fill="'+hsl(44,88,72,.2)+'"/>';
    s+='<path d="M200 0v56" stroke="rgba(255,255,255,.3)" stroke-width="1.3"/>';
    s+='<path d="M180 56h40l12 26a24 24 0 0 1-64 0Z" fill="'+hsl(H,52,40,.95)+'" stroke="rgba(255,255,255,.28)" stroke-width="1.3"/>';
    s+='<circle cx="200" cy="86" r="8" fill="'+hsl(46,92,78,.95)+'"/>';
    s+='<path d="M108 186c34-18 62-18 92-6 30-12 58-12 92 6-34 10-62 10-92 2-30 8-58 8-92-2Z" fill="'+hsl(H+20,30,74,.9)+'" stroke="rgba(255,255,255,.3)" stroke-width="1.2"/>';
    s+='<path d="M200 180v6" stroke="rgba(20,26,58,.6)" stroke-width="1.4"/>';
    s+=[0,1,2,3].map(function(i){
      return '<path d="M'+(126+i*6)+' '+(176-i*5)+'h54M'+(220)+' '+(176-i*5)+'h54" stroke="rgba(20,26,58,.35)" stroke-width="1.1"/>';}).join('');
    return s;
  },
  /* garlands for a wedding, a baptism, an anniversary */
  festival:function(H,id){
    let s=sceneBase(id,'#301D16','#170D09');
    s+=[26,68].map(function(y,r){
      return '<path d="M-10 '+y+'Q100 '+(y+44)+' 200 '+y+'T410 '+y+'" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="1.3"/>';}).join('');
    s+=[0,1,2,3,4,5,6,7].map(function(i){
      const x=14+i*54,y=26+Math.sin(i/7*Math.PI)*40;
      return '<g><path d="M'+x+' '+y.toFixed(1)+'v14" stroke="rgba(255,255,255,.28)" stroke-width="1.1"/>'
        +'<circle cx="'+x+'" cy="'+(y+24).toFixed(1)+'" r="10" fill="'+hsl(H+i*28,62,60,.75)+'"/>'
        +'<circle cx="'+x+'" cy="'+(y+24).toFixed(1)+'" r="10" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="1"/>'
        +'<circle cx="'+x+'" cy="'+(y+24).toFixed(1)+'" r="4" fill="'+hsl(46,92,80,.9)+'"/></g>';}).join('');
    s+=[0,1,2,3,4,5].map(function(i){
      const x=30+i*66,y=100+Math.sin(i*1.7)*40;
      return '<path d="M'+x+' '+(y+70).toFixed(1)+'v22" stroke="rgba(255,255,255,.2)" stroke-width="1.1"/>'
        +'<circle cx="'+x+'" cy="'+(y+96).toFixed(1)+'" r="7" fill="'+hsl(H+i*36+20,60,58,.6)+'"/>';}).join('');
    s+='<rect y="204" width="400" height="21" fill="rgba(4,7,20,.5)"/>';
    return s;
  },
  /* hills at first light */
  hills:function(H,id){
    let s=sceneBase(id,'#382413','#1A1009');
    s+='<circle cx="298" cy="78" r="26" fill="'+hsl(34,86,68,.5)+'"/>';
    s+=[0,1,2].map(function(i){
      return '<rect y="'+(56+i*16)+'" width="400" height="7" fill="'+hsl(34-i*6,80,64,(0.14-i*0.04).toFixed(2))+'"/>';}).join('');
    s+='<path d="M0 140c58-40 104 10 158-14s96-34 142-6 62 22 100 6v99H0Z" fill="'+hsl(230,42,22,.95)+'"/>';
    s+='<path d="M0 168c54-26 96 16 150 4s100-26 146-8 68 14 104 2v59H0Z" fill="'+hsl(238,46,14,.95)+'"/>';
    s+=[54,112,246,318].map(function(x,i){
      return '<path d="M'+x+' '+(190+i*3)+'v-13" stroke="rgba(255,255,255,.2)" stroke-width="1.2"/>'
        +'<circle cx="'+x+'" cy="'+(176+i*3)+'" r="4.5" fill="rgba(255,255,255,.14)"/>';}).join('');
    return s;
  },
  /* a long table and hanging bulbs */
  table:function(H,id){
    let s=sceneBase(id,'#2D1C15','#140C08');
    s+='<rect x="30" y="40" width="76" height="66" rx="4" fill="'+hsl(215,46,32,.5)+'" stroke="rgba(255,255,255,.18)" stroke-width="1.2"/>';
    s+='<rect x="292" y="40" width="76" height="66" rx="4" fill="'+hsl(215,46,32,.5)+'" stroke="rgba(255,255,255,.18)" stroke-width="1.2"/>';
    s+=[128,200,272].map(function(x,i){
      return '<path d="M'+x+' 0v'+(42+i%2*16)+'" stroke="rgba(255,255,255,.24)" stroke-width="1.1"/>'
        +'<circle cx="'+x+'" cy="'+(50+i%2*16)+'" r="8" fill="'+hsl(44,90,74,.9)+'"/>'
        +'<circle cx="'+x+'" cy="'+(50+i%2*16)+'" r="24" fill="'+hsl(44,88,70,.14)+'"/>';}).join('');
    s+='<polygon points="96,150 304,150 356,196 44,196" fill="'+hsl(26,44,32,.95)+'" stroke="rgba(255,255,255,.2)" stroke-width="1.2"/>';
    s+=[0,1,2,3,4].map(function(i){
      return '<ellipse cx="'+(118+i*42)+'" cy="'+(162+i%2*8)+'" rx="13" ry="5" fill="'+hsl(46,70,76,.3)+'"/>';}).join('');
    s+='<rect y="196" width="400" height="29" fill="rgba(4,7,20,.6)"/>';
    return s;
  }
};
const SCENE_KINDS=Object.keys(SCENES);
/* Hues are drawn from the system palette — deep blue, violet, ice, rose, amber — so a
   scene never wanders outside the Sanctuary colour family the way a free hash would. */
const SCENE_HUES=[224,244,262,206,286,340,36];
function sceneArt(kind,seed){
  const H=SCENE_HUES[Math.abs(hash(seed||kind))%SCENE_HUES.length];
  const id='s'+Math.abs(hash(String(kind)+String(seed))).toString(36);
  const fn=SCENES[kind]||SCENES[SCENE_KINDS[Math.abs(hash(seed||''))%SCENE_KINDS.length]];
  return '<svg class="scene" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'+fn(H,id)+'</svg>';
}
/* which illustration belongs to which seeded post */
const POST_SCENE={p1:'arches',p3:'stage',p4:'rays',p5:'hills',p7:'arches',p8:'water',p10:'hills',p11:'road',p12:'canopy',
  p13:'city',p14:'table',p16:'lamp',p18:'festival',p20:'festival',
  e1:'arches',e2:'rays',e3:'stage',e4:'hills',e5:'festival',e6:'table',e7:'lamp',e8:'arches',
  st1:'arches',st2:'road',st3:'rays',st4:'festival',st5:'table',st6:'lamp'};
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];});}
function uid(p){return (p||'')+Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4);}
function initials(n){return String(n||'?').trim().split(/\s+/).slice(0,2).map(function(w){return w[0];}).join('').toUpperCase();}
const DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function dt(iso){const d=new Date(iso);return isNaN(d)?new Date():d;}
function fmtDate(iso){const d=dt(iso);return DAYS[d.getDay()].slice(0,3)+', '+d.getDate()+' '+MONTHS[d.getMonth()];}
function fmtTime(iso){const d=dt(iso);let h=d.getHours(),m=d.getMinutes();const ap=h>=12?'pm':'am';h=h%12||12;return h+(m?':'+String(m).padStart(2,'0'):'')+ap;}
function ago(iso){const s=(Date.now()-dt(iso).getTime())/1000;
  if(s<60)return 'just now';if(s<3600)return Math.floor(s/60)+'m ago';if(s<86400)return Math.floor(s/3600)+'h ago';
  if(s<604800)return Math.floor(s/86400)+'d ago';return fmtDate(iso);}
function isToday(iso){const d=dt(iso),n=new Date();return d.toDateString()===n.toDateString();}
function greeting(){const h=new Date().getHours();return h<12?'Good morning':h<17?'Good afternoon':h<21?'Good evening':'Peace to you';}
function todayLabel(){const d=new Date();return DAYS[d.getDay()]+', '+d.getDate()+' '+MONTHS[d.getMonth()];}
function verseOfDay(){const d=new Date();return VERSES[(d.getFullYear()*372+d.getMonth()*31+d.getDate())%VERSES.length];}

/* ---------- local persistence ---------- */
const LS='bark2.';
const MEM={};
function store(){
  try{localStorage.setItem(LS+'t','1');localStorage.removeItem(LS+'t');return localStorage;}catch(e){}
  try{sessionStorage.setItem(LS+'t','1');sessionStorage.removeItem(LS+'t');return sessionStorage;}catch(e){}
  return {getItem:function(k){return k in MEM?MEM[k]:null;},setItem:function(k,v){MEM[k]=v;},removeItem:function(k){delete MEM[k];}};
}
const STORE=store();
function lsGet(k,fb){try{const v=STORE.getItem(LS+k);return v==null?fb:JSON.parse(v);}catch(e){return fb;}}
function lsSet(k,v){try{STORE.setItem(LS+k,JSON.stringify(v));}catch(e){}}
function lsDel(k){try{STORE.removeItem(LS+k);}catch(e){}}
function accountKey(id){return String(id||'').toLowerCase().replace(/[^a-z0-9@.+_-]/g,'').slice(0,80)||'guest';}

const state={
  theme:lsGet('theme','light'),
  route:'splash',
  params:{},
  session:lsGet('session',null),
  local:Object.assign({follows:[],saved:[],rsvps:[],reacted:{},amened:[],journal:[],planDay:0,streak:0,lastRead:null,milestones:[],care:[],seenMoments:[],notifSeen:null,reminders:{},family:[]},
    lsGet('local',{})),
  prefs:lsGet('prefs',{broadcast:true,digest:false,quiet:true,events:true,gpt:true,lang:'English',visibility:'church'}),
  data:{churches:[],posts:[],events:[],plans:[],people:[],comments:[],communities:[],threads:[],connections:[],cmRequests:[],storyReacts:[]},
  ui:{tab:'All',dir:'list',dirFilters:freshFilters(),journeyTab:'Timeline',churchTab:'Posts',consoleTab:'Dashboard',
      chat:[],chatMode:'Ask',chatBusy:false,otp:null,authRole:'believer',authId:'',onboard:{},step:0,sheet:null,toast:null,ready:false,dbState:'loading',
      calMonth:null,calDay:null,railMonth:null,railDay:null,c2cTab:'Inbox',news:null,story:null,fx:null},
};
function freshFilters(){return {q:'',cities:[],langs:[],days:[],times:[],ministries:[],live:false,following:'any',sort:'popular'};}
/* legacy local fields from the giving era are dropped on load */
delete state.local.giving;delete state.local.communities;delete state.prefs.showGiving;
function saveLocal(){lsSet('local',state.local);}
function savePrefs(){lsSet('prefs',state.prefs);}
function saveSession(){state.session?lsSet('session',state.session):lsDel('session');}

/* ---------- seed data ----------
   Embedded so the ark is alive on first open, online or offline. Dates are relative
   (ageHours / dayOffset) and hydrated at load, so the demo never goes stale. */
const SEED={"posts":[{"churchId":"ch1","churchName":"Grace Cathedral","comments":31,"content":"From Lamentations 3 — mercies that are new every morning are offered to people standing in the ruins, not to people who have already recovered. Audio, transcript and Tamil translation are attached.","duration":"42 min","reactions":{"amen":184,"bless":63,"fire":22,"love":97,"peace":41},"speaker":"Rev. Daniel Selvam","title":"The God Who Stays","type":"sermon","id":"p1","ageHours":27.75},{"churchId":"ch4","churchName":"New Life Fellowship","comments":29,"content":"Telugu message with English and Hindi translations generated from the transcript. On staying planted when the ground keeps moving.","duration":"39 min","reactions":{"amen":207,"bless":51,"fire":66,"love":72,"peace":44},"speaker":"Pr. Prasad Rao","title":"Rooted","type":"sermon","id":"p10","ageHours":28.5},{"audience":"Members only","churchId":"ch4","churchName":"New Life Fellowship","comments":33,"content":"Relief supplies for the flood-hit villages near Warangal leave Saturday 5am. We need eight volunteers with two-wheelers and anyone who can pack rice from Friday evening.","priority":"Important","reactions":{"amen":156,"bless":42,"fire":37,"love":88,"peace":19},"type":"broadcast","id":"p11","ageHours":16.75},{"churchId":"ch4","churchName":"New Life Fellowship","comments":52,"content":"Our eleventh village congregation meets under a tarpaulin in Warangal district. Pray for the roof before the next rains, and for Pastor Ramesh who walks 9km each Sunday to lead it.","reactions":{"amen":389,"bless":97,"fire":18,"love":121,"peace":63},"type":"text","id":"p12","ageHours":6.33},{"churchId":"ch5","churchName":"Living Hope Church","comments":38,"content":"On Matthew 11:28 and the difference between rest and collapse. If you only get one quiet hour this week, this is what to do with it.","duration":"31 min","reactions":{"amen":174,"bless":29,"fire":21,"love":63,"peace":118},"speaker":"Ps. Neil D'Souza","title":"Sabbath in a city that never rests","type":"sermon","id":"p13","ageHours":45.67},{"churchId":"ch5","churchName":"Living Hope Church","comments":11,"content":"Tonight at 7pm. Dinner, two short talks, and time to actually talk to each other. Childcare provided. Sixty seats, first come.","eventId":"e6","reactions":{"amen":63,"bless":17,"fire":6,"love":81,"peace":22},"title":"Marriage enrichment evening","type":"event","id":"p14","ageHours":4},{"churchId":"ch5","churchName":"Living Hope Church","comments":9,"content":"Four new small groups open this month — Andheri, Vashi, Thane and one online for people on night shifts. Ask in the group chat and we will connect you to a leader near you.","reactions":{"amen":47,"bless":9,"fire":8,"love":33,"peace":14},"type":"text","id":"p15","ageHours":86.92},{"churchId":"ch6","churchName":"Emmanuel Baptist","comments":17,"content":"Psalm 119 in Tamil, verse by verse. A lamp for the next step rather than a floodlight over the whole road.","duration":"47 min","reactions":{"amen":152,"bless":68,"fire":14,"love":41,"peace":39},"speaker":"Pr. Jeyaraj Manickam","title":"Vaarthaiyin Velicham — The Light of the Word","type":"sermon","id":"p16","ageHours":26.33},{"audience":"Everyone","churchId":"ch6","churchName":"Emmanuel Baptist","comments":6,"content":"Saturday fasting prayer at 6:00am as always. Thirty-two years without a break — come for the whole time or for ten minutes, both are welcome.","priority":"Normal","reactions":{"amen":118,"bless":33,"fire":12,"love":19,"peace":28},"type":"broadcast","id":"p17","ageHours":77.5},{"churchId":"ch6","churchName":"Emmanuel Baptist","comments":41,"content":"Sudha and Vimal were married here on Saturday, both raised in this Sunday school. Their parents met in this church too.","occasion":"Wedding","reactions":{"amen":143,"bless":76,"fire":18,"love":211,"peace":22},"type":"occasion","id":"p18","ageHours":43.83},{"churchId":"ch1","churchName":"Grace Cathedral","comments":22,"content":"We are arranging transport for elderly members who stopped coming after the bus route changed. If you drive past Mylapore on a Sunday morning, one seat is all it takes.","reactions":{"amen":88,"bless":21,"fire":5,"love":74,"peace":16},"type":"text","id":"p19","ageHours":4.83},{"audience":"Everyone","churchId":"ch1","churchName":"Grace Cathedral","comments":8,"content":"From this Sunday, the Tamil service moves to 7:00am and the English service to 9:30am. The 6:30pm midweek communion stays as it is.","priority":"Normal","reactions":{"amen":72,"bless":18,"fire":2,"love":14,"peace":9},"type":"broadcast","id":"p2","ageHours":42.33},{"churchId":"ch2","churchName":"Bethel Assembly","comments":36,"content":"Bethel turns 34 this month. It started with nine people in a garage on Hosur Road, and the same two families still set out the chairs every Sunday.","occasion":"Anniversary","reactions":{"amen":196,"bless":58,"fire":47,"love":134,"peace":33},"type":"occasion","id":"p20","ageHours":122},{"churchId":"ch1","churchName":"Grace Cathedral","comments":19,"content":"Three hours of worship in Tamil and English with the combined choirs. Doors at 6:30pm, no ticket needed, bring someone with you.","eventId":"e3","reactions":{"amen":96,"bless":24,"fire":74,"love":58,"peace":31},"title":"Night of Worship — Friday","type":"event","id":"p3","ageHours":50.67},{"churchId":"ch2","churchName":"Bethel Assembly","comments":24,"content":"Part two of our series in Hebrews. If your job, your rent and your city all changed this year, this one is for you.","duration":"36 min","reactions":{"amen":143,"bless":37,"fire":38,"love":61,"peace":52},"speaker":"Pr. Sam Abraham","title":"Anchored: faith in an unstable season","type":"sermon","id":"p4","ageHours":24.92},{"churchId":"ch2","churchName":"Bethel Assembly","comments":16,"content":"Youth camp registration closes Friday. 120 places, ₹1,800 including travel and food. Talk to Anitha if cost is the only thing stopping you — nobody is left behind for money.","reactions":{"amen":58,"bless":12,"fire":29,"love":44,"peace":7},"type":"text","id":"p5","ageHours":63.83},{"audience":"Everyone","churchId":"ch2","churchName":"Bethel Assembly","comments":67,"content":"Urgent prayer: Br. Immanuel was in a road accident last night and is in the ICU at St. John's. His family is with him. Please pray now, and keep Friday morning free if blood donors are needed.","priority":"Urgent","reactions":{"amen":412,"bless":88,"fire":9,"love":103,"peace":54},"type":"broadcast","id":"p6","ageHours":5.25},{"churchId":"ch3","churchName":"St. Thomas Marthoma","comments":13,"content":"Sunday's homily in Malayalam, with an English transcript for those who asked. On grace as a road you walk, not a door you pass through once.","duration":"29 min","reactions":{"amen":121,"bless":74,"fire":11,"love":49,"peace":66},"speaker":"Fr. Thomas Varghese","title":"Kripayude Vazhi — The Way of Grace","type":"sermon","id":"p7","ageHours":47.5},{"churchId":"ch3","churchName":"St. Thomas Marthoma","comments":48,"content":"Fourteen believers were baptised in the backwaters this morning, the youngest fifteen and the oldest seventy-one. The whole parish walked down together after Qurbana.","occasion":"Baptism","reactions":{"amen":268,"bless":142,"fire":31,"love":195,"peace":77},"type":"occasion","id":"p8","ageHours":74.17},{"churchId":"ch3","churchName":"St. Thomas Marthoma","comments":4,"content":"Choir practice moves to Thursday 7pm this week — the church hall is being repainted before the Harvest Festival.","reactions":{"amen":34,"bless":6,"fire":1,"love":9,"peace":11},"type":"text","id":"p9","ageHours":90},{"authorCity":"Bengaluru","authorId":"pe1","authorName":"Anitha Raj","authorType":"person","comments":3,"content":"Six months ago I could not pray out loud in a room of more than three people. Tonight I led the prayer at small group and my hands did not shake. Nobody there knew what it cost. He did.","reactions":{"amen":214,"bless":38,"fire":41,"love":96,"peace":27},"type":"testimony","verseRef":"2 Corinthians 12:9","id":"up1","ageHours":3.67},{"authorCity":"Kochi","authorId":"pe9","authorName":"Vinod Kurian","authorType":"person","comments":3,"content":"Twenty-eight years in the choir and I still get nervous before Harvest Festival. Does that ever go away, or is the nervousness part of taking it seriously?","reactions":{"amen":88,"bless":19,"fire":9,"love":63,"peace":44},"type":"question","id":"up10","ageHours":15.92},{"authorCity":"Bengaluru","authorId":"pe1","authorName":"Anitha Raj","authorType":"person","comments":2,"content":"Youth camp registration closes Friday and two kids in my street cannot afford it. If anyone wants to quietly cover a place, message me — no names will ever be mentioned.","reactions":{"amen":96,"bless":34,"fire":27,"love":118,"peace":12},"type":"text","id":"up11","ageHours":2.17},{"authorCity":"Mumbai","authorId":"pe4","authorName":"David Mathew","authorType":"person","comments":3,"content":"To whoever is reading the feed at 2am because sleeping means thinking: the Psalms were written for exactly this hour. Start at 42. You are not the first person to ask God where he went.","reactions":{"amen":377,"bless":68,"fire":31,"love":142,"peace":214},"type":"text","verseRef":"Psalm 46:10","id":"up12","ageHours":9.33},{"authorCity":"Mumbai","authorId":"pe4","authorName":"David Mathew","authorType":"person","comments":4,"content":"Six months sober tomorrow. I am posting this because a year ago I read someone else's post like this and it was the first time I believed it was possible. If that is you today — it is possible.","reactions":{"amen":892,"bless":141,"fire":96,"love":402,"peace":88},"type":"testimony","verseRef":"Lamentations 3:22","id":"up2","ageHours":14.83},{"authorCity":"Chennai","authorId":"pe6","authorName":"Ruth Anand","authorType":"person","comments":2,"content":"Practical question for Chennai people: we have four elderly members who stopped coming when the bus route changed. I can take two in my car. Does anyone drive past Mylapore around 6:45 on Sunday mornings?","reactions":{"amen":63,"bless":14,"fire":4,"love":71,"peace":8},"type":"question","id":"up3","ageHours":4.33},{"authorCity":"Hyderabad","authorId":"pe2","authorName":"Joseph Kumar","authorType":"person","comments":3,"content":"Third interview on Friday, eight months without work. I have stopped asking for the job and started asking to walk in without desperation on my face. Pray with me.","reactions":{"amen":448,"bless":62,"fire":12,"love":88,"peace":74},"type":"text","verseRef":"Philippians 4:6","id":"up4","ageHours":5.75},{"authorCity":"Kochi","authorId":"pe3","authorName":"Mercy Thomas","authorType":"person","comments":2,"content":"He called this morning. He found a Malayalam congregation ten minutes from his flat in Dubai and went alone last Friday. Twenty-two years old, first time away from Kerala, and he went alone.","reactions":{"amen":327,"bless":84,"fire":22,"love":288,"peace":61},"type":"praise","id":"up5","ageHours":2.92},{"authorCity":"Coimbatore","authorId":"pe5","authorName":"Priya Selvam","authorType":"person","comments":2,"content":"Day 251 of the Bible in a year. I have started this plan four times since 2019 and never got past March. Today I am in Jeremiah and I am still here.","reactions":{"amen":189,"bless":41,"fire":58,"love":122,"peace":33},"type":"praise","verseRef":"Psalm 119:105","id":"up6","ageHours":16.5},{"authorCity":"Bengaluru","authorId":"pe8","authorName":"Grace Mathew","authorType":"person","comments":4,"content":"Update on Br. Immanuel: he was moved out of the ICU this afternoon and opened his eyes when his wife spoke. Keep going, everyone. Thirty-one hours of prayer and counting.","reactions":{"amen":1204,"bless":218,"fire":47,"love":388,"peace":176},"type":"text","id":"up7","ageHours":1.5},{"authorCity":"Hyderabad","authorId":"pe7","authorName":"Samuel Prakash","authorType":"person","comments":3,"content":"Walked the 9km to Warangal with Pastor Ramesh yesterday. Under a tarpaulin, 180 people, no fans, no floor. I have never heard singing like that in a building with a roof.","reactions":{"amen":512,"bless":96,"fire":133,"love":204,"peace":58},"type":"testimony","id":"up8","ageHours":18.25},{"authorCity":"Chennai","authorId":"pe10","authorName":"Sarah Thomas","authorType":"person","comments":2,"content":"A five-year-old in my Sunday school class explained the parable of the lost sheep to me this morning and got it more right than my last three attempts at teaching it.","reactions":{"amen":143,"bless":22,"fire":14,"love":196,"peace":18},"type":"praise","id":"up9","ageHours":0.75}],"churches":[{"about":"Planted in 1908 and rebuilt twice, Grace Cathedral has stayed on the same corner of Anna Salai for four generations. Two Sunday services, a Tamil choir that has sung together for thirty years, and a midweek communion that anyone in the city is welcome to join.","address":"12 Anna Salai, Teynampet, Chennai 600018","city":"Chennai","followers":4820,"languages":["Tamil","English"],"ministries":["Choir","Youth","Prayer Cell","Sunday School","Outreach","Ushers"],"name":"Grace Cathedral","pastorName":"Rev. Daniel Selvam","serviceTimes":["Sun 7:00am Tamil","Sun 9:30am English","Wed 6:30pm Midweek"],"tagline":"A family finding grace in the heart of the city","verified":true,"id":"ch1","handle":"grace.cathedral"},{"about":"A young congregation shaped by the city that surrounds it — students, engineers, nurses and drivers in the same room. Small groups meet across eleven neighbourhoods through the week.","address":"48 Hosur Road, Koramangala, Bengaluru 560095","city":"Bengaluru","followers":3140,"languages":["English","Kannada","Tamil"],"ministries":["Worship Team","Youth","Small Groups","Media","Kids Church"],"name":"Bethel Assembly","pastorName":"Pr. Sam Abraham","serviceTimes":["Sun 9:30am English","Sun 11:30am Kannada","Fri 7:00pm Youth"],"tagline":"Ordinary people, extraordinary God","verified":true,"id":"ch2","handle":"bethel.assembly"},{"about":"One of the oldest congregations on the Malabar coast, with a liturgy carried in Malayalam for a hundred and fifty years. Baptisms are still held in the backwaters behind the church.","address":"Church Road, Fort Kochi, Ernakulam 682001","city":"Kochi","followers":2610,"languages":["Malayalam","English"],"ministries":["Choir","Altar Servers","Women's Fellowship","Youth League"],"name":"St. Thomas Marthoma","pastorName":"Fr. Thomas Varghese","serviceTimes":["Sun 7:30am Malayalam Holy Qurbana","Sun 10:00am English","Sat 5:00pm Evening Prayer"],"tagline":"By the backwaters, since 1876","verified":true,"id":"ch3","handle":"stthomas.marthoma"},{"about":"A sending church with eleven village congregations planted in the last six years. Tuesday intercession runs for two hours and is streamed for those who cannot travel in.","address":"7-2-1 Kukatpally, Hyderabad 500072","city":"Hyderabad","followers":5390,"languages":["Telugu","Hindi","English"],"ministries":["Church Planting","Intercession","Relief Team","Women's Ministry","Youth"],"name":"New Life Fellowship","pastorName":"Pr. Prasad Rao","serviceTimes":["Sun 8:00am Telugu","Sun 10:30am English","Tue 7:00pm Intercession"],"tagline":"Reaching the villages beyond the ring road","verified":true,"id":"ch4","handle":"newlife.fellowship"},{"about":"A congregation of commuters. Everything is built around people who work six days a week — short services, midweek prayer online, and small groups that meet close to where people live.","address":"Linking Road, Bandra West, Mumbai 400050","city":"Mumbai","followers":2870,"languages":["English","Hindi","Marathi"],"ministries":["Small Groups","Counselling","Worship","Marriage Ministry","Kids"],"name":"Living Hope Church","pastorName":"Ps. Neil D'Souza","serviceTimes":["Sun 10:00am English","Sun 12:30pm Hindi","Thu 8:00pm Prayer"],"tagline":"Rest for a city that never stops","verified":true,"id":"ch5","handle":"livinghope"},{"about":"Expository preaching in two languages, a Saturday fasting prayer that has met without a break since 1994, and a small library open to the neighbourhood on weekday evenings.","address":"5 Race Course Road, Coimbatore 641018","city":"Coimbatore","followers":1980,"languages":["Tamil","English"],"ministries":["Bible Study","Fasting Prayer","Library","Choir","Men's Fellowship"],"name":"Emmanuel Baptist","pastorName":"Pr. Jeyaraj Manickam","serviceTimes":["Sun 8:00am Tamil","Sun 10:30am English","Sat 6:00am Fasting Prayer"],"tagline":"The word, plainly taught, in Tamil and English","verified":true,"id":"ch6","handle":"emmanuel.baptist"}],"comments":[{"amens":34,"authorId":"pe8","authorName":"Grace Mathew","postId":"up1","text":"I was in that room. It did not sound like someone who was afraid.","id":"cm1","ageHours":3.08},{"amens":77,"authorId":"pe3","authorName":"Mercy Thomas","postId":"up10","text":"Twenty-eight years is not nervousness. It is reverence that never got comfortable.","id":"cm10","ageHours":15.33},{"amens":118,"authorId":"pe8","authorName":"Grace Mathew","postId":"p6","text":"Blood donors: St. John's needs B negative. I am going at 7am if anyone wants to come together.","id":"cm11","ageHours":4.5},{"amens":246,"authorId":"pe9","authorName":"Vinod Kurian","postId":"p8","text":"The seventy-one year old is my uncle. He waited a long time for this morning.","id":"cm12","ageHours":72.67},{"amens":12,"authorId":"pe2","authorName":"Joseph Kumar","postId":"up1","text":"Six months of small, unglamorous obedience. This is what it produces.","id":"cm2","ageHours":2.8},{"amens":7,"authorId":"pe5","authorName":"Priya Selvam","postId":"up1","text":"Saving this for the next time I have to speak in front of the school assembly.","id":"cm3","ageHours":1.97},{"amens":88,"authorId":"pe1","authorName":"Anitha Raj","postId":"up2","text":"Six months. Tomorrow we celebrate, and then we start on the seventh.","id":"cm4","ageHours":14.33},{"amens":156,"authorId":"pe7","authorName":"Samuel Prakash","postId":"up2","text":"My brother is four days in. I am reading this to him tonight.","id":"cm5","ageHours":13.75},{"amens":41,"authorId":"pe10","authorName":"Sarah Thomas","postId":"up2","text":"The friends who answered at 2am deserve a post of their own.","id":"cm6","ageHours":5.17},{"amens":22,"authorId":"pe10","authorName":"Sarah Thomas","postId":"up3","text":"I pass Mylapore at 6:30. I can take two. Sending you my number.","id":"cm7","ageHours":3.92},{"amens":63,"authorId":"pe4","authorName":"David Mathew","postId":"up4","text":"Praying at 9am Friday. Tell us what happens either way.","id":"cm8","ageHours":4.97},{"amens":204,"authorId":"pe2","authorName":"Joseph Kumar","postId":"up7","text":"Out of the ICU. I have refreshed this post eleven times today.","id":"cm9","ageHours":1.2}],"events":[{"capacity":400,"churchId":"ch1","churchName":"Grace Cathedral","description":"Our Wednesday communion, open to anyone in the city. Tamil and English liturgy side by side, forty minutes, streamed for those who cannot travel in.","isLive":true,"location":"Main sanctuary, Anna Salai","locationType":"onsite","rsvpCount":148,"title":"Midweek Communion Service","id":"e1","dayOffset":0,"time":"18:30"},{"capacity":0,"churchId":"ch4","churchName":"New Life Fellowship","description":"Two hours of intercession for our village congregations, the relief work near Warangal, and requests sent in through the prayer chain.","isLive":true,"location":"Online stream","locationType":"online","rsvpCount":92,"title":"Telugu Intercession Hour","id":"e2","dayOffset":0,"time":"19:00"},{"capacity":600,"churchId":"ch1","churchName":"Grace Cathedral","description":"Three hours of worship with the combined Tamil and English choirs, and a short word from Rev. Daniel Selvam. Doors at 6:30pm.","isLive":false,"location":"Main sanctuary, Anna Salai","locationType":"onsite","rsvpCount":214,"title":"Night of Worship","id":"e3","dayOffset":1,"time":"19:00"},{"capacity":120,"churchId":"ch2","churchName":"Bethel Assembly","description":"Three days in the Nandi Hills for ages 14 to 24. Travel, food and accommodation included. Registration closes Friday.","isLive":false,"location":"Nandi Hills Retreat Centre","locationType":"onsite","rsvpCount":78,"title":"Youth Camp — Ridge Retreat","id":"e4","dayOffset":9,"time":"07:00"},{"capacity":500,"churchId":"ch3","churchName":"St. Thomas Marthoma","description":"The parish Harvest Festival with the full choir, followed by the auction of harvest gifts in aid of the parish school.","isLive":false,"location":"Church Road, Fort Kochi","locationType":"onsite","rsvpCount":320,"title":"Harvest Festival Service","id":"e5","dayOffset":3,"time":"08:00"},{"capacity":60,"churchId":"ch5","churchName":"Living Hope Church","description":"Dinner, two short talks and unhurried time to talk to each other. Childcare provided on site.","isLive":false,"location":"Linking Road, Bandra West","locationType":"onsite","rsvpCount":41,"title":"Marriage Enrichment Evening","id":"e6","dayOffset":0,"time":"19:00"},{"capacity":0,"churchId":"ch6","churchName":"Emmanuel Baptist","description":"Thirty-two unbroken years of Saturday morning prayer. Come for the whole three hours or for ten minutes.","isLive":false,"location":"Race Course Road, Coimbatore","locationType":"onsite","rsvpCount":130,"title":"Saturday Fasting Prayer","id":"e7","dayOffset":2,"time":"06:00"},{"capacity":700,"churchId":"ch2","churchName":"Bethel Assembly","description":"English at 9:30am and Kannada at 11:30am, with kids church running alongside both.","isLive":false,"location":"Hosur Road, Koramangala","locationType":"onsite","rsvpCount":410,"title":"Sunday Celebration Service","id":"e8","dayOffset":3,"time":"09:30"}],"people":[{"bio":"Worship team at Bethel. Learning to trust slowly, out loud.","city":"Bengaluru","followers":412,"following":88,"homeChurchId":"ch2","joinedAt":"2026-03-02T10:00:00+05:30","name":"Anitha Raj","id":"pe1"},{"bio":"Sunday school, second standard. Twenty-two small theologians and a lot of glitter.","city":"Chennai","followers":205,"following":119,"homeChurchId":"ch1","joinedAt":"2026-06-01T10:00:00+05:30","name":"Sarah Thomas","id":"pe10"},{"bio":"Engineer. Hosts a Tuesday small group in Kukatpally. Eight months job hunting and still here.","city":"Hyderabad","followers":230,"following":140,"homeChurchId":"ch4","joinedAt":"2026-04-11T10:00:00+05:30","name":"Joseph Kumar","id":"pe2"},{"bio":"Nurse. Sunday school teacher for eleven years. Mother of one, now in Dubai.","city":"Kochi","followers":318,"following":96,"homeChurchId":"ch3","joinedAt":"2026-02-25T10:00:00+05:30","name":"Mercy Thomas","id":"pe3"},{"bio":"Six months sober tomorrow. Counting days out loud so someone else can too.","city":"Mumbai","followers":1240,"following":210,"homeChurchId":"ch5","joinedAt":"2026-01-30T10:00:00+05:30","name":"David Mathew","id":"pe4"},{"bio":"Teacher. Reading the Bible in a year for the first time — day 251 and I have never made it this far.","city":"Coimbatore","followers":176,"following":132,"homeChurchId":"ch6","joinedAt":"2026-01-08T10:00:00+05:30","name":"Priya Selvam","id":"pe5"},{"bio":"Drives the Sunday morning route for our elderly members. Ask me for a seat.","city":"Chennai","followers":289,"following":74,"homeChurchId":"ch1","joinedAt":"2026-03-19T10:00:00+05:30","name":"Ruth Anand","id":"pe6"},{"bio":"Walks with Pastor Ramesh to the Warangal congregation most Sundays.","city":"Hyderabad","followers":521,"following":188,"homeChurchId":"ch4","joinedAt":"2026-02-14T10:00:00+05:30","name":"Samuel Prakash","id":"pe7"},{"bio":"Youth leader. Camp is my favourite three days of the year.","city":"Bengaluru","followers":634,"following":301,"homeChurchId":"ch2","joinedAt":"2026-04-02T10:00:00+05:30","name":"Grace Mathew","id":"pe8"},{"bio":"Choir tenor since 1998. Still nervous before every Harvest Festival.","city":"Kochi","followers":143,"following":61,"homeChurchId":"ch3","joinedAt":"2026-05-06T10:00:00+05:30","name":"Vinod Kurian","id":"pe9"}],"readingPlans":[{"category":"Whole Bible","days":365,"description":"Genesis to Revelation in twelve months, roughly fifteen minutes a day, with a Psalm alongside each reading so the week never becomes only history.","title":"The Bible in a Year","todayRef":"Genesis 12 · Psalm 9","id":"rp1"},{"category":"Psalms","days":30,"description":"Five psalms a day for a month. Built for a season when words are hard to find — lament, praise and honesty in the same breath.","title":"Psalms in 30 Days","todayRef":"Psalm 23","id":"rp2"},{"category":"Gospels","days":50,"description":"Matthew, Mark, Luke and John end to end. A good first plan if you are new, or returning after a long time away.","title":"The Gospels in 50 Days","todayRef":"Luke 5:1-16","id":"rp3"}]};
const SEED_EXTRA={
  /* Communities belong to a church. Only its admins create them, only its followers see them,
     and every member is let in by an admin. */
  communities:[
    {id:'cm-ch1-care',churchId:'ch1',name:'Grace Care & Transport',tagline:'Lifts, visits and meals for members who need a hand',about:'Drivers, visitors and cooks from Grace Cathedral. Post a need or offer a seat for Sunday.',members:64,hue:200,icon:'hands',mods:['Ruth Anand']},
    {id:'cm-ch1-kids',churchId:'ch1',name:'Grace Sunday School',tagline:'Teachers and parents of our Sunday school',about:'Lesson plans, memory verses and the funny things children say about God.',members:38,hue:340,icon:'users',mods:['Sarah Thomas']},
    {id:'cm-ch2-youth',churchId:'ch2',name:'Bethel Youth',tagline:'Ages 14 to 24 at Bethel Assembly',about:'Camps, exams, first jobs, and faith that is yours and not only your parents’.',members:212,hue:280,icon:'sparkle',mods:['Grace Mathew','Anitha Raj']},
    {id:'cm-ch2-worship',churchId:'ch2',name:'Bethel Worship Team',tagline:'Singers, band and sound desk',about:'Set lists, chord charts, rehearsal times and nerves before the big service.',members:47,hue:40,icon:'music',mods:['Anitha Raj']},
    {id:'cm-ch2-prayer',churchId:'ch2',name:'Bethel Prayer Chain',tagline:'Urgent requests and answered prayer',about:'When something happens, this is where the church starts praying.',members:318,hue:20,icon:'hands',mods:['Grace Mathew']},
    {id:'cm-ch3-choir',churchId:'ch3',name:'Marthoma Choir',tagline:'The Malayalam and English choirs',about:'Practice times, Harvest Festival songs and the tenors who still get nervous.',members:52,hue:40,icon:'music',mods:['Vinod Kurian']},
    {id:'cm-ch3-parents',churchId:'ch3',name:'Marthoma Parents',tagline:'Raising children in faith, one week at a time',about:'Board exams, children leaving home, and praying for the ones far away.',members:146,hue:340,icon:'users',mods:['Mercy Thomas']},
    {id:'cm-ch4-missions',churchId:'ch4',name:'New Life Missions',tagline:'The eleven village congregations and the people who go',about:'Church planting, relief work and the long road to Warangal.',members:189,hue:160,icon:'globe',mods:['Samuel Prakash']},
    {id:'cm-ch4-prayer',churchId:'ch4',name:'New Life Intercessors',tagline:'Tuesday intercession, all week long',about:'Requests from the city and the villages, prayed for by name.',members:274,hue:20,icon:'hands',mods:['Joseph Kumar']},
    {id:'cm-ch5-recovery',churchId:'ch5',name:'Living Hope Recovery',tagline:'For anyone walking out of addiction, and those walking with them',about:'Honest, anonymous if you need it, and never judged. Counsellors read along.',members:83,hue:200,icon:'hands',mods:['David Mathew']},
    {id:'cm-ch6-bible',churchId:'ch6',name:'Emmanuel Bible Study',tagline:'Reading plans, hard passages and good questions',about:'Verse by verse, in Tamil and English. No question is too small.',members:121,hue:200,icon:'book',mods:['Priya Selvam']}
  ],
  /* Membership lives in these requests: pending until a church admin approves. */
  communityRequests:[
    {id:'cr1',communityId:'cm-ch1-care',churchId:'ch1',userKey:'pe10',userName:'Sarah Thomas',userCity:'Chennai',status:'approved',ageHours:2000},
    {id:'cr2',communityId:'cm-ch1-care',churchId:'ch1',userKey:'pe6',userName:'Ruth Anand',userCity:'Chennai',status:'approved',ageHours:2400},
    {id:'cr3',communityId:'cm-ch1-kids',churchId:'ch1',userKey:'pe10',userName:'Sarah Thomas',userCity:'Chennai',status:'approved',ageHours:1900},
    {id:'cr4',communityId:'cm-ch1-kids',churchId:'ch1',userKey:'guest-joel',userName:'Joel Daniel',userCity:'Chennai',status:'pending',ageHours:5},
    {id:'cr5',communityId:'cm-ch1-care',churchId:'ch1',userKey:'guest-leela',userName:'Leela Samuel',userCity:'Chennai',status:'pending',ageHours:20},
    {id:'cr6',communityId:'cm-ch2-youth',churchId:'ch2',userKey:'pe1',userName:'Anitha Raj',userCity:'Bengaluru',status:'approved',ageHours:3000},
    {id:'cr7',communityId:'cm-ch2-youth',churchId:'ch2',userKey:'guest-aaron',userName:'Aaron Paul',userCity:'Bengaluru',status:'pending',ageHours:9},
    {id:'cr8',communityId:'cm-ch2-worship',churchId:'ch2',userKey:'pe1',userName:'Anitha Raj',userCity:'Bengaluru',status:'approved',ageHours:3100},
    {id:'cr9',communityId:'cm-ch2-prayer',churchId:'ch2',userKey:'pe8',userName:'Grace Mathew',userCity:'Bengaluru',status:'approved',ageHours:2600},
    {id:'cr10',communityId:'cm-ch3-choir',churchId:'ch3',userKey:'pe9',userName:'Vinod Kurian',userCity:'Kochi',status:'approved',ageHours:3000},
    {id:'cr11',communityId:'cm-ch3-parents',churchId:'ch3',userKey:'pe3',userName:'Mercy Thomas',userCity:'Kochi',status:'approved',ageHours:2800},
    {id:'cr12',communityId:'cm-ch4-missions',churchId:'ch4',userKey:'pe7',userName:'Samuel Prakash',userCity:'Hyderabad',status:'approved',ageHours:2700},
    {id:'cr13',communityId:'cm-ch4-prayer',churchId:'ch4',userKey:'pe2',userName:'Joseph Kumar',userCity:'Hyderabad',status:'approved',ageHours:2500},
    {id:'cr14',communityId:'cm-ch5-recovery',churchId:'ch5',userKey:'pe4',userName:'David Mathew',userCity:'Mumbai',status:'approved',ageHours:2300},
    {id:'cr15',communityId:'cm-ch6-bible',churchId:'ch6',userKey:'pe5',userName:'Priya Selvam',userCity:'Coimbatore',status:'approved',ageHours:2900},
    {id:'cr16',communityId:'cm-ch6-bible',churchId:'ch6',userKey:'guest-kavi',userName:'Kavitha R.',userCity:'Coimbatore',status:'pending',ageHours:30}
  ],
  stories:[
    {id:'st1',type:'story',churchId:'ch1',churchName:'Grace Cathedral',content:'Choir warm-up done. Doors open at 6:30 for the midweek communion — come as you are.',verseRef:'Psalm 46:10',ageHours:1.2},
    {id:'st2',type:'story',churchId:'ch4',churchName:'New Life Fellowship',content:'Relief trucks are loaded. Eight volunteers, two hundred kilos of rice, one long road to Warangal.',verseRef:'Isaiah 40:31',ageHours:2.5},
    {id:'st3',type:'story',churchId:'ch2',churchName:'Bethel Assembly',content:'Update from St. John’s: Br. Immanuel is out of the ICU. Keep praying. Keep going.',verseRef:'Lamentations 3:22',ageHours:3.1},
    {id:'st4',type:'story',churchId:'ch3',churchName:'St. Thomas Marthoma',content:'The hall is repainted, the choir is rehearsed, the harvest gifts are arriving. Sunday is going to be full.',verseRef:'Psalm 23:1',ageHours:5.4},
    {id:'st5',type:'story',churchId:'ch5',churchName:'Living Hope Church',content:'Sixty seats for tonight’s marriage evening. Forty-one taken. Childcare is sorted.',verseRef:'John 14:27',ageHours:6.8},
    {id:'st6',type:'story',churchId:'ch6',churchName:'Emmanuel Baptist',content:'Thirty-two years of Saturday fasting prayer. Tomorrow at six, same room, same welcome.',verseRef:'Philippians 4:6',ageHours:9.5}
  ],
  churchThreads:[
    {id:'ct1',churchIds:['ch1','ch2'],names:{ch1:'Grace Cathedral',ch2:'Bethel Assembly'},topic:'Joint youth convention · March',
      messages:[
        {from:'ch2',text:'Pastor Daniel, we are planning a joint youth convention in March — three days, Nandi Hills. Would Grace Cathedral co-host? Your Tamil choir would be a gift to it.',ageHours:30},
        {from:'ch1',text:'Sam, yes in principle. Our youth committee meets Thursday. Can you send the draft budget and the dates you are holding?',ageHours:26},
        {from:'ch2',text:'Sending the budget tonight. Dates held: 13–15 March. We can split the venue cost 50/50 and each church brings its own worship team for one evening.',ageHours:3.4}
      ]},
    {id:'ct2',churchIds:['ch1','ch4'],names:{ch1:'Grace Cathedral',ch4:'New Life Fellowship'},topic:'Relief supplies · Warangal',
      messages:[
        {from:'ch4',text:'Grace Cathedral — our relief trucks leave for Warangal on Saturday. If your congregation can spare rice or tarpaulins, we can pick up from Anna Salai on Friday evening.',ageHours:20},
        {from:'ch1',text:'We will have forty kilos of rice and six tarpaulins ready at the vestry by 5pm Friday. Ask for Ruth Anand at the gate.',ageHours:18.5}
      ]},
    {id:'ct3',churchIds:['ch2','ch4'],names:{ch2:'Bethel Assembly',ch4:'New Life Fellowship'},topic:'Guest speaker exchange',
      messages:[{from:'ch4',text:'Would Pr. Sam be open to preaching at our English service in October? We can host travel and stay.',ageHours:50}]}
  ],
  churchConnections:[
    {id:'cc1',from:'ch2',to:'ch1',status:'accepted',ageHours:900},
    {id:'cc2',from:'ch4',to:'ch1',status:'accepted',ageHours:600},
    {id:'cc3',from:'ch3',to:'ch1',status:'pending',ageHours:14},
    {id:'cc4',from:'ch5',to:'ch1',status:'pending',ageHours:40},
    {id:'cc5',from:'ch2',to:'ch4',status:'accepted',ageHours:1200},
    {id:'cc6',from:'ch6',to:'ch1',status:'accepted',ageHours:2000}
  ]
};
/* Believer posts live inside communities (the feed itself is church-only) */
const COMMUNITY_OF={up1:'cm-ch2-worship',up2:'cm-ch5-recovery',up3:'cm-ch1-care',up4:'cm-ch4-prayer',up5:'cm-ch3-parents',up6:'cm-ch6-bible',up7:'cm-ch2-prayer',up8:'cm-ch4-missions',up9:'cm-ch1-kids',up10:'cm-ch3-choir',up11:'cm-ch2-youth',up12:'cm-ch5-recovery'};
/* Photographs, embedded as data URIs because the viewer blocks external image hosts.
   Sourced from Unsplash, whose licence permits free use and redistribution. */
const PHOTOS={b1:'assets/photos/b1.jpg',b2:'assets/photos/b2.jpg',b3:'assets/photos/b3.jpg',c1:'assets/photos/c1.jpg',c3:'assets/photos/c3.jpg',k1:'assets/photos/k1.jpg',k2:'assets/photos/k2.jpg',k3:'assets/photos/k3.jpg',ci1:'assets/photos/ci1.jpg',t1:'assets/photos/t1.jpg',t2:'assets/photos/t2.jpg',v1:'assets/photos/v1.jpg',v2:'assets/photos/v2.jpg',v3:'assets/photos/v3.jpg',w10:'assets/photos/w10.jpg',w12:'assets/photos/w12.jpg',w2:'assets/photos/w2.jpg',w3:'assets/photos/w3.jpg',w5:'assets/photos/w5.jpg',w6:'assets/photos/w6.jpg',w7:'assets/photos/w7.jpg',w8:'assets/photos/w8.jpg',w9:'assets/photos/w9.jpg'};
const PHOTO_OF={
  ch1:'w3',ch2:'w5',ch3:'k1',ch4:'v1',ch5:'c1',ch6:'b3',
  p1:'b2',p3:'w2',p4:'w10',p5:'w8',p7:'k2',p8:'k3',p10:'v3',p11:'v2',p12:'v1',p13:'c3',p14:'t1',p16:'b1',p18:'ci1',p20:'w9',
  e1:'w7',e2:'w12',e3:'w2',e4:'w6',e5:'k1',e6:'t1',e7:'w12',e8:'w5',
  st1:'w9',st2:'v2',st3:'w12',st4:'k1',st5:'t2',st6:'b3'
};
function photoFor(id){const k=PHOTO_OF[id];return (k&&PHOTOS[k])||null;}
function hydrate(o){
  o=Object.assign({},o);
  if(!o.photo&&PHOTO_OF[o.id])o.photo=photoFor(o.id);
  if('denomination' in o)delete o.denomination;
  if(INVITE_CODES[o.id]&&!o.inviteCode)o.inviteCode=INVITE_CODES[o.id];
  if(o.serviceTimes&&!o.handle&&o.name)o.handle=suggestHandle(o.name);
  if(Array.isArray(o.messages))o.messages=o.messages.map(function(m,i){
    return m&&m.id?m:Object.assign({},m,{id:(o.id||'t')+'_m'+i});});
  if(o.id==='rp3'){o.days=50;o.title='The Gospels in 50 Days';o.description='Matthew, Mark, Luke and John end to end, at an unhurried pace. A good first plan if you are new, or returning after a long time away.';}
  const now=Date.now();
  if(o.ageHours!=null&&o.ageHours!=='')o.createdAt=new Date(now-Number(o.ageHours)*3600e3).toISOString();
  if(o.dayOffset!=null){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()+Number(o.dayOffset));
    const t=String(o.time||'18:00').split(':');d.setHours(Number(t[0])||0,Number(t[1])||0,0,0);o.datetime=d.toISOString();}
  if(Array.isArray(o.messages))o.messages=o.messages.map(function(m){m=Object.assign({},m);if(m.ageHours!=null)m.at=new Date(now-Number(m.ageHours)*3600e3).toISOString();return m;});
  if(o.authorType==='person'&&!o.communityId&&COMMUNITY_OF[o.id])o.communityId=COMMUNITY_OF[o.id];
  if(!o.scene&&POST_SCENE[o.id])o.scene=POST_SCENE[o.id];
  return o;
}
/* A post shows a real uploaded photograph when it has one, otherwise its scene illustration. */
/* A post's pictures, however many were attached. The older single-photo field still counts. */
function photosOf(p){
  if(p.photos&&p.photos.length)return p.photos.slice(0,5);
  return p.photo?[p.photo]:[];
}
function hasMedia(p){return !!(photosOf(p).length||p.video||p.audio||p.scene);}
function mediaInner(p,i){
  const ph=photosOf(p);
  if(ph.length)return '<img src="'+esc(ph[Math.min(i||0,ph.length-1)])+'" alt="'+esc(p.photoAlt||('Photo from '+(p.churchName||p.authorName||'a church')))+'" loading="lazy">';
  return sceneArt(p.scene,p.id);
}
/* Video sits in a frame of its own rather than being cropped to the card: the whole picture
   is visible, letterboxed the way Instagram shows a portrait clip. */
function videoBlock(p){
  const v=p.video;
  return '<div class="post-video'+(v.portrait?' portrait':'')+'">'
    +'<video src="'+esc(v.src)+'" controls playsinline preload="metadata"'+(v.poster?' poster="'+esc(v.poster)+'"':'')+'></video>'
    +(v.session?'<span class="badge media-tag">'+ico('clock',11)+'This session</span>':'')+'</div>';
}
function audioBlock(p){
  return '<div class="post-audio"><span class="art-audio-ico">'+ico('music',20)+'</span>'
    +'<span class="stack gap-4" style="min-width:0"><span class="h3" style="font-size:14.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(p.audio.name||'Audio')+'</span>'
    +'<audio src="'+esc(p.audio.src)+'" controls preload="metadata" style="width:100%"></audio></span></div>';
}
/* Up to five pictures, laid as bricks with the first one given the room. */
function photoBricks(p,ph){
  const n=Math.min(ph.length,5);
  const cell=function(i,cls){
    return '<button class="brick-cell '+(cls||'')+'" data-act="open-image" data-id="'+esc(p.id)+'" data-i="'+i+'" aria-label="Open picture '+(i+1)+' of '+n+'">'
      +'<img src="'+esc(ph[i])+'" alt="" loading="lazy">'
      +(i===n-1&&ph.length>5?'<span class="brick-more">+'+(ph.length-5)+'</span>':'')+'</button>';
  };
  if(n===1)return '<div class="brick brick-1">'+cell(0)+'</div>';
  if(n===2)return '<div class="brick brick-2">'+cell(0)+cell(1)+'</div>';
  let rest='';
  for(let i=1;i<n;i++)rest+=cell(i);
  return '<div class="brick brick-lead" style="--rest:'+(n-1)+'">'+cell(0,'lead')+'<div class="brick-rest">'+rest+'</div></div>';
}
function postMedia(p){
  if(!hasMedia(p))return '';
  if(p.video)return videoBlock(p);
  if(p.audio)return audioBlock(p);
  const ph=photosOf(p);
  if(ph.length)return photoBricks(p,ph);
  return '<button class="post-media" data-act="open-image" data-id="'+esc(p.id)+'" data-i="0" aria-label="Open picture">'
    +mediaInner(p)+'<span class="badge media-tag">'+ico('sparkle',11)+'Artwork</span></button>';
}

/* ---------- db layer ---------- */
let DB=null;
const COLS=['churches','posts','events','readingPlans','people','comments','communities','communityRequests','churchThreads','churchConnections','storyReactions'];
/* Communities, their join requests, church threads and connections are device-local: they carry
   the seeded history, so a shared store must never replace it with a partial copy. */
const LOCAL_ONLY={communities:1,communityRequests:1,churchThreads:1,churchConnections:1,storyReactions:1};
const MAP={churches:'churches',posts:'posts',events:'events',readingPlans:'plans',people:'people',comments:'comments',
  communities:'communities',communityRequests:'cmRequests',churchThreads:'threads',churchConnections:'connections',storyReactions:'storyReacts'};
function seedFor(c){
  if(c==='posts')return (SEED.posts||[]).concat(SEED_EXTRA.stories);
  return SEED[c]||SEED_EXTRA[c]||[];
}
/* Local persistence of writes made while no live store is attached (opened as a file, or offline) */
function localAdds(){return lsGet('added',{});}
function localPatches(){return lsGet('patched',{});}
function applyLocal(c){
  const list=state.data[MAP[c]];
  (localAdds()[c]||[]).forEach(function(d){if(!list.some(function(x){return x.id===d.id;}))list.push(hydrate(d));});
  const p=localPatches()[c]||{};
  list.forEach(function(d){if(p[d.id])Object.assign(d,p[d.id]);});
}
function loadSeed(){
  COLS.forEach(function(c){state.data[MAP[c]]=seedFor(c).map(hydrate);applyLocal(c);});
  state.data.storyReacts=lsGet('storyReacts',[]);
}
async function initDB(){
  loadSeed();state.ui.ready=true;render();
  try{DB=window.claude&&window.claude.use?await window.claude.use('db'):null;}catch(e){DB=null;}
  if(!DB){state.ui.dbState='offline';render();return;}
  state.ui.dbState='live';
  COLS.forEach(function(c){
    if(LOCAL_ONLY[c])return;
    try{
      DB.collection(c).limit(200).onSnapshot(function(snap){
        if(!snap.docs.length)return;
        state.data[MAP[c]]=snap.docs.map(function(d){const o=d.data()||{};o.id=d.id;return hydrate(o);});
        if(c==='posts')SEED_EXTRA.stories.forEach(function(s){if(!state.data.posts.some(function(x){return x.id===s.id;}))state.data.posts.push(hydrate(s));});
        render();
      },function(){});
    }catch(e){}
  });
}
function localDoc(col,id){return (state.data[MAP[col]]||[]).find(function(x){return x.id===id;});}
function rememberPatch(col,id,patch){const p=localPatches();p[col]=p[col]||{};p[col][id]=Object.assign(p[col][id]||{},patch);lsSet('patched',p);}
/* Move a counter by delta, exactly once, and mirror it to the database.
   dbBump edits the in-memory document itself when there is no live database, so callers must
   never touch the document as well — doing that counted every reaction and RSVP twice. */
/* Story reactions are kept by name as well as by count: a church needs to know who was
   moved by what, not only how many taps a story collected. One row per viewer per story —
   changing your reaction rewrites your row, taking it back removes it. */
function storyReactKey(){
  const s=state.session;
  return s?(s.key||s.id):('guest:'+(lsGet('guestId',null)||(function(){const g=uid('g_');lsSet('guestId',g);return g;})()));
}
/* One row per person per thing reacted to — a post, a story, or a comment. Changing your
   reaction rewrites your row; taking it back removes it. */
function recordReaction(kind,item,k,extra){
  if(!item)return;
  const who=storyReactKey(), s=state.session;
  const rows=state.data.storyReacts;
  const i=rows.findIndex(function(r){return r.postId===item.id&&r.userKey===who;});
  if(!k){ if(i>-1)rows.splice(i,1); }
  else{
    const row=Object.assign({id:i>-1?rows[i].id:uid('sr_'),kind:kind,postId:item.id,
      churchId:item.churchId||null,userKey:who,
      userName:(s&&s.name)||'A guest',userHandle:(s&&s.handle)||'',reaction:k,at:new Date().toISOString()},extra||{});
    if(i>-1)rows[i]=row; else rows.push(row);
  }
  lsSet('storyReacts',state.data.storyReacts);
}
function recordStoryReaction(post,k){
  if(!post)return;
  recordReaction(post.type==='story'?'story':'post',post,k);
}
function bumpCount(col,id,field,delta){
  if(DB&&!LOCAL_ONLY[col]){
    const d=localDoc(col,id);
    if(d){
      const parts=field.split('.');
      if(parts.length>1){d[parts[0]]=d[parts[0]]||{};d[parts[0]][parts[1]]=Math.max(0,(Number(d[parts[0]][parts[1]])||0)+delta);}
      else d[field]=Math.max(0,(Number(d[field])||0)+delta);
    }
  }
  dbBump(col,id,field,delta);
}
async function dbBump(col,id,field,delta,extra){
  if(!DB||LOCAL_ONLY[col]){
    const d=localDoc(col,id);if(!d)return;const patch={};
    if(field.indexOf('.')>-1){const p=field.split('.');d[p[0]]=d[p[0]]||{};d[p[0]][p[1]]=Math.max(0,(Number(d[p[0]][p[1]])||0)+delta);patch[p[0]]=d[p[0]];}
    else{d[field]=Math.max(0,(Number(d[field])||0)+delta);patch[field]=d[field];}
    Object.assign(d,extra||{});Object.assign(patch,extra||{});rememberPatch(col,id,patch);return;
  }
  try{
    const ref=DB.doc(col+'/'+id), snap=await ref.get();
    if(!snap.exists)return;
    const d=snap.data()||{}, patch={};
    if(field.indexOf('.')>-1){const p=field.split('.');const cur=((d[p[0]]||{})[p[1]])||0;patch[p[0]]=Object.assign({},d[p[0]]||{});patch[p[0]][p[1]]=Math.max(0,cur+delta);}
    else patch[field]=Math.max(0,(Number(d[field])||0)+delta);
    Object.assign(patch,extra||{});
    await ref.update(patch);
  }catch(e){}
}
async function dbAdd(col,doc){
  if(DB&&!LOCAL_ONLY[col]){try{const ref=await DB.collection(col).add(doc);return ref.id;}catch(e){}}
  const id=uid(col.slice(0,2)+'_'),local=Object.assign({id:id},doc);
  state.data[MAP[col]].push(hydrate(local));
  const a=localAdds();a[col]=(a[col]||[]).concat([local]);lsSet('added',a);
  return id;
}
async function dbUpdate(col,id,patch){
  const d=localDoc(col,id);if(d)Object.assign(d,patch);
  if(!DB||LOCAL_ONLY[col]){rememberPatch(col,id,patch);return;}
  try{await DB.doc(col+'/'+id).update(patch);}catch(e){}
}

/* ---------- account sync ---------- */
/* Profiles are kept in the shared store when one is attached, and always mirrored on this
   device so a returning user is recognised on a plain web host too. */
async function saveProfile(){
  const s=state.session;
  if(!s||!s.key)return;
  const doc={name:s.name,city:s.city||'',country:s.country||'',lang:s.lang||'English',gender:s.gender||'',phone:s.phone||'',email:s.email||'',
    memberOf:s.memberOf||[],goals:s.goals||[],bio:s.bio||'',role:s.role,
    handle:s.handle||'',avatarSeed:s.avatarSeed||s.id,homeChurchId:s.homeChurchId||null,churchId:s.churchId||null,verified:!!s.verified,
    follows:state.local.follows||[],
    planId:s.planId||null,planDay:state.local.planDay||0,streak:state.local.streak||0,lastRead:state.local.lastRead||null,
    followers:s.followers||0,provider:s.provider||'email',photo:s.photo||null,updatedAt:new Date().toISOString()};
  lsSet('profile.'+s.key,doc);
  if(!DB)return;
  try{await DB.doc('profiles/'+s.key).set(doc);}catch(e){}
}
async function loadProfile(key){
  if(DB){try{const snap=await DB.doc('profiles/'+key).get();if(snap.exists)return snap.data();}catch(e){}}
  return lsGet('profile.'+key,null);
}
function applyProfile(key,p){
  const meta=state.ui.authMeta||{};
  state.session={id:p.avatarSeed||('u_'+key),key:key,role:p.role||'believer',name:p.name,city:p.city,country:p.country||'',lang:p.lang,
    gender:p.gender||'',phone:p.phone||'',memberOf:(p.memberOf||[]).slice(),goals:(p.goals||[]).slice(),
    bio:p.bio||'',handle:p.handle||'',avatarSeed:p.avatarSeed||('u_'+key),email:p.email||state.ui.authId,planId:p.planId,
    homeChurchId:p.homeChurchId||null,churchId:p.churchId||null,verified:!!p.verified,followers:p.followers||0,
    provider:meta.provider||p.provider||'email',photo:meta.photo||p.photo||null};
  state.local.follows=(p.follows||[]).slice();
  state.local.planDay=p.planDay||0;state.local.streak=p.streak||0;state.local.lastRead=p.lastRead||null;
  saveSession();saveLocal();
}

/* ---------- selectors ---------- */
function churchById(id){return state.data.churches.find(function(c){return c.id===id;})||null;}
function personById(id){return state.data.people.find(function(p){return p.id===id;})||null;}
function myChurchIds(){
  const f=(state.local.follows||[]).slice();
  const own=believerMode()&&state.session.churchId;
  if(own&&f.indexOf(own)<0)f.unshift(own);
  return f;
}
function communityById(id){return state.data.communities.find(function(c){return c.id===id;})||null;}
/* community membership: a request per (community, person); the latest one decides */
function myKey(){return state.session&&(state.session.key||state.session.id)||null;}
function myRequest(cid){
  const k=myKey();if(!k)return null;
  const list=state.data.cmRequests.filter(function(r){return r.communityId===cid&&r.userKey===k;});
  return list.sort(function(a,b){return dt(b.createdAt)-dt(a.createdAt);})[0]||null;
}
function memberStatus(cid){const r=myRequest(cid);return r?r.status:'none';}
function myCommunityIds(){return state.data.communities.filter(function(c){return memberStatus(c.id)==='approved';}).map(function(c){return c.id;});}
function visibleCommunities(){const f=myChurchIds();return state.data.communities.filter(function(c){return f.indexOf(c.churchId)>-1;});}
function pendingCommunityRequests(churchId){return state.data.cmRequests.filter(function(r){return r.churchId===churchId&&r.status==='pending';});}
function communityMemberCount(c){return (c.members||0)+state.data.cmRequests.filter(function(r){return r.communityId===c.id&&r.status==='approved'&&!/^cr\d+$/.test(r.id);}).length;}
function isMemberOf(churchId){const s=state.session;return !!(s&&(s.memberOf||[]).indexOf(churchId)>-1);}
function isMe(id){return !!(state.session&&(state.session.id===id||state.session.key===id));}
/* The account is a church; whether the church side is showing is a separate question. */
function isChurchAdmin(){return !!(state.session&&state.session.role==='church');}
function believerMode(){return isChurchAdmin()&&state.session.mode==='believer';}
function isChurchSession(){return isChurchAdmin()&&!believerMode();}
/* A pastor walking the app follows their own church and cannot un-choose it as home. */
function homeChurchLocked(){return believerMode();}
function myHomeChurchId(){
  const s=state.session;if(!s)return null;
  return believerMode()?s.churchId:(s.homeChurchId||null);
}
function authorOf(p){
  if(p.authorType==='person'){
    const per=personById(p.authorId);
    return {type:'person',id:p.authorId,name:p.authorName||(per&&per.name)||'A believer',
      sub:(per&&per.city)||p.authorCity||'',verified:false,seed:p.authorId||p.authorName};
  }
  const c=churchById(p.churchId);
  return {type:'church',id:p.churchId,name:p.churchName||(c&&c.name)||'Church',
    sub:(c&&c.city)||'',verified:!c||c.verified!==false,seed:p.churchId};
}
function isFollowing(a){return a.type==='church'&&myChurchIds().indexOf(a.id)>-1;}
function commentsFor(id){return state.data.comments.filter(function(c){return c.postId===id;}).sort(function(a,b){return dt(a.createdAt)-dt(b.createdAt);});}
function commentCount(p){const n=commentsFor(p.id).length;return n||p.comments||0;}
function reactionTotal(p){const r=p.reactions||{};return Object.keys(r).reduce(function(a,k){return a+(Number(r[k])||0);},0);}
/* The home feed is church content only. Believers speak inside communities. */
function churchPosts(){return state.data.posts.filter(function(p){return p.authorType!=='person'&&p.type!=='story';});}
/* Updates from the churches you follow come first, newest on top, with urgent prayer pinned. */
function followedPosts(){
  const f=myChurchIds();
  return churchPosts().filter(function(p){return f.indexOf(p.churchId)>-1;})
    .sort(function(a,b){
      const ua=a.type==='broadcast'&&a.priority==='Urgent'?1:0,ub=b.type==='broadcast'&&b.priority==='Urgent'?1:0;
      return ub-ua||dt(b.createdAt)-dt(a.createdAt);});
}
/* What this person leans towards, learned from their reactions, saves and followed churches. */
function interestProfile(){
  const byId={};state.data.posts.forEach(function(p){byId[p.id]=p;});
  const types={},churches={},langs={},cities={};
  const bump=function(o,k,w){if(k)o[k]=(o[k]||0)+w;};
  Object.keys(state.local.reacted||{}).forEach(function(id){const p=byId[id];if(p){bump(types,p.type,2);bump(churches,p.churchId,1);}});
  (state.local.saved||[]).forEach(function(id){const p=byId[id];if(p){bump(types,p.type,3);bump(churches,p.churchId,1);}});
  myChurchIds().forEach(function(id){const c=churchById(id);if(!c)return;(c.languages||[]).forEach(function(l){bump(langs,l,1);});bump(cities,c.city,1);});
  const s=state.session||{};
  if(s.lang)bump(langs,s.lang,2);if(s.city)bump(cities,s.city,2);
  return {types:types,churches:churches,langs:langs,cities:cities};
}
/* Once the followed feed runs out: posts from other churches, ranked by those interests. */
function suggestedPosts(){
  const f=myChurchIds(),ip=interestProfile(),now=Date.now();
  return churchPosts().filter(function(p){return f.indexOf(p.churchId)<0;}).map(function(p){
    const c=churchById(p.churchId)||{};
    let score=(ip.types[p.type]||0)*3+(ip.churches[p.churchId]||0)*2+(ip.cities[c.city]||0)*2;
    (c.languages||[]).forEach(function(l){score+=(ip.langs[l]||0);});
    score+=Math.min(6,reactionTotal(p)/150);
    score+=Math.max(0,4-(now-dt(p.createdAt).getTime())/864e5);
    let why='Popular on the ark';
    if(ip.cities[c.city])why='Near you in '+c.city;
    else if((c.languages||[]).some(function(l){return ip.langs[l];}))why='Services in '+(c.languages||[]).filter(function(l){return ip.langs[l];})[0];
    if(ip.types[p.type]>=2)why='Because you engage with '+(p.type==='sermon'?'sermons':p.type==='event'?'events':p.type==='occasion'?'occasions':'posts like this');
    return {p:p,score:score,why:why};
  }).sort(function(a,b){return b.score-a.score;});
}
function feedPosts(){return followedPosts().concat(suggestedPosts().map(function(x){return x.p;}));}
function communityThreads(id){
  return state.data.posts.filter(function(p){return p.authorType==='person'&&(!id||p.communityId===id);})
    .sort(function(a,b){return dt(b.createdAt)-dt(a.createdAt);});
}
function momentSources(){
  const cut=Date.now()-24*3600e3, out=[], seen={};
  const stories=state.data.posts.filter(function(p){return p.type==='story'&&dt(p.createdAt).getTime()>cut;})
    .sort(function(a,b){return dt(b.createdAt)-dt(a.createdAt);});
  stories.forEach(function(p){
    const a=authorOf(p),key=a.type+':'+a.id;
    if(seen[key]){seen[key].posts.push(p);return;}
    seen[key]={author:a,posts:[p],followed:isFollowing(a)};
    out.push(seen[key]);
  });
  liveEvents().forEach(function(e){
    const key='church:'+e.churchId;
    if(seen[key]){seen[key].live=true;return;}
    const c=churchById(e.churchId);
    seen[key]={author:{type:'church',id:e.churchId,name:e.churchName||(c&&c.name)||'Church',sub:(c&&c.city)||'',verified:true,seed:e.churchId},
      posts:[{id:'live-'+e.id,type:'story',content:'Live now · '+e.title,createdAt:e.datetime,churchId:e.churchId,churchName:e.churchName,
        live:true,eventId:e.id,photo:e.photo||null,scene:e.photo?null:(e.scene||'stage')}],
      followed:myChurchIds().indexOf(e.churchId)>-1,live:true};
    out.push(seen[key]);
  });
  return out.sort(function(a,b){return (b.live?4:0)+(b.followed?2:0)-((a.live?4:0)+(a.followed?2:0));});
}
/* church-to-church */
function myConnections(cid){
  return state.data.connections.filter(function(x){return x.status==='accepted'&&(x.from===cid||x.to===cid);})
    .map(function(x){return x.from===cid?x.to:x.from;});
}
function pendingFor(cid){return state.data.connections.filter(function(x){return x.status==='pending'&&x.to===cid;});}
function pendingFrom(cid){return state.data.connections.filter(function(x){return x.status==='pending'&&x.from===cid;});}
function connectionBetween(a,b){return state.data.connections.find(function(x){return (x.from===a&&x.to===b)||(x.from===b&&x.to===a);})||null;}
function threadsFor(cid){
  return state.data.threads.filter(function(t){return (t.churchIds||[]).indexOf(cid)>-1;})
    .sort(function(a,b){return dt(lastMsg(b).at)-dt(lastMsg(a).at);});
}
function lastMsg(t){const m=t.messages||[];return m[m.length-1]||{text:'',at:t.createdAt||new Date().toISOString(),from:''};}
function threadBetween(a,b){return state.data.threads.find(function(t){const ids=t.churchIds||[];return ids.indexOf(a)>-1&&ids.indexOf(b)>-1;})||null;}
function unreadThreads(cid){
  const seen=state.local.threadSeen||{};
  return threadsFor(cid).filter(function(t){const m=lastMsg(t);return m.from&&m.from!==cid&&(!seen[t.id]||dt(m.at)>dt(seen[t.id]));}).length;
}
/* reminders */
function reminderEvents(){
  const ids=state.local.rsvps||[];
  return upcomingEvents().filter(function(e){return ids.indexOf(e.id)>-1;});
}
function reminderPref(id){const r=(state.local.reminders||{})[id];return r||{d1:true,h1:true};}
function liveEvents(){return state.data.events.filter(function(e){return e.isLive;});}
function todayEvents(){return state.data.events.filter(function(e){return isToday(e.datetime);});}
function upcomingEvents(){return state.data.events.slice().filter(function(e){return dt(e.datetime)>=new Date(Date.now()-6*3600e3);}).sort(function(a,b){return dt(a.datetime)-dt(b.datetime);});}
function urgentBroadcasts(){return state.data.posts.filter(function(p){return p.type==='broadcast'&&p.priority==='Urgent';});}
function myPlan(){const id=state.session&&state.session.planId;return state.data.plans.find(function(p){return p.id===id;})||state.data.plans[0]||null;}
function planPct(){const p=myPlan();if(!p)return 0;return Math.min(100,Math.round(((state.local.planDay||0)/(p.days||30))*100));}
/* ---------- shared chrome ---------- */
/* The mark: the monogram B in the gold of the logo, a dove crossing its bowls, and the
   cross of light breaking white through the middle. Drawn once and used from 22px up — the
   dove and the flare drop away below 30px so the B alone carries the rail. */
/* The mark itself — the monogram B with the dove through it and the cross of light. The
   artwork is the logo file, not a redraw, so every place the app signs its name shows the
   real thing. Small sizes take the lighter file. */
function arkGlyph(size){
  const s=size||34;
  const src=s<=64?'assets/brand/logo-160.png':'assets/brand/logo.png';
  return '<img class="ark-mark" src="'+src+'" width="'+s+'" height="'+s+'" alt="believersArk"'
    +' style="width:'+s+'px;height:'+s+'px" decoding="async">';
}
function wordmark(size){
  const s=size||18;
  return '<span class="wordmark" style="font-size:'+s+'px"><span class="wordmark-believers">believers</span><span class="wordmark-ark foil-text">Ark</span></span>';
}
/* Toasts and full-screen overlays live in their own layers, so showing one never re-draws the
   page underneath: typing, scroll position and playing audio or video are all left alone. */
function layer(id){let el=document.getElementById(id);if(!el){el=document.createElement('div');el.id=id;document.body.appendChild(el);}return el;}
/* Play the one-shot bloom on the control the person just pressed. The DOM has been rebuilt
   by the time this runs, so the button is found again by selector. */
function bloom(sel){
  const el=document.querySelector(sel);
  if(!el)return;
  el.classList.add('bloom');
  setTimeout(function(){el.classList.remove('bloom');},560);
}
function renderToast(){layer('toast-root').innerHTML=state.ui.toast?'<div class="toast" role="status">'+esc(state.ui.toast)+'</div>':'';}
function toast(msg){state.ui.toast=msg;renderToast();clearTimeout(toast._t);toast._t=setTimeout(function(){state.ui.toast=null;renderToast();},2600);}
function go(route,params){
  if(state.ui.story||state.ui.news){state.ui.story=null;state.ui.news=null;stopStory();syncOverlay();}
  state.route=route;state.params=params||{};state.ui.sheet=null;state.ui.calPop=false;window.scrollTo({top:0,behavior:'instant'});render();
}
/* BibleGPT's mark: an open book with a speech tail and a spark of light. */
function bibleGptMark(size){
  const s=size||22;
  return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" aria-hidden="true">'
    +'<path d="M12 7.2c-1.7-1.3-4.1-1.9-6.9-1.9v10.6c2.8 0 5.2.6 6.9 1.9 1.7-1.3 4.1-1.9 6.9-1.9V5.3c-2.8 0-5.2.6-6.9 1.9Z" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>'
    +'<path d="M12 7.2v10.6" stroke="currentColor" stroke-width="1.5"/>'
    +'<path d="M8.4 17.8 6.6 20.6l3.6-1.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
    +'<path d="m18.2 1.6.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7Z" fill="currentColor"/></svg>';
}
function openSheet(kind,params){state.ui.sheet={kind:kind,params:params||{}};render();}
function closeSheet(){state.ui.sheet=null;render();}

const NAV_BELIEVER=[{k:'home',i:'home',l:'Home'},{k:'churches',i:'church',l:'Churches'},{k:'journey',i:'journey',l:'Journey'},{k:'community',i:'community',l:'Community'},{k:'me',i:'me',l:'Me'}];
const NAV_CHURCH=[{k:'console',i:'grid',l:'Console'},{k:'console-compose',i:'edit',l:'Publish'},{k:'console-c2c',i:'msg',l:'Churches'},{k:'console-events',i:'cal',l:'Events'},{k:'me',i:'me',l:'Me'}];
/* BibleGPT is a believer's tool, and one they can put away. Both entrances — the phone
   launcher and the desktop rail — answer to this. */
function gptEnabled(){return state.prefs.gpt!==false&&!isChurchSession();}
function navItems(){return isChurchSession()?NAV_CHURCH:NAV_BELIEVER;}
function navRoot(r){
  if(r==='live'||r==='soon'||r==='event'||r==='post')return state.params.from&&state.params.from!==r?navRoot(state.params.from):(isChurchSession()?'console':'home');
  if(r.indexOf('church-profile')===0||r==='person-profile')return isChurchSession()?'console-c2c':'churches';
  if(r==='saved'||r==='notifications')return r==='saved'?'me':(isChurchSession()?'console':'home');
  if(r==='biblegpt'||r==='settings')return r;
  if(r.indexOf('community-')===0)return 'community';
  if(r==='console-thread')return 'console-c2c';
  if(r==='console-communities')return 'console';
  if(r.indexOf('console')===0)return r==='console'?'console':r;
  if(r==='family')return 'me';
  if(r==='plan'||r==='prayer-new')return 'journey';
  return r;
}
function adminBar(){
  if(!believerMode())return '';
  const c=myChurch();
  return '<button class="admin-bar" data-act="mode-admin">'
    +'<span class="row gap-10" style="min-width:0">'+(c?churchLogo(c,26):ico('grid',18))
    +'<span class="stack gap-2" style="min-width:0;text-align:left"><span class="ab-t">Browsing as a believer</span>'
    +'<span class="ab-s">'+esc((c&&c.name)||'Your church')+' · tap for the console</span></span></span>'
    +'<span class="ab-go">'+ico('grid',15)+'Admin</span></button>';
}
function renderNav(){
  const items=navItems(),root=navRoot(state.route);
  return '<nav class="nav" aria-label="Primary">'
    +'<div class="nav-brand">'+arkGlyph(30)+wordmark(17)+'</div>'
    +items.map(function(n){
      const badge=(n.k==='console-c2c'&&state.session&&state.session.churchId)?(unreadThreads(state.session.churchId)+pendingFor(state.session.churchId).length):0;
      return '<button class="nav-item'+(root===n.k?' on':'')+'" data-go="'+n.k+'" aria-current="'+(root===n.k?'page':'false')+'" style="position:relative">'+ico(n.i,22)+'<span>'+n.l+'</span>'
        +(badge?'<span class="pill-count num" style="top:4px;right:10px">'+badge+'</span>':'')+'</button>';
    }).join('')
    /* desktop rail foot: BibleGPT and Settings sit apart from the main destinations */
    +'<div class="nav-foot">'
    +(gptEnabled()?'<button class="nav-item nav-gpt'+(root==='biblegpt'?' on':'')+'" data-go="biblegpt" aria-current="'+(root==='biblegpt'?'page':'false')+'">'+bibleGptMark(22)+'<span>BibleGPT</span></button>':'')
    +'<button class="nav-item'+(root==='settings'?' on':'')+'" data-go="settings" aria-current="'+(root==='settings'?'page':'false')+'">'+ico('settings',22)+'<span>Settings &amp; privacy</span></button>'
    +'</div></nav>'
    /* phones: BibleGPT opens from a floating chat launcher */
    +(root!=='biblegpt'&&gptEnabled()?'<button class="gpt-launcher" data-act="gpt-open" aria-label="Open BibleGPT — press and hold to hide">'+bibleGptMark(26)+'</button>':'');
}
function topbar(title,sub,opts){
  opts=opts||{};
  return '<header class="topbar">'+(opts.aurora===false?'':'<div class="aurora"></div>')
    +'<div class="topbar-inner">'
    +'<div class="row between gap-12">'
    +'<div class="stack gap-4" style="min-width:0">'
    +(opts.back?'<button class="row gap-6 cap" data-go="'+opts.back+'" style="margin-bottom:6px;color:var(--text-3)">'+ico('arrowL',16)+'Back</button>':'')
    +(sub?'<span class="eyebrow">'+esc(sub)+'</span>':'')
    +'<h1 class="h1">'+title+'</h1></div>'
    +(opts.actions||'')+'</div>'
    +(opts.extra||'')+'</div></header>';
}
function empty(icon,title,body,cta){
  return '<div class="glass pad empty">'+'<div style="width:56px;height:56px;border-radius:18px;display:flex;align-items:center;justify-content:center;background:var(--brand-dim);color:var(--brand)">'+ico(icon,26)+'</div>'
    +'<div class="stack gap-6"><h3 class="h2">'+esc(title)+'</h3><p class="body">'+esc(body)+'</p></div>'+(cta||'')+'</div>';
}
function ring(pct,size,label,sub){
  const s=size||74,r=(s/2)-5,c=2*Math.PI*r,off=c-(c*Math.min(100,pct)/100);
  return '<div class="ring-wrap" style="width:'+s+'px;height:'+s+'px">'
    +'<svg width="'+s+'" height="'+s+'"><circle cx="'+s/2+'" cy="'+s/2+'" r="'+r+'" stroke="var(--surface-3)" stroke-width="4" fill="none"/>'
    +'<circle cx="'+s/2+'" cy="'+s/2+'" r="'+r+'" stroke="var(--brand)" stroke-width="4" fill="none" stroke-linecap="round" '
    +'stroke-dasharray="'+c.toFixed(1)+'" stroke-dashoffset="'+off.toFixed(1)+'" style="filter:drop-shadow(0 0 6px rgba(201,151,74,.6));transition:stroke-dashoffset .8s cubic-bezier(.2,.8,.3,1)"/></svg>'
    +'<div class="ring-val"><span style="font-size:'+(s>60?18:14)+'px;font-weight:800;letter-spacing:-.02em" class="num">'+label+'</span>'
    +(sub?'<span style="font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-3)">'+sub+'</span>':'')+'</div></div>';
}
function verifiedTag(){return '<span class="badge badge-accent">'+ico('shield',12)+'Verified</span>';}

/* ---------- splash + welcome ---------- */
function viewSplash(){
  return '<div class="splash" role="status" aria-live="polite"><div class="splash-glow"></div>'
    +'<div class="splash-cross" aria-hidden="true"></div>'
    +'<div class="splash-stage" aria-hidden="true"><i class="splash-orbit orbit-a"></i><i class="splash-orbit orbit-b"></i><i class="splash-orbit orbit-c"></i>'
    +'<span class="splash-node node-church">'+ico('church',15)+'<b>Every church</b></span>'
    +'<span class="splash-node node-prayer">'+ico('sparkle',15)+'<b>Prayer</b></span>'
    +'<span class="splash-node node-people">'+ico('community',15)+'<b>Together</b></span></div>'
    +'<div class="splash-core"><div class="splash-mark">'+arkGlyph(104)+'</div>'
    +'<div class="splash-copy">'+wordmark(40)
    +'<p>One ark. Every church. Every believer.</p></div>'
    +'<div class="splash-progress"><i></i></div><span class="splash-loading">Gathering the church into one place</span></div></div>';
}
function viewWelcome(){
  return '<div class="welcome-shell">'
    +'<div class="aurora" style="height:60vh;opacity:.9"></div>'
    +'<div class="view stack welcome-inner">'
    +'<div class="welcome-hero">'
    +'<div class="stack gap-16 stagger welcome-copy">'
    +'<div class="welcome-lockup">'+arkGlyph(42)+wordmark(22)+'</div>'
    +'<span class="welcome-kicker">Faith · fellowship · one home</span>'
    +'<h1 class="display welcome-title">One ark.<br>Every church.<br><span class="foil-text welcome-serif">Every believer.</span></h1>'
    +'<p class="body welcome-deck">The whole life of the church in one calm place — services, sermons, prayer and the people you walk with.</p></div>'
    +'<div class="welcome-visual fade-up" aria-hidden="true">'
    +'<i class="visual-ring ring-one"></i><i class="visual-ring ring-two"></i><i class="visual-ring ring-three"></i>'
    +'<div class="visual-logo"><span class="visual-halo"></span>'+arkGlyph(176)+'</div>'
    +'<div class="signal-card signal-live"><span class="signal-icon">'+ico('radio',18)+'</span><span><b>Worship is live</b><small>148 believers together</small></span><i class="dot-live"></i></div>'
    +'<div class="signal-card signal-pray"><span class="signal-icon">'+ico('sparkle',18)+'</span><span><b>412 praying now</b><small>Across every church</small></span></div>'
    +'<div class="signal-card signal-church"><span class="signal-faces"><i>G</i><i>N</i><i>B</i></span><span><b>One shared home</b><small>Churches, people, purpose</small></span></div>'
    +'</div></div>'
    +'<div class="stack gap-12 mt-32 stagger welcome-roles">'
    +'<button class="glass press pad row between gap-16 welcome-role" data-go="auth" data-role="believer" style="text-align:left">'
    +'<span class="stack gap-4"><span class="h2">I\'m a believer</span><span class="cap">Follow churches, keep a journey, pray together</span></span>'
    +'<span class="icon-btn active">'+ico('chevR',20)+'</span></button>'
    +'<button class="glass press pad row between gap-16 welcome-role" data-go="auth" data-role="church" style="text-align:left">'
    +'<span class="stack gap-4"><span class="h2">I represent a church</span><span class="cap">Publish, broadcast, host events, connect with churches</span></span>'
    +'<span class="icon-btn">'+ico('chevR',20)+'</span></button>'
    +'</div>'
    +'<div class="row center mt-24"><button class="btn btn-sm btn-ghost" data-act="guest">Explore as a guest '+ico('chevR',15)+'</button></div>'
    +'<div class="row center gap-8 mt-24 cap" style="opacity:.75">'+ico('lock',14)+'<span>Prototype build — no real SMS is sent</span></div>'
    +'</div></div>';
}

/* ---------- auth ---------- */
/* Social sign-in providers. Marks follow each brand's own colours so the buttons stay recognisable. */
const SOCIAL={
  google:{label:'Google',mark:'<svg class="mark" viewBox="0 0 48 48" aria-hidden="true">'
    +'<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>'
    +'<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>'
    +'<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>'
    +'<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>'},
  facebook:{label:'Facebook',mark:'<svg class="mark" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#1877F2"/>'
    +'<path fill="#FFFFFF" d="M13.5 24v-8.4h2.8l.42-3.27H13.5v-2.1c0-.95.26-1.6 1.63-1.6h1.74V5.7a23 23 0 0 0-2.54-.13c-2.51 0-4.23 1.53-4.23 4.35v2.41H7.26v3.27h2.84V24Z"/></svg>'},
  microsoft:{label:'Microsoft',mark:'<svg class="mark" viewBox="0 0 21 21" aria-hidden="true">'
    +'<rect x="1" y="1" width="9" height="9" fill="#F25022"/><rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>'
    +'<rect x="1" y="11" width="9" height="9" fill="#00A4EF"/><rect x="11" y="11" width="9" height="9" fill="#FFB900"/></svg>'},
  apple:{label:'Apple',mark:'<span class="mark" style="color:var(--text-1)">'+ico('apple',20)+'</span>'}
};
function socialProviders(){return ((window.ARK_AUTH_CONFIG||{}).providers||[]).filter(function(p){return SOCIAL[p];});}
function authConfigured(){const c=(window.ARK_AUTH_CONFIG||{}).firebase||{};return !!(c.apiKey&&c.authDomain&&c.projectId);}
function socialButtons(){
  const list=socialProviders();
  if(!list.length)return '';
  const on=authConfigured(),busy=state.ui.authBusy;
  return '<div class="stack gap-10">'+list.map(function(p){
      return '<button class="btn btn-social" data-act="social-signin" data-p="'+p+'"'+(busy===p?' aria-busy="true"':'')+'>'
        +SOCIAL[p].mark+(busy===p?'Opening '+SOCIAL[p].label+'…':'Continue with '+SOCIAL[p].label)+'</button>';}).join('')
    +(on?'':'<p class="cap" style="text-align:center">Social sign-in switches on once the Firebase keys are added. Email works now.</p>')
    +'</div>';
}
function viewAuth(){
  const role=state.ui.authRole,church=role==='church';
  return '<div class="view stack" style="padding-top:min(8vh,60px);padding-bottom:60px;position:relative">'
    +'<div class="aurora" style="height:52vh"></div>'
    +'<div style="position:relative;z-index:2">'
    +'<button class="row gap-6 cap" data-go="welcome" style="color:var(--text-3);margin-bottom:26px">'+ico('arrowL',16)+'Back</button>'
    +'<div class="stack gap-8 stagger">'
    +'<span class="eyebrow accent">'+(church?'Church account':'Believer account')+'</span>'
    +'<h1 class="h1">'+(church?'Register your church':'Welcome home')+'</h1>'
    +'<p class="body">'+(church?'We verify every church before it goes live, so believers can trust what they see.':'Sign in with the account you already use, or with your email.')+'</p></div>'
    +'<div class="glass pad stack gap-16 mt-24 fade-up" style="animation-delay:.1s">'
    +socialButtons()
    +(socialProviders().length?'<div class="row gap-12 center"><hr class="divider grow"><span class="cap">or use your email</span><hr class="divider grow"></div>':'')
    +'<div class="field"><label class="label" for="authId">Email or phone</label>'
    +'<input class="input" id="authId" type="text" inputmode="email" autocomplete="username" placeholder="you@example.com  ·  +91 98xxx xxxxx" value="'+esc(state.ui.authId)+'"></div>'
    +'<button class="btn btn-primary btn-block" data-act="send-otp">Send one-time code '+ico('chevR',18)+'</button>'
    +'</div>'
    +(church?'<div class="glass pad stack gap-12 mt-14" style="border-color:rgba(201,151,74,.3)"><span class="eyebrow accent">Prototype shortcut</span>'
      +'<p class="cap">See the console with a full inbox, connections and history — sign in as a seeded church.</p>'
      +'<div class="stack gap-8">'+state.data.churches.filter(function(c){return /^ch\d$/.test(c.id);}).slice(0,3).map(function(c){
        return '<button class="row between gap-12" data-act="demo-church" data-id="'+c.id+'" style="text-align:left;padding:11px 13px;border-radius:var(--r-md);background:var(--surface);border:1px solid var(--border)">'
          +'<span class="row gap-10">'+churchLogo(c,34)+''
          +'<span class="stack gap-2"><span class="h3" style="font-size:14.5px">'+esc(c.name)+'</span><span class="cap">'+esc(c.pastorName||'')+' · '+esc(c.city||'')+'</span></span></span>'+ico('chevR',16)+'</button>';}).join('')+'</div></div>':'')
    +'<p class="cap mt-16" style="text-align:center;max-width:38ch;margin-inline:auto">By continuing you agree to the community guidelines. Your data is never sold and never used for ads.</p>'
    +'</div></div>';
}
function viewOtp(){
  const church=state.ui.authRole==='church';
  return '<div class="view stack" style="padding-top:min(8vh,60px);padding-bottom:60px;position:relative">'
    +'<div class="aurora" style="height:48vh"></div>'
    +'<div style="position:relative;z-index:2">'
    +'<button class="row gap-6 cap" data-go="auth" style="color:var(--text-3);margin-bottom:26px">'+ico('arrowL',16)+'Back</button>'
    +'<div class="stack gap-8"><span class="eyebrow accent">Verify it\'s you</span>'
    +'<h1 class="h1">Enter your code</h1>'
    +'<p class="body">Sent to <span style="color:var(--text-1);font-weight:600">'+esc(state.ui.authId)+'</span></p></div>'
    +'<div class="glass pad stack gap-16 mt-24">'
    +'<input class="input otp-input" id="otpInput" inputmode="numeric" maxlength="6" placeholder="••••••" autocomplete="one-time-code">'
    +'<button class="btn btn-primary btn-block" data-act="verify-otp">Verify '+ico('check',18)+'</button>'
    +'<div class="row center gap-8" style="padding:12px;border-radius:var(--r-md);background:var(--brand-dim);border:1px solid rgba(201,151,74,.26)">'
    +ico('sparkle',16,'accent')+'<span class="cap" style="color:var(--brand)">Prototype code: <b class="num" style="letter-spacing:.12em">'+state.ui.otp+'</b></span></div>'
    +'<button class="cap" data-act="send-otp" style="text-align:center">Didn\'t get it? Resend code</button>'
    +'</div>'
    +'<p class="cap mt-16" style="text-align:center">'+(church?'Next: tell us about your church.':'Next: a few things to make this yours.')+'</p>'
    +'</div></div>';
}

/* ---------- onboarding: believer ----------
   1 About you (required details, optional gender and photo, terms)  2 Your church (invite code, no skip)
   3 Your goals (multi-select tiles, skippable) */
const OB_STEPS=['About you','Your church','Your goals'];
function obField(id,label,control,error,hint,optional){
  return '<div class="field'+(error?' has-error':'')+'">'
    +'<label class="label" for="'+id+'">'+label+(optional?' <span class="opt">optional</span>':' <span class="req" aria-hidden="true">*</span>')+'</label>'
    +control
    +(error?'<span class="field-error" role="alert">'+ico('x',12)+esc(error)+'</span>':hint?'<span class="field-hint">'+esc(hint)+'</span>':'')
    +'</div>';
}
function suggestHandle(name){
  return String(name||'').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g,'')
    .replace(/[^a-z0-9]+/g,'.').replace(/^\.+|\.+$/g,'').slice(0,20);
}
/* Usernames are unique within an account type and only within it: believers share one
   namespace, churches share another, and a church may carry the same handle as a believer.
   Matching ignores case so @Grace and @grace are the same name.
   Believer handles: seeded people, plus every profile saved on this device bar your own. */
function takenHandles(){
  const own=accountKey(state.ui.authId),out={};
  state.data.people.forEach(function(p){
    if(p.handle)out[norm(p.handle)]=1;
    out[norm(suggestHandle(p.name))]=1;
  });
  try{Object.keys(localStorage).forEach(function(k){
    if(k.indexOf(LS+'profile.')!==0||k===LS+'profile.'+own)return;
    const p=lsGet(k.slice(LS.length),null);
    if(p&&p.handle&&p.role!=='church')out[norm(p.handle)]=1;});}catch(e){}
  return out;
}
function norm(h){return String(h||'').trim().toLowerCase();}
/* Church handles: every church in the directory, optionally ignoring one church's own handle
   so a church editing its profile is not told its own name is taken. */
function takenChurchHandles(exceptId){
  const out={};
  state.data.churches.forEach(function(c){
    if(exceptId&&c.id===exceptId)return;
    out[norm(c.handle||suggestHandle(c.name))]=1;
  });
  return out;
}
/* The first free handle built from a name, within whichever namespace is asked for. */
function freeHandle(name,taken){
  const base=suggestHandle(name)||'church';
  if(!taken[norm(base)])return base;
  for(let i=2;i<200;i++){const t=(base+'.'+i).slice(0,24);if(!taken[norm(t)])return t;}
  return (base+'.'+Math.floor(Math.random()*9999)).slice(0,24);
}
/* Anything typed in the composer survives a re-render — attaching a picture, switching the
   attachment kind, dropping one — so a half-written post is never lost to a tap. */
const COMPOSE_FIELDS=['fBody','fTitle','fSpeaker','fVerse','fDate','fTime','fLoc','fCap','fOpt'];
function captureCompose(){
  const d=state.ui.composeDraft=state.ui.composeDraft||{};
  COMPOSE_FIELDS.forEach(function(id){const el=document.getElementById(id);if(el)d[id]=el.value;});
  const live=document.getElementById('fLive');if(live)d.fLive=live.checked;
}
function draftVal(id){const d=state.ui.composeDraft||{};return d[id]==null?'':d[id];}
function clearCompose(){state.ui.composeDraft={};}
/* Anything typed on an onboarding step survives re-renders (chip taps, photo upload, terms). */
function captureOnboard(){
  const o=state.ui.onboard,g=function(id){const el=document.getElementById(id);return el?el.value:undefined;};
  const map={obUser:'user',obEmail:'email',obDial:'dial',obPhone:'phone',obCity:'city',obCountry:'country',obLang:'lang',obCode:'code'};
  Object.keys(map).forEach(function(id){const v=g(id);if(v!==undefined)o[map[id]]=v;});
  const t=document.getElementById('obTerms');if(t)o.terms=t.checked;
}
function viewOnboardBeliever(){
  const s=state.ui.step,o=state.ui.onboard,err=state.ui.obErrors||{};
  const fromProvider=!!(state.ui.authMeta&&state.ui.authMeta.provider&&o.emailLocked);
  let body='';
  if(s===0){
    const pic=o.photo;
    body='<div class="glass pad stack gap-18" id="obForm">'
      +'<div class="row gap-16 ob-photo">'
      +'<button class="ob-avatar" data-act="pick-avatar" data-target="onboard" aria-label="'+(pic?'Change':'Upload')+' profile photo">'
      +(pic?'<img src="'+esc(pic)+'" alt="" referrerpolicy="no-referrer">':'<span class="ob-avatar-empty">'+ico('me',30)+'</span>')
      +'<span class="ob-avatar-edit">'+ico(pic?'edit':'plus',14)+'</span></button>'
      +'<div class="stack gap-4" style="min-width:0"><span class="h3">Profile photo <span class="opt">optional</span></span>'
      +'<span class="cap">Square works best. You can crop it after choosing.</span>'
      +'<div class="row gap-8 mt-4 wrap"><button class="chip" data-act="pick-avatar" data-target="onboard">'+ico('upload',14)+(pic?'Change photo':'Upload photo')+'</button>'
      +(pic?'<button class="chip" data-act="ob-clear-photo">'+ico('x',13)+'Remove</button>':'')+'</div></div></div>'
      +obField('obUser','Username','<div class="input-group"><span class="ig-pre">@</span><input class="input" id="obUser" autocomplete="username" autocapitalize="none" spellcheck="false" maxlength="24" placeholder="rakesh.sd" value="'+esc(o.user||'')+'"></div>',err.user,'Letters, numbers, dots and underscores. This is how people find you.')
      +obField('obEmail','Email address','<input class="input" id="obEmail" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com" value="'+esc(o.email||'')+'"'+(fromProvider?' readonly':'')+'>',err.email,fromProvider?'Verified by your sign-in provider':'')
      +obField('obPhone','Contact number','<div class="input-group"><select class="select ig-select" id="obDial" aria-label="Country code">'
        +DIAL_CODES.map(function(d){return '<option'+((o.dial||'+91')===d?' selected':'')+'>'+d+'</option>';}).join('')+'</select>'
        +'<input class="input" id="obPhone" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="98765 43210" value="'+esc(o.phone||'')+'"></div>',err.phone,'Only your church admins can see this.')
      +'<div class="grid-2">'
      +obField('obCity','City','<input class="input" id="obCity" autocomplete="address-level2" placeholder="Chennai" value="'+esc(o.city||'')+'">',err.city)
      +obField('obCountry','Country','<select class="select" id="obCountry" autocomplete="country-name"><option value="">Choose…</option>'
        +COUNTRIES.map(function(c){return '<option'+((o.country||'India')===c?' selected':'')+'>'+c+'</option>';}).join('')+'</select>',err.country)
      +'</div>'
      +obField('obLang','Preferred language','<select class="select" id="obLang">'
        +LANGS.map(function(l){return '<option'+((o.lang||'English')===l?' selected':'')+'>'+l+'</option>';}).join('')+'</select>',err.lang,'Sermons and broadcasts are translated into it where possible.')
      +'<div class="field"><span class="label">Gender <span class="opt">optional</span></span><div class="row gap-8 wrap">'
        +GENDERS.map(function(g){return '<button class="chip'+(o.gender===g?' on':'')+'" data-act="ob-gender" data-v="'+g+'" aria-pressed="'+(o.gender===g)+'">'+g+'</button>';}).join('')+'</div></div>'
      +'<label class="terms-row'+(err.terms?' has-error':'')+'"><input type="checkbox" id="obTerms"'+(o.terms?' checked':'')+'>'
      +'<span class="terms-box" aria-hidden="true">'+ico('check',14)+'</span>'
      +'<span class="body" style="font-size:14px;color:var(--text-2)">I have read and agree to the <button type="button" class="link" data-act="open-terms">Terms &amp; Conditions</button> and <button type="button" class="link" data-act="open-terms">Privacy Policy</button>.</span></label>'
      +(err.terms?'<span class="field-error" role="alert">'+ico('x',12)+esc(err.terms)+'</span>':'')
      +'</div>';
  }else if(s===1){
    const c=o.churchId?churchById(o.churchId):null;
    body='<div class="glass pad stack gap-16" id="obForm">'
      +obField('obCode','Church invite code','<div class="row gap-10"><input class="input code-input grow" id="obCode" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="24" placeholder="e.g. GRACE-7291" value="'+esc(o.code||'')+'">'
        +'<button class="btn btn-primary" data-act="ob-verify-code" style="height:52px">Verify</button></div>',err.code,'Your church office or pastor shares this code with members.')
      +(c?'<div class="joined-church">'
        +'<div class="jc-cover">'+(photoFor(c.id)?'<img src="'+esc(photoFor(c.id))+'" alt="">':coverArt(c.id))+'<span class="badge badge-mint">'+ico('check',12)+'Code accepted</span></div>'
        +'<div class="row gap-12 jc-body">'+churchLogo(c,44)+''
        +'<div class="stack gap-2" style="min-width:0"><span class="row gap-6"><span class="h3">'+esc(c.name)+'</span>'+ico('shield',14,'accent')+'</span>'
        +'<span class="cap">'+esc(c.city||'')+' · '+esc((c.serviceTimes||[])[0]||'')+'</span></div>'
        +'</div></div>':'')
      +'<div class="note-box">'+ico('users',18)+'<span>Belong to more than one church? Once you\'re in, add each one from <b>Me → Join another church</b> with that church\'s own invite code.</span></div>'
      +'<p class="cap">Prototype codes to try: <button class="link" data-act="ob-fill-code" data-v="GRACE-7291">GRACE-7291</button> (Grace Cathedral), <button class="link" data-act="ob-fill-code" data-v="BETHEL-3304">BETHEL-3304</button> (Bethel Assembly).</p>'
      +'</div>';
  }else{
    const goals=o.goals||[];
    body='<div class="goal-grid">'+GOALS.map(function(g){const on=goals.indexOf(g.k)>-1;
        return '<button class="goal-tile'+(on?' on':'')+'" data-act="ob-goal" data-k="'+g.k+'" aria-pressed="'+on+'">'
          +'<span class="goal-ico">'+ico(g.icon,22)+'</span><span class="goal-check">'+ico('check',13)+'</span>'
          +'<span class="h3">'+esc(g.t)+'</span><span class="cap">'+esc(g.d)+'</span></button>';}).join('')+'</div>'
      +'<p class="cap mt-12" style="text-align:center">'+(goals.length?goals.length+' selected · ':'')+'Pick as many as you like. You can change these later.</p>';
  }
  const titles=['Tell us about you','Join your church','What are your goals?'];
  const subs=['Fields marked * are needed to continue. Only your username is shown publicly.',
    'Enter the invite code your church gave you. It connects you to your church family.',
    'Choose what you want from believersArk. We\'ll shape your journey around it.'];
  return '<div class="view stack" style="padding-top:36px;padding-bottom:120px;position:relative">'
    +'<div class="aurora" style="height:40vh"></div><div style="position:relative;z-index:2">'
    +'<div class="row gap-6 mt-4">'+OB_STEPS.map(function(t,i){
      return '<div class="stack gap-6 grow"><div style="height:3px;border-radius:9px;background:'+(i<=s?'linear-gradient(90deg,var(--brand),var(--brand-2))':'var(--surface-3)')+'"></div>'
      +'<span class="cap" style="font-size:11px;color:'+(i<=s?'var(--brand)':'var(--text-3)')+'">'+(i+1)+'. '+t+'</span></div>';}).join('')+'</div>'
    +'<div class="stack gap-8 mt-24"><h1 class="h1">'+titles[s]+'</h1><p class="body">'+subs[s]+'</p></div>'
    +'<div class="mt-24">'+body+'</div>'
    +'<div class="row gap-10 mt-24">'+(s>0?'<button class="btn btn-ghost" data-act="ob-back">Back</button>':'')
    +'<button class="btn btn-primary grow" data-act="ob-next">'+(s===2?'Enter believersArk':'Continue')+ico('chevR',18)+'</button></div>'
    +(s===2?'<button class="cap mt-16" data-act="ob-skip" style="width:100%;text-align:center">Skip for now</button>':'')
    +'</div></div>';
}

/* ---------- avatar cropping (1:1) ---------- */
const CROP={img:null,nw:0,nh:0,zoom:1,x:0,y:0,V:280,drag:null,target:'onboard'};
function cropScale(){return (CROP.V/Math.min(CROP.nw,CROP.nh))*CROP.zoom;}
function clampCrop(){
  const s=cropScale(),mx=Math.max(0,(CROP.nw*s-CROP.V)/2),my=Math.max(0,(CROP.nh*s-CROP.V)/2);
  CROP.x=Math.max(-mx,Math.min(mx,CROP.x));CROP.y=Math.max(-my,Math.min(my,CROP.y));
}
function applyCrop(){
  const img=document.getElementById('cropImg'),box=document.getElementById('cropBox');if(!img||!box||!CROP.nw)return;
  CROP.V=box.clientWidth||280;clampCrop();
  const s=cropScale();
  img.style.width=(CROP.nw*s)+'px';img.style.height=(CROP.nh*s)+'px';
  img.style.left=(CROP.V/2-CROP.nw*s/2+CROP.x)+'px';img.style.top=(CROP.V/2-CROP.nh*s/2+CROP.y)+'px';
  const z=document.getElementById('cropZoom');if(z&&Number(z.value)!==CROP.zoom)z.value=CROP.zoom;
}
function openCrop(file,target){
  if(!file||!/^image\//.test(file.type||'')){toast('That file is not an image');return;}
  if(file.size>15*1024*1024){toast('That image is over 15 MB. Try a smaller one.');return;}
  const fr=new FileReader();
  fr.onerror=function(){toast('Could not read that file');};
  fr.onload=function(){
    const img=new Image();
    img.onerror=function(){toast('Could not read that image');};
    img.onload=function(){
      Object.assign(CROP,{img:img,nw:img.naturalWidth,nh:img.naturalHeight,zoom:1,x:0,y:0,target:target||'onboard'});
      state.ui.sheetBeforeCrop=state.ui.sheet&&state.ui.sheet.kind;
      openSheet('crop');requestAnimationFrame(applyCrop);
    };
    img.src=fr.result;
  };
  fr.readAsDataURL(file);
}
function finishCrop(){
  if(!CROP.img)return null;
  applyCrop();
  const s=cropScale(),left=CROP.V/2-CROP.nw*s/2+CROP.x,top=CROP.V/2-CROP.nh*s/2+CROP.y;
  const c=document.createElement('canvas');c.width=c.height=480;
  const ctx=c.getContext('2d');ctx.imageSmoothingQuality='high';
  ctx.drawImage(CROP.img,(0-left)/s,(0-top)/s,CROP.V/s,CROP.V/s,0,0,480,480);
  try{return c.toDataURL('image/jpeg',0.86);}catch(e){return null;}
}

/* ---------- onboarding: church ---------- */
function viewOnboardChurch(){
  const o=state.ui.onboard;
  return '<div class="view stack" style="padding-top:36px;padding-bottom:120px;position:relative">'
    +'<div class="aurora" style="height:40vh"></div><div style="position:relative;z-index:2">'
    +'<div class="stack gap-8"><span class="eyebrow accent">Step 1 of 1 · Verification</span><h1 class="h1">Tell us about your church</h1>'
    +'<p class="body">This becomes your public profile. A platform reviewer checks your details before the verified badge appears.</p></div>'
    +'<div class="glass pad stack gap-16 mt-24">'
    +'<div class="field"><label class="label" for="cName">Church name</label><input class="input" id="cName" placeholder="Grace Cathedral" value="'+esc(o.name||'')+'"></div>'
    +'<div class="field'+(o.chHandleError?' has-error':'')+'"><label class="label" for="cHandle">Username</label>'
    +'<div class="input-group"><span class="ig-pre">@</span><input class="input" id="cHandle" autocapitalize="none" spellcheck="false" maxlength="24" placeholder="grace.cathedral" value="'+esc(o.chHandle||'')+'"></div>'
    +(o.chHandleError?'<span class="field-error" role="alert">'+ico('x',12)+esc(o.chHandleError)+'</span>':'<span class="field-hint">Your church\'s name on the ark. No two churches share one.</span>')+'</div>'
    +'<div class="field"><label class="label" for="cCity">City</label><input class="input" id="cCity" placeholder="Chennai" value="'+esc(o.city||'')+'"></div>'
    +'<div class="field"><label class="label" for="cAddr">Address</label><input class="input" id="cAddr" placeholder="12 Anna Salai, Teynampet"></div>'
    +'<div class="field"><label class="label" for="cTimes">Service times</label><input class="input" id="cTimes" placeholder="Sun 7:00am Tamil · Sun 9:30am English"></div>'
    +'<div class="field"><label class="label" for="cLangs">Languages</label><input class="input" id="cLangs" placeholder="Tamil, English"></div>'
    +'<div class="field"><label class="label" for="cPastor">Pastor / leader</label><input class="input" id="cPastor" placeholder="Pr. Daniel Selvam"></div>'
    +'<div class="field"><label class="label" for="cTag">One-line tagline</label><input class="input" id="cTag" placeholder="A family finding grace in the heart of the city"></div>'
    +'<button class="glass press pad-sm row between gap-12" data-act="mock-upload" style="text-align:left;border-style:dashed">'
    +'<span class="row gap-12">'+ico('upload',20,'accent')+'<span class="stack gap-2"><span class="h3">Registration documents</span><span class="cap">'+(o.docs?'trust-deed.pdf · pastor-id.pdf uploaded':'PDF or image — society/trust registration')+'</span></span></span>'
    +(o.docs?'<span class="badge badge-mint">'+ico('check',12)+'Added</span>':'<span class="icon-btn">'+ico('plus',18)+'</span>')+'</button>'
    +'</div>'
    +'<button class="btn btn-primary btn-block mt-24" data-act="church-submit">Submit for verification '+ico('chevR',18)+'</button>'
    +'<button class="cap mt-16" data-go="welcome" style="width:100%;text-align:center">Cancel</button>'
    +'</div></div>';
}
function viewPending(){
  const c=state.session&&state.session.church||{};
  return '<div class="view stack" style="padding-top:min(9vh,70px);padding-bottom:60px;position:relative">'
    +'<div class="aurora" style="height:50vh"></div><div style="position:relative;z-index:2" class="stack gap-24">'
    +'<div class="glass pad stack gap-16" style="text-align:center;align-items:center">'
    +'<div style="position:relative">'+ring(66,110,'','')+'<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--brand)">'+ico('shield',34)+'</div></div>'
    +'<span class="badge badge-accent">Pending verification</span>'
    +'<h1 class="h1">'+esc(c.name||'Your church')+' is in review</h1>'
    +'<p class="body">A platform reviewer is checking your registration documents and pastor contact. Most churches are approved within 48 hours.</p>'
    +'<div class="stack gap-10" style="width:100%;text-align:left">'
    +[['Details received','done'],['Documents under review','doing'],['Pastor contact call','next'],['Verified badge issued','next']].map(function(r){
      const done=r[1]==='done',doing=r[1]==='doing';
      return '<div class="row gap-12" style="padding:12px 14px;border-radius:var(--r-md);background:var(--surface);border:1px solid var(--border)">'
        +'<span style="color:'+(done?'var(--mint)':doing?'var(--brand)':'var(--text-3)')+'">'+ico(done?'check':doing?'clock':'chevR',18)+'</span>'
        +'<span class="'+(done||doing?'h3':'cap')+'">'+r[0]+'</span></div>';}).join('')
    +'</div></div>'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Prototype shortcut</span>'
    +'<p class="body">In the live platform a super admin approves this. For this build, approve it yourself to explore the church console.</p>'
    +'<button class="btn btn-primary btn-block" data-act="approve-church">Approve now (demo) '+ico('check',18)+'</button></div>'
    +'<button class="cap" data-act="signout" style="text-align:center">Sign out</button>'
    +'</div></div>';
}
/* ---------- home ---------- */
function verseCard(){
  const v=verseOfDay();
  return '<article class="glass pad stack gap-16" style="overflow:hidden">'
    +'<div class="aurora" style="height:200px;opacity:.5"></div>'
    +'<div class="row between" style="position:relative"><span class="eyebrow accent">Verse for today</span>'
    +'<button class="icon-btn" data-act="share-verse" aria-label="Share verse">'+ico('share',17)+'</button></div>'
    +'<p class="scripture" style="position:relative">“'+esc(v.t)+'”</p>'
    +'<div class="row between gap-12" style="position:relative"><span class="verse-ref">'+esc(v.r)+'</span>'
    +'<button class="chip" data-act="open-verse" data-r="'+esc(v.r)+'">Read in context '+ico('chevR',14)+'</button></div></article>';
}
function priorityStrip(){
  const live=liveEvents(),urgent=urgentBroadcasts(),today=todayEvents().filter(function(e){return !e.isLive;});
  const cards=[];
  live.forEach(function(e){
    cards.push('<button class="glass press pad-sm stack gap-10" data-go="event" data-id="'+e.id+'" style="min-width:250px;max-width:250px;text-align:left;border-color:rgba(227,27,72,.34)">'
      +'<span class="row between"><span class="badge badge-live"><i class="dot-live"></i>Live now</span><span class="cap num">'+(e.rsvpCount||0)+' here</span></span>'
      +'<span class="h3" style="line-height:1.3">'+esc(e.title)+'</span>'
      +'<span class="cap">'+esc(e.churchName||'')+'</span>'
      +'<span class="row gap-6 accent" style="font-size:13px;font-weight:700">'+ico('play',15)+'Join stream</span></button>');
  });
  urgent.forEach(function(p){
    cards.push('<button class="glass press pad-sm stack gap-10" data-go="post" data-id="'+p.id+'" style="min-width:250px;max-width:250px;text-align:left;border-color:rgba(232,145,154,.32)">'
      +'<span class="badge badge-rose">'+ico('hands',12)+'Urgent prayer</span>'
      +'<span class="body" style="color:var(--text-1);font-size:14.5px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">'+esc(p.content)+'</span>'
      +'<span class="cap">'+esc(p.churchName||'')+'</span></button>');
  });
  today.forEach(function(e){
    cards.push('<button class="glass press pad-sm stack gap-10" data-go="event" data-id="'+e.id+'" style="min-width:250px;max-width:250px;text-align:left">'
      +'<span class="badge badge-accent">'+ico('cal',12)+'Today · '+fmtTime(e.datetime)+'</span>'
      +'<span class="h3" style="line-height:1.3">'+esc(e.title)+'</span>'
      +'<span class="cap">'+esc(e.churchName||'')+' · '+esc(e.location||'Online')+'</span></button>');
  });
  if(!cards.length)return '';
  return '<section class="mt-24"><div class="sec-title"><span class="eyebrow accent">Happening now</span>'
    +'<span class="cap num">'+cards.length+' updates</span></div>'
    +'<div class="scroll-x" style="gap:12px">'+cards.join('')+'</div></section>';
}
function journeyRingCard(){
  const p=myPlan(),pct=planPct(),day=state.local.planDay||0,streak=state.local.streak||0;
  return '<button class="glass press pad row gap-20 between" data-go="journey" style="width:100%;text-align:left">'
    +'<div class="row gap-16">'+ring(pct,74,pct+'%','plan')
    +'<div class="stack gap-6"><span class="eyebrow">Your journey</span>'
    +'<span class="h2">'+(p?esc(p.title):'Pick a plan')+'</span>'
    +'<span class="cap">'+(p?'Day '+day+' of '+p.days:'Start a reading rhythm')+'</span></div></div>'
    +'<div class="stack gap-10" style="text-align:right;flex:none">'
    +'<span class="stack gap-2"><span class="num h3 accent">'+streak+'</span><span class="cap" style="font-size:11px">day streak</span></span>'
    +'</div></button>';
}
function authorHeader(a,p,opts){
  opts=opts||{};
  const route=a.type==='person'?'person-profile':'church-profile';
  const follow=a.type==='church'&&!isFollowing(a)&&!isChurchSession()&&a.id;
  const cm=p.communityId?communityById(p.communityId):null;
  return '<header class="row between gap-12">'
    +'<button class="row gap-12" data-go="'+route+'" data-id="'+esc(a.id||'')+'" style="min-width:0;text-align:left">'
    +(a.type==='church'?churchLogo({id:a.id,name:a.name},44):'<span class="avatar" style="background:'+grad(a.seed)+'">'+initials(a.name)+'</span>')
    +'<span class="stack gap-2" style="min-width:0"><span class="row gap-6" style="min-width:0">'
    +'<span class="h3" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(a.name)+'</span>'
    +(a.verified?'<span class="accent" style="display:flex;flex:none">'+ico('shield',14)+'</span>':'')
    +(isMe(a.id)?'<span class="badge badge-ice" style="height:19px;padding:0 7px;font-size:9.5px;flex:none">You</span>':'')+'</span>'
    +'<span class="cap" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+(cm?'in '+esc(cm.name)+' · ':a.sub?esc(a.sub)+' · ':'')+ago(p.createdAt)+(p.audience&&p.audience!=='Everyone'?' · to '+esc(p.audience):'')+'</span></span></button>'
    +'<span class="row gap-8" style="flex:none">'+(opts.tag||'')
    +(follow&&opts.follow!==false?'<button class="btn btn-xs btn-outline" data-act="follow" data-id="'+esc(a.id)+'">Follow</button>':'')
    +'</span></header>';
}
function postCard(p,opts){
  opts=opts||{};
  const a=authorOf(p);
  const reacted=state.local.reacted[p.id];
  const isBroadcast=p.type==='broadcast';
  const saved=(state.local.saved||[]).indexOf(p.id)>-1;
  const cmts=commentsFor(p.id), total=reactionTotal(p);
  /* Only sermons and events carry a tag. Ordinary posts speak for themselves, and an urgent
     broadcast still reads as urgent through the card's border. */
  const typeTag=p.type==='sermon'?'<span class="badge badge-accent">'+ico('mic',12)+'Sermon</span>'
    :p.type==='event'?'<span class="badge badge-ice">'+ico('cal',12)+'Event</span>':'';
  const topReacts=REACTIONS.filter(function(r){return (p.reactions&&p.reactions[r.k])>0;})
    .sort(function(x,y){return p.reactions[y.k]-p.reactions[x.k];}).slice(0,3);
  return '<article class="glass pad stack gap-13"'+(isBroadcast&&p.priority==='Urgent'?' style="border-color:rgba(232,145,154,.3)"':'')+'>'
    +(opts.reason?'<div class="suggest-why">'+ico('sparkle',12)+'<span>Suggested · '+esc(opts.reason)+'</span></div>':'')
    +authorHeader(a,p,{follow:opts.follow})
    +(typeTag?'<div class="row gap-8 wrap" style="margin-top:-3px">'+typeTag+'</div>':'')
    +(p.title?'<h3 class="h2" style="font-size:21px">'+esc(p.title)+'</h3>':'')
    +postMedia(p)
    +(p.type==='sermon'?'<div class="glass pad-sm row gap-12 between" style="border-radius:var(--r-md);background:var(--surface-2)">'
      +'<span class="row gap-10"><span class="icon-btn active" style="width:38px;height:38px">'+ico('play',17)+'</span>'
      +'<span class="stack gap-2"><span class="h3" style="font-size:14px">'+esc(p.speaker||'Sunday message')+'</span><span class="cap">'+esc(p.duration||'38 min')+' · auto-transcribed</span></span></span>'
      +'<button class="chip" data-act="summarise" data-id="'+p.id+'">'+ico('sparkle',14)+'Summary</button></div>':'')
    +'<p class="body" style="color:var(--text-1)">'+esc(p.content||'').replace(/\n/g,'<br>')+'</p>'
    +(p.verseRef?'<button class="glass pad-sm stack gap-6" data-act="open-verse" data-r="'+esc(p.verseRef)+'" style="text-align:left;background:var(--brand-dim);border-color:rgba(201,151,74,.24)">'
      +'<span class="scripture" style="font-size:16px">“'+esc(findVerse(p.verseRef).t)+'”</span><span class="verse-ref">'+esc(p.verseRef)+'</span></button>':'')
    +(p.type==='event'&&p.eventId?'<button class="chip" data-go="event" data-id="'+esc(p.eventId)+'">'+ico('cal',14)+'View event details</button>':'')
    +(total||cmts.length?'<div class="row between gap-10 cap" style="padding-top:2px">'
      +'<span class="row gap-6">'+(topReacts.length?'<span style="font-size:13px;letter-spacing:-2px">'+topReacts.map(function(r){return r.e;}).join('')+'</span>':'')
      +(total?'<span class="num">'+total+'</span>':'')+'</span>'
      +(cmts.length?'<button data-go="post" data-id="'+p.id+'" class="cap"><span class="num">'+cmts.length+'</span> comment'+(cmts.length>1?'s':'')+'</button>':'')+'</div>':'')
    +'<hr class="divider">'
    +'<div class="row between gap-8">'
    +'<div class="react-bar">'+REACTIONS.map(function(r){
        const n=(p.reactions&&p.reactions[r.k])||0;
        return '<button class="react'+(reacted===r.k?' on':'')+'" data-act="react" data-id="'+p.id+'" data-k="'+r.k+'" aria-label="'+r.l+'"><span class="em">'+r.e+'</span>'+(n?'<span class="num">'+n+'</span>':'')+'</button>';
      }).join('')+'</div>'
    +'<div class="row gap-6">'
    +'<button class="icon-btn" data-go="post" data-id="'+p.id+'" aria-label="Comment" style="width:36px;height:36px">'+ico('msg',16)+'</button>'
    +'<button class="icon-btn'+(saved?' active':'')+'" data-act="save-post" data-id="'+p.id+'" aria-label="Save" style="width:36px;height:36px">'+ico(saved?'check':'star',16)+'</button>'
    +'<button class="icon-btn" data-act="share-post" data-id="'+p.id+'" aria-label="Share" style="width:36px;height:36px">'+ico('share',16)+'</button>'
    +'</div></div>'
    +(cmts.length&&!opts.full?'<button class="row gap-10" data-go="post" data-id="'+p.id+'" style="text-align:left;padding-top:2px">'
      +'<span class="avatar avatar-sm" style="width:26px;height:26px;border-radius:9px;font-size:11px;background:'+grad(cmts[cmts.length-1].authorId||cmts[cmts.length-1].authorName)+'">'+initials(cmts[cmts.length-1].authorName)+'</span>'
      +'<span class="cap" style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><b style="color:var(--text-2)">'+esc(cmts[cmts.length-1].authorName)+'</b> '+esc(cmts[cmts.length-1].text)+'</span></button>':'')
    +'</article>';
}
/* ---------- newsroom ----------
   Stories published by the believersArk team, not by a church or a person. They carry the
   ark's own mark, can hold text, pictures, audio and short video, and can be shared but not
   reacted to or commented on. */
const NEWS=[
  {id:'n1',cat:'Worship',title:'Song of the week: “Amazing Grace”',dek:'Two and a half centuries on, John Newton’s hymn is still the one congregations reach for. Listen to a public-domain recording and read how it came to be.',
    cover:'w7',readMins:3,ageHours:5,media:'audio',
    blocks:[
      {t:'p',x:'John Newton wrote the words in 1772 for a New Year’s Day service in Olney, a small English market town. He had captained slave ships before his conversion, and the hymn is his own account of being found.'},
      {t:'audio',src:'assets/media/amazing-grace.mp3',title:'Amazing Grace — vocalist with guitar',credit:'United States Air Force Reserve Band, Southern Aire · public domain'},
      {t:'h',x:'Why it lasts'},
      {t:'p',x:'The melody most churches sing, “New Britain”, was paired with Newton’s words in America in 1835. Its range is narrow and its rhythm forgiving, so a room full of people who would never call themselves singers can still carry it together.'},
      {t:'quote',x:'I once was lost, but now am found; was blind, but now I see.',by:'John Newton, 1772'},
      {t:'p',x:'When worship music arrives on believersArk, you will find it in the song library with lyrics and chords. For now, play it on the way to church on Sunday.'}
    ]},
  {id:'n2',cat:'Around the world',title:'Why church bells still ring',dek:'A short film from the Gesù Church in Miami, and the long story of a sound that has called people to prayer for fifteen centuries.',
    cover:'w3',readMins:2,ageHours:26,media:'video',
    blocks:[
      {t:'p',x:'Bells entered Christian worship around the fifth century, when Paulinus of Nola is said to have hung one to call his town to prayer. Before clocks, the bell was the clock: morning, noon and evening, the whole parish knew it was time to stop and pray.'},
      {t:'video',srcs:[{src:'assets/media/church-bells.webm',type:'video/webm'},{src:'assets/media/church-bells.mov',type:'video/quicktime'}],cap:'The bells of the Gesù Church, Miami.',credit:'Video: Fallaner, CC BY-SA 4.0, via Wikimedia Commons',portrait:true},
      {t:'p',x:'Many churches in India still ring before the Sunday service, and in Kerala some towers carry bells cast more than a century ago. If yours rings, record ten seconds of it next Sunday — we would love to feature it here.'}
    ]},
  {id:'n3',cat:'On believersArk',title:'Every church now has an invite code',dek:'Joining your church takes one code, so the people in your feed are the people in your pews.',
    cover:'w5',readMins:2,ageHours:30,media:'',
    blocks:[
      {t:'p',x:'From this week, each verified church on believersArk has its own invite code. Your church office or pastor can share it with you, and entering it connects you straight to your church family: its updates, its events and its communities.'},
      {t:'p',x:'Belong to more than one church? Many families do. After you have joined, add another from your profile with that church’s code.'},
      {t:'h',x:'For church admins'},
      {t:'p',x:'Your code sits at the top of the church console. Share it in your bulletin, on the screen before service, or in your members’ group. You can also approve who joins each of your communities.'},
      {t:'img',src:'w9',cap:'Members joining their church on a Sunday morning.'}
    ]},
  {id:'n4',cat:'Stories',title:'A roof for the tarpaulin church',dek:'In Warangal district, 180 believers have met under plastic sheeting for two monsoons. This month the walls went up.',
    cover:'v1',readMins:4,ageHours:52,media:'',
    blocks:[
      {t:'p',x:'The eleventh village congregation of New Life Fellowship began in a courtyard with six families. Two years later it fills a tarpaulin shelter every Sunday, and its pastor still walks nine kilometres to lead the service.'},
      {t:'img',src:'v3',cap:'The road out to the village congregation.'},
      {t:'quote',x:'We sang louder in the rain than we ever did indoors. But the children deserve a dry floor.',by:'Pastor Ramesh, Warangal district'},
      {t:'p',x:'Volunteers from three churches laid the foundation over four weekends. The roof goes on before the next rains, and the first service under it is planned for the harvest festival.'}
    ]},
  {id:'n5',cat:'Devotional',title:'Five minutes with Psalm 23',dek:'The best-known psalm is also one of the shortest. A slow reading for a busy morning.',
    cover:'b1',readMins:5,ageHours:76,media:'',
    blocks:[
      {t:'quote',x:'The LORD is my shepherd; I shall not want.',by:'Psalm 23:1'},
      {t:'p',x:'Read the first line again, slowly. The psalm does not begin with what the shepherd gives but with who he is. Everything after it — the still waters, the valley, the table — flows from that one claim.'},
      {t:'p',x:'Try this today: before you check your phone, say the first verse aloud once. Then carry one phrase with you into the day and notice where it meets you.'}
    ]}
];
function newsById(id){return NEWS.find(function(n){return n.id===id;})||null;}
function newsImg(key){return PHOTOS[key]||key;}
function newsMediaIcon(n){return n.media==='audio'?ico('mic',12):n.media==='video'?ico('play',12):'';}
function newsroomMark(){return '<span class="nr-mark">'+arkGlyph(18)+'<span>believers<b>Ark</b> Newsroom</span></span>';}
/* ---------- today's reading (right column) ---------- */
const BIBLE_BOOKS=('Genesis 50,Exodus 40,Leviticus 27,Numbers 36,Deuteronomy 34,Joshua 24,Judges 21,Ruth 4,1 Samuel 31,2 Samuel 24,1 Kings 22,2 Kings 25,'
  +'1 Chronicles 29,2 Chronicles 36,Ezra 10,Nehemiah 13,Esther 10,Job 42,Psalms 150,Proverbs 31,Ecclesiastes 12,Song of Songs 8,Isaiah 66,Jeremiah 52,'
  +'Lamentations 5,Ezekiel 48,Daniel 12,Hosea 14,Joel 3,Amos 9,Obadiah 1,Jonah 4,Micah 7,Nahum 3,Habakkuk 3,Zephaniah 3,Haggai 2,Zechariah 14,Malachi 4,'
  +'Matthew 28,Mark 16,Luke 24,John 21,Acts 28,Romans 16,1 Corinthians 16,2 Corinthians 13,Galatians 6,Ephesians 6,Philippians 4,Colossians 4,'
  +'1 Thessalonians 5,2 Thessalonians 3,1 Timothy 6,2 Timothy 4,Titus 3,Philemon 1,Hebrews 13,James 5,1 Peter 5,2 Peter 3,1 John 5,2 John 1,3 John 1,Jude 1,Revelation 22')
  .split(',').map(function(s){const i=s.lastIndexOf(' ');return {b:s.slice(0,i),n:Number(s.slice(i+1))};});
function chaptersOf(books){const out=[];BIBLE_BOOKS.forEach(function(x){if(!books||books.indexOf(x.b)>-1)for(let c=1;c<=x.n;c++)out.push({b:x.b,c:c});});return out;}
const PLAN_CHAPTERS={rp1:chaptersOf(),rp2:chaptersOf(['Psalms']),rp3:chaptersOf(['Matthew','Mark','Luke','John'])};
/* the chapters for day n (1-based) of a plan, written the way people say them: "Luke 5–6", "Psalms 21–25" */
function planReading(p,n){
  const all=PLAN_CHAPTERS[p.id];
  if(!all)return {ref:p.todayRef||'',count:1};
  const days=p.days||all.length,a=Math.floor((n-1)*all.length/days),b=Math.floor(n*all.length/days);
  const part=all.slice(a,Math.max(b,a+1));
  const groups=[];
  part.forEach(function(x){const g=groups[groups.length-1];if(g&&g.b===x.b)g.to=x.c;else groups.push({b:x.b,from:x.c,to:x.c});});
  const ref=groups.map(function(g){const name=g.b==='Psalms'&&g.from===g.to?'Psalm':g.b;return name+' '+g.from+(g.to>g.from?'–'+g.to:'');}).join(' · ');
  return {ref:ref,count:part.length};
}
function readingDays(){
  /* the days of this week that belong to the current streak */
  const last=state.local.lastRead?dt(state.local.lastRead):null,streak=state.local.streak||0,on={};
  if(last&&streak&&(Date.now()-last.getTime())<48*3600e3)for(let i=0;i<Math.min(streak,7);i++){const d=new Date(last);d.setDate(d.getDate()-i);on[d.toDateString()]=true;}
  const now=new Date(),mon=new Date(now);mon.setDate(now.getDate()-((now.getDay()+6)%7));
  return ['M','T','W','T','F','S','S'].map(function(l,i){const d=new Date(mon);d.setDate(mon.getDate()+i);
    return {l:l,done:!!on[d.toDateString()],today:d.toDateString()===now.toDateString(),future:d>now};});
}
function railReading(){
  const s=state.session;
  if(!s||isChurchSession())return '';
  const p=myPlan()&&s.planId?myPlan():null;
  if(!p)return '<section class="rail-card rail-read" aria-label="Today\'s reading">'
    +'<div class="rail-head"><span class="row gap-8">'+ico('book',16,'accent')+'<span class="h3" style="font-size:15px">Today\'s reading</span></span></div>'
    +'<p class="cap">Pick a plan and read a little each day. We\'ll keep your place and your streak.</p>'
    +'<div class="stack gap-8 mt-12">'+state.data.plans.map(function(x){
      return '<button class="rr-plan" data-act="set-plan" data-id="'+x.id+'"><span class="stack gap-2" style="min-width:0"><b>'+esc(x.title)+'</b><span class="cap">'+x.days+' days · '+esc(x.category||'')+'</span></span>'+ico('plus',15)+'</button>';}).join('')+'</div></section>';
  const doneToday=state.local.lastRead&&isToday(state.local.lastRead);
  const day=state.local.planDay||0,finished=day>=p.days;
  const n=Math.min(p.days,doneToday||finished?Math.max(day,1):day+1),r=planReading(p,n),streak=state.local.streak||0,pct=planPct();
  return '<section class="rail-card rail-read'+(doneToday?' is-done':'')+'" aria-label="Today\'s reading">'
    +'<div class="rail-head"><span class="row gap-8">'+ico('book',16,'accent')+'<span class="h3" style="font-size:15px">Today\'s reading</span></span>'
    +'<button class="cap rr-open" data-act="open-plan">'+esc(p.title)+'</button></div>'
    +'<div class="row gap-14" style="align-items:center">'+ring(pct,62,pct+'%','')
    +'<div class="stack gap-4" style="min-width:0"><span class="eyebrow accent">'+(finished&&!doneToday?'Plan complete':'Day '+n+' of '+p.days)+'</span>'
    +'<span class="rr-ref">'+esc(r.ref)+'</span>'
    +'<span class="cap">About '+Math.max(4,r.count*4)+' minutes</span></div></div>'
    +'<div class="rr-week" aria-label="This week">'+readingDays().map(function(d){
      return '<span class="rr-day'+(d.done?' done':'')+(d.today?' today':'')+(d.future?' future':'')+'"><i>'+(d.done?ico('check',11):'')+'</i>'+d.l+'</span>';}).join('')+'</div>'
    +(doneToday
      ?'<div class="rr-done">'+ico('check',16)+'<span><b>Read today.</b> '+streak+' day streak. See you tomorrow.</span></div>'
      :finished?'<button class="btn btn-sm btn-ghost btn-block" data-act="open-plan">Choose your next plan</button>'
      :'<button class="btn btn-sm btn-primary btn-block" data-act="mark-read">'+ico('check',16)+'Mark as read</button>'
        +(streak?'<span class="cap rr-streak">'+ico('sparkle',12)+'Keep your '+streak+' day streak going</span>':''))
    +'</section>';
}
function railNews(){
  const list=state.ui.railAll?NEWS:NEWS.slice(0,3),lead=list[0];
  return '<section class="rail-card rail-news" aria-label="News from believersArk">'
    +'<div class="rail-head">'+newsroomMark()+'<span class="cap">Editor’s picks</span></div>'
    +'<button class="nr-lead" data-act="open-news" data-id="'+lead.id+'">'
      +'<span class="nr-lead-img"><img src="'+esc(newsImg(lead.cover))+'" alt="" loading="lazy">'
      +(lead.media?'<span class="nr-media">'+newsMediaIcon(lead)+(lead.media==='audio'?'Listen':'Watch')+'</span>':'')+'</span>'
      +'<span class="nr-cat">'+esc(lead.cat)+'</span><span class="nr-title">'+esc(lead.title)+'</span>'
      +'<span class="nr-meta">'+lead.readMins+' min read · '+ago(new Date(Date.now()-lead.ageHours*3600e3).toISOString())+'</span></button>'
    +list.slice(1).map(function(n){
      return '<button class="nr-row" data-act="open-news" data-id="'+n.id+'">'
        +'<span class="nr-thumb"><img src="'+esc(newsImg(n.cover))+'" alt="" loading="lazy"></span>'
        +'<span class="stack gap-2" style="min-width:0"><span class="nr-cat">'+esc(n.cat)+(n.media?' · '+newsMediaIcon(n):'')+'</span>'
        +'<span class="nr-title sm">'+esc(n.title)+'</span><span class="nr-meta">'+n.readMins+' min read</span></span></button>';}).join('')
    +'<button class="nr-more" data-act="rail-more">'+(state.ui.railAll?'Show fewer':'More stories')+ico(state.ui.railAll?'chevD':'chevR',14)+'</button>'
    +'</section>';
}
/* narrow screens: the newsroom becomes a swipeable strip inside the feed */
function newsStrip(){
  return '<section class="home-inline mt-24" aria-label="News from believersArk">'
    +'<div class="sec-title">'+newsroomMark()+'<span class="cap">Swipe for more</span></div>'
    +'<div class="scroll-x nr-strip">'+NEWS.map(function(n){
      return '<button class="nr-card" data-act="open-news" data-id="'+n.id+'">'
        +'<span class="nr-lead-img"><img src="'+esc(newsImg(n.cover))+'" alt="" loading="lazy">'
        +(n.media?'<span class="nr-media">'+newsMediaIcon(n)+(n.media==='audio'?'Listen':'Watch')+'</span>':'')+'</span>'
        +'<span class="nr-cat">'+esc(n.cat)+'</span><span class="nr-title sm">'+esc(n.title)+'</span></button>';}).join('')+'</div></section>';
}

/* ---------- my calendar (home) ----------
   Everything I have said yes to, plus what my churches have coming up — like a pocket Google Calendar. */
function calendarEvents(){
  const going=state.local.rsvps||[],f=myChurchIds();
  return state.data.events.filter(function(e){return going.indexOf(e.id)>-1||f.indexOf(e.churchId)>-1;})
    .map(function(e){return {e:e,going:going.indexOf(e.id)>-1};})
    .sort(function(a,b){return dt(a.e.datetime)-dt(b.e.datetime);});
}
function dayKey(d){return d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();}
/* the calendar lives behind an icon in the header and pops up on click */
function calendarButton(){
  const soon=calendarEvents().filter(function(x){const d=dt(x.e.datetime);return x.going&&d>=new Date(Date.now()-3*3600e3)&&d<new Date(Date.now()+7*864e5);}).length;
  const open=!!state.ui.calPop;
  return '<button class="icon-btn cal-btn'+(open?' on':'')+'" data-act="cal-toggle" aria-label="My calendar" aria-haspopup="dialog" aria-expanded="'+open+'" style="position:relative">'+ico('cal',18)
    +(soon?'<span class="pill-count num" title="Events you are going to this week">'+soon+'</span>':'')+'</button>';
}
/* drawn in its own layer so the header's clipping never cuts it off */
function syncCalPop(){
  const root=layer('pop-root');
  const open=state.ui.calPop&&document.querySelector('.cal-btn');
  if(!open){if(root.innerHTML)root.innerHTML='';state.ui.calPop=false;return;}
  const fresh=!root.innerHTML;
  root.innerHTML='<div class="cal-scrim"></div>'+railCalendar();
  if(!fresh)root.querySelector('.cal-pop').style.animation='none';
  placeCalPop();
}
function placeCalPop(){
  const p=document.getElementById('calPop'),b=document.querySelector('.cal-btn');if(!p||!b)return;
  if(innerWidth<600){p.style.left=p.style.top='';return;}
  const r=b.getBoundingClientRect(),w=p.offsetWidth;
  p.style.left=Math.max(12,Math.min(r.right-w,innerWidth-w-12))+'px';
  p.style.top=(r.bottom+10)+'px';
}
function railCalendar(compact){
  const base=state.ui.railMonth?new Date(state.ui.railMonth):new Date();
  const y=base.getFullYear(),m=base.getMonth(),today=new Date();
  const start=(new Date(y,m,1).getDay()+6)%7,days=new Date(y,m+1,0).getDate();
  const evs=calendarEvents(),marks={};
  evs.forEach(function(x){const k=dayKey(dt(x.e.datetime));marks[k]=marks[k]||{going:false,church:false};if(x.going)marks[k].going=true;else marks[k].church=true;});
  (state.local.milestones||[]).forEach(function(ms){const k=dayKey(dt(ms.date));marks[k]=marks[k]||{};marks[k].ms=true;});
  const sel=state.ui.railDay;
  let cells='';
  for(let i=0;i<start;i++)cells+='<span></span>';
  for(let d=1;d<=days;d++){
    const k=y+'-'+m+'-'+d,mk=marks[k],isT=today.getFullYear()===y&&today.getMonth()===m&&today.getDate()===d;
    cells+='<button class="mc-day'+(isT?' today':'')+(sel===k?' on':'')+(mk?' has':'')+'" data-act="rail-day" data-v="'+k+'" aria-label="'+d+' '+MONTHS[m]+(mk?', has events':'')+'">'+d
      +(mk?'<span class="mc-dots">'+(mk.going?'<i class="g"></i>':'')+(mk.church?'<i class="c"></i>':'')+(mk.ms?'<i class="m"></i>':'')+'</span>':'')+'</button>';
  }
  let agenda=evs.filter(function(x){return dt(x.e.datetime)>=new Date(Date.now()-3*3600e3);});
  let heading='Coming up';
  if(sel){const p=sel.split('-').map(Number);agenda=evs.filter(function(x){return dayKey(dt(x.e.datetime))===sel;});heading=fmtDate(new Date(p[0],p[1],p[2]).toISOString());}
  agenda=agenda.slice(0,3);
  return '<section class="rail-card rail-cal cal-pop" id="calPop" role="dialog" aria-label="My calendar">'
    +'<div class="rail-head"><span class="row gap-8"><button class="mc-nav cal-close" data-act="cal-close" aria-label="Close calendar">'+ico('x',14)+'</button><span class="h3" style="font-size:15px">My calendar</span></span>'
    +'<span class="row gap-4"><button class="mc-nav" data-act="rail-cal" data-v="-1" aria-label="Previous month">'+ico('chevL',14)+'</button>'
    +'<span class="mc-month">'+MONTHS[m]+' '+y+'</span>'
    +'<button class="mc-nav" data-act="rail-cal" data-v="1" aria-label="Next month">'+ico('chevR',14)+'</button></span></div>'
    +'<div class="mcal">'+['M','T','W','T','F','S','S'].map(function(d){return '<span class="mc-dow">'+d+'</span>';}).join('')+cells+'</div>'
    +'<div class="mc-legend"><span><i class="g"></i>Going</span><span><i class="c"></i>My churches</span><span><i class="m"></i>Milestones</span></div>'
    +'<div class="mc-agenda"><span class="eyebrow">'+esc(heading)+'</span>'
    +(agenda.length?agenda.map(function(x){const e=x.e,d=dt(e.datetime);
      return '<button class="mc-item'+(x.going?' going':'')+'" data-go="event" data-id="'+e.id+'">'
        +'<span class="mc-date"><b>'+d.getDate()+'</b>'+MONTHS[d.getMonth()]+'</span>'
        +'<span class="stack gap-2" style="min-width:0"><span class="mc-title">'+esc(e.title)+'</span>'
        +'<span class="mc-sub">'+(e.isLive?'<span class="live-txt">Live now</span> · ':fmtTime(e.datetime)+' · ')+esc(e.churchName||'')+'</span></span>'
        +(x.going?'<span class="badge badge-mint mc-badge">Going</span>':'')+'</button>';}).join('')
      :'<p class="cap">'+(sel?'Nothing on this day.':'Nothing scheduled yet. RSVP to an event and it shows up here.')+'</p>')
    +'</div></section>';
}

/* ---------- stories strip ---------- */
function momentsStrip(){
  const src=momentSources();
  if(!src.length)return '';
  const seen=state.local.seenMoments||[];
  return '<div class="scroll-x stories-strip">'
    +src.slice(0,14).map(function(m,i){
      const key=m.author.type+':'+m.author.id;
      const isSeen=seen.indexOf(key)>-1&&!m.live;
      const pic=photoFor(m.author.id);
      return '<button class="moment'+(m.live?' is-live':isSeen?' is-seen':'')+'" data-act="open-moment" data-i="'+i+'" aria-label="'+esc(m.author.name)+(m.live?' is live':' story')+'">'
        +'<span class="moment-ring"><span class="moment-inner">'+(m.author.type==='church'?churchLogo({id:m.author.id,name:m.author.name},59,'border-radius:50%;width:100%;height:100%'):'<span class="avatar" style="width:100%;height:100%;border-radius:50%;background:'+(pic?'#282828 url('+pic+') center/cover':grad(m.author.seed))+'">'+(pic?'':initials(m.author.name))+'</span>')+'</span></span>'
        +(m.live?'<span class="moment-live">Live</span>':'')
        +'<span class="moment-name">'+esc(m.author.name.split(' ')[0])+'</span></button>';
    }).join('')+'</div>';
}
function unreadNotifs(){return notifItems().filter(function(n){return !state.local.notifSeen||dt(n.t)>dt(state.local.notifSeen);}).length;}
function feedTabFilter(t){
  return function(p){
    if(t==='Sermons')return p.type==='sermon';
    if(t==='Events')return p.type==='event';
    if(t==='Occasions')return p.type==='occasion';
    return true;
  };
}
function viewHome(){
  const name=(state.session&&state.session.name)||'friend';
  const filters=['All','Sermons','Events','Occasions'];
  const t=filters.indexOf(state.ui.tab)>-1?state.ui.tab:'All',keep=feedTabFilter(t);
  const followed=followedPosts().filter(keep);
  const sugg=suggestedPosts().filter(function(x){return keep(x.p);}).slice(0,12);
  const digest=state.prefs.digest,unread=unreadNotifs(),hasFollows=myChurchIds().length>0;
  const cards=[];
  followed.slice(0,30).forEach(function(p,i){
    cards.push(postCard(p));
    if(i===2){const r=communityRail();if(r)cards.push(r);}
    if(i===4)cards.push(journeyRingCard());
  });
  let feed='';
  if(digest)feed=digestCard(followed);
  else{
    feed='<div class="stack gap-14 stagger">'+cards.join('')+'</div>';
    if(hasFollows&&followed.length)feed+='<div class="caught-up"><span class="cu-ring">'+ico('check',20)+'</span>'
      +'<span class="h3">You\'re all caught up</span><span class="cap">You\'ve seen the latest from your churches'+(t!=='All'?' in '+t.toLowerCase():'')+'.</span></div>';
    else if(hasFollows)feed+=empty('church','Nothing new here yet','Your churches haven\'t posted '+(t==='All'?'yet':t.toLowerCase()+' yet')+'. Here is what others are sharing.');
    if(sugg.length)feed+='<div class="sec-title"><span class="eyebrow accent">Suggested for you</span><span class="cap">'+(hasFollows?'Based on what you engage with':'Follow a church to fill your feed')+'</span></div>'
      +'<div class="stack gap-14">'+sugg.map(function(x){return postCard(x.p,{reason:x.why});}).join('')+'</div>';
  }
  return '<div class="home-grid"><div class="home-main">'
    +topbar(greeting()+', <span class="accent">'+esc(String(name).split(' ')[0])+'</span>',todayLabel(),{
    actions:'<div class="row gap-8">'+calendarButton()
      +'<button class="icon-btn" data-go="notifications" aria-label="Notifications" style="position:relative">'+ico('bell',18)
      +(unread?'<span class="pill-count num">'+(unread>9?'9+':unread)+'</span>':'')+'</button>'
      +'<button class="icon-btn" data-go="churches" aria-label="Search churches">'+ico('search',18)+'</button>'
      +'<button class="icon-btn mobile-only" data-go="settings" aria-label="Settings and privacy">'+ico('settings',18)+'</button></div>',
    extra:'<div class="mt-16">'+momentsStrip()+'</div>'})
    +'<div class="view stack">'
    +verseCard()
    +newsStrip()
    +priorityStrip()

    +'<div class="sec-title"><span class="eyebrow accent">From your churches</span>'
    +'<button class="chip'+(digest?' on':'')+'" data-act="toggle-digest">'+ico('list',14)+'Digest</button></div>'
    +'<div class="scroll-x" style="margin-bottom:14px">'+filters.map(function(f){
        return '<button class="chip'+(t===f?' on':'')+'" data-act="tab" data-v="'+f+'">'+f+'</button>';}).join('')+'</div>'
    +feed
    +'<div style="height:30px"></div></div></div>'
    +'<aside class="home-rail">'+railNews()+railReading()+'</aside>'
    +'</div>';
}
/* communities from my churches that I have not joined or asked to join yet */
function communityRail(){
  const list=visibleCommunities().filter(function(c){return memberStatus(c.id)==='none';}).slice(0,6);
  if(!list.length||!state.session)return '';
  return '<section class="glass pad stack gap-14">'
    +'<div class="row between"><span class="eyebrow accent">Communities at your churches</span>'
    +'<button class="cap" data-go="community">See all</button></div>'
    +'<div class="scroll-x" style="gap:12px">'+list.map(function(c){const ch=churchById(c.churchId)||{};
      return '<div class="glass pad-sm stack gap-10" style="min-width:184px;max-width:184px">'
        +'<button class="stack gap-8" data-go="community-page" data-id="'+c.id+'" style="text-align:left">'
        +'<span class="icon-btn" style="color:hsl('+c.hue+',60%,42%);border-color:hsla('+c.hue+',60%,50%,.35);background:hsla('+c.hue+',70%,60%,.12)">'+ico(c.icon||'users',18)+'</span>'
        +'<span class="stack gap-2"><span class="h3" style="font-size:14.5px">'+esc(c.name)+'</span>'
        +'<span class="cap" style="font-size:11px">'+esc(ch.name||'')+' · '+communityMemberCount(c)+' members</span></span></button>'
        +'<button class="btn btn-xs btn-outline btn-block" data-act="join-community" data-id="'+c.id+'">Request to join</button></div>';
    }).join('')+'</div></section>';
}
function digestCard(posts){
  const byType={};posts.forEach(function(p){byType[p.type]=(byType[p.type]||0)+1;});
  return '<article class="glass pad stack gap-16">'
    +'<span class="eyebrow accent">Daily digest · '+todayLabel()+'</span>'
    +'<h3 class="h2">'+posts.length+' updates from '+new Set(posts.map(function(p){return p.churchId;})).size+' churches</h3>'
    +'<div class="stack gap-10">'+Object.keys(byType).map(function(k){
      return '<div class="row between"><span class="body">'+esc(k.charAt(0).toUpperCase()+k.slice(1))+'</span><span class="num accent">'+byType[k]+'</span></div>';}).join('')+'</div>'
    +'<div class="stack gap-10">'+posts.slice(0,4).map(function(p){
      return '<button class="row gap-10 between" data-go="post" data-id="'+p.id+'" style="text-align:left;padding:12px;border-radius:var(--r-md);background:var(--surface);border:1px solid var(--border)">'
        +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14px">'+esc(p.churchName)+'</span>'
        +'<span class="cap" style="display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden">'+esc(p.title||p.content)+'</span></span>'
        +ico('chevR',16)+'</button>';}).join('')+'</div>'
    +'<button class="btn btn-ghost btn-sm btn-block" data-act="toggle-digest">Open the full feed</button></article>';
}

/* ---------- churches directory ---------- */
const DAY_ABBR=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DAY_FULL={Sun:'Sunday',Mon:'Monday',Tue:'Tuesday',Wed:'Wednesday',Thu:'Thursday',Fri:'Friday',Sat:'Saturday'};
const TIME_SLOTS=['Morning','Afternoon','Evening'];
/* "Sun 7:00am Tamil" → {day:'Sun',h:7}. Unreadable service strings are simply skipped. */
function parseServices(c){
  return (c.serviceTimes||[]).map(function(s){
    const m=String(s).match(/^(sun|mon|tue|wed|thu|fri|sat)[a-z]*\.?\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);
    if(!m)return null;
    let h=Number(m[2])%12;if((m[4]||'').toLowerCase()==='pm')h+=12;
    const d=m[1].charAt(0).toUpperCase()+m[1].slice(1,3).toLowerCase();
    return {day:d,h:h,label:s};
  }).filter(Boolean);
}
function timeSlot(h){return h<12?'Morning':h<17?'Afternoon':'Evening';}
function churchHay(c){
  const svc=parseServices(c);
  return [c.name,c.city,c.address,c.pastorName,c.tagline,(c.languages||[]).join(' '),(c.ministries||[]).join(' '),(c.serviceTimes||[]).join(' '),
    svc.map(function(x){const h12=x.h%12||12;return DAY_FULL[x.day]+' '+h12+(x.h<12?'am':'pm')+' '+timeSlot(x.h);}).join(' ')].join(' ').toLowerCase();
}
const QUERY_NOISE={near:1,me:1,service:1,services:1,church:1,churches:1,at:1,in:1,on:1,the:1,a:1,for:1};
function matchesQuery(c,q){
  const words=String(q||'').toLowerCase().split(/[\s,]+/).filter(function(w){return w&&!QUERY_NOISE[w];});
  if(!words.length)return true;
  const hay=churchHay(c);
  return words.every(function(w){return hay.indexOf(w)>-1;});
}
function allMinistries(){const out={};state.data.churches.forEach(function(c){(c.ministries||[]).forEach(function(m){out[m]=1;});});return Object.keys(out).sort();}
function allCities(){return Array.from(new Set(state.data.churches.map(function(c){return c.city;}).filter(Boolean))).sort();}
function allLangs(){return Array.from(new Set(state.data.churches.reduce(function(a,c){return a.concat(c.languages||[]);},[]))).sort();}
function activeFilterCount(f){return f.cities.length+f.langs.length+f.days.length+f.times.length+f.ministries.length+(f.live?1:0)+(f.following!=='any'?1:0);}
function filteredChurches(f){
  const liveIds=liveEvents().map(function(e){return e.churchId;}),fol=myChurchIds();
  let list=state.data.churches.filter(function(c){
    if(f.q&&!matchesQuery(c,f.q))return false;
    if(f.cities.length&&f.cities.indexOf(c.city)<0)return false;
    if(f.langs.length&&!(c.languages||[]).some(function(l){return f.langs.indexOf(l)>-1;}))return false;
    if(f.ministries.length&&!(c.ministries||[]).some(function(m){return f.ministries.indexOf(m)>-1;}))return false;
    const svc=parseServices(c);
    if(f.days.length&&!svc.some(function(x){return f.days.indexOf(x.day)>-1&&(!f.times.length||f.times.indexOf(timeSlot(x.h))>-1);}))return false;
    if(!f.days.length&&f.times.length&&!svc.some(function(x){return f.times.indexOf(timeSlot(x.h))>-1;}))return false;
    if(f.live&&liveIds.indexOf(c.id)<0)return false;
    if(f.following==='yes'&&fol.indexOf(c.id)<0)return false;
    if(f.following==='no'&&fol.indexOf(c.id)>-1)return false;
    return true;
  });
  const by={popular:function(a,b){return (b.followers||0)-(a.followers||0);},
    az:function(a,b){return String(a.name).localeCompare(String(b.name));},
    connected:function(a,b){return myConnections(b.id).length-myConnections(a.id).length;},
    live:function(a,b){return (liveIds.indexOf(b.id)>-1?1:0)-(liveIds.indexOf(a.id)>-1?1:0)||(b.followers||0)-(a.followers||0);}};
  return list.sort(by[f.sort]||by.popular);
}
function viewChurches(){
  const f=state.ui.dirFilters;
  const liveIds=liveEvents().map(function(e){return e.churchId;});
  const list=filteredChurches(f),n=activeFilterCount(f);
  const church=isChurchSession();
  const chips=[];
  f.cities.forEach(function(v){chips.push(['cities',v,v]);});
  f.langs.forEach(function(v){chips.push(['langs',v,v]);});
  f.days.forEach(function(v){chips.push(['days',v,DAY_FULL[v]]);});
  f.times.forEach(function(v){chips.push(['times',v,v]);});
  f.ministries.forEach(function(v){chips.push(['ministries',v,v]);});
  if(f.live)chips.push(['live','1','Live now']);
  if(f.following!=='any')chips.push(['following',f.following,f.following==='yes'?'Following':'Not following yet']);
  return topbar(church?'Churches on the ark':'Churches',state.data.churches.length+' verified churches · '+allCities().length+' cities',{
    actions:'<button class="icon-btn'+(state.ui.dir==='map'?' active':'')+'" data-act="dir-view" aria-label="'+(state.ui.dir==='map'?'Show list':'Show map')+'">'+ico(state.ui.dir==='map'?'list':'pin',18)+'</button>',
    back:church?'console-c2c':null,
    extra:'<div class="mt-16"><div class="row gap-10">'
      +'<div class="dir-search" id="dirSearch">'
        +'<div class="glass row gap-10 dir-input">'+ico('search',18,'dim')
        +'<input class="grow" id="dirQ" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="dirSuggest" autocomplete="off" placeholder="Search by name, city, language or ‘Sunday 9am’" value="'+esc(f.q)+'">'
        +(f.q?'<button data-act="dir-clear" aria-label="Clear search">'+ico('x',16)+'</button>':'')+'</div>'
        +'<div class="dir-suggest" id="dirSuggest" role="listbox" hidden></div>'
      +'</div>'
      +'<button class="btn btn-ghost btn-sm filter-btn" data-act="open-filters" aria-label="Filters">'+ico('filter',16)+'<span class="hide-sm">Filters</span>'+(n?'<span class="filter-count num">'+n+'</span>':'')+'</button></div>'
      +(chips.length?'<div class="scroll-x mt-12">'+chips.map(function(c){
          return '<button class="chip on" data-act="df-remove" data-g="'+c[0]+'" data-v="'+esc(c[1])+'" aria-label="Remove filter '+esc(c[2])+'">'+esc(c[2])+ico('x',12)+'</button>';}).join('')
        +'<button class="chip" data-act="df-reset">Clear all</button></div>':'')
      +'<div class="row between mt-12 cap"><span class="num">'+list.length+' church'+(list.length===1?'':'es')+(f.q?' for “'+esc(f.q)+'”':'')+'</span>'
      +'<span>Sorted by '+({popular:'most followed',az:'name',connected:'most connected',live:'live first'})[f.sort]+'</span></div>'
      +'</div>'})
    +'<div class="view stack">'
    +(state.ui.dir==='map'?mapPanel(list):'')
    +'<div class="stack gap-12 stagger mt-8">'
    +(list.length?list.map(function(c){return churchCard(c,liveIds.indexOf(c.id)>-1);}).join('')
      :empty('search',state.ui.ready?'No churches match':'Loading directory','Try a different search, or loosen a filter.',
        '<button class="btn btn-sm btn-ghost" data-act="dir-reset">Clear search and filters</button>'))+'</div>'
    +'<div style="height:30px"></div></div>';
}
/* Dropdown recommendations while typing: churches first, then quick filters and a plain search. */
function hl(text,q){
  const t=String(text||''),words=String(q||'').toLowerCase().split(/\s+/).filter(function(w){return w.length>1&&!QUERY_NOISE[w];});
  let out=esc(t);
  words.forEach(function(w){const i=out.toLowerCase().indexOf(w);if(i>-1)out=out.slice(0,i)+'<mark>'+out.slice(i,i+w.length)+'</mark>'+out.slice(i+w.length);});
  return out;
}
function suggestItems(q){
  q=String(q||'').trim();
  const items=[],liveIds=liveEvents().map(function(e){return e.churchId;});
  const ql=q.toLowerCase();
  const chRow=function(c,sub){items.push({kind:'church',id:c.id,html:'<span class="sg-thumb">'+churchLogo(c,30)+'</span>'
    +'<span class="stack gap-2" style="min-width:0"><span class="sg-title">'+hl(c.name,q)+(liveIds.indexOf(c.id)>-1?' <span class="live-txt">· Live</span>':'')+'</span>'
    +'<span class="sg-sub">'+(sub||esc(c.city||'')+' · '+esc((c.serviceTimes||[])[0]||''))+'</span></span>'});};
  if(!q){
    items.push({kind:'head',html:'Popular on the ark'});
    state.data.churches.slice().sort(function(a,b){return (b.followers||0)-(a.followers||0);}).slice(0,3).forEach(function(c){chRow(c,esc(c.city||'')+' · '+Number(c.followers||0).toLocaleString('en-IN')+' following');});
    const s=state.session;
    if(s&&s.city&&allCities().indexOf(s.city)>-1)items.push({kind:'filter',g:'cities',v:s.city,html:ico('pin',15)+'<span>Churches near you in <b>'+esc(s.city)+'</b></span>'});
    if(liveIds.length)items.push({kind:'filter',g:'live',v:'1',html:'<i class="dot-live"></i><span>Streaming live now</span>'});
    return items;
  }
  const churches=state.data.churches.filter(function(c){return matchesQuery(c,q);}).slice(0,5);
  if(churches.length){items.push({kind:'head',html:'Churches'});churches.forEach(function(c){chRow(c);});}
  const quick=[];
  allCities().forEach(function(v){if(v.toLowerCase().indexOf(ql)===0)quick.push({g:'cities',v:v,label:'Churches in <b>'+esc(v)+'</b>',icon:'pin'});});
  allLangs().forEach(function(v){if(v.toLowerCase().indexOf(ql)===0)quick.push({g:'langs',v:v,label:'<b>'+esc(v)+'</b> services',icon:'globe'});});
  DAY_ABBR.forEach(function(v){if(DAY_FULL[v].toLowerCase().indexOf(ql)===0&&ql.length>=2)quick.push({g:'days',v:v,label:'Services on <b>'+DAY_FULL[v]+'</b>',icon:'cal'});});
  allMinistries().forEach(function(v){if(v.toLowerCase().indexOf(ql)>-1)quick.push({g:'ministries',v:v,label:'Churches with <b>'+esc(v)+'</b>',icon:'users'});});
  if(quick.length){items.push({kind:'head',html:'Filters'});quick.slice(0,4).forEach(function(x){items.push({kind:'filter',g:x.g,v:x.v,html:ico(x.icon,15)+'<span>'+x.label+'</span>'});});}
  items.push({kind:'search',html:ico('search',15)+'<span>Search all churches for “'+esc(q)+'”</span>'});
  return items;
}
function buildSuggest(){
  const box=document.getElementById('dirSuggest'),inp=document.getElementById('dirQ');if(!box||!inp)return;
  const items=suggestItems(inp.value);
  state.ui.sgItems=items;state.ui.sgIndex=-1;
  let n=0;
  box.innerHTML=items.map(function(it){
    if(it.kind==='head')return '<div class="sg-head">'+it.html+'</div>';
    const i=n++;
    return '<button type="button" class="sg-item" role="option" id="sg-'+i+'" data-sg="'+i+'">'+it.html+'</button>';
  }).join('');
  box.hidden=!items.length;inp.setAttribute('aria-expanded',String(!box.hidden));
}
function hideSuggest(){const box=document.getElementById('dirSuggest'),inp=document.getElementById('dirQ');if(box)box.hidden=true;if(inp)inp.setAttribute('aria-expanded','false');}
function pickSuggest(i){
  const items=(state.ui.sgItems||[]).filter(function(x){return x.kind!=='head';}),it=items[i];if(!it)return;
  const f=state.ui.dirFilters,inp=document.getElementById('dirQ');
  hideSuggest();
  if(it.kind==='church'){state.ui.churchTab='Posts';go('church-profile',{id:it.id,from:'churches'});return;}
  if(it.kind==='filter'){
    if(it.g==='live')f.live=true;else if(f[it.g].indexOf(it.v)<0)f[it.g].push(it.v);
    f.q='';render();return;
  }
  f.q=inp?inp.value.trim():'';render();
}
function moveSuggest(d){
  const opts=document.querySelectorAll('#dirSuggest .sg-item');if(!opts.length)return;
  let i=(state.ui.sgIndex==null?-1:state.ui.sgIndex)+d;
  if(i<0)i=opts.length-1;if(i>=opts.length)i=0;
  state.ui.sgIndex=i;
  opts.forEach(function(o,k){o.classList.toggle('on',k===i);o.setAttribute('aria-selected',String(k===i));});
  const inp=document.getElementById('dirQ');if(inp)inp.setAttribute('aria-activedescendant','sg-'+i);
  opts[i].scrollIntoView({block:'nearest'});
}
function restoreDirSearch(){
  if(!state.ui.dirRefocus)return;state.ui.dirRefocus=false;
  const inp=document.getElementById('dirQ');if(inp){inp.focus();const n=inp.value.length;inp.setSelectionRange(n,n);}
}
function filterSheet(){
  const f=state.ui.draftFilters||state.ui.dirFilters;
  const group=function(title,g,values,labels){
    return '<div class="fs-group"><span class="label">'+title+'</span><div class="row gap-8 wrap">'+values.map(function(v,i){
      const on=f[g].indexOf(v)>-1;
      return '<button class="chip'+(on?' on':'')+'" data-act="df-toggle" data-g="'+g+'" data-v="'+esc(v)+'" aria-pressed="'+on+'">'+esc(labels?labels[i]:v)+'</button>';}).join('')+'</div></div>';
  };
  const count=filteredChurches(f).length;
  return '<div class="row between"><span class="h2">Filter churches</span><button class="cap" data-act="df-draft-reset">Reset</button></div>'
    +'<div class="fs-group mt-16"><span class="label">Sort by</span><div class="row gap-8 wrap">'
    +[['popular','Most followed'],['az','Name A–Z'],['connected','Most connected'],['live','Live first']].map(function(s){
      return '<button class="chip'+(f.sort===s[0]?' on':'')+'" data-act="df-sort" data-v="'+s[0]+'">'+s[1]+'</button>';}).join('')+'</div></div>'
    +group('City','cities',allCities())
    +group('Service language','langs',allLangs())
    +group('Service day','days',DAY_ABBR,DAY_ABBR.map(function(d){return DAY_FULL[d];}))
    +group('Time of day','times',TIME_SLOTS)
    +group('Ministries','ministries',allMinistries())
    +'<div class="fs-group"><span class="label">Show</span><div class="row gap-8 wrap">'
    +'<button class="chip'+(f.live?' on':'')+'" data-act="df-live"><i class="dot-live"></i>Live now</button>'
    +[['any','All churches'],['yes','Following'],['no','Not following yet']].map(function(x){
      return '<button class="chip'+(f.following===x[0]?' on':'')+'" data-act="df-following" data-v="'+x[0]+'">'+x[1]+'</button>';}).join('')+'</div></div>'
    +'<button class="btn btn-primary btn-block mt-16" data-act="df-apply"'+(count?'':' disabled')+'>'+(count?'Show '+count+' church'+(count===1?'':'es'):'No churches match')+'</button>';
}
function mapPanel(list){
  return '<div class="glass" style="height:210px;overflow:hidden;position:relative;margin-bottom:14px">'
    +'<div class="cover-art" style="background:radial-gradient(70% 90% at 30% 20%,rgba(232,200,142,.22),transparent 62%),linear-gradient(160deg,#111A3E,#0A0F2A)"></div>'
    +'<svg viewBox="0 0 400 210" style="position:absolute;inset:0;width:100%;height:100%" aria-hidden="true">'
    +'<g stroke="rgba(232,200,142,.16)" stroke-width="1">'
    +[40,80,120,160].map(function(y){return '<path d="M0 '+y+'h400"/>';}).join('')
    +[70,150,230,310].map(function(x){return '<path d="M'+x+' 0v210"/>';}).join('')+'</g>'
    +'<path d="M0 150 C80 120 120 60 200 52 S340 30 400 10" stroke="rgba(201,151,74,.28)" stroke-width="1.4" fill="none"/></svg>'
    +list.slice(0,6).map(function(c,i){
      const x=14+((Math.abs(hash(c.id))%78)),y=16+((Math.abs(hash(c.name))%62));
      return '<button data-go="church-profile" data-id="'+c.id+'" style="position:absolute;left:'+x+'%;top:'+y+'%;transform:translate(-50%,-100%)" aria-label="'+esc(c.name)+'">'
        +'<span style="display:flex;align-items:center;gap:6px;padding:6px 11px;border-radius:99px;background:rgba(34,22,12,.85);border:1px solid rgba(201,151,74,.4);color:var(--gold-lift);font-size:11px;font-weight:700;white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,.4)">'
        +ico('pin',13)+esc(c.name.split(' ')[0])+'</span></button>';}).join('')
    +'<div style="position:absolute;left:14px;bottom:12px;color:#B4BDCA" class="cap">Prototype map · '+list.length+' church'+(list.length===1?'':'es')+' in view</div></div>';
}
/* Hovering a church lifts the card and opens its banner with timings, following and connections. */
function churchCard(c,isLive){
  if(isChurchSession())return churchCardC2C(c,isLive);
  const following=myChurchIds().indexOf(c.id)>-1,member=isMemberOf(c.id);
  const conns=myConnections(c.id).length,comms=state.data.communities.filter(function(x){return x.churchId===c.id;}).length;
  const pic=photoFor(c.id),svc=parseServices(c);
  const next=svc.length?svc[0].label:((c.serviceTimes||[])[0]||'Service times inside');
  return '<article class="church-card glass press" data-go="church-profile" data-id="'+c.id+'">'
    +'<div class="cc-banner" aria-hidden="true"><div class="cc-banner-in">'
      +'<div class="cc-img">'+(pic?'<img src="'+esc(pic)+'" alt="" loading="lazy">':coverArt(c.id))+'</div>'
      +'<div class="cc-info">'
        +'<div class="cc-times">'+(c.serviceTimes||[]).slice(0,3).map(function(t){return '<span>'+ico('clock',12)+esc(t)+'</span>';}).join('')+'</div>'
        +'<div class="cc-stats"><span><b class="num">'+Number(c.followers||0).toLocaleString('en-IN')+'</b> following</span>'
        +'<span><b class="num">'+conns+'</b> connected '+(conns===1?'church':'churches')+'</span>'
        +'<span><b class="num">'+comms+'</b> '+(comms===1?'community':'communities')+'</span></div>'
      +'</div>'
      +(isLive?'<span class="badge badge-live cc-live"><i class="dot-live"></i>Live now</span>':'')
    +'</div></div>'
    +'<div class="pad stack gap-14">'
    +'<div class="row between gap-12"><div class="row gap-14" style="min-width:0">'
    +''+churchLogo(c,56)+''
    +'<div class="stack gap-6" style="min-width:0">'
    +'<div class="row gap-6 wrap"><h3 class="h2" style="font-size:20px">'+esc(c.name)+'</h3>'+(c.verified!==false?'<span class="accent" style="display:flex;align-self:center">'+ico('shield',15)+'</span>':'')+'</div>'
    +'<span class="cap">'+esc(c.city||'')+(c.pastorName?' · '+esc(c.pastorName):'')+'</span>'
    +'<div class="row gap-6 wrap">'+(isLive?'<span class="badge badge-live"><i class="dot-live"></i>Live</span>':'')
    +(member?'<span class="badge badge-mint">'+ico('check',11)+'Member</span>':'')
    +(c.languages||[]).slice(0,3).map(function(l){return '<span class="badge badge-ice">'+esc(l)+'</span>';}).join('')+'</div>'
    +'</div></div></div>'
    +'<p class="body" style="font-size:14.5px">'+esc(c.tagline||'')+'</p>'
    +'<div class="row between gap-12">'
    +'<span class="cap row gap-6">'+ico('clock',14)+esc(next)+'</span>'
    +'<button class="btn btn-xs '+(following?'btn-ghost':'btn-outline')+'" data-act="follow" data-id="'+c.id+'">'+(following?ico('check',14)+'Following':ico('plus',14)+'Follow')+'</button>'
    +'</div></div></article>';
}
/* the same card seen through a church account: connect / message instead of follow */
function c2cButtons(c,size){
  const me=state.session&&state.session.churchId;
  if(!me||c.id===me)return '';
  const conn=connectionBetween(me,c.id);
  const cls='btn '+(size||'btn-xs');
  if(conn&&conn.status==='accepted')return '<button class="'+cls+' btn-primary" data-act="c2c-message" data-id="'+c.id+'">'+ico('msg',14)+'Message</button>';
  if(conn&&conn.status==='pending'&&conn.to===me)return '<button class="'+cls+' btn-primary" data-act="c2c-accept" data-id="'+conn.id+'">'+ico('check',14)+'Accept</button>';
  if(conn&&conn.status==='pending')return '<button class="'+cls+' btn-ghost" data-act="c2c-cancel" data-id="'+conn.id+'">'+ico('clock',14)+'Requested</button>';
  return '<button class="'+cls+' btn-outline" data-act="c2c-connect" data-id="'+c.id+'">'+ico('plus',14)+'Connect</button>';
}
function churchCardC2C(c,isLive){
  const me=state.session.churchId;
  const shared=myConnections(me).filter(function(id){return myConnections(c.id).indexOf(id)>-1;}).length;
  return '<article class="glass press pad stack gap-14" data-go="church-profile" data-id="'+c.id+'">'
    +'<div class="row between gap-12"><div class="row gap-14" style="min-width:0">'
    +''+churchLogo(c,56)+''
    +'<div class="stack gap-6" style="min-width:0">'
    +'<div class="row gap-6 wrap"><h3 class="h2" style="font-size:20px">'+esc(c.name)+'</h3>'+(c.verified!==false?'<span class="accent" style="display:flex;align-self:center">'+ico('shield',15)+'</span>':'')+'</div>'
    +'<span class="cap">'+esc(c.city||'')+' · '+esc(c.pastorName||'')+'</span>'
    +'<div class="row gap-6 wrap">'+(isLive?'<span class="badge badge-live"><i class="dot-live"></i>Live</span>':'')
    +'<span class="badge badge-ice num">'+myConnections(c.id).length+' connections</span>'+(shared?'<span class="badge badge-accent num">'+shared+' shared</span>':'')+'</div>'
    +'</div></div></div>'
    +'<p class="body" style="font-size:14.5px">'+esc(c.tagline||'')+'</p>'
    +'<div class="row between gap-12"><span class="cap row gap-6">'+ico('users',14)+'<span class="num">'+Number(c.followers||0).toLocaleString('en-IN')+'</span> followers</span>'+c2cButtons(c)+'</div></article>';
}
/* ---------- church profile ---------- */
function viewChurchProfile(){
  const c=churchById(state.params.id);
  if(!c)return '<div class="view screen-pad">'+empty('church','Church not found','This profile may still be syncing.','<button class="btn btn-sm btn-ghost" data-go="churches">Back to directory</button>')+'</div>';
  const following=myChurchIds().indexOf(c.id)>-1;
  const home=myHomeChurchId()===c.id;
  const church=isChurchSession(),mine=church&&state.session.churchId===c.id;
  const tab=state.ui.churchTab;
  const posts=churchPosts().filter(function(p){return p.churchId===c.id;}).sort(function(a,b){return dt(b.createdAt)-dt(a.createdAt);});
  const conns=myConnections(c.id).map(churchById).filter(Boolean);
  const evs=upcomingEvents().filter(function(e){return e.churchId===c.id;});
  const serms=posts.filter(function(p){return p.type==='sermon';});
  const live=liveEvents().filter(function(e){return e.churchId===c.id;})[0];
  let body='';
  if(tab==='Posts')body=posts.length?'<div class="stack gap-14 stagger">'+posts.map(function(p){return postCard(p);}).join('')+'</div>':empty('edit','No posts yet','When this church publishes, it will appear here.');
  else if(tab==='Events')body=evs.length?'<div class="stack gap-12 stagger">'+evs.map(eventCard).join('')+'</div>':empty('cal','No upcoming events','Check back soon — events are added weekly.');
  else if(tab==='Sermons')body=serms.length?'<div class="stack gap-12 stagger">'+serms.map(function(p){
      return '<button class="glass press pad-sm row gap-14 between" data-go="post" data-id="'+p.id+'" style="text-align:left">'
        +'<span class="row gap-12" style="min-width:0"><span class="icon-btn active" style="flex:none">'+ico('play',18)+'</span>'
        +'<span class="stack gap-3" style="min-width:0"><span class="h3">'+esc(p.title||'Message')+'</span>'
        +'<span class="cap">'+esc(p.speaker||c.pastorName||'')+' · '+fmtDate(p.createdAt)+' · '+esc(p.duration||'38 min')+'</span></span></span>'
        +ico('chevR',18)+'</button>';}).join('')+'</div>':empty('mic','Sermon library is filling up','Recorded messages appear here with transcript and summary.');
  else if(tab==='Communities'){
    /* Communities belong to the people who walk with a church, so they stay out of sight
       until you follow it. */
    const comms=state.data.communities.filter(function(x){return x.churchId===c.id;});
    body=(!following&&!church)
      ?empty('lock','Communities are for followers','Follow '+esc(c.name)+' to see its communities and ask to join one.',
        '<button class="btn btn-sm btn-primary" data-act="follow" data-id="'+esc(c.id)+'">'+ico('plus',16)+'Follow '+esc(c.name)+'</button>')
      :comms.length?'<div class="stack gap-12">'+comms.map(communityCard).join('')+'</div>'
      :empty('users','No communities yet','When '+c.name+' starts a community, it appears here.');
  }
  else body='<div class="stack gap-14">'
      +'<div class="glass pad stack gap-12"><span class="eyebrow accent">About</span><p class="body">'+esc(c.about||c.tagline||'')+'</p></div>'
      +'<div class="glass pad stack gap-14"><span class="eyebrow accent">Service times</span>'
      +(c.serviceTimes||[]).map(function(s){return '<div class="row gap-10">'+ico('clock',16,'dim')+'<span class="body" style="color:var(--text-1)">'+esc(s)+'</span></div>';}).join('')
      +'<hr class="divider"><div class="row gap-10">'+ico('pin',16,'dim')+'<span class="body" style="color:var(--text-1)">'+esc(c.address||c.city||'')+'</span></div>'
      +'<div class="row gap-10">'+ico('me',16,'dim')+'<span class="body" style="color:var(--text-1)">'+esc(c.pastorName||'')+'</span></div>'
      +'<div class="row gap-10">'+ico('globe',16,'dim')+'<span class="body" style="color:var(--text-1)">'+esc((c.languages||[]).join(' · '))+'</span></div></div>'
      +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Ministries</span><div class="row gap-8 wrap">'
      +(c.ministries||[]).map(function(m){return '<span class="chip static">'+esc(m)+'</span>';}).join('')+'</div></div>'
      +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Gallery</span><div class="scroll-x" style="gap:10px">'
      +['arches','festival','stage','water','hills','table'].map(function(k,i){
        return '<div style="width:148px;height:100px;border-radius:14px;flex:none;overflow:hidden;position:relative;border:1px solid var(--border)">'+sceneArt(k,c.id+k+i)+'</div>';}).join('')
      +'</div><p class="cap">Scene artwork until this church uploads its own photographs.</p></div>'
      +'';
  return '<div class="view-wide" style="padding-top:14px">'
    +'<button class="row gap-6 cap mt-8" data-go="'+(church?'console-c2c':'churches')+'" style="color:var(--text-3);margin-bottom:12px">'+ico('arrowL',16)+(church?'Churches':'Directory')+'</button>'
    +'<div class="cover church-profile-cover">'+((c.banner||photoFor(c.id))?'<img src="'+esc(c.banner||photoFor(c.id))+'" alt="'+esc(c.name)+'" style="width:100%;height:100%;object-fit:cover;display:block">':coverArt(c.id))+'</div>'
    +'<div class="view church-profile-wrap">'
    +'<div class="glass church-profile-panel pad stack gap-16">'
    +'<div class="row between gap-12 church-profile-avatar-row">'
    +''+churchLogo(c,84,'border:3px solid var(--bg-1)')+''
    +(live?'<button class="badge badge-live" data-go="event" data-id="'+live.id+'" style="height:30px;padding:0 12px"><i class="dot-live"></i>Live now</button>':'')+'</div>'
    +'<div class="stack gap-8"><div class="row gap-8 wrap"><h1 class="h1">'+esc(c.name)+'</h1>'+(c.verified!==false?verifiedTag():'<span class="badge badge-ice">Pending</span>')+'</div>'
    +(c.handle?'<span class="cap" style="font-size:14px">@'+esc(c.handle)+'</span>':'')
    +'<p class="body">'+esc(c.tagline||'')+'</p>'
    +'<div class="row gap-14 wrap cap">'
    +'<span class="row gap-6">'+ico('me',14)+'<span class="num">'+Number(c.followers||0).toLocaleString('en-IN')+'</span> following</span>'
    +'<button class="row gap-6 link-count" data-act="show-connections" data-id="'+esc(c.id)+'">'+ico('church',14)+'<span class="num">'+conns.length+'</span> connections</button>'
    +'<span class="row gap-6">'+ico('pin',14)+esc(c.city||'')+'</span>'
    +'<span class="row gap-6">'+ico('globe',14)+esc((c.languages||[]).slice(0,2).join(', '))+'</span></div></div>'
    +(church
      ?'<div class="row gap-10 wrap">'+(mine?'<button class="btn btn-sm btn-primary grow" data-go="console">'+ico('grid',16)+'Open console</button>':c2cButtons(c,'btn-sm grow'))
        +'<button class="icon-btn" data-act="share-church" data-id="'+c.id+'" aria-label="Share">'+ico('share',17)+'</button></div>'
      :'<div class="row gap-10 wrap">'
        +'<button class="btn btn-sm '+(following?'btn-ghost':'btn-primary')+' grow" data-act="follow" data-id="'+c.id+'">'+(following?ico('check',16)+'Following':ico('plus',16)+'Follow')+'</button>'
        +(homeChurchLocked()
          ?(home?'<span class="btn btn-sm btn-ghost" style="pointer-events:none;opacity:.75">'+ico('lock',15)+'Home church</span>':'')
          :'<button class="btn btn-sm btn-ghost" data-act="home-church" data-id="'+c.id+'">'+ico(home?'check':'star',16)+(home?'Home church':'Set as home')+'</button>')
        +'<button class="icon-btn" data-act="share-church" data-id="'+c.id+'" aria-label="Share">'+ico('share',17)+'</button></div>')
    +'</div>'
    +'<div class="tabs mt-16">'+(['Posts','Events','Sermons'].concat(following||church?['Communities']:[]).concat(['About'])).map(function(t){
        return '<button class="tab'+(tab===t?' on':'')+'" data-act="church-tab" data-v="'+t+'">'+t+'</button>';}).join('')+'</div>'
    +'<div class="mt-16">'+body+'</div><div style="height:36px"></div></div></div>';
}
function eventCard(e){
  const going=(state.local.rsvps||[]).indexOf(e.id)>-1;
  return '<article class="glass press pad stack gap-12" data-go="event" data-id="'+e.id+'">'
    +'<div class="row between gap-12">'
    +'<div class="stack gap-3" style="min-width:0">'
    +'<span class="row gap-8">'+(e.isLive?'<span class="badge badge-live"><i class="dot-live"></i>Live</span>':'<span class="badge badge-accent">'+fmtDate(e.datetime)+'</span>')
    +'<span class="cap">'+fmtTime(e.datetime)+'</span></span>'
    +'<h3 class="h2" style="font-size:19px;margin-top:4px">'+esc(e.title)+'</h3>'
    +'<span class="cap">'+esc(e.churchName||'')+' · '+esc(e.location||'Online')+'</span></div>'
    +'<div class="stack center gap-2" style="flex:none;width:56px;height:56px;border-radius:18px;background:var(--surface-2);border:1px solid var(--border)">'
    +'<span class="num" style="font-size:20px;line-height:1;font-weight:800;letter-spacing:-.02em">'+dt(e.datetime).getDate()+'</span>'
    +'<span class="cap" style="font-size:10px;text-transform:uppercase;letter-spacing:.1em">'+MONTHS[dt(e.datetime).getMonth()]+'</span></div></div>'
    +'<div class="row between gap-12"><span class="cap row gap-6">'+ico('users',14)+'<span class="num">'+(e.rsvpCount||0)+'</span> going'+(e.capacity?' · '+e.capacity+' seats':'')+'</span>'
    +'<button class="btn btn-xs '+(going?'btn-ghost':'btn-outline')+'" data-act="rsvp" data-id="'+e.id+'">'+(going?ico('check',13)+'Going':'RSVP')+'</button></div></article>';
}
function viewEvent(){
  const e=state.data.events.find(function(x){return x.id===state.params.id;});
  if(!e)return '<div class="view screen-pad">'+empty('cal','Event not found','It may have ended or been removed.','<button class="btn btn-sm btn-ghost" data-go="home">Home</button>')+'</div>';
  const going=(state.local.rsvps||[]).indexOf(e.id)>-1;
  const c=churchById(e.churchId);
  return '<div class="view" style="padding-top:14px">'
    +'<button class="row gap-6 cap mt-8" data-go="'+(state.params.from||'home')+'" style="color:var(--text-3);margin-bottom:12px">'+ico('arrowL',16)+'Back</button>'
    +'<div class="cover" style="height:'+(e.isLive?'220px':'160px')+'">'+(hasMedia(e)?mediaInner(e):coverArt(e.id))
    +(e.isLive?'<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px">'
      +'<button class="icon-btn active" data-act="join-live" data-id="'+e.id+'" style="width:66px;height:66px;background:rgba(34,22,12,.7);box-shadow:0 0 30px rgba(201,151,74,.35)">'+ico('play',26)+'</button>'
      +'<span class="badge badge-live"><i class="dot-live"></i>Live now · <span class="num">'+(e.rsvpCount||0)+'</span> here</span></div>':'')
    +'</div>'
    +'<div class="glass pad stack gap-16 mt-16">'
    +'<div class="stack gap-8">'
    +'<span class="row gap-8 wrap">'+(e.isLive?'<span class="badge badge-live"><i class="dot-live"></i>Live</span>':'')
    +'<span class="badge badge-accent">'+ico('cal',12)+fmtDate(e.datetime)+' · '+fmtTime(e.datetime)+'</span>'
    +'<span class="badge badge-ice">'+ico(e.locationType==='online'?'globe':'pin',12)+esc(e.locationType==='online'?'Online':'In person')+'</span></span>'
    +'<h1 class="h1">'+esc(e.title)+'</h1>'
    +'<button class="row gap-10" data-go="church-profile" data-id="'+esc(e.churchId)+'" style="text-align:left">'
    +''+churchLogo({id:e.churchId,name:e.churchName},30)+''
    +'<span class="stack gap-2"><span class="h3" style="font-size:14px">'+esc(e.churchName||'')+'</span><span class="cap">'+esc((c&&c.city)||'')+'</span></span></button></div>'
    +'<p class="body">'+esc(e.description||'').replace(/\n/g,'<br>')+'</p>'
    +'<div class="stack gap-10">'
    +'<div class="row gap-10">'+ico('pin',17,'dim')+'<span class="body" style="color:var(--text-1)">'+esc(e.location||'Online stream')+'</span></div>'
    +'<div class="row gap-10">'+ico('users',17,'dim')+'<span class="body" style="color:var(--text-1)"><span class="num">'+(e.rsvpCount||0)+'</span> going'+(e.capacity?' of '+e.capacity+' seats':'')+'</span></div>'
    +'<div class="row gap-10">'+ico('bell',17,'dim')+'<span class="body" style="color:var(--text-1)">Reminders 1 day and 1 hour before</span></div></div>'
    +'<div class="row gap-10">'
    +'<button class="btn '+(going?'btn-ghost':'btn-primary')+' grow" data-act="rsvp" data-id="'+e.id+'">'+(going?ico('check',18)+'You\'re going':'RSVP to attend')+'</button>'
    +(e.isLive?'<button class="btn btn-outline" data-act="join-live" data-id="'+e.id+'">'+ico('play',17)+'Join</button>':'<button class="icon-btn" data-act="share-event" data-id="'+e.id+'">'+ico('share',17)+'</button>')+'</div>'
    +'</div><div style="height:36px"></div></div>';
}
function viewPost(){
  const p=state.data.posts.find(function(x){return x.id===state.params.id;});
  if(!p)return '<div class="view screen-pad">'+empty('edit','Post not found','It may have been removed.','<button class="btn btn-sm btn-ghost" data-go="home">Home</button>')+'</div>';
  const back=p.communityId?'data-go="community-page" data-id="'+esc(p.communityId)+'"':'data-go="'+esc(state.params.from&&state.params.from!=='post'&&state.params.from!=='moment'?state.params.from:(isChurchSession()?'console':'home'))+'"';
  return '<div class="view" style="padding-top:14px">'
    +'<button class="row gap-6 cap mt-8" '+back+' style="color:var(--text-3);margin-bottom:14px">'+ico('arrowL',16)+(p.communityId?esc((communityById(p.communityId)||{}).name||'Community'):'Back')+'</button>'
    +postCard(p,{full:true})
    +'<div class="sec-title"><span class="eyebrow accent">Conversation · '+commentsFor(p.id).length+'</span></div>'
    +(commentsFor(p.id).length?'<div class="stack gap-10">'+commentsFor(p.id).map(function(c){
      return '<article class="glass pad-sm row gap-12" style="align-items:flex-start">'
        +'<button class="avatar avatar-sm" data-go="person-profile" data-id="'+esc(c.authorId||'')+'" style="background:'+grad(c.authorId||c.authorName)+';flex:none">'+initials(c.authorName)+'</button>'
        +'<div class="stack gap-4" style="min-width:0">'
        +'<div class="row gap-8 wrap"><span class="h3" style="font-size:14px">'+esc(c.authorName)+'</span>'
        +(isMe(c.authorId)?'<span class="badge badge-ice" style="height:18px;padding:0 7px;font-size:9.5px">You</span>':'')
        +'<span class="cap" style="font-size:11px">'+ago(c.createdAt)+'</span></div>'
        +'<p class="body" style="font-size:14.5px;color:var(--text-1)">'+esc(c.text).replace(/\n/g,'<br>')+'</p>'
        +'<div class="row gap-12"><button class="cap'+((state.local.amened||[]).indexOf(c.id)>-1?' on':'')+'" data-act="amen-comment" data-id="'+c.id+'" aria-pressed="'+((state.local.amened||[]).indexOf(c.id)>-1)+'">\u{1F64F} Amen'+(c.amens?' · '+c.amens:'')+'</button>'
        +'<button class="cap" data-act="reply-comment" data-v="'+esc(c.authorName)+'">Reply</button></div></div></article>';
    }).join('')+'</div>'
      :'<div class="glass pad" style="text-align:center"><p class="cap">No comments yet — be the first to say something kind.</p></div>')
    +'<div class="glass row gap-10 mt-16" style="padding:8px 8px 8px 14px;border-radius:var(--r-pill);position:sticky;bottom:calc(var(--nav-h) + 14px);z-index:10">'
    +'<span class="avatar avatar-sm" style="background:'+grad((state.session&&state.session.avatarSeed)||'guest')+';width:34px;height:34px">'+(state.session?initials(state.session.name):ico('me',15))+'</span>'
    +'<input class="grow" id="cmtBox" placeholder="Write something kind…" style="background:none;border:0;outline:none;height:42px;min-width:0">'
    +'<button class="btn btn-primary" data-act="comment" data-id="'+p.id+'" style="height:42px;width:42px;padding:0;border-radius:50%">'+ico('send',17)+'</button></div>'
    +'<div style="height:30px"></div></div>';
}

/* ---------- believers (read-only cards: believers are met inside communities, not followed) ---------- */
function viewPersonProfile(){
  const id=state.params.id;
  const me=isMe(id);
  const p=me?meAsPerson():personById(id);
  if(!p)return '<div class="view screen-pad">'+empty('me','Believer not found','This profile may have been removed.','<button class="btn btn-sm btn-ghost" data-go="home">Back</button>')+'</div>';
  const posts=communityThreads().filter(function(x){return x.authorId===id;});
  const c=p.homeChurchId?churchById(p.homeChurchId):null;
  const joined=me?myCommunityIds().map(communityById).filter(Boolean):Array.from(new Set(posts.map(function(x){return x.communityId;}))).map(communityById).filter(Boolean);
  const tab=state.ui.personTab||'Posts';
  let body='';
  if(tab==='Posts')body=posts.length?'<div class="stack gap-14 stagger">'+posts.map(function(x){return postCard(x,{follow:false});}).join('')+'</div>'
    :empty('edit',me?'You haven\'t written in a community yet':'Nothing shared yet',me?'Join a community and start a conversation — that is where believers speak on the ark.':'When they write in a community, it appears here.',
      me?'<button class="btn btn-sm btn-primary" data-go="community">Browse communities</button>':'');
  else body='<div class="stack gap-14">'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">About</span><p class="body">'+esc(p.bio||'A believer on the journey.')+'</p>'
    +(c?'<button class="row gap-10" data-go="church-profile" data-id="'+c.id+'" style="text-align:left">'+ico('church',16,'dim')
      +'<span class="body" style="color:var(--text-1)">Home church · '+esc(c.name)+'</span></button>':'')
    +'<div class="row gap-10">'+ico('pin',16,'dim')+'<span class="body" style="color:var(--text-1)">'+esc(p.city||'')+'</span></div>'
    +(p.joinedAt?'<div class="row gap-10">'+ico('cal',16,'dim')+'<span class="body" style="color:var(--text-1)">On the ark since '+fmtDate(p.joinedAt)+'</span></div>':'')+'</div>'
    +(joined.length?'<div class="glass pad stack gap-12"><span class="eyebrow accent">Communities</span><div class="row gap-8 wrap">'
      +joined.map(function(x){return '<button class="chip" data-go="community-page" data-id="'+x.id+'">'+ico(x.icon||'users',13)+esc(x.name)+'</button>';}).join('')+'</div></div>':'')
    +(me?'<div class="glass pad stack gap-12"><span class="eyebrow accent">Your profile</span>'
      +'<button class="btn btn-ghost btn-block" data-act="edit-profile">'+ico('edit',17)+'Edit profile</button></div>':'');
  return '<div class="view" style="padding-top:14px">'
    +'<button class="row gap-6 cap mt-8" data-go="'+(state.params.from||'home')+'" style="color:var(--text-3);margin-bottom:12px">'+ico('arrowL',16)+'Back</button>'
    +'<div class="cover" style="height:118px">'+coverArt(p.id)+'</div>'
    +'<div class="glass pad stack gap-16" style="margin-top:-34px;position:relative">'
    +'<div class="row between gap-12" style="margin-top:-44px">'
    +'<span class="avatar avatar-lg" style="background:'+grad(p.id)+';border:3px solid var(--bg-1);border-radius:26px">'+initials(p.name)+'</span></div>'
    +'<div class="stack gap-8"><h1 class="h1">'+esc(p.name)+'</h1>'
    +'<p class="body">'+esc(p.bio||'A believer on the journey.')+'</p>'
    +'<div class="row gap-14 wrap cap">'
    +'<span class="row gap-6">'+ico('pin',14)+esc(p.city||'')+'</span>'
    +(c?'<button class="row gap-6 ice" data-go="church-profile" data-id="'+c.id+'">'+ico('church',14)+esc(c.name)+'</button>':'')+'</div></div>'
    +'<div class="row gap-16">'
    +'<span class="stack gap-2"><span class="h3 num">'+posts.length+'</span><span class="cap" style="font-size:11px">Community posts</span></span>'
    +'<span class="stack gap-2"><span class="h3 num">'+joined.length+'</span><span class="cap" style="font-size:11px">Communities</span></span>'
    +'<span class="stack gap-2"><span class="h3 num">'+(me?myChurchIds().length:(p.following||0))+'</span><span class="cap" style="font-size:11px">Churches</span></span></div>'
    +(me?'<button class="btn btn-sm btn-ghost btn-block" data-act="edit-profile">'+ico('edit',16)+'Edit profile</button>':'')
    +'</div>'
    +'<div class="tabs mt-16">'+['Posts','About'].map(function(t){
      return '<button class="tab'+(tab===t?' on':'')+'" data-act="person-tab" data-v="'+t+'">'+t+'</button>';}).join('')+'</div>'
    +'<div class="mt-16">'+body+'</div><div style="height:36px"></div></div>';
}
function myOwnPosts(){const s=state.session;return s?state.data.posts.filter(function(p){return p.authorType==='person'&&p.authorId===s.id;}):[];}
function savedPosts(){const ids=state.local.saved||[];return state.data.posts.filter(function(p){return ids.indexOf(p.id)>-1;});}
function meAsPerson(){
  const s=state.session;if(!s)return null;
  return {id:s.id,name:s.name,city:s.city,bio:s.bio||'',homeChurchId:s.homeChurchId,followers:s.followers||0,
    following:myChurchIds().length,joinedAt:s.createdAt};
}

/* ---------- overlays: stories and news articles ----------
   Both open above the current screen, which stays in place behind a soft blur. They render into
   their own layer and only redraw when what they show changes, so a toast or a reaction never
   restarts a story's progress or stops an article's audio mid-song. */
const STORY_MS=6000;
const STORY={elapsed:0,last:0,raf:0,paused:false,held:false};
function currentStory(){
  const st=state.ui.story;if(!st)return null;
  const src=momentSources(),m=src[st.i];if(!m)return null;
  const p=m.posts[Math.min(st.p,m.posts.length-1)];
  return {src:src,m:m,p:p};
}
function markSeen(m){const k=m.author.type+':'+m.author.id;if((state.local.seenMoments||[]).indexOf(k)<0){state.local.seenMoments.push(k);saveLocal();}}
function storyTick(now){
  if(!state.ui.story){STORY.raf=0;return;}
  const dtms=STORY.last?Math.min(100,now-STORY.last):0;STORY.last=now;
  if(!STORY.paused&&!STORY.held&&!document.hidden)STORY.elapsed+=dtms;
  const bar=document.querySelector('.story-bar.now i');
  if(bar)bar.style.width=Math.min(100,STORY.elapsed/STORY_MS*100)+'%';
  if(STORY.elapsed>=STORY_MS){storyStep(1);}
  STORY.raf=requestAnimationFrame(storyTick);
}
function startStory(){STORY.elapsed=0;STORY.last=0;if(!STORY.raf)STORY.raf=requestAnimationFrame(storyTick);}
function stopStory(){if(STORY.raf)cancelAnimationFrame(STORY.raf);STORY.raf=0;STORY.paused=false;STORY.held=false;}
function storyStep(dir){
  const cur=currentStory();if(!cur)return closeStory();
  const st=state.ui.story;
  if(dir>0){
    if(st.p+1<cur.m.posts.length)st.p++;
    else if(st.i+1<cur.src.length){st.i++;st.p=0;markSeen(cur.src[st.i]);}
    else return closeStory();
  }else{
    if(STORY.elapsed>1500){STORY.elapsed=0;return;}
    if(st.p>0)st.p--;
    else if(st.i>0){st.i--;st.p=0;}
  }
  STORY.elapsed=0;syncOverlay();
}
function closeStory(){stopStory();state.ui.story=null;state.ui.fx=null;syncOverlay();render();}
function viewStoryOverlay(){
  const cur=currentStory();if(!cur)return '';
  const m=cur.m,p=cur.p,a=m.author,st=state.ui.story,reacted=state.local.reacted[p.id];
  const pic=photoFor(a.id);
  return '<div class="ov ov-story'+(state.ui.fx==='story'?' enter':'')+'" role="dialog" aria-modal="true" aria-label="'+esc(a.name)+' story">'
    +'<div class="ov-bg" data-act="close-story"></div>'
    +'<button class="story-arrow prev" data-act="story-prev" aria-label="Previous story"'+(st.i===0&&st.p===0?' disabled':'')+'>'+ico('chevL',22)+'</button>'
    +'<div class="story-card" id="storyCard">'
      +'<div class="story-media">'+(hasMedia(p)?mediaInner(p):coverArt(p.id))+'</div><div class="story-shade"></div>'
      +'<div class="story-top"><div class="story-bars">'+m.posts.map(function(x,k){
          return '<span class="story-bar'+(k<st.p?' done':k===st.p?' now':'')+'"><i'+(k===st.p?' style="width:'+Math.min(100,STORY.elapsed/STORY_MS*100).toFixed(2)+'%"':'')+'></i></span>';}).join('')+'</div>'
        +'<div class="row between gap-10">'
        +'<button class="row gap-10 story-author" data-go="church-profile" data-id="'+esc(a.id)+'">'
        +''+(a.type==='church'?churchLogo({id:a.id,name:a.name},34):'<span class="avatar avatar-sm" style="background:'+(pic?'#282828 url('+pic+') center/cover':grad(a.seed))+'">'+(pic?'':initials(a.name))+'</span>')+''
        +'<span class="stack gap-2" style="text-align:left"><span class="story-name">'+esc(a.name)+(a.verified?' '+ico('shield',13):'')+'</span>'
        +'<span class="story-time">'+(p.live?'Streaming now':ago(p.createdAt))+'</span></span></button>'
        +'<span class="row gap-6">'+(m.live?'<span class="badge badge-live"><i class="dot-live"></i>Live</span>':'')
        +'<button class="story-icon" data-act="story-pause" aria-label="'+(STORY.paused?'Play':'Pause')+'">'+(STORY.paused?ico('play',17):'<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6.5" y="5" width="4" height="14" rx="1"/><rect x="13.5" y="5" width="4" height="14" rx="1"/></svg>')+'</button>'
        +'<button class="story-icon" data-act="close-story" aria-label="Close">'+ico('x',18)+'</button></span></div></div>'
      +'<div class="story-tap" aria-hidden="true"><span data-act="story-prev"></span><span data-act="story-next"></span></div>'
      +'<div class="story-content">'
        +(p.title?'<h2 class="story-title">'+esc(p.title)+'</h2>':'')
        +'<p class="story-text">'+esc(p.content||'')+'</p>'
        +(p.verseRef?'<span class="story-verse">'+esc(p.verseRef)+'</span>':'')
      +'</div>'
      +'<div class="story-actions">'
        +(p.live
          ?'<button class="btn btn-primary btn-sm grow" data-act="join-live" data-id="'+esc(p.eventId||'')+'">'+ico('play',16)+'Join the stream</button>'
          :'<div class="story-reacts">'+REACTIONS.map(function(r){
              return '<button class="sr'+(reacted===r.k?' on':'')+'" data-act="react" data-id="'+esc(p.id)+'" data-k="'+r.k+'" aria-label="'+r.l+'" aria-pressed="'+(reacted===r.k)+'">'+r.e+'</button>';}).join('')+'</div>')
        +'<button class="story-icon share" data-act="share-story" data-id="'+esc(p.id)+'" aria-label="Share">'+ico('share',18)+'</button>'
      +'</div>'
    +'</div>'
    +'<button class="story-arrow next" data-act="story-next" aria-label="Next story">'+ico('chevR',22)+'</button>'
    +'</div>';
}
function viewNewsOverlay(){
  const n=newsById(state.ui.news);if(!n)return '';
  const when=new Date(Date.now()-n.ageHours*3600e3).toISOString();
  const block=function(b){
    if(b.t==='p')return '<p class="art-p">'+esc(b.x)+'</p>';
    if(b.t==='h')return '<h2 class="art-h">'+esc(b.x)+'</h2>';
    if(b.t==='quote')return '<blockquote class="art-quote"><p>“'+esc(b.x)+'”</p><cite>'+esc(b.by||'')+'</cite></blockquote>';
    if(b.t==='img')return '<figure class="art-fig"><img src="'+esc(newsImg(b.src))+'" alt="'+esc(b.cap||'')+'" loading="lazy">'+(b.cap?'<figcaption>'+esc(b.cap)+'</figcaption>':'')+'</figure>';
    if(b.t==='audio')return '<figure class="art-audio"><div class="row gap-12"><span class="art-audio-ico">'+ico('music',20)+'</span>'
      +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:15px">'+esc(b.title||'Listen')+'</span><span class="cap">'+esc(b.credit||'')+'</span></span></div>'
      +'<audio controls preload="metadata" src="'+esc(b.src)+'">Your browser cannot play this audio.</audio></figure>';
    if(b.t==='video')return '<figure class="art-fig art-video'+(b.portrait?' portrait':'')+'"><video controls playsinline preload="metadata">'
      +(b.srcs||[]).map(function(s){return '<source src="'+esc(s.src)+'" type="'+esc(s.type)+'">';}).join('')
      +'Your browser cannot play this video.</video><figcaption>'+esc(b.cap||'')+(b.credit?' <span class="art-credit">'+esc(b.credit)+'</span>':'')+'</figcaption></figure>';
    return '';
  };
  return '<div class="ov ov-article'+(state.ui.fx==='news'?' enter':'')+'" role="dialog" aria-modal="true" aria-label="'+esc(n.title)+'">'
    +'<div class="ov-bg" data-act="close-news"></div>'
    +'<article class="art">'
      +'<div class="art-bar">'+newsroomMark()
      +'<span class="row gap-8"><button class="icon-btn" data-act="share-news" data-id="'+n.id+'" aria-label="Share this story">'+ico('share',17)+'</button>'
      +'<button class="icon-btn" data-act="close-news" aria-label="Close">'+ico('x',18)+'</button></span></div>'
      +'<div class="art-scroll" id="artScroll">'
        +'<div class="art-cover"><img src="'+esc(newsImg(n.cover))+'" alt=""></div>'
        +'<div class="art-body">'
          +'<span class="eyebrow accent">'+esc(n.cat)+'</span>'
          +'<h1 class="art-title">'+esc(n.title)+'</h1>'
          +'<p class="art-dek">'+esc(n.dek)+'</p>'
          +'<div class="art-byline">'+arkGlyph(22)+'<span><b>believersArk Newsroom</b><br>'+fmtDate(when)+' · '+n.readMins+' min read</span></div>'
          +n.blocks.map(block).join('')
          +'<div class="art-foot"><button class="btn btn-primary" data-act="share-news" data-id="'+n.id+'">'+ico('share',16)+'Share this story</button>'
          +'<p class="cap">Published by the believersArk team. Reactions and comments are off for newsroom stories.</p></div>'
        +'</div>'
      +'</div>'
    +'</article></div>';
}
/* Redraws the overlay layer only when its content key changes. */
function syncOverlay(){
  const root=layer('overlay-root');
  let key='',html='';
  const cur=currentStory();
  if(state.ui.story&&cur){key='s:'+state.ui.story.i+':'+state.ui.story.p+':'+(state.local.reacted[cur.p.id]||'')+':'+(STORY.paused?1:0);html=viewStoryOverlay();}
  else if(state.ui.news){key='n:'+state.ui.news;html=viewNewsOverlay();}
  if(root.dataset.key===key)return;
  root.dataset.key=key;root.innerHTML=html;
  document.documentElement.classList.toggle('ov-open',!!key);
  if(state.ui.fx&&key)setTimeout(function(){state.ui.fx=null;},450);
}

/* ---------- notifications ---------- */
function notifItems(){
  const out=[],cf=myChurchIds(),s=state.session,now=Date.now();
  if(isChurchSession()&&s.churchId){
    threadsFor(s.churchId).forEach(function(t){const m=lastMsg(t);if(!m.from||m.from===s.churchId)return;
      out.push({t:m.at,icon:'msg',tone:'ice',title:esc((t.names||{})[m.from]||'A church')+' sent a message',sub:esc(m.text.slice(0,72)),go:'console-thread',id:t.id});});
    pendingFor(s.churchId).forEach(function(c){const ch=churchById(c.from);
      out.push({t:c.createdAt||new Date().toISOString(),icon:'church',tone:'accent',title:esc((ch&&ch.name)||'A church')+' wants to connect',sub:'Accept from the Churches tab',go:'console-c2c',id:''});});
    return out.sort(function(a,b){return dt(b.t)-dt(a.t);}).slice(0,40);
  }
  churchPosts().forEach(function(p){
    if(cf.indexOf(p.churchId)<0)return;
    out.push({t:p.createdAt,icon:'church',tone:p.type==='broadcast'&&p.priority==='Urgent'?'rose':'accent',
      title:esc(p.churchName||'A church')+(p.type==='sermon'?' posted a sermon':p.type==='broadcast'?' sent a broadcast':p.type==='event'?' announced an event':p.type==='occasion'?' shared an occasion':' shared a post'),
      sub:esc((p.title||p.content||'').slice(0,72)),go:'post',id:p.id});
  });
  liveEvents().forEach(function(e){
    out.push({t:new Date().toISOString(),icon:'radio',tone:'live',title:esc(e.churchName)+' is live now',sub:esc(e.title),go:'event',id:e.id});
  });
  reminderEvents().forEach(function(e){
    const h=(dt(e.datetime).getTime()-now)/3600e3,r=reminderPref(e.id);
    if(h<=1&&h>-1&&r.h1)out.push({t:new Date(now-60e3).toISOString(),icon:'bell',tone:'accent',title:'Starting soon · '+esc(e.title),sub:esc(e.churchName||'')+' · '+fmtTime(e.datetime),go:'event',id:e.id});
    else if(h<=24&&h>1&&r.d1)out.push({t:new Date(now-3600e3).toISOString(),icon:'bell',tone:'accent',title:'Tomorrow · '+esc(e.title),sub:esc(e.churchName||'')+' · '+fmtDate(e.datetime)+' '+fmtTime(e.datetime),go:'event',id:e.id});
  });
  state.data.comments.forEach(function(c){
    const p=state.data.posts.find(function(x){return x.id===c.postId;});
    if(!p||!isMe(p.authorId)||isMe(c.authorId))return;
    out.push({t:c.createdAt,icon:'msg',tone:'ice',title:esc(c.authorName)+' replied in '+esc((communityById(p.communityId)||{}).name||'a community'),sub:esc(c.text.slice(0,72)),go:'post',id:c.postId});
  });
  return out.sort(function(a,b){return dt(b.t)-dt(a.t);}).slice(0,40);
}
function viewNotifications(){
  const items=notifItems();
  const tones={accent:'var(--brand)',live:'var(--live)',rose:'var(--rose)',ice:'var(--ice)',mint:'var(--mint)'};
  return topbar('Notifications','What happened while you were away',{back:'home',
    actions:'<button class="chip" data-act="mark-read-notifs">'+ico('check',14)+'Mark read</button>'})
    +'<div class="view stack gap-10">'
    +(items.length?items.map(function(n){
      const unread=!state.local.notifSeen||dt(n.t)>dt(state.local.notifSeen);
      return '<button class="glass press pad-sm row gap-12 between" data-go="'+n.go+'" data-id="'+esc(n.id)+'" style="text-align:left'+(unread?';border-color:rgba(201,151,74,.28)':'')+'">'
        +'<span class="row gap-12" style="min-width:0"><span class="icon-btn" style="flex:none;color:'+tones[n.tone]+'">'+ico(n.icon,17)+'</span>'
        +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14.5px">'+n.title+'</span>'
        +'<span class="cap" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+n.sub+'</span>'
        +'<span class="cap" style="font-size:11px">'+ago(n.t)+'</span></span></span>'
        +(unread?'<span style="width:8px;height:8px;border-radius:50%;background:var(--brand);flex:none;box-shadow:0 0 10px rgba(201,151,74,.6)"></span>':ico('chevR',16))
        +'</button>';}).join('')
      :empty('bell','Nothing new','Follow churches and believers and their news lands here.','<button class="btn btn-sm btn-primary" data-go="churches">Find people to follow</button>'))
    +'<div style="height:30px"></div></div>';
}

/* ---------- journey ---------- */
function viewJourney(){
  const tab=state.ui.journeyTab,tabs=['Timeline','Plan','Journal','Family'];
  let body='';
  if(tab==='Timeline')body=journeyTimeline();
  else if(tab==='Plan')body=journeyPlan();
  else if(tab==='Journal')body=journeyJournal();
  else body=journeyFamily();
  return topbar('Journey','Your walk, gathered',{
    actions:'<button class="icon-btn" data-act="add-milestone" aria-label="Add milestone">'+ico('plus',18)+'</button>',
    extra:'<div class="tabs mt-16">'+tabs.map(function(t){return '<button class="tab'+(tab===t?' on':'')+'" data-act="journey-tab" data-v="'+t+'">'+t+'</button>';}).join('')+'</div>'})
    +'<div class="view stack">'+body+'<div style="height:30px"></div></div>';
}
function journeyItems(){
  const items=[];
  (state.local.milestones||[]).forEach(function(m){items.push({t:m.date,k:'milestone',title:m.title,sub:m.note||'Milestone'});});
  (state.local.rsvps||[]).forEach(function(id){const e=state.data.events.find(function(x){return x.id===id;});
    if(e)items.push({t:e.datetime,k:'event',title:e.title,sub:'RSVP · '+(e.churchName||''),id:e.id});});
  (state.local.journal||[]).slice(0,6).forEach(function(j){items.push({t:j.date,k:'journal',title:j.answered?'Answered prayer':'Journal entry',sub:j.text.slice(0,70)});});
  if(state.local.lastRead)items.push({t:state.local.lastRead,k:'read',title:'Daily reading complete',sub:(myPlan()||{}).title||'Reading plan'});
  return items.sort(function(a,b){return dt(b.t)-dt(a.t);});
}
function calendarCard(items){
  const base=state.ui.calMonth?new Date(state.ui.calMonth):new Date();
  const y=base.getFullYear(),m=base.getMonth();
  const first=new Date(y,m,1),start=(first.getDay()+6)%7; // Monday first
  const days=new Date(y,m+1,0).getDate(),prevDays=new Date(y,m,0).getDate();
  const today=new Date();
  const key=function(d){return d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();};
  const marks={};
  items.forEach(function(i){const k=key(dt(i.t));marks[k]=marks[k]||[];if(marks[k].indexOf(i.k)<0)marks[k].push(i.k);});
  upcomingEvents().forEach(function(e){if(myChurchIds().indexOf(e.churchId)<0)return;const k=key(dt(e.datetime));marks[k]=marks[k]||[];if(marks[k].indexOf('church')<0)marks[k].push('church');});
  const tone={event:'var(--brand)',church:'var(--ice)',read:'var(--mint)',journal:'var(--rose)',milestone:'var(--brand)'};
  const sel=state.ui.calDay;
  let cells='';
  for(let i=0;i<start;i++)cells+='<span class="day dim">'+(prevDays-start+i+1)+'</span>';
  for(let d=1;d<=days;d++){
    const k=y+'-'+m+'-'+d,isT=today.getFullYear()===y&&today.getMonth()===m&&today.getDate()===d;
    cells+='<button class="day'+(isT?' today':'')+(sel===k?' on':'')+'" data-act="cal-day" data-v="'+k+'">'+d
      +'<span class="marks">'+(marks[k]||[]).slice(0,3).map(function(t){return '<i style="background:'+tone[t]+'"></i>';}).join('')+'</span></button>';
  }
  const total=start+days,rest=(7-total%7)%7;
  for(let i=1;i<=rest;i++)cells+='<span class="day dim">'+i+'</span>';
  let dayList='';
  if(sel){
    const parts=sel.split('-').map(Number);
    const list=items.filter(function(i){return key(dt(i.t))===sel;})
      .concat(upcomingEvents().filter(function(e){return myChurchIds().indexOf(e.churchId)>-1&&key(dt(e.datetime))===sel&&(state.local.rsvps||[]).indexOf(e.id)<0;})
        .map(function(e){return {t:e.datetime,k:'church',title:e.title,sub:esc(e.churchName||'')+' · not yet RSVP\'d',id:e.id};}));
    dayList='<hr class="divider"><div class="stack gap-8"><span class="cap">'+fmtDate(new Date(parts[0],parts[1],parts[2]).toISOString())+'</span>'
      +(list.length?list.map(function(i){return '<button class="row between gap-10" '+(i.id?'data-go="event" data-id="'+i.id+'"':'')+' style="text-align:left;padding:11px 13px;border-radius:var(--r-md);background:var(--surface);border:1px solid var(--border)">'
        +'<span class="row gap-10" style="min-width:0"><i style="width:8px;height:8px;border-radius:50%;background:'+tone[i.k]+';flex:none"></i>'
        +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14px">'+esc(i.title)+'</span><span class="cap">'+fmtTime(i.t)+' · '+i.sub+'</span></span></span>'+(i.id?ico('chevR',15):'')+'</button>';}).join('')
        :'<p class="cap">Nothing on this day. A quiet one.</p>')+'</div>';
  }
  return '<div class="glass pad stack gap-12 mt-14">'
    +'<div class="row between gap-10"><button class="icon-btn" data-act="cal-nav" data-v="-1" aria-label="Previous month" style="width:34px;height:34px">'+ico('chevL',16)+'</button>'
    +'<span class="h3">'+['January','February','March','April','May','June','July','August','September','October','November','December'][m]+' <span class="dim num">'+y+'</span></span>'
    +'<button class="icon-btn" data-act="cal-nav" data-v="1" aria-label="Next month" style="width:34px;height:34px">'+ico('chevR',16)+'</button></div>'
    +'<div class="cal">'+['M','T','W','T','F','S','S'].map(function(d){return '<span class="dow">'+d+'</span>';}).join('')+cells+'</div>'
    +'<div class="row gap-12 wrap cap" style="font-size:11px">'+[['var(--brand)','Going'],['var(--ice)','Your churches'],['var(--mint)','Reading'],['var(--rose)','Journal']].map(function(l){
      return '<span class="row gap-6"><i style="width:7px;height:7px;border-radius:50%;background:'+l[0]+'"></i>'+l[1]+'</span>';}).join('')+'</div>'
    +dayList+'</div>';
}
function remindersCard(){
  const list=reminderEvents().slice(0,5);
  if(!list.length)return '';
  return '<div class="glass pad stack gap-12 mt-14"><div class="row between"><span class="eyebrow accent">Reminders</span><span class="cap">1 day · 1 hour before</span></div>'
    +list.map(function(e){const r=reminderPref(e.id);
      return '<div class="row between gap-10"><button class="stack gap-2" data-go="event" data-id="'+e.id+'" style="text-align:left;min-width:0">'
        +'<span class="h3" style="font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">'+esc(e.title)+'</span>'
        +'<span class="cap">'+fmtDate(e.datetime)+' · '+fmtTime(e.datetime)+'</span></button>'
        +'<span class="row gap-6" style="flex:none"><button class="chip'+(r.d1?' on':'')+'" data-act="rem-toggle" data-id="'+e.id+'" data-k="d1" style="height:28px;padding:0 10px;font-size:11px">1d</button>'
        +'<button class="chip'+(r.h1?' on':'')+'" data-act="rem-toggle" data-id="'+e.id+'" data-k="h1" style="height:28px;padding:0 10px;font-size:11px">1h</button></span></div>';}).join('')
    +'<p class="cap">'+ico('bell',12)+' Sent in '+esc(state.prefs.lang)+', quiet hours respected.</p></div>';
}
function journeyTimeline(){
  const items=journeyItems();
  const p=myPlan();
  return '<div class="glass pad row between gap-16 mt-8">'
    +ring(planPct(),84,planPct()+'%','read')
    +'<div class="stack gap-6 grow"><span class="eyebrow accent">Current rhythm</span>'
    +'<span class="h2">'+esc(p?p.title:'No plan yet')+'</span>'
    +'<span class="cap">'+(p?'Day '+(state.local.planDay||0)+' of '+p.days+' · '+(state.local.streak||0)+' day streak':'Choose a plan to begin')+'</span></div>'
    +'<button class="btn btn-xs btn-outline" data-act="journey-tab" data-v="Plan">Open</button></div>'
    +calendarCard(items)
    +remindersCard()
    +'<div class="sec-title"><span class="eyebrow accent">Your light-path</span><span class="cap num">'+items.length+' moments</span></div>'
    +(items.length?'<div class="path stagger">'+items.slice(0,24).map(function(i){
      const cls=i.k==='journal'?' rose':i.k==='event'?' soft':'';
      return '<div class="node'+cls+'"><div class="glass pad-sm stack gap-4">'
        +'<span class="cap">'+fmtDate(i.t)+' · '+fmtTime(i.t)+'</span>'
        +'<span class="h3">'+esc(i.title)+'</span>'
        +'<span class="cap">'+esc(i.sub||'')+'</span></div></div>';}).join('')+'</div>'
      :empty('journey','Your path starts here','RSVP to an event, finish a reading, or add a milestone like baptism — each becomes a light on your path.',
        '<button class="btn btn-sm btn-primary" data-act="add-milestone">Add a milestone</button>'));
}
function journeyPlan(){
  const p=myPlan();
  if(!p)return empty('book','No plan chosen','Pick a reading plan to set your daily rhythm.','<button class="btn btn-sm btn-primary" data-act="browse-plans">Browse plans</button>');
  const day=(state.local.planDay||0),v=VERSES[(day+2)%VERSES.length],doneToday=state.local.lastRead&&isToday(state.local.lastRead);
  return '<div class="stack gap-14 mt-8">'
    +'<div class="glass pad stack gap-16"><div class="row between gap-16">'
    +'<div class="stack gap-6"><span class="eyebrow accent">'+esc(p.title)+'</span>'
    +'<h2 class="h1">Day '+(day+ (doneToday?0:1))+'</h2>'
    +'<span class="cap">'+esc(planReading(p,Math.min(p.days,Math.max(1,day+(doneToday?0:1)))).ref)+' · about 6 minutes</span></div>'
    +ring(planPct(),78,planPct()+'%','done')+'</div>'
    +'<div class="progress"><i style="width:'+planPct()+'%"></i></div>'
    +'<p class="scripture">“'+esc(v.t)+'”</p><span class="verse-ref">'+esc(v.r)+'</span>'
    +'<p class="body">'+esc(p.description)+'</p>'
    +'<div class="row gap-10">'
    +'<button class="btn '+(doneToday?'btn-ghost':'btn-primary')+' grow" data-act="mark-read"'+(doneToday?' disabled':'')+'>'+(doneToday?ico('check',18)+'Read today':'Mark today complete')+'</button>'
    +'<button class="icon-btn" data-act="note-verse" aria-label="Add note">'+ico('edit',17)+'</button></div></div>'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Switch plan</span>'
    +state.data.plans.map(function(x){const on=x.id===p.id;
      return '<button class="row between gap-12" data-act="set-plan" data-id="'+x.id+'" style="padding:13px 14px;border-radius:var(--r-md);background:'+(on?'var(--brand-dim)':'var(--surface)')+';border:1px solid '+(on?'rgba(201,151,74,.35)':'var(--border)')+';text-align:left">'
        +'<span class="stack gap-2"><span class="h3">'+esc(x.title)+'</span><span class="cap">'+x.days+' days · '+esc(x.category||'Scripture')+'</span></span>'
        +(on?'<span class="accent">'+ico('check',18)+'</span>':ico('chevR',16))+'</button>';}).join('')+'</div>'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Reminders</span>'
    +prefRow('Daily reading nudge','events','A gentle ping at 7:00am')
    +'<p class="cap">Quiet hours are respected — nothing between 10pm and 6am.</p></div></div>';
}
function journeyJournal(){
  const list=(state.local.journal||[]);
  return '<div class="stack gap-14 mt-8">'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">New entry</span>'
    +'<textarea class="textarea" id="jEntry" placeholder="What is on your heart today? Tag people or needs…"></textarea>'
    +'<div class="row gap-10"><button class="btn btn-primary grow" data-act="add-journal">Save privately '+ico('lock',16)+'</button></div>'
    +'<p class="cap">'+ico('lock',13)+' Journal entries never leave this device.</p></div>'
    +(list.length?list.map(function(j,i){
      return '<article class="glass pad stack gap-10"><div class="row between gap-10">'
        +'<span class="cap">'+fmtDate(j.date)+' · '+fmtTime(j.date)+'</span>'
        +(j.answered?'<span class="badge badge-mint">'+ico('check',12)+'Answered</span>':'<button class="chip" data-act="mark-answered" data-i="'+i+'">Mark answered</button>')+'</div>'
        +'<p class="body" style="color:var(--text-1)">'+esc(j.text).replace(/\n/g,'<br>')+'</p>'
        +(j.answered?'<button class="chip" data-act="testify" data-i="'+i+'">'+ico('share',14)+'Share as testimony</button>':'')+'</article>';}).join('')
      :empty('edit','Your journal is empty','Write the first line. Later you can mark a prayer answered and share the testimony.'));
}
function journeyFamily(){
  const fam=state.local.family||[];
  return '<div class="stack gap-14 mt-8">'
    +'<div class="glass pad stack gap-14"><span class="eyebrow accent">Family account</span>'
    +'<p class="body">Add children and youth to your account. Kids spaces are moderated, ad-free, and everything a child sees is visible to you.</p>'
    +'<button class="btn btn-primary btn-block" data-act="add-family">'+ico('plus',18)+'Add a family member</button></div>'
    +(fam.length?'<div class="stack gap-12">'+fam.map(function(f,i){
      return '<div class="glass pad-sm row between gap-12"><span class="row gap-12">'
        +'<span class="avatar" style="background:'+grad(f.name+i)+'">'+initials(f.name)+'</span>'
        +'<span class="stack gap-2"><span class="h3">'+esc(f.name)+'</span><span class="cap">'+esc(f.type)+' · parental controls on</span></span></span>'
        +'<button class="icon-btn" data-act="family-settings" data-i="'+i+'">'+ico('settings',17)+'</button></div>';}).join('')+'</div>'
      :'')
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Kids space preview</span>'
    +'<div class="row gap-10" style="overflow-x:auto">'+[['Memory verses','book'],['Bible stories','music'],['Quiet games','star']].map(function(k,i){
      return '<div style="min-width:140px;padding:16px;border-radius:var(--r-md);background:'+grad('kid'+i)+';color:#FFFFFF">'
        +'<div style="opacity:.85">'+ico(k[1],20)+'</div><div class="h3" style="margin-top:8px;color:#FFFFFF">'+k[0]+'</div></div>';}).join('')+'</div></div></div>';
}
/* ---------- community ----------
   Communities are made by church admins. Believers see only the communities of churches they
   follow, ask to join, and are let in when an admin approves. */
function joinButton(c,size){
  const st=memberStatus(c.id),cls='btn '+(size||'btn-xs');
  if(st==='approved')return '<button class="'+cls+' btn-ghost" data-act="leave-community" data-id="'+c.id+'">'+ico('check',13)+'Joined</button>';
  if(st==='pending')return '<button class="'+cls+' btn-ghost pending" data-act="cancel-community" data-id="'+c.id+'" title="Tap to withdraw your request">'+ico('clock',13)+'Requested</button>';
  return '<button class="'+cls+' btn-outline" data-act="join-community" data-id="'+c.id+'">'+ico('plus',13)+'Request to join</button>';
}
function communityIcon(c,size){
  const s=size||48;
  return '<span class="cm-ico" style="width:'+s+'px;height:'+s+'px;color:hsl('+c.hue+',60%,42%);background:hsla('+c.hue+',70%,60%,.13);border-color:hsla('+c.hue+',60%,50%,.3)">'+ico(c.icon||'users',Math.round(s*.44))+'</span>';
}
function communityCard(c){
  const ch=churchById(c.churchId)||{},n=communityThreads(c.id).length,st=memberStatus(c.id);
  return '<article class="glass press pad row between gap-14" data-go="community-page" data-id="'+c.id+'" style="overflow:hidden">'
    +'<div class="row gap-14" style="min-width:0">'+communityIcon(c,48)
    +'<div class="stack gap-3" style="min-width:0"><span class="h3">'+esc(c.name)+'</span>'
    +'<span class="cap" style="display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden">'+esc(c.tagline||'')+'</span>'
    +'<span class="cap num" style="font-size:11px">'+ico('church',11)+' '+esc(ch.name||'')+' · '+communityMemberCount(c)+' members'+(st==='approved'?' · '+n+' conversation'+(n===1?'':'s'):'')+'</span></div></div>'
    +'<span style="flex:none">'+joinButton(c)+'</span></article>';
}
function viewCommunity(){
  const vis=visibleCommunities();
  const joined=vis.filter(function(c){return memberStatus(c.id)==='approved';});
  const pending=vis.filter(function(c){return memberStatus(c.id)==='pending';});
  const others=vis.filter(function(c){return memberStatus(c.id)==='none'||memberStatus(c.id)==='withdrawn'||memberStatus(c.id)==='left'||memberStatus(c.id)==='declined';});
  const recent=communityThreads().filter(function(p){return joined.some(function(c){return c.id===p.communityId;});}).slice(0,3);
  const byChurch={};others.forEach(function(c){(byChurch[c.churchId]=byChurch[c.churchId]||[]).push(c);});
  const tiles=[
    {i:'music',l:'Worship music',d:'Lyrics, chords, transpose, set-list builder'},
    {i:'bag',l:'Marketplace',d:'Verified businesses, speakers, AV and sound'}
  ];
  const noChurch=!myChurchIds().length;
  return topbar('Community','Your churches, gathered',{})
    +'<div class="view stack">'
    +(noChurch?empty('church','Follow a church to see its communities','Communities are started by church admins and open to the people who follow that church.','<button class="btn btn-sm btn-primary" data-go="churches">Find your church</button>'):'')
    +(joined.length?'<div class="sec-title"><span class="eyebrow accent">Your communities</span><span class="cap num">'+joined.length+' joined</span></div>'
      +'<div class="stack gap-12 stagger">'+joined.map(communityCard).join('')+'</div>':'')
    +(pending.length?'<div class="sec-title"><span class="eyebrow accent">Waiting for approval</span><span class="cap">A church admin will review your request</span></div>'
      +'<div class="stack gap-12">'+pending.map(communityCard).join('')+'</div>':'')
    +(recent.length?'<div class="sec-title"><span class="eyebrow accent">New in your communities</span></div><div class="stack gap-14 stagger">'+recent.map(function(p){return postCard(p);}).join('')+'</div>':'')
    +Object.keys(byChurch).map(function(cid){const ch=churchById(cid)||{};
      return '<div class="sec-title"><span class="eyebrow accent">At '+esc(ch.name||'your church')+'</span><button class="cap" data-go="church-profile" data-id="'+cid+'">View church</button></div>'
        +'<div class="stack gap-12 stagger">'+byChurch[cid].map(communityCard).join('')+'</div>';}).join('')
    +(!noChurch&&!vis.length?empty('users','No communities yet','Your churches haven\'t started any communities. Church admins can create them from their console.'):'')
    +'<div class="sec-title"><span class="eyebrow accent">Coming to the ark</span></div>'
    +'<div class="stack gap-12">'+tiles.map(function(t){
      return '<button class="glass press pad row between gap-14" data-act="soon" data-v="'+esc(t.l)+'" style="text-align:left;overflow:hidden">'
        +'<span class="row gap-14" style="min-width:0"><span class="icon-btn" style="flex:none">'+ico(t.i,19)+'</span>'
        +'<span class="stack gap-3" style="min-width:0"><span class="h3">'+esc(t.l)+'</span><span class="cap">'+esc(t.d)+'</span></span></span>'
        +'<span class="badge badge-lav">Soon</span></button>';}).join('')+'</div>'
    +'<div style="height:30px"></div></div>';
}
function viewCommunityPage(){
  const c=communityById(state.params.id);
  if(!c)return '<div class="view screen-pad">'+empty('users','Community not found','It may have been archived.','<button class="btn btn-sm btn-ghost" data-go="community">Communities</button>')+'</div>';
  const ch=churchById(c.churchId)||{},follows=myChurchIds().indexOf(c.churchId)>-1;
  const st=memberStatus(c.id),joined=st==='approved';
  const threads=communityThreads(c.id);
  const sort=state.ui.threadSort||'Latest';
  const list=sort==='Most amen'?threads.slice().sort(function(a,b){return reactionTotal(b)-reactionTotal(a);}):threads;
  const head='<div class="view" style="padding-top:14px">'
    +'<button class="row gap-6 cap mt-8" data-go="community" style="color:var(--text-3);margin-bottom:12px">'+ico('arrowL',16)+'Communities</button>'
    +'<div class="cover" style="height:140px">'+(photoFor(c.churchId)?'<img src="'+esc(photoFor(c.churchId))+'" alt="" style="width:100%;height:100%;object-fit:cover;display:block">':coverArt(c.id))+'</div>'
    +'<div class="glass pad stack gap-16" style="margin-top:-34px;position:relative">'
    +'<div class="row between gap-12" style="margin-top:-44px"><span class="cm-ico lg" style="color:hsl('+c.hue+',60%,42%);background:var(--bg-0);border-color:hsla('+c.hue+',60%,50%,.35)">'+ico(c.icon||'users',28)+'</span>'
    +'<span class="badge badge-ice num">'+communityMemberCount(c)+' members</span></div>'
    +'<div class="stack gap-8"><h1 class="h1">'+esc(c.name)+'</h1><p class="body">'+esc(c.about||c.tagline||'')+'</p>'
    +'<button class="row gap-6 cap" data-go="church-profile" data-id="'+esc(c.churchId)+'" style="text-align:left">'+ico('church',14,'accent')+'<span>A community of <b>'+esc(ch.name||'')+'</b> · moderated by '+esc((c.mods||[]).join(', ')||'church admins')+'</span></button></div>';
  if(!follows&&!isChurchSession())return head
    +'<div class="note-box">'+ico('lock',18)+'<span>Communities are open to people who follow <b>'+esc(ch.name||'this church')+'</b>. Follow the church to ask to join.</span></div>'
    +'<button class="btn btn-sm btn-primary" data-act="follow" data-id="'+esc(c.churchId)+'">'+ico('plus',16)+'Follow '+esc(ch.name||'church')+'</button></div><div style="height:36px"></div></div>';
  return head
    +'<div class="row gap-10 wrap">'+(isChurchSession()?'':joinButton(c,'btn-sm grow'))
    +(joined?'<button class="btn btn-sm btn-primary" data-act="new-thread" data-id="'+c.id+'">'+ico('edit',16)+'Start a conversation</button>':'')+'</div>'
    +(st==='pending'?'<div class="note-box">'+ico('clock',18)+'<span>Your request is with the admins of '+esc(ch.name||'the church')+'. You\'ll see the conversations here as soon as they approve it.</span></div>':'')
    +'</div>'
    +(joined||isChurchSession()
      ?'<div class="sec-title"><span class="eyebrow accent">Conversations · '+threads.length+'</span>'
        +'<span class="row gap-6">'+['Latest','Most amen'].map(function(s){return '<button class="chip'+(sort===s?' on':'')+'" data-act="thread-sort" data-v="'+s+'" style="height:28px;padding:0 10px;font-size:11.5px">'+s+'</button>';}).join('')+'</span></div>'
        +(list.length?'<div class="stack gap-14 stagger">'+list.map(function(p){return postCard(p);}).join('')+'</div>'
          :empty('msg','Quiet for now','Start the first conversation — a question is a fine way to begin.',joined?'<button class="btn btn-sm btn-primary" data-act="new-thread" data-id="'+c.id+'">Start a conversation</button>':''))
      :'<div class="glass pad stack gap-10 mt-16" style="text-align:center;align-items:center">'+ico('lock',22,'dim')
        +'<span class="h3">Members only</span><span class="cap">'+threads.length+' conversation'+(threads.length===1?'':'s')+' inside. Join to read and take part.</span></div>')
    +'<div style="height:36px"></div></div>';
}
/* church console: create communities and approve who joins */
function viewConsoleCommunities(){
  const me=state.session&&state.session.churchId;
  const mine=state.data.communities.filter(function(c){return c.churchId===me;});
  const pend=pendingCommunityRequests(me);
  return topbar('Communities','Your church’s groups and who joins them',{back:'console',
    actions:'<button class="icon-btn active" data-act="new-community" aria-label="New community">'+ico('plus',18)+'</button>'})
    +'<div class="view stack gap-14">'
    +'<div class="glass pad stack gap-12"><div class="row between"><span class="eyebrow accent">Requests to join · '+pend.length+'</span></div>'
    +(pend.length?pend.map(function(r){const c=communityById(r.communityId)||{};
      return '<div class="row between gap-12"><span class="row gap-10" style="min-width:0"><span class="avatar avatar-sm" style="background:'+grad(r.userKey)+'">'+initials(r.userName)+'</span>'
        +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14.5px">'+esc(r.userName)+'</span>'
        +'<span class="cap">'+esc(c.name||'')+' · '+esc(r.userCity||'')+' · '+ago(r.createdAt)+'</span></span></span>'
        +'<span class="row gap-6" style="flex:none"><button class="btn btn-xs btn-primary" data-act="cm-approve" data-id="'+r.id+'">'+ico('check',13)+'Approve</button>'
        +'<button class="icon-btn" data-act="cm-decline" data-id="'+r.id+'" aria-label="Decline" style="width:32px;height:32px">'+ico('x',14)+'</button></span></div>';}).join('')
      :'<p class="cap">No one is waiting. New requests appear here.</p>')+'</div>'
    +'<div class="sec-title"><span class="eyebrow accent">Your communities · '+mine.length+'</span><button class="cap" data-act="new-community">New community</button></div>'
    +(mine.length?'<div class="stack gap-12">'+mine.map(function(c){const p=pend.filter(function(r){return r.communityId===c.id;}).length;
      return '<article class="glass press pad row between gap-14" data-go="community-page" data-id="'+c.id+'">'
        +'<div class="row gap-14" style="min-width:0">'+communityIcon(c,44)
        +'<div class="stack gap-3" style="min-width:0"><span class="h3">'+esc(c.name)+'</span><span class="cap">'+communityMemberCount(c)+' member'+(communityMemberCount(c)===1?'':'s')+' · '+communityThreads(c.id).length+' conversation'+(communityThreads(c.id).length===1?'':'s')+'</span></div></div>'
        +(p?'<span class="badge badge-accent num">'+p+' waiting</span>':ico('chevR',16))+'</article>';}).join('')+'</div>'
      :empty('users','No communities yet','Start one for your choir, youth, parents or prayer team. Only people who follow your church can ask to join.','<button class="btn btn-sm btn-primary" data-act="new-community">Create a community</button>'))
    +'<div style="height:30px"></div></div>';
}

/* ---------- BibleGPT ---------- */
const KB=[
  {k:['anxious','anxiety','worry','worried','fear','afraid','panic','stress'],a:'Scripture meets anxiety with presence rather than argument. Paul’s instruction is practical: name the worry, hand it over in prayer, and let thanksgiving reframe it. The promised result is not that circumstances change first, but that peace guards your heart while they do.',v:['Philippians 4:6','Joshua 1:9','John 14:27']},
  {k:['peace','calm','rest','tired','weary','burnout','exhausted'],a:'Rest in Scripture is a person before it is a practice. Jesus invites the labouring and heavy-laden to come — not to try harder, but to exchange a heavy yoke for his. The peace he gives is described as unlike what the world hands out: it does not depend on conditions.',v:['Matthew 11:28','John 14:27','Psalm 23:1']},
  {k:['forgive','forgiveness','bitter','angry','anger','hurt','betrayed'],a:'Forgiveness in the New Testament is grounded in what has already been forgiven us — it flows downhill from grace, not uphill from willpower. It does not require pretending the wound was small, and it is not the same as trusting someone again immediately. Reconciliation and forgiveness are related but distinct.',v:['Lamentations 3:22','Romans 8:28']},
  {k:['guidance','decision','direction','future','job','career','confused','choose'],a:'The wisdom books frame guidance as trust plus counsel rather than a hidden code to crack. Trusting the LORD with the whole heart, refusing to lean only on your own understanding, and seeking wise counsel is the pattern — direction usually clarifies as you walk, not before you step.',v:['Proverbs 3:5','Psalm 119:105']},
  {k:['strength','weak','weakness','strong','tired of trying','fail','failure'],a:'Paul’s answer to his own unresolved weakness was not removal but sufficiency: grace that is enough, and strength that is perfected precisely where he is weakest. Waiting on the LORD is described as an exchange of strength, not a summoning of your own.',v:['2 Corinthians 12:9','Isaiah 40:31']},
  {k:['pray','prayer','how to pray','praying'],a:'Prayer in Scripture is startlingly ordinary: requests made known, thanksgiving mixed in, and stillness that lets God be God. The pattern across the Psalms is honesty first — lament, question and praise all sit side by side without apology.',v:['Philippians 4:6','Psalm 46:10']},
  {k:['grief','loss','death','died','mourning','sad','depressed','lonely'],a:'Lament is a legitimate, well-attested form of faith — roughly a third of the Psalms are laments. Grief is not treated as a lapse in trust. Mercies that are new every morning are offered to people in the middle of ruins, not after they have recovered.',v:['Lamentations 3:22','Psalm 23:1','Matthew 11:28']},
  {k:['love','marriage','relationship','friend','family'],a:'Love in the New Testament is described in verbs rather than feelings — patient, kind, not self-seeking, keeping no record of wrongs. That framing makes love something you can practise on a day when the feeling is thin.',v:['Romans 8:28','John 14:27']},
  {k:['money','tithe','finance','debt','poor','generous'],a:'Generosity in Scripture is consistently tied to trust rather than surplus — the widow’s two coins are praised over larger gifts. Giving is framed as cheerful and deliberate, never coerced, and always paired with care for the poor among you.',v:['Proverbs 3:5','Romans 8:28']},
  {k:['bible','read','study','scripture','where to start','beginner'],a:'A common starting path is one Gospel (Luke reads well for newcomers), then Acts for what happened next, then a Psalm a day alongside it. Scripture describes itself as a lamp for the next step rather than a floodlight over the whole road — small daily portions suit that image.',v:['Psalm 119:105','Isaiah 40:31']}
];
const PASTORAL=['should i divorce','divorce','should i leave my church','baptism mode','speaking in tongues','predestination','end times','rapture','who is right','denomination is correct','abortion','politics','vote','suicide','harm myself','kill myself','medication','diagnosis','lawsuit','legal advice'];
function findVerse(ref){return VERSES.find(function(v){return v.r===ref;})||{r:ref,t:'Open this passage in the reader.'};}
KB.push(
  {k:['jesus','christ','who is jesus','son of god','messiah','saviour','savior'],a:'The Gospels present Jesus as the Word made flesh — God with us — who taught, healed, died on the cross and rose again. John sums up why he came in a single sentence: God loved the world enough to give his Son, so that whoever believes in him would have life that does not end.',v:['John 3:16','John 1:1']},
  {k:['grace','saved','salvation','born again','works'],a:'Grace in the New Testament means a gift that cannot be earned. Paul is plain about it: we are saved by grace through faith, and even that faith is God’s gift, not a reward for effort. Good works follow grace; they never purchase it.',v:['Ephesians 2:8','2 Corinthians 12:9']},
  {k:['creation','genesis','beginning','created','world began'],a:'The Bible opens with God as the source of everything that exists: “In the beginning God created the heaven and the earth.” Genesis is less a science lesson than a declaration of who made the world, that it is good, and that people bear God’s image.',v:['Genesis 1:1','John 1:1']},
  {k:['lord’s prayer','lords prayer',"lord's prayer",'our father','how did jesus pray'],a:'When the disciples asked Jesus to teach them to pray, he gave them a pattern rather than a formula: honour God’s name, seek his kingdom, ask for daily bread, forgiveness and protection. It begins by calling God “Father”.',v:['Matthew 6:9','Philippians 4:6']},
  {k:['psalm 23','shepherd','valley of the shadow','green pastures','still waters'],a:'Psalm 23 is a shepherd\u2019s psalm written by a shepherd. Its claim is not that the valley is avoided but that it is walked through, with company: \u201cI will fear no evil: for thou art with me.\u201d Rest, provision and being led come first; the table is set in the presence of enemies rather than after they are gone.',v:['Psalm 23:1','Matthew 11:28']},
  {k:['charity','1 corinthians 13','love is patient','what is love'],a:'Paul’s description of love in 1 Corinthians 13 is a list of actions — patient, kind, not envious, not proud. It was written to a divided church, as a picture of how people who disagree can still belong to one another.',v:['1 Corinthians 13:4','John 14:27']}
);
/* Words that mark a question as being about the Bible or Christian faith. */
const BIBLE_WORDS=['god','jesus','christ','lord','bible','scripture','verse','psalm','gospel','prayer','pray','faith','church','sin','grace','heaven','hell','spirit','holy','apostle','disciple','prophet','paul','peter','moses','david','abraham','noah','mary','john','genesis','exodus','revelation','proverbs','isaiah','romans','matthew','mark','luke','acts','testament','cross','resurrection','easter','christmas','baptism','communion','worship','sermon','pastor','parable','miracle','angel','salvation','saved','forgive','commandment','covenant','israel','jerusalem','blessing','bless','amen','kingdom','righteous','repent','believe','christian','hymn','devotion','fasting','tithe'];
function isBibleQuery(q){
  const w=String(q||'').toLowerCase();
  if(KB.some(function(e){return e.k.some(function(k){return w.indexOf(k)>-1;});}))return true;
  if(/\b[1-3]?\s?[a-z]+\s\d{1,3}:\d{1,3}\b/.test(w))return true;
  return BIBLE_WORDS.some(function(b){return new RegExp('\\b'+b+'s?\\b').test(w);});
}
function bibleAnswer(qRaw){
  const q=String(qRaw||'').toLowerCase().trim();
  if(!q)return {a:'Ask me anything about the Bible.',v:[]};
  if(PASTORAL.some(function(p){return q.indexOf(p)>-1;}))return {pastoral:true,
    a:'This one deserves a person, not an app. Questions like this land differently depending on your story, your church’s teaching, and things I cannot see from here. I would rather hand you to someone who knows you.',v:[]};
  let best=null,score=0;
  KB.forEach(function(e){const s=e.k.reduce(function(a,k){return a+(q.indexOf(k)>-1?1:0);},0);if(s>score){score=s;best=e;}});
  if(!best&&!isBibleQuery(q))return {offTopic:true,
    a:'I only answer questions about the Bible and the Christian faith. Try asking about a passage, a person in Scripture, or what the Bible says about something in your life.',v:[]};
  if(!best)return {a:'I could not find a clear anchor for that in the passages I hold. Try naming a book or verse, or the situation in plain words — “what does Psalm 23 mean”, “how do I forgive my brother”, “where should I start reading” — and I will bring the passages that speak to it.',v:['Psalm 119:105']};
  const mode=state.ui.chatMode;
  let a=best.a;
  if(mode==='Study')a=best.a+'\n\nCross-references worth sitting with: '+best.v.join(' · ')+'. Read each in its chapter, not alone — the verses around a verse are its first commentary.';
  if(mode==='Kids')a='Here is a simple way to see it: God is close to you, even when things feel big or scary. You can talk to him about anything — like telling a parent who always listens. He promises to stay with you and help you be brave.';
  if(mode==='Summarise')a='In short: '+best.a.split('.')[0]+'. The passages below carry the weight of it.';
  if(mode==='Translate')a='[Shown in '+esc(state.prefs.lang)+' where a translation exists]\n\n'+best.a;
  return {a:a,v:best.v};
}
function viewBibleGPT(){
  const modes=[['Ask','Plain answers'],['Study','Cross-references'],['Summarise','The short version'],['Translate','In your language'],['Kids','Simple words']];
  const msgs=state.ui.chat;
  const starters=['Who is Jesus?','What does Psalm 23 mean?','How do I forgive someone who hurt me?','Where should I start reading the Bible?','What does grace mean?','Teach me the Lord’s Prayer'];
  return '<div class="gpt-wrap">'
    +'<header class="gpt-head">'
      +'<div class="row gap-12"><span class="gpt-mark">'+bibleGptMark(26)+'</span>'
      +'<div class="stack gap-2"><h1 class="h2" style="font-size:22px">BibleGPT</h1>'
      +'<span class="cap row gap-6"><i class="gpt-dot"></i>Answers from Scripture only</span></div></div>'
      +(msgs.length?'<button class="chip" data-act="clear-chat">'+ico('edit',14)+'New chat</button>':'')
    +'</header>'
    +'<div class="gpt-modes scroll-x">'+modes.map(function(m){
      return '<button class="chip chip-lav'+(state.ui.chatMode===m[0]?' on':'')+'" data-act="chat-mode" data-v="'+m[0]+'" title="'+m[1]+'">'+m[0]+'</button>';}).join('')+'</div>'
    +'<div class="gpt-thread" id="gptThread">'
    +(msgs.length?msgs.map(function(m){
        if(m.role==='user')return '<div class="bubble me">'+esc(m.text)+'</div>';
        return '<div class="gpt-msg"><span class="gpt-avatar">'+bibleGptMark(16)+'</span><div class="stack gap-10" style="min-width:0">'
          +'<div class="bubble ai'+(m.offTopic?' off':'')+'">'+esc(m.text).replace(/\n/g,'<br>')+'</div>'
          +(m.verses&&m.verses.length?'<div class="row gap-8 wrap">'+m.verses.map(function(v){
            return '<button class="verse-chip" data-act="open-verse" data-r="'+esc(v)+'">'+ico('book',13)+esc(v)+'</button>';}).join('')+'</div>':'')
          +(m.pastoral?'<button class="btn btn-sm btn-outline" data-act="ask-pastor" style="align-self:flex-start">'+ico('msg',16)+'Ask my pastor</button>':'')
          +(m.offTopic?'':'<span class="cap" style="font-size:11px">'+(m.pastoral?'Pastoral question — routed to a person':'Sources shown above · pastors can correct answers')+'</span>')
          +'</div></div>';}).join('')
      +(state.ui.chatBusy?'<div class="gpt-msg"><span class="gpt-avatar">'+bibleGptMark(16)+'</span><div class="bubble ai typing"><i></i><i></i><i></i></div></div>':'')
      :'<div class="gpt-welcome"><span class="gpt-mark lg">'+bibleGptMark(40)+'</span>'
        +'<h2 class="h2">Ask anything about the Bible</h2>'
        +'<p class="body" style="max-width:44ch;text-align:center">Passages, people, meanings and what Scripture says about your day. Every answer shows its verses.</p>'
        +'<div class="gpt-starters">'+starters.map(function(s){return '<button class="gpt-starter" data-act="ask" data-v="'+esc(s)+'">'+esc(s)+ico('chevR',14)+'</button>';}).join('')+'</div>'
        +'<p class="cap" style="text-align:center">Pastoral and doctrinal questions go to your pastor. No medical, legal or off-topic answers.</p></div>')
    +'</div>'
    +'<div class="gpt-input glass"><input class="grow" id="chatBox" placeholder="Ask about a verse, a story or a question of faith…" aria-label="Ask BibleGPT" autocomplete="off">'
    +'<button class="btn btn-primary" data-act="chat-send" aria-label="Send" style="height:44px;width:44px;padding:0;border-radius:50%;flex:none">'+ico('send',18)+'</button></div>'
    +'</div>';
}

/* ---------- live stream ---------- */
const LIVE_CHAT=[['Anitha R.','Joining from Koramangala 🙏'],['Joseph K.','Praying along from Hyderabad'],['Mercy T.','The choir sounds beautiful tonight'],['Samuel P.','180 of us under the tarpaulin are watching too'],['Ruth A.','Amen. Amen.'],['Grace M.','Br. Immanuel opened his eyes today — praise God']];
function liveChat(){return state.ui.liveChat||(state.ui.liveChat=LIVE_CHAT.map(function(m){return {n:m[0],t:m[1]};}));}
function viewLive(){
  const e=state.data.events.find(function(x){return x.id===state.params.id;});
  if(!e)return '<div class="view screen-pad">'+empty('radio','Stream not found','This stream may have ended.','<button class="btn btn-sm btn-ghost" data-go="home">Home</button>')+'</div>';
  const here=(state.local.rsvps||[]).indexOf(e.id)>-1,chat=liveChat();
  return '<div class="view" style="padding-top:14px">'
    +'<button class="row gap-6 cap mt-8" data-go="'+(state.params.from||'home')+'" style="color:var(--text-3);margin-bottom:12px">'+ico('arrowL',16)+'Leave stream</button>'
    +'<div class="live-stage">'+coverArt(e.id)
    +'<div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,19,.05),rgba(5,8,19,.78))"></div>'
    +'<div style="position:absolute;top:14px;left:14px;right:14px" class="row between gap-10">'
    +'<span class="badge badge-live"><i class="dot-live"></i>Live · <span class="num">'+(e.rsvpCount||0)+'</span> watching</span>'
    +'<span class="badge badge-accent">'+ico('globe',12)+esc(state.prefs.lang)+' captions</span></div>'
    +'<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center"><span class="icon-btn active" style="width:70px;height:70px;background:rgba(34,22,12,.6);box-shadow:0 0 34px rgba(201,151,74,.4)">'+ico('play',28)+'</span></div>'
    +'<div style="position:absolute;left:16px;right:90px;bottom:16px" class="stack gap-4"><span class="h2" style="font-size:20px;color:#F2F4FF">'+esc(e.title)+'</span><span class="cap" style="color:#B6BEE0">'+esc(e.churchName||'')+' · '+esc(e.location||'Online')+'</span></div>'
    +'<div class="live-float" aria-hidden="true"></div></div>'
    +'<div class="row gap-8 mt-12 wrap">'+REACTIONS.map(function(r){return '<button class="react" data-act="live-react" data-e="'+r.e+'" aria-label="'+r.l+'"><span class="em">'+r.e+'</span>'+r.l+'</button>';}).join('')+'</div>'
    +'<div class="row gap-10 mt-12">'
    +'<button class="btn btn-sm '+(here?'btn-ghost':'btn-primary')+' grow" data-act="live-here" data-id="'+e.id+'">'+ico(here?'check':'pin',16)+(here?'You\'re here':'I\'m here')+'</button>'
    +'</div>'
    +'<div class="glass pad stack gap-12 mt-14"><div class="row between"><span class="eyebrow accent">Live chat</span><span class="cap num">'+chat.length+' messages</span></div>'
    +'<div class="live-chat" id="liveChat">'+chat.map(function(m){return '<div class="live-msg'+(m.me?' me':'')+'"><b>'+esc(m.n)+'</b><span>'+esc(m.t)+'</span></div>';}).join('')+'</div>'
    +'<div class="row gap-8"><input class="input grow" id="liveBox" placeholder="Say something kind…" style="padding:12px 16px;border-radius:var(--r-pill)">'
    +'<button class="btn btn-primary" data-act="live-send" style="height:48px;width:48px;padding:0;border-radius:50%;flex:none">'+ico('send',16)+'</button></div></div>'
    +'<div class="glass pad stack gap-8 mt-14"><span class="eyebrow accent">After the stream</span><p class="body">The replay lands in the sermon library of '+esc(e.churchName||'the church')+' automatically, with a transcript and a BibleGPT summary.</p></div>'
    +'<div style="height:30px"></div></div>';
}

/* ---------- designed "coming soon" screens ---------- */
const SOON={
  'Worship music':{i:'music',eye:'Community',lead:'Lyrics, chords and licensed streaming — for worship teams, and for the drive to church.',pts:['Lyrics and chords with one-tap transpose','Set-list builder for worship teams','Church song of the week','Licensed streaming, audio-first for low data'],hue:280},
  'Marketplace':{i:'bag',eye:'Community',lead:'Verified Christian businesses, bookstores, event vendors, guest speakers and AV teams. Inquiries stay in the app.',pts:['Every listing verified before it appears','Reviews from churches that actually hired them','Sponsored listings clearly labelled','Inquiry by in-app message, no phone numbers scraped'],hue:40},
  'Scheduling':{i:'clock',eye:'Church console',lead:'Schedule posts and broadcasts to land at the right hour, with quiet hours respected.',pts:['Pick a date and time per post','Quiet hours 10pm–6am respected automatically','Urgent prayer alerts bypass quiet hours'],hue:45},
  'Reminders':{i:'bell',eye:'Church console',lead:'Automatic reminders one day and one hour before every event, in each member’s language.',pts:['1 day and 1 hour before, per event','Sent in the member’s preferred language','Live-stream link included when there is one'],hue:45},
  'Volunteer rosters':{i:'cal',eye:'Ministry ops',lead:'Drag-and-drop Sunday rosters for ushers, worship, kids church and media.',pts:['Drag-and-drop schedule by ministry','Swap requests between volunteers','QR attendance check-in at the door'],hue:160},
  'QR attendance':{i:'grid',eye:'Ministry ops',lead:'One QR at the door. Members tap to check in; leaders see who came.',pts:['Works offline in the sanctuary','Family check-in in one tap','Attendance trends per service'],hue:160},
  'Transfer letters':{i:'file',eye:'Ministry ops',lead:'Issue and receive membership transfer letters between verified churches.',pts:['Issued by the sending church, accepted by the receiving one','The member consents before anything moves','Full history kept for both churches'],hue:160},
  'Reply to member':{i:'msg',eye:'Pastoral care',lead:'Private replies from pastors to prayer and care requests.',pts:['Visible only to the member and pastors','Book a visit or a call from the reply','Nothing leaves the care queue'],hue:340},
  'Visit request':{i:'cal',eye:'Believer',lead:'Ask a church about visiting — service times, language and where to park.',pts:['Answered by a real person at the church','Directions and service time in one card','Someone to meet you at the door if you want'],hue:230}
};
function stainedGlass(h){
  const h2=(h+50)%360,h3=(h+190)%360,id='sg'+h;
  return '<svg viewBox="0 0 400 230" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#171F4A"/><stop offset="1" stop-color="#0B1026"/></linearGradient></defs>'
    +'<rect width="400" height="230" fill="url(#'+id+')"/>'
    +'<g stroke="rgba(255,255,255,.14)" stroke-width="1">'
    +'<path d="M0 230 L70 50 L150 230Z" fill="hsla('+h+',75%,66%,.28)"/>'
    +'<path d="M120 230 L200 0 L280 230Z" fill="hsla('+h2+',75%,70%,.22)"/>'
    +'<path d="M250 230 L330 70 L400 230Z" fill="hsla('+h3+',70%,66%,.26)"/>'
    +'<path d="M0 130 L60 0 L130 130Z" fill="hsla('+h2+',70%,72%,.12)"/>'
    +'<path d="M300 0 L400 0 L400 120Z" fill="hsla('+h+',70%,66%,.14)"/>'
    +'<circle cx="200" cy="78" r="36" fill="rgba(201,151,74,.16)"/><circle cx="200" cy="78" r="18" fill="rgba(255,246,226,.22)"/></g></svg>';
}
function viewSoon(){
  const key=state.params.v,m=SOON[key]||{i:'sparkle',eye:'Coming soon',lead:'This module is specified and designed, and lands in the next build phase.',pts:[],hue:260};
  const back=state.params.from&&state.params.from!=='soon'?state.params.from:'community';
  return '<div class="view" style="padding-top:14px">'
    +'<button class="row gap-6 cap mt-8" data-go="'+esc(back)+'" style="color:var(--text-3);margin-bottom:12px">'+ico('arrowL',16)+'Back</button>'
    +'<div class="soon-hero">'+stainedGlass(m.hue)
    +'<div class="stack gap-8" style="position:relative;z-index:2"><span class="row gap-8"><span class="badge badge-lav">Next phase</span><span class="eyebrow" style="color:var(--brand)">'+esc(m.eye)+'</span></span>'
    +'<h1 class="display" style="font-size:34px;color:#F2F4FF">'+esc(key||'Coming soon')+'</h1></div></div>'
    +'<div class="glass pad stack gap-16 mt-16"><p class="body" style="font-size:16.5px;color:var(--text-1)">'+esc(m.lead)+'</p>'
    +(m.pts.length?'<div class="stack gap-10">'+m.pts.map(function(p){return '<div class="row gap-12" style="align-items:flex-start"><span class="accent" style="flex:none;margin-top:3px">'+ico('check',16)+'</span><span class="body">'+esc(p)+'</span></div>';}).join('')+'</div>':'')
    +'<hr class="divider"><div class="row gap-10 wrap"><button class="btn btn-sm btn-primary" data-act="notify-soon" data-v="'+esc(key)+'">'+ico('bell',16)+'Tell me when it lands</button>'
    +'<button class="btn btn-sm btn-ghost" data-go="'+esc(back)+'">Back</button></div></div>'
    +'<div class="glass pad stack gap-8 mt-14"><span class="eyebrow accent">Why it waits</span><p class="body">The first release of believersArk is deliberately narrow: churches, feed, communities, journey and prayer — fully working. Everything here is designed against the same system, so it slots in without a redesign.</p></div>'
    +'<div style="height:30px"></div></div>';
}

/* ---------- me & settings ---------- */
function prefRow(label,key,sub){
  const on=!!state.prefs[key];
  return '<button class="row between gap-12" data-act="pref" data-k="'+key+'" style="text-align:left;width:100%">'
    +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:15px">'+esc(label)+'</span>'+(sub?'<span class="cap">'+esc(sub)+'</span>':'')+'</span>'
    +'<span class="switch'+(on?' on':'')+'" role="switch" aria-checked="'+on+'"></span></button>';
}
function avatarHTML(s,cls,style){
  return '<span class="avatar '+(cls||'')+'" style="position:relative;overflow:hidden;background:'+grad(s.avatarSeed||s.id)+';'+(style||'')+'">'+initials(s.name)
    +(s.photo?'<img src="'+esc(s.photo)+'" alt="" referrerpolicy="no-referrer" onerror="this.remove()" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">':'')+'</span>';
}
/* Me is your profile: everything others see, plus the private details only you can see. */
function viewMe(){
  const s=state.session;
  if(!s)return topbar('You','Guest · browsing',{})
    +'<div class="view stack"><div class="glass pad stack gap-14"><span class="eyebrow accent">You\'re browsing as a guest</span>'
    +'<h3 class="h2">Create your account</h3><p class="body">Join your church with its invite code, keep a journey, pray together and take part in your church\'s communities.</p>'
    +'<button class="btn btn-primary btn-block" data-go="welcome">Get started</button></div></div>';
  const admin=isChurchAdmin();
  const follows=myChurchIds(),home=myHomeChurchId()?churchById(myHomeChurchId()):null;
  const posts=communityThreads().filter(function(x){return isMe(x.authorId);});
  const joined=myCommunityIds().map(communityById).filter(Boolean);
  const tab=state.ui.personTab||'Posts';
  let body='';
  if(tab==='Posts')body=posts.length?'<div class="stack gap-14 stagger">'+posts.map(function(x){return postCard(x,{follow:false});}).join('')+'</div>'
    :empty('edit','You haven\'t written in a community yet','Join a community at your church and start a conversation — that is where believers speak on the ark.','<button class="btn btn-sm btn-primary" data-go="community">Browse communities</button>');
  else body='<div class="stack gap-14">'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">About</span><p class="body">'+esc(s.bio||'Add a line about your walk from Edit profile.')+'</p>'
    +(home?'<button class="row gap-10" data-go="church-profile" data-id="'+home.id+'" style="text-align:left">'+ico('church',16,'dim')+'<span class="body" style="color:var(--text-1)">Home church · '+esc(home.name)+'</span></button>':'')
    +'<div class="row gap-10">'+ico('pin',16,'dim')+'<span class="body" style="color:var(--text-1)">'+esc([s.city,s.country].filter(Boolean).join(', '))+'</span></div>'
    +'<div class="row gap-10">'+ico('globe',16,'dim')+'<span class="body" style="color:var(--text-1)">'+esc(s.lang||'English')+'</span></div>'
    +(s.gender?'<div class="row gap-10">'+ico('me',16,'dim')+'<span class="body" style="color:var(--text-1)">'+esc(s.gender)+'</span></div>':'')
    +(s.createdAt?'<div class="row gap-10">'+ico('cal',16,'dim')+'<span class="body" style="color:var(--text-1)">On the ark since '+fmtDate(s.createdAt)+'</span></div>':'')+'</div>'
    +((s.goals||[]).length?'<div class="glass pad stack gap-12"><span class="eyebrow accent">My goals</span><div class="row gap-8 wrap">'
      +GOALS.filter(function(g){return s.goals.indexOf(g.k)>-1;}).map(function(g){return '<span class="chip static">'+ico(g.icon,13)+esc(g.t)+'</span>';}).join('')+'</div></div>':'')
    +'</div>';
  return '<div class="view" style="padding-top:18px">'
    +'<div class="cover" style="height:126px">'+(home&&photoFor(home.id)?'<img src="'+esc(photoFor(home.id))+'" alt="" style="width:100%;height:100%;object-fit:cover;display:block">':coverArt(s.id))+'</div>'
    +'<div class="glass pad stack gap-16" style="margin-top:-38px;position:relative">'
    +'<div class="row between gap-12" style="margin-top:-50px;align-items:flex-end">'
    +'<button class="me-avatar" data-act="pick-avatar" data-target="profile" aria-label="Change profile photo">'+avatarHTML(s,'avatar-lg','border:3px solid var(--bg-0);border-radius:26px')+'<span class="ob-avatar-edit">'+ico('edit',13)+'</span></button>'
    +'<span class="row gap-6 wrap"><span class="badge badge-ice">'+esc(s.lang||'English')+'</span><span class="badge badge-accent">'+(state.local.streak||0)+' day streak</span></span></div>'
    +'<div class="stack gap-4"><h1 class="h1">'+esc(s.name)+'</h1>'
    +(s.handle?'<span class="cap" style="font-size:14px">@'+esc(s.handle)+'</span>':'')
    +'<p class="body mt-4">'+esc(s.bio||'A believer on the journey.')+'</p>'
    +'<div class="row gap-14 wrap cap mt-4"><span class="row gap-6">'+ico('pin',14)+esc([s.city,s.country].filter(Boolean).join(', '))+'</span>'
    +(home?'<button class="row gap-6 ice" data-go="church-profile" data-id="'+home.id+'">'+ico('church',14)+esc(home.name)+(homeChurchLocked()?' '+ico('lock',12):'')+'</button>':'')+'</div></div>'
    +'<div class="me-stats">'
    +'<span><b class="num">'+follows.length+'</b>Churches</span><span><b class="num">'+joined.length+'</b>Communities</span>'
    +'<span><b class="num">'+(state.local.rsvps||[]).length+'</b>Events</span></div>'
    +'<div class="row gap-10 wrap"><button class="btn btn-sm btn-ghost grow" data-act="edit-profile">'+ico('edit',16)+'Edit profile</button>'
    +(admin?'':'<button class="btn btn-sm btn-primary grow" data-act="join-church">'+ico('plus',16)+'Join another church</button>')+'</div>'
    /* the two sides of a church account, from the one place a person looks for themselves */
    +(admin?'<div class="mode-card">'
        +'<span class="stack gap-3" style="min-width:0"><span class="h3" style="font-size:15px">'+(believerMode()?'You are browsing as a believer':'You are in church admin mode')+'</span>'
        +'<span class="cap">'+(believerMode()?'Your home church is '+esc((myChurch()||{}).name||'your church')+' and cannot be changed here.':'Switch over to see the ark the way your people do.')+'</span></span>'
        +(believerMode()
          ?'<button class="btn btn-sm btn-primary" data-act="mode-admin" style="flex:none">'+ico('grid',15)+'Church admin</button>'
          :'<button class="btn btn-sm btn-ghost" data-act="mode-believer" style="flex:none">'+ico('me',15)+'Use as a believer</button>')
      +'</div>':'')
    +'<div class="private-box"><span class="row gap-6 eyebrow">'+ico('lock',12)+'Only you and your church admins see this</span>'
    +'<div class="row gap-14 wrap cap"><span class="row gap-6">'+ico('mail',14)+esc(s.email||'—')+(s.provider&&SOCIAL[s.provider]?' · via '+SOCIAL[s.provider].label:'')+'</span>'
    +'<span class="row gap-6">'+ico('phone',14)+esc(s.phone||'Add a number in Edit profile')+'</span></div></div>'
    +'</div>'
    +'<div class="tabs mt-16">'+['Posts','About'].map(function(t){
      return '<button class="tab'+(tab===t?' on':'')+'" data-act="person-tab" data-v="'+t+'">'+t+'</button>';}).join('')+'</div>'
    +'<div class="mt-16">'+body+'</div>'
    +'<div class="sec-title"><span class="eyebrow accent">My churches</span><button class="cap" data-go="churches">Find more</button></div>'
    +(follows.length?'<div class="stack gap-10">'+follows.map(function(id){const c=churchById(id);if(!c)return '';
      const isHome=s.homeChurchId===id,mem=isMemberOf(id);
      return '<button class="glass press pad-sm row between gap-12" data-go="church-profile" data-id="'+id+'" style="text-align:left">'
        +'<span class="row gap-12" style="min-width:0">'+churchLogo(c,34)+''
        +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14.5px">'+esc(c.name)+'</span><span class="cap">'+esc(c.city||'')+' · '+(mem?'Member':'Following')+'</span></span></span>'
        +(isHome?'<span class="badge badge-accent">'+ico('star',12)+'Home</span>':mem?'<span class="badge badge-mint">'+ico('check',11)+'Member</span>':ico('chevR',16))+'</button>';}).join('')+'</div>'
      :empty('church','No churches yet','Join your church with its invite code.','<button class="btn btn-sm btn-primary" data-act="join-church">Enter an invite code</button>'))
    +(joined.length?'<div class="sec-title"><span class="eyebrow accent">My communities</span><button class="cap" data-go="community">See all</button></div>'
      +'<div class="row gap-8 wrap">'+joined.map(function(c){return '<button class="chip" data-go="community-page" data-id="'+c.id+'">'+ico(c.icon||'users',13)+esc(c.name)+'</button>';}).join('')+'</div>':'')
    +(admin&&!believerMode()?'<div class="sec-title"><span class="eyebrow accent">Church tools</span></div>'
      +'<div class="stack gap-10">'
      +meRow('grid','Church console','Publish, followers, connections, reactions','console')
      +meRow('edit','Edit church profile','Banner, mark, service times and more','console-profile')
      +(s.churchId?meRow('eye','Public profile','What believers see','church-profile',s.churchId):'')
      +meRow('msg','Church-to-church inbox','Messages between verified churches','console-c2c')
      +'</div>':'')
    +'<div class="stack gap-10 mt-24">'
    +meRow('star','Saved posts',(state.local.saved||[]).length+' saved','saved')
    +meRow('users','Family','Child and youth profiles','family')
    +'<button class="glass press pad-sm row between gap-12" data-act="signout" style="text-align:left"><span class="row gap-12">'
    +'<span class="icon-btn" style="flex:none">'+ico('logout',18)+'</span><span class="h3">Sign out</span></span>'+ico('chevR',16)+'</button>'
    +'</div><div style="height:30px"></div></div>';
}
function meRow(icon,title,sub,route,id){
  return '<button class="glass press pad-sm row between gap-12" data-go="'+route+'"'+(id?' data-id="'+esc(id)+'"':'')+' style="text-align:left">'
    +'<span class="row gap-12" style="min-width:0"><span class="icon-btn" style="flex:none">'+ico(icon,18)+'</span>'
    +'<span class="stack gap-2" style="min-width:0"><span class="h3">'+esc(title)+'</span><span class="cap">'+esc(sub)+'</span></span></span>'
    +ico('chevR',16)+'</button>';
}
function viewSettings(){
  const dark=state.theme==='dark';
  if(isChurchSession())return topbar('Settings &amp; privacy','Church account',{})
    +'<div class="view stack gap-14">'
    +'<div class="glass pad stack gap-16"><span class="eyebrow accent">Appearance</span>'
    +'<div class="row gap-10">'
    +'<button class="glass press pad-sm stack gap-8 grow" data-act="theme" data-v="dark" style="'+(dark?'border-color:rgba(201,151,74,.45)':'')+'">'
    +'<span class="row between">'+ico('moon',18,dark?'accent':'')+(dark?'<span class="accent">'+ico('check',16)+'</span>':'')+'</span>'
    +'<span class="h3">Espresso</span><span class="cap">Deep brown, softly lit gold</span></button>'
    +'<button class="glass press pad-sm stack gap-8 grow" data-act="theme" data-v="light" style="'+(!dark?'border-color:rgba(201,151,74,.45)':'')+'">'
    +'<span class="row between">'+ico('sun',18,!dark?'accent':'')+(!dark?'<span class="accent">'+ico('check',16)+'</span>':'')+'</span>'
    +'<span class="h3">Ivory</span><span class="cap">Warm light, bronze accents</span></button></div></div>'
    +'<div class="glass pad stack gap-16"><span class="eyebrow accent">Notifications</span>'
    +prefRow('Church-to-church messages','broadcast','New messages and connection requests')
    +'<hr class="divider">'+prefRow('Quiet hours','quiet','Nothing between 10pm and 6am')+'</div>'
    +'<div class="glass pad stack gap-16"><span class="eyebrow accent">Privacy</span>'
    +(function(){
        const c=myChurch()||{};
        const on=!!c.connectionsPrivate;
        return '<button class="row between gap-12" data-act="ch-connections-private" style="text-align:left;width:100%">'
          +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:15px">Hide who we are connected with</span>'
          +'<span class="cap">Everyone still sees how many connections you have — just not which churches</span></span>'
          +'<span class="switch'+(on?' on':'')+'" role="switch" aria-checked="'+on+'"></span></button>';
      })()
    +'</div>'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Church profile</span>'
    +(state.session.churchId?'<button class="btn btn-ghost btn-block" data-go="church-profile" data-id="'+esc(state.session.churchId)+'">'+ico('eye',17)+'View public profile</button>':'')
    +'<button class="btn btn-ghost btn-block" data-act="export">'+ico('file',17)+'Export church data</button></div>'
    +'<div class="glass pad stack gap-8"><span class="eyebrow accent">About</span>'
    +'<div class="row gap-10">'+arkGlyph(30)+wordmark(17)+'</div>'
    +'<p class="cap">Prototype build · Data '+(state.ui.dbState==='live'?'syncing live':'local to this device')+'</p></div>'
    +'<div style="height:30px"></div></div>';
  return topbar('Settings &amp; privacy','Yours to shape',{})
    +'<div class="view stack gap-14">'
    +'<div class="glass pad stack gap-16"><span class="eyebrow accent">Appearance</span>'
    +'<div class="row gap-10">'
    +'<button class="glass press pad-sm stack gap-8 grow" data-act="theme" data-v="dark" style="'+(dark?'border-color:rgba(201,151,74,.45)':'')+'">'
    +'<span class="row between">'+ico('moon',18,dark?'accent':'')+(dark?'<span class="accent">'+ico('check',16)+'</span>':'')+'</span>'
    +'<span class="h3">Espresso</span><span class="cap">Deep brown, softly lit gold</span></button>'
    +'<button class="glass press pad-sm stack gap-8 grow" data-act="theme" data-v="light" style="'+(!dark?'border-color:rgba(201,151,74,.45)':'')+'">'
    +'<span class="row between">'+ico('sun',18,!dark?'accent':'')+(!dark?'<span class="accent">'+ico('check',16)+'</span>':'')+'</span>'
    +'<span class="h3">Ivory</span><span class="cap">Warm light, bronze accents</span></button></div></div>'
    +'<div class="glass pad stack gap-16"><span class="eyebrow accent">Language</span>'
    +'<select class="select" id="setLang" data-act="lang">'+LANGS.map(function(l){return '<option'+(state.prefs.lang===l?' selected':'')+'>'+l+'</option>';}).join('')+'</select>'
    +'<p class="cap">Sermons and broadcasts are auto-translated into your language where a transcript exists.</p></div>'
    +'<div class="glass pad stack gap-16"><span class="eyebrow accent">BibleGPT</span>'
    +prefRow('Show BibleGPT','gpt','The button on your feed and the shortcut in the menu')
    +'<p class="cap">'+ico('sparkle',13)+' On a phone you can also press and hold the button to hide it.</p></div>'
    +'<div class="glass pad stack gap-16"><span class="eyebrow accent">Notifications</span>'
    +prefRow('Church broadcasts','broadcast','Announcements from churches you follow')
    +'<hr class="divider">'+prefRow('Daily digest instead of feed','digest','One summary a day, no drip')
    +'<hr class="divider">'+prefRow('Event reminders','events','1 day and 1 hour before')
    +'<hr class="divider">'+prefRow('Quiet hours','quiet','Nothing between 10pm and 6am')+'</div>'
    +'<div class="glass pad stack gap-16"><span class="eyebrow accent">Privacy</span>'
    +'<div class="field"><label class="label" for="setVis">Who can see my activity</label>'
    +'<select class="select" id="setVis" data-act="visibility">'
    +['Only me','My church','Everyone'].map(function(v){const k=v==='Only me'?'me':v==='My church'?'church':'all';
      return '<option value="'+k+'"'+(state.prefs.visibility===k?' selected':'')+'>'+v+'</option>';}).join('')+'</select></div>'
    +'<p class="cap">'+ico('lock',13)+' No ads. Member data is never sold or shared with third parties.</p></div>'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Your data</span>'
    +'<button class="btn btn-ghost btn-block" data-act="export">'+ico('file',17)+'Export my data</button>'
    +'<button class="btn btn-ghost btn-block" data-act="delete-account" style="color:var(--live-ink)">'+ico('x',17)+'Delete my account</button></div>'
    +'<div class="glass pad stack gap-8"><span class="eyebrow accent">About</span>'
    +'<div class="row gap-10">'+arkGlyph(30)+wordmark(17)+'</div>'
    +'<p class="cap">Prototype build · Data '+(state.ui.dbState==='live'?'syncing live':'local to this device')+'</p></div>'
    +'<div style="height:30px"></div></div>';
}
function viewSaved(){
  const list=savedPosts();
  return topbar('Saved',list.length+' post'+(list.length===1?'':'s')+' kept for later',{back:'me'})
    +'<div class="view stack gap-14">'
    +(list.length?list.map(function(p){return postCard(p);}).join('')
      :empty('star','Nothing saved yet','Tap the star on any post to keep it here — sermons, testimonies, verses.',
        '<button class="btn btn-sm btn-primary" data-go="home">Back to the feed</button>'))
    +'<div style="height:30px"></div></div>';
}
function viewFamily(){
  return topbar('Family','Safe spaces for children and youth',{back:'me'})+'<div class="view">'+journeyFamily()+'<div style="height:30px"></div></div>';
}
/* ---------- church console ---------- */
function myChurch(){const s=state.session;return s&&s.churchId?churchById(s.churchId):null;}
function myPosts(){const s=state.session;return state.data.posts.filter(function(p){return s&&p.churchId===s.churchId;}).sort(function(a,b){return dt(b.createdAt)-dt(a.createdAt);});}
function myEvents(){const s=state.session;return state.data.events.filter(function(e){return s&&e.churchId===s.churchId;}).sort(function(a,b){return dt(a.datetime)-dt(b.datetime);});}
function viewConsole(){
  const c=myChurch(),posts=myPosts(),evs=myEvents();
  const reach=posts.reduce(function(a,p){return a+Object.keys(p.reactions||{}).reduce(function(x,k){return x+(p.reactions[k]||0);},0);},0);
  const cid=state.session&&state.session.churchId,cmPend=cid?pendingCommunityRequests(cid).length:0;
  const myComms=state.data.communities.filter(function(x){return x.churchId===cid;});
  return topbar(esc((c&&c.name)||(state.session&&state.session.church&&state.session.church.name)||'Your church'),'Church console',{
    actions:'<div class="row gap-8">'+(state.session&&state.session.verified?verifiedTag():'')+'</div>',
    extra:'<div class="row gap-10 mt-16 wrap">'
      +'<button class="btn btn-sm btn-ghost" data-go="console-profile">'+ico('edit',16)+'Edit profile</button>'
      +(c?'<button class="btn btn-sm btn-ghost" data-go="church-profile" data-id="'+c.id+'">'+ico('eye',16)+'Public view</button>':'')+'</div>'})
    +'<div class="view-wide stack">'
    +(c&&c.inviteCode?'<div class="invite-card"><div class="stack gap-4" style="min-width:0"><span class="eyebrow accent">Member invite code</span>'
      +'<span class="invite-code">'+esc(c.inviteCode)+'</span><span class="cap">Share it with your members. New believers need it to join '+esc(c.name)+'.</span></div>'
      +'<span class="row gap-8" style="flex:none"><button class="btn btn-sm btn-ghost" data-act="copy-invite" data-v="'+esc(c.inviteCode)+'">'+ico('file',15)+'Copy</button>'
      +'<button class="btn btn-sm btn-primary" data-act="share-invite" data-v="'+esc(c.inviteCode)+'">'+ico('share',15)+'Share</button></span></div>':'')
    +'<div class="row gap-12 wrap">'
    +[['Followers',Number((c&&c.followers)||0).toLocaleString('en-IN'),'accent','console-followers'],
      ['Connections',myConnections(cid).length,'ice','console-connections'],
      ['Reach this week',Number(reach).toLocaleString('en-IN'),'mint',''],
      ['Upcoming events',evs.filter(function(e){return dt(e.datetime)>=new Date();}).length,'accent','']]
      .map(function(s){
        const inner='<div class="v '+s[2]+' num">'+s[1]+'</div><div class="cap mt-4">'+s[0]+(s[3]?' '+ico('chevR',12):'')+'</div>';
        return s[3]?'<button class="stat stat-link" data-go="'+s[3]+'" style="flex:1;min-width:150px;text-align:left">'+inner+'</button>'
                   :'<div class="stat" style="flex:1;min-width:150px">'+inner+'</div>';}).join('')+'</div>'
    +'<div class="sec-title"><span class="eyebrow accent">Needs you</span></div>'
    +'<div class="stack gap-10">'
    +consoleRow('users','Community requests',cmPend?cmPend+' believer'+(cmPend>1?'s':'')+' asking to join your communities':'No one waiting · create and manage communities','console-communities','badge-accent',cmPend)
    +consoleRow('users','Membership requests','4 members waiting for approval','console-members','badge-accent',4)
    +consoleRow('sparkle','Reactions',(function(){const cid=state.session&&state.session.churchId;
        const n=state.data.storyReacts.filter(function(r){return r.churchId===cid;}).length;
        return n?n+' reaction'+(n>1?'s':'')+' · see who responded to what':'See who reacts to your posts, stories and comments';})(),'console-stories','badge-accent',0)
    +'</div>'
    +'<div class="sec-title"><span class="eyebrow accent">Recent posts</span><button class="cap" data-go="console-compose">New post</button></div>'
    +(posts.length?'<div class="stack gap-12">'+posts.slice(0,4).map(function(p){
      const rx=Object.keys(p.reactions||{}).reduce(function(x,k){return x+(p.reactions[k]||0);},0);
      return '<div class="glass pad-sm row between gap-12"><div class="stack gap-3" style="min-width:0">'
        +'<span class="h3" style="font-size:14.5px">'+esc(p.title||p.content.slice(0,52))+'</span>'
        +'<span class="cap">'+esc(p.type)+' · '+ago(p.createdAt)+' · <span class="num">'+rx+'</span> reactions</span></div>'
        +'<button class="chip" data-go="post" data-id="'+p.id+'">View</button></div>';}).join('')+'</div>'
      :empty('edit','Nothing published yet','Your first post goes to every follower\'s feed.','<button class="btn btn-sm btn-primary" data-go="console-compose">Write a post</button>'))
    +'<div class="sec-title"><span class="eyebrow accent">Ministry operations</span></div>'
    +'<div class="stack gap-10">'
    +consoleRow('users','Members & groups','Roles, small groups, transfer letters','console-members','',0)
    +consoleRow('users','Communities',myComms.length+' communit'+(myComms.length===1?'y':'ies')+' · you approve who joins','console-communities','',0)
    +consoleRow('cal','Volunteer rosters','Sunday teams, QR attendance check-in','console-members','',0)
    +'</div><div style="height:30px"></div></div>';
}
/* Who follows this church. The believers are the ones this church actually reaches, so the
   number on the dashboard opens the names behind it. */
function followersOf(cid){
  const out=[];
  /* believers seeded with this church as home, plus anyone signed in on this device who
     follows it — the prototype has no server-side follower table. */
  state.data.people.forEach(function(p){
    if(p.homeChurchId===cid)out.push({key:p.id,name:p.name,city:p.city||'',bio:p.bio||'',member:true});
  });
  const s=state.session;
  if(s&&s.role!=='church'&&(state.local.follows||[]).indexOf(cid)>-1&&!out.some(function(x){return x.key===(s.key||s.id);}))
    out.push({key:s.key||s.id,name:s.name,city:s.city||'',bio:s.bio||'',member:isMemberOf(cid)});
  return out;
}
function viewConsoleFollowers(){
  const cid=state.session&&state.session.churchId, c=myChurch()||{};
  const list=followersOf(cid);
  const total=Number(c.followers||0);
  return topbar('Followers',total.toLocaleString('en-IN')+' believer'+(total===1?'':'s')+' follow '+esc(c.name||'your church'),{back:'console'})
    +'<div class="view stack gap-14">'
    +(list.length?'<div class="glass pad stack gap-12"><span class="eyebrow accent">On this device · '+list.length+'</span>'
      +list.map(function(u){
        return '<div class="row between gap-12"><span class="row gap-10" style="min-width:0">'
          +'<span class="avatar avatar-sm" style="background:'+grad(u.key)+'">'+initials(u.name)+'</span>'
          +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14.5px">'+esc(u.name)+'</span>'
          +'<span class="cap" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(u.city||'')+(u.bio?' · '+esc(u.bio):'')+'</span></span></span>'
          +(u.member?'<span class="badge badge-mint" style="flex:none">'+ico('check',11)+'Member</span>':'<span class="badge badge-ice" style="flex:none">Following</span>')+'</div>';}).join('')
      +'</div>':empty('me','No named followers yet','Share your invite code and believers will appear here as they join.'))
    +'<p class="cap">'+ico('lock',13)+' The full count includes believers on other devices. This prototype lists the ones it can see.</p>'
    +'<div style="height:30px"></div></div>';
}
function viewConsoleConnections(){
  const cid=state.session&&state.session.churchId, c=myChurch()||{};
  const list=myConnections(cid).map(churchById).filter(Boolean);
  const pend=pendingFor(cid);
  return topbar('Connections',list.length+' verified church'+(list.length===1?'':'es'),{back:'console'})
    +'<div class="view stack gap-14">'
    +(pend.length?'<div class="glass pad stack gap-12"><span class="eyebrow accent">Waiting on you · '+pend.length+'</span>'
      +pend.map(function(x){const o=churchById(x.from)||{name:'A church'};
        return '<div class="row between gap-12"><button class="row gap-10" data-go="church-profile" data-id="'+esc(x.from)+'" style="text-align:left;min-width:0">'
          +churchLogo(o,34)+'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14.5px">'+esc(o.name)+'</span>'
          +'<span class="cap">'+esc(o.city||'')+' · '+ago(x.createdAt)+'</span></span></button>'
          +'<span class="row gap-6" style="flex:none"><button class="btn btn-xs btn-primary" data-act="c2c-accept" data-id="'+esc(x.id)+'">Accept</button>'
          +'<button class="icon-btn" data-act="c2c-decline" data-id="'+esc(x.id)+'" aria-label="Decline" style="width:32px;height:32px">'+ico('x',14)+'</button></span></div>';}).join('')
      +'</div>':'')
    +(list.length?'<div class="glass pad stack gap-12"><span class="eyebrow accent">Connected · '+list.length+'</span>'
      +list.map(function(x){
        return '<div class="row between gap-12"><button class="row gap-10" data-go="church-profile" data-id="'+esc(x.id)+'" style="text-align:left;min-width:0">'
          +churchLogo(x,34)+'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14.5px">'+esc(x.name)+'</span>'
          +'<span class="cap">'+esc(x.city||'')+'</span></span></button>'
          +'<button class="chip" data-act="c2c-message" data-id="'+esc(x.id)+'" style="flex:none">'+ico('msg',14)+'Message</button></div>';}).join('')
      +'</div>':empty('church','No connections yet','Find churches in the directory and send a connection request.',
        '<button class="btn btn-sm btn-primary" data-go="console-c2c">Find churches</button>'))
    +(c.connectionsPrivate?'<p class="cap">'+ico('lock',13)+' Your connections are private — believers see the number only.</p>':'')
    +'<div style="height:30px"></div></div>';
}
/* A church edits everything a believer sees of it — its mark, its banner and every line on
   its profile — without leaving the console. */
function viewConsoleProfile(){
  const c=myChurch();
  if(!c)return topbar('Church profile','Verification first',{back:'console'})
    +'<div class="view">'+empty('shield','Not verified yet','Your profile opens for editing once the church is verified.',
      '<button class="btn btn-sm btn-ghost" data-go="pending">See status</button>')+'</div>';
  const e=state.ui.chpErrors||{};
  const field=function(id,label,value,ph,err,hint){
    return '<div class="field'+(err?' has-error':'')+'"><label class="label" for="'+id+'">'+label+'</label>'
      +'<input class="input" id="'+id+'" placeholder="'+esc(ph||'')+'" value="'+esc(value||'')+'">'
      +(err?'<span class="field-error" role="alert">'+ico('x',12)+esc(err)+'</span>':hint?'<span class="field-hint">'+esc(hint)+'</span>':'')+'</div>';
  };
  return topbar('Church profile','What believers see',{back:'console',
      actions:'<button class="btn btn-sm btn-ghost" data-go="church-profile" data-id="'+esc(c.id)+'">'+ico('eye',15)+'Preview</button>'})
    +'<div class="view stack gap-14">'
    /* banner + mark, edited where they appear */
    +'<div class="glass pad stack gap-14"><span class="eyebrow accent">Banner &amp; mark</span>'
    +'<div class="cover chp-cover" style="height:150px">'
      +(c.banner?'<img src="'+esc(c.banner)+'" alt="" style="width:100%;height:100%;object-fit:cover;display:block">'
        :photoFor(c.id)?'<img src="'+esc(photoFor(c.id))+'" alt="" style="width:100%;height:100%;object-fit:cover;display:block">':coverArt(c.id))
      +'<button class="chp-cover-edit" data-act="pick-banner">'+ico('upload',15)+'Change banner</button></div>'
    +'<div class="row between gap-12" style="margin-top:-34px;position:relative;align-items:flex-end">'
      +'<button class="me-avatar" data-act="pick-logo" aria-label="Change the church mark">'
      +churchLogo(c,72,'border:3px solid var(--bg-0)')+'<span class="ob-avatar-edit">'+ico('edit',13)+'</span></button>'
      +'<span class="row gap-8" style="flex:none">'
      +(c.logo?'<button class="chip" data-act="clear-logo">'+ico('x',13)+'Use the emblem</button>':'')
      +(c.banner?'<button class="chip" data-act="clear-banner">'+ico('x',13)+'Clear banner</button>':'')+'</span></div>'
    +'<p class="cap">Square images read best as a mark. With none, your church keeps its emblem.</p></div>'
    /* the written profile */
    +'<div class="glass pad stack gap-16"><span class="eyebrow accent">Identity</span>'
    +field('chpName','Church name',c.name,'Grace Cathedral',e.name)
    +'<div class="field'+(e.handle?' has-error':'')+'"><label class="label" for="chpHandle">Username</label>'
      +'<div class="input-group"><span class="ig-pre">@</span><input class="input" id="chpHandle" autocapitalize="none" spellcheck="false" maxlength="24" value="'+esc(c.handle||'')+'"></div>'
      +(e.handle?'<span class="field-error" role="alert">'+ico('x',12)+esc(e.handle)+'</span>':'<span class="field-hint">No two churches share one.</span>')+'</div>'
    +field('chpTagline','Tagline',c.tagline,'A family finding grace in the heart of the city')
    +'<div class="field"><label class="label" for="chpAbout">About</label>'
      +'<textarea class="textarea" id="chpAbout" placeholder="Your story, in a paragraph or two…" style="min-height:120px">'+esc(c.about||'')+'</textarea></div></div>'
    +'<div class="glass pad stack gap-16"><span class="eyebrow accent">Where &amp; when</span>'
    +field('chpCity','City',c.city,'Chennai',e.city)
    +field('chpAddress','Address',c.address,'12 Anna Salai, Teynampet')
    +field('chpPastor','Pastor / leader',c.pastorName,'Rev. Daniel Selvam')
    +field('chpTimes','Service times',(c.serviceTimes||[]).join(' · '),'Sun 7:00am Tamil · Sun 9:30am English',null,'Separate each with ·')
    +field('chpLangs','Languages',(c.languages||[]).join(', '),'Tamil, English',null,'Separate with commas')
    +field('chpMinistries','Ministries',(c.ministries||[]).join(', '),'Choir, Youth, Outreach',null,'Separate with commas')+'</div>'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Privacy</span>'
    +'<button class="row between gap-12" data-act="ch-connections-private" style="text-align:left;width:100%">'
      +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:15px">Hide who we are connected with</span>'
      +'<span class="cap">The number stays public, the churches do not</span></span>'
      +'<span class="switch'+(c.connectionsPrivate?' on':'')+'" role="switch" aria-checked="'+!!c.connectionsPrivate+'"></span></button></div>'
    +'<button class="btn btn-primary btn-block" data-act="save-church-profile">'+ico('check',18)+'Save profile</button>'
    +'<div style="height:30px"></div></div>';
}
function consoleRow(icon,title,sub,route,badge,count){
  return '<button class="glass press pad-sm row between gap-12" data-go="'+route+'" style="text-align:left">'
    +'<span class="row gap-12" style="min-width:0"><span class="icon-btn" style="flex:none">'+ico(icon,18)+'</span>'
    +'<span class="stack gap-2" style="min-width:0"><span class="h3">'+esc(title)+'</span><span class="cap">'+esc(sub)+'</span></span></span>'
    +(count?'<span class="badge '+(badge||'badge-accent')+' num">'+count+'</span>':ico('chevR',16))+'</button>';
}
/* What a post carries besides words. Stories take pictures and video but not audio —
   a story is watched, not listened to. */
function mediaField(kinds){
  const k=state.ui.composeKind||'none';
  const kind=kinds.indexOf(k)>-1?k:'none';
  const photos=state.ui.composePhotos||[],video=state.ui.composeVideo,audio=state.ui.composeAudio;
  const labels={none:['Text only','edit'],photos:['Photos','grid'],video:['Video','play'],audio:['Audio','music']};
  let body='';
  if(kind==='photos'){
    body=(photos.length?'<div class="cm-grid">'+photos.map(function(src,i){
        return '<div class="cm-thumb'+(i===0?' first':'')+'"><img src="'+esc(src)+'" alt="">'
          +(i===0?'<span class="cm-first">First</span>':'')
          +'<button class="cm-drop" data-act="drop-photo" data-i="'+i+'" aria-label="Remove picture '+(i+1)+'">'+ico('x',13)+'</button></div>';}).join('')
        +(photos.length<MAX_PHOTOS?'<button class="cm-add" data-act="pick-photos" aria-label="Add a picture">'+ico('plus',22)+'</button>':'')+'</div>'
      :'<button class="photo-slot" data-act="pick-photos"><span class="slot-hint">'+ico('upload',24,'accent')
        +'<span class="h3">Add up to five pictures</span><span class="cap">Any size · the first one leads the post</span></span></button>')
      +'<p class="cap mt-8">'+ico('sparkle',12)+' The first picture is the one people see biggest.</p>';
  }else if(kind==='video'){
    body=(video?'<div class="post-video'+(video.portrait?' portrait':'')+'"><video src="'+esc(video.src)+'" controls playsinline preload="metadata"></video></div>'
        +'<div class="row between gap-10 mt-8"><span class="cap" style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'
          +esc(video.name||'Video')+(video.w?' · '+video.w+'×'+video.h:'')+(video.session?' · this session only':'')+'</span>'
        +'<span class="row gap-6" style="flex:none"><button class="chip" data-act="pick-video">Replace</button>'
        +'<button class="chip" data-act="clear-video">'+ico('x',13)+'Remove</button></span></div>'
      :'<button class="photo-slot" data-act="pick-video"><span class="slot-hint">'+ico('play',24,'accent')
        +'<span class="h3">Add a video</span><span class="cap">Any resolution · shown up to 1080p, never cropped</span></span></button>');
  }else if(kind==='audio'){
    body=(audio?'<div class="post-audio"><span class="art-audio-ico">'+ico('music',20)+'</span>'
        +'<span class="stack gap-4" style="min-width:0"><span class="h3" style="font-size:14.5px">'+esc(audio.name)+'</span>'
        +'<audio src="'+esc(audio.src)+'" controls style="width:100%"></audio></span></div>'
        +'<div class="row gap-6 mt-8"><button class="chip" data-act="pick-audio">Replace</button>'
        +'<button class="chip" data-act="clear-audio">'+ico('x',13)+'Remove</button></div>'
      :'<button class="photo-slot" data-act="pick-audio"><span class="slot-hint">'+ico('music',24,'accent')
        +'<span class="h3">Add audio</span><span class="cap">A recording, a song, a short word</span></span></button>');
  }else{
    body='<p class="cap">'+ico('sparkle',12)+' With nothing attached, the post carries a scene illustration from the design system.</p>';
  }
  return '<div class="field"><label class="label">Attachment</label>'
    +'<div class="scroll-x" style="gap:8px;margin-bottom:12px">'+kinds.map(function(x){
        return '<button class="chip'+(kind===x?' on':'')+'" data-act="cm-kind" data-v="'+x+'">'+ico(labels[x][1],14)+labels[x][0]+'</button>';}).join('')+'</div>'
    +body+'</div>';
}
function photoField(){
  const p=state.ui.composePhoto;
  return '<div class="field"><label class="label">Photograph <span style="text-transform:none;letter-spacing:0;font-weight:500">(optional)</span></label>'
    +'<input type="file" id="photoInput" accept="image/*" hidden>'
    +(p?'<div class="photo-slot" style="border-style:solid;cursor:default"><img src="'+esc(p)+'" alt="The photograph you attached"></div>'
        +'<div class="row between gap-10 mt-8"><span class="cap" style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(state.ui.composePhotoName||'Photo attached')+'</span>'
        +'<span class="row gap-6" style="flex:none"><button class="chip" data-act="pick-photo">Replace</button>'
        +'<button class="chip" data-act="clear-photo">'+ico('x',13)+'Remove</button></span></div>'
      :'<button class="photo-slot" data-act="pick-photo"><span class="slot-hint">'+ico('upload',24,'accent')
        +'<span class="h3">Add a photo</span><span class="cap">From this device · resized before it is saved</span></span></button>')
    +'<p class="cap mt-8">'+ico('sparkle',12)+' With no photo, the post carries a scene illustration from the design system.</p></div>';
}
/* Read an image file, scale its longest edge down to max, and hand back a JPEG data URL.
   Everything the app stores goes through here, so nothing oversized reaches localStorage. */
function readImage(file,max,quality,cb){
  if(!file||!/^image\//.test(file.type||'')){toast('That file is not an image');return;}
  const fr=new FileReader();
  fr.onerror=function(){toast('Could not read that file');};
  fr.onload=function(){
    const img=new Image();
    img.onerror=function(){toast('Could not read that image');};
    img.onload=function(){
      const sc=Math.min(1,max/Math.max(img.width,img.height));
      const w=Math.max(1,Math.round(img.width*sc)),h=Math.max(1,Math.round(img.height*sc));
      const cv=document.createElement('canvas');cv.width=w;cv.height=h;
      cv.getContext('2d').drawImage(img,0,0,w,h);
      let out='';
      try{
        out=cv.toDataURL('image/jpeg',quality);
        if(out.length>620000)out=cv.toDataURL('image/jpeg',0.55);
        if(out.length>620000)out=cv.toDataURL('image/jpeg',0.4);
      }catch(err){toast('Could not process that image');return;}
      cb(out,w,h);
    };
    img.src=fr.result;
  };
  fr.readAsDataURL(file);
}
const MAX_PHOTOS=5;
/* Video is kept whole — no re-encoding in the browser — so only a small clip can be stored
   for good. Anything larger plays from a blob for this session and says so on the card. */
const VIDEO_KEEP=2.2*1024*1024;
function readVideo(file,cb){
  if(!file||!/^video\//.test(file.type||'')){toast('That file is not a video');return;}
  const url=URL.createObjectURL(file);
  const probe=document.createElement('video');
  probe.preload='metadata';
  probe.onloadedmetadata=function(){
    const w=probe.videoWidth||0,h=probe.videoHeight||0,portrait=h>w;
    const finish=function(src,session){cb({src:src,w:w,h:h,portrait:portrait,name:file.name,session:!!session});};
    if(file.size<=VIDEO_KEEP){
      const fr=new FileReader();
      fr.onerror=function(){finish(url,true);};
      fr.onload=function(){finish(String(fr.result),false);};
      fr.readAsDataURL(file);
    }else finish(url,true);
  };
  probe.onerror=function(){toast('Could not read that video');};
  probe.src=url;
}
function pickFile(accept,cb){
  const inp=document.createElement('input');
  inp.type='file';inp.accept=accept;
  inp.onchange=function(){if(inp.files&&inp.files[0])cb(inp.files[0]);};
  inp.click();
}
function readPhoto(file){
  if(!file||!/^image\//.test(file.type||'')){toast('That file is not an image');return;}
  const fr=new FileReader();
  fr.onerror=function(){toast('Could not read that file');};
  fr.onload=function(){
    const img=new Image();
    img.onerror=function(){toast('Could not read that image');};
    img.onload=function(){
      const max=1000,sc=Math.min(1,max/Math.max(img.width,img.height));
      const w=Math.max(1,Math.round(img.width*sc)),h=Math.max(1,Math.round(img.height*sc));
      const c=document.createElement('canvas');c.width=w;c.height=h;
      c.getContext('2d').drawImage(img,0,0,w,h);
      let out='';
      try{out=c.toDataURL('image/jpeg',0.72);if(out.length>420000)out=c.toDataURL('image/jpeg',0.5);}
      catch(e){toast('Could not process that image');return;}
      state.ui.composePhoto=out;state.ui.composePhotoName=file.name;
      render();toast('Photo attached');
    };
    img.src=fr.result;
  };
  fr.readAsDataURL(file);
}
const SCENE_FOR_TYPE={sermon:'arches',event:'stage',story:'rays',occasion:'festival',text:'hills',prayer:'canopy'};
function viewConsoleCompose(){
  const t=state.ui.composeType||'post';
  const types=[['post','Post','edit'],['story','Story','sparkle'],['sermon','Sermon','mic'],['event','Event','cal'],['broadcast','Broadcast','radio'],['occasion','Occasion','star'],['poll','Poll','list']];
  let form='';
  if(t==='story'){
    form='<div class="row gap-10 cap" style="padding:12px 14px;border-radius:var(--r-md);background:var(--brand-dim);border:1px solid rgba(201,151,74,.26);color:var(--brand)">'
      +ico('clock',15)+'Stories sit at the top of every follower\'s home for 24 hours, then fade.</div>'
      +'<div class="field"><label class="label" for="fBody">What is happening right now?</label><textarea class="textarea" id="fBody" placeholder="Choir warm-up done. Doors open at 6:30…" style="min-height:110px">'+esc(draftVal('fBody'))+'</textarea></div>'
      +'<div class="field"><label class="label" for="fVerse">Attach a verse (optional)</label><select class="select" id="fVerse"><option value="">No verse</option>'
      +VERSES.map(function(v){return '<option value="'+esc(v.r)+'"'+(draftVal('fVerse')===v.r?' selected':'')+'>'+esc(v.r)+'</option>';}).join('')+'</select></div>';
  }else if(t==='event'){
    form='<div class="field"><label class="label" for="fTitle">Event title</label><input class="input" id="fTitle" placeholder="Night of worship" value="'+esc(draftVal('fTitle'))+'"></div>'
      +'<div class="row gap-10"><div class="field grow"><label class="label" for="fDate">Date</label><input class="input" id="fDate" type="date" value="'+esc(draftVal('fDate'))+'"></div>'
      +'<div class="field grow"><label class="label" for="fTime">Time</label><input class="input" id="fTime" type="time" value="'+esc(draftVal('fTime')||'18:00')+'"></div></div>'
      +'<div class="field"><label class="label" for="fLoc">Location</label><input class="input" id="fLoc" placeholder="Main sanctuary, or a stream link" value="'+esc(draftVal('fLoc'))+'"></div>'
      +'<div class="field"><label class="label" for="fCap">Capacity</label><input class="input" id="fCap" type="number" inputmode="numeric" placeholder="250" value="'+esc(draftVal('fCap'))+'"></div>'
      +'<div class="field"><label class="label" for="fBody">Description</label><textarea class="textarea" id="fBody" placeholder="What should people expect?">'+esc(draftVal('fBody'))+'</textarea></div>'
      +'<label class="row between gap-12" style="padding:14px;border-radius:var(--r-md);background:var(--surface);border:1px solid var(--border)">'
      +'<span class="stack gap-2"><span class="h3" style="font-size:15px">Stream this live</span><span class="cap">Adds a live player and chat overlay</span></span>'
      +'<input type="checkbox" id="fLive" style="width:20px;height:20px;accent-color:var(--brand)"></label>';
  }else if(t==='broadcast'){
    form='<div class="field"><label class="label">Priority</label><div class="row gap-8">'
      +['Normal','Important','Urgent'].map(function(p,i){return '<button class="chip'+(( state.ui.bPriority||'Normal')===p?' on':'')+'" data-act="b-priority" data-v="'+p+'">'+p+'</button>';}).join('')+'</div></div>'
      +'<div class="field"><label class="label">Audience</label><div class="row gap-8 wrap">'
      +['Everyone','Youth','Worship team','Small groups','Members only'].map(function(a){return '<button class="chip'+((state.ui.bAudience||'Everyone')===a?' on':'')+'" data-act="b-audience" data-v="'+esc(a)+'">'+esc(a)+'</button>';}).join('')+'</div></div>'
      +'<div class="field"><label class="label" for="fBody">Announcement</label><textarea class="textarea" id="fBody" placeholder="Read-only announcement to your people…">'+esc(draftVal('fBody'))+'</textarea></div>'
      +'<div class="row gap-10 cap" style="padding:12px 14px;border-radius:var(--r-md);background:var(--brand-dim);border:1px solid rgba(201,151,74,.26);color:var(--brand)">'
      +ico('clock',15)+'Quiet hours respected — urgent bypasses them.</div>';
  }else if(t==='sermon'){
    form='<div class="field"><label class="label" for="fTitle">Sermon title</label><input class="input" id="fTitle" placeholder="The God who stays" value="'+esc(draftVal('fTitle'))+'"></div>'
      +'<div class="field"><label class="label" for="fSpeaker">Speaker</label><input class="input" id="fSpeaker" placeholder="Pr. Daniel Selvam" value="'+esc(draftVal('fSpeaker'))+'"></div>'
      +'<button class="glass press pad-sm row between gap-12" data-act="mock-upload-audio" style="text-align:left;border-style:dashed">'
      +'<span class="row gap-12">'+ico('upload',20,'accent')+'<span class="stack gap-2"><span class="h3">Upload audio or video</span>'
      +'<span class="cap">'+(state.ui.audioUp?'sunday-message.mp3 · transcript ready':'Auto transcript, summary and translation follow')+'</span></span></span>'
      +(state.ui.audioUp?'<span class="badge badge-mint">'+ico('check',12)+'Ready</span>':'<span class="icon-btn">'+ico('plus',18)+'</span>')+'</button>'
      +'<div class="field"><label class="label" for="fBody">Notes for your people</label><textarea class="textarea" id="fBody" placeholder="Key points, passage, application…">'+esc(draftVal('fBody'))+'</textarea></div>';
  }else if(t==='poll'){
    form='<div class="field"><label class="label" for="fBody">Question</label><input class="input" id="fBody" placeholder="Which night suits the prayer meeting?" value="'+esc(draftVal('fBody'))+'"></div>'
      +'<div class="field"><label class="label" for="fOpt">Options (comma separated)</label><input class="input" id="fOpt" placeholder="Tuesday, Thursday, Saturday" value="'+esc(draftVal('fOpt'))+'"></div>';
  }else if(t==='occasion'){
    form='<div class="field"><label class="label">Occasion</label><div class="row gap-8 wrap">'
      +['Baptism','Wedding','Dedication','Anniversary','Ordination'].map(function(o){return '<button class="chip'+((state.ui.occasion||'Baptism')===o?' on':'')+'" data-act="occasion" data-v="'+o+'">'+o+'</button>';}).join('')+'</div></div>'
      +'<div class="field"><label class="label" for="fBody">Share the joy</label><textarea class="textarea" id="fBody" placeholder="Twelve believers were baptised this morning…">'+esc(draftVal('fBody'))+'</textarea></div>';
  }else{
    form='<div class="field"><label class="label" for="fBody">What do you want to say?</label><textarea class="textarea" id="fBody" placeholder="Speak to your church…" style="min-height:150px">'+esc(draftVal('fBody'))+'</textarea></div>';
  }
  if(t==='story')form+=mediaField(['photos','video','none']);
  else if(['post','occasion'].indexOf(t)>-1)form+=mediaField(['none','photos','video','audio']);
  else if(['sermon','event'].indexOf(t)>-1)form+=mediaField(['none','photos','video']);
  return topbar('Publish','Composer',{back:'console',
    extra:'<div class="scroll-x mt-16">'+types.map(function(x){
      return '<button class="chip'+(t===x[0]?' on':'')+'" data-act="compose" data-v="'+x[0]+'">'+ico(x[2],14)+x[1]+'</button>';}).join('')+'</div>'})
    +'<div class="view stack gap-14">'
    +'<div class="glass pad stack gap-16">'+form+'</div>'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Schedule</span>'
    +'<div class="row gap-8"><button class="chip on" data-act="noop">Publish now</button><button class="chip" data-act="soon" data-v="Scheduling">Schedule</button></div></div>'
    +'<button class="btn btn-primary btn-block" data-act="publish" data-v="'+t+'">'+ico('send',18)+'Publish</button>'
    +'<div style="height:30px"></div></div>';
}
function viewConsoleEvents(){
  const evs=myEvents();
  return topbar('Events','Gatherings and streams',{back:'console',
    actions:'<button class="icon-btn active" data-act="compose" data-v="event" aria-label="New event">'+ico('plus',18)+'</button>'})
    +'<div class="view stack gap-12">'
    +(evs.length?evs.map(function(e){
      return '<article class="glass pad stack gap-12"><div class="row between gap-12">'
        +'<div class="stack gap-3"><span class="row gap-8">'+(e.isLive?'<span class="badge badge-live"><i class="dot-live"></i>Live</span>':'<span class="badge badge-accent">'+fmtDate(e.datetime)+'</span>')+'</span>'
        +'<span class="h2" style="font-size:19px">'+esc(e.title)+'</span>'
        +'<span class="cap">'+fmtTime(e.datetime)+' · '+esc(e.location||'Online')+'</span></div>'
        +'<div class="stack gap-4" style="text-align:right"><span class="h3 accent num">'+(e.rsvpCount||0)+'</span><span class="cap">RSVPs</span></div></div>'
        +'<div class="row gap-8 wrap"><button class="chip" data-act="toggle-live" data-id="'+e.id+'">'+ico('radio',14)+(e.isLive?'End live':'Go live')+'</button>'
        +'<button class="chip" data-go="event" data-id="'+e.id+'">'+ico('eye',14)+'Preview</button>'
        +'<button class="chip" data-act="soon" data-v="Reminders">'+ico('bell',14)+'Reminders</button></div></article>';}).join('')
      :empty('cal','No events yet','Create your first gathering — RSVPs, reminders and replay are automatic.',
        '<button class="btn btn-sm btn-primary" data-act="compose" data-v="event">Create an event</button>'))
    +'<div style="height:30px"></div></div>';
}
function viewConsoleMembers(){
  const rows=[['Anitha Raj','Worship team','Leader'],['Joseph Kumar','Ushers','Member'],['Priya S.','Sunday school','Leader'],['David M.','Youth','Member'],['Sarah T.','Prayer team','Member']];
  return topbar('Members','People and ministries',{back:'console'})
    +'<div class="view stack gap-14">'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Join requests · 4</span>'
    +['Grace Mathew','Samuel P.','Ruth Anand','Vinod K.'].map(function(n){
      return '<div class="row between gap-12"><span class="row gap-10"><span class="avatar avatar-sm" style="background:'+grad(n)+'">'+initials(n)+'</span>'
        +'<span class="stack gap-2"><span class="h3" style="font-size:14.5px">'+esc(n)+'</span><span class="cap">Requested to join</span></span></span>'
        +'<span class="row gap-6"><button class="chip" data-act="approve-member" data-v="'+esc(n)+'">'+ico('check',14)+'Approve</button></span></div>';}).join('')+'</div>'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Members</span>'
    +rows.map(function(r){return '<div class="row between gap-12"><span class="row gap-10">'
      +'<span class="avatar avatar-sm" style="background:'+grad(r[0])+'">'+initials(r[0])+'</span>'
      +'<span class="stack gap-2"><span class="h3" style="font-size:14.5px">'+esc(r[0])+'</span><span class="cap">'+esc(r[1])+'</span></span></span>'
      +'<span class="badge '+(r[2]==='Leader'?'badge-accent':'badge-ice')+'">'+r[2]+'</span></div>';}).join('')+'</div>'
    +'<div class="glass pad stack gap-12"><span class="eyebrow accent">Ministry operations</span>'
    +'<button class="btn btn-ghost btn-block" data-act="soon" data-v="Volunteer rosters">'+ico('cal',17)+'Volunteer rosters</button>'
    +'<button class="btn btn-ghost btn-block" data-act="soon" data-v="QR attendance">'+ico('grid',17)+'QR attendance check-in</button>'
    +'<button class="btn btn-ghost btn-block" data-act="soon" data-v="Transfer letters">'+ico('file',17)+'Transfer letters</button></div>'
    +'<div style="height:30px"></div></div>';
}
function viewConsoleC2C(){
  const me=state.session&&state.session.churchId;
  if(!me)return topbar('Church to church','Verified churches only',{back:'console'})+'<div class="view">'+empty('shield','Verification first','Church-to-church messaging opens once your church is verified.','<button class="btn btn-sm btn-ghost" data-go="pending">See status</button>')+'</div>';
  const tab=state.ui.c2cTab||'Inbox';
  const threads=threadsFor(me),incoming=pendingFor(me),outgoing=pendingFrom(me);
  const conns=myConnections(me).map(churchById).filter(Boolean);
  const seen=state.local.threadSeen||{};
  const discover=state.data.churches.filter(function(c){return c.id!==me&&!connectionBetween(me,c.id);});
  let body='';
  if(tab==='Inbox'){
    body=(threads.length?'<div class="stack gap-10 stagger">'+threads.map(function(t){
      const other=(t.churchIds||[]).filter(function(x){return x!==me;})[0],c=churchById(other),m=lastMsg(t);
      const unread=m.from&&m.from!==me&&(!seen[t.id]||dt(m.at)>dt(seen[t.id]));
      return '<button class="glass press pad-sm row between gap-12" data-go="console-thread" data-id="'+t.id+'" style="text-align:left'+(unread?';border-color:rgba(201,151,74,.32)':'')+'">'
        +'<span class="row gap-12" style="min-width:0">'+churchLogo({id:other,name:(c&&c.name)||(t.names||{})[other]||'?'},44)+''
        +'<span class="stack gap-2" style="min-width:0"><span class="row gap-6"><span class="h3" style="font-size:15px">'+esc((c&&c.name)||(t.names||{})[other]||'Church')+'</span>'+ico('shield',13,'accent')+'</span>'
        +'<span class="cap" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'+(unread?'color:var(--text-1);font-weight:600':'')+'">'+(m.from===me?'You: ':'')+esc(m.text)+'</span>'
        +'<span class="cap" style="font-size:11px">'+esc(t.topic||'')+(t.topic?' · ':'')+ago(m.at)+'</span></span></span>'
        +(unread?'<span style="width:9px;height:9px;border-radius:50%;background:var(--brand);flex:none;box-shadow:0 0 10px rgba(201,151,74,.6)"></span>':ico('chevR',16))+'</button>';}).join('')+'</div>'
      :empty('msg','No conversations yet','Connect with a church, then open a conversation from its profile or the Connections tab.','<button class="btn btn-sm btn-primary" data-act="c2c-tab" data-v="Discover">Find churches</button>'));
  }else if(tab==='Connections'){
    body=(incoming.length?'<div class="glass pad stack gap-12"><span class="eyebrow accent">Requests · '+incoming.length+'</span>'
      +incoming.map(function(x){const c=churchById(x.from)||{name:'A church'};
        return '<div class="row between gap-12"><button class="row gap-10" data-go="church-profile" data-id="'+x.from+'" style="text-align:left;min-width:0">'
          +''+churchLogo(c,34)+''
          +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14.5px">'+esc(c.name)+'</span><span class="cap">'+esc(c.city||'')+' · '+ago(x.createdAt)+'</span></span></button>'
          +'<span class="row gap-6" style="flex:none"><button class="btn btn-xs btn-primary" data-act="c2c-accept" data-id="'+x.id+'">'+ico('check',13)+'Accept</button>'
          +'<button class="icon-btn" data-act="c2c-decline" data-id="'+x.id+'" aria-label="Decline" style="width:32px;height:32px">'+ico('x',14)+'</button></span></div>';}).join('')+'</div>':'')
      +'<div class="glass pad stack gap-12 mt-14"><span class="eyebrow accent">Connected · '+conns.length+'</span>'
      +(conns.length?conns.map(function(c){return '<div class="row between gap-12"><button class="row gap-10" data-go="church-profile" data-id="'+c.id+'" style="text-align:left;min-width:0">'
        +''+churchLogo(c,34)+''
        +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14.5px">'+esc(c.name)+'</span><span class="cap">'+esc(c.city||'')+' · '+esc((c.languages||[]).join(', '))+'</span></span></button>'
        +'<button class="chip" data-act="c2c-message" data-id="'+c.id+'" style="flex:none">'+ico('msg',14)+'Message</button></div>';}).join('')
        :'<p class="cap">No connections yet. Find churches in the Discover tab.</p>')+'</div>'
      +(outgoing.length?'<div class="glass pad stack gap-12 mt-14"><span class="eyebrow accent">Sent · waiting</span>'
        +outgoing.map(function(x){const c=churchById(x.to)||{name:'A church'};
          return '<div class="row between gap-12"><span class="row gap-10">'+churchLogo(c,34)+''
            +'<span class="stack gap-2"><span class="h3" style="font-size:14.5px">'+esc(c.name)+'</span><span class="cap">Requested '+ago(x.createdAt)+'</span></span></span>'
            +'<button class="chip" data-act="c2c-cancel" data-id="'+x.id+'">Withdraw</button></div>';}).join('')+'</div>':'');
  }else{
    body='<div class="row gap-10 mb-12" style="margin-bottom:12px"><button class="btn btn-ghost btn-sm grow" data-go="churches">'+ico('search',15)+'Search the full directory</button></div>'
      +(discover.length?'<div class="stack gap-12 stagger">'+discover.map(function(c){return churchCardC2C(c,liveEvents().some(function(e){return e.churchId===c.id;}));}).join('')+'</div>'
        :'<p class="cap">You are connected with every verified church on the ark.</p>');
  }
  return topbar('Church to church','Verified churches only',{back:'console',
    extra:'<div class="tabs mt-16">'+['Inbox','Connections','Discover'].map(function(t){
      const n=t==='Inbox'?unreadThreads(me):t==='Connections'?incoming.length:0;
      return '<button class="tab'+(tab===t?' on':'')+'" data-act="c2c-tab" data-v="'+t+'">'+t+(n?' <span class="num" style="color:var(--brand)">'+n+'</span>':'')+'</button>';}).join('')+'</div>'})
    +'<div class="view stack">'
    +'<div class="row gap-10 cap" style="padding:12px 14px;border-radius:var(--r-md);background:rgba(232,200,142,.08);border:1px solid rgba(232,200,142,.24);margin-bottom:14px">'
    +ico('shield',15,'ice')+'<span>Messages here travel only between verified churches. Believers never see them.</span></div>'
    +body+'<div style="height:30px"></div></div>';
}
function viewConsoleThread(){
  const me=state.session&&state.session.churchId;
  const t=state.data.threads.find(function(x){return x.id===state.params.id;});
  if(!t||!me)return '<div class="view screen-pad">'+empty('msg','Conversation not found','It may have been removed.','<button class="btn btn-sm btn-ghost" data-go="console-c2c">Inbox</button>')+'</div>';
  const other=(t.churchIds||[]).filter(function(x){return x!==me;})[0],c=churchById(other)||{name:(t.names||{})[other]||'Church'};
  const mineName=(churchById(me)||{}).name||(state.session.church&&state.session.church.name)||'Your church';
  const msgs=(t.messages||[]).slice().sort(function(a,b){return dt(a.at)-dt(b.at);});
  const editing=state.ui.editMsg&&state.ui.editMsg.threadId===t.id?state.ui.editMsg.id:null;
  const draftPhoto=state.ui.msgPhoto||null;
  return '<div class="view" style="padding-top:14px;display:flex;flex-direction:column;min-height:calc(100dvh - 40px)">'
    +'<div class="row between gap-12 mt-8" style="margin-bottom:14px">'
    +'<button class="row gap-6 cap" data-go="console-c2c" style="color:var(--text-3)">'+ico('arrowL',16)+'Inbox</button></div>'
    /* the whole header is the way to their profile, as it is in any messenger */
    +'<button class="glass press pad-sm row between gap-12" data-go="church-profile" data-id="'+esc(other)+'" style="margin-bottom:14px;text-align:left">'
    +'<span class="row gap-12" style="min-width:0">'+churchLogo(c,44)
    +'<span class="stack gap-2" style="min-width:0"><span class="row gap-6"><span class="h3">'+esc(c.name)+'</span>'+ico('shield',14,'accent')+'</span>'
    +'<span class="cap" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(c.city||'')+(c.pastorName?' · '+esc(c.pastorName):'')+(t.topic?' · '+esc(t.topic):'')+'</span></span></span>'
    +ico('chevR',16)+'</button>'
    +'<div class="stack gap-10" style="flex:1" id="threadBody">'
    +(msgs.length?msgs.map(function(m){
      const out=m.from===me;
      if(m.deleted)return '<div class="thread-msg '+(out?'out':'in')+' gone"><span class="who">'+esc(out?mineName:c.name)+'</span>'
        +ico('x',13)+' This message was deleted<span class="when">'+fmtTime(m.at)+'</span></div>';
      return '<div class="thread-msg '+(out?'out':'in')+(editing===m.id?' editing':'')+'">'
        +'<span class="row between gap-8"><span class="who">'+esc(out?mineName:c.name)+'</span>'
        +(out?'<span class="msg-tools"><button data-act="msg-edit" data-t="'+esc(t.id)+'" data-id="'+esc(m.id||'')+'" aria-label="Edit message">'+ico('edit',13)+'</button>'
             +'<button data-act="msg-delete" data-t="'+esc(t.id)+'" data-id="'+esc(m.id||'')+'" aria-label="Delete message">'+ico('x',13)+'</button></span>':'')
        +'</span>'
        +(m.photo?'<button class="msg-photo" data-act="open-msg-photo" data-t="'+esc(t.id)+'" data-id="'+esc(m.id||'')+'"><img src="'+esc(m.photo)+'" alt="Attachment"></button>':'')
        +(m.text?'<span class="msg-text">'+esc(m.text).replace(/\n/g,'<br>')+'</span>':'')
        +'<span class="when">'+fmtDate(m.at)+' · '+fmtTime(m.at)+(m.editedAt?' · edited':'')+'</span></div>';}).join('')
      :'<p class="cap" style="text-align:center;padding:20px">Say hello — this is the start of your conversation with '+esc(c.name)+'.</p>')+'</div>'
    +(editing?'<div class="row between gap-10 cap msg-editing"><span class="row gap-6">'+ico('edit',13)+'Editing a message</span>'
        +'<button class="chip" data-act="msg-edit-cancel">Cancel</button></div>':'')
    +(draftPhoto?'<div class="msg-draft"><img src="'+esc(draftPhoto)+'" alt="">'
        +'<button class="cm-drop" data-act="msg-drop-photo" aria-label="Remove attachment">'+ico('x',13)+'</button></div>':'')
    +'<div class="glass row gap-8 mt-16" style="padding:8px 8px 8px 12px;border-radius:26px;position:sticky;bottom:calc(var(--nav-h) + 14px);z-index:10;align-items:flex-end">'
    +'<button class="icon-btn" data-act="msg-attach" aria-label="Attach a picture" style="width:38px;height:38px;flex:none">'+ico('plus',18)+'</button>'
    +'<textarea class="grow" id="threadBox" placeholder="'+(editing?'Edit your message…':'Write to '+esc(c.name)+'…')+'" rows="1" style="background:none;border:0;outline:none;min-height:42px;max-height:120px;resize:none;padding:10px 0;min-width:0;line-height:1.4">'+esc(state.ui.msgDraft||'')+'</textarea>'
    +'<button class="btn btn-primary" data-act="'+(editing?'msg-edit-save':'c2c-send')+'" data-id="'+t.id+'" style="height:42px;width:42px;padding:0;border-radius:50%;flex:none">'+ico(editing?'check':'send',17)+'</button></div>'
    +'<div style="height:24px"></div></div>';
}
/* What a story did. Per story: how many of each reaction, and the believers behind them —
   the church side of the taps that happen in the story overlay. */
function myStories(){
  const cid=state.session&&state.session.churchId;
  return state.data.posts.filter(function(p){return p.type==='story'&&p.churchId===cid;})
    .sort(function(a,b){return dt(b.createdAt)-dt(a.createdAt);});
}
/* A story usually has no title, so its opening words stand in — cut on a word, not mid-syllable. */
function storyLabel(p){
  if(p.title)return p.title;
  const t=String(p.content||'').trim();
  if(t.length<=52)return t||'Story';
  const cut=t.slice(0,52);
  return cut.slice(0,Math.max(cut.lastIndexOf(' '),30)).replace(/[,;:.]$/,'')+'…';
}
function reactRows(kind){
  const cid=state.session&&state.session.churchId;
  return state.data.storyReacts.filter(function(r){
    return r.churchId===cid&&((r.kind||'story')===kind);
  }).sort(function(a,b){return dt(b.at)-dt(a.at);});
}
function reactorLine(r){
  const meta=REACTIONS.filter(function(x){return x.k===r.reaction;})[0]||{e:'',l:r.reaction};
  return '<div class="row between gap-12"><span class="row gap-10" style="min-width:0">'
    +'<span class="avatar avatar-sm" style="background:'+grad(r.userKey)+'">'+initials(r.userName)+'</span>'
    +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14px">'+esc(r.userName)+'</span>'
    +'<span class="cap">'+(r.userHandle?'@'+esc(r.userHandle)+' · ':'')+ago(r.at)+'</span></span></span>'
    +'<span class="row gap-6 cap" style="flex:none"><span style="font-size:15px">'+meta.e+'</span>'+esc(meta.l)+'</span></div>';
}
function reactionCard(title,sub,rows,openId){
  const byKind={};rows.forEach(function(r){byKind[r.reaction]=(byKind[r.reaction]||0)+1;});
  return '<div class="glass pad stack gap-12">'
    +'<div class="row between gap-12"><span class="stack gap-2" style="min-width:0">'
    +'<span class="h3" style="font-size:15px">'+esc(title)+'</span>'
    +'<span class="cap">'+esc(sub)+' · <span class="num">'+rows.length+'</span> reaction'+(rows.length===1?'':'s')+'</span></span>'
    +(openId?'<button class="chip" data-go="post" data-id="'+esc(openId)+'">View</button>':'')+'</div>'
    +'<div class="row gap-8 wrap">'+REACTIONS.map(function(r){
        const n=byKind[r.k]||0;
        return '<span class="chip static'+(n?'':' muted')+'"><span class="em">'+r.e+'</span> '+r.l+' <b class="num">'+n+'</b></span>';}).join('')+'</div>'
    +(rows.length?'<hr class="divider"><div class="stack gap-10">'+rows.map(reactorLine).join('')+'</div>'
      :'<p class="cap">No reactions yet.</p>')+'</div>';
}
/* Who reacted to what. Numbers alone do not tell a church which of its people were moved,
   so every reaction is listed with the believer behind it. */
function viewConsoleStories(){
  const cid=state.session&&state.session.churchId;
  const tab=state.ui.reactTab||'Posts';
  const posts=myPosts().filter(function(p){return p.type!=='story';});
  const stories=myStories();
  const commentRows=reactRows('comment');
  const totals={Posts:reactRows('post').length,Stories:reactRows('story').length,Comments:commentRows.length};
  let body='';
  if(tab==='Posts'){
    const withAny=posts.filter(function(p){return reactRows('post').some(function(r){return r.postId===p.id;});});
    const list=withAny.length?withAny:posts.slice(0,6);
    body=list.length?list.map(function(p){
      return reactionCard(p.title||storyLabel(p),esc(p.type)+' · '+ago(p.createdAt),
        reactRows('post').filter(function(r){return r.postId===p.id;}),p.id);}).join('')
      :empty('edit','Nothing published yet','Publish a post and the reactions land here.',
        '<button class="btn btn-sm btn-primary" data-go="console-compose">Write a post</button>');
  }else if(tab==='Stories'){
    body=stories.length?stories.map(function(p){
      return reactionCard(storyLabel(p),ago(p.createdAt),
        reactRows('story').filter(function(r){return r.postId===p.id;}),p.id);}).join('')
      :empty('sparkle','No stories in the last day','Stories live for 24 hours. Publish one and the reactions land here.',
        '<button class="btn btn-sm btn-primary" data-go="console-compose">Publish a story</button>');
  }else{
    const byComment={};
    commentRows.forEach(function(r){(byComment[r.postId]=byComment[r.postId]||[]).push(r);});
    const ids=Object.keys(byComment);
    body=ids.length?ids.map(function(id){
      const rows=byComment[id],first=rows[0];
      return reactionCard('“'+(first.commentText||'A comment')+'”',
        (first.commentAuthor?esc(first.commentAuthor)+' · ':'')+'comment',rows,null);}).join('')
      :empty('msg','No comment reactions yet','When a believer amens a comment on your posts, it appears here.');
  }
  return topbar('Reactions','Who responded to what',{back:'console',
    extra:'<div class="tabs mt-16">'+['Posts','Stories','Comments'].map(function(t){
      return '<button class="tab'+(tab===t?' on':'')+'" data-act="react-tab" data-v="'+t+'">'+t
        +(totals[t]?' <span class="num" style="color:var(--brand)">'+totals[t]+'</span>':'')+'</button>';}).join('')+'</div>'})
    +'<div class="view stack gap-14">'+body+'<div style="height:30px"></div></div>';
}
function renderSheet(){
  const s=state.ui.sheet;if(!s)return '';
  let inner='';
  if(s.kind==='post'){
    const types=[['question','Question','msg'],['testimony','Testimony','star'],['praise','Praise','sparkle'],['text','Word','edit']];
    const t=state.ui.postType||'question',cm=communityById(s.params.id)||{name:'the community'};
    inner='<span class="eyebrow accent">New conversation · '+esc(cm.name)+'</span><h2 class="h1 mt-8">What is on your heart?</h2>'
      +'<div class="scroll-x mt-16">'+types.map(function(x){
        return '<button class="chip'+(t===x[0]?' on':'')+'" data-act="post-type" data-v="'+x[0]+'">'+ico(x[2],14)+x[1]+'</button>';}).join('')+'</div>'
      +'<textarea class="textarea mt-16" id="npText" placeholder="'+(t==='testimony'?'Tell what God has done…':t==='praise'?'What are you thankful for?':t==='question'?'Ask the community…':'Share a word…')+'" style="min-height:140px"></textarea>'
      +'<div class="field mt-12"><label class="label" for="npVerse">Attach a verse (optional)</label>'
      +'<select class="select" id="npVerse"><option value="">No verse</option>'
      +VERSES.map(function(v){return '<option value="'+esc(v.r)+'">'+esc(v.r)+'</option>';}).join('')+'</select></div>'
      +'<div class="row gap-10 mt-16"><button class="btn btn-primary grow" data-act="submit-post" data-id="'+esc(cm.id||'')+'">'+ico('send',18)+'Post to '+esc(cm.name)+'</button></div>'
      +'<p class="cap mt-12">Visible to members of this community. Moderators can remove unkind replies.</p>';
  }else if(s.kind==='profile'){
    const u=state.session||{},e=state.ui.profileErrors||{};
    const ph=String(u.phone||''),dial=(ph.match(/^\+\d{1,3}/)||['+91'])[0],num=ph.replace(/^\+\d{1,3}\s*/,'');
    inner='<span class="eyebrow accent">Edit profile</span><h2 class="h1 mt-8">Your details</h2>'
      +'<div class="row gap-14 mt-16"><button class="me-avatar" data-act="pick-avatar" data-target="profile" aria-label="Change photo">'+avatarHTML(u,'avatar-lg')+'<span class="ob-avatar-edit">'+ico('edit',13)+'</span></button>'
      +'<div class="stack gap-6"><span class="h3">Profile photo</span><div class="row gap-8"><button class="chip" data-act="pick-avatar" data-target="profile">'+ico('upload',14)+'Change</button>'
      +(u.photo?'<button class="chip" data-act="remove-photo">'+ico('x',13)+'Remove</button>':'')+'</div></div></div>'
      +'<div class="stack gap-14 mt-16">'
      +obField('epName','Display name','<input class="input" id="epName" value="'+esc(u.name||'')+'">',e.name)
      +obField('epUser','Username','<div class="input-group"><span class="ig-pre">@</span><input class="input" id="epUser" autocapitalize="none" spellcheck="false" maxlength="24" value="'+esc(u.handle||'')+'"></div>',e.user)
      +obField('epPhone','Contact number','<div class="input-group"><select class="select ig-select" id="epDial" aria-label="Country code">'
        +DIAL_CODES.map(function(d){return '<option'+(dial===d?' selected':'')+'>'+d+'</option>';}).join('')+'</select><input class="input" id="epPhone" type="tel" inputmode="tel" value="'+esc(num)+'"></div>',e.phone)
      +'<div class="grid-2">'+obField('epCity','City','<input class="input" id="epCity" value="'+esc(u.city||'')+'">',e.city)
      +obField('epCountry','Country','<select class="select" id="epCountry">'+COUNTRIES.map(function(c){return '<option'+((u.country||'India')===c?' selected':'')+'>'+c+'</option>';}).join('')+'</select>')+'</div>'
      +obField('epLang','Language','<select class="select" id="epLang">'+LANGS.map(function(l){return '<option'+((u.lang||'English')===l?' selected':'')+'>'+l+'</option>';}).join('')+'</select>')
      +obField('epGender','Gender','<select class="select" id="epGender"><option value="">Not shown</option>'+GENDERS.map(function(g){return '<option'+(u.gender===g?' selected':'')+'>'+g+'</option>';}).join('')+'</select>','','',true)
      +obField('epBio','Bio','<textarea class="textarea" id="epBio" placeholder="A line about your walk" style="min-height:84px">'+esc(u.bio||'')+'</textarea>','','',true)
      +'</div>'
      +'<button class="btn btn-primary btn-block mt-16" data-act="save-profile">Save profile</button>';
  }else if(s.kind==='crop'){
    inner='<span class="eyebrow accent">Profile photo</span><h2 class="h1 mt-8">Crop to a square</h2>'
      +'<p class="cap mt-8">Drag to position. Use the slider, or scroll, to zoom.</p>'
      +'<div class="crop-box mt-16" id="cropBox"><img id="cropImg" src="'+esc(CROP.img?CROP.img.src:'')+'" alt="Photo being cropped" draggable="false"><div class="crop-ring" aria-hidden="true"></div></div>'
      +'<div class="row gap-12 mt-16 crop-zoom">'+ico('search',16,'dim')+'<input type="range" id="cropZoom" min="1" max="4" step="0.01" value="'+CROP.zoom+'" aria-label="Zoom" class="grow"></div>'
      +'<div class="row gap-10 mt-16"><button class="btn btn-ghost" data-act="close-sheet">Cancel</button><button class="btn btn-primary grow" data-act="crop-use">'+ico('check',17)+'Use this photo</button></div>';
  }else if(s.kind==='terms'){
    const sec=function(h,t){return '<h3 class="h3 mt-16">'+h+'</h3><p class="body mt-4" style="font-size:14.5px">'+t+'</p>';};
    inner='<span class="eyebrow accent">believersArk</span><h2 class="h1 mt-8">Terms &amp; Conditions</h2><p class="cap mt-8">Prototype terms, for review before launch.</p>'
      +'<div class="terms-scroll">'
      +sec('1. Who can join','believersArk is for believers and verified churches. You join a church with the invite code that church gives its members. You must be 13 or older, or use a family account set up by a parent.')
      +sec('2. Your account','Keep your sign-in secure and your details accurate. Your username is public; your email and contact number are seen only by you and the admins of churches you belong to.')
      +sec('3. How we treat each other','Speak kindly. No harassment, hate, spam, or content that endangers anyone. Church admins and community moderators may remove posts and members who break these rules.')
      +sec('4. Your content','You own what you post. You allow believersArk to show it to the audience you chose. You can delete it at any time.')
      +sec('5. Privacy','We never sell your data and never show ads. You can export or delete your data from Settings &amp; privacy. Private prayer requests are visible only to your pastors.')
      +sec('6. Children','Child and youth profiles are managed by a parent, see only kids content, and cannot send direct messages.')
      +sec('7. Changes','If these terms change, we will tell you in the app before the change takes effect.')
      +'</div>'
      +'<div class="row gap-10 mt-16"><button class="btn btn-ghost" data-act="close-sheet">Close</button>'
      +(state.route==='onboard'?'<button class="btn btn-primary grow" data-act="accept-terms">'+ico('check',17)+'I agree</button>':'')+'</div>';
  }else if(s.kind==='join-church'){
    const e=state.ui.joinError,c=state.ui.joinChurch?churchById(state.ui.joinChurch):null;
    inner='<span class="eyebrow accent">Join another church</span><h2 class="h1 mt-8">Enter its invite code</h2>'
      +'<p class="cap mt-8">Each church shares its own code with members. You can belong to as many churches as you like.</p>'
      +'<div class="row gap-10 mt-16"><input class="input code-input grow" id="joinCode" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="24" placeholder="e.g. BETHEL-3304" value="'+esc(state.ui.joinCodeVal||'')+'">'
      +'<button class="btn btn-primary" data-act="join-church-code" style="height:52px">Join</button></div>'
      +(e?'<span class="field-error mt-8" role="alert">'+ico('x',12)+esc(e)+'</span>':'')
      +(c?'<div class="note-box mt-16">'+ico('check',18)+'<span>You\'re now a member of <b>'+esc(c.name)+'</b>. Its updates are in your feed and its communities are open to you.</span></div>':'')
      +'<p class="cap mt-16">Prototype codes: GRACE-7291 · BETHEL-3304 · MARTHOMA-1876 · NEWLIFE-6112 · HOPE-2210 · EMMANUEL-1994</p>';
  }else if(s.kind==='dir-filters'){
    inner=filterSheet();
  }else if(s.kind==='new-community'){
    const icons=[['users','People'],['music','Music'],['hands','Prayer'],['book','Bible'],['globe','Outreach'],['sparkle','Youth'],['star','Serving'],['cal','Events']];
    inner='<span class="eyebrow accent">New community</span><h2 class="h1 mt-8">Start a community</h2>'
      +'<p class="cap mt-8">Only people who follow your church can see it and ask to join. You approve every member.</p>'
      +'<div class="stack gap-14 mt-16">'
      +obField('ncName','Name','<input class="input" id="ncName" maxlength="40" placeholder="Youth fellowship" value="'+esc(state.ui.ncName||'')+'">')
      +obField('ncAbout','What is it for?','<textarea class="textarea" id="ncAbout" maxlength="240" placeholder="Who it is for and what happens here" style="min-height:84px">'+esc(state.ui.ncAbout||'')+'</textarea>','','',true)
      +'<div class="field"><span class="label">Icon</span><div class="row gap-8 wrap">'+icons.map(function(x){
        return '<button class="chip'+((state.ui.ncIcon||'users')===x[0]?' on':'')+'" data-act="nc-icon" data-v="'+x[0]+'">'+ico(x[0],14)+x[1]+'</button>';}).join('')+'</div></div></div>'
      +'<button class="btn btn-primary btn-block mt-16" data-act="submit-community">'+ico('plus',17)+'Create community</button>';
  }else if(s.kind==='milestone'){
    inner='<span class="eyebrow accent">Add a milestone</span><h2 class="h1 mt-8">Mark the moment</h2>'
      +'<div class="row gap-8 wrap mt-16">'+['Baptism','Confirmation','Marriage','Dedication','First communion','Ordination'].map(function(m){
        return '<button class="chip'+((state.ui.msType||'Baptism')===m?' on':'')+'" data-act="ms-type" data-v="'+esc(m)+'">'+esc(m)+'</button>';}).join('')+'</div>'
      +'<div class="field mt-16"><label class="label" for="msDate">Date</label><input class="input" id="msDate" type="date"></div>'
      +'<div class="field mt-12"><label class="label" for="msNote">Note</label><input class="input" id="msNote" placeholder="At St. Thomas, with my family"></div>'
      +'<button class="btn btn-primary btn-block mt-16" data-act="submit-milestone">Add to my path</button>';
  }else if(s.kind==='family'){
    inner='<span class="eyebrow accent">Add family member</span><h2 class="h1 mt-8">Who are we adding?</h2>'
      +'<div class="field mt-16"><label class="label" for="fmName">Name</label><input class="input" id="fmName" placeholder="Ruth"></div>'
      +'<div class="row gap-8 mt-16">'+['Child','Youth','Adult'].map(function(t){
        return '<button class="chip'+((state.ui.fmType||'Child')===t?' on':'')+'" data-act="fm-type" data-v="'+t+'">'+t+'</button>';}).join('')+'</div>'
      +'<div class="glass pad-sm stack gap-8 mt-16"><span class="eyebrow">Parental controls</span>'
      +'<span class="cap">Kids content only · no direct messages · everything visible to you</span></div>'
      +'<button class="btn btn-primary btn-block mt-16" data-act="submit-family">Add member</button>';
  }else if(s.kind==='verse'){
    const v=findVerse(s.params.r);
    inner='<span class="verse-ref">'+esc(v.r)+'</span>'
      +'<p class="scripture mt-16">“'+esc(v.t)+'”</p>'
      +'<p class="cap mt-16">King James Version · public domain</p>'
      +'<div class="row gap-10 mt-16"><button class="btn btn-ghost btn-sm grow" data-act="note-verse">'+ico('edit',15)+'Note</button>'
      +'<button class="btn btn-ghost btn-sm grow" data-act="share-verse">'+ico('share',15)+'Share</button></div>';
  }else if(s.kind==='notifications'){
    const items=[['Grace Cathedral is live now','2m','live'],['Your reading plan is waiting','1h','accent'],['3 people are praying for your request','3h','rose']];
    inner='<span class="eyebrow accent">Notifications</span><h2 class="h1 mt-8">Recent</h2><div class="stack gap-10 mt-16">'
      +items.map(function(i){return '<div class="row between gap-12" style="padding:13px 14px;border-radius:var(--r-md);background:var(--surface);border:1px solid var(--border)">'
        +'<span class="body" style="font-size:14.5px;color:var(--text-1)">'+esc(i[0])+'</span><span class="cap">'+i[1]+'</span></div>';}).join('')+'</div>'
      +'<button class="btn btn-ghost btn-block mt-16" data-go="settings">Notification settings</button>';
  }else if(s.kind==='summary'){
    const p=state.data.posts.find(function(x){return x.id===s.params.id;})||{};
    inner='<div class="row gap-10"><span class="icon-btn" style="color:var(--lavender);border-color:rgba(192,143,208,.4)">'+ico('sparkle',18)+'</span>'
      +'<div class="stack gap-2"><span class="h3">Sermon summary</span><span class="cap">Generated from the transcript</span></div></div>'
      +'<h2 class="h2 mt-16">'+esc(p.title||'Sunday message')+'</h2>'
      +'<div class="stack gap-10 mt-16">'+['God’s faithfulness is measured by his character, not our circumstances.','Lament is a legitimate language of faith — the Psalms model it.','Practical step: name one worry aloud in prayer today and leave it there.']
        .map(function(t,i){return '<div class="row gap-10"><span class="accent num" style="font-size:18px;font-weight:800">'+(i+1)+'</span><span class="body" style="color:var(--text-1)">'+esc(t)+'</span></div>';}).join('')+'</div>'
      +'<div class="row gap-8 wrap mt-16">'+['Lamentations 3:22','Psalm 46:10'].map(function(v){
        return '<button class="verse-chip" data-act="open-verse" data-r="'+esc(v)+'">'+ico('book',13)+esc(v)+'</button>';}).join('')+'</div>'
      +'<p class="cap mt-16">In this prototype the summary is illustrative. Pastors can correct summaries before they publish.</p>';
  }else if(s.kind==='connections'){
    /* The number is always public. Who the churches are is the church's own call — when it
       keeps the list private, everyone but the church itself sees the count alone. */
    const c=churchById(s.params.id)||{};
    const list=myConnections(c.id).map(churchById).filter(Boolean);
    const mine=isChurchSession()&&state.session.churchId===c.id;
    const hidden=!!c.connectionsPrivate&&!mine;
    inner='<span class="eyebrow accent">'+esc(c.name||'Church')+'</span>'
      +'<h2 class="h1 mt-8">'+list.length+' connection'+(list.length===1?'':'s')+'</h2>'
      +(hidden
        ?'<div class="glass pad stack gap-12 mt-16"><div class="row gap-10">'+ico('lock',18,'ice')
          +'<span class="body" style="font-size:14.5px">'+esc(c.name||'This church')+' keeps its connections private. The number is shown, the churches are not.</span></div></div>'
        :list.length
          ?'<div class="stack gap-10 mt-16">'+list.map(function(x){
            return '<button class="glass press pad-sm row between gap-12" data-go="church-profile" data-id="'+esc(x.id)+'" style="text-align:left">'
              +'<span class="row gap-10" style="min-width:0">'+churchLogo(x,34)
              +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14.5px">'+esc(x.name)+'</span>'
              +'<span class="cap">'+esc(x.city||'')+'</span></span></span>'+ico('chevR',16)+'</button>';}).join('')+'</div>'
          :'<p class="cap mt-16">No connections yet.</p>')
      +(mine&&c.connectionsPrivate?'<p class="cap mt-12">'+ico('eye',13)+' Only you can see this list.</p>':'');
  }else if(s.kind==='gpt-hide'){
    inner='<div class="stack center gap-14" style="text-align:center">'
      +'<div class="icon-btn" style="width:56px;height:56px;color:var(--brand);border-color:rgba(201,151,74,.35);background:var(--brand-dim)">'+bibleGptMark(26)+'</div>'
      +'<h2 class="h1">Hide BibleGPT?</h2>'
      +'<p class="body">The button leaves your screen and the shortcut leaves the menu. Nothing else changes, and you can bring it back whenever you like.</p></div>'
      +'<div class="stack gap-10 mt-20">'
      +'<button class="btn btn-primary btn-block" data-act="gpt-hide">'+ico('x',17)+'Hide BibleGPT</button>'
      +'<button class="btn btn-ghost btn-block" data-act="close-sheet">Keep it</button></div>'
      +'<p class="cap mt-12" style="text-align:center">Settings &amp; privacy → BibleGPT to turn it back on.</p>';
  }else if(s.kind==='msg-delete'){
    inner='<div class="stack center gap-14" style="text-align:center">'
      +'<div class="icon-btn" style="width:54px;height:54px;color:var(--live-ink);border-color:rgba(227,27,72,.3);background:rgba(227,27,72,.1)">'+ico('x',24)+'</div>'
      +'<h2 class="h1">Delete this message?</h2>'
      +'<p class="body">The other church will see that a message was deleted. This cannot be undone.</p></div>'
      +'<div class="stack gap-10 mt-20">'
      +'<button class="btn btn-primary btn-block" data-act="msg-delete-confirm" data-t="'+esc(s.params.t)+'" data-id="'+esc(s.params.id)+'" style="background:var(--live);border-color:var(--live)">Delete</button>'
      +'<button class="btn btn-ghost btn-block" data-act="close-sheet">Keep it</button></div>';
  }else if(s.kind==='msg-photo'){
    return '<div class="lightbox" data-act="close-sheet">'
      +'<div class="row between gap-12" style="padding:14px 16px"><span class="cap">Attachment</span>'
      +'<button class="icon-btn" data-act="close-sheet" aria-label="Close">'+ico('x',18)+'</button></div>'
      +'<div class="lightbox-stage" data-stop="1"><div class="lightbox-frame"><img src="'+esc(s.params.src)+'" alt="Attachment"></div></div></div>';
  }else if(s.kind==='soon'){
    inner='<div class="stack center gap-14" style="text-align:center">'
      +'<div class="icon-btn" style="width:56px;height:56px;color:var(--lavender);border-color:rgba(192,143,208,.35);background:rgba(192,143,208,.1)">'+ico('sparkle',26)+'</div>'
      +'<span class="badge badge-lav">In design</span>'
      +'<h2 class="h1">'+esc(s.params.v||'Coming soon')+'</h2>'
      +'<p class="body">This module is specified and designed, and lands in the next build phase of believersArk. The first release focuses on churches, feed, communities, journey and prayer.</p></div>';
  }
  if(s.kind==='image'){
    const p=state.data.posts.find(function(x){return x.id===s.params.id;})
      ||state.data.events.find(function(x){return x.id===s.params.id;})||{};
    const ph=photosOf(p), n=ph.length;
    const i=Math.max(0,Math.min(Number(s.params.i)||0,Math.max(0,n-1)));
    const caption=String(p.title||p.content||p.description||'').slice(0,200);
    return '<div class="lightbox" data-act="close-sheet">'
      +'<div class="row between gap-12" style="padding:14px 16px">'
      +'<span class="row gap-10" style="min-width:0">'+(p.churchId?churchLogo({id:p.churchId,name:p.churchName},34):'<span class="avatar avatar-sm" style="background:'+grad(p.authorId||p.id)+'">'+initials(p.authorName||'?')+'</span>')
      +'<span class="stack gap-2" style="min-width:0"><span class="h3" style="font-size:14px;color:#F2F4FF">'+esc(p.churchName||p.authorName||'believersArk')+'</span>'
      +'<span class="cap">'+(n?(n>1?'Picture '+(i+1)+' of '+n:'Photograph'):'Scene artwork')+'</span></span></span>'
      +'<button class="icon-btn" data-act="close-sheet" aria-label="Close">'+ico('x',18)+'</button></div>'
      +'<div class="lightbox-stage" data-stop="1" style="position:relative">'
      +(n>1?'<button class="lb-nav prev" data-act="lb-step" data-v="-1" aria-label="Previous picture"'+(i===0?' disabled':'')+'>'+ico('chevL',20)+'</button>':'')
      +'<div class="lightbox-frame">'+mediaInner(p,i)+'</div>'
      +(n>1?'<button class="lb-nav next" data-act="lb-step" data-v="1" aria-label="Next picture"'+(i>=n-1?' disabled':'')+'>'+ico('chevR',20)+'</button>':'')
      +'</div>'
      +(n>1?'<div class="lb-dots" data-stop="1">'+ph.map(function(_,k){return '<i class="'+(k===i?'on':'')+'"></i>';}).join('')+'</div>':'')
      +(caption?'<p class="body" style="padding:0 20px 26px;max-width:820px;margin:0 auto;text-align:center">'+esc(caption)+'</p>':'')
      +'</div>';
  }
  return '<div class="sheet-bg" data-act="close-sheet"><div class="sheet" data-stop="1"><div class="grip"></div>'+inner+'<div style="height:8px"></div></div></div>';
}

/* ---------- root render ---------- */
/* Which view is on screen. When this is unchanged between renders, the render is an update
   rather than a navigation: entrance animations stay still and the scroll position holds. */
function viewSignature(){
  const u=state.ui;
  return [state.route,state.params.id||'',u.tab,u.churchTab,u.personTab,u.journeyTab,u.c2cTab,u.dir,
    u.sheet?u.sheet.kind:'',u.step].join('|');
}
let LAST_VIEW=null;
function render(){
  document.documentElement.setAttribute('data-app-theme',state.theme);
  const sig=viewSignature(), sameView=(sig===LAST_VIEW), keepY=window.scrollY;
  LAST_VIEW=sig;
  document.documentElement.setAttribute('data-anim',sameView?'off':'on');
  if(state.route==='onboard'&&document.getElementById('obForm'))captureOnboard();
  if(state.route==='console-compose'&&document.getElementById('fBody'))captureCompose();
  if(state.route==='console-thread'){const tb=document.getElementById('threadBox');if(tb)state.ui.msgDraft=tb.value;}
  const r=state.route;
  let html='';
  if(r==='splash')html=viewSplash();
  else if(r==='welcome')html=viewWelcome();
  else if(r==='auth')html=viewAuth();
  else if(r==='otp')html=viewOtp();
  else if(r==='onboard')html=viewOnboardBeliever();
  else if(r==='onboard-church')html=viewOnboardChurch();
  else if(r==='pending')html=viewPending();
  else{
    let body='';
    if(r==='home')body=viewHome();
    else if(r==='churches')body=viewChurches();
    else if(r==='church-profile')body=viewChurchProfile();
    else if(r==='person-profile')body=viewPersonProfile();
    else if(r==='notifications')body=viewNotifications();
    else if(r==='saved')body=viewSaved();
    else if(r==='event')body=viewEvent();
    else if(r==='post')body=viewPost();
    else if(r==='journey')body=viewJourney();
    else if(r==='community')body=viewCommunity();
    else if(r==='community-page')body=viewCommunityPage();
    else if(r==='live')body=viewLive();
    else if(r==='soon')body=viewSoon();
    else if(r==='console-thread')body=viewConsoleThread();
    else if(r==='biblegpt')body=gptEnabled()?viewBibleGPT():viewHome();
    else if(r==='me')body=viewMe();
    else if(r==='settings')body=viewSettings();
    else if(r==='family')body=viewFamily();
    else if(r==='console')body=viewConsole();
    else if(r==='console-compose')body=viewConsoleCompose();
    else if(r==='console-events')body=viewConsoleEvents();
    else if(r==='console-communities')body=viewConsoleCommunities();
    else if(r==='console-members')body=viewConsoleMembers();
    else if(r==='console-c2c')body=viewConsoleC2C();
    else if(r==='console-stories')body=viewConsoleStories();
    else if(r==='console-followers')body=viewConsoleFollowers();
    else if(r==='console-connections')body=viewConsoleConnections();
    else if(r==='console-profile')body=viewConsoleProfile();
    else body=viewHome();
    html='<div class="shell">'+renderNav()+'<main class="main" id="main">'+adminBar()+body+'</main></div>';
  }
  document.getElementById('root').innerHTML=html+renderSheet();
  /* Replacing the document collapses its height, so the browser clamps the scroll to the top.
     On an in-place update we put the reader back where they were. */
  if(sameView&&keepY&&window.scrollY!==keepY)window.scrollTo(0,keepY);
  if(state.ui.sheet&&state.ui.sheet.kind==='crop')applyCrop();
  if(state.route==='churches')restoreDirSearch();
  syncOverlay();syncCalPop();
}

/* ---------- actions ---------- */
function val(id){const el=document.getElementById(id);return el?String(el.value||'').trim():'';}
function requireAuth(){
  if(state.session)return true;
  toast('Sign in to do that');
  setTimeout(function(){go('welcome');},700);
  return false;
}
const ACTIONS={
  guest:function(){state.session=null;saveSession();go('home');},
  'send-otp':function(){
    const id=val('authId')||state.ui.authId;
    if(!id){toast('Enter your email or phone');return;}
    state.ui.authId=id;
    state.ui.otp=String(Math.floor(100000+Math.random()*900000));
    go('otp');
  },
  'verify-otp':async function(){
    const v=val('otpInput');
    if(v!==state.ui.otp){toast('That code doesn\'t match — try again');return;}
    const key=accountKey(state.ui.authId);
    const existing=await loadProfile(key);
    if(existing&&existing.name){
      applyProfile(key,existing);
      if(state.session.role==='church')go(state.session.verified?'console':'pending');
      else{go('home');toast('Welcome back, '+String(existing.name).split(' ')[0]);}
      return;
    }
    if(state.ui.authRole==='church'){state.ui.onboard={};go('onboard-church');}
    else{
      const id=String(state.ui.authId||''),isMail=id.indexOf('@')>-1;
      state.ui.onboard={user:isMail?suggestHandle(id.split('@')[0]):'',email:isMail?id:'',emailLocked:false,
        phone:isMail?'':id.replace(/^\+\d{1,3}\s*/,'').replace(/\D/g,''),lang:'English',country:'India',dial:'+91'};
      state.ui.obErrors={};state.ui.step=0;go('onboard');
    }
  },
  'social-signin':async function(el){
    const p=el.dataset.p,label=(SOCIAL[p]||{}).label||'That provider';
    if(state.ui.authBusy)return;
    if(!authConfigured()){toast(label+' sign-in switches on once the Firebase keys are added');return;}
    const A=window.ArkAuth;
    if(!A||!A.ready){toast(A&&A.loadError?'Sign-in could not load. Check your connection and reload.':'Sign-in is still loading. Try again in a moment.');return;}
    try{sessionStorage.setItem(LS+'authRole',state.ui.authRole||'believer');}catch(e){}
    state.ui.authBusy=p;render();
    try{
      const user=await A.signIn(p);
      state.ui.authBusy=null;
      if(user)await completeSocialSignIn(user);
      else render();
    }catch(e){
      state.ui.authBusy=null;render();
      const msg=authErrorText(e,label);
      if(msg)toast(msg);
    }
  },
  'ob-gender':function(el){const o=state.ui.onboard;o.gender=o.gender===el.dataset.v?'':el.dataset.v;render();},
  'ob-clear-photo':function(){state.ui.onboard.photo=null;render();},
  'open-terms':function(){openSheet('terms');},
  'accept-terms':function(){state.ui.onboard.terms=true;if(state.ui.obErrors)delete state.ui.obErrors.terms;closeSheet();},
  'ob-fill-code':function(el){state.ui.onboard.code=el.dataset.v;render();ACTIONS['ob-verify-code']();},
  'ob-verify-code':function(){
    captureOnboard();
    const o=state.ui.onboard,c=churchByInvite(o.code);
    state.ui.obErrors={};
    if(!normCode(o.code))state.ui.obErrors.code='Enter the invite code from your church';
    else if(!c){o.churchId=null;state.ui.obErrors.code='That code doesn\'t match a church on believersArk. Check it with your church office.';}
    else{o.churchId=c.id;o.code=c.inviteCode;const inp=document.getElementById('obCode');if(inp)inp.value=c.inviteCode;toast('Welcome to '+c.name);}
    render();
  },
  'ob-goal':function(el){
    const o=state.ui.onboard,k=el.dataset.k;o.goals=o.goals||[];
    const i=o.goals.indexOf(k);if(i>-1)o.goals.splice(i,1);else o.goals.push(k);
    render();
  },
  'ob-back':function(){captureOnboard();state.ui.obErrors={};state.ui.step=Math.max(0,state.ui.step-1);render();},
  'ob-next':function(){
    captureOnboard();
    const o=state.ui.onboard,err={};
    if(state.ui.step===0){
      const user=String(o.user||'').trim().toLowerCase().replace(/^@/,'');
      if(!user)err.user='Choose a username';
      else if(!/^[a-z0-9._]{3,24}$/.test(user))err.user='Use 3 to 24 letters, numbers, dots or underscores';
      else if(takenHandles()[norm(user)])err.user='@'+user+' is taken. Try another.';
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(o.email||'').trim()))err.email='Enter a valid email address';
      const digits=String(o.phone||'').replace(/[\s\-().]/g,'');
      if(!digits)err.phone='Enter a contact number';else if(!/^\d{6,14}$/.test(digits))err.phone='Use 6 to 14 digits, without the country code';
      if(!String(o.city||'').trim())err.city='Enter your city';
      if(!o.country)err.country='Choose your country';
      if(!o.lang)err.lang='Choose a language';
      if(!o.terms)err.terms='Please accept the terms to continue';
      state.ui.obErrors=err;
      if(Object.keys(err).length){render();const f=document.querySelector('.has-error input,.has-error select');if(f)f.focus();toast('Please check the highlighted fields');return;}
      o.user=user;o.email=String(o.email).trim();o.phone=digits;o.city=String(o.city).trim();
      state.ui.step=1;render();window.scrollTo({top:0});return;
    }
    if(state.ui.step===1){
      if(!o.churchId||!churchByInvite(o.code)){ACTIONS['ob-verify-code']();if(!state.ui.onboard.churchId)return;}
      state.ui.obErrors={};state.ui.step=2;render();window.scrollTo({top:0});return;
    }
    ACTIONS['ob-finish']();
  },
  'ob-skip':function(){state.ui.onboard.goals=[];ACTIONS['ob-finish']();},
  'ob-finish':function(){
    const o=state.ui.onboard,meta=state.ui.authMeta||{};
    const key=accountKey(state.ui.authId||o.email);
    const goals=(o.goals||[]).slice();
    const planGoal=GOALS.filter(function(g){return g.plan&&goals.indexOf(g.k)>-1;})[0];
    const c=churchById(o.churchId);
    const session={id:'u_'+key,key:key,role:'believer',name:(o.name||'').trim()||o.user,handle:o.user,
      email:o.email,phone:(o.dial||'+91')+' '+o.phone,city:o.city,country:o.country,lang:o.lang,gender:o.gender||'',bio:'',
      avatarSeed:'u_'+key,followers:0,planId:planGoal?planGoal.plan:null,goals:goals,
      homeChurchId:o.churchId,memberOf:[o.churchId],createdAt:new Date().toISOString(),
      provider:meta.provider||'email',photo:o.photo||meta.photo||null};
    state.session=session;saveSession();
    state.prefs.lang=o.lang||'English';savePrefs();
    if(state.local.follows.indexOf(o.churchId)<0){state.local.follows.push(o.churchId);bumpCount('churches',o.churchId,'followers',1);}
    state.local.planDay=0;state.local.streak=0;saveLocal();
    saveProfile();state.ui.obErrors={};
    go('home');toast('Welcome to '+((c&&c.name)||'the ark')+', '+String(session.name).split(' ')[0]);
  },
  'mock-upload':function(){state.ui.onboard.docs=true;toast('Documents attached');render();},
  'mock-upload-audio':function(){state.ui.audioUp=true;toast('Audio uploaded · transcript generated');render();},
  'church-submit':async function(){
    const name=val('cName');
    const o=state.ui.onboard;
    if(!name){toast('Your church needs a name');return;}
    const handle=norm(val('cHandle'))||freeHandle(name,takenChurchHandles());
    o.chHandle=handle;o.chHandleError='';
    if(!/^[a-z0-9._]{3,24}$/.test(handle))o.chHandleError='Use 3 to 24 letters, numbers, dots or underscores';
    else if(takenChurchHandles()[handle])o.chHandleError='@'+handle+' is taken by another church';
    if(o.chHandleError){render();toast('Please check the highlighted field');return;}
    const church={name:name,handle:handle,city:val('cCity'),address:val('cAddr'),inviteCode:makeInviteCode(name),
      serviceTimes:val('cTimes')?val('cTimes').split('·').map(function(s){return s.trim();}):['Sun 9:30am'],
      languages:val('cLangs')?val('cLangs').split(',').map(function(s){return s.trim();}):['English'],
      pastorName:val('cPastor'),tagline:val('cTag')||'A church family on believersArk',
      about:val('cTag')||'',ministries:['Worship','Prayer','Youth'],followers:0,verified:false,createdAt:new Date().toISOString()};
    const meta=state.ui.authMeta||{};
    state.session={id:uid('c_'),key:accountKey(state.ui.authId),role:'church',name:val('cPastor')||name,email:state.ui.authId,
      church:church,verified:false,churchId:null,provider:meta.provider||'email',photo:meta.photo||null};
    saveSession();go('pending');
  },
  'approve-church':async function(){
    const s=state.session;if(!s||!s.church)return;
    const c=Object.assign({},s.church,{verified:true,inviteCode:s.church.inviteCode||makeInviteCode(s.church.name),
      handle:s.church.handle||freeHandle(s.church.name,takenChurchHandles())});
    const id=await dbAdd('churches',c);
    s.verified=true;s.churchId=id||('local_'+uid());
    if(!localDoc('churches',s.churchId))state.data.churches.push(hydrate(Object.assign({id:s.churchId},c)));
    saveSession();go('console');toast('Verified — share invite code '+c.inviteCode+' with your members');
  },
  'demo-church':function(el){
    const c=churchById(el.dataset.id);if(!c)return;
    state.session={id:'c_'+c.id,role:'church',name:c.pastorName||c.name,email:'demo@'+c.id+'.believersark.app',churchId:c.id,verified:true,demo:true,createdAt:new Date().toISOString()};
    saveSession();state.ui.c2cTab='Inbox';go('console');toast('Signed in as '+c.name);
  },
  signout:function(){
    const A=window.ArkAuth;
    if(A&&A.ready&&state.session&&state.session.provider&&state.session.provider!=='email')A.signOut().catch(function(){});
    state.session=null;saveSession();state.ui.chat=[];state.ui.liveChat=null;state.ui.authMeta=null;go('welcome');toast('Signed out');
  },
  tab:function(el){state.ui.tab=el.dataset.v;render();},
  'toggle-digest':function(){state.prefs.digest=!state.prefs.digest;savePrefs();render();},
  notifications:function(){openSheet('notifications');},
  'share-verse':function(){const v=verseOfDay();shareText('“'+v.t+'” — '+v.r,'verse');},
  'open-verse':function(el){openSheet('verse',{r:el.dataset.r});},
  'share-post':function(el){const p=state.data.posts.find(function(x){return x.id===el.dataset.id;})||{};shareText((p.title?p.title+' — ':'')+(p.content||'').slice(0,140)+' · '+(p.churchName||p.authorName||'believersArk'),'post/'+el.dataset.id);},
  'share-church':function(el){const c=churchById(el.dataset.id)||{};shareText(c.name+' · '+(c.tagline||''),'church/'+el.dataset.id);},
  'share-event':function(el){const e=state.data.events.find(function(x){return x.id===el.dataset.id;})||{};shareText(e.title+' · '+fmtDate(e.datetime)+' '+fmtTime(e.datetime)+' · '+(e.churchName||''),'event/'+el.dataset.id);},
  /* communities */
  'join-community':async function(el){
    if(isChurchSession()){toast('Communities are for believers — churches speak through posts and broadcasts');return;}
    if(!requireAuth())return;
    const c=communityById(el.dataset.id);if(!c)return;
    if(myChurchIds().indexOf(c.churchId)<0){toast('Follow '+((churchById(c.churchId)||{}).name||'the church')+' first');return;}
    if(memberStatus(c.id)==='pending'||memberStatus(c.id)==='approved')return;
    const s=state.session;
    await dbAdd('communityRequests',{communityId:c.id,churchId:c.churchId,userKey:myKey(),userName:s.name,userCity:s.city||'',status:'pending',createdAt:new Date().toISOString()});
    render();toast('Request sent — an admin at '+((churchById(c.churchId)||{}).name||'the church')+' will review it');
  },
  'cancel-community':function(el){
    const r=myRequest(el.dataset.id);if(!r||r.status!=='pending')return;
    dbUpdate('communityRequests',r.id,{status:'withdrawn'});render();toast('Request withdrawn');
  },
  'leave-community':function(el){
    const r=myRequest(el.dataset.id),c=communityById(el.dataset.id);if(!r)return;
    if(!state.ui.confirmLeave||state.ui.confirmLeave!==el.dataset.id){state.ui.confirmLeave=el.dataset.id;toast('Tap Joined again to leave '+((c&&c.name)||'the community'));return;}
    state.ui.confirmLeave=null;dbUpdate('communityRequests',r.id,{status:'left'});render();toast('You left '+((c&&c.name)||'the community'));
  },
  'cm-approve':function(el){
    const r=state.data.cmRequests.find(function(x){return x.id===el.dataset.id;});if(!r)return;
    dbUpdate('communityRequests',r.id,{status:'approved',decidedAt:new Date().toISOString()});
    render();toast(r.userName+' can now join '+((communityById(r.communityId)||{}).name||'the community'));
  },
  'cm-decline':function(el){
    const r=state.data.cmRequests.find(function(x){return x.id===el.dataset.id;});if(!r)return;
    dbUpdate('communityRequests',r.id,{status:'declined',decidedAt:new Date().toISOString()});render();toast('Request declined');
  },
  'new-community':function(){state.ui.ncIcon=state.ui.ncIcon||'users';openSheet('new-community');},
  'nc-icon':function(el){state.ui.ncIcon=el.dataset.v;state.ui.ncName=val('ncName');state.ui.ncAbout=val('ncAbout');render();},
  'submit-community':async function(){
    const s=state.session;if(!s||!s.churchId){toast('Church admins only');return;}
    const name=val('ncName'),about=val('ncAbout');
    if(name.length<3){toast('Give the community a name');return;}
    const hues={users:340,music:40,hands:20,book:200,globe:160,sparkle:280,star:45,cal:230};
    const icon=state.ui.ncIcon||'users';
    await dbAdd('communities',{churchId:s.churchId,name:name,tagline:about.slice(0,80)||'A community of '+((myChurch()||{}).name||'our church'),about:about,
      members:0,hue:hues[icon]||200,icon:icon,mods:[s.name],createdAt:new Date().toISOString()});
    state.ui.ncName='';state.ui.ncAbout='';closeSheet();go('console-communities');toast('Community created — followers can now ask to join');
  },
  'thread-sort':function(el){state.ui.threadSort=el.dataset.v;render();},
  'new-thread':function(el){
    if(!requireAuth())return;
    if(myCommunityIds().indexOf(el.dataset.id)<0){toast('Join the community first');return;}
    state.ui.postType=state.ui.postType||'question';openSheet('post',{id:el.dataset.id});
  },
  /* journey calendar + reminders */
  'cal-day':function(el){state.ui.calDay=state.ui.calDay===el.dataset.v?null:el.dataset.v;render();},
  'cal-nav':function(el){const b=state.ui.calMonth?new Date(state.ui.calMonth):new Date();b.setDate(1);b.setMonth(b.getMonth()+Number(el.dataset.v));state.ui.calMonth=b.toISOString();state.ui.calDay=null;render();},
  'rem-toggle':function(el){
    const id=el.dataset.id,k=el.dataset.k,r=Object.assign({},reminderPref(id));r[k]=!r[k];
    state.local.reminders=state.local.reminders||{};state.local.reminders[id]=r;saveLocal();render();
    toast(r[k]?'Reminder on':'Reminder off');
  },
  /* live stream */
  'join-live':function(el){go('live',{id:el.dataset.id,from:state.route});},
  'live-react':function(el){
    const box=document.querySelector('.live-float');if(!box)return;
    const s=document.createElement('span');s.textContent=el.dataset.e;s.style.setProperty('--dx',Math.round(Math.random()*44-22)+'px');box.appendChild(s);
    setTimeout(function(){if(s.parentNode)s.parentNode.removeChild(s);},2900);
  },
  'live-here':function(el){
    if(!requireAuth())return;
    const e=state.data.events.find(function(x){return x.id===el.dataset.id;});if(!e)return;
    if(state.local.rsvps.indexOf(e.id)<0){state.local.rsvps.push(e.id);saveLocal();bumpCount('events',e.id,'rsvpCount',1);}
    render();toast('Attendance recorded — welcome');
  },
  'live-send':function(){
    const t=val('liveBox');if(!t)return;
    liveChat().push({n:(state.session&&state.session.name)||'Guest',t:t,me:true});
    render();const c=document.getElementById('liveChat');if(c)c.scrollTop=c.scrollHeight;
  },
  'notify-soon':function(el){toast('We\'ll tell you when '+el.dataset.v+' lands');},
  /* church-to-church */
  'c2c-tab':function(el){state.ui.c2cTab=el.dataset.v;if(state.route!=='console-c2c')go('console-c2c');else render();},
  'c2c-connect':async function(el){
    const me=state.session&&state.session.churchId;if(!me)return;
    const to=el.dataset.id,c=churchById(to);
    if(connectionBetween(me,to))return;
    const doc={from:me,to:to,status:'pending',createdAt:new Date().toISOString()};
    const id=await dbAdd('churchConnections',doc);
    render();toast('Request sent to '+((c&&c.name)||'the church'));
    if(/^ch\d$/.test(to)){ /* seeded churches answer on their own in this prototype */
      setTimeout(function(){dbUpdate('churchConnections',id,{status:'accepted',acceptedAt:new Date().toISOString()});render();toast((c&&c.name)+' accepted your connection');},2200);
    }
  },
  'c2c-accept':function(el){
    const x=state.data.connections.find(function(y){return y.id===el.dataset.id;});if(!x)return;
    dbUpdate('churchConnections',x.id,{status:'accepted',acceptedAt:new Date().toISOString()});
    const c=churchById(x.from);render();toast('Connected with '+((c&&c.name)||'the church'));
  },
  'c2c-decline':function(el){
    const x=state.data.connections.find(function(y){return y.id===el.dataset.id;});if(!x)return;
    dbUpdate('churchConnections',x.id,{status:'declined'});render();toast('Request declined');
  },
  'c2c-cancel':function(el){
    const x=state.data.connections.find(function(y){return y.id===el.dataset.id;});if(!x)return;
    dbUpdate('churchConnections',x.id,{status:'withdrawn'});render();toast('Request withdrawn');
  },
  'c2c-message':async function(el){
    const me=state.session&&state.session.churchId;if(!me)return;
    const other=el.dataset.id,conn=connectionBetween(me,other);
    if(!conn||conn.status!=='accepted'){toast('Connect first — messages travel only between connected churches');return;}
    let t=threadBetween(me,other);
    if(!t){
      const a=churchById(me)||{},b=churchById(other)||{},names={};names[me]=a.name||(state.session.church&&state.session.church.name)||'Your church';names[other]=b.name||'Church';
      const doc={churchIds:[me,other],names:names,topic:'',messages:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
      const id=await dbAdd('churchThreads',doc);
      t=localDoc('churchThreads',id)||Object.assign({id:id},doc);
      if(!localDoc('churchThreads',id))state.data.threads.push(t);
    }
    go('console-thread',{id:t.id});
  },
  'c2c-send':function(el){
    const me=state.session&&state.session.churchId;if(!me)return;
    const box=document.getElementById('threadBox'),text=box?String(box.value||'').trim():'';
    const photo=state.ui.msgPhoto||null;
    if(!text&&!photo){toast('Write something, or attach a picture');return;}
    const t=state.data.threads.find(function(x){return x.id===el.dataset.id;});if(!t)return;
    const msgs=(t.messages||[]).concat([{id:uid('m_'),from:me,text:text,photo:photo,at:new Date().toISOString()}]);
    dbUpdate('churchThreads',t.id,{messages:msgs,updatedAt:new Date().toISOString()});
    state.local.threadSeen=state.local.threadSeen||{};state.local.threadSeen[t.id]=new Date().toISOString();saveLocal();
    state.ui.msgPhoto=null;state.ui.msgDraft='';
    render();
    const b=document.getElementById('threadBody');if(b)window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
  },
  /* a message can be corrected or taken back, but only by the church that sent it */
  'msg-attach':function(){
    pickFile('image/*',function(f){readImage(f,1200,0.78,function(data){
      state.ui.msgPhoto=data;render();});});
  },
  'msg-drop-photo':function(){state.ui.msgPhoto=null;render();},
  'msg-edit':function(el){
    const t=state.data.threads.find(function(x){return x.id===el.dataset.t;});if(!t)return;
    const m=(t.messages||[]).find(function(x){return x.id===el.dataset.id;});if(!m)return;
    if(m.from!==(state.session&&state.session.churchId)){toast('You can only edit your own messages');return;}
    state.ui.editMsg={threadId:t.id,id:m.id};state.ui.msgDraft=m.text||'';
    render();
    const box=document.getElementById('threadBox');if(box){box.focus();box.setSelectionRange(box.value.length,box.value.length);}
  },
  'msg-edit-cancel':function(){state.ui.editMsg=null;state.ui.msgDraft='';render();},
  'msg-edit-save':function(el){
    const t=state.data.threads.find(function(x){return x.id===el.dataset.id;});
    const ed=state.ui.editMsg;if(!t||!ed)return;
    const box=document.getElementById('threadBox'),text=box?String(box.value||'').trim():'';
    const msgs=(t.messages||[]).map(function(m){
      if(m.id!==ed.id)return m;
      return Object.assign({},m,{text:text,editedAt:new Date().toISOString()});});
    if(!text&&!(msgs.find(function(m){return m.id===ed.id;})||{}).photo){toast('A message cannot be empty');return;}
    dbUpdate('churchThreads',t.id,{messages:msgs,updatedAt:new Date().toISOString()});
    state.ui.editMsg=null;state.ui.msgDraft='';render();toast('Message edited');
  },
  'msg-delete':function(el){
    const t=state.data.threads.find(function(x){return x.id===el.dataset.t;});if(!t)return;
    const m=(t.messages||[]).find(function(x){return x.id===el.dataset.id;});if(!m)return;
    if(m.from!==(state.session&&state.session.churchId)){toast('You can only delete your own messages');return;}
    openSheet('msg-delete',{t:t.id,id:m.id});
  },
  'msg-delete-confirm':function(el){
    const t=state.data.threads.find(function(x){return x.id===el.dataset.t;});if(!t)return;
    const msgs=(t.messages||[]).map(function(m){
      return m.id===el.dataset.id?Object.assign({},m,{deleted:true,text:'',photo:null}):m;});
    dbUpdate('churchThreads',t.id,{messages:msgs,updatedAt:new Date().toISOString()});
    if(state.ui.editMsg&&state.ui.editMsg.id===el.dataset.id)state.ui.editMsg=null;
    closeSheet();toast('Message deleted');
  },
  'open-msg-photo':function(el){
    const t=state.data.threads.find(function(x){return x.id===el.dataset.t;});if(!t)return;
    const m=(t.messages||[]).find(function(x){return x.id===el.dataset.id;});if(!m||!m.photo)return;
    openSheet('msg-photo',{src:m.photo});
  },
  summarise:function(el){openSheet('summary',{id:el.dataset.id});},
  react:function(el){
    const id=el.dataset.id,k=el.dataset.k,prev=state.local.reacted[id];
    const bloomOn=prev!==k;
    if(prev===k){delete state.local.reacted[id];bumpCount('posts',id,'reactions.'+k,-1);}
    else{state.local.reacted[id]=k;bumpCount('posts',id,'reactions.'+k,1);if(prev)bumpCount('posts',id,'reactions.'+prev,-1);}
    saveLocal();
    recordStoryReaction(state.data.posts.find(function(x){return x.id===id;}),prev===k?null:k);
    render();
    if(bloomOn)bloom('[data-act="react"][data-id="'+id+'"][data-k="'+k+'"]');
  },
  follow:async function(el){
    const id=el.dataset.id,i=state.local.follows.indexOf(id);
    const c=churchById(id);
    if(i>-1){state.local.follows.splice(i,1);bumpCount('churches',id,'followers',-1);toast('Unfollowed'+(c?' '+c.name:''));}
    else{state.local.follows.push(id);bumpCount('churches',id,'followers',1);
      toast(state.session?'Following '+((c&&c.name)||'this church')+' — their posts are in your feed':'Following. Sign in to keep this across devices.');}
    saveLocal();saveProfile();render();
  },
  'save-post':function(el){
    const id=el.dataset.id,i=(state.local.saved||[]).indexOf(id);
    if(i>-1){state.local.saved.splice(i,1);toast('Removed from saved');}
    else{state.local.saved.push(id);toast('Saved — find it in Me › Saved posts');}
    saveLocal();render();
  },
  'post-type':function(el){state.ui.postType=el.dataset.v;render();},
  'submit-post':async function(el){
    const s=state.session;if(!s)return;
    const text=val('npText');if(!text){toast('Write something first');return;}
    const verse=val('npVerse'),cid=el.dataset.id||(state.ui.sheet&&state.ui.sheet.params.id);
    const doc={authorType:'person',authorId:s.id,authorName:s.name,authorCity:s.city||'',communityId:cid||null,
      type:state.ui.postType||'question',content:text,verseRef:verse||null,
      reactions:{amen:0,bless:0,peace:0,love:0,fire:0},comments:0,createdAt:new Date().toISOString()};
    closeSheet();
    await dbAdd('posts',doc);
    state.ui.threadSort='Latest';go('community-page',{id:cid});toast('Posted — the community can see it');
  },
  'open-moment':function(el){
    const i=Number(el.dataset.i)||0,m=momentSources()[i];if(!m)return;
    markSeen(m);
    state.ui.news=null;state.ui.story={i:i,p:0};state.ui.fx='story';
    STORY.paused=false;startStory();syncOverlay();render();
  },
  'story-next':function(){storyStep(1);},
  'story-prev':function(){storyStep(-1);},
  'story-pause':function(){STORY.paused=!STORY.paused;syncOverlay();},
  'close-story':function(){closeStory();},
  'share-story':function(el){
    const p=state.data.posts.find(function(x){return x.id===el.dataset.id;})||{};
    STORY.paused=true;syncOverlay();
    shareText((p.churchName||'A church')+' on believersArk: '+(p.content||'').slice(0,140),'church/'+(p.churchId||''));
  },
  'open-news':function(el){
    stopStory();state.ui.story=null;state.ui.news=el.dataset.id;state.ui.fx='news';syncOverlay();
    try{history.replaceState(null,'','#news/'+el.dataset.id);}catch(e){}
  },
  'close-news':function(){
    const root=document.getElementById('overlay-root');
    (root?root.querySelectorAll('audio,video'):[]).forEach(function(m){try{m.pause();}catch(e){}});
    state.ui.news=null;state.ui.fx=null;syncOverlay();
    try{history.replaceState(null,'',location.pathname+location.search);}catch(e){}
  },
  'share-news':function(el){const n=newsById(el.dataset.id)||{};shareText(n.title+' — '+(n.dek||''),'news/'+el.dataset.id);},
  'cal-toggle':function(){state.ui.calPop=!state.ui.calPop;if(!state.ui.calPop){state.ui.railDay=null;state.ui.railMonth=null;}render();},
  'cal-close':function(){state.ui.calPop=false;state.ui.railDay=null;state.ui.railMonth=null;render();},
  'rail-more':function(){state.ui.railAll=!state.ui.railAll;render();},
  'rail-day':function(el){state.ui.railDay=state.ui.railDay===el.dataset.v?null:el.dataset.v;render();},
  'rail-cal':function(el){const b=state.ui.railMonth?new Date(state.ui.railMonth):new Date();b.setDate(1);b.setMonth(b.getMonth()+Number(el.dataset.v));state.ui.railMonth=b.toISOString();state.ui.railDay=null;render();},
  'person-tab':function(el){state.ui.personTab=el.dataset.v;render();},
  'mark-read-notifs':function(){state.local.notifSeen=new Date().toISOString();saveLocal();render();toast('All caught up');},
  'edit-profile':function(){if(!requireAuth())return;openSheet('profile');},
  'save-profile':function(){
    const s=state.session,e={};
    const name=val('epName'),user=val('epUser').toLowerCase().replace(/^@/,''),digits=val('epPhone').replace(/[\s\-().]/g,''),city=val('epCity');
    if(!name)e.name='Add the name people will see';
    if(!/^[a-z0-9._]{3,24}$/.test(user))e.user='Use 3 to 24 letters, numbers, dots or underscores';
    else if(norm(user)!==norm(s.handle)&&takenHandles()[norm(user)])e.user='@'+user+' is taken';
    if(!/^\d{6,14}$/.test(digits))e.phone='Use 6 to 14 digits';
    if(!city)e.city='Enter your city';
    state.ui.profileErrors=e;
    if(Object.keys(e).length){render();toast('Please check the highlighted fields');return;}
    Object.assign(s,{name:name,handle:user,phone:val('epDial')+' '+digits,city:city,country:val('epCountry'),lang:val('epLang'),gender:val('epGender'),bio:val('epBio')});
    state.prefs.lang=s.lang;savePrefs();
    saveSession();saveProfile();state.ui.profileErrors={};closeSheet();toast('Profile updated');
  },
  'pick-avatar':function(el){
    const target=el.dataset.target||'onboard',inp=document.createElement('input');
    inp.type='file';inp.accept='image/*';
    inp.onchange=function(){if(inp.files&&inp.files[0])openCrop(inp.files[0],target);};
    inp.click();
  },
  'crop-use':function(){
    const data=finishCrop();if(!data){toast('Could not crop that photo');return;}
    if(CROP.target==='profile'&&state.session){
      state.session.photo=data;saveSession();saveProfile();
      const reopen=state.ui.sheetBeforeCrop==='profile';
      closeSheet();if(reopen)openSheet('profile');toast('Profile photo updated');
    }else{state.ui.onboard.photo=data;closeSheet();toast('Photo added');}
    CROP.img=null;
  },
  'remove-photo':function(){if(!state.session)return;state.session.photo=null;saveSession();saveProfile();render();toast('Photo removed');},
  'join-church':function(){if(!requireAuth())return;state.ui.joinError='';state.ui.joinChurch=null;state.ui.joinCodeVal='';openSheet('join-church');},
  'join-church-code':function(){
    const s=state.session;if(!s)return;
    const code=val('joinCode'),c=churchByInvite(code);
    state.ui.joinCodeVal=code;state.ui.joinChurch=null;
    if(!normCode(code)){state.ui.joinError='Enter the invite code from the church';render();return;}
    if(!c){state.ui.joinError='That code doesn\'t match a church. Check it with the church office.';render();return;}
    state.ui.joinError='';
    s.memberOf=s.memberOf||[];
    if(s.memberOf.indexOf(c.id)>-1){state.ui.joinError='You\'re already a member of '+c.name;render();return;}
    s.memberOf.push(c.id);if(!s.homeChurchId)s.homeChurchId=c.id;
    if(state.local.follows.indexOf(c.id)<0){state.local.follows.push(c.id);bumpCount('churches',c.id,'followers',1);saveLocal();}
    saveSession();saveProfile();state.ui.joinChurch=c.id;render();toast('Welcome to '+c.name);
  },
  'copy-invite':function(el){
    const v=el.dataset.v,done=function(){toast('Invite code '+v+' copied');};
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(done,function(){toast('Your code is '+v);});else toast('Your code is '+v);
  },
  'share-invite':function(el){const c=myChurch()||{};shareText('Join '+(c.name||'our church')+' on believersArk with invite code '+el.dataset.v,'');},
  'amen-comment':function(el){
    const c=state.data.comments.find(function(x){return x.id===el.dataset.id;});
    if(!c)return;
    state.local.amened=state.local.amened||[];
    const i=state.local.amened.indexOf(c.id);
    if(i>-1){state.local.amened.splice(i,1);bumpCount('comments',c.id,'amens',-1);}
    else{state.local.amened.push(c.id);bumpCount('comments',c.id,'amens',1);}
    const host=state.data.posts.find(function(x){return x.id===c.postId;});
    recordReaction('comment',c,i>-1?null:'amen',{churchId:(host&&host.churchId)||null,
      commentText:String(c.text||'').slice(0,90),commentAuthor:c.authorName||''});
    saveLocal();render();
  },
  'reply-comment':function(el){
    const box=document.getElementById('cmtBox');
    if(box){box.value='@'+el.dataset.v+' ';box.focus();}
  },
  'home-church':function(el){
    if(!requireAuth())return;
    if(homeChurchLocked()){toast('Your home church is the one you lead — switch to admin mode to change the church itself');return;}
    state.session.homeChurchId=state.session.homeChurchId===el.dataset.id?null:el.dataset.id;
    if(state.session.homeChurchId&&state.local.follows.indexOf(el.dataset.id)<0)state.local.follows.push(el.dataset.id);
    saveSession();saveLocal();saveProfile();render();toast(state.session.homeChurchId?'Set as your home church':'Home church cleared');
  },
  'show-connections':function(el){openSheet('connections',{id:el.dataset.id});},
  'ch-connections-private':function(){
    const c=myChurch();if(!c){toast('Finish verification first');return;}
    c.connectionsPrivate=!c.connectionsPrivate;
    dbUpdate('churches',c.id,{connectionsPrivate:c.connectionsPrivate});
    render();toast(c.connectionsPrivate?'Your connections are private now':'Your connections are visible again');
  },
  'gpt-open':function(){if(GPT_HOLD.fired){GPT_HOLD.fired=false;return;}go('biblegpt');},
  'gpt-hide':function(){
    state.prefs.gpt=false;savePrefs();closeSheet();
    if(state.route==='biblegpt')go('home');else render();
    toast('BibleGPT hidden — turn it back on in Settings & privacy');
  },
  'pick-banner':function(){
    pickFile('image/*',function(f){readImage(f,1600,0.78,function(data){
      const c=myChurch();if(!c)return;
      c.banner=data;dbUpdate('churches',c.id,{banner:data});render();toast('Banner updated');});});
  },
  'clear-banner':function(){const c=myChurch();if(!c)return;c.banner=null;dbUpdate('churches',c.id,{banner:null});render();toast('Banner cleared');},
  'pick-logo':function(){
    pickFile('image/*',function(f){readImage(f,512,0.86,function(data){
      const c=myChurch();if(!c)return;
      c.logo=data;dbUpdate('churches',c.id,{logo:data});render();toast('Church mark updated');});});
  },
  'clear-logo':function(){const c=myChurch();if(!c)return;c.logo=null;dbUpdate('churches',c.id,{logo:null});render();toast('Back to your emblem');},
  'save-church-profile':function(){
    const c=myChurch();if(!c)return;
    const err={},name=val('chpName'),handle=norm(val('chpHandle'));
    if(!name)err.name='Your church needs a name';
    if(!/^[a-z0-9._]{3,24}$/.test(handle))err.handle='Use 3 to 24 letters, numbers, dots or underscores';
    else if(takenChurchHandles(c.id)[handle])err.handle='@'+handle+' is taken by another church';
    if(!val('chpCity'))err.city='Enter your city';
    state.ui.chpErrors=err;
    if(Object.keys(err).length){render();toast('Please check the highlighted fields');return;}
    const list=function(id,sep){return val(id).split(sep).map(function(x){return x.trim();}).filter(Boolean);};
    const patch={name:name,handle:handle,tagline:val('chpTagline'),about:val('chpAbout'),
      city:val('chpCity'),address:val('chpAddress'),pastorName:val('chpPastor'),
      serviceTimes:list('chpTimes','·'),languages:list('chpLangs',','),ministries:list('chpMinistries',',')};
    Object.assign(c,patch);
    dbUpdate('churches',c.id,patch);
    if(state.session&&state.session.church)Object.assign(state.session.church,patch),saveSession();
    state.ui.chpErrors={};render();toast('Profile saved');
  },
  'lb-step':function(el){
    const s=state.ui.sheet;if(!s||s.kind!=='image')return;
    const p=state.data.posts.find(function(x){return x.id===s.params.id;})||{};
    const n=photosOf(p).length;
    s.params.i=Math.max(0,Math.min((Number(s.params.i)||0)+Number(el.dataset.v),n-1));
    render();
  },
  'react-tab':function(el){state.ui.reactTab=el.dataset.v;render();},
  'mode-believer':function(){
    const s=state.session;if(!s||s.role!=='church')return;
    s.mode='believer';saveSession();
    state.ui.personTab='Posts';go('home');
    toast('Browsing as a believer — your church console is one tap away');
  },
  'mode-admin':function(){
    const s=state.session;if(!s||s.role!=='church')return;
    s.mode='admin';saveSession();go('console');toast('Back in the church console');
  },
  'church-tab':function(el){state.ui.churchTab=el.dataset.v;render();},
  'dir-view':function(){state.ui.dir=state.ui.dir==='map'?'list':'map';render();},
  'dir-search':function(){state.ui.dirFilters.q=val('dirQ');render();},
  'dir-clear':function(){state.ui.dirFilters.q='';state.ui.dirRefocus=true;render();},
  'dir-reset':function(){state.ui.dirFilters=freshFilters();render();},
  /* filter sheet: edits a draft so the result count previews live, applied on "Show" */
  'open-filters':function(){state.ui.draftFilters=JSON.parse(JSON.stringify(state.ui.dirFilters));openSheet('dir-filters');},
  'df-toggle':function(el){const f=state.ui.draftFilters,g=el.dataset.g,v=el.dataset.v,i=f[g].indexOf(v);if(i>-1)f[g].splice(i,1);else f[g].push(v);render();},
  'df-sort':function(el){state.ui.draftFilters.sort=el.dataset.v;render();},
  'df-live':function(){state.ui.draftFilters.live=!state.ui.draftFilters.live;render();},
  'df-following':function(el){state.ui.draftFilters.following=el.dataset.v;render();},
  'df-draft-reset':function(){const q=state.ui.draftFilters.q;state.ui.draftFilters=freshFilters();state.ui.draftFilters.q=q;render();},
  'df-apply':function(){state.ui.dirFilters=state.ui.draftFilters;state.ui.draftFilters=null;closeSheet();},
  'df-remove':function(el){
    const f=state.ui.dirFilters,g=el.dataset.g,v=el.dataset.v;
    if(g==='live')f.live=false;else if(g==='following')f.following='any';
    else{const i=f[g].indexOf(v);if(i>-1)f[g].splice(i,1);}
    render();
  },
  'df-reset':function(){const q=state.ui.dirFilters.q;state.ui.dirFilters=freshFilters();state.ui.dirFilters.q=q;render();},
  rsvp:function(el){
    if(!requireAuth())return;
    const id=el.dataset.id,i=state.local.rsvps.indexOf(id);
    if(i>-1){state.local.rsvps.splice(i,1);bumpCount('events',id,'rsvpCount',-1);toast('RSVP cancelled');}
    else{state.local.rsvps.push(id);bumpCount('events',id,'rsvpCount',1);toast('You\'re going — reminders are set');}
    saveLocal();render();
  },
  comment:async function(el){
    if(!requireAuth())return;
    const box=document.getElementById('cmtBox'),t=box?String(box.value||'').trim():'';
    if(!t){toast('Write something first');return;}
    if(box)box.value='';
    const s=state.session;
    const doc={postId:el.dataset.id,authorId:s.id,authorName:s.name,text:t,amens:0,createdAt:new Date().toISOString()};
    await dbAdd('comments',doc);
    bumpCount('posts',el.dataset.id,'comments',1);
    render();toast('Comment posted');
  },
  'journey-tab':function(el){state.ui.journeyTab=el.dataset.v;render();},
  'open-plan':function(){state.ui.journeyTab='Plan';go('journey');},
  'browse-plans':function(){state.ui.journeyTab='Plan';render();},
  'set-plan':function(el){
    if(!requireAuth())return;
    state.session.planId=el.dataset.id;saveSession();saveProfile();toast('Plan updated');render();
  },
  'mark-read':function(){
    if(!requireAuth())return;
    if(state.local.lastRead&&isToday(state.local.lastRead)){toast('Already read today. See you tomorrow.');return;}
    const last=state.local.lastRead;
    const consecutive=last&&((Date.now()-dt(last).getTime())<48*3600e3);
    state.local.planDay=(state.local.planDay||0)+1;
    state.local.streak=consecutive?(state.local.streak||0)+1:1;
    state.local.lastRead=new Date().toISOString();
    saveLocal();saveProfile();render();toast('Day complete · '+state.local.streak+' day streak');
  },
  'note-verse':function(){state.ui.journeyTab='Journal';closeSheet();go('journey');toast('Add your note below');},
  'add-journal':function(){
    if(!requireAuth())return;
    const t=val('jEntry');if(!t){toast('Write something first');return;}
    state.local.journal.unshift({text:t,date:new Date().toISOString(),answered:false});saveLocal();render();toast('Saved privately');
  },
  'mark-answered':function(el){
    const i=Number(el.dataset.i);state.local.journal[i].answered=true;saveLocal();render();toast('Marked answered — share it if you\'d like');
  },
  testify:function(){toast('Testimony ready to post to your church feed');},
  'add-milestone':function(){if(!requireAuth())return;openSheet('milestone');},
  'ms-type':function(el){state.ui.msType=el.dataset.v;render();},
  'submit-milestone':function(){
    const d=val('msDate')||new Date().toISOString().slice(0,10);
    state.local.milestones.push({title:state.ui.msType||'Baptism',note:val('msNote'),date:new Date(d).toISOString()});
    saveLocal();closeSheet();state.ui.journeyTab='Timeline';go('journey');toast('Added to your light-path');
  },
  'add-family':function(){if(!requireAuth())return;openSheet('family');},
  'fm-type':function(el){state.ui.fmType=el.dataset.v;render();},
  'submit-family':function(){
    const n=val('fmName');if(!n){toast('Add a name');return;}
    state.local.family=(state.local.family||[]).concat([{name:n,type:state.ui.fmType||'Child'}]);
    saveLocal();closeSheet();render();toast(n+' added with parental controls on');
  },
  'family-settings':function(){toast('Parental controls: kids content only, no DMs');},
  'join-group':function(el){toast('Request sent to the '+el.dataset.v+' leader');},
  'chat-mode':function(el){state.ui.chatMode=el.dataset.v;render();},
  'clear-chat':function(){state.ui.chat=[];render();},
  ask:function(el){sendChat(el.dataset.v);},
  'chat-send':function(){const t=val('chatBox');if(!t)return;sendChat(t);},
  'ask-pastor':function(){
    const last=state.ui.chat.filter(function(m){return m.role==='user';}).pop();
    state.local.care=(state.local.care||[]).concat([{q:last?last.text:'A question',date:new Date().toISOString()}]);
    saveLocal();toast('Sent to your pastor\'s care queue');
  },
  theme:function(el){state.theme=el.dataset.v;lsSet('theme',state.theme);render();},
  pref:function(el){const k=el.dataset.k;state.prefs[k]=!state.prefs[k];savePrefs();render();},
  export:function(){
    const data={profile:state.session,activity:state.local,preferences:state.prefs};
    toast('Export ready · '+Math.round(JSON.stringify(data).length/1024*10)/10+' KB of your data');
  },
  'delete-account':function(){
    if(!state.ui.confirmDelete){state.ui.confirmDelete=true;toast('Tap again to permanently delete your account');return;}
    state.session=null;saveSession();
    state.local={follows:[],saved:[],rsvps:[],reacted:{},amened:[],journal:[],planDay:0,streak:0,lastRead:null,milestones:[],care:[],seenMoments:[],notifSeen:null,reminders:{},family:[]};
    saveLocal();state.ui.confirmDelete=false;go('welcome');toast('Account and local data deleted');
  },
  compose:function(el){
    if(state.ui.composeType!==el.dataset.v){clearCompose();state.ui.composeKind='none';
      state.ui.composePhotos=[];state.ui.composeVideo=null;state.ui.composeAudio=null;}state.ui.composeType=el.dataset.v;state.ui.composePhoto=null;state.ui.composePhotoName='';go('console-compose');},
  'b-priority':function(el){state.ui.bPriority=el.dataset.v;render();},
  'b-audience':function(el){state.ui.bAudience=el.dataset.v;render();},
  occasion:function(el){state.ui.occasion=el.dataset.v;render();},
  publish:async function(el){
    const s=state.session;if(!s||s.role!=='church'){toast('Church accounts only');return;}
    const t=el.dataset.v,c=myChurch();
    const photos=(state.ui.composePhotos||[]).slice(0,MAX_PHOTOS);
    const video=state.ui.composeVideo||null, audio=state.ui.composeAudio||null;
    const photo=photos[0]||state.ui.composePhoto||null;
    const carriesMedia=!!(photos.length||video||audio||photo);
    const base={churchId:s.churchId,churchName:(c&&c.name)||(s.church&&s.church.name)||'Our church',
      photo:photo,photos:photos.length?photos:(photo?[photo]:null),video:video,audio:audio,
      scene:carriesMedia?null:(SCENE_FOR_TYPE[t]||null),
      reactions:{amen:0,bless:0,peace:0,love:0,fire:0},comments:0,createdAt:new Date().toISOString()};
    const clearPhoto=function(){
      state.ui.composePhoto=null;state.ui.composePhotoName='';
      state.ui.composePhotos=[];state.ui.composeVideo=null;state.ui.composeAudio=null;state.ui.composeKind='none';
      clearCompose();
    };
    if(t==='event'){
      const title=val('fTitle');if(!title){toast('Give the event a title');return;}
      const d=val('fDate')||new Date().toISOString().slice(0,10),tm=val('fTime')||'18:00';
      const live=document.getElementById('fLive')&&document.getElementById('fLive').checked;
      const ev={churchId:base.churchId,churchName:base.churchName,title:title,description:val('fBody'),
        datetime:new Date(d+'T'+tm).toISOString(),locationType:val('fLoc').indexOf('http')===0?'online':'onsite',
        location:val('fLoc')||'Main sanctuary',isLive:!!live,rsvpCount:0,capacity:Number(val('fCap'))||0,
        photo:photo,scene:photo?null:'stage'};
      const id=await dbAdd('events',ev);
      await dbAdd('posts',Object.assign({},base,{type:'event',title:title,content:val('fBody')||'A new gathering is on the calendar.',eventId:id}));
      clearPhoto();go('console-events');toast('Event published');return;
    }
    let doc=null;
    if(t==='story'){
      const body=val('fBody');
      if(!body&&!carriesMedia){toast('Write your story, or attach a picture');return;}
      doc=Object.assign({},base,{type:'story',content:body,verseRef:val('fVerse')||null});
      await dbAdd('posts',doc);
      clearPhoto();go('console');toast('Story is up for 24 hours');return;
    }else if(t==='broadcast'){
      const body=val('fBody');if(!body){toast('Write your announcement');return;}
      doc=Object.assign({},base,{type:'broadcast',content:body,priority:state.ui.bPriority||'Normal',audience:state.ui.bAudience||'Everyone',scene:null});
    }else if(t==='sermon'){
      const title=val('fTitle');if(!title){toast('Give the sermon a title');return;}
      doc=Object.assign({},base,{type:'sermon',title:title,speaker:val('fSpeaker')||s.name,duration:'38 min',content:val('fBody')||'Listen to this week\'s message.'});
    }else if(t==='poll'){
      const q=val('fBody');if(!q){toast('Write the question');return;}
      doc=Object.assign({},base,{type:'text',content:q+'\n\nOptions: '+(val('fOpt')||'Yes, No')});
    }else if(t==='occasion'){
      const body=val('fBody');if(!body){toast('Share the news');return;}
      doc=Object.assign({},base,{type:'occasion',occasion:state.ui.occasion||'Baptism',content:body});
    }else{
      const body=val('fBody');
      if(!body&&!carriesMedia){toast('Write your post, or attach a picture');return;}
      doc=Object.assign({},base,{type:'text',content:body});
    }
    await dbAdd('posts',doc);
    clearPhoto();go('console');toast('Published to your followers');
  },
  'toggle-live':function(el){
    const e=state.data.events.find(function(x){return x.id===el.dataset.id;});if(!e)return;
    e.isLive=!e.isLive;dbUpdate('events',e.id,{isLive:e.isLive});render();toast(e.isLive?'You are live':'Live ended · replay saved to sermons');
  },
  'approve-member':function(el){toast(el.dataset.v+' approved and added to members');},
  'open-image':function(el){openSheet('image',{id:el.dataset.id,i:Number(el.dataset.i)||0});},
  /* ---------- composer attachments ---------- */
  'cm-kind':function(el){
    const k=el.dataset.v;
    state.ui.composeKind=k;
    if(k!=='photos')state.ui.composePhotos=[];
    if(k!=='video')state.ui.composeVideo=null;
    if(k!=='audio')state.ui.composeAudio=null;
    render();
  },
  'pick-photos':function(){
    const left=MAX_PHOTOS-(state.ui.composePhotos||[]).length;
    if(left<=0){toast('Five pictures is the limit');return;}
    const inp=document.createElement('input');
    inp.type='file';inp.accept='image/*';inp.multiple=true;
    inp.onchange=function(){
      const files=Array.prototype.slice.call(inp.files||[],0,left);
      if(!files.length)return;
      if((inp.files||[]).length>left)toast('Only the first '+left+' were added — five is the limit');
      let pending=files.length;
      files.forEach(function(f){
        readImage(f,1080,0.78,function(data){
          state.ui.composePhotos=(state.ui.composePhotos||[]).concat([data]).slice(0,MAX_PHOTOS);
          if(--pending<=0)render();
        });
      });
    };
    inp.click();
  },
  'drop-photo':function(el){
    const i=Number(el.dataset.i);
    state.ui.composePhotos=(state.ui.composePhotos||[]).filter(function(_,k){return k!==i;});
    render();
  },
  'pick-video':function(){
    pickFile('video/*',function(f){
      readVideo(f,function(v){state.ui.composeVideo=v;render();
        toast(v.session?'Video ready for this session — too large to keep after a reload':'Video attached');});
    });
  },
  'clear-video':function(){state.ui.composeVideo=null;render();},
  'pick-audio':function(){
    pickFile('audio/*',function(f){
      if(f.size>4.2*1024*1024){toast('That audio is over 4 MB — choose a shorter clip');return;}
      const fr=new FileReader();
      fr.onerror=function(){toast('Could not read that file');};
      fr.onload=function(){state.ui.composeAudio={src:fr.result,name:f.name};render();toast('Audio attached');};
      fr.readAsDataURL(f);
    });
  },
  'clear-audio':function(){state.ui.composeAudio=null;render();},
  'pick-photo':function(){const i=document.getElementById('photoInput');if(i)i.click();},
  'clear-photo':function(){state.ui.composePhoto=null;state.ui.composePhotoName='';render();},
  soon:function(el){const v=el.dataset.v;if(SOON[v])go('soon',{v:v,from:state.route});else openSheet('soon',{v:v});},
  'close-sheet':function(){closeSheet();},
  noop:function(){}
};
/* ---------- social sign-in ---------- */
/* Turns a verified provider login into an app session: a returning user goes straight in,
   a new one goes through onboarding with their name already filled in. */
async function completeSocialSignIn(user){
  let role=state.ui.authRole||'believer';
  try{role=sessionStorage.getItem(LS+'authRole')||role;sessionStorage.removeItem(LS+'authRole');}catch(e){}
  state.ui.authRole=role;
  state.ui.authId=user.email||user.uid;
  state.ui.authMeta={provider:user.provider,photo:user.photoURL||null,uid:user.uid,emailVerified:user.emailVerified};
  const label=(SOCIAL[user.provider]||{}).label||'your account';
  const key=accountKey(state.ui.authId);
  const existing=await loadProfile(key);
  if(existing&&existing.name){
    applyProfile(key,existing);saveProfile();
    if(state.session.role==='church')go(state.session.verified?'console':'pending');
    else go('home');
    toast('Welcome back, '+String(existing.name).split(' ')[0]);
    return;
  }
  if(role==='church'){state.ui.onboard={};go('onboard-church');}
  else{
    state.ui.onboard={name:user.name||'',user:suggestHandle(user.name||String(user.email||'').split('@')[0]),
      email:user.email||'',emailLocked:!!(user.email&&user.emailVerified),photo:user.photoURL||null,
      lang:'English',country:'India',dial:'+91'};
    state.ui.obErrors={};state.ui.step=0;go('onboard');
  }
  toast('Signed in with '+label+' — a few details and you\'re in');
}
function authErrorText(e,label){
  const code=(e&&e.code)||'';
  if(code==='auth/popup-closed-by-user'||code==='auth/cancelled-popup-request'||code==='auth/user-cancelled')return '';
  if(code==='auth/account-exists-with-different-credential')return 'This email already signs in another way. Use the button you used before.';
  if(code==='auth/operation-not-allowed')return label+' sign-in isn\'t switched on in Firebase yet';
  if(code==='auth/unauthorized-domain')return 'This web address isn\'t allowed to sign in yet. Add it in Firebase under Authorized domains.';
  if(code==='auth/network-request-failed')return 'No connection. Check your internet and try again.';
  if(code==='auth/user-disabled')return 'This account has been disabled';
  if(code==='auth/too-many-requests')return 'Too many attempts. Wait a minute and try again.';
  return 'Sign-in didn\'t finish'+(code?' ('+code.replace('auth/','')+')':'')+'. Try again.';
}
window.addEventListener('arkauth:ready',function(){if(state.route==='auth')render();});
window.addEventListener('arkauth:signedin',function(ev){if(ev.detail)completeSocialSignIn(ev.detail);});
window.addEventListener('arkauth:error',function(ev){const m=authErrorText(ev.detail,'That provider');if(m)toast(m);});

function shareText(text,path){
  const origin=/^https?:/.test(location.origin)&&location.hostname!=='localhost'&&location.hostname!=='127.0.0.1'?location.origin:'https://believersark.com';
  const url=origin+'/'+(path?'#'+path:'');
  const done=function(){toast('Link copied — share it anywhere');};
  if(navigator.share){navigator.share({title:'believersArk',text:text,url:url}).then(function(){toast('Shared');}).catch(function(){});return;}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text+'\n'+url).then(done,done);return;}
  done();
}
function gptScroll(){const t=document.getElementById('gptThread');if(t)t.scrollTop=t.scrollHeight;window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});}
function sendChat(text){
  if(state.ui.chatBusy)return;
  state.ui.chat.push({role:'user',text:text});
  state.ui.chatBusy=true;render();gptScroll();
  const box=document.getElementById('chatBox');if(box){box.value='';box.focus();}
  setTimeout(function(){
    const a=bibleAnswer(text);
    state.ui.chatBusy=false;
    state.ui.chat.push({role:'ai',text:a.a,verses:a.v,pastoral:!!a.pastoral,offTopic:!!a.offTopic});
    render();gptScroll();
    const b=document.getElementById('chatBox');if(b)b.focus();
  },700+Math.random()*500);
}

/* ---------- events ---------- */
document.addEventListener('click',function(e){
  const sg=e.target.closest('[data-sg]');
  if(sg){e.preventDefault();pickSuggest(Number(sg.dataset.sg));return;}
  if(!e.target.closest('#dirSearch'))hideSuggest();
  if(state.ui.calPop&&!e.target.closest('.cal-btn,#calPop')){state.ui.calPop=false;state.ui.railDay=null;state.ui.railMonth=null;render();}
  const sheetStop=e.target.closest('[data-stop]');
  const closeEl=e.target.closest('[data-act="close-sheet"]');
  if(closeEl&&!sheetStop){closeSheet();return;}
  const goEl=e.target.closest('[data-go]');
  const actEl=e.target.closest('[data-act]');
  if(actEl&&actEl.dataset.act==='close-sheet'&&sheetStop)return;
  if(actEl&&ACTIONS[actEl.dataset.act]){
    if(actEl.dataset.act!=='delete-account')state.ui.confirmDelete=false;
    ACTIONS[actEl.dataset.act](actEl);
    return;
  }
  if(goEl){
    const r=goEl.dataset.go;
    if(r==='auth'){state.ui.authRole=goEl.dataset.role||'believer';state.ui.authId='';go('auth');return;}
    if(r==='church-profile'){state.ui.churchTab='Posts';go('church-profile',{id:goEl.dataset.id,from:state.route});return;}
    if(r==='person-profile'){if(isMe(goEl.dataset.id)){go('me');return;}state.ui.personTab='Posts';go('person-profile',{id:goEl.dataset.id,from:state.route});return;}
    if(r==='notifications'){go('notifications');setTimeout(function(){state.local.notifSeen=new Date().toISOString();saveLocal();},1500);return;}
    if(r==='console-thread'){state.local.threadSeen=state.local.threadSeen||{};state.local.threadSeen[goEl.dataset.id]=new Date().toISOString();saveLocal();go(r,{id:goEl.dataset.id});return;}
    if(r==='community-page'){state.ui.threadSort='Latest';go(r,{id:goEl.dataset.id,from:state.route});return;}
    if(r==='event'||r==='post'||r==='live'){go(r,{id:goEl.dataset.id,from:state.route});return;}
    go(r);
  }
});
document.addEventListener('keydown',function(e){
  const a=document.activeElement,id=a&&a.id;
  /* overlays own the keyboard while open */
  if(state.ui.story){
    if(e.key==='Escape'){e.preventDefault();closeStory();return;}
    if(e.key==='ArrowRight'){e.preventDefault();storyStep(1);return;}
    if(e.key==='ArrowLeft'){e.preventDefault();storyStep(-1);return;}
    if(e.key===' '&&(!a||a.tagName!=='BUTTON')){e.preventDefault();ACTIONS['story-pause']();return;}
  }
  if(state.ui.news&&e.key==='Escape'){e.preventDefault();ACTIONS['close-news']();return;}
  if(id==='dirQ'){
    const box=document.getElementById('dirSuggest'),open=box&&!box.hidden;
    if(e.key==='ArrowDown'){e.preventDefault();if(!open)buildSuggest();moveSuggest(1);return;}
    if(e.key==='ArrowUp'){e.preventDefault();moveSuggest(-1);return;}
    if(e.key==='Escape'){hideSuggest();return;}
    if(e.key==='Enter'){e.preventDefault();if(open&&state.ui.sgIndex>=0)pickSuggest(state.ui.sgIndex);else{state.ui.dirFilters.q=a.value.trim();hideSuggest();render();}return;}
  }
  if(e.key==='Enter'){
    if(id==='chatBox'){const t=a.value.trim();if(t)sendChat(t);}
    if(id==='cmtBox'){const btn=document.querySelector('[data-act="comment"]');if(btn)ACTIONS.comment(btn);}
    if(id==='otpInput')ACTIONS['verify-otp']();
    if(id==='authId')ACTIONS['send-otp']();
    if(id==='obCode'){e.preventDefault();ACTIONS['ob-verify-code']();}
    if(id==='joinCode'){e.preventDefault();ACTIONS['join-church-code']();}
    if(id==='liveBox')ACTIONS['live-send']();
    if(id==='threadBox'&&!e.shiftKey){e.preventDefault();const b=document.querySelector('[data-act="c2c-send"]');if(b)ACTIONS['c2c-send'](b);}
  }
  if(e.key==='Escape'&&state.ui.sheet)closeSheet();
  else if(e.key==='Escape'&&state.ui.calPop){ACTIONS['cal-close']();const b=document.querySelector('.cal-btn');if(b)b.focus();}
});
document.addEventListener('input',function(e){
  const t=e.target;
  if(t.id==='dirQ')buildSuggest();
  if(t.id==='cropZoom'){CROP.zoom=Number(t.value)||1;applyCrop();}
  if(t.id==='obCode'||t.id==='joinCode'){const p=t.selectionStart;t.value=t.value.toUpperCase();try{t.setSelectionRange(p,p);}catch(x){}}
});
document.addEventListener('focusin',function(e){if(e.target.id==='dirQ')buildSuggest();});
document.addEventListener('change',function(e){
  const t=e.target;
  if(t.id==='setLang'){state.prefs.lang=t.value;savePrefs();toast('Language set to '+t.value);}
  if(t.id==='setVis'){state.prefs.visibility=t.value;savePrefs();}
  if(t.id==='photoInput'&&t.files&&t.files[0]){readPhoto(t.files[0]);t.value='';}
});
/* drag to position a photo in the square cropper; a press-and-hold pauses a story */
/* Press and hold the launcher to put BibleGPT away, the way you would rearrange a home
   screen. A plain tap still opens it; the hold cancels that tap. */
const GPT_HOLD={timer:0,fired:false};
function clearGptHold(){if(GPT_HOLD.timer)clearTimeout(GPT_HOLD.timer);GPT_HOLD.timer=0;}
document.addEventListener('pointerdown',function(e){
  const launcher=e.target.closest('.gpt-launcher');
  if(launcher){
    GPT_HOLD.fired=false;
    clearGptHold();
    GPT_HOLD.timer=setTimeout(function(){
      GPT_HOLD.fired=true;
      if(navigator.vibrate)try{navigator.vibrate(12);}catch(err){}
      openSheet('gpt-hide');
    },550);
  }
  const box=e.target.closest('#cropBox');
  if(box){e.preventDefault();box.setPointerCapture(e.pointerId);CROP.drag={x:e.clientX,y:e.clientY,ox:CROP.x,oy:CROP.y};return;}
  if(state.ui.story&&e.target.closest('#storyCard')&&!e.target.closest('button'))STORY.held=true;
});
document.addEventListener('pointermove',function(e){
  if(!CROP.drag)return;
  CROP.x=CROP.drag.ox+(e.clientX-CROP.drag.x);CROP.y=CROP.drag.oy+(e.clientY-CROP.drag.y);applyCrop();
});
['pointerup','pointercancel','pointerleave'].forEach(function(t){document.addEventListener(t,function(){CROP.drag=null;STORY.held=false;clearGptHold();});});
document.addEventListener('wheel',function(e){
  if(!e.target.closest('#cropBox'))return;
  e.preventDefault();CROP.zoom=Math.max(1,Math.min(4,CROP.zoom*(e.deltaY<0?1.08:1/1.08)));applyCrop();
},{passive:false});
window.addEventListener('resize',function(){if(state.ui.sheet&&state.ui.sheet.kind==='crop')applyCrop();placeCalPop();});
window.addEventListener('scroll',placeCalPop,{passive:true});

/* ---------- boot ---------- */
render();
initDB();
setTimeout(function(){
  if(state.route!=='splash')return;
  const s=state.session;
  const link=(location.hash.match(/^#news\/([\w-]+)/)||[])[1];
  if(s&&s.role==='church'&&!believerMode())go(s.verified?'console':'pending');
  else if(s||link)go('home');
  else go('welcome');
  /* a shared newsroom link opens that story straight away, signed in or not */
  if(link&&newsById(link)){state.ui.news=link;state.ui.fx='news';syncOverlay();}
},1750);
