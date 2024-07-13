import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const MeuLogin = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    async function logar() {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usuario, senha })
        });

        if (response.ok) {
            navigate("/home"); // Redireciona para a página inicial após o login
        } else {
            alert('Usuário ou senha incorretos!');
        }
    }

    function navegarPara() {
        navigate(`/registro`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.titulo}>
                    <h2>Login</h2>
                </div>
                <div className={styles.LoginForm}>
                    <label htmlFor="txtUsuario">Usuário</label>
                    <input
                        type="text"
                        name="usuario"
                        id="usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <label htmlFor="txtPass">Senha</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <div>
                        <div className={styles.button} onClick={logar}>
                            Login
                        </div>
                        <p className={styles.registerLink} onClick={navegarPara}>
                                Registre-se
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeuLogin;
