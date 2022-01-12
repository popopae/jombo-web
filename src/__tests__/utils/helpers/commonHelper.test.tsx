import { CommonHelper } from '../../../app/utils/helpers/commonHelper'

describe('commonHelper', () => {

    test('Test functoin check duplicate filename', () => {
        jest
            .spyOn(global.Date, 'now')
            .mockImplementationOnce(() =>
                new Date('2020-06-17T11:01:51.135').valueOf()
            );
        const fileList: Array<any> = [];
        fileList.push({ filename: 'vat1.png' });
        expect(CommonHelper.changeDuplFilenameInList(fileList, 'vat1.png', 'filename')).toEqual("vat1_20200617110151.png");
        expect(CommonHelper.changeDuplFilenameInList(fileList, 'vat2.png', 'filename')).toEqual("vat2.png");
        expect(CommonHelper.changeDuplFilenameInList(fileList, 'vat3', 'filename')).toEqual("vat3");
    });

    test('Test functoin formatBranchNumber', () => {
        expect(CommonHelper.formatBranchNumber('01', 5)).toEqual("00001");
        expect(CommonHelper.formatBranchNumber('1', 5)).toEqual("00001");
        expect(CommonHelper.formatBranchNumber('100', 5)).toEqual("00100");
    });

    test('returnValueOrEmptyStringTest', () => {
        expect(CommonHelper.returnValueOrEmptyString(undefined)).toEqual('');
        expect(CommonHelper.returnValueOrEmptyString(null)).toEqual('');
        expect(CommonHelper.returnValueOrEmptyString('')).toEqual('');
        expect(CommonHelper.returnValueOrEmptyString('test')).toEqual('test');
    })

    test('phoneNumberFormatTest', () => {
        expect(CommonHelper.formatPhoneCode(undefined, undefined)).toEqual('');
        expect(CommonHelper.formatPhoneCode(null, null)).toEqual('');
        expect(CommonHelper.formatPhoneCode('', '')).toEqual('');
        expect(CommonHelper.formatPhoneCode('0811111111', '66')).toEqual('+66811111111');
        expect(CommonHelper.formatPhoneCode('+66811111111', '66')).toEqual('+66811111111');
    })
});