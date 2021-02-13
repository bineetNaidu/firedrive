import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import { useFolder } from '../hooks/useFolder';
import AddFileButton from './AddFileButton';
import AddFolderBtn from './AddFolderBtn';
import File from './File';
import Folder from './Folder';
import FolderBreadcrumbs from './FolderBreadcrumbs';
import DriveNavbar from './Navbar';

const Dashboard = () => {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );

  return (
    <>
      <DriveNavbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderBtn currentFolder={folder} />
        </div>
        {childFolders?.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: '250px' }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {/* {childFolders.length > 0 && childFiles.length > 0 && <hr />} */}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childFile) => (
              <div
                key={childFile.id}
                style={{ maxWidth: '250px' }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
