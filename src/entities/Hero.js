export class Hero {
  constructor(apiHero) {
    this.name = apiHero.name;
    this.avatar = `${apiHero.thumbnail.path}/portrait_uncanny.${apiHero.thumbnail.extension}`;
    this.id = apiHero.id;
  }
}
