import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import { IMaskInput } from 'react-imask';

function onSubmit(values, actions) {
    console.log('SUBMIT', values);
}

function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            setFieldValue('logradouro', data.logradouro);
            setFieldValue('bairro', data.bairro);
            setFieldValue('cidade', data.localidade);
            setFieldValue('uf', data.uf);
        });
}

const FormCadastro = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        cep: yup.string().required("Campo obrigatório"),
        logradouro: yup.string().required("Campo obrigatório"),
        numero: yup.string().required("Campo obrigatório"),
        complemento: yup.string().required("Campo obrigatório"),
        bairro: yup.string().required("Campo obrigatório"),
        cidade: yup.string().required("Campo obrigatório"),
        uf: yup.string().required("Campo obrigatório"),
        primeiroNome: yup.string().required("Campo obrigatório"),
        sobrenome: yup.string().required("Campo obrigatório"),
        termos: yup.bool().required().oneOf([true], 'Os termos precisam ser aceitos'),
    });

    return (
        <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{
                cep: '',
                logradouro: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                uf: 'RJ',
                primeiroNome: '',
                sobrenome: '',
                termos: false,
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Stack gap={1} className="col-md-6 mx-auto">
                        <div className="p-1">
                            <Form.Group as={Col}>
                                <Form.Label>CEP</Form.Label>
                                <Form.Control
                                    as={IMaskInput}
                                    mask="00000-000"
                                    onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                                    type="text"
                                    name="cep"
                                    value={values.cep}
                                    isInvalid={!!errors.cep}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.cep}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>

                        <div className="p-1">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="logradouro"
                                    value={values.logradouro}
                                    onChange={handleChange}
                                    isInvalid={!!errors.logradouro}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.logradouro}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>

                        <div className="p-1">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>Número</Form.Label>
                                <Form.Control
                                    as={IMaskInput}
                                    mask="00000000"
                                    type="text"
                                    name="numero"
                                    value={values.numero}
                                    onChange={handleChange}
                                    isInvalid={!!errors.numero}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.numero}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>

                        <div className="p-1">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="complemento"
                                    value={values.complemento}
                                    onChange={handleChange}
                                    isInvalid={!!errors.complemento}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.complemento}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>

                        <div className="p-1">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="bairro"
                                    value={values.bairro}
                                    onChange={handleChange}
                                    disabled
                                />
                            </Form.Group>
                        </div>

                        <div className="p-1">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cidade"
                                    value={values.cidade}
                                    onChange={handleChange}
                                    disabled
                                />
                            </Form.Group>
                        </div>

                        <div className="p-1">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>UF</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="uf"
                                    value={values.uf}
                                    onChange={handleChange}
                                    disabled
                                />
                            </Form.Group>
                        </div>

                        <div className="p-1">
                            <Form.Group as={Col}>
                                <Form.Label>Primeiro nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="primeiroNome"
                                    onChange={handleChange}
                                    isValid={touched.primeiroNome && !errors.primeiroNome}
                                />
                                <Form.Control.Feedback></Form.Control.Feedback>
                            </Form.Group>
                        </div>

                        <div className="p-1">
                            <Form.Group as={Col} controlId="validationFormik02">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="sobrenome"
                                    onChange={handleChange}
                                    isValid={touched.sobrenome && !errors.sobrenome}
                                />
                                <Form.Control.Feedback></Form.Control.Feedback>
                            </Form.Group>
                        </div>

                        <div className="p-1">
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    name="termos"
                                    label="Os termos precisam ser aceitos"
                                    onChange={handleChange}
                                    isInvalid={!!errors.termos}
                                    feedback={errors.termos}
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                        </div>

                        <div className="p-1">
                            <Button type="submit">Submit form</Button>
                        </div>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
}

export default FormCadastro;