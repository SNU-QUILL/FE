import { api } from "@/api/api";
import { IOperations } from "@/api/operations";
import { useQuery } from "@tanstack/react-query";

// Path parameter 추출을 위한 타입 유틸리티
type ExtractPathParams<T extends string> = T extends `${string}:${infer Param}/${infer Rest}`
  ? Param | ExtractPathParams<Rest>
  : T extends `${string}:${infer Param}`
    ? Param
    : never;
// URL에 path parameter가 있는지 체크하는 타입
type HasPathParams<T extends string> = T extends `${string}:${string}` ? true : false;

// Required Record 타입으로 변환 (선택적이 아닌 필수값으로)
type PathParamsObject<T extends string> = Record<ExtractPathParams<T>, string | number>;

export const useGetQuery = <T extends keyof IOperations>(
  path: T,
  params?: IOperations[T]["request"],
  ...args: HasPathParams<T> extends true ? [pathParams: PathParamsObject<T>] : []
) => {
  let urlPath: string = path;
  const pathParams = args[0];
  // Replace path variables with actual values
  if (pathParams) {
    Object.entries(pathParams).forEach(([key, value]) => {
      urlPath = urlPath.replace(`:${key}`, String(value));
    });
  }

  return useQuery({
    queryKey: [...urlPath.split("/"), params],
    queryFn: async () => {
      const response = await api.get<IOperations[T]["response"]>(urlPath, {
        params,
      });
      return response.data;
    },
  });
};
