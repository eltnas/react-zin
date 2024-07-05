import React from "react";
import styles from "./style.module.css";

const MeuLogin = () =>{
    return(
        <div className={ styles.container }>

            <div className={ styles.content }>
                <div className={ styles.titulo}>
                    <h2>Login</h2>
                </div>
                <div className={ styles.LoginForm }>
                    <label for={'txtUsuario'}>Usuário</label>
                    <input type={'text'} name={'txtUsuario'} id={'txtUsuario'} />
                    <label for={'txtPass'}>Senha</label>
                    <input type={'password'} name={'txtSenha'} id={'txtSenha'} />

                    <div>
                        <button>
                            Login
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MeuLogin;