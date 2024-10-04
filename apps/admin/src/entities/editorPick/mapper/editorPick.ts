import { EARTICLE_CATEGORY, EARTICLE_CATEGORY_LABEL } from "@/entities/article/model/article";

const categoryToLabel = (category: EARTICLE_CATEGORY) => {
  switch (category) {
    case EARTICLE_CATEGORY.FEATURES:
      return EARTICLE_CATEGORY_LABEL.FEATURES;
    case EARTICLE_CATEGORY.SNU_SOCIETY:
      return EARTICLE_CATEGORY_LABEL.SNU_SOCIETY;
    case EARTICLE_CATEGORY.ARTS_CULTURE:
      return EARTICLE_CATEGORY_LABEL.ARTS_CULTURE;
    case EARTICLE_CATEGORY.OPINION:
      return EARTICLE_CATEGORY_LABEL.OPINION;
    case EARTICLE_CATEGORY.SHORT_ARTICLES:
      return EARTICLE_CATEGORY_LABEL.SHORT_ARTICLES;
  }
};

export const editorPickMapper = {
  categoryToLabel,
};
