describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes.', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then((el) => {
      expect(el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes.', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then((el) => {
      expect(el).to.have.value(33);
    });
  });

  it('Volume of audio changes when slider changes.', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then((el) => {
      expect(el).to.have.prop('volume', 0.33);
    });
  });
  
  it('Image and sound sources change when air horn is selected.', () => {
    cy.get('#radio-air-horn').check();
    cy.get('#sound-image').should('have.attr', 'src').should('contains', 'air-horn.svg');
    cy.get('#horn-sound').should('have.attr', 'src').should('contains', 'air-horn.mp3');
  });

  it('Image and sound sources change when car horn is selected.', () => {
    cy.get('#radio-car-horn').check();
    cy.get('#sound-image').should('have.attr', 'src').should('contains', 'car.svg');
    cy.get('#horn-sound').should('have.attr', 'src').should('contains', 'car-horn.mp3');
  });

  it('Image and sound source change when party horn is selected.', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').should('have.attr', 'src').should('contains', 'party-horn.svg');
    cy.get('#horn-sound').should('have.attr', 'src').should('contains', 'party-horn.mp3');
  });


  it('Volume icon changes to level 0 when volume number is 0.', () => {
    cy.get('#volume-number').clear().type(0);
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-0.svg');
  });
  it('Volume icon changes to level 0 when volume slider is 0.', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-0.svg');
  });


  it('Volume icon changes to level 1 when volume number is 1.', () => {
    cy.get('#volume-number').clear().type(1);
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-1.svg');
  });
  it('Volume icon changes to level 1 when volume slider is 1.', () => {
    cy.get('#volume-slider').invoke('val', 1).trigger('input');
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-1.svg');
  });
  it('Volume icon changes to level 1 when volume number is 33.', () => {
    cy.get('#volume-number').clear().type(33);
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-1.svg');
  });
  it('Volume icon changes to level 1 when volume slider is 33.', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-1.svg');
  });


  it('Volume icon changes to level 2 when volume number is 34.', () => {
    cy.get('#volume-number').clear().type(34);
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-2.svg');
  });
  it('Volume icon changes to level 2 when volume slider is 34.', () => {
    cy.get('#volume-slider').invoke('val', 34).trigger('input');
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-2.svg');
  });
  it('Volume icon changes to level 2 when volume number is 66.', () => {
    cy.get('#volume-number').clear().type(66);
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-2.svg');
  });
  it('Volume icon changes to level 2 when volume slider is 66.', () => {
    cy.get('#volume-slider').invoke('val', 66).trigger('input');
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-2.svg');
  });


  it('Volume icon changes to level 3 when volume number is 67.', () => {
    cy.get('#volume-number').clear().type(67);
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-3.svg');
  });
  it('Volume icon changes to level 3 when volume slider is 67.', () => {
    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-3.svg');
  });
  it('Volume icon changes to level 3 when volume number is 100.', () => {
    cy.get('#volume-number').clear().type(100);
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-3.svg');
  });
  it('Volume icon changes to level 3 when volume slider is 100.', () => {
    cy.get('#volume-slider').invoke('val', 100).trigger('input');
    cy.get('#volume-image').should('have.attr', 'src').should('contains', 'volume-level-3.svg');
  });


  it('Honk button disabled when volume input is empty.', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').should('be.disabled');
  });

  it('Honk button disabled when volume input is not a number.', () => {
    cy.get('#volume-number').clear().type('Testing message as a non-number');
    cy.get('#honk-btn').should('be.disabled');
  });


  it('Display error when the volume input is < 0.', () => {
    cy.get('#volume-number').clear().type(-1);
    cy.get('input:invalid').should('have.length', 1);
  });

  it('Display error when the volume input is > 100.', () => {
    cy.get('#volume-number').clear().type(101);
    cy.get('input:invalid').should('have.length', 1);
  });
});