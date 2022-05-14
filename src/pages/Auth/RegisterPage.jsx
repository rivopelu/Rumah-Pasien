import { faEnvelope, faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert1, BrandLogo, BtnComp, InputComp, LoadingComp } from "../../components";
import { FacebookLogo, GoogleLogo, LoginImgBg, RegisterImg } from "../../img";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { API_URI } from "../../utils/utils";
const RegisterPage = () => {

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  // ALERT
  const [alert, setAlert] = useState('')


  const changeName = (e) => {
    const value = e.target.value
    setName(value)
    setError('')
  }

  const changeUserName = (e) => {
    const value = e.target.value
    setUserName(value)
    setError('')
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
    setError('')
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
    setError('')
  }

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
    setError('')
  }





  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/login';
    navigate(path)
  }
  const klikDaftar = () => {
    setLoading(true)
    const data = {
      name: name,
      username: userName,
      email: email,
      password: password
    }


    axios.post(`${API_URI}/user/register`, data)

      .then(result => {
        if (confirmPassword === password) {

          if (result) {
            if (result.data) {
              // setAlert(result.data.message)
              routeChange()
              localStorage.setItem('messageRegister', 'User Telah Berhasil Di Daftarkan, Silahkan Login')
            }
          }
          console.log(result.data)
        } else {
          setError('Password Tidak Sama')
        }
      })
      // setLoading(true)
      .catch(e => {
        setError(e.response.data.message)
        setLoading(false)
      })
  }




  const [mata, setMata] = useState(false)

  const onclickMata = () => {
    setMata(!mata)
  }
  return (
    <>
      <div>
        {
          loading ? <LoadingComp /> : <div></div>
        }
      </div>
      <div className="loginPage flex flex-col lg:flex-row-reverse -w-full min-h-screen py-5 items-center justify-center">
        <div className="kirilg:w-[60%] ">
          <img src={RegisterImg} alt="" />
        </div>
        <div className="kanan bg lg:w-[40%] flex flex-col items-center justify-between px-3 lg:px-40 mt-6 lg:mt-0">
          <BrandLogo />
          <div className="tengah flex flex-col items-center w-full">
            <h1 className="my-3 font-bold" >Daftar</h1>

            {/* ALERTTTTT */}

            {
              error && (

                <Alert1 className={'mb-3'} title={error} />
              )
            }
            {
              alert && (

                <Alert1 className={'mb-3'} title={error} />
              )
            }


            <div className="inputGroup flex items-center  w-full justify-center flex-col gap-3">
              <div className="w-full flex relative items-center">
                <InputComp type={'text'} value={name} onChange={changeName} className={'w-full  pr-8'} placeholder={'Nama Lengkap'} />
                <FontAwesomeIcon icon={faUser} className={'text-gray-400  flex -translate-x-7'} />
              </div>
              <div className="w-full flex relative items-center">
                <InputComp type={'text'} className={'w-full  pr-8'} placeholder={'UserName'} value={userName} onChange={changeUserName} />
                <FontAwesomeIcon icon={faUser} className={'text-gray-400  flex -translate-x-7'} />
              </div>
              <div className="w-full flex relative items-center">
                <InputComp type={'text'} className={'w-full  pr-8'} placeholder={'Email'} value={email} onChange={changeEmail} />
                <FontAwesomeIcon icon={faEnvelope} className={'text-gray-400  flex -translate-x-7'} />
              </div>
              <div className="w-full flex relative items-center">
                <InputComp type={mata ? 'text' : 'password'} className={'w-full  pr-8'} placeholder={'password'} value={password} onChange={changePassword} />
                <FontAwesomeIcon icon={mata ? faEye : faEyeSlash} onClick={onclickMata} className={'text-gray-400  flex -translate-x-7 cursor-pointer'} />
              </div>
              <div className="w-full flex relative items-center">
                <InputComp type={mata ? 'text' : 'password'} className={'w-full  pr-8'} placeholder={'Confirm password'} value={confirmPassword} onChange={changeConfirmPassword} />
                <FontAwesomeIcon icon={mata ? faEye : faEyeSlash} onClick={onclickMata} className={'text-gray-400  flex -translate-x-7 cursor-pointer'} />
              </div>

            </div>

            <div className="atau my-5 text-gray-500">Atau</div>
            <div className="loginSosmed w-full flex flex-col gap-2">
              <div className="fb  relative items-center border border-gray-200 hover:border-gray-600 flex hover:-translate-y-1 duration-200 cursor-pointer rounded-md">
                <img src={GoogleLogo} className='w-7 absolute translate-x-5' alt="" />
                <div className="bg-white border text-center  py-2 rounded-md px-5 w-full  ">Daftar Dengan Google</div>
              </div>
              <div className="fb  relative items-center border border-gray-200 hover:border-gray-600 flex hover:-translate-y-1 duration-200 cursor-pointer rounded-md">
                <img src={FacebookLogo} className='w-7 absolute translate-x-5' alt="" />
                <div className="bg-white border text-center  py-2 rounded-md px-5 w-full  ">Daftar Dengan Facebook</div>
              </div>
            </div>
            <div className="py-3 text-blue-500 cursor-pointer">Sudah Mempunyai Akun ? <Link className="text-blue-500" to={'/login'}>silahkan Login</Link></div>

            <div className="flex w-full">
              <BtnComp onClick={klikDaftar} title={'Masuk'} className={'w-full'} />
            </div>

          </div>
          <div className="bawah text-sm pt-16 text-gray-500">	&copy; 2022 - hackAthon Manado - Tim Epasien</div>
        </div>
      </div>
    </>

  )
}

export default RegisterPage