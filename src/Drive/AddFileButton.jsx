import React, { useState } from 'react';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ROOT_FOLDER } from '../hooks/useFolder';
import { storage, database } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

export default function AddFileButton({ currentFolder }) {
  const { currentUser } = useAuth();
  const handleUpload = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    if (currentFolder == null || file == null) return;

    const filePath =
      currentFolder === ROOT_FOLDER
        ? `${currentFolder.path.join('/')}/${file.name}`
        : `${currentFolder.path.join('/')}/${currentFolder.name}/${file.name}`;

    const uploadTask = storage
      .ref(`/files/${currentUser.uid}/${filePath}`)
      .put(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Do something!
      },
      () => {
        // ! Error handler
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          database.files.add({
            url,
            name: file.name,
            createdAt: database.getCurrentTimestamp(),
            folderId: currentFolder.id,
            userId: currentUser.uid,
          });
        });
      }
    );
  };
  return (
    <label className="btn btn-outline-success btn-sm m-0 mr-2">
      <FontAwesomeIcon icon={faFileUpload} />
      <input
        type="file"
        onChange={handleUpload}
        style={{ opacity: 0, position: 'absolute', left: '-9999px' }}
      />
    </label>
  );
}
