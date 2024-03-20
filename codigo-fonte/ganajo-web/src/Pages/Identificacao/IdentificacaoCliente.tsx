import React, { useState } from 'react';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FormCadastro from './FormularioCadastroCliente.tsx';
import './identificacao.css';
import { IMaskInput } from 'react-imask';

const IdentificacaoCliente: React.FC = () => {
    const navigate = useNavigate();
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);

    const handleSearch = () => {
        // Lógica para verificar no banco de dados se o telefone existe
        const phoneExists = false; // Exemplo: assumindo que o telefone existe

        if (phoneExists) {
            // Redirecionar para a próxima página se o telefone for encontrado
            console.log('Telefone encontrado. Redirecionando...');
            navigate('/next-page');
        } else {
            // Exibir o formulário de inscrição
            setShowRegistrationForm(true);
        }
    };

    return (
        <>
            <div>
                <Form>
                    <Row className="justify-content-md-center telefoneHelpBlock" xs={1} md={2}>
                        <Col md={3}>
                            <Stack gap={2}>
                                <div className="p-1">
                                    <Form.Label id="tituloCadastro">
                                        <h3>Já possui cadastro?</h3>
                                    </Form.Label>
                                </div>
                                <div className="p-2">
                                    <Form.Text muted>
                                        Digite seu número de telefone que, de preferência, possua WhatsApp.
                                    </Form.Text>
                                </div>
                            </Stack>
                        </Col>

                        <Col md={3} id='stack-form-telefone'>
                            <Stack gap={2} >
                                <div className="p-2">
                                    <Form.Group>
                                        <Form.Control
                                            as={IMaskInput}
                                            mask="(00)00000-0000"
                                            type="text" />
                                    </Form.Group>
                                </div>
                                <div className="p-2">
                                    <Button onClick={handleSearch}>Pesquisar</Button>
                                </div>
                            </Stack>
                        </Col>
                    </Row>
                </Form>
            </div >
            <div>
                {showRegistrationForm && (
                    <FormCadastro />
                )}
            </div>
        </>
    );
};

export default IdentificacaoCliente;