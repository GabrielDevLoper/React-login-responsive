import React from 'react';

import { Form } from '@unform/web';
import Input from '../../components/Input/Input';
import './styles.css';
import { FaUser, FaLock } from "react-icons/fa";


import Market from '../../assets/mobile.svg';
import Avatar from '../../assets/avatar.svg';
import wave from '../../assets/red-wave.png';

export default function Login() {
  function handleSubmit(data) {
    console.log(data)
  }

  return (
    <>
      <img className="wave" src={wave} alt="template" />
      <div className="container">
        <div className="img">
          <img src={Market} alt="mobile" />
        </div>
        <div className="login-container">
          <Form className="login-form" onSubmit={handleSubmit}>
            <img className="avatar" src={Avatar} alt="avatar" />
            <h2>Bem Vindo</h2>
            {/*input do usuario */}
            <div className="input-div one focus">
              <div className="i">
                <FaUser color="#f73378" />
              </div>
              <div>
                <Input placeholder="Usuário ou E-mail" className="login-input" name="email" type="email" />
              </div>
            </div>
            {/*input do password */}
            <div className="input-div two focus">
              <div className="i">
                <FaLock color="#f73378" />
              </div>
              <div>
                <Input  placeholder="Senha" className="login-input" name="password" type="password" />
              </div>
            </div>
            <a href="#">Esqueceu sua Senha?</a>
            <button className="btn" type="submit">Login</button>
          </Form>
        </div>
      </div>
    </>
  );

}