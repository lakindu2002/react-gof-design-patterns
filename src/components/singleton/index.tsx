import { useEffect } from "react";
import { ComponentA } from "./component-a";
import { ComponentB } from "./component-b";
import userInformation from '../../store/custom-singleton';

export const Singleton = () => {

  useEffect(() => {
    userInformation.initializeUser({
      name: 'John Doe',
      id: '123',
      email: 'johndoe@gmail.com',
      token: '123456789'
    })
  }, []);

  return (
    <div className="App">
      <div>
        <ComponentA />
      </div>
      <div>
        <ComponentB />
      </div>
    </div>
  );
};
