import { Form, FormField, FormItem, FormMessage } from "@repo/ui";
import { Input } from "@repo/ui";
import { Button } from "@repo/ui";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/shared/store/authStore";
import { Navigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/entities/auth/api/auth";
import {
  defaultLoginFormSchema,
  LoginFormSchema,
  loginFormSchema,
} from "@/entities/login/schema/login";

const LoginPage = () => {
  const authStore = useAuthStore();
  const { mutateAsync: loginAsync } = useLoginMutation();
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: defaultLoginFormSchema,
  });

  const handleLogin = async (values: LoginFormSchema) => {
    await loginAsync({ email: values.username, password: values.password });
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
      </form>
    </Form>
  );
};

export default LoginPage;
