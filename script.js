/* ==========================================================================
   Laila — campaign portfolio script
   Plain JavaScript, no libraries, no network requests.
   Every number is calculated from window.CAMPAIGNS in data.js.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. TEXT (English + Bahasa Indonesia)
     ------------------------------------------------------------------------ */
  var T = {
    en: {
      skip: 'Skip to content',
      sections: 'Sections', close: 'Close', next: 'Next', prev: 'Back', pageOf: '{n} of {total}', pagerLabel: 'Pages',
      nav: { about: 'About me', experience: 'Campaign role', results: 'Overall results', top: 'Top 10 campaigns', months: 'Month by month', bybrand: 'Sales by brand', cases: 'Case studies', anchor: 'Top client', brands: 'Brands', campaigns: 'All campaigns' },
      tb: { about: 'about <em>me</em>', experience: 'campaign <em>role</em>', results: 'overall <em>results</em>', top: 'top 10 <em>campaigns</em>', months: 'month by <em>month</em>', bybrand: 'sales by <em>brand</em>', cases: 'case <em>studies</em>', anchor: 'top <em>client</em>', brands: 'the <em>brands</em>', campaigns: 'every <em>campaign</em>' },
      sideMe: 'About me', sideWork: 'TikTok Go campaigns', sideTags: 'Tags',
      heroHi: 'Hi, I’m <em>{name}.</em>', ctaWork: 'See my campaign results', ctaExp: 'What I do',
      pinCreators: 'creators coordinated', pinVideos: 'videos approved',
      expEyebrow: 'Campaign role', expTitle: 'What I do on <em>every campaign.</em>', expLead: 'How I run TikTok Go Dining campaigns, from merchant brief to approved videos and orders.', current: 'Current',
      contactT: 'Contact', sideTagsHint: 'Select a tag to filter the campaign list.',
      tags: { top: 'Top 10 by sales', full: 'Fully staffed', redeem: 'Redeemed ≥ 90%', new: 'Just launched' },
      tagsLong: { top: 'One of the 10 campaigns with the highest transaction value', full: 'Every targeted creator slot was confirmed', redeem: 'At least 90% of the transaction value was redeemed', new: 'Launched but no confirmed creators yet in this export' },
      
      heroSub: 'From {from} to {to}, I ran {campaigns} TikTok dining campaigns for {brands} brands: {creators} creators confirmed, {posts} posts approved, and {orders} orders worth {sales}.',
      ctaResults: 'See the results', ctaAll: 'Browse all {n} campaigns',
      pin1: 'creators confirmed', pin2: 'posts approved', pin3: 'campaigns for one client', pin4: 'orders, not just views',
      bubbleSales: '{sales} in sales',
      resEyebrow: 'TikTok Go Dining campaigns · February – August 2026', resTitle: 'I turn creator content into <em>orders.</em>',
      resLead: 'Totals for all {live} campaigns I ran from {from} to {to}, February to August 2026.',
      period: 'February – August 2026',
      bigLabel: 'Transaction value', bigSub: '<b>{orders}</b> orders · <b>{redeemed}</b> redeemed ({rate})',
      tCampaigns: 'Campaigns run', tCampaignsSub: '{live} with results · {months} months',
      tBrands: 'Brands', tBrandsSub: 'all in dining',
      tCreators: 'Creators confirmed', tOfTarget: 'of {n} targeted',
      tPosts: 'Posts approved',
      tOrders: 'Orders', tOrdersSub: '{n} redeemed',
      tAov: 'Average order value', tAovSub: 'transaction value ÷ orders',
      tSpc: 'Sales per creator', tSpcSub: 'transaction value ÷ creators',
      tPpc: 'Posts per creator', tPpcSub: 'approved posts ÷ creators',
      metersTitle: 'Delivery against <em>targets</em>', metersSub: 'Campaigns with results only. Targets are the creator and post numbers set when each campaign was created.',
      mCreators: 'Creators confirmed vs target', mPosts: 'Posts approved vs target', mValue: 'Value redeemed vs sold', mOrders: 'Orders redeemed vs placed',
      mOf: '{a} of {b}',
      monthTitle: 'Month by <em>month</em>', monthSub: 'Grouped by the month each campaign was created. The pink column marks the peak.',
      cCampaigns: 'Campaigns launched', cCreators: 'Creators confirmed', cSales: 'Transaction value',
      showTable: 'Show as table', month: 'Month',
      brandTitle: 'Sales by <em>brand</em>', brandSub: '{top} accounts for {share} of all transaction value. Select a brand for its campaigns.',
      topTitle: 'Top 10 campaigns by <em>transaction value</em>', topSub: 'Select a campaign for its full numbers.',
      casesEyebrow: 'Case studies', casesTitle: 'The six campaigns that <em>sold the most.</em>',
      casesLead: 'Each file opens with the full numbers and how the campaign compares with the rest of the portfolio.',
      noRank: 'No. {n}', pCreators: '{n} creators', pPosts: '{n} posts', pOrders: '{n} orders',
      anchorEyebrow: 'Top client', anchorTitle: '{brand}: <em>{n} campaigns</em> in {months} months.',
      anchorLead: '{share} of all transaction value came from this one client, across {creators} creators and {posts} approved posts. Their best campaign, {best}, reached {bestSales}.',
      anchorChart: 'Transaction value by month', anchorList: 'Every campaign, by launch month',
      brandsEyebrow: 'Brands', brandsTitle: '{n} brands in <em>dining.</em>', brandsLead: 'Sorted by transaction value. Open a folder for every campaign run with that brand.',
      brandMeta: '{n} campaigns · {sales}', brandMeta1: '1 campaign · {sales}',
      allEyebrow: 'All campaigns', allTitle: 'The full list, <em>all {n}.</em>', allLead: 'Search, filter and sort. Select a campaign for its details.',
      fSearch: 'Search', fSearchPh: 'Campaign or brand', fBrand: 'Brand', fAllBrands: 'All brands', fMonth: 'Launch month', fAllMonths: 'All months', fTag: 'Tag', fAllTags: 'All tags', fSort: 'Sort by', fReset: 'Clear filters',
      showing: 'Showing <b>{n}</b> campaigns{sales} · <b>{creators}</b> creators · <b>{posts}</b> posts · <b>{orders}</b> orders',
      noMatch: 'No campaigns match these filters.',
      colLaunched: 'Launched', colCampaign: 'Campaign', colCreators: 'Creators', colPosts: 'Posts', colSales: 'Transaction value', colRedeemed: 'Redeemed', colOrders: 'Orders', colAov: 'Avg order', total: 'Total', salesPart: ' · <b>{v}</b> transaction value',
      sortDesc: 'highest first', sortAsc: 'lowest first',
      aboutEyebrow: 'About', aboutTitle: 'Hi, I’m <em>{name}.</em>',
      draft: 'Draft: work history, education details and contact links will be added from my CV.',
      defsTitle: 'How to read <em>these numbers</em>',
      defs: [
        ['Transaction value', 'The value of orders placed through a campaign (“Transaction amount” in the export), in Rupiah.'],
        ['Redeemed', 'The part of the transaction value that was redeemed (“Redemption amount”).'],
        ['Orders', 'Orders placed through a campaign; “redeemed” counts the ones that were redeemed.'],
        ['Creators confirmed', 'Creators who confirmed they would join, against the target set for the campaign.'],
        ['Posts approved', 'Creator posts that were approved, against the target number of posts.'],
        ['Average order value', 'Transaction value divided by orders.'],
        ['Sales per creator', 'Transaction value divided by confirmed creators.'],
        ['Launch month', 'The month the campaign plan was created in the platform.']
      ],
      source: 'Source: campaign platform export, {n} campaigns created {from} to {to}. Plan and merchant IDs are not shown.',
      // detail sheet
      launchedOn: 'launched {date}',
      dSales: 'Transaction value', dRedeemed: 'Redeemed value', dOrders: 'Orders', dCreators: 'Creators confirmed', dPosts: 'Posts approved', dAov: 'Average order value', dSpc: 'Sales per creator', dPpc: 'Posts per creator',
      dRateOf: '{rate} of value', dRedOrders: '{n} redeemed', dOfTarget: '{a} of {b} target ({p})',
      whatShows: 'What the numbers <em>show</em>',
      fRank: 'Ranked #{rank} of {live} campaigns by transaction value.',
      fFill: '{c} of {t} target creators confirmed ({p}).',
      fPosts: '{p} of {t} target posts approved ({pp}), about {ppc} posts per creator.',
      fSpcUp: 'Sales per creator of {spc}, {x}× the portfolio average.',
      fSpcDown: 'Sales per creator of {spc}, against a portfolio average of {avg}.',
      fAovUp: 'Average order of {aov}, {x}× the portfolio average.',
      fAovDown: 'Average order of {aov}, against a portfolio average of {avg}.',
      fRed: '{rate} of the transaction value was redeemed.',
      fBrand: 'One of {n} campaigns for {brand}; it brought {share} of that brand’s transaction value.',
      fOnly: 'The only campaign for {brand} in this period.',
      fNew: 'Just launched: no confirmed creators or sales in this export yet.',
      fNoSales: 'No transactions recorded yet in this export.',
      bCampaigns: 'Campaigns', bShare: 'Share of all sales', bList: 'Campaigns for this brand',
      tipCampaigns: '{n} campaigns', tipCreators: '{n} creators', tipSales: '{v}'
    },
    id: {
      skip: 'Langsung ke isi',
      sections: 'Bagian', close: 'Tutup', next: 'Lanjut', prev: 'Kembali', pageOf: '{n} dari {total}', pagerLabel: 'Halaman',
      nav: { about: 'Tentang aku', experience: 'Peran di campaign', results: 'Hasil keseluruhan', top: '10 campaign teratas', months: 'Bulan per bulan', bybrand: 'Penjualan per brand', cases: 'Studi kasus', anchor: 'Klien utama', brands: 'Brand', campaigns: 'Semua campaign' },
      tb: { about: 'tentang <em>aku</em>', experience: 'peran di <em>campaign</em>', results: 'hasil <em>keseluruhan</em>', top: '10 campaign <em>teratas</em>', months: 'bulan per <em>bulan</em>', bybrand: 'penjualan per <em>brand</em>', cases: 'studi <em>kasus</em>', anchor: 'klien <em>utama</em>', brands: 'daftar <em>brand</em>', campaigns: 'semua <em>campaign</em>' },
      sideMe: 'Tentang aku', sideWork: 'Campaign TikTok Go', sideTags: 'Tag',
      heroHi: 'Halo, aku <em>{name}.</em>', ctaWork: 'Lihat hasil campaign-ku', ctaExp: 'Yang aku kerjakan',
      pinCreators: 'creator dikoordinasikan', pinVideos: 'video disetujui',
      expEyebrow: 'Peran di campaign', expTitle: 'Yang aku kerjakan di <em>setiap campaign.</em>', expLead: 'Cara aku menjalankan campaign TikTok Go Dining, dari brief merchant sampai video disetujui dan pesanan masuk.', current: 'Sekarang',
      contactT: 'Kontak', sideTagsHint: 'Pilih tag untuk menyaring daftar campaign.',
      tags: { top: '10 besar penjualan', full: 'Creator terpenuhi', redeem: 'Redeem ≥ 90%', new: 'Baru diluncurkan' },
      tagsLong: { top: 'Salah satu dari 10 campaign dengan nilai transaksi tertinggi', full: 'Semua slot creator yang ditargetkan terkonfirmasi', redeem: 'Minimal 90% nilai transaksi sudah di-redeem', new: 'Sudah diluncurkan tapi belum ada creator terkonfirmasi di data ini' },
      
      heroSub: 'Dari {from} sampai {to}, aku menjalankan {campaigns} campaign kuliner TikTok untuk {brands} brand: {creators} creator terkonfirmasi, {posts} post disetujui, dan {orders} pesanan senilai {sales}.',
      ctaResults: 'Lihat hasilnya', ctaAll: 'Lihat semua {n} campaign',
      pin1: 'creator terkonfirmasi', pin2: 'post disetujui', pin3: 'campaign untuk satu klien', pin4: 'pesanan, bukan cuma views',
      bubbleSales: '{sales} penjualan',
      resEyebrow: 'Campaign TikTok Go Dining · Februari – Agustus 2026', resTitle: 'Aku mengubah konten creator jadi <em>pesanan.</em>',
      resLead: 'Total dari semua {live} campaign yang aku jalankan dari {from} sampai {to}, Februari sampai Agustus 2026.',
      period: 'Februari – Agustus 2026',
      bigLabel: 'Nilai transaksi', bigSub: '<b>{orders}</b> pesanan · <b>{redeemed}</b> di-redeem ({rate})',
      tCampaigns: 'Campaign dijalankan', tCampaignsSub: '{live} punya hasil · {months} bulan',
      tBrands: 'Brand', tBrandsSub: 'semuanya kuliner',
      tCreators: 'Creator terkonfirmasi', tOfTarget: 'dari target {n}',
      tPosts: 'Post disetujui',
      tOrders: 'Pesanan', tOrdersSub: '{n} di-redeem',
      tAov: 'Rata-rata nilai pesanan', tAovSub: 'nilai transaksi ÷ pesanan',
      tSpc: 'Penjualan per creator', tSpcSub: 'nilai transaksi ÷ creator',
      tPpc: 'Post per creator', tPpcSub: 'post disetujui ÷ creator',
      metersTitle: 'Pencapaian dibanding <em>target</em>', metersSub: 'Hanya campaign yang sudah punya hasil. Target adalah jumlah creator dan post yang ditetapkan saat campaign dibuat.',
      mCreators: 'Creator terkonfirmasi vs target', mPosts: 'Post disetujui vs target', mValue: 'Nilai di-redeem vs terjual', mOrders: 'Pesanan di-redeem vs masuk',
      mOf: '{a} dari {b}',
      monthTitle: 'Bulan per <em>bulan</em>', monthSub: 'Dikelompokkan berdasarkan bulan campaign dibuat. Kolom pink menandai puncaknya.',
      cCampaigns: 'Campaign diluncurkan', cCreators: 'Creator terkonfirmasi', cSales: 'Nilai transaksi',
      showTable: 'Tampilkan sebagai tabel', month: 'Bulan',
      brandTitle: 'Penjualan per <em>brand</em>', brandSub: '{top} menyumbang {share} dari seluruh nilai transaksi. Pilih brand untuk melihat campaign-nya.',
      topTitle: '10 campaign teratas berdasarkan <em>nilai transaksi</em>', topSub: 'Pilih campaign untuk melihat angka lengkapnya.',
      casesEyebrow: 'Studi kasus', casesTitle: 'Enam campaign dengan <em>penjualan tertinggi.</em>',
      casesLead: 'Setiap file berisi angka lengkap dan perbandingannya dengan campaign lain di portfolio ini.',
      noRank: 'No. {n}', pCreators: '{n} creator', pPosts: '{n} post', pOrders: '{n} pesanan',
      anchorEyebrow: 'Klien utama', anchorTitle: '{brand}: <em>{n} campaign</em> dalam {months} bulan.',
      anchorLead: '{share} dari seluruh nilai transaksi datang dari klien ini, dengan {creators} creator dan {posts} post disetujui. Campaign terbaiknya, {best}, mencapai {bestSales}.',
      anchorChart: 'Nilai transaksi per bulan', anchorList: 'Semua campaign, per bulan peluncuran',
      brandsEyebrow: 'Brand', brandsTitle: '{n} brand <em>kuliner.</em>', brandsLead: 'Diurutkan dari nilai transaksi tertinggi. Buka folder untuk melihat semua campaign brand tersebut.',
      brandMeta: '{n} campaign · {sales}', brandMeta1: '1 campaign · {sales}',
      allEyebrow: 'Semua campaign', allTitle: 'Daftar lengkap, <em>semua {n}.</em>', allLead: 'Cari, saring, dan urutkan. Pilih campaign untuk melihat detailnya.',
      fSearch: 'Cari', fSearchPh: 'Campaign atau brand', fBrand: 'Brand', fAllBrands: 'Semua brand', fMonth: 'Bulan peluncuran', fAllMonths: 'Semua bulan', fTag: 'Tag', fAllTags: 'Semua tag', fSort: 'Urutkan', fReset: 'Hapus filter',
      showing: 'Menampilkan <b>{n}</b> campaign{sales} · <b>{creators}</b> creator · <b>{posts}</b> post · <b>{orders}</b> pesanan',
      noMatch: 'Tidak ada campaign yang cocok dengan filter ini.',
      colLaunched: 'Diluncurkan', colCampaign: 'Campaign', colCreators: 'Creator', colPosts: 'Post', colSales: 'Nilai transaksi', colRedeemed: 'Di-redeem', colOrders: 'Pesanan', colAov: 'Rata-rata', total: 'Total', salesPart: ' · <b>{v}</b> nilai transaksi',
      sortDesc: 'tertinggi dulu', sortAsc: 'terendah dulu',
      aboutEyebrow: 'Tentang', aboutTitle: 'Halo, aku <em>{name}.</em>',
      draft: 'Draf: riwayat kerja, detail pendidikan, dan kontak akan ditambahkan dari CV.',
      defsTitle: 'Cara membaca <em>angka ini</em>',
      defs: [
        ['Nilai transaksi', 'Nilai pesanan yang masuk lewat campaign (“Transaction amount” di data), dalam Rupiah.'],
        ['Di-redeem', 'Bagian dari nilai transaksi yang sudah di-redeem (“Redemption amount”).'],
        ['Pesanan', 'Pesanan yang masuk lewat campaign; “di-redeem” menghitung yang sudah di-redeem.'],
        ['Creator terkonfirmasi', 'Creator yang sudah konfirmasi ikut, dibanding target campaign.'],
        ['Post disetujui', 'Post creator yang sudah disetujui, dibanding target jumlah post.'],
        ['Rata-rata nilai pesanan', 'Nilai transaksi dibagi jumlah pesanan.'],
        ['Penjualan per creator', 'Nilai transaksi dibagi jumlah creator terkonfirmasi.'],
        ['Bulan peluncuran', 'Bulan saat campaign dibuat di platform.']
      ],
      source: 'Sumber: data ekspor platform campaign, {n} campaign dibuat {from} sampai {to}. Plan ID dan merchant ID tidak ditampilkan.',
      launchedOn: 'diluncurkan {date}',
      dSales: 'Nilai transaksi', dRedeemed: 'Nilai di-redeem', dOrders: 'Pesanan', dCreators: 'Creator terkonfirmasi', dPosts: 'Post disetujui', dAov: 'Rata-rata nilai pesanan', dSpc: 'Penjualan per creator', dPpc: 'Post per creator',
      dRateOf: '{rate} dari nilai', dRedOrders: '{n} di-redeem', dOfTarget: '{a} dari target {b} ({p})',
      whatShows: 'Yang ditunjukkan <em>angka ini</em>',
      fRank: 'Peringkat #{rank} dari {live} campaign berdasarkan nilai transaksi.',
      fFill: '{c} dari target {t} creator terkonfirmasi ({p}).',
      fPosts: '{p} dari target {t} post disetujui ({pp}), sekitar {ppc} post per creator.',
      fSpcUp: 'Penjualan per creator {spc}, {x}× rata-rata portfolio.',
      fSpcDown: 'Penjualan per creator {spc}, dibanding rata-rata portfolio {avg}.',
      fAovUp: 'Rata-rata pesanan {aov}, {x}× rata-rata portfolio.',
      fAovDown: 'Rata-rata pesanan {aov}, dibanding rata-rata portfolio {avg}.',
      fRed: '{rate} dari nilai transaksi sudah di-redeem.',
      fBrand: 'Satu dari {n} campaign untuk {brand}; menyumbang {share} dari nilai transaksi brand tersebut.',
      fOnly: 'Satu-satunya campaign untuk {brand} di periode ini.',
      fNew: 'Baru diluncurkan: belum ada creator terkonfirmasi atau penjualan di data ini.',
      fNoSales: 'Belum ada transaksi tercatat di data ini.',
      bCampaigns: 'Campaign', bShare: 'Porsi dari total penjualan', bList: 'Campaign untuk brand ini',
      tipCampaigns: '{n} campaign', tipCreators: '{n} creator', tipSales: '{v}'
    }
  };

  /* ------------------------------------------------------------------------
     2. STATE + FORMATTING
     ------------------------------------------------------------------------ */
  var lang = 'en';
  try { var saved = localStorage.getItem('pf-lang'); if (saved === 'en' || saved === 'id') lang = saved; } catch (e) { /* storage blocked */ }
  function L() { return T[lang]; }
  function loc() { return lang === 'id' ? 'id-ID' : 'en-US'; }
  function t(str, v) { return String(str).replace(/\{(\w+)\}/g, function (m, k) { return v && v[k] != null ? v[k] : m; }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  function nf(v, d) { return new Intl.NumberFormat(loc(), { maximumFractionDigits: d == null ? 0 : d, minimumFractionDigits: 0 }).format(v); }
  function int(v) { return nf(Math.round(v)); }
  function rp(v) { return 'Rp ' + nf(Math.round(v)); }
  // Every amount is shown, however small (set a minimum here to hide small figures).
  var MIN_RP = 0, MIN_AVG = 0;
  function big(v) { return v != null && v >= MIN_RP; }
  function bigAvg(v) { return v != null && v >= MIN_AVG; }
  function money(v, f) { return big(v) ? (f || rp)(v) : '—'; }
  function rpC(v) {
    var a = Math.abs(v);
    if (a >= 1e6) { var x = v / 1e6; return 'Rp ' + nf(x, x >= 100 ? 0 : 1) + (lang === 'id' ? ' jt' : 'M'); }
    if (a >= 1e3) return 'Rp ' + nf(v / 1e3, 0) + (lang === 'id' ? ' rb' : 'K');
    return 'Rp ' + nf(v, 0);
  }
  function pct(v, d) { return v == null || !isFinite(v) ? '—' : new Intl.NumberFormat(loc(), { style: 'percent', maximumFractionDigits: d == null ? 0 : d }).format(v); }
  function ratio(v) { return nf(v, 1); }
  function dateObj(iso) { var p = iso.split('-'); return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2] || 1)); }
  function fmtDate(iso) { return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(dateObj(iso)); }
  function fmtMonth(key, long) { return new Intl.DateTimeFormat(loc(), { month: long ? 'long' : 'short', year: long ? 'numeric' : undefined }).format(dateObj(key + '-01')); }
  function fmtMonthYear(key) { return new Intl.DateTimeFormat(loc(), { month: 'long', year: 'numeric' }).format(dateObj(key + '-01')); }

  /* ------------------------------------------------------------------------
     3. DATA MODEL (derived once)
     ------------------------------------------------------------------------ */
  var RAW = (window.CAMPAIGNS || []).slice();
  var P = window.PROFILE || { name: '', responsibilities: { en: [], id: [] }, education: [], experience: [], contact: [] };

  var C = RAW.map(function (c, i) {
    var o = {};
    Object.keys(c).forEach(function (k) { o[k] = c[k]; });
    o.idx = i;
    o.month = c.launched.slice(0, 7);
    o.live = c.creators > 0;
    o.creatorFill = c.targetCreators ? c.creators / c.targetCreators : null;
    o.postFill = c.targetPosts ? c.posts / c.targetPosts : null;
    o.redRate = c.sales ? c.redeemed / c.sales : null;
    o.orderRed = c.orders ? c.redeemedOrders / c.orders : null;
    o.aov = c.orders ? c.sales / c.orders : null;
    o.spc = c.creators ? c.sales / c.creators : null;
    o.ppc = c.creators ? c.posts / c.creators : null;
    return o;
  });
  function sum(arr, k) { return arr.reduce(function (a, c) { return a + (c[k] || 0); }, 0); }
  var LIVE = C.filter(function (c) { return c.live; });
  var byRank = LIVE.slice().sort(function (a, b) { return b.sales - a.sales; });
  byRank.forEach(function (c, i) { c.rank = i + 1; });
  C.forEach(function (c) {
    c.tags = [];
    if (c.rank && c.rank <= 10) c.tags.push('top');
    if (c.live && c.targetCreators && c.creators >= c.targetCreators) c.tags.push('full');
    if (c.redRate != null && c.redRate >= 0.9) c.tags.push('redeem');
    if (!c.live) c.tags.push('new');
  });

  var TOT = {
    campaigns: C.length, live: LIVE.length,
    creators: sum(LIVE, 'creators'), targetCreators: sum(LIVE, 'targetCreators'),
    posts: sum(LIVE, 'posts'), targetPosts: sum(LIVE, 'targetPosts'),
    sales: sum(C, 'sales'), redeemed: sum(C, 'redeemed'),
    orders: sum(C, 'orders'), redeemedOrders: sum(C, 'redeemedOrders')
  };
  TOT.aov = TOT.orders ? TOT.sales / TOT.orders : 0;
  TOT.spc = TOT.creators ? TOT.sales / TOT.creators : 0;
  TOT.ppc = TOT.creators ? TOT.posts / TOT.creators : 0;

  var dates = C.map(function (c) { return c.launched; }).sort();
  var FIRST = dates[0], LAST = dates[dates.length - 1];
  var liveDates = LIVE.map(function (c) { return c.launched; }).sort();
  var LIVE_LAST = liveDates[liveDates.length - 1];
  var NOT_LIVE = C.filter(function (c) { return !c.live; });

  // months, including empty ones, from first to last
  var MONTHS = [];
  (function () {
    var d = dateObj(FIRST.slice(0, 7) + '-01'), end = dateObj(LAST.slice(0, 7) + '-01');
    while (d <= end) { MONTHS.push(d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0')); d = new Date(d.getFullYear(), d.getMonth() + 1, 1); }
  })();
  var BY_MONTH = MONTHS.map(function (m) {
    var cs = C.filter(function (c) { return c.month === m; });
    return { month: m, campaigns: cs.length, creators: sum(cs, 'creators'), posts: sum(cs, 'posts'), sales: sum(cs, 'sales'), orders: sum(cs, 'orders') };
  });

  var BRANDS = (function () {
    var map = {};
    C.forEach(function (c) {
      var b = map[c.brand] || (map[c.brand] = { name: c.brand, list: [] });
      b.list.push(c);
    });
    return Object.keys(map).map(function (k) {
      var b = map[k];
      b.campaigns = b.list.length;
      b.sales = sum(b.list, 'sales'); b.redeemed = sum(b.list, 'redeemed');
      b.creators = sum(b.list, 'creators'); b.posts = sum(b.list, 'posts');
      b.orders = sum(b.list, 'orders'); b.redeemedOrders = sum(b.list, 'redeemedOrders');
      b.share = TOT.sales ? b.sales / TOT.sales : 0;
      b.months = b.list.map(function (c) { return c.month; }).filter(function (m, i, a) { return a.indexOf(m) === i; }).sort();
      b.list.sort(function (x, y) { return x.launched < y.launched ? 1 : -1; });
      return b;
    }).sort(function (a, b) { return b.sales - a.sales || b.campaigns - a.campaigns; });
  })();
  function brandOf(name) { for (var i = 0; i < BRANDS.length; i++) if (BRANDS[i].name === name) return BRANDS[i]; return null; }
  var ANCHOR = BRANDS.slice().sort(function (a, b) { return b.campaigns - a.campaigns || b.sales - a.sales; })[0];
  var CASES = byRank.slice(0, 6);

  /* ------------------------------------------------------------------------
     4. SMALL PIECES
     ------------------------------------------------------------------------ */
  var ICON = {
    about: '<circle cx="8" cy="5.5" r="2.5"/><path d="M3 14c.6-3 2.6-4.5 5-4.5s4.4 1.5 5 4.5"/>',
    experience: '<rect x="2" y="5" width="12" height="8.5" rx="1.5"/><path d="M6 5V3.5h4V5M2 9h12"/>',
    background: '<path d="M1.5 6 8 3l6.5 3L8 9z"/><path d="M4.5 7.5v3c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5v-3"/>',
    results: '<path d="M2.5 13.5h11"/><path d="M4.5 11V7.5M8 11V4M11.5 11V6"/>',
    top: '<path d="M2.5 4h11M2.5 8h7.5M2.5 12h4.5"/>',
    months: '<rect x="2" y="3.5" width="12" height="10.5" rx="1.5"/><path d="M2 7h12M5.5 2v3M10.5 2v3"/>',
    bybrand: '<path d="M2.5 13.5h11"/><path d="M3.5 4h9M3.5 7.5h6M3.5 11h3.5"/>',
    cases: '<path d="M4 2h5.5L12.5 5v9H4z"/><path d="M9.5 2v3h3"/>',
    anchor: '<path d="m8 2.2 1.8 3.7 4 .6-2.9 2.8.7 4L8 11.4l-3.6 1.9.7-4L2.2 6.5l4-.6z"/>',
    brands: '<path d="M2 4.5a1.5 1.5 0 0 1 1.5-1.5h3l1.5 1.5h4.5A1.5 1.5 0 0 1 14 6v5.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5z"/>',
    campaigns: '<path d="M5.5 4h8M5.5 8h8M5.5 12h8"/><circle cx="2.8" cy="4" r=".6"/><circle cx="2.8" cy="8" r=".6"/><circle cx="2.8" cy="12" r=".6"/>',
  };
  function icon(n) { return '<svg viewBox="0 0 16 16" aria-hidden="true">' + (ICON[n] || '') + '</svg>'; }
  var FOLDER = '<svg class="folder-svg" viewBox="0 0 120 94" aria-hidden="true" focusable="false"><g filter="url(#paper)">' +
    '<path class="f-tab" d="M2 14a9 9 0 0 1 9-9h28a9 9 0 0 1 6.4 2.6L51 13h58a9 9 0 0 1 9 9v10H2z"/>' +
    '<rect class="f-body" x="2" y="19" width="116" height="73" rx="9"/><rect class="f-shine" x="2" y="19" width="116" height="5" rx="2.5"/></g></svg>';
  var BRAND_LOGOS = window.BRAND_LOGOS || {};
  var CAMPAIGN_LOGOS = window.CAMPAIGN_LOGOS || [];
  var GROUP_LOGOS = window.GROUP_LOGOS || {};
  function initials(name) {
    var clean = name.replace(/^BOGA:\s*/i, '').replace(/[^\p{L}\p{N}\s']/gu, ' ').trim().split(/\s+/);
    return ((clean[0] || '')[0] || '').toUpperCase() + ((clean[1] || '')[0] || '').toUpperCase();
  }
  function logoImg(src, alt, size, fallbackName) {
    var cls = 'logo' + (size ? ' logo-' + size : '');
    if (src) return '<span class="' + cls + '"><img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async"></span>';
    return '<span class="' + cls + ' logo-initials" aria-hidden="true">' + esc(initials(fallbackName || alt)) + '</span>';
  }
  function logo(brand, size) { return logoImg(BRAND_LOGOS[brand], brand + ' logo', size, brand); }
  function campLogoSrc(c) {
    var n = c.name.toLowerCase();
    for (var i = 0; i < CAMPAIGN_LOGOS.length; i++) if (n.indexOf(CAMPAIGN_LOGOS[i][0]) > -1) return CAMPAIGN_LOGOS[i][1];
    return BRAND_LOGOS[c.brand];
  }
  function campLogo(c, size) { return logoImg(campLogoSrc(c), c.name + ' logo', size, c.brand); }
  function dot(k) { return '<i class="dot dot-' + k + '" aria-hidden="true"></i>'; }
  function tag(k) { return '<i class="tag tag-' + k + '" aria-hidden="true"></i>'; }
  function tagList(c) {
    if (!c.tags.length) return '';
    return '<span class="tags">' + c.tags.map(function (k) { return '<i class="tag tag-' + k + '" title="' + esc(L().tags[k]) + '"></i>'; }).join('') + '<span class="sr">' + esc(c.tags.map(function (k) { return L().tags[k]; }).join(', ')) + '</span></span>';
  }
  function usedTags() { return ['top', 'full', 'redeem', 'new'].filter(function (k) { return C.some(function (c) { return c.tags.indexOf(k) > -1; }); }); }
  var curSection = 'about';
  var SEC_ME = ['about', 'experience'];
  var SEC_WORK = ['brands', 'cases', 'top', 'months', 'bybrand', 'results', 'anchor', 'campaigns'];
  var SECTIONS = SEC_ME.concat(SEC_WORK);

  /* ------------------------------------------------------------------------
     5. CHARTS (hand-drawn SVG, one axis, one hue + one accent)
     ------------------------------------------------------------------------ */
  function niceStep(max, count) {
    if (max <= 0) return 1;
    var raw = max / count, p = Math.pow(10, Math.floor(Math.log10(raw))), n = raw / p;
    var s = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
    return s * p;
  }
  function roundTop(x, y, w, h, r) {
    r = Math.min(r, w / 2, h);
    if (h <= 0) return '';
    return 'M' + x + ',' + (y + h) + 'V' + (y + r) + 'Q' + x + ',' + y + ' ' + (x + r) + ',' + y + 'H' + (x + w - r) + 'Q' + (x + w) + ',' + y + ' ' + (x + w) + ',' + (y + r) + 'V' + (y + h) + 'Z';
  }
  // rows: [{label, long, value, tipTitle, tipSub}]
  function columnChart(rows, fmtTick, ariaLabel) {
    var W = 340, H = 196, pl = 46, pr = 6, pt = 22, pb = 24;
    var iw = W - pl - pr, ih = H - pt - pb;
    var max = Math.max.apply(null, rows.map(function (r) { return r.value; }).concat([0]));
    var step = niceStep(max, 3), top = Math.max(step, Math.ceil(max / step) * step);
    var slot = iw / rows.length, bw = Math.min(24, slot * 0.56);
    var peak = rows.reduce(function (b, r, i) { return r.value > rows[b].value ? i : b; }, 0);
    var y = function (v) { return pt + ih - (v / top) * ih; };
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(ariaLabel) + '">';
    for (var v = 0; v <= top + 1e-9; v += step) {
      var yy = y(v).toFixed(1);
      s += '<line class="' + (v === 0 ? 'c-base' : 'c-grid') + '" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + yy + '" y2="' + yy + '"/>';
      s += '<text x="' + (pl - 6) + '" y="' + (Number(yy) + 3.5) + '" text-anchor="end">' + esc(fmtTick(v)) + '</text>';
    }
    rows.forEach(function (r, i) {
      var cx = pl + slot * i + slot / 2, x = cx - bw / 2, h = (r.value / top) * ih;
      s += '<text x="' + cx.toFixed(1) + '" y="' + (H - 6) + '" text-anchor="middle">' + esc(r.label) + '</text>';
      if (h > 0) s += '<path class="bar' + (i === peak ? ' hl' : '') + '" d="' + roundTop(x, pt + ih - h, bw, h, 4) + '"/>';
      s += '<rect class="bar-hit" x="' + (pl + slot * i).toFixed(1) + '" y="' + pt + '" width="' + slot.toFixed(1) + '" height="' + ih + '" tabindex="0" role="img" aria-label="' + esc(r.long + ': ' + r.tipTitle) + '" data-tip-title="' + esc(r.tipTitle) + '" data-tip-sub="' + esc(r.tipSub) + '"/>';
      if (i === peak && r.value > 0) s += '<text class="v-label" x="' + cx.toFixed(1) + '" y="' + (pt + ih - h - 6).toFixed(1) + '" text-anchor="middle">' + esc(r.peakLabel || r.tipTitle) + '</text>';
    });
    return s + '</svg>';
  }
  function tickRp(v) { return v === 0 ? '0' : rpC(v).replace('Rp ', ''); }
  function tickInt(v) { return int(v); }

  // Horizontal bars as HTML (name · bar · value at the tip)
  function hbars(items, hlIndex) {
    var max = Math.max.apply(null, items.map(function (i) { return i.value; }).concat([1]));
    return '<div class="hbars">' + items.map(function (it, i) {
      var w = it.value > 0 ? Math.max(0.4, it.value / max * 100) : 0;
      var tagName = it.action ? 'button' : 'div';
      return '<' + tagName + (it.action ? ' type="button" data-action="' + it.action + '" data-key="' + esc(it.key) + '"' : '') + ' class="hbar' + (i === hlIndex ? ' hl' : '') + '">' +
        '<span class="h-name">' + (it.logoHtml || '') + '<span>' + esc(it.name) + (it.sub ? '<small>' + esc(it.sub) + '</small>' : '') + '</span></span>' +
        '<span class="h-track" aria-hidden="true">' + (w > 0 ? '<span class="h-fill" style="width:' + w.toFixed(2) + '%"></span>' : '') + '</span>' +
        '<span class="h-val">' + esc(it.display) + (it.small ? '<small>' + esc(it.small) + '</small>' : '') + '</span>' +
        '</' + tagName + '>';
    }).join('') + '</div>';
  }

  /* ------------------------------------------------------------------------
     6. SECTIONS
     ------------------------------------------------------------------------ */
  function secHead(eyebrow, title, lead, id) {
    return '<div class="sec-head"><span class="eyebrow">' + esc(eyebrow) + '</span><h2' + (id ? ' id="' + id + '"' : '') + '>' + title + '</h2>' + (lead ? '<p>' + lead + '</p>' : '') + '</div>';
  }
  function tile(label, value, sub) {
    return '<div class="tile"><span class="t-label">' + esc(label) + '</span><span class="t-value">' + esc(value) + '</span>' + (sub ? '<span class="t-sub">' + esc(sub) + '</span>' : '') + '</div>';
  }

  function viewAboutMe() {
    var l = L();
    var contacts = (P.contact || []).map(function (c) {
      var ok = c.href && /^(https?:|mailto:)/.test(c.href);
      return ok ? '<a class="btn" href="' + esc(c.href) + '"' + (/^https?:/.test(c.href) ? ' target="_blank" rel="noopener"' : '') + '>' + esc(c.label) + ' <span class="c-val">' + esc(c.value) + '</span></a>'
        : '<span class="btn">' + esc(c.label) + ' ' + esc(c.value) + '</span>';
    }).join('');
    return '<section id="about" aria-labelledby="h-about" class="hero">' +
      '<div class="hero-copy">' +
        '<div class="hero-name"><b>' + esc(P.fullName || P.name) + '</b><span>' + esc(P.headline ? P.headline[lang] : '') + '</span></div>' +
        '<span class="period">' + dot('pink') + esc(P.role ? P.role[lang] : '') + '</span>' +
        '<h1 class="hero-title" id="h-about">' + t(l.heroHi, { name: esc(P.name) }) + '</h1>' +
        '<p class="hero-sub">' + esc(P.summary ? P.summary[lang] : '') + '</p>' +
        '<div class="hero-actions"><a class="cta-bubble" href="#brands" data-nav="brands">' + esc(l.ctaWork) + ' →</a>' +
        '<a class="btn" href="#experience" data-nav="experience">' + esc(l.ctaExp) + '</a></div>' +
        (contacts ? '<div class="contact-row" aria-label="' + esc(l.contactT) + '">' + contacts + '</div>' : '') +
      '</div>' +
      '<div class="board" aria-hidden="true">' +
        '<div class="pin pin-1">' + FOLDER + '<p>' + dot('blue') + '<span><b>' + int(TOT.creators) + '</b> ' + esc(l.pinCreators) + '</span></p></div>' +
        '<div class="pin pin-2 pink">' + FOLDER + '<p>' + dot('pink') + '<span><b>' + int(TOT.posts) + '</b> ' + esc(l.pinVideos) + '</span></p></div>' +
        '<div class="pin pin-3"><div class="poster"><div class="p-top"><span>' + esc(l.nav.anchor) + '</span><span>' + int(ANCHOR.campaigns) + '×</span></div>' +
          '<div class="p-brand">' + logo(ANCHOR.name, 'md') + '<div class="p-title">' + esc(ANCHOR.name) + '</div></div><ul><li>' + esc(t(l.pCreators, { n: int(ANCHOR.creators) })) + '</li><li>' + esc(t(l.pOrders, { n: int(ANCHOR.orders) })) + '</li><li>' + esc(rpC(ANCHOR.sales)) + '</li></ul></div>' +
          '<p>' + dot('ink') + '<span><b>' + int(ANCHOR.campaigns) + '</b> ' + esc(l.pin3) + '</span></p></div>' +
        '<div class="pin pin-4 pink">' + FOLDER + '<p>' + dot('pink') + '<span><b>' + int(TOT.orders) + '</b> ' + esc(l.pin4) + '</span></p></div>' +
        '<span class="bubble b1">' + esc(t(lang === 'id' ? '{c} campaign · {b} brand' : '{c} campaigns · {b} brands', { c: int(TOT.campaigns), b: int(BRANDS.length) })) + '</span>' +
        '<span class="bubble bubble-pink b2">' + esc(t(l.bubbleSales, { sales: rpC(TOT.sales) })) + '</span>' +
      '</div></section>';
  }

  function bullets(arr) { return (arr && arr.length) ? '<ul class="bul">' + arr.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' : ''; }
  function viewExperience() {
    var l = L();
    var h = '<section id="experience" aria-labelledby="h-experience">' + secHead(l.expEyebrow, l.expTitle, esc(l.expLead), 'h-experience');
    h += '<ol class="xp">' + (P.experience || []).map(function (x, i) {
      return '<li class="xp-item' + (x.current ? ' is-current' : '') + '">' +
        '<div class="xp-when"><span class="xp-dates">' + esc(x.dates[lang]) + '</span>' + (x.current ? '<span class="xp-now">' + dot('pink') + esc(l.current) + '</span>' : '') + '</div>' +
        '<div class="xp-body"><div class="xp-head"><span class="folder-mini' + (i % 2 ? ' pink' : '') + '" aria-hidden="true">' + FOLDER + '</span><div>' +
          '<h3>' + esc(x.title[lang]) + '</h3><p class="xp-org">' + esc(x.org[lang]) + (x.place ? ' · ' + esc(x.place) : '') + '</p>' +
          (x.orgNote ? '<p class="xp-note">' + esc(x.orgNote[lang]) + '</p>' : '') + '</div></div>' +
          bullets(x.bullets[lang]) + '</div></li>';
    }).join('') + '</ol>';
    return h + '</section>';
  }
  function viewResults() {
    var l = L();
    var h = '<section id="results" aria-labelledby="h-results">';
    h += secHead(l.resEyebrow, l.resTitle, esc(t(l.resLead, {
      live: int(TOT.live), from: fmtDate(FIRST), to: fmtDate(LIVE_LAST), notLive: int(NOT_LIVE.length),
      lastDate: fmtDate(LAST)
    })), 'h-results');
    // Hero figure + tiles
    h += '<div class="hero-figure">' +
      '<div class="big-card"><span class="eyebrow">' + esc(l.bigLabel) + '</span><span class="big-value">' + esc(rp(TOT.sales)) + '</span>' +
      '<p>' + t(l.bigSub, { orders: esc(int(TOT.orders)), redeemed: esc(rp(TOT.redeemed)), rate: esc(pct(TOT.redeemed / TOT.sales)) }) + '</p></div>' +
      '<div class="tiles">' +
        tile(l.tCampaigns, int(TOT.campaigns), t(l.tCampaignsSub, { live: int(TOT.live), months: int(MONTHS.length) })) +
        tile(l.tBrands, int(BRANDS.length), l.tBrandsSub) +
        tile(l.tCreators, int(TOT.creators), t(l.tOfTarget, { n: int(TOT.targetCreators) })) +
        tile(l.tPosts, int(TOT.posts), t(l.tOfTarget, { n: int(TOT.targetPosts) })) +
        tile(l.tOrders, int(TOT.orders), t(l.tOrdersSub, { n: int(TOT.redeemedOrders) })) +
        (bigAvg(TOT.aov) ? tile(l.tAov, rp(TOT.aov), l.tAovSub) : '') +
        (bigAvg(TOT.spc) ? tile(l.tSpc, rp(TOT.spc), l.tSpcSub) : '') +
        tile(l.tPpc, new Intl.NumberFormat(loc(), { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(TOT.ppc), l.tPpcSub) +
      '</div></div>';
    // Meters
    function meter(label, a, b, fa, fb) {
      var r = b ? a / b : 0;
      return '<div class="meter"><div class="meter-top"><b>' + esc(label) + '</b><span>' + esc(pct(r)) + '</span></div>' +
        '<div class="meter-track" role="img" aria-label="' + esc(label + ': ' + pct(r)) + '"><i style="width:' + Math.min(100, r * 100).toFixed(1) + '%"></i></div>' +
        '<p>' + esc(t(l.mOf, { a: fa(a), b: fb(b) })) + '</p></div>';
    }
    h += '<div class="sub-head"><h3>' + l.metersTitle + '</h3><p>' + esc(l.metersSub) + '</p></div>' +
      '<div class="meters">' +
        meter(l.mCreators, TOT.creators, TOT.targetCreators, int, int) +
        meter(l.mPosts, TOT.posts, TOT.targetPosts, int, int) +
        meter(l.mValue, TOT.redeemed, TOT.sales, rp, rp) +
        meter(l.mOrders, TOT.redeemedOrders, TOT.orders, int, int) +
      '</div>';
    return h + '</section>';
  }

  function viewTop() {
    var l = L();
    var h = '<section id="top" aria-labelledby="h-top">';
    // Top 10 campaigns
    h += secHead(l.resEyebrow, l.topTitle, esc(l.topSub), 'h-top') +
      hbars(byRank.slice(0, 10).map(function (c) {
        return { name: c.name, sub: c.brand + ' · ' + fmtDate(c.launched), value: c.sales, display: rpC(c.sales), small: t(l.pOrders, { n: int(c.orders) }), action: 'campaign', key: String(c.idx), logoHtml: campLogo(c, 'sm') };
      }), 0);
    return h + '</section>';
  }
  function viewMonths() {
    var l = L();
    var h = '<section id="months" aria-labelledby="h-months">';
    // Month by month
    function mrows(key, fmt) {
      return BY_MONTH.map(function (m) {
        return { label: fmtMonth(m.month), long: fmtMonthYear(m.month), value: m[key], tipTitle: fmt(m[key]), tipSub: fmtMonthYear(m.month), peakLabel: key === 'sales' ? rpC(m[key]) : fmt(m[key]) };
      });
    }
    h += secHead(l.resEyebrow, l.monthTitle, esc(l.monthSub), 'h-months') +
      '<div class="charts3">' +
        '<div class="chart-card"><h4>' + esc(l.cCampaigns) + '</h4><div class="chart">' + columnChart(mrows('campaigns', int), tickInt, l.cCampaigns) + '</div></div>' +
        '<div class="chart-card"><h4>' + esc(l.cCreators) + '</h4><div class="chart">' + columnChart(mrows('creators', int), tickInt, l.cCreators) + '</div></div>' +
        '<div class="chart-card"><h4>' + esc(l.cSales) + ' (Rp)</h4><div class="chart">' + columnChart(mrows('sales', rp), tickRp, l.cSales) + '</div></div>' +
      '</div>' +
      '<details class="table-view"><summary>' + esc(l.showTable) + '</summary><div class="table-wrap" style="display:block"><table class="ctable" style="min-width:560px"><thead><tr>' +
        '<th>' + esc(l.month) + '</th><th class="r">' + esc(l.cCampaigns) + '</th><th class="r">' + esc(l.cCreators) + '</th><th class="r">' + esc(l.colPosts) + '</th><th class="r">' + esc(l.cSales) + '</th><th class="r">' + esc(l.colOrders) + '</th></tr></thead><tbody>' +
        BY_MONTH.map(function (m) { return '<tr style="cursor:default"><td>' + esc(fmtMonthYear(m.month)) + '</td><td class="r">' + int(m.campaigns) + '</td><td class="r">' + int(m.creators) + '</td><td class="r">' + int(m.posts) + '</td><td class="r">' + esc(rp(m.sales)) + '</td><td class="r">' + int(m.orders) + '</td></tr>'; }).join('') +
      '</tbody></table></div></details>';
    return h + '</section>';
  }
  function viewByBrand() {
    var l = L();
    var h = '<section id="bybrand" aria-labelledby="h-bybrand">';
    // Brand bars
    var top = BRANDS[0];
    h += secHead(l.resEyebrow, l.brandTitle, esc(t(l.brandSub, { top: top.name, share: pct(top.share) })), 'h-bybrand') +
      hbars(BRANDS.map(function (b) {
        return { name: b.name, sub: t(b.campaigns === 1 ? l.brandMeta1 : l.brandMeta, { n: int(b.campaigns), sales: '' }).replace(/ · $/, ''), value: big(b.sales) ? b.sales : 0, display: big(b.sales) ? rpC(b.sales) : '', small: big(b.sales) ? pct(b.share, b.share < 0.01 ? 1 : 0) : '', action: 'brand', key: b.name, logoHtml: logo(b.name, 'sm') };
      }), 0);
    return h + '</section>';
  }

  function viewCases() {
    var l = L();
    return '<section id="cases" aria-labelledby="h-cases">' + secHead(l.casesEyebrow, l.casesTitle, esc(l.casesLead), 'h-cases') +
      '<div class="cases">' + CASES.map(function (c, i) {
        return '<button type="button" class="case" data-action="campaign" data-key="' + c.idx + '" aria-label="' + esc(c.name + ', ' + c.brand) + '">' +
          '<div class="poster' + (i % 2 ? ' light' : '') + '"><div class="p-top"><span>' + esc(t(l.noRank, { n: c.rank })) + '</span><span>' + esc(fmtDate(c.launched)) + '</span></div>' +
          '<div class="p-brand">' + campLogo(c, 'md') + '<div class="p-title">' + esc(c.brand) + '</div></div>' +
          '<div class="p-big">' + esc(rpC(c.sales)) + '</div>' +
          '<ul><li>' + esc(t(l.pCreators, { n: int(c.creators) })) + '</li><li>' + esc(t(l.pPosts, { n: int(c.posts) })) + '</li><li>' + esc(t(l.pOrders, { n: int(c.orders) })) + '</li><li>' + esc(pct(c.redRate)) + ' ' + esc(lang === 'id' ? 'di-redeem' : 'redeemed') + '</li></ul></div>' +
          '<span class="c-cap">' + tag('top') + '<span>' + esc(c.name) + '</span></span></button>';
      }).join('') + '</div></section>';
  }

  function viewAnchor() {
    if (!ANCHOR) return '';
    var l = L(), a = ANCHOR;
    var best = a.list.slice().sort(function (x, y) { return y.sales - x.sales; })[0];
    var h = '<section id="anchor" aria-labelledby="h-anchor">' + secHead(l.anchorEyebrow,
      t(l.anchorTitle, { brand: esc(a.name), n: int(a.campaigns), months: int(a.months.length) }),
      esc(t(l.anchorLead, { share: pct(a.share), creators: int(a.creators), posts: int(a.posts), best: best.name, bestSales: rp(best.sales) })), 'h-anchor');
    var rows = MONTHS.filter(function (m) { return m >= a.months[0] && m <= a.months[a.months.length - 1]; }).map(function (m) {
      var cs = a.list.filter(function (c) { return c.month === m; });
      var v = sum(cs, 'sales');
      return { label: fmtMonth(m), long: fmtMonthYear(m), value: v, tipTitle: money(v), tipSub: fmtMonthYear(m) + ' · ' + t(l.tipCampaigns, { n: int(cs.length) }), peakLabel: big(v) ? rpC(v) : '' };
    });
    h += '<div class="anchor-grid"><div style="display:flex;flex-direction:column;gap:14px;min-width:0">' +
      '<div class="anchor-stats">' +
        tile(l.bCampaigns, int(a.campaigns), a.months.map(function (m) { return fmtMonth(m); }).join(', ')) +
        tile(l.tCreators, int(a.creators), t(l.tOfTarget, { n: int(sum(a.list.filter(function (c) { return c.live; }), 'targetCreators')) })) +
        tile(l.dSales, rpC(a.sales), t(l.tOrdersSub, { n: int(a.redeemedOrders) }).replace(/^/, int(a.orders) + ' ' + (lang === 'id' ? 'pesanan · ' : 'orders · '))) +
        tile(l.bShare, pct(a.share), rp(a.sales)) +
      '</div>' +
      '<div class="chart-card"><h4>' + esc(l.anchorChart) + ' (Rp)</h4><div class="chart">' + columnChart(rows, tickRp, l.anchorChart) + '</div></div></div>';
    // timeline
    var months = a.months.slice().reverse();
    h += '<div class="sub-head" style="gap:12px"><h3>' + esc(l.anchorList) + '</h3><div class="timeline">' + months.map(function (m) {
      var cs = a.list.filter(function (c) { return c.month === m; }).sort(function (x, y) { return y.sales - x.sales; });
      var max = Math.max.apply(null, a.list.map(function (c) { return c.sales; }).concat([1]));
      return '<div class="tl-month"><span>' + esc(fmtMonthYear(m)) + '</span><div class="tl-list">' + cs.map(function (c) {
        return '<button type="button" class="hbar' + (c === best ? ' hl' : '') + '" data-action="campaign" data-key="' + c.idx + '" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1fr) auto">' +
          '<span class="h-name">' + campLogo(c, 'sm') + '<span>' + esc(c.name) + '<small>' + esc(t(l.pCreators, { n: int(c.creators) }) + ' · ' + t(l.pOrders, { n: int(c.orders) })) + '</small></span></span>' +
          '<span class="h-track" aria-hidden="true">' + (c.sales > 0 ? '<span class="h-fill" style="width:' + Math.max(0.6, c.sales / max * 100).toFixed(2) + '%"></span>' : '') + '</span>' +
          '<span class="h-val">' + (big(c.sales) ? esc(rpC(c.sales)) : '') + '</span></button>';
      }).join('') + '</div></div>';
    }).join('') + '</div></div></div>';
    return h + '</section>';
  }

  function viewBrands() {
    var l = L();
    return '<section id="brands" aria-labelledby="h-brands">' + secHead(l.brandsEyebrow, t(l.brandsTitle, { n: int(BRANDS.length) }), esc(l.brandsLead), 'h-brands') +
      '<div class="folders">' + BRANDS.map(function (b, i) {
        var pink = i % 5 === 1 || i % 5 === 3;
        return '<button type="button" class="folder' + (pink ? ' pink' : '') + '" data-action="brand" data-key="' + esc(b.name) + '">' +
          '<span class="folder-art ' + (pink ? 'pink' : '') + '">' + FOLDER + logo(b.name, 'folder') + '</span>' +
          '<span class="folder-name"><i class="tag" aria-hidden="true"></i>' + esc(b.name) + '</span>' +
          '<span class="folder-meta">' + esc(t(b.campaigns === 1 ? l.brandMeta1 : l.brandMeta, { n: int(b.campaigns), sales: big(b.sales) ? rpC(b.sales) : '' }).replace(/ · $/, '')) + '</span></button>';
      }).join('') + '</div></section>';
  }

  /* ---------- Explorer ---------- */
  var X = { q: '', brand: '', month: '', tag: '', sort: 'launched', dir: -1 };
  var SORTS = [['launched', 'colLaunched'], ['sales', 'colSales'], ['redeemed', 'colRedeemed'], ['orders', 'colOrders'], ['creators', 'colCreators'], ['posts', 'colPosts'], ['name', 'colCampaign']];
  function viewCampaigns() {
    var l = L();
    var h = '<section id="campaigns" aria-labelledby="h-campaigns">' + secHead(l.allEyebrow, t(l.allTitle, { n: int(C.length) }), esc(l.allLead), 'h-campaigns');
    h += '<div class="filters" role="search">' +
      '<label>' + esc(l.fSearch) + '<input class="input" id="f-q" type="search" placeholder="' + esc(l.fSearchPh) + '" value="' + esc(X.q) + '" autocomplete="off"></label>' +
      '<label>' + esc(l.fBrand) + '<select class="select" id="f-brand"><option value="">' + esc(l.fAllBrands) + '</option>' +
        BRANDS.slice().sort(function (a, b) { return a.name.localeCompare(b.name); }).map(function (b) { return '<option value="' + esc(b.name) + '"' + (X.brand === b.name ? ' selected' : '') + '>' + esc(b.name) + ' (' + b.campaigns + ')</option>'; }).join('') + '</select></label>' +
      '<label>' + esc(l.fMonth) + '<select class="select" id="f-month"><option value="">' + esc(l.fAllMonths) + '</option>' +
        MONTHS.map(function (m) { return '<option value="' + m + '"' + (X.month === m ? ' selected' : '') + '>' + esc(fmtMonthYear(m)) + '</option>'; }).join('') + '</select></label>' +
      '<label>' + esc(l.fTag) + '<select class="select" id="f-tag"><option value="">' + esc(l.fAllTags) + '</option>' +
        usedTags().map(function (k) { return '<option value="' + k + '"' + (X.tag === k ? ' selected' : '') + '>' + esc(l.tags[k]) + '</option>'; }).join('') + '</select></label>' +
      '<label>' + esc(l.fSort) + '<select class="select" id="f-sort">' +
        SORTS.map(function (s) { return ['-1', '1'].map(function (d) { var v = s[0] + ':' + d; return '<option value="' + v + '"' + (X.sort + ':' + X.dir === v ? ' selected' : '') + '>' + esc(l[s[1]] + ' · ' + (d === '-1' ? l.sortDesc : l.sortAsc)) + '</option>'; }).join(''); }).join('') + '</select></label>' +
      '<button type="button" class="btn btn-sm" data-action="reset">' + esc(l.fReset) + '</button>' +
      '</div><div id="x-results" aria-live="polite">' + explorerResults() + '</div>';
    return h + viewDefs() + '</section>';
  }
  function filtered() {
    var q = X.q.trim().toLowerCase();
    var out = C.filter(function (c) {
      if (X.brand && c.brand !== X.brand) return false;
      if (X.month && c.month !== X.month) return false;
      if (X.tag && c.tags.indexOf(X.tag) === -1) return false;
      if (q && (c.name + ' ' + c.brand).toLowerCase().indexOf(q) === -1) return false;
      return true;
    });
    var k = X.sort, d = X.dir;
    out.sort(function (a, b) {
      var va = a[k], vb = b[k];
      if (k === 'name') return d * String(va).localeCompare(String(vb));
      if (va == null) va = -Infinity; if (vb == null) vb = -Infinity;
      return va === vb ? (a.launched < b.launched ? 1 : -1) : (va > vb ? d : -d);
    });
    return out;
  }
  function explorerResults() {
    var l = L(), rows = filtered();
    var live = rows.filter(function (c) { return c.live; });
    var h = '<p class="summary-line">' + t(l.showing, { n: esc(int(rows.length)), sales: big(sum(rows, 'sales')) ? t(l.salesPart, { v: esc(rp(sum(rows, 'sales'))) }) : '', creators: esc(int(sum(live, 'creators'))), posts: esc(int(sum(live, 'posts'))), orders: esc(int(sum(rows, 'orders'))) }) + '</p>';
    if (!rows.length) return h + '<div class="empty">' + esc(l.noMatch) + ' <button type="button" class="btn btn-sm" data-action="reset">' + esc(l.fReset) + '</button></div>';
    function th(key, label, right) {
      var cur = X.sort === key;
      return '<th class="' + (right ? 'r' : '') + '"' + (cur ? ' aria-sort="' + (X.dir === -1 ? 'descending' : 'ascending') + '"' : '') + '><button type="button" data-action="sort" data-key="' + key + '">' + esc(label) + (cur ? (X.dir === -1 ? ' ↓' : ' ↑') : '') + '</button></th>';
    }
    h += '<div class="table-wrap"><table class="ctable"><caption class="sr">' + esc(l.allEyebrow) + '</caption><thead><tr>' +
      th('launched', l.colLaunched) + th('name', l.colCampaign) + th('creators', l.colCreators, 1) + th('posts', l.colPosts, 1) +
      th('sales', l.colSales, 1) + th('redeemed', l.colRedeemed, 1) + th('orders', l.colOrders, 1) + '</tr></thead><tbody>';
    rows.forEach(function (c) {
      h += '<tr data-action="campaign" data-key="' + c.idx + '" tabindex="0">' +
        '<td class="num">' + esc(fmtDate(c.launched)) + '</td>' +
        '<td class="c-name"><span class="c-with-logo">' + campLogo(c, 'sm') + '<span>' + esc(c.name) + tagList(c) + '<small>' + esc(c.brand) + '</small></span></span></td>' +
        '<td class="r">' + int(c.creators) + ' / ' + int(c.targetCreators) + '<small>' + esc(pct(c.creatorFill)) + '</small></td>' +
        '<td class="r">' + int(c.posts) + ' / ' + int(c.targetPosts) + '<small>' + esc(pct(c.postFill)) + '</small></td>' +
        '<td class="r">' + esc(money(c.sales)) + '</td>' +
        '<td class="r">' + esc(money(c.redeemed)) + '<small>' + esc(pct(c.redRate)) + '</small></td>' +
        '<td class="r">' + int(c.orders) + '<small>' + esc(t(l.dRedOrders, { n: int(c.redeemedOrders) })) + '</small></td></tr>';
    });
    h += '</tbody><tfoot><tr><td></td><td>' + esc(l.total) + '</td>' +
      '<td class="r">' + int(sum(live, 'creators')) + ' / ' + int(sum(live, 'targetCreators')) + '</td>' +
      '<td class="r">' + int(sum(live, 'posts')) + ' / ' + int(sum(live, 'targetPosts')) + '</td>' +
      '<td class="r">' + esc(money(sum(rows, 'sales'))) + '</td><td class="r">' + esc(money(sum(rows, 'redeemed'))) + '</td>' +
      '<td class="r">' + int(sum(rows, 'orders')) + '</td></tr></tfoot></table></div>';
    h += '<div class="ccards">' + rows.map(function (c) {
      return '<button type="button" class="ccard" data-action="campaign" data-key="' + c.idx + '"><div class="c-with-logo">' + campLogo(c, 'md') + '<div><h4>' + esc(c.name) + ' ' + tagList(c) + '</h4><span class="cc-meta">' + esc(c.brand + ' · ' + fmtDate(c.launched)) + '</span></div></div>' +
        '<dl><div><dt>' + esc(l.colSales) + '</dt><dd>' + esc(money(c.sales)) + '</dd></div><div><dt>' + esc(l.colOrders) + '</dt><dd>' + int(c.orders) + '</dd></div>' +
        '<div><dt>' + esc(l.colCreators) + '</dt><dd>' + int(c.creators) + ' / ' + int(c.targetCreators) + '</dd></div><div><dt>' + esc(l.colPosts) + '</dt><dd>' + int(c.posts) + ' / ' + int(c.targetPosts) + '</dd></div></dl></button>';
    }).join('') + '</div>';
    return h;
  }
  function refreshExplorer() { var r = $('#x-results'); if (r) r.innerHTML = explorerResults(); }

  function viewDefs() {
    var l = L();
    return '<div class="sub-head"><h3>' + l.defsTitle + '</h3></div><dl class="defs">' + l.defs.map(function (d) { return '<div><dt>' + esc(d[0]) + '</dt><dd>' + esc(d[1]) + '</dd></div>'; }).join('') + '</dl>' +
      '<p class="hint">' + esc(t(l.source, { n: int(C.length), from: fmtDate(FIRST), to: fmtDate(LAST) })) + '</p>';
  }

  /* ------------------------------------------------------------------------
     7. DETAIL SHEETS
     ------------------------------------------------------------------------ */
  function campaignSheet(c) {
    var l = L();
    var b = brandOf(c.brand);
    var facts = [];
    if (!c.live) facts.push(l.fNew);
    else {
      facts.push(t(l.fRank, { rank: c.rank, live: int(TOT.live) }));
      facts.push(t(l.fFill, { c: int(c.creators), t: int(c.targetCreators), p: pct(c.creatorFill) }));
      facts.push(t(l.fPosts, { p: int(c.posts), t: int(c.targetPosts), pp: pct(c.postFill), ppc: nf(c.ppc, 1) }));
      if (c.sales > 0) {
        if (bigAvg(c.spc) && c.spc / TOT.spc >= 1.05) facts.push(t(l.fSpcUp, { spc: rp(c.spc), x: ratio(c.spc / TOT.spc) }));
        if (bigAvg(c.aov) && c.aov / TOT.aov >= 1.05) facts.push(t(l.fAovUp, { aov: rp(c.aov), x: ratio(c.aov / TOT.aov) }));
        facts.push(t(l.fRed, { rate: pct(c.redRate) }));
      } else facts.push(l.fNoSales);
    }
    if (b) facts.push(b.campaigns > 1 ? t(l.fBrand, { n: int(b.campaigns), brand: b.name, share: pct(b.sales ? c.sales / b.sales : 0) }) : t(l.fOnly, { brand: b.name }));
    return '<div class="sheet-inner"><div class="sheet-head"><div class="s-title"><span class="eyebrow">' + esc(c.brand + ' · ' + t(l.launchedOn, { date: fmtDate(c.launched) })) + '</span>' +
      '<div class="s-brand">' + campLogo(c, 'lg') + '<h2 id="sheet-title">' + esc(c.name) + '</h2></div>' + (c.tags.length ? '<span class="summary-line">' + c.tags.map(function (k) { return '<span style="display:inline-flex;gap:6px;align-items:center">' + tag(k) + esc(l.tags[k]) + '</span>'; }).join('') + '</span>' : '') + '</div>' +
      '<button type="button" class="btn btn-sm" data-action="close">' + esc(l.close) + '</button></div>' +
      '<div class="kv">' +
        (big(c.sales) ? tile(l.dSales, rp(c.sales), c.rank ? t(l.noRank, { n: c.rank }) : '') : '') +
        (big(c.redeemed) ? tile(l.dRedeemed, rp(c.redeemed), c.redRate == null ? '' : t(l.dRateOf, { rate: pct(c.redRate) })) : '') +
        tile(l.dOrders, int(c.orders), t(l.dRedOrders, { n: int(c.redeemedOrders) })) +
        tile(l.dCreators, int(c.creators), t(l.dOfTarget, { a: int(c.creators), b: int(c.targetCreators), p: pct(c.creatorFill) })) +
        tile(l.dPosts, int(c.posts), t(l.dOfTarget, { a: int(c.posts), b: int(c.targetPosts), p: pct(c.postFill) })) +
        (bigAvg(c.aov) ? tile(l.dAov, rp(c.aov), '') : '') +
        (bigAvg(c.spc) ? tile(l.dSpc, rp(c.spc), '') : '') +
        tile(l.dPpc, c.ppc == null ? '—' : nf(c.ppc, 1), '') +
      '</div>' +
      '<div class="sub-head"><h3>' + l.whatShows + '</h3></div><ul class="facts">' + facts.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
      (b && b.campaigns > 1 ? '<div><button type="button" class="btn btn-sm" data-action="brand" data-key="' + esc(b.name) + '">' + esc(b.name) + ' →</button></div>' : '') +
      '</div>';
  }
  function brandSheet(b) {
    var l = L();
    var liveList = b.list.filter(function (c) { return c.live; });
    return '<div class="sheet-inner"><div class="sheet-head"><div class="s-title"><span class="eyebrow">' + esc(l.brandsEyebrow + ' · ' + b.months.map(function (m) { return fmtMonth(m); }).join(', ')) + '</span>' +
      '<div class="s-brand">' + logo(b.name, 'lg') + '<h2 id="sheet-title">' + esc(b.name) + '</h2></div></div><button type="button" class="btn btn-sm" data-action="close">' + esc(l.close) + '</button></div>' +
      '<div class="kv">' +
        tile(l.bCampaigns, int(b.campaigns), '') + (big(b.sales) ? tile(l.dSales, rp(b.sales), '') + tile(l.bShare, pct(b.share, b.share < 0.01 ? 1 : 0), '') : '') +
        tile(l.dCreators, int(b.creators), t(l.tOfTarget, { n: int(sum(liveList, 'targetCreators')) })) +
        tile(l.dPosts, int(b.posts), t(l.tOfTarget, { n: int(sum(liveList, 'targetPosts')) })) +
        tile(l.dOrders, int(b.orders), t(l.dRedOrders, { n: int(b.redeemedOrders) })) +
      '</div>' +
      (GROUP_LOGOS[b.name] ? '<div class="group-logos">' + GROUP_LOGOS[b.name].map(function (g) { return '<figure>' + logoImg(g[1], g[0] + ' logo', 'lg', g[0]) + '<figcaption>' + esc(g[0]) + '</figcaption></figure>'; }).join('') + '</div>' : '') +
      '<div class="sub-head"><h3>' + esc(l.bList) + '</h3></div>' +
      hbars(b.list.map(function (c) { return { logoHtml: campLogo(c, 'sm'), name: c.name, sub: fmtDate(c.launched) + ' · ' + t(l.pCreators, { n: int(c.creators) }) + ' · ' + t(l.pOrders, { n: int(c.orders) }), value: big(c.sales) ? c.sales : 0, display: big(c.sales) ? rp(c.sales) : '', action: 'campaign', key: String(c.idx) }; }), -1) +
      '</div>';
  }
  var lastFocus = null;
  function openSheet(html) {
    var d = $('#sheet');
    if (!d.open) lastFocus = document.activeElement;
    d.innerHTML = html;
    d.setAttribute('aria-labelledby', 'sheet-title');
    if (!d.open) { if (typeof d.showModal === 'function') { try { d.showModal(); } catch (e) { d.setAttribute('open', ''); } } else d.setAttribute('open', ''); }
    d.scrollTop = 0;
    var h = $('#sheet-title'); if (h) { h.setAttribute('tabindex', '-1'); h.focus(); }
  }
  function closeSheets() {
    ['#sheet', '#menu'].forEach(function (s) { var d = $(s); if (d && d.open) { if (typeof d.close === 'function') d.close(); else d.removeAttribute('open'); } });
    if (lastFocus && lastFocus.isConnected) lastFocus.focus();
  }

  /* ------------------------------------------------------------------------
     8. CHROME (sidebar, toolbar, footer) + RENDER
     ------------------------------------------------------------------------ */
  function navGroup(label, list) {
    var l = L();
    return '<div class="side-group"><div class="side-label">' + esc(label) + '</div>' + list.map(function (s) {
      var count = s === 'brands' ? BRANDS.length : s === 'campaigns' ? C.length : s === 'cases' ? CASES.length : null;
      return '<a class="side-item" href="#' + s + '" data-nav="' + s + '">' + icon(s) + '<span>' + esc(l.nav[s]) + '</span>' + (count ? '<span class="count">' + count + '</span>' : '') + '</a>';
    }).join('') + '</div>';
  }
  function navList() {
    var l = L();
    return navGroup(l.sideMe, SEC_ME) + navGroup(l.sideWork, SEC_WORK) +
      '<div class="side-group"><div class="side-label">' + esc(l.sideTags) + '</div>' +
      usedTags().map(function (k) {
        var n = C.filter(function (c) { return c.tags.indexOf(k) > -1; }).length;
        return '<button type="button" class="side-item" data-action="tag" data-key="' + k + '" aria-pressed="' + (X.tag === k) + '" title="' + esc(l.tagsLong[k]) + '">' + tag(k) + '<span>' + esc(l.tags[k]) + '</span><span class="count">' + n + '</span></button>';
      }).join('') + '<p class="hint" style="padding:6px 10px 0">' + esc(l.sideTagsHint) + '</p></div>';
  }
  function renderChrome() {
    var l = L();
    $('#sidebar').innerHTML = '<div class="side-inner"><div class="lights" aria-hidden="true"><i></i><i></i><i></i></div>' + navList() + '</div>';
    $('#toolbar').innerHTML = '<div class="tb-mobile"><div class="lights" aria-hidden="true"><i></i><i></i><i></i></div>' +
      '<button type="button" class="btn btn-sm" data-action="menu" aria-haspopup="dialog">' + esc(l.sections) + '</button></div>' +
      '<p class="tb-title" id="tb-title" aria-live="off">' + l.tb[curSection] + '</p>' +
      '<div class="lang" role="group" aria-label="Language / Bahasa">' +
        '<button type="button" data-action="lang" data-key="en" aria-pressed="' + (lang === 'en') + '" lang="en">EN</button>' +
        '<button type="button" data-action="lang" data-key="id" aria-pressed="' + (lang === 'id') + '" lang="id">ID</button></div>';
    $('#foot').innerHTML = '<span class="foot-bubble">© ' + new Date().getFullYear() + ' ' + esc(P.fullName || P.name) + '</span><span class="foot-bubble">' + esc(t(l.source, { n: int(C.length), from: fmtDate(FIRST), to: fmtDate(LAST) })) + '</span>';
    var sk = $('.skip-link'); if (sk) sk.textContent = l.skip;
  }
  // One section per page: Next / Back buttons (or the sidebar) move between them.
  function pager(id) {
    var l = L(), i = SECTIONS.indexOf(id), prev = SECTIONS[i - 1], next = SECTIONS[i + 1];
    return '<nav class="pager" aria-label="' + esc(l.pagerLabel) + '">' +
      (prev ? '<a class="btn pg-prev" href="#' + prev + '" data-nav="' + prev + '"><span aria-hidden="true">←</span><span class="pg-txt"><small>' + esc(l.prev) + '</small>' + esc(l.nav[prev]) + '</span></a>' : '<span class="pg-gap"></span>') +
      '<span class="pager-count">' + esc(t(l.pageOf, { n: i + 1, total: SECTIONS.length })) + '</span>' +
      (next ? '<a class="cta-bubble pg-next" href="#' + next + '" data-nav="' + next + '"><span class="pg-txt"><small>' + esc(l.next) + '</small>' + esc(l.nav[next]) + '</span><span aria-hidden="true">→</span></a>' : '<span class="pg-gap"></span>') +
      '</nav>';
  }
  function showPage(id, move) {
    if (SECTIONS.indexOf(id) < 0) id = SECTIONS[0];
    curSection = id;
    SECTIONS.forEach(function (s) { var el = document.getElementById(s); if (el) el.hidden = s !== id; });
    var tt = $('#tb-title'); if (tt) tt.innerHTML = L().tb[id];
    $$('[data-nav]').forEach(function (a) { if (a.closest('.side-group') && a.getAttribute('data-nav') === id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    tip.hidden = true;
    if (move) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      var h = document.getElementById(id); h = h && h.querySelector('h1, h2');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    }
  }
  function go(id) {
    if (id !== curSection) { try { history.pushState(null, '', '#' + id); } catch (e) { /* ignore */ } }
    showPage(id, true);
  }
  window.addEventListener('popstate', function () { showPage(location.hash.slice(1), true); });
  function render() {
    document.documentElement.lang = lang === 'id' ? 'id' : 'en';
    renderChrome();
    var VIEWS = { about: viewAboutMe, experience: viewExperience, brands: viewBrands, cases: viewCases, top: viewTop, months: viewMonths, bybrand: viewByBrand, results: viewResults, anchor: viewAnchor, campaigns: viewCampaigns };
    $('#main').innerHTML = SECTIONS.map(function (id) {
      var h = VIEWS[id](), k = h.lastIndexOf('</section>');
      return k < 0 ? h : h.slice(0, k) + pager(id) + h.slice(k);
    }).join('');
    showPage(curSection, false);
  }

  /* ------------------------------------------------------------------------
     9. EVENTS
     ------------------------------------------------------------------------ */
  document.addEventListener('click', function (ev) {
    var nav = ev.target.closest('[data-nav]');
    if (nav) { ev.preventDefault(); closeSheets(); go(nav.getAttribute('data-nav')); return; }
    var el = ev.target.closest('[data-action]');
    if (!el) { var d = ev.target; if (d && d.tagName === 'DIALOG') closeSheets(); return; }
    var a = el.getAttribute('data-action'), k = el.getAttribute('data-key');
    if (a === 'campaign') { var c = C[Number(k)]; if (c) openSheet(campaignSheet(c)); }
    else if (a === 'brand') { var b = brandOf(k); if (b) openSheet(brandSheet(b)); }
    else if (a === 'close') closeSheets();
    else if (a === 'lang') { if (k !== lang) { var y = window.scrollY; lang = k; try { localStorage.setItem('pf-lang', lang); } catch (e) { /* ignore */ } render(); window.scrollTo(0, y); var btn = $('[data-action="lang"][data-key="' + lang + '"]'); if (btn) btn.focus(); } }
    else if (a === 'menu') { var m = $('#menu'); lastFocus = el; m.innerHTML = '<div class="sheet-inner"><div class="sheet-head"><div class="s-title"><h2 id="menu-title">' + esc(L().sections) + '</h2></div><button type="button" class="btn btn-sm" data-action="close">' + esc(L().close) + '</button></div>' + navList() + '</div>'; if (typeof m.showModal === 'function') m.showModal(); else m.setAttribute('open', ''); }
    else if (a === 'tag') { X.tag = X.tag === k ? '' : k; closeSheets(); renderChrome(); var ft = $('#f-tag'); if (ft) ft.value = X.tag; refreshExplorer(); go('campaigns'); }
    else if (a === 'sort') { if (X.sort === k) X.dir = -X.dir; else { X.sort = k; X.dir = k === 'name' ? 1 : -1; } var fs = $('#f-sort'); if (fs) fs.value = X.sort + ':' + X.dir; refreshExplorer(); var b2 = $('th button[data-key="' + k + '"]'); if (b2) b2.focus(); }
    else if (a === 'reset') { X.q = ''; X.brand = ''; X.month = ''; X.tag = ''; X.sort = 'launched'; X.dir = -1; ['#f-q', '#f-brand', '#f-month', '#f-tag'].forEach(function (s) { var e = $(s); if (e) e.value = ''; }); var s2 = $('#f-sort'); if (s2) s2.value = 'launched:-1'; renderChrome(); refreshExplorer(); }
  });
  document.addEventListener('keydown', function (ev) {
    if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.matches && ev.target.matches('tr[data-action]')) { ev.preventDefault(); ev.target.click(); }
  });
  document.addEventListener('input', function (ev) {
    if (ev.target.id === 'f-q') { X.q = ev.target.value; refreshExplorer(); }
  });
  document.addEventListener('change', function (ev) {
    var id = ev.target.id;
    if (id === 'f-brand') X.brand = ev.target.value;
    else if (id === 'f-month') X.month = ev.target.value;
    else if (id === 'f-tag') { X.tag = ev.target.value; renderChrome(); }
    else if (id === 'f-sort') { var p = ev.target.value.split(':'); X.sort = p[0]; X.dir = Number(p[1]); }
    else return;
    refreshExplorer();
  });
  ['#sheet', '#menu'].forEach(function (s) { var d = $(s); if (d) d.addEventListener('close', function () { if (lastFocus && lastFocus.isConnected) lastFocus.focus(); }); });

  // Tooltips on chart columns (hover + keyboard focus)
  var tip = $('#tip');
  function showTip(el, x, y) {
    tip.innerHTML = '';
    var b = document.createElement('b'); b.textContent = el.getAttribute('data-tip-title');
    var s = document.createElement('span'); s.textContent = el.getAttribute('data-tip-sub');
    tip.appendChild(b); tip.appendChild(s); tip.hidden = false;
    var w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, x - w / 2)) + 'px';
    tip.style.top = Math.max(8, y - h - 12) + 'px';
  }
  document.addEventListener('pointermove', function (ev) {
    var el = ev.target.closest && ev.target.closest('[data-tip-title]');
    if (el) showTip(el, ev.clientX, ev.clientY); else tip.hidden = true;
  });
  document.addEventListener('focusin', function (ev) {
    var el = ev.target.closest && ev.target.closest('[data-tip-title]');
    if (el) { var r = el.getBoundingClientRect(); showTip(el, r.left + r.width / 2, r.top + 20); } else tip.hidden = true;
  });
  window.addEventListener('scroll', function () { tip.hidden = true; }, { passive: true });

  var h0 = location.hash.slice(1); if (SECTIONS.indexOf(h0) > -1) curSection = h0;
  try { history.scrollRestoration = 'manual'; } catch (e) { /* ignore */ }
  window.addEventListener('load', function () { if (location.hash) setTimeout(function () { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }, 0); });
  render();

  // Exposed for automated checks only
  window.__pf = { C: C, TOT: TOT, BRANDS: BRANDS, BY_MONTH: BY_MONTH, get lang() { return lang; } };
})();
