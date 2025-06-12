import CheckmarkIcon from 'public/icons/check_mark.svg';
import XMarkIcon from 'public/icons/x_mark.svg';

const PasswordCriteria = ({ password }: { password: string }) => {
  const { conditions, passwordIsValid } = getPasswordValidations(password);
  if (passwordIsValid) return <></>;
  return (
    <div className="flex flex-row items-center flex-wrap gap-x-3 gap-y-3 w-full mt-3">
      {conditions.map((condition) => (
        <div key={condition.title} className="flex flex-row items-center">
          {condition.matched ? (
            <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full  mr-1 bg-[#1DA01D]">
              <CheckmarkIcon width={12} height={12} fill={'#fff'} />
            </div>
          ) : (
            <div className="w-[18px] h-[18px] p-1 flex items-center justify-center rounded-full mr-1 bg-[#D80707]">
              <XMarkIcon width={12} height={12} fill={'white'} />
            </div>
          )}

          <p className="text-center text-dark text-[13px]">{condition.title}</p>
        </div>
      ))}
    </div>
  );
};
export const getPasswordValidations = (password: string) => {
    const hasCapital = /[A-Z]/.test(password);
    const hasSmall = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
  
    const specialCharacters = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#'"\\]/;
    const hasSpecialSymbol = specialCharacters.test(password);
    const hasAtLeastEightCharacters = password.length >= 8;
    const conditions = [
      {
        title: '8 characters',
        matched: hasAtLeastEightCharacters,
      },
      {
        title: 'An uppercase letter',
        matched: hasCapital,
      },
  
      {
        title: 'A number',
        matched: hasNumber,
      },
      {
        title: 'A lowercase letter',
        matched: hasSmall,
      },
      {
        title: 'A special character',
        matched: hasSpecialSymbol,
      },
    ];
    const passwordIsValid =
      hasAtLeastEightCharacters &&
      hasSpecialSymbol &&
      hasNumber &&
      hasCapital &&
      hasSmall;
  
    return {
      passwordIsValid,
      conditions,
    };
  };
export default PasswordCriteria;