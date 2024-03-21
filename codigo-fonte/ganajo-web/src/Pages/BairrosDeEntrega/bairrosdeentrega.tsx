// BairrosDeEntrega.tsx

import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { MdOutlineSearch, MdSearch } from 'react-icons/md';
import { Bairro } from '../../DTOs/Bairro.ts';
import generateBairros from './Components/data.ts';
import './bairrosdeentrega.module.scss';
import BairroComponent from './Components/bairrocomponent.tsx';

const BairrosDeEntrega: React.FC = () => {
  const [bairros, setBairros] = useState<Bairro[]>([]);
  const [screenBairros, setScreenBairros] = useState<Bairro[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newBairroName, setNewBairroName] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedBairro, setSelectedBairro] = useState<Bairro | null>(null);
  const [editedBairroName, setEditedBairroName] = useState<string>('');
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    const mockBairros = generateBairros();
    setBairros(mockBairros);
    setScreenBairros(mockBairros);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    setScreenBairros(
      bairros?.filter(
        (bairro) =>
          bairro.Nome.toLowerCase().includes(value.toLowerCase())
      ) || []
    );
  }, [bairros]);

  const handleAddBairro = useCallback(() => {
    if (newBairroName.trim() !== '') {
      const newBairro: Bairro = { Id: bairros.length + 1, Nome: newBairroName };
      setBairros([...bairros, newBairro]);
      setScreenBairros([...screenBairros, newBairro]);
      setNewBairroName('');
    } else {
      alert('Por favor, insira um nome válido para o novo bairro.');
    }
  }, [bairros, screenBairros, newBairroName]);

  const handleShowModal = useCallback((bairro: Bairro) => {
    setSelectedBairro(bairro);
    setEditedBairroName(bairro.Nome);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedBairro(null);
    setEditedBairroName('');
    setShowModal(false);
  }, []);

  const handleSaveChanges = useCallback(() => {
    if (selectedBairro) {
      const updatedBairros = bairros.map((bairro) =>
        bairro.Id === selectedBairro.Id ? { ...bairro, Nome: editedBairroName } : bairro
      );
      setBairros(updatedBairros);
      setScreenBairros(updatedBairros);
      setShowModal(false);
    }
  }, [bairros, selectedBairro, editedBairroName]);

  const handleDeleteBairro = useCallback(() => {
    if (selectedBairro) {
      const updatedBairros = bairros.filter((bairro) => bairro.Id !== selectedBairro.Id);
      setBairros(updatedBairros);
      setScreenBairros(updatedBairros);
      setShowDeleteModal(false);
    }
  }, [bairros, selectedBairro]);

  return (
    <Container fluid className="bairros-container">
      <Row className="search-row">
        <Col  className="search-col">
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Buscar bairro..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <Button variant="outline-secondary">
              <MdSearch />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="add-bairro-row">
        <Col xs={12} className="add-bairro-col">
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Novo bairro..."
              value={newBairroName}
              onChange={(e) => setNewBairroName(e.target.value)}
            />
            <Button onClick={handleAddBairro} variant="outline-secondary" className="add-button">Adicionar</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="card-row">
        {screenBairros.map((bairro) => (
          <Col key={bairro.Id} xs={12} md={6} lg={4}>
            <BairroComponent
              bairro={bairro}
              onEdit={() => handleShowModal(bairro)}
              onDelete={() => {
                setSelectedBairro(bairro);
                setShowDeleteModal(true);
              }}
            />
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar Bairro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Novo nome do bairro..."
            value={editedBairroName}
            onChange={(e) => setEditedBairroName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir o bairro "{selectedBairro?.Nome}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDeleteBairro}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BairrosDeEntrega;
