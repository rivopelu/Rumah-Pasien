import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrandLogo, BtnComp, InputComp } from "../../components";
import { FacebookLogo, GoogleLogo, LoginImgBg } from "../../img";

const Login = () => {
    const [mata, setMata] = useState(false)

    const onclickMata = ()=> {
        setMata(!mata)
    }
  return (
    <div className="loginPage flex flex-col lg:flex-row w-full  min-h-screen py-5">
      <div className="kirilg:w-[60%] ">
        <img src={LoginImgBg} alt="" />
      </div>
      <div className="kanan bg lg:w-[40%] flex flex-col items-center justify-between px-3 lg:px-40">
        <BrandLogo />
        <div className="tengah flex flex-col items-center w-full">
          <h1 className="my-3 font-bold" >Masuk</h1>
      
              <div className="inputGroup flex items-center  w-full justify-center flex-col gap-3">
                  <div className="w-full flex relative items-center">
                  <InputComp type={'text'} className={'w-full  pr-8'} placeholder={'email/username'}/>
                  <FontAwesomeIcon icon={faUser} className={'text-gray-400  flex -translate-x-7'}/>
                  </div>
                  <div className="w-full flex relative items-center">
                  <InputComp type={mata ? 'text' : 'password'} className={'w-full  pr-8'} placeholder={'password'}/>
                  <FontAwesomeIcon icon={mata ? faEye : faEyeSlash} onClick={onclickMata} className={'text-gray-400  flex -translate-x-7 cursor-pointer'}/>
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
                  <BtnComp title={'Masuk'} className={'w-full'}/>
              </div>

              <div className="pt-3">Belum Memiliki Akun? <Link to={'/register'} className="text-blue-500 ">Silahkan Daftar</Link></div>
    
        </div>
        <div className="bawah text-sm pt-16 text-gray-500">	&copy; 2022 - hackAthon Manado - Tim Epasien</div>
      </div>
    </div>
  );
};

export default Login;
