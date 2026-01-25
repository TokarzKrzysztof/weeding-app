const ig = <T extends string>(url: `https://www.instagram.com/${T}/`) => {
  return {
    url,
    name: url.replace('https://www.instagram.com/', '').replace('/', '') as T,
  };
};

export class Contacts {
  static readonly Email = 'sarawasko.kontakt@op.pl';
  static readonly Phone = '+48 512 724 512';
}

export class Links {
  static readonly InstagramProfessional = ig('https://www.instagram.com/fotografia_sarawasko/');
  static readonly InstagramPrivate = ig('https://www.instagram.com/focus_life_travel/');
  static readonly InstagramCake = ig('https://www.instagram.com/cakeart_sara/');
}
