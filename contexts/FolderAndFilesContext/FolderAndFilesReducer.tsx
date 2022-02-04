import {
  FolderFilesTypes,
  FolderFileAction,
  FolderFileState,
} from './FolderAndFilesProvider';

export function folderAndFilesReducer(
  state: FolderFileState,
  action: FolderFileAction
) {
  switch (action.type) {
    case FolderFilesTypes.ADD_FILE: {
      return state;
    }
    case FolderFilesTypes.UPDATE_FILE: {
      return state;
    }
    case FolderFilesTypes.REMOVE_FILE: {
      return state;
    }
    case FolderFilesTypes.ADD_FOLDER: {
      return state;
    }
    case FolderFilesTypes.UPDATE_FOLDER: {
      return state;
    }
    case FolderFilesTypes.REMOVE_FOLDER: {
      return state;
    }
    default:
      return state;
  }
}
