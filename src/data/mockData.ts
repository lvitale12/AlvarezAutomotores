export interface Vehicle {
  id: string;
  featured?: boolean;
  condition: '0km' | 'usado';
  make: string;
  model: string;
  year: number;
  km: number;
  price: number;
  currency: string;
  image: string;
  gallery: string[];
  category: string;
  transmission: string;
  fuel: string;
  engine: string;
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "ford-raptor",
    featured: true,
    condition: '0km',
    make: "Ford",
    model: "Ranger Raptor",
    year: 2025,
    km: 0,
    price: 0,
    currency: "Consultar",
    image: "/vehicles/ford-raptor/SaveClip.App_616923224_17983643849945310_1729384665862226615_n.jpg",
    gallery: [
      "/vehicles/ford-raptor/SaveClip.App_616923224_17983643849945310_1729384665862226615_n.jpg",
      "/vehicles/ford-raptor/SaveClip.App_613707084_17983643915945310_1505226287511403944_n.jpg",
      "/vehicles/ford-raptor/SaveClip.App_615510366_17983643867945310_4175198646441212565_n.jpg",
      "/vehicles/ford-raptor/SaveClip.App_615708973_17983643876945310_5289912888935082183_n.jpg",
      "/vehicles/ford-raptor/SaveClip.App_615733877_17983643897945310_5387875876404669766_n.jpg",
      "/vehicles/ford-raptor/SaveClip.App_616011996_17983643912945310_3155543739960011992_n.jpg",
      "/vehicles/ford-raptor/SaveClip.App_616201836_17983643840945310_7830121971888359718_n.jpg",
      "/vehicles/ford-raptor/SaveClip.App_616286394_17983643894945310_9023940479126089287_n.jpg",
      "/vehicles/ford-raptor/SaveClip.App_616393185_17983643930945310_5333542338475067093_n.jpg",
      "/vehicles/ford-raptor/SaveClip.App_616470056_17983643933945310_5645865247454944810_n.jpg",
      "/vehicles/ford-raptor/SaveClip.App_617136612_17983643858945310_4895385939451128001_n.jpg"
    ],
    category: "Pick-ups",
    transmission: "Automática 10v",
    fuel: "Diésel",
    engine: "3.0 V6 397cv",
    description: "La pick-up más extrema del mercado argentino. Suspensión FOX Racing, modo Baja, llantas BF Goodrich KO2, diferencial trasero con bloqueo electrónico. Entrega inmediata."
  },
  {
    id: "nissan-frontier",
    condition: '0km',
    make: "Nissan",
    model: "Frontier X-Gear 4x4",
    year: 2025,
    km: 0,
    price: 0,
    currency: "Consultar",
    image: "/vehicles/nissan-frontier/SaveClip.App_651183498_17990452586945310_7139530398310589330_n.jpg",
    gallery: [
      "/vehicles/nissan-frontier/SaveClip.App_651183498_17990452586945310_7139530398310589330_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_652103920_17990452550945310_6785511721285677931_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_652672514_17990452511945310_4863365082578822359_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_652773946_17990452604945310_4081019313810771376_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_652775268_17990452541945310_3546334340552119929_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_652799543_17990452568945310_4682684637219307536_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_653000372_17990452577945310_4705110863296027329_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_653648093_17990452625945310_7784351092732166641_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_654006864_17990452634945310_1426221364020438930_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_654110813_17990452595945310_6476948564518935188_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_654415532_17990452532945310_8842988243872904510_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_654467108_17990452616945310_3281273572112738478_n.jpg",
      "/vehicles/nissan-frontier/SaveClip.App_654628002_17990452559945310_4594399192018475236_n.jpg"
    ],
    category: "Pick-ups",
    transmission: "Automática",
    fuel: "Diésel",
    engine: "2.3 Biturbo 190cv",
    description: "Pick-up robusta y versátil. Tracción 4x4, versión X-Gear con detalles deportivos exclusivos, llantas negras y protecciones laterales. Entrega inmediata."
  },
  {
    id: "vw-amarok-v6",
    condition: '0km',
    make: "Volkswagen",
    model: "Amarok V6 Comfortline 4x4",
    year: 2025,
    km: 0,
    price: 0,
    currency: "Consultar",
    image: "/vehicles/vw-amarok-v6/SaveClip.App_650234597_17990101253945310_3229381592719454275_n.jpg",
    gallery: [
      "/vehicles/vw-amarok-v6/SaveClip.App_650234597_17990101253945310_3229381592719454275_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_650406543_17990101262945310_6483482850857687276_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_650487149_17990101280945310_4028419688909900807_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_651055288_17990101316945310_1021934448800867251_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_651060984_17990101211945310_458382693539898513_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_651061562_17990101307945310_1098510394877846329_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_651064212_17990101325945310_2248436889122443690_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_651104527_17990101271945310_1029209511634071529_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_651162391_17990101235945310_7912622970987438018_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_651794417_17990101289945310_6991940086236408942_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_651836779_17990101244945310_5934514907858925801_n.jpg",
      "/vehicles/vw-amarok-v6/SaveClip.App_652356879_17990101298945310_5428234526589220306_n.jpg"
    ],
    category: "Pick-ups",
    transmission: "Automática 8v",
    fuel: "Diésel",
    engine: "3.0 V6 258cv",
    description: "La pick-up premium del mercado. Motor V6 de 258cv, tracción 4MOTION permanente, caja automática de 8 marchas. Entrega con moño. Consultá financiación."
  },
  {
    id: "chevrolet-onix-lt",
    condition: '0km',
    make: "Chevrolet",
    model: "Onix LT 1.0T",
    year: 2025,
    km: 0,
    price: 12300000,
    currency: "ARS",
    image: "/vehicles/chevrolet-onix-lt/SaveClip.App_652696661_17990403806945310_7987058471299099877_n.jpg",
    gallery: [
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652696661_17990403806945310_7987058471299099877_n.jpg",
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652312484_17990403815945310_5924144216820515023_n.jpg",
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652365706_17990403896945310_7381726661031422409_n.jpg",
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652394496_17990403833945310_6413516662955899605_n.jpg",
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652560919_17990403878945310_268026431697051314_n.jpg",
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652652999_17990403860945310_8717028574966907447_n.jpg",
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652743479_17990403887945310_5670364301135241657_n.jpg",
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652831570_17990403842945310_2068035889441643131_n.jpg",
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652863683_17990403869945310_1651601619816938653_n.jpg",
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652871182_17990403830945310_7407525722853364434_n.jpg",
      "/vehicles/chevrolet-onix-lt/SaveClip.App_652922910_17990403851945310_5337345486539665211_n.jpg"
    ],
    category: "Autos",
    transmission: "Manual",
    fuel: "Nafta",
    engine: "1.0T 116cv",
    description: "¡Llevate tu 0KM hoy! Retiralo con entrega de $12.300.000 o permuta + diferencia. Saldo en 24 cuotas de $833.333. Financiación personalizada."
  },
  {
    id: "toyota-yaris-xs",
    condition: 'usado',
    make: "Toyota",
    model: "Yaris XS",
    year: 2022,
    km: 27000,
    price: 0,
    currency: "Consultar",
    image: "/vehicles/toyota-yaris-xs/SaveClip.App_656278485_17991583676945310_5133665910647982348_n.jpg",
    gallery: [
      "/vehicles/toyota-yaris-xs/SaveClip.App_656278485_17991583676945310_5133665910647982348_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_656267226_17991583733945310_1283371150423401943_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_656269330_17991583742945310_8127811169577040115_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_656278294_17991583724945310_4898639370671191876_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_656284268_17991583706945310_8277771980340943711_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_656284847_17991583646945310_3350713111801008977_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_656292276_17991583658945310_735372096847527990_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_656298418_17991583694945310_8924212942049167431_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_656298966_17991583766945310_8893220759364030733_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_657149333_17991583685945310_7834421326889494887_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_657375420_17991583715945310_8746397912820849975_n.jpg",
      "/vehicles/toyota-yaris-xs/SaveClip.App_658964787_17991583757945310_804355882742526961_n.jpg"
    ],
    category: "Autos",
    transmission: "Manual",
    fuel: "Nafta",
    engine: "1.5 107cv",
    description: "Único dueño. 27.000 km reales. Motor 1.5 Nafta, excelente estado general. Tomamos permutas. Financiación personalizada. Gestión completa desde nuestra oficina."
  }
];
