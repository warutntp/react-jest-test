import React, { useEffect, useState } from "react";
import axios from "axios";
import { add } from "../utils/cal";

interface AsyncProps {
  id: string;
}

interface User {
  name: string;
  age: number;
  address: string;
}

const Async: React.FC<AsyncProps> = ({ id }) => {
  const [user, setUser] = useState<User | null>(null);

  const getData = async (id: string) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await axios.get(`http://localhost:8081/api`);
    setUser(res.data);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div data-testid="name">{user.name}</div>
      <div>{user.age} years old</div>
      <div>Live in {user.address}</div>
      <div>Add: {add(6, 6)}</div>
    </div>
  );
};

export default Async;
