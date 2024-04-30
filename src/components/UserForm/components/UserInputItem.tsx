// import { useContext, useState } from 'react';
// import { LoginContext } from '@/components/UserForm';
// import '../style.scss';

// interface LoginItem {
//   children: React.ReactNode;
//   id: string;
//   type: string;
//   text: string;
// }

// export const UserInputItem = ({ children, id, type, text }: LoginItem) => {
//   const { handleInput, handleError, inputValue, error } = useContext(LoginContext);

//   const [isType, setIsType] = useState(type);

//   const [isPassword, setIsPassword] = useState(true);

//   const handleIsPassword = () => {
//     setIsPassword(!isPassword);
//     if (isPassword) {
//       setIsType('string');
//     } else {
//       setIsType('password');
//     }
//   };

//   return (
//     <div className="input-container">
//       <label htmlFor={id} className="label">
//         {children}
//         <div className="userinput-box">
//           <input
//             id={id}
//             type={isType}
//             value={inputValue[id as keyof typeof inputValue]}
//             placeholder={text}
//             onChange={(e) => handleInput(e)}
//             onBlur={() => handleError(id)}
//           />
//           {type === 'password' ? (
//             <img src="/assets/icons/icon-eye.svg" alt="비밀번호 표시" onClick={() => handleIsPassword()} />
//           ) : null}
//         </div>
//       </label>
//       {error[id as keyof typeof error] ? <div className="error">{error[id as keyof typeof error]}</div> : null}
//     </div>
//   );
// };
