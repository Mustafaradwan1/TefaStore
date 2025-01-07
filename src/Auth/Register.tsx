import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import img from "../assets/auth/signup.jpg";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'اسم المستخدم يجب أن يحتوي على 3 أحرف على الأقل')
      .max(15, 'اسم المستخدم لا يجب أن يتجاوز 15 حرفًا')
      .required('اسم المستخدم مطلوب'),
    email: Yup.string()
      .email('البريد الإلكتروني غير صالح')
      .required('البريد الإلكتروني مطلوب'),
    password: Yup.string()
      .min(6, 'كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل')
      .required('كلمة المرور مطلوبة'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'كلمات المرور غير متطابقة')
      .required('تأكيد كلمة المرور مطلوب'),
  });
  const handleSubmit = (values: any, { setErrors, resetForm }: any) => {
    const usersData = JSON.parse(localStorage.getItem('usersData') || '[]');
    const existingUser = usersData.find((user: any) => user.email === values.email);
    if (existingUser) {
        setErrors({ email: 'البريد الإلكتروني موجود بالفعل' });
        return; 
    }
    usersData.push(values);
    localStorage.setItem('usersData', JSON.stringify(usersData));
    resetForm();
    navigate('/login'); 
  };

  return (
    <div className='mt-[100px] py-[100px]'>
      <div className="container m-auto">
        <div className='flex w-3/4 m-auto justify-center gap-5 shadow'>
          <div className="left p-5 w-[35%]">
            <Formik
              initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                status: false,
                cartData:[]
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({  errors, touched  }) => (
                <Form className='flex flex-col gap-3 w-full'>
                  <h2>Create an account</h2>
                  <div>
                    <label className='block' htmlFor="username">UserName</label>
                    <Field className={`border border-[#eee]  w-full px-3 py-1 rounded-lg  ${errors.username && touched.username ? "outline-[red] " : "outline-[green] "}`} type="text" name="username" id='username' />
                    <ErrorMessage name="username" component="div" className="error" />
                  </div>
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
                  <div>
                    <label className='block' htmlFor="confirmPassword">Confirm Password</label>
                    <Field className={`border border-[#eee]  w-full px-3 py-1 rounded-lg  ${errors.confirmPassword && touched.confirmPassword ? "outline-[red] " : "outline-[green] "}`} type="password" name="confirmPassword" id='confirmPassword' />
                    <ErrorMessage name="confirmPassword" component="div" className="error" />
                  </div>
                  <input type="submit" value="Create Account" className='bg-black py-2 text-white rounded-lg cursor-pointer' />
                </Form>
              )}
            </Formik>
            <p>Already have an account? <Link to="/Login">Sign in</Link></p>
          </div>
          <div className="right w-[65%]">
            <img src={img} className='w-full ' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
