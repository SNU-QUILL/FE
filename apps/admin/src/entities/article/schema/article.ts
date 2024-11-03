import { z } from "zod";
import { EARTICLE_CATEGORY } from "@/entities/article/model/article";

export const articleSchema = z.object({
  pictureUrl: z.string().url("Main Picture is required"),
  title: z.string().min(1, "Title is required"),
  contents: z.string().refine(
    val => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(val, "text/html");
      return doc.body.innerText.trim() !== "";
    },
    { message: "Contents is required" },
  ),
  authorId: z.number().positive("Author is required"),
  category: z.nativeEnum(EARTICLE_CATEGORY, {
    errorMap: () => ({ message: "Invalid category" }),
  }),
});

export type ArticleSchema = z.infer<typeof articleSchema>;

export const defaultArticleSchema: ArticleSchema = {
  title: "",
  contents: "",
  authorId: 0,
  category: EARTICLE_CATEGORY.FEATURES,
  pictureUrl: "",
};
