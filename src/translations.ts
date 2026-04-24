export type Lang = 'en' | 'ru';

export const translations = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_problem: 'Problem',
    nav_rivers: 'Rivers',
    nav_findings: 'Findings',
    nav_measures: 'Measures',
    nav_conclusion: 'Conclusion',
    nav_references: 'References',

    // Hero
    hero_tag: 'Environmental Sustainability & Water Resources Management 2025',
    hero_title: 'Environmental Protection of the Rivers of Bashkortostan',
    hero_subtitle:
      'A comprehensive study of anthropogenic impact on the major watercourses of the Republic of Bashkortostan — and a roadmap for their preservation.',
    hero_author: 'Arystanov Arsen Beimbetovich',
    hero_affiliation:
      'Bashkir State Pedagogical University named after M. Akmulla, Ufa',
    hero_cta: 'Explore the Study',

    // Abstract
    abstract_title: 'Abstract',
    abstract_text:
      'The article examines the current environmental problems of major watercourses in the Republic of Bashkortostan – the Ay, Belaya, Ufa, Dyoma, Sim, and Yuryuzan rivers. Special attention is paid to the analysis of anthropogenic factors affecting the state of aquatic ecosystems. Based on state monitoring data, the main types of pollution are identified: oil products, heavy metals, biogenic elements, and suspended solids. Recreational load is assessed, showing multiple exceedances of standard values on popular tourist routes. A set of environmental protection measures is substantiated, including the expansion of the monitoring network, the introduction of automated water quality control systems, the organization of separate waste collection at equipped campsites, as well as the improvement of the regime of water protection zones.',
    keywords_label: 'Keywords:',
    keywords:
      'rivers of the Republic of Bashkortostan, water resources, river ecology, pollution of water bodies, environmental protection, environmental monitoring, recreational load.',

    // Introduction
    intro_title: '1. Introduction',
    intro_p1:
      'Water resources are a critical component of natural ecosystems and play a significant role in maintaining the ecological balance of natural territories. Rivers perform numerous ecological functions, including the preservation of biological diversity, the formation of natural landscapes, the regulation of hydrological regimes, and the support of human livelihoods. Under conditions of increasing anthropogenic pressure, the protection of water bodies becomes particularly relevant.',
    intro_p2:
      'The Republic of Bashkortostan has a dense river network, comprising thousands of watercourses with a considerable total length. The largest rivers – the Belaya (Agidel), Ufa, Dyoma, Sim, Yuryuzan, and Ay – form the basis of the region\'s water resources, supplying water to industrial centers, agricultural lands, and settlements. These rivers are important natural and tourist attractions, drawing thousands of visitors annually.',
    intro_p3:
      'In recent decades, there has been an increase in anthropogenic pressure on natural water bodies, leading to a deterioration of their ecological state. The main impact factors are related to tourism development, urbanization, industrial production, and agricultural activities.',

    // Problem
    problem_title: '2. Problem Statement',
    problem_intro:
      'The main problem addressed in this study is the increasing anthropogenic impact on the river ecosystems of the Southern Urals, particularly within the territory of the Republic of Bashkortostan. Despite the high natural and recreational value of the region\'s major watercourses, their ecological condition is steadily degrading. The key factors include:',
    problem_items: [
      'Pollution of coastal zones with household waste, especially in areas of active tourism and unauthorized campsites',
      'High recreational load, leading to degradation of soil and vegetation cover, soil compaction, and destruction of rare plant species',
      'Destruction of coastal ecosystems due to vegetation disturbance and the development of erosion processes',
      'Diffuse pollution from agricultural and urbanized areas (biogenic elements, pesticides, oil products)',
      'Industrial and thermal discharges, especially in the basins of rivers where large industrial centers are located',
      'Insufficient environmental protection infrastructure (lack of equipped waste collection sites, toilets, information boards)',
      'Lack of systematic environmental monitoring on small rivers and weak interregional coordination for transboundary watercourses',
    ],
    problem_footer:
      'These problems are exacerbated by the low environmental awareness of a significant portion of tourists and local residents, as well as the insufficient effectiveness of law enforcement in water protection zones.',

    // Rivers
    rivers_title: 'The Rivers Under Study',
    rivers_subtitle:
      'Six major watercourses of the Republic of Bashkortostan were analysed',
    river_ay_name: 'Ay River',
    river_ay_desc:
      'Transboundary river with colossal recreational load. Tens of thousands of tourists visit annually during the rafting season, causing significant waste accumulation and bank erosion.',
    river_belaya_name: 'Belaya (Agidel) River',
    river_belaya_desc:
      'The largest river of Bashkortostan. Industrial agglomerations cause oil product and phenol influx via stormwater runoff, alongside eutrophication processes in the lower reaches.',
    river_ufa_name: 'Ufa River',
    river_ufa_desc:
      'Experiences additional hydropower pressure. Daily flow variability has led to channel deformation, reduction in spawning grounds, and elevated iron and manganese concentrations.',
    river_dyoma_name: 'Dyoma River',
    river_dyoma_desc:
      'Small, sensitive river heavily affected by biogenic elements from agricultural lands, leading to significant exceedances of nitrate and phosphate standards.',
    river_sim_name: 'Sim River',
    river_sim_desc:
      'Key problem is the discharge of untreated stormwater from urban areas, causing multiple increases in suspended solids content.',
    river_yuryuzan_name: 'Yuryuzan River',
    river_yuryuzan_desc:
      'Transboundary river receiving heavy metal influx from mining and metallurgical enterprises in neighboring regions, with concentrations many times exceeding permissible levels.',

    // Findings
    findings_title: '6. Findings',
    findings_subtitle: 'Key environmental challenges identified across all basins',
    finding1_title: 'Heavy Metal Contamination',
    finding1_desc:
      'Discharges from mining and metallurgical enterprises in neighboring regions lead to influx of copper, zinc, and iron at concentrations many times exceeding permissible levels in transboundary rivers.',
    finding2_title: 'Recreational Overload',
    finding2_desc:
      'The most visited sections experience a density of vacationers tens of times higher than permissible during peak days, causing soil compaction, root exposure, and vegetation loss.',
    finding3_title: 'Industrial Pollution',
    finding3_desc:
      'Oil products, phenols, and biogenic elements enter rivers via stormwater from industrial zones. Eutrophication is observed in lower reaches with elevated phosphates and ammonium nitrogen.',
    finding4_title: 'Agricultural Runoff',
    finding4_desc:
      'Small rivers like Dyoma show significant exceedances of nitrate and phosphate standards from biogenic elements originating in adjacent agricultural lands.',
    finding5_title: 'Monitoring Gaps',
    finding5_desc:
      'The existing network of stationary sampling points is insufficient. Sudden discharges and seasonal changes often go undetected, especially in transboundary sections.',
    finding6_title: 'Biodiversity Decline',
    finding6_desc:
      'The number of valuable fish species, such as sterlet, has decreased severalfold over recent decades. Hydropower operation has reduced spawning grounds significantly.',

    // Stats
    stats_title: 'By the Numbers',
    stat1_value: '6',
    stat1_label: 'Major rivers studied',
    stat2_value: '10×+',
    stat2_label: 'Recreational load exceedance on peak days',
    stat3_value: '3',
    stat3_label: 'Types of main pollution sources',
    stat4_value: '2025',
    stat4_label: 'Year of publication',

    // Measures
    measures_title: '7. Environmental Protection Measures',
    measures_subtitle: 'A differentiated, basin-specific set of solutions',
    measure1_title: 'Monitoring Expansion',
    measure1_items: [
      'Expand the network of stationary sampling points on transboundary and small rivers',
      'Install automatic water quality monitoring stations with real-time data transmission',
      'Increase sampling frequency during flood periods and peak recreation times',
    ],
    measure2_title: 'Recreational Load Management',
    measure2_items: [
      'Create equipped tourist campsites with separate waste collection, chemical toilets, and information boards',
      'Introduce campsite booking systems with capacity limits via digital services',
      'Limit the number of rafting groups on popular sections',
      'Conduct regular environmental clean-up events with volunteer involvement',
      'Ban open fires outside designated areas with administrative liability',
    ],
    measure3_title: 'Industrial Pollution Reduction',
    measure3_items: [
      'Modernize storm sewer treatment facilities in large cities to meet fishery water quality standards',
      'Introduce recirculating water supply systems at petrochemical enterprises',
      'Create water protection zones with buffer strips on agricultural lands',
      'Restore natural riparian vegetation in degraded areas',
    ],
    measure4_title: 'Interregional Cooperation',
    measure4_items: [
      'Conclude agreements between neighboring regions on joint management of transboundary basins',
      'Develop a unified monitoring program and harmonized discharge standards',
      'Create joint inspection teams and an interregional environmental control center',
    ],
    measure5_title: 'Environmental Education',
    measure5_items: [
      'Include water body protection modules in teacher professional development programs',
      'Hold annual environmental project competitions among schools and universities',
      'Develop and disseminate informational materials with conduct rules on water bodies',
    ],

    // Conclusion
    conclusion_title: '8. Conclusion',
    conclusion_p1:
      'The results of the study indicate the presence of several environmental problems that negatively affect the state of the major rivers of the Republic of Bashkortostan. The main contributing factors are household waste pollution, high tourist load, disturbance of coastal ecosystems, and industrial discharges.',
    conclusion_p2:
      'To preserve the natural potential of the rivers, an integrated approach is required: expansion and modernization of the environmental monitoring system; regular environmental protection actions; development of ecological tourism infrastructure taking into account maximum permissible recreational loads; formation of environmental culture among the population through education and information campaigns; and intensification of interregional cooperation.',
    conclusion_p3:
      'Implementation of the proposed measures will improve the ecological state of the rivers of Bashkortostan, preserve their biological diversity, and ensure the sustainable use of water resources for future generations. To achieve a sustainable result, it is necessary to adopt a long-term state program with adequate funding and create an interdepartmental coordination council under the Government of the Republic of Bashkortostan.',

    // References
    references_title: 'References',
    ref1: 'Ivanov, V.P. (2018). Ekologiya vodnykh resursov Rossii [Ecology of Water Resources of Russia]. Moscow: Nauka.',
    ref2: 'Petrov, A.A. (2020). Okhrana prirodnykh ekosistem Yuzhnogo Urala [Protection of Natural Ecosystems of the Southern Urals]. Ufa: BashSU.',
    ref3: 'Sidorov, N.N. (2019). Ekologicheskiy monitoring rek i vodoemov [Ecological Monitoring of Rivers and Reservoirs]. St. Petersburg: Gidrometeoizdat.',
    ref4: 'Materials of the Ministry of Environmental Management and Ecology of the Republic of Bashkortostan. State Report "On the State of Natural Resources and the Environment of the Republic of Bashkortostan". Ufa.',
    ref5: 'Khaziakhmetov, R.M. (2017). Gidroekologiya basseyna reki Beloy [Hydroecology of the Belaya River Basin]. Ufa: Gilem.',
    ref6: 'Gareev, A.M., & Galimova, R.G. (2021). Antropogennaya nagruzka na rekreatsionnyye territorii Yuzhnogo Urala [Anthropogenic Load on Recreational Areas of the Southern Urals]. Ufa: Bashkirskaya entsiklopediya.',
    ref7: 'Report on the State of the Environment of Chelyabinsk Oblast. Chelyabinsk: Ministry of Environment of Chelyabinsk Oblast.',

    // Footer
    footer_text: '© 2025 Arystanov Arsen Beimbetovich · Bashkir State Pedagogical University named after M. Akmulla',
  },

  ru: {
    // Nav
    nav_home: 'Главная',
    nav_problem: 'Проблема',
    nav_rivers: 'Реки',
    nav_findings: 'Результаты',
    nav_measures: 'Меры',
    nav_conclusion: 'Заключение',
    nav_references: 'Литература',

    // Hero
    hero_tag: 'Экологическая устойчивость и управление водными ресурсами 2025',
    hero_title: 'Охрана окружающей среды и сохранение рек Башкортостана',
    hero_subtitle:
      'Комплексное исследование антропогенного воздействия на крупнейшие водотоки Республики Башкортостан — и план их сохранения.',
    hero_author: 'Арыстанов Арсен Беимбетович',
    hero_affiliation:
      'Башкирский государственный педагогический университет им. М. Акмуллы, Уфа',
    hero_cta: 'Изучить исследование',

    // Abstract
    abstract_title: 'Аннотация',
    abstract_text:
      'В статье рассматриваются актуальные экологические проблемы крупных водотоков Республики Башкортостан – рек Ай, Белая, Уфа, Дёма, Сим и Юрюзань. Особое внимание уделено анализу антропогенных факторов, воздействующих на состояние водных экосистем. На основе данных государственного мониторинга выявлены основные виды загрязнения: нефтепродукты, тяжёлые металлы, биогенные элементы и взвешенные вещества. Дана оценка рекреационной нагрузки, выявлено многократное превышение нормативных значений на популярных туристических маршрутах. Обоснован комплекс природоохранных мер, включающий расширение сети мониторинга, внедрение автоматизированных систем контроля качества воды, организацию раздельного сбора отходов на оборудованных стоянках, а также совершенствование режима водоохранных зон.',
    keywords_label: 'Ключевые слова:',
    keywords:
      'реки Республики Башкортостан, водные ресурсы, экология рек, загрязнение водоёмов, охрана окружающей среды, экологический мониторинг, рекреационная нагрузка.',

    // Introduction
    intro_title: '1. Введение',
    intro_p1:
      'Водные ресурсы являются важнейшим компонентом природных экосистем и играют значительную роль в поддержании экологического баланса природных территорий. Реки выполняют многочисленные экологические функции, включая сохранение биологического разнообразия, формирование природных ландшафтов, регулирование гидрологических режимов и обеспечение жизнедеятельности человека. В условиях возрастающего антропогенного давления защита водных объектов приобретает особую актуальность.',
    intro_p2:
      'Республика Башкортостан обладает густой речной сетью, насчитывающей тысячи водотоков значительной суммарной длины. Крупнейшие реки – Белая (Агидель), Уфа, Дёма, Сим, Юрюзань и Ай – составляют основу водных ресурсов региона, обеспечивая водой промышленные центры, сельскохозяйственные угодья и населённые пункты. Эти реки являются важными природными и туристическими объектами, привлекающими ежегодно тысячи посетителей.',
    intro_p3:
      'В последние десятилетия наблюдается усиление антропогенного давления на природные водные объекты, что ведёт к ухудшению их экологического состояния. Основные факторы воздействия связаны с развитием туризма, урбанизацией, промышленным производством и сельскохозяйственной деятельностью.',

    // Problem
    problem_title: '2. Постановка проблемы',
    problem_intro:
      'Основная проблема, рассматриваемая в данном исследовании, – нарастающее антропогенное воздействие на речные экосистемы Южного Урала, в первую очередь на территории Республики Башкортостан. Несмотря на высокую природную и рекреационную ценность крупных водотоков региона, их экологическое состояние неуклонно ухудшается. Ключевые факторы:',
    problem_items: [
      'Загрязнение прибрежных зон бытовыми отходами, особенно в районах активного туризма и несанкционированных стоянок',
      'Высокая рекреационная нагрузка, ведущая к деградации почвенного и растительного покрова, уплотнению грунта и уничтожению редких видов растений',
      'Разрушение прибрежных экосистем вследствие нарушения растительности и развития эрозионных процессов',
      'Диффузное загрязнение с сельскохозяйственных и урбанизированных территорий (биогенные элементы, пестициды, нефтепродукты)',
      'Промышленные и тепловые сбросы, особенно в бассейнах рек, на берегах которых расположены крупные промышленные центры',
      'Недостаточная природоохранная инфраструктура (отсутствие оборудованных мест сбора отходов, туалетов, информационных щитов)',
      'Отсутствие систематического экологического мониторинга малых рек и слабая межрегиональная координация по трансграничным водотокам',
    ],
    problem_footer:
      'Эти проблемы усугубляются низкой экологической культурой значительной части туристов и местных жителей, а также недостаточной эффективностью правоохранительной деятельности в водоохранных зонах.',

    // Rivers
    rivers_title: 'Исследуемые реки',
    rivers_subtitle:
      'Проанализированы шесть крупных водотоков Республики Башкортостан',
    river_ay_name: 'Река Ай',
    river_ay_desc:
      'Трансграничная река с колоссальной рекреационной нагрузкой. Ежегодно в сезон сплава её посещают десятки тысяч туристов, что приводит к накоплению отходов и разрушению берегов.',
    river_belaya_name: 'Река Белая (Агидель)',
    river_belaya_desc:
      'Крупнейшая река Башкортостана. Промышленные агломерации обусловливают поступление нефтепродуктов и фенолов со стоками ливневой канализации, а также процессы эвтрофикации в нижнем течении.',
    river_ufa_name: 'Река Уфа',
    river_ufa_desc:
      'Испытывает дополнительную нагрузку от гидроэнергетики. Суточная изменчивость стока привела к деформации русла, сокращению нерестилищ и повышенному содержанию железа и марганца.',
    river_dyoma_name: 'Река Дёма',
    river_dyoma_desc:
      'Малая чувствительная река, сильно страдающая от биогенных элементов с сельскохозяйственных угодий, что приводит к значительному превышению норм по нитратам и фосфатам.',
    river_sim_name: 'Река Сим',
    river_sim_desc:
      'Ключевая проблема – сброс неочищенных ливневых стоков с городских территорий, вызывающий многократный рост содержания взвешенных веществ.',
    river_yuryuzan_name: 'Река Юрюзань',
    river_yuryuzan_desc:
      'Трансграничная река, получающая тяжёлые металлы от горно-металлургических предприятий соседних регионов в концентрациях, многократно превышающих допустимые уровни.',

    // Findings
    findings_title: '6. Результаты исследования',
    findings_subtitle: 'Основные экологические проблемы всех бассейнов',
    finding1_title: 'Загрязнение тяжёлыми металлами',
    finding1_desc:
      'Сбросы горно-металлургических предприятий соседних регионов обусловливают поступление меди, цинка и железа в трансграничные реки в концентрациях, многократно превышающих допустимые.',
    finding2_title: 'Рекреационные перегрузки',
    finding2_desc:
      'В наиболее посещаемых местах в пиковые дни плотность отдыхающих в десятки раз превышает допустимую, вызывая уплотнение почвы, обнажение корней и потерю травяного покрова.',
    finding3_title: 'Промышленное загрязнение',
    finding3_desc:
      'Нефтепродукты, фенолы и биогенные элементы поступают в реки со стоками из промышленных зон. В нижнем течении наблюдается эвтрофикация с повышенным содержанием фосфатов и аммонийного азота.',
    finding4_title: 'Сельскохозяйственный сток',
    finding4_desc:
      'Малые реки, в частности Дёма, демонстрируют значительное превышение норм по нитратам и фосфатам вследствие поступления биогенных элементов с прилегающих сельскохозяйственных угодий.',
    finding5_title: 'Пробелы в мониторинге',
    finding5_desc:
      'Существующая сеть стационарных точек отбора проб недостаточна. Внезапные сбросы и сезонные изменения нередко остаются незафиксированными, особенно на трансграничных участках.',
    finding6_title: 'Снижение биоразнообразия',
    finding6_desc:
      'Численность ценных видов рыб, в частности стерляди, за последние десятилетия сократилась в несколько раз. Работа ГЭС существенно уменьшила площадь нерестилищ.',

    // Stats
    stats_title: 'Цифры и факты',
    stat1_value: '6',
    stat1_label: 'Крупных рек исследовано',
    stat2_value: '10×+',
    stat2_label: 'Превышение рекреационной нагрузки в пиковые дни',
    stat3_value: '3',
    stat3_label: 'Основных типа источников загрязнения',
    stat4_value: '2025',
    stat4_label: 'Год публикации',

    // Measures
    measures_title: '7. Природоохранные меры',
    measures_subtitle: 'Дифференцированный комплекс решений по бассейнам',
    measure1_title: 'Расширение мониторинга',
    measure1_items: [
      'Расширить сеть стационарных точек отбора проб на трансграничных и малых реках',
      'Установить автоматические станции мониторинга качества воды с передачей данных в реальном времени',
      'Увеличить частоту отбора проб в паводковые периоды и в пики рекреационной нагрузки',
    ],
    measure2_title: 'Управление рекреационной нагрузкой',
    measure2_items: [
      'Создать оборудованные туристические стоянки с раздельным сбором отходов, биотуалетами и информационными щитами',
      'Внедрить систему бронирования стоянок через цифровые сервисы с ограничением вместимости',
      'Ограничить количество групп сплавщиков на популярных участках',
      'Проводить регулярные экологические акции по уборке с привлечением волонтёров',
      'Ввести запрет на разведение костров вне отведённых мест с административной ответственностью',
    ],
    measure3_title: 'Снижение промышленного загрязнения',
    measure3_items: [
      'Модернизировать очистные сооружения ливневой канализации в крупных городах до норм рыбохозяйственного водопользования',
      'Внедрить системы оборотного водоснабжения на нефтехимических предприятиях',
      'Создать водоохранные зоны с буферными полосами на сельскохозяйственных землях',
      'Восстановить естественную прибрежную растительность на деградировавших участках',
    ],
    measure4_title: 'Межрегиональное сотрудничество',
    measure4_items: [
      'Заключить соглашения между соседними регионами о совместном управлении трансграничными бассейнами',
      'Разработать единую программу мониторинга и согласованные нормативы сбросов',
      'Создать совместные инспекционные группы и межрегиональный центр экологического контроля',
    ],
    measure5_title: 'Экологическое просвещение',
    measure5_items: [
      'Включить модуль по охране водных объектов в программы повышения квалификации педагогов',
      'Проводить ежегодные конкурсы экологических проектов среди школ и вузов с грантовой поддержкой',
      'Разработать и распространить информационные материалы с правилами поведения на водных объектах',
    ],

    // Conclusion
    conclusion_title: '8. Заключение',
    conclusion_p1:
      'Результаты исследования свидетельствуют о наличии ряда экологических проблем, негативно влияющих на состояние крупных рек Республики Башкортостан. Основные факторы ухудшения экологической ситуации – загрязнение бытовыми отходами, высокая туристическая нагрузка, нарушение прибрежных экосистем и промышленные сбросы.',
    conclusion_p2:
      'Для сохранения природного потенциала рек необходим комплексный подход: расширение и модернизация системы экологического мониторинга; регулярные природоохранные акции; развитие инфраструктуры экологического туризма с учётом предельно допустимых рекреационных нагрузок; формирование экологической культуры населения через образование и информационные кампании; интенсификация межрегионального сотрудничества.',
    conclusion_p3:
      'Реализация предложенных мер позволит улучшить экологическое состояние рек Башкортостана, сохранить их биологическое разнообразие и обеспечить устойчивое использование водных ресурсов для будущих поколений. Для достижения устойчивого результата необходимо принять долгосрочную государственную программу с надлежащим финансированием и создать межведомственный координационный совет при Правительстве Республики Башкортостан.',

    // References
    references_title: 'Список литературы',
    ref1: 'Иванов В.П. (2018). Экология водных ресурсов России. М.: Наука.',
    ref2: 'Петров А.А. (2020). Охрана природных экосистем Южного Урала. Уфа: БашГУ.',
    ref3: 'Сидоров Н.Н. (2019). Экологический мониторинг рек и водоёмов. СПб.: Гидрометеоиздат.',
    ref4: 'Материалы Министерства природопользования и экологии Республики Башкортостан. Государственный доклад «О состоянии природных ресурсов и окружающей среды Республики Башкортостан». Уфа.',
    ref5: 'Хазиахметов Р.М. (2017). Гидроэкология бассейна реки Белой. Уфа: Гилем.',
    ref6: 'Гареев А.М., Галимова Р.Г. (2021). Антропогенная нагрузка на рекреационные территории Южного Урала. Уфа: Башкирская энциклопедия.',
    ref7: 'Доклад о состоянии окружающей среды Челябинской области. Челябинск: Министерство экологии Челябинской области.',

    // Footer
    footer_text: '© 2025 Арыстанов Арсен Беимбетович · Башкирский государственный педагогический университет им. М. Акмуллы',
  },
};
