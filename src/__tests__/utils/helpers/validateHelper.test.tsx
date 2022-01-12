import { ValidateHelper } from '../../../app/utils/helpers/validateHelper'

describe('validateHelper', () => {
    test('Test functoin isValidFileExtension', () => {
        expect(ValidateHelper.isValidFileExtension('test.jpg',['.jpg','.png'])).toEqual(true);
        expect(ValidateHelper.isValidFileExtension('test.JPG',['.png','.JPG'])).toEqual(true);
        expect(ValidateHelper.isValidFileExtension('test.JpG',['.jpg','.png'])).toEqual(true);
        expect(ValidateHelper.isValidFileExtension('test.png',['.jpg','.png'])).toEqual(true);
        expect(ValidateHelper.isValidFileExtension('test.gif',['.jpg','.png','png'])).toEqual(false);
        expect(ValidateHelper.isValidFileExtension('',['.jpg','.png'])).toEqual(false);
        expect(ValidateHelper.isValidFileExtension('test.gif',[])).toEqual(false);
    });
});