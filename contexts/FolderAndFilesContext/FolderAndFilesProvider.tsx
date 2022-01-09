import { createContext, ReactNode, useState } from 'react';

export interface FolderAndFilesContextVals {
  folders: never[];
  files: never[];
  handleFilesAndFolders(): void;
}

export const FolderAndFilesContext = createContext<FolderAndFilesContextVals>({
  folders: [],
  files: [],
  handleFilesAndFolders: () => {},
});

export interface FolderAndFilesProviderProps {
  children: ReactNode;
}

export default function FolderAndFilesProvider({
  children,
}: FolderAndFilesProviderProps) {
  // use the hook useReducer for handle the files and folders
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);

  const handleFilesAndFolders = () => {
    setFiles([]);
    setFolders([]);
  };

  return (
    <FolderAndFilesContext.Provider
      value={{ folders, files, handleFilesAndFolders }}
    >
      {children}
    </FolderAndFilesContext.Provider>
  );
}
