import { useMutation } from "@tanstack/react-query";
import { signupFromBackend } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupFromBackend,
    onSuccess: () => {
      toast.success(
        "Account successfully create! Please verify the new account from the user's email address"
      );
    },
  });

  return { signup, isLoading };
}
