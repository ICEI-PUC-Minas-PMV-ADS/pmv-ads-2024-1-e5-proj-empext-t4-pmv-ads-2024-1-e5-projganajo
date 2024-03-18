import React from 'react'

interface FormaPagamentoProps {
    FormaPagamento : string
}

const FormaPagamento = ({FormaPagamento} : FormaPagamentoProps) => {
  return (
    <div>{FormaPagamento}</div>
  )
}

export default FormaPagamento