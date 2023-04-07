import { useState } from "react";
import { PageLayout } from "../common/components/layouts/PageLayout";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Login = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(formDetails);
  }

  const { email, password } = formDetails;
  return (
    <PageLayout
      title="Login"
      className="flex flex-col items-center justify-center"
    >
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 grid gap-4">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) =>
              setFormDetails({ ...formDetails, email: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) =>
              setFormDetails({ ...formDetails, password: e.target.value })
            }
          />
        </FormControl>

        <Button type="submit" colorScheme="green">
          Login
        </Button>
      </form>
    </PageLayout>
  );
};

export default Login;
