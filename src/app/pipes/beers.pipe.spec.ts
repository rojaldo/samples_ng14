import { BeersPipe } from './beers.pipe';

describe('BeersPipe', () => {
  it('create an instance', () => {
    const pipe = new BeersPipe();
    expect(pipe).toBeTruthy();
  });
});
