import { useContext, useState } from 'react';
import { LoginContext } from '@/components/UserForm';
import '../style.scss';

interface LoginItem {
  children: React.ReactNode;
  id: string;
  type: string;
  text: string;
}

export const UserInputItem = ({ children, id, type, text }: LoginItem) => {
  const { handleInput, handleError, inputValue, error } = useContext(LoginContext);

  const [isType, setIsType] = useState(type);
  const noEyeImage = '/assets/icons/icon-eye-no.svg';
  const eyeImage = '/assets/icons/icon-eye.svg';

  const [isPassword, setIsPassword] = useState(true);
  const [isEye, setIsEye] = useState(noEyeImage);

  const handleIsPassword = () => {
    setIsPassword(!isPassword);
    if (isPassword) {
      setIsType('string');
      setIsEye(eyeImage);
    } else {
      setIsType('password');
      setIsEye(noEyeImage);
    }
  };

  return (
    <div className="userinput-container">
      <label htmlFor={id} className="userinput-label">
        {children}
        <div className="userinput-box">
          <input
            id={id}
            type={isType}
            value={inputValue[id as keyof typeof inputValue]}
            placeholder={text}
            onChange={(e) => handleInput(e)}
            onBlur={() => handleError(id)}
          />
          {type === 'password' ? <img src={isEye} alt="비밀번호 표시" onClick={() => handleIsPassword()} /> : null}
        </div>
      </label>
      {error[id as keyof typeof error] ? (
        <div className="userinput-error">{error[id as keyof typeof error]}</div>
      ) : null}
    </div>
  );
};
