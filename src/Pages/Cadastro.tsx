import { StyledCadastro } from "./Cadastro.styles";
import { ReactComponent as Logo } from "../assets/logo.svg";

import { Link, useHistory } from "react-router-dom";
import { Button, Divider, TextField, InputAdornment } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { _UF } from "../types";
import { useGetEnderecoMutation } from "../store/cepApi";
import { useEffect } from "react";
//assets
import Visa from "../assets/Visa.png";
import AmEx from "../assets/AmEx.png";
import Mastercard from "../assets/Mastercard.png";
import Discovery from "../assets/Discovery.png";
import cvc from "../assets/cvc.png";
import { ReactComponent as Seta } from "../assets/Seta.svg";

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
  dataVencimento: string;
  cvc: string;
}

const Cadastro = () => {
  const form = useForm<dadosForm>({ mode: "all" });
  const history = useHistory();

  const [getAddress] = useGetEnderecoMutation();

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
    history.push("/sucesso");
  };

  return (
    <StyledCadastro>
      <header>
        <Link to="/" style={{ display: "flex", gap: "1rem" }}>
          <Seta /> Voltar para a página inicial
        </Link>
        <Logo className="logo" />
      </header>

      <main>
        <h1>Finalizar Contratação</h1>

        <form
          id="formulario"
          onSubmit={form.handleSubmit((data) => onSubmit(data))}
        >
          <h3>Dados pessoais</h3>
          <div id="field-dados-pessoais" className="form-field">
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
          <div id="field-dados-endereco" className="form-field">
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
          <div id="field-dados-pagamento" className="form-field">
            <div id="pagamento-1" className="form-field">
              <TextField
                label="Nome no cartão"
                color="secondary"
                fullWidth
                style={{ gridArea: "i1" }}
                {...form.register("nomeCartao")}
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <div id="pagamento-2" className="form-field">
              <TextField
                label="Número do cartão"
                color="secondary"
                fullWidth
                {...form.register("numCartao")}
                style={{ gridArea: "i2" }}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ display: "flex", gap: ".5rem" }}
                    >
                      <img src={Visa} alt="visa" />
                      <img src={Mastercard} alt="master" />
                      <img src={AmEx} alt="amex" />
                      <img src={Discovery} alt="discovery" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label={form.watch("cvc") !== "" ? "" : "CVC"}
                color="secondary"
                fullWidth
                {...form.register("cvc")}
                style={{ gridArea: "i4" }}
                InputLabelProps={{ shrink: false }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={cvc} alt="cvc" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label={form.watch("dataVencimento") !== "" ? "" : "mm/aa"}
                color="secondary"
                fullWidth
                style={{ gridArea: "i3" }}
                {...form.register("dataVencimento")}
                InputLabelProps={{ shrink: false }}
              />
            </div>
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
