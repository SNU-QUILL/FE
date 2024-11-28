import { Helmet } from "react-helmet-async";

interface ISEOProps {
  title?: string;
  description?: string;
  pictureUrl?: string;
}

const SEO = ({ title, description, pictureUrl }: ISEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={pictureUrl} />
    </Helmet>
  );
};
export default SEO;
