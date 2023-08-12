import React from 'react';

export interface FileListProps {
  files: File[];
}

export const FileList = React.memo(
  (props: React.PropsWithChildren<FileListProps>) => (
    <ul>
      {props.files.map((file: File) => (
        <li key={`${file.name}_${file.lastModified}`}>
          <span>{file.name}</span>{' '}
          <span>({Math.round(file.size / 1000)}kb)</span>
        </li>
      ))}
    </ul>
  ),
);

FileList.displayName = 'FileList';
