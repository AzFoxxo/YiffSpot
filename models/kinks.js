var kinks = [
  '3+ Penetration',
  'Ageplay',
  'Anal',
  'Birthing',
  'Biting',
  'Blood',
  'Bondage',
  'Bukkake',
  'Choking',
  'Condoms',
  'Creampie',
  'Crossdressing',
  'Cuntboys',
  'Deepthroat',
  'Dirty Talking',
  'Docking',
  'Double Penetration',
  'Drug / Alcohol Use',
  'Ear Play',
  'Electric Toys',
  'Enemas',
  'Excessive Cum',
  'Exhibitionism',
  'Face Sitting',
  'Farting',
  'Fellatio',
  'Femboys',
  'Fisting',
  'Flexibility',
  'Foot Play',
  'Frotting',
  'Glory Hole',
  'Group Sex',
  'Growth',
  'Hair Pulling',
  'Handjob / Fingering',
  'Hotdogging',
  'Humiliation',
  'Hyper',
  'Ice',
  'In Heat',
  'Incest',
  'Inflation',
  'Kissing',
  'Knotting',
  'Licking',
  'Living Insertions',
  'Macrophilia',
  'Masturbation',
  'Messy',
  'Microphilia',
  'Mind Control',
  'Musk',
  'Navel Play',
  'Nipple Penetration',
  'Orgasm Control',
  'Oviposition',
  'Pain',
  'Pegging',
  'Pet / Master',
  'Piercings',
  'Pregnancy',
  'Prostitution',
  'Queefing',
  'Rape',
  'Rimming',
  'Saliva',
  'Scat',
  'Scissoring',
  'Scratching',
  'Sex Toys',
  'Sheath Play',
  'Size Difference',
  'Slapping',
  'Sloppy Seconds',
  'Smoking',
  'Snowballing',
  'Strap-ons',
  'Strip Tease',
  'Swallowing',
  'Sweat',
  'Tail Pulling',
  'Tail Sex',
  'Teasing',
  'Tentacles',
  'Tickling',
  'Tomboys',
  'Transformation',
  'Urethra Play',
  'Urine',
  'Vanilla Sex',
  'Virgin',
  'Vorarephilia',
  'Voyeurism',
  'Whipping',
  'Zoophilia'
];


module.exports = {
  getAll: function() {
    return kinks;
  },
  find: function(value) {
    var result = kinks.indexOf(value)

    if (result === -1) {
      return false;
    } else {
      return result;
    }
  }
}