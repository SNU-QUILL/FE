import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";

interface FormValues {
  username: string;
  password: string;
}

const LoginPage = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Controller
          name='username'
          control={control}
          rules={{ required: "Username is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              style={{ marginBottom: "20px", width: "320px" }}
              label='Username'
              variant='outlined'
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              style={{ marginBottom: "20px", width: "320px" }}
              label='Password'
              variant='outlined'
              type='password'
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
            />
          )}
        />
        <Button
          style={{ marginTop: "20px", width: "320px" }}
          variant='contained'
          color='primary'
          type='submit'
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;
