import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signupApi({ email, password }),
    onSuccess: () => {
      toast.success("Account successfully created! Please verify the new account from the user's email address");
    },
    onError: error => {
      console.log(error);
      toast.error('Something went wrong while creating account');
    }
  });

  return { signup, isLoading };
}
