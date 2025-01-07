import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import img from "../assets/auth/signup.jpg";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


interface LoginProps {
  onLogin: () => void;
}
const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('البريد الإلكتروني غير صالح')
      .required('البريد الإلكتروني مطلوب'),
    password: Yup.string()
      .min(6, 'كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل')
      .required('كلمة المرور مطلوبة')
  });
  const handleSubmit = (values: any, { setErrors, resetForm }: any) => {
    const usersData = JSON.parse(localStorage.getItem('usersData') || '[]');
    const existingUser = usersData.find((user: any) => user.email === values.email && user.password === values.password);
    if (existingUser) {
      existingUser.status = true
      localStorage.setItem('usersData', JSON.stringify(usersData));
      navigate('/'); 
      resetForm();
      onLogin();
      return; 
    }
    setErrors({ email: 'البريد الإلكتروني او الباسورد خطاء' });
  };

  return (
    <div className='mt-[100px] py-[100px]'>
      <div className="container m-auto">
        <div className='flex w-3/4 m-auto justify-center gap-5 shadow'>
          <div className="left p-5 w-[35%]">
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({  errors, touched  }) => (
                <Form className='flex flex-col gap-3 w-full'>
                  <h2>Create an account</h2>
                  <div>
                    <label className='block' htmlFor="email">Email</label>
                    <Field className={`border border-[#eee]  w-full px-3 py-1 rounded-lg  ${errors.email && touched.email ? "outline-[red] " : "outline-[green] "}`} type="email" name="email" id='email' />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                  <div>
                    <label className='block' htmlFor="password">Password</label>
                    <Field className={`border border-[#eee]  w-full px-3 py-1 rounded-lg  ${errors.password && touched.password ? "outline-[red] " : "outline-[green] "}`} type="password" name="password" id='password' />
                    <ErrorMessage name="password" component="div" className="error" />
                  </div>
                  <input type="submit" value="login" className='bg-black py-2 text-white rounded-lg cursor-pointer' />
                </Form>
              )}
            </Formik>
            <p>Create Account? <Link to="/Register">Sign up now</Link></p>
          </div>
          <div className="right w-[65%]">
            <img src={img} className='w-full ' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
