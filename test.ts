import { expect } from 'chai';
import lightJoin from './index';

describe('light-join', () => {
  it(`removed double slashes`, () => {
    expect(lightJoin('hello/world', 'path-to/', '/your//api/')).to.be.equal('hello/world/path-to/your/api/');
    expect(lightJoin('://my-world', 'path-to/', '/your//api/')).to.be.equal(':/my-world/path-to/your/api/');
  });

  it(`doesn't remove protocol`, () => {
    expect(lightJoin('wss://path', 'path-to/', '/your//api/')).to.be.equal('wss://path/path-to/your/api/');
    expect(lightJoin('https://path', 'path-to/', '/your//api/')).to.be.equal('https://path/path-to/your/api/');
  });
});
