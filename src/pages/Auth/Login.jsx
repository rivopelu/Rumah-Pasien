import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert1, BrandLogo, BtnComp, InputComp, LoadingComp } from "../../components";
import { FacebookLogo, GoogleLogo, LoginImgBg } from "../../img";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URI } from "../../utils/utils";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const messageRegister = localStorage.getItem('messageRegister')
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }


  const [mata, setMata] = useState(false)

  const onclickMata = () => {
    setMata(!mata)
  }


  //SUBMIT LOGIN
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/';
    navigate(path)
  }
  const submitLogin = () => {
    setLoading(true)
    const data = {
      email, password
    }

    axios.post(`${API_URI}/user/login`, data)
      .then(result => {
        if (result) {
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('nama', result.data.nama)
          localStorage.setItem('username', result.data.userName)
          localStorage.removeItem('messageRegister')
          setRedirect(true)
        }
        routeChange()
        console.log(result.data.token)

      })
      .catch(e => {
        setLoading(false)
        setError(e.response.data.message)
      })
  }
  return (
    <>
      {/* loading */}
      <div>
        {
          loading ? <LoadingComp /> : <div></div>
        }
      </div>

      {
        redirect && (
          <Navigate to='/' />
        )
      }
      <div className="loginPage flex flex-col lg:flex-row w-full  min-h-screen py-5">
        <div className="kirilg:w-[60%] ">
          <img src={LoginImgBg} alt="" />
        </div>
        <div className="kanan bg lg:w-[40%] flex flex-col items-center justify-between px-3 lg:px-40">
          <BrandLogo />
          <div className="tengah flex flex-col items-center w-full">
            <h1 className="my-3 font-bold" >Masuk</h1>
            {
              error && (
                (() => {

                  return (

                    <Alert1 title={error} />
                  )

                })()
              )
            }


            {(() => {
              if (messageRegister) {
                return (
                  <Alert1 title={messageRegister} className={'bg-ijo/50 mb-3 bg-green-500'} />
                )
              }
            })()}

            <div className="inputGroup flex items-center  w-full justify-center flex-col gap-3">
              <div className="w-full flex relative items-center">
                <InputComp type={'text'} className={'w-full  pr-8'} placeholder={'email/username'} value={email} onChange={onChangeEmail} />
                <FontAwesomeIcon icon={faUser} className={'text-gray-400  flex -translate-x-7'} />
              </div>
              <div className="w-full flex relative items-center">
                <InputComp type={mata ? 'text' : 'password'} className={'w-full  pr-8'} placeholder={'password'} value={password} onChange={onChangePassword} />
                <FontAwesomeIcon icon={mata ? faEye : faEyeSlash} onClick={onclickMata} className={'text-gray-400  flex -translate-x-7 cursor-pointer'} />
              </div>

            </div>

            <div className="atau my-5 text-gray-500">Atau</div>
            <div className="loginSosmed w-full flex flex-col gap-2">
              <div className="fb  relative items-center border border-gray-200 hover:border-gray-600 flex hover:-translate-y-1 duration-200 cursor-pointer rounded-md">
                <img src={GoogleLogo} className='w-7 absolute translate-x-5' alt="" />
                <div className="bg-white border text-center  py-2 rounded-md px-5 w-full  ">Masuk Dengan Google</div>
              </div>
              <div className="fb  relative items-center border border-gray-200 hover:border-gray-600 flex hover:-translate-y-1 duration-200 cursor-pointer rounded-md">
                <img src={FacebookLogo} className='w-7 absolute translate-x-5' alt="" />
                <div className="bg-white border text-center  py-2 rounded-md px-5 w-full  ">Masuk Dengan Facebook</div>
              </div>
            </div>
            <div className="py-3 text-blue-500 cursor-pointer">Lupa Password</div>

            <div className="flex w-full">
              <BtnComp onClick={submitLogin} title={'Masuk'} className={'w-full'} />
            </div>

            <div className="pt-3">Belum Memiliki Akun? <Link to={'/register'} className="text-blue-500 ">Silahkan Daftar</Link></div>

          </div>
          <div className="bawah text-sm pt-16 text-gray-500">	&copy; 2022 - hackAthon Manado - Tim Epasien</div>
        </div>
      </div>
    </>

  );
};

export default Login;
