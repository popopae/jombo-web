import { FileActions } from '../../app/actions/file.action';
import fetchMock from 'fetch-mock'
import { UploadFileResponse } from '../../app/models/payload/file/uploadedFileResponse'
import FileService from '../../app/services/fileService';
import { File } from '../../../types/react-app-env';
import { DownloadFilesResponse } from '../../app/models/payload/file/downloadFileResponse';

describe('FileActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("uploadFile: Type.UPLOAD_FILE_SUCCESS", () => {
        const request : File[] = []
        const response: UploadFileResponse = {}

        const spyOne = jest.spyOn(FileService, 'upload').mockImplementation(
            ( request, foldername, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        FileActions.uploadFile(request, "mock-folder-name")(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: FileActions.Type.UPLOAD_FILE_SUCCESS,
            payload: response
        }]);
    });

    test("uploadFile: Type.UPLOAD_FILE_FAILED", () => {
        const request : File[] = []
        const response: UploadFileResponse = {}

        const spyOne = jest.spyOn(FileService, 'upload').mockImplementation(
            ( request, foldername, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        FileActions.uploadFile(request, "mock-folder-name")(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: FileActions.Type.UPLOAD_FILE_FAILED,
            payload: response
        }]);
    });

    test("downloadFile: Type.DOWNLOAD_FILE_SUCCESS", () => {
        const response: DownloadFilesResponse = {downloadingFilesProgress: 1,
                                                    downloadingFilesUniqueName:""};

        const spyOne = jest.spyOn(FileService, 'download').mockImplementation(
            ( name, uniqueName, foldername, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        FileActions.downloadFile("mock-name", "mock-unique-name", "mock-folder-name")(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: FileActions.Type.DOWNLOAD_FILE_SUCCESS,
            payload: response
        }]);
    });

});