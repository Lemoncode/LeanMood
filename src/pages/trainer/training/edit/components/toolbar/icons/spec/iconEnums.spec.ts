import {iconEnums} from '../iconEnums';

describe('iconEnums', () => {
  it('should be defined', () => {
    // Assert
    expect(iconEnums).to.be.not.undefined;
  });

  it('should have keys defined and field / value match', () => {
    // Assert
    expect(iconEnums.bold).to.equals('fa fa-bold');
    expect(iconEnums.bulletedList).to.equals('fa fa-list');
    expect(iconEnums.code).to.equals('fa fa-code');
    expect(iconEnums.header).to.equals('fa fa-header');
    expect(iconEnums.image).to.equals('fa fa-picture-o');
    expect(iconEnums.italic).to.equals('fa fa-italic');
    expect(iconEnums.link).to.equals('fa fa-link');
    expect(iconEnums.numberedList).to.equals('fa fa-list-ol');
    expect(iconEnums.quote).to.equals('fa fa-quote-right');
  });
});
