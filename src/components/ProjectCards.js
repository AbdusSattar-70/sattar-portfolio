import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Row, Col } from 'react-bootstrap';
import {
  FaGithub, FaArrowUpRightFromSquare, FaXmark, FaHandsHoldingCircle, FaCircleUser,
} from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';
import Tippy from '@tippyjs/react';
import projectInfo from '../data/projectInfo';

const ProjectCards = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  if (!projectInfo || projectInfo.length === 0) {
    return <div>No projects found.</div>;
  }

  return (

    <div className="projectCard">
      {projectInfo.map((project) => (
        <Tippy content="To See Details Click On It" key={uuid()}>
          <div key={uuid()}>
            <button
              type="button"
              className="boxshadow projectCardBtn"
              onClick={() => openProjectModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="d-block w-100 h-100 projectImg"
              />
              <h3 className="mt-2">
                {project.title}
                {' '}
                <span>
                  <FaHandsHoldingCircle className="iconSize" />
                  {' '}
                  {project.made}
                </span>
              </h3>
              <ul className="d-flex flex-wrap justify-content-between">
                {project.technologies.map((tech) => (
                  <li key={uuid()} className="techStyle">
                    {tech}
                  </li>
                ))}
              </ul>
            </button>
          </div>
        </Tippy>

      ))}

      <Modal
        show={!!selectedProject}
        onHide={closeProjectModal}
        dialogClassName="custom-modal"
      >
        {selectedProject && (
          <ProjectModalContent project={selectedProject} onClose={closeProjectModal} />
        )}
      </Modal>
    </div>
  );
};

const ProjectModalContent = ({ project, onClose }) => (
  <div>
    <Modal.Header className="border">
      <Modal.Title>
        {project.title}
        {' '}
        <span>
          <FaHandsHoldingCircle className="iconSize" />
          {' '}
          <span className="fs-6">
            {project.made}
          </span>
          {' '}
          By
        </span>
        {project.collaborator.map((name) => (
          <span key={uuid()} className="m-2 fs-6">
            <FaCircleUser className="iconSize" />
            {name}
          </span>
        ))}
      </Modal.Title>
      <button type="button" onClick={onClose} className="humIcon">
        <FaXmark />
      </button>

    </Modal.Header>
    <Modal.Body>
      <div>
        <Row className="border boxshadowRecent">
          <Col md={4} className="mx-0 px-0">
            <img
              src={project.image}
              alt={project.title}
              className="d-block w-100 h-100 projectItem projectImg"
            />
          </Col>
          <Col md={8} className="p-4">
            <div>
              <p>{project.description}</p>
              <ul className="techList d-flex flex-wrap justify-content-between">
                {project.technologies.map((tech) => (
                  <li key={tech} className="techStyle">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button type="button" className="button modalBtn m-2">
                  <FaArrowUpRightFromSquare />
                  {' '}
                  See Live
                </button>
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button type="button" className="button modalBtn m-2">
                  <FaGithub />
                  {' '}
                  Source
                </button>
              </a>
            </div>
          </Col>
        </Row>

      </div>
    </Modal.Body>
  </div>
);

ProjectModalContent.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    made: PropTypes.string.isRequired,
    collaborator: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

ProjectModalContent.defaultProps = {
  project: {
    title: '',
    image: '',
    description: '',
    technologies: [],
    link: '',
    github: '',
  },
};

export default ProjectCards;