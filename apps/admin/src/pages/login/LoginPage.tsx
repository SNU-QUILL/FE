import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/stores/authStore";
import { Navigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { useLoginMutation } from "@/hooks/queries/auth";

interface LoginForm {
  username: string;
  password: string;
}

const LoginPage = () => {
  const authStore = useAuthStore();
  const { mutateAsync: loginAsync } = useLoginMutation();
  const form = useForm<LoginForm>({
    resolver: zodResolver(
      z.object({
        username: z
          .string()
          .min(2, "Username must be at least 2 characters")
          .max(20, "Username must be at most 20 characters"),
        password: z
          .string()
          .min(8, "Password must be at least 8 characters")
          .max(30, "Password must be at most 30 characters"),
      })
    ),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = async (values: LoginForm) => {
    /** TODO: 서버 요청 */
    await loginAsync({ id: values.username, password: values.password })
      .then(r => console.log(r))
      .catch(console.log);
  };

  const handleTestLogin = () => {
    authStore.setAccessToken("test");
  };

  return authStore.isLoggedIn() ? (
    <Navigate to='/' />
  ) : (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className='flex flex-col items-center justify-center h-full w-full gap-3'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <Input {...field} placeholder='Username' style={{ width: "320px" }} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <Input {...field} type='password' placeholder='Password' style={{ width: "320px" }} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <Button style={{ width: "320px" }}>Login</Button>
        </FormItem>
        <FormItem>
          <Label onClick={handleTestLogin} style={{ width: "320px" }}>
            테스트 로그인
          </Label>
        </FormItem>
      </form>
    </Form>
  );
};

export default LoginPage;
