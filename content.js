// ============================================================
// CONTENT: edit these lists to update the site.
// Any text can be a plain string (same in every language) or an
// object { en, az, tr, ru, ka }. Missing languages fall back to en.
// ============================================================

// Projects shown in "Selected work", in order.
const PROJECTS = [
  {
    name: 'Bridge ERP',
    year: { en: 'In production', az: 'İstifadədədir', tr: 'Kullanımda', ru: 'В работе', ka: 'მოქმედია' },
    kind: {
      en: 'ERP · DAPNA LTD · internal system',
      az: 'ERP · DAPNA LTD · daxili sistem',
      tr: 'ERP · DAPNA LTD · dahili sistem',
      ru: 'ERP · DAPNA LTD · внутренняя система',
      ka: 'ERP · DAPNA LTD · შიდა სისტემა'
    },
    tagline: {
      en: "One web ERP that ties the company's systems together.",
      az: 'Şirkətin sistemlərini bir-birinə bağlayan bir veb ERP.',
      tr: 'Şirketin sistemlerini birbirine bağlayan tek bir web ERP.',
      ru: 'Один веб-ERP, который связывает системы компании воедино.',
      ka: 'ერთი ვებ ERP, რომელიც კომპანიის სისტემებს აერთიანებს.'
    },
    desc: {
      en: 'A web-based ERP I built in C# for DAPNA. It sits on top of Logo, Axata and BioStar, so sales, warehouse and staff data move between them instead of being typed in twice. Daily work runs from one dashboard: orders, prices, client credit, reports and bonuses.',
      az: 'DAPNA üçün C# ilə yazdığım veb əsaslı ERP. Logo, Axata və BioStar üzərində işləyir, belə ki, satış, anbar və işçi məlumatları iki dəfə daxil edilmək əvəzinə sistemlər arasında özü ötürülür. Gündəlik iş bir paneldən idarə olunur: sifarişlər, qiymətlər, müştəri krediti, hesabatlar və bonuslar.',
      tr: "DAPNA için C# ile geliştirdiğim web tabanlı bir ERP. Logo, Axata ve BioStar'ın üzerinde çalışır; böylece satış, depo ve personel verileri iki kez girilmek yerine sistemler arasında kendiliğinden akar. Günlük iş tek bir panelden yürür: siparişler, fiyatlar, müşteri kredisi, raporlar ve primler.",
      ru: 'Веб-ERP на C#, которую я создал для DAPNA. Она работает поверх Logo, Axata и BioStar, поэтому данные о продажах, складе и сотрудниках передаются между системами, а не вводятся дважды. Ежедневная работа ведётся с одной панели: заказы, цены, кредит клиентов, отчёты и бонусы.',
      ka: 'ვებ ERP, რომელიც C#-ზე შევქმენი DAPNA-სთვის. ის Logo-ს, Axata-სა და BioStar-ის თავზე მუშაობს, ასე რომ გაყიდვების, საწყობისა და თანამშრომლების მონაცემები სისტემებს შორის თავად გადადის და ორჯერ შეყვანა აღარ არის საჭირო. ყოველდღიური სამუშაო ერთი პანელიდან იმართება: შეკვეთები, ფასები, კლიენტის კრედიტი, ანგარიშები და ბონუსები.'
    },
    points: [
      { en: 'Orders: Excel import, order entry and order management',
        az: 'Sifarişlər: Excel-dən import, sifariş daxiletmə və idarəetmə',
        tr: "Siparişler: Excel'den içe aktarma, sipariş girişi ve yönetimi",
        ru: 'Заказы: импорт из Excel, ввод и управление заказами',
        ka: 'შეკვეთები: Excel-იდან იმპორტი, შეკვეთის შეყვანა და მართვა' },
      { en: 'Prices and clients: price lists, promotions, credit limits, block and unblock',
        az: 'Qiymətlər və müştərilər: qiymət siyahıları, aksiyalar, kredit limitləri, bloklama və blokdan çıxarma',
        tr: 'Fiyatlar ve müşteriler: fiyat listeleri, kampanyalar, kredi limitleri, bloke etme ve kaldırma',
        ru: 'Цены и клиенты: прайс-листы, акции, кредитные лимиты, блокировка и разблокировка',
        ka: 'ფასები და კლიენტები: ფასების სიები, აქციები, საკრედიტო ლიმიტები, დაბლოკვა და განბლოკვა' },
      { en: 'Reports: sales detail, returns, accounting, and RS.GE to Logo invoice reconciliation',
        az: 'Hesabatlar: satış detalı, qaytarmalar, mühasibat və RS.GE ilə Logo arasında qaimə uzlaşdırması',
        tr: 'Raporlar: satış detayı, iadeler, muhasebe ve RS.GE ile Logo arasında fatura mutabakatı',
        ru: 'Отчёты: детализация продаж, возвраты, бухгалтерия и сверка накладных RS.GE с Logo',
        ka: 'ანგარიშები: გაყიდვების დეტალები, დაბრუნებები, ბუღალტერია და RS.GE-სა და Logo-ს ზედნადებების შედარება' },
      { en: 'Bonuses for clients, drivers and Axata warehouse staff',
        az: 'Müştərilər, sürücülər və Axata anbar işçiləri üçün bonuslar',
        tr: 'Müşteriler, sürücüler ve Axata depo personeli için primler',
        ru: 'Бонусы для клиентов, водителей и складских сотрудников Axata',
        ka: 'ბონუსები კლიენტებისთვის, მძღოლებისთვის და Axata-ს საწყობის თანამშრომლებისთვის' },
      { en: 'Sync actions: Axata warehouse status against Logo stock, driver codes, loading points',
        az: 'Sinxronizasiya: Axata anbar statusu ilə Logo stokunun yoxlanması, sürücü kodları, yükləmə nöqtələri',
        tr: 'Senkronizasyon: Axata depo durumunun Logo stokuyla kontrolü, sürücü kodları, yükleme noktaları',
        ru: 'Синхронизация: статус склада Axata против остатков Logo, коды водителей, точки погрузки',
        ka: 'სინქრონიზაცია: Axata-ს საწყობის სტატუსის შედარება Logo-ს მარაგთან, მძღოლების კოდები, დატვირთვის პუნქტები' },
      { en: 'Settings for databases, users and permissions',
        az: 'Bazalar, istifadəçilər və icazələr üçün ayarlar',
        tr: 'Veritabanları, kullanıcılar ve yetkiler için ayarlar',
        ru: 'Настройки баз данных, пользователей и прав доступа',
        ka: 'მონაცემთა ბაზების, მომხმარებლებისა და უფლებების პარამეტრები' }
    ],
    tags: ['C#', 'Web', 'Logo', 'Axata', 'BioStar', 'RS.GE'],
    video: 'assets/bridge.mp4',
    poster: 'assets/bridge.jpg',
    note: {
      en: 'Internal company system, not public. A live walkthrough is available on request.',
      az: 'Şirkətin daxili sistemidir, ictimaiyyətə açıq deyil. İstəyə görə canlı nümayiş edə bilərəm.',
      tr: 'Şirket içi bir sistemdir, herkese açık değildir. İstek üzerine canlı tanıtım yapabilirim.',
      ru: 'Внутренняя система компании, закрыта для публики. Живую демонстрацию покажу по запросу.',
      ka: 'კომპანიის შიდა სისტემაა, საჯარო არ არის. ცოცხალ დემონსტრაციას მოთხოვნისამებრ გაჩვენებთ.'
    },
    links: []
  },
  {
    name: 'Window Gravity',
    year: '2026',
    kind: {
      en: 'Windows app · open source', az: 'Windows proqramı · açıq mənbə', tr: 'Windows uygulaması · açık kaynak',
      ru: 'Приложение для Windows · open source', ka: 'Windows აპლიკაცია · ღია კოდი'
    },
    tagline: {
      en: 'Your Windows desktop, but with physics.', az: 'Windows masaüstünüz, amma fizika ilə.',
      tr: 'Windows masaüstünüz, ama fizikle.', ru: 'Ваш рабочий стол Windows, но с физикой.',
      ka: 'თქვენი Windows სამუშაო მაგიდა, ოღონდ ფიზიკით.'
    },
    desc: {
      en: 'Grab any window, fling it and let go. It flies, bounces off the screen edges and lands on the taskbar. Throw another one and it stacks on top.',
      az: 'İstənilən pəncərəni tutun, atın və buraxın. Uçur, ekranın kənarlarından sıçrayır və tapşırıq panelinə düşür. Başqasını atın, birincinin üstünə yığılır.',
      tr: 'Herhangi bir pencereyi tutun, fırlatın ve bırakın. Uçar, ekran kenarlarından seker ve görev çubuğuna düşer. Bir tane daha atın, ilkinin üstüne istiflenir.',
      ru: 'Схватите любое окно, бросьте и отпустите. Оно летит, отскакивает от краёв экрана и падает на панель задач. Бросьте ещё одно, и оно ляжет сверху.',
      ka: 'დაიჭირეთ ნებისმიერი ფანჯარა, ისროლეთ და გაუშვით. ის მიფრინავს, ეკრანის კიდეებს ეხეთქება და დავალებების პანელზე ეცემა. ისროლეთ მეორე და ის პირველს ზემოდან დაეწყობა.'
    },
    points: [
      { en: 'Release velocity measured from the mouse drag', az: 'Buraxılış sürəti siçanın hərəkətindən ölçülür',
        tr: 'Bırakma hızı fare sürüklemesinden ölçülür', ru: 'Скорость броска считается по движению мыши',
        ka: 'გაშვების სიჩქარე მაუსის მოძრაობით იზომება' },
      { en: 'Stacking, friction, and Moon / Earth / Jupiter / Zero-G presets', az: 'Üst-üstə yığılma, sürtünmə və Ay / Yer / Yupiter / Sıfır-G rejimləri',
        tr: 'Üst üste dizilme, sürtünme ve Ay / Dünya / Jüpiter / Sıfır-G ayarları', ru: 'Укладка, трение и режимы Луна / Земля / Юпитер / Невесомость',
        ka: 'დაწყობა, ხახუნი და მთვარის / დედამიწის / იუპიტერის / უწონობის რეჟიმები' },
      { en: 'Multi-monitor and high-DPI aware, about 200 KB, lives in the tray', az: 'Çoxlu monitor və yüksək DPI dəstəyi, təxminən 200 KB, sistem tepsisində işləyir',
        tr: 'Çoklu monitör ve yüksek DPI desteği, yaklaşık 200 KB, sistem tepsisinde çalışır', ru: 'Поддержка нескольких мониторов и высокого DPI, около 200 КБ, живёт в трее',
        ka: 'მრავალი მონიტორისა და მაღალი DPI-ის მხარდაჭერა, დაახლოებით 200 KB, მუშაობს სისტემურ უჯრაში' }
    ],
    tags: ['C#', '.NET 9', 'Win32 API'],
    video: 'assets/windowgravity.mp4',
    poster: 'assets/windowgravity.jpg',
    links: [
      { label: 'linkGithub', href: 'https://github.com/Malik-Pashayev/WindowGravity' },
      { label: 'linkDownload', href: 'https://github.com/Malik-Pashayev/WindowGravity/releases' }
    ]
  },
  {
    name: 'Desktop Wardrobe',
    year: '2026',
    kind: {
      en: 'Windows app · open source', az: 'Windows proqramı · açıq mənbə', tr: 'Windows uygulaması · açık kaynak',
      ru: 'Приложение для Windows · open source', ka: 'Windows აპლიკაცია · ღია კოდი'
    },
    tagline: {
      en: 'Hang your desktop clutter on a clothesline.', az: 'Masaüstü dağınıqlığınızı paltar ipinə asın.',
      tr: 'Masaüstü dağınıklığınızı çamaşır ipine asın.', ru: 'Развесьте беспорядок рабочего стола на бельевой верёвке.',
      ka: 'ჩამოკიდეთ სამუშაო მაგიდის არეულობა თოკზე.'
    },
    desc: {
      en: 'Push the mouse against the top of the screen and a rope drops down with your folders pegged to it. Drag things up to hang them and they leave your desktop. Pull them back down when you need them.',
      az: 'Siçanı ekranın yuxarı kənarına itələyin, qovluqlarınız sancaqla bərkidilmiş ip aşağı düşür. Faylları yuxarı sürüşdürüb assanız, masaüstündən yox olurlar. Lazım olanda geri çəkib endirin.',
      tr: 'Fareyi ekranın üst kenarına itin, klasörleriniz mandallarla tutturulmuş bir ip aşağı iner. Bir şeyi yukarı sürükleyip asın, masaüstünüzden kalkar. İhtiyacınız olduğunda geri çekip indirin.',
      ru: 'Подведите мышь к верхнему краю экрана, и опустится верёвка с папками на прищепках. Перетащите что-нибудь наверх, чтобы повесить, и оно уйдёт с рабочего стола. Когда понадобится, просто стяните обратно.',
      ka: 'მიიტანეთ მაუსი ეკრანის ზედა კიდესთან და ჩამოეშვება თოკი, რომელზეც თქვენი საქაღალდეები სამაგრებით კიდია. აიტანეთ ფაილი ზემოთ, ჩამოკიდეთ და ის სამუშაო მაგიდიდან გაქრება. როცა დაგჭირდებათ, უკან ჩამოიღეთ.'
    },
    points: [
      { en: 'Real rope physics: the line sags, dips and sways', az: 'Real ip fizikası: ip sallanır, əyilir və yellənir',
        tr: 'Gerçek ip fiziği: ip sarkar, eğilir ve sallanır', ru: 'Настоящая физика верёвки: она провисает, прогибается и покачивается',
        ka: 'თოკის ნამდვილი ფიზიკა: თოკი ეშვება, იღუნება და ქანაობს' },
      { en: 'Files are moved, never deleted, into a normal folder', az: 'Fayllar heç vaxt silinmir, adi bir qovluğa köçürülür',
        tr: 'Dosyalar asla silinmez, normal bir klasöre taşınır', ru: 'Файлы не удаляются, а переносятся в обычную папку',
        ka: 'ფაილები არასოდეს იშლება, ისინი ჩვეულებრივ საქაღალდეში გადადის' },
      { en: 'Drop items straight from the line into upload areas', az: 'Faylları ipdən birbaşa yükləmə sahələrinə atın',
        tr: 'Öğeleri ipten doğrudan yükleme alanlarına bırakın', ru: 'Перетаскивайте файлы с верёвки прямо в формы загрузки',
        ka: 'ჩააგდეთ ფაილები თოკიდან პირდაპირ ატვირთვის ველებში' }
    ],
    tags: ['C#', '.NET 9', 'Windows Shell'],
    video: 'assets/desktopwardrobe.mp4',
    poster: 'assets/desktopwardrobe.jpg',
    links: [
      { label: 'linkGithub', href: 'https://github.com/Malik-Pashayev/DesktopWardrobe' },
      { label: 'linkDownloadWin', href: 'https://github.com/Malik-Pashayev/DesktopWardrobe/releases/latest' }
    ]
  }
];

// Reusable translated tags
const TAG = {
  logistics: { en: 'Logistics', az: 'Logistika', tr: 'Lojistik', ru: 'Логистика', ka: 'ლოჯისტიკა' },
  multilingual: { en: 'Multilingual', az: 'Çoxdilli', tr: 'Çok dilli', ru: 'Мультиязычный', ka: 'მრავალენოვანი' },
  tracking: { en: 'Tracking', az: 'İzləmə', tr: 'Takip', ru: 'Отслеживание', ka: 'თვალთვალი' },
  calculator: { en: 'Calculator', az: 'Kalkulyator', tr: 'Hesaplayıcı', ru: 'Калькулятор', ka: 'კალკულატორი' },
  georgian: { en: 'Georgian', az: 'Gürcü dili', tr: 'Gürcüce', ru: 'Грузинский', ka: 'ქართული' },
  ecommerce: { en: 'E-commerce', az: 'E-ticarət', tr: 'E-ticaret', ru: 'E-commerce', ka: 'ელ-კომერცია' },
  catalogue: { en: 'Catalogue', az: 'Kataloq', tr: 'Katalog', ru: 'Каталог', ka: 'კატალოგი' },
  internal: { en: 'Internal tool', az: 'Daxili alət', tr: 'Dahili araç', ru: 'Внутренний инструмент', ka: 'შიდა ინსტრუმენტი' },
  news: { en: 'News', az: 'Xəbər', tr: 'Haber', ru: 'Новости', ka: 'ახალი ამბები' },
  video: { en: 'Video', az: 'Video', tr: 'Video', ru: 'Видео', ka: 'ვიდეო' },
  streaming: { en: 'Streaming', az: 'Canlı yayım', tr: 'Canlı yayın', ru: 'Стриминг', ka: 'სტრიმინგი' },
  webapp: { en: 'Web app', az: 'Veb tətbiq', tr: 'Web uygulaması', ru: 'Веб-приложение', ka: 'ვებ აპლიკაცია' },
  hub: { en: 'Hub', az: 'Mərkəz', tr: 'Merkez', ru: 'Хаб', ka: 'ჰაბი' }
};
const KIND_LOGISTICS = { en: 'Logistics · website', az: 'Logistika · sayt', tr: 'Lojistik · web sitesi', ru: 'Логистика · сайт', ka: 'ლოჯისტიკა · საიტი' };

// Client websites shown in the "Websites" grid, in order.
// Video and poster live in assets/sites/<media>.mp4 / .jpg
const SITES = [
  {
    name: 'NGL · Neo Global Logistics', domain: 'nglge.com', media: 'nglge', href: 'https://www.nglge.com/',
    kind: KIND_LOGISTICS,
    desc: {
      en: 'Multilingual site for a Tbilisi freight forwarder working across road, sea, rail and air: services, transport routes, partners and contact, in one fast page.',
      az: 'Avtomobil, dəniz, dəmir yolu və hava daşımaları ilə məşğul olan Tbilisi ekspeditor şirkəti üçün çoxdilli sayt: xidmətlər, marşrutlar, tərəfdaşlar və əlaqə bir sürətli səhifədə.',
      tr: 'Kara, deniz, demiryolu ve hava taşımacılığı yapan Tiflisli bir nakliye şirketi için çok dilli site: hizmetler, taşıma rotaları, ortaklar ve iletişim tek ve hızlı bir sayfada.',
      ru: 'Многоязычный сайт тбилисского экспедитора, работающего с авто-, морскими, ж/д и авиаперевозками: услуги, маршруты, партнёры и контакты на одной быстрой странице.',
      ka: 'მრავალენოვანი საიტი თბილისური ექსპედიტორული კომპანიისთვის, რომელიც სახმელეთო, საზღვაო, სარკინიგზო და საჰაერო გადაზიდვებს ახორციელებს: სერვისები, მარშრუტები, პარტნიორები და კონტაქტი ერთ სწრაფ გვერდზე.'
    },
    tags: [TAG.logistics, TAG.multilingual]
  },
  {
    name: 'PotiShipping', domain: 'potishipping.ge', media: 'potishipping', href: 'https://potishipping.ge/',
    kind: KIND_LOGISTICS,
    desc: {
      en: 'Shipping and logistics company site with shipment tracking, service pages and a global network map, in English, Georgian and Russian, with a dark mode.',
      az: 'Yük izləmə, xidmət səhifələri və qlobal şəbəkə xəritəsi olan daşıma və logistika şirkəti saytı; ingilis, gürcü və rus dillərində, tünd rejimlə.',
      tr: 'Gönderi takibi, hizmet sayfaları ve küresel ağ haritası olan nakliye ve lojistik şirketi sitesi; İngilizce, Gürcüce ve Rusça, karanlık mod ile.',
      ru: 'Сайт транспортно-логистической компании с отслеживанием грузов, страницами услуг и картой глобальной сети, на английском, грузинском и русском, с тёмной темой.',
      ka: 'გადაზიდვებისა და ლოჯისტიკის კომპანიის საიტი ტვირთის თვალთვალით, სერვისების გვერდებით და გლობალური ქსელის რუკით, ინგლისურ, ქართულ და რუსულ ენებზე, მუქი რეჟიმით.'
    },
    tags: [TAG.multilingual, TAG.tracking]
  },
  {
    name: 'Alliance Logistic Group', domain: 'alliancelgroup.com', media: 'alliance', href: 'https://alliancelgroup.com/',
    kind: KIND_LOGISTICS,
    desc: {
      en: 'Georgian logistics company site covering road, sea, air and rail freight and customs clearance, with a cargo cost calculator.',
      az: 'Avtomobil, dəniz, hava və dəmir yolu daşımalarını və gömrük rəsmiləşdirməsini əhatə edən gürcü logistika şirkətinin saytı, yük dəyəri kalkulyatoru ilə.',
      tr: 'Kara, deniz, hava ve demiryolu taşımacılığı ile gümrük işlemlerini kapsayan Gürcü lojistik şirketinin sitesi; yük maliyeti hesaplayıcısı ile.',
      ru: 'Сайт грузинской логистической компании: авто-, морские, авиа- и ж/д перевозки, таможенное оформление и калькулятор стоимости груза.',
      ka: 'ქართული ლოჯისტიკური კომპანიის საიტი სახმელეთო, საზღვაო, საჰაერო და სარკინიგზო გადაზიდვებით, საბაჟო გაფორმებით და ტვირთის ღირებულების კალკულატორით.'
    },
    tags: [TAG.calculator, TAG.georgian]
  },
  {
    name: 'DAPNA Trading Company', domain: 'dapnaltd.com', media: 'dapnaltd', href: 'https://dapnaltd.com/',
    kind: { en: 'E-commerce · online store', az: 'E-ticarət · onlayn mağaza', tr: 'E-ticaret · online mağaza', ru: 'E-commerce · интернет-магазин', ka: 'ელ-კომერცია · ონლაინ მაღაზია' },
    desc: {
      en: 'Online store for a tea distributor: product catalogue, categories, deals of the day and a cart, in Georgian.',
      az: 'Çay distribyutoru üçün onlayn mağaza: məhsul kataloqu, kateqoriyalar, günün təklifləri və səbət, gürcü dilində.',
      tr: 'Bir çay distribütörü için online mağaza: ürün kataloğu, kategoriler, günün fırsatları ve sepet, Gürcüce.',
      ru: 'Интернет-магазин чайного дистрибьютора: каталог товаров, категории, предложения дня и корзина, на грузинском.',
      ka: 'ონლაინ მაღაზია ჩაის დისტრიბუტორისთვის: პროდუქციის კატალოგი, კატეგორიები, დღის შეთავაზებები და კალათა, ქართულ ენაზე.'
    },
    tags: [TAG.ecommerce, TAG.catalogue]
  },
  {
    name: 'DAPNA Employee Portal', domain: 'my.dapnaltd.com', media: 'dapnaportal', href: 'https://my.dapnaltd.com/',
    kind: { en: 'Internal system · HR portal', az: 'Daxili sistem · HR portalı', tr: 'Dahili sistem · İK portalı', ru: 'Внутренняя система · HR-портал', ka: 'შიდა სისტემა · HR პორტალი' },
    desc: {
      en: 'Staff portal for a company with offices in Tbilisi, Batumi, Kutaisi, Telavi and Khashuri. Employees sign in to handle leave, equipment and their documents in one place.',
      az: 'Tbilisi, Batumi, Kutaisi, Telavi və Xaşurida ofisləri olan şirkət üçün işçi portalı. İşçilər daxil olub məzuniyyət, avadanlıq və sənədlərini bir yerdən idarə edirlər.',
      tr: "Tiflis, Batum, Kutaisi, Telavi ve Haşuri'de ofisleri olan bir şirket için personel portalı. Çalışanlar giriş yaparak izin, ekipman ve belgelerini tek yerden yönetir.",
      ru: 'Портал сотрудников компании с офисами в Тбилиси, Батуми, Кутаиси, Телави и Хашури. Сотрудники входят, чтобы оформить отпуск, оборудование и документы в одном месте.',
      ka: 'თანამშრომლების პორტალი კომპანიისთვის, რომელსაც ოფისები აქვს თბილისში, ბათუმში, ქუთაისში, თელავსა და ხაშურში. თანამშრომლები შედიან და შვებულებას, აღჭურვილობასა და დოკუმენტებს ერთ ადგილას მართავენ.'
    },
    tags: ['HR', TAG.internal, 'Auth']
  },
  {
    name: 'Xəbər.ge', domain: 'xeber.ge', media: 'xeber', href: 'https://xeber.ge/',
    kind: { en: 'Media · news portal', az: 'Media · xəbər portalı', tr: 'Medya · haber portalı', ru: 'Медиа · новостной портал', ka: 'მედია · საინფორმაციო პორტალი' },
    desc: {
      en: 'Azerbaijani-language news portal: daily news by category, health and society sections, and exchange rates.',
      az: 'Azərbaycan dilində xəbər portalı: kateqoriyalar üzrə gündəlik xəbərlər, sağlamlıq və cəmiyyət bölmələri, valyuta məzənnələri.',
      tr: 'Azerbaycan Türkçesi haber portalı: kategorilere göre günlük haberler, sağlık ve toplum bölümleri, döviz kurları.',
      ru: 'Новостной портал на азербайджанском: ежедневные новости по рубрикам, разделы о здоровье и обществе, курсы валют.',
      ka: 'აზერბაიჯანულენოვანი საინფორმაციო პორტალი: ყოველდღიური ახალი ამბები კატეგორიებით, ჯანმრთელობისა და საზოგადოების განყოფილებები, ვალუტის კურსები.'
    },
    tags: [TAG.news, 'CMS']
  },
  {
    name: 'İman Media', domain: 'imanmedia.net', media: 'imanmedia', href: 'https://imanmedia.net/',
    kind: { en: 'Media · video and audio portal', az: 'Media · video və audio portalı', tr: 'Medya · video ve ses portalı', ru: 'Медиа · видео- и аудиопортал', ka: 'მედია · ვიდეო და აუდიო პორტალი' },
    desc: {
      en: 'Media portal for watching and listening: a video library, live streams and audio in one place.',
      az: 'İzləmək və dinləmək üçün media portalı: video kitabxanası, canlı yayımlar və audio bir yerdə.',
      tr: 'İzlemek ve dinlemek için medya portalı: video arşivi, canlı yayınlar ve ses kayıtları tek yerde.',
      ru: 'Медиапортал для просмотра и прослушивания: видеотека, прямые эфиры и аудио в одном месте.',
      ka: 'მედია პორტალი საყურებლად და მოსასმენად: ვიდეო ბიბლიოთეკა, პირდაპირი ეთერები და აუდიო ერთ ადგილას.'
    },
    tags: [TAG.video, TAG.streaming]
  },
  {
    name: 'Dinimiz.net', domain: 'dinimiz.net', media: 'dinimiz', href: 'https://dinimiz.net/',
    kind: { en: 'Web app · religious resources hub', az: 'Veb tətbiq · dini resurslar mərkəzi', tr: 'Web uygulaması · dini kaynaklar merkezi', ru: 'Веб-приложение · религиозные ресурсы', ka: 'ვებ აპლიკაცია · რელიგიური რესურსების ცენტრი' },
    desc: {
      en: 'A single home for Islamic resources: Quran, hadith, azan times, books, qibla direction, calendar, mosques, duas, media and infographics.',
      az: 'İslami resurslar üçün vahid məkan: Quran, hədislər, azan vaxtları, kitablar, qiblə istiqaməti, təqvim, məscidlər, dualar, media və infoqrafika.',
      tr: 'İslami kaynaklar için tek adres: Kuran, hadisler, ezan vakitleri, kitaplar, kıble yönü, takvim, camiler, dualar, medya ve infografikler.',
      ru: 'Единое место для исламских ресурсов: Коран, хадисы, время азана, книги, направление киблы, календарь, мечети, дуа, медиа и инфографика.',
      ka: 'ისლამური რესურსების ერთიანი სივრცე: ყურანი, ჰადისები, აზანის დრო, წიგნები, ყიბლის მიმართულება, კალენდარი, მეჩეთები, დუები, მედია და ინფოგრაფიკა.'
    },
    tags: [TAG.webapp, TAG.hub]
  }
];

// Skill groups shown in "Stack".
const STACK_GROUPS = [
  { title: { en: 'Languages', az: 'Dillər', tr: 'Diller', ru: 'Языки', ka: 'ენები' },
    items: ['C#', 'SQL', 'JavaScript', 'HTML & CSS'] },
  { title: { en: 'Platforms', az: 'Platformalar', tr: 'Platformlar', ru: 'Платформы', ka: 'პლატფორმები' },
    items: ['.NET', { en: 'Windows desktop', az: 'Windows masaüstü', tr: 'Windows masaüstü', ru: 'Десктоп Windows', ka: 'Windows დესკტოპი' },
            { en: 'Web', az: 'Veb', tr: 'Web', ru: 'Веб', ka: 'ვები' }] },
  { title: { en: 'Data & business systems', az: 'Verilənlər və biznes sistemləri', tr: 'Veri ve iş sistemleri', ru: 'Данные и бизнес-системы', ka: 'მონაცემები და ბიზნეს სისტემები' },
    items: ['MSSQL', 'Logo', 'Axata', 'BioStar', 'RS.GE',
            { en: 'Reporting', az: 'Hesabatlar', tr: 'Raporlama', ru: 'Отчётность', ka: 'ანგარიშგება' }] },
  { title: { en: 'Work', az: 'İş', tr: 'İş', ru: 'Работа', ka: 'სამუშაო' },
    items: [{ en: 'System architecture', az: 'Sistem arxitekturası', tr: 'Sistem mimarisi', ru: 'Архитектура систем', ka: 'სისტემური არქიტექტურა' },
            { en: 'Integrations', az: 'İnteqrasiyalar', tr: 'Entegrasyonlar', ru: 'Интеграции', ka: 'ინტეგრაციები' },
            { en: 'IT management', az: 'IT idarəetməsi', tr: 'BT yönetimi', ru: 'IT-менеджмент', ka: 'IT მენეჯმენტი' },
            'Git'] }
];

// The windows that fall into the hero desk. "hot" ones use the accent colour.
// Phones only get the ones marked core, so the small desk doesn't overflow.
const DESK_WINDOWS = [
  { label: 'C#', hot: true, core: true }, { label: '.NET', core: true }, { label: 'SQL', core: true }, { label: 'JavaScript', core: true },
  { label: 'MSSQL', core: true }, { label: 'Logo ERP' }, { label: 'HTML & CSS', core: true }, { label: 'Integrations', hot: true, core: true },
  { label: 'Architecture', core: true }, { label: 'Axata' }, { label: 'Git' }, { label: 'BioStar' }
];
