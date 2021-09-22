import { StyledCadastro } from "./Cadastro.styles";
import { ReactComponent as Logo } from "../assets/logo.svg";

import { Link } from "react-router-dom";
import { Button, Divider, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { _UF } from "../types";
import { cepApi, useGetEnderecoMutation } from "../store/cepApi";
import { useEffect } from "react";
import { watch } from "fs";

interface dadosForm {
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
  //end
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  cidade: string;
  estado: _UF;
  //pags
  nomeCartao: string;
  numCartao: string;
  dataVencimento: Date;
  cvc: string;
}

const Cadastro = () => {
  const form = useForm<dadosForm>({ mode: "all" });
  const [getAddress, { isLoading }] = useGetEnderecoMutation();

  const carregarEndereco = async () => {
    try {
      const result = await getAddress(form.getValues("cep")).unwrap();
      const { uf, localidade, logradouro, erro } = result;

      if (!erro) {
        form.setValue("estado", uf as _UF);
        form.setValue("cidade", localidade);
        form.setValue("endereco", logradouro);
        console.log("success");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    form.watch("cep").length === 8 && carregarEndereco();
  }, [form.watch("cep")]);

  const onSubmit = (data: dadosForm) => {
    console.log(JSON.stringify(data));
  };

  return (
    <StyledCadastro>
      <header>
        <Link to="/">Voltar para a página inicial</Link>
        <Logo className="logo" />
      </header>

      <main>
        <h1>Finalizar Contratação</h1>

        <form
          id="formulario"
          onSubmit={form.handleSubmit((data) => onSubmit(data))}
        >
          <h3>Dados pessoais</h3>
          <div id="field-dados-pessoais">
            <TextField
              label="Nome"
              color="secondary"
              fullWidth
              {...form.register("nome", { required: "Campo obrigatório!" })}
              error={!!form.formState.errors.nome}
              helperText={form.formState.errors.nome?.message}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Sobrenome"
              color="secondary"
              fullWidth
              {...form.register("sobrenome", {
                required: "Campo obrigatório!",
              })}
              error={!!form.formState.errors.sobrenome}
              helperText={form.formState.errors.sobrenome?.message}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Telefone"
              color="secondary"
              fullWidth
              {...form.register("telefone", {
                required: "Campo obrigatório!",
              })}
              error={!!form.formState.errors.telefone}
              helperText={form.formState.errors.telefone?.message}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Email"
              color="secondary"
              fullWidth
              {...form.register("email", {
                required: "Campo obrigatório!",
              })}
              error={!!form.formState.errors.email}
              helperText={form.formState.errors.email?.message}
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <Divider light />

          <h3>Endereço de cobrança</h3>
          <div id="field-dados-endereco">
            <TextField
              label="Cep"
              color="secondary"
              fullWidth
              style={{ gridArea: "cep" }}
              {...form.register("cep")}
              InputLabelProps={{ shrink: true }}
            />
            <a href="" style={{ gridArea: "link", lineHeight: "3rem" }}>
              Não sei meu cep
            </a>
            <TextField
              label="Endereço"
              color="secondary"
              fullWidth
              style={{ gridArea: "end" }}
              {...form.register("endereco")}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Número"
              color="secondary"
              fullWidth
              style={{ gridArea: "num" }}
              {...form.register("numero")}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Complemento"
              color="secondary"
              fullWidth
              style={{ gridArea: "com" }}
              {...form.register("complemento")}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Cidade"
              color="secondary"
              style={{ gridArea: "cid" }}
              fullWidth
              {...form.register("cidade")}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Estado"
              color="secondary"
              fullWidth
              style={{ gridArea: "uf" }}
              {...form.register("estado")}
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <Divider light />

          <div id="detalhes">
            <h3>Detalhes da contratação</h3>
            <div id="inner-div">
              <span>Plano 120 - lorem ipsum sit amet</span>
              <span>
                <strong>$00,00/</strong>mês
              </span>
            </div>
          </div>

          <h3>Pagamento</h3>
          <div id="field-dados-pagamento">
            <TextField
              label="Nome no cartão"
              color="secondary"
              fullWidth
              {...form.register("nomeCartao")}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Número do cartão"
              color="secondary"
              fullWidth
              {...form.register("numCartao")}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label={form.watch("cvc") !== "" ? "" : "CVC"}
              color="secondary"
              fullWidth
              {...form.register("cvc")}
              InputLabelProps={{ shrink: false }}
            />

            <TextField
              label={form.watch("dataVencimento") !== undefined ? "" : "mm/aa"}
              color="secondary"
              fullWidth
              {...form.register("dataVencimento")}
              InputLabelProps={{ shrink: false }}
            />
          </div>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{ fontSize: "larger", width: "50%", alignSelf: "center" }}
          >
            Finalizar E Contratar
          </Button>
        </form>
      </main>
    </StyledCadastro>
  );
};

export default Cadastro;