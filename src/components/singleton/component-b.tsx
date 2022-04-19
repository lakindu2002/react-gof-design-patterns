import { useEffect, useState } from "react";
import userRetriever from '../../store/custom-singleton';

export const ComponentB = () => {
  const [userInformation, setUserInformation] = useState<any>(undefined);
  useEffect(() => {
    setUserInformation(userRetriever.getUserInformation());
  }, [userInformation]);
  return (
    <div>
      <h1>Component B</h1>
      <p>
        {userInformation && (
          <>
            <span>Name: {userInformation.name}</span>
            <br />
            <span>Id: {userInformation.id}</span>
            <br />
            <span>Email: {userInformation.email}</span>
            <br />
            <span>Token: {userInformation.token}</span>
          </>
        )}
      </p>
    </div>
  );
};
