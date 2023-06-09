export type User = {
  id: number;
  name: string;
  username: string;
  email?: string;
  address?: {
    street: string;
    suite?: string;
    city: string;
    zipcode?: string;
    geo?: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  } catch (e) {
    console.error('failed fetch');
    return [];
  }
};

export const users = [
  'OrphaBrakus',
  'PatienceSchimmel',
  'AureliaSchowalter',
  'NicholasNader',
  'AiyanaRitchie',
  'EllenJakubowski',
  'AnaisKunze',
  'FavianLubowitz',
  'CareyLegros',
  'AustynGleason',
  'KatarinaKovacek',
  'Mrs_IvahPrice',
  'VergieKlein',
  'JaylenWalker',
  'MillerKling',
  'AgustinaMacejkovicDDS',
  'CecilLockman',
  'LurlineJaskolski',
  'MissAdrienneSchmidt',
  'HaydenMonahan',
  'JohnSpinka',
  'AidenWolf',
  'Ms_ArleneHahn',
  'MozellKovacek',
  'CamylleConnelly',
  'MargueriteO_Keefe',
  'JamalMurphy',
  'WillProsacco',
  'MichealDonnelly',
  'BridgetKuhnJr',
  'JazlynDouglasIV',
  'EmelyRyan',
  'PeterHuel',
  'EstrellaReichel',
  'Mr_RoseRippin',
  'OrlandO_Keefe',
  'MateoLockman',
  'Ms_JaniceHills',
  'BulahWalsh',
  'WaylonBergstrom',
  'SallieMaggio',
  'JaniyaBernier',
  'ArelyStamm',
  'Dr_VanceUllrich',
  'KatlynnSchamberger',
  'MadilynHarris',
  'ElinorJacobi',
  'LarissaMarks',
  'Dr_AmaniHilpert',
  'MateoHermiston',
  'AlessandraOsinski',
  'Mr_JacklynO_Connell',
  'MarisaHaley',
  'LibbieBeatty',
  'MariettaO_Connell',
  'MyleneBlockJr',
  'HarrisonRathII',
  'Mr_JamarDach',
  'JoySenger',
  'MaciBrekke',
  'MissLisaConsidine',
  'ErnaBreitenbergPhD',
  'HowardSchroeder',
  'ClarkFritschDDS',
  'GregoriaBreitenberg',
  'AlexandriaRoob',
  'JosephNitzsche',
  'OllieHane',
  'FelipeSimonisI',
  'BrandyTillman',
  'Dr_SkylaPollich',
  'Dr_GarrisonKeebler',
  'KoryReichelMD',
  'EdgardoMaggio',
  'JabariBeatty',
  'FelixDenesikDDS',
  'ColtenRunolfsdottir',
  'OthoKozey',
  'BrianOlson',
  'FerneSimonis',
  'VernerKlein',
  'MaudBailey',
  'BrainMayert',
  'MissAndresRutherford',
  'LuciusGrantJr',
  'PreciousMertz',
  'Mr_GustaveMoore',
  'JorgeGreenfelder',
  'BernardSpencerII',
  'DelbertHilll',
  'SheridanOsinski',
  'ChanceTromp',
  'AlexandreKertzmann',
  'RhiannaArmstrong',
  'Mr_DejaZulauf',
  'RubieDenesik',
  'DennisLarson',
  'Mrs_AdellaYundt',
  'BridieGoyette',
  'HenrietteMcDermott',
];
