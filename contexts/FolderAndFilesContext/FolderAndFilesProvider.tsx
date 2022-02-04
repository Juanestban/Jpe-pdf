import { createContext, ReactNode, useReducer, Dispatch } from 'react';
import { FolderProps } from '@jpe-reader/components/Molecules/Folder';
import { folderAndFilesReducer } from './FolderAndFilesReducer';

export enum FolderFilesTypes {
  'ADD_FOLDER',
  'REMOVE_FOLDER',
  'UPDATE_FOLDER',
  'ADD_FILE',
  'REMOVE_FILE',
  'UPDATE_FILE',
}

export type FolderFileState = {
  folders: FolderProps[];
  files: FolderProps[];
};

export type FolderFileAction = { type: FolderFilesTypes; payload: FolderProps };

export interface FolderAndFilesContextVals {
  folders: FolderProps[];
  files: FolderProps[];
  dispatch: Dispatch<FolderFileAction>;
}

export const FolderAndFilesContext = createContext<FolderAndFilesContextVals>({
  folders: [],
  files: [],
  dispatch: () => {},
});

export interface FolderAndFilesProviderProps {
  children: ReactNode;
}

const initialValue = { folders: [], files: [] };

export default function FolderAndFilesProvider({
  children,
}: FolderAndFilesProviderProps) {
  const [state, dispatch] = useReducer(folderAndFilesReducer, initialValue);

  return (
    <FolderAndFilesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FolderAndFilesContext.Provider>
  );
}
