import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const MeuRegistro = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function registrar() {
        const response = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario, senha, nome, email })
        });

        if (response.ok) {
            alert("Usuário cadastrado com sucesso!");
            navegarParaLogin();
        } else {
            alert('Erro ao cadastrar usuário!');
        }
    }

    function navegarParaLogin() {
        navigate("/");
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.titulo}>
                    <h2>Registro</h2>
                </div>
                <div className={styles.LoginForm}>
                    <label htmlFor="txtUsuario">Usuário</label>
                    <input
                        type="text"
                        name="txtUsuario"
                        id="txtUsuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <label htmlFor="txtSenha">Senha</label>
                    <input
                        type="password"
                        name="txtSenha"
                        id="txtSenha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <label htmlFor="txtNome">Nome</label>
                    <input
                        type="text"
                        name="txtNome"
                        id="txtNome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <label htmlFor="txtEmail">Email</label>
                    <input
                        type="email"
                        name="txtEmail"
                        id="txtEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                        <div className={styles.button} onClick={registrar}>
                            Registrar
                        </div>
                        <p>
                            Já tem uma conta?{" "}
                            <span className={styles.link} onClick={navegarParaLogin}>
                                Login
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeuRegistro;
