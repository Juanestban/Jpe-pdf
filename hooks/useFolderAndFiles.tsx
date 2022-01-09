import { useContext } from 'react';
import { FolderAndFilesContext } from '@jpe-reader/contexts/FolderAndFilesContext';

export const useFolderAndFiles = () => useContext(FolderAndFilesContext);
